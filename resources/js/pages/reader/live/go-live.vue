<template>
  <card class="p-6 m-4">
    <div class="row">
      <div class="col-lg-12">
        <h4 class="mb-3">
          Go Live
        </h4>
        <p class="mb-5">
          Necessitatibus eius consequatur ex aliquid fuga eum quidem.
        </p>
      </div>
    </div>
    <div class="mb-2">
      <div class="text-center">
        <!-- chat box starts here -->
        <div class="container pb-2">
          <div class="row justify-content-center">
            <div class="col-md-12">
              <div class="row">
                <div class="col-md-7 video-div">
                  <!-- video chat div here -->
                  <div class="video grid grid-flow-row bg-black">
                    <div id="my-video-chat-window" />
                  </div>
                </div>
                <div class="col-md-5">
                  <div class="card">
                    <div class="viewer-header px-2 py-1">
                      <p class="m-0 px-2 viewers">
                        <span v-show="currentStatus ==='ON_GOING'"> <fa icon="eye" /> {{ viewerCount }} </span>
                        <span v-show="currentStatus !=='ON_GOING'"> Offline </span>
                      </p>
                    </div>
                    <div class="card-body p-0">
                      <div class="message-box">
                        <div v-show="showMessages" class="message-div p-4">
                          <div v-for="message in tc.messagesArray" :key="message.id" class="row msg">
                            <div v-if="message.author == user.username" class="media-body">
                              <p class="message-host-author">
                                {{ message.author }}
                              </p>
                              <br>
                              <p class="message-host-body">
                                {{ message.body }}
                              </p>
                            </div>
                            <div v-else class="media-body">
                              <p class="message-author">
                                {{ message.author }}
                              </p>
                              <br>
                              <p class="message-body">
                                {{ message.body }}
                              </p>
                            </div>
                          </div>
                        </div>
                        <p v-if="notification">
                          {{ notificationMsg }}
                        </p>
                      </div>
                      <!-- <input v-if="userNotJoined" class="form-control" type="text" v-model="username" v-on:keyup.13="connectClientWithUsername" placeholder="Your username"> -->
                      <input v-if="!userNotJoined && currentStatus ==='ON_GOING'" v-model="message" class="form-control" type="text" placeholder="Your message" @keyup.13="handleInputTextKeypress">
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- <star-rating/> -->
        <div class="m-3">
          <b-button v-if="!userNotJoined && (loggedUser !== username) && currentStatus ==='ON_GOING'" variant="primary" @click="$bvModal.show('rate-modal');">
            <b-icon-star-fill /> Rate me
          </b-button>
        </div>
        <div>
          <button
            v-show="currentStatus !=='ON_GOING' && (loggedUser === tc.username)"
            class="broadcast btn btn-danger btn-lg"
            @click="getVideoToken(); connectClientWithUsername();"
          >
            Start Broadcasting
          </button>
          <button
            v-if="currentStatus ==='ON_GOING' && loggedUser === tc.username"
            class="btn btn-danger btn-lg"
            @click="stopBroadcasting();"
          >
            Stop Broadcasting
          </button>
        </div>
      </div>
    </div>

    <!-- MODAL HERE -->
    <b-modal id="rate-modal" hide-footer>
      <template #modal-title>
        <span class="h3 text-center"> Rate  <strong> {{ username }} </strong> </span>
      </template>
      <div class="d-block text-center">
        <b-row class="p-3 text-center">
          <b-col>
            <star-rating v-model="ratingCount" />
          </b-col>
        </b-row>
        <b-row class="p-2">
          <b-col class="d-flex justify-content-center">
            <b-button
              variant="link"
              size="sm"
              @click="()=>{
                $bvModal.hide('rate-modal');
              }"
            >
              Cancel
            </b-button>

            <b-button
              variant="danger"
              size="sm"
              class="float-right"
              @click="()=>{
                handleSubmitRating();
                $bvModal.hide('rate-modal');
              }"
            >
              Submit
            </b-button>
          </b-col>
        </b-row>
      </div>
    </b-modal>
  </card>
</template>

<script>
import { mapGetters } from 'vuex'
import StarRating from 'vue-star-rating'
import { swalOops, swalSuccess } from '../../../helpers'
var moment = require('moment')
const axios = require('axios')
const _ = require('lodash')

export default {
  name: 'VideoChat',

  components: {
    StarRating
  },

  data: function () {
    return {
      tc: {
        accessManager: null,
        messagingClient: null,
        channel: [],
        username: '',
        channelArray: [],
        currentChannel: null,
        generalChannel: null,
        activeChannelIndex: null,
        messagesArray: []
      },
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
      accessToken: '',
      roomSid: '',
      dataSid: '',
      name: this.$route.params.roomName,
      currentStatus: 'not-started',
      videoRoom: [],
      viewerCount: 0,
      showRateModal: false,
      ratingCount: 0,
      roomId: '',
      loggedUser: ''
    }
  },

  computed: mapGetters({
    user: 'auth/user'
  }),

  beforeMount: function () {
    console.log('this.user.username', this.user)
    // ASSIGNING USERNAME
    this.loggedUser = this.user?.username ? this.user?.username : ''
    this.user ? this.connectClientWithUsername() : this.joinAsParticipant()

    // CHECKING IF BROADCAST IS ONGOING

    axios.get('/api/video/' + this.name)
      .then((response) => {
        if (response.data.success) {
          this.roomId = response.data.data.id
          this.dataSid = response.data.data.room_sid
          this.currentStatus = response.data.data.room_status
          // _this.username !== _this.name ? this.joinAsParticipant() : this.joinAsParticipant();
        }
      })
      .catch((err) => {
        console.log(err.response)
      })
      // this.connectClientWithUsername();
  },

  methods: {

    // MODAL METHODS

    resetRatingForms () {
      let vm = this
      vm.ratingCount = 0
    },

    handleSubmitRating () {
      let vm = this

      let data = {
        'reference_id': vm.roomId,
        'category': 'LIVE',
        'rate': vm.ratingCount
      }

      axios.post(`/api/rating/save`, data).then((response) => {
        swalSuccess('Rating submitted!')
        this.resetRatingForms()
      })
    },

    // CHAT METHODS
    connectClientWithUsername () {
      if (this.loggedUser) {
        this.tc.username = this.loggedUser
        this.userNotJoined = false
        axios.get('/api/video/view/' + this.name)

        this.fetchAccessToken(this.tc.username, this.connectMessagingClient)
        console.log('USERNAME', this.tc.username)
      } else {
        alert('NOT LOGGED IN')
      }
    },
    fetchAccessToken (username, handler) {
      axios.post('/api/video/chat', {
        identity: username,
        device: 'browser'
      })
        .then(function (response) {
          handler(response.data)
        })
        .catch(function (error) {
          console.log(error)
        })
    },
    connectMessagingClient (token) {
      // Initialize the Chat messaging client
      let vm = this

      this.tc.accessManager = new Twilio.AccessManager(token)

      Twilio.Chat.Client.create(token).then(function (client) {
        vm.tc.messagingClient = client
        vm.updateConnectedUI()
        vm.loadChannelList(vm.joinGeneralChannel)
        vm.tc.messagingClient.on('channelAdded', _.throttle(vm.loadChannelList))
        vm.tc.messagingClient.on('channelRemoved', _.throttle(vm.loadChannelList))
        vm.tc.messagingClient.on('tokenExpired', vm.refreshToken)
      })
    },
    updateConnectedUI () {
      this.connected = true
    },
    refreshToken () {
      this.fetchAccessToken(this.tc.username, vm.setNewToken)
    },
    setNewToken (tokenResponse) {
      this.tc.accessManager.updateToken(tokenResponse.token)
    },
    loadChannelList (handler) {
      if (this.tc.messagingClient === undefined) {
        console.log('Client is not initialized')
        return
      }
      this.getVisibleChannels(this.tc.messagingClient, handler)
    },
    getVisibleChannels (messagingClient, handler) {
      let vm = this

      messagingClient.getPublicChannelDescriptors().then(function (channels) {
        vm.tc.channelArray = vm.sortChannelsByName(channels.items)

        vm.tc.channelArray.forEach(vm.addChannel)
        if (typeof handler === 'function') {
          handler()
        }
      })
    },
    sortChannelsByName (channels) {
      let vm = this

      return channels.sort(function (a, b) {
        if (a.friendlyName === vm.name) {
          return -1
        }
        if (b.friendlyName === vm.name) {
          return 1
        }
        return a.friendlyName.localeCompare(b.friendlyName)
      })
    },
    joinGeneralChannel () {
      let vm = this
      console.log('Attempting to join "general" chat channel...', vm.name)
      if (vm.tc.generalChannel === null) {
        // If it doesn't exist, let's create it
        vm.tc.messagingClient.createChannel({
          uniqueName: vm.name,
          friendlyName: vm.name
        }).then(function (channel) {
          vm.tc.generalChannel = channel
          vm.loadChannelList(vm.joinGeneralChannel)
        })
      } else {
        console.log('Found general channel:', vm.tc.generalChannel)
        vm.setupChannel(vm.tc.generalChannel)
      }
    },
    addChannel (channel) {
      let vm = this
      if (channel.uniqueName === vm.name) {
        this.tc.generalChannel = channel
      }
    },
    setupChannel (channel) {
      let vm = this
      return vm.leaveCurrentChannel()
        .then(function () {
          return vm.initChannel(channel)
        })
        .then(function (_channel) {
          vm.tc.currentChannel = _channel
          vm.loadMessages()
          return vm.joinChannel(_channel)
        })
        .then(vm.initChannelEvents)
    },
    leaveCurrentChannel () {
      let vm = this
      if (this.tc.currentChannel) {
        return this.tc.currentChannel.leave().then(function (leftChannel) {
          console.log('left ' + leftChannel.friendlyName)
          leftChannel.removeListener('messageAdded', vm.addMessageToList)
          leftChannel.removeListener('typingStarted', vm.showTypingStarted)
          leftChannel.removeListener('typingEnded', vm.hideTypingStarted)
          leftChannel.removeListener('memberJoined', vm.notifyMemberJoined)
          leftChannel.removeListener('memberLeft', vm.notifyMemberLeft)
        })
      } else {
        console.log('resolving')
        return Promise.resolve()
      }
    },
    initChannel (channel) {
      console.log('Initialized channel ' + channel.friendlyName)
      return this.tc.messagingClient.getChannelBySid(channel.sid)
    },
    initChannelEvents () {
      console.log(this.tc.currentChannel.friendlyName + ' ready.')
      this.tc.currentChannel.on('messageAdded', this.addMessageToList)
      this.tc.currentChannel.on('typingStarted', this.showTypingStarted)
      this.tc.currentChannel.on('typingEnded', this.hideTypingStarted)
      this.tc.currentChannel.on('memberJoined', this.notifyMemberJoined)
      this.tc.currentChannel.on('memberLeft', this.notifyMemberLeft)
      // $inputText.prop('disabled', false).focus();
    },
    showTypingStarted (member) {
      console.log(member.identity + ' is typing...')
      this.notificationMsg = member.identity + ' is typing...'
      this.notification = true
    },
    hideTypingStarted (member) {
      this.notificationMsg = ''
      this.notification = false
    },
    notifyMemberJoined (member) {
      console.log('joining')
      console.log(member.identity + ' joined the channel')
      // notify(member.identity + ' joined the channel')
    },
    notifyMemberLeft (member) {
      console.log('leaving')
      console.log(member)
      console.log(member.identity + ' left the channel')
      // notify(member.identity + ' left the channel');
    },
    notify (message) {
      var row = $('<div>').addClass('col-md-12')
      row.loadTemplate('#member-notification-template', {
        status: message
      })
      tc.$messageList.append(row)
      scrollToMessageListBottom()
    },
    joinChannel (_channel) {
      let vm = this
      return _channel.join()
        .then(function (joinedChannel) {
          console.log('Joined channel ' + joinedChannel.friendlyName)
          // vm.updateChannelUI(_channel);
          vm.tc.currentChannel = _channel
          vm.loadMessages()
          return joinedChannel
        })
        .catch(function (err) {

          // alert("Couldn't join channel " + _channel.friendlyName + ' because ' + err);
        })
    },
    // updateChannelUI(selectedChannel) {
    //     let channelLists = this.$refs.channelList;

    //     let activeChannelList = channelLists.filter(function(element) {
    //     return element.dataset.sid === selectedChannel.sid;
    //     });

    //     activeChannelList = activeChannelList[0];
    //     if (this.tc.currentChannelContainer === undefined && selectedChannel.friendlyName === vm.name) {

    //     this.tc.currentChannelContainer = activeChannelList;
    //     }

    //     this.tc.currentChannelContainer.classList.remove('selected-channel');
    //     this.tc.currentChannelContainer = activeChannelList;
    //     this.tc.currentChannelContainer.classList.add('selected-channel');
    // },
    loadMessages () {
      let vm = this
      this.tc.currentChannel.getMessages(50).then(function (messages) {
        vm.showMessages = true
        vm.tc.messagesArray = messages.items
        vm.userNotJoined = false
        // messages.items.forEach(vm.addMessageToList);
      })
    },
    addMessageToList (message) {
      console.log(message)
      this.loadMessages()
    },
    handleInputTextKeypress () {
      let vm = this
      this.tc.currentChannel.sendMessage(this.message)
      this.message = ''
      // setTimeout(function(){
      //    vm.loadMessages();
      //  }, 3000);
    },
    handleNewChannelInputKeypress (event) {
      let vm = this
      if (this.newChannel == '') {
        alert('Channel name cannot be empty')
        return
      }
      this.tc.messagingClient.createChannel({
        friendlyName: this.newChannel
      }).then(function (channel) {
        console.log('Created channel')
        vm.loadChannelList(channel)
      }).then(this.hideAddChannelInput)
      this.newChannel = ''
    },
    selectChannel (channel) {
      let channelSid = channel.sid
      var selectedChannel = this.tc.channelArray.filter(function (channel) {
        return channel.sid === channelSid
      })[0]
      if (selectedChannel === this.tc.currentChannel) {
        return
      }
      this.setupChannel(selectedChannel)
    },
    hideAddChannelInput () {
      this.showAddChannelInput = false
    },
    createChannel () {
      this.showAddChannelInput = true
    },
    deleteChannel () {
      // if (this.tc.currentChannel.sid === this.tc.generalChannel.sid) {
      //     alert('You cannot delete the general channel');
      //     return;
      // }
      this.tc.currentChannel.delete().then(function (channel) {
        console.log('channel: ' + channel.friendlyName + ' deleted')
        // setupChannel(this.tc.generalChannel);
      })
    },

    // VIDEO METHODS
    getVideoToken: function () {
      console.log('Video chat room loading...')

      const _this = this

      // Request a new token
      axios.get(`/api/video/access_token/${this.name}`)
        .then(function (response) {
          _this.accessToken = response.data
          _this.currentStatus = 'ON_GOING'
        })
        .catch(function (error) {
          console.log(error)
        })
        .then(function () {
          _this.connectToRoom()
        })
    },
    joinAsParticipant: function () {
      console.log('Video chat room loading...')

      const _this = this

      // Request a new token
      axios.get(`/api/video/access_token/${this.name}`)
        .then(function (response) {
          _this.accessToken = response.data
        })
        .catch(function (error) {
          console.log(error)
        })
        .then(function () {
          _this.joinToRoom()
        })
    },
    connectToRoom: function () {
      const axios = require('axios')

      const { connect, createLocalTracks } = require('twilio-video')

      connect(this.accessToken, { name: this.name }).then(room => {
        console.log(`Successfully joined a Room: ${room}`)
        console.log('Data::', room.sid)
        this.dataSid = room.sid
        this.videoRoom = room

        let request = {
          room_name: this.name,
          room_sid: room.sid,
          room_status: 'ON_GOING'
        }

        axios.post(`/api/video/history/save`, request)
          .then((response) => {
            console.log(response)
          })
          .catch((err) => {
            console.log(err)
          })

        const videoChatWindow = document.getElementById('my-video-chat-window')
        this.viewerCount = room.participants.size

        let localTrack
        createLocalTracks().then(track => {
          console.log(track)
          localTrack = track
          track.forEach((media) => {
            videoChatWindow.appendChild(media.attach())
          })
        })

        room.on('participantConnected', participant => {
          console.log(`Participant "${participant.identity}" connected`)
          this.viewerCount = room.participants.size

          // participant.tracks.forEach(publication => {
          //     if (publication.isSubscribed) {
          //         const track = publication.track;
          //         videoChatWindow.appendChild(track.attach());
          //     }
          // });

          // participant.on('trackSubscribed', track => {
          //     videoChatWindow.appendChild(track.attach());
          // });
        })

        room.on('disconnected', room => {
          // Detach the local media elements
          console.log('Host disconnected')
          console.log('localParticipant', room.localParticipant)
          console.log('videoChatWindow', videoChatWindow.childNodes[0])
          const child = videoChatWindow.lastElementChild
          videoChatWindow.removeChild(child)
          // videoChatWindow.innerHTML ="";
          console.log('DC TRACKS', localTrack)
          localTrack.forEach(track => {
            track.stop()
            track.detach()
          })
        })

        room.on('participantDisconnected', room => {
          // Detach the local media elements
          console.log('Someone disconnected')
          this.viewerCount = this.viewerCount - 1
          room.localParticipant.tracks.forEach(publication => {
            const attachedElements = publication.track.detach()
            attachedElements.forEach(element => element.remove())
          })
        })
      }, error => {
        console.error(`Unable to connect to Room: ${error.message}`)
        swalOops(`Please make sure that your camera and microphone is connected, and have permissions`)
        this.stopBroadcasting()
      })
    },

    joinToRoom: function () {
      const { connect } = require('twilio-video')

      connect(this.accessToken, { name: this.name, video: false, audio: false }).then(room => {
        console.log(`Successfully joined a Room: ${room}`)
        console.log('Data::', room.sid)
        this.dataSid = room.sid

        const videoChatWindow = document.getElementById('my-video-chat-window')

        const localParticipant = room.localParticipant
        console.log(`Connected to the Room as LocalParticipant "${localParticipant.identity}"`)

        room.participants.forEach(participant => {
          console.log('existing')
          participant.tracks.forEach(publication => {
            if (publication.track) {
              videoChatWindow.appendChild(publication.track.attach())
            }
          })

          this.viewerCount = room.participants.size
        })

        room.on('participantConnected', participant => {
          console.log('new')
          this.viewerCount = room.participants.size
          console.log(`Participant "${participant.identity}" connected`)

          participant.tracks.forEach(publication => {
            if (publication.isSubscribed) {
              const track = publication.track
              videoChatWindow.appendChild(track.attach())
            }
          })

          participant.on('trackSubscribed', track => {
            videoChatWindow.appendChild(track.attach())
          })
        })

        room.on('participantDisconnected', room => {
          // Detach the local media elements
          this.viewerCount = this.viewerCount - 1
          console.log('Someone disconnected')
          room.participants.tracks.forEach(publication => {
            const attachedElements = publication.track.detach()
            attachedElements.forEach(element => element.remove())
          })
        })
      }, error => {
        console.error(`Unable to connect to Room: ${error.message}`)
      })
    },

    stopBroadcasting: function () {
      let vm = this
      vm.accessToken = ''
      vm.currentStatus = 'COMPLETED'
      vm.userNotJoined = true
      vm.showMessages = false
      vm.deleteChannel()
      vm.tc.accessManager = null
      vm.tc.messagingClient = null
      vm.tc.channel = []
      vm.tc.channelArray = null
      vm.tc.generalChannel = null
      vm.tc.activeChannelIndex = null
      vm.tc.messagesArray = []

      let request = {
        room_name: vm.name,
        room_sid: vm.dataSid,
        room_status: 'COMPLETED'
      }

      axios.post(`/api/video/history/save`, request)
        .then((response) => {
          console.log(response)
          // vm.currentStatus = 'COMPLETED'
          // vm.userNotJoined = true
          // vm.showMessages = false
          vm.videoRoom.disconnect()
          // vm.deleteChannel()
          // vm.username = vm.user?.username ? vm.user?.username : ''
          // vm.tc.accessManager = null
          // vm.tc.messagingClient = null
          // vm.tc.channel = []
          // vm.tc.username = '';
          // vm.tc.channelArray = null
          // vm.tc.generalChannel = null
          // vm.tc.activeChannelIndex = null
          // vm.tc.messagesArray = []

          // list.removeChild(list.childNodes);
          // console.log("CONSOLE LIST", list.childNodes);
        })
        .catch((err) => {
          console.log(err)
        })
    }

  }
}
</script>
<style>
.video{
    float:left;
}

.message-box{
    height: 410px;
}

.message-div{
    height: 410px;
    width:100%;
    overflow-y: scroll;
}

.broadcast{
    display:grid;
    margin:auto;
}

.video-div{
    text-align: center;
    height: 500px;
}

.message-host-body{
    font-size: 14px;
    color:white;
    background-color: #373E4C;
    border-radius: 10px;
    float:right;
    padding: 5px 15px;
    text-align:left;
    margin-bottom: 20px;
}

.message-host-author{
    font-size: 12px;
    color:gray;
    float:right;
    margin-bottom: 0px;
}

.message-time{
    font-size: 12px;
    color:gray;
    float:right;
    margin-bottom: 20px;
}

.message-body{
    font-size: 14px;
    color:black;
    background-color: #E4E6EB;
    border-radius: 10px;
    float:left;
    padding: 5px 15px;
    text-align:left;
    margin-bottom: 20px;
}

.message-author{
    font-size: 12px;
    color:gray;
    float:left;
    margin-bottom: 0px;
}

.message-time{
    font-size: 12px;
    color:gray;
    float:left;
    margin-bottom: 20px;
}

.video{
    contain:cover;
}

.viewer-header{
    border-bottom: 1px solid #DFDFDF;
    text-align: left;
}

.viewers{
    color:white;
    background-color: #DC3545;
    width: 70px;
    text-align:center;
    border-radius: 5px;
}

/* width */
::-webkit-scrollbar {
  width: 10px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #f1f1f1;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #888;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555;
}

</style>
