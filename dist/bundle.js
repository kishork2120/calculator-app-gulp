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
/******/ 	return __webpack_require__(__webpack_require__.s = "./js/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js/index.js":
/*!*********************!*\
  !*** ./js/index.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var string_math__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! string-math */ \"./node_modules/string-math/string-math.js\");\n/* harmony import */ var string_math__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(string_math__WEBPACK_IMPORTED_MODULE_0__);\n// const stringmath = require('string-math');\n\n\nwindow.onload = function () {\n  // adding event listeners to all buttons in the page\n  document.querySelectorAll('button').forEach(function (element) {\n    element.addEventListener('click', function (event) {\n      console.log(string_math__WEBPACK_IMPORTED_MODULE_0___default()('2+2'));\n    });\n  });\n};\n\n//# sourceURL=webpack:///./js/index.js?");

/***/ }),

/***/ "./node_modules/string-math/string-math.js":
/*!*************************************************!*\
  !*** ./node_modules/string-math/string-math.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("function stringMath(eq, callback) {\r\n  if (typeof eq !== 'string') return handleCallback(new TypeError('The [String] argument is expected.'), null);\r\n  const mulDiv = /([+-]?\\d*\\.?\\d+(?:e[+-]\\d+)?)\\s*([*/])\\s*([+-]?\\d*\\.?\\d+(?:e[+-]\\d+)?)/;\r\n  const plusMin = /([+-]?\\d*\\.?\\d+(?:e[+-]\\d+)?)\\s*([+-])\\s*([+-]?\\d*\\.?\\d+(?:e[+-]\\d+)?)/;\r\n  const parentheses = /(\\d)?\\s*\\(([^()]*)\\)\\s*/;\r\n  var current;\r\n  while (eq.search(/^\\s*([+-]?\\d*\\.?\\d+(?:e[+-]\\d+)?)\\s*$/) === -1) {\r\n    eq = fParentheses(eq);\r\n    if (eq === current) return handleCallback(new SyntaxError('The equation is invalid.'), null);\r\n    current = eq;\r\n  }\r\n  return handleCallback(null, +eq);\r\n\r\n  function fParentheses(eq) {\r\n    while (eq.search(parentheses) !== -1) {\r\n      eq = eq.replace(parentheses, function (a, b, c) {\r\n        c = fMulDiv(c);\r\n        c = fPlusMin(c);\r\n        return typeof b === 'string' ? b + '*' + c : c;\r\n      });\r\n    }\r\n    eq = fMulDiv(eq);\r\n    eq = fPlusMin(eq);\r\n    return eq;\r\n  }\r\n\r\n  function fMulDiv(eq) {\r\n    while (eq.search(mulDiv) !== -1) {\r\n      eq = eq.replace(mulDiv, function (a) {\r\n        const sides = mulDiv.exec(a);\r\n        const result = sides[2] === '*' ? sides[1] * sides[3] : sides[1] / sides[3];\r\n        return result >= 0 ? '+' + result : result;\r\n      });\r\n    }\r\n    return eq;\r\n  }\r\n\r\n  function fPlusMin(eq) {\r\n    eq = eq.replace(/([+-])([+-])(\\d|\\.)/g, function (a, b, c, d) { return (b === c ? '+' : '-') + d; });\r\n    while (eq.search(plusMin) !== -1) {\r\n      eq = eq.replace(plusMin, function (a) {\r\n        const sides = plusMin.exec(a);\r\n        return sides[2] === '+' ? +sides[1] + +sides[3] : sides[1] - sides[3];\r\n      });\r\n    }\r\n    return eq;\r\n  }\r\n\r\n  function handleCallback(errObject, result) {\r\n    if (typeof callback !== 'function') {\r\n      if (errObject !== null) throw errObject;\r\n    } else {\r\n      callback(errObject, result);\r\n    }\r\n    return result;\r\n\r\n  }\r\n\r\n}\r\n\r\nif ( true && module.exports) {\r\n  module.exports = stringMath;\r\n}\n\n//# sourceURL=webpack:///./node_modules/string-math/string-math.js?");

/***/ })

/******/ });