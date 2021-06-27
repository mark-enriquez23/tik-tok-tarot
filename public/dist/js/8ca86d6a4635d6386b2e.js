(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[50],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/reader/suggestions/List.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/reader/suggestions/List.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ \"./node_modules/vuex/dist/vuex.esm.js\");\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  layout: 'default',\n  metaInfo: function metaInfo() {\n    return {\n      title: this.$t('home')\n    };\n  },\n  data: function data() {\n    return {\n      fields: [{\n        key: 'video.title',\n        label: 'Vlog Title',\n        sortable: true\n      }, {\n        key: 'created_at',\n        label: 'Date',\n        sortable: true\n      }, {\n        key: 'message',\n        label: 'Message'\n      }, {\n        key: 'id',\n        label: 'Action'\n      }]\n    };\n  },\n  computed: Object(vuex__WEBPACK_IMPORTED_MODULE_0__[\"mapGetters\"])({\n    auth: 'auth/user',\n    suggestions: 'suggestions/suggestionsData'\n  }),\n  methods: {\n    fetchSuggestions: function fetchSuggestions() {\n      this.$store.dispatch('suggestions/fetchUserSuggestions', {\n        id: this.auth.id\n      });\n    },\n    viewVlogs: function viewVlogs(id) {\n      this.$router.push(\"/vlogs/view/\".concat(id));\n    },\n    isVideoExist: function isVideoExist() {\n      console.log(this.suggestions.data);\n    }\n  },\n  beforeMount: function beforeMount() {\n    this.fetchSuggestions();\n    this.isVideoExist();\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL3BhZ2VzL3JlYWRlci9zdWdnZXN0aW9ucy9MaXN0LnZ1ZT85ZjVkIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBa0RBO0FBRUE7QUFDQSxtQkFEQTtBQUdBLFVBSEEsc0JBR0E7QUFDQTtBQUFBO0FBQUE7QUFDQSxHQUxBO0FBT0EsTUFQQSxrQkFPQTtBQUNBO0FBQ0EsZUFDQTtBQUNBLDBCQURBO0FBRUEsMkJBRkE7QUFHQTtBQUhBLE9BREEsRUFNQTtBQUNBLHlCQURBO0FBRUEscUJBRkE7QUFHQTtBQUhBLE9BTkEsRUFXQTtBQUNBLHNCQURBO0FBRUE7QUFGQSxPQVhBLEVBZUE7QUFDQSxpQkFEQTtBQUVBO0FBRkEsT0FmQTtBQURBO0FBc0JBLEdBOUJBO0FBZ0NBO0FBQ0EscUJBREE7QUFFQTtBQUZBLElBaENBO0FBcUNBO0FBQ0Esb0JBREEsOEJBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQSxLQUhBO0FBS0EsYUFMQSxxQkFLQSxFQUxBLEVBS0E7QUFDQTtBQUNBLEtBUEE7QUFTQSxnQkFUQSwwQkFTQTtBQUNBO0FBQ0E7QUFYQSxHQXJDQTtBQW1EQSxhQW5EQSx5QkFtREE7QUFDQTtBQUNBO0FBRUE7QUF2REEiLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/IS4vcmVzb3VyY2VzL2pzL3BhZ2VzL3JlYWRlci9zdWdnZXN0aW9ucy9MaXN0LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyYuanMiLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG4gIDxiLWNvbnRhaW5lciBjbGFzcz1cInB0LTVcIj5cbiAgICA8Yi1yb3c+XG4gICAgICA8Yi1jb2w+XG4gICAgICAgIDxiLWNhcmQ+XG4gICAgICAgICAgPHRlbXBsYXRlICNoZWFkZXI+XG4gICAgICAgICAgICA8aDQgY2xhc3M9XCJtLTAgdGV4dC1jZW50ZXJcIj5TdWdnZXN0aW9uczwvaDQ+XG4gICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgICA8Yi1jYXJkLWJvZHkgdi1pZj1cInN1Z2dlc3Rpb25zXCI+XG4gICAgICAgICAgICA8Yi10YWJsZVxuICAgICAgICAgICAgICBpZD1cInN1Z2dlc3Rpb25fdGJsXCJcbiAgICAgICAgICAgICAgOml0ZW1zPVwic3VnZ2VzdGlvbnMuZGF0YVwiXG4gICAgICAgICAgICAgIDpwZXItcGFnZT1cInN1Z2dlc3Rpb25zLnBlcl9wYWdlXCJcbiAgICAgICAgICAgICAgOmZpZWxkcz1cImZpZWxkc1wiXG4gICAgICAgICAgICAgIDpjdXJyZW50LXBhZ2U9XCJzdWdnZXN0aW9ucy5jdXJyZW50X3BhZ2VcIlxuICAgICAgICAgICAgICBzbWFsbFxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8dGVtcGxhdGUgI2NlbGwoY3JlYXRlZF9hdCk9XCJkYXRhXCI+XG4gICAgICAgICAgICAgICAge3sgZGF0YS52YWx1ZSB8IG1vbWVudChcImRkZGQsIE1NTU0gRG8gWVlZWVwiKSB9fVxuICAgICAgICAgICAgICA8L3RlbXBsYXRlPlxuXG4gICAgICAgICAgICAgIDx0ZW1wbGF0ZSAjY2VsbChpZCk9XCJkYXRhXCI+XG4gICAgICAgICAgICAgICAgPGItYnV0dG9uIHZhcmlhbnQ9XCJwcmltYXJ5XCIgc2l6ZT1cInNtXCIgQGNsaWNrPVwidmlld1Zsb2dzKGRhdGEudmFsdWUpXCI+IFZpZXc8L2ItYnV0dG9uPlxuICAgICAgICAgICAgICA8L3RlbXBsYXRlPlxuXG4gICAgICAgICAgICA8L2ItdGFibGU+XG4gICAgICAgICAgICA8Yi1wYWdpbmF0aW9uXG4gICAgICAgICAgICAgIHYtbW9kZWw9XCJzdWdnZXN0aW9ucy5jdXJyZW50UGFnZVwiXG4gICAgICAgICAgICAgIDp0b3RhbC1yb3dzPVwic3VnZ2VzdGlvbnMudG90YWxcIlxuICAgICAgICAgICAgICA6cGVyLXBhZ2U9XCJzdWdnZXN0aW9ucy5wZXJfcGFnZVwiXG4gICAgICAgICAgICAgIGZpcnN0LXRleHQ9XCJGaXJzdFwiXG4gICAgICAgICAgICAgIHByZXYtdGV4dD1cIlByZXZcIlxuICAgICAgICAgICAgICBuZXh0LXRleHQ9XCJOZXh0XCJcbiAgICAgICAgICAgICAgbGFzdC10ZXh0PVwiTGFzdFwiXG4gICAgICAgICAgICAgIGFsaWduPVwiY2VudGVyXCJcbiAgICAgICAgICAgICAgYXJpYS1jb250cm9scz1cInN1Z2dlc3Rpb25fdGJsXCJcbiAgICAgICAgICAgICAgc2l6ZT1cInNtXCJcbiAgICAgICAgICAgID48L2ItcGFnaW5hdGlvbj5cbiAgICAgICAgICA8L2ItY2FyZC1ib2R5PlxuICAgICAgICAgIDxiLWNhcmQtYm9keSB2LWlmPVwiIXN1Z2dlc3Rpb25zXCI+XG4gICAgICAgICAgICA8aDE+IG5vIHN1Z2dlc3Rpb25zIHRvIGxvYWQgPC9oMT5cbiAgICAgICAgICA8L2ItY2FyZC1ib2R5PlxuICAgICAgICA8L2ItY2FyZD5cbiAgICAgIDwvYi1jb2w+XG4gICAgPC9iLXJvdz5cbjwvYi1jb250YWluZXI+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuXG5pbXBvcnQgeyBtYXBHZXR0ZXJzIH0gZnJvbSAndnVleCc7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbGF5b3V0OiAnZGVmYXVsdCcsXG5cbiAgbWV0YUluZm8gKCkge1xuICAgIHJldHVybiB7IHRpdGxlOiB0aGlzLiR0KCdob21lJykgfVxuICB9LFxuXG4gIGRhdGEoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGZpZWxkczogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIGtleTogJ3ZpZGVvLnRpdGxlJyxcbiAgICAgICAgICAgIGxhYmVsOiAnVmxvZyBUaXRsZScsXG4gICAgICAgICAgICBzb3J0YWJsZTogdHJ1ZVxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAga2V5OiAnY3JlYXRlZF9hdCcsXG4gICAgICAgICAgICBsYWJlbDogJ0RhdGUnLFxuICAgICAgICAgICAgc29ydGFibGU6IHRydWVcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGtleTogJ21lc3NhZ2UnLFxuICAgICAgICAgICAgbGFiZWw6ICdNZXNzYWdlJyxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGtleTogJ2lkJyxcbiAgICAgICAgICAgIGxhYmVsOiAnQWN0aW9uJ1xuICAgICAgICAgIH1cbiAgICAgICAgXSxcbiAgICB9XG4gIH0sXG5cbiAgY29tcHV0ZWQ6IG1hcEdldHRlcnMoe1xuICAgIGF1dGg6ICdhdXRoL3VzZXInLFxuICAgIHN1Z2dlc3Rpb25zOiAnc3VnZ2VzdGlvbnMvc3VnZ2VzdGlvbnNEYXRhJ1xuICB9KSxcblxuICBtZXRob2RzOiB7XG4gICAgZmV0Y2hTdWdnZXN0aW9ucygpe1xuICAgICAgdGhpcy4kc3RvcmUuZGlzcGF0Y2goJ3N1Z2dlc3Rpb25zL2ZldGNoVXNlclN1Z2dlc3Rpb25zJywge2lkOiB0aGlzLmF1dGguaWR9KTtcbiAgICB9LFxuXG4gICAgdmlld1Zsb2dzKGlkKXtcbiAgICAgIHRoaXMuJHJvdXRlci5wdXNoKGAvdmxvZ3Mvdmlldy8ke2lkfWApXG4gICAgfSxcblxuICAgIGlzVmlkZW9FeGlzdCgpe1xuICAgICAgY29uc29sZS5sb2codGhpcy5zdWdnZXN0aW9ucy5kYXRhKTtcbiAgICB9XG4gIH0sXG5cbiAgYmVmb3JlTW91bnQoKSB7XG4gICAgdGhpcy5mZXRjaFN1Z2dlc3Rpb25zKClcbiAgICB0aGlzLmlzVmlkZW9FeGlzdCgpO1xuXG4gIH0sXG59XG5cbjwvc2NyaXB0PlxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/reader/suggestions/List.vue?vue&type=script&lang=js&\n");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/reader/suggestions/List.vue?vue&type=template&id=0ad83151&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/reader/suggestions/List.vue?vue&type=template&id=0ad83151& ***!
  \*********************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\n    \"b-container\",\n    { staticClass: \"pt-5\" },\n    [\n      _c(\n        \"b-row\",\n        [\n          _c(\n            \"b-col\",\n            [\n              _c(\n                \"b-card\",\n                {\n                  scopedSlots: _vm._u([\n                    {\n                      key: \"header\",\n                      fn: function() {\n                        return [\n                          _c(\"h4\", { staticClass: \"m-0 text-center\" }, [\n                            _vm._v(\"Suggestions\")\n                          ])\n                        ]\n                      },\n                      proxy: true\n                    }\n                  ])\n                },\n                [\n                  _vm._v(\" \"),\n                  _vm.suggestions\n                    ? _c(\n                        \"b-card-body\",\n                        [\n                          _c(\"b-table\", {\n                            attrs: {\n                              id: \"suggestion_tbl\",\n                              items: _vm.suggestions.data,\n                              \"per-page\": _vm.suggestions.per_page,\n                              fields: _vm.fields,\n                              \"current-page\": _vm.suggestions.current_page,\n                              small: \"\"\n                            },\n                            scopedSlots: _vm._u(\n                              [\n                                {\n                                  key: \"cell(created_at)\",\n                                  fn: function(data) {\n                                    return [\n                                      _vm._v(\n                                        \"\\n                \" +\n                                          _vm._s(\n                                            _vm._f(\"moment\")(\n                                              data.value,\n                                              \"dddd, MMMM Do YYYY\"\n                                            )\n                                          ) +\n                                          \"\\n              \"\n                                      )\n                                    ]\n                                  }\n                                },\n                                {\n                                  key: \"cell(id)\",\n                                  fn: function(data) {\n                                    return [\n                                      _c(\n                                        \"b-button\",\n                                        {\n                                          attrs: {\n                                            variant: \"primary\",\n                                            size: \"sm\"\n                                          },\n                                          on: {\n                                            click: function($event) {\n                                              return _vm.viewVlogs(data.value)\n                                            }\n                                          }\n                                        },\n                                        [_vm._v(\" View\")]\n                                      )\n                                    ]\n                                  }\n                                }\n                              ],\n                              null,\n                              false,\n                              851070135\n                            )\n                          }),\n                          _vm._v(\" \"),\n                          _c(\"b-pagination\", {\n                            attrs: {\n                              \"total-rows\": _vm.suggestions.total,\n                              \"per-page\": _vm.suggestions.per_page,\n                              \"first-text\": \"First\",\n                              \"prev-text\": \"Prev\",\n                              \"next-text\": \"Next\",\n                              \"last-text\": \"Last\",\n                              align: \"center\",\n                              \"aria-controls\": \"suggestion_tbl\",\n                              size: \"sm\"\n                            },\n                            model: {\n                              value: _vm.suggestions.currentPage,\n                              callback: function($$v) {\n                                _vm.$set(_vm.suggestions, \"currentPage\", $$v)\n                              },\n                              expression: \"suggestions.currentPage\"\n                            }\n                          })\n                        ],\n                        1\n                      )\n                    : _vm._e(),\n                  _vm._v(\" \"),\n                  !_vm.suggestions\n                    ? _c(\"b-card-body\", [\n                        _c(\"h1\", [_vm._v(\" no suggestions to load \")])\n                      ])\n                    : _vm._e()\n                ],\n                1\n              )\n            ],\n            1\n          )\n        ],\n        1\n      )\n    ],\n    1\n  )\n}\nvar staticRenderFns = []\nrender._withStripped = true\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvcGFnZXMvcmVhZGVyL3N1Z2dlc3Rpb25zL0xpc3QudnVlP2FiZjkiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSyxzQkFBc0I7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0NBQW9DLGlDQUFpQztBQUNyRTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUI7QUFDdkI7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkI7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkNBQTJDO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5Q0FBeUM7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkI7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCO0FBQy9CO0FBQ0E7QUFDQSwyQkFBMkI7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/IS4vcmVzb3VyY2VzL2pzL3BhZ2VzL3JlYWRlci9zdWdnZXN0aW9ucy9MaXN0LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0wYWQ4MzE1MSYuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiYi1jb250YWluZXJcIixcbiAgICB7IHN0YXRpY0NsYXNzOiBcInB0LTVcIiB9LFxuICAgIFtcbiAgICAgIF9jKFxuICAgICAgICBcImItcm93XCIsXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwiYi1jb2xcIixcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJiLWNhcmRcIixcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBzY29wZWRTbG90czogX3ZtLl91KFtcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIGtleTogXCJoZWFkZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICBmbjogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImg0XCIsIHsgc3RhdGljQ2xhc3M6IFwibS0wIHRleHQtY2VudGVyXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIlN1Z2dlc3Rpb25zXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBwcm94eTogdHJ1ZVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF92bS5zdWdnZXN0aW9uc1xuICAgICAgICAgICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJiLWNhcmQtYm9keVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImItdGFibGVcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZDogXCJzdWdnZXN0aW9uX3RibFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbXM6IF92bS5zdWdnZXN0aW9ucy5kYXRhLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJwZXItcGFnZVwiOiBfdm0uc3VnZ2VzdGlvbnMucGVyX3BhZ2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWVsZHM6IF92bS5maWVsZHMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImN1cnJlbnQtcGFnZVwiOiBfdm0uc3VnZ2VzdGlvbnMuY3VycmVudF9wYWdlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc21hbGw6IFwiXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNjb3BlZFNsb3RzOiBfdm0uX3UoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk6IFwiY2VsbChjcmVhdGVkX2F0KVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZuOiBmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX2YoXCJtb21lbnRcIikoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS52YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRkZGQsIE1NTU0gRG8gWVlZWVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk6IFwiY2VsbChpZClcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmbjogZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJiLWJ1dHRvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ6IFwicHJpbWFyeVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplOiBcInNtXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS52aWV3VmxvZ3MoZGF0YS52YWx1ZSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihcIiBWaWV3XCIpXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgODUxMDcwMTM1XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJiLXBhZ2luYXRpb25cIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInRvdGFsLXJvd3NcIjogX3ZtLnN1Z2dlc3Rpb25zLnRvdGFsLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJwZXItcGFnZVwiOiBfdm0uc3VnZ2VzdGlvbnMucGVyX3BhZ2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImZpcnN0LXRleHRcIjogXCJGaXJzdFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJwcmV2LXRleHRcIjogXCJQcmV2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIm5leHQtdGV4dFwiOiBcIk5leHRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibGFzdC10ZXh0XCI6IFwiTGFzdFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ246IFwiY2VudGVyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImFyaWEtY29udHJvbHNcIjogXCJzdWdnZXN0aW9uX3RibFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZTogXCJzbVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5zdWdnZXN0aW9ucy5jdXJyZW50UGFnZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLnN1Z2dlc3Rpb25zLCBcImN1cnJlbnRQYWdlXCIsICQkdilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcInN1Z2dlc3Rpb25zLmN1cnJlbnRQYWdlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAhX3ZtLnN1Z2dlc3Rpb25zXG4gICAgICAgICAgICAgICAgICAgID8gX2MoXCJiLWNhcmQtYm9keVwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcImgxXCIsIFtfdm0uX3YoXCIgbm8gc3VnZ2VzdGlvbnMgdG8gbG9hZCBcIildKVxuICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApXG4gICAgICAgIF0sXG4gICAgICAgIDFcbiAgICAgIClcbiAgICBdLFxuICAgIDFcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/reader/suggestions/List.vue?vue&type=template&id=0ad83151&\n");

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