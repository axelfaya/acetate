(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_pages_People_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/People.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/People.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {},
  data: function data() {
    return {
      overlay: true,
      perPage: 48,
      page: 1,
      searchValue: null,
      query: null,
      snackbar: false,
      people: "",
      meta: "",
      // App url.
      appURL: "http://127.0.0.1:8001",
      // Base url.
      baseURL: "/",
      apiToken: "2|QxwrekmrZpsAmSebf4w2g3uvoqQkVyYeVKIHw6vQ"
    };
  },
  mounted: function mounted() {
    this.fetchPeople();
  },
  methods: {
    fetchPeople: function fetchPeople() {
      var _this = this;

      this.overlay = true;
      this.people = null;

      if (this.searchValue != null) {
        this.query = "people?per_page=" + this.perPage + "&search=" + this.searchValue;
      } else {
        this.query = "people?per_page=" + this.perPage + "&page=" + this.page;
      }

      axios.request({
        url: this.query,
        method: "get",
        baseURL: this.baseURL + "api/",
        headers: {
          Authorization: "Bearer " + this.apiToken
        }
      }).then(function (response) {
        _this.people = response.data.people;
        _this.meta = response.data.meta;
        _this.overlay = false;
      })["catch"](function (error) {
        _this.snackbar = true;
        _this.searchValue = null;

        _this.fetchPeople();
      })["finally"](function () {});
    },
    onSearch: function onSearch() {
      this.fetchPeople();
    },
    onPageChange: function onPageChange() {
      this.fetchPeople();
    },
    showPerson: function showPerson(id) {
      var path = "people/" + id;
      this.$router.push("".concat(this.baseURL).concat(this.$i18n.locale, "/").concat(path));
    }
  }
});

/***/ }),

/***/ "./resources/js/components/pages/People.vue":
/*!**************************************************!*\
  !*** ./resources/js/components/pages/People.vue ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _People_vue_vue_type_template_id_3df503b6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./People.vue?vue&type=template&id=3df503b6& */ "./resources/js/components/pages/People.vue?vue&type=template&id=3df503b6&");
/* harmony import */ var _People_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./People.vue?vue&type=script&lang=js& */ "./resources/js/components/pages/People.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _People_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _People_vue_vue_type_template_id_3df503b6___WEBPACK_IMPORTED_MODULE_0__.render,
  _People_vue_vue_type_template_id_3df503b6___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/pages/People.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/pages/People.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./resources/js/components/pages/People.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_People_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./People.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/People.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_People_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/pages/People.vue?vue&type=template&id=3df503b6&":
/*!*********************************************************************************!*\
  !*** ./resources/js/components/pages/People.vue?vue&type=template&id=3df503b6& ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_People_vue_vue_type_template_id_3df503b6___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_People_vue_vue_type_template_id_3df503b6___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_People_vue_vue_type_template_id_3df503b6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./People.vue?vue&type=template&id=3df503b6& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/People.vue?vue&type=template&id=3df503b6&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/People.vue?vue&type=template&id=3df503b6&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/People.vue?vue&type=template&id=3df503b6& ***!
  \************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "v-container",
    { staticClass: "my-0 py-0" },
    [
      _c(
        "div",
        { staticClass: "my-0 py-0" },
        [
          _c(
            "v-snackbar",
            {
              scopedSlots: _vm._u([
                {
                  key: "action",
                  fn: function(ref) {
                    var attrs = ref.attrs
                    return [
                      _c(
                        "v-btn",
                        _vm._b(
                          {
                            attrs: {
                              centered: "",
                              color: _vm.$vuetify.theme.dark
                                ? "info"
                                : "darkinfo",
                              small: "",
                              text: ""
                            },
                            on: {
                              click: function($event) {
                                _vm.snackbar = false
                              }
                            }
                          },
                          "v-btn",
                          attrs,
                          false
                        ),
                        [
                          _vm._v(
                            "\n                    " +
                              _vm._s(_vm.$t("button.close")) +
                              "\n                "
                          )
                        ]
                      )
                    ]
                  }
                }
              ]),
              model: {
                value: _vm.snackbar,
                callback: function($$v) {
                  _vm.snackbar = $$v
                },
                expression: "snackbar"
              }
            },
            [
              _vm._v(
                "\n            " +
                  _vm._s(_vm.$t("errors.people.not_found")) +
                  "\n            "
              )
            ]
          ),
          _vm._v(" "),
          _vm.overlay === false
            ? _c("v-container", { staticClass: "my-0 py-0" }, [
                _c(
                  "div",
                  { staticClass: "my-0 py-0" },
                  [
                    _c(
                      "div",
                      { staticClass: "my-0 py-0 mx-auto my-auto col-auto" },
                      [
                        _c(
                          "v-row",
                          { attrs: { justify: "center" } },
                          [
                            _c(
                              "v-col",
                              {
                                staticClass: "mb-4 my-auto col-auto ",
                                attrs: { cols: "10", sm: "6", md: "4" }
                              },
                              [
                                _c("v-text-field", {
                                  attrs: {
                                    color: _vm.$vuetify.theme.dark
                                      ? "primary"
                                      : "secondary",
                                    label: _vm.$t("search.people"),
                                    "hide-details": "auto",
                                    clearable: ""
                                  },
                                  on: {
                                    keyup: function($event) {
                                      if (
                                        !$event.type.indexOf("key") &&
                                        _vm._k(
                                          $event.keyCode,
                                          "enter",
                                          13,
                                          $event.key,
                                          "Enter"
                                        )
                                      ) {
                                        return null
                                      }
                                      return _vm.onSearch($event)
                                    }
                                  },
                                  model: {
                                    value: _vm.searchValue,
                                    callback: function($$v) {
                                      _vm.searchValue = $$v
                                    },
                                    expression: "searchValue"
                                  }
                                })
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c(
                              "v-col",
                              {
                                staticClass:
                                  "my-auto my-0 mx-0 px-0 py-0 col-auto "
                              },
                              [
                                _c(
                                  "v-btn",
                                  {
                                    staticClass: "white--text",
                                    class: _vm.$vuetify.theme.dark
                                      ? "primary"
                                      : "secondary",
                                    attrs: {
                                      elevation: "0",
                                      fab: "",
                                      "x-small": ""
                                    },
                                    on: { click: _vm.onSearch }
                                  },
                                  [_c("v-icon", [_vm._v("mdi-magnify")])],
                                  1
                                )
                              ],
                              1
                            )
                          ],
                          1
                        )
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "v-row",
                      { attrs: { dense: "" } },
                      _vm._l(_vm.people, function(person, index) {
                        return _c(
                          "v-col",
                          { key: index, attrs: { cols: "12", md: "6" } },
                          [
                            _c(
                              "v-card",
                              {
                                staticClass: "mx-auto pb-4",
                                attrs: { "max-width": "570px" }
                              },
                              [
                                _c(
                                  "div",
                                  [
                                    _c(
                                      "v-list-item",
                                      {
                                        staticClass: "greybg rounded-t",
                                        attrs: { "three-line": "" }
                                      },
                                      [
                                        _c(
                                          "v-list-item-avatar",
                                          {
                                            attrs: {
                                              size: "80",
                                              rounded: "",
                                              color: _vm.$vuetify.theme.dark
                                                ? "primary darken-1"
                                                : "greybg darken-1"
                                            }
                                          },
                                          [
                                            person.avatar != null
                                              ? _c("v-img", {
                                                  attrs: {
                                                    src:
                                                      _vm.baseURL +
                                                      "storage/avatar/person/" +
                                                      person.avatar,
                                                    title: person.nickname
                                                  }
                                                })
                                              : _c(
                                                  "v-icon",
                                                  {
                                                    attrs: {
                                                      title: _vm.$t(
                                                        "avatar.no_avatar"
                                                      ),
                                                      color: _vm.$vuetify.theme
                                                        .dark
                                                        ? "greybg"
                                                        : "primary lighten-1"
                                                    }
                                                  },
                                                  [_vm._v("mdi-camera-off")]
                                                )
                                          ],
                                          1
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "v-list-item-content",
                                          [
                                            _c(
                                              "div",
                                              {
                                                staticClass:
                                                  "overline primary--text"
                                              },
                                              [
                                                _c(
                                                  "v-row",
                                                  [
                                                    _c(
                                                      "v-col",
                                                      {
                                                        staticClass:
                                                          "col-auto ml-auto",
                                                        staticStyle: {
                                                          "margin-bottom":
                                                            "1rem"
                                                        }
                                                      },
                                                      [
                                                        _c(
                                                          "span",
                                                          {
                                                            staticClass:
                                                              "primary--text px-0"
                                                          },
                                                          [
                                                            _c(
                                                              "v-icon",
                                                              {
                                                                staticClass:
                                                                  "primary--text",
                                                                attrs: {
                                                                  dark: "",
                                                                  small: ""
                                                                }
                                                              },
                                                              [
                                                                _vm._v(
                                                                  "\n                                                            mdi-star-outline\n                                                        "
                                                                )
                                                              ]
                                                            )
                                                          ],
                                                          1
                                                        )
                                                      ]
                                                    )
                                                  ],
                                                  1
                                                )
                                              ],
                                              1
                                            ),
                                            _vm._v(" "),
                                            _c(
                                              "v-list-item-title",
                                              {
                                                staticClass:
                                                  "title primary--text mb-1"
                                              },
                                              [
                                                _vm._v(
                                                  _vm._s(person.nickname) +
                                                    "\n                                        "
                                                )
                                              ]
                                            )
                                          ],
                                          1
                                        )
                                      ],
                                      1
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "v-row",
                                      { staticClass: "py-3 mx-2" },
                                      [
                                        _c("v-col", [
                                          person.firstname && person.lastname
                                            ? _c(
                                                "span",
                                                {
                                                  staticClass:
                                                    "caption primary--text"
                                                },
                                                [
                                                  _c(
                                                    "span",
                                                    [
                                                      _c(
                                                        "v-icon",
                                                        {
                                                          staticClass:
                                                            "mr-1 primary--text",
                                                          staticStyle: {
                                                            "margin-bottom":
                                                              "0.08rem"
                                                          },
                                                          attrs: {
                                                            small: "",
                                                            title: _vm.$t(
                                                              "page.people.title.name"
                                                            )
                                                          }
                                                        },
                                                        [
                                                          _vm._v(
                                                            "mdi-account-box"
                                                          )
                                                        ]
                                                      ),
                                                      _c("span", [
                                                        _vm._v(
                                                          " " +
                                                            _vm._s(
                                                              person.firstname
                                                            ) +
                                                            "\n                                                    " +
                                                            _vm._s(
                                                              person.lastname
                                                            )
                                                        )
                                                      ]),
                                                      _c("v-spacer")
                                                    ],
                                                    1
                                                  )
                                                ]
                                              )
                                            : person.firstname &&
                                              !person.lastname
                                            ? _c(
                                                "span",
                                                {
                                                  staticClass:
                                                    "caption primary--text"
                                                },
                                                [
                                                  _c(
                                                    "span",
                                                    [
                                                      _c(
                                                        "v-icon",
                                                        {
                                                          staticClass:
                                                            "mr-1 primary--text",
                                                          staticStyle: {
                                                            "margin-bottom":
                                                              "0.08rem"
                                                          },
                                                          attrs: {
                                                            small: "",
                                                            title: _vm.$t(
                                                              "page.people.title.name"
                                                            )
                                                          }
                                                        },
                                                        [
                                                          _vm._v(
                                                            "mdi-account-box"
                                                          )
                                                        ]
                                                      ),
                                                      _c("span", [
                                                        _vm._v(
                                                          " " +
                                                            _vm._s(
                                                              person.firstname
                                                            )
                                                        )
                                                      ]),
                                                      _c("v-spacer")
                                                    ],
                                                    1
                                                  )
                                                ]
                                              )
                                            : !person.firstname &&
                                              person.lastname
                                            ? _c(
                                                "span",
                                                {
                                                  staticClass:
                                                    "caption primary--text"
                                                },
                                                [
                                                  _c(
                                                    "span",
                                                    [
                                                      _c(
                                                        "v-icon",
                                                        {
                                                          staticClass:
                                                            "mr-1 primary--text",
                                                          staticStyle: {
                                                            "margin-bottom":
                                                              "0.08rem"
                                                          },
                                                          attrs: {
                                                            small: "",
                                                            title: _vm.$t(
                                                              "page.people.title.name"
                                                            )
                                                          }
                                                        },
                                                        [
                                                          _vm._v(
                                                            "mdi-account-box"
                                                          )
                                                        ]
                                                      ),
                                                      _c("span", [
                                                        _vm._v(
                                                          " " +
                                                            _vm._s(
                                                              person.lastname
                                                            )
                                                        )
                                                      ]),
                                                      _c("v-spacer")
                                                    ],
                                                    1
                                                  )
                                                ]
                                              )
                                            : _c(
                                                "span",
                                                {
                                                  staticClass:
                                                    "caption primary--text"
                                                },
                                                [
                                                  _c(
                                                    "span",
                                                    [
                                                      _c(
                                                        "v-icon",
                                                        {
                                                          staticClass: "mr-1 ",
                                                          class: _vm.$vuetify
                                                            .theme.dark
                                                            ? "grey--text"
                                                            : "grey--text",
                                                          staticStyle: {
                                                            "margin-bottom":
                                                              "0.08rem"
                                                          },
                                                          attrs: {
                                                            small: "",
                                                            title: _vm.$t(
                                                              "page.people.no_name_title"
                                                            )
                                                          }
                                                        },
                                                        [
                                                          _vm._v(
                                                            "mdi-account-box"
                                                          )
                                                        ]
                                                      ),
                                                      _c(
                                                        "span",
                                                        {
                                                          class: _vm.$vuetify
                                                            .theme.dark
                                                            ? "grey--text"
                                                            : "grey--text",
                                                          attrs: {
                                                            title: _vm.$t(
                                                              "page.people.no_name_title"
                                                            )
                                                          }
                                                        },
                                                        [
                                                          _vm._v(
                                                            "\n                                                    " +
                                                              _vm._s(
                                                                _vm.$t(
                                                                  "page.people.no_name"
                                                                )
                                                              )
                                                          )
                                                        ]
                                                      ),
                                                      _c("v-spacer")
                                                    ],
                                                    1
                                                  )
                                                ]
                                              )
                                        ]),
                                        _vm._v(" "),
                                        _c("v-divider", {
                                          staticClass: "my-2",
                                          attrs: { vertical: "" }
                                        }),
                                        _vm._v(" "),
                                        _c("v-col", { attrs: { cols: "6" } }, [
                                          person.company
                                            ? _c(
                                                "span",
                                                {
                                                  staticClass:
                                                    "caption primary--text"
                                                },
                                                [
                                                  _c(
                                                    "span",
                                                    [
                                                      _c(
                                                        "v-icon",
                                                        {
                                                          staticClass:
                                                            "mr-1 primary--text",
                                                          staticStyle: {
                                                            "margin-bottom":
                                                              "0.08rem"
                                                          },
                                                          attrs: {
                                                            small: "",
                                                            title: _vm.$t(
                                                              "page.people.title.company"
                                                            )
                                                          }
                                                        },
                                                        [
                                                          _vm._v(
                                                            "mdi-briefcase"
                                                          )
                                                        ]
                                                      ),
                                                      _c("span", [
                                                        _vm._v(
                                                          " " +
                                                            _vm._s(
                                                              person.company
                                                            )
                                                        )
                                                      ])
                                                    ],
                                                    1
                                                  )
                                                ]
                                              )
                                            : _c(
                                                "span",
                                                {
                                                  staticClass:
                                                    "caption primary--text"
                                                },
                                                [
                                                  _c(
                                                    "span",
                                                    [
                                                      _c(
                                                        "v-icon",
                                                        {
                                                          staticClass: "mr-1 ",
                                                          class: _vm.$vuetify
                                                            .theme.dark
                                                            ? "grey--text"
                                                            : "grey--text",
                                                          staticStyle: {
                                                            "margin-bottom":
                                                              "0.08rem"
                                                          },
                                                          attrs: {
                                                            small: "",
                                                            title: _vm.$t(
                                                              "page.people.no_company_title"
                                                            )
                                                          }
                                                        },
                                                        [
                                                          _vm._v(
                                                            "mdi-briefcase"
                                                          )
                                                        ]
                                                      ),
                                                      _c(
                                                        "span",
                                                        {
                                                          class: _vm.$vuetify
                                                            .theme.dark
                                                            ? "grey--text"
                                                            : "grey--text",
                                                          attrs: {
                                                            title: _vm.$t(
                                                              "page.people.no_company_title"
                                                            )
                                                          }
                                                        },
                                                        [
                                                          _vm._v(
                                                            "\n                                                    " +
                                                              _vm._s(
                                                                _vm.$t(
                                                                  "page.people.no_company"
                                                                )
                                                              )
                                                          )
                                                        ]
                                                      )
                                                    ],
                                                    1
                                                  )
                                                ]
                                              )
                                        ])
                                      ],
                                      1
                                    ),
                                    _vm._v(" "),
                                    _c("v-divider", { staticClass: "mx-2" }),
                                    _vm._v(" "),
                                    _c(
                                      "v-row",
                                      { staticClass: "pt-3" },
                                      [
                                        _c(
                                          "v-col",
                                          {
                                            staticClass: "ml-4 my-auto col-auto"
                                          },
                                          [
                                            _c(
                                              "v-btn",
                                              {
                                                attrs: {
                                                  text: "",
                                                  color: "info accent-4"
                                                },
                                                on: {
                                                  click: function($event) {
                                                    return _vm.showPerson(
                                                      person.id
                                                    )
                                                  }
                                                }
                                              },
                                              [
                                                _vm._v(
                                                  _vm._s(
                                                    _vm.$t(
                                                      "page.people.more_info"
                                                    )
                                                  )
                                                )
                                              ]
                                            )
                                          ],
                                          1
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "v-col",
                                          {
                                            staticClass:
                                              "mx-4 my-auto col-auto ml-auto"
                                          },
                                          [
                                            _c(
                                              "span",
                                              {
                                                staticClass: "mr-3",
                                                class: _vm.$vuetify.theme.dark
                                                  ? "primary--text"
                                                  : "secondary--text"
                                              },
                                              [
                                                _c(
                                                  "v-icon",
                                                  {
                                                    staticClass: "mr-1",
                                                    class: _vm.$vuetify.theme
                                                      .dark
                                                      ? "primary--text"
                                                      : "secondary--text",
                                                    staticStyle: {
                                                      "margin-bottom": "0.05rem"
                                                    },
                                                    attrs: {
                                                      dark: "",
                                                      small: ""
                                                    }
                                                  },
                                                  [
                                                    _vm._v(
                                                      "\n                                                mdi-comment-outline "
                                                    )
                                                  ]
                                                ),
                                                _c(
                                                  "span",
                                                  { staticClass: "subtitle-2" },
                                                  [
                                                    _vm._v(
                                                      _vm._s(
                                                        person.comments_count
                                                      ) +
                                                        "\n                                            "
                                                    )
                                                  ]
                                                )
                                              ],
                                              1
                                            ),
                                            _vm._v(" "),
                                            _c(
                                              "span",
                                              {
                                                class: _vm.$vuetify.theme.dark
                                                  ? "primary--text"
                                                  : "secondary--text"
                                              },
                                              [
                                                _c(
                                                  "v-icon",
                                                  {
                                                    staticClass: "mr-1",
                                                    class: _vm.$vuetify.theme
                                                      .dark
                                                      ? "primary--text"
                                                      : "secondary--text",
                                                    staticStyle: {
                                                      "margin-bottom": "0.05rem"
                                                    },
                                                    attrs: {
                                                      dark: "",
                                                      small: ""
                                                    }
                                                  },
                                                  [
                                                    _vm._v(
                                                      "\n                                                mdi-heart-outline "
                                                    )
                                                  ]
                                                ),
                                                _c(
                                                  "span",
                                                  { staticClass: "subtitle-2" },
                                                  [
                                                    _vm._v(
                                                      _vm._s(person.likes_count)
                                                    )
                                                  ]
                                                )
                                              ],
                                              1
                                            )
                                          ]
                                        )
                                      ],
                                      1
                                    )
                                  ],
                                  1
                                )
                              ]
                            )
                          ],
                          1
                        )
                      }),
                      1
                    ),
                    _vm._v(" "),
                    _vm.meta.last_page != 1 && _vm.overlay == false
                      ? _c("v-col", { staticClass: "my-0 py-o" }, [
                          _c(
                            "div",
                            { staticClass: "text-center mt-4 mb-0 py-0" },
                            [
                              _c(
                                "v-container",
                                [
                                  _c(
                                    "v-row",
                                    { attrs: { justify: "center" } },
                                    [
                                      _c(
                                        "v-col",
                                        { attrs: { cols: "12" } },
                                        [
                                          _c(
                                            "v-container",
                                            { staticClass: "max-width" },
                                            [
                                              _c("v-pagination", {
                                                attrs: {
                                                  color: _vm.$vuetify.theme.dark
                                                    ? "primary"
                                                    : "secondary",
                                                  length: _vm.meta.last_page,
                                                  circle: ""
                                                },
                                                on: { input: _vm.onPageChange },
                                                model: {
                                                  value: _vm.page,
                                                  callback: function($$v) {
                                                    _vm.page = $$v
                                                  },
                                                  expression: "page"
                                                }
                                              })
                                            ],
                                            1
                                          )
                                        ],
                                        1
                                      )
                                    ],
                                    1
                                  )
                                ],
                                1
                              )
                            ],
                            1
                          )
                        ])
                      : _vm._e()
                  ],
                  1
                )
              ])
            : _vm._e()
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "v-overlay",
        {
          class: _vm.$vuetify.theme.dark ? "primary--text" : "secondary--text",
          attrs: { opacity: 0.1, value: _vm.overlay }
        },
        [
          _c(
            "v-progress-circular",
            { attrs: { indeterminate: "", size: "90" } },
            [
              _c(
                "span",
                {
                  staticClass: "caption",
                  class: _vm.$vuetify.theme.dark
                    ? "primary--text"
                    : "secondary--text"
                },
                [_vm._v(_vm._s(_vm.$t("loading")))]
              )
            ]
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);