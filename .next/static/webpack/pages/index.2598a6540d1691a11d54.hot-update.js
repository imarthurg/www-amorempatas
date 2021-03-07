webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Home; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Button */ \"./components/Button/index.js\");\n/* harmony import */ var _components_CommingSoon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/CommingSoon */ \"./components/CommingSoon/index.js\");\n/* harmony import */ var _components_Page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Page */ \"./components/Page/index.js\");\n/* harmony import */ var _components_PageSection__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/PageSection */ \"./components/PageSection/index.js\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6__);\n\n\nvar _jsxFileName = \"/home/arthur/Documents/Arthur/projects/www-amorempatas/pages/index.js\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\nvar categories = [{\n  label: 'Cachorros',\n  icon: '#'\n}, {\n  label: 'Gatos',\n  icon: '#'\n}];\nfunction Home() {\n  _s();\n\n  var _this = this;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(''),\n      selectedCategory = _useState[0],\n      setSelectedCategory = _useState[1];\n\n  var selectCategory = function selectCategory(category) {\n    setSelectedCategory(category);\n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_Page__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.container,\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.main_bg,\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n          className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.title,\n          children: [\"Adotar \\xE9 \", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"br\", {}, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 26,\n            columnNumber: 22\n          }, this), \"valorizar \", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"br\", {}, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 27,\n            columnNumber: 23\n          }, this), \"a vida!\"]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 25,\n          columnNumber: 11\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 24,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_PageSection__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h2\", {\n          children: \"Venha fazer um novo amigo!\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 31,\n          columnNumber: 11\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.categories_container,\n          children: categories.map(function (_ref) {\n            var label = _ref.label,\n                icon = _ref.icon;\n            return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_Button__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n              className: true,\n              status: selectedCategory === label && 'primary',\n              handleClick: function handleClick() {\n                return selectCategory(label);\n              },\n              children: label\n            }, label, false, {\n              fileName: _jsxFileName,\n              lineNumber: 34,\n              columnNumber: 15\n            }, _this);\n          })\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 32,\n          columnNumber: 11\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 30,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_PageSection__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n        off: true,\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h2\", {\n          children: \"Agendar uma visita\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 46,\n          columnNumber: 11\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 45,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 7\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 22,\n    columnNumber: 5\n  }, this);\n}\n\n_s(Home, \"hZ4MX+AA/e6j0vZ5cP0SO+qrH/o=\");\n\n_c = Home;\n\nvar _c;\n\n$RefreshReg$(_c, \"Home\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/NDRkOCJdLCJuYW1lcyI6WyJjYXRlZ29yaWVzIiwibGFiZWwiLCJpY29uIiwiSG9tZSIsInVzZVN0YXRlIiwic2VsZWN0ZWRDYXRlZ29yeSIsInNldFNlbGVjdGVkQ2F0ZWdvcnkiLCJzZWxlY3RDYXRlZ29yeSIsImNhdGVnb3J5Iiwic3R5bGVzIiwiY29udGFpbmVyIiwibWFpbl9iZyIsInRpdGxlIiwiY2F0ZWdvcmllc19jb250YWluZXIiLCJtYXAiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUEsSUFBTUEsVUFBVSxHQUFHLENBQ2pCO0FBQUVDLE9BQUssRUFBRSxXQUFUO0FBQXNCQyxNQUFJLEVBQUU7QUFBNUIsQ0FEaUIsRUFFakI7QUFBRUQsT0FBSyxFQUFFLE9BQVQ7QUFBa0JDLE1BQUksRUFBRTtBQUF4QixDQUZpQixDQUFuQjtBQUtlLFNBQVNDLElBQVQsR0FBZ0I7QUFBQTs7QUFBQTs7QUFBQSxrQkFDbUJDLHNEQUFRLENBQUMsRUFBRCxDQUQzQjtBQUFBLE1BQ3RCQyxnQkFEc0I7QUFBQSxNQUNKQyxtQkFESTs7QUFHN0IsTUFBTUMsY0FBYyxHQUFHLFNBQWpCQSxjQUFpQixDQUFDQyxRQUFELEVBQWM7QUFDbkNGLHVCQUFtQixDQUFDRSxRQUFELENBQW5CO0FBQ0QsR0FGRDs7QUFJQSxzQkFDRSxxRUFBQyx3REFBRDtBQUFBLDJCQUNFO0FBQUssZUFBUyxFQUFFQyw4REFBTSxDQUFDQyxTQUF2QjtBQUFBLDhCQUNFO0FBQUssaUJBQVMsRUFBRUQsOERBQU0sQ0FBQ0UsT0FBdkI7QUFBQSwrQkFDRTtBQUFJLG1CQUFTLEVBQUVGLDhEQUFNLENBQUNHLEtBQXRCO0FBQUEsa0RBQ1c7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFEWCw2QkFFWTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUZaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixlQU9FLHFFQUFDLCtEQUFEO0FBQUEsZ0NBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREYsZUFFRTtBQUFLLG1CQUFTLEVBQUVILDhEQUFNLENBQUNJLG9CQUF2QjtBQUFBLG9CQUNHYixVQUFVLENBQUNjLEdBQVgsQ0FBZTtBQUFBLGdCQUFHYixLQUFILFFBQUdBLEtBQUg7QUFBQSxnQkFBVUMsSUFBVixRQUFVQSxJQUFWO0FBQUEsZ0NBQ2QscUVBQUMsMERBQUQ7QUFFRSx1QkFBUyxNQUZYO0FBR0Usb0JBQU0sRUFBRUcsZ0JBQWdCLEtBQUtKLEtBQXJCLElBQThCLFNBSHhDO0FBSUUseUJBQVcsRUFBRTtBQUFBLHVCQUFNTSxjQUFjLENBQUNOLEtBQUQsQ0FBcEI7QUFBQSxlQUpmO0FBQUEsd0JBTUdBO0FBTkgsZUFDT0EsS0FEUDtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURjO0FBQUEsV0FBZjtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBUEYsZUFzQkUscUVBQUMsK0RBQUQ7QUFBYSxXQUFHLE1BQWhCO0FBQUEsK0JBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBdEJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQThCRDs7R0FyQ3VCRSxJOztLQUFBQSxJIiwiZmlsZSI6Ii4vcGFnZXMvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBCdXR0b24gZnJvbSAnLi4vY29tcG9uZW50cy9CdXR0b24nO1xuaW1wb3J0IENvbW1pbmdTb29uIGZyb20gJy4uL2NvbXBvbmVudHMvQ29tbWluZ1Nvb24nO1xuaW1wb3J0IFBhZ2UgZnJvbSAnLi4vY29tcG9uZW50cy9QYWdlJztcbmltcG9ydCBQYWdlU2VjdGlvbiBmcm9tICcuLi9jb21wb25lbnRzL1BhZ2VTZWN0aW9uJztcblxuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzJztcblxuY29uc3QgY2F0ZWdvcmllcyA9IFtcbiAgeyBsYWJlbDogJ0NhY2hvcnJvcycsIGljb246ICcjJyB9LFxuICB7IGxhYmVsOiAnR2F0b3MnLCBpY29uOiAnIycgfSxcbl07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIGNvbnN0IFtzZWxlY3RlZENhdGVnb3J5LCBzZXRTZWxlY3RlZENhdGVnb3J5XSA9IHVzZVN0YXRlKCcnKTtcblxuICBjb25zdCBzZWxlY3RDYXRlZ29yeSA9IChjYXRlZ29yeSkgPT4ge1xuICAgIHNldFNlbGVjdGVkQ2F0ZWdvcnkoY2F0ZWdvcnkpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPFBhZ2U+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubWFpbl9iZ30+XG4gICAgICAgICAgPGgxIGNsYXNzTmFtZT17c3R5bGVzLnRpdGxlfT5cbiAgICAgICAgICAgIEFkb3RhciDDqSA8YnIgLz5cbiAgICAgICAgICAgIHZhbG9yaXphciA8YnIgLz5hIHZpZGEhXG4gICAgICAgICAgPC9oMT5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxQYWdlU2VjdGlvbj5cbiAgICAgICAgICA8aDI+VmVuaGEgZmF6ZXIgdW0gbm92byBhbWlnbyE8L2gyPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY2F0ZWdvcmllc19jb250YWluZXJ9PlxuICAgICAgICAgICAge2NhdGVnb3JpZXMubWFwKCh7IGxhYmVsLCBpY29uIH0pID0+IChcbiAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgIGtleT17bGFiZWx9XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lXG4gICAgICAgICAgICAgICAgc3RhdHVzPXtzZWxlY3RlZENhdGVnb3J5ID09PSBsYWJlbCAmJiAncHJpbWFyeSd9XG4gICAgICAgICAgICAgICAgaGFuZGxlQ2xpY2s9eygpID0+IHNlbGVjdENhdGVnb3J5KGxhYmVsKX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHtsYWJlbH1cbiAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9QYWdlU2VjdGlvbj5cbiAgICAgICAgPFBhZ2VTZWN0aW9uIG9mZj5cbiAgICAgICAgICA8aDI+QWdlbmRhciB1bWEgdmlzaXRhPC9oMj5cbiAgICAgICAgPC9QYWdlU2VjdGlvbj5cbiAgICAgIDwvZGl2PlxuICAgIDwvUGFnZT5cbiAgKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

})