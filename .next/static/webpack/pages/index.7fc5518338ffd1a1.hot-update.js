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

/***/ "./components/sections/Projects.js":
/*!*****************************************!*\
  !*** ./components/sections/Projects.js ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Projects\": function() { return /* binding */ Projects; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/chakra-ui-react.esm.js\");\n/* harmony import */ var react_reveal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-reveal */ \"./node_modules/react-reveal/index.js\");\nfunction _throw(e) {\n    throw e;\n}\nvar _this = undefined;\n\n\n\nvar projectsData = [\n    {\n        title: \"foodery\",\n        description: \"An app that lets you add, modify and remove food products using the GraphQL endpoint\",\n        listItems: [\n            \"You can add food products\",\n            \"You can modify and remove food products\"\n        ],\n        image: \"../images/foodery.png\",\n        href: \"https://foodery-roan.vercel.app/\"\n    },\n    {\n        title: \"Earthquake Report\",\n        description: \"An app that lets you view the earthquakes that happened around the world\",\n        listItems: [\n            \"Lists the earthquakes happend around the world for the past 24 hours\",\n            \"Provides details about the earthquake that has happened\",\n            \"Shows trivia about earthquakes\"\n        ],\n        image: \"../images/earthquake-report.png\",\n        file: \"../files/earthquake-report.apk\"\n    },\n    {\n        title: \"My Notes\",\n        description: \"An app that lets you take some notes\",\n        listItems: [\n            \"Takes notes and shows the list of notes\",\n            \"You can edit and delete notes\",\n            \"You can add a category for a note\"\n        ],\n        image: \"../images/my-notes.png\",\n        file: \"../files/my-notes.apk\"\n    }\n];\nvar Projects = function(param) {\n    var param = param !== null ? param : _throw(new TypeError(\"Cannot destructure undefined\"));\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Box, {\n        id: \"projects\",\n        bg: \"blue.500\",\n        color: \"white\",\n        py: 40,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Container, {\n            maxW: \"container.lg\",\n            centerContent: true,\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.VStack, {\n                align: \"center\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Heading, {\n                        size: \"2xl\",\n                        mb: 12,\n                        children: \"Projects\"\n                    }, void 0, false, {\n                        fileName: \"/Users/developer-002/Projects/my-portfolio/components/sections/Projects.js\",\n                        lineNumber: 43,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.VStack, {\n                        align: {\n                            base: \"center\",\n                            md: \"start\"\n                        },\n                        spacing: 12,\n                        pb: 16,\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_reveal__WEBPACK_IMPORTED_MODULE_1__.Slide, {\n                            left: true,\n                            duration: 1000,\n                            children: projectsData.map(function(data, dataKey) {\n                                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.VStack, {\n                                    direction: {\n                                        base: \"column\",\n                                        md: \"row\"\n                                    },\n                                    align: \"center\",\n                                    w: {\n                                        base: \"auto\",\n                                        md: \"container.md\",\n                                        lg: \"container.lg.lg\"\n                                    },\n                                    spacing: 12,\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Image, {\n                                            src: data.image,\n                                            h: \"500px\",\n                                            alt: data.title\n                                        }, void 0, false, {\n                                            fileName: \"/Users/developer-002/Projects/my-portfolio/components/sections/Projects.js\",\n                                            lineNumber: 49,\n                                            columnNumber: 19\n                                        }, _this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.VStack, {\n                                            align: {\n                                                base: \"center\",\n                                                md: \"start\"\n                                            },\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Heading, {\n                                                    children: data.title\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/developer-002/Projects/my-portfolio/components/sections/Projects.js\",\n                                                    lineNumber: 51,\n                                                    columnNumber: 21\n                                                }, _this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Text, {\n                                                    pb: 4,\n                                                    fontSize: \"lg\",\n                                                    children: data.description\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/developer-002/Projects/my-portfolio/components/sections/Projects.js\",\n                                                    lineNumber: 52,\n                                                    columnNumber: 21\n                                                }, _this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.UnorderedList, {\n                                                    pl: 6,\n                                                    pb: 3,\n                                                    children: data.listItems.map(function(desc, descKey) {\n                                                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.ListItem, {\n                                                            fontSize: \"lg\",\n                                                            children: desc\n                                                        }, descKey, false, {\n                                                            fileName: \"/Users/developer-002/Projects/my-portfolio/components/sections/Projects.js\",\n                                                            lineNumber: 55,\n                                                            columnNumber: 63\n                                                        }, _this);\n                                                    })\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/developer-002/Projects/my-portfolio/components/sections/Projects.js\",\n                                                    lineNumber: 53,\n                                                    columnNumber: 21\n                                                }, _this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Button, {\n                                                    as: \"a\",\n                                                    href: data.file ? data.file : data.href,\n                                                    target: \"_blank\",\n                                                    rounded: \"full\",\n                                                    minW: \"130px\",\n                                                    bgColor: \"green.400\",\n                                                    _hover: {\n                                                        bgColor: \"green.100\"\n                                                    },\n                                                    _active: {\n                                                        bgColor: \"green.100\"\n                                                    },\n                                                    _focus: {\n                                                        borderColor: \"green.400\"\n                                                    },\n                                                    children: data.file ? \"Download\" : \"View Demo\"\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/developer-002/Projects/my-portfolio/components/sections/Projects.js\",\n                                                    lineNumber: 58,\n                                                    columnNumber: 21\n                                                }, _this)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Users/developer-002/Projects/my-portfolio/components/sections/Projects.js\",\n                                            lineNumber: 50,\n                                            columnNumber: 19\n                                        }, _this)\n                                    ]\n                                }, dataKey, true, {\n                                    fileName: \"/Users/developer-002/Projects/my-portfolio/components/sections/Projects.js\",\n                                    lineNumber: 48,\n                                    columnNumber: 17\n                                }, _this);\n                            })\n                        }, void 0, false, {\n                            fileName: \"/Users/developer-002/Projects/my-portfolio/components/sections/Projects.js\",\n                            lineNumber: 45,\n                            columnNumber: 11\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/Users/developer-002/Projects/my-portfolio/components/sections/Projects.js\",\n                        lineNumber: 44,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/developer-002/Projects/my-portfolio/components/sections/Projects.js\",\n                lineNumber: 42,\n                columnNumber: 7\n            }, _this)\n        }, void 0, false, {\n            fileName: \"/Users/developer-002/Projects/my-portfolio/components/sections/Projects.js\",\n            lineNumber: 41,\n            columnNumber: 5\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/Users/developer-002/Projects/my-portfolio/components/sections/Projects.js\",\n        lineNumber: 40,\n        columnNumber: 3\n    }, _this);\n};\n_c = Projects;\nvar _c;\n$RefreshReg$(_c, \"Projects\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RSxFQUFFLENBQUM7b0RBQUViLEVBQUUsRUFBRSxDQUFDOzhEQUV2QkksSUFBSSxDQUFDckIsU0FBUyxDQUFDb0IsR0FBRyxDQUFDLFNBQUNXLElBQUksRUFBRUMsT0FBTzs2RUFBSyw4REFBQ3JDLHNEQUFROzREQUFla0MsUUFBUSxFQUFDLElBQUk7c0VBQUVFLElBQUk7MkRBQTVCQyxPQUFPOzs7O2lFQUFpQztxREFBQSxDQUFDOzs7Ozt5REFFbEY7OERBQ2hCLDhEQUFDekMsb0RBQU07b0RBQUMwQyxFQUFFLEVBQUMsR0FBRztvREFBQy9CLElBQUksRUFBRW1CLElBQUksQ0FBQ2xCLElBQUksR0FBR2tCLElBQUksQ0FBQ2xCLElBQUksR0FBR2tCLElBQUksQ0FBQ25CLElBQUk7b0RBQUVnQyxNQUFNLEVBQUMsUUFBUTtvREFBQ0MsT0FBTyxFQUFDLE1BQU07b0RBQUNDLElBQUksRUFBQyxPQUFPO29EQUFDQyxPQUFPLEVBQUMsV0FBVztvREFBQ0MsTUFBTSxFQUFFO3dEQUFFRCxPQUFPLEVBQUUsV0FBVztxREFBRTtvREFBRUUsT0FBTyxFQUFFO3dEQUFFRixPQUFPLEVBQUUsV0FBVztxREFBRTtvREFBRUcsTUFBTSxFQUFFO3dEQUFFQyxXQUFXLEVBQUUsV0FBVztxREFBRTs4REFBR3BCLElBQUksQ0FBQ2xCLElBQUksR0FBRyxVQUFVLEdBQUcsV0FBVzs7Ozs7eURBQVU7Ozs7OztpREFDM1E7O21DQVhFbUIsT0FBTzs7Ozt5Q0FZWDs2QkFDVixDQUFDOzs7OztpQ0FFRTs7Ozs7NkJBQ0Q7Ozs7OztxQkFDRjs7Ozs7aUJBQ0M7Ozs7O2FBQ1I7Q0FDUDtBQTdCWWxCLEtBQUFBLFFBQVEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zZWN0aW9ucy9Qcm9qZWN0cy5qcz83ZGMyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJveCwgQ29udGFpbmVyLCBWU3RhY2ssIEhlYWRpbmcsIFRleHQsIEhTdGFjaywgSW1hZ2UsIEJ1dHRvbiwgU3RhY2ssIENlbnRlciwgVW5vcmRlcmVkTGlzdCwgTGlzdEl0ZW0gfSBmcm9tIFwiQGNoYWtyYS11aS9yZWFjdFwiO1xuaW1wb3J0IHsgU2xpZGUgfSBmcm9tIFwicmVhY3QtcmV2ZWFsXCI7XG5cbmNvbnN0IHByb2plY3RzRGF0YSA9IFtcbiAge1xuICAgIHRpdGxlOiBcImZvb2RlcnlcIixcbiAgICBkZXNjcmlwdGlvbjogXCJBbiBhcHAgdGhhdCBsZXRzIHlvdSBhZGQsIG1vZGlmeSBhbmQgcmVtb3ZlIGZvb2QgcHJvZHVjdHMgdXNpbmcgdGhlIEdyYXBoUUwgZW5kcG9pbnRcIixcbiAgICBsaXN0SXRlbXM6IFtcbiAgICAgIFwiWW91IGNhbiBhZGQgZm9vZCBwcm9kdWN0c1wiLFxuICAgICAgXCJZb3UgY2FuIG1vZGlmeSBhbmQgcmVtb3ZlIGZvb2QgcHJvZHVjdHNcIlxuICAgIF0sXG4gICAgaW1hZ2U6IFwiLi4vaW1hZ2VzL2Zvb2RlcnkucG5nXCIsXG4gICAgaHJlZjogXCJodHRwczovL2Zvb2Rlcnktcm9hbi52ZXJjZWwuYXBwL1wiXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogXCJFYXJ0aHF1YWtlIFJlcG9ydFwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkFuIGFwcCB0aGF0IGxldHMgeW91IHZpZXcgdGhlIGVhcnRocXVha2VzIHRoYXQgaGFwcGVuZWQgYXJvdW5kIHRoZSB3b3JsZFwiLFxuICAgIGxpc3RJdGVtczogW1xuICAgICAgXCJMaXN0cyB0aGUgZWFydGhxdWFrZXMgaGFwcGVuZCBhcm91bmQgdGhlIHdvcmxkIGZvciB0aGUgcGFzdCAyNCBob3Vyc1wiLFxuICAgICAgXCJQcm92aWRlcyBkZXRhaWxzIGFib3V0IHRoZSBlYXJ0aHF1YWtlIHRoYXQgaGFzIGhhcHBlbmVkXCIsXG4gICAgICBcIlNob3dzIHRyaXZpYSBhYm91dCBlYXJ0aHF1YWtlc1wiXG4gICAgXSxcbiAgICBpbWFnZTogXCIuLi9pbWFnZXMvZWFydGhxdWFrZS1yZXBvcnQucG5nXCIsXG4gICAgZmlsZTogXCIuLi9maWxlcy9lYXJ0aHF1YWtlLXJlcG9ydC5hcGtcIlxuICB9LFxuICB7XG4gICAgdGl0bGU6IFwiTXkgTm90ZXNcIixcbiAgICBkZXNjcmlwdGlvbjogXCJBbiBhcHAgdGhhdCBsZXRzIHlvdSB0YWtlIHNvbWUgbm90ZXNcIixcbiAgICBsaXN0SXRlbXM6IFtcbiAgICAgIFwiVGFrZXMgbm90ZXMgYW5kIHNob3dzIHRoZSBsaXN0IG9mIG5vdGVzXCIsXG4gICAgICBcIllvdSBjYW4gZWRpdCBhbmQgZGVsZXRlIG5vdGVzXCIsXG4gICAgICBcIllvdSBjYW4gYWRkIGEgY2F0ZWdvcnkgZm9yIGEgbm90ZVwiXG4gICAgXSxcbiAgICBpbWFnZTogXCIuLi9pbWFnZXMvbXktbm90ZXMucG5nXCIsXG4gICAgZmlsZTogXCIuLi9maWxlcy9teS1ub3Rlcy5hcGtcIlxuICB9XG5dXG5cbmV4cG9ydCBjb25zdCBQcm9qZWN0cyA9ICh7IH0pID0+IChcbiAgPEJveCBpZD1cInByb2plY3RzXCIgYmc9XCJibHVlLjUwMFwiIGNvbG9yPVwid2hpdGVcIiBweT17NDB9PlxuICAgIDxDb250YWluZXIgbWF4Vz1cImNvbnRhaW5lci5sZ1wiIGNlbnRlckNvbnRlbnQ+XG4gICAgICA8VlN0YWNrIGFsaWduPVwiY2VudGVyXCI+XG4gICAgICAgIDxIZWFkaW5nIHNpemU9XCIyeGxcIiBtYj17MTJ9PlByb2plY3RzPC9IZWFkaW5nPlxuICAgICAgICA8VlN0YWNrIGFsaWduPXt7IGJhc2U6ICdjZW50ZXInLCBtZDogJ3N0YXJ0JyB9fSBzcGFjaW5nPXsxMn0gcGI9ezE2fT5cbiAgICAgICAgICA8U2xpZGUgbGVmdCBkdXJhdGlvbj17MTAwMH0+XG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHByb2plY3RzRGF0YS5tYXAoKGRhdGEsIGRhdGFLZXkpID0+IChcbiAgICAgICAgICAgICAgICA8VlN0YWNrIGtleT17ZGF0YUtleX0gZGlyZWN0aW9uPXt7IGJhc2U6ICdjb2x1bW4nLCBtZDogJ3JvdycgfX0gYWxpZ249XCJjZW50ZXJcIiB3PXt7IGJhc2U6ICdhdXRvJywgbWQ6ICdjb250YWluZXIubWQnLCBsZzogJ2NvbnRhaW5lci5sZy5sZycgfX0gc3BhY2luZz17MTJ9PlxuICAgICAgICAgICAgICAgICAgPEltYWdlIHNyYz17ZGF0YS5pbWFnZX0gaD1cIjUwMHB4XCIgYWx0PXtkYXRhLnRpdGxlfSAvPlxuICAgICAgICAgICAgICAgICAgPFZTdGFjayBhbGlnbj17eyBiYXNlOiAnY2VudGVyJywgbWQ6ICdzdGFydCcgfX0+XG4gICAgICAgICAgICAgICAgICAgIDxIZWFkaW5nPntkYXRhLnRpdGxlfTwvSGVhZGluZz5cbiAgICAgICAgICAgICAgICAgICAgPFRleHQgcGI9ezR9IGZvbnRTaXplPVwibGdcIj57ZGF0YS5kZXNjcmlwdGlvbn08L1RleHQ+XG4gICAgICAgICAgICAgICAgICAgIDxVbm9yZGVyZWRMaXN0IHBsPXs2fSBwYj17M30+XG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS5saXN0SXRlbXMubWFwKChkZXNjLCBkZXNjS2V5KSA9PiA8TGlzdEl0ZW0ga2V5PXtkZXNjS2V5fSBmb250U2l6ZT1cImxnXCI+e2Rlc2N9PC9MaXN0SXRlbT4pXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICA8L1Vub3JkZXJlZExpc3Q+XG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24gYXM9XCJhXCIgaHJlZj17ZGF0YS5maWxlID8gZGF0YS5maWxlIDogZGF0YS5ocmVmfSB0YXJnZXQ9XCJfYmxhbmtcIiByb3VuZGVkPVwiZnVsbFwiIG1pblc9XCIxMzBweFwiIGJnQ29sb3I9XCJncmVlbi40MDBcIiBfaG92ZXI9e3sgYmdDb2xvcjogJ2dyZWVuLjEwMCcgfX0gX2FjdGl2ZT17eyBiZ0NvbG9yOiAnZ3JlZW4uMTAwJyB9fSBfZm9jdXM9e3sgYm9yZGVyQ29sb3I6ICdncmVlbi40MDAnIH19PntkYXRhLmZpbGUgPyAnRG93bmxvYWQnIDogJ1ZpZXcgRGVtbyd9PC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICA8L1ZTdGFjaz5cbiAgICAgICAgICAgICAgICA8L1ZTdGFjaz4gIFxuICAgICAgICAgICAgICApKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIDwvU2xpZGU+XG4gICAgICAgIDwvVlN0YWNrPlxuICAgICAgPC9WU3RhY2s+XG4gICAgPC9Db250YWluZXI+XG4gIDwvQm94PlxuKSJdLCJuYW1lcyI6WyJCb3giLCJDb250YWluZXIiLCJWU3RhY2siLCJIZWFkaW5nIiwiVGV4dCIsIkhTdGFjayIsIkltYWdlIiwiQnV0dG9uIiwiU3RhY2siLCJDZW50ZXIiLCJVbm9yZGVyZWRMaXN0IiwiTGlzdEl0ZW0iLCJTbGlkZSIsInByb2plY3RzRGF0YSIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJsaXN0SXRlbXMiLCJpbWFnZSIsImhyZWYiLCJmaWxlIiwiUHJvamVjdHMiLCJpZCIsImJnIiwiY29sb3IiLCJweSIsIm1heFciLCJjZW50ZXJDb250ZW50IiwiYWxpZ24iLCJzaXplIiwibWIiLCJiYXNlIiwibWQiLCJzcGFjaW5nIiwicGIiLCJsZWZ0IiwiZHVyYXRpb24iLCJtYXAiLCJkYXRhIiwiZGF0YUtleSIsImRpcmVjdGlvbiIsInciLCJsZyIsInNyYyIsImgiLCJhbHQiLCJmb250U2l6ZSIsInBsIiwiZGVzYyIsImRlc2NLZXkiLCJhcyIsInRhcmdldCIsInJvdW5kZWQiLCJtaW5XIiwiYmdDb2xvciIsIl9ob3ZlciIsIl9hY3RpdmUiLCJfZm9jdXMiLCJib3JkZXJDb2xvciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/sections/Projects.js\n");

/***/ })

});