"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-client)/./public/MainStyles/Header/index.ts":
/*!*******************************************!*\
  !*** ./public/MainStyles/Header/index.ts ***!
  \*******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"DetailsButton\": function() { return /* binding */ DetailsButton; },\n/* harmony export */   \"FilmsContainer\": function() { return /* binding */ FilmsContainer; },\n/* harmony export */   \"HeaderContent\": function() { return /* binding */ HeaderContent; },\n/* harmony export */   \"ImageContainer\": function() { return /* binding */ ImageContainer; },\n/* harmony export */   \"Main\": function() { return /* binding */ Main; },\n/* harmony export */   \"MoviesImage\": function() { return /* binding */ MoviesImage; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @swc/helpers/_/_tagged_template_literal */ \"(app-client)/./node_modules/@swc/helpers/esm/_tagged_template_literal.js\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ \"(app-client)/./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n\nfunction _templateObject() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n  height: 100vh;\\n  width: 100vw;\\n  background-image: url('./images/header-background.jpg');\\n  background-size: cover;\\n  box-shadow: inset 0 -300px 300px 10px black;\\n  display: flex;\\n  justify-content: center;\\n  align-items: flex-end;\\n\"\n    ]);\n    _templateObject = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject1() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n  display: flex;\\n  align-items: center;\\n  flex-direction: column;\\n  gap: 10px;\\n  margin-bottom: 60px;\\n  color: white;\\n\"\n    ]);\n    _templateObject1 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject2() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n  margin-top: 40px;\\n\"\n    ]);\n    _templateObject2 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject3() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n  display: flex;\\n  flex-direction: row;\\n  width: 100%;\\n  gap: 10px;\\n  overflow-x: scroll;\\n  scroll-behavior: smooth;\\n  margin-top: 20px;\\n\"\n    ]);\n    _templateObject3 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject4() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\nwidth: 30%;\\nposition: relative;\\ncursor: pointer;\\n\\n\\n@keyframes imageAfter{ \\n  from{\\n    opacity: 0;\\n  } to {\\n    opacity: 1;\\n  }\\n}\\n\\n\\n&:hover{\\n  &::after{\\n    position: absolute;\\n    z-index: 1;\\n    left: 0;\\n    width: 100%;\\n    height: 100%;\\n    animation: forwards imageAfter 0.5s;\\n    content: '';\\n    background-color: #000000a7;\\n    border-radius: 10px; \\n  }\\n  \\n  .detailsButton{\\n    display: flex;\\n  }\\n}\\n\"\n    ]);\n    _templateObject4 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject5() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\nwidth: 70px;\\nheight: 70px;\\ncursor: pointer;\\njustify-content: center;\\nalign-items: center;\\nborder-radius: 50%;\\nbackground-color: orange;\\ncolor: white;\\nfont-weight: bold;\\nborder: none;\\ntransition: 0.5s;\\n\\n&:hover{\\n  background-color: #ff6a00;\\n}\\n\"\n    ]);\n    _templateObject5 = function() {\n        return data;\n    };\n    return data;\n}\n\nconst Main = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].main(_templateObject());\nconst HeaderContent = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div(_templateObject1());\nconst FilmsContainer = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div(_templateObject2());\nconst MoviesImage = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div(_templateObject3());\nconst ImageContainer = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div(_templateObject4());\nconst DetailsButton = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].button(_templateObject5());\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vcHVibGljL01haW5TdHlsZXMvSGVhZGVyL2luZGV4LnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFzRDtBQUUvQyxNQUFNQyxPQUFPRCw4REFBVyxvQkFTN0I7QUFFSyxNQUFNRyxnQkFBZ0JILDZEQUFVLHFCQU9yQztBQUVLLE1BQU1LLGlCQUFpQkwsNkRBQVUscUJBRXZDO0FBRU0sTUFBTU0sY0FBY04sNkRBQVUscUJBUXBDO0FBRU0sTUFBTU8saUJBQWlCUCw2REFBVSxxQkFnQ3ZDO0FBRU0sTUFBTVEsZ0JBQWdCUixnRUFBYSxxQkFnQnpDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3B1YmxpYy9NYWluU3R5bGVzL0hlYWRlci9pbmRleC50cz9iZWQ5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZWQsIHsga2V5ZnJhbWVzIH0gZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcblxyXG5leHBvcnQgY29uc3QgTWFpbiA9IHN0eWxlZC5tYWluYFxyXG4gIGhlaWdodDogMTAwdmg7XHJcbiAgd2lkdGg6IDEwMHZ3O1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi9pbWFnZXMvaGVhZGVyLWJhY2tncm91bmQuanBnJyk7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICBib3gtc2hhZG93OiBpbnNldCAwIC0zMDBweCAzMDBweCAxMHB4IGJsYWNrO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IEhlYWRlckNvbnRlbnQgPSBzdHlsZWQuZGl2YFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGdhcDogMTBweDtcclxuICBtYXJnaW4tYm90dG9tOiA2MHB4O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBGaWxtc0NvbnRhaW5lciA9IHN0eWxlZC5kaXZgXHJcbiAgbWFyZ2luLXRvcDogNDBweDtcclxuYFxyXG5cclxuZXhwb3J0IGNvbnN0IE1vdmllc0ltYWdlID0gc3R5bGVkLmRpdmBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgZ2FwOiAxMHB4O1xyXG4gIG92ZXJmbG93LXg6IHNjcm9sbDtcclxuICBzY3JvbGwtYmVoYXZpb3I6IHNtb290aDtcclxuICBtYXJnaW4tdG9wOiAyMHB4O1xyXG5gXHJcblxyXG5leHBvcnQgY29uc3QgSW1hZ2VDb250YWluZXIgPSBzdHlsZWQuZGl2YFxyXG53aWR0aDogMzAlO1xyXG5wb3NpdGlvbjogcmVsYXRpdmU7XHJcbmN1cnNvcjogcG9pbnRlcjtcclxuXHJcblxyXG5Aa2V5ZnJhbWVzIGltYWdlQWZ0ZXJ7IFxyXG4gIGZyb217XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gIH0gdG8ge1xyXG4gICAgb3BhY2l0eTogMTtcclxuICB9XHJcbn1cclxuXHJcblxyXG4mOmhvdmVye1xyXG4gICY6OmFmdGVye1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgei1pbmRleDogMTtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGFuaW1hdGlvbjogZm9yd2FyZHMgaW1hZ2VBZnRlciAwLjVzO1xyXG4gICAgY29udGVudDogJyc7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwYTc7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4OyBcclxuICB9XHJcbiAgXHJcbiAgLmRldGFpbHNCdXR0b257XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gIH1cclxufVxyXG5gXHJcblxyXG5leHBvcnQgY29uc3QgRGV0YWlsc0J1dHRvbiA9IHN0eWxlZC5idXR0b25gXHJcbndpZHRoOiA3MHB4O1xyXG5oZWlnaHQ6IDcwcHg7XHJcbmN1cnNvcjogcG9pbnRlcjtcclxuanVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbmFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbmJvcmRlci1yYWRpdXM6IDUwJTtcclxuYmFja2dyb3VuZC1jb2xvcjogb3JhbmdlO1xyXG5jb2xvcjogd2hpdGU7XHJcbmZvbnQtd2VpZ2h0OiBib2xkO1xyXG5ib3JkZXI6IG5vbmU7XHJcbnRyYW5zaXRpb246IDAuNXM7XHJcblxyXG4mOmhvdmVye1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZjZhMDA7XHJcbn1cclxuYCJdLCJuYW1lcyI6WyJzdHlsZWQiLCJNYWluIiwibWFpbiIsIkhlYWRlckNvbnRlbnQiLCJkaXYiLCJGaWxtc0NvbnRhaW5lciIsIk1vdmllc0ltYWdlIiwiSW1hZ2VDb250YWluZXIiLCJEZXRhaWxzQnV0dG9uIiwiYnV0dG9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-client)/./public/MainStyles/Header/index.ts\n"));

/***/ })

});