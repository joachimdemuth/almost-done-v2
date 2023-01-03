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

/***/ "./lib/fetches.ts":
/*!************************!*\
  !*** ./lib/fetches.ts ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"currentlyPlaying\": () => (/* binding */ currentlyPlaying),\n/* harmony export */   \"fetchTopArtist\": () => (/* binding */ fetchTopArtist),\n/* harmony export */   \"fetchTopSongs\": () => (/* binding */ fetchTopSongs),\n/* harmony export */   \"getDbAccessToken\": () => (/* binding */ getDbAccessToken)\n/* harmony export */ });\n/* harmony import */ var querystring__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! querystring */ \"querystring\");\n/* harmony import */ var querystring__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(querystring__WEBPACK_IMPORTED_MODULE_0__);\n\nconst client_id = \"7bebb3a6d0d44069aba19bc8186f8f91\";\nconst client_secret = \"f1c39ffc404f46cf9ef122079a870d6c\";\nconst refresh_token = \"AQBBcDZ4_jf6lUCrz-uBVfFXIwsuqEuaB_6Dso-Gd0Cw_tH9ljo4cKF8Y3OfYFqPrtWC16zTWptdIOjdGj7FkDaEqbBN5GewNphDIIIoRWZxanxQjA5s6bUwwFGk6-17yjs\";\nconst db_client_id = \"\";\nconst db_client_secret = \"\";\n\nvar Buffer = (__webpack_require__(/*! buffer/ */ \"buffer/\").Buffer); // note: the trailing slash is important!\n\n\nconst basic = Buffer.from(`${client_id}:${client_secret}`).toString('base64');\nconst db = Buffer.from(`${db_client_id}:${db_client_secret}`).toString('base64');\nconst TOKEN_ENDPOINT = \"https://accounts.spotify.com/api/token\";\nconst SPOTIFY_ENDPOINT = 'https://api.spotify.com/v1/me/top/';\n\nconst getAccessToken = async () => {\n  const response = await fetch(TOKEN_ENDPOINT, {\n    method: 'POST',\n    headers: {\n      Authorization: `Basic ${basic}`,\n      'Content-Type': 'application/x-www-form-urlencoded'\n    },\n    body: querystring__WEBPACK_IMPORTED_MODULE_0___default().stringify({\n      grant_type: 'refresh_token',\n      refresh_token\n    })\n  });\n  return response.json();\n};\n\nconst getDbAccessToken = async () => {\n  const response = await fetch(\"https://api.dropboxapi.com/2/files/list_folder\", {\n    method: 'POST',\n    headers: {\n      Authorization: `Basic ${db}`,\n      'Content-Type': 'application/json'\n    },\n    body: JSON.stringify({\n      \"include_deleted\": false,\n      \"include_has_explicit_shared_members\": false,\n      \"include_media_info\": false,\n      \"include_mounted_folders\": true,\n      \"include_non_downloadable_files\": true,\n      \"path\": \"/home/Almost%20Done\",\n      \"recursive\": false\n    })\n  });\n  return response.json();\n};\nconst fetchTopArtist = async (range, limit) => {\n  // artists?time_range=long_term&limit=10\n  const {\n    access_token\n  } = await getAccessToken();\n  return fetch(`${SPOTIFY_ENDPOINT}artists?time_range=${range}&limit=${limit}`, {\n    headers: {\n      Authorization: `Bearer ${access_token}`\n    }\n  });\n};\nconst fetchTopSongs = async (range, limit) => {\n  const {\n    access_token\n  } = await getAccessToken();\n  return fetch(`${SPOTIFY_ENDPOINT}tracks?time_range=${range}&limit=${limit}`, {\n    headers: {\n      Authorization: `Bearer ${access_token}`\n    }\n  });\n};\nconst currentlyPlaying = async () => {\n  const {\n    access_token\n  } = await getAccessToken();\n  return fetch(\"https://api.spotify.com/v1/me/player/currently-playing\", {\n    headers: {\n      Authorization: `Bearer ${access_token}`\n    }\n  });\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUMsd0RBQUQsRUFBMkQ7SUFDbkVFLE9BQU8sRUFBRTtNQUNMQyxhQUFhLEVBQUcsVUFBU1UsWUFBYTtJQURqQztFQUQwRCxDQUEzRCxDQUFaO0FBS0gsQ0FQTSIsInNvdXJjZXMiOlsid2VicGFjazovL25leHQtYWxtb3N0LWRvbmUvLi9saWIvZmV0Y2hlcy50cz8xZjE1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBxdWVyeVN0cmluZyBmcm9tICdxdWVyeXN0cmluZydcblxuY29uc3QgY2xpZW50X2lkID0gcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQ0xJRU5UX0lEXG5jb25zdCBjbGllbnRfc2VjcmV0ID0gcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQ0xJRU5UX1NFQ1JFVFxuY29uc3QgcmVmcmVzaF90b2tlbiA9IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX1JFRlJFU0hfVE9LRU5cblxuXG5jb25zdCBkYl9jbGllbnRfaWQgPSBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19EQl9DTElFTlRfSURcbmNvbnN0IGRiX2NsaWVudF9zZWNyZXQgPSBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19EQl9DTElFTlRfU0VDUkVUXG5cbnZhciBCdWZmZXIgPSByZXF1aXJlKCdidWZmZXIvJykuQnVmZmVyICAvLyBub3RlOiB0aGUgdHJhaWxpbmcgc2xhc2ggaXMgaW1wb3J0YW50IVxuY29uc3QgYmFzaWMgPSBCdWZmZXIuZnJvbShgJHtjbGllbnRfaWR9OiR7Y2xpZW50X3NlY3JldH1gKS50b1N0cmluZygnYmFzZTY0JylcbmNvbnN0IGRiID0gQnVmZmVyLmZyb20oYCR7ZGJfY2xpZW50X2lkfToke2RiX2NsaWVudF9zZWNyZXR9YCkudG9TdHJpbmcoJ2Jhc2U2NCcpXG5jb25zdCBUT0tFTl9FTkRQT0lOVCA9IFwiaHR0cHM6Ly9hY2NvdW50cy5zcG90aWZ5LmNvbS9hcGkvdG9rZW5cIlxuY29uc3QgU1BPVElGWV9FTkRQT0lOVCA9ICdodHRwczovL2FwaS5zcG90aWZ5LmNvbS92MS9tZS90b3AvJ1xuXG5cbmltcG9ydCBkcm9wYm94VjJBcGkgZnJvbSBcImRyb3Bib3gtdjItYXBpXCI7XG5pbXBvcnQgeyBEcm9wYm94IH0gZnJvbSAnZHJvcGJveCc7XG5cbmNvbnN0IGdldEFjY2Vzc1Rva2VuID0gYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goVE9LRU5fRU5EUE9JTlQsIHtcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgIEF1dGhvcml6YXRpb246IGBCYXNpYyAke2Jhc2ljfWAsXG4gICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCcsXG4gICAgICAgIH0sXG4gICAgICAgIGJvZHk6IHF1ZXJ5U3RyaW5nLnN0cmluZ2lmeSh7XG4gICAgICAgICAgICBncmFudF90eXBlOiAncmVmcmVzaF90b2tlbicsIHJlZnJlc2hfdG9rZW4sXG4gICAgICAgIH0pLFxuICAgIH0pXG5cbiAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xuXG59XG5cbmV4cG9ydCBjb25zdCBnZXREYkFjY2Vzc1Rva2VuID0gYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXCJodHRwczovL2FwaS5kcm9wYm94YXBpLmNvbS8yL2ZpbGVzL2xpc3RfZm9sZGVyXCIsIHtcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgIEF1dGhvcml6YXRpb246IGBCYXNpYyAke2RifWAsXG4gICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICB9LFxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgICBcImluY2x1ZGVfZGVsZXRlZFwiOmZhbHNlLFxuICAgICAgICAgICAgXCJpbmNsdWRlX2hhc19leHBsaWNpdF9zaGFyZWRfbWVtYmVyc1wiOmZhbHNlLFxuICAgICAgICAgICAgXCJpbmNsdWRlX21lZGlhX2luZm9cIjpmYWxzZSxcbiAgICAgICAgICAgIFwiaW5jbHVkZV9tb3VudGVkX2ZvbGRlcnNcIjp0cnVlLFxuICAgICAgICAgICAgXCJpbmNsdWRlX25vbl9kb3dubG9hZGFibGVfZmlsZXNcIjp0cnVlLFxuICAgICAgICAgICAgXCJwYXRoXCI6XCIvaG9tZS9BbG1vc3QlMjBEb25lXCIsXG4gICAgICAgICAgICBcInJlY3Vyc2l2ZVwiOmZhbHNlXG4gICAgICAgIH0pLFxuICAgIH0pXG5cbiAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xuXG59XG5cblxuXG5cblxuXG5cblxuZXhwb3J0IGNvbnN0IGZldGNoVG9wQXJ0aXN0ID0gYXN5bmMgKHJhbmdlOnN0cmluZyxsaW1pdDpzdHJpbmcpID0+IHtcbiAgLy8gYXJ0aXN0cz90aW1lX3JhbmdlPWxvbmdfdGVybSZsaW1pdD0xMFxuICAgIGNvbnN0IHsgYWNjZXNzX3Rva2VuIH0gPSBhd2FpdCBnZXRBY2Nlc3NUb2tlbigpXG4gICAgcmV0dXJuIGZldGNoKGAke1NQT1RJRllfRU5EUE9JTlR9YXJ0aXN0cz90aW1lX3JhbmdlPSR7cmFuZ2V9JmxpbWl0PSR7bGltaXR9YCxcbiAgICB7XG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHthY2Nlc3NfdG9rZW59YCxcbiAgICAgICAgfVxuICAgIH0pXG59XG5cbmV4cG9ydCBjb25zdCBmZXRjaFRvcFNvbmdzID0gYXN5bmMgKHJhbmdlOnN0cmluZywgbGltaXQ6c3RyaW5nKSA9PiB7XG4gICAgY29uc3QgeyBhY2Nlc3NfdG9rZW4gfSA9IGF3YWl0IGdldEFjY2Vzc1Rva2VuKClcbiAgICByZXR1cm4gZmV0Y2goYCR7U1BPVElGWV9FTkRQT0lOVH10cmFja3M/dGltZV9yYW5nZT0ke3JhbmdlfSZsaW1pdD0ke2xpbWl0fWAsXG4gICAge1xuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7YWNjZXNzX3Rva2VufWAsXG4gICAgICAgIH1cbiAgICB9KVxufVxuXG5leHBvcnQgY29uc3QgY3VycmVudGx5UGxheWluZyA9IGFzeW5jICgpID0+IHtcbiAgICBjb25zdCB7IGFjY2Vzc190b2tlbiB9ID0gYXdhaXQgZ2V0QWNjZXNzVG9rZW4oKVxuICAgIHJldHVybiBmZXRjaChcImh0dHBzOi8vYXBpLnNwb3RpZnkuY29tL3YxL21lL3BsYXllci9jdXJyZW50bHktcGxheWluZ1wiLCB7XG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHthY2Nlc3NfdG9rZW59YCxcbiAgICAgICAgfVxuICAgIH0pXG59XG5cblxuXG5cblxuIl0sIm5hbWVzIjpbInF1ZXJ5U3RyaW5nIiwiY2xpZW50X2lkIiwicHJvY2VzcyIsImVudiIsIk5FWFRfUFVCTElDX0NMSUVOVF9JRCIsImNsaWVudF9zZWNyZXQiLCJORVhUX1BVQkxJQ19DTElFTlRfU0VDUkVUIiwicmVmcmVzaF90b2tlbiIsIk5FWFRfUFVCTElDX1JFRlJFU0hfVE9LRU4iLCJkYl9jbGllbnRfaWQiLCJORVhUX1BVQkxJQ19EQl9DTElFTlRfSUQiLCJkYl9jbGllbnRfc2VjcmV0IiwiTkVYVF9QVUJMSUNfREJfQ0xJRU5UX1NFQ1JFVCIsIkJ1ZmZlciIsInJlcXVpcmUiLCJiYXNpYyIsImZyb20iLCJ0b1N0cmluZyIsImRiIiwiVE9LRU5fRU5EUE9JTlQiLCJTUE9USUZZX0VORFBPSU5UIiwiZ2V0QWNjZXNzVG9rZW4iLCJyZXNwb25zZSIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsIkF1dGhvcml6YXRpb24iLCJib2R5Iiwic3RyaW5naWZ5IiwiZ3JhbnRfdHlwZSIsImpzb24iLCJnZXREYkFjY2Vzc1Rva2VuIiwiSlNPTiIsImZldGNoVG9wQXJ0aXN0IiwicmFuZ2UiLCJsaW1pdCIsImFjY2Vzc190b2tlbiIsImZldGNoVG9wU29uZ3MiLCJjdXJyZW50bHlQbGF5aW5nIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./lib/fetches.ts\n");

/***/ }),

/***/ "./pages/photography.tsx":
/*!*******************************!*\
  !*** ./pages/photography.tsx ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Photography)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _lib_fetches__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/fetches */ \"./lib/fetches.ts\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);\nvar _jsxFileName = \"/Users/jde/Desktop/almost-done-v2/pages/photography.tsx\";\n\n\n\n\nconst Main = styled_components__WEBPACK_IMPORTED_MODULE_1___default().main.withConfig({\n  displayName: \"photography__Main\",\n  componentId: \"sc-1x8tlwc-0\"\n})([\"display:flex;flex-direction:column;align-items:center;justify-content:space-between;padding-top:96px;width:80%;\"]);\nfunction Photography() {\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {\n    const getAccessToken = async () => {\n      const accessToken = await (0,_lib_fetches__WEBPACK_IMPORTED_MODULE_2__.getDbAccessToken)();\n      console.log(accessToken);\n    };\n\n    getAccessToken();\n  }, []);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(Main, {\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"h1\", {\n      children: \"Photography\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 9\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 32,\n    columnNumber: 9\n  }, this);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9waG90b2dyYXBoeS50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBOztBQUVBLE1BQU1JLElBQUksR0FBR0Ysd0VBQUg7RUFBQTtFQUFBO0FBQUEsdUhBQVY7QUFXZSxTQUFTSSxXQUFULEdBQXVCO0VBRXBDTCxnREFBUyxDQUFDLE1BQU07SUFDZCxNQUFNTSxjQUFjLEdBQUcsWUFBWTtNQUNqQyxNQUFNQyxXQUFXLEdBQUcsTUFBTUwsOERBQWdCLEVBQTFDO01BQ0FNLE9BQU8sQ0FBQ0MsR0FBUixDQUFZRixXQUFaO0lBQ0QsQ0FIRDs7SUFLQUQsY0FBYztFQUNmLENBUFEsRUFPTixFQVBNLENBQVQ7RUFZRSxvQkFDSSw4REFBQyxJQUFEO0lBQUEsdUJBQ0E7TUFBQTtJQUFBO01BQUE7TUFBQTtNQUFBO0lBQUE7RUFEQTtJQUFBO0lBQUE7SUFBQTtFQUFBLFFBREo7QUFLSCIsInNvdXJjZXMiOlsid2VicGFjazovL25leHQtYWxtb3N0LWRvbmUvLi9wYWdlcy9waG90b2dyYXBoeS50c3g/ODQ5MSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuaW1wb3J0IHsgR2V0U2VydmVyU2lkZVByb3BzIH0gZnJvbSBcIm5leHRcIjtcbmltcG9ydCB7IGdldERiQWNjZXNzVG9rZW4gfSBmcm9tIFwiLi4vbGliL2ZldGNoZXNcIjtcblxuY29uc3QgTWFpbiA9IHN0eWxlZC5tYWluYFxuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIHBhZGRpbmctdG9wOiA5NnB4O1xuICB3aWR0aDogODAlO1xuYDtcblxuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBob3RvZ3JhcGh5KCkge1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgZ2V0QWNjZXNzVG9rZW4gPSBhc3luYyAoKSA9PiB7XG4gICAgICBjb25zdCBhY2Nlc3NUb2tlbiA9IGF3YWl0IGdldERiQWNjZXNzVG9rZW4oKTtcbiAgICAgIGNvbnNvbGUubG9nKGFjY2Vzc1Rva2VuKTtcbiAgICB9O1xuXG4gICAgZ2V0QWNjZXNzVG9rZW4oKTtcbiAgfSwgW10pXG4gICAgICAgIFxuXG5cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxNYWluPlxuICAgICAgICA8aDE+UGhvdG9ncmFwaHk8L2gxPlxuICAgICAgICA8L01haW4+XG4gICAgKTtcbn0iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJzdHlsZWQiLCJnZXREYkFjY2Vzc1Rva2VuIiwiTWFpbiIsIm1haW4iLCJQaG90b2dyYXBoeSIsImdldEFjY2Vzc1Rva2VuIiwiYWNjZXNzVG9rZW4iLCJjb25zb2xlIiwibG9nIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/photography.tsx\n");

/***/ }),

/***/ "buffer/":
/*!**************************!*\
  !*** external "buffer/" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("buffer/");

/***/ }),

/***/ "querystring":
/*!******************************!*\
  !*** external "querystring" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("querystring");

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