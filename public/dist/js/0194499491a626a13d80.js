(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[53],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/reader/suggestions/List.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/reader/suggestions/List.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ \"./node_modules/vuex/dist/vuex.esm.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  layout: 'default',\n  data: function data() {\n    return {\n      fields: [{\n        key: 'video.title',\n        label: 'Vlog Title',\n        sortable: true\n      }, {\n        key: 'created_at',\n        label: 'Date',\n        sortable: true\n      }, {\n        key: 'message',\n        label: 'Message'\n      }, {\n        key: 'id',\n        label: 'Action'\n      }],\n      tableData: [],\n      loading: true\n    };\n  },\n  computed: Object(vuex__WEBPACK_IMPORTED_MODULE_0__[\"mapGetters\"])({\n    auth: 'auth/user'\n  }),\n  beforeMount: function beforeMount() {\n    this.fetchSuggestions();\n  },\n  methods: {\n    fetchSuggestions: function fetchSuggestions() {\n      var _this = this;\n\n      this.loading = true;\n      axios__WEBPACK_IMPORTED_MODULE_1___default.a.get(\"/api/suggestions/user/\".concat(this.auth.id)).then(function (response) {\n        console.log('RESPONSE', response.data);\n        _this.tableData = response.data[0];\n        _this.loading = false;\n      });\n    },\n    viewVlogs: function viewVlogs(id) {\n      this.$router.push(\"/vlogs/view/\".concat(id));\n    }\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL3BhZ2VzL3JlYWRlci9zdWdnZXN0aW9ucy9MaXN0LnZ1ZT85ZjVkIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBNERBO0FBQ0E7QUFFQTtBQUNBLG1CQURBO0FBR0EsTUFIQSxrQkFHQTtBQUNBO0FBQ0EsZUFDQTtBQUNBLDBCQURBO0FBRUEsMkJBRkE7QUFHQTtBQUhBLE9BREEsRUFNQTtBQUNBLHlCQURBO0FBRUEscUJBRkE7QUFHQTtBQUhBLE9BTkEsRUFXQTtBQUNBLHNCQURBO0FBRUE7QUFGQSxPQVhBLEVBZUE7QUFDQSxpQkFEQTtBQUVBO0FBRkEsT0FmQSxDQURBO0FBcUJBLG1CQXJCQTtBQXNCQTtBQXRCQTtBQXdCQSxHQTVCQTtBQThCQTtBQUNBO0FBREEsSUE5QkE7QUFrQ0EsYUFsQ0EseUJBa0NBO0FBQ0E7QUFDQSxHQXBDQTtBQXNDQTtBQUNBLG9CQURBLDhCQUNBO0FBQUE7O0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBLE9BTEE7QUFNQSxLQVRBO0FBV0EsYUFYQSxxQkFXQSxFQVhBLEVBV0E7QUFDQTtBQUNBO0FBYkE7QUF0Q0EiLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/IS4vcmVzb3VyY2VzL2pzL3BhZ2VzL3JlYWRlci9zdWdnZXN0aW9ucy9MaXN0LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyYuanMiLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG4gIDxiLWNvbnRhaW5lciBjbGFzcz1cInB0LTVcIj5cbiAgICA8Yi1yb3c+XG4gICAgICA8Yi1jb2w+XG4gICAgICAgIDxkaXYgdi1pZj1cImxvYWRpbmdcIiBjbGFzcz1cInRleHQtY2VudGVyXCI+XG4gICAgICAgICAgPGItc3Bpbm5lciBsYWJlbD1cIkxvYWRpbmcuLi5cIiAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgXG4gICAgICAgIDxiLWNhcmQgdi1lbHNlPlxuICAgICAgICAgIDx0ZW1wbGF0ZSAjaGVhZGVyPlxuICAgICAgICAgICAgPGg0IGNsYXNzPVwibS0wIHRleHQtY2VudGVyXCI+XG4gICAgICAgICAgICAgIFN1Z2dlc3Rpb25zXG4gICAgICAgICAgICA8L2g0PlxuICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgICAgPGItY2FyZC1ib2R5PlxuICAgICAgICAgICAgPGItdGFibGVcbiAgICAgICAgICAgICAgaWQ9XCJzdWdnZXN0aW9uX3RibFwiXG4gICAgICAgICAgICAgIDppdGVtcz1cInRhYmxlRGF0YS5kYXRhXCJcbiAgICAgICAgICAgICAgOnBlci1wYWdlPVwidGFibGVEYXRhLnBlcl9wYWdlXCJcbiAgICAgICAgICAgICAgOmZpZWxkcz1cImZpZWxkc1wiXG4gICAgICAgICAgICAgIDpjdXJyZW50LXBhZ2U9XCJ0YWJsZURhdGEuY3VycmVudF9wYWdlXCJcbiAgICAgICAgICAgICAgc21hbGxcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPHRlbXBsYXRlICNjZWxsKGNyZWF0ZWRfYXQpPVwiZGF0YVwiPlxuICAgICAgICAgICAgICAgIHt7IGRhdGEudmFsdWUgfCBtb21lbnQoXCJkZGRkLCBNTU1NIERvIFlZWVlcIikgfX1cbiAgICAgICAgICAgICAgPC90ZW1wbGF0ZT5cblxuICAgICAgICAgICAgICA8dGVtcGxhdGUgI2NlbGwoaWQpPVwiZGF0YVwiPlxuICAgICAgICAgICAgICAgIDxiLWJ1dHRvbiB2YXJpYW50PVwicHJpbWFyeVwiIHNpemU9XCJzbVwiIEBjbGljaz1cInZpZXdWbG9ncyhkYXRhLnZhbHVlKVwiPlxuICAgICAgICAgICAgICAgICAgVmlld1xuICAgICAgICAgICAgICAgIDwvYi1idXR0b24+XG4gICAgICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgICAgICA8L2ItdGFibGU+XG5cbiAgICAgICAgICAgIDxiLXBhZ2luYXRpb25cbiAgICAgICAgICAgICAgdi1pZj1cInRhYmxlRGF0YS50b3RhbCA+IHRhYmxlRGF0YS5wZXJfcGFnZVwiXG4gICAgICAgICAgICAgIHYtbW9kZWw9XCJ0YWJsZURhdGEuY3VycmVudFBhZ2VcIlxuICAgICAgICAgICAgICA6dG90YWwtcm93cz1cInRhYmxlRGF0YS50b3RhbFwiXG4gICAgICAgICAgICAgIDpwZXItcGFnZT1cInRhYmxlRGF0YS5wZXJfcGFnZVwiXG4gICAgICAgICAgICAgIGZpcnN0LXRleHQ9XCJGaXJzdFwiXG4gICAgICAgICAgICAgIHByZXYtdGV4dD1cIlByZXZcIlxuICAgICAgICAgICAgICBuZXh0LXRleHQ9XCJOZXh0XCJcbiAgICAgICAgICAgICAgbGFzdC10ZXh0PVwiTGFzdFwiXG4gICAgICAgICAgICAgIGFsaWduPVwiY2VudGVyXCJcbiAgICAgICAgICAgICAgYXJpYS1jb250cm9scz1cInN1Z2dlc3Rpb25fdGJsXCJcbiAgICAgICAgICAgICAgc2l6ZT1cInNtXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9iLWNhcmQtYm9keT5cbiAgICAgICAgICBcbiAgICAgICAgICA8Yi1jYXJkLWJvZHkgdi1pZj1cInRhYmxlRGF0YS50b3RhbCA9PSAwXCI+XG4gICAgICAgICAgICA8aDY+IG5vIHN1Z2dlc3Rpb25zIHRvIGxvYWQgPC9oNj5cbiAgICAgICAgICA8L2ItY2FyZC1ib2R5PlxuICAgICAgICA8L2ItY2FyZD5cbiAgICAgIDwvYi1jb2w+XG4gICAgPC9iLXJvdz5cbiAgPC9iLWNvbnRhaW5lcj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5cbmltcG9ydCB7IG1hcEdldHRlcnMgfSBmcm9tICd2dWV4J1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGxheW91dDogJ2RlZmF1bHQnLFxuXG4gIGRhdGEgKCkge1xuICAgIHJldHVybiB7XG4gICAgICBmaWVsZHM6IFtcbiAgICAgICAge1xuICAgICAgICAgIGtleTogJ3ZpZGVvLnRpdGxlJyxcbiAgICAgICAgICBsYWJlbDogJ1Zsb2cgVGl0bGUnLFxuICAgICAgICAgIHNvcnRhYmxlOiB0cnVlXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBrZXk6ICdjcmVhdGVkX2F0JyxcbiAgICAgICAgICBsYWJlbDogJ0RhdGUnLFxuICAgICAgICAgIHNvcnRhYmxlOiB0cnVlXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBrZXk6ICdtZXNzYWdlJyxcbiAgICAgICAgICBsYWJlbDogJ01lc3NhZ2UnXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBrZXk6ICdpZCcsXG4gICAgICAgICAgbGFiZWw6ICdBY3Rpb24nXG4gICAgICAgIH1cbiAgICAgIF0sXG4gICAgICB0YWJsZURhdGE6IFtdLFxuICAgICAgbG9hZGluZzp0cnVlXG4gICAgfVxuICB9LFxuXG4gIGNvbXB1dGVkOiBtYXBHZXR0ZXJzKHtcbiAgICBhdXRoOiAnYXV0aC91c2VyJ1xuICB9KSxcblxuICBiZWZvcmVNb3VudCAoKSB7XG4gICAgdGhpcy5mZXRjaFN1Z2dlc3Rpb25zKClcbiAgfSxcblxuICBtZXRob2RzOiB7XG4gICAgZmV0Y2hTdWdnZXN0aW9ucyAoKSB7XG4gICAgICB0aGlzLmxvYWRpbmcgPSB0cnVlXG4gICAgICBheGlvcy5nZXQoYC9hcGkvc3VnZ2VzdGlvbnMvdXNlci8ke3RoaXMuYXV0aC5pZH1gKS50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coJ1JFU1BPTlNFJywgcmVzcG9uc2UuZGF0YSlcblxuICAgICAgICB0aGlzLnRhYmxlRGF0YSA9IHJlc3BvbnNlLmRhdGFbMF1cbiAgICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2VcbiAgICAgIH0pXG4gICAgfSxcblxuICAgIHZpZXdWbG9ncyAoaWQpIHtcbiAgICAgIHRoaXMuJHJvdXRlci5wdXNoKGAvdmxvZ3Mvdmlldy8ke2lkfWApXG4gICAgfVxuICB9XG59XG5cbjwvc2NyaXB0PlxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/reader/suggestions/List.vue?vue&type=script&lang=js&\n");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/reader/suggestions/List.vue?vue&type=template&id=0ad83151&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/reader/suggestions/List.vue?vue&type=template&id=0ad83151& ***!
  \*********************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\n    \"b-container\",\n    { staticClass: \"pt-5\" },\n    [\n      _c(\n        \"b-row\",\n        [\n          _c(\n            \"b-col\",\n            [\n              _vm.loading\n                ? _c(\n                    \"div\",\n                    { staticClass: \"text-center\" },\n                    [_c(\"b-spinner\", { attrs: { label: \"Loading...\" } })],\n                    1\n                  )\n                : _c(\n                    \"b-card\",\n                    {\n                      scopedSlots: _vm._u([\n                        {\n                          key: \"header\",\n                          fn: function() {\n                            return [\n                              _c(\"h4\", { staticClass: \"m-0 text-center\" }, [\n                                _vm._v(\"\\n            Suggestions\\n          \")\n                              ])\n                            ]\n                          },\n                          proxy: true\n                        }\n                      ])\n                    },\n                    [\n                      _vm._v(\" \"),\n                      _c(\n                        \"b-card-body\",\n                        [\n                          _c(\"b-table\", {\n                            attrs: {\n                              id: \"suggestion_tbl\",\n                              items: _vm.tableData.data,\n                              \"per-page\": _vm.tableData.per_page,\n                              fields: _vm.fields,\n                              \"current-page\": _vm.tableData.current_page,\n                              small: \"\"\n                            },\n                            scopedSlots: _vm._u([\n                              {\n                                key: \"cell(created_at)\",\n                                fn: function(data) {\n                                  return [\n                                    _vm._v(\n                                      \"\\n              \" +\n                                        _vm._s(\n                                          _vm._f(\"moment\")(\n                                            data.value,\n                                            \"dddd, MMMM Do YYYY\"\n                                          )\n                                        ) +\n                                        \"\\n            \"\n                                    )\n                                  ]\n                                }\n                              },\n                              {\n                                key: \"cell(id)\",\n                                fn: function(data) {\n                                  return [\n                                    _c(\n                                      \"b-button\",\n                                      {\n                                        attrs: {\n                                          variant: \"primary\",\n                                          size: \"sm\"\n                                        },\n                                        on: {\n                                          click: function($event) {\n                                            return _vm.viewVlogs(data.value)\n                                          }\n                                        }\n                                      },\n                                      [\n                                        _vm._v(\n                                          \"\\n                View\\n              \"\n                                        )\n                                      ]\n                                    )\n                                  ]\n                                }\n                              }\n                            ])\n                          }),\n                          _vm._v(\" \"),\n                          _vm.tableData.total > _vm.tableData.per_page\n                            ? _c(\"b-pagination\", {\n                                attrs: {\n                                  \"total-rows\": _vm.tableData.total,\n                                  \"per-page\": _vm.tableData.per_page,\n                                  \"first-text\": \"First\",\n                                  \"prev-text\": \"Prev\",\n                                  \"next-text\": \"Next\",\n                                  \"last-text\": \"Last\",\n                                  align: \"center\",\n                                  \"aria-controls\": \"suggestion_tbl\",\n                                  size: \"sm\"\n                                },\n                                model: {\n                                  value: _vm.tableData.currentPage,\n                                  callback: function($$v) {\n                                    _vm.$set(_vm.tableData, \"currentPage\", $$v)\n                                  },\n                                  expression: \"tableData.currentPage\"\n                                }\n                              })\n                            : _vm._e()\n                        ],\n                        1\n                      ),\n                      _vm._v(\" \"),\n                      _vm.tableData.total == 0\n                        ? _c(\"b-card-body\", [\n                            _c(\"h6\", [_vm._v(\" no suggestions to load \")])\n                          ])\n                        : _vm._e()\n                    ],\n                    1\n                  )\n            ],\n            1\n          )\n        ],\n        1\n      )\n    ],\n    1\n  )\n}\nvar staticRenderFns = []\nrender._withStripped = true\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvcGFnZXMvcmVhZGVyL3N1Z2dlc3Rpb25zL0xpc3QudnVlP2FiZjkiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSyxzQkFBc0I7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsNkJBQTZCO0FBQ2xELHNDQUFzQyxTQUFTLHNCQUFzQixFQUFFO0FBQ3ZFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0NBQXdDLGlDQUFpQztBQUN6RTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkI7QUFDM0I7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0I7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5Q0FBeUM7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVDQUF1QztBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQztBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQztBQUNuQztBQUNBO0FBQ0EsK0JBQStCO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6Ii4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPyEuL3Jlc291cmNlcy9qcy9wYWdlcy9yZWFkZXIvc3VnZ2VzdGlvbnMvTGlzdC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MGFkODMxNTEmLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcImItY29udGFpbmVyXCIsXG4gICAgeyBzdGF0aWNDbGFzczogXCJwdC01XCIgfSxcbiAgICBbXG4gICAgICBfYyhcbiAgICAgICAgXCJiLXJvd1wiLFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcImItY29sXCIsXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF92bS5sb2FkaW5nXG4gICAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJ0ZXh0LWNlbnRlclwiIH0sXG4gICAgICAgICAgICAgICAgICAgIFtfYyhcImItc3Bpbm5lclwiLCB7IGF0dHJzOiB7IGxhYmVsOiBcIkxvYWRpbmcuLi5cIiB9IH0pXSxcbiAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIDogX2MoXG4gICAgICAgICAgICAgICAgICAgIFwiYi1jYXJkXCIsXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBzY29wZWRTbG90czogX3ZtLl91KFtcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAga2V5OiBcImhlYWRlclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBmbjogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaDRcIiwgeyBzdGF0aWNDbGFzczogXCJtLTAgdGV4dC1jZW50ZXJcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIlxcbiAgICAgICAgICAgIFN1Z2dlc3Rpb25zXFxuICAgICAgICAgIFwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHByb3h5OiB0cnVlXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICBcImItY2FyZC1ib2R5XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiYi10YWJsZVwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBcInN1Z2dlc3Rpb25fdGJsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtczogX3ZtLnRhYmxlRGF0YS5kYXRhLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJwZXItcGFnZVwiOiBfdm0udGFibGVEYXRhLnBlcl9wYWdlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmllbGRzOiBfdm0uZmllbGRzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjdXJyZW50LXBhZ2VcIjogX3ZtLnRhYmxlRGF0YS5jdXJyZW50X3BhZ2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbWFsbDogXCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2NvcGVkU2xvdHM6IF92bS5fdShbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleTogXCJjZWxsKGNyZWF0ZWRfYXQpXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZuOiBmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX2YoXCJtb21lbnRcIikoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEudmFsdWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGRkZCwgTU1NTSBEbyBZWVlZXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk6IFwiY2VsbChpZClcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm46IGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYi1idXR0b25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50OiBcInByaW1hcnlcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpemU6IFwic21cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS52aWV3VmxvZ3MoZGF0YS52YWx1ZSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICBWaWV3XFxuICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0udGFibGVEYXRhLnRvdGFsID4gX3ZtLnRhYmxlRGF0YS5wZXJfcGFnZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXCJiLXBhZ2luYXRpb25cIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidG90YWwtcm93c1wiOiBfdm0udGFibGVEYXRhLnRvdGFsLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicGVyLXBhZ2VcIjogX3ZtLnRhYmxlRGF0YS5wZXJfcGFnZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImZpcnN0LXRleHRcIjogXCJGaXJzdFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicHJldi10ZXh0XCI6IFwiUHJldlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibmV4dC10ZXh0XCI6IFwiTmV4dFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibGFzdC10ZXh0XCI6IFwiTGFzdFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduOiBcImNlbnRlclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYXJpYS1jb250cm9sc1wiOiBcInN1Z2dlc3Rpb25fdGJsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZTogXCJzbVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS50YWJsZURhdGEuY3VycmVudFBhZ2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLnRhYmxlRGF0YSwgXCJjdXJyZW50UGFnZVwiLCAkJHYpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcInRhYmxlRGF0YS5jdXJyZW50UGFnZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLnRhYmxlRGF0YS50b3RhbCA9PSAwXG4gICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFwiYi1jYXJkLWJvZHlcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaDZcIiwgW192bS5fdihcIiBubyBzdWdnZXN0aW9ucyB0byBsb2FkIFwiKV0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKVxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApXG4gICAgXSxcbiAgICAxXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/reader/suggestions/List.vue?vue&type=template&id=0ad83151&\n");

/***/ }),

/***/ "./resources/js/pages/reader/suggestions/List.vue":
/*!********************************************************!*\
  !*** ./resources/js/pages/reader/suggestions/List.vue ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _List_vue_vue_type_template_id_0ad83151___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./List.vue?vue&type=template&id=0ad83151& */ \"./resources/js/pages/reader/suggestions/List.vue?vue&type=template&id=0ad83151&\");\n/* harmony import */ var _List_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./List.vue?vue&type=script&lang=js& */ \"./resources/js/pages/reader/suggestions/List.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _List_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _List_vue_vue_type_template_id_0ad83151___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _List_vue_vue_type_template_id_0ad83151___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"resources/js/pages/reader/suggestions/List.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvcGFnZXMvcmVhZGVyL3N1Z2dlc3Rpb25zL0xpc3QudnVlPzZkODYiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBbUY7QUFDM0I7QUFDTDs7O0FBR25EO0FBQ21HO0FBQ25HLGdCQUFnQiwyR0FBVTtBQUMxQixFQUFFLDBFQUFNO0FBQ1IsRUFBRSwrRUFBTTtBQUNSLEVBQUUsd0ZBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxJQUFJLEtBQVUsRUFBRSxZQWlCZjtBQUNEO0FBQ2UsZ0YiLCJmaWxlIjoiLi9yZXNvdXJjZXMvanMvcGFnZXMvcmVhZGVyL3N1Z2dlc3Rpb25zL0xpc3QudnVlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9MaXN0LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0wYWQ4MzE1MSZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9MaXN0LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vTGlzdC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIi9Vc2Vycy9hemEvRG9jdW1lbnRzL0dpdEh1Yi90aWstdG9rLXRhcm90L25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGkvZGlzdC9pbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzBhZDgzMTUxJykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzBhZDgzMTUxJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzBhZDgzMTUxJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9MaXN0LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0wYWQ4MzE1MSZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCcwYWQ4MzE1MScsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicmVzb3VyY2VzL2pzL3BhZ2VzL3JlYWRlci9zdWdnZXN0aW9ucy9MaXN0LnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./resources/js/pages/reader/suggestions/List.vue\n");

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