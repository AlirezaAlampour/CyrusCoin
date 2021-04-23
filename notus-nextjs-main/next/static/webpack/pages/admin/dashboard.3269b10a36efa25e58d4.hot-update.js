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
/* harmony import */ var components_Dropdowns_UserDropdown_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/Dropdowns/UserDropdown.js */ "./components/Dropdowns/UserDropdown.js");


var _jsxFileName = "I:\\Projects\\CyrusCoin\\notus-nextjs-main\\components\\Navbars\\AdminNavbar.js";


function Navbar() {
  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);
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
          lineNumber: 28,
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
              lineNumber: 41,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 37,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 36,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 25,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9OYXZiYXJzL0FkbWluTmF2YmFyLmpzIl0sIm5hbWVzIjpbIk5hdmJhciIsImhhbmRsZVN1Ym1pdCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInNldEVycm9yIiwic2V0TG9hZGluZyIsImxvZ2luIiwiZW1haWxSZWYiLCJjdXJyZW50IiwidmFsdWUiLCJwYXNzd29yZFJlZiIsImhpc3RvcnkiLCJwdXNoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFFZSxTQUFTQSxNQUFULEdBQWtCO0FBRS9CLGlCQUFlQyxZQUFmLENBQTRCQyxDQUE1QixFQUErQjtBQUM3QkEsS0FBQyxDQUFDQyxjQUFGOztBQUVBLFFBQUk7QUFDRkMsY0FBUSxDQUFDLEVBQUQsQ0FBUjtBQUNBQyxnQkFBVSxDQUFDLElBQUQsQ0FBVjtBQUNBLFlBQU1DLEtBQUssQ0FBQ0MsUUFBUSxDQUFDQyxPQUFULENBQWlCQyxLQUFsQixFQUF5QkMsV0FBVyxDQUFDRixPQUFaLENBQW9CQyxLQUE3QyxDQUFYO0FBQ0FFLGFBQU8sQ0FBQ0MsSUFBUixDQUFhLEdBQWI7QUFDRCxLQUxELENBS0UsTUFBTTtBQUNOUixjQUFRLENBQUMsbUJBQUQsQ0FBUjtBQUNEOztBQUVEQyxjQUFVLENBQUMsS0FBRCxDQUFWO0FBQ0Q7O0FBRUQsc0JBQ0U7QUFBQSwyQkFFRTtBQUFLLGVBQVMsRUFBQyxvSEFBZjtBQUFBLDZCQUNFO0FBQUssaUJBQVMsRUFBQyx5RkFBZjtBQUFBLGdDQUVFO0FBQ0UsbUJBQVMsRUFBQyxtRUFEWjtBQUVFLGNBQUksRUFBQyxRQUZQO0FBR0UsaUJBQU8sRUFBR0gsQ0FBRCxJQUFPQSxDQUFDLENBQUNDLGNBQUYsRUFIbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRkYsZUFVRTtBQUFNLG1CQUFTLEVBQUMsZ0VBQWhCO0FBQUEsaUNBQ0U7QUFBSyxxQkFBUyxFQUFDLDhDQUFmO0FBQUEsbUNBSUU7QUFDRix1QkFBUyxFQUFDLGtGQURSO0FBRUYsa0JBQUksRUFBQyxRQUZIO0FBR0YscUJBQU8sRUFBR0QsQ0FBRCxJQUFPQSxDQUFDLENBQUNDLGNBQUYsRUFIZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQVZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGRixtQkFERjtBQTBDRDtLQTNEdUJILE0iLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYWRtaW4vZGFzaGJvYXJkLjMyNjliMTBhMzZlZmEyNWU1OGQ0LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5cbmltcG9ydCBVc2VyRHJvcGRvd24gZnJvbSBcImNvbXBvbmVudHMvRHJvcGRvd25zL1VzZXJEcm9wZG93bi5qc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBOYXZiYXIoKSB7XG5cbiAgYXN5bmMgZnVuY3Rpb24gaGFuZGxlU3VibWl0KGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KClcblxuICAgIHRyeSB7XG4gICAgICBzZXRFcnJvcihcIlwiKVxuICAgICAgc2V0TG9hZGluZyh0cnVlKVxuICAgICAgYXdhaXQgbG9naW4oZW1haWxSZWYuY3VycmVudC52YWx1ZSwgcGFzc3dvcmRSZWYuY3VycmVudC52YWx1ZSlcbiAgICAgIGhpc3RvcnkucHVzaChcIi9cIilcbiAgICB9IGNhdGNoIHtcbiAgICAgIHNldEVycm9yKFwiRmFpbGVkIHRvIGxvZyBvdXRcIilcbiAgICB9XG5cbiAgICBzZXRMb2FkaW5nKGZhbHNlKVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgey8qIE5hdmJhciAqL31cbiAgICAgIDxuYXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgdG9wLTAgbGVmdC0wIHctZnVsbCB6LTEwIGJnLXRyYW5zcGFyZW50IG1kOmZsZXgtcm93IG1kOmZsZXgtbm93cmFwIG1kOmp1c3RpZnktc3RhcnQgZmxleCBpdGVtcy1jZW50ZXIgcC00XCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIG14LWF1dHAgaXRlbXMtY2VudGVyIGZsZXgganVzdGlmeS1iZXR3ZWVuIG1kOmZsZXgtbm93cmFwIGZsZXgtd3JhcCBtZDpweC0xMCBweC00XCI+XG4gICAgICAgICAgey8qIEJyYW5kICovfVxuICAgICAgICAgIDxhXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlIHRleHQteGwgdXBwZXJjYXNlIGhpZGRlbiBsZzppbmxpbmUtYmxvY2sgZm9udC1zZW1pYm9sZFwiXG4gICAgICAgICAgICBocmVmPVwiI3BhYmxvXCJcbiAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiBlLnByZXZlbnREZWZhdWx0KCl9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgRGFzaGJvYXJkXG4gICAgICAgICAgPC9hPlxuICAgICAgICAgIHsvKiBGb3JtICovfVxuICAgICAgICAgIDxmb3JtIGNsYXNzTmFtZT1cIm1kOmZsZXggaGlkZGVuIGZsZXgtcm93IGZsZXgtd3JhcCBpdGVtcy1jZW50ZXIgbGc6bWwtYXV0byBtci0zXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIGZsZXggdy1mdWxsIGZsZXgtd3JhcCBpdGVtcy1zdHJldGNoXCI+XG4gICAgICAgICAgICAgIHsvKiA8c3BhbiBjbGFzc05hbWU9XCJ6LTEwIGgtZnVsbCBsZWFkaW5nLXNudWcgZm9udC1ub3JtYWwgYWJzb2x1dGUgdGV4dC1jZW50ZXIgdGV4dC1ibHVlR3JheS0zMDAgYWJzb2x1dGUgYmctdHJhbnNwYXJlbnQgcm91bmRlZCB0ZXh0LWJhc2UgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHctOCBwbC0zIHB5LTNcIj4gKi99XG4gICAgICAgICAgICAgICAgey8qIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1zZWFyY2hcIj48L2k+ICovfVxuICAgICAgICAgICAgICB7LyogPC9zcGFuPiAqL31cbiAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtd2hpdGUgdGV4dC14bCBob3Zlcjp0ZXh0LWJsdWVHcmF5LTUwMCAgaGlkZGVuIGxnOmlubGluZS1ibG9jayBmb250LXNlbWlib2xkXCJcbiAgICAgICAgICAgIGhyZWY9XCIjcGFibG9cIlxuICAgICAgICAgICAgb25DbGljaz17KGUpID0+IGUucHJldmVudERlZmF1bHQoKX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICBMb2cgT3V0XG4gICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICB7LyogPGlucHV0XG4gICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiU2VhcmNoIGhlcmUuLi5cIlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJvcmRlci0wIHB4LTMgcHktMyBwbGFjZWhvbGRlci1ibHVlR3JheS0zMDAgdGV4dC1ibHVlR3JheS02MDAgcmVsYXRpdmUgYmctd2hpdGUgYmctd2hpdGUgcm91bmRlZCB0ZXh0LXNtIHNoYWRvdyBvdXRsaW5lLW5vbmUgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnJpbmcgdy1mdWxsIHBsLTEwXCJcbiAgICAgICAgICAgICAgLz4gKi99XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgey8qIFVzZXIgKi99XG4gICAgICAgICAgey8qIDx1bCBjbGFzc05hbWU9XCJmbGV4LWNvbCBtZDpmbGV4LXJvdyBsaXN0LW5vbmUgaXRlbXMtY2VudGVyIGhpZGRlbiBtZDpmbGV4XCI+XG4gICAgICAgICAgICA8VXNlckRyb3Bkb3duIC8+XG4gICAgICAgICAgPC91bD4gKi99XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9uYXY+XG4gICAgICB7LyogRW5kIE5hdmJhciAqL31cbiAgICA8Lz5cbiAgKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=