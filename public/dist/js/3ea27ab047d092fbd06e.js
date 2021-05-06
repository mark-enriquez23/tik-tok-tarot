(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[41],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/video/VideoChat.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/video/VideoChat.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: 'video-chat',\n  data: function data() {\n    return {\n      accessToken: '',\n      roomSid: '',\n      name: this.$route.params.roomName\n    };\n  },\n  methods: {\n    getAccessToken: function getAccessToken() {\n      console.log('Video chat room loading...');\n\n      var _this = this;\n\n      var axios = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\"); // Request a new token\n\n\n      axios.get(\"/api/video/access_token/\".concat(this.name)).then(function (response) {\n        _this.accessToken = response.data;\n      })[\"catch\"](function (error) {\n        console.log(error);\n      }).then(function () {\n        _this.connectToRoom();\n      });\n    },\n    joinAsParticipant: function joinAsParticipant() {\n      console.log('Video chat room loading...');\n\n      var _this = this;\n\n      var axios = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\"); // Request a new token\n\n\n      axios.get(\"/api/video/access_token/\".concat(this.name)).then(function (response) {\n        _this.accessToken = response.data;\n      })[\"catch\"](function (error) {\n        console.log(error);\n      }).then(function () {\n        _this.joinToRoom();\n      });\n    },\n    connectToRoom: function connectToRoom() {\n      var _this2 = this;\n\n      var axios = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n\n      var _require = __webpack_require__(/*! twilio-video */ \"./node_modules/twilio-video/es5/index.js\"),\n          connect = _require.connect,\n          createLocalVideoTrack = _require.createLocalVideoTrack;\n\n      connect(this.accessToken, {\n        name: this.name\n      }).then(function (room) {\n        console.log(\"Successfully joined a Room: \".concat(room));\n        console.log(\"Data::\", room.sid);\n        _this2.roomSid = room.sid;\n        var request = {\n          room_name: _this2.name,\n          room_sid: room.sid,\n          room_status: \"ON_GOING\"\n        };\n        axios.post(\"/api/video/history/save\", request).then(function (response) {\n          console.log(response);\n        })[\"catch\"](function (err) {\n          console.log(err);\n        });\n        var videoChatWindow = document.getElementById('my-video-chat-window');\n        createLocalVideoTrack().then(function (track) {\n          videoChatWindow.appendChild(track.attach());\n        });\n        room.on('participantConnected', function (participant) {\n          console.log(\"Participant \\\"\".concat(participant.identity, \"\\\" connected\"));\n          participant.tracks.forEach(function (publication) {\n            if (publication.isSubscribed) {\n              var track = publication.track;\n              videoChatWindow.appendChild(track.attach());\n            }\n          });\n          participant.on('trackSubscribed', function (track) {\n            videoChatWindow.appendChild(track.attach());\n          });\n        });\n      }, function (error) {\n        console.error(\"Unable to connect to Room: \".concat(error.message));\n      });\n    },\n    joinToRoom: function joinToRoom() {\n      var _this3 = this;\n\n      var axios = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n\n      var _require2 = __webpack_require__(/*! twilio-video */ \"./node_modules/twilio-video/es5/index.js\"),\n          connect = _require2.connect;\n\n      connect(this.accessToken, {\n        name: this.name,\n        video: false,\n        audio: false\n      }).then(function (room) {\n        console.log(\"Successfully joined a Room: \".concat(room));\n        console.log(\"Data::\", room.sid);\n        _this3.roomSid = room.sid;\n        var videoChatWindow = document.getElementById('my-video-chat-window'); // createLocalVideoTrack().then(track => {\n        //     videoChatWindow.appendChild(track.attach());\n        // });\n\n        var localParticipant = room.localParticipant;\n        console.log(\"Connected to the Room as LocalParticipant \\\"\".concat(localParticipant.identity, \"\\\"\"));\n        room.participants.forEach(function (participant) {\n          console.log(\"Participant \\\"\".concat(participant.identity, \"\\\" is connected to the Room\"));\n          console.log(participant);\n          console.log(participant.tracks !== undefined); // if(participant.tracks.length)\n          // participant.tracks.forEach(track => {\n          //     videoChatWindow.appendChild(track.attach());\n          // });\n        }); // room.on('participantConnected', participant => {\n        //         console.log(`Participant \"${participant.identity}\" connected`);\n        //         participant.tracks.forEach(publication => {\n        //             if (publication.isSubscribed) {\n        //                 const track = publication.track;\n        //                 videoChatWindow.appendChild(track.attach());\n        //             }\n        //         });\n        //         participant.on('trackSubscribed', track => {\n        //             videoChatWindow.appendChild(track.attach());\n        //         });\n        //     });\n      }, function (error) {\n        console.error(\"Unable to connect to Room: \".concat(error.message));\n      });\n    }\n  },\n  mounted: function mounted() {\n    var _this4 = this;\n\n    var axios = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n\n    console.log(this.name);\n    axios.get(\"/api/video/\".concat(this.name)).then(function (response) {\n      console.log(response);\n\n      _this4.joinAsParticipant();\n    })[\"catch\"](function (err) {\n      console.log(err.response);\n    }); // this.getAccessToken()\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL3BhZ2VzL3ZpZGVvL1ZpZGVvQ2hhdC52dWU/ZGU0YiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFZQTtBQUNBLG9CQURBO0FBRUE7QUFDQTtBQUNBLHFCQURBO0FBRUEsaUJBRkE7QUFHQTtBQUhBO0FBS0EsR0FSQTtBQVNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFDQSxvRkFKQSxDQU1BOzs7QUFDQSw4REFDQSxJQURBLENBQ0E7QUFDQTtBQUNBLE9BSEEsV0FJQTtBQUNBO0FBQ0EsT0FOQSxFQU9BLElBUEEsQ0FPQTtBQUNBO0FBQ0EsT0FUQTtBQVVBLEtBbEJBO0FBb0JBO0FBQ0E7O0FBRUE7O0FBQ0Esb0ZBSkEsQ0FNQTs7O0FBQ0EsOERBQ0EsSUFEQSxDQUNBO0FBQ0E7QUFDQSxPQUhBLFdBSUE7QUFDQTtBQUNBLE9BTkEsRUFPQSxJQVBBLENBT0E7QUFDQTtBQUNBLE9BVEE7QUFVQSxLQXJDQTtBQXVDQTtBQUFBOztBQUVBOztBQUZBLHFCQUlBLG1GQUpBO0FBQUEsVUFJQSxPQUpBLFlBSUEsT0FKQTtBQUFBLFVBSUEscUJBSkEsWUFJQSxxQkFKQTs7QUFNQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBLGdDQURBO0FBRUEsNEJBRkE7QUFHQTtBQUhBO0FBTUEsdURBQ0EsSUFEQSxDQUNBO0FBQ0E7QUFDQSxTQUhBLFdBSUE7QUFDQTtBQUNBLFNBTkE7QUFRQTtBQUVBO0FBQ0E7QUFDQSxTQUZBO0FBSUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUxBO0FBT0E7QUFDQTtBQUNBLFdBRkE7QUFHQSxTQWJBO0FBZUEsT0F6Q0EsRUF5Q0E7QUFDQTtBQUNBLE9BM0NBO0FBNENBLEtBekZBO0FBMkZBO0FBQUE7O0FBRUE7O0FBRkEsc0JBSUEsbUZBSkE7QUFBQSxVQUlBLE9BSkEsYUFJQSxPQUpBOztBQU1BO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFFQSw4RUFOQSxDQVFBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0Esd0RBSEEsQ0FLQTtBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBVkEsRUFmQSxDQTZCQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQSxPQTVDQSxFQTRDQTtBQUNBO0FBQ0EsT0E5Q0E7QUErQ0E7QUFoSkEsR0FUQTtBQStKQTtBQUFBOztBQUNBOztBQUNBO0FBRUEsK0NBQ0EsSUFEQSxDQUNBO0FBQ0E7O0FBQ0E7QUFDQSxLQUpBLFdBS0E7QUFDQTtBQUNBLEtBUEEsRUFKQSxDQVlBO0FBQ0E7QUE1S0EiLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/IS4vcmVzb3VyY2VzL2pzL3BhZ2VzL3ZpZGVvL1ZpZGVvQ2hhdC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmLmpzIiwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuICAgIDxkaXYgY2xhc3M9XCJwLTUgdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgPGgxIGNsYXNzPVwidGV4dC0yeGwgbWItNFwiPkxhcmF2ZWwgVmlkZW8gQ2hhdDwvaDE+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJncmlkIGdyaWQtZmxvdy1yb3cgZ3JpZC1jb2xzLTMgZ3JpZC1yb3dzLTMgZ2FwLTQgYmctYmxhY2tcIj5cbiAgICAgICAgICAgIDxkaXYgaWQ9XCJteS12aWRlby1jaGF0LXdpbmRvd1wiPlxuICAgICAgICAgICAgICA8YnV0dG9uIEBjbGljaz0nZ2V0QWNjZXNzVG9rZW4nIHYtaWY9XCIhYWNjZXNzVG9rZW4gJiYgbmFtZVwiPiBTdGFydCBCcm9hZGNhc3RpbmcgPC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuZXhwb3J0IGRlZmF1bHQge1xuICAgIG5hbWU6ICd2aWRlby1jaGF0JyxcbiAgICBkYXRhOiBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBhY2Nlc3NUb2tlbjogJycsXG4gICAgICAgIHJvb21TaWQ6ICcnLFxuICAgICAgICBuYW1lOiB0aGlzLiRyb3V0ZS5wYXJhbXMucm9vbU5hbWUsXG4gICAgICB9XG4gICAgfSxcbiAgICBtZXRob2RzIDoge1xuICAgIGdldEFjY2Vzc1Rva2VuIDogZnVuY3Rpb24gKCkge1xuICAgICAgICBjb25zb2xlLmxvZygnVmlkZW8gY2hhdCByb29tIGxvYWRpbmcuLi4nKTtcblxuICAgICAgICBjb25zdCBfdGhpcyA9IHRoaXNcbiAgICAgICAgY29uc3QgYXhpb3MgPSByZXF1aXJlKCdheGlvcycpXG5cbiAgICAgICAgLy8gUmVxdWVzdCBhIG5ldyB0b2tlblxuICAgICAgICBheGlvcy5nZXQoYC9hcGkvdmlkZW8vYWNjZXNzX3Rva2VuLyR7dGhpcy5uYW1lfWApXG4gICAgICAgICAgICAudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcbiAgICAgICAgICAgICAgICBfdGhpcy5hY2Nlc3NUb2tlbiA9IHJlc3BvbnNlLmRhdGFcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBfdGhpcy5jb25uZWN0VG9Sb29tKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICxcbiAgICBqb2luQXNQYXJ0aWNpcGFudCA6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ1ZpZGVvIGNoYXQgcm9vbSBsb2FkaW5nLi4uJyk7XG5cbiAgICAgICAgY29uc3QgX3RoaXMgPSB0aGlzXG4gICAgICAgIGNvbnN0IGF4aW9zID0gcmVxdWlyZSgnYXhpb3MnKVxuXG4gICAgICAgIC8vIFJlcXVlc3QgYSBuZXcgdG9rZW5cbiAgICAgICAgYXhpb3MuZ2V0KGAvYXBpL3ZpZGVvL2FjY2Vzc190b2tlbi8ke3RoaXMubmFtZX1gKVxuICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gICAgICAgICAgICAgICAgX3RoaXMuYWNjZXNzVG9rZW4gPSByZXNwb25zZS5kYXRhXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKGZ1bmN0aW9uIChlcnJvcikge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgX3RoaXMuam9pblRvUm9vbSgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAsXG4gICAgY29ubmVjdFRvUm9vbSA6IGZ1bmN0aW9uICgpIHtcblxuICAgICAgICBjb25zdCBheGlvcyA9IHJlcXVpcmUoJ2F4aW9zJyk7XG5cbiAgICAgICAgY29uc3QgeyBjb25uZWN0LCBjcmVhdGVMb2NhbFZpZGVvVHJhY2ssICB9ID0gcmVxdWlyZSgndHdpbGlvLXZpZGVvJyk7XG5cbiAgICAgICAgY29ubmVjdCggdGhpcy5hY2Nlc3NUb2tlbiwgeyBuYW1lOnRoaXMubmFtZSB9KS50aGVuKHJvb20gPT4ge1xuXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgU3VjY2Vzc2Z1bGx5IGpvaW5lZCBhIFJvb206ICR7cm9vbX1gKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRGF0YTo6XCIsIHJvb20uc2lkKTtcbiAgICAgICAgICAgIHRoaXMucm9vbVNpZCA9IHJvb20uc2lkO1xuXG4gICAgICAgICAgICBsZXQgcmVxdWVzdCA9IHtcbiAgICAgICAgICAgICAgcm9vbV9uYW1lOiB0aGlzLm5hbWUsXG4gICAgICAgICAgICAgIHJvb21fc2lkOiByb29tLnNpZCxcbiAgICAgICAgICAgICAgcm9vbV9zdGF0dXM6IFwiT05fR09JTkdcIlxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBheGlvcy5wb3N0KGAvYXBpL3ZpZGVvL2hpc3Rvcnkvc2F2ZWAsIHJlcXVlc3QpXG4gICAgICAgICAgICAudGhlbigocmVzcG9uc2UpID0+e1xuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKChlcnIpPT57XG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICBjb25zdCB2aWRlb0NoYXRXaW5kb3cgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbXktdmlkZW8tY2hhdC13aW5kb3cnKTtcblxuICAgICAgICAgICAgY3JlYXRlTG9jYWxWaWRlb1RyYWNrKCkudGhlbih0cmFjayA9PiB7XG4gICAgICAgICAgICAgICAgdmlkZW9DaGF0V2luZG93LmFwcGVuZENoaWxkKHRyYWNrLmF0dGFjaCgpKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICByb29tLm9uKCdwYXJ0aWNpcGFudENvbm5lY3RlZCcsIHBhcnRpY2lwYW50ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coYFBhcnRpY2lwYW50IFwiJHtwYXJ0aWNpcGFudC5pZGVudGl0eX1cIiBjb25uZWN0ZWRgKTtcblxuICAgICAgICAgICAgICAgICAgICBwYXJ0aWNpcGFudC50cmFja3MuZm9yRWFjaChwdWJsaWNhdGlvbiA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocHVibGljYXRpb24uaXNTdWJzY3JpYmVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdHJhY2sgPSBwdWJsaWNhdGlvbi50cmFjaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2aWRlb0NoYXRXaW5kb3cuYXBwZW5kQ2hpbGQodHJhY2suYXR0YWNoKCkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgICAgICBwYXJ0aWNpcGFudC5vbigndHJhY2tTdWJzY3JpYmVkJywgdHJhY2sgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmlkZW9DaGF0V2luZG93LmFwcGVuZENoaWxkKHRyYWNrLmF0dGFjaCgpKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgfSwgZXJyb3IgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihgVW5hYmxlIHRvIGNvbm5lY3QgdG8gUm9vbTogJHtlcnJvci5tZXNzYWdlfWApO1xuICAgICAgICB9KTtcbiAgICAgIH0sXG5cbiAgICAgIGpvaW5Ub1Jvb20gOiBmdW5jdGlvbiAoKSB7XG5cbiAgICAgIGNvbnN0IGF4aW9zID0gcmVxdWlyZSgnYXhpb3MnKVxuXG4gICAgICBjb25zdCB7IGNvbm5lY3QgfSA9IHJlcXVpcmUoJ3R3aWxpby12aWRlbycpO1xuXG4gICAgICBjb25uZWN0KCB0aGlzLmFjY2Vzc1Rva2VuLCB7IG5hbWU6dGhpcy5uYW1lLCB2aWRlbzpmYWxzZSwgYXVkaW86ZmFsc2UgfSkudGhlbihyb29tID0+IHtcblxuICAgICAgICAgIGNvbnNvbGUubG9nKGBTdWNjZXNzZnVsbHkgam9pbmVkIGEgUm9vbTogJHtyb29tfWApO1xuICAgICAgICAgIGNvbnNvbGUubG9nKFwiRGF0YTo6XCIsIHJvb20uc2lkKTtcbiAgICAgICAgICB0aGlzLnJvb21TaWQgPSByb29tLnNpZDtcblxuICAgICAgICAgIGNvbnN0IHZpZGVvQ2hhdFdpbmRvdyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdteS12aWRlby1jaGF0LXdpbmRvdycpO1xuXG4gICAgICAgICAgLy8gY3JlYXRlTG9jYWxWaWRlb1RyYWNrKCkudGhlbih0cmFjayA9PiB7XG4gICAgICAgICAgLy8gICAgIHZpZGVvQ2hhdFdpbmRvdy5hcHBlbmRDaGlsZCh0cmFjay5hdHRhY2goKSk7XG4gICAgICAgICAgLy8gfSk7XG5cbiAgICAgICAgICBjb25zdCBsb2NhbFBhcnRpY2lwYW50ID0gcm9vbS5sb2NhbFBhcnRpY2lwYW50O1xuICAgICAgICAgIGNvbnNvbGUubG9nKGBDb25uZWN0ZWQgdG8gdGhlIFJvb20gYXMgTG9jYWxQYXJ0aWNpcGFudCBcIiR7bG9jYWxQYXJ0aWNpcGFudC5pZGVudGl0eX1cImApO1xuXG4gICAgICAgICAgcm9vbS5wYXJ0aWNpcGFudHMuZm9yRWFjaChwYXJ0aWNpcGFudCA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgUGFydGljaXBhbnQgXCIke3BhcnRpY2lwYW50LmlkZW50aXR5fVwiIGlzIGNvbm5lY3RlZCB0byB0aGUgUm9vbWApO1xuICAgICAgICAgICAgY29uc29sZS5sb2cocGFydGljaXBhbnQpO1xuICAgICAgICAgICAgY29uc29sZS5sb2cocGFydGljaXBhbnQudHJhY2tzICE9PSB1bmRlZmluZWQpO1xuXG4gICAgICAgICAgICAvLyBpZihwYXJ0aWNpcGFudC50cmFja3MubGVuZ3RoKVxuXG4gICAgICAgICAgICAgICAgICAgICAgLy8gcGFydGljaXBhbnQudHJhY2tzLmZvckVhY2godHJhY2sgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgIC8vICAgICB2aWRlb0NoYXRXaW5kb3cuYXBwZW5kQ2hpbGQodHJhY2suYXR0YWNoKCkpO1xuICAgICAgICAgICAgICAgICAgICAgIC8vIH0pO1xuICAgICAgICAgIH0pO1xuXG5cblxuICAgICAgICAgIC8vIHJvb20ub24oJ3BhcnRpY2lwYW50Q29ubmVjdGVkJywgcGFydGljaXBhbnQgPT4ge1xuICAgICAgICAgIC8vICAgICAgICAgY29uc29sZS5sb2coYFBhcnRpY2lwYW50IFwiJHtwYXJ0aWNpcGFudC5pZGVudGl0eX1cIiBjb25uZWN0ZWRgKTtcblxuICAgICAgICAgIC8vICAgICAgICAgcGFydGljaXBhbnQudHJhY2tzLmZvckVhY2gocHVibGljYXRpb24gPT4ge1xuICAgICAgICAgIC8vICAgICAgICAgICAgIGlmIChwdWJsaWNhdGlvbi5pc1N1YnNjcmliZWQpIHtcbiAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgY29uc3QgdHJhY2sgPSBwdWJsaWNhdGlvbi50cmFjaztcbiAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgdmlkZW9DaGF0V2luZG93LmFwcGVuZENoaWxkKHRyYWNrLmF0dGFjaCgpKTtcbiAgICAgICAgICAvLyAgICAgICAgICAgICB9XG4gICAgICAgICAgLy8gICAgICAgICB9KTtcblxuICAgICAgICAgIC8vICAgICAgICAgcGFydGljaXBhbnQub24oJ3RyYWNrU3Vic2NyaWJlZCcsIHRyYWNrID0+IHtcbiAgICAgICAgICAvLyAgICAgICAgICAgICB2aWRlb0NoYXRXaW5kb3cuYXBwZW5kQ2hpbGQodHJhY2suYXR0YWNoKCkpO1xuICAgICAgICAgIC8vICAgICAgICAgfSk7XG4gICAgICAgICAgLy8gICAgIH0pO1xuXG4gICAgICAgIH0sIGVycm9yID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYFVuYWJsZSB0byBjb25uZWN0IHRvIFJvb206ICR7ZXJyb3IubWVzc2FnZX1gKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICB9LFxuXG5cblxuICAgIG1vdW50ZWQgOiBmdW5jdGlvbiAoKSB7XG4gICAgICBjb25zdCBheGlvcyA9IHJlcXVpcmUoJ2F4aW9zJyk7XG4gICAgICBjb25zb2xlLmxvZyh0aGlzLm5hbWUpXG5cbiAgICAgIGF4aW9zLmdldChgL2FwaS92aWRlby8ke3RoaXMubmFtZX1gKVxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PntcbiAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xuICAgICAgICB0aGlzLmpvaW5Bc1BhcnRpY2lwYW50KCk7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKChlcnIpPT57XG4gICAgICAgIGNvbnNvbGUubG9nKGVyci5yZXNwb25zZSk7XG4gICAgICB9KVxuICAgICAgICAvLyB0aGlzLmdldEFjY2Vzc1Rva2VuKClcbiAgICB9XG59XG48L3NjcmlwdD5cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/video/VideoChat.vue?vue&type=script&lang=js&\n");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/video/VideoChat.vue?vue&type=template&id=37363be6&":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/video/VideoChat.vue?vue&type=template&id=37363be6& ***!
  \*************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\"div\", { staticClass: \"p-5 text-center\" }, [\n    _c(\"h1\", { staticClass: \"text-2xl mb-4\" }, [_vm._v(\"Laravel Video Chat\")]),\n    _vm._v(\" \"),\n    _c(\n      \"div\",\n      {\n        staticClass: \"grid grid-flow-row grid-cols-3 grid-rows-3 gap-4 bg-black\"\n      },\n      [\n        _c(\"div\", { attrs: { id: \"my-video-chat-window\" } }, [\n          !_vm.accessToken && _vm.name\n            ? _c(\"button\", { on: { click: _vm.getAccessToken } }, [\n                _vm._v(\" Start Broadcasting \")\n              ])\n            : _vm._e()\n        ])\n      ]\n    )\n  ])\n}\nvar staticRenderFns = []\nrender._withStripped = true\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvcGFnZXMvdmlkZW8vVmlkZW9DaGF0LnZ1ZT8wMTE3Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLGlDQUFpQztBQUNyRCxjQUFjLCtCQUErQjtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsbUJBQW1CLFNBQVMsNkJBQTZCLEVBQUU7QUFDM0Q7QUFDQSw0QkFBNEIsTUFBTSw0QkFBNEIsRUFBRTtBQUNoRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiIuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPyEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8hLi9yZXNvdXJjZXMvanMvcGFnZXMvdmlkZW8vVmlkZW9DaGF0LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0zNzM2M2JlNiYuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwicC01IHRleHQtY2VudGVyXCIgfSwgW1xuICAgIF9jKFwiaDFcIiwgeyBzdGF0aWNDbGFzczogXCJ0ZXh0LTJ4bCBtYi00XCIgfSwgW192bS5fdihcIkxhcmF2ZWwgVmlkZW8gQ2hhdFwiKV0pLFxuICAgIF92bS5fdihcIiBcIiksXG4gICAgX2MoXG4gICAgICBcImRpdlwiLFxuICAgICAge1xuICAgICAgICBzdGF0aWNDbGFzczogXCJncmlkIGdyaWQtZmxvdy1yb3cgZ3JpZC1jb2xzLTMgZ3JpZC1yb3dzLTMgZ2FwLTQgYmctYmxhY2tcIlxuICAgICAgfSxcbiAgICAgIFtcbiAgICAgICAgX2MoXCJkaXZcIiwgeyBhdHRyczogeyBpZDogXCJteS12aWRlby1jaGF0LXdpbmRvd1wiIH0gfSwgW1xuICAgICAgICAgICFfdm0uYWNjZXNzVG9rZW4gJiYgX3ZtLm5hbWVcbiAgICAgICAgICAgID8gX2MoXCJidXR0b25cIiwgeyBvbjogeyBjbGljazogX3ZtLmdldEFjY2Vzc1Rva2VuIH0gfSwgW1xuICAgICAgICAgICAgICAgIF92bS5fdihcIiBTdGFydCBCcm9hZGNhc3RpbmcgXCIpXG4gICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgIF0pXG4gICAgICBdXG4gICAgKVxuICBdKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/video/VideoChat.vue?vue&type=template&id=37363be6&\n");

/***/ }),

/***/ "./resources/js/pages/video/VideoChat.vue":
/*!************************************************!*\
  !*** ./resources/js/pages/video/VideoChat.vue ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _VideoChat_vue_vue_type_template_id_37363be6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./VideoChat.vue?vue&type=template&id=37363be6& */ \"./resources/js/pages/video/VideoChat.vue?vue&type=template&id=37363be6&\");\n/* harmony import */ var _VideoChat_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./VideoChat.vue?vue&type=script&lang=js& */ \"./resources/js/pages/video/VideoChat.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _VideoChat_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _VideoChat_vue_vue_type_template_id_37363be6___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _VideoChat_vue_vue_type_template_id_37363be6___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"resources/js/pages/video/VideoChat.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvcGFnZXMvdmlkZW8vVmlkZW9DaGF0LnZ1ZT81NDIwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXdGO0FBQzNCO0FBQ0w7OztBQUd4RDtBQUNnRztBQUNoRyxnQkFBZ0IsMkdBQVU7QUFDMUIsRUFBRSwrRUFBTTtBQUNSLEVBQUUsb0ZBQU07QUFDUixFQUFFLDZGQUFlO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsSUFBSSxLQUFVLEVBQUUsWUFpQmY7QUFDRDtBQUNlLGdGIiwiZmlsZSI6Ii4vcmVzb3VyY2VzL2pzL3BhZ2VzL3ZpZGVvL1ZpZGVvQ2hhdC52dWUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL1ZpZGVvQ2hhdC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MzczNjNiZTYmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vVmlkZW9DaGF0LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vVmlkZW9DaGF0LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiL3Zhci93d3cvdGlrLXRvay10YXJvdC9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpL2Rpc3QvaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCczNzM2M2JlNicpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCczNzM2M2JlNicsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCczNzM2M2JlNicsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vVmlkZW9DaGF0LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0zNzM2M2JlNiZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCczNzM2M2JlNicsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicmVzb3VyY2VzL2pzL3BhZ2VzL3ZpZGVvL1ZpZGVvQ2hhdC52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./resources/js/pages/video/VideoChat.vue\n");

/***/ }),

/***/ "./resources/js/pages/video/VideoChat.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./resources/js/pages/video/VideoChat.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VideoChat_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./VideoChat.vue?vue&type=script&lang=js& */ \"./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/video/VideoChat.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VideoChat_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvcGFnZXMvdmlkZW8vVmlkZW9DaGF0LnZ1ZT8wMTcxIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQSx3Q0FBK0wsQ0FBZ0IscVBBQUcsRUFBQyIsImZpbGUiOiIuL3Jlc291cmNlcy9qcy9wYWdlcy92aWRlby9WaWRlb0NoYXQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNC0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vVmlkZW9DaGF0LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS00LTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9WaWRlb0NoYXQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./resources/js/pages/video/VideoChat.vue?vue&type=script&lang=js&\n");

/***/ }),

/***/ "./resources/js/pages/video/VideoChat.vue?vue&type=template&id=37363be6&":
/*!*******************************************************************************!*\
  !*** ./resources/js/pages/video/VideoChat.vue?vue&type=template&id=37363be6& ***!
  \*******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_VideoChat_vue_vue_type_template_id_37363be6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./VideoChat.vue?vue&type=template&id=37363be6& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/video/VideoChat.vue?vue&type=template&id=37363be6&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_VideoChat_vue_vue_type_template_id_37363be6___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_VideoChat_vue_vue_type_template_id_37363be6___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvcGFnZXMvdmlkZW8vVmlkZW9DaGF0LnZ1ZT9lODcwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSIsImZpbGUiOiIuL3Jlc291cmNlcy9qcy9wYWdlcy92aWRlby9WaWRlb0NoYXQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTM3MzYzYmU2Ji5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9WaWRlb0NoYXQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTM3MzYzYmU2JlwiIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./resources/js/pages/video/VideoChat.vue?vue&type=template&id=37363be6&\n");

/***/ })

}]);