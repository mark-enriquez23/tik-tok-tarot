(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[33],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/admin/reader-list.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/admin/reader-list.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ \"./node_modules/vuex/dist/vuex.esm.js\");\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  scrollToTop: false,\n  metaInfo: function metaInfo() {\n    return {\n      title: this.$t('settings')\n    };\n  },\n  components: {},\n  data: function data() {\n    return {//   readers: [\n      //       {\n      //           'name': 'sample',\n      //           'username': 'sample',\n      //       }\n      //   ]\n    };\n  },\n  computed: Object(vuex__WEBPACK_IMPORTED_MODULE_0__[\"mapGetters\"])({\n    user: 'auth/user',\n    readers: 'admin-reader/readers'\n  }),\n  created: function created() {},\n  methods: {},\n  beforeMount: function beforeMount() {\n    this.$store.dispatch(\"admin-reader/fetchReaders\");\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL3BhZ2VzL2FkbWluL3JlYWRlci1saXN0LnZ1ZT8zMTdmIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUE4QkE7QUFFQTtBQUNBLG9CQURBO0FBR0EsVUFIQSxzQkFHQTtBQUNBO0FBQUE7QUFBQTtBQUNBLEdBTEE7QUFPQSxnQkFQQTtBQVVBO0FBQUEsWUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTtBQUFBLEdBVkE7QUFtQkE7QUFDQSxxQkFEQTtBQUVBO0FBRkEsSUFuQkE7QUF3QkEsU0F4QkEscUJBd0JBLENBQ0EsQ0F6QkE7QUEyQkEsYUEzQkE7QUE4QkEsYUE5QkEseUJBOEJBO0FBQ0E7QUFDQTtBQWhDQSIsImZpbGUiOiIuL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPyEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8hLi9yZXNvdXJjZXMvanMvcGFnZXMvYWRtaW4vcmVhZGVyLWxpc3QudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJi5qcyIsInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cclxuICA8Y2FyZCBjbGFzcz1cInB5LTNcIj5cclxuICAgIDxoNCBjbGFzcz1cIm1iLTBcIj5SZWFkZXJzIExpc3Q8L2g0PlxyXG4gICAgPHAgY2xhc3M9XCJtYi0wXCI+TGlzdCBvZiByZWFkZXJzLjwvcD5cclxuICAgIDxocj5cclxuICAgPHRhYmxlIGNsYXNzPVwidGFibGVcIj5cclxuICAgIDx0aGVhZD5cclxuICAgICAgICA8dHI+XHJcbiAgICAgICAgPHRoIHNjb3BlPVwiY29sXCI+IzwvdGg+XHJcbiAgICAgICAgPHRoIHNjb3BlPVwiY29sXCI+VXNlcm5hbWU8L3RoPlxyXG4gICAgICAgIDx0aCBzY29wZT1cImNvbFwiPk5hbWU8L3RoPlxyXG4gICAgICAgIDx0aCBzY29wZT1cImNvbFwiPkVtYWlsPC90aD5cclxuICAgICAgICA8dGggc2NvcGU9XCJjb2xcIj5BY3Rpb248L3RoPlxyXG4gICAgICAgIDwvdHI+XHJcbiAgICA8L3RoZWFkPlxyXG4gICAgPHRib2R5PlxyXG4gICAgICAgIDx0ciB2LWZvcj1cIihyZWFkZXIsIGkpIGluIHJlYWRlcnNcIiA6a2V5PVwicmVhZGVyLmlkXCI+XHJcbiAgICAgICAgICAgIDx0aCBzY29wZT1cInJvd1wiPnt7IGkgKyAxIH19PC90aD5cclxuICAgICAgICAgICAgPHRkPnt7IHJlYWRlci51c2VybmFtZSB9fTwvdGQ+XHJcbiAgICAgICAgICAgIDx0ZD57eyByZWFkZXIubmFtZSB9fTwvdGQ+XHJcbiAgICAgICAgICAgIDx0ZD57eyByZWFkZXIuZW1haWwgfX08L3RkPlxyXG4gICAgICAgICAgICA8dGQ+PGkgY2xhc3M9XCJmYSBmYS1leWVcIj48YT52aWV3PC9hPjwvaT48L3RkPlxyXG4gICAgICAgICAgICA8dGQ+PGkgY2xhc3M9XCJmYSBmYS1leWVcIj48YT5lZGl0PC9hPjwvaT48L3RkPlxyXG4gICAgICAgIDwvdHI+XHJcbiAgICA8L3Rib2R5PlxyXG4gICAgPC90YWJsZT5cclxuICA8L2NhcmQ+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG5pbXBvcnQgeyBtYXBHZXR0ZXJzIH0gZnJvbSAndnVleCdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICBzY3JvbGxUb1RvcDogZmFsc2UsXHJcblxyXG4gIG1ldGFJbmZvICgpIHtcclxuICAgIHJldHVybiB7IHRpdGxlOiB0aGlzLiR0KCdzZXR0aW5ncycpIH1cclxuICB9LFxyXG5cclxuICBjb21wb25lbnRzOiB7XHJcbiAgfSxcclxuXHJcbiAgZGF0YTogKCkgPT4gKHtcclxuICAgIC8vICAgcmVhZGVyczogW1xyXG4gICAgLy8gICAgICAge1xyXG4gICAgLy8gICAgICAgICAgICduYW1lJzogJ3NhbXBsZScsXHJcbiAgICAvLyAgICAgICAgICAgJ3VzZXJuYW1lJzogJ3NhbXBsZScsXHJcbiAgICAvLyAgICAgICB9XHJcbiAgICAvLyAgIF1cclxuICB9KSxcclxuXHJcbiAgY29tcHV0ZWQ6IG1hcEdldHRlcnMoe1xyXG4gICAgdXNlcjogJ2F1dGgvdXNlcicsXHJcbiAgICByZWFkZXJzOiAnYWRtaW4tcmVhZGVyL3JlYWRlcnMnLFxyXG4gIH0pLFxyXG5cclxuICBjcmVhdGVkICgpIHtcclxuICB9LFxyXG5cclxuICBtZXRob2RzOiB7XHJcbiAgfSxcclxuXHJcbiAgYmVmb3JlTW91bnQoKXtcclxuICAgICAgdGhpcy4kc3RvcmUuZGlzcGF0Y2goXCJhZG1pbi1yZWFkZXIvZmV0Y2hSZWFkZXJzXCIpO1xyXG4gIH1cclxufVxyXG48L3NjcmlwdD5cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/admin/reader-list.vue?vue&type=script&lang=js&\n");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/admin/reader-list.vue?vue&type=template&id=a6479ae2&":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/admin/reader-list.vue?vue&type=template&id=a6479ae2& ***!
  \***************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\"card\", { staticClass: \"py-3\" }, [\n    _c(\"h4\", { staticClass: \"mb-0\" }, [_vm._v(\"Readers List\")]),\n    _vm._v(\" \"),\n    _c(\"p\", { staticClass: \"mb-0\" }, [_vm._v(\"List of readers.\")]),\n    _vm._v(\" \"),\n    _c(\"hr\"),\n    _vm._v(\" \"),\n    _c(\"table\", { staticClass: \"table\" }, [\n      _c(\"thead\", [\n        _c(\"tr\", [\n          _c(\"th\", { attrs: { scope: \"col\" } }, [_vm._v(\"#\")]),\n          _vm._v(\" \"),\n          _c(\"th\", { attrs: { scope: \"col\" } }, [_vm._v(\"Username\")]),\n          _vm._v(\" \"),\n          _c(\"th\", { attrs: { scope: \"col\" } }, [_vm._v(\"Name\")]),\n          _vm._v(\" \"),\n          _c(\"th\", { attrs: { scope: \"col\" } }, [_vm._v(\"Email\")]),\n          _vm._v(\" \"),\n          _c(\"th\", { attrs: { scope: \"col\" } }, [_vm._v(\"Action\")])\n        ])\n      ]),\n      _vm._v(\" \"),\n      _c(\n        \"tbody\",\n        _vm._l(_vm.readers, function(reader, i) {\n          return _c(\"tr\", { key: reader.id }, [\n            _c(\"th\", { attrs: { scope: \"row\" } }, [_vm._v(_vm._s(i + 1))]),\n            _vm._v(\" \"),\n            _c(\"td\", [_vm._v(_vm._s(reader.username))]),\n            _vm._v(\" \"),\n            _c(\"td\", [_vm._v(_vm._s(reader.name))]),\n            _vm._v(\" \"),\n            _c(\"td\", [_vm._v(_vm._s(reader.email))]),\n            _vm._v(\" \"),\n            _c(\"td\", [\n              _c(\"i\", { staticClass: \"fa fa-eye\" }, [_c(\"a\", [_vm._v(\"view\")])])\n            ]),\n            _vm._v(\" \"),\n            _c(\"td\", [\n              _c(\"i\", { staticClass: \"fa fa-eye\" }, [_c(\"a\", [_vm._v(\"edit\")])])\n            ])\n          ])\n        }),\n        0\n      )\n    ])\n  ])\n}\nvar staticRenderFns = []\nrender._withStripped = true\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvcGFnZXMvYWRtaW4vcmVhZGVyLWxpc3QudnVlP2FhNWQiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsc0JBQXNCO0FBQzNDLGNBQWMsc0JBQXNCO0FBQ3BDO0FBQ0EsYUFBYSxzQkFBc0I7QUFDbkM7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLHVCQUF1QjtBQUN4QztBQUNBO0FBQ0Esb0JBQW9CLFNBQVMsZUFBZSxFQUFFO0FBQzlDO0FBQ0Esb0JBQW9CLFNBQVMsZUFBZSxFQUFFO0FBQzlDO0FBQ0Esb0JBQW9CLFNBQVMsZUFBZSxFQUFFO0FBQzlDO0FBQ0Esb0JBQW9CLFNBQVMsZUFBZSxFQUFFO0FBQzlDO0FBQ0Esb0JBQW9CLFNBQVMsZUFBZSxFQUFFO0FBQzlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQixpQkFBaUI7QUFDNUMsc0JBQXNCLFNBQVMsZUFBZSxFQUFFO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsMkJBQTJCO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QiwyQkFBMkI7QUFDbEQ7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiIuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPyEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8hLi9yZXNvdXJjZXMvanMvcGFnZXMvYWRtaW4vcmVhZGVyLWxpc3QudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWE2NDc5YWUyJi5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXCJjYXJkXCIsIHsgc3RhdGljQ2xhc3M6IFwicHktM1wiIH0sIFtcbiAgICBfYyhcImg0XCIsIHsgc3RhdGljQ2xhc3M6IFwibWItMFwiIH0sIFtfdm0uX3YoXCJSZWFkZXJzIExpc3RcIildKSxcbiAgICBfdm0uX3YoXCIgXCIpLFxuICAgIF9jKFwicFwiLCB7IHN0YXRpY0NsYXNzOiBcIm1iLTBcIiB9LCBbX3ZtLl92KFwiTGlzdCBvZiByZWFkZXJzLlwiKV0pLFxuICAgIF92bS5fdihcIiBcIiksXG4gICAgX2MoXCJoclwiKSxcbiAgICBfdm0uX3YoXCIgXCIpLFxuICAgIF9jKFwidGFibGVcIiwgeyBzdGF0aWNDbGFzczogXCJ0YWJsZVwiIH0sIFtcbiAgICAgIF9jKFwidGhlYWRcIiwgW1xuICAgICAgICBfYyhcInRyXCIsIFtcbiAgICAgICAgICBfYyhcInRoXCIsIHsgYXR0cnM6IHsgc2NvcGU6IFwiY29sXCIgfSB9LCBbX3ZtLl92KFwiI1wiKV0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJ0aFwiLCB7IGF0dHJzOiB7IHNjb3BlOiBcImNvbFwiIH0gfSwgW192bS5fdihcIlVzZXJuYW1lXCIpXSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcInRoXCIsIHsgYXR0cnM6IHsgc2NvcGU6IFwiY29sXCIgfSB9LCBbX3ZtLl92KFwiTmFtZVwiKV0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJ0aFwiLCB7IGF0dHJzOiB7IHNjb3BlOiBcImNvbFwiIH0gfSwgW192bS5fdihcIkVtYWlsXCIpXSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcInRoXCIsIHsgYXR0cnM6IHsgc2NvcGU6IFwiY29sXCIgfSB9LCBbX3ZtLl92KFwiQWN0aW9uXCIpXSlcbiAgICAgICAgXSlcbiAgICAgIF0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFxuICAgICAgICBcInRib2R5XCIsXG4gICAgICAgIF92bS5fbChfdm0ucmVhZGVycywgZnVuY3Rpb24ocmVhZGVyLCBpKSB7XG4gICAgICAgICAgcmV0dXJuIF9jKFwidHJcIiwgeyBrZXk6IHJlYWRlci5pZCB9LCBbXG4gICAgICAgICAgICBfYyhcInRoXCIsIHsgYXR0cnM6IHsgc2NvcGU6IFwicm93XCIgfSB9LCBbX3ZtLl92KF92bS5fcyhpICsgMSkpXSksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXCJ0ZFwiLCBbX3ZtLl92KF92bS5fcyhyZWFkZXIudXNlcm5hbWUpKV0pLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFwidGRcIiwgW192bS5fdihfdm0uX3MocmVhZGVyLm5hbWUpKV0pLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFwidGRcIiwgW192bS5fdihfdm0uX3MocmVhZGVyLmVtYWlsKSldKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcInRkXCIsIFtcbiAgICAgICAgICAgICAgX2MoXCJpXCIsIHsgc3RhdGljQ2xhc3M6IFwiZmEgZmEtZXllXCIgfSwgW19jKFwiYVwiLCBbX3ZtLl92KFwidmlld1wiKV0pXSlcbiAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFwidGRcIiwgW1xuICAgICAgICAgICAgICBfYyhcImlcIiwgeyBzdGF0aWNDbGFzczogXCJmYSBmYS1leWVcIiB9LCBbX2MoXCJhXCIsIFtfdm0uX3YoXCJlZGl0XCIpXSldKVxuICAgICAgICAgICAgXSlcbiAgICAgICAgICBdKVxuICAgICAgICB9KSxcbiAgICAgICAgMFxuICAgICAgKVxuICAgIF0pXG4gIF0pXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/admin/reader-list.vue?vue&type=template&id=a6479ae2&\n");

/***/ }),

/***/ "./resources/js/pages/admin/reader-list.vue":
/*!**************************************************!*\
  !*** ./resources/js/pages/admin/reader-list.vue ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _reader_list_vue_vue_type_template_id_a6479ae2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reader-list.vue?vue&type=template&id=a6479ae2& */ \"./resources/js/pages/admin/reader-list.vue?vue&type=template&id=a6479ae2&\");\n/* harmony import */ var _reader_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reader-list.vue?vue&type=script&lang=js& */ \"./resources/js/pages/admin/reader-list.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _reader_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _reader_list_vue_vue_type_template_id_a6479ae2___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _reader_list_vue_vue_type_template_id_a6479ae2___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"resources/js/pages/admin/reader-list.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvcGFnZXMvYWRtaW4vcmVhZGVyLWxpc3QudnVlPzFiMDYiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBMEY7QUFDM0I7QUFDTDs7O0FBRzFEO0FBQ2dHO0FBQ2hHLGdCQUFnQiwyR0FBVTtBQUMxQixFQUFFLGlGQUFNO0FBQ1IsRUFBRSxzRkFBTTtBQUNSLEVBQUUsK0ZBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxJQUFJLEtBQVUsRUFBRSxZQWlCZjtBQUNEO0FBQ2UsZ0YiLCJmaWxlIjoiLi9yZXNvdXJjZXMvanMvcGFnZXMvYWRtaW4vcmVhZGVyLWxpc3QudnVlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9yZWFkZXItbGlzdC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9YTY0NzlhZTImXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vcmVhZGVyLWxpc3QudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9yZWFkZXItbGlzdC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIkM6XFxcXGxhcmFnb25cXFxcd3d3XFxcXHRpay10b2stdGFyb3RcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1ob3QtcmVsb2FkLWFwaVxcXFxkaXN0XFxcXGluZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnYTY0NzlhZTInKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnYTY0NzlhZTInLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnYTY0NzlhZTInLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL3JlYWRlci1saXN0LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1hNjQ3OWFlMiZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCdhNjQ3OWFlMicsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicmVzb3VyY2VzL2pzL3BhZ2VzL2FkbWluL3JlYWRlci1saXN0LnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./resources/js/pages/admin/reader-list.vue\n");

/***/ }),

/***/ "./resources/js/pages/admin/reader-list.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./resources/js/pages/admin/reader-list.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_reader_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./reader-list.vue?vue&type=script&lang=js& */ \"./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/admin/reader-list.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_reader_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvcGFnZXMvYWRtaW4vcmVhZGVyLWxpc3QudnVlP2Q2NzQiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBLHdDQUFpTSxDQUFnQix1UEFBRyxFQUFDIiwiZmlsZSI6Ii4vcmVzb3VyY2VzL2pzL3BhZ2VzL2FkbWluL3JlYWRlci1saXN0LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyYuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTQtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3JlYWRlci1saXN0LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS00LTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9yZWFkZXItbGlzdC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./resources/js/pages/admin/reader-list.vue?vue&type=script&lang=js&\n");

/***/ }),

/***/ "./resources/js/pages/admin/reader-list.vue?vue&type=template&id=a6479ae2&":
/*!*********************************************************************************!*\
  !*** ./resources/js/pages/admin/reader-list.vue?vue&type=template&id=a6479ae2& ***!
  \*********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_reader_list_vue_vue_type_template_id_a6479ae2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./reader-list.vue?vue&type=template&id=a6479ae2& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/admin/reader-list.vue?vue&type=template&id=a6479ae2&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_reader_list_vue_vue_type_template_id_a6479ae2___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_reader_list_vue_vue_type_template_id_a6479ae2___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvcGFnZXMvYWRtaW4vcmVhZGVyLWxpc3QudnVlPzhlYWIiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBIiwiZmlsZSI6Ii4vcmVzb3VyY2VzL2pzL3BhZ2VzL2FkbWluL3JlYWRlci1saXN0LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1hNjQ3OWFlMiYuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vcmVhZGVyLWxpc3QudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWE2NDc5YWUyJlwiIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./resources/js/pages/admin/reader-list.vue?vue&type=template&id=a6479ae2&\n");

/***/ })

}]);