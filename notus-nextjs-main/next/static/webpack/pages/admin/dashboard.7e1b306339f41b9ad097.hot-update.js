webpackHotUpdate_N_E("pages/admin/dashboard",{

/***/ "./components/Navbars/AdminNavbar.js":
/*!*******************************************!*\
  !*** ./components/Navbars/AdminNavbar.js ***!
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
/* harmony import */ var components_Dropdowns_UserDropdown_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/Dropdowns/UserDropdown.js */ "./components/Dropdowns/UserDropdown.js");


var _jsxFileName = "I:\\Projects\\CyrusCoin\\notus-nextjs-main\\components\\Navbars\\AdminNavbar.js";



function Navbar() {
  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      await logout(emailRef.current.value, passwordRef.current.value);
      history.push("/");
    } catch {
      setError("Failed to log out");
    }

    setLoading(false);
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("nav", {
      className: "absolute top-0 left-0 w-full z-10 bg-transparent md:flex-row md:flex-nowrap md:justify-start flex items-center p-4",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "w-full mx-autp items-center flex justify-between md:flex-nowrap flex-wrap md:px-10 px-4",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          className: "text-white text-xl uppercase hidden lg:inline-block font-semibold",
          href: "#pablo",
          onClick: e => e.preventDefault(),
          children: "Dashboard"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 29,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("form", {
          className: "md:flex hidden flex-row flex-wrap items-center lg:ml-auto mr-3",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "relative flex w-full flex-wrap items-stretch",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
              className: "text-white text-xl hover:text-blueGray-500  hidden lg:inline-block font-semibold",
              href: "#pablo",
              onClick: e => e.preventDefault(),
              children: "Log Out"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 42,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 38,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 37,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 7
    }, this)
  }, void 0, false);
}
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9OYXZiYXJzL0FkbWluTmF2YmFyLmpzIl0sIm5hbWVzIjpbIk5hdmJhciIsImhhbmRsZVN1Ym1pdCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInNldEVycm9yIiwic2V0TG9hZGluZyIsImxvZ291dCIsImVtYWlsUmVmIiwiY3VycmVudCIsInZhbHVlIiwicGFzc3dvcmRSZWYiLCJoaXN0b3J5IiwicHVzaCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQUVlLFNBQVNBLE1BQVQsR0FBa0I7QUFFL0IsaUJBQWVDLFlBQWYsQ0FBNEJDLENBQTVCLEVBQStCO0FBQzdCQSxLQUFDLENBQUNDLGNBQUY7O0FBRUEsUUFBSTtBQUNGQyxjQUFRLENBQUMsRUFBRCxDQUFSO0FBQ0FDLGdCQUFVLENBQUMsSUFBRCxDQUFWO0FBQ0EsWUFBTUMsTUFBTSxDQUFDQyxRQUFRLENBQUNDLE9BQVQsQ0FBaUJDLEtBQWxCLEVBQXlCQyxXQUFXLENBQUNGLE9BQVosQ0FBb0JDLEtBQTdDLENBQVo7QUFDQUUsYUFBTyxDQUFDQyxJQUFSLENBQWEsR0FBYjtBQUNELEtBTEQsQ0FLRSxNQUFNO0FBQ05SLGNBQVEsQ0FBQyxtQkFBRCxDQUFSO0FBQ0Q7O0FBRURDLGNBQVUsQ0FBQyxLQUFELENBQVY7QUFDRDs7QUFFRCxzQkFDRTtBQUFBLDJCQUVFO0FBQUssZUFBUyxFQUFDLG9IQUFmO0FBQUEsNkJBQ0U7QUFBSyxpQkFBUyxFQUFDLHlGQUFmO0FBQUEsZ0NBRUU7QUFDRSxtQkFBUyxFQUFDLG1FQURaO0FBRUUsY0FBSSxFQUFDLFFBRlA7QUFHRSxpQkFBTyxFQUFHSCxDQUFELElBQU9BLENBQUMsQ0FBQ0MsY0FBRixFQUhsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFGRixlQVVFO0FBQU0sbUJBQVMsRUFBQyxnRUFBaEI7QUFBQSxpQ0FDRTtBQUFLLHFCQUFTLEVBQUMsOENBQWY7QUFBQSxtQ0FJRTtBQUNGLHVCQUFTLEVBQUMsa0ZBRFI7QUFFRixrQkFBSSxFQUFDLFFBRkg7QUFHRixxQkFBTyxFQUFHRCxDQUFELElBQU9BLENBQUMsQ0FBQ0MsY0FBRixFQUhkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBVkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZGLG1CQURGO0FBMENEO0tBM0R1QkgsTSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9hZG1pbi9kYXNoYm9hcmQuN2UxYjMwNjMzOWY0MWI5YWQwOTcuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VSZWYsIHVzZVN0YXRlIH0gIGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuXG5pbXBvcnQgVXNlckRyb3Bkb3duIGZyb20gXCJjb21wb25lbnRzL0Ryb3Bkb3ducy9Vc2VyRHJvcGRvd24uanNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTmF2YmFyKCkge1xuXG4gIGFzeW5jIGZ1bmN0aW9uIGhhbmRsZVN1Ym1pdChlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXG5cbiAgICB0cnkge1xuICAgICAgc2V0RXJyb3IoXCJcIilcbiAgICAgIHNldExvYWRpbmcodHJ1ZSlcbiAgICAgIGF3YWl0IGxvZ291dChlbWFpbFJlZi5jdXJyZW50LnZhbHVlLCBwYXNzd29yZFJlZi5jdXJyZW50LnZhbHVlKVxuICAgICAgaGlzdG9yeS5wdXNoKFwiL1wiKVxuICAgIH0gY2F0Y2gge1xuICAgICAgc2V0RXJyb3IoXCJGYWlsZWQgdG8gbG9nIG91dFwiKVxuICAgIH1cblxuICAgIHNldExvYWRpbmcoZmFsc2UpXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICB7LyogTmF2YmFyICovfVxuICAgICAgPG5hdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSB0b3AtMCBsZWZ0LTAgdy1mdWxsIHotMTAgYmctdHJhbnNwYXJlbnQgbWQ6ZmxleC1yb3cgbWQ6ZmxleC1ub3dyYXAgbWQ6anVzdGlmeS1zdGFydCBmbGV4IGl0ZW1zLWNlbnRlciBwLTRcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgbXgtYXV0cCBpdGVtcy1jZW50ZXIgZmxleCBqdXN0aWZ5LWJldHdlZW4gbWQ6ZmxleC1ub3dyYXAgZmxleC13cmFwIG1kOnB4LTEwIHB4LTRcIj5cbiAgICAgICAgICB7LyogQnJhbmQgKi99XG4gICAgICAgICAgPGFcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtd2hpdGUgdGV4dC14bCB1cHBlcmNhc2UgaGlkZGVuIGxnOmlubGluZS1ibG9jayBmb250LXNlbWlib2xkXCJcbiAgICAgICAgICAgIGhyZWY9XCIjcGFibG9cIlxuICAgICAgICAgICAgb25DbGljaz17KGUpID0+IGUucHJldmVudERlZmF1bHQoKX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICBEYXNoYm9hcmRcbiAgICAgICAgICA8L2E+XG4gICAgICAgICAgey8qIEZvcm0gKi99XG4gICAgICAgICAgPGZvcm0gY2xhc3NOYW1lPVwibWQ6ZmxleCBoaWRkZW4gZmxleC1yb3cgZmxleC13cmFwIGl0ZW1zLWNlbnRlciBsZzptbC1hdXRvIG1yLTNcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgZmxleCB3LWZ1bGwgZmxleC13cmFwIGl0ZW1zLXN0cmV0Y2hcIj5cbiAgICAgICAgICAgICAgey8qIDxzcGFuIGNsYXNzTmFtZT1cInotMTAgaC1mdWxsIGxlYWRpbmctc251ZyBmb250LW5vcm1hbCBhYnNvbHV0ZSB0ZXh0LWNlbnRlciB0ZXh0LWJsdWVHcmF5LTMwMCBhYnNvbHV0ZSBiZy10cmFuc3BhcmVudCByb3VuZGVkIHRleHQtYmFzZSBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgdy04IHBsLTMgcHktM1wiPiAqL31cbiAgICAgICAgICAgICAgICB7LyogPGkgY2xhc3NOYW1lPVwiZmFzIGZhLXNlYXJjaFwiPjwvaT4gKi99XG4gICAgICAgICAgICAgIHsvKiA8L3NwYW4+ICovfVxuICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC13aGl0ZSB0ZXh0LXhsIGhvdmVyOnRleHQtYmx1ZUdyYXktNTAwICBoaWRkZW4gbGc6aW5saW5lLWJsb2NrIGZvbnQtc2VtaWJvbGRcIlxuICAgICAgICAgICAgaHJlZj1cIiNwYWJsb1wiXG4gICAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4gZS5wcmV2ZW50RGVmYXVsdCgpfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIExvZyBPdXRcbiAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgIHsvKiA8aW5wdXRcbiAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJTZWFyY2ggaGVyZS4uLlwiXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYm9yZGVyLTAgcHgtMyBweS0zIHBsYWNlaG9sZGVyLWJsdWVHcmF5LTMwMCB0ZXh0LWJsdWVHcmF5LTYwMCByZWxhdGl2ZSBiZy13aGl0ZSBiZy13aGl0ZSByb3VuZGVkIHRleHQtc20gc2hhZG93IG91dGxpbmUtbm9uZSBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6cmluZyB3LWZ1bGwgcGwtMTBcIlxuICAgICAgICAgICAgICAvPiAqL31cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICB7LyogVXNlciAqL31cbiAgICAgICAgICB7LyogPHVsIGNsYXNzTmFtZT1cImZsZXgtY29sIG1kOmZsZXgtcm93IGxpc3Qtbm9uZSBpdGVtcy1jZW50ZXIgaGlkZGVuIG1kOmZsZXhcIj5cbiAgICAgICAgICAgIDxVc2VyRHJvcGRvd24gLz5cbiAgICAgICAgICA8L3VsPiAqL31cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L25hdj5cbiAgICAgIHsvKiBFbmQgTmF2YmFyICovfVxuICAgIDwvPlxuICApO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==