webpackHotUpdate_N_E("pages/index",{

/***/ "./components/AnimalList/index.js":
/*!****************************************!*\
  !*** ./components/AnimalList/index.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return AnimalList; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _AnimalCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../AnimalCard */ \"./components/AnimalCard/index.js\");\n/* harmony import */ var _components_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/Button */ \"./components/Button/index.js\");\n/* harmony import */ var _styles_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles.module.css */ \"./components/AnimalList/styles.module.css\");\n/* harmony import */ var _styles_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_module_css__WEBPACK_IMPORTED_MODULE_4__);\n\n\nvar _jsxFileName = \"/home/arthur/Documents/Arthur/projects/www-amorempatas/components/AnimalList/index.js\",\n    _s = $RefreshSig$();\n\n\n\n\n\nvar animals = [{\n  name: 'Pedro1',\n  type: 'dog'\n}, {\n  name: 'Pluto2',\n  type: 'dog'\n}, {\n  name: 'Pluto3',\n  type: 'dog'\n}, {\n  name: 'Pluto4',\n  type: 'dog'\n}];\nvar categories = [{\n  label: 'Cachorros',\n  icon: '#'\n}, {\n  label: 'Gatos',\n  icon: '#'\n}];\nfunction AnimalList() {\n  _s();\n\n  var _this = this;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(''),\n      selectedCategory = _useState[0],\n      setSelectedCategory = _useState[1];\n\n  var selectCategory = function selectCategory(category) {\n    setSelectedCategory(category);\n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: _styles_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.container,\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: _styles_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.categories_container,\n      children: categories.map(function (_ref) {\n        var label = _ref.label,\n            icon = _ref.icon;\n        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_Button__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n          className: _styles_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.categories_container_button,\n          status: selectedCategory === label && 'primary',\n          handleClick: function handleClick() {\n            return selectCategory(label);\n          },\n          children: label\n        }, label, false, {\n          fileName: _jsxFileName,\n          lineNumber: 41,\n          columnNumber: 11\n        }, _this);\n      })\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 7\n    }, this), animals.map(function (_ref2) {\n      var name = _ref2.name;\n      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_AnimalCard__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        name: name\n      }, name, false, {\n        fileName: _jsxFileName,\n        lineNumber: 52,\n        columnNumber: 9\n      }, _this);\n    })]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 38,\n    columnNumber: 5\n  }, this);\n}\n\n_s(AnimalList, \"hZ4MX+AA/e6j0vZ5cP0SO+qrH/o=\");\n\n_c = AnimalList;\n\nvar _c;\n\n$RefreshReg$(_c, \"AnimalList\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9BbmltYWxMaXN0L2luZGV4LmpzPzE5NjgiXSwibmFtZXMiOlsiYW5pbWFscyIsIm5hbWUiLCJ0eXBlIiwiY2F0ZWdvcmllcyIsImxhYmVsIiwiaWNvbiIsIkFuaW1hbExpc3QiLCJ1c2VTdGF0ZSIsInNlbGVjdGVkQ2F0ZWdvcnkiLCJzZXRTZWxlY3RlZENhdGVnb3J5Iiwic2VsZWN0Q2F0ZWdvcnkiLCJjYXRlZ29yeSIsInN0eWxlcyIsImNvbnRhaW5lciIsImNhdGVnb3JpZXNfY29udGFpbmVyIiwibWFwIiwiY2F0ZWdvcmllc19jb250YWluZXJfYnV0dG9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUVBLElBQU1BLE9BQU8sR0FBRyxDQUNkO0FBQ0VDLE1BQUksRUFBRSxRQURSO0FBRUVDLE1BQUksRUFBRTtBQUZSLENBRGMsRUFLZDtBQUNFRCxNQUFJLEVBQUUsUUFEUjtBQUVFQyxNQUFJLEVBQUU7QUFGUixDQUxjLEVBU2Q7QUFDRUQsTUFBSSxFQUFFLFFBRFI7QUFFRUMsTUFBSSxFQUFFO0FBRlIsQ0FUYyxFQWFkO0FBQ0VELE1BQUksRUFBRSxRQURSO0FBRUVDLE1BQUksRUFBRTtBQUZSLENBYmMsQ0FBaEI7QUFtQkEsSUFBTUMsVUFBVSxHQUFHLENBQ2pCO0FBQUVDLE9BQUssRUFBRSxXQUFUO0FBQXNCQyxNQUFJLEVBQUU7QUFBNUIsQ0FEaUIsRUFFakI7QUFBRUQsT0FBSyxFQUFFLE9BQVQ7QUFBa0JDLE1BQUksRUFBRTtBQUF4QixDQUZpQixDQUFuQjtBQUtlLFNBQVNDLFVBQVQsR0FBc0I7QUFBQTs7QUFBQTs7QUFBQSxrQkFDYUMsc0RBQVEsQ0FBQyxFQUFELENBRHJCO0FBQUEsTUFDNUJDLGdCQUQ0QjtBQUFBLE1BQ1ZDLG1CQURVOztBQUduQyxNQUFNQyxjQUFjLEdBQUcsU0FBakJBLGNBQWlCLENBQUNDLFFBQUQsRUFBYztBQUNuQ0YsdUJBQW1CLENBQUNFLFFBQUQsQ0FBbkI7QUFDRCxHQUZEOztBQUdBLHNCQUNFO0FBQUssYUFBUyxFQUFFQyx5REFBTSxDQUFDQyxTQUF2QjtBQUFBLDRCQUNFO0FBQUssZUFBUyxFQUFFRCx5REFBTSxDQUFDRSxvQkFBdkI7QUFBQSxnQkFDR1gsVUFBVSxDQUFDWSxHQUFYLENBQWU7QUFBQSxZQUFHWCxLQUFILFFBQUdBLEtBQUg7QUFBQSxZQUFVQyxJQUFWLFFBQVVBLElBQVY7QUFBQSw0QkFDZCxxRUFBQywwREFBRDtBQUVFLG1CQUFTLEVBQUVPLHlEQUFNLENBQUNJLDJCQUZwQjtBQUdFLGdCQUFNLEVBQUVSLGdCQUFnQixLQUFLSixLQUFyQixJQUE4QixTQUh4QztBQUlFLHFCQUFXLEVBQUU7QUFBQSxtQkFBTU0sY0FBYyxDQUFDTixLQUFELENBQXBCO0FBQUEsV0FKZjtBQUFBLG9CQU1HQTtBQU5ILFdBQ09BLEtBRFA7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFEYztBQUFBLE9BQWY7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsRUFhR0osT0FBTyxDQUFDZSxHQUFSLENBQVk7QUFBQSxVQUFHZCxJQUFILFNBQUdBLElBQUg7QUFBQSwwQkFDWCxxRUFBQyxtREFBRDtBQUF1QixZQUFJLEVBQUVBO0FBQTdCLFNBQWlCQSxJQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRFc7QUFBQSxLQUFaLENBYkg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFtQkQ7O0dBekJ1QkssVTs7S0FBQUEsVSIsImZpbGUiOiIuL2NvbXBvbmVudHMvQW5pbWFsTGlzdC9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IEFuaW1hbENhcmQgZnJvbSAnLi4vQW5pbWFsQ2FyZCc7XG5pbXBvcnQgQnV0dG9uIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvQnV0dG9uJztcblxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL3N0eWxlcy5tb2R1bGUuY3NzJztcblxuY29uc3QgYW5pbWFscyA9IFtcbiAge1xuICAgIG5hbWU6ICdQZWRybzEnLFxuICAgIHR5cGU6ICdkb2cnLFxuICB9LFxuICB7XG4gICAgbmFtZTogJ1BsdXRvMicsXG4gICAgdHlwZTogJ2RvZycsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiAnUGx1dG8zJyxcbiAgICB0eXBlOiAnZG9nJyxcbiAgfSxcbiAge1xuICAgIG5hbWU6ICdQbHV0bzQnLFxuICAgIHR5cGU6ICdkb2cnLFxuICB9LFxuXTtcblxuY29uc3QgY2F0ZWdvcmllcyA9IFtcbiAgeyBsYWJlbDogJ0NhY2hvcnJvcycsIGljb246ICcjJyB9LFxuICB7IGxhYmVsOiAnR2F0b3MnLCBpY29uOiAnIycgfSxcbl07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFuaW1hbExpc3QoKSB7XG4gIGNvbnN0IFtzZWxlY3RlZENhdGVnb3J5LCBzZXRTZWxlY3RlZENhdGVnb3J5XSA9IHVzZVN0YXRlKCcnKTtcblxuICBjb25zdCBzZWxlY3RDYXRlZ29yeSA9IChjYXRlZ29yeSkgPT4ge1xuICAgIHNldFNlbGVjdGVkQ2F0ZWdvcnkoY2F0ZWdvcnkpO1xuICB9O1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY2F0ZWdvcmllc19jb250YWluZXJ9PlxuICAgICAgICB7Y2F0ZWdvcmllcy5tYXAoKHsgbGFiZWwsIGljb24gfSkgPT4gKFxuICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgIGtleT17bGFiZWx9XG4gICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5jYXRlZ29yaWVzX2NvbnRhaW5lcl9idXR0b259XG4gICAgICAgICAgICBzdGF0dXM9e3NlbGVjdGVkQ2F0ZWdvcnkgPT09IGxhYmVsICYmICdwcmltYXJ5J31cbiAgICAgICAgICAgIGhhbmRsZUNsaWNrPXsoKSA9PiBzZWxlY3RDYXRlZ29yeShsYWJlbCl9XG4gICAgICAgICAgPlxuICAgICAgICAgICAge2xhYmVsfVxuICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICApKX1cbiAgICAgIDwvZGl2PlxuICAgICAge2FuaW1hbHMubWFwKCh7IG5hbWUgfSkgPT4gKFxuICAgICAgICA8QW5pbWFsQ2FyZCBrZXk9e25hbWV9IG5hbWU9e25hbWV9IC8+XG4gICAgICApKX1cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/AnimalList/index.js\n");

/***/ })

})