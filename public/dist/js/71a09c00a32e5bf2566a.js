(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[7],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/reader/vlog/index.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/reader/vlog/index.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ \"./node_modules/vuex/dist/vuex.esm.js\");\n/* harmony import */ var _helpers_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../helpers/index */ \"./resources/js/helpers/index.js\");\n\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  components: {},\n  layout: 'default',\n  metaInfo: function metaInfo() {\n    return {\n      title: this.$t('home')\n    };\n  },\n  beforeCreate: function beforeCreate() {\n    this.$store.dispatch('about-us/fetchAboutUsData');\n  },\n  data: function data() {\n    return {\n      imgSrc: \"\"\n    };\n  },\n  computed: Object(vuex__WEBPACK_IMPORTED_MODULE_1__[\"mapGetters\"])({// authenticated: 'auth/check',\n  }),\n  methods: {\n    save: function save() {\n      var _this = this;\n\n      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {\n        var src, blob, thumbnail, imageUrl;\n        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                src = \"http://vjs.zencdn.net/v/oceans.mp4\"; ///video url not youtube or vimeo,just video on server\n\n                _context.next = 3;\n                return Object(_helpers_index__WEBPACK_IMPORTED_MODULE_2__[\"videoToBlob\"])(src);\n\n              case 3:\n                blob = _context.sent;\n                _context.next = 6;\n                return Object(_helpers_index__WEBPACK_IMPORTED_MODULE_2__[\"blobVideoToBlobThumbnail\"])(blob);\n\n              case 6:\n                thumbnail = _context.sent;\n                imageUrl = Object(_helpers_index__WEBPACK_IMPORTED_MODULE_2__[\"createObjectURL\"])(thumbnail); // convert blob to ObjectUrl\n\n                _this.imgSrc = imageUrl; // store \n\n                console.log(imageUrl);\n\n              case 10:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee);\n      }))();\n    }\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL3BhZ2VzL3JlYWRlci92bG9nL2luZGV4LnZ1ZT8wZDBkIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFZQTtBQUNBO0FBRUE7QUFDQSxnQkFEQTtBQUVBLG1CQUZBO0FBSUEsVUFKQSxzQkFJQTtBQUNBO0FBQUE7QUFBQTtBQUNBLEdBTkE7QUFPQSxjQVBBLDBCQU9BO0FBQ0E7QUFDQSxHQVRBO0FBV0E7QUFBQTtBQUNBO0FBREE7QUFBQSxHQVhBO0FBZUEscUVBQ0E7QUFEQSxJQWZBO0FBbUJBO0FBQ0EsUUFEQSxrQkFDQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBLG1CQURBLEdBQ0Esb0NBREEsRUFDQTs7QUFEQTtBQUFBLHVCQUVBLHVFQUZBOztBQUFBO0FBRUEsb0JBRkE7QUFBQTtBQUFBLHVCQUtBLHFGQUxBOztBQUFBO0FBS0EseUJBTEE7QUFNQSx3QkFOQSxHQU1BLGlGQU5BLEVBTUE7O0FBQ0Esd0NBUEEsQ0FPQTs7QUFFQTs7QUFUQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVVBO0FBWEE7QUFuQkEiLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/IS4vcmVzb3VyY2VzL2pzL3BhZ2VzL3JlYWRlci92bG9nL2luZGV4LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyYuanMiLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XHJcbiAgPGRpdiBjbGFzcz1cIlwiPlxyXG4gICAgPGg1PlRlc3Q8L2g1PlxyXG4gICAgPHA+R2VuZXJhdGUgVGh1bWJuYWlsIGZyb20gdmlkZW8gdXJsPC9wPlxyXG4gICAgPHA+U2FtcGxlIHZpZGVvIHVybDogaHR0cDovL3Zqcy56ZW5jZG4ubmV0L3Yvb2NlYW5zLm1wNDwvcD5cclxuICAgIDxwPk5vdGU6IE5lZWRlZCB0byB1cGxvYWQgdmlkZW8gZmlyc3QgdGhlbiBnZW5lcmF0ZSB0aHVtYm5haWwgZnJvbSByZWNlaXZlZCB1cGxvYWRlZCB2aWRlbyBwYXRoPC9wPlxyXG4gICAgPGJ1dHRvbiBAY2xpY2s9XCJzYXZlKClcIj5HZW5lcmF0ZTwvYnV0dG9uPlxyXG4gICAgPGltZyA6c3JjPVwiaW1nU3JjXCIgYWx0PVwic2FtcGxlIGdlbmVyYXRlZCB0aHVtYm5haWxcIj5cclxuICA8L2Rpdj5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcbmltcG9ydCB7IG1hcEdldHRlcnMgfSBmcm9tICd2dWV4J1xyXG5pbXBvcnQgeyBjcmVhdGVPYmplY3RVUkwsIHZpZGVvVG9CbG9iLCBibG9iVmlkZW9Ub0Jsb2JUaHVtYm5haWwgfSBmcm9tICcuLi8uLi8uLi9oZWxwZXJzL2luZGV4JztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICBjb21wb25lbnRzOiB7IH0sXHJcbiAgbGF5b3V0OiAnZGVmYXVsdCcsXHJcblxyXG4gIG1ldGFJbmZvICgpIHtcclxuICAgIHJldHVybiB7IHRpdGxlOiB0aGlzLiR0KCdob21lJykgfVxyXG4gIH0sXHJcbiAgYmVmb3JlQ3JlYXRlKCkge1xyXG4gICAgdGhpcy4kc3RvcmUuZGlzcGF0Y2goJ2Fib3V0LXVzL2ZldGNoQWJvdXRVc0RhdGEnKVxyXG4gIH0sXHJcblxyXG4gIGRhdGE6ICgpID0+ICh7XHJcbiAgICBpbWdTcmM6IFwiXCIsXHJcbiAgfSksXHJcblxyXG4gIGNvbXB1dGVkOiBtYXBHZXR0ZXJzKHtcclxuICAgIC8vIGF1dGhlbnRpY2F0ZWQ6ICdhdXRoL2NoZWNrJyxcclxuICB9KSxcclxuXHJcbiAgbWV0aG9kczoge1xyXG4gICAgYXN5bmMgc2F2ZSgpe1xyXG4gICAgICAgIHZhciBzcmMgPSBcImh0dHA6Ly92anMuemVuY2RuLm5ldC92L29jZWFucy5tcDRcIjsgLy8vdmlkZW8gdXJsIG5vdCB5b3V0dWJlIG9yIHZpbWVvLGp1c3QgdmlkZW8gb24gc2VydmVyXHJcbiAgICAgICAgbGV0IGJsb2IgPSBhd2FpdCB2aWRlb1RvQmxvYihzcmMpOyAvLyBjb252ZXJ0IHZpZGVvIHRvIGJsb2JcclxuXHJcbiAgICAgICAgLy8gc2F2ZSB0aGlzIGJsb2IgdG8gZGF0YWJhc2UgdGh1bWJuYWlsIGNvbHVtblxyXG4gICAgICAgIHZhciB0aHVtYm5haWwgPSBhd2FpdCBibG9iVmlkZW9Ub0Jsb2JUaHVtYm5haWwoYmxvYik7XHJcbiAgICAgICAgdmFyIGltYWdlVXJsPWNyZWF0ZU9iamVjdFVSTCh0aHVtYm5haWwpOyAvLyBjb252ZXJ0IGJsb2IgdG8gT2JqZWN0VXJsXHJcbiAgICAgICAgdGhpcy5pbWdTcmMgPSBpbWFnZVVybCAvLyBzdG9yZSBcclxuXHJcbiAgICAgICAgY29uc29sZS5sb2coaW1hZ2VVcmwpXHJcbiAgICB9LFxyXG4gIH1cclxufVxyXG48L3NjcmlwdD4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/reader/vlog/index.vue?vue&type=script&lang=js&\n");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/reader/vlog/index.vue?vue&type=template&id=466fd278&":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/reader/vlog/index.vue?vue&type=template&id=466fd278& ***!
  \***************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\"div\", {}, [\n    _c(\"h5\", [_vm._v(\"Test\")]),\n    _vm._v(\" \"),\n    _c(\"p\", [_vm._v(\"Generate Thumbnail from video url\")]),\n    _vm._v(\" \"),\n    _c(\"p\", [_vm._v(\"Sample video url: http://vjs.zencdn.net/v/oceans.mp4\")]),\n    _vm._v(\" \"),\n    _c(\"p\", [\n      _vm._v(\n        \"Note: Needed to upload video first then generate thumbnail from received uploaded video path\"\n      )\n    ]),\n    _vm._v(\" \"),\n    _c(\n      \"button\",\n      {\n        on: {\n          click: function($event) {\n            return _vm.save()\n          }\n        }\n      },\n      [_vm._v(\"Generate\")]\n    ),\n    _vm._v(\" \"),\n    _c(\"img\", { attrs: { src: _vm.imgSrc, alt: \"sample generated thumbnail\" } })\n  ])\n}\nvar staticRenderFns = []\nrender._withStripped = true\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvcGFnZXMvcmVhZGVyL3Zsb2cvaW5kZXgudnVlP2VhOWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxlQUFlLFNBQVMscURBQXFELEVBQUU7QUFDL0U7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/IS4vcmVzb3VyY2VzL2pzL3BhZ2VzL3JlYWRlci92bG9nL2luZGV4LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD00NjZmZDI3OCYuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFwiZGl2XCIsIHt9LCBbXG4gICAgX2MoXCJoNVwiLCBbX3ZtLl92KFwiVGVzdFwiKV0pLFxuICAgIF92bS5fdihcIiBcIiksXG4gICAgX2MoXCJwXCIsIFtfdm0uX3YoXCJHZW5lcmF0ZSBUaHVtYm5haWwgZnJvbSB2aWRlbyB1cmxcIildKSxcbiAgICBfdm0uX3YoXCIgXCIpLFxuICAgIF9jKFwicFwiLCBbX3ZtLl92KFwiU2FtcGxlIHZpZGVvIHVybDogaHR0cDovL3Zqcy56ZW5jZG4ubmV0L3Yvb2NlYW5zLm1wNFwiKV0pLFxuICAgIF92bS5fdihcIiBcIiksXG4gICAgX2MoXCJwXCIsIFtcbiAgICAgIF92bS5fdihcbiAgICAgICAgXCJOb3RlOiBOZWVkZWQgdG8gdXBsb2FkIHZpZGVvIGZpcnN0IHRoZW4gZ2VuZXJhdGUgdGh1bWJuYWlsIGZyb20gcmVjZWl2ZWQgdXBsb2FkZWQgdmlkZW8gcGF0aFwiXG4gICAgICApXG4gICAgXSksXG4gICAgX3ZtLl92KFwiIFwiKSxcbiAgICBfYyhcbiAgICAgIFwiYnV0dG9uXCIsXG4gICAgICB7XG4gICAgICAgIG9uOiB7XG4gICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgcmV0dXJuIF92bS5zYXZlKClcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBbX3ZtLl92KFwiR2VuZXJhdGVcIildXG4gICAgKSxcbiAgICBfdm0uX3YoXCIgXCIpLFxuICAgIF9jKFwiaW1nXCIsIHsgYXR0cnM6IHsgc3JjOiBfdm0uaW1nU3JjLCBhbHQ6IFwic2FtcGxlIGdlbmVyYXRlZCB0aHVtYm5haWxcIiB9IH0pXG4gIF0pXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/reader/vlog/index.vue?vue&type=template&id=466fd278&\n");

/***/ }),

/***/ "./resources/js/helpers/index.js":
/*!***************************************!*\
  !*** ./resources/js/helpers/index.js ***!
  \***************************************/
/*! exports provided: swalOops, swalSuccess, createObjectURL, videoToBlob, blobVideoToBlobThumbnail, setPagination */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"swalOops\", function() { return swalOops; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"swalSuccess\", function() { return swalSuccess; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createObjectURL\", function() { return createObjectURL; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"videoToBlob\", function() { return videoToBlob; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"blobVideoToBlobThumbnail\", function() { return blobVideoToBlobThumbnail; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"setPagination\", function() { return setPagination; });\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sweetalert2 */ \"./node_modules/sweetalert2/dist/sweetalert2.all.js\");\n/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var video_metadata_thumbnails__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! video-metadata-thumbnails */ \"./node_modules/video-metadata-thumbnails/lib/video-metadata-thumbnails.es.js\");\n\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\n\n\nvar swalOops = function swalOops() {\n  var message = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'Something went wrong!';\n  return sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire({\n    title: \"Oops!\",\n    text: message,\n    icon: \"error\"\n  });\n};\nvar swalSuccess = function swalSuccess() {\n  var message = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'Action successfuly finished!';\n  return sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire({\n    title: \"Success!\",\n    text: message,\n    icon: \"success\"\n  });\n};\nvar createObjectURL = function createObjectURL(object) {\n  // convert video url to blob\n  return window.URL ? window.URL.createObjectURL(object) : window.webkitURL.createObjectURL(object);\n};\nvar videoToBlob = /*#__PURE__*/function () {\n  var _ref = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(videoStream) {\n    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            _context.next = 2;\n            return fetch(videoStream).then(function (r) {\n              return r.blob();\n            });\n\n          case 2:\n            return _context.abrupt(\"return\", _context.sent);\n\n          case 3:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  }));\n\n  return function videoToBlob(_x) {\n    return _ref.apply(this, arguments);\n  };\n}();\nvar blobVideoToBlobThumbnail = /*#__PURE__*/function () {\n  var _ref2 = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(blob) {\n    var thumbnails;\n    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {\n      while (1) {\n        switch (_context2.prev = _context2.next) {\n          case 0:\n            _context2.next = 2;\n            return Object(video_metadata_thumbnails__WEBPACK_IMPORTED_MODULE_2__[\"getThumbnails\"])(blob, {\n              interval: 1,\n              start: 2,\n              end: 3\n            });\n\n          case 2:\n            thumbnails = _context2.sent;\n            return _context2.abrupt(\"return\", thumbnails[0]['blob']);\n\n          case 4:\n          case \"end\":\n            return _context2.stop();\n        }\n      }\n    }, _callee2);\n  }));\n\n  return function blobVideoToBlobThumbnail(_x2) {\n    return _ref2.apply(this, arguments);\n  };\n}();\nvar setPagination = function setPagination(data) {};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvaGVscGVycy9pbmRleC5qcz9iNzE3Il0sIm5hbWVzIjpbInN3YWxPb3BzIiwibWVzc2FnZSIsIlN3YWwiLCJmaXJlIiwidGl0bGUiLCJ0ZXh0IiwiaWNvbiIsInN3YWxTdWNjZXNzIiwiY3JlYXRlT2JqZWN0VVJMIiwib2JqZWN0Iiwid2luZG93IiwiVVJMIiwid2Via2l0VVJMIiwidmlkZW9Ub0Jsb2IiLCJ2aWRlb1N0cmVhbSIsImZldGNoIiwidGhlbiIsInIiLCJibG9iIiwiYmxvYlZpZGVvVG9CbG9iVGh1bWJuYWlsIiwiZ2V0VGh1bWJuYWlscyIsImludGVydmFsIiwic3RhcnQiLCJlbmQiLCJ0aHVtYm5haWxzIiwic2V0UGFnaW5hdGlvbiIsImRhdGEiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFTyxJQUFNQSxRQUFRLEdBQUcsU0FBWEEsUUFBVyxHQUF1QztBQUFBLE1BQXRDQyxPQUFzQyx1RUFBNUIsdUJBQTRCO0FBQzNELFNBQU9DLGtEQUFJLENBQUNDLElBQUwsQ0FBVTtBQUNiQyxTQUFLLEVBQUUsT0FETTtBQUViQyxRQUFJLEVBQUVKLE9BRk87QUFHYkssUUFBSSxFQUFFO0FBSE8sR0FBVixDQUFQO0FBS0gsQ0FOTTtBQVFBLElBQU1DLFdBQVcsR0FBRyxTQUFkQSxXQUFjLEdBQThDO0FBQUEsTUFBN0NOLE9BQTZDLHVFQUFuQyw4QkFBbUM7QUFDckUsU0FBT0Msa0RBQUksQ0FBQ0MsSUFBTCxDQUFVO0FBQ2JDLFNBQUssRUFBRSxVQURNO0FBRWJDLFFBQUksRUFBRUosT0FGTztBQUdiSyxRQUFJLEVBQUU7QUFITyxHQUFWLENBQVA7QUFLSCxDQU5NO0FBUUEsSUFBTUUsZUFBZSxHQUFHLFNBQWxCQSxlQUFrQixDQUFDQyxNQUFELEVBQVk7QUFBRTtBQUN6QyxTQUFRQyxNQUFNLENBQUNDLEdBQVIsR0FBZUQsTUFBTSxDQUFDQyxHQUFQLENBQVdILGVBQVgsQ0FBMkJDLE1BQTNCLENBQWYsR0FBb0RDLE1BQU0sQ0FBQ0UsU0FBUCxDQUFpQkosZUFBakIsQ0FBaUNDLE1BQWpDLENBQTNEO0FBQ0gsQ0FGTTtBQUlBLElBQU1JLFdBQVc7QUFBQSxvSEFBRyxpQkFBT0MsV0FBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFDVkMsS0FBSyxDQUFDRCxXQUFELENBQUwsQ0FBbUJFLElBQW5CLENBQXdCLFVBQUFDLENBQUM7QUFBQSxxQkFBSUEsQ0FBQyxDQUFDQyxJQUFGLEVBQUo7QUFBQSxhQUF6QixDQURVOztBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBSDs7QUFBQSxrQkFBWEwsV0FBVztBQUFBO0FBQUE7QUFBQSxHQUFqQjtBQUlBLElBQU1NLHdCQUF3QjtBQUFBLHFIQUFHLGtCQUFPRCxJQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBQ1hFLCtFQUFhLENBQUNGLElBQUQsRUFBTztBQUN6Q0csc0JBQVEsRUFBRSxDQUQrQjtBQUV6Q0MsbUJBQUssRUFBRSxDQUZrQztBQUd6Q0MsaUJBQUcsRUFBRTtBQUhvQyxhQUFQLENBREY7O0FBQUE7QUFDOUJDLHNCQUQ4QjtBQUFBLDhDQU83QkEsVUFBVSxDQUFDLENBQUQsQ0FBVixDQUFjLE1BQWQsQ0FQNkI7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBSDs7QUFBQSxrQkFBeEJMLHdCQUF3QjtBQUFBO0FBQUE7QUFBQSxHQUE5QjtBQVVBLElBQU1NLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0IsQ0FBRUMsSUFBRixFQUFZLENBRXhDLENBRk0iLCJmaWxlIjoiLi9yZXNvdXJjZXMvanMvaGVscGVycy9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBTd2FsIGZyb20gJ3N3ZWV0YWxlcnQyJztcclxuaW1wb3J0IHsgZ2V0TWV0YWRhdGEsIGdldFRodW1ibmFpbHMgfSBmcm9tICd2aWRlby1tZXRhZGF0YS10aHVtYm5haWxzJztcclxuXHJcbmV4cG9ydCBjb25zdCBzd2FsT29wcyA9IChtZXNzYWdlID0gJ1NvbWV0aGluZyB3ZW50IHdyb25nIScpID0+IHtcclxuICAgIHJldHVybiBTd2FsLmZpcmUoe1xyXG4gICAgICAgIHRpdGxlOiBcIk9vcHMhXCIsXHJcbiAgICAgICAgdGV4dDogbWVzc2FnZSxcclxuICAgICAgICBpY29uOiBcImVycm9yXCIsXHJcbiAgICAgIH0pO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3Qgc3dhbFN1Y2Nlc3MgPSAobWVzc2FnZSA9ICdBY3Rpb24gc3VjY2Vzc2Z1bHkgZmluaXNoZWQhJykgPT4ge1xyXG4gICAgcmV0dXJuIFN3YWwuZmlyZSh7XHJcbiAgICAgICAgdGl0bGU6IFwiU3VjY2VzcyFcIixcclxuICAgICAgICB0ZXh0OiBtZXNzYWdlLFxyXG4gICAgICAgIGljb246IFwic3VjY2Vzc1wiLFxyXG4gICAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBjcmVhdGVPYmplY3RVUkwgPSAob2JqZWN0KSA9PiB7IC8vIGNvbnZlcnQgdmlkZW8gdXJsIHRvIGJsb2JcclxuICAgIHJldHVybiAod2luZG93LlVSTCkgPyB3aW5kb3cuVVJMLmNyZWF0ZU9iamVjdFVSTChvYmplY3QpIDogd2luZG93LndlYmtpdFVSTC5jcmVhdGVPYmplY3RVUkwob2JqZWN0KTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHZpZGVvVG9CbG9iID0gYXN5bmMgKHZpZGVvU3RyZWFtKSA9PiB7XHJcbiAgICByZXR1cm4gYXdhaXQgZmV0Y2godmlkZW9TdHJlYW0pLnRoZW4ociA9PiByLmJsb2IoKSlcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGJsb2JWaWRlb1RvQmxvYlRodW1ibmFpbCA9IGFzeW5jIChibG9iKSA9PiB7XHJcbiAgICBjb25zdCB0aHVtYm5haWxzID0gYXdhaXQgZ2V0VGh1bWJuYWlscyhibG9iLCB7XHJcbiAgICAgICAgaW50ZXJ2YWw6IDEsXHJcbiAgICAgICAgc3RhcnQ6IDIsXHJcbiAgICAgICAgZW5kOiAzXHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gdGh1bWJuYWlsc1swXVsnYmxvYiddXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBzZXRQYWdpbmF0aW9uID0gKCBkYXRhICkgPT4ge1xyXG4gICAgXHJcbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./resources/js/helpers/index.js\n");

/***/ }),

/***/ "./resources/js/pages/reader/vlog/index.vue":
/*!**************************************************!*\
  !*** ./resources/js/pages/reader/vlog/index.vue ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _index_vue_vue_type_template_id_466fd278___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=466fd278& */ \"./resources/js/pages/reader/vlog/index.vue?vue&type=template&id=466fd278&\");\n/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ \"./resources/js/pages/reader/vlog/index.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _index_vue_vue_type_template_id_466fd278___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _index_vue_vue_type_template_id_466fd278___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"resources/js/pages/reader/vlog/index.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvcGFnZXMvcmVhZGVyL3Zsb2cvaW5kZXgudnVlP2ZmNTYiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBb0Y7QUFDM0I7QUFDTDs7O0FBR3BEO0FBQ21HO0FBQ25HLGdCQUFnQiwyR0FBVTtBQUMxQixFQUFFLDJFQUFNO0FBQ1IsRUFBRSxnRkFBTTtBQUNSLEVBQUUseUZBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxJQUFJLEtBQVUsRUFBRSxZQWlCZjtBQUNEO0FBQ2UsZ0YiLCJmaWxlIjoiLi9yZXNvdXJjZXMvanMvcGFnZXMvcmVhZGVyL3Zsb2cvaW5kZXgudnVlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9pbmRleC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NDY2ZmQyNzgmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9pbmRleC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIkM6XFxcXGxhcmFnb25cXFxcd3d3XFxcXHRpa3Rva1xcXFxub2RlX21vZHVsZXNcXFxcdnVlLWhvdC1yZWxvYWQtYXBpXFxcXGRpc3RcXFxcaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCc0NjZmZDI3OCcpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCc0NjZmZDI3OCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCc0NjZmZDI3OCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTQ2NmZkMjc4JlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzQ2NmZkMjc4Jywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJyZXNvdXJjZXMvanMvcGFnZXMvcmVhZGVyL3Zsb2cvaW5kZXgudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./resources/js/pages/reader/vlog/index.vue\n");

/***/ }),

/***/ "./resources/js/pages/reader/vlog/index.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./resources/js/pages/reader/vlog/index.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js& */ \"./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/reader/vlog/index.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvcGFnZXMvcmVhZGVyL3Zsb2cvaW5kZXgudnVlP2Y1YWIiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBLHdDQUFpTSxDQUFnQixpUEFBRyxFQUFDIiwiZmlsZSI6Ii4vcmVzb3VyY2VzL2pzL3BhZ2VzL3JlYWRlci92bG9nL2luZGV4LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyYuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTQtMCEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2luZGV4LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS00LTAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9pbmRleC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./resources/js/pages/reader/vlog/index.vue?vue&type=script&lang=js&\n");

/***/ }),

/***/ "./resources/js/pages/reader/vlog/index.vue?vue&type=template&id=466fd278&":
/*!*********************************************************************************!*\
  !*** ./resources/js/pages/reader/vlog/index.vue?vue&type=template&id=466fd278& ***!
  \*********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_466fd278___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=466fd278& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/reader/vlog/index.vue?vue&type=template&id=466fd278&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_466fd278___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_466fd278___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvcGFnZXMvcmVhZGVyL3Zsb2cvaW5kZXgudnVlPzc4NGMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBIiwiZmlsZSI6Ii4vcmVzb3VyY2VzL2pzL3BhZ2VzL3JlYWRlci92bG9nL2luZGV4LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD00NjZmZDI3OCYuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTQ2NmZkMjc4JlwiIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./resources/js/pages/reader/vlog/index.vue?vue&type=template&id=466fd278&\n");

/***/ })

}]);