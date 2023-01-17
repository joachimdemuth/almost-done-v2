/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./components/FloatingNav.tsx":
/*!************************************!*\
  !*** ./components/FloatingNav.tsx ***!
  \************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {



;
    // Wrapped in an IIFE to avoid polluting the global scope
    ;
    (function () {
        var _a, _b;
        // Legacy CSS implementations will `eval` browser code in a Node.js context
        // to extract CSS. For backwards compatibility, we need to check we're in a
        // browser context before continuing.
        if (typeof self !== 'undefined' &&
            // AMP / No-JS mode does not inject these helpers:
            '$RefreshHelpers$' in self) {
            // @ts-ignore __webpack_module__ is global
            var currentExports = module.exports;
            // @ts-ignore __webpack_module__ is global
            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
            // This cannot happen in MainTemplate because the exports mismatch between
            // templating and execution.
            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
            // A module can be accepted automatically based on its exports, e.g. when
            // it is a Refresh Boundary.
            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
                // Save the previous exports on update so we can compare the boundary
                // signatures.
                module.hot.dispose(function (data) {
                    data.prevExports = currentExports;
                });
                // Unconditionally accept an update to this module, we'll check if it's
                // still a Refresh Boundary later.
                // @ts-ignore importMeta is replaced in the loader
                module.hot.accept();
                // This field is set when the previous version of this module was a
                // Refresh Boundary, letting us know we need to check for invalidation or
                // enqueue an update.
                if (prevExports !== null) {
                    // A boundary can become ineligible if its exports are incompatible
                    // with the previous exports.
                    //
                    // For example, if you add/remove/change exports, we'll want to
                    // re-execute the importing modules, and force those components to
                    // re-render. Similarly, if you convert a class component to a
                    // function, we want to invalidate the boundary.
                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                        module.hot.invalidate();
                    }
                    else {
                        self.$RefreshHelpers$.scheduleUpdate();
                    }
                }
            }
            else {
                // Since we just executed the code for the module, it's possible that the
                // new exports made it ineligible for being a boundary.
                // We only care about the case when we were _previously_ a boundary,
                // because we already accepted this update (accidental side effect).
                var isNoLongerABoundary = prevExports !== null;
                if (isNoLongerABoundary) {
                    module.hot.invalidate();
                }
            }
        }
    })();


/***/ }),

/***/ "./components/Layout.tsx":
/*!*******************************!*\
  !*** ./components/Layout.tsx ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Layout; }\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_mainStyles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/mainStyles */ \"./styles/mainStyles.tsx\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _FloatingNav__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./FloatingNav */ \"./components/FloatingNav.tsx\");\n/* harmony import */ var _FloatingNav__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_FloatingNav__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);\nvar _jsxFileName = \"/Users/jde/Desktop/almost-done-v2/components/Layout.tsx\";\n\n\n\n\n\n\nvar Nav = styled_components__WEBPACK_IMPORTED_MODULE_5__[\"default\"].nav.withConfig({\n  displayName: \"Layout__Nav\",\n  componentId: \"sc-hcazqg-0\"\n})([\"display:flex;flex-direction:row;justify-content:space-between;align-items:center;width:30%;a{color:#0016da;text-decoration:none;font-size:1.2rem;}a:hover{text-decoration:underline;}\"]);\n_c = Nav;\nvar LogoContainer = styled_components__WEBPACK_IMPORTED_MODULE_5__[\"default\"].div.withConfig({\n  displayName: \"Layout__LogoContainer\",\n  componentId: \"sc-hcazqg-1\"\n})([\"display:flex;flex-direction:row;justify-content:space-between;align-items:center;width:30%;\"]);\n_c2 = LogoContainer;\nvar BrandName = styled_components__WEBPACK_IMPORTED_MODULE_5__[\"default\"].p.withConfig({\n  displayName: \"Layout__BrandName\",\n  componentId: \"sc-hcazqg-2\"\n})([\"font-size:2rem;font-style:italic;font-weight:600;color:#0016da;\"]);\n_c3 = BrandName;\nfunction Layout(_ref) {\n  var children = _ref.children;\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_styles_mainStyles__WEBPACK_IMPORTED_MODULE_1__.MainContainer, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_styles_mainStyles__WEBPACK_IMPORTED_MODULE_1__.Header, {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(LogoContainer, {\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(BrandName, {\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n            href: \"/\",\n            children: \"Almost Done\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 45,\n            columnNumber: 11\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 44,\n          columnNumber: 11\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 42,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(Nav, {\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n          href: \"/gallery\",\n          children: \"NFT Gallery\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 51,\n          columnNumber: 11\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n          href: \"/spotify\",\n          children: \"Spotify\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 52,\n          columnNumber: 11\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n          href: \"/photography\",\n          children: \"Photograpy\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 53,\n          columnNumber: 11\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n          href: \"/contact\",\n          children: \"Contact\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 54,\n          columnNumber: 11\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 50,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 41,\n      columnNumber: 7\n    }, this), children, /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_styles_mainStyles__WEBPACK_IMPORTED_MODULE_1__.Footer, {\n      children: \"Footer\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 58,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)((_FloatingNav__WEBPACK_IMPORTED_MODULE_3___default()), {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 61,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 40,\n    columnNumber: 5\n  }, this);\n}\n_c4 = Layout;\n\nvar _c, _c2, _c3, _c4;\n\n$RefreshReg$(_c, \"Nav\");\n$RefreshReg$(_c2, \"LogoContainer\");\n$RefreshReg$(_c3, \"BrandName\");\n$RefreshReg$(_c4, \"Layout\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0xheW91dC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNTyxHQUFHLEdBQUdGLHdFQUFIO0VBQUE7RUFBQTtBQUFBLDZMQUFUO0tBQU1FO0FBZ0JOLElBQU1FLGFBQWEsR0FBR0osd0VBQUg7RUFBQTtFQUFBO0FBQUEsbUdBQW5CO01BQU1JO0FBT04sSUFBTUUsU0FBUyxHQUFHTixzRUFBSDtFQUFBO0VBQUE7QUFBQSx1RUFBZjtNQUFNTTtBQU9TLFNBQVNFLE1BQVQsT0FBbUM7RUFBQSxJQUFqQkMsUUFBaUIsUUFBakJBLFFBQWlCO0VBQ2hELG9CQUNFLDhEQUFDLDZEQUFEO0lBQUEsd0JBQ0UsOERBQUMsc0RBQUQ7TUFBQSx3QkFDRSw4REFBQyxhQUFEO1FBQUEsdUJBRUUsOERBQUMsU0FBRDtVQUFBLHVCQUNBLDhEQUFDLGtEQUFEO1lBQU0sSUFBSSxFQUFDLEdBQVg7WUFBQTtVQUFBO1lBQUE7WUFBQTtZQUFBO1VBQUE7UUFEQTtVQUFBO1VBQUE7VUFBQTtRQUFBO01BRkY7UUFBQTtRQUFBO1FBQUE7TUFBQSxRQURGLGVBU0UsOERBQUMsR0FBRDtRQUFBLHdCQUNFLDhEQUFDLGtEQUFEO1VBQU0sSUFBSSxFQUFDLFVBQVg7VUFBQTtRQUFBO1VBQUE7VUFBQTtVQUFBO1FBQUEsUUFERixlQUVFLDhEQUFDLGtEQUFEO1VBQU0sSUFBSSxFQUFDLFVBQVg7VUFBQTtRQUFBO1VBQUE7VUFBQTtVQUFBO1FBQUEsUUFGRixlQUdFLDhEQUFDLGtEQUFEO1VBQU0sSUFBSSxFQUFDLGNBQVg7VUFBQTtRQUFBO1VBQUE7VUFBQTtVQUFBO1FBQUEsUUFIRixlQUlFLDhEQUFDLGtEQUFEO1VBQU0sSUFBSSxFQUFDLFVBQVg7VUFBQTtRQUFBO1VBQUE7VUFBQTtVQUFBO1FBQUEsUUFKRjtNQUFBO1FBQUE7UUFBQTtRQUFBO01BQUEsUUFURjtJQUFBO01BQUE7TUFBQTtNQUFBO0lBQUEsUUFERixFQWlCR0EsUUFqQkgsZUFrQkUsOERBQUMsc0RBQUQ7TUFBQTtJQUFBO01BQUE7TUFBQTtNQUFBO0lBQUEsUUFsQkYsZUFxQkUsOERBQUMscURBQUQ7TUFBQTtNQUFBO01BQUE7SUFBQSxRQXJCRjtFQUFBO0lBQUE7SUFBQTtJQUFBO0VBQUEsUUFERjtBQTBCRDtNQTNCdUJEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvTGF5b3V0LnRzeD8zYzhmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IEhlYWRlciwgRm9vdGVyLCBNYWluQ29udGFpbmVyIH0gZnJvbSBcIi4uL3N0eWxlcy9tYWluU3R5bGVzXCI7XG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XG5pbXBvcnQgRmxvYXRpbmdOYXYgZnJvbSBcIi4vRmxvYXRpbmdOYXZcIjtcblxuY29uc3QgTmF2ID0gc3R5bGVkLm5hdmBcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB3aWR0aDogMzAlO1xuICBhIHtcbiAgICBjb2xvcjogIzAwMTZkYTtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgZm9udC1zaXplOiAxLjJyZW07XG4gIH1cbiAgYTpob3ZlciB7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gIH1cbmA7XG5cbmNvbnN0IExvZ29Db250YWluZXIgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHdpZHRoOiAzMCU7XG5gO1xuY29uc3QgQnJhbmROYW1lID0gc3R5bGVkLnBgXG4gIGZvbnQtc2l6ZTogMnJlbTtcbiAgZm9udC1zdHlsZTogaXRhbGljO1xuICBmb250LXdlaWdodDogNjAwO1xuICBjb2xvcjogIzAwMTZkYTtcbmA7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExheW91dCh7IGNoaWxkcmVuIH06IGFueSkge1xuICByZXR1cm4gKFxuICAgIDxNYWluQ29udGFpbmVyPlxuICAgICAgPEhlYWRlcj5cbiAgICAgICAgPExvZ29Db250YWluZXI+XG4gICAgICAgICBcbiAgICAgICAgICA8QnJhbmROYW1lPlxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XG4gICAgICAgICAgQWxtb3N0IERvbmVcbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgPC9CcmFuZE5hbWU+XG4gICAgICAgIDwvTG9nb0NvbnRhaW5lcj5cbiAgICAgICAgPE5hdj5cbiAgICAgICAgICA8TGluayBocmVmPVwiL2dhbGxlcnlcIj5ORlQgR2FsbGVyeTwvTGluaz5cbiAgICAgICAgICA8TGluayBocmVmPVwiL3Nwb3RpZnlcIj5TcG90aWZ5PC9MaW5rPlxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIvcGhvdG9ncmFwaHlcIj5QaG90b2dyYXB5PC9MaW5rPlxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIvY29udGFjdFwiPkNvbnRhY3Q8L0xpbms+XG4gICAgICAgIDwvTmF2PlxuICAgICAgPC9IZWFkZXI+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgICA8Rm9vdGVyPlxuICAgICAgICBGb290ZXJcbiAgICAgIDwvRm9vdGVyPlxuICAgICAgPEZsb2F0aW5nTmF2IC8+XG4gICAgICAgIFxuICAgIDwvTWFpbkNvbnRhaW5lcj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJSZWFjdCIsIkhlYWRlciIsIkZvb3RlciIsIk1haW5Db250YWluZXIiLCJMaW5rIiwic3R5bGVkIiwiRmxvYXRpbmdOYXYiLCJOYXYiLCJuYXYiLCJMb2dvQ29udGFpbmVyIiwiZGl2IiwiQnJhbmROYW1lIiwicCIsIkxheW91dCIsImNoaWxkcmVuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Layout.tsx\n"));

/***/ })

});