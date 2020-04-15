(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3],{

/***/ "./src/components/FormAccount.jsx":
/*!****************************************!*\
  !*** ./src/components/FormAccount.jsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_organisms_Navigation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! _components/organisms/Navigation */ \"./src/components/organisms/Navigation.jsx\");\n/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-helmet */ \"./node_modules/react-helmet/lib/Helmet.js\");\n/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_atoms_formParts_Name__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! _components/atoms/formParts/Name */ \"./src/components/atoms/formParts/Name.jsx\");\n/* harmony import */ var _components_atoms_formParts_NameKana__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! _components/atoms/formParts/NameKana */ \"./src/components/atoms/formParts/NameKana.jsx\");\n/* harmony import */ var _components_atoms_formParts_Address__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! _components/atoms/formParts/Address */ \"./src/components/atoms/formParts/Address.jsx\");\n/* harmony import */ var _components_atoms_formParts_Tel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! _components/atoms/formParts/Tel */ \"./src/components/atoms/formParts/Tel.jsx\");\n/* harmony import */ var _components_atoms_formParts_Email__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! _components/atoms/formParts/Email */ \"./src/components/atoms/formParts/Email.jsx\");\n/* harmony import */ var _components_atoms_formParts_Gender__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! _components/atoms/formParts/Gender */ \"./src/components/atoms/formParts/Gender.jsx\");\n/* harmony import */ var _components_atoms_formParts_Birthday__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! _components/atoms/formParts/Birthday */ \"./src/components/atoms/formParts/Birthday.jsx\");\n/* harmony import */ var _components_atoms_formParts_ReceptionDate__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! _components/atoms/formParts/ReceptionDate */ \"./src/components/atoms/formParts/ReceptionDate.jsx\");\n/* harmony import */ var _scss_reset__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! _scss/_reset */ \"./src/scss/_reset.scss\");\n/* harmony import */ var _scss_reset__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_scss_reset__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var _scss_form_reset__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! _scss/_form_reset */ \"./src/scss/_form_reset.scss\");\n/* harmony import */ var _scss_form_reset__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_scss_form_reset__WEBPACK_IMPORTED_MODULE_12__);\n/* harmony import */ var _scss_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! _scss/_common */ \"./src/scss/_common.scss\");\n/* harmony import */ var _scss_common__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_scss_common__WEBPACK_IMPORTED_MODULE_13__);\n/* harmony import */ var _scss_form__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! _scss/_form */ \"./src/scss/_form.scss\");\n/* harmony import */ var _scss_form__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_scss_form__WEBPACK_IMPORTED_MODULE_14__);\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar FormAccount = /*#__PURE__*/function (_React$Component) {\n  _inherits(FormAccount, _React$Component);\n\n  var _super = _createSuper(FormAccount);\n\n  function FormAccount(props) {\n    var _this;\n\n    _classCallCheck(this, FormAccount);\n\n    _this = _super.call(this, props);\n    _this.items = _this.props.items;\n    return _this;\n  }\n\n  _createClass(FormAccount, [{\n    key: \"render\",\n    value: function render() {\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"Bookseries\"\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_helmet__WEBPACK_IMPORTED_MODULE_2__[\"Helmet\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"title\", null, \"Bookseries | Detail\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"meta\", {\n        name: \"description\",\n        content: \"BookseriesDetail\\u30C7\\u30A3\\u30B9\\u30AF\\u30EA\\u30D7\\u30B7\\u30E7\\u30F3\"\n      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"meta\", {\n        name: \"keyword\",\n        content: \"suzuki,book,bookseries, detail\"\n      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h1\", null, \"Form\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_organisms_Navigation__WEBPACK_IMPORTED_MODULE_1__[\"default\"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"main\", {\n        className: \"form-book\"\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_atoms_formParts_ReceptionDate__WEBPACK_IMPORTED_MODULE_10__[\"default\"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_atoms_formParts_Name__WEBPACK_IMPORTED_MODULE_3__[\"default\"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_atoms_formParts_NameKana__WEBPACK_IMPORTED_MODULE_4__[\"default\"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_atoms_formParts_Tel__WEBPACK_IMPORTED_MODULE_6__[\"default\"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_atoms_formParts_Email__WEBPACK_IMPORTED_MODULE_7__[\"default\"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_atoms_formParts_Address__WEBPACK_IMPORTED_MODULE_5__[\"default\"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_atoms_formParts_Gender__WEBPACK_IMPORTED_MODULE_8__[\"default\"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_atoms_formParts_Birthday__WEBPACK_IMPORTED_MODULE_9__[\"default\"], null)));\n    }\n  }]);\n\n  return FormAccount;\n}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (FormAccount);\n\n//# sourceURL=webpack:///./src/components/FormAccount.jsx?");

/***/ }),

/***/ "./src/components/atoms/formParts/Address.jsx":
/*!****************************************************!*\
  !*** ./src/components/atoms/formParts/Address.jsx ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\n\nvar Address = function Address() {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"dl\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"dt\", null, \"\\u3054\\u4F4F\\u6240\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"dd\", {\n    className: \"adress-data-wrap\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n    type: \"text\",\n    name: \"zip\",\n    required: true,\n    placeholder: \"117-2345\"\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n    type: \"text\",\n    name: \"prefecture\",\n    required: true,\n    placeholder: \"\\u6771\\u4EAC\\u90FD\"\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n    type: \"text\",\n    name: \"address1\",\n    required: true,\n    placeholder: \"\\u8C4A\\u5CF6\\u533A\\u6C60\\u888B\"\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n    type: \"text\",\n    name: \"address2\",\n    required: true,\n    placeholder: \"3-7-18\"\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n    type: \"text\",\n    name: \"building\",\n    required: true,\n    placeholder: \"\\u30D6\\u30EB\\u30B8\\u30E5\\u30D5\\u30A1\\u30EA\\u30CF\"\n  })))));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Address);\n\n//# sourceURL=webpack:///./src/components/atoms/formParts/Address.jsx?");

/***/ }),

/***/ "./src/components/atoms/formParts/Birthday.jsx":
/*!*****************************************************!*\
  !*** ./src/components/atoms/formParts/Birthday.jsx ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\n\nvar Birthday = function Birthday() {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"dl\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"dt\", null, \"\\u751F\\u5E74\\u6708\\u65E5\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"dd\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n    type: \"date\",\n    name: \"receptionDate\"\n  })));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Birthday);\n\n//# sourceURL=webpack:///./src/components/atoms/formParts/Birthday.jsx?");

/***/ }),

/***/ "./src/components/atoms/formParts/Email.jsx":
/*!**************************************************!*\
  !*** ./src/components/atoms/formParts/Email.jsx ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\n\nvar Email = function Email() {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"dl\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"dt\", null, \"\\u30E1\\u30FC\\u30EB\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"dd\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n    type: \"email\",\n    name: \"mail\",\n    required: true,\n    pattern: \"[a-z0-9._%+-]+@[a-z0-9.-]+\\\\.[a-z]{2,3}$\",\n    placeholder: \"09021334566\",\n    title: \"\\u30E1\\u30FC\\u30EB\\u30A2\\u30C9\\u30EC\\u30B9\"\n  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"dl\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"dt\", null, \"\\u30E1\\u30FC\\u30EB(\\u78BA\\u8A8D\\u7528)\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"dd\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n    type: \"email2\",\n    name: \"mail2\",\n    required: true,\n    pattern: \"[a-z0-9._%+-]+@[a-z0-9.-]+\\\\.[a-z]{2,3}$\",\n    placeholder: \"09021334566\",\n    title: \"\\u30E1\\u30FC\\u30EB\\u30A2\\u30C9\\u30EC\\u30B9\\u78BA\\u8A8D\"\n  }))));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Email);\n\n//# sourceURL=webpack:///./src/components/atoms/formParts/Email.jsx?");

/***/ }),

/***/ "./src/components/atoms/formParts/Gender.jsx":
/*!***************************************************!*\
  !*** ./src/components/atoms/formParts/Gender.jsx ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\n\nvar Gender = function Gender() {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"dl\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"dt\", null, \"\\u30B8\\u30A7\\u30F3\\u30C0\\u30FC\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"dd\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"label\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", null, \"\\u7537\\u6027\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n    id: \"type\",\n    type: \"radio\",\n    name: \"gender\"\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"label\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", null, \"\\u5973\\u6027\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n    id: \"type\",\n    type: \"radio\",\n    name: \"gender\"\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"label\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", null, \"\\u305D\\u306E\\u4ED6\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n    id: \"type\",\n    type: \"radio\",\n    name: \"gender\"\n  }))));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Gender);\n\n//# sourceURL=webpack:///./src/components/atoms/formParts/Gender.jsx?");

/***/ }),

/***/ "./src/components/atoms/formParts/Name.jsx":
/*!*************************************************!*\
  !*** ./src/components/atoms/formParts/Name.jsx ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\n\nvar Name = function Name() {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"dl\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"dt\", null, \"\\u304A\\u540D\\u524D\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"dd\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n    type: \"text\",\n    name: \"lastName\",\n    required: true,\n    placeholder: \"\\u5C71\\u7530\"\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n    type: \"text\",\n    name: \"firstName\",\n    required: true,\n    placeholder: \"\\u4EAC\\u5B50\"\n  }))));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Name);\n\n//# sourceURL=webpack:///./src/components/atoms/formParts/Name.jsx?");

/***/ }),

/***/ "./src/components/atoms/formParts/NameKana.jsx":
/*!*****************************************************!*\
  !*** ./src/components/atoms/formParts/NameKana.jsx ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\n\nvar NameKana = function NameKana() {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"dl\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"dt\", null, \"\\u30D5\\u30EA\\u30AC\\u30CA\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"dd\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n    type: \"text\",\n    name: \"lastNameKana\",\n    required: true,\n    pattern: \"[\\u30A1-\\u30F4\\u30FC/s ]+\",\n    placeholder: \"\\u30E4\\u30DE\\u30C0\",\n    title: \"\\u30AB\\u30BF\\u30AB\\u30CA\\u3092\\u5165\\u529B\\u3057\\u3066\\u304F\\u3060\\u3055\\u3044\"\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n    type: \"text\",\n    name: \"firstNameKana\",\n    required: true,\n    pattern: \"[\\u30A1-\\u30F4\\u30FC/s ]+\",\n    placeholder: \"\\u30AD\\u30E7\\u30A6\\u30B3\",\n    title: \"\\u30AB\\u30BF\\u30AB\\u30CA\\u3092\\u5165\\u529B\\u3057\\u3066\\u304F\\u3060\\u3055\\u3044\"\n  }))));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (NameKana);\n\n//# sourceURL=webpack:///./src/components/atoms/formParts/NameKana.jsx?");

/***/ }),

/***/ "./src/components/atoms/formParts/ReceptionDate.jsx":
/*!**********************************************************!*\
  !*** ./src/components/atoms/formParts/ReceptionDate.jsx ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\n\nvar ReceptionDate = function ReceptionDate() {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"dl\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"dt\", null, \"\\u3054\\u767B\\u9332\\u65E5\\u3000inputHidden\\u306B\\u3059\\u308B\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"dd\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n    type: \"date\",\n    name: \"receptionDate\"\n  })));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ReceptionDate);\n\n//# sourceURL=webpack:///./src/components/atoms/formParts/ReceptionDate.jsx?");

/***/ }),

/***/ "./src/components/atoms/formParts/Tel.jsx":
/*!************************************************!*\
  !*** ./src/components/atoms/formParts/Tel.jsx ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\n\nvar Tel = function Tel() {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"dl\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"dt\", null, \"\\u304A\\u96FB\\u8A71\\u756A\\u53F7\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"dd\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n    type: \"text\",\n    name: \"tel\",\n    required: true,\n    placeholder: \"09021334566\",\n    pattern: \"\\\\d{2,4}-?\\\\d{3,4}-?\\\\d{3,4}\"\n  })));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Tel);\n\n//# sourceURL=webpack:///./src/components/atoms/formParts/Tel.jsx?");

/***/ })

}]);