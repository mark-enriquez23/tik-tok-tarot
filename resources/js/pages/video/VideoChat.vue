<template>
    <div class="p-5 text-center">

        <h1 class="text-2xl mb-4">Laravel Video Chat</h1>
        <!-- video chat div here -->
        <div class="grid grid-flow-row grid-cols-3 grid-rows-3 gap-4 bg-black">
            <div id="my-video-chat-window">
              <button @click='getVideoToken' v-if="!accessToken && name"> Start Broadcasting </button>
            </div>
        </div>


        <!-- chat box starts here -->
        <div class="row justify-content-center">
            <div class="col-md-10">
                <div class="card">
                    <div class="row">
                        <div class="card-body">
                          <div class="col-md-4 channel-list" v-show="connected">
                            <ul>
                                <li v-for="(channel) in tc.channelArray" :key="channel.id" ref="channelList" :data-sid="channel.sid">
                                <a href="#!" @click="selectChannel(channel)"> {{channel.friendlyName}} </a>


                                </li>
                                <a href="#!" @click="createChannel"> Add Channel</a>
                                <input v-if="showAddChannelInput" class="form-control" type="text" v-model="newChannel" v-on:keyup.13="handleNewChannelInputKeypress" placeholder="New Channel">
                            </ul>
                        </div>
                        <div class="col-md-8">
                            <div class="message-box">
                              <div class="message-div" v-show="showMessages">
                              <div v-for="message in tc.messagesArray" :key="message.id" class="row msg">
                                  <div class="media-body">
                                      <small class="pull-right time"><i class="fa fa-clock-o"></i>{{moment(message.timestamp).fromNow()}}</small>
                                      <h5 class="media-heading">{{message.author}}</h5>
                                      <small class="col-sm-11">{{message.body}}</small>
                                  </div>
                              </div>
                              </div>
                              <p v-if="notification">{{notificationMsg}}</p>
                              </div>
                              <input v-if="userNotJoined" class="form-control" type="text" v-model="username" v-on:keyup.13="connectClientWithUsername" placeholder="Your username">
                              <input v-else class="form-control" type="text" v-model="message" v-on:keyup.13="handleInputTextKeypress" placeholder="Your message">
                          </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'video-chat',
    data: function () {
      return {
        accessToken: '',
        roomSid: '',
        name: this.$route.params.roomName,
        username: '',
        connected: false,
        selected: false,
        showMessages: false,
        moment: moment,
        message: null,
        userNotJoined: true,
        newChannel: '',
        showAddChannelInput: false,
        notification: false,
        notificationMsg: '',
        tc: {
            accessManager: null,
            messagingClient: null,
            channel: [],
            generalChannel: null,
            username: '',
            channelArray: [],
            currentChannel: null,
            activeChannelIndex: null,
            messagesArray: [],
        },

      }
    },
    methods : {
    //CHAT METHODS
    connectClientWithUsername(){
      if (this.username == '') {
        alert('Username cannot be empty');
        return;
      }
      this.tc.username = this.username;
      this.fetchAccessToken(this.tc.username, this.connectMessagingClient);
    },
    fetchAccessToken(username, handler) {
        let vm = this;
        axios.post('/api/video/chat', {
            identity: this.tc.username,
            device: 'browser'
        })
        .then(function (response) {
            handler(response.data);
            vm.username = '';
        })
        .catch(function (error) {
            console.log(error);
        });
    },
    connectMessagingClient(token) {
        // Initialize the Chat messaging client
        let vm = this;

        this.tc.accessManager = new Twilio.AccessManager(token);

        new Twilio.Chat.Client.create(token).then(function(client) {
            vm.tc.messagingClient = client;
            vm.updateConnectedUI();
            vm.loadChannelList(vm.joinGeneralChannel);
            vm.tc.messagingClient.on('channelAdded', _.throttle(vm.loadChannelList));
            vm.tc.messagingClient.on('channelRemoved', _.throttle(vm.loadChannelList));
            vm.tc.messagingClient.on('tokenExpired', vm.refreshToken);
        });
    },
    updateConnectedUI(){
        this.connected = true;
    },
    refreshToken(){
        this.fetchAccessToken(this.tc.username, vm.setNewToken);
    },
    setNewToken(tokenResponse) {
        this.tc.accessManager.updateToken(tokenResponse.token);
    },

    loadChannelList(handler){
        if (this.tc.messagingClient === undefined) {
            console.log('Client is not initialized');
            return;
        }
        this.getVisibleChannels(this.tc.messagingClient, handler);
    },
    getVisibleChannels(messagingClient, handler){
        let vm = this;

        messagingClient.getPublicChannelDescriptors().then(function(channels) {
            vm.tc.channelArray = vm.sortChannelsByName(channels.items);

            vm.tc.channelArray.forEach(vm.addChannel);
            if (typeof handler === 'function') {
            handler();
            }
        });
    },
    sortChannelsByName(channels) {
        return channels.sort(function(a, b) {

            if (a.friendlyName === 'general') {
            return -1;
            }
            if (b.friendlyName === 'General Channel') {
            return 1;
            }
            return a.friendlyName.localeCompare(b.friendlyName);
        });
    },

    joinGeneralChannel() {
        console.log('Attempting to join "general" chat channel...');
        let vm = this;
        if (this.tc.generalChannel == null) {
            // If it doesn't exist, let's create it
            this.tc.messagingClient.createChannel({
            uniqueName: 'general',
            friendlyName: 'General Channel'
            }).then(function(channel) {
            console.log('Created general channel');
            vm.tc.generalChannel = channel;
            vm.loadChannelList(vm.joinGeneralChannel);

            });
        }else {
            console.log('Found general channel:');
            this.setupChannel(this.tc.generalChannel);
        }
    },
    addChannel(channel){
        if (channel.uniqueName === 'general') {
            this.tc.generalChannel = channel;
        }
    },

    setupChannel(channel){
        let vm = this;
        return this.leaveCurrentChannel()
            .then(function() {
            return vm.initChannel(channel);
            })
            .then(function(_channel) {
            return vm.joinChannel(_channel);
            })
            .then(this.initChannelEvents);
    },
    leaveCurrentChannel() {
        let vm = this;
        if (this.tc.currentChannel) {
            return this.tc.currentChannel.leave().then(function(leftChannel) {
            console.log('left ' + leftChannel.friendlyName);
            leftChannel.removeListener('messageAdded', vm.addMessageToList);
            leftChannel.removeListener('typingStarted', vm.showTypingStarted);
            leftChannel.removeListener('typingEnded', vm.hideTypingStarted);
            leftChannel.removeListener('memberJoined', vm.notifyMemberJoined);
            leftChannel.removeListener('memberLeft', vm.notifyMemberLeft);
            });
        } else {
            console.log("resolving");
            return Promise.resolve();
        }
    },
    initChannel(channel) {
        console.log('Initialized channel ' + channel.friendlyName);
        return this.tc.messagingClient.getChannelBySid(channel.sid);
    },
    initChannelEvents() {
        console.log(this.tc.currentChannel.friendlyName + ' ready.');
        this.tc.currentChannel.on('messageAdded', this.addMessageToList);
        this.tc.currentChannel.on('typingStarted', this.showTypingStarted);
        this.tc.currentChannel.on('typingEnded', this.hideTypingStarted);
        this.tc.currentChannel.on('memberJoined', this.notifyMemberJoined);
        this.tc.currentChannel.on('memberLeft', this.notifyMemberLeft);
        // $inputText.prop('disabled', false).focus();
    },
    showTypingStarted(member) {
        console.log(member.identity + ' is typing...');
        this.notificationMsg = member.identity + ' is typing...';
        this.notification = true;
    },
    hideTypingStarted(member) {
        this.notificationMsg = '';
        this.notification = false;
    },
    notifyMemberJoined(member) {
        console.log("joining");
        console.log(member.identity + ' joined the channel');
        // notify(member.identity + ' joined the channel')
    },
    notifyMemberLeft(member) {
        console.log("leaving");
        console.log(member);
        console.log(member.identity + ' left the channel');
        // notify(member.identity + ' left the channel');
    },
    notify(message) {
        var row = $('<div>').addClass('col-md-12');
        row.loadTemplate('#member-notification-template', {
        status: message
        });
        tc.$messageList.append(row);
        scrollToMessageListBottom();
    },
    joinChannel(_channel) {
        console.log(_channel);
        let vm = this;
        return _channel.join()
            .then(function(joinedChannel) {
            console.log('Joined channel ' + joinedChannel.friendlyName);
            vm.updateChannelUI(_channel);
            vm.tc.currentChannel = _channel;
            vm.loadMessages();
            return joinedChannel;
            })
            .catch(function(err) {
            alert("Couldn't join channel " + _channel.friendlyName + ' because ' + err);
            });
    },
    updateChannelUI(selectedChannel) {
        let channelLists = this.$refs.channelList;

        let activeChannelList = channelLists.filter(function(element) {
        return element.dataset.sid === selectedChannel.sid;
        });

        activeChannelList = activeChannelList[0];
        if (this.tc.currentChannelContainer === undefined && selectedChannel.uniqueName === 'general') {

        this.tc.currentChannelContainer = activeChannelList;
        }

        this.tc.currentChannelContainer.classList.remove('selected-channel');
        this.tc.currentChannelContainer = activeChannelList;
        this.tc.currentChannelContainer.classList.add('selected-channel');
    },
    loadMessages() {
        let vm = this;
        this.tc.currentChannel.getMessages(50).then(function (messages) {
            vm.showMessages = true;
            vm.tc.messagesArray = messages.items;
            vm.userNotJoined = false
            // messages.items.forEach(vm.addMessageToList);
        });
    },
    addMessageToList(message) {
        console.log(message);
        this.loadMessages();
    },
    handleInputTextKeypress() {
        let vm = this;
        this.tc.currentChannel.sendMessage(this.message);
        this.message = '';
        // setTimeout(function(){
        //    vm.loadMessages();
        //  }, 3000);
    },

    handleNewChannelInputKeypress(event) {
        let vm = this;
        if (this.newChannel == '') {
            alert('Channel name cannot be empty');
            return;
        }
        this.tc.messagingClient.createChannel({
            friendlyName: this.newChannel
        }).then(function(channel) {
            console.log('Created channel');
            vm.loadChannelList(channel);
        }).then(this.hideAddChannelInput);
        this.newChannel = '';
    },

    selectChannel(channel) {
        let channelSid = channel.sid;
        var selectedChannel = this.tc.channelArray.filter(function(channel) {
            return channel.sid === channelSid;
        })[0];
        if (selectedChannel === this.tc.currentChannel) {
            return;
        }
        this.setupChannel(selectedChannel);
    },
    hideAddChannelInput(){
        this.showAddChannelInput = false;
    },
    createChannel(){
        this.showAddChannelInput = true;
    },

    deleteChannel() {
        if (this.tc.currentChannel.sid === this.tc.generalChannel.sid) {
            alert('You cannot delete the general channel');
            return;
        }
        this.tc.currentChannel.delete().then(function(channel) {
            console.log('channel: '+ channel.friendlyName + ' deleted');
            setupChannel(this.tc.generalChannel);
        });
    },

    //VIDEO METHODS
    getVideoToken : function () {
        console.log('Video chat room loading...');

        const _this = this
        const axios = require('axios')

        // Request a new token
        axios.get(`/api/video/access_token/${this.name}`)
            .then(function (response) {
                _this.accessToken = response.data
            })
            .catch(function (error) {
                console.log(error);
            })
            .then(function () {
                _this.connectToRoom();
            });
        }
    ,
    joinAsParticipant : function () {
        console.log('Video chat room loading...');

        const _this = this
        const axios = require('axios')

        // Request a new token
        axios.get(`/api/video/access_token/${this.name}`)
            .then(function (response) {
                _this.accessToken = response.data
            })
            .catch(function (error) {
                console.log(error);
            })
            .then(function () {
                _this.joinToRoom();
            });
        }
    ,
    connectToRoom : function () {

        const axios = require('axios');

        const { connect, createLocalVideoTrack,  } = require('twilio-video');

        connect( this.accessToken, { name:this.name }).then(room => {

            console.log(`Successfully joined a Room: ${room}`);
            console.log("Data::", room.sid);
            this.roomSid = room.sid;

            let request = {
              room_name: this.name,
              room_sid: room.sid,
              room_status: "ON_GOING"
            }

            axios.post(`/api/video/history/save`, request)
            .then((response) =>{
              console.log(response);
            })
            .catch((err)=>{
              console.log(err);
            })

            const videoChatWindow = document.getElementById('my-video-chat-window');

            createLocalVideoTrack().then(track => {
                videoChatWindow.appendChild(track.attach());
            });

            room.on('participantConnected', participant => {
                    console.log(`Participant "${participant.identity}" connected`);

                    participant.tracks.forEach(publication => {
                        if (publication.isSubscribed) {
                            const track = publication.track;
                            videoChatWindow.appendChild(track.attach());
                        }
                    });

                    participant.on('trackSubscribed', track => {
                        videoChatWindow.appendChild(track.attach());
                    });
                });

        }, error => {
            console.error(`Unable to connect to Room: ${error.message}`);
        });
      },

      joinToRoom : function () {

      const axios = require('axios')

      const { connect } = require('twilio-video');

      connect( this.accessToken, { name:this.name, video:false, audio:false }).then(room => {

          console.log(`Successfully joined a Room: ${room}`);
          console.log("Data::", room.sid);
          this.roomSid = room.sid;

          const videoChatWindow = document.getElementById('my-video-chat-window');

          const localParticipant = room.localParticipant;
          console.log(`Connected to the Room as LocalParticipant "${localParticipant.identity}"`);

          room.participants.forEach(participant => {
            participant.tracks.forEach(publication => {
              if (publication.track) {
                videoChatWindow.appendChild(publication.track.attach());
              }
            });

          participant.on('trackSubscribed', track => {
              videoChatWindow.appendChild(track.attach());
            });

          });

        }, error => {
            console.error(`Unable to connect to Room: ${error.message}`);
        });
      }

    },



    mounted : function () {
      const axios = require('axios');
      const _this = this;
      console.log("NAME:",_this.name)

      axios.get("/api/video/"+_this.name)
      .then((response) =>{
        console.log(response);
        this.joinAsParticipant();
      })
      .catch((err)=>{
        console.log(err.response);
      })
    }
}
</script>
