webpackHotUpdate_N_E("pages/auth/register",{

/***/ "./contexts/AuthContext.js":
/*!*********************************!*\
  !*** ./contexts/AuthContext.js ***!
  \*********************************/
/*! exports provided: useAuth, AuthProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useAuth", function() { return useAuth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthProvider", function() { return AuthProvider; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../firebase */ "./firebase.js");


var _jsxFileName = "I:\\Projects\\CyrusCoin\\notus-nextjs-main\\contexts\\AuthContext.js",
    _s = $RefreshSig$(),
    _s2 = $RefreshSig$();



const AuthContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createContext();
function useAuth() {
  _s();

  return Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(AuthContext);
}

_s(useAuth, "gDsCjeeItUuvgOWf1v4qoK9RF6k=");

function AuthProvider({
  children
}) {
  _s2();

  const {
    0: currentUser,
    1: setCurrentUser
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])();
  const {
    0: loading,
    1: setLoading
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(true);

  function signup(email, password) {
    // return auth.createUserWithEmailAndPassword(email, password).then(( )=> this.props.navigation.navigate())
    return _firebase__WEBPACK_IMPORTED_MODULE_2__["auth"].createUserWithEmailAndPassword(email, password).then(u => {
      console.log("succesfully registered");
    });
  }

  function login(email, password) {
    return _firebase__WEBPACK_IMPORTED_MODULE_2__["auth"].signInWithEmailAndPassword(email, password).then(u => {
      console.log("succesfully signed in");
    });
  }

  function logout() {
    return _firebase__WEBPACK_IMPORTED_MODULE_2__["auth"].signOut();
  }

  function resetPassword(email) {
    return _firebase__WEBPACK_IMPORTED_MODULE_2__["auth"].sendPasswordResetEmail(email);
  }

  function updateEmail(email) {
    return currentUser.updateEmail(email);
  }

  function updatePassword(password) {
    return currentUser.updatePassword(password);
  }

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    const unsubscribe = _firebase__WEBPACK_IMPORTED_MODULE_2__["auth"].onAuthStateChanged(user => {
      setCurrentUser(user);
      setLoading(false);
    });
    return unsubscribe;
  }, []);
  const value = {
    currentUser,
    login,
    signup,
    logout,
    resetPassword,
    updateEmail,
    updatePassword
  };
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(AuthContext.Provider, {
    value: value,
    children: !loading && children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 64,
    columnNumber: 5
  }, this);
}

_s2(AuthProvider, "1cdeWWSmbSz3cOWqWLAt+Ta4DMY=");

_c = AuthProvider;

var _c;

$RefreshReg$(_c, "AuthProvider");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29udGV4dHMvQXV0aENvbnRleHQuanMiXSwibmFtZXMiOlsiQXV0aENvbnRleHQiLCJSZWFjdCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VBdXRoIiwidXNlQ29udGV4dCIsIkF1dGhQcm92aWRlciIsImNoaWxkcmVuIiwiY3VycmVudFVzZXIiLCJzZXRDdXJyZW50VXNlciIsInVzZVN0YXRlIiwibG9hZGluZyIsInNldExvYWRpbmciLCJzaWdudXAiLCJlbWFpbCIsInBhc3N3b3JkIiwiYXV0aCIsImNyZWF0ZVVzZXJXaXRoRW1haWxBbmRQYXNzd29yZCIsInRoZW4iLCJ1IiwiY29uc29sZSIsImxvZyIsImxvZ2luIiwic2lnbkluV2l0aEVtYWlsQW5kUGFzc3dvcmQiLCJsb2dvdXQiLCJzaWduT3V0IiwicmVzZXRQYXNzd29yZCIsInNlbmRQYXNzd29yZFJlc2V0RW1haWwiLCJ1cGRhdGVFbWFpbCIsInVwZGF0ZVBhc3N3b3JkIiwidXNlRWZmZWN0IiwidW5zdWJzY3JpYmUiLCJvbkF1dGhTdGF0ZUNoYW5nZWQiLCJ1c2VyIiwidmFsdWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQSxNQUFNQSxXQUFXLGdCQUFHQyw0Q0FBSyxDQUFDQyxhQUFOLEVBQXBCO0FBRU8sU0FBU0MsT0FBVCxHQUFtQjtBQUFBOztBQUN4QixTQUFPQyx3REFBVSxDQUFDSixXQUFELENBQWpCO0FBQ0Q7O0dBRmVHLE87O0FBSVQsU0FBU0UsWUFBVCxDQUFzQjtBQUFFQztBQUFGLENBQXRCLEVBQW9DO0FBQUE7O0FBQ3pDLFFBQU07QUFBQSxPQUFDQyxXQUFEO0FBQUEsT0FBY0M7QUFBZCxNQUFnQ0Msc0RBQVEsRUFBOUM7QUFDQSxRQUFNO0FBQUEsT0FBQ0MsT0FBRDtBQUFBLE9BQVVDO0FBQVYsTUFBd0JGLHNEQUFRLENBQUMsSUFBRCxDQUF0Qzs7QUFFQSxXQUFTRyxNQUFULENBQWdCQyxLQUFoQixFQUF1QkMsUUFBdkIsRUFBaUM7QUFDL0I7QUFDQSxXQUFPQyw4Q0FBSSxDQUFDQyw4QkFBTCxDQUFvQ0gsS0FBcEMsRUFBMkNDLFFBQTNDLEVBQXFERyxJQUFyRCxDQUEyREMsQ0FBRCxJQUFNO0FBQ3JFQyxhQUFPLENBQUNDLEdBQVIsQ0FBWSx3QkFBWjtBQUNELEtBRk0sQ0FBUDtBQUlEOztBQUVELFdBQVNDLEtBQVQsQ0FBZVIsS0FBZixFQUFzQkMsUUFBdEIsRUFBZ0M7QUFDOUIsV0FBT0MsOENBQUksQ0FBQ08sMEJBQUwsQ0FBZ0NULEtBQWhDLEVBQXVDQyxRQUF2QyxFQUFpREcsSUFBakQsQ0FBdURDLENBQUQsSUFBTTtBQUNqRUMsYUFBTyxDQUFDQyxHQUFSLENBQVksdUJBQVo7QUFDRCxLQUZNLENBQVA7QUFHRDs7QUFFRCxXQUFTRyxNQUFULEdBQWtCO0FBQ2hCLFdBQU9SLDhDQUFJLENBQUNTLE9BQUwsRUFBUDtBQUNEOztBQUVELFdBQVNDLGFBQVQsQ0FBdUJaLEtBQXZCLEVBQThCO0FBQzVCLFdBQU9FLDhDQUFJLENBQUNXLHNCQUFMLENBQTRCYixLQUE1QixDQUFQO0FBQ0Q7O0FBRUQsV0FBU2MsV0FBVCxDQUFxQmQsS0FBckIsRUFBNEI7QUFDMUIsV0FBT04sV0FBVyxDQUFDb0IsV0FBWixDQUF3QmQsS0FBeEIsQ0FBUDtBQUNEOztBQUVELFdBQVNlLGNBQVQsQ0FBd0JkLFFBQXhCLEVBQWtDO0FBQ2hDLFdBQU9QLFdBQVcsQ0FBQ3FCLGNBQVosQ0FBMkJkLFFBQTNCLENBQVA7QUFDRDs7QUFFRGUseURBQVMsQ0FBQyxNQUFNO0FBQ2QsVUFBTUMsV0FBVyxHQUFHZiw4Q0FBSSxDQUFDZ0Isa0JBQUwsQ0FBd0JDLElBQUksSUFBSTtBQUNsRHhCLG9CQUFjLENBQUN3QixJQUFELENBQWQ7QUFDQXJCLGdCQUFVLENBQUMsS0FBRCxDQUFWO0FBQ0QsS0FIbUIsQ0FBcEI7QUFLQSxXQUFPbUIsV0FBUDtBQUNELEdBUFEsRUFPTixFQVBNLENBQVQ7QUFTQSxRQUFNRyxLQUFLLEdBQUc7QUFDWjFCLGVBRFk7QUFFWmMsU0FGWTtBQUdaVCxVQUhZO0FBSVpXLFVBSlk7QUFLWkUsaUJBTFk7QUFNWkUsZUFOWTtBQU9aQztBQVBZLEdBQWQ7QUFVQSxzQkFDRSxxRUFBQyxXQUFELENBQWEsUUFBYjtBQUFzQixTQUFLLEVBQUVLLEtBQTdCO0FBQUEsY0FDRyxDQUFDdkIsT0FBRCxJQUFZSjtBQURmO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQUtEOztJQTFEZUQsWTs7S0FBQUEsWSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9hdXRoL3JlZ2lzdGVyLjA4NGU2NDA3YjY3MmZkMGE0OTNjLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCwgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiXHJcbmltcG9ydCB7IGF1dGggfSBmcm9tIFwiLi4vZmlyZWJhc2VcIlxyXG5cclxuY29uc3QgQXV0aENvbnRleHQgPSBSZWFjdC5jcmVhdGVDb250ZXh0KClcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB1c2VBdXRoKCkge1xyXG4gIHJldHVybiB1c2VDb250ZXh0KEF1dGhDb250ZXh0KVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gQXV0aFByb3ZpZGVyKHsgY2hpbGRyZW4gfSkge1xyXG4gIGNvbnN0IFtjdXJyZW50VXNlciwgc2V0Q3VycmVudFVzZXJdID0gdXNlU3RhdGUoKVxyXG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKHRydWUpXHJcblxyXG4gIGZ1bmN0aW9uIHNpZ251cChlbWFpbCwgcGFzc3dvcmQpIHtcclxuICAgIC8vIHJldHVybiBhdXRoLmNyZWF0ZVVzZXJXaXRoRW1haWxBbmRQYXNzd29yZChlbWFpbCwgcGFzc3dvcmQpLnRoZW4oKCApPT4gdGhpcy5wcm9wcy5uYXZpZ2F0aW9uLm5hdmlnYXRlKCkpXHJcbiAgICByZXR1cm4gYXV0aC5jcmVhdGVVc2VyV2l0aEVtYWlsQW5kUGFzc3dvcmQoZW1haWwsIHBhc3N3b3JkKS50aGVuKCh1KSA9PntcclxuICAgICAgY29uc29sZS5sb2coXCJzdWNjZXNmdWxseSByZWdpc3RlcmVkXCIpXHJcbiAgICB9KVxyXG5cclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGxvZ2luKGVtYWlsLCBwYXNzd29yZCkge1xyXG4gICAgcmV0dXJuIGF1dGguc2lnbkluV2l0aEVtYWlsQW5kUGFzc3dvcmQoZW1haWwsIHBhc3N3b3JkKS50aGVuKCh1KSA9PntcclxuICAgICAgY29uc29sZS5sb2coXCJzdWNjZXNmdWxseSBzaWduZWQgaW5cIilcclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBsb2dvdXQoKSB7XHJcbiAgICByZXR1cm4gYXV0aC5zaWduT3V0KClcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIHJlc2V0UGFzc3dvcmQoZW1haWwpIHtcclxuICAgIHJldHVybiBhdXRoLnNlbmRQYXNzd29yZFJlc2V0RW1haWwoZW1haWwpXHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiB1cGRhdGVFbWFpbChlbWFpbCkge1xyXG4gICAgcmV0dXJuIGN1cnJlbnRVc2VyLnVwZGF0ZUVtYWlsKGVtYWlsKVxyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gdXBkYXRlUGFzc3dvcmQocGFzc3dvcmQpIHtcclxuICAgIHJldHVybiBjdXJyZW50VXNlci51cGRhdGVQYXNzd29yZChwYXNzd29yZClcclxuICB9XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCB1bnN1YnNjcmliZSA9IGF1dGgub25BdXRoU3RhdGVDaGFuZ2VkKHVzZXIgPT4ge1xyXG4gICAgICBzZXRDdXJyZW50VXNlcih1c2VyKVxyXG4gICAgICBzZXRMb2FkaW5nKGZhbHNlKVxyXG4gICAgfSlcclxuXHJcbiAgICByZXR1cm4gdW5zdWJzY3JpYmVcclxuICB9LCBbXSlcclxuXHJcbiAgY29uc3QgdmFsdWUgPSB7XHJcbiAgICBjdXJyZW50VXNlcixcclxuICAgIGxvZ2luLFxyXG4gICAgc2lnbnVwLFxyXG4gICAgbG9nb3V0LFxyXG4gICAgcmVzZXRQYXNzd29yZCxcclxuICAgIHVwZGF0ZUVtYWlsLFxyXG4gICAgdXBkYXRlUGFzc3dvcmRcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8QXV0aENvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3ZhbHVlfT5cclxuICAgICAgeyFsb2FkaW5nICYmIGNoaWxkcmVufVxyXG4gICAgPC9BdXRoQ29udGV4dC5Qcm92aWRlcj5cclxuICApXHJcbn0iXSwic291cmNlUm9vdCI6IiJ9