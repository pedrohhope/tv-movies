"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/details/[slug]/page",{

/***/ "(app-client)/./app/movies/styles/globalStyles.tsx":
/*!********************************************!*\
  !*** ./app/movies/styles/globalStyles.tsx ***!
  \********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"FilmDecription\": function() { return /* binding */ FilmDecription; },\n/* harmony export */   \"FilmTexts\": function() { return /* binding */ FilmTexts; },\n/* harmony export */   \"FilmTitle\": function() { return /* binding */ FilmTitle; },\n/* harmony export */   \"Header\": function() { return /* binding */ Header; },\n/* harmony export */   \"HeaderContainer\": function() { return /* binding */ HeaderContainer; },\n/* harmony export */   \"MoreButton\": function() { return /* binding */ MoreButton; },\n/* harmony export */   \"PageDetailsHeader\": function() { return /* binding */ PageDetailsHeader; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @swc/helpers/_/_tagged_template_literal */ \"(app-client)/./node_modules/@swc/helpers/esm/_tagged_template_literal.js\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ \"(app-client)/./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* __next_internal_client_entry_do_not_use__ Header,HeaderContainer,PageDetailsHeader,FilmTexts,FilmTitle,FilmDecription,MoreButton auto */ \nfunction _templateObject() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        '\\n  position: relative;\\n\\n  &::after {\\n    position: absolute;\\n    z-index: 2;\\n    top: 0;\\n    width: 100%;\\n    height: 100%;\\n    content: \"\";\\n    background-color: #00000083;\\n  }\\n'\n    ]);\n    _templateObject = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject1() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n  width: 100%;\\n  height: 680px;\\n  margin-top: 60px;\\n  position: relative;\\n  cursor: grabbing;\\n\\n  @media (min-width: 1600px) {\\n    height: 80vh;\\n  }\\n\\n  @media (max-width: 800px) {\\n    height: 100%;\\n  }\\n\"\n    ]);\n    _templateObject1 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject2() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        '\\n  position: relative;\\n\\n  &::after {\\n    position: absolute;\\n    z-index: 2;\\n    top: 0;\\n    width: 100%;\\n    height: 100%;\\n    content: \"\";\\n    background-color: #00000083;\\n    box-shadow: inset 0px -300px 200px 0px #000000;\\n  }\\n'\n    ]);\n    _templateObject2 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject3() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        '\\n  display: flex;\\n  gap: 15px;\\n  flex-direction: column;\\n  color: white;\\n  position: absolute;\\n  bottom: 100px;\\n  max-width: 900px;\\n  margin-left: 30px;\\n  text-align: left;\\n  font-family: \"arial\";\\n  z-index: 5;\\n'\n    ]);\n    _templateObject3 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject4() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n  font-weight: bold;\\n  font-size: 35px;\\n\\n  @media (max-width: 800px) {\\n    font-size: 20px;\\n  }\\n\"\n    ]);\n    _templateObject4 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject5() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n  font-weight: bold;\\n  font-size: 15px;\\n\\n  @media (max-width: 800px) {\\n    font-size: 10px;\\n  }\\n\"\n    ]);\n    _templateObject5 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject6() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n  height: 40px;\\n  width: 150px;\\n  background-color: transparent;\\n  color: white;\\n  font-weight: bold;\\n  border-radius: 5px;\\n  border-color: orange;\\n  transition: 0.5s;\\n  cursor: pointer;\\n\\n  &:hover {\\n    background-color: orange;\\n  }\\n\\n  @media (max-width: 800px) {\\n    height: 30px;\\n    width: 90px;\\n    font-size: 10px;\\n  }\\n\"\n    ]);\n    _templateObject6 = function() {\n        return data;\n    };\n    return data;\n}\n\nconst Header = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div(_templateObject());\nconst HeaderContainer = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div(_templateObject1());\nconst PageDetailsHeader = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div(_templateObject2());\nconst FilmTexts = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div(_templateObject3());\nconst FilmTitle = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].h1(_templateObject4());\nconst FilmDecription = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].p(_templateObject5());\nconst MoreButton = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].button(_templateObject6());\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vYXBwL21vdmllcy9zdHlsZXMvZ2xvYmFsU3R5bGVzLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXVDO0FBRWhDLE1BQU1DLFNBQVNELDZEQUFVLG9CQVk5QjtBQUNLLE1BQU1HLGtCQUFrQkgsNkRBQVUscUJBY3ZDO0FBRUssTUFBTUksb0JBQW9CSiw2REFBVSxxQkFhekM7QUFFSyxNQUFNSyxZQUFZTCw2REFBVSxxQkFZakM7QUFFSyxNQUFNTSxZQUFZTiw0REFBUyxxQkFPaEM7QUFFSyxNQUFNUSxpQkFBaUJSLDJEQUFRLHFCQU9wQztBQUVLLE1BQU1VLGFBQWFWLGdFQUFhLHFCQW9CckMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL21vdmllcy9zdHlsZXMvZ2xvYmFsU3R5bGVzLnRzeD9jNDU2Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xyXG5cclxuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBIZWFkZXIgPSBzdHlsZWQuZGl2YFxyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHJcbiAgJjo6YWZ0ZXIge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgei1pbmRleDogMjtcclxuICAgIHRvcDogMDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgY29udGVudDogXCJcIjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDA4MztcclxuICB9XHJcbmA7XHJcbmV4cG9ydCBjb25zdCBIZWFkZXJDb250YWluZXIgPSBzdHlsZWQuZGl2YFxyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogNjgwcHg7XHJcbiAgbWFyZ2luLXRvcDogNjBweDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgY3Vyc29yOiBncmFiYmluZztcclxuXHJcbiAgQG1lZGlhIChtaW4td2lkdGg6IDE2MDBweCkge1xyXG4gICAgaGVpZ2h0OiA4MHZoO1xyXG4gIH1cclxuXHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDgwMHB4KSB7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgfVxyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IFBhZ2VEZXRhaWxzSGVhZGVyID0gc3R5bGVkLmRpdmBcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcblxyXG4gICY6OmFmdGVyIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHotaW5kZXg6IDI7XHJcbiAgICB0b3A6IDA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwODM7XHJcbiAgICBib3gtc2hhZG93OiBpbnNldCAwcHggLTMwMHB4IDIwMHB4IDBweCAjMDAwMDAwO1xyXG4gIH1cclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBGaWxtVGV4dHMgPSBzdHlsZWQuZGl2YFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZ2FwOiAxNXB4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBib3R0b206IDEwMHB4O1xyXG4gIG1heC13aWR0aDogOTAwcHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDMwcHg7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxuICBmb250LWZhbWlseTogXCJhcmlhbFwiO1xyXG4gIHotaW5kZXg6IDU7XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgRmlsbVRpdGxlID0gc3R5bGVkLmgxYFxyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGZvbnQtc2l6ZTogMzVweDtcclxuXHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDgwMHB4KSB7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgfVxyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IEZpbG1EZWNyaXB0aW9uID0gc3R5bGVkLnBgXHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgZm9udC1zaXplOiAxNXB4O1xyXG5cclxuICBAbWVkaWEgKG1heC13aWR0aDogODAwcHgpIHtcclxuICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICB9XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgTW9yZUJ1dHRvbiA9IHN0eWxlZC5idXR0b25gXHJcbiAgaGVpZ2h0OiA0MHB4O1xyXG4gIHdpZHRoOiAxNTBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIGJvcmRlci1jb2xvcjogb3JhbmdlO1xyXG4gIHRyYW5zaXRpb246IDAuNXM7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG5cclxuICAmOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IG9yYW5nZTtcclxuICB9XHJcblxyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA4MDBweCkge1xyXG4gICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgd2lkdGg6IDkwcHg7XHJcbiAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgfVxyXG5gO1xyXG4iXSwibmFtZXMiOlsic3R5bGVkIiwiSGVhZGVyIiwiZGl2IiwiSGVhZGVyQ29udGFpbmVyIiwiUGFnZURldGFpbHNIZWFkZXIiLCJGaWxtVGV4dHMiLCJGaWxtVGl0bGUiLCJoMSIsIkZpbG1EZWNyaXB0aW9uIiwicCIsIk1vcmVCdXR0b24iLCJidXR0b24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-client)/./app/movies/styles/globalStyles.tsx\n"));

/***/ })

});