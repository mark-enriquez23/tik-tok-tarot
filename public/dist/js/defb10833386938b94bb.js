(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[45],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/admin/video-approval-tool/approval-list.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/admin/video-approval-tool/approval-list.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  scrollToTop: false,\n  metaInfo: function metaInfo() {\n    return {\n      title: this.$t('PENDING UPLOADS')\n    };\n  },\n  components: {},\n  data: function data() {\n    return {\n      videos: []\n    };\n  },\n  methods: {\n    fetchVideos: function fetchVideos() {\n      var _this = this;\n\n      axios.get('/api/vlog/status/PENDING').then(function (res) {\n        _this.videos = res.data.data;\n      })[\"catch\"](function (e) {\n        swalOops('A problem occurred');\n      });\n    }\n  },\n  beforeMount: function beforeMount() {\n    this.$store.dispatch('auth/fetchUser');\n\n    if (!this.user) {\n      this.$router.push({\n        name: 'home'\n      });\n    }\n\n    this.fetchVideos();\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL3BhZ2VzL2FkbWluL3ZpZGVvLWFwcHJvdmFsLXRvb2wvYXBwcm92YWwtbGlzdC52dWU/OGVmZCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBa0NBO0FBQ0Esb0JBREE7QUFHQSxVQUhBLHNCQUdBO0FBQ0E7QUFBQTtBQUFBO0FBQ0EsR0FMQTtBQU9BLGdCQVBBO0FBVUE7QUFBQTtBQUNBO0FBREE7QUFBQSxHQVZBO0FBY0E7QUFFQSxlQUZBLHlCQUVBO0FBQUE7O0FBQ0E7QUFDQTtBQUVBLE9BSEEsV0FHQTtBQUNBO0FBQ0EsT0FMQTtBQU1BO0FBVEEsR0FkQTtBQTBCQSxhQTFCQSx5QkEwQkE7QUFDQTs7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBOztBQUNBO0FBRUE7QUFqQ0EiLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/IS4vcmVzb3VyY2VzL2pzL3BhZ2VzL2FkbWluL3ZpZGVvLWFwcHJvdmFsLXRvb2wvYXBwcm92YWwtbGlzdC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmLmpzIiwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuICA8Y2FyZCBjbGFzcz1cInB5LTMgbS00XCI+XG4gICAgPGg0IGNsYXNzPVwibWItM1wiPlBlbmRpbmcgVXBsb2FkcyBBcHByb3ZhbDwvaDQ+XG4gICAgPHAgY2xhc3M9XCJtYi01XCI+TmVjZXNzaXRhdGlidXMgZWl1cyBjb25zZXF1YXR1ciBleCBhbGlxdWlkIGZ1Z2EgZXVtIHF1aWRlbS48L3A+XG4gICA8dGFibGUgY2xhc3M9XCJ0YWJsZVwiPlxuICAgIDx0aGVhZD5cbiAgICAgICAgPHRyPlxuICAgICAgICAgIDx0aCBzY29wZT1cImNvbFwiPklEPC90aD5cbiAgICAgICAgICA8dGggc2NvcGU9XCJjb2xcIj5Vc2VyIE5hbWU8L3RoPlxuICAgICAgICAgIDx0aCBzY29wZT1cImNvbFwiPlVzZXIgRW1haWw8L3RoPlxuICAgICAgICAgIDx0aCBzY29wZT1cImNvbFwiPlRpdGxlPC90aD5cbiAgICAgICAgICA8dGggc2NvcGU9XCJjb2xcIj5TdGF0dXM8L3RoPlxuICAgICAgICAgIDx0aCBzY29wZT1cImNvbFwiPkFjdGlvbjwvdGg+XG4gICAgICAgIDwvdHI+XG4gICAgPC90aGVhZD5cbiAgICA8dGJvZHk+XG4gICAgICAgIDx0ciB2LWZvcj1cInZpZGVvIGluIHZpZGVvc1wiIDprZXk9XCJ2aWRlby5pZFwiPlxuICAgICAgICAgICAgPHRoIHNjb3BlPVwicm93XCI+e3t1LmlkfX08L3RoPlxuICAgICAgICAgICAgPHRkPnt7IHZpZGVvLnVzZXIudXNlcm5hbWUgfX08L3RkPlxuICAgICAgICAgICAgPHRkPnt7IHZpZGVvLnVzZXIuZW1haWwgfX08L3RkPlxuICAgICAgICAgICAgPHRkPnt7IHZpZGVvLnRpdGxlIH19PC90ZD5cbiAgICAgICAgICAgIDx0ZCB2LWlmPSd2aWRlby5pc19hcHByb3ZlZCA9PSBcIlBFTkRJTkdcIicgY2xhc3M9XCJ0ZXh0LXdhcm5pbmdcIj5QZW5kaW5nPC90ZD5cbiAgICAgICAgICAgIDx0ZCB2LWVsc2UgOmNsYXNzPVwidmlkZW8uaXNfYXBwcm92ZWQgPT0gJ0FQUFJPVkVEJyA/ICd0ZXh0LXN1Y2Nlc3MnIDogJ3RleHQtZGFuZ2VyJ1wiPnt7IHUuaXNfYXBwcm92ZWQgPT0gJ0FQUFJPVkVEJyA/ICdBcHByb3ZlZCcgOiAnUmVqZWN0ZWQnIH19PC90ZD5cbiAgICAgICAgICAgIDx0ZD48ZGl2IGNsYXNzPVwiY3Vyc29yLXBvaW50ZXIgbGlua1wiPk1hbmFnZTwvZGl2PjwvdGQ+XG4gICAgICAgIDwvdHI+XG4gICAgICAgIDx0cj5cbiAgICAgICAgICA8dGQgY29sc3Bhbj1cIjdcIiBjbGFzcz1cInRleHQtY2VudGVyXCIgdi1pZj1cInVwbG9hZHMgPyB1cGxvYWRzLmxlbmd0aCA8PSAwIDogZmFsc2VcIj5ObyBQZW5kaW5nIFVwbG9hZHM8L3RkPlxuICAgICAgICA8L3RyPlxuICAgIDwvdGJvZHk+XG4gICAgPC90YWJsZT5cbiAgPC9jYXJkPlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgc2Nyb2xsVG9Ub3A6IGZhbHNlLFxuXG4gIG1ldGFJbmZvICgpIHtcbiAgICByZXR1cm4geyB0aXRsZTogdGhpcy4kdCgnUEVORElORyBVUExPQURTJykgfVxuICB9LFxuXG4gIGNvbXBvbmVudHM6IHtcbiAgfSxcblxuICBkYXRhOiAoKSA9PiAoe1xuICAgIHZpZGVvczogW11cbiAgfSksXG5cbiAgbWV0aG9kczoge1xuXG4gICAgICBmZXRjaFZpZGVvcygpe1xuICAgICAgICBheGlvcy5nZXQoJy9hcGkvdmxvZy9zdGF0dXMvUEVORElORycpLnRoZW4ocmVzPT57XG4gICAgICAgIHRoaXMudmlkZW9zID0gcmVzLmRhdGEuZGF0YTtcblxuICAgICAgfSkuY2F0Y2goKGUpPT57XG4gICAgICAgIHN3YWxPb3BzKCdBIHByb2JsZW0gb2NjdXJyZWQnKTtcbiAgICAgIH0pXG4gICAgfSxcbiAgfSxcblxuICBiZWZvcmVNb3VudCgpe1xuICAgICAgdGhpcy4kc3RvcmUuZGlzcGF0Y2goJ2F1dGgvZmV0Y2hVc2VyJyk7XG4gICAgICBpZiAoIXRoaXMudXNlcil7XG4gICAgICAgIHRoaXMuJHJvdXRlci5wdXNoKHsgbmFtZTogJ2hvbWUnIH0pXG4gICAgICB9XG4gICAgICB0aGlzLmZldGNoVmlkZW9zKCk7XG5cbiAgfVxufVxuPC9zY3JpcHQ+XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/admin/video-approval-tool/approval-list.vue?vue&type=script&lang=js&\n");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/admin/video-approval-tool/approval-list.vue?vue&type=template&id=472d0ee0&":
/*!*************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/admin/video-approval-tool/approval-list.vue?vue&type=template&id=472d0ee0& ***!
  \*************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\"card\", { staticClass: \"py-3 m-4\" }, [\n    _c(\"h4\", { staticClass: \"mb-3\" }, [_vm._v(\"Pending Uploads Approval\")]),\n    _vm._v(\" \"),\n    _c(\"p\", { staticClass: \"mb-5\" }, [\n      _vm._v(\"Necessitatibus eius consequatur ex aliquid fuga eum quidem.\")\n    ]),\n    _vm._v(\" \"),\n    _c(\"table\", { staticClass: \"table\" }, [\n      _c(\"thead\", [\n        _c(\"tr\", [\n          _c(\"th\", { attrs: { scope: \"col\" } }, [_vm._v(\"ID\")]),\n          _vm._v(\" \"),\n          _c(\"th\", { attrs: { scope: \"col\" } }, [_vm._v(\"User Name\")]),\n          _vm._v(\" \"),\n          _c(\"th\", { attrs: { scope: \"col\" } }, [_vm._v(\"User Email\")]),\n          _vm._v(\" \"),\n          _c(\"th\", { attrs: { scope: \"col\" } }, [_vm._v(\"Title\")]),\n          _vm._v(\" \"),\n          _c(\"th\", { attrs: { scope: \"col\" } }, [_vm._v(\"Status\")]),\n          _vm._v(\" \"),\n          _c(\"th\", { attrs: { scope: \"col\" } }, [_vm._v(\"Action\")])\n        ])\n      ]),\n      _vm._v(\" \"),\n      _c(\n        \"tbody\",\n        [\n          _vm._l(_vm.videos, function(video) {\n            return _c(\"tr\", { key: video.id }, [\n              _c(\"th\", { attrs: { scope: \"row\" } }, [_vm._v(_vm._s(_vm.u.id))]),\n              _vm._v(\" \"),\n              _c(\"td\", [_vm._v(_vm._s(video.user.username))]),\n              _vm._v(\" \"),\n              _c(\"td\", [_vm._v(_vm._s(video.user.email))]),\n              _vm._v(\" \"),\n              _c(\"td\", [_vm._v(_vm._s(video.title))]),\n              _vm._v(\" \"),\n              video.is_approved == \"PENDING\"\n                ? _c(\"td\", { staticClass: \"text-warning\" }, [_vm._v(\"Pending\")])\n                : _c(\n                    \"td\",\n                    {\n                      class:\n                        video.is_approved == \"APPROVED\"\n                          ? \"text-success\"\n                          : \"text-danger\"\n                    },\n                    [\n                      _vm._v(\n                        _vm._s(\n                          _vm.u.is_approved == \"APPROVED\"\n                            ? \"Approved\"\n                            : \"Rejected\"\n                        )\n                      )\n                    ]\n                  ),\n              _vm._v(\" \"),\n              _c(\"td\", [\n                _c(\"div\", { staticClass: \"cursor-pointer link\" }, [\n                  _vm._v(\"Manage\")\n                ])\n              ])\n            ])\n          }),\n          _vm._v(\" \"),\n          _c(\"tr\", [\n            (_vm.uploads\n            ? _vm.uploads.length <= 0\n            : false)\n              ? _c(\n                  \"td\",\n                  { staticClass: \"text-center\", attrs: { colspan: \"7\" } },\n                  [_vm._v(\"No Pending Uploads\")]\n                )\n              : _vm._e()\n          ])\n        ],\n        2\n      )\n    ])\n  ])\n}\nvar staticRenderFns = []\nrender._withStripped = true\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvcGFnZXMvYWRtaW4vdmlkZW8tYXBwcm92YWwtdG9vbC9hcHByb3ZhbC1saXN0LnZ1ZT81OWRlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLDBCQUEwQjtBQUMvQyxjQUFjLHNCQUFzQjtBQUNwQztBQUNBLGFBQWEsc0JBQXNCO0FBQ25DO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQix1QkFBdUI7QUFDeEM7QUFDQTtBQUNBLG9CQUFvQixTQUFTLGVBQWUsRUFBRTtBQUM5QztBQUNBLG9CQUFvQixTQUFTLGVBQWUsRUFBRTtBQUM5QztBQUNBLG9CQUFvQixTQUFTLGVBQWUsRUFBRTtBQUM5QztBQUNBLG9CQUFvQixTQUFTLGVBQWUsRUFBRTtBQUM5QztBQUNBLG9CQUFvQixTQUFTLGVBQWUsRUFBRTtBQUM5QztBQUNBLG9CQUFvQixTQUFTLGVBQWUsRUFBRTtBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QixnQkFBZ0I7QUFDN0Msd0JBQXdCLFNBQVMsZUFBZSxFQUFFO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsOEJBQThCO0FBQzFEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQixxQ0FBcUM7QUFDaEU7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIscUNBQXFDLGVBQWUsRUFBRTtBQUN6RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/IS4vcmVzb3VyY2VzL2pzL3BhZ2VzL2FkbWluL3ZpZGVvLWFwcHJvdmFsLXRvb2wvYXBwcm92YWwtbGlzdC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NDcyZDBlZTAmLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcImNhcmRcIiwgeyBzdGF0aWNDbGFzczogXCJweS0zIG0tNFwiIH0sIFtcbiAgICBfYyhcImg0XCIsIHsgc3RhdGljQ2xhc3M6IFwibWItM1wiIH0sIFtfdm0uX3YoXCJQZW5kaW5nIFVwbG9hZHMgQXBwcm92YWxcIildKSxcbiAgICBfdm0uX3YoXCIgXCIpLFxuICAgIF9jKFwicFwiLCB7IHN0YXRpY0NsYXNzOiBcIm1iLTVcIiB9LCBbXG4gICAgICBfdm0uX3YoXCJOZWNlc3NpdGF0aWJ1cyBlaXVzIGNvbnNlcXVhdHVyIGV4IGFsaXF1aWQgZnVnYSBldW0gcXVpZGVtLlwiKVxuICAgIF0pLFxuICAgIF92bS5fdihcIiBcIiksXG4gICAgX2MoXCJ0YWJsZVwiLCB7IHN0YXRpY0NsYXNzOiBcInRhYmxlXCIgfSwgW1xuICAgICAgX2MoXCJ0aGVhZFwiLCBbXG4gICAgICAgIF9jKFwidHJcIiwgW1xuICAgICAgICAgIF9jKFwidGhcIiwgeyBhdHRyczogeyBzY29wZTogXCJjb2xcIiB9IH0sIFtfdm0uX3YoXCJJRFwiKV0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJ0aFwiLCB7IGF0dHJzOiB7IHNjb3BlOiBcImNvbFwiIH0gfSwgW192bS5fdihcIlVzZXIgTmFtZVwiKV0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJ0aFwiLCB7IGF0dHJzOiB7IHNjb3BlOiBcImNvbFwiIH0gfSwgW192bS5fdihcIlVzZXIgRW1haWxcIildKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwidGhcIiwgeyBhdHRyczogeyBzY29wZTogXCJjb2xcIiB9IH0sIFtfdm0uX3YoXCJUaXRsZVwiKV0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJ0aFwiLCB7IGF0dHJzOiB7IHNjb3BlOiBcImNvbFwiIH0gfSwgW192bS5fdihcIlN0YXR1c1wiKV0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJ0aFwiLCB7IGF0dHJzOiB7IHNjb3BlOiBcImNvbFwiIH0gfSwgW192bS5fdihcIkFjdGlvblwiKV0pXG4gICAgICAgIF0pXG4gICAgICBdKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcbiAgICAgICAgXCJ0Ym9keVwiLFxuICAgICAgICBbXG4gICAgICAgICAgX3ZtLl9sKF92bS52aWRlb3MsIGZ1bmN0aW9uKHZpZGVvKSB7XG4gICAgICAgICAgICByZXR1cm4gX2MoXCJ0clwiLCB7IGtleTogdmlkZW8uaWQgfSwgW1xuICAgICAgICAgICAgICBfYyhcInRoXCIsIHsgYXR0cnM6IHsgc2NvcGU6IFwicm93XCIgfSB9LCBbX3ZtLl92KF92bS5fcyhfdm0udS5pZCkpXSksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFwidGRcIiwgW192bS5fdihfdm0uX3ModmlkZW8udXNlci51c2VybmFtZSkpXSksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFwidGRcIiwgW192bS5fdihfdm0uX3ModmlkZW8udXNlci5lbWFpbCkpXSksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFwidGRcIiwgW192bS5fdihfdm0uX3ModmlkZW8udGl0bGUpKV0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICB2aWRlby5pc19hcHByb3ZlZCA9PSBcIlBFTkRJTkdcIlxuICAgICAgICAgICAgICAgID8gX2MoXCJ0ZFwiLCB7IHN0YXRpY0NsYXNzOiBcInRleHQtd2FybmluZ1wiIH0sIFtfdm0uX3YoXCJQZW5kaW5nXCIpXSlcbiAgICAgICAgICAgICAgICA6IF9jKFxuICAgICAgICAgICAgICAgICAgICBcInRkXCIsXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzczpcbiAgICAgICAgICAgICAgICAgICAgICAgIHZpZGVvLmlzX2FwcHJvdmVkID09IFwiQVBQUk9WRURcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwidGV4dC1zdWNjZXNzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcInRleHQtZGFuZ2VyXCJcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnUuaXNfYXBwcm92ZWQgPT0gXCJBUFBST1ZFRFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcIkFwcHJvdmVkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwiUmVqZWN0ZWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCBbXG4gICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjdXJzb3ItcG9pbnRlciBsaW5rXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiTWFuYWdlXCIpXG4gICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgIF0pXG4gICAgICAgICAgfSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcInRyXCIsIFtcbiAgICAgICAgICAgIChfdm0udXBsb2Fkc1xuICAgICAgICAgICAgPyBfdm0udXBsb2Fkcy5sZW5ndGggPD0gMFxuICAgICAgICAgICAgOiBmYWxzZSlcbiAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgIFwidGRcIixcbiAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwidGV4dC1jZW50ZXJcIiwgYXR0cnM6IHsgY29sc3BhbjogXCI3XCIgfSB9LFxuICAgICAgICAgICAgICAgICAgW192bS5fdihcIk5vIFBlbmRpbmcgVXBsb2Fkc1wiKV1cbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgICBdKVxuICAgICAgICBdLFxuICAgICAgICAyXG4gICAgICApXG4gICAgXSlcbiAgXSlcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/admin/video-approval-tool/approval-list.vue?vue&type=template&id=472d0ee0&\n");

/***/ }),

/***/ "./resources/js/pages/admin/video-approval-tool/approval-list.vue":
/*!************************************************************************!*\
  !*** ./resources/js/pages/admin/video-approval-tool/approval-list.vue ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _approval_list_vue_vue_type_template_id_472d0ee0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./approval-list.vue?vue&type=template&id=472d0ee0& */ \"./resources/js/pages/admin/video-approval-tool/approval-list.vue?vue&type=template&id=472d0ee0&\");\n/* harmony import */ var _approval_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./approval-list.vue?vue&type=script&lang=js& */ \"./resources/js/pages/admin/video-approval-tool/approval-list.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _approval_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _approval_list_vue_vue_type_template_id_472d0ee0___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _approval_list_vue_vue_type_template_id_472d0ee0___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"resources/js/pages/admin/video-approval-tool/approval-list.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvcGFnZXMvYWRtaW4vdmlkZW8tYXBwcm92YWwtdG9vbC9hcHByb3ZhbC1saXN0LnZ1ZT83YjNmIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQTRGO0FBQzNCO0FBQ0w7OztBQUc1RDtBQUNtRztBQUNuRyxnQkFBZ0IsMkdBQVU7QUFDMUIsRUFBRSxtRkFBTTtBQUNSLEVBQUUsd0ZBQU07QUFDUixFQUFFLGlHQUFlO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsSUFBSSxLQUFVLEVBQUUsWUFpQmY7QUFDRDtBQUNlLGdGIiwiZmlsZSI6Ii4vcmVzb3VyY2VzL2pzL3BhZ2VzL2FkbWluL3ZpZGVvLWFwcHJvdmFsLXRvb2wvYXBwcm92YWwtbGlzdC52dWUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL2FwcHJvdmFsLWxpc3QudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTQ3MmQwZWUwJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL2FwcHJvdmFsLWxpc3QudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9hcHByb3ZhbC1saXN0LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiL1VzZXJzL2FkbWluaXN0cmF0b3IvRG9jdW1lbnRzL0dpdEh1Yi90aWstdG9rLXRhcm90L25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGkvZGlzdC9pbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzQ3MmQwZWUwJykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzQ3MmQwZWUwJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzQ3MmQwZWUwJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9hcHByb3ZhbC1saXN0LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD00NzJkMGVlMCZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCc0NzJkMGVlMCcsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicmVzb3VyY2VzL2pzL3BhZ2VzL2FkbWluL3ZpZGVvLWFwcHJvdmFsLXRvb2wvYXBwcm92YWwtbGlzdC52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./resources/js/pages/admin/video-approval-tool/approval-list.vue\n");

/***/ }),

/***/ "./resources/js/pages/admin/video-approval-tool/approval-list.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************!*\
  !*** ./resources/js/pages/admin/video-approval-tool/approval-list.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_approval_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./approval-list.vue?vue&type=script&lang=js& */ \"./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/admin/video-approval-tool/approval-list.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_approval_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvcGFnZXMvYWRtaW4vdmlkZW8tYXBwcm92YWwtdG9vbC9hcHByb3ZhbC1saXN0LnZ1ZT82ZmJkIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQSx3Q0FBeU0sQ0FBZ0IseVBBQUcsRUFBQyIsImZpbGUiOiIuL3Jlc291cmNlcy9qcy9wYWdlcy9hZG1pbi92aWRlby1hcHByb3ZhbC10b29sL2FwcHJvdmFsLWxpc3QudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNC0wIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vYXBwcm92YWwtbGlzdC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNC0wIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vYXBwcm92YWwtbGlzdC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./resources/js/pages/admin/video-approval-tool/approval-list.vue?vue&type=script&lang=js&\n");

/***/ }),

/***/ "./resources/js/pages/admin/video-approval-tool/approval-list.vue?vue&type=template&id=472d0ee0&":
/*!*******************************************************************************************************!*\
  !*** ./resources/js/pages/admin/video-approval-tool/approval-list.vue?vue&type=template&id=472d0ee0& ***!
  \*******************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_approval_list_vue_vue_type_template_id_472d0ee0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./approval-list.vue?vue&type=template&id=472d0ee0& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/admin/video-approval-tool/approval-list.vue?vue&type=template&id=472d0ee0&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_approval_list_vue_vue_type_template_id_472d0ee0___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_approval_list_vue_vue_type_template_id_472d0ee0___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvcGFnZXMvYWRtaW4vdmlkZW8tYXBwcm92YWwtdG9vbC9hcHByb3ZhbC1saXN0LnZ1ZT82ODE2Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSIsImZpbGUiOiIuL3Jlc291cmNlcy9qcy9wYWdlcy9hZG1pbi92aWRlby1hcHByb3ZhbC10b29sL2FwcHJvdmFsLWxpc3QudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTQ3MmQwZWUwJi5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9hcHByb3ZhbC1saXN0LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD00NzJkMGVlMCZcIiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./resources/js/pages/admin/video-approval-tool/approval-list.vue?vue&type=template&id=472d0ee0&\n");

/***/ })

}]);