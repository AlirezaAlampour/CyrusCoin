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
      await logout();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9OYXZiYXJzL0FkbWluTmF2YmFyLmpzIl0sIm5hbWVzIjpbIk5hdmJhciIsImhhbmRsZVN1Ym1pdCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInNldEVycm9yIiwic2V0TG9hZGluZyIsImxvZ291dCIsImhpc3RvcnkiLCJwdXNoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBO0FBRWUsU0FBU0EsTUFBVCxHQUFrQjtBQUUvQixpQkFBZUMsWUFBZixDQUE0QkMsQ0FBNUIsRUFBK0I7QUFDN0JBLEtBQUMsQ0FBQ0MsY0FBRjs7QUFFQSxRQUFJO0FBQ0ZDLGNBQVEsQ0FBQyxFQUFELENBQVI7QUFDQUMsZ0JBQVUsQ0FBQyxJQUFELENBQVY7QUFDQSxZQUFNQyxNQUFNLEVBQVo7QUFDQUMsYUFBTyxDQUFDQyxJQUFSLENBQWEsR0FBYjtBQUNELEtBTEQsQ0FLRSxNQUFNO0FBQ05KLGNBQVEsQ0FBQyxtQkFBRCxDQUFSO0FBQ0Q7O0FBRURDLGNBQVUsQ0FBQyxLQUFELENBQVY7QUFDRDs7QUFFRCxzQkFDRTtBQUFBLDJCQUVFO0FBQUssZUFBUyxFQUFDLG9IQUFmO0FBQUEsNkJBQ0U7QUFBSyxpQkFBUyxFQUFDLHlGQUFmO0FBQUEsZ0NBRUU7QUFDRSxtQkFBUyxFQUFDLG1FQURaO0FBRUUsY0FBSSxFQUFDLFFBRlA7QUFHRSxpQkFBTyxFQUFHSCxDQUFELElBQU9BLENBQUMsQ0FBQ0MsY0FBRixFQUhsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFGRixlQVVFO0FBQU0sbUJBQVMsRUFBQyxnRUFBaEI7QUFBQSxpQ0FDRTtBQUFLLHFCQUFTLEVBQUMsOENBQWY7QUFBQSxtQ0FJRTtBQUNGLHVCQUFTLEVBQUMsa0ZBRFI7QUFFRixrQkFBSSxFQUFDLFFBRkg7QUFHRixxQkFBTyxFQUFHRCxDQUFELElBQU9BLENBQUMsQ0FBQ0MsY0FBRixFQUhkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBVkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZGLG1CQURGO0FBMENEO0tBM0R1QkgsTSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9hZG1pbi9kYXNoYm9hcmQuMWZiNzIxZmU3MWJiM2JmYzA1YmUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VSZWYsIHVzZVN0YXRlIH0gIGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuXG5pbXBvcnQgVXNlckRyb3Bkb3duIGZyb20gXCJjb21wb25lbnRzL0Ryb3Bkb3ducy9Vc2VyRHJvcGRvd24uanNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTmF2YmFyKCkge1xuXG4gIGFzeW5jIGZ1bmN0aW9uIGhhbmRsZVN1Ym1pdChlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXG5cbiAgICB0cnkge1xuICAgICAgc2V0RXJyb3IoXCJcIilcbiAgICAgIHNldExvYWRpbmcodHJ1ZSlcbiAgICAgIGF3YWl0IGxvZ291dCgpXG4gICAgICBoaXN0b3J5LnB1c2goXCIvXCIpXG4gICAgfSBjYXRjaCB7XG4gICAgICBzZXRFcnJvcihcIkZhaWxlZCB0byBsb2cgb3V0XCIpXG4gICAgfVxuXG4gICAgc2V0TG9hZGluZyhmYWxzZSlcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIHsvKiBOYXZiYXIgKi99XG4gICAgICA8bmF2IGNsYXNzTmFtZT1cImFic29sdXRlIHRvcC0wIGxlZnQtMCB3LWZ1bGwgei0xMCBiZy10cmFuc3BhcmVudCBtZDpmbGV4LXJvdyBtZDpmbGV4LW5vd3JhcCBtZDpqdXN0aWZ5LXN0YXJ0IGZsZXggaXRlbXMtY2VudGVyIHAtNFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBteC1hdXRwIGl0ZW1zLWNlbnRlciBmbGV4IGp1c3RpZnktYmV0d2VlbiBtZDpmbGV4LW5vd3JhcCBmbGV4LXdyYXAgbWQ6cHgtMTAgcHgtNFwiPlxuICAgICAgICAgIHsvKiBCcmFuZCAqL31cbiAgICAgICAgICA8YVxuICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC13aGl0ZSB0ZXh0LXhsIHVwcGVyY2FzZSBoaWRkZW4gbGc6aW5saW5lLWJsb2NrIGZvbnQtc2VtaWJvbGRcIlxuICAgICAgICAgICAgaHJlZj1cIiNwYWJsb1wiXG4gICAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4gZS5wcmV2ZW50RGVmYXVsdCgpfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIERhc2hib2FyZFxuICAgICAgICAgIDwvYT5cbiAgICAgICAgICB7LyogRm9ybSAqL31cbiAgICAgICAgICA8Zm9ybSBjbGFzc05hbWU9XCJtZDpmbGV4IGhpZGRlbiBmbGV4LXJvdyBmbGV4LXdyYXAgaXRlbXMtY2VudGVyIGxnOm1sLWF1dG8gbXItM1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSBmbGV4IHctZnVsbCBmbGV4LXdyYXAgaXRlbXMtc3RyZXRjaFwiPlxuICAgICAgICAgICAgICB7LyogPHNwYW4gY2xhc3NOYW1lPVwiei0xMCBoLWZ1bGwgbGVhZGluZy1zbnVnIGZvbnQtbm9ybWFsIGFic29sdXRlIHRleHQtY2VudGVyIHRleHQtYmx1ZUdyYXktMzAwIGFic29sdXRlIGJnLXRyYW5zcGFyZW50IHJvdW5kZWQgdGV4dC1iYXNlIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciB3LTggcGwtMyBweS0zXCI+ICovfVxuICAgICAgICAgICAgICAgIHsvKiA8aSBjbGFzc05hbWU9XCJmYXMgZmEtc2VhcmNoXCI+PC9pPiAqL31cbiAgICAgICAgICAgICAgey8qIDwvc3Bhbj4gKi99XG4gICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlIHRleHQteGwgaG92ZXI6dGV4dC1ibHVlR3JheS01MDAgIGhpZGRlbiBsZzppbmxpbmUtYmxvY2sgZm9udC1zZW1pYm9sZFwiXG4gICAgICAgICAgICBocmVmPVwiI3BhYmxvXCJcbiAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiBlLnByZXZlbnREZWZhdWx0KCl9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgTG9nIE91dFxuICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgey8qIDxpbnB1dFxuICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlNlYXJjaCBoZXJlLi4uXCJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJib3JkZXItMCBweC0zIHB5LTMgcGxhY2Vob2xkZXItYmx1ZUdyYXktMzAwIHRleHQtYmx1ZUdyYXktNjAwIHJlbGF0aXZlIGJnLXdoaXRlIGJnLXdoaXRlIHJvdW5kZWQgdGV4dC1zbSBzaGFkb3cgb3V0bGluZS1ub25lIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpyaW5nIHctZnVsbCBwbC0xMFwiXG4gICAgICAgICAgICAgIC8+ICovfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgIHsvKiBVc2VyICovfVxuICAgICAgICAgIHsvKiA8dWwgY2xhc3NOYW1lPVwiZmxleC1jb2wgbWQ6ZmxleC1yb3cgbGlzdC1ub25lIGl0ZW1zLWNlbnRlciBoaWRkZW4gbWQ6ZmxleFwiPlxuICAgICAgICAgICAgPFVzZXJEcm9wZG93biAvPlxuICAgICAgICAgIDwvdWw+ICovfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvbmF2PlxuICAgICAgey8qIEVuZCBOYXZiYXIgKi99XG4gICAgPC8+XG4gICk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9