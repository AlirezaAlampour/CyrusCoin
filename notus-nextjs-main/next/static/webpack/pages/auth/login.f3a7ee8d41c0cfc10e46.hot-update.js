webpackHotUpdate_N_E("pages/auth/login",{

/***/ "./components/Navbars/IndexNavbar.js":
/*!*******************************************!*\
  !*** ./components/Navbars/IndexNavbar.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Navbar; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var components_Dropdowns_IndexDropdown_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/Dropdowns/IndexDropdown.js */ "./components/Dropdowns/IndexDropdown.js");



var _jsxFileName = "I:\\Projects\\CyrusCoin\\notus-nextjs-main\\components\\Navbars\\IndexNavbar.js",
    _s = $RefreshSig$();


 // import logo from '/cyrus/public/img/cyrus-min.png';
// components


function Navbar(props) {
  _s();

  const [navbarOpen, setNavbarOpen] = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(false);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("nav", {
      className: "top-0 fixed z-50 w-full flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg bg-white shadow",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "container px-4 mx-auto flex flex-wrap items-center justify-between",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
            href: "/",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
              className: "text-blueGray-700 text-3xl font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase",
              href: "#",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                alt: "logo",
                src: '../img/cyrus-min.png'
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 21,
                columnNumber: 19
              }, this), "Cyrus Coin"]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 16,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 15,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
            className: "cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none",
            type: "button",
            onClick: () => setNavbarOpen(!navbarOpen),
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
              className: "fas fa-bars"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 38,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 33,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 14,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "lg:flex flex-grow items-center bg-white lg:bg-opacity-0 lg:shadow-none" + (navbarOpen ? " block" : " hidden"),
          id: "example-navbar-warning",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
            className: "flex flex-col lg:flex-row list-none mr-auto",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
              className: "flex items-center"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 49,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 48,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
            className: "flex flex-col lg:flex-row list-none lg:ml-auto",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
              className: "flex items-center",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(components_Dropdowns_IndexDropdown_js__WEBPACK_IMPORTED_MODULE_3__["default"], {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 61,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 60,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
              className: "flex items-center"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 63,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
              className: "flex items-center"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 74,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
              className: "flex items-center"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 85,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
              className: "flex items-center"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 96,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 59,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }, this)
  }, void 0, false);
}

_s(Navbar, "15c5sM/hZYq2eTRu58QbId6xljA=");

_c = Navbar;

var _c;

$RefreshReg$(_c, "Navbar");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9OYXZiYXJzL0luZGV4TmF2YmFyLmpzIl0sIm5hbWVzIjpbIk5hdmJhciIsInByb3BzIiwibmF2YmFyT3BlbiIsInNldE5hdmJhck9wZW4iLCJSZWFjdCIsInVzZVN0YXRlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Q0FFQTtBQUNBOztBQUVBO0FBRWUsU0FBU0EsTUFBVCxDQUFnQkMsS0FBaEIsRUFBdUI7QUFBQTs7QUFDcEMsUUFBTSxDQUFDQyxVQUFELEVBQWFDLGFBQWIsSUFBOEJDLDRDQUFLLENBQUNDLFFBQU4sQ0FBZSxLQUFmLENBQXBDO0FBQ0Esc0JBQ0U7QUFBQSwyQkFDRTtBQUFLLGVBQVMsRUFBQyxnSEFBZjtBQUFBLDZCQUNFO0FBQUssaUJBQVMsRUFBQyxvRUFBZjtBQUFBLGdDQUNFO0FBQUssbUJBQVMsRUFBQyxvRkFBZjtBQUFBLGtDQUNFLHFFQUFDLGdEQUFEO0FBQU8sZ0JBQUksRUFBQyxHQUFaO0FBQUEsbUNBQ0U7QUFDRSx1QkFBUyxFQUFDLHlHQURaO0FBRUUsa0JBQUksRUFBQyxHQUZQO0FBQUEsc0NBS0k7QUFDRSxtQkFBRyxFQUFDLE1BRE47QUFFRSxtQkFBRyxFQUFFO0FBRlA7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFMSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURGLGVBbUJFO0FBQ0UscUJBQVMsRUFBQyw2SkFEWjtBQUVFLGdCQUFJLEVBQUMsUUFGUDtBQUdFLG1CQUFPLEVBQUUsTUFBTUYsYUFBYSxDQUFDLENBQUNELFVBQUYsQ0FIOUI7QUFBQSxtQ0FLRTtBQUFHLHVCQUFTLEVBQUM7QUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTEY7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFuQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGLGVBNEJFO0FBQ0UsbUJBQVMsRUFDUCw0RUFDQ0EsVUFBVSxHQUFHLFFBQUgsR0FBYyxTQUR6QixDQUZKO0FBS0UsWUFBRSxFQUFDLHdCQUxMO0FBQUEsa0NBT0U7QUFBSSxxQkFBUyxFQUFDLDZDQUFkO0FBQUEsbUNBQ0U7QUFBSSx1QkFBUyxFQUFDO0FBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBUEYsZUFrQkU7QUFBSSxxQkFBUyxFQUFDLGdEQUFkO0FBQUEsb0NBQ0U7QUFBSSx1QkFBUyxFQUFDLG1CQUFkO0FBQUEscUNBQ0UscUVBQUMsNkVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBREYsZUFJRTtBQUFJLHVCQUFTLEVBQUM7QUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUpGLGVBZUU7QUFBSSx1QkFBUyxFQUFDO0FBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFmRixlQTBCRTtBQUFJLHVCQUFTLEVBQUM7QUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQTFCRixlQXFDRTtBQUFJLHVCQUFTLEVBQUM7QUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQXJDRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBbEJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkE1QkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGLG1CQURGO0FBb0dEOztHQXRHdUJGLE07O0tBQUFBLE0iLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYXV0aC9sb2dpbi5mM2E3ZWU4ZDQxYzBjZmMxMGU0Ni5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuLy8gaW1wb3J0IGxvZ28gZnJvbSAnL2N5cnVzL3B1YmxpYy9pbWcvY3lydXMtbWluLnBuZyc7XG4vLyBjb21wb25lbnRzXG5cbmltcG9ydCBJbmRleERyb3Bkb3duIGZyb20gXCJjb21wb25lbnRzL0Ryb3Bkb3ducy9JbmRleERyb3Bkb3duLmpzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE5hdmJhcihwcm9wcykge1xuICBjb25zdCBbbmF2YmFyT3Blbiwgc2V0TmF2YmFyT3Blbl0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxuYXYgY2xhc3NOYW1lPVwidG9wLTAgZml4ZWQgei01MCB3LWZ1bGwgZmxleCBmbGV4LXdyYXAgaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiBweC0yIHB5LTMgbmF2YmFyLWV4cGFuZC1sZyBiZy13aGl0ZSBzaGFkb3dcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgcHgtNCBteC1hdXRvIGZsZXggZmxleC13cmFwIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW5cIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCByZWxhdGl2ZSBmbGV4IGp1c3RpZnktYmV0d2VlbiBsZzp3LWF1dG8gbGc6c3RhdGljIGxnOmJsb2NrIGxnOmp1c3RpZnktc3RhcnRcIj5cbiAgICAgICAgICAgIDxMaW5rICBocmVmPVwiL1wiPlxuICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtYmx1ZUdyYXktNzAwIHRleHQtM3hsIGZvbnQtYm9sZCBsZWFkaW5nLXJlbGF4ZWQgaW5saW5lLWJsb2NrIG1yLTQgcHktMiB3aGl0ZXNwYWNlLW5vd3JhcCB1cHBlcmNhc2VcIlxuICAgICAgICAgICAgICAgIGhyZWY9XCIjXCJcblxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgICAgIGFsdD1cImxvZ29cIlxuICAgICAgICAgICAgICAgICAgICBzcmM9eycuLi9pbWcvY3lydXMtbWluLnBuZyd9XG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIEN5cnVzIENvaW5cbiAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICB7LyogPGltZ1xuICAgICAgICAgICAgICAgICAgYWx0PVwiLi4uXCJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1heC13LWZ1bGwgcm91bmRlZC1sZyBzaGFkb3ctbGdcIlxuICAgICAgICAgICAgICAgICAgc3JjPScvaW1nL2N5cnVzLnBuZydcbiAgICAgICAgICAgICAgICAvPiAqL31cbiAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY3Vyc29yLXBvaW50ZXIgdGV4dC14bCBsZWFkaW5nLW5vbmUgcHgtMyBweS0xIGJvcmRlciBib3JkZXItc29saWQgYm9yZGVyLXRyYW5zcGFyZW50IHJvdW5kZWQgYmctdHJhbnNwYXJlbnQgYmxvY2sgbGc6aGlkZGVuIG91dGxpbmUtbm9uZSBmb2N1czpvdXRsaW5lLW5vbmVcIlxuICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0TmF2YmFyT3BlbighbmF2YmFyT3Blbil9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1iYXJzXCI+PC9pPlxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAgY2xhc3NOYW1lPXtcbiAgICAgICAgICAgICAgXCJsZzpmbGV4IGZsZXgtZ3JvdyBpdGVtcy1jZW50ZXIgYmctd2hpdGUgbGc6Ymctb3BhY2l0eS0wIGxnOnNoYWRvdy1ub25lXCIgK1xuICAgICAgICAgICAgICAobmF2YmFyT3BlbiA/IFwiIGJsb2NrXCIgOiBcIiBoaWRkZW5cIilcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlkPVwiZXhhbXBsZS1uYXZiYXItd2FybmluZ1wiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgbGc6ZmxleC1yb3cgbGlzdC1ub25lIG1yLWF1dG9cIj5cbiAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgey8qIDxhXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJob3Zlcjp0ZXh0LWJsdWVHcmF5LTUwMCB0ZXh0LWJsdWVHcmF5LTcwMCBweC0zIHB5LTQgbGc6cHktMiBmbGV4IGl0ZW1zLWNlbnRlciB0ZXh0LXhzIHVwcGVyY2FzZSBmb250LWJvbGRcIlxuICAgICAgICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vd3d3LmNyZWF0aXZlLXRpbS5jb20vbGVhcm5pbmctbGFiL3RhaWx3aW5kL25leHRqcy9vdmVydmlldy9ub3R1cz9yZWY9bm5qcy1pbmRleC1uYXZiYXJcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cInRleHQtYmx1ZUdyYXktNDAwIGZhciBmYS1maWxlLWFsdCB0ZXh0LWxnIGxlYWRpbmctbGcgbXItMlwiIC8+e1wiIFwifVxuICAgICAgICAgICAgICAgICAgRG9jc1xuICAgICAgICAgICAgICAgIDwvYT4gKi99XG4gICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgbGc6ZmxleC1yb3cgbGlzdC1ub25lIGxnOm1sLWF1dG9cIj5cbiAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgPEluZGV4RHJvcGRvd24gLz5cbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgey8qIDxhXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJob3Zlcjp0ZXh0LWJsdWVHcmF5LTUwMCB0ZXh0LWJsdWVHcmF5LTcwMCBweC0zIHB5LTQgbGc6cHktMiBmbGV4IGl0ZW1zLWNlbnRlciB0ZXh0LXhzIHVwcGVyY2FzZSBmb250LWJvbGRcIlxuICAgICAgICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vd3d3LmZhY2Vib29rLmNvbS9zaGFyZXIvc2hhcmVyLnBocD91PWh0dHBzJTNBJTJGJTJGZGVtb3MuY3JlYXRpdmUtdGltLmNvbSUyRm5vdHVzLW5leHRqcyUyRlwiXG4gICAgICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cInRleHQtYmx1ZUdyYXktNDAwIGZhYiBmYS1mYWNlYm9vayB0ZXh0LWxnIGxlYWRpbmctbGcgXCIgLz5cbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImxnOmhpZGRlbiBpbmxpbmUtYmxvY2sgbWwtMlwiPlNoYXJlPC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvYT4gKi99XG4gICAgICAgICAgICAgIDwvbGk+XG5cbiAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgey8qIDxhXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJob3Zlcjp0ZXh0LWJsdWVHcmF5LTUwMCB0ZXh0LWJsdWVHcmF5LTcwMCBweC0zIHB5LTQgbGc6cHktMiBmbGV4IGl0ZW1zLWNlbnRlciB0ZXh0LXhzIHVwcGVyY2FzZSBmb250LWJvbGRcIlxuICAgICAgICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vdHdpdHRlci5jb20vaW50ZW50L3R3ZWV0P3VybD1odHRwcyUzQSUyRiUyRmRlbW9zLmNyZWF0aXZlLXRpbS5jb20lMkZub3R1cy1uZXh0anMlMkYmdGV4dD1TdGFydCUyMHlvdXIlMjBkZXZlbG9wbWVudCUyMHdpdGglMjBhJTIwRnJlZSUyMFRhaWx3aW5kJTIwQ1NTJTIwYW5kJTIwTmV4dEpTJTIwVUklMjBLaXQlMjBhbmQlMjBBZG1pbi4lMjBMZXQlMjBOb3R1cyUyME5leHRKUyUyMGFtYXplJTIweW91JTIwd2l0aCUyMGl0cyUyMGNvb2wlMjBmZWF0dXJlcyUyMGFuZCUyMGJ1aWxkJTIwdG9vbHMlMjBhbmQlMjBnZXQlMjB5b3VyJTIwcHJvamVjdCUyMHRvJTIwYSUyMHdob2xlJTIwbmV3JTIwbGV2ZWwuXCJcbiAgICAgICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwidGV4dC1ibHVlR3JheS00MDAgZmFiIGZhLXR3aXR0ZXIgdGV4dC1sZyBsZWFkaW5nLWxnIFwiIC8+XG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJsZzpoaWRkZW4gaW5saW5lLWJsb2NrIG1sLTJcIj5Ud2VldDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2E+ICovfVxuICAgICAgICAgICAgICA8L2xpPlxuXG4gICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgICAgICAgIHsvKiA8YVxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaG92ZXI6dGV4dC1ibHVlR3JheS01MDAgdGV4dC1ibHVlR3JheS03MDAgcHgtMyBweS00IGxnOnB5LTIgZmxleCBpdGVtcy1jZW50ZXIgdGV4dC14cyB1cHBlcmNhc2UgZm9udC1ib2xkXCJcbiAgICAgICAgICAgICAgICAgIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vY3JlYXRpdmV0aW1vZmZpY2lhbC9ub3R1cy1uZXh0anM/cmVmPW5uanMtaW5kZXgtbmF2YmFyXCJcbiAgICAgICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwidGV4dC1ibHVlR3JheS00MDAgZmFiIGZhLWdpdGh1YiB0ZXh0LWxnIGxlYWRpbmctbGcgXCIgLz5cbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImxnOmhpZGRlbiBpbmxpbmUtYmxvY2sgbWwtMlwiPlN0YXI8L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9hPiAqL31cbiAgICAgICAgICAgICAgPC9saT5cblxuICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICB7LyogPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmctYmx1ZUdyYXktNzAwIHRleHQtd2hpdGUgYWN0aXZlOmJnLWJsdWVHcmF5LTYwMCB0ZXh0LXhzIGZvbnQtYm9sZCB1cHBlcmNhc2UgcHgtNCBweS0yIHJvdW5kZWQgc2hhZG93IGhvdmVyOnNoYWRvdy1sZyBvdXRsaW5lLW5vbmUgZm9jdXM6b3V0bGluZS1ub25lIGxnOm1yLTEgbGc6bWItMCBtbC0zIG1iLTMgZWFzZS1saW5lYXIgdHJhbnNpdGlvbi1hbGwgZHVyYXRpb24tMTUwXCJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1hcnJvdy1hbHQtY2lyY2xlLWRvd25cIj48L2k+IERvd25sb2FkXG4gICAgICAgICAgICAgICAgPC9idXR0b24+ICovfVxuICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L25hdj5cbiAgICA8Lz5cbiAgKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=