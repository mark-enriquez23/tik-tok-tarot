<template>
    <div class="p-5 text-center">
        <h1 class="text-2xl mb-4">Laravel Video Chat</h1>
        <div class="grid grid-flow-row grid-cols-3 grid-rows-3 gap-4 bg-black">
            <div id="my-video-chat-window">
              <button @click='getAccessToken' v-if="!accessToken && name"> Start Broadcasting </button>
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
      }
    },
    methods : {
    getAccessToken : function () {
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
    connectToRoom : function () {

        const axios = require('axios');

        const { connect, createLocalVideoTrack } = require('twilio-video');

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
      }
    },

    mounted : function () {
      const axios = require('axios');
      console.log(this.name)

      axios.get(`/api/video/${this.name}`)
      .then((response) =>{
        console.log(response);
      })
      .catch((err)=>{
        console.log(err.response);
      })
        // this.getAccessToken()
    }
}
</script>
