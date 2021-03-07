webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Header/index.js":
/*!************************************!*\
  !*** ./components/Header/index.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Header; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _assets_images_logo_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../assets/images/logo.png */ \"./assets/images/logo.png\");\n/* harmony import */ var _assets_images_logo_png__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_assets_images_logo_png__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _NavLink__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../NavLink */ \"./components/NavLink/index.js\");\n/* harmony import */ var _styles_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./styles.module.css */ \"./components/Header/styles.module.css\");\n/* harmony import */ var _styles_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_module_css__WEBPACK_IMPORTED_MODULE_5__);\n\n\nvar _jsxFileName = \"/home/arthur/Documents/Arthur/projects/www-amorempatas/components/Header/index.js\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\nvar navlinks = [{\n  label: 'Início',\n  href: '/'\n}, {\n  label: 'Quem somos',\n  href: '/quem-somos'\n}];\nfunction Header() {\n  _s();\n\n  var _this = this;\n\n  var _useRouter = Object(next_router__WEBPACK_IMPORTED_MODULE_2__[\"useRouter\"])(),\n      asPath = _useRouter.asPath;\n\n  var linkActiveClass = function linkActiveClass(href) {\n    return asPath && asPath === href && _styles_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.link_active || null;\n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"header\", {\n    className: _styles_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.header,\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: _styles_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.navbar,\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: _styles_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.logo_container,\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {\n          href: \"/\",\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n              src: _assets_images_logo_png__WEBPACK_IMPORTED_MODULE_3___default.a,\n              alt: \"Logo da Santo Pet\",\n              layout: \"fill\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 32,\n              columnNumber: 15\n            }, this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 31,\n            columnNumber: 13\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 30,\n          columnNumber: 11\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 29,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"nav\", {\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"ol\", {\n          children: navlinks.map(function (_ref) {\n            var label = _ref.label,\n                href = _ref.href;\n            return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"li\", {\n              className: linkActiveClass(href),\n              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_NavLink__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                href: href,\n                rounded: true,\n                children: label\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 40,\n                columnNumber: 17\n              }, _this)\n            }, label, false, {\n              fileName: _jsxFileName,\n              lineNumber: 39,\n              columnNumber: 15\n            }, _this);\n          })\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 37,\n          columnNumber: 11\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 36,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 7\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 27,\n    columnNumber: 5\n  }, this);\n}\n\n_s(Header, \"9pMG9Ra3x5O/yaZiUz6XxVJ+Rds=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_2__[\"useRouter\"]];\n});\n\n_c = Header;\n\nvar _c;\n\n$RefreshReg$(_c, \"Header\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9IZWFkZXIvaW5kZXguanM/M2EwYyJdLCJuYW1lcyI6WyJuYXZsaW5rcyIsImxhYmVsIiwiaHJlZiIsIkhlYWRlciIsInVzZVJvdXRlciIsImFzUGF0aCIsImxpbmtBY3RpdmVDbGFzcyIsInN0eWxlcyIsImxpbmtfYWN0aXZlIiwiaGVhZGVyIiwibmF2YmFyIiwibG9nb19jb250YWluZXIiLCJMb2dvIiwibWFwIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBRUEsSUFBTUEsUUFBUSxHQUFHLENBQ2Y7QUFDRUMsT0FBSyxFQUFFLFFBRFQ7QUFFRUMsTUFBSSxFQUFFO0FBRlIsQ0FEZSxFQUtmO0FBQ0VELE9BQUssRUFBRSxZQURUO0FBRUVDLE1BQUksRUFBRTtBQUZSLENBTGUsQ0FBakI7QUFXZSxTQUFTQyxNQUFULEdBQWtCO0FBQUE7O0FBQUE7O0FBQUEsbUJBQ1pDLDZEQUFTLEVBREc7QUFBQSxNQUN2QkMsTUFEdUIsY0FDdkJBLE1BRHVCOztBQUcvQixNQUFNQyxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLENBQUNKLElBQUQ7QUFBQSxXQUNyQkcsTUFBTSxJQUFJQSxNQUFNLEtBQUtILElBQXJCLElBQTZCSyx5REFBTSxDQUFDQyxXQUFyQyxJQUFxRCxJQUQvQjtBQUFBLEdBQXhCOztBQUdBLHNCQUNFO0FBQVEsYUFBUyxFQUFFRCx5REFBTSxDQUFDRSxNQUExQjtBQUFBLDJCQUNFO0FBQUssZUFBUyxFQUFFRix5REFBTSxDQUFDRyxNQUF2QjtBQUFBLDhCQUNFO0FBQUssaUJBQVMsRUFBRUgseURBQU0sQ0FBQ0ksY0FBdkI7QUFBQSwrQkFDRSxxRUFBQyxnREFBRDtBQUFNLGNBQUksRUFBQyxHQUFYO0FBQUEsaUNBQ0U7QUFBQSxtQ0FDRTtBQUFLLGlCQUFHLEVBQUVDLDhEQUFWO0FBQWdCLGlCQUFHLEVBQUMsbUJBQXBCO0FBQXdDLG9CQUFNLEVBQUM7QUFBL0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBUUU7QUFBQSwrQkFDRTtBQUFBLG9CQUNHWixRQUFRLENBQUNhLEdBQVQsQ0FBYTtBQUFBLGdCQUFHWixLQUFILFFBQUdBLEtBQUg7QUFBQSxnQkFBVUMsSUFBVixRQUFVQSxJQUFWO0FBQUEsZ0NBQ1o7QUFBZ0IsdUJBQVMsRUFBRUksZUFBZSxDQUFDSixJQUFELENBQTFDO0FBQUEscUNBQ0UscUVBQUMsZ0RBQUQ7QUFBUyxvQkFBSSxFQUFFQSxJQUFmO0FBQXFCLHVCQUFPLE1BQTVCO0FBQUEsMEJBQThCRDtBQUE5QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREYsZUFBU0EsS0FBVDtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURZO0FBQUEsV0FBYjtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBUkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBc0JEOztHQTVCdUJFLE07VUFDSEMscUQ7OztLQURHRCxNIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9IZWFkZXIvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xuXG5pbXBvcnQgTG9nbyBmcm9tICcuLi8uLi9hc3NldHMvaW1hZ2VzL2xvZ28ucG5nJztcbmltcG9ydCBOYXZMaW5rIGZyb20gJy4uL05hdkxpbmsnO1xuXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vc3R5bGVzLm1vZHVsZS5jc3MnO1xuXG5jb25zdCBuYXZsaW5rcyA9IFtcbiAge1xuICAgIGxhYmVsOiAnSW7DrWNpbycsXG4gICAgaHJlZjogJy8nLFxuICB9LFxuICB7XG4gICAgbGFiZWw6ICdRdWVtIHNvbW9zJyxcbiAgICBocmVmOiAnL3F1ZW0tc29tb3MnLFxuICB9LFxuXTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSGVhZGVyKCkge1xuICBjb25zdCB7IGFzUGF0aCB9ID0gdXNlUm91dGVyKCk7XG5cbiAgY29uc3QgbGlua0FjdGl2ZUNsYXNzID0gKGhyZWYpID0+XG4gICAgKGFzUGF0aCAmJiBhc1BhdGggPT09IGhyZWYgJiYgc3R5bGVzLmxpbmtfYWN0aXZlKSB8fCBudWxsO1xuXG4gIHJldHVybiAoXG4gICAgPGhlYWRlciBjbGFzc05hbWU9e3N0eWxlcy5oZWFkZXJ9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5uYXZiYXJ9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmxvZ29fY29udGFpbmVyfT5cbiAgICAgICAgICA8TGluayBocmVmPVwiL1wiPlxuICAgICAgICAgICAgPGE+XG4gICAgICAgICAgICAgIDxpbWcgc3JjPXtMb2dvfSBhbHQ9XCJMb2dvIGRhIFNhbnRvIFBldFwiIGxheW91dD1cImZpbGxcIiAvPlxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxuYXY+XG4gICAgICAgICAgPG9sPlxuICAgICAgICAgICAge25hdmxpbmtzLm1hcCgoeyBsYWJlbCwgaHJlZiB9KSA9PiAoXG4gICAgICAgICAgICAgIDxsaSBrZXk9e2xhYmVsfSBjbGFzc05hbWU9e2xpbmtBY3RpdmVDbGFzcyhocmVmKX0+XG4gICAgICAgICAgICAgICAgPE5hdkxpbmsgaHJlZj17aHJlZn0gcm91bmRlZD57bGFiZWx9PC9OYXZMaW5rPlxuICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC9vbD5cbiAgICAgICAgPC9uYXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2hlYWRlcj5cbiAgKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Header/index.js\n");

/***/ })

})