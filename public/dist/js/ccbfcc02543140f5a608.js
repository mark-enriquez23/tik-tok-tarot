(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[36],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/admin/reader-form.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/admin/reader-form.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var vform__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vform */ \"./node_modules/vform/dist/vform.common.js\");\n/* harmony import */ var vform__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vform__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vuex */ \"./node_modules/vuex/dist/vuex.esm.js\");\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ~/helpers */ \"./resources/js/helpers/index.js\");\n\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  scrollToTop: false,\n  metaInfo: function metaInfo() {\n    return {\n      title: this.$t('settings')\n    };\n  },\n  components: {},\n  data: function data() {\n    return {\n      isUpdating: false\n    };\n  },\n  computed: Object(vuex__WEBPACK_IMPORTED_MODULE_2__[\"mapGetters\"])({\n    user: 'auth/user',\n    readerForm: 'admin-reader/readerForm',\n    is_banned: 'admin-reader/is_banned',\n    visible: 'admin-reader/visible'\n  }),\n  beforeMount: function beforeMount() {\n    var id = this.$route.params.id;\n    this.$store.dispatch(\"admin-reader/viewReader\", id);\n  },\n  methods: {\n    update: function update() {\n      var _this = this;\n\n      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {\n        var _yield$_this$readerFo, data;\n\n        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                console.log(_this.is_banned);\n                return _context.abrupt(\"return\", console.log(_this.visible));\n\n              case 4:\n                _yield$_this$readerFo = _context.sent;\n                data = _yield$_this$readerFo.data;\n                console.log(data);\n\n                _this.$store.dispatch('admin-reader/editReader', data.data);\n\n                _this.isUpdating = false;\n\n              case 9:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee);\n      }))();\n    },\n    cancelUpdate: function cancelUpdate() {\n      var _this2 = this;\n\n      this.readerForm.keys().forEach(function (key) {\n        _this2.readerForm[key] = _this2.user[key];\n      });\n      this.isUpdating = false;\n    },\n    removeAccount: function removeAccount() {\n      var _this3 = this;\n\n      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {\n        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {\n          while (1) {\n            switch (_context2.prev = _context2.next) {\n              case 0:\n                _this3.$store.dispatch('admin-reader/removeReader', _this3.readerForm.id).then(function (_ref) {\n                  var success = _ref.success,\n                      message = _ref.message;\n\n                  if (success) {\n                    Object(_helpers__WEBPACK_IMPORTED_MODULE_3__[\"swalSuccess\"])(message).then(function () {\n                      _this3.$router.push({\n                        name: 'admin.readers'\n                      });\n                    });\n                  }\n                });\n\n              case 1:\n              case \"end\":\n                return _context2.stop();\n            }\n          }\n        }, _callee2);\n      }))();\n    },\n    isBannedChange: function isBannedChange() {\n      this.$store.dispatch('admin-reader/isBannedChange');\n    },\n    isVisibleChange: function isVisibleChange() {\n      this.$store.dispatch('admin-reader/isVisibleChange');\n    }\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL3BhZ2VzL2FkbWluL3JlYWRlci1mb3JtLnZ1ZT9jMTk2Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBbUZBO0FBQ0E7QUFDQTtBQUVBO0FBQ0Esb0JBREE7QUFHQSxVQUhBLHNCQUdBO0FBQ0E7QUFBQTtBQUFBO0FBQ0EsR0FMQTtBQU9BLGdCQVBBO0FBVUE7QUFBQTtBQUNBO0FBREE7QUFBQSxHQVZBO0FBY0E7QUFDQSxxQkFEQTtBQUVBLHlDQUZBO0FBR0EsdUNBSEE7QUFJQTtBQUpBLElBZEE7QUFxQkEsYUFyQkEseUJBcUJBO0FBQ0E7QUFDQTtBQUNBLEdBeEJBO0FBMEJBO0FBQ0EsVUFEQSxvQkFDQTtBQUFBOztBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBLGlEQUVBLDBCQUZBOztBQUFBO0FBQUE7QUFHQSxvQkFIQSx5QkFHQSxJQUhBO0FBSUE7O0FBQ0E7O0FBQ0E7O0FBTkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFPQSxLQVJBO0FBVUEsZ0JBVkEsMEJBVUE7QUFBQTs7QUFDQTtBQUNBO0FBQ0EsT0FGQTtBQUdBO0FBQ0EsS0FmQTtBQWlCQSxpQkFqQkEsMkJBaUJBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFBQTs7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0EscUJBRkE7QUFHQTtBQUNBLGlCQU5BOztBQUZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBU0EsS0ExQkE7QUE0QkEsa0JBNUJBLDRCQTRCQTtBQUNBO0FBQ0EsS0E5QkE7QUFnQ0EsbUJBaENBLDZCQWdDQTtBQUNBO0FBQ0E7QUFsQ0E7QUExQkEiLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/IS4vcmVzb3VyY2VzL2pzL3BhZ2VzL2FkbWluL3JlYWRlci1mb3JtLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyYuanMiLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XHJcbiAgPGNhcmQgY2xhc3M9XCJweS0zXCI+XHJcbiAgICA8aDQgY2xhc3M9XCJtYi0wXCI+VXBkYXRlIFJlYWRlciBQcm9maWxlPC9oND5cclxuICAgIDxwIGNsYXNzPVwibWItMFwiPkNoYW5nZSBwZXJzb25hbCBpbmZvcm1hdGlvbiBoZXJlLjwvcD5cclxuICAgIDxocj5cclxuICAgIDxmb3JtIEBzdWJtaXQucHJldmVudD1cInVwZGF0ZVwiIEBrZXlkb3duPVwicmVhZGVyRm9ybS5vbktleWRvd24oJGV2ZW50KVwiPlxyXG4gICAgICA8YWxlcnQtc3VjY2VzcyA6Zm9ybT1cInJlYWRlckZvcm1cIiBtZXNzYWdlPVwiUmVhZGVyIGluZm8gaGFzIGJlZW4gdXBkYXRlZCFcIiAvPlxyXG5cclxuICAgICAgPCEtLSBVc2VybmFtZSAtLT5cclxuICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXAgY29sLW1kLTcgbXgtYXV0b1wiPlxyXG4gICAgICAgIDxsYWJlbD57eyAkdCgndXNlcm5hbWUnKSB9fTwvbGFiZWw+XHJcbiAgICAgICAgPGlucHV0ICB2LW1vZGVsPVwicmVhZGVyRm9ybS51c2VybmFtZVwiIDpjbGFzcz1cInsgJ2lzLWludmFsaWQnOiByZWFkZXJGb3JtLmVycm9ycy5oYXMoJ3VzZXJuYW1lJykgfVwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgdHlwZT1cInRleHRcIiBuYW1lPVwidXNlcm5hbWVcIiA6cmVhZG9ubHk9XCIhaXNVcGRhdGluZ1wiPlxyXG4gICAgICAgIDxoYXMtZXJyb3IgOmZvcm09XCJyZWFkZXJGb3JtXCIgZmllbGQ9XCJ1c2VybmFtZVwiIC8+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgPCEtLSBOYW1lIC0tPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cCBjb2wtbWQtNyBteC1hdXRvXCI+XHJcbiAgICAgICAgPGxhYmVsPnt7ICR0KCduYW1lJykgfX08L2xhYmVsPlxyXG4gICAgICAgIDxpbnB1dCAgdi1tb2RlbD1cInJlYWRlckZvcm0ubmFtZVwiIDpjbGFzcz1cInsgJ2lzLWludmFsaWQnOiByZWFkZXJGb3JtLmVycm9ycy5oYXMoJ25hbWUnKSB9XCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiB0eXBlPVwidGV4dFwiIG5hbWU9XCJuYW1lXCIgOnJlYWRvbmx5PVwiIWlzVXBkYXRpbmdcIj5cclxuICAgICAgICA8aGFzLWVycm9yIDpmb3JtPVwicmVhZGVyRm9ybVwiIGZpZWxkPVwibmFtZVwiIC8+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgPCEtLSBQaG9uZSBOdW1iZXIgLS0+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwIGNvbC1tZC03IG14LWF1dG9cIj5cclxuICAgICAgICA8bGFiZWw+e3sgJHQoJ3Bob25lX251bWJlcicpIH19PC9sYWJlbD5cclxuICAgICAgICA8aW5wdXQgIHYtbW9kZWw9XCJyZWFkZXJGb3JtLnBob25lX251bWJlclwiIDpjbGFzcz1cInsgJ2lzLWludmFsaWQnOiByZWFkZXJGb3JtLmVycm9ycy5oYXMoJ3Bob25lX251bWJlcicpIH1cIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIHR5cGU9XCJ0ZXh0XCIgbmFtZT1cInBob25lX251bWJlclwiIDpyZWFkb25seT1cIiFpc1VwZGF0aW5nXCI+XHJcbiAgICAgICAgPGhhcy1lcnJvciA6Zm9ybT1cInJlYWRlckZvcm1cIiBmaWVsZD1cInBob25lX251bWJlclwiIC8+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgPCEtLSBFbWFpbCAtLT5cclxuICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXAgY29sLW1kLTcgbXgtYXV0b1wiPlxyXG4gICAgICAgIDxsYWJlbD57eyAkdCgnZW1haWwnKSB9fTwvbGFiZWw+XHJcbiAgICAgICAgPGlucHV0ICB2LW1vZGVsPVwicmVhZGVyRm9ybS5lbWFpbFwiIDpjbGFzcz1cInsgJ2lzLWludmFsaWQnOiByZWFkZXJGb3JtLmVycm9ycy5oYXMoJ2VtYWlsJykgfVwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgdHlwZT1cInRleHRcIiBuYW1lPVwiZW1haWxcIiA6cmVhZG9ubHk9XCIhaXNVcGRhdGluZ1wiPlxyXG4gICAgICAgIDxoYXMtZXJyb3IgOmZvcm09XCJyZWFkZXJGb3JtXCIgZmllbGQ9XCJlbWFpbFwiIC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cCBjb2wtbWQtNyBteC1hdXRvXCI+XHJcbiAgICAgICAgPHRvZ2dsZS1idXR0b24gOnZhbHVlPVwidmlzaWJsZSA9PSAxID8gdHJ1ZSA6IGZhbHNlXCJcclxuICAgICAgICAgICAgICAgOmxhYmVscz1cIntjaGVja2VkOiAnQWxsb3cnLCB1bmNoZWNrZWQ6ICdEaXNhbGxvdyd9XCJcclxuICAgICAgICAgICAgICAgIDpoZWlnaHQ9MzIgICAgICAgXHJcbiAgICAgICAgICAgICAgICA6d2lkdGg9ODVcclxuICAgICAgICAgICAgICAgIGNsYXNzPVwibXItMlwiXHJcbiAgICAgICAgICAgICAgICA6ZGlzYWJsZWQ9XCIhaXNVcGRhdGluZ1wiXHJcbiAgICAgICAgICAgICAgICA6Y2hhbmdlPVwiXCJcclxuICAgICAgICAvPlxyXG4gICAgICAgIDx0b2dnbGUtYnV0dG9uIDp2YWx1ZT1cImlzX2Jhbm5lZCA9PSAxID8gdHJ1ZSA6IGZhbHNlXCJcclxuICAgICAgICAgICAgICAgOmxhYmVscz1cIntjaGVja2VkOiAnVmlzaWJsZScsIHVuY2hlY2tlZDogJ0hpZGRlbid9XCJcclxuICAgICAgICAgICAgICAgIDpoZWlnaHQ9MzJcclxuICAgICAgICAgICAgICAgIDp3aWR0aD05MFxyXG4gICAgICAgICAgICAgICAgOmRpc2FibGVkPVwiIWlzVXBkYXRpbmdcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgPCEtLSBTdWJtaXQgQnV0dG9uIC0tPlxyXG4gICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXAgcm93IGNvbC1tZC03IG14LWF1dG8gbXQtM1wiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtNiBweC0wIHByLWxnLTFcIiAgdi1pZj1cImlzVXBkYXRpbmdcIj5cclxuICAgICAgICAgIDwhLS0gQmFjIEJ1dHRvbiAtLT5cclxuICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGJ0bi1zZWNvbmRhcnkgdy0xMDBcIiBAY2xpY2sucHJldmVudD1cImNhbmNlbFVwZGF0ZSgpXCIgID5cclxuICAgICAgICAgIDwhLS0gPHYtYnV0dG9uIDpsb2FkaW5nPVwiZm9ybS5idXN5XCI+IC0tPlxyXG4gICAgICAgICAgQ2FuY2VsXHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTYgcHgtMCBwci1sZy0xXCIgIHYtZWxzZT5cclxuICAgICAgICAgIDwhLS0gQmFjIEJ1dHRvbiAtLT5cclxuICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGJ0bi1kYW5nZXIgdy0xMDBcIiBAY2xpY2sucHJldmVudD1cInJlbW92ZUFjY291bnQoKVwiICA+XHJcbiAgICAgICAgICA8IS0tIDx2LWJ1dHRvbiA6bG9hZGluZz1cImZvcm0uYnVzeVwiPiAtLT5cclxuICAgICAgICAgIFJlbW92ZSBBY2NvdW50XHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTYgcHgtMCBwbC1sZy0xIG1sLW1kLWF1dG9cIj5cclxuICAgICAgICAgIDwhLS0gVXBkYXRlIEJ1dHRvbiAtLT5cclxuICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidG4gYnRuLXByaW1hcnkgdy0xMDBcIiBAY2xpY2sucHJldmVudD1cImlzVXBkYXRpbmcgPSB0cnVlXCIgIHYtaWY9XCIhaXNVcGRhdGluZ1wiPlxyXG4gICAgICAgICAgICB7eyAkdCgndXBkYXRlJykgfX1cclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgPHYtYnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5IHctMTAwXCIgIHYtZWxzZT5cclxuICAgICAgICAgICAgQ29uZmlybVxyXG4gICAgICAgICAgPC92LWJ1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Zvcm0+XHJcbiAgPC9jYXJkPlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuaW1wb3J0IEZvcm0gZnJvbSAndmZvcm0nXHJcbmltcG9ydCB7IG1hcEdldHRlcnMgfSBmcm9tICd2dWV4J1xyXG5pbXBvcnQgeyBzd2FsT29wcywgc3dhbFN1Y2Nlc3MgfSBmcm9tIFwifi9oZWxwZXJzXCJcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICBzY3JvbGxUb1RvcDogZmFsc2UsXHJcblxyXG4gIG1ldGFJbmZvICgpIHtcclxuICAgIHJldHVybiB7IHRpdGxlOiB0aGlzLiR0KCdzZXR0aW5ncycpIH1cclxuICB9LFxyXG5cclxuICBjb21wb25lbnRzOiB7XHJcbiAgfSxcclxuXHJcbiAgZGF0YTogKCkgPT4gKHtcclxuICAgIGlzVXBkYXRpbmc6IGZhbHNlLFxyXG4gIH0pLFxyXG5cclxuICBjb21wdXRlZDogbWFwR2V0dGVycyh7XHJcbiAgICB1c2VyOiAnYXV0aC91c2VyJyxcclxuICAgIHJlYWRlckZvcm06ICdhZG1pbi1yZWFkZXIvcmVhZGVyRm9ybScsXHJcbiAgICBpc19iYW5uZWQ6ICdhZG1pbi1yZWFkZXIvaXNfYmFubmVkJyxcclxuICAgIHZpc2libGU6ICdhZG1pbi1yZWFkZXIvdmlzaWJsZScsXHJcbiAgfSksXHJcblxyXG4gIGJlZm9yZU1vdW50ICgpIHtcclxuICAgIGxldCBpZCA9IHRoaXMuJHJvdXRlLnBhcmFtcy5pZFxyXG4gICAgdGhpcy4kc3RvcmUuZGlzcGF0Y2goXCJhZG1pbi1yZWFkZXIvdmlld1JlYWRlclwiLCBpZCk7XHJcbiAgfSxcclxuXHJcbiAgbWV0aG9kczoge1xyXG4gICAgYXN5bmMgdXBkYXRlICgpIHtcclxuICAgICAgY29uc29sZS5sb2codGhpcy5pc19iYW5uZWQpXHJcbiAgICAgIHJldHVybiBjb25zb2xlLmxvZyh0aGlzLnZpc2libGUpXHJcbiAgICAgIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgdGhpcy5yZWFkZXJGb3JtLnBvc3QoJy9hcGkvYXV0aC1yZWFkZXIvdXBkYXRlLXJlYWRlcicpXHJcbiAgICAgICAgY29uc29sZS5sb2coZGF0YSlcclxuICAgICAgdGhpcy4kc3RvcmUuZGlzcGF0Y2goJ2FkbWluLXJlYWRlci9lZGl0UmVhZGVyJywgZGF0YS5kYXRhKVxyXG4gICAgICB0aGlzLmlzVXBkYXRpbmcgPSBmYWxzZTtcclxuICAgIH0sXHJcblxyXG4gICAgY2FuY2VsVXBkYXRlKCkge1xyXG4gICAgICB0aGlzLnJlYWRlckZvcm0ua2V5cygpLmZvckVhY2goa2V5ID0+IHtcclxuICAgICAgICB0aGlzLnJlYWRlckZvcm1ba2V5XSA9IHRoaXMudXNlcltrZXldXHJcbiAgICAgIH0pXHJcbiAgICAgIHRoaXMuaXNVcGRhdGluZyA9IGZhbHNlO1xyXG4gICAgfSxcclxuXHJcbiAgICBhc3luYyByZW1vdmVBY2NvdW50KCl7XHJcbiAgICAgIFxyXG4gICAgICB0aGlzLiRzdG9yZS5kaXNwYXRjaCgnYWRtaW4tcmVhZGVyL3JlbW92ZVJlYWRlcicsIHRoaXMucmVhZGVyRm9ybS5pZCkudGhlbigoe3N1Y2Nlc3MsIG1lc3NhZ2V9KSA9PiB7XHJcbiAgICAgICAgaWYgKHN1Y2Nlc3MpIHtcclxuICAgICAgICAgIHN3YWxTdWNjZXNzKG1lc3NhZ2UpLnRoZW4oKCkgPT57XHJcbiAgICAgICAgICAgIHRoaXMuJHJvdXRlci5wdXNoKHsgbmFtZTogJ2FkbWluLnJlYWRlcnMnIH0pXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgIH0sXHJcblxyXG4gICAgaXNCYW5uZWRDaGFuZ2UoKXtcclxuICAgICAgdGhpcy4kc3RvcmUuZGlzcGF0Y2goJ2FkbWluLXJlYWRlci9pc0Jhbm5lZENoYW5nZScpXHJcbiAgICB9LFxyXG5cclxuICAgIGlzVmlzaWJsZUNoYW5nZSgpe1xyXG4gICAgICB0aGlzLiRzdG9yZS5kaXNwYXRjaCgnYWRtaW4tcmVhZGVyL2lzVmlzaWJsZUNoYW5nZScpXHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbjwvc2NyaXB0PlxyXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/admin/reader-form.vue?vue&type=script&lang=js&\n");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/admin/reader-form.vue?vue&type=template&id=78e30bb5&":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/admin/reader-form.vue?vue&type=template&id=78e30bb5& ***!
  \***************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function () {}\nvar staticRenderFns = []\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvcGFnZXMvYWRtaW4vcmVhZGVyLWZvcm0udnVlP2RkMjciXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQSIsImZpbGUiOiIuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPyEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8hLi9yZXNvdXJjZXMvanMvcGFnZXMvYWRtaW4vcmVhZGVyLWZvcm0udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTc4ZTMwYmI1Ji5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciByZW5kZXIgPSBmdW5jdGlvbiAoKSB7fVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/admin/reader-form.vue?vue&type=template&id=78e30bb5&\n");

/***/ }),

/***/ "./resources/js/helpers/index.js":
/*!***************************************!*\
  !*** ./resources/js/helpers/index.js ***!
  \***************************************/
/*! exports provided: swalOops, swalSuccess, createObjectURL, videoToBlob, blobVideoToBlobThumbnail */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"swalOops\", function() { return swalOops; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"swalSuccess\", function() { return swalSuccess; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createObjectURL\", function() { return createObjectURL; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"videoToBlob\", function() { return videoToBlob; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"blobVideoToBlobThumbnail\", function() { return blobVideoToBlobThumbnail; });\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sweetalert2 */ \"./node_modules/sweetalert2/dist/sweetalert2.all.js\");\n/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var video_metadata_thumbnails__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! video-metadata-thumbnails */ \"./node_modules/video-metadata-thumbnails/lib/video-metadata-thumbnails.es.js\");\n\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\n\n\nvar swalOops = function swalOops() {\n  var message = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'Something went wrong!';\n  return sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire({\n    title: \"Oops!\",\n    text: message,\n    icon: \"error\"\n  });\n};\nvar swalSuccess = function swalSuccess() {\n  var message = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'Action successfuly finished!';\n  return sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire({\n    title: \"Success!\",\n    text: message,\n    icon: \"success\"\n  });\n};\nvar createObjectURL = function createObjectURL(object) {\n  // convert video url to blob\n  return window.URL ? window.URL.createObjectURL(object) : window.webkitURL.createObjectURL(object);\n};\nvar videoToBlob = /*#__PURE__*/function () {\n  var _ref = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(videoStream) {\n    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            _context.next = 2;\n            return fetch(videoStream).then(function (r) {\n              return r.blob();\n            });\n\n          case 2:\n            return _context.abrupt(\"return\", _context.sent);\n\n          case 3:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  }));\n\n  return function videoToBlob(_x) {\n    return _ref.apply(this, arguments);\n  };\n}();\nvar blobVideoToBlobThumbnail = /*#__PURE__*/function () {\n  var _ref2 = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(blob) {\n    var thumbnails;\n    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {\n      while (1) {\n        switch (_context2.prev = _context2.next) {\n          case 0:\n            _context2.next = 2;\n            return Object(video_metadata_thumbnails__WEBPACK_IMPORTED_MODULE_2__[\"getThumbnails\"])(blob, {\n              interval: 1,\n              start: 2,\n              end: 3\n            });\n\n          case 2:\n            thumbnails = _context2.sent;\n            return _context2.abrupt(\"return\", thumbnails[0]['blob']);\n\n          case 4:\n          case \"end\":\n            return _context2.stop();\n        }\n      }\n    }, _callee2);\n  }));\n\n  return function blobVideoToBlobThumbnail(_x2) {\n    return _ref2.apply(this, arguments);\n  };\n}();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvaGVscGVycy9pbmRleC5qcz9iNzE3Il0sIm5hbWVzIjpbInN3YWxPb3BzIiwibWVzc2FnZSIsIlN3YWwiLCJmaXJlIiwidGl0bGUiLCJ0ZXh0IiwiaWNvbiIsInN3YWxTdWNjZXNzIiwiY3JlYXRlT2JqZWN0VVJMIiwib2JqZWN0Iiwid2luZG93IiwiVVJMIiwid2Via2l0VVJMIiwidmlkZW9Ub0Jsb2IiLCJ2aWRlb1N0cmVhbSIsImZldGNoIiwidGhlbiIsInIiLCJibG9iIiwiYmxvYlZpZGVvVG9CbG9iVGh1bWJuYWlsIiwiZ2V0VGh1bWJuYWlscyIsImludGVydmFsIiwic3RhcnQiLCJlbmQiLCJ0aHVtYm5haWxzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFTyxJQUFNQSxRQUFRLEdBQUcsU0FBWEEsUUFBVyxHQUF1QztBQUFBLE1BQXRDQyxPQUFzQyx1RUFBNUIsdUJBQTRCO0FBQzNELFNBQU9DLGtEQUFJLENBQUNDLElBQUwsQ0FBVTtBQUNiQyxTQUFLLEVBQUUsT0FETTtBQUViQyxRQUFJLEVBQUVKLE9BRk87QUFHYkssUUFBSSxFQUFFO0FBSE8sR0FBVixDQUFQO0FBS0gsQ0FOTTtBQVFBLElBQU1DLFdBQVcsR0FBRyxTQUFkQSxXQUFjLEdBQThDO0FBQUEsTUFBN0NOLE9BQTZDLHVFQUFuQyw4QkFBbUM7QUFDckUsU0FBT0Msa0RBQUksQ0FBQ0MsSUFBTCxDQUFVO0FBQ2JDLFNBQUssRUFBRSxVQURNO0FBRWJDLFFBQUksRUFBRUosT0FGTztBQUdiSyxRQUFJLEVBQUU7QUFITyxHQUFWLENBQVA7QUFLSCxDQU5NO0FBUUEsSUFBTUUsZUFBZSxHQUFHLFNBQWxCQSxlQUFrQixDQUFDQyxNQUFELEVBQVk7QUFBRTtBQUN6QyxTQUFRQyxNQUFNLENBQUNDLEdBQVIsR0FBZUQsTUFBTSxDQUFDQyxHQUFQLENBQVdILGVBQVgsQ0FBMkJDLE1BQTNCLENBQWYsR0FBb0RDLE1BQU0sQ0FBQ0UsU0FBUCxDQUFpQkosZUFBakIsQ0FBaUNDLE1BQWpDLENBQTNEO0FBQ0gsQ0FGTTtBQUlBLElBQU1JLFdBQVc7QUFBQSxvSEFBRyxpQkFBT0MsV0FBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFDVkMsS0FBSyxDQUFDRCxXQUFELENBQUwsQ0FBbUJFLElBQW5CLENBQXdCLFVBQUFDLENBQUM7QUFBQSxxQkFBSUEsQ0FBQyxDQUFDQyxJQUFGLEVBQUo7QUFBQSxhQUF6QixDQURVOztBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBSDs7QUFBQSxrQkFBWEwsV0FBVztBQUFBO0FBQUE7QUFBQSxHQUFqQjtBQUlBLElBQU1NLHdCQUF3QjtBQUFBLHFIQUFHLGtCQUFPRCxJQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBQ1hFLCtFQUFhLENBQUNGLElBQUQsRUFBTztBQUN6Q0csc0JBQVEsRUFBRSxDQUQrQjtBQUV6Q0MsbUJBQUssRUFBRSxDQUZrQztBQUd6Q0MsaUJBQUcsRUFBRTtBQUhvQyxhQUFQLENBREY7O0FBQUE7QUFDOUJDLHNCQUQ4QjtBQUFBLDhDQU83QkEsVUFBVSxDQUFDLENBQUQsQ0FBVixDQUFjLE1BQWQsQ0FQNkI7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBSDs7QUFBQSxrQkFBeEJMLHdCQUF3QjtBQUFBO0FBQUE7QUFBQSxHQUE5QiIsImZpbGUiOiIuL3Jlc291cmNlcy9qcy9oZWxwZXJzL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFN3YWwgZnJvbSAnc3dlZXRhbGVydDInO1xyXG5pbXBvcnQgeyBnZXRNZXRhZGF0YSwgZ2V0VGh1bWJuYWlscyB9IGZyb20gJ3ZpZGVvLW1ldGFkYXRhLXRodW1ibmFpbHMnO1xyXG5cclxuZXhwb3J0IGNvbnN0IHN3YWxPb3BzID0gKG1lc3NhZ2UgPSAnU29tZXRoaW5nIHdlbnQgd3JvbmchJykgPT4ge1xyXG4gICAgcmV0dXJuIFN3YWwuZmlyZSh7XHJcbiAgICAgICAgdGl0bGU6IFwiT29wcyFcIixcclxuICAgICAgICB0ZXh0OiBtZXNzYWdlLFxyXG4gICAgICAgIGljb246IFwiZXJyb3JcIixcclxuICAgICAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBzd2FsU3VjY2VzcyA9IChtZXNzYWdlID0gJ0FjdGlvbiBzdWNjZXNzZnVseSBmaW5pc2hlZCEnKSA9PiB7XHJcbiAgICByZXR1cm4gU3dhbC5maXJlKHtcclxuICAgICAgICB0aXRsZTogXCJTdWNjZXNzIVwiLFxyXG4gICAgICAgIHRleHQ6IG1lc3NhZ2UsXHJcbiAgICAgICAgaWNvbjogXCJzdWNjZXNzXCIsXHJcbiAgICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGNyZWF0ZU9iamVjdFVSTCA9IChvYmplY3QpID0+IHsgLy8gY29udmVydCB2aWRlbyB1cmwgdG8gYmxvYlxyXG4gICAgcmV0dXJuICh3aW5kb3cuVVJMKSA/IHdpbmRvdy5VUkwuY3JlYXRlT2JqZWN0VVJMKG9iamVjdCkgOiB3aW5kb3cud2Via2l0VVJMLmNyZWF0ZU9iamVjdFVSTChvYmplY3QpO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgdmlkZW9Ub0Jsb2IgPSBhc3luYyAodmlkZW9TdHJlYW0pID0+IHtcclxuICAgIHJldHVybiBhd2FpdCBmZXRjaCh2aWRlb1N0cmVhbSkudGhlbihyID0+IHIuYmxvYigpKVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgYmxvYlZpZGVvVG9CbG9iVGh1bWJuYWlsID0gYXN5bmMgKGJsb2IpID0+IHtcclxuICAgIGNvbnN0IHRodW1ibmFpbHMgPSBhd2FpdCBnZXRUaHVtYm5haWxzKGJsb2IsIHtcclxuICAgICAgICBpbnRlcnZhbDogMSxcclxuICAgICAgICBzdGFydDogMixcclxuICAgICAgICBlbmQ6IDNcclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiB0aHVtYm5haWxzWzBdWydibG9iJ11cclxufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./resources/js/helpers/index.js\n");

/***/ }),

/***/ "./resources/js/pages/admin/reader-form.vue":
/*!**************************************************!*\
  !*** ./resources/js/pages/admin/reader-form.vue ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _reader_form_vue_vue_type_template_id_78e30bb5___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reader-form.vue?vue&type=template&id=78e30bb5& */ \"./resources/js/pages/admin/reader-form.vue?vue&type=template&id=78e30bb5&\");\n/* harmony import */ var _reader_form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reader-form.vue?vue&type=script&lang=js& */ \"./resources/js/pages/admin/reader-form.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _reader_form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _reader_form_vue_vue_type_template_id_78e30bb5___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _reader_form_vue_vue_type_template_id_78e30bb5___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"resources/js/pages/admin/reader-form.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvcGFnZXMvYWRtaW4vcmVhZGVyLWZvcm0udnVlP2IyZmIiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBMEY7QUFDM0I7QUFDTDs7O0FBRzFEO0FBQ2dHO0FBQ2hHLGdCQUFnQiwyR0FBVTtBQUMxQixFQUFFLGlGQUFNO0FBQ1IsRUFBRSxzRkFBTTtBQUNSLEVBQUUsK0ZBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxJQUFJLEtBQVUsRUFBRSxZQWlCZjtBQUNEO0FBQ2UsZ0YiLCJmaWxlIjoiLi9yZXNvdXJjZXMvanMvcGFnZXMvYWRtaW4vcmVhZGVyLWZvcm0udnVlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9yZWFkZXItZm9ybS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NzhlMzBiYjUmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vcmVhZGVyLWZvcm0udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9yZWFkZXItZm9ybS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIkM6XFxcXGxhcmFnb25cXFxcd3d3XFxcXHRpay10b2stdGFyb3RcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1ob3QtcmVsb2FkLWFwaVxcXFxkaXN0XFxcXGluZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnNzhlMzBiYjUnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnNzhlMzBiYjUnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnNzhlMzBiYjUnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL3JlYWRlci1mb3JtLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD03OGUzMGJiNSZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCc3OGUzMGJiNScsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicmVzb3VyY2VzL2pzL3BhZ2VzL2FkbWluL3JlYWRlci1mb3JtLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./resources/js/pages/admin/reader-form.vue\n");

/***/ }),

/***/ "./resources/js/pages/admin/reader-form.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./resources/js/pages/admin/reader-form.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_reader_form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./reader-form.vue?vue&type=script&lang=js& */ \"./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/admin/reader-form.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_reader_form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvcGFnZXMvYWRtaW4vcmVhZGVyLWZvcm0udnVlPzhiN2QiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBLHdDQUFpTSxDQUFnQix1UEFBRyxFQUFDIiwiZmlsZSI6Ii4vcmVzb3VyY2VzL2pzL3BhZ2VzL2FkbWluL3JlYWRlci1mb3JtLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyYuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTQtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3JlYWRlci1mb3JtLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS00LTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9yZWFkZXItZm9ybS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./resources/js/pages/admin/reader-form.vue?vue&type=script&lang=js&\n");

/***/ }),

/***/ "./resources/js/pages/admin/reader-form.vue?vue&type=template&id=78e30bb5&":
/*!*********************************************************************************!*\
  !*** ./resources/js/pages/admin/reader-form.vue?vue&type=template&id=78e30bb5& ***!
  \*********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_reader_form_vue_vue_type_template_id_78e30bb5___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./reader-form.vue?vue&type=template&id=78e30bb5& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/admin/reader-form.vue?vue&type=template&id=78e30bb5&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_reader_form_vue_vue_type_template_id_78e30bb5___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_reader_form_vue_vue_type_template_id_78e30bb5___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvcGFnZXMvYWRtaW4vcmVhZGVyLWZvcm0udnVlP2MzZDQiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBIiwiZmlsZSI6Ii4vcmVzb3VyY2VzL2pzL3BhZ2VzL2FkbWluL3JlYWRlci1mb3JtLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD03OGUzMGJiNSYuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vcmVhZGVyLWZvcm0udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTc4ZTMwYmI1JlwiIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./resources/js/pages/admin/reader-form.vue?vue&type=template&id=78e30bb5&\n");

/***/ })

}]);