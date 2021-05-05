(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[41],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/video/VideoChat.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/video/VideoChat.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: 'video-chat',\n  data: function data() {\n    return {\n      accessToken: '',\n      roomSid: '',\n      name: this.$route.params.roomName\n    };\n  },\n  methods: {\n    getAccessToken: function getAccessToken() {\n      console.log('Video chat room loading...');\n\n      var _this = this;\n\n      var axios = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\"); // Request a new token\n\n\n      axios.get(\"/api/video/access_token/\".concat(this.name)).then(function (response) {\n        _this.accessToken = response.data;\n      })[\"catch\"](function (error) {\n        console.log(error);\n      }).then(function () {\n        _this.connectToRoom();\n      });\n    },\n    joinAsParticipant: function joinAsParticipant() {\n      console.log('Video chat room loading...');\n\n      var _this = this;\n\n      var axios = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\"); // Request a new token\n\n\n      axios.get(\"/api/video/access_token/\".concat(this.name)).then(function (response) {\n        _this.accessToken = response.data;\n      })[\"catch\"](function (error) {\n        console.log(error);\n      }).then(function () {\n        _this.joinToRoom();\n      });\n    },\n    connectToRoom: function connectToRoom() {\n      var _this2 = this;\n\n      var axios = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n\n      var _require = __webpack_require__(/*! twilio-video */ \"./node_modules/twilio-video/es5/index.js\"),\n          connect = _require.connect,\n          createLocalVideoTrack = _require.createLocalVideoTrack;\n\n      connect(this.accessToken, {\n        name: this.name\n      }).then(function (room) {\n        console.log(\"Successfully joined a Room: \".concat(room));\n        console.log(\"Data::\", room.sid);\n        _this2.roomSid = room.sid;\n        var request = {\n          room_name: _this2.name,\n          room_sid: room.sid,\n          room_status: \"ON_GOING\"\n        };\n        axios.post(\"/api/video/history/save\", request).then(function (response) {\n          console.log(response);\n        })[\"catch\"](function (err) {\n          console.log(err);\n        });\n        var videoChatWindow = document.getElementById('my-video-chat-window');\n        createLocalVideoTrack().then(function (track) {\n          videoChatWindow.appendChild(track.attach());\n        });\n        room.on('participantConnected', function (participant) {\n          console.log(\"Participant \\\"\".concat(participant.identity, \"\\\" connected\"));\n          participant.tracks.forEach(function (publication) {\n            if (publication.isSubscribed) {\n              var track = publication.track;\n              videoChatWindow.appendChild(track.attach());\n            }\n          });\n          participant.on('trackSubscribed', function (track) {\n            videoChatWindow.appendChild(track.attach());\n          });\n        });\n      }, function (error) {\n        console.error(\"Unable to connect to Room: \".concat(error.message));\n      });\n    },\n    joinToRoom: function joinToRoom() {\n      var _this3 = this;\n\n      var axios = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n\n      var _require2 = __webpack_require__(/*! twilio-video */ \"./node_modules/twilio-video/es5/index.js\"),\n          connect = _require2.connect;\n\n      connect(this.accessToken, {\n        name: this.name,\n        video: false,\n        audio: false\n      }).then(function (room) {\n        console.log(\"Successfully joined a Room: \".concat(room));\n        console.log(\"Data::\", room.sid);\n        _this3.roomSid = room.sid;\n        var videoChatWindow = document.getElementById('my-video-chat-window'); // createLocalVideoTrack().then(track => {\n        //     videoChatWindow.appendChild(track.attach());\n        // });\n\n        var localParticipant = room.localParticipant;\n        console.log(\"Connected to the Room as LocalParticipant \\\"\".concat(localParticipant.identity, \"\\\"\"));\n        room.participants.forEach(function (participant) {\n          console.log(\"Participant \\\"\".concat(participant.identity, \"\\\" is connected to the Room\"));\n          participant.tracks.forEach(function (track) {\n            videoChatWindow.appendChild(track.attach());\n          });\n          participant.tracks.forEach(function (publication) {\n            console.log(publication);\n            console.log(publication.track);\n\n            if (publication.isSubscribed === true) {\n              console.log('posting video');\n              console.log(publication.track); // const track = publication.track;\n              // videoChatWindow.appendChild(track.attach());\n            }\n          }); // participant.on('trackSubscribed', track => {\n          //     videoChatWindow.appendChild(track.attach());\n          // });\n        }); // room.on('participantConnected', participant => {\n        //         console.log(`Participant \"${participant.identity}\" connected`);\n        //         participant.tracks.forEach(publication => {\n        //             if (publication.isSubscribed) {\n        //                 const track = publication.track;\n        //                 videoChatWindow.appendChild(track.attach());\n        //             }\n        //         });\n        //         participant.on('trackSubscribed', track => {\n        //             videoChatWindow.appendChild(track.attach());\n        //         });\n        //     });\n      }, function (error) {\n        console.error(\"Unable to connect to Room: \".concat(error.message));\n      });\n    }\n  },\n  mounted: function mounted() {\n    var _this4 = this;\n\n    var axios = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n\n    console.log(this.name);\n    axios.get(\"/api/video/\".concat(this.name)).then(function (response) {\n      console.log(response);\n\n      _this4.joinAsParticipant();\n    })[\"catch\"](function (err) {\n      console.log(err.response);\n    }); // this.getAccessToken()\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL3BhZ2VzL3ZpZGVvL1ZpZGVvQ2hhdC52dWU/ZGU0YiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFZQTtBQUNBLG9CQURBO0FBRUE7QUFDQTtBQUNBLHFCQURBO0FBRUEsaUJBRkE7QUFHQTtBQUhBO0FBS0EsR0FSQTtBQVNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFDQSxvRkFKQSxDQU1BOzs7QUFDQSw4REFDQSxJQURBLENBQ0E7QUFDQTtBQUNBLE9BSEEsV0FJQTtBQUNBO0FBQ0EsT0FOQSxFQU9BLElBUEEsQ0FPQTtBQUNBO0FBQ0EsT0FUQTtBQVVBLEtBbEJBO0FBb0JBO0FBQ0E7O0FBRUE7O0FBQ0Esb0ZBSkEsQ0FNQTs7O0FBQ0EsOERBQ0EsSUFEQSxDQUNBO0FBQ0E7QUFDQSxPQUhBLFdBSUE7QUFDQTtBQUNBLE9BTkEsRUFPQSxJQVBBLENBT0E7QUFDQTtBQUNBLE9BVEE7QUFVQSxLQXJDQTtBQXVDQTtBQUFBOztBQUVBOztBQUZBLHFCQUlBLG1GQUpBO0FBQUEsVUFJQSxPQUpBLFlBSUEsT0FKQTtBQUFBLFVBSUEscUJBSkEsWUFJQSxxQkFKQTs7QUFNQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBLGdDQURBO0FBRUEsNEJBRkE7QUFHQTtBQUhBO0FBTUEsdURBQ0EsSUFEQSxDQUNBO0FBQ0E7QUFDQSxTQUhBLFdBSUE7QUFDQTtBQUNBLFNBTkE7QUFRQTtBQUVBO0FBQ0E7QUFDQSxTQUZBO0FBSUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUxBO0FBT0E7QUFDQTtBQUNBLFdBRkE7QUFHQSxTQWJBO0FBZUEsT0F6Q0EsRUF5Q0E7QUFDQTtBQUNBLE9BM0NBO0FBNENBLEtBekZBO0FBMkZBO0FBQUE7O0FBRUE7O0FBRkEsc0JBSUEsbUZBSkE7QUFBQSxVQUlBLE9BSkEsYUFJQSxPQUpBOztBQU1BO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFFQSw4RUFOQSxDQVFBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQSxXQUZBO0FBR0E7QUFDQTtBQUNBOztBQUdBO0FBQ0E7QUFDQSw2Q0FGQSxDQUdBO0FBQ0E7QUFDQTtBQUNBLFdBWEEsRUFOQSxDQW1CQTtBQUNBO0FBQ0E7QUFFQSxTQXZCQSxFQWZBLENBMENBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLE9BekRBLEVBeURBO0FBQ0E7QUFDQSxPQTNEQTtBQTREQTtBQTdKQSxHQVRBO0FBNEtBO0FBQUE7O0FBQ0E7O0FBQ0E7QUFFQSwrQ0FDQSxJQURBLENBQ0E7QUFDQTs7QUFDQTtBQUNBLEtBSkEsV0FLQTtBQUNBO0FBQ0EsS0FQQSxFQUpBLENBWUE7QUFDQTtBQXpMQSIsImZpbGUiOiIuL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPyEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8hLi9yZXNvdXJjZXMvanMvcGFnZXMvdmlkZW8vVmlkZW9DaGF0LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyYuanMiLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG4gICAgPGRpdiBjbGFzcz1cInAtNSB0ZXh0LWNlbnRlclwiPlxuICAgICAgICA8aDEgY2xhc3M9XCJ0ZXh0LTJ4bCBtYi00XCI+TGFyYXZlbCBWaWRlbyBDaGF0PC9oMT5cbiAgICAgICAgPGRpdiBjbGFzcz1cImdyaWQgZ3JpZC1mbG93LXJvdyBncmlkLWNvbHMtMyBncmlkLXJvd3MtMyBnYXAtNCBiZy1ibGFja1wiPlxuICAgICAgICAgICAgPGRpdiBpZD1cIm15LXZpZGVvLWNoYXQtd2luZG93XCI+XG4gICAgICAgICAgICAgIDxidXR0b24gQGNsaWNrPSdnZXRBY2Nlc3NUb2tlbicgdi1pZj1cIiFhY2Nlc3NUb2tlbiAmJiBuYW1lXCI+IFN0YXJ0IEJyb2FkY2FzdGluZyA8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5leHBvcnQgZGVmYXVsdCB7XG4gICAgbmFtZTogJ3ZpZGVvLWNoYXQnLFxuICAgIGRhdGE6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGFjY2Vzc1Rva2VuOiAnJyxcbiAgICAgICAgcm9vbVNpZDogJycsXG4gICAgICAgIG5hbWU6IHRoaXMuJHJvdXRlLnBhcmFtcy5yb29tTmFtZSxcbiAgICAgIH1cbiAgICB9LFxuICAgIG1ldGhvZHMgOiB7XG4gICAgZ2V0QWNjZXNzVG9rZW4gOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdWaWRlbyBjaGF0IHJvb20gbG9hZGluZy4uLicpO1xuXG4gICAgICAgIGNvbnN0IF90aGlzID0gdGhpc1xuICAgICAgICBjb25zdCBheGlvcyA9IHJlcXVpcmUoJ2F4aW9zJylcblxuICAgICAgICAvLyBSZXF1ZXN0IGEgbmV3IHRva2VuXG4gICAgICAgIGF4aW9zLmdldChgL2FwaS92aWRlby9hY2Nlc3NfdG9rZW4vJHt0aGlzLm5hbWV9YClcbiAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xuICAgICAgICAgICAgICAgIF90aGlzLmFjY2Vzc1Rva2VuID0gcmVzcG9uc2UuZGF0YVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaChmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIF90aGlzLmNvbm5lY3RUb1Jvb20oKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgLFxuICAgIGpvaW5Bc1BhcnRpY2lwYW50IDogZnVuY3Rpb24gKCkge1xuICAgICAgICBjb25zb2xlLmxvZygnVmlkZW8gY2hhdCByb29tIGxvYWRpbmcuLi4nKTtcblxuICAgICAgICBjb25zdCBfdGhpcyA9IHRoaXNcbiAgICAgICAgY29uc3QgYXhpb3MgPSByZXF1aXJlKCdheGlvcycpXG5cbiAgICAgICAgLy8gUmVxdWVzdCBhIG5ldyB0b2tlblxuICAgICAgICBheGlvcy5nZXQoYC9hcGkvdmlkZW8vYWNjZXNzX3Rva2VuLyR7dGhpcy5uYW1lfWApXG4gICAgICAgICAgICAudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcbiAgICAgICAgICAgICAgICBfdGhpcy5hY2Nlc3NUb2tlbiA9IHJlc3BvbnNlLmRhdGFcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBfdGhpcy5qb2luVG9Sb29tKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICxcbiAgICBjb25uZWN0VG9Sb29tIDogZnVuY3Rpb24gKCkge1xuXG4gICAgICAgIGNvbnN0IGF4aW9zID0gcmVxdWlyZSgnYXhpb3MnKTtcblxuICAgICAgICBjb25zdCB7IGNvbm5lY3QsIGNyZWF0ZUxvY2FsVmlkZW9UcmFjaywgIH0gPSByZXF1aXJlKCd0d2lsaW8tdmlkZW8nKTtcblxuICAgICAgICBjb25uZWN0KCB0aGlzLmFjY2Vzc1Rva2VuLCB7IG5hbWU6dGhpcy5uYW1lIH0pLnRoZW4ocm9vbSA9PiB7XG5cbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGBTdWNjZXNzZnVsbHkgam9pbmVkIGEgUm9vbTogJHtyb29tfWApO1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJEYXRhOjpcIiwgcm9vbS5zaWQpO1xuICAgICAgICAgICAgdGhpcy5yb29tU2lkID0gcm9vbS5zaWQ7XG5cbiAgICAgICAgICAgIGxldCByZXF1ZXN0ID0ge1xuICAgICAgICAgICAgICByb29tX25hbWU6IHRoaXMubmFtZSxcbiAgICAgICAgICAgICAgcm9vbV9zaWQ6IHJvb20uc2lkLFxuICAgICAgICAgICAgICByb29tX3N0YXR1czogXCJPTl9HT0lOR1wiXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGF4aW9zLnBvc3QoYC9hcGkvdmlkZW8vaGlzdG9yeS9zYXZlYCwgcmVxdWVzdClcbiAgICAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT57XG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goKGVycik9PntcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgIGNvbnN0IHZpZGVvQ2hhdFdpbmRvdyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdteS12aWRlby1jaGF0LXdpbmRvdycpO1xuXG4gICAgICAgICAgICBjcmVhdGVMb2NhbFZpZGVvVHJhY2soKS50aGVuKHRyYWNrID0+IHtcbiAgICAgICAgICAgICAgICB2aWRlb0NoYXRXaW5kb3cuYXBwZW5kQ2hpbGQodHJhY2suYXR0YWNoKCkpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIHJvb20ub24oJ3BhcnRpY2lwYW50Q29ubmVjdGVkJywgcGFydGljaXBhbnQgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgUGFydGljaXBhbnQgXCIke3BhcnRpY2lwYW50LmlkZW50aXR5fVwiIGNvbm5lY3RlZGApO1xuXG4gICAgICAgICAgICAgICAgICAgIHBhcnRpY2lwYW50LnRyYWNrcy5mb3JFYWNoKHB1YmxpY2F0aW9uID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwdWJsaWNhdGlvbi5pc1N1YnNjcmliZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB0cmFjayA9IHB1YmxpY2F0aW9uLnRyYWNrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZpZGVvQ2hhdFdpbmRvdy5hcHBlbmRDaGlsZCh0cmFjay5hdHRhY2goKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgICAgIHBhcnRpY2lwYW50Lm9uKCd0cmFja1N1YnNjcmliZWQnLCB0cmFjayA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2aWRlb0NoYXRXaW5kb3cuYXBwZW5kQ2hpbGQodHJhY2suYXR0YWNoKCkpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICB9LCBlcnJvciA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGBVbmFibGUgdG8gY29ubmVjdCB0byBSb29tOiAke2Vycm9yLm1lc3NhZ2V9YCk7XG4gICAgICAgIH0pO1xuICAgICAgfSxcblxuICAgICAgam9pblRvUm9vbSA6IGZ1bmN0aW9uICgpIHtcblxuICAgICAgY29uc3QgYXhpb3MgPSByZXF1aXJlKCdheGlvcycpXG5cbiAgICAgIGNvbnN0IHsgY29ubmVjdCB9ID0gcmVxdWlyZSgndHdpbGlvLXZpZGVvJyk7XG5cbiAgICAgIGNvbm5lY3QoIHRoaXMuYWNjZXNzVG9rZW4sIHsgbmFtZTp0aGlzLm5hbWUsIHZpZGVvOmZhbHNlLCBhdWRpbzpmYWxzZSB9KS50aGVuKHJvb20gPT4ge1xuXG4gICAgICAgICAgY29uc29sZS5sb2coYFN1Y2Nlc3NmdWxseSBqb2luZWQgYSBSb29tOiAke3Jvb219YCk7XG4gICAgICAgICAgY29uc29sZS5sb2coXCJEYXRhOjpcIiwgcm9vbS5zaWQpO1xuICAgICAgICAgIHRoaXMucm9vbVNpZCA9IHJvb20uc2lkO1xuXG4gICAgICAgICAgY29uc3QgdmlkZW9DaGF0V2luZG93ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ215LXZpZGVvLWNoYXQtd2luZG93Jyk7XG5cbiAgICAgICAgICAvLyBjcmVhdGVMb2NhbFZpZGVvVHJhY2soKS50aGVuKHRyYWNrID0+IHtcbiAgICAgICAgICAvLyAgICAgdmlkZW9DaGF0V2luZG93LmFwcGVuZENoaWxkKHRyYWNrLmF0dGFjaCgpKTtcbiAgICAgICAgICAvLyB9KTtcblxuICAgICAgICAgIGNvbnN0IGxvY2FsUGFydGljaXBhbnQgPSByb29tLmxvY2FsUGFydGljaXBhbnQ7XG4gICAgICAgICAgY29uc29sZS5sb2coYENvbm5lY3RlZCB0byB0aGUgUm9vbSBhcyBMb2NhbFBhcnRpY2lwYW50IFwiJHtsb2NhbFBhcnRpY2lwYW50LmlkZW50aXR5fVwiYCk7XG5cbiAgICAgICAgICByb29tLnBhcnRpY2lwYW50cy5mb3JFYWNoKHBhcnRpY2lwYW50ID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGBQYXJ0aWNpcGFudCBcIiR7cGFydGljaXBhbnQuaWRlbnRpdHl9XCIgaXMgY29ubmVjdGVkIHRvIHRoZSBSb29tYCk7XG5cbiAgICAgICAgICAgICAgICAgICAgICBwYXJ0aWNpcGFudC50cmFja3MuZm9yRWFjaCh0cmFjayA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZpZGVvQ2hhdFdpbmRvdy5hcHBlbmRDaGlsZCh0cmFjay5hdHRhY2goKSk7XG4gICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICBwYXJ0aWNpcGFudC50cmFja3MuZm9yRWFjaChwdWJsaWNhdGlvbiA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHB1YmxpY2F0aW9uKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cocHVibGljYXRpb24udHJhY2spXG5cblxuICAgICAgICAgICAgICAgICAgICAgIGlmIChwdWJsaWNhdGlvbi5pc1N1YnNjcmliZWQgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3Bvc3RpbmcgdmlkZW8nKVxuICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhwdWJsaWNhdGlvbi50cmFjaylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29uc3QgdHJhY2sgPSBwdWJsaWNhdGlvbi50cmFjaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gdmlkZW9DaGF0V2luZG93LmFwcGVuZENoaWxkKHRyYWNrLmF0dGFjaCgpKTtcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgICAgLy8gcGFydGljaXBhbnQub24oJ3RyYWNrU3Vic2NyaWJlZCcsIHRyYWNrID0+IHtcbiAgICAgICAgICAgICAgICAgIC8vICAgICB2aWRlb0NoYXRXaW5kb3cuYXBwZW5kQ2hpbGQodHJhY2suYXR0YWNoKCkpO1xuICAgICAgICAgICAgICAgICAgLy8gfSk7XG5cbiAgICAgICAgICB9KTtcblxuXG5cbiAgICAgICAgICAvLyByb29tLm9uKCdwYXJ0aWNpcGFudENvbm5lY3RlZCcsIHBhcnRpY2lwYW50ID0+IHtcbiAgICAgICAgICAvLyAgICAgICAgIGNvbnNvbGUubG9nKGBQYXJ0aWNpcGFudCBcIiR7cGFydGljaXBhbnQuaWRlbnRpdHl9XCIgY29ubmVjdGVkYCk7XG5cbiAgICAgICAgICAvLyAgICAgICAgIHBhcnRpY2lwYW50LnRyYWNrcy5mb3JFYWNoKHB1YmxpY2F0aW9uID0+IHtcbiAgICAgICAgICAvLyAgICAgICAgICAgICBpZiAocHVibGljYXRpb24uaXNTdWJzY3JpYmVkKSB7XG4gICAgICAgICAgLy8gICAgICAgICAgICAgICAgIGNvbnN0IHRyYWNrID0gcHVibGljYXRpb24udHJhY2s7XG4gICAgICAgICAgLy8gICAgICAgICAgICAgICAgIHZpZGVvQ2hhdFdpbmRvdy5hcHBlbmRDaGlsZCh0cmFjay5hdHRhY2goKSk7XG4gICAgICAgICAgLy8gICAgICAgICAgICAgfVxuICAgICAgICAgIC8vICAgICAgICAgfSk7XG5cbiAgICAgICAgICAvLyAgICAgICAgIHBhcnRpY2lwYW50Lm9uKCd0cmFja1N1YnNjcmliZWQnLCB0cmFjayA9PiB7XG4gICAgICAgICAgLy8gICAgICAgICAgICAgdmlkZW9DaGF0V2luZG93LmFwcGVuZENoaWxkKHRyYWNrLmF0dGFjaCgpKTtcbiAgICAgICAgICAvLyAgICAgICAgIH0pO1xuICAgICAgICAgIC8vICAgICB9KTtcblxuICAgICAgICB9LCBlcnJvciA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGBVbmFibGUgdG8gY29ubmVjdCB0byBSb29tOiAke2Vycm9yLm1lc3NhZ2V9YCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgfSxcblxuXG5cbiAgICBtb3VudGVkIDogZnVuY3Rpb24gKCkge1xuICAgICAgY29uc3QgYXhpb3MgPSByZXF1aXJlKCdheGlvcycpO1xuICAgICAgY29uc29sZS5sb2codGhpcy5uYW1lKVxuXG4gICAgICBheGlvcy5nZXQoYC9hcGkvdmlkZW8vJHt0aGlzLm5hbWV9YClcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT57XG4gICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcbiAgICAgICAgdGhpcy5qb2luQXNQYXJ0aWNpcGFudCgpO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoZXJyKT0+e1xuICAgICAgICBjb25zb2xlLmxvZyhlcnIucmVzcG9uc2UpO1xuICAgICAgfSlcbiAgICAgICAgLy8gdGhpcy5nZXRBY2Nlc3NUb2tlbigpXG4gICAgfVxufVxuPC9zY3JpcHQ+XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/video/VideoChat.vue?vue&type=script&lang=js&\n");

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