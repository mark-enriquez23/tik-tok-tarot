(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[47],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/video/VideoChat.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/video/VideoChat.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: 'video-chat',\n  data: function data() {\n    return {\n      accessToken: '',\n      roomSid: '',\n      name: this.$route.params.roomName\n    };\n  },\n  methods: {\n    getAccessToken: function getAccessToken() {\n      console.log('Video chat room loading...');\n\n      var _this = this;\n\n      var axios = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\"); // Request a new token\n\n\n      axios.get(\"/api/video/access_token/\".concat(this.name)).then(function (response) {\n        _this.accessToken = response.data;\n      })[\"catch\"](function (error) {\n        console.log(error);\n      }).then(function () {\n        _this.connectToRoom();\n      });\n    },\n    connectToRoom: function connectToRoom() {\n      var _this2 = this;\n\n      var _require = __webpack_require__(/*! twilio-video */ \"./node_modules/twilio-video/es5/index.js\"),\n          connect = _require.connect,\n          createLocalVideoTrack = _require.createLocalVideoTrack;\n\n      connect(this.accessToken, {\n        name: this.name\n      }).then(function (room) {\n        console.log(\"Successfully joined a Room: \".concat(room));\n        console.log(\"Data::\", room.sid);\n        _this2.roomSid = room.sid;\n        var videoChatWindow = document.getElementById('my-video-chat-window');\n        createLocalVideoTrack().then(function (track) {\n          videoChatWindow.appendChild(track.attach());\n        });\n        room.on('participantConnected', function (participant) {\n          console.log(\"Participant \\\"\".concat(participant.identity, \"\\\" connected\"));\n          participant.tracks.forEach(function (publication) {\n            if (publication.isSubscribed) {\n              var track = publication.track;\n              videoChatWindow.appendChild(track.attach());\n            }\n          });\n          participant.on('trackSubscribed', function (track) {\n            videoChatWindow.appendChild(track.attach());\n          });\n        });\n      }, function (error) {\n        console.error(\"Unable to connect to Room: \".concat(error.message));\n      });\n    }\n  },\n  mounted: function mounted() {\n    var axios = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n\n    console.log(this.name);\n    axios.get(\"/api/video/\".concat(this.name)).then(function (response) {\n      console.log(response);\n    })[\"catch\"](function (err) {\n      console.log(err.status);\n    }); // this.getAccessToken()\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL3BhZ2VzL3ZpZGVvL1ZpZGVvQ2hhdC52dWU/ZGU0YiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFZQTtBQUNBLG9CQURBO0FBRUE7QUFDQTtBQUNBLHFCQURBO0FBRUEsaUJBRkE7QUFHQTtBQUhBO0FBS0EsR0FSQTtBQVNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFDQSxvRkFKQSxDQU1BOzs7QUFDQSw4REFDQSxJQURBLENBQ0E7QUFDQTtBQUNBLE9BSEEsV0FJQTtBQUNBO0FBQ0EsT0FOQSxFQU9BLElBUEEsQ0FPQTtBQUNBO0FBQ0EsT0FUQTtBQVVBLEtBbEJBO0FBb0JBO0FBQUE7O0FBQUEscUJBRUEsbUZBRkE7QUFBQSxVQUVBLE9BRkEsWUFFQSxPQUZBO0FBQUEsVUFFQSxxQkFGQSxZQUVBLHFCQUZBOztBQUlBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBLFNBRkE7QUFJQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBTEE7QUFPQTtBQUNBO0FBQ0EsV0FGQTtBQUdBLFNBYkE7QUFlQSxPQTNCQSxFQTJCQTtBQUNBO0FBQ0EsT0E3QkE7QUE4QkE7QUF0REEsR0FUQTtBQWtFQTtBQUNBOztBQUNBO0FBRUEsK0NBQ0EsSUFEQSxDQUNBO0FBQ0E7QUFDQSxLQUhBLFdBSUE7QUFDQTtBQUNBLEtBTkEsRUFKQSxDQVdBO0FBQ0E7QUE5RUEiLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/IS4vcmVzb3VyY2VzL2pzL3BhZ2VzL3ZpZGVvL1ZpZGVvQ2hhdC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmLmpzIiwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuICAgIDxkaXYgY2xhc3M9XCJwLTUgdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgPGgxIGNsYXNzPVwidGV4dC0yeGwgbWItNFwiPkxhcmF2ZWwgVmlkZW8gQ2hhdDwvaDE+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJncmlkIGdyaWQtZmxvdy1yb3cgZ3JpZC1jb2xzLTMgZ3JpZC1yb3dzLTMgZ2FwLTQgYmctYmxhY2tcIj5cbiAgICAgICAgICAgIDxkaXYgaWQ9XCJteS12aWRlby1jaGF0LXdpbmRvd1wiPlxuICAgICAgICAgICAgICA8YnV0dG9uIEBjbGljaz0nZ2V0QWNjZXNzVG9rZW4nIHYtaWY9XCIhYWNjZXNzVG9rZW4gJiYgbmFtZVwiPiBTdGFydCBCcm9hZGNhc3RpbmcgPC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuZXhwb3J0IGRlZmF1bHQge1xuICAgIG5hbWU6ICd2aWRlby1jaGF0JyxcbiAgICBkYXRhOiBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBhY2Nlc3NUb2tlbjogJycsXG4gICAgICAgIHJvb21TaWQ6ICcnLFxuICAgICAgICBuYW1lOiB0aGlzLiRyb3V0ZS5wYXJhbXMucm9vbU5hbWUsXG4gICAgICB9XG4gICAgfSxcbiAgICBtZXRob2RzIDoge1xuICAgIGdldEFjY2Vzc1Rva2VuIDogZnVuY3Rpb24gKCkge1xuICAgICAgICBjb25zb2xlLmxvZygnVmlkZW8gY2hhdCByb29tIGxvYWRpbmcuLi4nKTtcblxuICAgICAgICBjb25zdCBfdGhpcyA9IHRoaXNcbiAgICAgICAgY29uc3QgYXhpb3MgPSByZXF1aXJlKCdheGlvcycpXG5cbiAgICAgICAgLy8gUmVxdWVzdCBhIG5ldyB0b2tlblxuICAgICAgICBheGlvcy5nZXQoYC9hcGkvdmlkZW8vYWNjZXNzX3Rva2VuLyR7dGhpcy5uYW1lfWApXG4gICAgICAgICAgICAudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcbiAgICAgICAgICAgICAgICBfdGhpcy5hY2Nlc3NUb2tlbiA9IHJlc3BvbnNlLmRhdGFcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBfdGhpcy5jb25uZWN0VG9Sb29tKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICxcbiAgICBjb25uZWN0VG9Sb29tIDogZnVuY3Rpb24gKCkge1xuXG4gICAgICAgIGNvbnN0IHsgY29ubmVjdCwgY3JlYXRlTG9jYWxWaWRlb1RyYWNrIH0gPSByZXF1aXJlKCd0d2lsaW8tdmlkZW8nKTtcblxuICAgICAgICBjb25uZWN0KCB0aGlzLmFjY2Vzc1Rva2VuLCB7IG5hbWU6dGhpcy5uYW1lIH0pLnRoZW4ocm9vbSA9PiB7XG5cbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGBTdWNjZXNzZnVsbHkgam9pbmVkIGEgUm9vbTogJHtyb29tfWApO1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJEYXRhOjpcIiwgcm9vbS5zaWQpO1xuICAgICAgICAgICAgdGhpcy5yb29tU2lkID0gcm9vbS5zaWQ7XG5cbiAgICAgICAgICAgIGNvbnN0IHZpZGVvQ2hhdFdpbmRvdyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdteS12aWRlby1jaGF0LXdpbmRvdycpO1xuXG4gICAgICAgICAgICBjcmVhdGVMb2NhbFZpZGVvVHJhY2soKS50aGVuKHRyYWNrID0+IHtcbiAgICAgICAgICAgICAgICB2aWRlb0NoYXRXaW5kb3cuYXBwZW5kQ2hpbGQodHJhY2suYXR0YWNoKCkpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIHJvb20ub24oJ3BhcnRpY2lwYW50Q29ubmVjdGVkJywgcGFydGljaXBhbnQgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgUGFydGljaXBhbnQgXCIke3BhcnRpY2lwYW50LmlkZW50aXR5fVwiIGNvbm5lY3RlZGApO1xuXG4gICAgICAgICAgICAgICAgICAgIHBhcnRpY2lwYW50LnRyYWNrcy5mb3JFYWNoKHB1YmxpY2F0aW9uID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwdWJsaWNhdGlvbi5pc1N1YnNjcmliZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB0cmFjayA9IHB1YmxpY2F0aW9uLnRyYWNrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZpZGVvQ2hhdFdpbmRvdy5hcHBlbmRDaGlsZCh0cmFjay5hdHRhY2goKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgICAgIHBhcnRpY2lwYW50Lm9uKCd0cmFja1N1YnNjcmliZWQnLCB0cmFjayA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2aWRlb0NoYXRXaW5kb3cuYXBwZW5kQ2hpbGQodHJhY2suYXR0YWNoKCkpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICB9LCBlcnJvciA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGBVbmFibGUgdG8gY29ubmVjdCB0byBSb29tOiAke2Vycm9yLm1lc3NhZ2V9YCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0sXG5cbiAgICBtb3VudGVkIDogZnVuY3Rpb24gKCkge1xuICAgICAgY29uc3QgYXhpb3MgPSByZXF1aXJlKCdheGlvcycpO1xuICAgICAgY29uc29sZS5sb2codGhpcy5uYW1lKVxuXG4gICAgICBheGlvcy5nZXQoYC9hcGkvdmlkZW8vJHt0aGlzLm5hbWV9YClcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT57XG4gICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKGVycik9PntcbiAgICAgICAgY29uc29sZS5sb2coZXJyLnN0YXR1cyk7XG4gICAgICB9KVxuICAgICAgICAvLyB0aGlzLmdldEFjY2Vzc1Rva2VuKClcbiAgICB9XG59XG48L3NjcmlwdD5cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/video/VideoChat.vue?vue&type=script&lang=js&\n");

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