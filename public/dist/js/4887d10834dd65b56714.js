(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[45],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/admin/video-approval-tool/approval-list.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/admin/video-approval-tool/approval-list.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ \"./node_modules/vuex/dist/vuex.esm.js\");\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  scrollToTop: false,\n  metaInfo: function metaInfo() {\n    return {\n      title: this.$t('settings')\n    };\n  },\n  components: {},\n  data: function data() {\n    return {};\n  },\n  computed: Object(vuex__WEBPACK_IMPORTED_MODULE_0__[\"mapGetters\"])({\n    user: 'auth/user',\n    uploads: 'admin-upload-approval/uploads'\n  }),\n  methods: {\n    view: function view(id) {\n      this.$router.push({\n        name: \"admin.upload-approval\",\n        params: {\n          id: id\n        }\n      });\n    },\n    handleDecision: function handleDecision(decision) {\n      console.log(\"THIS VIDEO IS\", decision);\n    }\n  },\n  beforeMount: function beforeMount() {\n    this.$store.dispatch(\"admin-upload-approval/fetchApprovalUploads\");\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL3BhZ2VzL2FkbWluL3ZpZGVvLWFwcHJvdmFsLXRvb2wvYXBwcm92YWwtbGlzdC52dWU/OGVmZCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUE0Q0E7QUFFQTtBQUNBLG9CQURBO0FBR0EsVUFIQSxzQkFHQTtBQUNBO0FBQUE7QUFBQTtBQUNBLEdBTEE7QUFPQSxnQkFQQTtBQVVBO0FBQUE7QUFBQSxHQVZBO0FBWUE7QUFDQSxxQkFEQTtBQUVBO0FBRkEsSUFaQTtBQWlCQTtBQUNBLFFBREEsZ0JBQ0EsRUFEQSxFQUNBO0FBQ0E7QUFDQSxxQ0FEQTtBQUVBO0FBQ0E7QUFEQTtBQUZBO0FBTUEsS0FSQTtBQVVBLGtCQVZBLDBCQVVBLFFBVkEsRUFVQTtBQUNBO0FBQ0E7QUFaQSxHQWpCQTtBQWdDQSxhQWhDQSx5QkFnQ0E7QUFDQTtBQUNBO0FBbENBIiwiZmlsZSI6Ii4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPyEuL3Jlc291cmNlcy9qcy9wYWdlcy9hZG1pbi92aWRlby1hcHByb3ZhbC10b29sL2FwcHJvdmFsLWxpc3QudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJi5qcyIsInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cbiAgPGNhcmQgY2xhc3M9XCJweS0zIG0tNFwiPlxuICAgIDxoNCBjbGFzcz1cIm1iLTNcIj5QZW5kaW5nIFVwbG9hZHMgQXBwcm92YWw8L2g0PlxuICAgIDxwIGNsYXNzPVwibWItNVwiPk5lY2Vzc2l0YXRpYnVzIGVpdXMgY29uc2VxdWF0dXIgZXggYWxpcXVpZCBmdWdhIGV1bSBxdWlkZW0uPC9wPlxuICAgPHRhYmxlIGNsYXNzPVwidGFibGVcIj5cbiAgICA8dGhlYWQ+XG4gICAgICAgIDx0cj5cbiAgICAgICAgICA8dGggc2NvcGU9XCJjb2xcIj5JRDwvdGg+XG4gICAgICAgICAgPHRoIHNjb3BlPVwiY29sXCI+VXNlciBOYW1lPC90aD5cbiAgICAgICAgICA8dGggc2NvcGU9XCJjb2xcIj5Vc2VyIEVtYWlsPC90aD5cbiAgICAgICAgICA8dGggc2NvcGU9XCJjb2xcIj5UaXRsZTwvdGg+XG4gICAgICAgICAgPHRoIHNjb3BlPVwiY29sXCI+U3RhdHVzPC90aD5cbiAgICAgICAgICA8dGggc2NvcGU9XCJjb2xcIj5BY3Rpb248L3RoPlxuICAgICAgICA8L3RyPlxuICAgIDwvdGhlYWQ+XG4gICAgPHRib2R5PlxuICAgICAgICA8dHIgdi1mb3I9XCJ1IGluIHVwbG9hZHNcIiA6a2V5PVwidS5pZFwiPlxuICAgICAgICAgICAgPHRoIHNjb3BlPVwicm93XCI+e3t1LmlkfX08L3RoPlxuICAgICAgICAgICAgPHRkPnt7IHUudXNlci51c2VybmFtZSB9fTwvdGQ+XG4gICAgICAgICAgICA8dGQ+e3sgdS51c2VyLmVtYWlsIH19PC90ZD5cbiAgICAgICAgICAgIDx0ZD57eyB1LnRpdGxlIH19PC90ZD5cbiAgICAgICAgICAgIDx0ZCB2LWlmPSd1LmlzX2FwcHJvdmVkID09IFwiUEVORElOR1wiJyBjbGFzcz1cInRleHQtd2FybmluZ1wiPlBlbmRpbmc8L3RkPlxuICAgICAgICAgICAgPHRkIHYtZWxzZSA6Y2xhc3M9XCJ1LmlzX2FwcHJvdmVkID09ICdBUFBST1ZFRCcgPyAndGV4dC1zdWNjZXNzJyA6ICd0ZXh0LWRhbmdlcidcIj57eyB1LmlzX2FwcHJvdmVkID09ICdBUFBST1ZFRCcgPyAnQXBwcm92ZWQnIDogJ1JlamVjdGVkJyB9fTwvdGQ+XG4gICAgICAgICAgICA8IS0tIDx0ZD48ZGl2IGNsYXNzPVwiY3Vyc29yLXBvaW50ZXIgbGlua1wiPk1hbmFnZTwvZGl2PjwvdGQ+IC0tPlxuICAgICAgICAgICAgPHRkPlxuICAgICAgICAgICAgICA8Yi1kcm9wZG93biB2YXJpYW50PVwibGlua1wiIG5vLWNhcmV0PlxuICAgICAgICAgICAgICAgIDx0ZW1wbGF0ZSAjYnV0dG9uLWNvbnRlbnQ+XG4gICAgICAgICAgICAgICAgICA8Yi1pY29uLXRocmVlLWRvdHMgc3R5bGU9XCJjb2xvcjpibGFjayAhaW1wb3J0YW50O1wiLz5cbiAgICAgICAgICAgICAgICA8L3RlbXBsYXRlPlxuXG4gICAgICAgICAgICAgICAgPGItZHJvcGRvd24taXRlbSBAY2xpY2s9XCJoYW5kbGVEZWNpc2lvbihcImFwcHJvdmVcIik+PGItaWNvbi1jaGVjay8+IEFwcHJvdmU8L2ItZHJvcGRvd24taXRlbT5cbiAgICAgICAgICAgICAgICA8Yi1kcm9wZG93bi1pdGVtIEBjbGljaz1cImhhbmRsZURlY2lzaW9uKFwicmVqZWN0XCIpPjxiLWljb24teC8+IFJlamVjdDwvYi1kcm9wZG93bi1pdGVtPlxuICAgICAgICAgICAgICA8L2ItZHJvcGRvd24+XG4gICAgICAgICAgICA8L3RkPlxuICAgICAgICA8L3RyPlxuICAgICAgICA8dHI+XG4gICAgICAgICAgPHRkIGNvbHNwYW49XCI3XCIgY2xhc3M9XCJ0ZXh0LWNlbnRlclwiIHYtaWY9XCJ1cGxvYWRzID8gdXBsb2Fkcy5sZW5ndGggPD0gMCA6IGZhbHNlXCI+Tm8gUGVuZGluZyBVcGxvYWRzPC90ZD5cbiAgICAgICAgPC90cj5cbiAgICA8L3Rib2R5PlxuICAgIDwvdGFibGU+XG4gIDwvY2FyZD5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5pbXBvcnQgeyBtYXBHZXR0ZXJzIH0gZnJvbSAndnVleCdcblxuZXhwb3J0IGRlZmF1bHQge1xuICBzY3JvbGxUb1RvcDogZmFsc2UsXG5cbiAgbWV0YUluZm8gKCkge1xuICAgIHJldHVybiB7IHRpdGxlOiB0aGlzLiR0KCdzZXR0aW5ncycpIH1cbiAgfSxcblxuICBjb21wb25lbnRzOiB7XG4gIH0sXG5cbiAgZGF0YTogKCkgPT4gKHt9KSxcblxuICBjb21wdXRlZDogbWFwR2V0dGVycyh7XG4gICAgdXNlcjogJ2F1dGgvdXNlcicsXG4gICAgdXBsb2FkczogJ2FkbWluLXVwbG9hZC1hcHByb3ZhbC91cGxvYWRzJyxcbiAgfSksXG5cbiAgbWV0aG9kczoge1xuICAgICAgdmlldyhpZCl7XG4gICAgICAgIHRoaXMuJHJvdXRlci5wdXNoKHtcbiAgICAgICAgICAgIG5hbWU6IFwiYWRtaW4udXBsb2FkLWFwcHJvdmFsXCIsXG4gICAgICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICAgICAgICBpZDogaWRcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9LFxuXG4gICAgICBoYW5kbGVEZWNpc2lvbihkZWNpc2lvbil7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiVEhJUyBWSURFTyBJU1wiLCBkZWNpc2lvbik7XG4gICAgICB9XG4gIH0sXG5cbiAgYmVmb3JlTW91bnQoKXtcbiAgICAgIHRoaXMuJHN0b3JlLmRpc3BhdGNoKFwiYWRtaW4tdXBsb2FkLWFwcHJvdmFsL2ZldGNoQXBwcm92YWxVcGxvYWRzXCIpO1xuICB9XG59XG48L3NjcmlwdD5cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/admin/video-approval-tool/approval-list.vue?vue&type=script&lang=js&\n");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/admin/video-approval-tool/approval-list.vue?vue&type=template&id=472d0ee0&":
/*!*************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/admin/video-approval-tool/approval-list.vue?vue&type=template&id=472d0ee0& ***!
  \*************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\"card\", { staticClass: \"py-3 m-4\" }, [\n    _c(\"h4\", { staticClass: \"mb-3\" }, [_vm._v(\"Pending Uploads Approval\")]),\n    _vm._v(\" \"),\n    _c(\"p\", { staticClass: \"mb-5\" }, [\n      _vm._v(\"Necessitatibus eius consequatur ex aliquid fuga eum quidem.\")\n    ]),\n    _vm._v(\" \"),\n    _c(\"table\", { staticClass: \"table\" }, [\n      _c(\"thead\", [\n        _c(\"tr\", [\n          _c(\"th\", { attrs: { scope: \"col\" } }, [_vm._v(\"ID\")]),\n          _vm._v(\" \"),\n          _c(\"th\", { attrs: { scope: \"col\" } }, [_vm._v(\"User Name\")]),\n          _vm._v(\" \"),\n          _c(\"th\", { attrs: { scope: \"col\" } }, [_vm._v(\"User Email\")]),\n          _vm._v(\" \"),\n          _c(\"th\", { attrs: { scope: \"col\" } }, [_vm._v(\"Title\")]),\n          _vm._v(\" \"),\n          _c(\"th\", { attrs: { scope: \"col\" } }, [_vm._v(\"Status\")]),\n          _vm._v(\" \"),\n          _c(\"th\", { attrs: { scope: \"col\" } }, [_vm._v(\"Action\")])\n        ])\n      ]),\n      _vm._v(\" \"),\n      _c(\n        \"tbody\",\n        [\n          _vm._l(_vm.uploads, function(u) {\n            return _c(\"tr\", { key: u.id }, [\n              _c(\"th\", { attrs: { scope: \"row\" } }, [_vm._v(_vm._s(u.id))]),\n              _vm._v(\" \"),\n              _c(\"td\", [_vm._v(_vm._s(u.user.username))]),\n              _vm._v(\" \"),\n              _c(\"td\", [_vm._v(_vm._s(u.user.email))]),\n              _vm._v(\" \"),\n              _c(\"td\", [_vm._v(_vm._s(u.title))]),\n              _vm._v(\" \"),\n              u.is_approved == \"PENDING\"\n                ? _c(\"td\", { staticClass: \"text-warning\" }, [_vm._v(\"Pending\")])\n                : _c(\n                    \"td\",\n                    {\n                      class:\n                        u.is_approved == \"APPROVED\"\n                          ? \"text-success\"\n                          : \"text-danger\"\n                    },\n                    [\n                      _vm._v(\n                        _vm._s(\n                          u.is_approved == \"APPROVED\" ? \"Approved\" : \"Rejected\"\n                        )\n                      )\n                    ]\n                  ),\n              _vm._v(\" \"),\n              _c(\n                \"td\",\n                [\n                  _c(\n                    \"b-dropdown\",\n                    {\n                      attrs: { variant: \"link\", \"no-caret\": \"\" },\n                      scopedSlots: _vm._u(\n                        [\n                          {\n                            key: \"button-content\",\n                            fn: function() {\n                              return [\n                                _c(\"b-icon-three-dots\", {\n                                  staticStyle: { color: \"black !important\" }\n                                })\n                              ]\n                            },\n                            proxy: true\n                          }\n                        ],\n                        null,\n                        true\n                      )\n                    },\n                    [\n                      _vm._v(\" \"),\n                      _vm._v('\")>'),\n                      _c(\"b-icon-check\"),\n                      _vm._v(\" Approve\"),\n                      _vm._v(\" \"),\n                      _vm._v('\")>'),\n                      _c(\"b-icon-x\"),\n                      _vm._v(\" Reject\")\n                    ],\n                    1\n                  )\n                ],\n                1\n              )\n            ])\n          }),\n          _vm._v(\" \"),\n          _c(\"tr\", [\n            (_vm.uploads\n            ? _vm.uploads.length <= 0\n            : false)\n              ? _c(\n                  \"td\",\n                  { staticClass: \"text-center\", attrs: { colspan: \"7\" } },\n                  [_vm._v(\"No Pending Uploads\")]\n                )\n              : _vm._e()\n          ])\n        ],\n        2\n      )\n    ])\n  ])\n}\nvar staticRenderFns = []\nrender._withStripped = true\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvcGFnZXMvYWRtaW4vdmlkZW8tYXBwcm92YWwtdG9vbC9hcHByb3ZhbC1saXN0LnZ1ZT81OWRlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLDBCQUEwQjtBQUMvQyxjQUFjLHNCQUFzQjtBQUNwQztBQUNBLGFBQWEsc0JBQXNCO0FBQ25DO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQix1QkFBdUI7QUFDeEM7QUFDQTtBQUNBLG9CQUFvQixTQUFTLGVBQWUsRUFBRTtBQUM5QztBQUNBLG9CQUFvQixTQUFTLGVBQWUsRUFBRTtBQUM5QztBQUNBLG9CQUFvQixTQUFTLGVBQWUsRUFBRTtBQUM5QztBQUNBLG9CQUFvQixTQUFTLGVBQWUsRUFBRTtBQUM5QztBQUNBLG9CQUFvQixTQUFTLGVBQWUsRUFBRTtBQUM5QztBQUNBLG9CQUFvQixTQUFTLGVBQWUsRUFBRTtBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QixZQUFZO0FBQ3pDLHdCQUF3QixTQUFTLGVBQWUsRUFBRTtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLDhCQUE4QjtBQUMxRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEIsa0NBQWtDO0FBQ2hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0RBQWdEO0FBQ2hELGlDQUFpQztBQUNqQztBQUNBLDZCQUE2QjtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIscUNBQXFDLGVBQWUsRUFBRTtBQUN6RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/IS4vcmVzb3VyY2VzL2pzL3BhZ2VzL2FkbWluL3ZpZGVvLWFwcHJvdmFsLXRvb2wvYXBwcm92YWwtbGlzdC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NDcyZDBlZTAmLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcImNhcmRcIiwgeyBzdGF0aWNDbGFzczogXCJweS0zIG0tNFwiIH0sIFtcbiAgICBfYyhcImg0XCIsIHsgc3RhdGljQ2xhc3M6IFwibWItM1wiIH0sIFtfdm0uX3YoXCJQZW5kaW5nIFVwbG9hZHMgQXBwcm92YWxcIildKSxcbiAgICBfdm0uX3YoXCIgXCIpLFxuICAgIF9jKFwicFwiLCB7IHN0YXRpY0NsYXNzOiBcIm1iLTVcIiB9LCBbXG4gICAgICBfdm0uX3YoXCJOZWNlc3NpdGF0aWJ1cyBlaXVzIGNvbnNlcXVhdHVyIGV4IGFsaXF1aWQgZnVnYSBldW0gcXVpZGVtLlwiKVxuICAgIF0pLFxuICAgIF92bS5fdihcIiBcIiksXG4gICAgX2MoXCJ0YWJsZVwiLCB7IHN0YXRpY0NsYXNzOiBcInRhYmxlXCIgfSwgW1xuICAgICAgX2MoXCJ0aGVhZFwiLCBbXG4gICAgICAgIF9jKFwidHJcIiwgW1xuICAgICAgICAgIF9jKFwidGhcIiwgeyBhdHRyczogeyBzY29wZTogXCJjb2xcIiB9IH0sIFtfdm0uX3YoXCJJRFwiKV0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJ0aFwiLCB7IGF0dHJzOiB7IHNjb3BlOiBcImNvbFwiIH0gfSwgW192bS5fdihcIlVzZXIgTmFtZVwiKV0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJ0aFwiLCB7IGF0dHJzOiB7IHNjb3BlOiBcImNvbFwiIH0gfSwgW192bS5fdihcIlVzZXIgRW1haWxcIildKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwidGhcIiwgeyBhdHRyczogeyBzY29wZTogXCJjb2xcIiB9IH0sIFtfdm0uX3YoXCJUaXRsZVwiKV0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJ0aFwiLCB7IGF0dHJzOiB7IHNjb3BlOiBcImNvbFwiIH0gfSwgW192bS5fdihcIlN0YXR1c1wiKV0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJ0aFwiLCB7IGF0dHJzOiB7IHNjb3BlOiBcImNvbFwiIH0gfSwgW192bS5fdihcIkFjdGlvblwiKV0pXG4gICAgICAgIF0pXG4gICAgICBdKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcbiAgICAgICAgXCJ0Ym9keVwiLFxuICAgICAgICBbXG4gICAgICAgICAgX3ZtLl9sKF92bS51cGxvYWRzLCBmdW5jdGlvbih1KSB7XG4gICAgICAgICAgICByZXR1cm4gX2MoXCJ0clwiLCB7IGtleTogdS5pZCB9LCBbXG4gICAgICAgICAgICAgIF9jKFwidGhcIiwgeyBhdHRyczogeyBzY29wZTogXCJyb3dcIiB9IH0sIFtfdm0uX3YoX3ZtLl9zKHUuaWQpKV0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcInRkXCIsIFtfdm0uX3YoX3ZtLl9zKHUudXNlci51c2VybmFtZSkpXSksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFwidGRcIiwgW192bS5fdihfdm0uX3ModS51c2VyLmVtYWlsKSldKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCBbX3ZtLl92KF92bS5fcyh1LnRpdGxlKSldKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgdS5pc19hcHByb3ZlZCA9PSBcIlBFTkRJTkdcIlxuICAgICAgICAgICAgICAgID8gX2MoXCJ0ZFwiLCB7IHN0YXRpY0NsYXNzOiBcInRleHQtd2FybmluZ1wiIH0sIFtfdm0uX3YoXCJQZW5kaW5nXCIpXSlcbiAgICAgICAgICAgICAgICA6IF9jKFxuICAgICAgICAgICAgICAgICAgICBcInRkXCIsXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzczpcbiAgICAgICAgICAgICAgICAgICAgICAgIHUuaXNfYXBwcm92ZWQgPT0gXCJBUFBST1ZFRFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgID8gXCJ0ZXh0LXN1Y2Nlc3NcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwidGV4dC1kYW5nZXJcIlxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKFxuICAgICAgICAgICAgICAgICAgICAgICAgICB1LmlzX2FwcHJvdmVkID09IFwiQVBQUk9WRURcIiA/IFwiQXBwcm92ZWRcIiA6IFwiUmVqZWN0ZWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJ0ZFwiLFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcImItZHJvcGRvd25cIixcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHZhcmlhbnQ6IFwibGlua1wiLCBcIm5vLWNhcmV0XCI6IFwiXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICBzY29wZWRTbG90czogX3ZtLl91KFxuICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5OiBcImJ1dHRvbi1jb250ZW50XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm46IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJiLWljb24tdGhyZWUtZG90c1wiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljU3R5bGU6IHsgY29sb3I6IFwiYmxhY2sgIWltcG9ydGFudFwiIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3h5OiB0cnVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICBudWxsLFxuICAgICAgICAgICAgICAgICAgICAgICAgdHJ1ZVxuICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KCdcIik+JyksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJiLWljb24tY2hlY2tcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIEFwcHJvdmVcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoJ1wiKT4nKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcImItaWNvbi14XCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBSZWplY3RcIilcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICBdKVxuICAgICAgICAgIH0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJ0clwiLCBbXG4gICAgICAgICAgICAoX3ZtLnVwbG9hZHNcbiAgICAgICAgICAgID8gX3ZtLnVwbG9hZHMubGVuZ3RoIDw9IDBcbiAgICAgICAgICAgIDogZmFsc2UpXG4gICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICBcInRkXCIsXG4gICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcInRleHQtY2VudGVyXCIsIGF0dHJzOiB7IGNvbHNwYW46IFwiN1wiIH0gfSxcbiAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJObyBQZW5kaW5nIFVwbG9hZHNcIildXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgICAgXSlcbiAgICAgICAgXSxcbiAgICAgICAgMlxuICAgICAgKVxuICAgIF0pXG4gIF0pXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/admin/video-approval-tool/approval-list.vue?vue&type=template&id=472d0ee0&\n");

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