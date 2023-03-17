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
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./src/components/Account.tsx":
/*!************************************!*\
  !*** ./src/components/Account.tsx ***!
  \************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Account\": () => (/* binding */ Account)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! wagmi */ \"wagmi\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([wagmi__WEBPACK_IMPORTED_MODULE_1__]);\nwagmi__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\nfunction Account() {\n    const { address  } = (0,wagmi__WEBPACK_IMPORTED_MODULE_1__.useAccount)();\n    const { data: ensName  } = (0,wagmi__WEBPACK_IMPORTED_MODULE_1__.useEnsName)({\n        address\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            ensName ?? address,\n            ensName ? ` (${address})` : null\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/tomterado/Documents/Code/crypblizz/gridex-hack/frontend/src/components/Account.tsx\",\n        lineNumber: 8,\n        columnNumber: 5\n    }, this);\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9BY2NvdW50LnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUE4QztBQUV2QyxTQUFTRSxVQUFVO0lBQ3hCLE1BQU0sRUFBRUMsUUFBTyxFQUFFLEdBQUdILGlEQUFVQTtJQUM5QixNQUFNLEVBQUVJLE1BQU1DLFFBQU8sRUFBRSxHQUFHSixpREFBVUEsQ0FBQztRQUFFRTtJQUFRO0lBRS9DLHFCQUNFLDhEQUFDRzs7WUFDRUQsV0FBV0Y7WUFDWEUsVUFBVSxDQUFDLEVBQUUsRUFBRUYsUUFBUSxDQUFDLENBQUMsR0FBRyxJQUFJOzs7Ozs7O0FBR3ZDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udGVuZC8uL3NyYy9jb21wb25lbnRzL0FjY291bnQudHN4Pzc4YjQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlQWNjb3VudCwgdXNlRW5zTmFtZSB9IGZyb20gJ3dhZ21pJ1xuXG5leHBvcnQgZnVuY3Rpb24gQWNjb3VudCgpIHtcbiAgY29uc3QgeyBhZGRyZXNzIH0gPSB1c2VBY2NvdW50KClcbiAgY29uc3QgeyBkYXRhOiBlbnNOYW1lIH0gPSB1c2VFbnNOYW1lKHsgYWRkcmVzcyB9KVxuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIHtlbnNOYW1lID8/IGFkZHJlc3N9XG4gICAgICB7ZW5zTmFtZSA/IGAgKCR7YWRkcmVzc30pYCA6IG51bGx9XG4gICAgPC9kaXY+XG4gIClcbn1cbiJdLCJuYW1lcyI6WyJ1c2VBY2NvdW50IiwidXNlRW5zTmFtZSIsIkFjY291bnQiLCJhZGRyZXNzIiwiZGF0YSIsImVuc05hbWUiLCJkaXYiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/Account.tsx\n");

/***/ }),

/***/ "./src/components/index.ts":
/*!*********************************!*\
  !*** ./src/components/index.ts ***!
  \*********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Account\": () => (/* reexport safe */ _Account__WEBPACK_IMPORTED_MODULE_0__.Account)\n/* harmony export */ });\n/* harmony import */ var _Account__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Account */ \"./src/components/Account.tsx\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Account__WEBPACK_IMPORTED_MODULE_0__]);\n_Account__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9pbmRleC50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFtQyIsInNvdXJjZXMiOlsid2VicGFjazovL2Zyb250ZW5kLy4vc3JjL2NvbXBvbmVudHMvaW5kZXgudHM/MGYzOCJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgeyBBY2NvdW50IH0gZnJvbSAnLi9BY2NvdW50J1xuIl0sIm5hbWVzIjpbIkFjY291bnQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/index.ts\n");

/***/ }),

/***/ "./src/pages/index.tsx":
/*!*****************************!*\
  !*** ./src/pages/index.tsx ***!
  \*****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _web3modal_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @web3modal/react */ \"@web3modal/react\");\n/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! wagmi */ \"wagmi\");\n/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components */ \"./src/components/index.ts\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_web3modal_react__WEBPACK_IMPORTED_MODULE_1__, wagmi__WEBPACK_IMPORTED_MODULE_2__, _components__WEBPACK_IMPORTED_MODULE_3__]);\n([_web3modal_react__WEBPACK_IMPORTED_MODULE_1__, wagmi__WEBPACK_IMPORTED_MODULE_2__, _components__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\nfunction Page() {\n    const { isConnected  } = (0,wagmi__WEBPACK_IMPORTED_MODULE_2__.useAccount)();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"px-4\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex justify-between border mt-4\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        children: \"wagmi + Web3Modal + Next.js\"\n                    }, void 0, false, {\n                        fileName: \"/Users/tomterado/Documents/Code/crypblizz/gridex-hack/frontend/src/pages/index.tsx\",\n                        lineNumber: 12,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_web3modal_react__WEBPACK_IMPORTED_MODULE_1__.Web3Button, {}, void 0, false, {\n                        fileName: \"/Users/tomterado/Documents/Code/crypblizz/gridex-hack/frontend/src/pages/index.tsx\",\n                        lineNumber: 13,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/tomterado/Documents/Code/crypblizz/gridex-hack/frontend/src/pages/index.tsx\",\n                lineNumber: 11,\n                columnNumber: 13\n            }, this),\n            isConnected && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components__WEBPACK_IMPORTED_MODULE_3__.Account, {}, void 0, false, {\n                fileName: \"/Users/tomterado/Documents/Code/crypblizz/gridex-hack/frontend/src/pages/index.tsx\",\n                lineNumber: 16,\n                columnNumber: 29\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/tomterado/Documents/Code/crypblizz/gridex-hack/frontend/src/pages/index.tsx\",\n        lineNumber: 10,\n        columnNumber: 9\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Page);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvaW5kZXgudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBNEM7QUFDWDtBQUVLO0FBRXRDLFNBQVNHLE9BQU87SUFDWixNQUFNLEVBQUNDLFlBQVcsRUFBQyxHQUFHSCxpREFBVUE7SUFFaEMscUJBQ0ksOERBQUNJO1FBQUlDLFdBQVU7OzBCQUNYLDhEQUFDRDtnQkFBSUMsV0FBVTs7a0NBQ1gsOERBQUNDO2tDQUFHOzs7Ozs7a0NBQ0osOERBQUNQLHdEQUFVQTs7Ozs7Ozs7Ozs7WUFHZEksNkJBQWUsOERBQUNGLGdEQUFPQTs7Ozs7Ozs7Ozs7QUFHcEM7QUFFQSxpRUFBZUMsSUFBSUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2Zyb250ZW5kLy4vc3JjL3BhZ2VzL2luZGV4LnRzeD8xOWEwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7V2ViM0J1dHRvbn0gZnJvbSBcIkB3ZWIzbW9kYWwvcmVhY3RcIjtcbmltcG9ydCB7dXNlQWNjb3VudH0gZnJvbSBcIndhZ21pXCI7XG5cbmltcG9ydCB7QWNjb3VudH0gZnJvbSBcIi4uL2NvbXBvbmVudHNcIjtcblxuZnVuY3Rpb24gUGFnZSgpIHtcbiAgICBjb25zdCB7aXNDb25uZWN0ZWR9ID0gdXNlQWNjb3VudCgpO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJweC00XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1iZXR3ZWVuIGJvcmRlciBtdC00XCI+XG4gICAgICAgICAgICAgICAgPGgxPndhZ21pICsgV2ViM01vZGFsICsgTmV4dC5qczwvaDE+XG4gICAgICAgICAgICAgICAgPFdlYjNCdXR0b24gLz5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICB7aXNDb25uZWN0ZWQgJiYgPEFjY291bnQgLz59XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFBhZ2U7XG4iXSwibmFtZXMiOlsiV2ViM0J1dHRvbiIsInVzZUFjY291bnQiLCJBY2NvdW50IiwiUGFnZSIsImlzQ29ubmVjdGVkIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDEiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/index.tsx\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "@web3modal/react":
/*!***********************************!*\
  !*** external "@web3modal/react" ***!
  \***********************************/
/***/ ((module) => {

module.exports = import("@web3modal/react");;

/***/ }),

/***/ "wagmi":
/*!************************!*\
  !*** external "wagmi" ***!
  \************************/
/***/ ((module) => {

module.exports = import("wagmi");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/index.tsx"));
module.exports = __webpack_exports__;

})();