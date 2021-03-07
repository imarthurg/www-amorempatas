webpackHotUpdate_N_E("pages/index",{

/***/ "./components/AnimalList/index.js":
/*!****************************************!*\
  !*** ./components/AnimalList/index.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return AnimalList; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_emojione__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-emojione */ \"./node_modules/react-emojione/index.js\");\n/* harmony import */ var react_emojione__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_emojione__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _AnimalCard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../AnimalCard */ \"./components/AnimalCard/index.js\");\n/* harmony import */ var _components_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/Button */ \"./components/Button/index.js\");\n/* harmony import */ var _styles_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./styles.module.css */ \"./components/AnimalList/styles.module.css\");\n/* harmony import */ var _styles_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_module_css__WEBPACK_IMPORTED_MODULE_5__);\n\n\nvar _jsxFileName = \"/home/arthur/Documents/Arthur/projects/www-amorempatas/components/AnimalList/index.js\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\nvar animals = [{\n  name: 'Pedro1',\n  type: 'dog',\n  imgSrc: '../../assets/images/dog.jpg'\n}, {\n  name: 'Pluto2',\n  type: 'dog',\n  imgSrc: '/assets/images/dog.jpg'\n}, {\n  name: 'Pluto3',\n  type: 'dog',\n  imgSrc: '/assets/images/dog.jpg'\n}, {\n  name: 'Pluto4',\n  type: 'dog',\n  imgSrc: '/assets/images/dog.jpg'\n}];\nvar categories = [{\n  label: 'Cachorros',\n  emoji: ':dog:'\n}, {\n  label: 'Gatos',\n  emoji: ':cat:'\n}];\nfunction AnimalList() {\n  _s();\n\n  var _this = this;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(''),\n      selectedCategory = _useState[0],\n      setSelectedCategory = _useState[1];\n\n  var selectCategory = function selectCategory(category) {\n    setSelectedCategory(category);\n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: _styles_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.container,\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: _styles_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.categories_container,\n      children: categories.map(function (_ref) {\n        var label = _ref.label,\n            emoji = _ref.emoji;\n        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_Button__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n          className: _styles_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.categories_container_button,\n          status: selectedCategory === label && 'primary',\n          handleClick: function handleClick() {\n            return selectCategory(label);\n          },\n          children: [label, \"\\xA0\", Object(react_emojione__WEBPACK_IMPORTED_MODULE_2__[\"emojify\"])(emoji)]\n        }, label, true, {\n          fileName: _jsxFileName,\n          lineNumber: 48,\n          columnNumber: 11\n        }, _this);\n      })\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 45,\n      columnNumber: 7\n    }, this), animals.map(function (_ref2) {\n      var name = _ref2.name,\n          imgSrc = _ref2.imgSrc;\n      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_AnimalCard__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        name: name,\n        imgSrc: imgSrc\n      }, name, false, {\n        fileName: _jsxFileName,\n        lineNumber: 62,\n        columnNumber: 9\n      }, _this);\n    })]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 44,\n    columnNumber: 5\n  }, this);\n}\n\n_s(AnimalList, \"hZ4MX+AA/e6j0vZ5cP0SO+qrH/o=\");\n\n_c = AnimalList;\n\nvar _c;\n\n$RefreshReg$(_c, \"AnimalList\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9BbmltYWxMaXN0L2luZGV4LmpzPzE5NjgiXSwibmFtZXMiOlsiYW5pbWFscyIsIm5hbWUiLCJ0eXBlIiwiaW1nU3JjIiwiY2F0ZWdvcmllcyIsImxhYmVsIiwiZW1vamkiLCJBbmltYWxMaXN0IiwidXNlU3RhdGUiLCJzZWxlY3RlZENhdGVnb3J5Iiwic2V0U2VsZWN0ZWRDYXRlZ29yeSIsInNlbGVjdENhdGVnb3J5IiwiY2F0ZWdvcnkiLCJzdHlsZXMiLCJjb250YWluZXIiLCJjYXRlZ29yaWVzX2NvbnRhaW5lciIsIm1hcCIsImNhdGVnb3JpZXNfY29udGFpbmVyX2J1dHRvbiIsImVtb2ppZnkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUVBLElBQU1BLE9BQU8sR0FBRyxDQUNkO0FBQ0VDLE1BQUksRUFBRSxRQURSO0FBRUVDLE1BQUksRUFBRSxLQUZSO0FBR0VDLFFBQU0sRUFBRTtBQUhWLENBRGMsRUFNZDtBQUNFRixNQUFJLEVBQUUsUUFEUjtBQUVFQyxNQUFJLEVBQUUsS0FGUjtBQUdFQyxRQUFNLEVBQUU7QUFIVixDQU5jLEVBV2Q7QUFDRUYsTUFBSSxFQUFFLFFBRFI7QUFFRUMsTUFBSSxFQUFFLEtBRlI7QUFHRUMsUUFBTSxFQUFFO0FBSFYsQ0FYYyxFQWdCZDtBQUNFRixNQUFJLEVBQUUsUUFEUjtBQUVFQyxNQUFJLEVBQUUsS0FGUjtBQUdFQyxRQUFNLEVBQUU7QUFIVixDQWhCYyxDQUFoQjtBQXVCQSxJQUFNQyxVQUFVLEdBQUcsQ0FDakI7QUFBRUMsT0FBSyxFQUFFLFdBQVQ7QUFBc0JDLE9BQUssRUFBRTtBQUE3QixDQURpQixFQUVqQjtBQUFFRCxPQUFLLEVBQUUsT0FBVDtBQUFrQkMsT0FBSyxFQUFFO0FBQXpCLENBRmlCLENBQW5CO0FBS2UsU0FBU0MsVUFBVCxHQUFzQjtBQUFBOztBQUFBOztBQUFBLGtCQUNhQyxzREFBUSxDQUFDLEVBQUQsQ0FEckI7QUFBQSxNQUM1QkMsZ0JBRDRCO0FBQUEsTUFDVkMsbUJBRFU7O0FBR25DLE1BQU1DLGNBQWMsR0FBRyxTQUFqQkEsY0FBaUIsQ0FBQ0MsUUFBRCxFQUFjO0FBQ25DRix1QkFBbUIsQ0FBQ0UsUUFBRCxDQUFuQjtBQUNELEdBRkQ7O0FBR0Esc0JBQ0U7QUFBSyxhQUFTLEVBQUVDLHlEQUFNLENBQUNDLFNBQXZCO0FBQUEsNEJBQ0U7QUFBSyxlQUFTLEVBQUVELHlEQUFNLENBQUNFLG9CQUF2QjtBQUFBLGdCQUVHWCxVQUFVLENBQUNZLEdBQVgsQ0FBZTtBQUFBLFlBQUdYLEtBQUgsUUFBR0EsS0FBSDtBQUFBLFlBQVVDLEtBQVYsUUFBVUEsS0FBVjtBQUFBLDRCQUNkLHFFQUFDLDBEQUFEO0FBRUUsbUJBQVMsRUFBRU8seURBQU0sQ0FBQ0ksMkJBRnBCO0FBR0UsZ0JBQU0sRUFBRVIsZ0JBQWdCLEtBQUtKLEtBQXJCLElBQThCLFNBSHhDO0FBSUUscUJBQVcsRUFBRTtBQUFBLG1CQUFNTSxjQUFjLENBQUNOLEtBQUQsQ0FBcEI7QUFBQSxXQUpmO0FBQUEscUJBTUdBLEtBTkgsVUFPR2EsOERBQU8sQ0FBQ1osS0FBRCxDQVBWO0FBQUEsV0FDT0QsS0FEUDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURjO0FBQUEsT0FBZjtBQUZIO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixFQWlCR0wsT0FBTyxDQUFDZ0IsR0FBUixDQUFZO0FBQUEsVUFBR2YsSUFBSCxTQUFHQSxJQUFIO0FBQUEsVUFBU0UsTUFBVCxTQUFTQSxNQUFUO0FBQUEsMEJBQ1gscUVBQUMsbURBQUQ7QUFBdUIsWUFBSSxFQUFFRixJQUE3QjtBQUFtQyxjQUFNLEVBQUVFO0FBQTNDLFNBQWlCRixJQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRFc7QUFBQSxLQUFaLENBakJIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBdUJEOztHQTdCdUJNLFU7O0tBQUFBLFUiLCJmaWxlIjoiLi9jb21wb25lbnRzL0FuaW1hbExpc3QvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGVtb2ppZnkgfSBmcm9tICdyZWFjdC1lbW9qaW9uZSc7XG5cbmltcG9ydCBBbmltYWxDYXJkIGZyb20gJy4uL0FuaW1hbENhcmQnO1xuaW1wb3J0IEJ1dHRvbiBmcm9tICcuLi8uLi9jb21wb25lbnRzL0J1dHRvbic7XG5cbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9zdHlsZXMubW9kdWxlLmNzcyc7XG5cbmNvbnN0IGFuaW1hbHMgPSBbXG4gIHtcbiAgICBuYW1lOiAnUGVkcm8xJyxcbiAgICB0eXBlOiAnZG9nJyxcbiAgICBpbWdTcmM6ICcuLi8uLi9hc3NldHMvaW1hZ2VzL2RvZy5qcGcnXG4gIH0sXG4gIHtcbiAgICBuYW1lOiAnUGx1dG8yJyxcbiAgICB0eXBlOiAnZG9nJyxcbiAgICBpbWdTcmM6ICcvYXNzZXRzL2ltYWdlcy9kb2cuanBnJ1xuICB9LFxuICB7XG4gICAgbmFtZTogJ1BsdXRvMycsXG4gICAgdHlwZTogJ2RvZycsXG4gICAgaW1nU3JjOiAnL2Fzc2V0cy9pbWFnZXMvZG9nLmpwZydcbiAgfSxcbiAge1xuICAgIG5hbWU6ICdQbHV0bzQnLFxuICAgIHR5cGU6ICdkb2cnLFxuICAgIGltZ1NyYzogJy9hc3NldHMvaW1hZ2VzL2RvZy5qcGcnXG4gIH0sXG5dO1xuXG5jb25zdCBjYXRlZ29yaWVzID0gW1xuICB7IGxhYmVsOiAnQ2FjaG9ycm9zJywgZW1vamk6ICc6ZG9nOicgfSxcbiAgeyBsYWJlbDogJ0dhdG9zJywgZW1vamk6ICc6Y2F0OicgfSxcbl07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFuaW1hbExpc3QoKSB7XG4gIGNvbnN0IFtzZWxlY3RlZENhdGVnb3J5LCBzZXRTZWxlY3RlZENhdGVnb3J5XSA9IHVzZVN0YXRlKCcnKTtcblxuICBjb25zdCBzZWxlY3RDYXRlZ29yeSA9IChjYXRlZ29yeSkgPT4ge1xuICAgIHNldFNlbGVjdGVkQ2F0ZWdvcnkoY2F0ZWdvcnkpO1xuICB9O1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY2F0ZWdvcmllc19jb250YWluZXJ9PlxuXG4gICAgICAgIHtjYXRlZ29yaWVzLm1hcCgoeyBsYWJlbCwgZW1vamkgfSkgPT4gKFxuICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgIGtleT17bGFiZWx9XG4gICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5jYXRlZ29yaWVzX2NvbnRhaW5lcl9idXR0b259XG4gICAgICAgICAgICBzdGF0dXM9e3NlbGVjdGVkQ2F0ZWdvcnkgPT09IGxhYmVsICYmICdwcmltYXJ5J31cbiAgICAgICAgICAgIGhhbmRsZUNsaWNrPXsoKSA9PiBzZWxlY3RDYXRlZ29yeShsYWJlbCl9XG4gICAgICAgICAgPlxuICAgICAgICAgICAge2xhYmVsfSZuYnNwO1xuICAgICAgICAgICAge2Vtb2ppZnkoZW1vamkpfVxuICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICApKX1cblxuICAgICAgPC9kaXY+XG5cbiAgICAgIHthbmltYWxzLm1hcCgoeyBuYW1lLCBpbWdTcmMgfSkgPT4gKFxuICAgICAgICA8QW5pbWFsQ2FyZCBrZXk9e25hbWV9IG5hbWU9e25hbWV9IGltZ1NyYz17aW1nU3JjfSAvPlxuICAgICAgKSl9XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/AnimalList/index.js\n");

/***/ })

})