(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[51],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/reader/suggestions/List.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/reader/suggestions/List.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ \"./node_modules/vuex/dist/vuex.esm.js\");\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  layout: 'default',\n  metaInfo: function metaInfo() {\n    return {\n      title: this.$t('home')\n    };\n  },\n  data: function data() {\n    return {\n      fields: [{\n        key: 'video.title',\n        label: 'Vlog Title',\n        sortable: true\n      }, {\n        key: 'created_at',\n        label: 'Date',\n        sortable: true\n      }, {\n        key: 'message',\n        label: 'Message'\n      }, {\n        key: 'id',\n        label: 'Action'\n      }]\n    };\n  },\n  computed: Object(vuex__WEBPACK_IMPORTED_MODULE_0__[\"mapGetters\"])({\n    auth: 'auth/user',\n    suggestions: 'suggestions/suggestionsData'\n  }),\n  methods: {\n    fetchSuggestions: function fetchSuggestions() {\n      var vm = this;\n      vm.$store.dispatch('suggestions/fetchUserSuggestions', {\n        id: vm.auth.id\n      });\n    },\n    viewVlogs: function viewVlogs(id) {\n      this.$router.push(\"/vlogs/view/\".concat(id));\n    }\n  },\n  beforeMount: function beforeMount() {\n    this.fetchSuggestions();\n    console.log(\"DATA\", this.suggestions);\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL3BhZ2VzL3JlYWRlci9zdWdnZXN0aW9ucy9MaXN0LnZ1ZT85ZjVkIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFrQ0E7QUFFQTtBQUNBLG1CQURBO0FBR0EsVUFIQSxzQkFHQTtBQUNBO0FBQUE7QUFBQTtBQUNBLEdBTEE7QUFPQSxNQVBBLGtCQU9BO0FBQ0E7QUFDQSxlQUNBO0FBQ0EsMEJBREE7QUFFQSwyQkFGQTtBQUdBO0FBSEEsT0FEQSxFQU1BO0FBQ0EseUJBREE7QUFFQSxxQkFGQTtBQUdBO0FBSEEsT0FOQSxFQVdBO0FBQ0Esc0JBREE7QUFFQTtBQUZBLE9BWEEsRUFlQTtBQUNBLGlCQURBO0FBRUE7QUFGQSxPQWZBO0FBREE7QUFzQkEsR0E5QkE7QUFnQ0E7QUFDQSxxQkFEQTtBQUVBO0FBRkEsSUFoQ0E7QUFxQ0E7QUFDQSxvQkFEQSw4QkFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0EsS0FKQTtBQU1BLGFBTkEscUJBTUEsRUFOQSxFQU1BO0FBQ0E7QUFDQTtBQVJBLEdBckNBO0FBZ0RBLGFBaERBLHlCQWdEQTtBQUNBO0FBQ0E7QUFFQTtBQXBEQSIsImZpbGUiOiIuL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPyEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8hLi9yZXNvdXJjZXMvanMvcGFnZXMvcmVhZGVyL3N1Z2dlc3Rpb25zL0xpc3QudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJi5qcyIsInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cbiAgPGItY29udGFpbmVyIGNsYXNzPVwicHQtNVwiPlxuICAgIDxiLXJvdz5cbiAgICAgIDxiLWNvbD5cbiAgICAgICAgPGItY2FyZD5cbiAgICAgICAgICA8dGVtcGxhdGUgI2hlYWRlcj5cbiAgICAgICAgICAgIDxoNCBjbGFzcz1cIm0tMCB0ZXh0LWNlbnRlclwiPlN1Z2dlc3Rpb25zPC9oND5cbiAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICAgIDxiLWNhcmQtYm9keT5cbiAgICAgICAgICAgICAgICA8Yi10YWJsZVxuICAgICAgICAgICAgICAgICAgOml0ZW1zPVwic3VnZ2VzdGlvbnMuZGF0YVwiXG4gICAgICAgICAgICAgICAgICA6cGVyLXBhZ2U9XCJzdWdnZXN0aW9ucy5wZXJQYWdlXCJcbiAgICAgICAgICAgICAgICAgIDpmaWVsZHM9XCJmaWVsZHNcIlxuICAgICAgICAgICAgICAgICAgOmN1cnJlbnQtcGFnZT1cInN1Z2dlc3Rpb25zLmN1cnJlbnRQYWdlXCJcbiAgICAgICAgICAgICAgICAgIHNtYWxsXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPHRlbXBsYXRlICNjZWxsKGNyZWF0ZWRfYXQpPVwiZGF0YVwiPlxuICAgICAgICAgICAgICAgICAgICB7eyBkYXRhLnZhbHVlIHwgbW9tZW50KFwiZGRkZCwgTU1NTSBEbyBZWVlZXCIpIH19XG4gICAgICAgICAgICAgICAgICA8L3RlbXBsYXRlPlxuXG4gICAgICAgICAgICAgICAgICA8dGVtcGxhdGUgI2NlbGwoaWQpPVwiZGF0YVwiPlxuICAgICAgICAgICAgICAgICAgICA8Yi1idXR0b24gdmFyaWFudD1cInByaW1hcnlcIiBzaXplPVwic21cIiBAY2xpY2s9XCIoKT0+dmlld1Zsb2dzKHtkYXRhLnZhbHVlfSlcIj4gVmlldyA8L2ItYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgPC90ZW1wbGF0ZT5cblxuICAgICAgICAgICAgICAgIDwvYi10YWJsZT5cbiAgICAgICAgICA8L2ItY2FyZC1ib2R5PlxuICAgICAgICA8L2ItY2FyZD5cbiAgICAgIDwvYi1jb2w+XG4gICAgPC9iLXJvdz5cbjwvYi1jb250YWluZXI+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuXG5pbXBvcnQgeyBtYXBHZXR0ZXJzIH0gZnJvbSAndnVleCc7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbGF5b3V0OiAnZGVmYXVsdCcsXG5cbiAgbWV0YUluZm8gKCkge1xuICAgIHJldHVybiB7IHRpdGxlOiB0aGlzLiR0KCdob21lJykgfVxuICB9LFxuXG4gIGRhdGEoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGZpZWxkczogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIGtleTogJ3ZpZGVvLnRpdGxlJyxcbiAgICAgICAgICAgIGxhYmVsOiAnVmxvZyBUaXRsZScsXG4gICAgICAgICAgICBzb3J0YWJsZTogdHJ1ZVxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAga2V5OiAnY3JlYXRlZF9hdCcsXG4gICAgICAgICAgICBsYWJlbDogJ0RhdGUnLFxuICAgICAgICAgICAgc29ydGFibGU6IHRydWVcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGtleTogJ21lc3NhZ2UnLFxuICAgICAgICAgICAgbGFiZWw6ICdNZXNzYWdlJyxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGtleTogJ2lkJyxcbiAgICAgICAgICAgIGxhYmVsOiAnQWN0aW9uJ1xuICAgICAgICAgIH1cbiAgICAgICAgXSxcbiAgICB9XG4gIH0sXG5cbiAgY29tcHV0ZWQ6IG1hcEdldHRlcnMoe1xuICAgIGF1dGg6ICdhdXRoL3VzZXInLFxuICAgIHN1Z2dlc3Rpb25zOiAnc3VnZ2VzdGlvbnMvc3VnZ2VzdGlvbnNEYXRhJ1xuICB9KSxcblxuICBtZXRob2RzOiB7XG4gICAgZmV0Y2hTdWdnZXN0aW9ucygpe1xuICAgICAgY29uc3Qgdm0gPSB0aGlzO1xuICAgICAgdm0uJHN0b3JlLmRpc3BhdGNoKCdzdWdnZXN0aW9ucy9mZXRjaFVzZXJTdWdnZXN0aW9ucycsIHtpZDogdm0uYXV0aC5pZH0pO1xuICAgIH0sXG5cbiAgICB2aWV3VmxvZ3MoaWQpe1xuICAgICAgdGhpcy4kcm91dGVyLnB1c2goYC92bG9ncy92aWV3LyR7aWR9YClcbiAgICB9XG4gIH0sXG5cbiAgYmVmb3JlTW91bnQoKSB7XG4gICAgdGhpcy5mZXRjaFN1Z2dlc3Rpb25zKClcbiAgICBjb25zb2xlLmxvZyhcIkRBVEFcIiwgdGhpcy5zdWdnZXN0aW9ucyk7XG5cbiAgfSxcbn1cblxuPC9zY3JpcHQ+XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/reader/suggestions/List.vue?vue&type=script&lang=js&\n");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/reader/suggestions/List.vue?vue&type=template&id=0ad83151&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/reader/suggestions/List.vue?vue&type=template&id=0ad83151& ***!
  \*********************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed (from ./node_modules/vue-loader/lib/loaders/templateLoader.js):\\nSyntaxError: Unexpected token (1:724)\\n    at Parser.pp$4.raise (/Users/administrator/Documents/GitHub/tik-tok-tarot/node_modules/vue-template-es2015-compiler/buble.js:2757:13)\\n    at Parser.pp.unexpected (/Users/administrator/Documents/GitHub/tik-tok-tarot/node_modules/vue-template-es2015-compiler/buble.js:647:8)\\n    at Parser.pp.expect (/Users/administrator/Documents/GitHub/tik-tok-tarot/node_modules/vue-template-es2015-compiler/buble.js:641:26)\\n    at Parser.pp$3.parseObj (/Users/administrator/Documents/GitHub/tik-tok-tarot/node_modules/vue-template-es2015-compiler/buble.js:2376:14)\\n    at Parser.pp$3.parseExprAtom (/Users/administrator/Documents/GitHub/tik-tok-tarot/node_modules/vue-template-es2015-compiler/buble.js:2179:17)\\n    at Parser.<anonymous> (/Users/administrator/Documents/GitHub/tik-tok-tarot/node_modules/vue-template-es2015-compiler/buble.js:6003:24)\\n    at Parser.parseExprAtom (/Users/administrator/Documents/GitHub/tik-tok-tarot/node_modules/vue-template-es2015-compiler/buble.js:6129:31)\\n    at Parser.pp$3.parseExprSubscripts (/Users/administrator/Documents/GitHub/tik-tok-tarot/node_modules/vue-template-es2015-compiler/buble.js:2047:19)\\n    at Parser.pp$3.parseMaybeUnary (/Users/administrator/Documents/GitHub/tik-tok-tarot/node_modules/vue-template-es2015-compiler/buble.js:2024:17)\\n    at Parser.pp$3.parseExprOps (/Users/administrator/Documents/GitHub/tik-tok-tarot/node_modules/vue-template-es2015-compiler/buble.js:1966:19)\\n    at Parser.pp$3.parseMaybeConditional (/Users/administrator/Documents/GitHub/tik-tok-tarot/node_modules/vue-template-es2015-compiler/buble.js:1949:19)\\n    at Parser.pp$3.parseMaybeAssign (/Users/administrator/Documents/GitHub/tik-tok-tarot/node_modules/vue-template-es2015-compiler/buble.js:1925:19)\\n    at Parser.pp$3.parseExprList (/Users/administrator/Documents/GitHub/tik-tok-tarot/node_modules/vue-template-es2015-compiler/buble.js:2663:20)\\n    at Parser.pp$3.parseSubscripts (/Users/administrator/Documents/GitHub/tik-tok-tarot/node_modules/vue-template-es2015-compiler/buble.js:2075:29)\\n    at Parser.pp$3.parseExprSubscripts (/Users/administrator/Documents/GitHub/tik-tok-tarot/node_modules/vue-template-es2015-compiler/buble.js:2050:21)\\n    at Parser.pp$3.parseMaybeUnary (/Users/administrator/Documents/GitHub/tik-tok-tarot/node_modules/vue-template-es2015-compiler/buble.js:2024:17)\\n    at Parser.pp$3.parseExprOps (/Users/administrator/Documents/GitHub/tik-tok-tarot/node_modules/vue-template-es2015-compiler/buble.js:1966:19)\\n    at Parser.pp$3.parseMaybeConditional (/Users/administrator/Documents/GitHub/tik-tok-tarot/node_modules/vue-template-es2015-compiler/buble.js:1949:19)\\n    at Parser.pp$3.parseMaybeAssign (/Users/administrator/Documents/GitHub/tik-tok-tarot/node_modules/vue-template-es2015-compiler/buble.js:1925:19)\\n    at Parser.pp$3.parseFunctionBody (/Users/administrator/Documents/GitHub/tik-tok-tarot/node_modules/vue-template-es2015-compiler/buble.js:2578:22)\\n    at Parser.pp$3.parseArrowExpression (/Users/administrator/Documents/GitHub/tik-tok-tarot/node_modules/vue-template-es2015-compiler/buble.js:2561:8)\\n    at Parser.pp$3.parseParenArrowList (/Users/administrator/Documents/GitHub/tik-tok-tarot/node_modules/vue-template-es2015-compiler/buble.js:2283:15)\\n    at Parser.pp$3.parseParenAndDistinguishExpression (/Users/administrator/Documents/GitHub/tik-tok-tarot/node_modules/vue-template-es2015-compiler/buble.js:2249:19)\\n    at Parser.pp$3.parseExprAtom (/Users/administrator/Documents/GitHub/tik-tok-tarot/node_modules/vue-template-es2015-compiler/buble.js:2163:41)\\n    at Parser.<anonymous> (/Users/administrator/Documents/GitHub/tik-tok-tarot/node_modules/vue-template-es2015-compiler/buble.js:6003:24)\\n    at Parser.parseExprAtom (/Users/administrator/Documents/GitHub/tik-tok-tarot/node_modules/vue-template-es2015-compiler/buble.js:6129:31)\\n    at Parser.pp$3.parseExprSubscripts (/Users/administrator/Documents/GitHub/tik-tok-tarot/node_modules/vue-template-es2015-compiler/buble.js:2047:19)\\n    at Parser.pp$3.parseMaybeUnary (/Users/administrator/Documents/GitHub/tik-tok-tarot/node_modules/vue-template-es2015-compiler/buble.js:2024:17)\\n    at Parser.pp$3.parseExprOps (/Users/administrator/Documents/GitHub/tik-tok-tarot/node_modules/vue-template-es2015-compiler/buble.js:1966:19)\\n    at Parser.pp$3.parseMaybeConditional (/Users/administrator/Documents/GitHub/tik-tok-tarot/node_modules/vue-template-es2015-compiler/buble.js:1949:19)\\n    at Parser.pp$3.parseMaybeAssign (/Users/administrator/Documents/GitHub/tik-tok-tarot/node_modules/vue-template-es2015-compiler/buble.js:1925:19)\\n    at Parser.pp$3.parsePropertyValue (/Users/administrator/Documents/GitHub/tik-tok-tarot/node_modules/vue-template-es2015-compiler/buble.js:2443:87)\\n    at Parser.pp$3.parseProperty (/Users/administrator/Documents/GitHub/tik-tok-tarot/node_modules/vue-template-es2015-compiler/buble.js:2434:8)\\n    at Parser.pp$3.parseObj (/Users/administrator/Documents/GitHub/tik-tok-tarot/node_modules/vue-template-es2015-compiler/buble.js:2380:23)\\n    at Parser.pp$3.parseExprAtom (/Users/administrator/Documents/GitHub/tik-tok-tarot/node_modules/vue-template-es2015-compiler/buble.js:2179:17)\\n    at Parser.<anonymous> (/Users/administrator/Documents/GitHub/tik-tok-tarot/node_modules/vue-template-es2015-compiler/buble.js:6003:24)\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPyEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8hLi9yZXNvdXJjZXMvanMvcGFnZXMvcmVhZGVyL3N1Z2dlc3Rpb25zL0xpc3QudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTBhZDgzMTUxJi5qcyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/reader/suggestions/List.vue?vue&type=template&id=0ad83151&\n");

/***/ }),

/***/ "./resources/js/pages/reader/suggestions/List.vue":
/*!********************************************************!*\
  !*** ./resources/js/pages/reader/suggestions/List.vue ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _List_vue_vue_type_template_id_0ad83151___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./List.vue?vue&type=template&id=0ad83151& */ \"./resources/js/pages/reader/suggestions/List.vue?vue&type=template&id=0ad83151&\");\n/* harmony import */ var _List_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./List.vue?vue&type=script&lang=js& */ \"./resources/js/pages/reader/suggestions/List.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _List_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _List_vue_vue_type_template_id_0ad83151___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _List_vue_vue_type_template_id_0ad83151___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"resources/js/pages/reader/suggestions/List.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvcGFnZXMvcmVhZGVyL3N1Z2dlc3Rpb25zL0xpc3QudnVlPzZkODYiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBbUY7QUFDM0I7QUFDTDs7O0FBR25EO0FBQ21HO0FBQ25HLGdCQUFnQiwyR0FBVTtBQUMxQixFQUFFLDBFQUFNO0FBQ1IsRUFBRSwrRUFBTTtBQUNSLEVBQUUsd0ZBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxJQUFJLEtBQVUsRUFBRSxZQWlCZjtBQUNEO0FBQ2UsZ0YiLCJmaWxlIjoiLi9yZXNvdXJjZXMvanMvcGFnZXMvcmVhZGVyL3N1Z2dlc3Rpb25zL0xpc3QudnVlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9MaXN0LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0wYWQ4MzE1MSZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9MaXN0LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vTGlzdC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIi9Vc2Vycy9hZG1pbmlzdHJhdG9yL0RvY3VtZW50cy9HaXRIdWIvdGlrLXRvay10YXJvdC9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpL2Rpc3QvaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCcwYWQ4MzE1MScpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCcwYWQ4MzE1MScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCcwYWQ4MzE1MScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vTGlzdC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MGFkODMxNTEmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignMGFkODMxNTEnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInJlc291cmNlcy9qcy9wYWdlcy9yZWFkZXIvc3VnZ2VzdGlvbnMvTGlzdC52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./resources/js/pages/reader/suggestions/List.vue\n");

/***/ }),

/***/ "./resources/js/pages/reader/suggestions/List.vue?vue&type=script&lang=js&":
/*!*********************************************************************************!*\
  !*** ./resources/js/pages/reader/suggestions/List.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_List_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./List.vue?vue&type=script&lang=js& */ \"./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/reader/suggestions/List.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_List_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvcGFnZXMvcmVhZGVyL3N1Z2dlc3Rpb25zL0xpc3QudnVlPzZjM2IiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBLHdDQUFnTSxDQUFnQixnUEFBRyxFQUFDIiwiZmlsZSI6Ii4vcmVzb3VyY2VzL2pzL3BhZ2VzL3JlYWRlci9zdWdnZXN0aW9ucy9MaXN0LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyYuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTQtMCEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0xpc3QudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTQtMCEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0xpc3QudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./resources/js/pages/reader/suggestions/List.vue?vue&type=script&lang=js&\n");

/***/ }),

/***/ "./resources/js/pages/reader/suggestions/List.vue?vue&type=template&id=0ad83151&":
/*!***************************************************************************************!*\
  !*** ./resources/js/pages/reader/suggestions/List.vue?vue&type=template&id=0ad83151& ***!
  \***************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_List_vue_vue_type_template_id_0ad83151___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./List.vue?vue&type=template&id=0ad83151& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/reader/suggestions/List.vue?vue&type=template&id=0ad83151&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_List_vue_vue_type_template_id_0ad83151___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_List_vue_vue_type_template_id_0ad83151___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvcGFnZXMvcmVhZGVyL3N1Z2dlc3Rpb25zL0xpc3QudnVlPzQ2YTgiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBIiwiZmlsZSI6Ii4vcmVzb3VyY2VzL2pzL3BhZ2VzL3JlYWRlci9zdWdnZXN0aW9ucy9MaXN0LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0wYWQ4MzE1MSYuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vTGlzdC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MGFkODMxNTEmXCIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./resources/js/pages/reader/suggestions/List.vue?vue&type=template&id=0ad83151&\n");

/***/ })

}]);