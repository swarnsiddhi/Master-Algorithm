"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/pages/index.js":
/*!****************************!*\
  !*** ./src/pages/index.js ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _barrel_optimize_names_Box_Container_Unstable_Grid2_mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! __barrel_optimize__?names=Box,Container,Unstable_Grid2!=!@mui/material */ \"__barrel_optimize__?names=Box,Container,Unstable_Grid2!=!./node_modules/@mui/material/index.js\");\n/* harmony import */ var src_layouts_dashboard_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/layouts/dashboard/layout */ \"./src/layouts/dashboard/layout.js\");\n\n\n\n\nconst now = new Date();\nconst LookerStudioReport = ()=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"iframe\", {\n                src: \"https://lookerstudio.google.com/embed/reporting/0dcb9a07-35b3-4337-bfc8-b75e7ec9f3df/page/DBskD\",\n                frameBorder: \"0\",\n                width: \"1125\",\n                height: \"875\",\n                style: {\n                    border: 0\n                },\n                allowFullScreen: true\n            }, void 0, false, {\n                fileName: \"/Users/mohitverma/Desktop/projects/SIH23/src/pages/index.js\",\n                lineNumber: 11,\n                columnNumber: 5\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    display: \"flex\",\n                    alignItems: \"center\",\n                    justifyContent: \"space-between\",\n                    margin: \"20px 0\"\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                children: \"Generated Report\"\n                            }, void 0, false, {\n                                fileName: \"/Users/mohitverma/Desktop/projects/SIH23/src/pages/index.js\",\n                                lineNumber: 21,\n                                columnNumber: 7\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                style: {\n                                    backgroundColor: \"white\",\n                                    padding: \"10px\",\n                                    borderRadius: \"5px\",\n                                    boxShadow: \"0px 4px 10px rgba(0, 0, 0, 0.1)\"\n                                },\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        children: \"Report-UttarPradesh.pdf\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/mohitverma/Desktop/projects/SIH23/src/pages/index.js\",\n                                        lineNumber: 23,\n                                        columnNumber: 9\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        children: \"Generated on 19-12-2023\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/mohitverma/Desktop/projects/SIH23/src/pages/index.js\",\n                                        lineNumber: 24,\n                                        columnNumber: 9\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/mohitverma/Desktop/projects/SIH23/src/pages/index.js\",\n                                lineNumber: 22,\n                                columnNumber: 7\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/mohitverma/Desktop/projects/SIH23/src/pages/index.js\",\n                        lineNumber: 20,\n                        columnNumber: 5\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        style: {\n                            backgroundColor: \"#4C51BF\",\n                            color: \"white\",\n                            border: \"none\",\n                            borderRadius: \"5px\",\n                            padding: \"10px 20px\",\n                            cursor: \"pointer\",\n                            boxShadow: \"0px 4px 10px rgba(0, 0, 0, 0.1)\"\n                        },\n                        onClick: ()=>{\n                            fetch(\"../../DetailedReports/Report.pdf\") // Assuming this is the correct relative path from your server\n                            .then((response)=>{\n                                if (!response.ok) {\n                                    throw new Error(\"Network response was not ok\");\n                                }\n                                return response.blob();\n                            }).then((blob)=>{\n                            // Process the blob here, such as displaying or downloading the PDF\n                            }).catch((error)=>{\n                                console.error(\"There was a problem with the fetch operation:\", error);\n                            });\n                        },\n                        children: \"Download\"\n                    }, void 0, false, {\n                        fileName: \"/Users/mohitverma/Desktop/projects/SIH23/src/pages/index.js\",\n                        lineNumber: 41,\n                        columnNumber: 5\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/mohitverma/Desktop/projects/SIH23/src/pages/index.js\",\n                lineNumber: 19,\n                columnNumber: 5\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_c = LookerStudioReport;\nconst Page = ()=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                    children: \"Overview | Ministry of Rural Development Kit\"\n                }, void 0, false, {\n                    fileName: \"/Users/mohitverma/Desktop/projects/SIH23/src/pages/index.js\",\n                    lineNumber: 78,\n                    columnNumber: 7\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/mohitverma/Desktop/projects/SIH23/src/pages/index.js\",\n                lineNumber: 77,\n                columnNumber: 5\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Container_Unstable_Grid2_mui_material__WEBPACK_IMPORTED_MODULE_3__.Box, {\n                component: \"main\",\n                sx: {\n                    flexGrow: 1,\n                    py: 0\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Container_Unstable_Grid2_mui_material__WEBPACK_IMPORTED_MODULE_3__.Container, {\n                    maxWidth: \"lg\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Container_Unstable_Grid2_mui_material__WEBPACK_IMPORTED_MODULE_3__.Unstable_Grid2, {\n                        container: true,\n                        spacing: 3,\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Container_Unstable_Grid2_mui_material__WEBPACK_IMPORTED_MODULE_3__.Unstable_Grid2, {\n                            item: true,\n                            xs: 12,\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(LookerStudioReport, {}, void 0, false, {\n                                fileName: \"/Users/mohitverma/Desktop/projects/SIH23/src/pages/index.js\",\n                                lineNumber: 98,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/mohitverma/Desktop/projects/SIH23/src/pages/index.js\",\n                            lineNumber: 94,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/mohitverma/Desktop/projects/SIH23/src/pages/index.js\",\n                        lineNumber: 90,\n                        columnNumber: 9\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/mohitverma/Desktop/projects/SIH23/src/pages/index.js\",\n                    lineNumber: 89,\n                    columnNumber: 7\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/mohitverma/Desktop/projects/SIH23/src/pages/index.js\",\n                lineNumber: 82,\n                columnNumber: 5\n            }, undefined)\n        ]\n    }, void 0, true);\n_c1 = Page;\nPage.getLayout = (page)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(src_layouts_dashboard_layout__WEBPACK_IMPORTED_MODULE_2__.Layout, {\n        children: page\n    }, void 0, false, {\n        fileName: \"/Users/mohitverma/Desktop/projects/SIH23/src/pages/index.js\",\n        lineNumber: 107,\n        columnNumber: 3\n    }, undefined);\n/* harmony default export */ __webpack_exports__[\"default\"] = (Page);\nvar _c, _c1;\n$RefreshReg$(_c, \"LookerStudioReport\");\n$RefreshReg$(_c1, \"Page\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBNkI7QUFDMEM7QUFDRTtBQUV6RSxNQUFNTyxNQUFNLElBQUlDO0FBR2hCLE1BQU1DLHFCQUFxQjtJQUN6QixxQkFDRTs7MEJBQ0EsOERBQUNDO2dCQUNDQyxLQUFJO2dCQUNKQyxhQUFZO2dCQUNaQyxPQUFNO2dCQUNOQyxRQUFPO2dCQUNQQyxPQUFPO29CQUFFQyxRQUFRO2dCQUFFO2dCQUNuQkMsZUFBZTs7Ozs7OzBCQUVqQiw4REFBQ0M7Z0JBQUlILE9BQU87b0JBQUVJLFNBQVM7b0JBQVFDLFlBQVk7b0JBQVVDLGdCQUFnQjtvQkFBaUJDLFFBQVE7Z0JBQVM7O2tDQUN2Ryw4REFBQ0o7OzBDQUNDLDhEQUFDSzswQ0FBRzs7Ozs7OzBDQUNKLDhEQUFDTDtnQ0FBSUgsT0FBTztvQ0FBRVMsaUJBQWlCO29DQUFTQyxTQUFTO29DQUFRQyxjQUFjO29DQUFPQyxXQUFXO2dDQUFrQzs7a0RBQ3pILDhEQUFDQztrREFBRTs7Ozs7O2tEQUNILDhEQUFDQTtrREFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7O2tDQWlCUCw4REFBQ0M7d0JBQ0NkLE9BQU87NEJBQ0xTLGlCQUFpQjs0QkFDakJNLE9BQU87NEJBQ1BkLFFBQVE7NEJBQ1JVLGNBQWM7NEJBQ2RELFNBQVM7NEJBQ1RNLFFBQVE7NEJBQ1JKLFdBQVc7d0JBQ2I7d0JBQ0FLLFNBQVM7NEJBQ1BDLE1BQU0sb0NBQW9DLDhEQUE4RDs2QkFDckdDLElBQUksQ0FBQ0MsQ0FBQUE7Z0NBQ0osSUFBSSxDQUFDQSxTQUFTQyxFQUFFLEVBQUU7b0NBQ2hCLE1BQU0sSUFBSUMsTUFBTTtnQ0FDbEI7Z0NBQ0EsT0FBT0YsU0FBU0csSUFBSTs0QkFDdEIsR0FDQ0osSUFBSSxDQUFDSSxDQUFBQTs0QkFDSixtRUFBbUU7NEJBQ3JFLEdBQ0NDLEtBQUssQ0FBQ0MsQ0FBQUE7Z0NBQ0xDLFFBQVFELEtBQUssQ0FBQyxpREFBaURBOzRCQUNqRTt3QkFDSjtrQ0FDRDs7Ozs7Ozs7Ozs7Ozs7QUFPTDtLQWpFTS9CO0FBbUVOLE1BQU1pQyxPQUFPLGtCQUNYOzswQkFDRSw4REFBQzFDLGtEQUFJQTswQkFDSCw0RUFBQzJDOzhCQUFNOzs7Ozs7Ozs7OzswQkFJVCw4REFBQzFDLGlHQUFHQTtnQkFDRjJDLFdBQVU7Z0JBQ1ZDLElBQUk7b0JBQ0ZDLFVBQVU7b0JBQ1ZDLElBQUk7Z0JBQ047MEJBRUEsNEVBQUM3Qyx1R0FBU0E7b0JBQUM4QyxVQUFTOzhCQUNsQiw0RUFBQzVDLDRHQUFJQTt3QkFDSDZDLFNBQVM7d0JBQ1RDLFNBQVM7a0NBRVQsNEVBQUM5Qyw0R0FBSUE7NEJBQ0grQyxJQUFJOzRCQUNKQyxJQUFJO3NDQUVKLDRFQUFDM0M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztNQXZCUGlDO0FBK0JOQSxLQUFLVyxTQUFTLEdBQUcsQ0FBQ0MscUJBQ2hCLDhEQUFDaEQsZ0VBQWVBO2tCQUNiZ0Q7Ozs7OztBQUlMLCtEQUFlWixJQUFJQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9pbmRleC5qcz80MDgwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XG5pbXBvcnQgeyBCb3gsIENvbnRhaW5lciwgVW5zdGFibGVfR3JpZDIgYXMgR3JpZCB9IGZyb20gJ0BtdWkvbWF0ZXJpYWwnO1xuaW1wb3J0IHsgTGF5b3V0IGFzIERhc2hib2FyZExheW91dCB9IGZyb20gJ3NyYy9sYXlvdXRzL2Rhc2hib2FyZC9sYXlvdXQnO1xuXG5jb25zdCBub3cgPSBuZXcgRGF0ZSgpO1xuXG5cbmNvbnN0IExvb2tlclN0dWRpb1JlcG9ydCA9ICgpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgIDxpZnJhbWVcbiAgICAgIHNyYz1cImh0dHBzOi8vbG9va2Vyc3R1ZGlvLmdvb2dsZS5jb20vZW1iZWQvcmVwb3J0aW5nLzBkY2I5YTA3LTM1YjMtNDMzNy1iZmM4LWI3NWU3ZWM5ZjNkZi9wYWdlL0RCc2tEXCJcbiAgICAgIGZyYW1lQm9yZGVyPVwiMFwiXG4gICAgICB3aWR0aD1cIjExMjVcIlxuICAgICAgaGVpZ2h0PVwiODc1XCJcbiAgICAgIHN0eWxlPXt7IGJvcmRlcjogMCB9fVxuICAgICAgYWxsb3dGdWxsU2NyZWVuXG4gICAgPjwvaWZyYW1lPlxuICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnLCBhbGlnbkl0ZW1zOiAnY2VudGVyJywganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1iZXR3ZWVuJywgbWFyZ2luOiAnMjBweCAwJyB9fT5cbiAgICA8ZGl2PlxuICAgICAgPGgyPkdlbmVyYXRlZCBSZXBvcnQ8L2gyPlxuICAgICAgPGRpdiBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScsIHBhZGRpbmc6ICcxMHB4JywgYm9yZGVyUmFkaXVzOiAnNXB4JywgYm94U2hhZG93OiAnMHB4IDRweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4xKScgfX0+XG4gICAgICAgIDxwPlJlcG9ydC1VdHRhclByYWRlc2gucGRmPC9wPlxuICAgICAgICA8cD5HZW5lcmF0ZWQgb24gMTktMTItMjAyMzwvcD5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgICAgey8qIDxhXG4gICAgICAgIGhyZWY9e2ZpbGVVcmx9XG4gICAgICAgIGRvd25sb2FkXG4gICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnIzRDNTFCRicsXG4gICAgICAgICAgY29sb3I6ICd3aGl0ZScsXG4gICAgICAgICAgYm9yZGVyOiAnbm9uZScsXG4gICAgICAgICAgYm9yZGVyUmFkaXVzOiAnNXB4JyxcbiAgICAgICAgICBwYWRkaW5nOiAnMTBweCAyMHB4JyxcbiAgICAgICAgICBjdXJzb3I6ICdwb2ludGVyJyxcbiAgICAgICAgICB0ZXh0RGVjb3JhdGlvbjogJ25vbmUnLCAvLyBSZW1vdmUgdW5kZXJsaW5lIGZyb20gbGlua3NcbiAgICAgICAgICBib3hTaGFkb3c6ICcwcHggNHB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjEpJ1xuICAgICAgICB9fVxuICAgICAgPiAqL31cbiAgICA8YnV0dG9uXG4gICAgICBzdHlsZT17e1xuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjNEM1MUJGJyxcbiAgICAgICAgY29sb3I6ICd3aGl0ZScsXG4gICAgICAgIGJvcmRlcjogJ25vbmUnLFxuICAgICAgICBib3JkZXJSYWRpdXM6ICc1cHgnLFxuICAgICAgICBwYWRkaW5nOiAnMTBweCAyMHB4JyxcbiAgICAgICAgY3Vyc29yOiAncG9pbnRlcicsXG4gICAgICAgIGJveFNoYWRvdzogJzBweCA0cHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMSknXG4gICAgICB9fVxuICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICBmZXRjaCgnLi4vLi4vRGV0YWlsZWRSZXBvcnRzL1JlcG9ydC5wZGYnKSAvLyBBc3N1bWluZyB0aGlzIGlzIHRoZSBjb3JyZWN0IHJlbGF0aXZlIHBhdGggZnJvbSB5b3VyIHNlcnZlclxuICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgICAgICAgIGlmICghcmVzcG9uc2Uub2spIHtcbiAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdOZXR3b3JrIHJlc3BvbnNlIHdhcyBub3Qgb2snKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiByZXNwb25zZS5ibG9iKCk7XG4gICAgICAgICAgfSlcbiAgICAgICAgICAudGhlbihibG9iID0+IHtcbiAgICAgICAgICAgIC8vIFByb2Nlc3MgdGhlIGJsb2IgaGVyZSwgc3VjaCBhcyBkaXNwbGF5aW5nIG9yIGRvd25sb2FkaW5nIHRoZSBQREZcbiAgICAgICAgICB9KVxuICAgICAgICAgIC5jYXRjaChlcnJvciA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdUaGVyZSB3YXMgYSBwcm9ibGVtIHdpdGggdGhlIGZldGNoIG9wZXJhdGlvbjonLCBlcnJvcik7XG4gICAgICAgICAgfSk7XG4gICAgICB9fVxuICAgID5cbiAgICAgIERvd25sb2FkXG4gICAgPC9idXR0b24+XG4gIDwvZGl2PlxuPC8+XG5cbiAgKTtcbn07XG5cbmNvbnN0IFBhZ2UgPSAoKSA9PiAoXG4gIDw+XG4gICAgPEhlYWQ+XG4gICAgICA8dGl0bGU+XG4gICAgICAgIE92ZXJ2aWV3IHwgTWluaXN0cnkgb2YgUnVyYWwgRGV2ZWxvcG1lbnQgS2l0XG4gICAgICA8L3RpdGxlPlxuICAgIDwvSGVhZD5cbiAgICA8Qm94XG4gICAgICBjb21wb25lbnQ9XCJtYWluXCJcbiAgICAgIHN4PXt7XG4gICAgICAgIGZsZXhHcm93OiAxLFxuICAgICAgICBweTogMFxuICAgICAgfX1cbiAgICA+XG4gICAgICA8Q29udGFpbmVyIG1heFdpZHRoPVwibGdcIj5cbiAgICAgICAgPEdyaWRcbiAgICAgICAgICBjb250YWluZXJcbiAgICAgICAgICBzcGFjaW5nPXszfVxuICAgICAgICA+XG4gICAgICAgICAgPEdyaWRcbiAgICAgICAgICAgIGl0ZW1cbiAgICAgICAgICAgIHhzPXsxMn1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8TG9va2VyU3R1ZGlvUmVwb3J0IC8+XG4gICAgICAgICAgPC9HcmlkPlxuICAgICAgICA8L0dyaWQ+XG4gICAgICA8L0NvbnRhaW5lcj5cbiAgICA8L0JveD5cbiAgPC8+XG4pO1xuXG5QYWdlLmdldExheW91dCA9IChwYWdlKSA9PiAoXG4gIDxEYXNoYm9hcmRMYXlvdXQ+XG4gICAge3BhZ2V9XG4gIDwvRGFzaGJvYXJkTGF5b3V0PlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgUGFnZTtcbiJdLCJuYW1lcyI6WyJIZWFkIiwiQm94IiwiQ29udGFpbmVyIiwiVW5zdGFibGVfR3JpZDIiLCJHcmlkIiwiTGF5b3V0IiwiRGFzaGJvYXJkTGF5b3V0Iiwibm93IiwiRGF0ZSIsIkxvb2tlclN0dWRpb1JlcG9ydCIsImlmcmFtZSIsInNyYyIsImZyYW1lQm9yZGVyIiwid2lkdGgiLCJoZWlnaHQiLCJzdHlsZSIsImJvcmRlciIsImFsbG93RnVsbFNjcmVlbiIsImRpdiIsImRpc3BsYXkiLCJhbGlnbkl0ZW1zIiwianVzdGlmeUNvbnRlbnQiLCJtYXJnaW4iLCJoMiIsImJhY2tncm91bmRDb2xvciIsInBhZGRpbmciLCJib3JkZXJSYWRpdXMiLCJib3hTaGFkb3ciLCJwIiwiYnV0dG9uIiwiY29sb3IiLCJjdXJzb3IiLCJvbkNsaWNrIiwiZmV0Y2giLCJ0aGVuIiwicmVzcG9uc2UiLCJvayIsIkVycm9yIiwiYmxvYiIsImNhdGNoIiwiZXJyb3IiLCJjb25zb2xlIiwiUGFnZSIsInRpdGxlIiwiY29tcG9uZW50Iiwic3giLCJmbGV4R3JvdyIsInB5IiwibWF4V2lkdGgiLCJjb250YWluZXIiLCJzcGFjaW5nIiwiaXRlbSIsInhzIiwiZ2V0TGF5b3V0IiwicGFnZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/index.js\n"));

/***/ })

});