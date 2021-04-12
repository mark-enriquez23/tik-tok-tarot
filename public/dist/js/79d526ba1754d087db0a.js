(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/reader/vlog/index.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/reader/vlog/index.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var primevue_fileupload__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! primevue/fileupload */ \"./node_modules/primevue/fileupload/fileupload.esm.js\");\n/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vuex */ \"./node_modules/vuex/dist/vuex.esm.js\");\n/* harmony import */ var _helpers_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../helpers/index */ \"./resources/js/helpers/index.js\");\n\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  layout: \"default\",\n  metaInfo: function metaInfo() {\n    return {\n      title: this.$t(\"home\")\n    };\n  },\n  beforeCreate: function beforeCreate() {\n    this.$store.dispatch(\"about-us/fetchAboutUsData\");\n  },\n  components: {\n    FileUpload: primevue_fileupload__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\n  },\n  data: function data() {\n    return {\n      imgSrc: \"\"\n    };\n  },\n  computed: Object(vuex__WEBPACK_IMPORTED_MODULE_2__[\"mapGetters\"])({// authenticated: 'auth/check',\n  }),\n  methods: {\n    save: function save() {\n      var _this = this;\n\n      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {\n        var src, blob, thumbnail, imageUrl;\n        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                src = \"http://vjs.zencdn.net/v/oceans.mp4\"; ///video url not youtube or vimeo,just video on server\n\n                _context.next = 3;\n                return Object(_helpers_index__WEBPACK_IMPORTED_MODULE_3__[\"videoToBlob\"])(src);\n\n              case 3:\n                blob = _context.sent;\n                _context.next = 6;\n                return Object(_helpers_index__WEBPACK_IMPORTED_MODULE_3__[\"blobVideoToBlobThumbnail\"])(blob);\n\n              case 6:\n                thumbnail = _context.sent;\n                imageUrl = Object(_helpers_index__WEBPACK_IMPORTED_MODULE_3__[\"createObjectURL\"])(thumbnail); // convert blob to ObjectUrl\n\n                _this.imgSrc = imageUrl; // store\n\n                console.log(imageUrl);\n\n              case 10:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee);\n      }))();\n    }\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL3BhZ2VzL3JlYWRlci92bG9nL2luZGV4LnZ1ZT8wZDBkIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW1CQTtBQUNBO0FBQ0E7QUFNQTtBQUNBLG1CQURBO0FBR0EsVUFIQSxzQkFHQTtBQUNBO0FBQUE7QUFBQTtBQUNBLEdBTEE7QUFPQSxjQVBBLDBCQU9BO0FBQ0E7QUFDQSxHQVRBO0FBV0E7QUFDQTtBQURBLEdBWEE7QUFlQTtBQUFBO0FBQ0E7QUFEQTtBQUFBLEdBZkE7QUFtQkEscUVBQ0E7QUFEQSxJQW5CQTtBQXVCQTtBQUNBLFFBREEsa0JBQ0E7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQSxtQkFEQSxHQUNBLG9DQURBLEVBQ0E7O0FBREE7QUFBQSx1QkFFQSx1RUFGQTs7QUFBQTtBQUVBLG9CQUZBO0FBQUE7QUFBQSx1QkFLQSxxRkFMQTs7QUFBQTtBQUtBLHlCQUxBO0FBTUEsd0JBTkEsR0FNQSxpRkFOQSxFQU1BOztBQUNBLHdDQVBBLENBT0E7O0FBRUE7O0FBVEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFVQTtBQVhBO0FBdkJBIiwiZmlsZSI6Ii4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPyEuL3Jlc291cmNlcy9qcy9wYWdlcy9yZWFkZXIvdmxvZy9pbmRleC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmLmpzIiwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxyXG4gIDxkaXYgY2xhc3M9XCJcIj5cclxuICAgIDxoNT5UZXN0PC9oNT5cclxuICAgIDxwPkdlbmVyYXRlIFRodW1ibmFpbCBmcm9tIHZpZGVvIHVybDwvcD5cclxuICAgIDxoMz5CYXNpYzwvaDM+XHJcbiAgICA8RmlsZVVwbG9hZFxyXG4gICAgICBtb2RlPVwiYmFzaWNcIlxyXG4gICAgICBuYW1lPVwiZGVtb1tdXCJcclxuICAgICAgdXJsPVwiLi91cGxvYWQucGhwXCJcclxuICAgICAgYWNjZXB0PVwiaW1hZ2UvKlwiXHJcbiAgICAgIDptYXhGaWxlU2l6ZT1cIjEwMDAwMDBcIlxyXG4gICAgICBAdXBsb2FkPVwib25VcGxvYWRcIlxyXG4gICAgLz5cclxuICAgIDxidXR0b24gQGNsaWNrPVwic2F2ZSgpXCI+R2VuZXJhdGU8L2J1dHRvbj5cclxuICAgIDxpbWcgOnNyYz1cImltZ1NyY1wiIGFsdD1cInNhbXBsZSBnZW5lcmF0ZWQgdGh1bWJuYWlsXCIgLz5cclxuICA8L2Rpdj5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcbmltcG9ydCBGaWxlVXBsb2FkIGZyb20gXCJwcmltZXZ1ZS9maWxldXBsb2FkXCI7XHJcbmltcG9ydCB7IG1hcEdldHRlcnMgfSBmcm9tIFwidnVleFwiO1xyXG5pbXBvcnQge1xyXG4gIGNyZWF0ZU9iamVjdFVSTCxcclxuICB2aWRlb1RvQmxvYixcclxuICBibG9iVmlkZW9Ub0Jsb2JUaHVtYm5haWxcclxufSBmcm9tIFwiLi4vLi4vLi4vaGVscGVycy9pbmRleFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gIGxheW91dDogXCJkZWZhdWx0XCIsXHJcblxyXG4gIG1ldGFJbmZvKCkge1xyXG4gICAgcmV0dXJuIHsgdGl0bGU6IHRoaXMuJHQoXCJob21lXCIpIH07XHJcbiAgfSxcclxuXHJcbiAgYmVmb3JlQ3JlYXRlKCkge1xyXG4gICAgdGhpcy4kc3RvcmUuZGlzcGF0Y2goXCJhYm91dC11cy9mZXRjaEFib3V0VXNEYXRhXCIpO1xyXG4gIH0sXHJcblxyXG4gIGNvbXBvbmVudHM6IHtcclxuICAgIEZpbGVVcGxvYWRcclxuICB9LFxyXG5cclxuICBkYXRhOiAoKSA9PiAoe1xyXG4gICAgaW1nU3JjOiBcIlwiXHJcbiAgfSksXHJcblxyXG4gIGNvbXB1dGVkOiBtYXBHZXR0ZXJzKHtcclxuICAgIC8vIGF1dGhlbnRpY2F0ZWQ6ICdhdXRoL2NoZWNrJyxcclxuICB9KSxcclxuXHJcbiAgbWV0aG9kczoge1xyXG4gICAgYXN5bmMgc2F2ZSgpIHtcclxuICAgICAgdmFyIHNyYyA9IFwiaHR0cDovL3Zqcy56ZW5jZG4ubmV0L3Yvb2NlYW5zLm1wNFwiOyAvLy92aWRlbyB1cmwgbm90IHlvdXR1YmUgb3IgdmltZW8sanVzdCB2aWRlbyBvbiBzZXJ2ZXJcclxuICAgICAgbGV0IGJsb2IgPSBhd2FpdCB2aWRlb1RvQmxvYihzcmMpOyAvLyBjb252ZXJ0IHZpZGVvIHRvIGJsb2JcclxuXHJcbiAgICAgIC8vIHNhdmUgdGhpcyBibG9iIHRvIGRhdGFiYXNlIHRodW1ibmFpbCBjb2x1bW5cclxuICAgICAgdmFyIHRodW1ibmFpbCA9IGF3YWl0IGJsb2JWaWRlb1RvQmxvYlRodW1ibmFpbChibG9iKTtcclxuICAgICAgdmFyIGltYWdlVXJsID0gY3JlYXRlT2JqZWN0VVJMKHRodW1ibmFpbCk7IC8vIGNvbnZlcnQgYmxvYiB0byBPYmplY3RVcmxcclxuICAgICAgdGhpcy5pbWdTcmMgPSBpbWFnZVVybDsgLy8gc3RvcmVcclxuXHJcbiAgICAgIGNvbnNvbGUubG9nKGltYWdlVXJsKTtcclxuICAgIH1cclxuICB9XHJcbn07XHJcbjwvc2NyaXB0PlxyXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/reader/vlog/index.vue?vue&type=script&lang=js&\n");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/reader/vlog/index.vue?vue&type=template&id=466fd278&":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/reader/vlog/index.vue?vue&type=template&id=466fd278& ***!
  \***************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\n    \"div\",\n    {},\n    [\n      _c(\"h5\", [_vm._v(\"Test\")]),\n      _vm._v(\" \"),\n      _c(\"p\", [_vm._v(\"Generate Thumbnail from video url\")]),\n      _vm._v(\" \"),\n      _c(\"h3\", [_vm._v(\"Basic\")]),\n      _vm._v(\" \"),\n      _c(\"FileUpload\", {\n        attrs: {\n          mode: \"basic\",\n          name: \"demo[]\",\n          url: \"./upload.php\",\n          accept: \"image/*\",\n          maxFileSize: 1000000\n        },\n        on: { upload: _vm.onUpload }\n      }),\n      _vm._v(\" \"),\n      _c(\n        \"button\",\n        {\n          on: {\n            click: function($event) {\n              return _vm.save()\n            }\n          }\n        },\n        [_vm._v(\"Generate\")]\n      ),\n      _vm._v(\" \"),\n      _c(\"img\", {\n        attrs: { src: _vm.imgSrc, alt: \"sample generated thumbnail\" }\n      })\n    ],\n    1\n  )\n}\nvar staticRenderFns = []\nrender._withStripped = true\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvcGFnZXMvcmVhZGVyL3Zsb2cvaW5kZXgudnVlP2VhOWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsYUFBYTtBQUNiLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEIsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiIuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPyEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8hLi9yZXNvdXJjZXMvanMvcGFnZXMvcmVhZGVyL3Zsb2cvaW5kZXgudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTQ2NmZkMjc4Ji5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJkaXZcIixcbiAgICB7fSxcbiAgICBbXG4gICAgICBfYyhcImg1XCIsIFtfdm0uX3YoXCJUZXN0XCIpXSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJwXCIsIFtfdm0uX3YoXCJHZW5lcmF0ZSBUaHVtYm5haWwgZnJvbSB2aWRlbyB1cmxcIildKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcImgzXCIsIFtfdm0uX3YoXCJCYXNpY1wiKV0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwiRmlsZVVwbG9hZFwiLCB7XG4gICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgbW9kZTogXCJiYXNpY1wiLFxuICAgICAgICAgIG5hbWU6IFwiZGVtb1tdXCIsXG4gICAgICAgICAgdXJsOiBcIi4vdXBsb2FkLnBocFwiLFxuICAgICAgICAgIGFjY2VwdDogXCJpbWFnZS8qXCIsXG4gICAgICAgICAgbWF4RmlsZVNpemU6IDEwMDAwMDBcbiAgICAgICAgfSxcbiAgICAgICAgb246IHsgdXBsb2FkOiBfdm0ub25VcGxvYWQgfVxuICAgICAgfSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXG4gICAgICAgIFwiYnV0dG9uXCIsXG4gICAgICAgIHtcbiAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICByZXR1cm4gX3ZtLnNhdmUoKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgW192bS5fdihcIkdlbmVyYXRlXCIpXVxuICAgICAgKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcImltZ1wiLCB7XG4gICAgICAgIGF0dHJzOiB7IHNyYzogX3ZtLmltZ1NyYywgYWx0OiBcInNhbXBsZSBnZW5lcmF0ZWQgdGh1bWJuYWlsXCIgfVxuICAgICAgfSlcbiAgICBdLFxuICAgIDFcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/reader/vlog/index.vue?vue&type=template&id=466fd278&\n");

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

/***/ "./resources/js/pages/reader/vlog/index.vue":
/*!**************************************************!*\
  !*** ./resources/js/pages/reader/vlog/index.vue ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _index_vue_vue_type_template_id_466fd278___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=466fd278& */ \"./resources/js/pages/reader/vlog/index.vue?vue&type=template&id=466fd278&\");\n/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ \"./resources/js/pages/reader/vlog/index.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _index_vue_vue_type_template_id_466fd278___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _index_vue_vue_type_template_id_466fd278___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"resources/js/pages/reader/vlog/index.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvcGFnZXMvcmVhZGVyL3Zsb2cvaW5kZXgudnVlP2ZmNTYiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBb0Y7QUFDM0I7QUFDTDs7O0FBR3BEO0FBQ21HO0FBQ25HLGdCQUFnQiwyR0FBVTtBQUMxQixFQUFFLDJFQUFNO0FBQ1IsRUFBRSxnRkFBTTtBQUNSLEVBQUUseUZBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxJQUFJLEtBQVUsRUFBRSxZQWlCZjtBQUNEO0FBQ2UsZ0YiLCJmaWxlIjoiLi9yZXNvdXJjZXMvanMvcGFnZXMvcmVhZGVyL3Zsb2cvaW5kZXgudnVlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9pbmRleC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NDY2ZmQyNzgmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9pbmRleC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIkM6XFxcXGxhcmFnb25cXFxcd3d3XFxcXHRpay10b2stdGFyb3RcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1ob3QtcmVsb2FkLWFwaVxcXFxkaXN0XFxcXGluZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnNDY2ZmQyNzgnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnNDY2ZmQyNzgnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnNDY2ZmQyNzgnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL2luZGV4LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD00NjZmZDI3OCZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCc0NjZmZDI3OCcsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicmVzb3VyY2VzL2pzL3BhZ2VzL3JlYWRlci92bG9nL2luZGV4LnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./resources/js/pages/reader/vlog/index.vue\n");

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