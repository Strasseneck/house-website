"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/layout",{

/***/ "(app-pages-browser)/./app/globals.css":
/*!*************************!*\
  !*** ./app/globals.css ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"908dea302881\");\nif (true) { module.hot.accept() }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9nbG9iYWxzLmNzcyIsIm1hcHBpbmdzIjoiO0FBQUEsK0RBQWUsY0FBYztBQUM3QixJQUFJLElBQVUsSUFBSSxpQkFBaUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2dsb2JhbHMuY3NzP2U1OTIiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgXCI5MDhkZWEzMDI4ODFcIlxuaWYgKG1vZHVsZS5ob3QpIHsgbW9kdWxlLmhvdC5hY2NlcHQoKSB9XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/globals.css\n"));

/***/ }),

/***/ "(app-pages-browser)/./app/ui/nav.tsx":
/*!************************!*\
  !*** ./app/ui/nav.tsx ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Nav; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _barrel_optimize_names_FaInstagram_FaMastodon_react_icons_fa__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! __barrel_optimize__?names=FaInstagram,FaMastodon!=!react-icons/fa */ \"(app-pages-browser)/./node_modules/react-icons/fa/index.mjs\");\n/* harmony import */ var _barrel_optimize_names_MdOutlineEmail_MdOutlineMenu_react_icons_md__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! __barrel_optimize__?names=MdOutlineEmail,MdOutlineMenu!=!react-icons/md */ \"(app-pages-browser)/./node_modules/react-icons/md/index.mjs\");\n/* harmony import */ var _utils_isMobile__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/isMobile */ \"(app-pages-browser)/./app/utils/isMobile.ts\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n// icons\n\n\n// utils\n\n\nfunction Nav() {\n    _s();\n    const [menuOpen, setMenuOpen] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const handleMenuClick = ()=>{\n        if (menuOpen) {\n            setMenuOpen(false);\n        } else {\n            setMenuOpen(true);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: (0,_utils_isMobile__WEBPACK_IMPORTED_MODULE_1__.isMobileDevice)() ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"w-full h-[100px] flex flex-row position: fixed top-0 bg-black items-center justify-between pl-[20px] pt-10 pb-6 z-40 font-serif tracking-widest\",\n            children: menuOpen ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex flex-row\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                href: \"#about\",\n                                className: \"text-s text-white hover:text-red-600 hover:underline underline-offset-8 mx-5 mb-3 \",\n                                children: \"ABOUT\"\n                            }, void 0, false, {\n                                fileName: \"/home/strasseneck/Repos/house-website/app/ui/nav.tsx\",\n                                lineNumber: 26,\n                                columnNumber: 33\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                href: \"#listen\",\n                                className: \"text-s text-white hover:text-red-600 hover:underline underline-offset-8 mx-5 mb-3 \",\n                                children: \"LISTEN\"\n                            }, void 0, false, {\n                                fileName: \"/home/strasseneck/Repos/house-website/app/ui/nav.tsx\",\n                                lineNumber: 27,\n                                columnNumber: 33\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                href: \"#episodes\",\n                                className: \"text-s text-white hover:text-red-600 hover:underline underline-offset-8 mx-5 mb-3 \",\n                                children: \"READ\"\n                            }, void 0, false, {\n                                fileName: \"/home/strasseneck/Repos/house-website/app/ui/nav.tsx\",\n                                lineNumber: 28,\n                                columnNumber: 33\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/strasseneck/Repos/house-website/app/ui/nav.tsx\",\n                        lineNumber: 25,\n                        columnNumber: 29\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_MdOutlineEmail_MdOutlineMenu_react_icons_md__WEBPACK_IMPORTED_MODULE_3__.MdOutlineMenu, {\n                        className: \"size-12 mx-5 mb-3 cursor-pointer fill-white hover:fill-red-600\",\n                        onClick: handleMenuClick\n                    }, void 0, false, {\n                        fileName: \"/home/strasseneck/Repos/house-website/app/ui/nav.tsx\",\n                        lineNumber: 30,\n                        columnNumber: 29\n                    }, this)\n                ]\n            }, void 0, true) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                        href: \"#home\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"video\", {\n                            src: \"https://res.cloudinary.com/dl14zept9/video/upload/v1713180271/Glitch_Logo_Animation_transparent_as8gjp.mp4\",\n                            autoPlay: true,\n                            loop: true,\n                            muted: true,\n                            className: \"h-[80px] mb-2\"\n                        }, void 0, false, {\n                            fileName: \"/home/strasseneck/Repos/house-website/app/ui/nav.tsx\",\n                            lineNumber: 34,\n                            columnNumber: 45\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/home/strasseneck/Repos/house-website/app/ui/nav.tsx\",\n                        lineNumber: 34,\n                        columnNumber: 29\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        id: \"icons-container\",\n                        className: \"flex flex-row\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                target: \"_blank\",\n                                href: \"mailto:thehousethatshadowsbuilt@gmail.com\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_MdOutlineEmail_MdOutlineMenu_react_icons_md__WEBPACK_IMPORTED_MODULE_3__.MdOutlineEmail, {\n                                    className: \"size-6 mx-5 mb-3 cursor-pointer fill-white hover:fill-red-600\"\n                                }, void 0, false, {\n                                    fileName: \"/home/strasseneck/Repos/house-website/app/ui/nav.tsx\",\n                                    lineNumber: 37,\n                                    columnNumber: 101\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/home/strasseneck/Repos/house-website/app/ui/nav.tsx\",\n                                lineNumber: 37,\n                                columnNumber: 33\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                target: \"_blank\",\n                                href: \"https://www.instagram.com/thehousethatshadowsbuilt/\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_FaInstagram_FaMastodon_react_icons_fa__WEBPACK_IMPORTED_MODULE_4__.FaInstagram, {\n                                    className: \"size-6 mx-5 mb-3 cursor-pointer fill-white hover:fill-red-600\"\n                                }, void 0, false, {\n                                    fileName: \"/home/strasseneck/Repos/house-website/app/ui/nav.tsx\",\n                                    lineNumber: 38,\n                                    columnNumber: 111\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/home/strasseneck/Repos/house-website/app/ui/nav.tsx\",\n                                lineNumber: 38,\n                                columnNumber: 33\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                target: \"_blank \",\n                                href: \"https://mastodon.social/@thehousethatshadowsbuilt\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_FaInstagram_FaMastodon_react_icons_fa__WEBPACK_IMPORTED_MODULE_4__.FaMastodon, {\n                                    className: \"size-6 mx-5 mb-3 cursor-pointer fill-white hover:fill-red-600\"\n                                }, void 0, false, {\n                                    fileName: \"/home/strasseneck/Repos/house-website/app/ui/nav.tsx\",\n                                    lineNumber: 39,\n                                    columnNumber: 110\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/home/strasseneck/Repos/house-website/app/ui/nav.tsx\",\n                                lineNumber: 39,\n                                columnNumber: 33\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/strasseneck/Repos/house-website/app/ui/nav.tsx\",\n                        lineNumber: 36,\n                        columnNumber: 29\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_MdOutlineEmail_MdOutlineMenu_react_icons_md__WEBPACK_IMPORTED_MODULE_3__.MdOutlineMenu, {\n                        className: \"size-12 mx-5 mb-3 cursor-pointer fill-white hover:fill-red-600\",\n                        onClick: handleMenuClick\n                    }, void 0, false, {\n                        fileName: \"/home/strasseneck/Repos/house-website/app/ui/nav.tsx\",\n                        lineNumber: 41,\n                        columnNumber: 29\n                    }, this)\n                ]\n            }, void 0, true)\n        }, void 0, false, {\n            fileName: \"/home/strasseneck/Repos/house-website/app/ui/nav.tsx\",\n            lineNumber: 22,\n            columnNumber: 17\n        }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"w-full h-[80px] flex flex-row position: fixed top-0 bg-black items-center justify-between pl-[30px] pt-8 pb-6 z-40 font-serif tracking-widest\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                    href: \"#home\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"video\", {\n                        src: \"https://res.cloudinary.com/dl14zept9/video/upload/v1713180271/Glitch_Logo_Animation_transparent_as8gjp.mp4\",\n                        autoPlay: true,\n                        loop: true,\n                        muted: true,\n                        className: \"h-[60px] mb-2\"\n                    }, void 0, false, {\n                        fileName: \"/home/strasseneck/Repos/house-website/app/ui/nav.tsx\",\n                        lineNumber: 47,\n                        columnNumber: 37\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/home/strasseneck/Repos/house-website/app/ui/nav.tsx\",\n                    lineNumber: 47,\n                    columnNumber: 21\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                    href: \"#about\",\n                    className: \"text-white hover:text-red-600 hover:underline underline-offset-8\",\n                    children: \"ABOUT\"\n                }, void 0, false, {\n                    fileName: \"/home/strasseneck/Repos/house-website/app/ui/nav.tsx\",\n                    lineNumber: 49,\n                    columnNumber: 21\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                    href: \"#listen\",\n                    className: \"text-white hover:text-red-600 hover:underline underline-offset-8\",\n                    children: \"LISTEN\"\n                }, void 0, false, {\n                    fileName: \"/home/strasseneck/Repos/house-website/app/ui/nav.tsx\",\n                    lineNumber: 50,\n                    columnNumber: 21\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                    href: \"#episodes\",\n                    className: \"text-white hover:text-red-600 hover:underline underline-offset-8\",\n                    children: \"READ\"\n                }, void 0, false, {\n                    fileName: \"/home/strasseneck/Repos/house-website/app/ui/nav.tsx\",\n                    lineNumber: 51,\n                    columnNumber: 21\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    id: \"icons-container\",\n                    className: \"flex flex-row\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                            target: \"_blank\",\n                            href: \"mailto:thehousethatshadowsbuilt@gmail.com\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_MdOutlineEmail_MdOutlineMenu_react_icons_md__WEBPACK_IMPORTED_MODULE_3__.MdOutlineEmail, {\n                                className: \"size-6 mx-5 mb-3 cursor-pointer fill-white hover:fill-red-600\"\n                            }, void 0, false, {\n                                fileName: \"/home/strasseneck/Repos/house-website/app/ui/nav.tsx\",\n                                lineNumber: 53,\n                                columnNumber: 93\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/home/strasseneck/Repos/house-website/app/ui/nav.tsx\",\n                            lineNumber: 53,\n                            columnNumber: 25\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                            target: \"_blank\",\n                            href: \"https://www.instagram.com/thehousethatshadowsbuilt/\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_FaInstagram_FaMastodon_react_icons_fa__WEBPACK_IMPORTED_MODULE_4__.FaInstagram, {\n                                className: \"size-6 mx-5 mb-3 cursor-pointer fill-white hover:fill-red-600\"\n                            }, void 0, false, {\n                                fileName: \"/home/strasseneck/Repos/house-website/app/ui/nav.tsx\",\n                                lineNumber: 54,\n                                columnNumber: 103\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/home/strasseneck/Repos/house-website/app/ui/nav.tsx\",\n                            lineNumber: 54,\n                            columnNumber: 25\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                            target: \"_blank \",\n                            href: \"https://mastodon.social/@thehousethatshadowsbuilt\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_FaInstagram_FaMastodon_react_icons_fa__WEBPACK_IMPORTED_MODULE_4__.FaMastodon, {\n                                className: \"size-6 mx-5 mb-3 cursor-pointer fill-white hover:fill-red-600\"\n                            }, void 0, false, {\n                                fileName: \"/home/strasseneck/Repos/house-website/app/ui/nav.tsx\",\n                                lineNumber: 55,\n                                columnNumber: 102\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/home/strasseneck/Repos/house-website/app/ui/nav.tsx\",\n                            lineNumber: 55,\n                            columnNumber: 25\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/strasseneck/Repos/house-website/app/ui/nav.tsx\",\n                    lineNumber: 52,\n                    columnNumber: 21\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/strasseneck/Repos/house-website/app/ui/nav.tsx\",\n            lineNumber: 46,\n            columnNumber: 17\n        }, this)\n    }, void 0, false);\n}\n_s(Nav, \"K77eQVFAaxZgbvGoNWFAiCE7OTY=\");\n_c = Nav;\nvar _c;\n$RefreshReg$(_c, \"Nav\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC91aS9uYXYudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUNBLFFBQVE7QUFDaUQ7QUFDTTtBQUMvRCxRQUFRO0FBQzJDO0FBQ2xCO0FBRWxCLFNBQVNNOztJQUNwQixNQUFNLENBQUNDLFVBQVVDLFlBQVksR0FBR0gsK0NBQVFBLENBQUM7SUFFekMsTUFBTUksa0JBQWtCO1FBQ3BCLElBQUlGLFVBQVU7WUFDVkMsWUFBWTtRQUNoQixPQUFPO1lBQ0hBLFlBQVk7UUFDaEI7SUFDSjtJQUNBLHFCQUNJO2tCQUNLSiwrREFBY0EsbUJBQ1gsOERBQUNNO1lBQUlDLFdBQVU7c0JBQ1ZKLHlCQUNHOztrQ0FDSSw4REFBQ0c7d0JBQUlDLFdBQVU7OzBDQUNYLDhEQUFDQztnQ0FBRUMsTUFBTTtnQ0FBVUYsV0FBVTswQ0FBcUY7Ozs7OzswQ0FDbEgsOERBQUNDO2dDQUFFQyxNQUFNO2dDQUFXRixXQUFVOzBDQUFxRjs7Ozs7OzBDQUNuSCw4REFBQ0M7Z0NBQUVDLE1BQU07Z0NBQWFGLFdBQVU7MENBQXFGOzs7Ozs7Ozs7Ozs7a0NBRXpILDhEQUFDUiw2R0FBYUE7d0JBQUNRLFdBQVU7d0JBQWlFRyxTQUFTTDs7Ozs7Ozs2Q0FHdkc7O2tDQUNJLDhEQUFDRzt3QkFBRUMsTUFBSztrQ0FBUSw0RUFBQ0U7NEJBQU1DLEtBQUs7NEJBQThHQyxRQUFROzRCQUFDQyxJQUFJOzRCQUFDQyxLQUFLOzRCQUFDUixXQUFVOzs7Ozs7Ozs7OztrQ0FFeEssOERBQUNEO3dCQUFJVSxJQUFHO3dCQUFrQlQsV0FBVTs7MENBQ2hDLDhEQUFDQztnQ0FBRVMsUUFBTztnQ0FBU1IsTUFBSzswQ0FBNEMsNEVBQUNYLDhHQUFjQTtvQ0FBQ1MsV0FBVTs7Ozs7Ozs7Ozs7MENBQzlGLDhEQUFDQztnQ0FBRVMsUUFBTztnQ0FBU1IsTUFBSzswQ0FBc0QsNEVBQUNiLHFHQUFXQTtvQ0FBQ1csV0FBVTs7Ozs7Ozs7Ozs7MENBQ3JHLDhEQUFDQztnQ0FBRVMsUUFBTztnQ0FBVVIsTUFBSzswQ0FBb0QsNEVBQUNaLG9HQUFVQTtvQ0FBQ1UsV0FBVTs7Ozs7Ozs7Ozs7Ozs7Ozs7a0NBRXZHLDhEQUFDUiw2R0FBYUE7d0JBQUNRLFdBQVU7d0JBQWlFRyxTQUFTTDs7Ozs7Ozs7Ozs7O2lDQUsvRyw4REFBQ0M7WUFBSUMsV0FBVTs7OEJBQ1gsOERBQUNDO29CQUFFQyxNQUFLOzhCQUFRLDRFQUFDRTt3QkFBTUMsS0FBSzt3QkFBOEdDLFFBQVE7d0JBQUNDLElBQUk7d0JBQUNDLEtBQUs7d0JBQUNSLFdBQVU7Ozs7Ozs7Ozs7OzhCQUV4Syw4REFBQ0M7b0JBQUVDLE1BQU07b0JBQVVGLFdBQVU7OEJBQW1FOzs7Ozs7OEJBQ2hHLDhEQUFDQztvQkFBRUMsTUFBTTtvQkFBV0YsV0FBVTs4QkFBbUU7Ozs7Ozs4QkFDakcsOERBQUNDO29CQUFFQyxNQUFNO29CQUFhRixXQUFVOzhCQUFtRTs7Ozs7OzhCQUNuRyw4REFBQ0Q7b0JBQUlVLElBQUc7b0JBQWtCVCxXQUFVOztzQ0FDaEMsOERBQUNDOzRCQUFFUyxRQUFPOzRCQUFTUixNQUFLO3NDQUE0Qyw0RUFBQ1gsOEdBQWNBO2dDQUFDUyxXQUFVOzs7Ozs7Ozs7OztzQ0FDOUYsOERBQUNDOzRCQUFFUyxRQUFPOzRCQUFTUixNQUFLO3NDQUFzRCw0RUFBQ2IscUdBQVdBO2dDQUFDVyxXQUFVOzs7Ozs7Ozs7OztzQ0FDckcsOERBQUNDOzRCQUFFUyxRQUFPOzRCQUFVUixNQUFLO3NDQUFvRCw0RUFBQ1osb0dBQVVBO2dDQUFDVSxXQUFVOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNM0g7R0FwRHdCTDtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvdWkvbmF2LnRzeD9lMjk1Il0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50J1xuLy8gaWNvbnNcbmltcG9ydCB7IEZhSW5zdGFncmFtLCBGYU1hc3RvZG9uIH0gZnJvbSBcInJlYWN0LWljb25zL2ZhXCI7XG5pbXBvcnQgeyBNZE91dGxpbmVFbWFpbCwgTWRPdXRsaW5lTWVudSB9IGZyb20gXCJyZWFjdC1pY29ucy9tZFwiO1xuLy8gdXRpbHNcbmltcG9ydCB7IGlzTW9iaWxlRGV2aWNlIH0gZnJvbSBcIi4uL3V0aWxzL2lzTW9iaWxlXCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBOYXYoKSB7XG4gICAgY29uc3QgW21lbnVPcGVuLCBzZXRNZW51T3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgICBjb25zdCBoYW5kbGVNZW51Q2xpY2sgPSAoKSA9PiB7XG4gICAgICAgIGlmIChtZW51T3Blbikge1xuICAgICAgICAgICAgc2V0TWVudU9wZW4oZmFsc2UpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzZXRNZW51T3Blbih0cnVlKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gKFxuICAgICAgICA8PlxuICAgICAgICAgICAge2lzTW9iaWxlRGV2aWNlKCkgPyAoXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgaC1bMTAwcHhdIGZsZXggZmxleC1yb3cgcG9zaXRpb246IGZpeGVkIHRvcC0wIGJnLWJsYWNrIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gcGwtWzIwcHhdIHB0LTEwIHBiLTYgei00MCBmb250LXNlcmlmIHRyYWNraW5nLXdpZGVzdFwiPlxuICAgICAgICAgICAgICAgICAgICB7bWVudU9wZW4gPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXJvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPXsnI2Fib3V0J30gY2xhc3NOYW1lPVwidGV4dC1zIHRleHQtd2hpdGUgaG92ZXI6dGV4dC1yZWQtNjAwIGhvdmVyOnVuZGVybGluZSB1bmRlcmxpbmUtb2Zmc2V0LTggbXgtNSBtYi0zIFwiPkFCT1VUPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPXsnI2xpc3Rlbid9IGNsYXNzTmFtZT1cInRleHQtcyB0ZXh0LXdoaXRlIGhvdmVyOnRleHQtcmVkLTYwMCBob3Zlcjp1bmRlcmxpbmUgdW5kZXJsaW5lLW9mZnNldC04IG14LTUgbWItMyBcIj5MSVNURU48L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9eycjZXBpc29kZXMnfSBjbGFzc05hbWU9XCJ0ZXh0LXMgdGV4dC13aGl0ZSBob3Zlcjp0ZXh0LXJlZC02MDAgaG92ZXI6dW5kZXJsaW5lIHVuZGVybGluZS1vZmZzZXQtOCBteC01IG1iLTMgXCI+UkVBRDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TWRPdXRsaW5lTWVudSBjbGFzc05hbWU9XCJzaXplLTEyIG14LTUgbWItMyBjdXJzb3ItcG9pbnRlciBmaWxsLXdoaXRlIGhvdmVyOmZpbGwtcmVkLTYwMFwiIG9uQ2xpY2s9e2hhbmRsZU1lbnVDbGlja30gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI2hvbWVcIj48dmlkZW8gc3JjPXtcImh0dHBzOi8vcmVzLmNsb3VkaW5hcnkuY29tL2RsMTR6ZXB0OS92aWRlby91cGxvYWQvdjE3MTMxODAyNzEvR2xpdGNoX0xvZ29fQW5pbWF0aW9uX3RyYW5zcGFyZW50X2FzOGdqcC5tcDRcIn0gYXV0b1BsYXkgbG9vcCBtdXRlZCBjbGFzc05hbWU9XCJoLVs4MHB4XSBtYi0yXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBpZD1cImljb25zLWNvbnRhaW5lclwiIGNsYXNzTmFtZT1cImZsZXggZmxleC1yb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgdGFyZ2V0PVwiX2JsYW5rXCIgaHJlZj1cIm1haWx0bzp0aGVob3VzZXRoYXRzaGFkb3dzYnVpbHRAZ21haWwuY29tXCI+PE1kT3V0bGluZUVtYWlsIGNsYXNzTmFtZT1cInNpemUtNiBteC01IG1iLTMgY3Vyc29yLXBvaW50ZXIgZmlsbC13aGl0ZSBob3ZlcjpmaWxsLXJlZC02MDBcIiAvPjwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgdGFyZ2V0PVwiX2JsYW5rXCIgaHJlZj1cImh0dHBzOi8vd3d3Lmluc3RhZ3JhbS5jb20vdGhlaG91c2V0aGF0c2hhZG93c2J1aWx0L1wiPjxGYUluc3RhZ3JhbSBjbGFzc05hbWU9XCJzaXplLTYgbXgtNSBtYi0zIGN1cnNvci1wb2ludGVyIGZpbGwtd2hpdGUgaG92ZXI6ZmlsbC1yZWQtNjAwXCIgLz48L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIHRhcmdldD1cIl9ibGFuayBcIiBocmVmPVwiaHR0cHM6Ly9tYXN0b2Rvbi5zb2NpYWwvQHRoZWhvdXNldGhhdHNoYWRvd3NidWlsdFwiPjxGYU1hc3RvZG9uIGNsYXNzTmFtZT1cInNpemUtNiBteC01IG1iLTMgY3Vyc29yLXBvaW50ZXIgZmlsbC13aGl0ZSBob3ZlcjpmaWxsLXJlZC02MDBcIiAvPjwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TWRPdXRsaW5lTWVudSBjbGFzc05hbWU9XCJzaXplLTEyIG14LTUgbWItMyBjdXJzb3ItcG9pbnRlciBmaWxsLXdoaXRlIGhvdmVyOmZpbGwtcmVkLTYwMFwiIG9uQ2xpY2s9e2hhbmRsZU1lbnVDbGlja30gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBoLVs4MHB4XSBmbGV4IGZsZXgtcm93IHBvc2l0aW9uOiBmaXhlZCB0b3AtMCBiZy1ibGFjayBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIHBsLVszMHB4XSBwdC04IHBiLTYgei00MCBmb250LXNlcmlmIHRyYWNraW5nLXdpZGVzdFwiPlxuICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI2hvbWVcIj48dmlkZW8gc3JjPXtcImh0dHBzOi8vcmVzLmNsb3VkaW5hcnkuY29tL2RsMTR6ZXB0OS92aWRlby91cGxvYWQvdjE3MTMxODAyNzEvR2xpdGNoX0xvZ29fQW5pbWF0aW9uX3RyYW5zcGFyZW50X2FzOGdqcC5tcDRcIn0gYXV0b1BsYXkgbG9vcCBtdXRlZCBjbGFzc05hbWU9XCJoLVs2MHB4XSBtYi0yXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICA8YSBocmVmPXsnI2Fib3V0J30gY2xhc3NOYW1lPVwidGV4dC13aGl0ZSBob3Zlcjp0ZXh0LXJlZC02MDAgaG92ZXI6dW5kZXJsaW5lIHVuZGVybGluZS1vZmZzZXQtOFwiPkFCT1VUPC9hPlxuICAgICAgICAgICAgICAgICAgICA8YSBocmVmPXsnI2xpc3Rlbid9IGNsYXNzTmFtZT1cInRleHQtd2hpdGUgaG92ZXI6dGV4dC1yZWQtNjAwIGhvdmVyOnVuZGVybGluZSB1bmRlcmxpbmUtb2Zmc2V0LThcIj5MSVNURU48L2E+XG4gICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9eycjZXBpc29kZXMnfSBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlIGhvdmVyOnRleHQtcmVkLTYwMCBob3Zlcjp1bmRlcmxpbmUgdW5kZXJsaW5lLW9mZnNldC04XCI+UkVBRDwvYT5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBpZD1cImljb25zLWNvbnRhaW5lclwiIGNsYXNzTmFtZT1cImZsZXggZmxleC1yb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIHRhcmdldD1cIl9ibGFua1wiIGhyZWY9XCJtYWlsdG86dGhlaG91c2V0aGF0c2hhZG93c2J1aWx0QGdtYWlsLmNvbVwiPjxNZE91dGxpbmVFbWFpbCBjbGFzc05hbWU9XCJzaXplLTYgbXgtNSBtYi0zIGN1cnNvci1wb2ludGVyIGZpbGwtd2hpdGUgaG92ZXI6ZmlsbC1yZWQtNjAwXCIgLz48L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YSB0YXJnZXQ9XCJfYmxhbmtcIiBocmVmPVwiaHR0cHM6Ly93d3cuaW5zdGFncmFtLmNvbS90aGVob3VzZXRoYXRzaGFkb3dzYnVpbHQvXCI+PEZhSW5zdGFncmFtIGNsYXNzTmFtZT1cInNpemUtNiBteC01IG1iLTMgY3Vyc29yLXBvaW50ZXIgZmlsbC13aGl0ZSBob3ZlcjpmaWxsLXJlZC02MDBcIiAvPjwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIHRhcmdldD1cIl9ibGFuayBcIiBocmVmPVwiaHR0cHM6Ly9tYXN0b2Rvbi5zb2NpYWwvQHRoZWhvdXNldGhhdHNoYWRvd3NidWlsdFwiPjxGYU1hc3RvZG9uIGNsYXNzTmFtZT1cInNpemUtNiBteC01IG1iLTMgY3Vyc29yLXBvaW50ZXIgZmlsbC13aGl0ZSBob3ZlcjpmaWxsLXJlZC02MDBcIiAvPjwvYT5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApfVxuICAgICAgICA8Lz5cbiAgICApXG59Il0sIm5hbWVzIjpbIkZhSW5zdGFncmFtIiwiRmFNYXN0b2RvbiIsIk1kT3V0bGluZUVtYWlsIiwiTWRPdXRsaW5lTWVudSIsImlzTW9iaWxlRGV2aWNlIiwidXNlU3RhdGUiLCJOYXYiLCJtZW51T3BlbiIsInNldE1lbnVPcGVuIiwiaGFuZGxlTWVudUNsaWNrIiwiZGl2IiwiY2xhc3NOYW1lIiwiYSIsImhyZWYiLCJvbkNsaWNrIiwidmlkZW8iLCJzcmMiLCJhdXRvUGxheSIsImxvb3AiLCJtdXRlZCIsImlkIiwidGFyZ2V0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/ui/nav.tsx\n"));

/***/ })

});