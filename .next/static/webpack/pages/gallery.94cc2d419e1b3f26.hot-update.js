"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/gallery",{

/***/ "./pages/gallery.tsx":
/*!***************************!*\
  !*** ./pages/gallery.tsx ***!
  \***************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; },\n/* harmony export */   \"default\": function() { return /* binding */ Gallery; }\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _components_NftCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/NftCard */ \"./components/NftCard.tsx\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\nvar _jsxFileName = \"/Users/jde/Desktop/almost-done-v2/pages/gallery.tsx\";\n\n\n\n\nvar Main = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].main.withConfig({\n  displayName: \"gallery__Main\",\n  componentId: \"sc-1myqlen-0\"\n})([\"display:flex;flex-direction:row;flex-wrap:wrap;justify-content:space-between;align-items:center;width:80%;padding-top:96px;gap:32px;z-index:1;\"]);\n_c = Main;\nvar Title = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].h1.withConfig({\n  displayName: \"gallery__Title\",\n  componentId: \"sc-1myqlen-1\"\n})([\"font-size:254px;text-align:center;font-weight:900;font-style:italic;z-index:0;transform:translate(-50%,-50%);color:\", \";position:fixed;top:50%;left:50%;\"], function (_ref) {\n  var theme = _ref.theme;\n  return theme.colors.blue;\n});\n_c2 = Title;\nvar __N_SSP = true;\nfunction Gallery(props) {\n  var _this = this;\n\n  var data = props.data;\n  var nfts = data.nfts;\n  var sortedNfts = nfts.filter(function (nft) {\n    return nft.metadata;\n  });\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(Main, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(Title, {\n      children: \"NFTS\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 47,\n      columnNumber: 7\n    }, this), sortedNfts.map(function (nft, index) {\n      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_components_NftCard__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n        url: nft.metadata.image,\n        title: nft.metadata.name.split(\"#\")[0],\n        number: \"#\".concat(nft.metadata.name.split(\"#\")[1]),\n        link: nft.metadata.external_url\n      }, index, false, {\n        fileName: _jsxFileName,\n        lineNumber: 50,\n        columnNumber: 11\n      }, _this);\n    })]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 46,\n    columnNumber: 5\n  }, this);\n}\n_c3 = Gallery;\n\nvar _c, _c2, _c3;\n\n$RefreshReg$(_c, \"Main\");\n$RefreshReg$(_c2, \"Title\");\n$RefreshReg$(_c3, \"Gallery\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9nYWxsZXJ5LnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBSUEsSUFBTUcsSUFBSSxHQUFHRix5RUFBSDtFQUFBO0VBQUE7QUFBQSxzSkFBVjtLQUFNRTtBQVlOLElBQU1FLEtBQUssR0FBR0osdUVBQUg7RUFBQTtFQUFBO0FBQUEsaUtBT0E7RUFBQSxJQUFHTSxLQUFILFFBQUdBLEtBQUg7RUFBQSxPQUFlQSxLQUFLLENBQUNDLE1BQU4sQ0FBYUMsSUFBNUI7QUFBQSxDQVBBLENBQVg7TUFBTUo7O0FBbUJTLFNBQVNLLE9BQVQsQ0FBaUJDLEtBQWpCLEVBQW1DO0VBQUE7O0VBQ2hELElBQVFDLElBQVIsR0FBaUJELEtBQWpCLENBQVFDLElBQVI7RUFHQSxJQUFNQyxJQUFJLEdBQUdELElBQUksQ0FBQ0MsSUFBbEI7RUFDQSxJQUFNQyxVQUFVLEdBQUdELElBQUksQ0FBQ0UsTUFBTCxDQUFZLFVBQUNDLEdBQUQ7SUFBQSxPQUFjQSxHQUFHLENBQUNDLFFBQWxCO0VBQUEsQ0FBWixDQUFuQjtFQUVBLG9CQUNFLDhEQUFDLElBQUQ7SUFBQSx3QkFDRSw4REFBQyxLQUFEO01BQUE7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBLFFBREYsRUFFR0gsVUFBVSxDQUFDSSxHQUFYLENBQWUsVUFBQ0YsR0FBRCxFQUFXRyxLQUFYLEVBQTZCO01BQzNDLG9CQUNFLDhEQUFDLDJEQUFEO1FBRUUsR0FBRyxFQUFFSCxHQUFHLENBQUNDLFFBQUosQ0FBYUcsS0FGcEI7UUFHRSxLQUFLLEVBQUVKLEdBQUcsQ0FBQ0MsUUFBSixDQUFhSSxJQUFiLENBQWtCQyxLQUFsQixDQUF3QixHQUF4QixFQUE2QixDQUE3QixDQUhUO1FBSUUsTUFBTSxhQUFNTixHQUFHLENBQUNDLFFBQUosQ0FBYUksSUFBYixDQUFrQkMsS0FBbEIsQ0FBd0IsR0FBeEIsRUFBNkIsQ0FBN0IsQ0FBTixDQUpSO1FBS0UsSUFBSSxFQUFFTixHQUFHLENBQUNDLFFBQUosQ0FBYU07TUFMckIsR0FDT0osS0FEUDtRQUFBO1FBQUE7UUFBQTtNQUFBLFNBREY7SUFTRCxDQVZBLENBRkg7RUFBQTtJQUFBO0lBQUE7SUFBQTtFQUFBLFFBREY7QUFnQkQ7TUF2QnVCVCIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9nYWxsZXJ5LnRzeD9mNjRiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuaW1wb3J0IE5mdENhcmQgZnJvbSBcIi4uL2NvbXBvbmVudHMvTmZ0Q2FyZFwiO1xuXG5pbXBvcnQgeyBHZXRTZXJ2ZXJTaWRlUHJvcHMgfSBmcm9tIFwibmV4dFwiO1xuXG5jb25zdCBNYWluID0gc3R5bGVkLm1haW5gXG5kaXNwbGF5OiBmbGV4O1xuZmxleC1kaXJlY3Rpb246IHJvdztcbmZsZXgtd3JhcDogd3JhcDtcbmp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbmFsaWduLWl0ZW1zOiBjZW50ZXI7XG53aWR0aDogODAlO1xucGFkZGluZy10b3A6IDk2cHg7XG5nYXA6MzJweDtcbnotaW5kZXg6IDE7XG5gO1xuXG5jb25zdCBUaXRsZSA9IHN0eWxlZC5oMWBcbiAgZm9udC1zaXplOiAyNTRweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXdlaWdodDogOTAwO1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG4gIHotaW5kZXg6IDA7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICBjb2xvcjogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5jb2xvcnMuYmx1ZX07XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDUwJTtcblxuICBgO1xuXG5cbmV4cG9ydCBpbnRlcmZhY2UgZGF0YUZldGNoIHtcbiAgZGF0YTogYW55O1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBHYWxsZXJ5KHByb3BzOiBkYXRhRmV0Y2gpIHtcbiAgY29uc3QgeyBkYXRhIH0gPSBwcm9wcztcblxuXG4gIGNvbnN0IG5mdHMgPSBkYXRhLm5mdHM7XG4gIGNvbnN0IHNvcnRlZE5mdHMgPSBuZnRzLmZpbHRlcigobmZ0OiBhbnkpID0+IG5mdC5tZXRhZGF0YSk7XG5cbiAgcmV0dXJuIChcbiAgICA8TWFpbj5cbiAgICAgIDxUaXRsZT5ORlRTPC9UaXRsZT5cbiAgICAgIHtzb3J0ZWROZnRzLm1hcCgobmZ0OiBhbnksIGluZGV4OiBudW1iZXIpID0+IHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8TmZ0Q2FyZFxuICAgICAgICAgICAga2V5PXtpbmRleH1cbiAgICAgICAgICAgIHVybD17bmZ0Lm1ldGFkYXRhLmltYWdlfVxuICAgICAgICAgICAgdGl0bGU9e25mdC5tZXRhZGF0YS5uYW1lLnNwbGl0KFwiI1wiKVswXX1cbiAgICAgICAgICAgIG51bWJlcj17YCMke25mdC5tZXRhZGF0YS5uYW1lLnNwbGl0KFwiI1wiKVsxXX1gfVxuICAgICAgICAgICAgbGluaz17bmZ0Lm1ldGFkYXRhLmV4dGVybmFsX3VybH1cbiAgICAgICAgICAvPlxuICAgICAgICApO1xuICAgICAgfSl9XG4gICAgPC9NYWluPlxuICApO1xufVxuXG5leHBvcnQgY29uc3QgZ2V0U2VydmVyU2lkZVByb3BzOiBHZXRTZXJ2ZXJTaWRlUHJvcHMgPSBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKFxuICAgIFwiaHR0cHM6Ly9hcGkubmZ0cG9ydC54eXovdjAvc29sYW5hL2FjY291bnRzLzU1OGFjc2dldVBERlF3ZENUTThMV2pneWlpWkNQeW9TOWlYdHMxS0FXUkNXP2luY2x1ZGU9bWV0YWRhdGFcIixcbiAgICB7XG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgIEF1dGhvcml6YXRpb246IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX05GVF9BVVRIX0NPREUgfHwgXCJcIixcbiAgICAgIH0sXG4gICAgfVxuICApO1xuXG4gIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpLmNhdGNoKChlcnIpID0+IGNvbnNvbGUubG9nKGVycikpO1xuICBjb25zdCBjb250aW51YXRpb24gPSBkYXRhLmNvbnRpbnVhdGlvbjtcblxuICAgIGNvbnN0IHNlY29uZFJlcyA9IGF3YWl0IGZldGNoKGBodHRwczovL2FwaS5uZnRwb3J0Lnh5ei92MC9zb2xhbmEvYWNjb3VudHMvNTU4YWNzZ2V1UERGUXdkQ1RNOExXamd5aWlaQ1B5b1M5aVh0czFLQVdSQ1c/Y29udGludWF0aW9uPSR7Y29udGludWF0aW9ufSZpbmNsdWRlPW1ldGFkYXRhYCwge1xuICAgICAgaGVhZGVyczoge1xuICAgICAgICBBdXRob3JpemF0aW9uOiBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19ORlRfQVVUSF9DT0RFIHx8IFwiXCIsXG4gICAgICB9LFxuICAgIH0pO1xuY29uc3Qgc2Vjb25kRGF0YSA9IGF3YWl0IHNlY29uZFJlcy5qc29uKCkuY2F0Y2goKGVycikgPT4gY29uc29sZS5sb2coZXJyKSk7XG5cbi8vcHVzaCBzZWNvbmREYXRhLm5mdHMgdG8gZGF0YS5uZnRzXG4gIGRhdGEubmZ0cy5wdXNoKC4uLnNlY29uZERhdGEubmZ0cylcblxuXG5cbiAgcmV0dXJuIHtcbiAgICBwcm9wczogeyBkYXRhIH0sXG4gIH07XG59O1xuIl0sIm5hbWVzIjpbIlJlYWN0Iiwic3R5bGVkIiwiTmZ0Q2FyZCIsIk1haW4iLCJtYWluIiwiVGl0bGUiLCJoMSIsInRoZW1lIiwiY29sb3JzIiwiYmx1ZSIsIkdhbGxlcnkiLCJwcm9wcyIsImRhdGEiLCJuZnRzIiwic29ydGVkTmZ0cyIsImZpbHRlciIsIm5mdCIsIm1ldGFkYXRhIiwibWFwIiwiaW5kZXgiLCJpbWFnZSIsIm5hbWUiLCJzcGxpdCIsImV4dGVybmFsX3VybCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/gallery.tsx\n"));

/***/ })

});