(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[24],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/admin/video-approval-tool/approval-list.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/admin/video-approval-tool/approval-list.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ \"./node_modules/vuex/dist/vuex.esm.js\");\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  scrollToTop: false,\n  metaInfo: function metaInfo() {\n    return {\n      title: this.$t('settings')\n    };\n  },\n  components: {},\n  data: function data() {\n    return {\n      u: {\n        'id': 2,\n        'user': {\n          'name': 'Sample',\n          'email': 'temp-mail@tempmail.com'\n        },\n        'upload': {\n          'name': 'Sample Video'\n        },\n        'is_approved': false\n      }\n    };\n  },\n  computed: Object(vuex__WEBPACK_IMPORTED_MODULE_0__[\"mapGetters\"])({\n    user: 'auth/user',\n    uploads: 'admin-upload-approval/uploads'\n  }),\n  created: function created() {},\n  methods: {\n    view: function view(id) {\n      this.$router.push({\n        name: \"admin.upload-approval\",\n        params: {\n          id: id\n        }\n      });\n    }\n  },\n  beforeMount: function beforeMount() {\n    this.$store.dispatch(\"admin-upload-approval/fetchApprovalUploads\");\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL3BhZ2VzL2FkbWluL3ZpZGVvLWFwcHJvdmFsLXRvb2wvYXBwcm92YWwtbGlzdC52dWU/OGVmZCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBaUNBO0FBRUE7QUFDQSxvQkFEQTtBQUdBLFVBSEEsc0JBR0E7QUFDQTtBQUFBO0FBQUE7QUFDQSxHQUxBO0FBT0EsZ0JBUEE7QUFVQTtBQUFBO0FBQ0E7QUFDQSxlQURBO0FBRUE7QUFDQSwwQkFEQTtBQUVBO0FBRkEsU0FGQTtBQU1BO0FBQ0E7QUFEQSxTQU5BO0FBU0E7QUFUQTtBQURBO0FBQUEsR0FWQTtBQXdCQTtBQUNBLHFCQURBO0FBRUE7QUFGQSxJQXhCQTtBQTZCQSxTQTdCQSxxQkE2QkEsQ0FDQSxDQTlCQTtBQWdDQTtBQUNBLFFBREEsZ0JBQ0EsRUFEQSxFQUNBO0FBQ0E7QUFDQSxxQ0FEQTtBQUVBO0FBQ0E7QUFEQTtBQUZBO0FBTUE7QUFSQSxHQWhDQTtBQTJDQSxhQTNDQSx5QkEyQ0E7QUFDQTtBQUNBO0FBN0NBIiwiZmlsZSI6Ii4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPyEuL3Jlc291cmNlcy9qcy9wYWdlcy9hZG1pbi92aWRlby1hcHByb3ZhbC10b29sL2FwcHJvdmFsLWxpc3QudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJi5qcyIsInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cclxuICA8Y2FyZCBjbGFzcz1cInB5LTMgbS00XCI+XHJcbiAgICA8aDQgY2xhc3M9XCJtYi0zXCI+UGVuZGluZyBVcGxvYWRzIEFwcHJvdmFsPC9oND5cclxuICAgIDxwIGNsYXNzPVwibWItNVwiPk5lY2Vzc2l0YXRpYnVzIGVpdXMgY29uc2VxdWF0dXIgZXggYWxpcXVpZCBmdWdhIGV1bSBxdWlkZW0uPC9wPlxyXG4gICA8dGFibGUgY2xhc3M9XCJ0YWJsZVwiPlxyXG4gICAgPHRoZWFkPlxyXG4gICAgICAgIDx0cj5cclxuICAgICAgICAgIDx0aCBzY29wZT1cImNvbFwiPklEPC90aD5cclxuICAgICAgICAgIDx0aCBzY29wZT1cImNvbFwiPlVzZXIgTmFtZTwvdGg+XHJcbiAgICAgICAgICA8dGggc2NvcGU9XCJjb2xcIj5Vc2VyIEVtYWlsPC90aD5cclxuICAgICAgICAgIDx0aCBzY29wZT1cImNvbFwiPlVwbG9hZCBOYW1lPC90aD5cclxuICAgICAgICAgIDx0aCBzY29wZT1cImNvbFwiPlN0YXR1czwvdGg+XHJcbiAgICAgICAgICA8dGggc2NvcGU9XCJjb2xcIj5BY3Rpb248L3RoPlxyXG4gICAgICAgIDwvdHI+XHJcbiAgICA8L3RoZWFkPlxyXG4gICAgPHRib2R5PlxyXG4gICAgICAgIDx0ciB2LWZvcj1cInUgaW4gdXBsb2Fkc1wiIDprZXk9XCJ1LmlkXCI+XHJcbiAgICAgICAgICAgIDx0aCBzY29wZT1cInJvd1wiPnt7dS5pZH19PC90aD5cclxuICAgICAgICAgICAgPHRkPnt7IHUudXNlci5uYW1lIH19PC90ZD4gIFxyXG4gICAgICAgICAgICA8dGQ+e3sgdS51c2VyLmVtYWlsIH19PC90ZD5cclxuICAgICAgICAgICAgPHRkPnt7IHUudXBsb2FkLm5hbWUgfX08L3RkPlxyXG4gICAgICAgICAgICA8dGQgOmNsYXNzPVwidS5pc19hcHByb3ZlZCA/ICd0ZXh0LXN1Y2Nlc3MnIDogJ3RleHQtZGFuZ2VyJ1wiPnt7IHUuaXNfYXBwcm92ZWQgPyAnQXBwcm92ZWQnIDogJ1BlbmRpbmcnIH19PC90ZD5cclxuICAgICAgICAgICAgPHRkPjxkaXYgY2xhc3M9XCJjdXJzb3ItcG9pbnRlciBsaW5rXCIgQGNsaWNrPVwidmlldyh1LmlkKVwiPk1hbmFnZTwvZGl2PjwvdGQ+XHJcbiAgICAgICAgPC90cj5cclxuICAgICAgICA8dHI+XHJcbiAgICAgICAgICA8dGQgY29sc3Bhbj1cIjdcIiBjbGFzcz1cInRleHQtY2VudGVyXCIgdi1pZj1cInVwbG9hZHMgPyB1cGxvYWRzLmxlbmd0aCA8PSAwIDogZmFsc2VcIj5ObyBQZW5kaW5nIFVwbG9hZHM8L3RkPlxyXG4gICAgICAgIDwvdHI+XHJcbiAgICA8L3Rib2R5PlxyXG4gICAgPC90YWJsZT5cclxuICA8L2NhcmQ+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG5pbXBvcnQgeyBtYXBHZXR0ZXJzIH0gZnJvbSAndnVleCdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICBzY3JvbGxUb1RvcDogZmFsc2UsXHJcblxyXG4gIG1ldGFJbmZvICgpIHtcclxuICAgIHJldHVybiB7IHRpdGxlOiB0aGlzLiR0KCdzZXR0aW5ncycpIH1cclxuICB9LFxyXG5cclxuICBjb21wb25lbnRzOiB7XHJcbiAgfSxcclxuXHJcbiAgZGF0YTogKCkgPT4gKHtcclxuICAgIHU6e1xyXG4gICAgICAnaWQnOjIsXHJcbiAgICAgICd1c2VyJzp7XHJcbiAgICAgICAgJ25hbWUnOidTYW1wbGUnLFxyXG4gICAgICAgICdlbWFpbCc6J3RlbXAtbWFpbEB0ZW1wbWFpbC5jb20nXHJcbiAgICAgIH0sXHJcbiAgICAgICd1cGxvYWQnOntcclxuICAgICAgICAnbmFtZSc6J1NhbXBsZSBWaWRlbydcclxuICAgICAgfSxcclxuICAgICAgJ2lzX2FwcHJvdmVkJzpmYWxzZVxyXG4gICAgfVxyXG4gIH0pLFxyXG5cclxuICBjb21wdXRlZDogbWFwR2V0dGVycyh7XHJcbiAgICB1c2VyOiAnYXV0aC91c2VyJyxcclxuICAgIHVwbG9hZHM6ICdhZG1pbi11cGxvYWQtYXBwcm92YWwvdXBsb2FkcycsXHJcbiAgfSksXHJcblxyXG4gIGNyZWF0ZWQgKCkge1xyXG4gIH0sXHJcblxyXG4gIG1ldGhvZHM6IHtcclxuICAgICAgdmlldyhpZCl7XHJcbiAgICAgICAgdGhpcy4kcm91dGVyLnB1c2goe1xyXG4gICAgICAgICAgICBuYW1lOiBcImFkbWluLnVwbG9hZC1hcHByb3ZhbFwiLFxyXG4gICAgICAgICAgICBwYXJhbXM6IHtcclxuICAgICAgICAgICAgICAgIGlkOiBpZFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICB9LFxyXG5cclxuICBiZWZvcmVNb3VudCgpe1xyXG4gICAgICB0aGlzLiRzdG9yZS5kaXNwYXRjaChcImFkbWluLXVwbG9hZC1hcHByb3ZhbC9mZXRjaEFwcHJvdmFsVXBsb2Fkc1wiKTtcclxuICB9XHJcbn1cclxuPC9zY3JpcHQ+XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/admin/video-approval-tool/approval-list.vue?vue&type=script&lang=js&\n");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/admin/video-approval-tool/approval-list.vue?vue&type=template&id=472d0ee0&":
/*!*************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/admin/video-approval-tool/approval-list.vue?vue&type=template&id=472d0ee0& ***!
  \*************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\"card\", { staticClass: \"py-3 m-4\" }, [\n    _c(\"h4\", { staticClass: \"mb-3\" }, [_vm._v(\"Pending Uploads Approval\")]),\n    _vm._v(\" \"),\n    _c(\"p\", { staticClass: \"mb-5\" }, [\n      _vm._v(\"Necessitatibus eius consequatur ex aliquid fuga eum quidem.\")\n    ]),\n    _vm._v(\" \"),\n    _c(\"table\", { staticClass: \"table\" }, [\n      _c(\"thead\", [\n        _c(\"tr\", [\n          _c(\"th\", { attrs: { scope: \"col\" } }, [_vm._v(\"ID\")]),\n          _vm._v(\" \"),\n          _c(\"th\", { attrs: { scope: \"col\" } }, [_vm._v(\"User Name\")]),\n          _vm._v(\" \"),\n          _c(\"th\", { attrs: { scope: \"col\" } }, [_vm._v(\"User Email\")]),\n          _vm._v(\" \"),\n          _c(\"th\", { attrs: { scope: \"col\" } }, [_vm._v(\"Upload Name\")]),\n          _vm._v(\" \"),\n          _c(\"th\", { attrs: { scope: \"col\" } }, [_vm._v(\"Status\")]),\n          _vm._v(\" \"),\n          _c(\"th\", { attrs: { scope: \"col\" } }, [_vm._v(\"Action\")])\n        ])\n      ]),\n      _vm._v(\" \"),\n      _c(\n        \"tbody\",\n        [\n          _vm._l(_vm.uploads, function(u) {\n            return _c(\"tr\", { key: u.id }, [\n              _c(\"th\", { attrs: { scope: \"row\" } }, [_vm._v(_vm._s(u.id))]),\n              _vm._v(\" \"),\n              _c(\"td\", [_vm._v(_vm._s(u.user.name))]),\n              _vm._v(\" \"),\n              _c(\"td\", [_vm._v(_vm._s(u.user.email))]),\n              _vm._v(\" \"),\n              _c(\"td\", [_vm._v(_vm._s(u.upload.name))]),\n              _vm._v(\" \"),\n              _c(\n                \"td\",\n                { class: u.is_approved ? \"text-success\" : \"text-danger\" },\n                [_vm._v(_vm._s(u.is_approved ? \"Approved\" : \"Pending\"))]\n              ),\n              _vm._v(\" \"),\n              _c(\"td\", [\n                _c(\n                  \"div\",\n                  {\n                    staticClass: \"cursor-pointer link\",\n                    on: {\n                      click: function($event) {\n                        return _vm.view(u.id)\n                      }\n                    }\n                  },\n                  [_vm._v(\"Manage\")]\n                )\n              ])\n            ])\n          }),\n          _vm._v(\" \"),\n          _c(\"tr\", [\n            (_vm.uploads\n            ? _vm.uploads.length <= 0\n            : false)\n              ? _c(\n                  \"td\",\n                  { staticClass: \"text-center\", attrs: { colspan: \"7\" } },\n                  [_vm._v(\"No Pending Uploads\")]\n                )\n              : _vm._e()\n          ])\n        ],\n        2\n      )\n    ])\n  ])\n}\nvar staticRenderFns = []\nrender._withStripped = true\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvcGFnZXMvYWRtaW4vdmlkZW8tYXBwcm92YWwtdG9vbC9hcHByb3ZhbC1saXN0LnZ1ZT81OWRlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLDBCQUEwQjtBQUMvQyxjQUFjLHNCQUFzQjtBQUNwQztBQUNBLGFBQWEsc0JBQXNCO0FBQ25DO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQix1QkFBdUI7QUFDeEM7QUFDQTtBQUNBLG9CQUFvQixTQUFTLGVBQWUsRUFBRTtBQUM5QztBQUNBLG9CQUFvQixTQUFTLGVBQWUsRUFBRTtBQUM5QztBQUNBLG9CQUFvQixTQUFTLGVBQWUsRUFBRTtBQUM5QztBQUNBLG9CQUFvQixTQUFTLGVBQWUsRUFBRTtBQUM5QztBQUNBLG9CQUFvQixTQUFTLGVBQWUsRUFBRTtBQUM5QztBQUNBLG9CQUFvQixTQUFTLGVBQWUsRUFBRTtBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QixZQUFZO0FBQ3pDLHdCQUF3QixTQUFTLGVBQWUsRUFBRTtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsd0RBQXdEO0FBQ3pFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLHFDQUFxQyxlQUFlLEVBQUU7QUFDekU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6Ii4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPyEuL3Jlc291cmNlcy9qcy9wYWdlcy9hZG1pbi92aWRlby1hcHByb3ZhbC10b29sL2FwcHJvdmFsLWxpc3QudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTQ3MmQwZWUwJi5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXCJjYXJkXCIsIHsgc3RhdGljQ2xhc3M6IFwicHktMyBtLTRcIiB9LCBbXG4gICAgX2MoXCJoNFwiLCB7IHN0YXRpY0NsYXNzOiBcIm1iLTNcIiB9LCBbX3ZtLl92KFwiUGVuZGluZyBVcGxvYWRzIEFwcHJvdmFsXCIpXSksXG4gICAgX3ZtLl92KFwiIFwiKSxcbiAgICBfYyhcInBcIiwgeyBzdGF0aWNDbGFzczogXCJtYi01XCIgfSwgW1xuICAgICAgX3ZtLl92KFwiTmVjZXNzaXRhdGlidXMgZWl1cyBjb25zZXF1YXR1ciBleCBhbGlxdWlkIGZ1Z2EgZXVtIHF1aWRlbS5cIilcbiAgICBdKSxcbiAgICBfdm0uX3YoXCIgXCIpLFxuICAgIF9jKFwidGFibGVcIiwgeyBzdGF0aWNDbGFzczogXCJ0YWJsZVwiIH0sIFtcbiAgICAgIF9jKFwidGhlYWRcIiwgW1xuICAgICAgICBfYyhcInRyXCIsIFtcbiAgICAgICAgICBfYyhcInRoXCIsIHsgYXR0cnM6IHsgc2NvcGU6IFwiY29sXCIgfSB9LCBbX3ZtLl92KFwiSURcIildKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwidGhcIiwgeyBhdHRyczogeyBzY29wZTogXCJjb2xcIiB9IH0sIFtfdm0uX3YoXCJVc2VyIE5hbWVcIildKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwidGhcIiwgeyBhdHRyczogeyBzY29wZTogXCJjb2xcIiB9IH0sIFtfdm0uX3YoXCJVc2VyIEVtYWlsXCIpXSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcInRoXCIsIHsgYXR0cnM6IHsgc2NvcGU6IFwiY29sXCIgfSB9LCBbX3ZtLl92KFwiVXBsb2FkIE5hbWVcIildKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwidGhcIiwgeyBhdHRyczogeyBzY29wZTogXCJjb2xcIiB9IH0sIFtfdm0uX3YoXCJTdGF0dXNcIildKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwidGhcIiwgeyBhdHRyczogeyBzY29wZTogXCJjb2xcIiB9IH0sIFtfdm0uX3YoXCJBY3Rpb25cIildKVxuICAgICAgICBdKVxuICAgICAgXSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXG4gICAgICAgIFwidGJvZHlcIixcbiAgICAgICAgW1xuICAgICAgICAgIF92bS5fbChfdm0udXBsb2FkcywgZnVuY3Rpb24odSkge1xuICAgICAgICAgICAgcmV0dXJuIF9jKFwidHJcIiwgeyBrZXk6IHUuaWQgfSwgW1xuICAgICAgICAgICAgICBfYyhcInRoXCIsIHsgYXR0cnM6IHsgc2NvcGU6IFwicm93XCIgfSB9LCBbX3ZtLl92KF92bS5fcyh1LmlkKSldKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCBbX3ZtLl92KF92bS5fcyh1LnVzZXIubmFtZSkpXSksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFwidGRcIiwgW192bS5fdihfdm0uX3ModS51c2VyLmVtYWlsKSldKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCBbX3ZtLl92KF92bS5fcyh1LnVwbG9hZC5uYW1lKSldKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJ0ZFwiLFxuICAgICAgICAgICAgICAgIHsgY2xhc3M6IHUuaXNfYXBwcm92ZWQgPyBcInRleHQtc3VjY2Vzc1wiIDogXCJ0ZXh0LWRhbmdlclwiIH0sXG4gICAgICAgICAgICAgICAgW192bS5fdihfdm0uX3ModS5pc19hcHByb3ZlZCA/IFwiQXBwcm92ZWRcIiA6IFwiUGVuZGluZ1wiKSldXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFwidGRcIiwgW1xuICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiY3Vyc29yLXBvaW50ZXIgbGlua1wiLFxuICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0udmlldyh1LmlkKVxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJNYW5hZ2VcIildXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgXSlcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwidHJcIiwgW1xuICAgICAgICAgICAgKF92bS51cGxvYWRzXG4gICAgICAgICAgICA/IF92bS51cGxvYWRzLmxlbmd0aCA8PSAwXG4gICAgICAgICAgICA6IGZhbHNlKVxuICAgICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgICAgXCJ0ZFwiLFxuICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJ0ZXh0LWNlbnRlclwiLCBhdHRyczogeyBjb2xzcGFuOiBcIjdcIiB9IH0sXG4gICAgICAgICAgICAgICAgICBbX3ZtLl92KFwiTm8gUGVuZGluZyBVcGxvYWRzXCIpXVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICAgIF0pXG4gICAgICAgIF0sXG4gICAgICAgIDJcbiAgICAgIClcbiAgICBdKVxuICBdKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/admin/video-approval-tool/approval-list.vue?vue&type=template&id=472d0ee0&\n");

/***/ }),

/***/ "./resources/js/pages/admin/video-approval-tool/approval-list.vue":
/*!************************************************************************!*\
  !*** ./resources/js/pages/admin/video-approval-tool/approval-list.vue ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _approval_list_vue_vue_type_template_id_472d0ee0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./approval-list.vue?vue&type=template&id=472d0ee0& */ \"./resources/js/pages/admin/video-approval-tool/approval-list.vue?vue&type=template&id=472d0ee0&\");\n/* harmony import */ var _approval_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./approval-list.vue?vue&type=script&lang=js& */ \"./resources/js/pages/admin/video-approval-tool/approval-list.vue?vue&type=script&lang=js&\");\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _approval_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _approval_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _approval_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _approval_list_vue_vue_type_template_id_472d0ee0___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _approval_list_vue_vue_type_template_id_472d0ee0___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"resources/js/pages/admin/video-approval-tool/approval-list.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvcGFnZXMvYWRtaW4vdmlkZW8tYXBwcm92YWwtdG9vbC9hcHByb3ZhbC1saXN0LnZ1ZT83YjNmIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBNEY7QUFDM0I7QUFDTDs7O0FBRzVEO0FBQ21HO0FBQ25HLGdCQUFnQiwyR0FBVTtBQUMxQixFQUFFLG1GQUFNO0FBQ1IsRUFBRSx3RkFBTTtBQUNSLEVBQUUsaUdBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxJQUFJLEtBQVUsRUFBRSxZQWlCZjtBQUNEO0FBQ2UsZ0YiLCJmaWxlIjoiLi9yZXNvdXJjZXMvanMvcGFnZXMvYWRtaW4vdmlkZW8tYXBwcm92YWwtdG9vbC9hcHByb3ZhbC1saXN0LnZ1ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vYXBwcm92YWwtbGlzdC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NDcyZDBlZTAmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vYXBwcm92YWwtbGlzdC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL2FwcHJvdmFsLWxpc3QudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCJDOlxcXFxsYXJhZ29uXFxcXHd3d1xcXFx0aWstdG9rLXRhcm90LW1hc3RlclxcXFxub2RlX21vZHVsZXNcXFxcdnVlLWhvdC1yZWxvYWQtYXBpXFxcXGRpc3RcXFxcaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCc0NzJkMGVlMCcpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCc0NzJkMGVlMCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCc0NzJkMGVlMCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vYXBwcm92YWwtbGlzdC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NDcyZDBlZTAmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignNDcyZDBlZTAnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInJlc291cmNlcy9qcy9wYWdlcy9hZG1pbi92aWRlby1hcHByb3ZhbC10b29sL2FwcHJvdmFsLWxpc3QudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./resources/js/pages/admin/video-approval-tool/approval-list.vue\n");

/***/ }),

/***/ "./resources/js/pages/admin/video-approval-tool/approval-list.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************!*\
  !*** ./resources/js/pages/admin/video-approval-tool/approval-list.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************/
/*! no static exports found */
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