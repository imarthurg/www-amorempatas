webpackHotUpdate_N_E("pages/quem-somos",{

/***/ "./components/Header/index.js":
/*!************************************!*\
  !*** ./components/Header/index.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Header; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _assets_images_logo_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../assets/images/logo.png */ \"./assets/images/logo.png\");\n/* harmony import */ var _assets_images_logo_png__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_assets_images_logo_png__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _styles_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles.module.css */ \"./components/Header/styles.module.css\");\n/* harmony import */ var _styles_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_module_css__WEBPACK_IMPORTED_MODULE_4__);\n\n\nvar _jsxFileName = \"/home/arthur/Documents/Arthur/projects/www-amorempatas/components/Header/index.js\",\n    _s = $RefreshSig$();\n\n\n\n\n\nvar navlinks = [{\n  label: 'Início',\n  href: '/'\n}, {\n  label: 'Quem somos',\n  href: '/quem-somos'\n}];\nfunction Header() {\n  _s();\n\n  var _this = this;\n\n  var _useRouter = Object(next_router__WEBPACK_IMPORTED_MODULE_2__[\"useRouter\"])(),\n      asPath = _useRouter.asPath;\n\n  var linkActiveClass = function linkActiveClass(href) {\n    return asPath && asPath === href && _styles_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.link_active || null;\n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"header\", {\n    className: _styles_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.header,\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: _styles_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.navbar,\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: _styles_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.logo_container,\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {\n          href: \"/\",\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n              src: _assets_images_logo_png__WEBPACK_IMPORTED_MODULE_3___default.a,\n              alt: \"Logo da Santo Pet\",\n              layout: \"fill\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 30,\n              columnNumber: 15\n            }, this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 29,\n            columnNumber: 13\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 28,\n          columnNumber: 11\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 27,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"nav\", {\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"ol\", {\n          children: navlinks.map(function (_ref) {\n            var label = _ref.label,\n                href = _ref.href;\n            return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"li\", {\n              className: linkActiveClass(href),\n              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {\n                href: href,\n                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n                  children: label\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 39,\n                  columnNumber: 19\n                }, _this)\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 38,\n                columnNumber: 17\n              }, _this)\n            }, label, false, {\n              fileName: _jsxFileName,\n              lineNumber: 37,\n              columnNumber: 15\n            }, _this);\n          })\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 35,\n          columnNumber: 11\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 34,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 7\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 25,\n    columnNumber: 5\n  }, this);\n}\n\n_s(Header, \"9pMG9Ra3x5O/yaZiUz6XxVJ+Rds=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_2__[\"useRouter\"]];\n});\n\n_c = Header;\n\nvar _c;\n\n$RefreshReg$(_c, \"Header\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9IZWFkZXIvaW5kZXguanM/M2EwYyJdLCJuYW1lcyI6WyJuYXZsaW5rcyIsImxhYmVsIiwiaHJlZiIsIkhlYWRlciIsInVzZVJvdXRlciIsImFzUGF0aCIsImxpbmtBY3RpdmVDbGFzcyIsInN0eWxlcyIsImxpbmtfYWN0aXZlIiwiaGVhZGVyIiwibmF2YmFyIiwibG9nb19jb250YWluZXIiLCJMb2dvIiwibWFwIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQUVBO0FBRUEsSUFBTUEsUUFBUSxHQUFHLENBQ2Y7QUFDRUMsT0FBSyxFQUFFLFFBRFQ7QUFFRUMsTUFBSSxFQUFFO0FBRlIsQ0FEZSxFQUtmO0FBQ0VELE9BQUssRUFBRSxZQURUO0FBRUVDLE1BQUksRUFBRTtBQUZSLENBTGUsQ0FBakI7QUFXZSxTQUFTQyxNQUFULEdBQWtCO0FBQUE7O0FBQUE7O0FBQUEsbUJBQ1pDLDZEQUFTLEVBREc7QUFBQSxNQUN2QkMsTUFEdUIsY0FDdkJBLE1BRHVCOztBQUcvQixNQUFNQyxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLENBQUNKLElBQUQ7QUFBQSxXQUFXRyxNQUFNLElBQUlBLE1BQU0sS0FBS0gsSUFBckIsSUFBNkJLLHlEQUFNLENBQUNDLFdBQXJDLElBQXFELElBQS9EO0FBQUEsR0FBeEI7O0FBRUEsc0JBQ0U7QUFBUSxhQUFTLEVBQUVELHlEQUFNLENBQUNFLE1BQTFCO0FBQUEsMkJBQ0U7QUFBSyxlQUFTLEVBQUVGLHlEQUFNLENBQUNHLE1BQXZCO0FBQUEsOEJBQ0U7QUFBSyxpQkFBUyxFQUFFSCx5REFBTSxDQUFDSSxjQUF2QjtBQUFBLCtCQUNFLHFFQUFDLGdEQUFEO0FBQU0sY0FBSSxFQUFDLEdBQVg7QUFBQSxpQ0FDRTtBQUFBLG1DQUNFO0FBQUssaUJBQUcsRUFBRUMsOERBQVY7QUFBZ0IsaUJBQUcsRUFBQyxtQkFBcEI7QUFBd0Msb0JBQU0sRUFBQztBQUEvQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFRRTtBQUFBLCtCQUNFO0FBQUEsb0JBQ0daLFFBQVEsQ0FBQ2EsR0FBVCxDQUFhO0FBQUEsZ0JBQUdaLEtBQUgsUUFBR0EsS0FBSDtBQUFBLGdCQUFVQyxJQUFWLFFBQVVBLElBQVY7QUFBQSxnQ0FDWjtBQUFnQix1QkFBUyxFQUFFSSxlQUFlLENBQUNKLElBQUQsQ0FBMUM7QUFBQSxxQ0FDRSxxRUFBQyxnREFBRDtBQUFNLG9CQUFJLEVBQUVBLElBQVo7QUFBQSx1Q0FDRTtBQUFBLDRCQUFJRDtBQUFKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREYsZUFBU0EsS0FBVDtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURZO0FBQUEsV0FBYjtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBUkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBd0JEOztHQTdCdUJFLE07VUFDSEMscUQ7OztLQURHRCxNIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9IZWFkZXIvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xuXG5pbXBvcnQgTG9nbyBmcm9tICcuLi8uLi9hc3NldHMvaW1hZ2VzL2xvZ28ucG5nJztcblxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL3N0eWxlcy5tb2R1bGUuY3NzJztcblxuY29uc3QgbmF2bGlua3MgPSBbXG4gIHtcbiAgICBsYWJlbDogJ0luw61jaW8nLFxuICAgIGhyZWY6ICcvJyxcbiAgfSxcbiAge1xuICAgIGxhYmVsOiAnUXVlbSBzb21vcycsXG4gICAgaHJlZjogJy9xdWVtLXNvbW9zJyxcbiAgfSxcbl07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhlYWRlcigpIHtcbiAgY29uc3QgeyBhc1BhdGggfSA9IHVzZVJvdXRlcigpOyBcblxuICBjb25zdCBsaW5rQWN0aXZlQ2xhc3MgPSAoaHJlZikgPT4gKGFzUGF0aCAmJiBhc1BhdGggPT09IGhyZWYgJiYgc3R5bGVzLmxpbmtfYWN0aXZlKSB8fCBudWxsO1xuXG4gIHJldHVybiAoXG4gICAgPGhlYWRlciBjbGFzc05hbWU9e3N0eWxlcy5oZWFkZXJ9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5uYXZiYXJ9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmxvZ29fY29udGFpbmVyfT5cbiAgICAgICAgICA8TGluayBocmVmPVwiL1wiPlxuICAgICAgICAgICAgPGE+XG4gICAgICAgICAgICAgIDxpbWcgc3JjPXtMb2dvfSBhbHQ9XCJMb2dvIGRhIFNhbnRvIFBldFwiIGxheW91dD1cImZpbGxcIiAvPlxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxuYXY+XG4gICAgICAgICAgPG9sPlxuICAgICAgICAgICAge25hdmxpbmtzLm1hcCgoeyBsYWJlbCwgaHJlZiB9KSA9PiAoXG4gICAgICAgICAgICAgIDxsaSBrZXk9e2xhYmVsfSBjbGFzc05hbWU9e2xpbmtBY3RpdmVDbGFzcyhocmVmKX0+XG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj17aHJlZn0+XG4gICAgICAgICAgICAgICAgICA8YT57bGFiZWx9PC9hPlxuICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgIDwvb2w+XG4gICAgICAgIDwvbmF2PlxuICAgICAgPC9kaXY+XG4gICAgPC9oZWFkZXI+XG4gICk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Header/index.js\n");

/***/ })

})