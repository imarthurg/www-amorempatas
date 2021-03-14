webpackHotUpdate_N_E("pages/index",{

/***/ "./components/AnimalCard/index.js":
/*!****************************************!*\
  !*** ./components/AnimalCard/index.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return AnimalCard; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles.module.css */ \"./components/AnimalCard/styles.module.css\");\n/* harmony import */ var _styles_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_module_css__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _jsxFileName = \"/home/arthur/Documents/Arthur/projects/www-amorempatas/components/AnimalCard/index.js\";\n\n\nvar getDescription = function getDescription(size, age) {\n  return \"porte \".concat(size, \", \").concat(age, \" \").concat(age > 1 ? 'anos' : 'ano');\n};\n\nvar tagsMock = ['is_vaccinated', 'is_castrated', 'has_deficiency'];\nfunction AnimalCard(_ref) {\n  var imgSrc = _ref.imgSrc,\n      imgAlt = _ref.imgAlt,\n      name = _ref.name,\n      _ref$size = _ref.size,\n      size = _ref$size === void 0 ? 'pequeno' : _ref$size,\n      _ref$age = _ref.age,\n      age = _ref$age === void 0 ? 10 : _ref$age;\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: _styles_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.container,\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: _styles_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.image_container,\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n        src: imgSrc,\n        alt: imgAlt\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 13,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: _styles_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.body_container,\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n        className: _styles_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.name,\n        children: name\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 16,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n        className: _styles_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.description,\n        children: getDescription(size, age)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 17,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: _styles_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.tags\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 18,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 11,\n    columnNumber: 5\n  }, this);\n}\n_c = AnimalCard;\n\nvar _c;\n\n$RefreshReg$(_c, \"AnimalCard\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9BbmltYWxDYXJkL2luZGV4LmpzPzJjMDgiXSwibmFtZXMiOlsiZ2V0RGVzY3JpcHRpb24iLCJzaXplIiwiYWdlIiwidGFnc01vY2siLCJBbmltYWxDYXJkIiwiaW1nU3JjIiwiaW1nQWx0IiwibmFtZSIsInN0eWxlcyIsImNvbnRhaW5lciIsImltYWdlX2NvbnRhaW5lciIsImJvZHlfY29udGFpbmVyIiwiZGVzY3JpcHRpb24iLCJ0YWdzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOztBQUVBLElBQU1BLGNBQWMsR0FBRyxTQUFqQkEsY0FBaUIsQ0FBQ0MsSUFBRCxFQUFPQyxHQUFQLEVBQWU7QUFDcEMseUJBQWdCRCxJQUFoQixlQUF5QkMsR0FBekIsY0FBZ0NBLEdBQUcsR0FBRyxDQUFOLEdBQVUsTUFBVixHQUFtQixLQUFuRDtBQUNELENBRkQ7O0FBSUEsSUFBTUMsUUFBUSxHQUFHLENBQUMsZUFBRCxFQUFrQixjQUFsQixFQUFrQyxnQkFBbEMsQ0FBakI7QUFFZSxTQUFTQyxVQUFULE9BQTBFO0FBQUEsTUFBcERDLE1BQW9ELFFBQXBEQSxNQUFvRDtBQUFBLE1BQTVDQyxNQUE0QyxRQUE1Q0EsTUFBNEM7QUFBQSxNQUFwQ0MsSUFBb0MsUUFBcENBLElBQW9DO0FBQUEsdUJBQTlCTixJQUE4QjtBQUFBLE1BQTlCQSxJQUE4QiwwQkFBdkIsU0FBdUI7QUFBQSxzQkFBWkMsR0FBWTtBQUFBLE1BQVpBLEdBQVkseUJBQU4sRUFBTTtBQUN2RixzQkFDRTtBQUFLLGFBQVMsRUFBRU0seURBQU0sQ0FBQ0MsU0FBdkI7QUFBQSw0QkFDRTtBQUFLLGVBQVMsRUFBRUQseURBQU0sQ0FBQ0UsZUFBdkI7QUFBQSw2QkFDRTtBQUFLLFdBQUcsRUFBRUwsTUFBVjtBQUFrQixXQUFHLEVBQUVDO0FBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUFJRTtBQUFLLGVBQVMsRUFBRUUseURBQU0sQ0FBQ0csY0FBdkI7QUFBQSw4QkFDRTtBQUFHLGlCQUFTLEVBQUVILHlEQUFNLENBQUNELElBQXJCO0FBQUEsa0JBQTRCQTtBQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFFRTtBQUFHLGlCQUFTLEVBQUVDLHlEQUFNLENBQUNJLFdBQXJCO0FBQUEsa0JBQW1DWixjQUFjLENBQUNDLElBQUQsRUFBT0MsR0FBUDtBQUFqRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkYsZUFHRTtBQUFLLGlCQUFTLEVBQUVNLHlEQUFNLENBQUNLO0FBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FIRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQVlEO0tBYnVCVCxVIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9BbmltYWxDYXJkL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlcyBmcm9tICcuL3N0eWxlcy5tb2R1bGUuY3NzJztcblxuY29uc3QgZ2V0RGVzY3JpcHRpb24gPSAoc2l6ZSwgYWdlKSA9PiB7XG4gIHJldHVybiBgcG9ydGUgJHtzaXplfSwgJHthZ2V9ICR7YWdlID4gMSA/ICdhbm9zJyA6ICdhbm8nfWBcbn1cblxuY29uc3QgdGFnc01vY2sgPSBbJ2lzX3ZhY2NpbmF0ZWQnLCAnaXNfY2FzdHJhdGVkJywgJ2hhc19kZWZpY2llbmN5J107XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFuaW1hbENhcmQoeyBpbWdTcmMsIGltZ0FsdCwgbmFtZSwgc2l6ZSA9ICdwZXF1ZW5vJywgYWdlID0gMTAgfSkge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaW1hZ2VfY29udGFpbmVyfT5cbiAgICAgICAgPGltZyBzcmM9e2ltZ1NyY30gYWx0PXtpbWdBbHR9IC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYm9keV9jb250YWluZXJ9PlxuICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5uYW1lfT57bmFtZX08L3A+XG4gICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLmRlc2NyaXB0aW9ufT57Z2V0RGVzY3JpcHRpb24oc2l6ZSwgYWdlKX08L3A+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudGFnc30+PC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/AnimalCard/index.js\n");

/***/ })

})