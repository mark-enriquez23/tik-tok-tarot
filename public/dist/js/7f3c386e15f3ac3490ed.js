(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[27],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/admin/video-approval-tool/approval-list.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/admin/video-approval-tool/approval-list.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ \"./node_modules/vuex/dist/vuex.esm.js\");\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  scrollToTop: false,\n  metaInfo: function metaInfo() {\n    return {\n      title: this.$t('settings')\n    };\n  },\n  components: {},\n  data: function data() {\n    return {};\n  },\n  computed: Object(vuex__WEBPACK_IMPORTED_MODULE_0__[\"mapGetters\"])({\n    user: 'auth/user',\n    uploads: 'admin-upload-approval/uploads'\n  }),\n  created: function created() {},\n  methods: {\n    view: function view(id) {\n      this.$router.push({\n        name: \"admin.upload-approval\",\n        params: {\n          id: id\n        }\n      });\n    }\n  },\n  beforeMount: function beforeMount() {\n    this.$store.dispatch(\"admin-upload-approval/fetchApprovalUploads\");\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL3BhZ2VzL2FkbWluL3ZpZGVvLWFwcHJvdmFsLXRvb2wvYXBwcm92YWwtbGlzdC52dWU/OGVmZCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWtDQTtBQUVBO0FBQ0Esb0JBREE7QUFHQSxVQUhBLHNCQUdBO0FBQ0E7QUFBQTtBQUFBO0FBQ0EsR0FMQTtBQU9BLGdCQVBBO0FBVUE7QUFBQTtBQUFBLEdBVkE7QUFZQTtBQUNBLHFCQURBO0FBRUE7QUFGQSxJQVpBO0FBaUJBLFNBakJBLHFCQWlCQSxDQUNBLENBbEJBO0FBb0JBO0FBQ0EsUUFEQSxnQkFDQSxFQURBLEVBQ0E7QUFDQTtBQUNBLHFDQURBO0FBRUE7QUFDQTtBQURBO0FBRkE7QUFNQTtBQVJBLEdBcEJBO0FBK0JBLGFBL0JBLHlCQStCQTtBQUNBO0FBQ0E7QUFqQ0EiLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/IS4vcmVzb3VyY2VzL2pzL3BhZ2VzL2FkbWluL3ZpZGVvLWFwcHJvdmFsLXRvb2wvYXBwcm92YWwtbGlzdC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmLmpzIiwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxyXG4gIDxjYXJkIGNsYXNzPVwicHktMyBtLTRcIj5cclxuICAgIDxoNCBjbGFzcz1cIm1iLTNcIj5QZW5kaW5nIFVwbG9hZHMgQXBwcm92YWw8L2g0PlxyXG4gICAgPHAgY2xhc3M9XCJtYi01XCI+TmVjZXNzaXRhdGlidXMgZWl1cyBjb25zZXF1YXR1ciBleCBhbGlxdWlkIGZ1Z2EgZXVtIHF1aWRlbS48L3A+XHJcbiAgIDx0YWJsZSBjbGFzcz1cInRhYmxlXCI+XHJcbiAgICA8dGhlYWQ+XHJcbiAgICAgICAgPHRyPlxyXG4gICAgICAgICAgPHRoIHNjb3BlPVwiY29sXCI+SUQ8L3RoPlxyXG4gICAgICAgICAgPHRoIHNjb3BlPVwiY29sXCI+VXNlciBOYW1lPC90aD5cclxuICAgICAgICAgIDx0aCBzY29wZT1cImNvbFwiPlVzZXIgRW1haWw8L3RoPlxyXG4gICAgICAgICAgPHRoIHNjb3BlPVwiY29sXCI+VXBsb2FkIE5hbWU8L3RoPlxyXG4gICAgICAgICAgPHRoIHNjb3BlPVwiY29sXCI+U3RhdHVzPC90aD5cclxuICAgICAgICAgIDx0aCBzY29wZT1cImNvbFwiPkFjdGlvbjwvdGg+XHJcbiAgICAgICAgPC90cj5cclxuICAgIDwvdGhlYWQ+XHJcbiAgICA8dGJvZHk+XHJcbiAgICAgICAgPHRyIHYtZm9yPVwidSBpbiB1cGxvYWRzXCIgOmtleT1cInUuaWRcIj5cclxuICAgICAgICAgICAgPHRoIHNjb3BlPVwicm93XCI+e3t1LmlkfX08L3RoPlxyXG4gICAgICAgICAgICA8dGQ+e3sgdS51c2VyLm5hbWUgfX08L3RkPiAgXHJcbiAgICAgICAgICAgIDx0ZD57eyB1LnVzZXIuZW1haWwgfX08L3RkPlxyXG4gICAgICAgICAgICA8dGQ+e3sgdS51cGxvYWQubmFtZSB9fTwvdGQ+XHJcbiAgICAgICAgICAgIDx0ZCB2LWlmPSd1LmlzX3BlbmRpbmcgPT0gMCcgY2xhc3M9XCJ0ZXh0LWRhbmdlclwiPlBlbmRpbmc8L3RkPlxyXG4gICAgICAgICAgICA8dGQgdi1lbHNlIDpjbGFzcz1cInUuaXNfYXBwcm92ZWQgPyAndGV4dC1zdWNjZXNzJyA6ICd0ZXh0LWRhbmdlcidcIj57eyB1LmlzX2FwcHJvdmVkID8gJ0FwcHJvdmVkJyA6ICdSZWplY3RlZCcgfX08L3RkPlxyXG4gICAgICAgICAgICA8dGQ+PGRpdiBjbGFzcz1cImN1cnNvci1wb2ludGVyIGxpbmtcIiBAY2xpY2s9XCJ2aWV3KHUuaWQpXCI+TWFuYWdlPC9kaXY+PC90ZD5cclxuICAgICAgICA8L3RyPlxyXG4gICAgICAgIDx0cj5cclxuICAgICAgICAgIDx0ZCBjb2xzcGFuPVwiN1wiIGNsYXNzPVwidGV4dC1jZW50ZXJcIiB2LWlmPVwidXBsb2FkcyA/IHVwbG9hZHMubGVuZ3RoIDw9IDAgOiBmYWxzZVwiPk5vIFBlbmRpbmcgVXBsb2FkczwvdGQ+XHJcbiAgICAgICAgPC90cj5cclxuICAgIDwvdGJvZHk+XHJcbiAgICA8L3RhYmxlPlxyXG4gIDwvY2FyZD5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcbmltcG9ydCB7IG1hcEdldHRlcnMgfSBmcm9tICd2dWV4J1xyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gIHNjcm9sbFRvVG9wOiBmYWxzZSxcclxuXHJcbiAgbWV0YUluZm8gKCkge1xyXG4gICAgcmV0dXJuIHsgdGl0bGU6IHRoaXMuJHQoJ3NldHRpbmdzJykgfVxyXG4gIH0sXHJcblxyXG4gIGNvbXBvbmVudHM6IHtcclxuICB9LFxyXG5cclxuICBkYXRhOiAoKSA9PiAoe30pLFxyXG5cclxuICBjb21wdXRlZDogbWFwR2V0dGVycyh7XHJcbiAgICB1c2VyOiAnYXV0aC91c2VyJyxcclxuICAgIHVwbG9hZHM6ICdhZG1pbi11cGxvYWQtYXBwcm92YWwvdXBsb2FkcycsXHJcbiAgfSksXHJcblxyXG4gIGNyZWF0ZWQgKCkge1xyXG4gIH0sXHJcblxyXG4gIG1ldGhvZHM6IHtcclxuICAgICAgdmlldyhpZCl7XHJcbiAgICAgICAgdGhpcy4kcm91dGVyLnB1c2goe1xyXG4gICAgICAgICAgICBuYW1lOiBcImFkbWluLnVwbG9hZC1hcHByb3ZhbFwiLFxyXG4gICAgICAgICAgICBwYXJhbXM6IHtcclxuICAgICAgICAgICAgICAgIGlkOiBpZFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICB9LFxyXG5cclxuICBiZWZvcmVNb3VudCgpe1xyXG4gICAgICB0aGlzLiRzdG9yZS5kaXNwYXRjaChcImFkbWluLXVwbG9hZC1hcHByb3ZhbC9mZXRjaEFwcHJvdmFsVXBsb2Fkc1wiKTtcclxuICB9XHJcbn1cclxuPC9zY3JpcHQ+XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/admin/video-approval-tool/approval-list.vue?vue&type=script&lang=js&\n");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/admin/video-approval-tool/approval-list.vue?vue&type=template&id=472d0ee0&":
/*!*************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/admin/video-approval-tool/approval-list.vue?vue&type=template&id=472d0ee0& ***!
  \*************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\"card\", { staticClass: \"py-3 m-4\" }, [\n    _c(\"h4\", { staticClass: \"mb-3\" }, [_vm._v(\"Pending Uploads Approval\")]),\n    _vm._v(\" \"),\n    _c(\"p\", { staticClass: \"mb-5\" }, [\n      _vm._v(\"Necessitatibus eius consequatur ex aliquid fuga eum quidem.\")\n    ]),\n    _vm._v(\" \"),\n    _c(\"table\", { staticClass: \"table\" }, [\n      _c(\"thead\", [\n        _c(\"tr\", [\n          _c(\"th\", { attrs: { scope: \"col\" } }, [_vm._v(\"ID\")]),\n          _vm._v(\" \"),\n          _c(\"th\", { attrs: { scope: \"col\" } }, [_vm._v(\"User Name\")]),\n          _vm._v(\" \"),\n          _c(\"th\", { attrs: { scope: \"col\" } }, [_vm._v(\"User Email\")]),\n          _vm._v(\" \"),\n          _c(\"th\", { attrs: { scope: \"col\" } }, [_vm._v(\"Upload Name\")]),\n          _vm._v(\" \"),\n          _c(\"th\", { attrs: { scope: \"col\" } }, [_vm._v(\"Status\")]),\n          _vm._v(\" \"),\n          _c(\"th\", { attrs: { scope: \"col\" } }, [_vm._v(\"Action\")])\n        ])\n      ]),\n      _vm._v(\" \"),\n      _c(\n        \"tbody\",\n        [\n          _vm._l(_vm.uploads, function(u) {\n            return _c(\"tr\", { key: u.id }, [\n              _c(\"th\", { attrs: { scope: \"row\" } }, [_vm._v(_vm._s(u.id))]),\n              _vm._v(\" \"),\n              _c(\"td\", [_vm._v(_vm._s(u.user.name))]),\n              _vm._v(\" \"),\n              _c(\"td\", [_vm._v(_vm._s(u.user.email))]),\n              _vm._v(\" \"),\n              _c(\"td\", [_vm._v(_vm._s(u.upload.name))]),\n              _vm._v(\" \"),\n              u.is_pending == 0\n                ? _c(\"td\", { staticClass: \"text-danger\" }, [_vm._v(\"Pending\")])\n                : _c(\n                    \"td\",\n                    { class: u.is_approved ? \"text-success\" : \"text-danger\" },\n                    [_vm._v(_vm._s(u.is_approved ? \"Approved\" : \"Rejected\"))]\n                  ),\n              _vm._v(\" \"),\n              _c(\"td\", [\n                _c(\n                  \"div\",\n                  {\n                    staticClass: \"cursor-pointer link\",\n                    on: {\n                      click: function($event) {\n                        return _vm.view(u.id)\n                      }\n                    }\n                  },\n                  [_vm._v(\"Manage\")]\n                )\n              ])\n            ])\n          }),\n          _vm._v(\" \"),\n          _c(\"tr\", [\n            (_vm.uploads\n            ? _vm.uploads.length <= 0\n            : false)\n              ? _c(\n                  \"td\",\n                  { staticClass: \"text-center\", attrs: { colspan: \"7\" } },\n                  [_vm._v(\"No Pending Uploads\")]\n                )\n              : _vm._e()\n          ])\n        ],\n        2\n      )\n    ])\n  ])\n}\nvar staticRenderFns = []\nrender._withStripped = true\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvcGFnZXMvYWRtaW4vdmlkZW8tYXBwcm92YWwtdG9vbC9hcHByb3ZhbC1saXN0LnZ1ZT81OWRlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLDBCQUEwQjtBQUMvQyxjQUFjLHNCQUFzQjtBQUNwQztBQUNBLGFBQWEsc0JBQXNCO0FBQ25DO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQix1QkFBdUI7QUFDeEM7QUFDQTtBQUNBLG9CQUFvQixTQUFTLGVBQWUsRUFBRTtBQUM5QztBQUNBLG9CQUFvQixTQUFTLGVBQWUsRUFBRTtBQUM5QztBQUNBLG9CQUFvQixTQUFTLGVBQWUsRUFBRTtBQUM5QztBQUNBLG9CQUFvQixTQUFTLGVBQWUsRUFBRTtBQUM5QztBQUNBLG9CQUFvQixTQUFTLGVBQWUsRUFBRTtBQUM5QztBQUNBLG9CQUFvQixTQUFTLGVBQWUsRUFBRTtBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QixZQUFZO0FBQ3pDLHdCQUF3QixTQUFTLGVBQWUsRUFBRTtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLDZCQUE2QjtBQUN6RDtBQUNBO0FBQ0EscUJBQXFCLHdEQUF3RDtBQUM3RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQjtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixxQ0FBcUMsZUFBZSxFQUFFO0FBQ3pFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiIuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPyEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8hLi9yZXNvdXJjZXMvanMvcGFnZXMvYWRtaW4vdmlkZW8tYXBwcm92YWwtdG9vbC9hcHByb3ZhbC1saXN0LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD00NzJkMGVlMCYuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFwiY2FyZFwiLCB7IHN0YXRpY0NsYXNzOiBcInB5LTMgbS00XCIgfSwgW1xuICAgIF9jKFwiaDRcIiwgeyBzdGF0aWNDbGFzczogXCJtYi0zXCIgfSwgW192bS5fdihcIlBlbmRpbmcgVXBsb2FkcyBBcHByb3ZhbFwiKV0pLFxuICAgIF92bS5fdihcIiBcIiksXG4gICAgX2MoXCJwXCIsIHsgc3RhdGljQ2xhc3M6IFwibWItNVwiIH0sIFtcbiAgICAgIF92bS5fdihcIk5lY2Vzc2l0YXRpYnVzIGVpdXMgY29uc2VxdWF0dXIgZXggYWxpcXVpZCBmdWdhIGV1bSBxdWlkZW0uXCIpXG4gICAgXSksXG4gICAgX3ZtLl92KFwiIFwiKSxcbiAgICBfYyhcInRhYmxlXCIsIHsgc3RhdGljQ2xhc3M6IFwidGFibGVcIiB9LCBbXG4gICAgICBfYyhcInRoZWFkXCIsIFtcbiAgICAgICAgX2MoXCJ0clwiLCBbXG4gICAgICAgICAgX2MoXCJ0aFwiLCB7IGF0dHJzOiB7IHNjb3BlOiBcImNvbFwiIH0gfSwgW192bS5fdihcIklEXCIpXSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcInRoXCIsIHsgYXR0cnM6IHsgc2NvcGU6IFwiY29sXCIgfSB9LCBbX3ZtLl92KFwiVXNlciBOYW1lXCIpXSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcInRoXCIsIHsgYXR0cnM6IHsgc2NvcGU6IFwiY29sXCIgfSB9LCBbX3ZtLl92KFwiVXNlciBFbWFpbFwiKV0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJ0aFwiLCB7IGF0dHJzOiB7IHNjb3BlOiBcImNvbFwiIH0gfSwgW192bS5fdihcIlVwbG9hZCBOYW1lXCIpXSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcInRoXCIsIHsgYXR0cnM6IHsgc2NvcGU6IFwiY29sXCIgfSB9LCBbX3ZtLl92KFwiU3RhdHVzXCIpXSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcInRoXCIsIHsgYXR0cnM6IHsgc2NvcGU6IFwiY29sXCIgfSB9LCBbX3ZtLl92KFwiQWN0aW9uXCIpXSlcbiAgICAgICAgXSlcbiAgICAgIF0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFxuICAgICAgICBcInRib2R5XCIsXG4gICAgICAgIFtcbiAgICAgICAgICBfdm0uX2woX3ZtLnVwbG9hZHMsIGZ1bmN0aW9uKHUpIHtcbiAgICAgICAgICAgIHJldHVybiBfYyhcInRyXCIsIHsga2V5OiB1LmlkIH0sIFtcbiAgICAgICAgICAgICAgX2MoXCJ0aFwiLCB7IGF0dHJzOiB7IHNjb3BlOiBcInJvd1wiIH0gfSwgW192bS5fdihfdm0uX3ModS5pZCkpXSksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFwidGRcIiwgW192bS5fdihfdm0uX3ModS51c2VyLm5hbWUpKV0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcInRkXCIsIFtfdm0uX3YoX3ZtLl9zKHUudXNlci5lbWFpbCkpXSksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFwidGRcIiwgW192bS5fdihfdm0uX3ModS51cGxvYWQubmFtZSkpXSksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIHUuaXNfcGVuZGluZyA9PSAwXG4gICAgICAgICAgICAgICAgPyBfYyhcInRkXCIsIHsgc3RhdGljQ2xhc3M6IFwidGV4dC1kYW5nZXJcIiB9LCBbX3ZtLl92KFwiUGVuZGluZ1wiKV0pXG4gICAgICAgICAgICAgICAgOiBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJ0ZFwiLFxuICAgICAgICAgICAgICAgICAgICB7IGNsYXNzOiB1LmlzX2FwcHJvdmVkID8gXCJ0ZXh0LXN1Y2Nlc3NcIiA6IFwidGV4dC1kYW5nZXJcIiB9LFxuICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KF92bS5fcyh1LmlzX2FwcHJvdmVkID8gXCJBcHByb3ZlZFwiIDogXCJSZWplY3RlZFwiKSldXG4gICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcInRkXCIsIFtcbiAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImN1cnNvci1wb2ludGVyIGxpbmtcIixcbiAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLnZpZXcodS5pZClcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBbX3ZtLl92KFwiTWFuYWdlXCIpXVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgIF0pXG4gICAgICAgICAgfSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcInRyXCIsIFtcbiAgICAgICAgICAgIChfdm0udXBsb2Fkc1xuICAgICAgICAgICAgPyBfdm0udXBsb2Fkcy5sZW5ndGggPD0gMFxuICAgICAgICAgICAgOiBmYWxzZSlcbiAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgIFwidGRcIixcbiAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwidGV4dC1jZW50ZXJcIiwgYXR0cnM6IHsgY29sc3BhbjogXCI3XCIgfSB9LFxuICAgICAgICAgICAgICAgICAgW192bS5fdihcIk5vIFBlbmRpbmcgVXBsb2Fkc1wiKV1cbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgICBdKVxuICAgICAgICBdLFxuICAgICAgICAyXG4gICAgICApXG4gICAgXSlcbiAgXSlcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/admin/video-approval-tool/approval-list.vue?vue&type=template&id=472d0ee0&\n");

/***/ }),

/***/ "./resources/js/pages/admin/video-approval-tool/approval-list.vue":
/*!************************************************************************!*\
  !*** ./resources/js/pages/admin/video-approval-tool/approval-list.vue ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _approval_list_vue_vue_type_template_id_472d0ee0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./approval-list.vue?vue&type=template&id=472d0ee0& */ \"./resources/js/pages/admin/video-approval-tool/approval-list.vue?vue&type=template&id=472d0ee0&\");\n/* harmony import */ var _approval_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./approval-list.vue?vue&type=script&lang=js& */ \"./resources/js/pages/admin/video-approval-tool/approval-list.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _approval_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _approval_list_vue_vue_type_template_id_472d0ee0___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _approval_list_vue_vue_type_template_id_472d0ee0___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"resources/js/pages/admin/video-approval-tool/approval-list.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvcGFnZXMvYWRtaW4vdmlkZW8tYXBwcm92YWwtdG9vbC9hcHByb3ZhbC1saXN0LnZ1ZT83YjNmIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQTRGO0FBQzNCO0FBQ0w7OztBQUc1RDtBQUNtRztBQUNuRyxnQkFBZ0IsMkdBQVU7QUFDMUIsRUFBRSxtRkFBTTtBQUNSLEVBQUUsd0ZBQU07QUFDUixFQUFFLGlHQUFlO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsSUFBSSxLQUFVLEVBQUUsWUFpQmY7QUFDRDtBQUNlLGdGIiwiZmlsZSI6Ii4vcmVzb3VyY2VzL2pzL3BhZ2VzL2FkbWluL3ZpZGVvLWFwcHJvdmFsLXRvb2wvYXBwcm92YWwtbGlzdC52dWUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL2FwcHJvdmFsLWxpc3QudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTQ3MmQwZWUwJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL2FwcHJvdmFsLWxpc3QudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9hcHByb3ZhbC1saXN0LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiQzpcXFxcbGFyYWdvblxcXFx3d3dcXFxcdGlrLXRvay10YXJvdFxcXFxub2RlX21vZHVsZXNcXFxcdnVlLWhvdC1yZWxvYWQtYXBpXFxcXGRpc3RcXFxcaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCc0NzJkMGVlMCcpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCc0NzJkMGVlMCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCc0NzJkMGVlMCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vYXBwcm92YWwtbGlzdC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NDcyZDBlZTAmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignNDcyZDBlZTAnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInJlc291cmNlcy9qcy9wYWdlcy9hZG1pbi92aWRlby1hcHByb3ZhbC10b29sL2FwcHJvdmFsLWxpc3QudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./resources/js/pages/admin/video-approval-tool/approval-list.vue\n");

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