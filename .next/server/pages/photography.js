"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/photography";
exports.ids = ["pages/photography"];
exports.modules = {

/***/ "./pages/photography.tsx":
/*!*******************************!*\
  !*** ./pages/photography.tsx ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Photography)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\nvar _jsxFileName = \"/Users/jde/Desktop/almost-done-v2/pages/photography.tsx\";\n\n\n\nconst Main = styled_components__WEBPACK_IMPORTED_MODULE_1___default().main.withConfig({\n  displayName: \"photography__Main\",\n  componentId: \"sc-1x8tlwc-0\"\n})([\"display:flex;flex-direction:column;align-items:center;justify-content:space-between;padding-top:96px;width:80%;\"]); // export interface dataFetch {\n//   data: any;\n// }\n\nfunction Photography() {\n  const APP_KEY = \"zzuga4gzma9e7rm\";\n  const APP_SECRET = \"6d346nxwq34awi0\";\n  const ACCESS_TOKEN = \"sl.BWS94i3rulUdIqFrFeDmzQ_QYMb8M6qmUEzWfsDRGQqa_dpNbQgVh4OlT1_jvV9ihb11obtRli-sHXXOS6ABag6Qj7Cqal3HdT4jq_3SPoF_Z3LStzVH8Fm5IqalHbVbRaI7_wFI\";\n  const folderPath = \"/almost done\";\n  const {\n    0: files,\n    1: setFiles\n  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {\n    // Replace these with your own access token and folder path\n    const access_token = \"sl.BWS94i3rulUdIqFrFeDmzQ_QYMb8M6qmUEzWfsDRGQqa_dpNbQgVh4OlT1_jvV9ihb11obtRli-sHXXOS6ABag6Qj7Cqal3HdT4jq_3SPoF_Z3LStzVH8Fm5IqalHbVbRaI7_wFI\";\n    const folder_path = '/home/Almost Done/NYC'; // Get a list of files in the folder\n\n    const list_url = 'https://api.dropboxapi.com/2/files/list_folder';\n    const list_headers = {\n      'Authorization': 'Bearer ' + access_token,\n      'Content-Type': 'application/json'\n    };\n    const list_data = {\n      'path': folder_path\n    };\n    fetch(list_url, {\n      method: 'POST',\n      headers: list_headers,\n      body: JSON.stringify(list_data)\n    }).then(response => response.json()).then(data => {\n      setFiles(data['entries']);\n    }).catch(error => {// There was an error getting the list of files\n    });\n  }, []);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(Main, {\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"h1\", {\n      children: \"Photography\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 64,\n      columnNumber: 9\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 63,\n    columnNumber: 9\n  }, this);\n} // export const getServerSideProps: GetServerSideProps = async (context) => {\n//   const APP_KEY = process.env.NEXT_PUBLIC_DB_CLIENT_ID;\n//   const APP_SECRET = process.env.NEXT_PUBLIC_DB_CLIENT_SECRET;\n//   const ACCESS_TOKEN = process.env.NEXT_PUBLIC_DB_ACCESS_TOKEN;\n//   const folderPath = \"/almost done\"\n//   const dbx = dropboxV2Api.authenticate({\n//     token: ACCESS_TOKEN,\n//   });\n//   const response = await dbx({\n//     resource: \"files/list_folder\",\n//     parameters: {\n//       'path': \"home/Almost Done/NYC\",\n//     },\n//   });\n//   const folder = fetch(\"https://api.dropboxapi.com/2/files/list_folder\", {\n//     method: \"GET\",\n//     headers: {\n//       Authorization: `Bearer ${ACCESS_TOKEN}`,\n//       \"Content-Type\": \"application/json\",\n//     },\n//     body: JSON.stringify({\n//       path: folderPath,\n//     }),\n//   })\n//   const data = JSON.parse(JSON.stringify(folder['entries']))\n// console.log(data)\n//   return {\n//     props: {data},\n//   };\n// }//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9waG90b2dyYXBoeS50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQUlBLE1BQU1JLElBQUksR0FBR0Qsd0VBQUg7RUFBQTtFQUFBO0FBQUEsdUhBQVYsRUFTQTtBQUNBO0FBQ0E7O0FBR2UsU0FBU0csV0FBVCxHQUF1QjtFQUV0QyxNQUFNQyxPQUFPLEdBQUdDLGlCQUFoQjtFQUNBLE1BQU1HLFVBQVUsR0FBR0gsaUJBQW5CO0VBQ0EsTUFBTUssWUFBWSxHQUFHTCw2SUFBckI7RUFDQSxNQUFNTyxVQUFVLEdBQUcsY0FBbkI7RUFJQSxNQUFNO0lBQUEsR0FBQ0MsS0FBRDtJQUFBLEdBQVFDO0VBQVIsSUFBb0JmLCtDQUFRLENBQUMsRUFBRCxDQUFsQztFQUVBRCxnREFBUyxDQUFDLE1BQU07SUFDZDtJQUNBLE1BQU1pQixZQUFZLEdBQUdWLDZJQUFyQjtJQUNBLE1BQU1XLFdBQVcsR0FBRyx1QkFBcEIsQ0FIYyxDQUtkOztJQUNBLE1BQU1DLFFBQVEsR0FBRyxnREFBakI7SUFDQSxNQUFNQyxZQUFZLEdBQUc7TUFDbkIsaUJBQWlCLFlBQVlILFlBRFY7TUFFbkIsZ0JBQWdCO0lBRkcsQ0FBckI7SUFJQSxNQUFNSSxTQUFTLEdBQUc7TUFDaEIsUUFBUUg7SUFEUSxDQUFsQjtJQUdBSSxLQUFLLENBQUNILFFBQUQsRUFBVztNQUNkSSxNQUFNLEVBQUUsTUFETTtNQUVkQyxPQUFPLEVBQUVKLFlBRks7TUFHZEssSUFBSSxFQUFFQyxJQUFJLENBQUNDLFNBQUwsQ0FBZU4sU0FBZjtJQUhRLENBQVgsQ0FBTCxDQUtHTyxJQUxILENBS1FDLFFBQVEsSUFBSUEsUUFBUSxDQUFDQyxJQUFULEVBTHBCLEVBTUdGLElBTkgsQ0FNUUcsSUFBSSxJQUFJO01BQ1pmLFFBQVEsQ0FBQ2UsSUFBSSxDQUFDLFNBQUQsQ0FBTCxDQUFSO0lBQ0QsQ0FSSCxFQVNHQyxLQVRILENBU1NDLEtBQUssSUFBSSxDQUNkO0lBQ0QsQ0FYSDtFQVlELENBMUJRLEVBMEJOLEVBMUJNLENBQVQ7RUErQkksb0JBQ0ksOERBQUMsSUFBRDtJQUFBLHVCQUNBO01BQUE7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBO0VBREE7SUFBQTtJQUFBO0lBQUE7RUFBQSxRQURKO0FBS0gsRUFHRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBS0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0LWFsbW9zdC1kb25lLy4vcGFnZXMvcGhvdG9ncmFwaHkudHN4Pzg0OTEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XG5pbXBvcnQgeyBHZXRTZXJ2ZXJTaWRlUHJvcHMgfSBmcm9tIFwibmV4dFwiO1xuaW1wb3J0IGRyb3Bib3hWMkFwaSBmcm9tIFwiZHJvcGJveC12Mi1hcGlcIjtcblxuY29uc3QgTWFpbiA9IHN0eWxlZC5tYWluYFxuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIHBhZGRpbmctdG9wOiA5NnB4O1xuICB3aWR0aDogODAlO1xuYDtcblxuLy8gZXhwb3J0IGludGVyZmFjZSBkYXRhRmV0Y2gge1xuLy8gICBkYXRhOiBhbnk7XG4vLyB9XG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUGhvdG9ncmFwaHkoKSB7XG5cbmNvbnN0IEFQUF9LRVkgPSBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19EQl9DTElFTlRfSUQ7XG5jb25zdCBBUFBfU0VDUkVUID0gcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfREJfQ0xJRU5UX1NFQ1JFVDtcbmNvbnN0IEFDQ0VTU19UT0tFTiA9IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0RCX0FDQ0VTU19UT0tFTjtcbmNvbnN0IGZvbGRlclBhdGggPSBcIi9hbG1vc3QgZG9uZVwiXG5cblxuXG5jb25zdCBbZmlsZXMsIHNldEZpbGVzXSA9IHVzZVN0YXRlKFtdKTtcblxudXNlRWZmZWN0KCgpID0+IHtcbiAgLy8gUmVwbGFjZSB0aGVzZSB3aXRoIHlvdXIgb3duIGFjY2VzcyB0b2tlbiBhbmQgZm9sZGVyIHBhdGhcbiAgY29uc3QgYWNjZXNzX3Rva2VuID0gcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfREJfQUNDRVNTX1RPS0VOO1xuICBjb25zdCBmb2xkZXJfcGF0aCA9ICcvaG9tZS9BbG1vc3QgRG9uZS9OWUMnO1xuXG4gIC8vIEdldCBhIGxpc3Qgb2YgZmlsZXMgaW4gdGhlIGZvbGRlclxuICBjb25zdCBsaXN0X3VybCA9ICdodHRwczovL2FwaS5kcm9wYm94YXBpLmNvbS8yL2ZpbGVzL2xpc3RfZm9sZGVyJztcbiAgY29uc3QgbGlzdF9oZWFkZXJzID0ge1xuICAgICdBdXRob3JpemF0aW9uJzogJ0JlYXJlciAnICsgYWNjZXNzX3Rva2VuLFxuICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgfTtcbiAgY29uc3QgbGlzdF9kYXRhID0ge1xuICAgICdwYXRoJzogZm9sZGVyX3BhdGhcbiAgfTtcbiAgZmV0Y2gobGlzdF91cmwsIHtcbiAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICBoZWFkZXJzOiBsaXN0X2hlYWRlcnMsXG4gICAgYm9keTogSlNPTi5zdHJpbmdpZnkobGlzdF9kYXRhKVxuICB9KVxuICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAudGhlbihkYXRhID0+IHtcbiAgICAgIHNldEZpbGVzKGRhdGFbJ2VudHJpZXMnXSk7XG4gICAgfSlcbiAgICAuY2F0Y2goZXJyb3IgPT4ge1xuICAgICAgLy8gVGhlcmUgd2FzIGFuIGVycm9yIGdldHRpbmcgdGhlIGxpc3Qgb2YgZmlsZXNcbiAgICB9KTtcbn0sIFtdKTtcbiAgICAgICAgXG5cblxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPE1haW4+XG4gICAgICAgIDxoMT5QaG90b2dyYXBoeTwvaDE+XG4gICAgICAgIDwvTWFpbj5cbiAgICApO1xufVxuXG5cbi8vIGV4cG9ydCBjb25zdCBnZXRTZXJ2ZXJTaWRlUHJvcHM6IEdldFNlcnZlclNpZGVQcm9wcyA9IGFzeW5jIChjb250ZXh0KSA9PiB7XG4vLyAgIGNvbnN0IEFQUF9LRVkgPSBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19EQl9DTElFTlRfSUQ7XG4vLyAgIGNvbnN0IEFQUF9TRUNSRVQgPSBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19EQl9DTElFTlRfU0VDUkVUO1xuLy8gICBjb25zdCBBQ0NFU1NfVE9LRU4gPSBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19EQl9BQ0NFU1NfVE9LRU47XG4vLyAgIGNvbnN0IGZvbGRlclBhdGggPSBcIi9hbG1vc3QgZG9uZVwiXG5cbi8vICAgY29uc3QgZGJ4ID0gZHJvcGJveFYyQXBpLmF1dGhlbnRpY2F0ZSh7XG4vLyAgICAgdG9rZW46IEFDQ0VTU19UT0tFTixcbi8vICAgfSk7XG5cbi8vICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBkYngoe1xuLy8gICAgIHJlc291cmNlOiBcImZpbGVzL2xpc3RfZm9sZGVyXCIsXG4vLyAgICAgcGFyYW1ldGVyczoge1xuLy8gICAgICAgJ3BhdGgnOiBcImhvbWUvQWxtb3N0IERvbmUvTllDXCIsXG4gICAgXG4vLyAgICAgfSxcbi8vICAgfSk7XG5cbi8vICAgY29uc3QgZm9sZGVyID0gZmV0Y2goXCJodHRwczovL2FwaS5kcm9wYm94YXBpLmNvbS8yL2ZpbGVzL2xpc3RfZm9sZGVyXCIsIHtcbi8vICAgICBtZXRob2Q6IFwiR0VUXCIsXG4vLyAgICAgaGVhZGVyczoge1xuLy8gICAgICAgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke0FDQ0VTU19UT0tFTn1gLFxuLy8gICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4vLyAgICAgfSxcbi8vICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4vLyAgICAgICBwYXRoOiBmb2xkZXJQYXRoLFxuLy8gICAgIH0pLFxuXG4vLyAgIH0pXG4vLyAgIGNvbnN0IGRhdGEgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KGZvbGRlclsnZW50cmllcyddKSlcblxuLy8gY29uc29sZS5sb2coZGF0YSlcblxuIFxuIFxuIFxuLy8gICByZXR1cm4ge1xuLy8gICAgIHByb3BzOiB7ZGF0YX0sXG4vLyAgIH07XG4vLyB9Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJzdHlsZWQiLCJNYWluIiwibWFpbiIsIlBob3RvZ3JhcGh5IiwiQVBQX0tFWSIsInByb2Nlc3MiLCJlbnYiLCJORVhUX1BVQkxJQ19EQl9DTElFTlRfSUQiLCJBUFBfU0VDUkVUIiwiTkVYVF9QVUJMSUNfREJfQ0xJRU5UX1NFQ1JFVCIsIkFDQ0VTU19UT0tFTiIsIk5FWFRfUFVCTElDX0RCX0FDQ0VTU19UT0tFTiIsImZvbGRlclBhdGgiLCJmaWxlcyIsInNldEZpbGVzIiwiYWNjZXNzX3Rva2VuIiwiZm9sZGVyX3BhdGgiLCJsaXN0X3VybCIsImxpc3RfaGVhZGVycyIsImxpc3RfZGF0YSIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwidGhlbiIsInJlc3BvbnNlIiwianNvbiIsImRhdGEiLCJjYXRjaCIsImVycm9yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/photography.tsx\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("styled-components");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/photography.tsx"));
module.exports = __webpack_exports__;

})();