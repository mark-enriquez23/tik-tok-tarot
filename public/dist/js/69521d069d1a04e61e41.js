(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[47],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/video/VideoChat.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/video/VideoChat.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: 'video-chat',\n  data: function data() {\n    return {\n      accessToken: '',\n      roomSid: '',\n      name: this.$route.params.roomName\n    };\n  },\n  methods: {\n    getAccessToken: function getAccessToken() {\n      console.log('Video chat room loading...');\n\n      var _this = this;\n\n      var axios = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\"); // Request a new token\n\n\n      axios.get(\"/api/video/access_token/\".concat(this.name)).then(function (response) {\n        _this.accessToken = response.data;\n      })[\"catch\"](function (error) {\n        console.log(error);\n      }).then(function () {\n        _this.connectToRoom();\n      });\n    },\n    joinAsParticipant: function joinAsParticipant() {\n      console.log('Video chat room loading...');\n\n      var _this = this;\n\n      var axios = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\"); // Request a new token\n\n\n      axios.get(\"/api/video/access_token/\".concat(this.name)).then(function (response) {\n        _this.accessToken = response.data;\n      })[\"catch\"](function (error) {\n        console.log(error);\n      }).then(function () {\n        _this.joinToRoom();\n      });\n    },\n    connectToRoom: function connectToRoom() {\n      var _this2 = this;\n\n      var axios = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n\n      var _require = __webpack_require__(/*! twilio-video */ \"./node_modules/twilio-video/es5/index.js\"),\n          connect = _require.connect,\n          createLocalVideoTrack = _require.createLocalVideoTrack;\n\n      connect(this.accessToken, {\n        name: this.name\n      }).then(function (room) {\n        console.log(\"Successfully joined a Room: \".concat(room));\n        console.log(\"Data::\", room.sid);\n        _this2.roomSid = room.sid;\n        var request = {\n          room_name: _this2.name,\n          room_sid: room.sid,\n          room_status: \"ON_GOING\"\n        };\n        axios.post(\"/api/video/history/save\", request).then(function (response) {\n          console.log(response);\n        })[\"catch\"](function (err) {\n          console.log(err);\n        });\n        var videoChatWindow = document.getElementById('my-video-chat-window');\n        createLocalVideoTrack().then(function (track) {\n          videoChatWindow.appendChild(track.attach());\n        });\n        room.on('participantConnected', function (participant) {\n          console.log(\"Participant \\\"\".concat(participant.identity, \"\\\" connected\"));\n          participant.tracks.forEach(function (publication) {\n            if (publication.isSubscribed) {\n              var track = publication.track;\n              videoChatWindow.appendChild(track.attach());\n            }\n          });\n          participant.on('trackSubscribed', function (track) {\n            videoChatWindow.appendChild(track.attach());\n          });\n        });\n      }, function (error) {\n        console.error(\"Unable to connect to Room: \".concat(error.message));\n      });\n    },\n    joinToRoom: function joinToRoom() {\n      var _this3 = this;\n\n      var axios = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n\n      var _require2 = __webpack_require__(/*! twilio-video */ \"./node_modules/twilio-video/es5/index.js\"),\n          connect = _require2.connect;\n\n      connect(this.accessToken, {\n        name: this.name,\n        video: false,\n        audio: false\n      }).then(function (room) {\n        console.log(\"Successfully joined a Room: \".concat(room));\n        console.log(\"Data::\", room.sid);\n        _this3.roomSid = room.sid;\n        var videoChatWindow = document.getElementById('my-video-chat-window');\n        createLocalVideoTrack().then(function (track) {\n          videoChatWindow.appendChild(track.attach());\n        });\n        room.on('participantConnected', function (participant) {\n          console.log(\"Participant \\\"\".concat(participant.identity, \"\\\" connected\"));\n          participant.tracks.forEach(function (publication) {\n            if (publication.isSubscribed) {\n              var track = publication.track;\n              videoChatWindow.appendChild(track.attach());\n            }\n          });\n          participant.on('trackSubscribed', function (track) {\n            videoChatWindow.appendChild(track.attach());\n          });\n        });\n      }, function (error) {\n        console.error(\"Unable to connect to Room: \".concat(error.message));\n      });\n    }\n  },\n  mounted: function mounted() {\n    var _this4 = this;\n\n    var axios = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n\n    console.log(this.name);\n    axios.get(\"/api/video/\".concat(this.name)).then(function (response) {\n      console.log(response);\n\n      _this4.joinAsParticipant();\n    })[\"catch\"](function (err) {\n      console.log(err.response);\n    }); // this.getAccessToken()\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL3BhZ2VzL3ZpZGVvL1ZpZGVvQ2hhdC52dWU/ZGU0YiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFZQTtBQUNBLG9CQURBO0FBRUE7QUFDQTtBQUNBLHFCQURBO0FBRUEsaUJBRkE7QUFHQTtBQUhBO0FBS0EsR0FSQTtBQVNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFDQSxvRkFKQSxDQU1BOzs7QUFDQSw4REFDQSxJQURBLENBQ0E7QUFDQTtBQUNBLE9BSEEsV0FJQTtBQUNBO0FBQ0EsT0FOQSxFQU9BLElBUEEsQ0FPQTtBQUNBO0FBQ0EsT0FUQTtBQVVBLEtBbEJBO0FBb0JBO0FBQ0E7O0FBRUE7O0FBQ0Esb0ZBSkEsQ0FNQTs7O0FBQ0EsOERBQ0EsSUFEQSxDQUNBO0FBQ0E7QUFDQSxPQUhBLFdBSUE7QUFDQTtBQUNBLE9BTkEsRUFPQSxJQVBBLENBT0E7QUFDQTtBQUNBLE9BVEE7QUFVQSxLQXJDQTtBQXVDQTtBQUFBOztBQUVBOztBQUZBLHFCQUlBLG1GQUpBO0FBQUEsVUFJQSxPQUpBLFlBSUEsT0FKQTtBQUFBLFVBSUEscUJBSkEsWUFJQSxxQkFKQTs7QUFNQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBLGdDQURBO0FBRUEsNEJBRkE7QUFHQTtBQUhBO0FBTUEsdURBQ0EsSUFEQSxDQUNBO0FBQ0E7QUFDQSxTQUhBLFdBSUE7QUFDQTtBQUNBLFNBTkE7QUFRQTtBQUVBO0FBQ0E7QUFDQSxTQUZBO0FBSUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUxBO0FBT0E7QUFDQTtBQUNBLFdBRkE7QUFHQSxTQWJBO0FBZUEsT0F6Q0EsRUF5Q0E7QUFDQTtBQUNBLE9BM0NBO0FBNENBLEtBekZBO0FBMkZBO0FBQUE7O0FBRUE7O0FBRkEsc0JBSUEsbUZBSkE7QUFBQSxVQUlBLE9BSkEsYUFJQSxPQUpBOztBQU1BO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQSxTQUZBO0FBSUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUxBO0FBT0E7QUFDQTtBQUNBLFdBRkE7QUFHQSxTQWJBO0FBZUEsT0EzQkEsRUEyQkE7QUFDQTtBQUNBLE9BN0JBO0FBOEJBO0FBL0hBLEdBVEE7QUE4SUE7QUFBQTs7QUFDQTs7QUFDQTtBQUVBLCtDQUNBLElBREEsQ0FDQTtBQUNBOztBQUNBO0FBQ0EsS0FKQSxXQUtBO0FBQ0E7QUFDQSxLQVBBLEVBSkEsQ0FZQTtBQUNBO0FBM0pBIiwiZmlsZSI6Ii4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPyEuL3Jlc291cmNlcy9qcy9wYWdlcy92aWRlby9WaWRlb0NoYXQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJi5qcyIsInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cbiAgICA8ZGl2IGNsYXNzPVwicC01IHRleHQtY2VudGVyXCI+XG4gICAgICAgIDxoMSBjbGFzcz1cInRleHQtMnhsIG1iLTRcIj5MYXJhdmVsIFZpZGVvIENoYXQ8L2gxPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiZ3JpZCBncmlkLWZsb3ctcm93IGdyaWQtY29scy0zIGdyaWQtcm93cy0zIGdhcC00IGJnLWJsYWNrXCI+XG4gICAgICAgICAgICA8ZGl2IGlkPVwibXktdmlkZW8tY2hhdC13aW5kb3dcIj5cbiAgICAgICAgICAgICAgPGJ1dHRvbiBAY2xpY2s9J2dldEFjY2Vzc1Rva2VuJyB2LWlmPVwiIWFjY2Vzc1Rva2VuICYmIG5hbWVcIj4gU3RhcnQgQnJvYWRjYXN0aW5nIDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBuYW1lOiAndmlkZW8tY2hhdCcsXG4gICAgZGF0YTogZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgYWNjZXNzVG9rZW46ICcnLFxuICAgICAgICByb29tU2lkOiAnJyxcbiAgICAgICAgbmFtZTogdGhpcy4kcm91dGUucGFyYW1zLnJvb21OYW1lLFxuICAgICAgfVxuICAgIH0sXG4gICAgbWV0aG9kcyA6IHtcbiAgICBnZXRBY2Nlc3NUb2tlbiA6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ1ZpZGVvIGNoYXQgcm9vbSBsb2FkaW5nLi4uJyk7XG5cbiAgICAgICAgY29uc3QgX3RoaXMgPSB0aGlzXG4gICAgICAgIGNvbnN0IGF4aW9zID0gcmVxdWlyZSgnYXhpb3MnKVxuXG4gICAgICAgIC8vIFJlcXVlc3QgYSBuZXcgdG9rZW5cbiAgICAgICAgYXhpb3MuZ2V0KGAvYXBpL3ZpZGVvL2FjY2Vzc190b2tlbi8ke3RoaXMubmFtZX1gKVxuICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gICAgICAgICAgICAgICAgX3RoaXMuYWNjZXNzVG9rZW4gPSByZXNwb25zZS5kYXRhXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKGZ1bmN0aW9uIChlcnJvcikge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgX3RoaXMuY29ubmVjdFRvUm9vbSgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAsXG4gICAgam9pbkFzUGFydGljaXBhbnQgOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdWaWRlbyBjaGF0IHJvb20gbG9hZGluZy4uLicpO1xuXG4gICAgICAgIGNvbnN0IF90aGlzID0gdGhpc1xuICAgICAgICBjb25zdCBheGlvcyA9IHJlcXVpcmUoJ2F4aW9zJylcblxuICAgICAgICAvLyBSZXF1ZXN0IGEgbmV3IHRva2VuXG4gICAgICAgIGF4aW9zLmdldChgL2FwaS92aWRlby9hY2Nlc3NfdG9rZW4vJHt0aGlzLm5hbWV9YClcbiAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xuICAgICAgICAgICAgICAgIF90aGlzLmFjY2Vzc1Rva2VuID0gcmVzcG9uc2UuZGF0YVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaChmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIF90aGlzLmpvaW5Ub1Jvb20oKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgLFxuICAgIGNvbm5lY3RUb1Jvb20gOiBmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgY29uc3QgYXhpb3MgPSByZXF1aXJlKCdheGlvcycpO1xuXG4gICAgICAgIGNvbnN0IHsgY29ubmVjdCwgY3JlYXRlTG9jYWxWaWRlb1RyYWNrLCAgfSA9IHJlcXVpcmUoJ3R3aWxpby12aWRlbycpO1xuXG4gICAgICAgIGNvbm5lY3QoIHRoaXMuYWNjZXNzVG9rZW4sIHsgbmFtZTp0aGlzLm5hbWUgfSkudGhlbihyb29tID0+IHtcblxuICAgICAgICAgICAgY29uc29sZS5sb2coYFN1Y2Nlc3NmdWxseSBqb2luZWQgYSBSb29tOiAke3Jvb219YCk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkRhdGE6OlwiLCByb29tLnNpZCk7XG4gICAgICAgICAgICB0aGlzLnJvb21TaWQgPSByb29tLnNpZDtcblxuICAgICAgICAgICAgbGV0IHJlcXVlc3QgPSB7XG4gICAgICAgICAgICAgIHJvb21fbmFtZTogdGhpcy5uYW1lLFxuICAgICAgICAgICAgICByb29tX3NpZDogcm9vbS5zaWQsXG4gICAgICAgICAgICAgIHJvb21fc3RhdHVzOiBcIk9OX0dPSU5HXCJcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgYXhpb3MucG9zdChgL2FwaS92aWRlby9oaXN0b3J5L3NhdmVgLCByZXF1ZXN0KVxuICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PntcbiAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyKT0+e1xuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgY29uc3QgdmlkZW9DaGF0V2luZG93ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ215LXZpZGVvLWNoYXQtd2luZG93Jyk7XG5cbiAgICAgICAgICAgIGNyZWF0ZUxvY2FsVmlkZW9UcmFjaygpLnRoZW4odHJhY2sgPT4ge1xuICAgICAgICAgICAgICAgIHZpZGVvQ2hhdFdpbmRvdy5hcHBlbmRDaGlsZCh0cmFjay5hdHRhY2goKSk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgcm9vbS5vbigncGFydGljaXBhbnRDb25uZWN0ZWQnLCBwYXJ0aWNpcGFudCA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGBQYXJ0aWNpcGFudCBcIiR7cGFydGljaXBhbnQuaWRlbnRpdHl9XCIgY29ubmVjdGVkYCk7XG5cbiAgICAgICAgICAgICAgICAgICAgcGFydGljaXBhbnQudHJhY2tzLmZvckVhY2gocHVibGljYXRpb24gPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHB1YmxpY2F0aW9uLmlzU3Vic2NyaWJlZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHRyYWNrID0gcHVibGljYXRpb24udHJhY2s7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmlkZW9DaGF0V2luZG93LmFwcGVuZENoaWxkKHRyYWNrLmF0dGFjaCgpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAgICAgcGFydGljaXBhbnQub24oJ3RyYWNrU3Vic2NyaWJlZCcsIHRyYWNrID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZpZGVvQ2hhdFdpbmRvdy5hcHBlbmRDaGlsZCh0cmFjay5hdHRhY2goKSk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIH0sIGVycm9yID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYFVuYWJsZSB0byBjb25uZWN0IHRvIFJvb206ICR7ZXJyb3IubWVzc2FnZX1gKTtcbiAgICAgICAgfSk7XG4gICAgICB9LFxuXG4gICAgICBqb2luVG9Sb29tIDogZnVuY3Rpb24gKCkge1xuXG4gICAgICBjb25zdCBheGlvcyA9IHJlcXVpcmUoJ2F4aW9zJylcblxuICAgICAgY29uc3QgeyBjb25uZWN0IH0gPSByZXF1aXJlKCd0d2lsaW8tdmlkZW8nKTtcblxuICAgICAgY29ubmVjdCggdGhpcy5hY2Nlc3NUb2tlbiwgeyBuYW1lOnRoaXMubmFtZSwgdmlkZW86ZmFsc2UsIGF1ZGlvOmZhbHNlIH0pLnRoZW4ocm9vbSA9PiB7XG5cbiAgICAgICAgICBjb25zb2xlLmxvZyhgU3VjY2Vzc2Z1bGx5IGpvaW5lZCBhIFJvb206ICR7cm9vbX1gKTtcbiAgICAgICAgICBjb25zb2xlLmxvZyhcIkRhdGE6OlwiLCByb29tLnNpZCk7XG4gICAgICAgICAgdGhpcy5yb29tU2lkID0gcm9vbS5zaWQ7XG5cbiAgICAgICAgICBjb25zdCB2aWRlb0NoYXRXaW5kb3cgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbXktdmlkZW8tY2hhdC13aW5kb3cnKTtcblxuICAgICAgICAgIGNyZWF0ZUxvY2FsVmlkZW9UcmFjaygpLnRoZW4odHJhY2sgPT4ge1xuICAgICAgICAgICAgICB2aWRlb0NoYXRXaW5kb3cuYXBwZW5kQ2hpbGQodHJhY2suYXR0YWNoKCkpO1xuICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgcm9vbS5vbigncGFydGljaXBhbnRDb25uZWN0ZWQnLCBwYXJ0aWNpcGFudCA9PiB7XG4gICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgUGFydGljaXBhbnQgXCIke3BhcnRpY2lwYW50LmlkZW50aXR5fVwiIGNvbm5lY3RlZGApO1xuXG4gICAgICAgICAgICAgICAgICBwYXJ0aWNpcGFudC50cmFja3MuZm9yRWFjaChwdWJsaWNhdGlvbiA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgaWYgKHB1YmxpY2F0aW9uLmlzU3Vic2NyaWJlZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB0cmFjayA9IHB1YmxpY2F0aW9uLnRyYWNrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICB2aWRlb0NoYXRXaW5kb3cuYXBwZW5kQ2hpbGQodHJhY2suYXR0YWNoKCkpO1xuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgICBwYXJ0aWNpcGFudC5vbigndHJhY2tTdWJzY3JpYmVkJywgdHJhY2sgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgIHZpZGVvQ2hhdFdpbmRvdy5hcHBlbmRDaGlsZCh0cmFjay5hdHRhY2goKSk7XG4gICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgfSwgZXJyb3IgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihgVW5hYmxlIHRvIGNvbm5lY3QgdG8gUm9vbTogJHtlcnJvci5tZXNzYWdlfWApO1xuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgIH0sXG5cblxuXG4gICAgbW91bnRlZCA6IGZ1bmN0aW9uICgpIHtcbiAgICAgIGNvbnN0IGF4aW9zID0gcmVxdWlyZSgnYXhpb3MnKTtcbiAgICAgIGNvbnNvbGUubG9nKHRoaXMubmFtZSlcblxuICAgICAgYXhpb3MuZ2V0KGAvYXBpL3ZpZGVvLyR7dGhpcy5uYW1lfWApXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+e1xuICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XG4gICAgICAgIHRoaXMuam9pbkFzUGFydGljaXBhbnQoKTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKGVycik9PntcbiAgICAgICAgY29uc29sZS5sb2coZXJyLnJlc3BvbnNlKTtcbiAgICAgIH0pXG4gICAgICAgIC8vIHRoaXMuZ2V0QWNjZXNzVG9rZW4oKVxuICAgIH1cbn1cbjwvc2NyaXB0PlxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/video/VideoChat.vue?vue&type=script&lang=js&\n");

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
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _VideoChat_vue_vue_type_template_id_37363be6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./VideoChat.vue?vue&type=template&id=37363be6& */ \"./resources/js/pages/video/VideoChat.vue?vue&type=template&id=37363be6&\");\n/* harmony import */ var _VideoChat_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./VideoChat.vue?vue&type=script&lang=js& */ \"./resources/js/pages/video/VideoChat.vue?vue&type=script&lang=js&\");\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _VideoChat_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _VideoChat_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _VideoChat_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _VideoChat_vue_vue_type_template_id_37363be6___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _VideoChat_vue_vue_type_template_id_37363be6___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"resources/js/pages/video/VideoChat.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvcGFnZXMvdmlkZW8vVmlkZW9DaGF0LnZ1ZT81NDIwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBd0Y7QUFDM0I7QUFDTDs7O0FBR3hEO0FBQ2dHO0FBQ2hHLGdCQUFnQiwyR0FBVTtBQUMxQixFQUFFLCtFQUFNO0FBQ1IsRUFBRSxvRkFBTTtBQUNSLEVBQUUsNkZBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxJQUFJLEtBQVUsRUFBRSxZQWlCZjtBQUNEO0FBQ2UsZ0YiLCJmaWxlIjoiLi9yZXNvdXJjZXMvanMvcGFnZXMvdmlkZW8vVmlkZW9DaGF0LnZ1ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vVmlkZW9DaGF0LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0zNzM2M2JlNiZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9WaWRlb0NoYXQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9WaWRlb0NoYXQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCIvdmFyL3d3dy90aWstdG9rLXRhcm90L25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGkvZGlzdC9pbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzM3MzYzYmU2JykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzM3MzYzYmU2JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzM3MzYzYmU2JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9WaWRlb0NoYXQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTM3MzYzYmU2JlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzM3MzYzYmU2Jywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJyZXNvdXJjZXMvanMvcGFnZXMvdmlkZW8vVmlkZW9DaGF0LnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./resources/js/pages/video/VideoChat.vue\n");

/***/ }),

/***/ "./resources/js/pages/video/VideoChat.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./resources/js/pages/video/VideoChat.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/*! no static exports found */
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