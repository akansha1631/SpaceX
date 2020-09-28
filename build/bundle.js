/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/server/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./routes.js":
/*!*******************!*\
  !*** ./routes.js ***!
  \*******************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _src_client_components_home_page_home_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/client/components/home-page/home-page */ \"./src/client/components/home-page/home-page.js\");\n/* harmony import */ var _src_client_components_space_program_card_space_program_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/client/components/space-program-card/space-program-card */ \"./src/client/components/space-program-card/space-program-card.js\");\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ([{\n  loadDataSSR: _src_client_components_space_program_card_space_program_card__WEBPACK_IMPORTED_MODULE_1__[\"loadDataSSR\"],\n  path: '/',\n  component: _src_client_components_home_page_home_page__WEBPACK_IMPORTED_MODULE_0__[\"default\"]\n}]);\n\n//# sourceURL=webpack:///./routes.js?");

/***/ }),

/***/ "./src/client/components/card-image/card-image.css":
/*!*********************************************************!*\
  !*** ./src/client/components/card-image/card-image.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/client/components/card-image/card-image.css?");

/***/ }),

/***/ "./src/client/components/card-image/card-image.js":
/*!********************************************************!*\
  !*** ./src/client/components/card-image/card-image.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _card_image_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./card-image.css */ \"./src/client/components/card-image/card-image.css\");\n/* harmony import */ var _card_image_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_card_image_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles.css */ \"./src/client/components/styles.css\");\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_css__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\nvar CardImage = function CardImage(props) {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"imageContainer fr jtc\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"img\", {\n    src: props.imageLink,\n    alt: props.missionName,\n    className: \"cardImage\"\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h3\", {\n    className: \"fs_16 imageTitle \",\n    style: {\n      maxWidth: 'fit-content'\n    }\n  }, \"\".concat(props.missionName, \"#\").concat(props.flightNumber)));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (CardImage);\n\n//# sourceURL=webpack:///./src/client/components/card-image/card-image.js?");

/***/ }),

/***/ "./src/client/components/filter-card/filter-card.css":
/*!***********************************************************!*\
  !*** ./src/client/components/filter-card/filter-card.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/client/components/filter-card/filter-card.css?");

/***/ }),

/***/ "./src/client/components/filter-card/filter-card.js":
/*!**********************************************************!*\
  !*** ./src/client/components/filter-card/filter-card.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _filter_card_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./filter-card.css */ \"./src/client/components/filter-card/filter-card.css\");\n/* harmony import */ var _filter_card_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_filter_card_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles.css */ \"./src/client/components/styles.css\");\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _store_actions_space_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../store/actions/space-data */ \"./src/client/store/actions/space-data.js\");\n/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router */ \"react-router\");\n/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_router__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_6__);\n\n\n\n\n\n\n\nvar FILTERS = \"Filters\";\nvar LAUNCH_YEAR = \"Launch Year\";\nvar SUCCESSFUL_LAUNCH = \"Successful Launch\";\nvar SUCCESSFUL_LANDING = \"Successful Landing\";\nvar YEARS = [[2006, 2007], [2008, 2009], [2010, 2011], [2012, 2013], [2014, 2015], [2016, 2017], [2018, 2019], [2020]];\n\nvar getLaunchYear = function getLaunchYear(handleClick, filters, props) {\n  var years = YEARS.map(function (year, index) {\n    var filteredColorFor1stYear = filters[\"launch_year\"] === year[0] ? \"bck-click-gr\" : \"bck-gr\";\n    var filteredColorFor2ndYear = filters[\"launch_year\"] === year[1] ? \"bck-click-gr\" : \"bck-gr\";\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: \"fr\",\n      key: index\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__[\"Link\"], {\n      className: \"mr_24 mb_24 p-button br5 filter-button \".concat(filteredColorFor1stYear),\n      onClick: function onClick() {\n        return handleClick(year[0], \"launch_year\");\n      },\n      to: \"\".concat(props.location.pathname, \"?launch_year=\").concat(year[0])\n    }, year[0]), year[1] && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__[\"Link\"], {\n      className: \"mb_24 p-button br5 filter-button \".concat(filteredColorFor2ndYear),\n      onClick: function onClick() {\n        return handleClick(year[1], \"launch_year\");\n      },\n      to: \"\".concat(props.location.pathname, \"?launch_year=\").concat(year[1])\n    }, year[1]));\n  });\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"frc alIc\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, LAUNCH_YEAR), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"hr\", {\n    className: \"mb_12 mt_0 w_140 mt_3\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"frc\"\n  }, years));\n};\n\nvar getLaunchAndLandFilters = function getLaunchAndLandFilters(heading, handleClick, key, filters, props) {\n  var filteredColorForTrue = \"bck-gr\";\n  var filteredColorForFalse = \"bck-gr\";\n\n  if (filters[key] === true) {\n    filteredColorForTrue = \"bck-click-gr\";\n  } else if (filters[key] === false) {\n    filteredColorForFalse = \"bck-click-gr\";\n  }\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"mb_12\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", null, heading), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"hr\", {\n    className: \"mb_12 mt_0 w_140 mt_3\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"fr spb mt_12\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__[\"Link\"], {\n    className: \"p-button br5 filter-button \".concat(filteredColorForTrue),\n    onClick: function onClick() {\n      return handleClick(true, key);\n    },\n    to: \"\".concat(props.location.pathname, \"?\").concat(key, \"=\", true)\n  }, \"True\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__[\"Link\"], {\n    className: \"p-button br5 filter-button \".concat(filteredColorForFalse),\n    onClick: function onClick() {\n      return handleClick(false, key);\n    },\n    to: \"\".concat(props.location.pathname, \"?\").concat(key, \"=\", false)\n  }, \"False\")));\n};\n\nvar FilterCard = function FilterCard(props) {\n  var filters = props.filters,\n      setFilters = props.setFilters,\n      removeFilters = props.removeFilters;\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    props.appliedFilters(filters);\n  }, [filters]);\n\n  var handleClick = function handleClick(value, key) {\n    if (filters[key] === undefined || filters[key] !== value) {\n      setFilters(key, value);\n    } else {\n      removeFilters(key);\n    }\n  };\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"card w200 mr_30 pt_8\",\n    style: {\n      height: \"fit-content\"\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h3\", {\n    className: \"mt_0\"\n  }, FILTERS), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"frc alIc\"\n  }, getLaunchYear(handleClick, filters, props), getLaunchAndLandFilters(SUCCESSFUL_LAUNCH, handleClick, \"launch_success\", filters, props), getLaunchAndLandFilters(SUCCESSFUL_LANDING, handleClick, \"land_success\", filters, props)));\n};\n\nvar mapDispatchToProps = function mapDispatchToProps(dispatch) {\n  return {\n    appliedFilters: function appliedFilters(filters) {\n      return dispatch(Object(_store_actions_space_data__WEBPACK_IMPORTED_MODULE_4__[\"fetchFilteredData\"])(filters));\n    },\n    setFilters: function setFilters(key, value) {\n      return dispatch(Object(_store_actions_space_data__WEBPACK_IMPORTED_MODULE_4__[\"setFilter\"])(key, value));\n    },\n    removeFilters: function removeFilters(key) {\n      return dispatch(Object(_store_actions_space_data__WEBPACK_IMPORTED_MODULE_4__[\"removeFilter\"])(key));\n    }\n  };\n};\n\nvar mapStateToProps = function mapStateToProps(state) {\n  return {\n    filters: state.spaceDataReducer.filters\n  };\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_3__[\"connect\"])(mapStateToProps, mapDispatchToProps)(Object(react_router__WEBPACK_IMPORTED_MODULE_5__[\"withRouter\"])(FilterCard)));\n\n//# sourceURL=webpack:///./src/client/components/filter-card/filter-card.js?");

/***/ }),

/***/ "./src/client/components/home-page/home-page.css":
/*!*******************************************************!*\
  !*** ./src/client/components/home-page/home-page.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/client/components/home-page/home-page.css?");

/***/ }),

/***/ "./src/client/components/home-page/home-page.js":
/*!******************************************************!*\
  !*** ./src/client/components/home-page/home-page.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _home_page_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home-page.css */ \"./src/client/components/home-page/home-page.css\");\n/* harmony import */ var _home_page_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_home_page_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _space_program_card_space_program_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../space-program-card/space-program-card */ \"./src/client/components/space-program-card/space-program-card.js\");\n/* harmony import */ var _filter_card_filter_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../filter-card/filter-card */ \"./src/client/components/filter-card/filter-card.js\");\n/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-helmet */ \"react-helmet\");\n/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\nvar SPACEX_LAUNCH_PROGRAM = \"SpaceX Launch Programs\";\nvar DEVELOPED_BY = \"Developed by\";\nvar DEVELOPER_NAME = \"Akansha Gupta\";\n\nvar HomePage = function HomePage() {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"bg_grey\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_helmet__WEBPACK_IMPORTED_MODULE_4__[\"Helmet\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"title\", null, \"SpaceX Launch Program\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"meta\", {\n    name: \"og:title\",\n    content: \"SpaceX Launch Program\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"meta\", {\n    name: \"description\",\n    content: \"Information about Spacex Launch programs\"\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h1\", {\n    className: \"ml_20\"\n  }, SPACEX_LAUNCH_PROGRAM), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"fr mr_20 f_wrap\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_filter_card_filter_card__WEBPACK_IMPORTED_MODULE_3__[\"default\"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"fr w_1400\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_space_program_card_space_program_card__WEBPACK_IMPORTED_MODULE_2__[\"default\"], null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h3\", {\n    className: \"mt_40 center mt_24 mb_0\"\n  }, DEVELOPED_BY, \": \", DEVELOPER_NAME));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (HomePage);\n\n//# sourceURL=webpack:///./src/client/components/home-page/home-page.js?");

/***/ }),

/***/ "./src/client/components/space-program-card/space-program-card.css":
/*!*************************************************************************!*\
  !*** ./src/client/components/space-program-card/space-program-card.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/client/components/space-program-card/space-program-card.css?");

/***/ }),

/***/ "./src/client/components/space-program-card/space-program-card.js":
/*!************************************************************************!*\
  !*** ./src/client/components/space-program-card/space-program-card.js ***!
  \************************************************************************/
/*! exports provided: loadDataSSR, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"loadDataSSR\", function() { return loadDataSSR; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _space_program_card_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./space-program-card.css */ \"./src/client/components/space-program-card/space-program-card.css\");\n/* harmony import */ var _space_program_card_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_space_program_card_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles.css */ \"./src/client/components/styles.css\");\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _card_image_card_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../card-image/card-image */ \"./src/client/components/card-image/card-image.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _store_actions_space_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../store/actions/space-data */ \"./src/client/store/actions/space-data.js\");\n\n\n\n\n\n\nvar MISSION_IDS = \"Mission Ids:\";\nvar LAUNCH_YEAR = \"Launch Year:\";\nvar SUCCESSFULL_LAUNCH = \"Successful Launch:\";\nvar SUCCESSFULL_LANDING = \"Successful Landing:\";\n\nvar CardDetails = function CardDetails(props) {\n  var missionIds = [];\n\n  if (props.missionIds.length > 0) {\n    missionIds = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"ul\", {\n      className: \"mr0\"\n    }, props.missionIds.map(function (missionId, index) {\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", {\n        key: index\n      }, missionId);\n    }));\n  }\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"mb_12\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h3\", {\n    className: \"card-heading mb_12 mr_4\"\n  }, MISSION_IDS), missionIds), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"fr mb_12 alIc\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h3\", {\n    className: \"card-heading mr0 mr_4\"\n  }, LAUNCH_YEAR), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", {\n    className: \"card-value key-color\"\n  }, props.launchYear)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"fr mb_12 alIc\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h3\", {\n    className: \"card-heading mr0 mr_4\"\n  }, SUCCESSFULL_LAUNCH), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", {\n    className: \"card-value key-color\"\n  }, \"\".concat(props.successfulLaunch))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"fr mb_12 alIc\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h3\", {\n    className: \"card-heading mr0 mr_4\"\n  }, SUCCESSFULL_LANDING), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", {\n    className: \"card-value key-color\"\n  }, \"\".concat(props.successfulLanding))));\n};\n\nvar SpaceProgramCard = function SpaceProgramCard(props) {\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    props.getFilteredData(props.filters);\n  }, [props.filters]);\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"fr fwrap\"\n  }, props.cardData.length > 0 && props.cardData.map(function (card, index) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: \"card fs_18 frc width_mobile\",\n      key: index\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_card_image_card_image__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n      missionName: card.mission_name,\n      flightNumber: card.flight_number,\n      imageLink: card.links.mission_patch\n    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(CardDetails, {\n      missionIds: card.mission_id,\n      launchYear: card.launch_year,\n      successfulLaunch: card.launch_success,\n      successfulLanding: card.land_success\n    }));\n  }));\n};\n\nvar mapStateToProps = function mapStateToProps(state) {\n  return {\n    cardData: state.spaceDataReducer.cardData || [],\n    filters: state.spaceDataReducer.filters || {}\n  };\n};\n\nvar mapDispatchToProps = function mapDispatchToProps(dispatch) {\n  return {\n    getFilteredData: function getFilteredData(filters) {\n      return dispatch(Object(_store_actions_space_data__WEBPACK_IMPORTED_MODULE_5__[\"fetchFilteredData\"])(filters));\n    }\n  };\n};\n\nvar loadDataSSR = function loadDataSSR(store, queryParams) {\n  return store.dispatch(Object(_store_actions_space_data__WEBPACK_IMPORTED_MODULE_5__[\"fetchFilteredDataSSR\"])(queryParams));\n};\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_4__[\"connect\"])(mapStateToProps, mapDispatchToProps)(SpaceProgramCard));\n\n//# sourceURL=webpack:///./src/client/components/space-program-card/space-program-card.js?");

/***/ }),

/***/ "./src/client/components/styles.css":
/*!******************************************!*\
  !*** ./src/client/components/styles.css ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/client/components/styles.css?");

/***/ }),

/***/ "./src/client/helpers/createStore.js":
/*!*******************************************!*\
  !*** ./src/client/helpers/createStore.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ \"redux\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-thunk */ \"redux-thunk\");\n/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_thunk__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _store_reducers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../store/reducers */ \"./src/client/store/reducers/index.js\");\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function () {\n  var store = Object(redux__WEBPACK_IMPORTED_MODULE_0__[\"createStore\"])(_store_reducers__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, Object(redux__WEBPACK_IMPORTED_MODULE_0__[\"applyMiddleware\"])(redux_thunk__WEBPACK_IMPORTED_MODULE_1___default.a));\n  return store;\n});\n\n//# sourceURL=webpack:///./src/client/helpers/createStore.js?");

/***/ }),

/***/ "./src/client/helpers/renderer.js":
/*!****************************************!*\
  !*** ./src/client/helpers/renderer.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_router_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-config */ \"react-router-config\");\n/* harmony import */ var react_router_config__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_router_config__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../routes */ \"./routes.js\");\n/* harmony import */ var serialize_javascript__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! serialize-javascript */ \"serialize-javascript\");\n/* harmony import */ var serialize_javascript__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(serialize_javascript__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-helmet */ \"react-helmet\");\n/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_7__);\n\n\n\n\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (req, store) {\n  var content = Object(react_dom_server__WEBPACK_IMPORTED_MODULE_1__[\"renderToString\"])( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_redux__WEBPACK_IMPORTED_MODULE_3__[\"Provider\"], {\n    store: store\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__[\"StaticRouter\"], {\n    location: req.path,\n    context: {}\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, Object(react_router_config__WEBPACK_IMPORTED_MODULE_4__[\"renderRoutes\"])(_routes__WEBPACK_IMPORTED_MODULE_5__[\"default\"])))));\n  var helmet = react_helmet__WEBPACK_IMPORTED_MODULE_7__[\"Helmet\"].renderStatic();\n  return \"\\n     <html>\\n      <head>\\n        <meta name=\\\"viewport\\\" content=\\\"width=device-width,initial-scale=1.0\\\">\\n        <link rel=\\\"stylesheet\\\" type=\\\"text/css\\\" href=\\\"./styles.css\\\"/>\\n        \".concat(helmet.title.toString(), \"\\n        \").concat(helmet.meta.toString(), \"\\n      </head>\\n      <body>\\n        <div id=\\\"root\\\">\").concat(content, \"</div>\\n        <script>\\n          window.INITIAL_STATE = \").concat(serialize_javascript__WEBPACK_IMPORTED_MODULE_6___default()(store.getState()), \"\\n        </script>\\n        <script src=\\\"bundle.js\\\"></script>\\n      </body>\\n    </html>\\n     \");\n});\n\n//# sourceURL=webpack:///./src/client/helpers/renderer.js?");

/***/ }),

/***/ "./src/client/store/actions/space-data.js":
/*!************************************************!*\
  !*** ./src/client/store/actions/space-data.js ***!
  \************************************************/
/*! exports provided: FILTERED_SPACE_DATA, SET_FILTERS, REMOVE_FILTER, SET_SSR_FILTERS, SET_DATA_SSR, receive_filteredData, createAPIString, fetchFilteredData, setFilter, removeFilter, fetchFilteredDataSSR */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"FILTERED_SPACE_DATA\", function() { return FILTERED_SPACE_DATA; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SET_FILTERS\", function() { return SET_FILTERS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"REMOVE_FILTER\", function() { return REMOVE_FILTER; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SET_SSR_FILTERS\", function() { return SET_SSR_FILTERS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SET_DATA_SSR\", function() { return SET_DATA_SSR; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"receive_filteredData\", function() { return receive_filteredData; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createAPIString\", function() { return createAPIString; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"fetchFilteredData\", function() { return fetchFilteredData; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"setFilter\", function() { return setFilter; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"removeFilter\", function() { return removeFilter; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"fetchFilteredDataSSR\", function() { return fetchFilteredDataSSR; });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\n\nvar FILTERED_SPACE_DATA = \"FILTERED_SPACE_DATA\";\nvar SET_FILTERS = \"SET_FILTERS\";\nvar REMOVE_FILTER = \"REMOVE_FILTER\";\nvar SET_SSR_FILTERS = \"SET_SSR_FILTERS\";\nvar SET_DATA_SSR = \"SET_DATA_SSR\";\nvar receive_filteredData = function receive_filteredData(filteredCardData) {\n  return {\n    type: FILTERED_SPACE_DATA,\n    data: filteredCardData\n  };\n};\nvar createAPIString = function createAPIString() {\n  var filters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};\n  var string = '';\n  Object.keys(filters).map(function (key) {\n    string = string + \"&\".concat(key, \"=\").concat(filters[key]);\n  });\n  return string;\n};\nvar fetchFilteredData = function fetchFilteredData(filters) {\n  return /*#__PURE__*/function () {\n    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(dispatch) {\n      var apiString, res;\n      return regeneratorRuntime.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              apiString = createAPIString(filters);\n              _context.next = 3;\n              return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(\"https://api.spacexdata.com/v3/launches?limit=100\".concat(apiString));\n\n            case 3:\n              res = _context.sent;\n              dispatch(receive_filteredData(res.data, filters));\n\n            case 5:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }));\n\n    return function (_x) {\n      return _ref.apply(this, arguments);\n    };\n  }();\n};\nvar setFilter = function setFilter(key, value) {\n  return {\n    type: SET_FILTERS,\n    payload: {\n      key: key,\n      value: value\n    }\n  };\n};\nvar removeFilter = function removeFilter(key) {\n  return {\n    type: REMOVE_FILTER,\n    payload: key\n  };\n};\nvar fetchFilteredDataSSR = function fetchFilteredDataSSR(filters) {\n  return /*#__PURE__*/function () {\n    var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(dispatch) {\n      var apiString, res;\n      return regeneratorRuntime.wrap(function _callee2$(_context2) {\n        while (1) {\n          switch (_context2.prev = _context2.next) {\n            case 0:\n              apiString = createAPIString(filters);\n              _context2.next = 3;\n              return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(\"https://api.spacexdata.com/v3/launches?limit=100\".concat(apiString));\n\n            case 3:\n              res = _context2.sent;\n              dispatch({\n                type: SET_DATA_SSR,\n                payload: {\n                  data: res.data,\n                  filters: filters\n                }\n              });\n\n            case 5:\n            case \"end\":\n              return _context2.stop();\n          }\n        }\n      }, _callee2);\n    }));\n\n    return function (_x2) {\n      return _ref2.apply(this, arguments);\n    };\n  }();\n};\n\n//# sourceURL=webpack:///./src/client/store/actions/space-data.js?");

/***/ }),

/***/ "./src/client/store/reducers/index.js":
/*!********************************************!*\
  !*** ./src/client/store/reducers/index.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ \"redux\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _space_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./space-data */ \"./src/client/store/reducers/space-data.js\");\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(redux__WEBPACK_IMPORTED_MODULE_0__[\"combineReducers\"])({\n  spaceDataReducer: _space_data__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\n}));\n\n//# sourceURL=webpack:///./src/client/store/reducers/index.js?");

/***/ }),

/***/ "./src/client/store/reducers/space-data.js":
/*!*************************************************!*\
  !*** ./src/client/store/reducers/space-data.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _actions_space_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/space-data */ \"./src/client/store/actions/space-data.js\");\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\nvar initialState = {\n  cardData: [],\n  filters: {}\n};\n\nvar spaceData = function spaceData() {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;\n  var action = arguments.length > 1 ? arguments[1] : undefined;\n\n  switch (action.type) {\n    case _actions_space_data__WEBPACK_IMPORTED_MODULE_0__[\"FILTERED_SPACE_DATA\"]:\n      return _objectSpread(_objectSpread({}, state), {}, {\n        cardData: action.data\n      });\n\n    case _actions_space_data__WEBPACK_IMPORTED_MODULE_0__[\"SET_FILTERS\"]:\n      return _objectSpread(_objectSpread({}, state), {}, {\n        filters: _objectSpread(_objectSpread({}, state.filters), {}, _defineProperty({}, action.payload.key, action.payload.value))\n      });\n\n    case _actions_space_data__WEBPACK_IMPORTED_MODULE_0__[\"REMOVE_FILTER\"]:\n      var modifiedFilters = _objectSpread({}, state.filters);\n\n      delete modifiedFilters[action.payload];\n      return _objectSpread(_objectSpread({}, state), {}, {\n        filters: modifiedFilters\n      });\n\n    case _actions_space_data__WEBPACK_IMPORTED_MODULE_0__[\"SET_DATA_SSR\"]:\n      return _objectSpread(_objectSpread({}, state), {}, {\n        filters: _objectSpread({}, action.payload.filters),\n        cardData: action.payload.data\n      });\n\n    default:\n      return state;\n  }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (spaceData);\n\n//# sourceURL=webpack:///./src/client/store/reducers/space-data.js?");

/***/ }),

/***/ "./src/server/index.js":
/*!*****************************!*\
  !*** ./src/server/index.js ***!
  \*****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var babel_polyfill__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-polyfill */ \"babel-polyfill\");\n/* harmony import */ var babel_polyfill__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_polyfill__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _client_helpers_renderer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../client/helpers/renderer */ \"./src/client/helpers/renderer.js\");\n/* harmony import */ var _client_helpers_createStore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../client/helpers/createStore */ \"./src/client/helpers/createStore.js\");\n/* harmony import */ var react_router_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-config */ \"react-router-config\");\n/* harmony import */ var react_router_config__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_router_config__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../routes */ \"./routes.js\");\n\n\n\n\n\n\nvar app = express__WEBPACK_IMPORTED_MODULE_1___default()();\napp.use(express__WEBPACK_IMPORTED_MODULE_1___default.a[\"static\"](\"public\"));\napp.get(\"*\", function (req, res) {\n  var store = Object(_client_helpers_createStore__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n  var promises = Object(react_router_config__WEBPACK_IMPORTED_MODULE_4__[\"matchRoutes\"])(_routes__WEBPACK_IMPORTED_MODULE_5__[\"default\"], req.path).map(function (_ref) {\n    var route = _ref.route;\n    return route.loadDataSSR ? route.loadDataSSR(store, req.query) : null;\n  });\n  Promise.all(promises).then(function () {\n    res.send(Object(_client_helpers_renderer__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(req, store));\n  });\n});\napp.listen(3000, function () {\n  console.log(\"Listening to port 3000\");\n});\n\n//# sourceURL=webpack:///./src/server/index.js?");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"axios\");\n\n//# sourceURL=webpack:///external_%22axios%22?");

/***/ }),

/***/ "babel-polyfill":
/*!*********************************!*\
  !*** external "babel-polyfill" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"babel-polyfill\");\n\n//# sourceURL=webpack:///external_%22babel-polyfill%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");\n\n//# sourceURL=webpack:///external_%22react%22?");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-dom/server\");\n\n//# sourceURL=webpack:///external_%22react-dom/server%22?");

/***/ }),

/***/ "react-helmet":
/*!*******************************!*\
  !*** external "react-helmet" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-helmet\");\n\n//# sourceURL=webpack:///external_%22react-helmet%22?");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-redux\");\n\n//# sourceURL=webpack:///external_%22react-redux%22?");

/***/ }),

/***/ "react-router":
/*!*******************************!*\
  !*** external "react-router" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-router\");\n\n//# sourceURL=webpack:///external_%22react-router%22?");

/***/ }),

/***/ "react-router-config":
/*!**************************************!*\
  !*** external "react-router-config" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-router-config\");\n\n//# sourceURL=webpack:///external_%22react-router-config%22?");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-router-dom\");\n\n//# sourceURL=webpack:///external_%22react-router-dom%22?");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux\");\n\n//# sourceURL=webpack:///external_%22redux%22?");

/***/ }),

/***/ "redux-thunk":
/*!******************************!*\
  !*** external "redux-thunk" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux-thunk\");\n\n//# sourceURL=webpack:///external_%22redux-thunk%22?");

/***/ }),

/***/ "serialize-javascript":
/*!***************************************!*\
  !*** external "serialize-javascript" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"serialize-javascript\");\n\n//# sourceURL=webpack:///external_%22serialize-javascript%22?");

/***/ })

/******/ });