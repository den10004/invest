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

/***/ "(app-pages-browser)/./components/Projects/Card.jsx":
/*!**************************************!*\
  !*** ./components/Projects/Card.jsx ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Card; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _page_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./page.module.css */ \"(app-pages-browser)/./components/Projects/page.module.css\");\n/* harmony import */ var _page_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_page_module_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Slider_Slider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Slider/Slider */ \"(app-pages-browser)/./components/Slider/Slider.jsx\");\n/* harmony import */ var react_intersection_observer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-intersection-observer */ \"(app-pages-browser)/./node_modules/react-intersection-observer/dist/index.mjs\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nfunction Card(param) {\n    let { p, pbArr } = param;\n    _s();\n    const [modal, setModal] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);\n    const { ref, inView } = (0,react_intersection_observer__WEBPACK_IMPORTED_MODULE_4__.useInView)({\n        threshold: 0.2,\n        triggerOnce: 1\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"article\", {\n        className: (_page_module_css__WEBPACK_IMPORTED_MODULE_1___default().item),\n        ref: ref,\n        children: inView ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_page_module_css__WEBPACK_IMPORTED_MODULE_1___default().header),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_page_module_css__WEBPACK_IMPORTED_MODULE_1___default().title),\n                            children: p.title\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Conversion Pro\\\\Desktop\\\\invest\\\\components\\\\Projects\\\\Card.jsx\",\n                            lineNumber: 22,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_page_module_css__WEBPACK_IMPORTED_MODULE_1___default().tag),\n                            children: p.group\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Conversion Pro\\\\Desktop\\\\invest\\\\components\\\\Projects\\\\Card.jsx\",\n                            lineNumber: 23,\n                            columnNumber: 13\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\Conversion Pro\\\\Desktop\\\\invest\\\\components\\\\Projects\\\\Card.jsx\",\n                    lineNumber: 21,\n                    columnNumber: 11\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_page_module_css__WEBPACK_IMPORTED_MODULE_1___default().slider),\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_page_module_css__WEBPACK_IMPORTED_MODULE_1___default().slider__wrap),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Slider_Slider__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                            images: p.images.map((i)=>pbArr.files.getUrl(p, i, {\n                                    thumb: \"300x180\"\n                                }))\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Conversion Pro\\\\Desktop\\\\invest\\\\components\\\\Projects\\\\Card.jsx\",\n                            lineNumber: 27,\n                            columnNumber: 15\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Conversion Pro\\\\Desktop\\\\invest\\\\components\\\\Projects\\\\Card.jsx\",\n                        lineNumber: 26,\n                        columnNumber: 13\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Conversion Pro\\\\Desktop\\\\invest\\\\components\\\\Projects\\\\Card.jsx\",\n                    lineNumber: 25,\n                    columnNumber: 11\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_page_module_css__WEBPACK_IMPORTED_MODULE_1___default().description),\n                    dangerouslySetInnerHTML: {\n                        __html: p.content\n                    }\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Conversion Pro\\\\Desktop\\\\invest\\\\components\\\\Projects\\\\Card.jsx\",\n                    lineNumber: 34,\n                    columnNumber: 11\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_page_module_css__WEBPACK_IMPORTED_MODULE_1___default().footer),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                            className: (_page_module_css__WEBPACK_IMPORTED_MODULE_1___default().params),\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: (_page_module_css__WEBPACK_IMPORTED_MODULE_1___default().label),\n                                            children: \"Инвестиции\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\Conversion Pro\\\\Desktop\\\\invest\\\\components\\\\Projects\\\\Card.jsx\",\n                                            lineNumber: 41,\n                                            columnNumber: 17\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: (_page_module_css__WEBPACK_IMPORTED_MODULE_1___default().value),\n                                            children: p.invest\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\Conversion Pro\\\\Desktop\\\\invest\\\\components\\\\Projects\\\\Card.jsx\",\n                                            lineNumber: 42,\n                                            columnNumber: 17\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\Conversion Pro\\\\Desktop\\\\invest\\\\components\\\\Projects\\\\Card.jsx\",\n                                    lineNumber: 40,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: (_page_module_css__WEBPACK_IMPORTED_MODULE_1___default().label),\n                                            children: \"Доходность *\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\Conversion Pro\\\\Desktop\\\\invest\\\\components\\\\Projects\\\\Card.jsx\",\n                                            lineNumber: 45,\n                                            columnNumber: 17\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: (_page_module_css__WEBPACK_IMPORTED_MODULE_1___default().value),\n                                            children: p.profit\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\Conversion Pro\\\\Desktop\\\\invest\\\\components\\\\Projects\\\\Card.jsx\",\n                                            lineNumber: 46,\n                                            columnNumber: 17\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\Conversion Pro\\\\Desktop\\\\invest\\\\components\\\\Projects\\\\Card.jsx\",\n                                    lineNumber: 44,\n                                    columnNumber: 15\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\Conversion Pro\\\\Desktop\\\\invest\\\\components\\\\Projects\\\\Card.jsx\",\n                            lineNumber: 39,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_page_module_css__WEBPACK_IMPORTED_MODULE_1___default().button),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                className: \"btn btn-yellow\",\n                                onClick: setModal(true),\n                                children: \"Получить презентацию\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Conversion Pro\\\\Desktop\\\\invest\\\\components\\\\Projects\\\\Card.jsx\",\n                                lineNumber: 50,\n                                columnNumber: 15\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Conversion Pro\\\\Desktop\\\\invest\\\\components\\\\Projects\\\\Card.jsx\",\n                            lineNumber: 49,\n                            columnNumber: 13\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\Conversion Pro\\\\Desktop\\\\invest\\\\components\\\\Projects\\\\Card.jsx\",\n                    lineNumber: 38,\n                    columnNumber: 11\n                }, this)\n            ]\n        }, void 0, true) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {}, void 0, false)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Conversion Pro\\\\Desktop\\\\invest\\\\components\\\\Projects\\\\Card.jsx\",\n        lineNumber: 18,\n        columnNumber: 5\n    }, this);\n}\n_s(Card, \"uXMbBUAB2tzayx5E2+ftwtjW7Fc=\", false, function() {\n    return [\n        react_intersection_observer__WEBPACK_IMPORTED_MODULE_4__.useInView\n    ];\n});\n_c = Card;\nvar _c;\n$RefreshReg$(_c, \"Card\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvUHJvamVjdHMvQ2FyZC5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUV1QztBQUNEO0FBRWtCO0FBQ3ZCO0FBRWxCLFNBQVNJLEtBQUssS0FBWTtRQUFaLEVBQUVDLENBQUMsRUFBRUMsS0FBSyxFQUFFLEdBQVo7O0lBQzNCLE1BQU0sQ0FBQ0MsT0FBT0MsU0FBUyxHQUFHTCwrQ0FBUUEsQ0FBQztJQUVuQyxNQUFNLEVBQUVNLEdBQUcsRUFBRUMsTUFBTSxFQUFFLEdBQUdSLHNFQUFTQSxDQUFDO1FBQ2hDUyxXQUFXO1FBQ1hDLGFBQWE7SUFDZjtJQUVBLHFCQUNFLDhEQUFDQztRQUFRQyxXQUFXZCw4REFBVztRQUFFUyxLQUFLQTtrQkFDbkNDLHVCQUNDOzs4QkFDRSw4REFBQ007b0JBQUlGLFdBQVdkLGdFQUFhOztzQ0FDM0IsOERBQUNnQjs0QkFBSUYsV0FBV2QsK0RBQVk7c0NBQUdLLEVBQUVhLEtBQUs7Ozs7OztzQ0FDdEMsOERBQUNGOzRCQUFJRixXQUFXZCw2REFBVTtzQ0FBR0ssRUFBRWUsS0FBSzs7Ozs7Ozs7Ozs7OzhCQUV0Qyw4REFBQ0o7b0JBQUlGLFdBQVdkLGdFQUFhOzhCQUMzQiw0RUFBQ2dCO3dCQUFJRixXQUFXZCxzRUFBbUI7a0NBQ2pDLDRFQUFDQyxzREFBTUE7NEJBQ0xzQixRQUFRbEIsRUFBRWtCLE1BQU0sQ0FBQ0MsR0FBRyxDQUFDLENBQUNDLElBQ3BCbkIsTUFBTW9CLEtBQUssQ0FBQ0MsTUFBTSxDQUFDdEIsR0FBR29CLEdBQUc7b0NBQUVHLE9BQU87Z0NBQVU7Ozs7Ozs7Ozs7Ozs7Ozs7OEJBS3BELDhEQUFDWjtvQkFDQ0YsV0FBV2QscUVBQWtCO29CQUM3QjhCLHlCQUF5Qjt3QkFBRUMsUUFBUTFCLEVBQUUyQixPQUFPO29CQUFDOzs7Ozs7OEJBRS9DLDhEQUFDaEI7b0JBQUlGLFdBQVdkLGdFQUFhOztzQ0FDM0IsOERBQUNrQzs0QkFBR3BCLFdBQVdkLGdFQUFhOzs4Q0FDMUIsOERBQUNvQzs7c0RBQ0MsOERBQUNwQjs0Q0FBSUYsV0FBV2QsK0RBQVk7c0RBQUU7Ozs7OztzREFDOUIsOERBQUNnQjs0Q0FBSUYsV0FBV2QsK0RBQVk7c0RBQUdLLEVBQUVrQyxNQUFNOzs7Ozs7Ozs7Ozs7OENBRXpDLDhEQUFDSDs7c0RBQ0MsOERBQUNwQjs0Q0FBSUYsV0FBV2QsK0RBQVk7c0RBQUU7Ozs7OztzREFDOUIsOERBQUNnQjs0Q0FBSUYsV0FBV2QsK0RBQVk7c0RBQUdLLEVBQUVtQyxNQUFNOzs7Ozs7Ozs7Ozs7Ozs7Ozs7c0NBRzNDLDhEQUFDeEI7NEJBQUlGLFdBQVdkLGdFQUFhO3NDQUMzQiw0RUFBQ3lDO2dDQUFPM0IsV0FBVTtnQ0FBaUI0QixTQUFTbEMsU0FBUzswQ0FBTzs7Ozs7Ozs7Ozs7Ozs7Ozs7O3lDQU9sRTs7Ozs7O0FBSVI7R0FwRHdCSjs7UUFHRUYsa0VBQVNBOzs7S0FIWEUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qcm9qZWN0cy9DYXJkLmpzeD8zNjMyIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xyXG5cclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9wYWdlLm1vZHVsZS5jc3NcIjtcclxuaW1wb3J0IFNsaWRlciBmcm9tIFwiLi4vU2xpZGVyL1NsaWRlclwiO1xyXG5cclxuaW1wb3J0IHsgdXNlSW5WaWV3IH0gZnJvbSBcInJlYWN0LWludGVyc2VjdGlvbi1vYnNlcnZlclwiO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ2FyZCh7IHAsIHBiQXJyIH0pIHtcclxuICBjb25zdCBbbW9kYWwsIHNldE1vZGFsXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgY29uc3QgeyByZWYsIGluVmlldyB9ID0gdXNlSW5WaWV3KHtcclxuICAgIHRocmVzaG9sZDogMC4yLFxyXG4gICAgdHJpZ2dlck9uY2U6IDEsXHJcbiAgfSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8YXJ0aWNsZSBjbGFzc05hbWU9e3N0eWxlcy5pdGVtfSByZWY9e3JlZn0+XHJcbiAgICAgIHtpblZpZXcgPyAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaGVhZGVyfT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy50aXRsZX0+e3AudGl0bGV9PC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudGFnfT57cC5ncm91cH08L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zbGlkZXJ9PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnNsaWRlcl9fd3JhcH0+XHJcbiAgICAgICAgICAgICAgPFNsaWRlclxyXG4gICAgICAgICAgICAgICAgaW1hZ2VzPXtwLmltYWdlcy5tYXAoKGkpID0+XHJcbiAgICAgICAgICAgICAgICAgIHBiQXJyLmZpbGVzLmdldFVybChwLCBpLCB7IHRodW1iOiBcIjMwMHgxODBcIiB9KVxyXG4gICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5kZXNjcmlwdGlvbn1cclxuICAgICAgICAgICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiBwLmNvbnRlbnQgfX1cclxuICAgICAgICAgID48L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZm9vdGVyfT5cclxuICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT17c3R5bGVzLnBhcmFtc30+XHJcbiAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5sYWJlbH0+0JjQvdCy0LXRgdGC0LjRhtC40Lg8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudmFsdWV9PntwLmludmVzdH08L2Rpdj5cclxuICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubGFiZWx9PtCU0L7RhdC+0LTQvdC+0YHRgtGMICo8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudmFsdWV9PntwLnByb2ZpdH08L2Rpdj5cclxuICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmJ1dHRvbn0+XHJcbiAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLXllbGxvd1wiIG9uQ2xpY2s9e3NldE1vZGFsKHRydWUpfT5cclxuICAgICAgICAgICAgICAgINCf0L7Qu9GD0YfQuNGC0Ywg0L/RgNC10LfQtdC90YLQsNGG0LjRjlxyXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvPlxyXG4gICAgICApIDogKFxyXG4gICAgICAgIDw+PC8+XHJcbiAgICAgICl9XHJcbiAgICA8L2FydGljbGU+XHJcbiAgKTtcclxufVxyXG4iXSwibmFtZXMiOlsic3R5bGVzIiwiU2xpZGVyIiwidXNlSW5WaWV3IiwidXNlU3RhdGUiLCJDYXJkIiwicCIsInBiQXJyIiwibW9kYWwiLCJzZXRNb2RhbCIsInJlZiIsImluVmlldyIsInRocmVzaG9sZCIsInRyaWdnZXJPbmNlIiwiYXJ0aWNsZSIsImNsYXNzTmFtZSIsIml0ZW0iLCJkaXYiLCJoZWFkZXIiLCJ0aXRsZSIsInRhZyIsImdyb3VwIiwic2xpZGVyIiwic2xpZGVyX193cmFwIiwiaW1hZ2VzIiwibWFwIiwiaSIsImZpbGVzIiwiZ2V0VXJsIiwidGh1bWIiLCJkZXNjcmlwdGlvbiIsImRhbmdlcm91c2x5U2V0SW5uZXJIVE1MIiwiX19odG1sIiwiY29udGVudCIsImZvb3RlciIsInVsIiwicGFyYW1zIiwibGkiLCJsYWJlbCIsInZhbHVlIiwiaW52ZXN0IiwicHJvZml0IiwiYnV0dG9uIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/Projects/Card.jsx\n"));

/***/ })

});