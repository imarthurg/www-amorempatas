webpackHotUpdate_N_E("pages/quem-somos",{

/***/ "./components/NavLink/index.js":
/*!*************************************!*\
  !*** ./components/NavLink/index.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return NavLink; });\n/* harmony import */ var _home_arthur_Documents_Arthur_projects_www_amorempatas_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _home_arthur_Documents_Arthur_projects_www_amorempatas_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties */ \"./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js\");\n/* harmony import */ var _styles_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles.module.css */ \"./components/NavLink/styles.module.css\");\n/* harmony import */ var _styles_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_module_css__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\nvar _jsxFileName = \"/home/arthur/Documents/Arthur/projects/www-amorempatas/components/NavLink/index.js\";\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_home_arthur_Documents_Arthur_projects_www_amorempatas_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\nfunction NavLink(_ref) {\n  var children = _ref.children,\n      props = Object(_home_arthur_Documents_Arthur_projects_www_amorempatas_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_ref, [\"children\"]);\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(Link, {\n    href: href,\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"a\", _objectSpread(_objectSpread({}, props), {}, {\n      className: _styles_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.link,\n      children: children\n    }), void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 6,\n      columnNumber: 7\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 5,\n    columnNumber: 5\n  }, this);\n}\n_c = NavLink;\n\nvar _c;\n\n$RefreshReg$(_c, \"NavLink\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9OYXZMaW5rL2luZGV4LmpzPzBjNDIiXSwibmFtZXMiOlsiTmF2TGluayIsImNoaWxkcmVuIiwicHJvcHMiLCJocmVmIiwic3R5bGVzIiwibGluayJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVlLFNBQVNBLE9BQVQsT0FBeUM7QUFBQSxNQUF0QkMsUUFBc0IsUUFBdEJBLFFBQXNCO0FBQUEsTUFBVEMsS0FBUzs7QUFDdEQsc0JBQ0UscUVBQUMsSUFBRDtBQUFNLFFBQUksRUFBRUMsSUFBWjtBQUFBLDJCQUNFLDBHQUFPRCxLQUFQO0FBQWMsZUFBUyxFQUFFRSx5REFBTSxDQUFDQyxJQUFoQztBQUFBLGdCQUNHSjtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFPRDtLQVJ1QkQsTyIsImZpbGUiOiIuL2NvbXBvbmVudHMvTmF2TGluay9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZXMgZnJvbSAnLi9zdHlsZXMubW9kdWxlLmNzcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE5hdkxpbmsoeyBjaGlsZHJlbiwgLi4ucHJvcHMgfSkge1xuICByZXR1cm4gKFxuICAgIDxMaW5rIGhyZWY9e2hyZWZ9PlxuICAgICAgPGEgey4uLnByb3BzfSBjbGFzc05hbWU9e3N0eWxlcy5saW5rfT5cbiAgICAgICAge2NoaWxkcmVufVxuICAgICAgPC9hPlxuICAgIDwvTGluaz5cbiAgKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/NavLink/index.js\n");

/***/ })

})