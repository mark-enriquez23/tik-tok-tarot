(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[22],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/admin/reader/reader-list.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/admin/reader/reader-list.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ \"./node_modules/vuex/dist/vuex.esm.js\");\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  scrollToTop: false,\n  metaInfo: function metaInfo() {\n    return {\n      title: this.$t('settings')\n    };\n  },\n  components: {},\n  data: function data() {\n    return {};\n  },\n  computed: Object(vuex__WEBPACK_IMPORTED_MODULE_0__[\"mapGetters\"])({\n    user: 'auth/user',\n    readers: 'admin-reader/readers'\n  }),\n  created: function created() {},\n  methods: {\n    view: function view(id) {\n      this.$router.push({\n        name: \"admin.reader-form\",\n        params: {\n          id: id\n        }\n      });\n    }\n  },\n  beforeMount: function beforeMount() {\n    this.$store.dispatch(\"admin-reader/fetchReaders\");\n    this.$store.dispatch('auth/fetchUser');\n\n    if (!this.user) {\n      this.$router.push({\n        name: 'home'\n      });\n    }\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL3BhZ2VzL2FkbWluL3JlYWRlci9yZWFkZXItbGlzdC52dWU/M2VjMyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUE0Q0E7QUFFQTtBQUNBLG9CQURBO0FBR0EsVUFIQSxzQkFHQTtBQUNBO0FBQUE7QUFBQTtBQUNBLEdBTEE7QUFPQSxnQkFQQTtBQVVBO0FBQUE7QUFBQSxHQVZBO0FBYUE7QUFDQSxxQkFEQTtBQUVBO0FBRkEsSUFiQTtBQWtCQSxTQWxCQSxxQkFrQkEsQ0FDQSxDQW5CQTtBQXFCQTtBQUNBLFFBREEsZ0JBQ0EsRUFEQSxFQUNBO0FBQ0E7QUFDQSxpQ0FEQTtBQUVBO0FBQ0E7QUFEQTtBQUZBO0FBTUE7QUFSQSxHQXJCQTtBQWdDQSxhQWhDQSx5QkFnQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQXZDQSIsImZpbGUiOiIuL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPyEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8hLi9yZXNvdXJjZXMvanMvcGFnZXMvYWRtaW4vcmVhZGVyL3JlYWRlci1saXN0LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyYuanMiLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XHJcbiAgPGNhcmQgY2xhc3M9XCJweS0zIG0tNFwiPlxyXG4gICAgPGg0IGNsYXNzPVwibWItM1wiPlJlYWRlcnMgTGlzdDwvaDQ+XHJcbiAgICA8cCBjbGFzcz1cIm1iLTVcIj5OZWNlc3NpdGF0aWJ1cyBlaXVzIGNvbnNlcXVhdHVyIGV4IGFsaXF1aWQgZnVnYSBldW0gcXVpZGVtLjwvcD5cclxuICAgPHRhYmxlIGNsYXNzPVwidGFibGVcIj5cclxuICAgIDx0aGVhZD5cclxuICAgICAgICA8dHI+XHJcbiAgICAgICAgICA8dGggc2NvcGU9XCJjb2xcIj5JRDwvdGg+XHJcbiAgICAgICAgICA8dGQ+PC90ZD5cclxuICAgICAgICAgIDx0aCBzY29wZT1cImNvbFwiPlVzZXJuYW1lPC90aD5cclxuICAgICAgICAgIDx0aCBzY29wZT1cImNvbFwiPkZpcnN0IE5hbWU8L3RoPlxyXG4gICAgICAgICAgPHRoIHNjb3BlPVwiY29sXCI+TGFzdCBOYW1lPC90aD5cclxuICAgICAgICAgIDx0aCBzY29wZT1cImNvbFwiPkVtYWlsPC90aD5cclxuICAgICAgICAgIDx0aCBzY29wZT1cImNvbFwiPlZpc2libGU/PC90aD5cclxuICAgICAgICAgIDx0aCBzY29wZT1cImNvbFwiPkJhbm5lZD88L3RoPlxyXG4gICAgICAgICAgPHRoIHNjb3BlPVwiY29sXCI+U3RhdHVzPC90aD5cclxuICAgICAgICAgIDx0aCBzY29wZT1cImNvbFwiPkFjdGlvbjwvdGg+XHJcbiAgICAgICAgPC90cj5cclxuICAgIDwvdGhlYWQ+XHJcbiAgICA8dGJvZHk+XHJcbiAgICAgICAgPHRyIHYtZm9yPVwicmVhZGVyIGluIHJlYWRlcnNcIiA6a2V5PVwicmVhZGVyLmlkXCI+XHJcbiAgICAgICAgICAgIDx0aCBzY29wZT1cInJvd1wiPnt7cmVhZGVyLmlkfX08L3RoPlxyXG4gICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICAgPGltZyBjbGFzcz1cInJlYWRlci1pbWdcIiA6c3JjPVwicmVhZGVyLnVzZXJfZGV0YWlscy5wcm9maWxlX3Bob3RvID09ICcnPyAnaHR0cDovL3Rpay10b2stdGFyb3QtbWFzdGVyLnRlc3QvaW1hZ2VzL3Byb2ZpbGUuanBnJyA6IHJlYWRlci51c2VyX2RldGFpbHMucHJvZmlsZV9waG90bz5cclxuICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgPHRkPnt7IHJlYWRlci51c2VybmFtZSB9fTwvdGQ+XHJcbiAgICAgICAgICAgIDx0ZD57eyByZWFkZXIuZmlyc3ROYW1lIH19PC90ZD5cclxuICAgICAgICAgICAgPHRkPnt7IHJlYWRlci5sYXN0TmFtZSB9fTwvdGQ+XHJcbiAgICAgICAgICAgIDx0ZD57eyByZWFkZXIuZW1haWwgfX08L3RkPlxyXG4gICAgICAgICAgICA8dGQ+e3sgcmVhZGVyLnZpc2libGUgPyAnWWVzJyA6ICdObycgfX08L3RkPlxyXG4gICAgICAgICAgICA8dGQ+e3sgcmVhZGVyLmlzX2Jhbm5lZCA9PSAwID8gJ05vJyA6ICdZZXMnIH19PC90ZD5cclxuICAgICAgICAgICAgPHRkIHYtaWY9J3JlYWRlci5pc19hcHByb3ZlZCA9PSBcIlBFTkRJTkdcIicgY2xhc3M9XCJ0ZXh0LXdhcm5pbmdcIj5QZW5kaW5nPC90ZD5cclxuICAgICAgICAgICAgPHRkIHYtZWxzZSA6Y2xhc3M9XCJyZWFkZXIuaXNfYXBwcm92ZWQgPT0gJ0FQUFJPVkVEJyA/ICd0ZXh0LXN1Y2Nlc3MnIDogJ3RleHQtZGFuZ2VyJ1wiPnt7IHJlYWRlci5pc19hcHByb3ZlZCA9PSAnQVBQUk9WRUQnID8gJ0FwcHJvdmVkJyA6ICdSZWplY3RlZCcgfX08L3RkPlxyXG4gICAgICAgICAgICA8dGQ+PGRpdiBjbGFzcz1cImN1cnNvci1wb2ludGVyIGxpbmtcIiBAY2xpY2s9XCJ2aWV3KHJlYWRlci5pZClcIj5NYW5hZ2U8L2Rpdj48L3RkPlxyXG4gICAgICAgIDwvdHI+XHJcbiAgICAgICAgPHRyPlxyXG4gICAgICAgICAgPHRkIGNvbHNwYW49XCI3XCIgY2xhc3M9XCJ0ZXh0LWNlbnRlclwiIHYtaWY9XCJyZWFkZXJzID8gcmVhZGVycy5sZW5ndGggPD0gMCA6IGZhbHNlXCI+Tm8gUmVhZGVyIGZvdW5kPC90ZD5cclxuICAgICAgICA8L3RyPlxyXG4gICAgPC90Ym9keT5cclxuICAgIDwvdGFibGU+XHJcbiAgPC9jYXJkPlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuaW1wb3J0IHsgbWFwR2V0dGVycyB9IGZyb20gJ3Z1ZXgnXHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgc2Nyb2xsVG9Ub3A6IGZhbHNlLFxyXG5cclxuICBtZXRhSW5mbyAoKSB7XHJcbiAgICByZXR1cm4geyB0aXRsZTogdGhpcy4kdCgnc2V0dGluZ3MnKSB9XHJcbiAgfSxcclxuXHJcbiAgY29tcG9uZW50czoge1xyXG4gIH0sXHJcblxyXG4gIGRhdGE6ICgpID0+ICh7XHJcbiAgfSksXHJcblxyXG4gIGNvbXB1dGVkOiBtYXBHZXR0ZXJzKHtcclxuICAgIHVzZXI6ICdhdXRoL3VzZXInLFxyXG4gICAgcmVhZGVyczogJ2FkbWluLXJlYWRlci9yZWFkZXJzJyxcclxuICB9KSxcclxuXHJcbiAgY3JlYXRlZCAoKSB7XHJcbiAgfSxcclxuXHJcbiAgbWV0aG9kczoge1xyXG4gICAgICB2aWV3KGlkKXtcclxuICAgICAgICB0aGlzLiRyb3V0ZXIucHVzaCh7XHJcbiAgICAgICAgICAgIG5hbWU6IFwiYWRtaW4ucmVhZGVyLWZvcm1cIixcclxuICAgICAgICAgICAgcGFyYW1zOiB7XHJcbiAgICAgICAgICAgICAgICBpZDogaWRcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgfSxcclxuXHJcbiAgYmVmb3JlTW91bnQoKXtcclxuICAgICAgdGhpcy4kc3RvcmUuZGlzcGF0Y2goXCJhZG1pbi1yZWFkZXIvZmV0Y2hSZWFkZXJzXCIpO1xyXG4gICAgICB0aGlzLiRzdG9yZS5kaXNwYXRjaCgnYXV0aC9mZXRjaFVzZXInKTtcclxuXHJcbiAgICAgIGlmICghdGhpcy51c2VyKXtcclxuICAgICAgICB0aGlzLiRyb3V0ZXIucHVzaCh7IG5hbWU6ICdob21lJyB9KVxyXG4gICAgICB9XHJcbiAgfVxyXG59XHJcbjwvc2NyaXB0PlxyXG48c3R5bGU+XHJcbi5yZWFkZXItaW1ne1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxufVxyXG4uaGlyZWQtdGFne1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICBmb250LXdlaWdodDogYm9sZGVyO1xyXG59XHJcbjwvc3R5bGU+XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/admin/reader/reader-list.vue?vue&type=script&lang=js&\n");

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/admin/reader/reader-list.vue?vue&type=style&index=0&lang=css&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/admin/reader/reader-list.vue?vue&type=style&index=0&lang=css& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ \"./node_modules/css-loader/lib/css-base.js\")(false);\n// imports\n\n\n// module\nexports.push([module.i, \"\\n.reader-img{\\r\\n  border-radius: 50%;\\n}\\n.hired-tag{\\r\\n  font-size: 12px;\\r\\n  font-weight: bolder;\\n}\\r\\n\", \"\"]);\n\n// exports\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvcGFnZXMvYWRtaW4vcmVhZGVyL3JlYWRlci1saXN0LnZ1ZT8zNDUyIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDJCQUEyQixtQkFBTyxDQUFDLHlHQUF3RDtBQUMzRjs7O0FBR0E7QUFDQSxjQUFjLFFBQVMsaUJBQWlCLHlCQUF5QixHQUFHLGFBQWEsc0JBQXNCLDBCQUEwQixHQUFHOztBQUVwSSIsImZpbGUiOiIuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzPyEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPyEuL3Jlc291cmNlcy9qcy9wYWdlcy9hZG1pbi9yZWFkZXIvcmVhZGVyLWxpc3QudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3MmLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKShmYWxzZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJcXG4ucmVhZGVyLWltZ3tcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG59XFxuLmhpcmVkLXRhZ3tcXHJcXG4gIGZvbnQtc2l6ZTogMTJweDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxufVxcclxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/admin/reader/reader-list.vue?vue&type=style&index=0&lang=css&\n");

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/admin/reader/reader-list.vue?vue&type=style&index=0&lang=css&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/admin/reader/reader-list.vue?vue&type=style&index=0&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nvar content = __webpack_require__(/*! !../../../../../node_modules/css-loader??ref--6-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./reader-list.vue?vue&type=style&index=0&lang=css& */ \"./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/admin/reader/reader-list.vue?vue&type=style&index=0&lang=css&\");\n\nif(typeof content === 'string') content = [[module.i, content, '']];\n\nvar transform;\nvar insertInto;\n\n\n\nvar options = {\"hmr\":true}\n\noptions.transform = transform\noptions.insertInto = undefined;\n\nvar update = __webpack_require__(/*! ../../../../../node_modules/style-loader/lib/addStyles.js */ \"./node_modules/style-loader/lib/addStyles.js\")(content, options);\n\nif(content.locals) module.exports = content.locals;\n\nif(false) {}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvcGFnZXMvYWRtaW4vcmVhZGVyL3JlYWRlci1saXN0LnZ1ZT9jMGI5Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSxjQUFjLG1CQUFPLENBQUMsK2lCQUFnVTs7QUFFdFYsNENBQTRDLFFBQVM7O0FBRXJEO0FBQ0E7Ozs7QUFJQSxlQUFlOztBQUVmO0FBQ0E7O0FBRUEsYUFBYSxtQkFBTyxDQUFDLCtHQUE0RDs7QUFFakY7O0FBRUEsR0FBRyxLQUFVLEVBQUUiLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2luZGV4LmpzIS4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/IS4vcmVzb3VyY2VzL2pzL3BhZ2VzL2FkbWluL3JlYWRlci9yZWFkZXItbGlzdC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzcyYuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNi0xIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTYtMiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3JlYWRlci1saXN0LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9Y3NzJlwiKTtcblxuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5cbnZhciB0cmFuc2Zvcm07XG52YXIgaW5zZXJ0SW50bztcblxuXG5cbnZhciBvcHRpb25zID0ge1wiaG1yXCI6dHJ1ZX1cblxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbm9wdGlvbnMuaW5zZXJ0SW50byA9IHVuZGVmaW5lZDtcblxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscztcblxuaWYobW9kdWxlLmhvdCkge1xuXHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNi0xIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTYtMiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3JlYWRlci1saXN0LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9Y3NzJlwiLCBmdW5jdGlvbigpIHtcblx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTYtMSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS02LTIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9yZWFkZXItbGlzdC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzcyZcIik7XG5cblx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblxuXHRcdHZhciBsb2NhbHMgPSAoZnVuY3Rpb24oYSwgYikge1xuXHRcdFx0dmFyIGtleSwgaWR4ID0gMDtcblxuXHRcdFx0Zm9yKGtleSBpbiBhKSB7XG5cdFx0XHRcdGlmKCFiIHx8IGFba2V5XSAhPT0gYltrZXldKSByZXR1cm4gZmFsc2U7XG5cdFx0XHRcdGlkeCsrO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3Ioa2V5IGluIGIpIGlkeC0tO1xuXG5cdFx0XHRyZXR1cm4gaWR4ID09PSAwO1xuXHRcdH0oY29udGVudC5sb2NhbHMsIG5ld0NvbnRlbnQubG9jYWxzKSk7XG5cblx0XHRpZighbG9jYWxzKSB0aHJvdyBuZXcgRXJyb3IoJ0Fib3J0aW5nIENTUyBITVIgZHVlIHRvIGNoYW5nZWQgY3NzLW1vZHVsZXMgbG9jYWxzLicpO1xuXG5cdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHR9KTtcblxuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/admin/reader/reader-list.vue?vue&type=style&index=0&lang=css&\n");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/admin/reader/reader-list.vue?vue&type=template&id=48ba8145&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/admin/reader/reader-list.vue?vue&type=template&id=48ba8145& ***!
  \**********************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function () {}\nvar staticRenderFns = []\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvcGFnZXMvYWRtaW4vcmVhZGVyL3JlYWRlci1saXN0LnZ1ZT82MjRjIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0EiLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/IS4vcmVzb3VyY2VzL2pzL3BhZ2VzL2FkbWluL3JlYWRlci9yZWFkZXItbGlzdC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NDhiYTgxNDUmLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIHJlbmRlciA9IGZ1bmN0aW9uICgpIHt9XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/admin/reader/reader-list.vue?vue&type=template&id=48ba8145&\n");

/***/ }),

/***/ "./resources/js/pages/admin/reader/reader-list.vue":
/*!*********************************************************!*\
  !*** ./resources/js/pages/admin/reader/reader-list.vue ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _reader_list_vue_vue_type_template_id_48ba8145___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reader-list.vue?vue&type=template&id=48ba8145& */ \"./resources/js/pages/admin/reader/reader-list.vue?vue&type=template&id=48ba8145&\");\n/* harmony import */ var _reader_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reader-list.vue?vue&type=script&lang=js& */ \"./resources/js/pages/admin/reader/reader-list.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _reader_list_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reader-list.vue?vue&type=style&index=0&lang=css& */ \"./resources/js/pages/admin/reader/reader-list.vue?vue&type=style&index=0&lang=css&\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\n  _reader_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _reader_list_vue_vue_type_template_id_48ba8145___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _reader_list_vue_vue_type_template_id_48ba8145___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"resources/js/pages/admin/reader/reader-list.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvcGFnZXMvYWRtaW4vcmVhZGVyL3JlYWRlci1saXN0LnZ1ZT83NzViIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBMEY7QUFDM0I7QUFDTDtBQUNhOzs7QUFHdkU7QUFDbUc7QUFDbkcsZ0JBQWdCLDJHQUFVO0FBQzFCLEVBQUUsaUZBQU07QUFDUixFQUFFLHNGQUFNO0FBQ1IsRUFBRSwrRkFBZTtBQUNqQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLElBQUksS0FBVSxFQUFFLFlBaUJmO0FBQ0Q7QUFDZSxnRiIsImZpbGUiOiIuL3Jlc291cmNlcy9qcy9wYWdlcy9hZG1pbi9yZWFkZXIvcmVhZGVyLWxpc3QudnVlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9yZWFkZXItbGlzdC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NDhiYTgxNDUmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vcmVhZGVyLWxpc3QudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9yZWFkZXItbGlzdC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmltcG9ydCBzdHlsZTAgZnJvbSBcIi4vcmVhZGVyLWxpc3QudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3MmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIkM6XFxcXGxhcmFnb25cXFxcd3d3XFxcXHRpay10b2stdGFyb3QtbWFzdGVyXFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtaG90LXJlbG9hZC1hcGlcXFxcZGlzdFxcXFxpbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzQ4YmE4MTQ1JykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzQ4YmE4MTQ1JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzQ4YmE4MTQ1JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9yZWFkZXItbGlzdC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NDhiYTgxNDUmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignNDhiYTgxNDUnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInJlc291cmNlcy9qcy9wYWdlcy9hZG1pbi9yZWFkZXIvcmVhZGVyLWxpc3QudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./resources/js/pages/admin/reader/reader-list.vue\n");

/***/ }),

/***/ "./resources/js/pages/admin/reader/reader-list.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./resources/js/pages/admin/reader/reader-list.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_reader_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./reader-list.vue?vue&type=script&lang=js& */ \"./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/admin/reader/reader-list.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_reader_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvcGFnZXMvYWRtaW4vcmVhZGVyL3JlYWRlci1saXN0LnZ1ZT8zYTIxIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQSx3Q0FBdU0sQ0FBZ0IsdVBBQUcsRUFBQyIsImZpbGUiOiIuL3Jlc291cmNlcy9qcy9wYWdlcy9hZG1pbi9yZWFkZXIvcmVhZGVyLWxpc3QudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNC0wIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vcmVhZGVyLWxpc3QudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTQtMCEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3JlYWRlci1saXN0LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./resources/js/pages/admin/reader/reader-list.vue?vue&type=script&lang=js&\n");

/***/ }),

/***/ "./resources/js/pages/admin/reader/reader-list.vue?vue&type=style&index=0&lang=css&":
/*!******************************************************************************************!*\
  !*** ./resources/js/pages/admin/reader/reader-list.vue?vue&type=style&index=0&lang=css& ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_reader_list_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader??ref--6-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./reader-list.vue?vue&type=style&index=0&lang=css& */ \"./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/admin/reader/reader-list.vue?vue&type=style&index=0&lang=css&\");\n/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_reader_list_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_reader_list_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_reader_list_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_reader_list_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvcGFnZXMvYWRtaW4vcmVhZGVyL3JlYWRlci1saXN0LnZ1ZT8wOTUzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBIiwiZmlsZSI6Ii4vcmVzb3VyY2VzL2pzL3BhZ2VzL2FkbWluL3JlYWRlci9yZWFkZXItbGlzdC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzcyYuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTYtMSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS02LTIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9yZWFkZXItbGlzdC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzcyZcIiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./resources/js/pages/admin/reader/reader-list.vue?vue&type=style&index=0&lang=css&\n");

/***/ }),

/***/ "./resources/js/pages/admin/reader/reader-list.vue?vue&type=template&id=48ba8145&":
/*!****************************************************************************************!*\
  !*** ./resources/js/pages/admin/reader/reader-list.vue?vue&type=template&id=48ba8145& ***!
  \****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_reader_list_vue_vue_type_template_id_48ba8145___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./reader-list.vue?vue&type=template&id=48ba8145& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/admin/reader/reader-list.vue?vue&type=template&id=48ba8145&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_reader_list_vue_vue_type_template_id_48ba8145___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_reader_list_vue_vue_type_template_id_48ba8145___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvcGFnZXMvYWRtaW4vcmVhZGVyL3JlYWRlci1saXN0LnZ1ZT8zMDVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSIsImZpbGUiOiIuL3Jlc291cmNlcy9qcy9wYWdlcy9hZG1pbi9yZWFkZXIvcmVhZGVyLWxpc3QudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTQ4YmE4MTQ1Ji5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9yZWFkZXItbGlzdC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NDhiYTgxNDUmXCIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./resources/js/pages/admin/reader/reader-list.vue?vue&type=template&id=48ba8145&\n");

/***/ })

}]);