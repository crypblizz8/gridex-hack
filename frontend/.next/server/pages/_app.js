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
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./src/pages/_app.tsx":
/*!****************************!*\
  !*** ./src/pages/_app.tsx ***!
  \****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _web3modal_ethereum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @web3modal/ethereum */ \"@web3modal/ethereum\");\n/* harmony import */ var _web3modal_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @web3modal/react */ \"@web3modal/react\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! wagmi */ \"wagmi\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../styles/globals.css */ \"./src/styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _wagmi__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../wagmi */ \"./src/wagmi.ts\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_web3modal_ethereum__WEBPACK_IMPORTED_MODULE_1__, _web3modal_react__WEBPACK_IMPORTED_MODULE_2__, wagmi__WEBPACK_IMPORTED_MODULE_5__, _wagmi__WEBPACK_IMPORTED_MODULE_7__]);\n([_web3modal_ethereum__WEBPACK_IMPORTED_MODULE_1__, _web3modal_react__WEBPACK_IMPORTED_MODULE_2__, wagmi__WEBPACK_IMPORTED_MODULE_5__, _wagmi__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\n\n\n\n\nconst ethereumClient = new _web3modal_ethereum__WEBPACK_IMPORTED_MODULE_1__.EthereumClient(_wagmi__WEBPACK_IMPORTED_MODULE_7__.client, _wagmi__WEBPACK_IMPORTED_MODULE_7__.chains);\nfunction App({ Component , pageProps  }) {\n    const [mounted, setMounted] = react__WEBPACK_IMPORTED_MODULE_4__.useState(false);\n    react__WEBPACK_IMPORTED_MODULE_4__.useEffect(()=>setMounted(true), []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(wagmi__WEBPACK_IMPORTED_MODULE_5__.WagmiConfig, {\n        client: _wagmi__WEBPACK_IMPORTED_MODULE_7__.client,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_3___default()), {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                    children: \"wagmi\"\n                }, void 0, false, {\n                    fileName: \"/Users/tomterado/Documents/Code/crypblizz/gridex-hack/frontend/src/pages/_app.tsx\",\n                    lineNumber: 19,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/tomterado/Documents/Code/crypblizz/gridex-hack/frontend/src/pages/_app.tsx\",\n                lineNumber: 18,\n                columnNumber: 13\n            }, this),\n            mounted && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                ...pageProps\n            }, void 0, false, {\n                fileName: \"/Users/tomterado/Documents/Code/crypblizz/gridex-hack/frontend/src/pages/_app.tsx\",\n                lineNumber: 22,\n                columnNumber: 25\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_web3modal_react__WEBPACK_IMPORTED_MODULE_2__.Web3Modal, {\n                projectId: _wagmi__WEBPACK_IMPORTED_MODULE_7__.walletConnectProjectId,\n                ethereumClient: ethereumClient\n            }, void 0, false, {\n                fileName: \"/Users/tomterado/Documents/Code/crypblizz/gridex-hack/frontend/src/pages/_app.tsx\",\n                lineNumber: 24,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/tomterado/Documents/Code/crypblizz/gridex-hack/frontend/src/pages/_app.tsx\",\n        lineNumber: 17,\n        columnNumber: 9\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvX2FwcC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBbUQ7QUFDUjtBQUVWO0FBQ0Y7QUFDRztBQUNIO0FBRWlDO0FBRWhFLE1BQU1RLGlCQUFpQixJQUFJUiwrREFBY0EsQ0FBQ00sMENBQU1BLEVBQUVELDBDQUFNQTtBQUV4RCxTQUFTSSxJQUFJLEVBQUNDLFVBQVMsRUFBRUMsVUFBUyxFQUFXLEVBQUU7SUFDM0MsTUFBTSxDQUFDQyxTQUFTQyxXQUFXLEdBQUdWLDJDQUFjLENBQUMsS0FBSztJQUNsREEsNENBQWUsQ0FBQyxJQUFNVSxXQUFXLElBQUksR0FBRyxFQUFFO0lBQzFDLHFCQUNJLDhEQUFDVCw4Q0FBV0E7UUFBQ0UsUUFBUUEsMENBQU1BOzswQkFDdkIsOERBQUNKLGtEQUFRQTswQkFDTCw0RUFBQ2M7OEJBQU07Ozs7Ozs7Ozs7O1lBR1ZKLHlCQUFXLDhEQUFDRjtnQkFBVyxHQUFHQyxTQUFTOzs7Ozs7MEJBRXBDLDhEQUFDVix1REFBU0E7Z0JBQUNnQixXQUFXViwwREFBc0JBO2dCQUFFQyxnQkFBZ0JBOzs7Ozs7Ozs7Ozs7QUFHMUU7QUFFQSxpRUFBZUMsR0FBR0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2Zyb250ZW5kLy4vc3JjL3BhZ2VzL19hcHAudHN4P2Y5ZDYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtFdGhlcmV1bUNsaWVudH0gZnJvbSBcIkB3ZWIzbW9kYWwvZXRoZXJldW1cIjtcbmltcG9ydCB7V2ViM01vZGFsfSBmcm9tIFwiQHdlYjNtb2RhbC9yZWFjdFwiO1xuaW1wb3J0IHR5cGUge0FwcFByb3BzfSBmcm9tIFwibmV4dC9hcHBcIjtcbmltcG9ydCBOZXh0SGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7V2FnbWlDb25maWd9IGZyb20gXCJ3YWdtaVwiO1xuaW1wb3J0IFwiLi4vc3R5bGVzL2dsb2JhbHMuY3NzXCI7XG5cbmltcG9ydCB7Y2hhaW5zLCBjbGllbnQsIHdhbGxldENvbm5lY3RQcm9qZWN0SWR9IGZyb20gXCIuLi93YWdtaVwiO1xuXG5jb25zdCBldGhlcmV1bUNsaWVudCA9IG5ldyBFdGhlcmV1bUNsaWVudChjbGllbnQsIGNoYWlucyk7XG5cbmZ1bmN0aW9uIEFwcCh7Q29tcG9uZW50LCBwYWdlUHJvcHN9OiBBcHBQcm9wcykge1xuICAgIGNvbnN0IFttb3VudGVkLCBzZXRNb3VudGVkXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcbiAgICBSZWFjdC51c2VFZmZlY3QoKCkgPT4gc2V0TW91bnRlZCh0cnVlKSwgW10pO1xuICAgIHJldHVybiAoXG4gICAgICAgIDxXYWdtaUNvbmZpZyBjbGllbnQ9e2NsaWVudH0+XG4gICAgICAgICAgICA8TmV4dEhlYWQ+XG4gICAgICAgICAgICAgICAgPHRpdGxlPndhZ21pPC90aXRsZT5cbiAgICAgICAgICAgIDwvTmV4dEhlYWQ+XG5cbiAgICAgICAgICAgIHttb3VudGVkICYmIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz59XG5cbiAgICAgICAgICAgIDxXZWIzTW9kYWwgcHJvamVjdElkPXt3YWxsZXRDb25uZWN0UHJvamVjdElkfSBldGhlcmV1bUNsaWVudD17ZXRoZXJldW1DbGllbnR9IC8+XG4gICAgICAgIDwvV2FnbWlDb25maWc+XG4gICAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgQXBwO1xuIl0sIm5hbWVzIjpbIkV0aGVyZXVtQ2xpZW50IiwiV2ViM01vZGFsIiwiTmV4dEhlYWQiLCJSZWFjdCIsIldhZ21pQ29uZmlnIiwiY2hhaW5zIiwiY2xpZW50Iiwid2FsbGV0Q29ubmVjdFByb2plY3RJZCIsImV0aGVyZXVtQ2xpZW50IiwiQXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwibW91bnRlZCIsInNldE1vdW50ZWQiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInRpdGxlIiwicHJvamVjdElkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/_app.tsx\n");

/***/ }),

/***/ "./src/wagmi.ts":
/*!**********************!*\
  !*** ./src/wagmi.ts ***!
  \**********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"chains\": () => (/* binding */ chains),\n/* harmony export */   \"client\": () => (/* binding */ client),\n/* harmony export */   \"walletConnectProjectId\": () => (/* binding */ walletConnectProjectId)\n/* harmony export */ });\n/* harmony import */ var _web3modal_ethereum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @web3modal/ethereum */ \"@web3modal/ethereum\");\n/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! wagmi */ \"wagmi\");\n/* harmony import */ var wagmi_chains__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! wagmi/chains */ \"wagmi/chains\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_web3modal_ethereum__WEBPACK_IMPORTED_MODULE_0__, wagmi__WEBPACK_IMPORTED_MODULE_1__, wagmi_chains__WEBPACK_IMPORTED_MODULE_2__]);\n([_web3modal_ethereum__WEBPACK_IMPORTED_MODULE_0__, wagmi__WEBPACK_IMPORTED_MODULE_1__, wagmi_chains__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\nconst walletConnectProjectId = \"f5615090709814bc49c09fd9aa02860d\";\nconst { chains , provider , webSocketProvider  } = (0,wagmi__WEBPACK_IMPORTED_MODULE_1__.configureChains)([\n    wagmi_chains__WEBPACK_IMPORTED_MODULE_2__.mainnet,\n    ... true ? [\n        wagmi_chains__WEBPACK_IMPORTED_MODULE_2__.goerli\n    ] : 0\n], [\n    (0,_web3modal_ethereum__WEBPACK_IMPORTED_MODULE_0__.w3mProvider)({\n        projectId: walletConnectProjectId\n    })\n]);\nconst client = (0,wagmi__WEBPACK_IMPORTED_MODULE_1__.createClient)({\n    autoConnect: true,\n    connectors: (0,_web3modal_ethereum__WEBPACK_IMPORTED_MODULE_0__.w3mConnectors)({\n        chains,\n        projectId: walletConnectProjectId,\n        version: 1\n    }),\n    provider,\n    webSocketProvider\n});\n\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvd2FnbWkudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQWdFO0FBQ1g7QUFDUDtBQUV2QyxNQUFNTSx5QkFBeUIsbUNBQWtDO0FBRXhFLE1BQU0sRUFBRUMsT0FBTSxFQUFFQyxTQUFRLEVBQUVDLGtCQUFpQixFQUFFLEdBQUdQLHNEQUFlQSxDQUM3RDtJQUFDRyxpREFBT0E7T0FBTUssS0FBeUIsR0FBZ0I7UUFBQ04sZ0RBQU1BO0tBQUMsR0FBRyxDQUFFO0NBQUUsRUFDdEU7SUFBQ0gsZ0VBQVdBLENBQUM7UUFBRVUsV0FBV0w7SUFBdUI7Q0FBRztBQUcvQyxNQUFNTSxTQUFTVCxtREFBWUEsQ0FBQztJQUNqQ1UsYUFBYSxJQUFJO0lBQ2pCQyxZQUFZZCxrRUFBYUEsQ0FBQztRQUN4Qk87UUFDQUksV0FBV0w7UUFDWFMsU0FBUztJQUNYO0lBQ0FQO0lBQ0FDO0FBQ0YsR0FBRTtBQUVlIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi9zcmMvd2FnbWkudHM/NWIzNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB3M21Db25uZWN0b3JzLCB3M21Qcm92aWRlciB9IGZyb20gJ0B3ZWIzbW9kYWwvZXRoZXJldW0nXG5pbXBvcnQgeyBjb25maWd1cmVDaGFpbnMsIGNyZWF0ZUNsaWVudCB9IGZyb20gJ3dhZ21pJ1xuaW1wb3J0IHsgZ29lcmxpLCBtYWlubmV0IH0gZnJvbSAnd2FnbWkvY2hhaW5zJ1xuXG5leHBvcnQgY29uc3Qgd2FsbGV0Q29ubmVjdFByb2plY3RJZCA9ICdmNTYxNTA5MDcwOTgxNGJjNDljMDlmZDlhYTAyODYwZCdcblxuY29uc3QgeyBjaGFpbnMsIHByb3ZpZGVyLCB3ZWJTb2NrZXRQcm92aWRlciB9ID0gY29uZmlndXJlQ2hhaW5zKFxuICBbbWFpbm5ldCwgLi4uKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnID8gW2dvZXJsaV0gOiBbXSldLFxuICBbdzNtUHJvdmlkZXIoeyBwcm9qZWN0SWQ6IHdhbGxldENvbm5lY3RQcm9qZWN0SWQgfSldLFxuKVxuXG5leHBvcnQgY29uc3QgY2xpZW50ID0gY3JlYXRlQ2xpZW50KHtcbiAgYXV0b0Nvbm5lY3Q6IHRydWUsXG4gIGNvbm5lY3RvcnM6IHczbUNvbm5lY3RvcnMoe1xuICAgIGNoYWlucyxcbiAgICBwcm9qZWN0SWQ6IHdhbGxldENvbm5lY3RQcm9qZWN0SWQsXG4gICAgdmVyc2lvbjogMSxcbiAgfSksXG4gIHByb3ZpZGVyLFxuICB3ZWJTb2NrZXRQcm92aWRlcixcbn0pXG5cbmV4cG9ydCB7IGNoYWlucyB9XG4iXSwibmFtZXMiOlsidzNtQ29ubmVjdG9ycyIsInczbVByb3ZpZGVyIiwiY29uZmlndXJlQ2hhaW5zIiwiY3JlYXRlQ2xpZW50IiwiZ29lcmxpIiwibWFpbm5ldCIsIndhbGxldENvbm5lY3RQcm9qZWN0SWQiLCJjaGFpbnMiLCJwcm92aWRlciIsIndlYlNvY2tldFByb3ZpZGVyIiwicHJvY2VzcyIsInByb2plY3RJZCIsImNsaWVudCIsImF1dG9Db25uZWN0IiwiY29ubmVjdG9ycyIsInZlcnNpb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/wagmi.ts\n");

/***/ }),

/***/ "./src/styles/globals.css":
/*!********************************!*\
  !*** ./src/styles/globals.css ***!
  \********************************/
/***/ (() => {



/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "@web3modal/ethereum":
/*!**************************************!*\
  !*** external "@web3modal/ethereum" ***!
  \**************************************/
/***/ ((module) => {

"use strict";
module.exports = import("@web3modal/ethereum");;

/***/ }),

/***/ "@web3modal/react":
/*!***********************************!*\
  !*** external "@web3modal/react" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = import("@web3modal/react");;

/***/ }),

/***/ "wagmi":
/*!************************!*\
  !*** external "wagmi" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = import("wagmi");;

/***/ }),

/***/ "wagmi/chains":
/*!*******************************!*\
  !*** external "wagmi/chains" ***!
  \*******************************/
/***/ ((module) => {

"use strict";
module.exports = import("wagmi/chains");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/_app.tsx"));
module.exports = __webpack_exports__;

})();