function dm(o, s) {
  for (var a = 0; a < s.length; a++) {
    const c = s[a];
    if (typeof c != "string" && !Array.isArray(c)) {
      for (const d in c)
        if (d !== "default" && !(d in o)) {
          const f = Object.getOwnPropertyDescriptor(c, d);
          f && Object.defineProperty(o, d, f.get ? f : {
            enumerable: !0,
            get: () => c[d]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(o, Symbol.toStringTag, { value: "Module" }));
}
var Tl = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function vd(o) {
  return o && o.__esModule && Object.prototype.hasOwnProperty.call(o, "default") ? o.default : o;
}
var hd = { exports: {} }, wo = {}, gd = { exports: {} }, we = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Hc;
function fm() {
  if (Hc)
    return we;
  Hc = 1;
  var o = Symbol.for("react.element"), s = Symbol.for("react.portal"), a = Symbol.for("react.fragment"), c = Symbol.for("react.strict_mode"), d = Symbol.for("react.profiler"), f = Symbol.for("react.provider"), h = Symbol.for("react.context"), v = Symbol.for("react.forward_ref"), C = Symbol.for("react.suspense"), y = Symbol.for("react.memo"), _ = Symbol.for("react.lazy"), b = Symbol.iterator;
  function R(m) {
    return m === null || typeof m != "object" ? null : (m = b && m[b] || m["@@iterator"], typeof m == "function" ? m : null);
  }
  var T = { isMounted: function() {
    return !1;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, G = Object.assign, $ = {};
  function L(m, P, H) {
    this.props = m, this.context = P, this.refs = $, this.updater = H || T;
  }
  L.prototype.isReactComponent = {}, L.prototype.setState = function(m, P) {
    if (typeof m != "object" && typeof m != "function" && m != null)
      throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, m, P, "setState");
  }, L.prototype.forceUpdate = function(m) {
    this.updater.enqueueForceUpdate(this, m, "forceUpdate");
  };
  function I() {
  }
  I.prototype = L.prototype;
  function le(m, P, H) {
    this.props = m, this.context = P, this.refs = $, this.updater = H || T;
  }
  var B = le.prototype = new I();
  B.constructor = le, G(B, L.prototype), B.isPureReactComponent = !0;
  var j = Array.isArray, W = Object.prototype.hasOwnProperty, ne = { current: null }, ie = { key: !0, ref: !0, __self: !0, __source: !0 };
  function te(m, P, H) {
    var ce, K = {}, Se = null, U = null;
    if (P != null)
      for (ce in P.ref !== void 0 && (U = P.ref), P.key !== void 0 && (Se = "" + P.key), P)
        W.call(P, ce) && !ie.hasOwnProperty(ce) && (K[ce] = P[ce]);
    var xe = arguments.length - 2;
    if (xe === 1)
      K.children = H;
    else if (1 < xe) {
      for (var me = Array(xe), Ve = 0; Ve < xe; Ve++)
        me[Ve] = arguments[Ve + 2];
      K.children = me;
    }
    if (m && m.defaultProps)
      for (ce in xe = m.defaultProps, xe)
        K[ce] === void 0 && (K[ce] = xe[ce]);
    return { $$typeof: o, type: m, key: Se, ref: U, props: K, _owner: ne.current };
  }
  function he(m, P) {
    return { $$typeof: o, type: m.type, key: P, ref: m.ref, props: m.props, _owner: m._owner };
  }
  function Ne(m) {
    return typeof m == "object" && m !== null && m.$$typeof === o;
  }
  function Le(m) {
    var P = { "=": "=0", ":": "=2" };
    return "$" + m.replace(/[=:]/g, function(H) {
      return P[H];
    });
  }
  var ue = /\/+/g;
  function ye(m, P) {
    return typeof m == "object" && m !== null && m.key != null ? Le("" + m.key) : P.toString(36);
  }
  function fe(m, P, H, ce, K) {
    var Se = typeof m;
    (Se === "undefined" || Se === "boolean") && (m = null);
    var U = !1;
    if (m === null)
      U = !0;
    else
      switch (Se) {
        case "string":
        case "number":
          U = !0;
          break;
        case "object":
          switch (m.$$typeof) {
            case o:
            case s:
              U = !0;
          }
      }
    if (U)
      return U = m, K = K(U), m = ce === "" ? "." + ye(U, 0) : ce, j(K) ? (H = "", m != null && (H = m.replace(ue, "$&/") + "/"), fe(K, P, H, "", function(Ve) {
        return Ve;
      })) : K != null && (Ne(K) && (K = he(K, H + (!K.key || U && U.key === K.key ? "" : ("" + K.key).replace(ue, "$&/") + "/") + m)), P.push(K)), 1;
    if (U = 0, ce = ce === "" ? "." : ce + ":", j(m))
      for (var xe = 0; xe < m.length; xe++) {
        Se = m[xe];
        var me = ce + ye(Se, xe);
        U += fe(Se, P, H, me, K);
      }
    else if (me = R(m), typeof me == "function")
      for (m = me.call(m), xe = 0; !(Se = m.next()).done; )
        Se = Se.value, me = ce + ye(Se, xe++), U += fe(Se, P, H, me, K);
    else if (Se === "object")
      throw P = String(m), Error("Objects are not valid as a React child (found: " + (P === "[object Object]" ? "object with keys {" + Object.keys(m).join(", ") + "}" : P) + "). If you meant to render a collection of children, use an array instead.");
    return U;
  }
  function Be(m, P, H) {
    if (m == null)
      return m;
    var ce = [], K = 0;
    return fe(m, ce, "", "", function(Se) {
      return P.call(H, Se, K++);
    }), ce;
  }
  function ge(m) {
    if (m._status === -1) {
      var P = m._result;
      P = P(), P.then(function(H) {
        (m._status === 0 || m._status === -1) && (m._status = 1, m._result = H);
      }, function(H) {
        (m._status === 0 || m._status === -1) && (m._status = 2, m._result = H);
      }), m._status === -1 && (m._status = 0, m._result = P);
    }
    if (m._status === 1)
      return m._result.default;
    throw m._result;
  }
  var pe = { current: null }, A = { transition: null }, F = { ReactCurrentDispatcher: pe, ReactCurrentBatchConfig: A, ReactCurrentOwner: ne };
  return we.Children = { map: Be, forEach: function(m, P, H) {
    Be(m, function() {
      P.apply(this, arguments);
    }, H);
  }, count: function(m) {
    var P = 0;
    return Be(m, function() {
      P++;
    }), P;
  }, toArray: function(m) {
    return Be(m, function(P) {
      return P;
    }) || [];
  }, only: function(m) {
    if (!Ne(m))
      throw Error("React.Children.only expected to receive a single React element child.");
    return m;
  } }, we.Component = L, we.Fragment = a, we.Profiler = d, we.PureComponent = le, we.StrictMode = c, we.Suspense = C, we.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = F, we.cloneElement = function(m, P, H) {
    if (m == null)
      throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + m + ".");
    var ce = G({}, m.props), K = m.key, Se = m.ref, U = m._owner;
    if (P != null) {
      if (P.ref !== void 0 && (Se = P.ref, U = ne.current), P.key !== void 0 && (K = "" + P.key), m.type && m.type.defaultProps)
        var xe = m.type.defaultProps;
      for (me in P)
        W.call(P, me) && !ie.hasOwnProperty(me) && (ce[me] = P[me] === void 0 && xe !== void 0 ? xe[me] : P[me]);
    }
    var me = arguments.length - 2;
    if (me === 1)
      ce.children = H;
    else if (1 < me) {
      xe = Array(me);
      for (var Ve = 0; Ve < me; Ve++)
        xe[Ve] = arguments[Ve + 2];
      ce.children = xe;
    }
    return { $$typeof: o, type: m.type, key: K, ref: Se, props: ce, _owner: U };
  }, we.createContext = function(m) {
    return m = { $$typeof: h, _currentValue: m, _currentValue2: m, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, m.Provider = { $$typeof: f, _context: m }, m.Consumer = m;
  }, we.createElement = te, we.createFactory = function(m) {
    var P = te.bind(null, m);
    return P.type = m, P;
  }, we.createRef = function() {
    return { current: null };
  }, we.forwardRef = function(m) {
    return { $$typeof: v, render: m };
  }, we.isValidElement = Ne, we.lazy = function(m) {
    return { $$typeof: _, _payload: { _status: -1, _result: m }, _init: ge };
  }, we.memo = function(m, P) {
    return { $$typeof: y, type: m, compare: P === void 0 ? null : P };
  }, we.startTransition = function(m) {
    var P = A.transition;
    A.transition = {};
    try {
      m();
    } finally {
      A.transition = P;
    }
  }, we.unstable_act = function() {
    throw Error("act(...) is not supported in production builds of React.");
  }, we.useCallback = function(m, P) {
    return pe.current.useCallback(m, P);
  }, we.useContext = function(m) {
    return pe.current.useContext(m);
  }, we.useDebugValue = function() {
  }, we.useDeferredValue = function(m) {
    return pe.current.useDeferredValue(m);
  }, we.useEffect = function(m, P) {
    return pe.current.useEffect(m, P);
  }, we.useId = function() {
    return pe.current.useId();
  }, we.useImperativeHandle = function(m, P, H) {
    return pe.current.useImperativeHandle(m, P, H);
  }, we.useInsertionEffect = function(m, P) {
    return pe.current.useInsertionEffect(m, P);
  }, we.useLayoutEffect = function(m, P) {
    return pe.current.useLayoutEffect(m, P);
  }, we.useMemo = function(m, P) {
    return pe.current.useMemo(m, P);
  }, we.useReducer = function(m, P, H) {
    return pe.current.useReducer(m, P, H);
  }, we.useRef = function(m) {
    return pe.current.useRef(m);
  }, we.useState = function(m) {
    return pe.current.useState(m);
  }, we.useSyncExternalStore = function(m, P, H) {
    return pe.current.useSyncExternalStore(m, P, H);
  }, we.useTransition = function() {
    return pe.current.useTransition();
  }, we.version = "18.2.0", we;
}
gd.exports = fm();
var x = gd.exports;
const N = /* @__PURE__ */ vd(x), pm = /* @__PURE__ */ dm({
  __proto__: null,
  default: N
}, [x]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Vc;
function mm() {
  if (Vc)
    return wo;
  Vc = 1;
  var o = x, s = Symbol.for("react.element"), a = Symbol.for("react.fragment"), c = Object.prototype.hasOwnProperty, d = o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, f = { key: !0, ref: !0, __self: !0, __source: !0 };
  function h(v, C, y) {
    var _, b = {}, R = null, T = null;
    y !== void 0 && (R = "" + y), C.key !== void 0 && (R = "" + C.key), C.ref !== void 0 && (T = C.ref);
    for (_ in C)
      c.call(C, _) && !f.hasOwnProperty(_) && (b[_] = C[_]);
    if (v && v.defaultProps)
      for (_ in C = v.defaultProps, C)
        b[_] === void 0 && (b[_] = C[_]);
    return { $$typeof: s, type: v, key: R, ref: T, props: b, _owner: d.current };
  }
  return wo.Fragment = a, wo.jsx = h, wo.jsxs = h, wo;
}
hd.exports = mm();
var Ee = hd.exports;
const vm = /* @__PURE__ */ x.createContext(void 0), hm = { setTheme: (o) => {
}, themes: [] }, gm = () => {
  var o;
  return (o = x.useContext(vm)) !== null && o !== void 0 ? o : hm;
};
var yd = { exports: {} }, ht = {}, Ra = { exports: {} }, Ta = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Qc;
function ym() {
  return Qc || (Qc = 1, function(o) {
    function s(A, F) {
      var m = A.length;
      A.push(F);
      e:
        for (; 0 < m; ) {
          var P = m - 1 >>> 1, H = A[P];
          if (0 < d(H, F))
            A[P] = F, A[m] = H, m = P;
          else
            break e;
        }
    }
    function a(A) {
      return A.length === 0 ? null : A[0];
    }
    function c(A) {
      if (A.length === 0)
        return null;
      var F = A[0], m = A.pop();
      if (m !== F) {
        A[0] = m;
        e:
          for (var P = 0, H = A.length, ce = H >>> 1; P < ce; ) {
            var K = 2 * (P + 1) - 1, Se = A[K], U = K + 1, xe = A[U];
            if (0 > d(Se, m))
              U < H && 0 > d(xe, Se) ? (A[P] = xe, A[U] = m, P = U) : (A[P] = Se, A[K] = m, P = K);
            else if (U < H && 0 > d(xe, m))
              A[P] = xe, A[U] = m, P = U;
            else
              break e;
          }
      }
      return F;
    }
    function d(A, F) {
      var m = A.sortIndex - F.sortIndex;
      return m !== 0 ? m : A.id - F.id;
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
      var f = performance;
      o.unstable_now = function() {
        return f.now();
      };
    } else {
      var h = Date, v = h.now();
      o.unstable_now = function() {
        return h.now() - v;
      };
    }
    var C = [], y = [], _ = 1, b = null, R = 3, T = !1, G = !1, $ = !1, L = typeof setTimeout == "function" ? setTimeout : null, I = typeof clearTimeout == "function" ? clearTimeout : null, le = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function B(A) {
      for (var F = a(y); F !== null; ) {
        if (F.callback === null)
          c(y);
        else if (F.startTime <= A)
          c(y), F.sortIndex = F.expirationTime, s(C, F);
        else
          break;
        F = a(y);
      }
    }
    function j(A) {
      if ($ = !1, B(A), !G)
        if (a(C) !== null)
          G = !0, ge(W);
        else {
          var F = a(y);
          F !== null && pe(j, F.startTime - A);
        }
    }
    function W(A, F) {
      G = !1, $ && ($ = !1, I(te), te = -1), T = !0;
      var m = R;
      try {
        for (B(F), b = a(C); b !== null && (!(b.expirationTime > F) || A && !Le()); ) {
          var P = b.callback;
          if (typeof P == "function") {
            b.callback = null, R = b.priorityLevel;
            var H = P(b.expirationTime <= F);
            F = o.unstable_now(), typeof H == "function" ? b.callback = H : b === a(C) && c(C), B(F);
          } else
            c(C);
          b = a(C);
        }
        if (b !== null)
          var ce = !0;
        else {
          var K = a(y);
          K !== null && pe(j, K.startTime - F), ce = !1;
        }
        return ce;
      } finally {
        b = null, R = m, T = !1;
      }
    }
    var ne = !1, ie = null, te = -1, he = 5, Ne = -1;
    function Le() {
      return !(o.unstable_now() - Ne < he);
    }
    function ue() {
      if (ie !== null) {
        var A = o.unstable_now();
        Ne = A;
        var F = !0;
        try {
          F = ie(!0, A);
        } finally {
          F ? ye() : (ne = !1, ie = null);
        }
      } else
        ne = !1;
    }
    var ye;
    if (typeof le == "function")
      ye = function() {
        le(ue);
      };
    else if (typeof MessageChannel < "u") {
      var fe = new MessageChannel(), Be = fe.port2;
      fe.port1.onmessage = ue, ye = function() {
        Be.postMessage(null);
      };
    } else
      ye = function() {
        L(ue, 0);
      };
    function ge(A) {
      ie = A, ne || (ne = !0, ye());
    }
    function pe(A, F) {
      te = L(function() {
        A(o.unstable_now());
      }, F);
    }
    o.unstable_IdlePriority = 5, o.unstable_ImmediatePriority = 1, o.unstable_LowPriority = 4, o.unstable_NormalPriority = 3, o.unstable_Profiling = null, o.unstable_UserBlockingPriority = 2, o.unstable_cancelCallback = function(A) {
      A.callback = null;
    }, o.unstable_continueExecution = function() {
      G || T || (G = !0, ge(W));
    }, o.unstable_forceFrameRate = function(A) {
      0 > A || 125 < A ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : he = 0 < A ? Math.floor(1e3 / A) : 5;
    }, o.unstable_getCurrentPriorityLevel = function() {
      return R;
    }, o.unstable_getFirstCallbackNode = function() {
      return a(C);
    }, o.unstable_next = function(A) {
      switch (R) {
        case 1:
        case 2:
        case 3:
          var F = 3;
          break;
        default:
          F = R;
      }
      var m = R;
      R = F;
      try {
        return A();
      } finally {
        R = m;
      }
    }, o.unstable_pauseExecution = function() {
    }, o.unstable_requestPaint = function() {
    }, o.unstable_runWithPriority = function(A, F) {
      switch (A) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          A = 3;
      }
      var m = R;
      R = A;
      try {
        return F();
      } finally {
        R = m;
      }
    }, o.unstable_scheduleCallback = function(A, F, m) {
      var P = o.unstable_now();
      switch (typeof m == "object" && m !== null ? (m = m.delay, m = typeof m == "number" && 0 < m ? P + m : P) : m = P, A) {
        case 1:
          var H = -1;
          break;
        case 2:
          H = 250;
          break;
        case 5:
          H = 1073741823;
          break;
        case 4:
          H = 1e4;
          break;
        default:
          H = 5e3;
      }
      return H = m + H, A = { id: _++, callback: F, priorityLevel: A, startTime: m, expirationTime: H, sortIndex: -1 }, m > P ? (A.sortIndex = m, s(y, A), a(C) === null && A === a(y) && ($ ? (I(te), te = -1) : $ = !0, pe(j, m - P))) : (A.sortIndex = H, s(C, A), G || T || (G = !0, ge(W))), A;
    }, o.unstable_shouldYield = Le, o.unstable_wrapCallback = function(A) {
      var F = R;
      return function() {
        var m = R;
        R = F;
        try {
          return A.apply(this, arguments);
        } finally {
          R = m;
        }
      };
    };
  }(Ta)), Ta;
}
var Yc;
function wm() {
  return Yc || (Yc = 1, Ra.exports = ym()), Ra.exports;
}
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Kc;
function xm() {
  if (Kc)
    return ht;
  Kc = 1;
  var o = x, s = wm();
  function a(e) {
    for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++)
      t += "&args[]=" + encodeURIComponent(arguments[n]);
    return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var c = /* @__PURE__ */ new Set(), d = {};
  function f(e, t) {
    h(e, t), h(e + "Capture", t);
  }
  function h(e, t) {
    for (d[e] = t, e = 0; e < t.length; e++)
      c.add(t[e]);
  }
  var v = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), C = Object.prototype.hasOwnProperty, y = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, _ = {}, b = {};
  function R(e) {
    return C.call(b, e) ? !0 : C.call(_, e) ? !1 : y.test(e) ? b[e] = !0 : (_[e] = !0, !1);
  }
  function T(e, t, n, r) {
    if (n !== null && n.type === 0)
      return !1;
    switch (typeof t) {
      case "function":
      case "symbol":
        return !0;
      case "boolean":
        return r ? !1 : n !== null ? !n.acceptsBooleans : (e = e.toLowerCase().slice(0, 5), e !== "data-" && e !== "aria-");
      default:
        return !1;
    }
  }
  function G(e, t, n, r) {
    if (t === null || typeof t > "u" || T(e, t, n, r))
      return !0;
    if (r)
      return !1;
    if (n !== null)
      switch (n.type) {
        case 3:
          return !t;
        case 4:
          return t === !1;
        case 5:
          return isNaN(t);
        case 6:
          return isNaN(t) || 1 > t;
      }
    return !1;
  }
  function $(e, t, n, r, l, i, u) {
    this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = l, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = i, this.removeEmptyString = u;
  }
  var L = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
    L[e] = new $(e, 0, !1, e, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
    var t = e[0];
    L[t] = new $(t, 1, !1, e[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
    L[e] = new $(e, 2, !1, e.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
    L[e] = new $(e, 2, !1, e, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
    L[e] = new $(e, 3, !1, e.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(e) {
    L[e] = new $(e, 3, !0, e, null, !1, !1);
  }), ["capture", "download"].forEach(function(e) {
    L[e] = new $(e, 4, !1, e, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(e) {
    L[e] = new $(e, 6, !1, e, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(e) {
    L[e] = new $(e, 5, !1, e.toLowerCase(), null, !1, !1);
  });
  var I = /[\-:]([a-z])/g;
  function le(e) {
    return e[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
    var t = e.replace(
      I,
      le
    );
    L[t] = new $(t, 1, !1, e, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
    var t = e.replace(I, le);
    L[t] = new $(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
    var t = e.replace(I, le);
    L[t] = new $(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(e) {
    L[e] = new $(e, 1, !1, e.toLowerCase(), null, !1, !1);
  }), L.xlinkHref = new $("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(e) {
    L[e] = new $(e, 1, !1, e.toLowerCase(), null, !0, !0);
  });
  function B(e, t, n, r) {
    var l = L.hasOwnProperty(t) ? L[t] : null;
    (l !== null ? l.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (G(t, n, l, r) && (n = null), r || l === null ? R(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : l.mustUseProperty ? e[l.propertyName] = n === null ? l.type === 3 ? !1 : "" : n : (t = l.attributeName, r = l.attributeNamespace, n === null ? e.removeAttribute(t) : (l = l.type, n = l === 3 || l === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
  }
  var j = o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, W = Symbol.for("react.element"), ne = Symbol.for("react.portal"), ie = Symbol.for("react.fragment"), te = Symbol.for("react.strict_mode"), he = Symbol.for("react.profiler"), Ne = Symbol.for("react.provider"), Le = Symbol.for("react.context"), ue = Symbol.for("react.forward_ref"), ye = Symbol.for("react.suspense"), fe = Symbol.for("react.suspense_list"), Be = Symbol.for("react.memo"), ge = Symbol.for("react.lazy"), pe = Symbol.for("react.offscreen"), A = Symbol.iterator;
  function F(e) {
    return e === null || typeof e != "object" ? null : (e = A && e[A] || e["@@iterator"], typeof e == "function" ? e : null);
  }
  var m = Object.assign, P;
  function H(e) {
    if (P === void 0)
      try {
        throw Error();
      } catch (n) {
        var t = n.stack.trim().match(/\n( *(at )?)/);
        P = t && t[1] || "";
      }
    return `
` + P + e;
  }
  var ce = !1;
  function K(e, t) {
    if (!e || ce)
      return "";
    ce = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      if (t)
        if (t = function() {
          throw Error();
        }, Object.defineProperty(t.prototype, "props", { set: function() {
          throw Error();
        } }), typeof Reflect == "object" && Reflect.construct) {
          try {
            Reflect.construct(t, []);
          } catch (k) {
            var r = k;
          }
          Reflect.construct(e, [], t);
        } else {
          try {
            t.call();
          } catch (k) {
            r = k;
          }
          e.call(t.prototype);
        }
      else {
        try {
          throw Error();
        } catch (k) {
          r = k;
        }
        e();
      }
    } catch (k) {
      if (k && r && typeof k.stack == "string") {
        for (var l = k.stack.split(`
`), i = r.stack.split(`
`), u = l.length - 1, p = i.length - 1; 1 <= u && 0 <= p && l[u] !== i[p]; )
          p--;
        for (; 1 <= u && 0 <= p; u--, p--)
          if (l[u] !== i[p]) {
            if (u !== 1 || p !== 1)
              do
                if (u--, p--, 0 > p || l[u] !== i[p]) {
                  var g = `
` + l[u].replace(" at new ", " at ");
                  return e.displayName && g.includes("<anonymous>") && (g = g.replace("<anonymous>", e.displayName)), g;
                }
              while (1 <= u && 0 <= p);
            break;
          }
      }
    } finally {
      ce = !1, Error.prepareStackTrace = n;
    }
    return (e = e ? e.displayName || e.name : "") ? H(e) : "";
  }
  function Se(e) {
    switch (e.tag) {
      case 5:
        return H(e.type);
      case 16:
        return H("Lazy");
      case 13:
        return H("Suspense");
      case 19:
        return H("SuspenseList");
      case 0:
      case 2:
      case 15:
        return e = K(e.type, !1), e;
      case 11:
        return e = K(e.type.render, !1), e;
      case 1:
        return e = K(e.type, !0), e;
      default:
        return "";
    }
  }
  function U(e) {
    if (e == null)
      return null;
    if (typeof e == "function")
      return e.displayName || e.name || null;
    if (typeof e == "string")
      return e;
    switch (e) {
      case ie:
        return "Fragment";
      case ne:
        return "Portal";
      case he:
        return "Profiler";
      case te:
        return "StrictMode";
      case ye:
        return "Suspense";
      case fe:
        return "SuspenseList";
    }
    if (typeof e == "object")
      switch (e.$$typeof) {
        case Le:
          return (e.displayName || "Context") + ".Consumer";
        case Ne:
          return (e._context.displayName || "Context") + ".Provider";
        case ue:
          var t = e.render;
          return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
        case Be:
          return t = e.displayName || null, t !== null ? t : U(e.type) || "Memo";
        case ge:
          t = e._payload, e = e._init;
          try {
            return U(e(t));
          } catch {
          }
      }
    return null;
  }
  function xe(e) {
    var t = e.type;
    switch (e.tag) {
      case 24:
        return "Cache";
      case 9:
        return (t.displayName || "Context") + ".Consumer";
      case 10:
        return (t._context.displayName || "Context") + ".Provider";
      case 18:
        return "DehydratedFragment";
      case 11:
        return e = t.render, e = e.displayName || e.name || "", t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
      case 7:
        return "Fragment";
      case 5:
        return t;
      case 4:
        return "Portal";
      case 3:
        return "Root";
      case 6:
        return "Text";
      case 16:
        return U(t);
      case 8:
        return t === te ? "StrictMode" : "Mode";
      case 22:
        return "Offscreen";
      case 12:
        return "Profiler";
      case 21:
        return "Scope";
      case 13:
        return "Suspense";
      case 19:
        return "SuspenseList";
      case 25:
        return "TracingMarker";
      case 1:
      case 0:
      case 17:
      case 2:
      case 14:
      case 15:
        if (typeof t == "function")
          return t.displayName || t.name || null;
        if (typeof t == "string")
          return t;
    }
    return null;
  }
  function me(e) {
    switch (typeof e) {
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return e;
      case "object":
        return e;
      default:
        return "";
    }
  }
  function Ve(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
  }
  function Ut(e) {
    var t = Ve(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), r = "" + e[t];
    if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
      var l = n.get, i = n.set;
      return Object.defineProperty(e, t, { configurable: !0, get: function() {
        return l.call(this);
      }, set: function(u) {
        r = "" + u, i.call(this, u);
      } }), Object.defineProperty(e, t, { enumerable: n.enumerable }), { getValue: function() {
        return r;
      }, setValue: function(u) {
        r = "" + u;
      }, stopTracking: function() {
        e._valueTracker = null, delete e[t];
      } };
    }
  }
  function Ct(e) {
    e._valueTracker || (e._valueTracker = Ut(e));
  }
  function Fn(e) {
    if (!e)
      return !1;
    var t = e._valueTracker;
    if (!t)
      return !0;
    var n = t.getValue(), r = "";
    return e && (r = Ve(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1;
  }
  function Je(e) {
    if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u")
      return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  function tt(e, t) {
    var n = t.checked;
    return m({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n ?? e._wrapperState.initialChecked });
  }
  function or(e, t) {
    var n = t.defaultValue == null ? "" : t.defaultValue, r = t.checked != null ? t.checked : t.defaultChecked;
    n = me(t.value != null ? t.value : n), e._wrapperState = { initialChecked: r, initialValue: n, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
  }
  function Un(e, t) {
    t = t.checked, t != null && B(e, "checked", t, !1);
  }
  function Bt(e, t) {
    Un(e, t);
    var n = me(t.value), r = t.type;
    if (n != null)
      r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
    else if (r === "submit" || r === "reset") {
      e.removeAttribute("value");
      return;
    }
    t.hasOwnProperty("value") ? gt(e, t.type, n) : t.hasOwnProperty("defaultValue") && gt(e, t.type, me(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
  }
  function lr(e, t, n) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
      var r = t.type;
      if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null))
        return;
      t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
    }
    n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n);
  }
  function gt(e, t, n) {
    (t !== "number" || Je(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
  }
  var Tt = Array.isArray;
  function nt(e, t, n, r) {
    if (e = e.options, t) {
      t = {};
      for (var l = 0; l < n.length; l++)
        t["$" + n[l]] = !0;
      for (n = 0; n < e.length; n++)
        l = t.hasOwnProperty("$" + e[n].value), e[n].selected !== l && (e[n].selected = l), l && r && (e[n].defaultSelected = !0);
    } else {
      for (n = "" + me(n), t = null, l = 0; l < e.length; l++) {
        if (e[l].value === n) {
          e[l].selected = !0, r && (e[l].defaultSelected = !0);
          return;
        }
        t !== null || e[l].disabled || (t = e[l]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function un(e, t) {
    if (t.dangerouslySetInnerHTML != null)
      throw Error(a(91));
    return m({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
  }
  function rt(e, t) {
    var n = t.value;
    if (n == null) {
      if (n = t.children, t = t.defaultValue, n != null) {
        if (t != null)
          throw Error(a(92));
        if (Tt(n)) {
          if (1 < n.length)
            throw Error(a(93));
          n = n[0];
        }
        t = n;
      }
      t == null && (t = ""), n = t;
    }
    e._wrapperState = { initialValue: me(n) };
  }
  function cn(e, t) {
    var n = me(t.value), r = me(t.defaultValue);
    n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r);
  }
  function ir(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
  }
  function Wt(e) {
    switch (e) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function dn(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml" ? Wt(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
  }
  var fn, pn = function(e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, l) {
      MSApp.execUnsafeLocalFunction(function() {
        return e(t, n, r, l);
      });
    } : e;
  }(function(e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (fn = fn || document.createElement("div"), fn.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = fn.firstChild; e.firstChild; )
        e.removeChild(e.firstChild);
      for (; t.firstChild; )
        e.appendChild(t.firstChild);
    }
  });
  function J(e, t) {
    if (t) {
      var n = e.firstChild;
      if (n && n === e.lastChild && n.nodeType === 3) {
        n.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var de = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0
  }, V = ["Webkit", "ms", "Moz", "O"];
  Object.keys(de).forEach(function(e) {
    V.forEach(function(t) {
      t = t + e.charAt(0).toUpperCase() + e.substring(1), de[t] = de[e];
    });
  });
  function ee(e, t, n) {
    return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || de.hasOwnProperty(e) && de[e] ? ("" + t).trim() : t + "px";
  }
  function ae(e, t) {
    e = e.style;
    for (var n in t)
      if (t.hasOwnProperty(n)) {
        var r = n.indexOf("--") === 0, l = ee(n, t[n], r);
        n === "float" && (n = "cssFloat"), r ? e.setProperty(n, l) : e[n] = l;
      }
  }
  var ke = m({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
  function Pe(e, t) {
    if (t) {
      if (ke[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
        throw Error(a(137, e));
      if (t.dangerouslySetInnerHTML != null) {
        if (t.children != null)
          throw Error(a(60));
        if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML))
          throw Error(a(61));
      }
      if (t.style != null && typeof t.style != "object")
        throw Error(a(62));
    }
  }
  function yt(e, t) {
    if (e.indexOf("-") === -1)
      return typeof t.is == "string";
    switch (e) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var wt = null;
  function ct(e) {
    return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
  }
  var mn = null, Zt = null, ar = null;
  function is(e) {
    if (e = ro(e)) {
      if (typeof mn != "function")
        throw Error(a(280));
      var t = e.stateNode;
      t && (t = Qo(t), mn(e.stateNode, e.type, t));
    }
  }
  function as(e) {
    Zt ? ar ? ar.push(e) : ar = [e] : Zt = e;
  }
  function ss() {
    if (Zt) {
      var e = Zt, t = ar;
      if (ar = Zt = null, is(e), t)
        for (e = 0; e < t.length; e++)
          is(t[e]);
    }
  }
  function us(e, t) {
    return e(t);
  }
  function cs() {
  }
  var Yl = !1;
  function ds(e, t, n) {
    if (Yl)
      return e(t, n);
    Yl = !0;
    try {
      return us(e, t, n);
    } finally {
      Yl = !1, (Zt !== null || ar !== null) && (cs(), ss());
    }
  }
  function Mr(e, t) {
    var n = e.stateNode;
    if (n === null)
      return null;
    var r = Qo(n);
    if (r === null)
      return null;
    n = r[t];
    e:
      switch (t) {
        case "onClick":
        case "onClickCapture":
        case "onDoubleClick":
        case "onDoubleClickCapture":
        case "onMouseDown":
        case "onMouseDownCapture":
        case "onMouseMove":
        case "onMouseMoveCapture":
        case "onMouseUp":
        case "onMouseUpCapture":
        case "onMouseEnter":
          (r = !r.disabled) || (e = e.type, r = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !r;
          break e;
        default:
          e = !1;
      }
    if (e)
      return null;
    if (n && typeof n != "function")
      throw Error(a(231, t, typeof n));
    return n;
  }
  var Kl = !1;
  if (v)
    try {
      var Ir = {};
      Object.defineProperty(Ir, "passive", { get: function() {
        Kl = !0;
      } }), window.addEventListener("test", Ir, Ir), window.removeEventListener("test", Ir, Ir);
    } catch {
      Kl = !1;
    }
  function gf(e, t, n, r, l, i, u, p, g) {
    var k = Array.prototype.slice.call(arguments, 3);
    try {
      t.apply(n, k);
    } catch (D) {
      this.onError(D);
    }
  }
  var Ar = !1, Co = null, bo = !1, Gl = null, yf = { onError: function(e) {
    Ar = !0, Co = e;
  } };
  function wf(e, t, n, r, l, i, u, p, g) {
    Ar = !1, Co = null, gf.apply(yf, arguments);
  }
  function xf(e, t, n, r, l, i, u, p, g) {
    if (wf.apply(this, arguments), Ar) {
      if (Ar) {
        var k = Co;
        Ar = !1, Co = null;
      } else
        throw Error(a(198));
      bo || (bo = !0, Gl = k);
    }
  }
  function Bn(e) {
    var t = e, n = e;
    if (e.alternate)
      for (; t.return; )
        t = t.return;
    else {
      e = t;
      do
        t = e, t.flags & 4098 && (n = t.return), e = t.return;
      while (e);
    }
    return t.tag === 3 ? n : null;
  }
  function fs(e) {
    if (e.tag === 13) {
      var t = e.memoizedState;
      if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null)
        return t.dehydrated;
    }
    return null;
  }
  function ps(e) {
    if (Bn(e) !== e)
      throw Error(a(188));
  }
  function Ef(e) {
    var t = e.alternate;
    if (!t) {
      if (t = Bn(e), t === null)
        throw Error(a(188));
      return t !== e ? null : e;
    }
    for (var n = e, r = t; ; ) {
      var l = n.return;
      if (l === null)
        break;
      var i = l.alternate;
      if (i === null) {
        if (r = l.return, r !== null) {
          n = r;
          continue;
        }
        break;
      }
      if (l.child === i.child) {
        for (i = l.child; i; ) {
          if (i === n)
            return ps(l), e;
          if (i === r)
            return ps(l), t;
          i = i.sibling;
        }
        throw Error(a(188));
      }
      if (n.return !== r.return)
        n = l, r = i;
      else {
        for (var u = !1, p = l.child; p; ) {
          if (p === n) {
            u = !0, n = l, r = i;
            break;
          }
          if (p === r) {
            u = !0, r = l, n = i;
            break;
          }
          p = p.sibling;
        }
        if (!u) {
          for (p = i.child; p; ) {
            if (p === n) {
              u = !0, n = i, r = l;
              break;
            }
            if (p === r) {
              u = !0, r = i, n = l;
              break;
            }
            p = p.sibling;
          }
          if (!u)
            throw Error(a(189));
        }
      }
      if (n.alternate !== r)
        throw Error(a(190));
    }
    if (n.tag !== 3)
      throw Error(a(188));
    return n.stateNode.current === n ? e : t;
  }
  function ms(e) {
    return e = Ef(e), e !== null ? vs(e) : null;
  }
  function vs(e) {
    if (e.tag === 5 || e.tag === 6)
      return e;
    for (e = e.child; e !== null; ) {
      var t = vs(e);
      if (t !== null)
        return t;
      e = e.sibling;
    }
    return null;
  }
  var hs = s.unstable_scheduleCallback, gs = s.unstable_cancelCallback, Sf = s.unstable_shouldYield, kf = s.unstable_requestPaint, Fe = s.unstable_now, Cf = s.unstable_getCurrentPriorityLevel, Xl = s.unstable_ImmediatePriority, ys = s.unstable_UserBlockingPriority, Po = s.unstable_NormalPriority, bf = s.unstable_LowPriority, ws = s.unstable_IdlePriority, $o = null, Ht = null;
  function Pf(e) {
    if (Ht && typeof Ht.onCommitFiberRoot == "function")
      try {
        Ht.onCommitFiberRoot($o, e, void 0, (e.current.flags & 128) === 128);
      } catch {
      }
  }
  var Ot = Math.clz32 ? Math.clz32 : _f, $f = Math.log, Nf = Math.LN2;
  function _f(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - ($f(e) / Nf | 0) | 0;
  }
  var No = 64, _o = 4194304;
  function jr(e) {
    switch (e & -e) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return e & 4194240;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return e & 130023424;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 1073741824;
      default:
        return e;
    }
  }
  function Ro(e, t) {
    var n = e.pendingLanes;
    if (n === 0)
      return 0;
    var r = 0, l = e.suspendedLanes, i = e.pingedLanes, u = n & 268435455;
    if (u !== 0) {
      var p = u & ~l;
      p !== 0 ? r = jr(p) : (i &= u, i !== 0 && (r = jr(i)));
    } else
      u = n & ~l, u !== 0 ? r = jr(u) : i !== 0 && (r = jr(i));
    if (r === 0)
      return 0;
    if (t !== 0 && t !== r && !(t & l) && (l = r & -r, i = t & -t, l >= i || l === 16 && (i & 4194240) !== 0))
      return t;
    if (r & 4 && (r |= n & 16), t = e.entangledLanes, t !== 0)
      for (e = e.entanglements, t &= r; 0 < t; )
        n = 31 - Ot(t), l = 1 << n, r |= e[n], t &= ~l;
    return r;
  }
  function Rf(e, t) {
    switch (e) {
      case 1:
      case 2:
      case 4:
        return t + 250;
      case 8:
      case 16:
      case 32:
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return t + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return -1;
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function Tf(e, t) {
    for (var n = e.suspendedLanes, r = e.pingedLanes, l = e.expirationTimes, i = e.pendingLanes; 0 < i; ) {
      var u = 31 - Ot(i), p = 1 << u, g = l[u];
      g === -1 ? (!(p & n) || p & r) && (l[u] = Rf(p, t)) : g <= t && (e.expiredLanes |= p), i &= ~p;
    }
  }
  function Zl(e) {
    return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
  }
  function xs() {
    var e = No;
    return No <<= 1, !(No & 4194240) && (No = 64), e;
  }
  function Jl(e) {
    for (var t = [], n = 0; 31 > n; n++)
      t.push(e);
    return t;
  }
  function Fr(e, t, n) {
    e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - Ot(t), e[t] = n;
  }
  function Of(e, t) {
    var n = e.pendingLanes & ~t;
    e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
    var r = e.eventTimes;
    for (e = e.expirationTimes; 0 < n; ) {
      var l = 31 - Ot(n), i = 1 << l;
      t[l] = 0, r[l] = -1, e[l] = -1, n &= ~i;
    }
  }
  function ql(e, t) {
    var n = e.entangledLanes |= t;
    for (e = e.entanglements; n; ) {
      var r = 31 - Ot(n), l = 1 << r;
      l & t | e[r] & t && (e[r] |= t), n &= ~l;
    }
  }
  var $e = 0;
  function Es(e) {
    return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1;
  }
  var Ss, ei, ks, Cs, bs, ti = !1, To = [], vn = null, hn = null, gn = null, Ur = /* @__PURE__ */ new Map(), Br = /* @__PURE__ */ new Map(), yn = [], Df = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
  function Ps(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        vn = null;
        break;
      case "dragenter":
      case "dragleave":
        hn = null;
        break;
      case "mouseover":
      case "mouseout":
        gn = null;
        break;
      case "pointerover":
      case "pointerout":
        Ur.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Br.delete(t.pointerId);
    }
  }
  function Wr(e, t, n, r, l, i) {
    return e === null || e.nativeEvent !== i ? (e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: i, targetContainers: [l] }, t !== null && (t = ro(t), t !== null && ei(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, l !== null && t.indexOf(l) === -1 && t.push(l), e);
  }
  function zf(e, t, n, r, l) {
    switch (t) {
      case "focusin":
        return vn = Wr(vn, e, t, n, r, l), !0;
      case "dragenter":
        return hn = Wr(hn, e, t, n, r, l), !0;
      case "mouseover":
        return gn = Wr(gn, e, t, n, r, l), !0;
      case "pointerover":
        var i = l.pointerId;
        return Ur.set(i, Wr(Ur.get(i) || null, e, t, n, r, l)), !0;
      case "gotpointercapture":
        return i = l.pointerId, Br.set(i, Wr(Br.get(i) || null, e, t, n, r, l)), !0;
    }
    return !1;
  }
  function $s(e) {
    var t = Wn(e.target);
    if (t !== null) {
      var n = Bn(t);
      if (n !== null) {
        if (t = n.tag, t === 13) {
          if (t = fs(n), t !== null) {
            e.blockedOn = t, bs(e.priority, function() {
              ks(n);
            });
            return;
          }
        } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
          e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
          return;
        }
      }
    }
    e.blockedOn = null;
  }
  function Oo(e) {
    if (e.blockedOn !== null)
      return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var n = ri(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
      if (n === null) {
        n = e.nativeEvent;
        var r = new n.constructor(n.type, n);
        wt = r, n.target.dispatchEvent(r), wt = null;
      } else
        return t = ro(n), t !== null && ei(t), e.blockedOn = n, !1;
      t.shift();
    }
    return !0;
  }
  function Ns(e, t, n) {
    Oo(e) && n.delete(t);
  }
  function Lf() {
    ti = !1, vn !== null && Oo(vn) && (vn = null), hn !== null && Oo(hn) && (hn = null), gn !== null && Oo(gn) && (gn = null), Ur.forEach(Ns), Br.forEach(Ns);
  }
  function Hr(e, t) {
    e.blockedOn === t && (e.blockedOn = null, ti || (ti = !0, s.unstable_scheduleCallback(s.unstable_NormalPriority, Lf)));
  }
  function Vr(e) {
    function t(l) {
      return Hr(l, e);
    }
    if (0 < To.length) {
      Hr(To[0], e);
      for (var n = 1; n < To.length; n++) {
        var r = To[n];
        r.blockedOn === e && (r.blockedOn = null);
      }
    }
    for (vn !== null && Hr(vn, e), hn !== null && Hr(hn, e), gn !== null && Hr(gn, e), Ur.forEach(t), Br.forEach(t), n = 0; n < yn.length; n++)
      r = yn[n], r.blockedOn === e && (r.blockedOn = null);
    for (; 0 < yn.length && (n = yn[0], n.blockedOn === null); )
      $s(n), n.blockedOn === null && yn.shift();
  }
  var sr = j.ReactCurrentBatchConfig, Do = !0;
  function Mf(e, t, n, r) {
    var l = $e, i = sr.transition;
    sr.transition = null;
    try {
      $e = 1, ni(e, t, n, r);
    } finally {
      $e = l, sr.transition = i;
    }
  }
  function If(e, t, n, r) {
    var l = $e, i = sr.transition;
    sr.transition = null;
    try {
      $e = 4, ni(e, t, n, r);
    } finally {
      $e = l, sr.transition = i;
    }
  }
  function ni(e, t, n, r) {
    if (Do) {
      var l = ri(e, t, n, r);
      if (l === null)
        xi(e, t, r, zo, n), Ps(e, r);
      else if (zf(l, e, t, n, r))
        r.stopPropagation();
      else if (Ps(e, r), t & 4 && -1 < Df.indexOf(e)) {
        for (; l !== null; ) {
          var i = ro(l);
          if (i !== null && Ss(i), i = ri(e, t, n, r), i === null && xi(e, t, r, zo, n), i === l)
            break;
          l = i;
        }
        l !== null && r.stopPropagation();
      } else
        xi(e, t, r, null, n);
    }
  }
  var zo = null;
  function ri(e, t, n, r) {
    if (zo = null, e = ct(r), e = Wn(e), e !== null)
      if (t = Bn(e), t === null)
        e = null;
      else if (n = t.tag, n === 13) {
        if (e = fs(t), e !== null)
          return e;
        e = null;
      } else if (n === 3) {
        if (t.stateNode.current.memoizedState.isDehydrated)
          return t.tag === 3 ? t.stateNode.containerInfo : null;
        e = null;
      } else
        t !== e && (e = null);
    return zo = e, null;
  }
  function _s(e) {
    switch (e) {
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 1;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "toggle":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 4;
      case "message":
        switch (Cf()) {
          case Xl:
            return 1;
          case ys:
            return 4;
          case Po:
          case bf:
            return 16;
          case ws:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var wn = null, oi = null, Lo = null;
  function Rs() {
    if (Lo)
      return Lo;
    var e, t = oi, n = t.length, r, l = "value" in wn ? wn.value : wn.textContent, i = l.length;
    for (e = 0; e < n && t[e] === l[e]; e++)
      ;
    var u = n - e;
    for (r = 1; r <= u && t[n - r] === l[i - r]; r++)
      ;
    return Lo = l.slice(e, 1 < r ? 1 - r : void 0);
  }
  function Mo(e) {
    var t = e.keyCode;
    return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
  }
  function Io() {
    return !0;
  }
  function Ts() {
    return !1;
  }
  function xt(e) {
    function t(n, r, l, i, u) {
      this._reactName = n, this._targetInst = l, this.type = r, this.nativeEvent = i, this.target = u, this.currentTarget = null;
      for (var p in e)
        e.hasOwnProperty(p) && (n = e[p], this[p] = n ? n(i) : i[p]);
      return this.isDefaultPrevented = (i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1) ? Io : Ts, this.isPropagationStopped = Ts, this;
    }
    return m(t.prototype, { preventDefault: function() {
      this.defaultPrevented = !0;
      var n = this.nativeEvent;
      n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = Io);
    }, stopPropagation: function() {
      var n = this.nativeEvent;
      n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = Io);
    }, persist: function() {
    }, isPersistent: Io }), t;
  }
  var ur = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
    return e.timeStamp || Date.now();
  }, defaultPrevented: 0, isTrusted: 0 }, li = xt(ur), Qr = m({}, ur, { view: 0, detail: 0 }), Af = xt(Qr), ii, ai, Yr, Ao = m({}, Qr, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: ui, button: 0, buttons: 0, relatedTarget: function(e) {
    return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
  }, movementX: function(e) {
    return "movementX" in e ? e.movementX : (e !== Yr && (Yr && e.type === "mousemove" ? (ii = e.screenX - Yr.screenX, ai = e.screenY - Yr.screenY) : ai = ii = 0, Yr = e), ii);
  }, movementY: function(e) {
    return "movementY" in e ? e.movementY : ai;
  } }), Os = xt(Ao), jf = m({}, Ao, { dataTransfer: 0 }), Ff = xt(jf), Uf = m({}, Qr, { relatedTarget: 0 }), si = xt(Uf), Bf = m({}, ur, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), Wf = xt(Bf), Hf = m({}, ur, { clipboardData: function(e) {
    return "clipboardData" in e ? e.clipboardData : window.clipboardData;
  } }), Vf = xt(Hf), Qf = m({}, ur, { data: 0 }), Ds = xt(Qf), Yf = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified"
  }, Kf = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta"
  }, Gf = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function Xf(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = Gf[e]) ? !!t[e] : !1;
  }
  function ui() {
    return Xf;
  }
  var Zf = m({}, Qr, { key: function(e) {
    if (e.key) {
      var t = Yf[e.key] || e.key;
      if (t !== "Unidentified")
        return t;
    }
    return e.type === "keypress" ? (e = Mo(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? Kf[e.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: ui, charCode: function(e) {
    return e.type === "keypress" ? Mo(e) : 0;
  }, keyCode: function(e) {
    return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
  }, which: function(e) {
    return e.type === "keypress" ? Mo(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
  } }), Jf = xt(Zf), qf = m({}, Ao, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), zs = xt(qf), ep = m({}, Qr, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: ui }), tp = xt(ep), np = m({}, ur, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), rp = xt(np), op = m({}, Ao, {
    deltaX: function(e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function(e) {
      return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), lp = xt(op), ip = [9, 13, 27, 32], ci = v && "CompositionEvent" in window, Kr = null;
  v && "documentMode" in document && (Kr = document.documentMode);
  var ap = v && "TextEvent" in window && !Kr, Ls = v && (!ci || Kr && 8 < Kr && 11 >= Kr), Ms = " ", Is = !1;
  function As(e, t) {
    switch (e) {
      case "keyup":
        return ip.indexOf(t.keyCode) !== -1;
      case "keydown":
        return t.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function js(e) {
    return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
  }
  var cr = !1;
  function sp(e, t) {
    switch (e) {
      case "compositionend":
        return js(t);
      case "keypress":
        return t.which !== 32 ? null : (Is = !0, Ms);
      case "textInput":
        return e = t.data, e === Ms && Is ? null : e;
      default:
        return null;
    }
  }
  function up(e, t) {
    if (cr)
      return e === "compositionend" || !ci && As(e, t) ? (e = Rs(), Lo = oi = wn = null, cr = !1, e) : null;
    switch (e) {
      case "paste":
        return null;
      case "keypress":
        if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
          if (t.char && 1 < t.char.length)
            return t.char;
          if (t.which)
            return String.fromCharCode(t.which);
        }
        return null;
      case "compositionend":
        return Ls && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var cp = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
  function Fs(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!cp[e.type] : t === "textarea";
  }
  function Us(e, t, n, r) {
    as(r), t = Wo(t, "onChange"), 0 < t.length && (n = new li("onChange", "change", null, n, r), e.push({ event: n, listeners: t }));
  }
  var Gr = null, Xr = null;
  function dp(e) {
    lu(e, 0);
  }
  function jo(e) {
    var t = vr(e);
    if (Fn(t))
      return e;
  }
  function fp(e, t) {
    if (e === "change")
      return t;
  }
  var Bs = !1;
  if (v) {
    var di;
    if (v) {
      var fi = "oninput" in document;
      if (!fi) {
        var Ws = document.createElement("div");
        Ws.setAttribute("oninput", "return;"), fi = typeof Ws.oninput == "function";
      }
      di = fi;
    } else
      di = !1;
    Bs = di && (!document.documentMode || 9 < document.documentMode);
  }
  function Hs() {
    Gr && (Gr.detachEvent("onpropertychange", Vs), Xr = Gr = null);
  }
  function Vs(e) {
    if (e.propertyName === "value" && jo(Xr)) {
      var t = [];
      Us(t, Xr, e, ct(e)), ds(dp, t);
    }
  }
  function pp(e, t, n) {
    e === "focusin" ? (Hs(), Gr = t, Xr = n, Gr.attachEvent("onpropertychange", Vs)) : e === "focusout" && Hs();
  }
  function mp(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
      return jo(Xr);
  }
  function vp(e, t) {
    if (e === "click")
      return jo(t);
  }
  function hp(e, t) {
    if (e === "input" || e === "change")
      return jo(t);
  }
  function gp(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
  }
  var Dt = typeof Object.is == "function" ? Object.is : gp;
  function Zr(e, t) {
    if (Dt(e, t))
      return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null)
      return !1;
    var n = Object.keys(e), r = Object.keys(t);
    if (n.length !== r.length)
      return !1;
    for (r = 0; r < n.length; r++) {
      var l = n[r];
      if (!C.call(t, l) || !Dt(e[l], t[l]))
        return !1;
    }
    return !0;
  }
  function Qs(e) {
    for (; e && e.firstChild; )
      e = e.firstChild;
    return e;
  }
  function Ys(e, t) {
    var n = Qs(e);
    e = 0;
    for (var r; n; ) {
      if (n.nodeType === 3) {
        if (r = e + n.textContent.length, e <= t && r >= t)
          return { node: n, offset: t - e };
        e = r;
      }
      e: {
        for (; n; ) {
          if (n.nextSibling) {
            n = n.nextSibling;
            break e;
          }
          n = n.parentNode;
        }
        n = void 0;
      }
      n = Qs(n);
    }
  }
  function Ks(e, t) {
    return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Ks(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
  }
  function Gs() {
    for (var e = window, t = Je(); t instanceof e.HTMLIFrameElement; ) {
      try {
        var n = typeof t.contentWindow.location.href == "string";
      } catch {
        n = !1;
      }
      if (n)
        e = t.contentWindow;
      else
        break;
      t = Je(e.document);
    }
    return t;
  }
  function pi(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
  }
  function yp(e) {
    var t = Gs(), n = e.focusedElem, r = e.selectionRange;
    if (t !== n && n && n.ownerDocument && Ks(n.ownerDocument.documentElement, n)) {
      if (r !== null && pi(n)) {
        if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n)
          n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
        else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
          e = e.getSelection();
          var l = n.textContent.length, i = Math.min(r.start, l);
          r = r.end === void 0 ? i : Math.min(r.end, l), !e.extend && i > r && (l = r, r = i, i = l), l = Ys(n, i);
          var u = Ys(
            n,
            r
          );
          l && u && (e.rangeCount !== 1 || e.anchorNode !== l.node || e.anchorOffset !== l.offset || e.focusNode !== u.node || e.focusOffset !== u.offset) && (t = t.createRange(), t.setStart(l.node, l.offset), e.removeAllRanges(), i > r ? (e.addRange(t), e.extend(u.node, u.offset)) : (t.setEnd(u.node, u.offset), e.addRange(t)));
        }
      }
      for (t = [], e = n; e = e.parentNode; )
        e.nodeType === 1 && t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
      for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
        e = t[n], e.element.scrollLeft = e.left, e.element.scrollTop = e.top;
    }
  }
  var wp = v && "documentMode" in document && 11 >= document.documentMode, dr = null, mi = null, Jr = null, vi = !1;
  function Xs(e, t, n) {
    var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    vi || dr == null || dr !== Je(r) || (r = dr, "selectionStart" in r && pi(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), Jr && Zr(Jr, r) || (Jr = r, r = Wo(mi, "onSelect"), 0 < r.length && (t = new li("onSelect", "select", null, t, n), e.push({ event: t, listeners: r }), t.target = dr)));
  }
  function Fo(e, t) {
    var n = {};
    return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
  }
  var fr = { animationend: Fo("Animation", "AnimationEnd"), animationiteration: Fo("Animation", "AnimationIteration"), animationstart: Fo("Animation", "AnimationStart"), transitionend: Fo("Transition", "TransitionEnd") }, hi = {}, Zs = {};
  v && (Zs = document.createElement("div").style, "AnimationEvent" in window || (delete fr.animationend.animation, delete fr.animationiteration.animation, delete fr.animationstart.animation), "TransitionEvent" in window || delete fr.transitionend.transition);
  function Uo(e) {
    if (hi[e])
      return hi[e];
    if (!fr[e])
      return e;
    var t = fr[e], n;
    for (n in t)
      if (t.hasOwnProperty(n) && n in Zs)
        return hi[e] = t[n];
    return e;
  }
  var Js = Uo("animationend"), qs = Uo("animationiteration"), eu = Uo("animationstart"), tu = Uo("transitionend"), nu = /* @__PURE__ */ new Map(), ru = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  function xn(e, t) {
    nu.set(e, t), f(t, [e]);
  }
  for (var gi = 0; gi < ru.length; gi++) {
    var yi = ru[gi], xp = yi.toLowerCase(), Ep = yi[0].toUpperCase() + yi.slice(1);
    xn(xp, "on" + Ep);
  }
  xn(Js, "onAnimationEnd"), xn(qs, "onAnimationIteration"), xn(eu, "onAnimationStart"), xn("dblclick", "onDoubleClick"), xn("focusin", "onFocus"), xn("focusout", "onBlur"), xn(tu, "onTransitionEnd"), h("onMouseEnter", ["mouseout", "mouseover"]), h("onMouseLeave", ["mouseout", "mouseover"]), h("onPointerEnter", ["pointerout", "pointerover"]), h("onPointerLeave", ["pointerout", "pointerover"]), f("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), f("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), f("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), f("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), f("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), f("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var qr = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), Sp = new Set("cancel close invalid load scroll toggle".split(" ").concat(qr));
  function ou(e, t, n) {
    var r = e.type || "unknown-event";
    e.currentTarget = n, xf(r, t, void 0, e), e.currentTarget = null;
  }
  function lu(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
      var r = e[n], l = r.event;
      r = r.listeners;
      e: {
        var i = void 0;
        if (t)
          for (var u = r.length - 1; 0 <= u; u--) {
            var p = r[u], g = p.instance, k = p.currentTarget;
            if (p = p.listener, g !== i && l.isPropagationStopped())
              break e;
            ou(l, p, k), i = g;
          }
        else
          for (u = 0; u < r.length; u++) {
            if (p = r[u], g = p.instance, k = p.currentTarget, p = p.listener, g !== i && l.isPropagationStopped())
              break e;
            ou(l, p, k), i = g;
          }
      }
    }
    if (bo)
      throw e = Gl, bo = !1, Gl = null, e;
  }
  function Te(e, t) {
    var n = t[Pi];
    n === void 0 && (n = t[Pi] = /* @__PURE__ */ new Set());
    var r = e + "__bubble";
    n.has(r) || (iu(t, e, 2, !1), n.add(r));
  }
  function wi(e, t, n) {
    var r = 0;
    t && (r |= 4), iu(n, e, r, t);
  }
  var Bo = "_reactListening" + Math.random().toString(36).slice(2);
  function eo(e) {
    if (!e[Bo]) {
      e[Bo] = !0, c.forEach(function(n) {
        n !== "selectionchange" && (Sp.has(n) || wi(n, !1, e), wi(n, !0, e));
      });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[Bo] || (t[Bo] = !0, wi("selectionchange", !1, t));
    }
  }
  function iu(e, t, n, r) {
    switch (_s(t)) {
      case 1:
        var l = Mf;
        break;
      case 4:
        l = If;
        break;
      default:
        l = ni;
    }
    n = l.bind(null, t, n, e), l = void 0, !Kl || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (l = !0), r ? l !== void 0 ? e.addEventListener(t, n, { capture: !0, passive: l }) : e.addEventListener(t, n, !0) : l !== void 0 ? e.addEventListener(t, n, { passive: l }) : e.addEventListener(t, n, !1);
  }
  function xi(e, t, n, r, l) {
    var i = r;
    if (!(t & 1) && !(t & 2) && r !== null)
      e:
        for (; ; ) {
          if (r === null)
            return;
          var u = r.tag;
          if (u === 3 || u === 4) {
            var p = r.stateNode.containerInfo;
            if (p === l || p.nodeType === 8 && p.parentNode === l)
              break;
            if (u === 4)
              for (u = r.return; u !== null; ) {
                var g = u.tag;
                if ((g === 3 || g === 4) && (g = u.stateNode.containerInfo, g === l || g.nodeType === 8 && g.parentNode === l))
                  return;
                u = u.return;
              }
            for (; p !== null; ) {
              if (u = Wn(p), u === null)
                return;
              if (g = u.tag, g === 5 || g === 6) {
                r = i = u;
                continue e;
              }
              p = p.parentNode;
            }
          }
          r = r.return;
        }
    ds(function() {
      var k = i, D = ct(n), z = [];
      e: {
        var O = nu.get(e);
        if (O !== void 0) {
          var Q = li, X = e;
          switch (e) {
            case "keypress":
              if (Mo(n) === 0)
                break e;
            case "keydown":
            case "keyup":
              Q = Jf;
              break;
            case "focusin":
              X = "focus", Q = si;
              break;
            case "focusout":
              X = "blur", Q = si;
              break;
            case "beforeblur":
            case "afterblur":
              Q = si;
              break;
            case "click":
              if (n.button === 2)
                break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              Q = Os;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              Q = Ff;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              Q = tp;
              break;
            case Js:
            case qs:
            case eu:
              Q = Wf;
              break;
            case tu:
              Q = rp;
              break;
            case "scroll":
              Q = Af;
              break;
            case "wheel":
              Q = lp;
              break;
            case "copy":
            case "cut":
            case "paste":
              Q = Vf;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              Q = zs;
          }
          var Z = (t & 4) !== 0, Ue = !Z && e === "scroll", E = Z ? O !== null ? O + "Capture" : null : O;
          Z = [];
          for (var w = k, S; w !== null; ) {
            S = w;
            var M = S.stateNode;
            if (S.tag === 5 && M !== null && (S = M, E !== null && (M = Mr(w, E), M != null && Z.push(to(w, M, S)))), Ue)
              break;
            w = w.return;
          }
          0 < Z.length && (O = new Q(O, X, null, n, D), z.push({ event: O, listeners: Z }));
        }
      }
      if (!(t & 7)) {
        e: {
          if (O = e === "mouseover" || e === "pointerover", Q = e === "mouseout" || e === "pointerout", O && n !== wt && (X = n.relatedTarget || n.fromElement) && (Wn(X) || X[Jt]))
            break e;
          if ((Q || O) && (O = D.window === D ? D : (O = D.ownerDocument) ? O.defaultView || O.parentWindow : window, Q ? (X = n.relatedTarget || n.toElement, Q = k, X = X ? Wn(X) : null, X !== null && (Ue = Bn(X), X !== Ue || X.tag !== 5 && X.tag !== 6) && (X = null)) : (Q = null, X = k), Q !== X)) {
            if (Z = Os, M = "onMouseLeave", E = "onMouseEnter", w = "mouse", (e === "pointerout" || e === "pointerover") && (Z = zs, M = "onPointerLeave", E = "onPointerEnter", w = "pointer"), Ue = Q == null ? O : vr(Q), S = X == null ? O : vr(X), O = new Z(M, w + "leave", Q, n, D), O.target = Ue, O.relatedTarget = S, M = null, Wn(D) === k && (Z = new Z(E, w + "enter", X, n, D), Z.target = S, Z.relatedTarget = Ue, M = Z), Ue = M, Q && X)
              t: {
                for (Z = Q, E = X, w = 0, S = Z; S; S = pr(S))
                  w++;
                for (S = 0, M = E; M; M = pr(M))
                  S++;
                for (; 0 < w - S; )
                  Z = pr(Z), w--;
                for (; 0 < S - w; )
                  E = pr(E), S--;
                for (; w--; ) {
                  if (Z === E || E !== null && Z === E.alternate)
                    break t;
                  Z = pr(Z), E = pr(E);
                }
                Z = null;
              }
            else
              Z = null;
            Q !== null && au(z, O, Q, Z, !1), X !== null && Ue !== null && au(z, Ue, X, Z, !0);
          }
        }
        e: {
          if (O = k ? vr(k) : window, Q = O.nodeName && O.nodeName.toLowerCase(), Q === "select" || Q === "input" && O.type === "file")
            var q = fp;
          else if (Fs(O))
            if (Bs)
              q = hp;
            else {
              q = mp;
              var re = pp;
            }
          else
            (Q = O.nodeName) && Q.toLowerCase() === "input" && (O.type === "checkbox" || O.type === "radio") && (q = vp);
          if (q && (q = q(e, k))) {
            Us(z, q, n, D);
            break e;
          }
          re && re(e, O, k), e === "focusout" && (re = O._wrapperState) && re.controlled && O.type === "number" && gt(O, "number", O.value);
        }
        switch (re = k ? vr(k) : window, e) {
          case "focusin":
            (Fs(re) || re.contentEditable === "true") && (dr = re, mi = k, Jr = null);
            break;
          case "focusout":
            Jr = mi = dr = null;
            break;
          case "mousedown":
            vi = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            vi = !1, Xs(z, n, D);
            break;
          case "selectionchange":
            if (wp)
              break;
          case "keydown":
          case "keyup":
            Xs(z, n, D);
        }
        var oe;
        if (ci)
          e: {
            switch (e) {
              case "compositionstart":
                var se = "onCompositionStart";
                break e;
              case "compositionend":
                se = "onCompositionEnd";
                break e;
              case "compositionupdate":
                se = "onCompositionUpdate";
                break e;
            }
            se = void 0;
          }
        else
          cr ? As(e, n) && (se = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (se = "onCompositionStart");
        se && (Ls && n.locale !== "ko" && (cr || se !== "onCompositionStart" ? se === "onCompositionEnd" && cr && (oe = Rs()) : (wn = D, oi = "value" in wn ? wn.value : wn.textContent, cr = !0)), re = Wo(k, se), 0 < re.length && (se = new Ds(se, e, null, n, D), z.push({ event: se, listeners: re }), oe ? se.data = oe : (oe = js(n), oe !== null && (se.data = oe)))), (oe = ap ? sp(e, n) : up(e, n)) && (k = Wo(k, "onBeforeInput"), 0 < k.length && (D = new Ds("onBeforeInput", "beforeinput", null, n, D), z.push({ event: D, listeners: k }), D.data = oe));
      }
      lu(z, t);
    });
  }
  function to(e, t, n) {
    return { instance: e, listener: t, currentTarget: n };
  }
  function Wo(e, t) {
    for (var n = t + "Capture", r = []; e !== null; ) {
      var l = e, i = l.stateNode;
      l.tag === 5 && i !== null && (l = i, i = Mr(e, n), i != null && r.unshift(to(e, i, l)), i = Mr(e, t), i != null && r.push(to(e, i, l))), e = e.return;
    }
    return r;
  }
  function pr(e) {
    if (e === null)
      return null;
    do
      e = e.return;
    while (e && e.tag !== 5);
    return e || null;
  }
  function au(e, t, n, r, l) {
    for (var i = t._reactName, u = []; n !== null && n !== r; ) {
      var p = n, g = p.alternate, k = p.stateNode;
      if (g !== null && g === r)
        break;
      p.tag === 5 && k !== null && (p = k, l ? (g = Mr(n, i), g != null && u.unshift(to(n, g, p))) : l || (g = Mr(n, i), g != null && u.push(to(n, g, p)))), n = n.return;
    }
    u.length !== 0 && e.push({ event: t, listeners: u });
  }
  var kp = /\r\n?/g, Cp = /\u0000|\uFFFD/g;
  function su(e) {
    return (typeof e == "string" ? e : "" + e).replace(kp, `
`).replace(Cp, "");
  }
  function Ho(e, t, n) {
    if (t = su(t), su(e) !== t && n)
      throw Error(a(425));
  }
  function Vo() {
  }
  var Ei = null, Si = null;
  function ki(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
  }
  var Ci = typeof setTimeout == "function" ? setTimeout : void 0, bp = typeof clearTimeout == "function" ? clearTimeout : void 0, uu = typeof Promise == "function" ? Promise : void 0, Pp = typeof queueMicrotask == "function" ? queueMicrotask : typeof uu < "u" ? function(e) {
    return uu.resolve(null).then(e).catch($p);
  } : Ci;
  function $p(e) {
    setTimeout(function() {
      throw e;
    });
  }
  function bi(e, t) {
    var n = t, r = 0;
    do {
      var l = n.nextSibling;
      if (e.removeChild(n), l && l.nodeType === 8)
        if (n = l.data, n === "/$") {
          if (r === 0) {
            e.removeChild(l), Vr(t);
            return;
          }
          r--;
        } else
          n !== "$" && n !== "$?" && n !== "$!" || r++;
      n = l;
    } while (n);
    Vr(t);
  }
  function En(e) {
    for (; e != null; e = e.nextSibling) {
      var t = e.nodeType;
      if (t === 1 || t === 3)
        break;
      if (t === 8) {
        if (t = e.data, t === "$" || t === "$!" || t === "$?")
          break;
        if (t === "/$")
          return null;
      }
    }
    return e;
  }
  function cu(e) {
    e = e.previousSibling;
    for (var t = 0; e; ) {
      if (e.nodeType === 8) {
        var n = e.data;
        if (n === "$" || n === "$!" || n === "$?") {
          if (t === 0)
            return e;
          t--;
        } else
          n === "/$" && t++;
      }
      e = e.previousSibling;
    }
    return null;
  }
  var mr = Math.random().toString(36).slice(2), Vt = "__reactFiber$" + mr, no = "__reactProps$" + mr, Jt = "__reactContainer$" + mr, Pi = "__reactEvents$" + mr, Np = "__reactListeners$" + mr, _p = "__reactHandles$" + mr;
  function Wn(e) {
    var t = e[Vt];
    if (t)
      return t;
    for (var n = e.parentNode; n; ) {
      if (t = n[Jt] || n[Vt]) {
        if (n = t.alternate, t.child !== null || n !== null && n.child !== null)
          for (e = cu(e); e !== null; ) {
            if (n = e[Vt])
              return n;
            e = cu(e);
          }
        return t;
      }
      e = n, n = e.parentNode;
    }
    return null;
  }
  function ro(e) {
    return e = e[Vt] || e[Jt], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
  }
  function vr(e) {
    if (e.tag === 5 || e.tag === 6)
      return e.stateNode;
    throw Error(a(33));
  }
  function Qo(e) {
    return e[no] || null;
  }
  var $i = [], hr = -1;
  function Sn(e) {
    return { current: e };
  }
  function Oe(e) {
    0 > hr || (e.current = $i[hr], $i[hr] = null, hr--);
  }
  function Re(e, t) {
    hr++, $i[hr] = e.current, e.current = t;
  }
  var kn = {}, ot = Sn(kn), dt = Sn(!1), Hn = kn;
  function gr(e, t) {
    var n = e.type.contextTypes;
    if (!n)
      return kn;
    var r = e.stateNode;
    if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
      return r.__reactInternalMemoizedMaskedChildContext;
    var l = {}, i;
    for (i in n)
      l[i] = t[i];
    return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = l), l;
  }
  function ft(e) {
    return e = e.childContextTypes, e != null;
  }
  function Yo() {
    Oe(dt), Oe(ot);
  }
  function du(e, t, n) {
    if (ot.current !== kn)
      throw Error(a(168));
    Re(ot, t), Re(dt, n);
  }
  function fu(e, t, n) {
    var r = e.stateNode;
    if (t = t.childContextTypes, typeof r.getChildContext != "function")
      return n;
    r = r.getChildContext();
    for (var l in r)
      if (!(l in t))
        throw Error(a(108, xe(e) || "Unknown", l));
    return m({}, n, r);
  }
  function Ko(e) {
    return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || kn, Hn = ot.current, Re(ot, e), Re(dt, dt.current), !0;
  }
  function pu(e, t, n) {
    var r = e.stateNode;
    if (!r)
      throw Error(a(169));
    n ? (e = fu(e, t, Hn), r.__reactInternalMemoizedMergedChildContext = e, Oe(dt), Oe(ot), Re(ot, e)) : Oe(dt), Re(dt, n);
  }
  var qt = null, Go = !1, Ni = !1;
  function mu(e) {
    qt === null ? qt = [e] : qt.push(e);
  }
  function Rp(e) {
    Go = !0, mu(e);
  }
  function Cn() {
    if (!Ni && qt !== null) {
      Ni = !0;
      var e = 0, t = $e;
      try {
        var n = qt;
        for ($e = 1; e < n.length; e++) {
          var r = n[e];
          do
            r = r(!0);
          while (r !== null);
        }
        qt = null, Go = !1;
      } catch (l) {
        throw qt !== null && (qt = qt.slice(e + 1)), hs(Xl, Cn), l;
      } finally {
        $e = t, Ni = !1;
      }
    }
    return null;
  }
  var yr = [], wr = 0, Xo = null, Zo = 0, bt = [], Pt = 0, Vn = null, en = 1, tn = "";
  function Qn(e, t) {
    yr[wr++] = Zo, yr[wr++] = Xo, Xo = e, Zo = t;
  }
  function vu(e, t, n) {
    bt[Pt++] = en, bt[Pt++] = tn, bt[Pt++] = Vn, Vn = e;
    var r = en;
    e = tn;
    var l = 32 - Ot(r) - 1;
    r &= ~(1 << l), n += 1;
    var i = 32 - Ot(t) + l;
    if (30 < i) {
      var u = l - l % 5;
      i = (r & (1 << u) - 1).toString(32), r >>= u, l -= u, en = 1 << 32 - Ot(t) + l | n << l | r, tn = i + e;
    } else
      en = 1 << i | n << l | r, tn = e;
  }
  function _i(e) {
    e.return !== null && (Qn(e, 1), vu(e, 1, 0));
  }
  function Ri(e) {
    for (; e === Xo; )
      Xo = yr[--wr], yr[wr] = null, Zo = yr[--wr], yr[wr] = null;
    for (; e === Vn; )
      Vn = bt[--Pt], bt[Pt] = null, tn = bt[--Pt], bt[Pt] = null, en = bt[--Pt], bt[Pt] = null;
  }
  var Et = null, St = null, Me = !1, zt = null;
  function hu(e, t) {
    var n = Rt(5, null, null, 0);
    n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n);
  }
  function gu(e, t) {
    switch (e.tag) {
      case 5:
        var n = e.type;
        return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, Et = e, St = En(t.firstChild), !0) : !1;
      case 6:
        return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, Et = e, St = null, !0) : !1;
      case 13:
        return t = t.nodeType !== 8 ? null : t, t !== null ? (n = Vn !== null ? { id: en, overflow: tn } : null, e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }, n = Rt(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, Et = e, St = null, !0) : !1;
      default:
        return !1;
    }
  }
  function Ti(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
  }
  function Oi(e) {
    if (Me) {
      var t = St;
      if (t) {
        var n = t;
        if (!gu(e, t)) {
          if (Ti(e))
            throw Error(a(418));
          t = En(n.nextSibling);
          var r = Et;
          t && gu(e, t) ? hu(r, n) : (e.flags = e.flags & -4097 | 2, Me = !1, Et = e);
        }
      } else {
        if (Ti(e))
          throw Error(a(418));
        e.flags = e.flags & -4097 | 2, Me = !1, Et = e;
      }
    }
  }
  function yu(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
      e = e.return;
    Et = e;
  }
  function Jo(e) {
    if (e !== Et)
      return !1;
    if (!Me)
      return yu(e), Me = !0, !1;
    var t;
    if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !ki(e.type, e.memoizedProps)), t && (t = St)) {
      if (Ti(e))
        throw wu(), Error(a(418));
      for (; t; )
        hu(e, t), t = En(t.nextSibling);
    }
    if (yu(e), e.tag === 13) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e)
        throw Error(a(317));
      e: {
        for (e = e.nextSibling, t = 0; e; ) {
          if (e.nodeType === 8) {
            var n = e.data;
            if (n === "/$") {
              if (t === 0) {
                St = En(e.nextSibling);
                break e;
              }
              t--;
            } else
              n !== "$" && n !== "$!" && n !== "$?" || t++;
          }
          e = e.nextSibling;
        }
        St = null;
      }
    } else
      St = Et ? En(e.stateNode.nextSibling) : null;
    return !0;
  }
  function wu() {
    for (var e = St; e; )
      e = En(e.nextSibling);
  }
  function xr() {
    St = Et = null, Me = !1;
  }
  function Di(e) {
    zt === null ? zt = [e] : zt.push(e);
  }
  var Tp = j.ReactCurrentBatchConfig;
  function Lt(e, t) {
    if (e && e.defaultProps) {
      t = m({}, t), e = e.defaultProps;
      for (var n in e)
        t[n] === void 0 && (t[n] = e[n]);
      return t;
    }
    return t;
  }
  var qo = Sn(null), el = null, Er = null, zi = null;
  function Li() {
    zi = Er = el = null;
  }
  function Mi(e) {
    var t = qo.current;
    Oe(qo), e._currentValue = t;
  }
  function Ii(e, t, n) {
    for (; e !== null; ) {
      var r = e.alternate;
      if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n)
        break;
      e = e.return;
    }
  }
  function Sr(e, t) {
    el = e, zi = Er = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (pt = !0), e.firstContext = null);
  }
  function $t(e) {
    var t = e._currentValue;
    if (zi !== e)
      if (e = { context: e, memoizedValue: t, next: null }, Er === null) {
        if (el === null)
          throw Error(a(308));
        Er = e, el.dependencies = { lanes: 0, firstContext: e };
      } else
        Er = Er.next = e;
    return t;
  }
  var Yn = null;
  function Ai(e) {
    Yn === null ? Yn = [e] : Yn.push(e);
  }
  function xu(e, t, n, r) {
    var l = t.interleaved;
    return l === null ? (n.next = n, Ai(t)) : (n.next = l.next, l.next = n), t.interleaved = n, nn(e, r);
  }
  function nn(e, t) {
    e.lanes |= t;
    var n = e.alternate;
    for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
      e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
    return n.tag === 3 ? n.stateNode : null;
  }
  var bn = !1;
  function ji(e) {
    e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
  }
  function Eu(e, t) {
    e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
  }
  function rn(e, t) {
    return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
  }
  function Pn(e, t, n) {
    var r = e.updateQueue;
    if (r === null)
      return null;
    if (r = r.shared, Ce & 2) {
      var l = r.pending;
      return l === null ? t.next = t : (t.next = l.next, l.next = t), r.pending = t, nn(e, n);
    }
    return l = r.interleaved, l === null ? (t.next = t, Ai(r)) : (t.next = l.next, l.next = t), r.interleaved = t, nn(e, n);
  }
  function tl(e, t, n) {
    if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
      var r = t.lanes;
      r &= e.pendingLanes, n |= r, t.lanes = n, ql(e, n);
    }
  }
  function Su(e, t) {
    var n = e.updateQueue, r = e.alternate;
    if (r !== null && (r = r.updateQueue, n === r)) {
      var l = null, i = null;
      if (n = n.firstBaseUpdate, n !== null) {
        do {
          var u = { eventTime: n.eventTime, lane: n.lane, tag: n.tag, payload: n.payload, callback: n.callback, next: null };
          i === null ? l = i = u : i = i.next = u, n = n.next;
        } while (n !== null);
        i === null ? l = i = t : i = i.next = t;
      } else
        l = i = t;
      n = { baseState: r.baseState, firstBaseUpdate: l, lastBaseUpdate: i, shared: r.shared, effects: r.effects }, e.updateQueue = n;
      return;
    }
    e = n.lastBaseUpdate, e === null ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t;
  }
  function nl(e, t, n, r) {
    var l = e.updateQueue;
    bn = !1;
    var i = l.firstBaseUpdate, u = l.lastBaseUpdate, p = l.shared.pending;
    if (p !== null) {
      l.shared.pending = null;
      var g = p, k = g.next;
      g.next = null, u === null ? i = k : u.next = k, u = g;
      var D = e.alternate;
      D !== null && (D = D.updateQueue, p = D.lastBaseUpdate, p !== u && (p === null ? D.firstBaseUpdate = k : p.next = k, D.lastBaseUpdate = g));
    }
    if (i !== null) {
      var z = l.baseState;
      u = 0, D = k = g = null, p = i;
      do {
        var O = p.lane, Q = p.eventTime;
        if ((r & O) === O) {
          D !== null && (D = D.next = {
            eventTime: Q,
            lane: 0,
            tag: p.tag,
            payload: p.payload,
            callback: p.callback,
            next: null
          });
          e: {
            var X = e, Z = p;
            switch (O = t, Q = n, Z.tag) {
              case 1:
                if (X = Z.payload, typeof X == "function") {
                  z = X.call(Q, z, O);
                  break e;
                }
                z = X;
                break e;
              case 3:
                X.flags = X.flags & -65537 | 128;
              case 0:
                if (X = Z.payload, O = typeof X == "function" ? X.call(Q, z, O) : X, O == null)
                  break e;
                z = m({}, z, O);
                break e;
              case 2:
                bn = !0;
            }
          }
          p.callback !== null && p.lane !== 0 && (e.flags |= 64, O = l.effects, O === null ? l.effects = [p] : O.push(p));
        } else
          Q = { eventTime: Q, lane: O, tag: p.tag, payload: p.payload, callback: p.callback, next: null }, D === null ? (k = D = Q, g = z) : D = D.next = Q, u |= O;
        if (p = p.next, p === null) {
          if (p = l.shared.pending, p === null)
            break;
          O = p, p = O.next, O.next = null, l.lastBaseUpdate = O, l.shared.pending = null;
        }
      } while (!0);
      if (D === null && (g = z), l.baseState = g, l.firstBaseUpdate = k, l.lastBaseUpdate = D, t = l.shared.interleaved, t !== null) {
        l = t;
        do
          u |= l.lane, l = l.next;
        while (l !== t);
      } else
        i === null && (l.shared.lanes = 0);
      Xn |= u, e.lanes = u, e.memoizedState = z;
    }
  }
  function ku(e, t, n) {
    if (e = t.effects, t.effects = null, e !== null)
      for (t = 0; t < e.length; t++) {
        var r = e[t], l = r.callback;
        if (l !== null) {
          if (r.callback = null, r = n, typeof l != "function")
            throw Error(a(191, l));
          l.call(r);
        }
      }
  }
  var Cu = new o.Component().refs;
  function Fi(e, t, n, r) {
    t = e.memoizedState, n = n(r, t), n = n == null ? t : m({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
  }
  var rl = { isMounted: function(e) {
    return (e = e._reactInternals) ? Bn(e) === e : !1;
  }, enqueueSetState: function(e, t, n) {
    e = e._reactInternals;
    var r = ut(), l = Rn(e), i = rn(r, l);
    i.payload = t, n != null && (i.callback = n), t = Pn(e, i, l), t !== null && (At(t, e, l, r), tl(t, e, l));
  }, enqueueReplaceState: function(e, t, n) {
    e = e._reactInternals;
    var r = ut(), l = Rn(e), i = rn(r, l);
    i.tag = 1, i.payload = t, n != null && (i.callback = n), t = Pn(e, i, l), t !== null && (At(t, e, l, r), tl(t, e, l));
  }, enqueueForceUpdate: function(e, t) {
    e = e._reactInternals;
    var n = ut(), r = Rn(e), l = rn(n, r);
    l.tag = 2, t != null && (l.callback = t), t = Pn(e, l, r), t !== null && (At(t, e, r, n), tl(t, e, r));
  } };
  function bu(e, t, n, r, l, i, u) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, i, u) : t.prototype && t.prototype.isPureReactComponent ? !Zr(n, r) || !Zr(l, i) : !0;
  }
  function Pu(e, t, n) {
    var r = !1, l = kn, i = t.contextType;
    return typeof i == "object" && i !== null ? i = $t(i) : (l = ft(t) ? Hn : ot.current, r = t.contextTypes, i = (r = r != null) ? gr(e, l) : kn), t = new t(n, i), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = rl, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = l, e.__reactInternalMemoizedMaskedChildContext = i), t;
  }
  function $u(e, t, n, r) {
    e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && rl.enqueueReplaceState(t, t.state, null);
  }
  function Ui(e, t, n, r) {
    var l = e.stateNode;
    l.props = n, l.state = e.memoizedState, l.refs = Cu, ji(e);
    var i = t.contextType;
    typeof i == "object" && i !== null ? l.context = $t(i) : (i = ft(t) ? Hn : ot.current, l.context = gr(e, i)), l.state = e.memoizedState, i = t.getDerivedStateFromProps, typeof i == "function" && (Fi(e, t, i, n), l.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof l.getSnapshotBeforeUpdate == "function" || typeof l.UNSAFE_componentWillMount != "function" && typeof l.componentWillMount != "function" || (t = l.state, typeof l.componentWillMount == "function" && l.componentWillMount(), typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount(), t !== l.state && rl.enqueueReplaceState(l, l.state, null), nl(e, n, l, r), l.state = e.memoizedState), typeof l.componentDidMount == "function" && (e.flags |= 4194308);
  }
  function oo(e, t, n) {
    if (e = n.ref, e !== null && typeof e != "function" && typeof e != "object") {
      if (n._owner) {
        if (n = n._owner, n) {
          if (n.tag !== 1)
            throw Error(a(309));
          var r = n.stateNode;
        }
        if (!r)
          throw Error(a(147, e));
        var l = r, i = "" + e;
        return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === i ? t.ref : (t = function(u) {
          var p = l.refs;
          p === Cu && (p = l.refs = {}), u === null ? delete p[i] : p[i] = u;
        }, t._stringRef = i, t);
      }
      if (typeof e != "string")
        throw Error(a(284));
      if (!n._owner)
        throw Error(a(290, e));
    }
    return e;
  }
  function ol(e, t) {
    throw e = Object.prototype.toString.call(t), Error(a(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
  }
  function Nu(e) {
    var t = e._init;
    return t(e._payload);
  }
  function _u(e) {
    function t(E, w) {
      if (e) {
        var S = E.deletions;
        S === null ? (E.deletions = [w], E.flags |= 16) : S.push(w);
      }
    }
    function n(E, w) {
      if (!e)
        return null;
      for (; w !== null; )
        t(E, w), w = w.sibling;
      return null;
    }
    function r(E, w) {
      for (E = /* @__PURE__ */ new Map(); w !== null; )
        w.key !== null ? E.set(w.key, w) : E.set(w.index, w), w = w.sibling;
      return E;
    }
    function l(E, w) {
      return E = On(E, w), E.index = 0, E.sibling = null, E;
    }
    function i(E, w, S) {
      return E.index = S, e ? (S = E.alternate, S !== null ? (S = S.index, S < w ? (E.flags |= 2, w) : S) : (E.flags |= 2, w)) : (E.flags |= 1048576, w);
    }
    function u(E) {
      return e && E.alternate === null && (E.flags |= 2), E;
    }
    function p(E, w, S, M) {
      return w === null || w.tag !== 6 ? (w = Ca(S, E.mode, M), w.return = E, w) : (w = l(w, S), w.return = E, w);
    }
    function g(E, w, S, M) {
      var q = S.type;
      return q === ie ? D(E, w, S.props.children, M, S.key) : w !== null && (w.elementType === q || typeof q == "object" && q !== null && q.$$typeof === ge && Nu(q) === w.type) ? (M = l(w, S.props), M.ref = oo(E, w, S), M.return = E, M) : (M = kl(S.type, S.key, S.props, null, E.mode, M), M.ref = oo(E, w, S), M.return = E, M);
    }
    function k(E, w, S, M) {
      return w === null || w.tag !== 4 || w.stateNode.containerInfo !== S.containerInfo || w.stateNode.implementation !== S.implementation ? (w = ba(S, E.mode, M), w.return = E, w) : (w = l(w, S.children || []), w.return = E, w);
    }
    function D(E, w, S, M, q) {
      return w === null || w.tag !== 7 ? (w = er(S, E.mode, M, q), w.return = E, w) : (w = l(w, S), w.return = E, w);
    }
    function z(E, w, S) {
      if (typeof w == "string" && w !== "" || typeof w == "number")
        return w = Ca("" + w, E.mode, S), w.return = E, w;
      if (typeof w == "object" && w !== null) {
        switch (w.$$typeof) {
          case W:
            return S = kl(w.type, w.key, w.props, null, E.mode, S), S.ref = oo(E, null, w), S.return = E, S;
          case ne:
            return w = ba(w, E.mode, S), w.return = E, w;
          case ge:
            var M = w._init;
            return z(E, M(w._payload), S);
        }
        if (Tt(w) || F(w))
          return w = er(w, E.mode, S, null), w.return = E, w;
        ol(E, w);
      }
      return null;
    }
    function O(E, w, S, M) {
      var q = w !== null ? w.key : null;
      if (typeof S == "string" && S !== "" || typeof S == "number")
        return q !== null ? null : p(E, w, "" + S, M);
      if (typeof S == "object" && S !== null) {
        switch (S.$$typeof) {
          case W:
            return S.key === q ? g(E, w, S, M) : null;
          case ne:
            return S.key === q ? k(E, w, S, M) : null;
          case ge:
            return q = S._init, O(
              E,
              w,
              q(S._payload),
              M
            );
        }
        if (Tt(S) || F(S))
          return q !== null ? null : D(E, w, S, M, null);
        ol(E, S);
      }
      return null;
    }
    function Q(E, w, S, M, q) {
      if (typeof M == "string" && M !== "" || typeof M == "number")
        return E = E.get(S) || null, p(w, E, "" + M, q);
      if (typeof M == "object" && M !== null) {
        switch (M.$$typeof) {
          case W:
            return E = E.get(M.key === null ? S : M.key) || null, g(w, E, M, q);
          case ne:
            return E = E.get(M.key === null ? S : M.key) || null, k(w, E, M, q);
          case ge:
            var re = M._init;
            return Q(E, w, S, re(M._payload), q);
        }
        if (Tt(M) || F(M))
          return E = E.get(S) || null, D(w, E, M, q, null);
        ol(w, M);
      }
      return null;
    }
    function X(E, w, S, M) {
      for (var q = null, re = null, oe = w, se = w = 0, Ze = null; oe !== null && se < S.length; se++) {
        oe.index > se ? (Ze = oe, oe = null) : Ze = oe.sibling;
        var be = O(E, oe, S[se], M);
        if (be === null) {
          oe === null && (oe = Ze);
          break;
        }
        e && oe && be.alternate === null && t(E, oe), w = i(be, w, se), re === null ? q = be : re.sibling = be, re = be, oe = Ze;
      }
      if (se === S.length)
        return n(E, oe), Me && Qn(E, se), q;
      if (oe === null) {
        for (; se < S.length; se++)
          oe = z(E, S[se], M), oe !== null && (w = i(oe, w, se), re === null ? q = oe : re.sibling = oe, re = oe);
        return Me && Qn(E, se), q;
      }
      for (oe = r(E, oe); se < S.length; se++)
        Ze = Q(oe, E, se, S[se], M), Ze !== null && (e && Ze.alternate !== null && oe.delete(Ze.key === null ? se : Ze.key), w = i(Ze, w, se), re === null ? q = Ze : re.sibling = Ze, re = Ze);
      return e && oe.forEach(function(Dn) {
        return t(E, Dn);
      }), Me && Qn(E, se), q;
    }
    function Z(E, w, S, M) {
      var q = F(S);
      if (typeof q != "function")
        throw Error(a(150));
      if (S = q.call(S), S == null)
        throw Error(a(151));
      for (var re = q = null, oe = w, se = w = 0, Ze = null, be = S.next(); oe !== null && !be.done; se++, be = S.next()) {
        oe.index > se ? (Ze = oe, oe = null) : Ze = oe.sibling;
        var Dn = O(E, oe, be.value, M);
        if (Dn === null) {
          oe === null && (oe = Ze);
          break;
        }
        e && oe && Dn.alternate === null && t(E, oe), w = i(Dn, w, se), re === null ? q = Dn : re.sibling = Dn, re = Dn, oe = Ze;
      }
      if (be.done)
        return n(
          E,
          oe
        ), Me && Qn(E, se), q;
      if (oe === null) {
        for (; !be.done; se++, be = S.next())
          be = z(E, be.value, M), be !== null && (w = i(be, w, se), re === null ? q = be : re.sibling = be, re = be);
        return Me && Qn(E, se), q;
      }
      for (oe = r(E, oe); !be.done; se++, be = S.next())
        be = Q(oe, E, se, be.value, M), be !== null && (e && be.alternate !== null && oe.delete(be.key === null ? se : be.key), w = i(be, w, se), re === null ? q = be : re.sibling = be, re = be);
      return e && oe.forEach(function(cm) {
        return t(E, cm);
      }), Me && Qn(E, se), q;
    }
    function Ue(E, w, S, M) {
      if (typeof S == "object" && S !== null && S.type === ie && S.key === null && (S = S.props.children), typeof S == "object" && S !== null) {
        switch (S.$$typeof) {
          case W:
            e: {
              for (var q = S.key, re = w; re !== null; ) {
                if (re.key === q) {
                  if (q = S.type, q === ie) {
                    if (re.tag === 7) {
                      n(E, re.sibling), w = l(re, S.props.children), w.return = E, E = w;
                      break e;
                    }
                  } else if (re.elementType === q || typeof q == "object" && q !== null && q.$$typeof === ge && Nu(q) === re.type) {
                    n(E, re.sibling), w = l(re, S.props), w.ref = oo(E, re, S), w.return = E, E = w;
                    break e;
                  }
                  n(E, re);
                  break;
                } else
                  t(E, re);
                re = re.sibling;
              }
              S.type === ie ? (w = er(S.props.children, E.mode, M, S.key), w.return = E, E = w) : (M = kl(S.type, S.key, S.props, null, E.mode, M), M.ref = oo(E, w, S), M.return = E, E = M);
            }
            return u(E);
          case ne:
            e: {
              for (re = S.key; w !== null; ) {
                if (w.key === re)
                  if (w.tag === 4 && w.stateNode.containerInfo === S.containerInfo && w.stateNode.implementation === S.implementation) {
                    n(E, w.sibling), w = l(w, S.children || []), w.return = E, E = w;
                    break e;
                  } else {
                    n(E, w);
                    break;
                  }
                else
                  t(E, w);
                w = w.sibling;
              }
              w = ba(S, E.mode, M), w.return = E, E = w;
            }
            return u(E);
          case ge:
            return re = S._init, Ue(E, w, re(S._payload), M);
        }
        if (Tt(S))
          return X(E, w, S, M);
        if (F(S))
          return Z(E, w, S, M);
        ol(E, S);
      }
      return typeof S == "string" && S !== "" || typeof S == "number" ? (S = "" + S, w !== null && w.tag === 6 ? (n(E, w.sibling), w = l(w, S), w.return = E, E = w) : (n(E, w), w = Ca(S, E.mode, M), w.return = E, E = w), u(E)) : n(E, w);
    }
    return Ue;
  }
  var kr = _u(!0), Ru = _u(!1), lo = {}, Qt = Sn(lo), io = Sn(lo), ao = Sn(lo);
  function Kn(e) {
    if (e === lo)
      throw Error(a(174));
    return e;
  }
  function Bi(e, t) {
    switch (Re(ao, t), Re(io, e), Re(Qt, lo), e = t.nodeType, e) {
      case 9:
      case 11:
        t = (t = t.documentElement) ? t.namespaceURI : dn(null, "");
        break;
      default:
        e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = dn(t, e);
    }
    Oe(Qt), Re(Qt, t);
  }
  function Cr() {
    Oe(Qt), Oe(io), Oe(ao);
  }
  function Tu(e) {
    Kn(ao.current);
    var t = Kn(Qt.current), n = dn(t, e.type);
    t !== n && (Re(io, e), Re(Qt, n));
  }
  function Wi(e) {
    io.current === e && (Oe(Qt), Oe(io));
  }
  var Ie = Sn(0);
  function ll(e) {
    for (var t = e; t !== null; ) {
      if (t.tag === 13) {
        var n = t.memoizedState;
        if (n !== null && (n = n.dehydrated, n === null || n.data === "$?" || n.data === "$!"))
          return t;
      } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
        if (t.flags & 128)
          return t;
      } else if (t.child !== null) {
        t.child.return = t, t = t.child;
        continue;
      }
      if (t === e)
        break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e)
          return null;
        t = t.return;
      }
      t.sibling.return = t.return, t = t.sibling;
    }
    return null;
  }
  var Hi = [];
  function Vi() {
    for (var e = 0; e < Hi.length; e++)
      Hi[e]._workInProgressVersionPrimary = null;
    Hi.length = 0;
  }
  var il = j.ReactCurrentDispatcher, Qi = j.ReactCurrentBatchConfig, Gn = 0, Ae = null, Qe = null, Ge = null, al = !1, so = !1, uo = 0, Op = 0;
  function lt() {
    throw Error(a(321));
  }
  function Yi(e, t) {
    if (t === null)
      return !1;
    for (var n = 0; n < t.length && n < e.length; n++)
      if (!Dt(e[n], t[n]))
        return !1;
    return !0;
  }
  function Ki(e, t, n, r, l, i) {
    if (Gn = i, Ae = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, il.current = e === null || e.memoizedState === null ? Mp : Ip, e = n(r, l), so) {
      i = 0;
      do {
        if (so = !1, uo = 0, 25 <= i)
          throw Error(a(301));
        i += 1, Ge = Qe = null, t.updateQueue = null, il.current = Ap, e = n(r, l);
      } while (so);
    }
    if (il.current = cl, t = Qe !== null && Qe.next !== null, Gn = 0, Ge = Qe = Ae = null, al = !1, t)
      throw Error(a(300));
    return e;
  }
  function Gi() {
    var e = uo !== 0;
    return uo = 0, e;
  }
  function Yt() {
    var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return Ge === null ? Ae.memoizedState = Ge = e : Ge = Ge.next = e, Ge;
  }
  function Nt() {
    if (Qe === null) {
      var e = Ae.alternate;
      e = e !== null ? e.memoizedState : null;
    } else
      e = Qe.next;
    var t = Ge === null ? Ae.memoizedState : Ge.next;
    if (t !== null)
      Ge = t, Qe = e;
    else {
      if (e === null)
        throw Error(a(310));
      Qe = e, e = { memoizedState: Qe.memoizedState, baseState: Qe.baseState, baseQueue: Qe.baseQueue, queue: Qe.queue, next: null }, Ge === null ? Ae.memoizedState = Ge = e : Ge = Ge.next = e;
    }
    return Ge;
  }
  function co(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function Xi(e) {
    var t = Nt(), n = t.queue;
    if (n === null)
      throw Error(a(311));
    n.lastRenderedReducer = e;
    var r = Qe, l = r.baseQueue, i = n.pending;
    if (i !== null) {
      if (l !== null) {
        var u = l.next;
        l.next = i.next, i.next = u;
      }
      r.baseQueue = l = i, n.pending = null;
    }
    if (l !== null) {
      i = l.next, r = r.baseState;
      var p = u = null, g = null, k = i;
      do {
        var D = k.lane;
        if ((Gn & D) === D)
          g !== null && (g = g.next = { lane: 0, action: k.action, hasEagerState: k.hasEagerState, eagerState: k.eagerState, next: null }), r = k.hasEagerState ? k.eagerState : e(r, k.action);
        else {
          var z = {
            lane: D,
            action: k.action,
            hasEagerState: k.hasEagerState,
            eagerState: k.eagerState,
            next: null
          };
          g === null ? (p = g = z, u = r) : g = g.next = z, Ae.lanes |= D, Xn |= D;
        }
        k = k.next;
      } while (k !== null && k !== i);
      g === null ? u = r : g.next = p, Dt(r, t.memoizedState) || (pt = !0), t.memoizedState = r, t.baseState = u, t.baseQueue = g, n.lastRenderedState = r;
    }
    if (e = n.interleaved, e !== null) {
      l = e;
      do
        i = l.lane, Ae.lanes |= i, Xn |= i, l = l.next;
      while (l !== e);
    } else
      l === null && (n.lanes = 0);
    return [t.memoizedState, n.dispatch];
  }
  function Zi(e) {
    var t = Nt(), n = t.queue;
    if (n === null)
      throw Error(a(311));
    n.lastRenderedReducer = e;
    var r = n.dispatch, l = n.pending, i = t.memoizedState;
    if (l !== null) {
      n.pending = null;
      var u = l = l.next;
      do
        i = e(i, u.action), u = u.next;
      while (u !== l);
      Dt(i, t.memoizedState) || (pt = !0), t.memoizedState = i, t.baseQueue === null && (t.baseState = i), n.lastRenderedState = i;
    }
    return [i, r];
  }
  function Ou() {
  }
  function Du(e, t) {
    var n = Ae, r = Nt(), l = t(), i = !Dt(r.memoizedState, l);
    if (i && (r.memoizedState = l, pt = !0), r = r.queue, Ji(Mu.bind(null, n, r, e), [e]), r.getSnapshot !== t || i || Ge !== null && Ge.memoizedState.tag & 1) {
      if (n.flags |= 2048, fo(9, Lu.bind(null, n, r, l, t), void 0, null), Xe === null)
        throw Error(a(349));
      Gn & 30 || zu(n, t, l);
    }
    return l;
  }
  function zu(e, t, n) {
    e.flags |= 16384, e = { getSnapshot: t, value: n }, t = Ae.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, Ae.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
  }
  function Lu(e, t, n, r) {
    t.value = n, t.getSnapshot = r, Iu(t) && Au(e);
  }
  function Mu(e, t, n) {
    return n(function() {
      Iu(t) && Au(e);
    });
  }
  function Iu(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var n = t();
      return !Dt(e, n);
    } catch {
      return !0;
    }
  }
  function Au(e) {
    var t = nn(e, 1);
    t !== null && At(t, e, 1, -1);
  }
  function ju(e) {
    var t = Yt();
    return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: co, lastRenderedState: e }, t.queue = e, e = e.dispatch = Lp.bind(null, Ae, e), [t.memoizedState, e];
  }
  function fo(e, t, n, r) {
    return e = { tag: e, create: t, destroy: n, deps: r, next: null }, t = Ae.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, Ae.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e;
  }
  function Fu() {
    return Nt().memoizedState;
  }
  function sl(e, t, n, r) {
    var l = Yt();
    Ae.flags |= e, l.memoizedState = fo(1 | t, n, void 0, r === void 0 ? null : r);
  }
  function ul(e, t, n, r) {
    var l = Nt();
    r = r === void 0 ? null : r;
    var i = void 0;
    if (Qe !== null) {
      var u = Qe.memoizedState;
      if (i = u.destroy, r !== null && Yi(r, u.deps)) {
        l.memoizedState = fo(t, n, i, r);
        return;
      }
    }
    Ae.flags |= e, l.memoizedState = fo(1 | t, n, i, r);
  }
  function Uu(e, t) {
    return sl(8390656, 8, e, t);
  }
  function Ji(e, t) {
    return ul(2048, 8, e, t);
  }
  function Bu(e, t) {
    return ul(4, 2, e, t);
  }
  function Wu(e, t) {
    return ul(4, 4, e, t);
  }
  function Hu(e, t) {
    if (typeof t == "function")
      return e = e(), t(e), function() {
        t(null);
      };
    if (t != null)
      return e = e(), t.current = e, function() {
        t.current = null;
      };
  }
  function Vu(e, t, n) {
    return n = n != null ? n.concat([e]) : null, ul(4, 4, Hu.bind(null, t, e), n);
  }
  function qi() {
  }
  function Qu(e, t) {
    var n = Nt();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && Yi(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e);
  }
  function Yu(e, t) {
    var n = Nt();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && Yi(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e);
  }
  function Ku(e, t, n) {
    return Gn & 21 ? (Dt(n, t) || (n = xs(), Ae.lanes |= n, Xn |= n, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, pt = !0), e.memoizedState = n);
  }
  function Dp(e, t) {
    var n = $e;
    $e = n !== 0 && 4 > n ? n : 4, e(!0);
    var r = Qi.transition;
    Qi.transition = {};
    try {
      e(!1), t();
    } finally {
      $e = n, Qi.transition = r;
    }
  }
  function Gu() {
    return Nt().memoizedState;
  }
  function zp(e, t, n) {
    var r = Rn(e);
    if (n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }, Xu(e))
      Zu(t, n);
    else if (n = xu(e, t, n, r), n !== null) {
      var l = ut();
      At(n, e, r, l), Ju(n, t, r);
    }
  }
  function Lp(e, t, n) {
    var r = Rn(e), l = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
    if (Xu(e))
      Zu(t, l);
    else {
      var i = e.alternate;
      if (e.lanes === 0 && (i === null || i.lanes === 0) && (i = t.lastRenderedReducer, i !== null))
        try {
          var u = t.lastRenderedState, p = i(u, n);
          if (l.hasEagerState = !0, l.eagerState = p, Dt(p, u)) {
            var g = t.interleaved;
            g === null ? (l.next = l, Ai(t)) : (l.next = g.next, g.next = l), t.interleaved = l;
            return;
          }
        } catch {
        } finally {
        }
      n = xu(e, t, l, r), n !== null && (l = ut(), At(n, e, r, l), Ju(n, t, r));
    }
  }
  function Xu(e) {
    var t = e.alternate;
    return e === Ae || t !== null && t === Ae;
  }
  function Zu(e, t) {
    so = al = !0;
    var n = e.pending;
    n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
  }
  function Ju(e, t, n) {
    if (n & 4194240) {
      var r = t.lanes;
      r &= e.pendingLanes, n |= r, t.lanes = n, ql(e, n);
    }
  }
  var cl = { readContext: $t, useCallback: lt, useContext: lt, useEffect: lt, useImperativeHandle: lt, useInsertionEffect: lt, useLayoutEffect: lt, useMemo: lt, useReducer: lt, useRef: lt, useState: lt, useDebugValue: lt, useDeferredValue: lt, useTransition: lt, useMutableSource: lt, useSyncExternalStore: lt, useId: lt, unstable_isNewReconciler: !1 }, Mp = { readContext: $t, useCallback: function(e, t) {
    return Yt().memoizedState = [e, t === void 0 ? null : t], e;
  }, useContext: $t, useEffect: Uu, useImperativeHandle: function(e, t, n) {
    return n = n != null ? n.concat([e]) : null, sl(
      4194308,
      4,
      Hu.bind(null, t, e),
      n
    );
  }, useLayoutEffect: function(e, t) {
    return sl(4194308, 4, e, t);
  }, useInsertionEffect: function(e, t) {
    return sl(4, 2, e, t);
  }, useMemo: function(e, t) {
    var n = Yt();
    return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e;
  }, useReducer: function(e, t, n) {
    var r = Yt();
    return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, r.queue = e, e = e.dispatch = zp.bind(null, Ae, e), [r.memoizedState, e];
  }, useRef: function(e) {
    var t = Yt();
    return e = { current: e }, t.memoizedState = e;
  }, useState: ju, useDebugValue: qi, useDeferredValue: function(e) {
    return Yt().memoizedState = e;
  }, useTransition: function() {
    var e = ju(!1), t = e[0];
    return e = Dp.bind(null, e[1]), Yt().memoizedState = e, [t, e];
  }, useMutableSource: function() {
  }, useSyncExternalStore: function(e, t, n) {
    var r = Ae, l = Yt();
    if (Me) {
      if (n === void 0)
        throw Error(a(407));
      n = n();
    } else {
      if (n = t(), Xe === null)
        throw Error(a(349));
      Gn & 30 || zu(r, t, n);
    }
    l.memoizedState = n;
    var i = { value: n, getSnapshot: t };
    return l.queue = i, Uu(Mu.bind(
      null,
      r,
      i,
      e
    ), [e]), r.flags |= 2048, fo(9, Lu.bind(null, r, i, n, t), void 0, null), n;
  }, useId: function() {
    var e = Yt(), t = Xe.identifierPrefix;
    if (Me) {
      var n = tn, r = en;
      n = (r & ~(1 << 32 - Ot(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = uo++, 0 < n && (t += "H" + n.toString(32)), t += ":";
    } else
      n = Op++, t = ":" + t + "r" + n.toString(32) + ":";
    return e.memoizedState = t;
  }, unstable_isNewReconciler: !1 }, Ip = {
    readContext: $t,
    useCallback: Qu,
    useContext: $t,
    useEffect: Ji,
    useImperativeHandle: Vu,
    useInsertionEffect: Bu,
    useLayoutEffect: Wu,
    useMemo: Yu,
    useReducer: Xi,
    useRef: Fu,
    useState: function() {
      return Xi(co);
    },
    useDebugValue: qi,
    useDeferredValue: function(e) {
      var t = Nt();
      return Ku(t, Qe.memoizedState, e);
    },
    useTransition: function() {
      var e = Xi(co)[0], t = Nt().memoizedState;
      return [e, t];
    },
    useMutableSource: Ou,
    useSyncExternalStore: Du,
    useId: Gu,
    unstable_isNewReconciler: !1
  }, Ap = { readContext: $t, useCallback: Qu, useContext: $t, useEffect: Ji, useImperativeHandle: Vu, useInsertionEffect: Bu, useLayoutEffect: Wu, useMemo: Yu, useReducer: Zi, useRef: Fu, useState: function() {
    return Zi(co);
  }, useDebugValue: qi, useDeferredValue: function(e) {
    var t = Nt();
    return Qe === null ? t.memoizedState = e : Ku(t, Qe.memoizedState, e);
  }, useTransition: function() {
    var e = Zi(co)[0], t = Nt().memoizedState;
    return [e, t];
  }, useMutableSource: Ou, useSyncExternalStore: Du, useId: Gu, unstable_isNewReconciler: !1 };
  function br(e, t) {
    try {
      var n = "", r = t;
      do
        n += Se(r), r = r.return;
      while (r);
      var l = n;
    } catch (i) {
      l = `
Error generating stack: ` + i.message + `
` + i.stack;
    }
    return { value: e, source: t, stack: l, digest: null };
  }
  function ea(e, t, n) {
    return { value: e, source: null, stack: n ?? null, digest: t ?? null };
  }
  function ta(e, t) {
    try {
      console.error(t.value);
    } catch (n) {
      setTimeout(function() {
        throw n;
      });
    }
  }
  var jp = typeof WeakMap == "function" ? WeakMap : Map;
  function qu(e, t, n) {
    n = rn(-1, n), n.tag = 3, n.payload = { element: null };
    var r = t.value;
    return n.callback = function() {
      gl || (gl = !0, ha = r), ta(e, t);
    }, n;
  }
  function ec(e, t, n) {
    n = rn(-1, n), n.tag = 3;
    var r = e.type.getDerivedStateFromError;
    if (typeof r == "function") {
      var l = t.value;
      n.payload = function() {
        return r(l);
      }, n.callback = function() {
        ta(e, t);
      };
    }
    var i = e.stateNode;
    return i !== null && typeof i.componentDidCatch == "function" && (n.callback = function() {
      ta(e, t), typeof r != "function" && (Nn === null ? Nn = /* @__PURE__ */ new Set([this]) : Nn.add(this));
      var u = t.stack;
      this.componentDidCatch(t.value, { componentStack: u !== null ? u : "" });
    }), n;
  }
  function tc(e, t, n) {
    var r = e.pingCache;
    if (r === null) {
      r = e.pingCache = new jp();
      var l = /* @__PURE__ */ new Set();
      r.set(t, l);
    } else
      l = r.get(t), l === void 0 && (l = /* @__PURE__ */ new Set(), r.set(t, l));
    l.has(n) || (l.add(n), e = qp.bind(null, e, t, n), t.then(e, e));
  }
  function nc(e) {
    do {
      var t;
      if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t)
        return e;
      e = e.return;
    } while (e !== null);
    return null;
  }
  function rc(e, t, n, r, l) {
    return e.mode & 1 ? (e.flags |= 65536, e.lanes = l, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = rn(-1, 1), t.tag = 2, Pn(n, t, 1))), n.lanes |= 1), e);
  }
  var Fp = j.ReactCurrentOwner, pt = !1;
  function st(e, t, n, r) {
    t.child = e === null ? Ru(t, null, n, r) : kr(t, e.child, n, r);
  }
  function oc(e, t, n, r, l) {
    n = n.render;
    var i = t.ref;
    return Sr(t, l), r = Ki(e, t, n, r, i, l), n = Gi(), e !== null && !pt ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l, on(e, t, l)) : (Me && n && _i(t), t.flags |= 1, st(e, t, r, l), t.child);
  }
  function lc(e, t, n, r, l) {
    if (e === null) {
      var i = n.type;
      return typeof i == "function" && !ka(i) && i.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = i, ic(e, t, i, r, l)) : (e = kl(n.type, null, r, t, t.mode, l), e.ref = t.ref, e.return = t, t.child = e);
    }
    if (i = e.child, !(e.lanes & l)) {
      var u = i.memoizedProps;
      if (n = n.compare, n = n !== null ? n : Zr, n(u, r) && e.ref === t.ref)
        return on(e, t, l);
    }
    return t.flags |= 1, e = On(i, r), e.ref = t.ref, e.return = t, t.child = e;
  }
  function ic(e, t, n, r, l) {
    if (e !== null) {
      var i = e.memoizedProps;
      if (Zr(i, r) && e.ref === t.ref)
        if (pt = !1, t.pendingProps = r = i, (e.lanes & l) !== 0)
          e.flags & 131072 && (pt = !0);
        else
          return t.lanes = e.lanes, on(e, t, l);
    }
    return na(e, t, n, r, l);
  }
  function ac(e, t, n) {
    var r = t.pendingProps, l = r.children, i = e !== null ? e.memoizedState : null;
    if (r.mode === "hidden")
      if (!(t.mode & 1))
        t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, Re($r, kt), kt |= n;
      else {
        if (!(n & 1073741824))
          return e = i !== null ? i.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, Re($r, kt), kt |= e, null;
        t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = i !== null ? i.baseLanes : n, Re($r, kt), kt |= r;
      }
    else
      i !== null ? (r = i.baseLanes | n, t.memoizedState = null) : r = n, Re($r, kt), kt |= r;
    return st(e, t, l, n), t.child;
  }
  function sc(e, t) {
    var n = t.ref;
    (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
  }
  function na(e, t, n, r, l) {
    var i = ft(n) ? Hn : ot.current;
    return i = gr(t, i), Sr(t, l), n = Ki(e, t, n, r, i, l), r = Gi(), e !== null && !pt ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l, on(e, t, l)) : (Me && r && _i(t), t.flags |= 1, st(e, t, n, l), t.child);
  }
  function uc(e, t, n, r, l) {
    if (ft(n)) {
      var i = !0;
      Ko(t);
    } else
      i = !1;
    if (Sr(t, l), t.stateNode === null)
      fl(e, t), Pu(t, n, r), Ui(t, n, r, l), r = !0;
    else if (e === null) {
      var u = t.stateNode, p = t.memoizedProps;
      u.props = p;
      var g = u.context, k = n.contextType;
      typeof k == "object" && k !== null ? k = $t(k) : (k = ft(n) ? Hn : ot.current, k = gr(t, k));
      var D = n.getDerivedStateFromProps, z = typeof D == "function" || typeof u.getSnapshotBeforeUpdate == "function";
      z || typeof u.UNSAFE_componentWillReceiveProps != "function" && typeof u.componentWillReceiveProps != "function" || (p !== r || g !== k) && $u(t, u, r, k), bn = !1;
      var O = t.memoizedState;
      u.state = O, nl(t, r, u, l), g = t.memoizedState, p !== r || O !== g || dt.current || bn ? (typeof D == "function" && (Fi(t, n, D, r), g = t.memoizedState), (p = bn || bu(t, n, p, r, O, g, k)) ? (z || typeof u.UNSAFE_componentWillMount != "function" && typeof u.componentWillMount != "function" || (typeof u.componentWillMount == "function" && u.componentWillMount(), typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount()), typeof u.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof u.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = g), u.props = r, u.state = g, u.context = k, r = p) : (typeof u.componentDidMount == "function" && (t.flags |= 4194308), r = !1);
    } else {
      u = t.stateNode, Eu(e, t), p = t.memoizedProps, k = t.type === t.elementType ? p : Lt(t.type, p), u.props = k, z = t.pendingProps, O = u.context, g = n.contextType, typeof g == "object" && g !== null ? g = $t(g) : (g = ft(n) ? Hn : ot.current, g = gr(t, g));
      var Q = n.getDerivedStateFromProps;
      (D = typeof Q == "function" || typeof u.getSnapshotBeforeUpdate == "function") || typeof u.UNSAFE_componentWillReceiveProps != "function" && typeof u.componentWillReceiveProps != "function" || (p !== z || O !== g) && $u(t, u, r, g), bn = !1, O = t.memoizedState, u.state = O, nl(t, r, u, l);
      var X = t.memoizedState;
      p !== z || O !== X || dt.current || bn ? (typeof Q == "function" && (Fi(t, n, Q, r), X = t.memoizedState), (k = bn || bu(t, n, k, r, O, X, g) || !1) ? (D || typeof u.UNSAFE_componentWillUpdate != "function" && typeof u.componentWillUpdate != "function" || (typeof u.componentWillUpdate == "function" && u.componentWillUpdate(r, X, g), typeof u.UNSAFE_componentWillUpdate == "function" && u.UNSAFE_componentWillUpdate(r, X, g)), typeof u.componentDidUpdate == "function" && (t.flags |= 4), typeof u.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof u.componentDidUpdate != "function" || p === e.memoizedProps && O === e.memoizedState || (t.flags |= 4), typeof u.getSnapshotBeforeUpdate != "function" || p === e.memoizedProps && O === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = X), u.props = r, u.state = X, u.context = g, r = k) : (typeof u.componentDidUpdate != "function" || p === e.memoizedProps && O === e.memoizedState || (t.flags |= 4), typeof u.getSnapshotBeforeUpdate != "function" || p === e.memoizedProps && O === e.memoizedState || (t.flags |= 1024), r = !1);
    }
    return ra(e, t, n, r, i, l);
  }
  function ra(e, t, n, r, l, i) {
    sc(e, t);
    var u = (t.flags & 128) !== 0;
    if (!r && !u)
      return l && pu(t, n, !1), on(e, t, i);
    r = t.stateNode, Fp.current = t;
    var p = u && typeof n.getDerivedStateFromError != "function" ? null : r.render();
    return t.flags |= 1, e !== null && u ? (t.child = kr(t, e.child, null, i), t.child = kr(t, null, p, i)) : st(e, t, p, i), t.memoizedState = r.state, l && pu(t, n, !0), t.child;
  }
  function cc(e) {
    var t = e.stateNode;
    t.pendingContext ? du(e, t.pendingContext, t.pendingContext !== t.context) : t.context && du(e, t.context, !1), Bi(e, t.containerInfo);
  }
  function dc(e, t, n, r, l) {
    return xr(), Di(l), t.flags |= 256, st(e, t, n, r), t.child;
  }
  var oa = { dehydrated: null, treeContext: null, retryLane: 0 };
  function la(e) {
    return { baseLanes: e, cachePool: null, transitions: null };
  }
  function fc(e, t, n) {
    var r = t.pendingProps, l = Ie.current, i = !1, u = (t.flags & 128) !== 0, p;
    if ((p = u) || (p = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0), p ? (i = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (l |= 1), Re(Ie, l & 1), e === null)
      return Oi(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (u = r.children, e = r.fallback, i ? (r = t.mode, i = t.child, u = { mode: "hidden", children: u }, !(r & 1) && i !== null ? (i.childLanes = 0, i.pendingProps = u) : i = Cl(u, r, 0, null), e = er(e, r, n, null), i.return = t, e.return = t, i.sibling = e, t.child = i, t.child.memoizedState = la(n), t.memoizedState = oa, e) : ia(t, u));
    if (l = e.memoizedState, l !== null && (p = l.dehydrated, p !== null))
      return Up(e, t, u, r, p, l, n);
    if (i) {
      i = r.fallback, u = t.mode, l = e.child, p = l.sibling;
      var g = { mode: "hidden", children: r.children };
      return !(u & 1) && t.child !== l ? (r = t.child, r.childLanes = 0, r.pendingProps = g, t.deletions = null) : (r = On(l, g), r.subtreeFlags = l.subtreeFlags & 14680064), p !== null ? i = On(p, i) : (i = er(i, u, n, null), i.flags |= 2), i.return = t, r.return = t, r.sibling = i, t.child = r, r = i, i = t.child, u = e.child.memoizedState, u = u === null ? la(n) : { baseLanes: u.baseLanes | n, cachePool: null, transitions: u.transitions }, i.memoizedState = u, i.childLanes = e.childLanes & ~n, t.memoizedState = oa, r;
    }
    return i = e.child, e = i.sibling, r = On(i, { mode: "visible", children: r.children }), !(t.mode & 1) && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r;
  }
  function ia(e, t) {
    return t = Cl({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
  }
  function dl(e, t, n, r) {
    return r !== null && Di(r), kr(t, e.child, null, n), e = ia(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
  }
  function Up(e, t, n, r, l, i, u) {
    if (n)
      return t.flags & 256 ? (t.flags &= -257, r = ea(Error(a(422))), dl(e, t, u, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (i = r.fallback, l = t.mode, r = Cl({ mode: "visible", children: r.children }, l, 0, null), i = er(i, l, u, null), i.flags |= 2, r.return = t, i.return = t, r.sibling = i, t.child = r, t.mode & 1 && kr(t, e.child, null, u), t.child.memoizedState = la(u), t.memoizedState = oa, i);
    if (!(t.mode & 1))
      return dl(e, t, u, null);
    if (l.data === "$!") {
      if (r = l.nextSibling && l.nextSibling.dataset, r)
        var p = r.dgst;
      return r = p, i = Error(a(419)), r = ea(i, r, void 0), dl(e, t, u, r);
    }
    if (p = (u & e.childLanes) !== 0, pt || p) {
      if (r = Xe, r !== null) {
        switch (u & -u) {
          case 4:
            l = 2;
            break;
          case 16:
            l = 8;
            break;
          case 64:
          case 128:
          case 256:
          case 512:
          case 1024:
          case 2048:
          case 4096:
          case 8192:
          case 16384:
          case 32768:
          case 65536:
          case 131072:
          case 262144:
          case 524288:
          case 1048576:
          case 2097152:
          case 4194304:
          case 8388608:
          case 16777216:
          case 33554432:
          case 67108864:
            l = 32;
            break;
          case 536870912:
            l = 268435456;
            break;
          default:
            l = 0;
        }
        l = l & (r.suspendedLanes | u) ? 0 : l, l !== 0 && l !== i.retryLane && (i.retryLane = l, nn(e, l), At(r, e, l, -1));
      }
      return Sa(), r = ea(Error(a(421))), dl(e, t, u, r);
    }
    return l.data === "$?" ? (t.flags |= 128, t.child = e.child, t = em.bind(null, e), l._reactRetry = t, null) : (e = i.treeContext, St = En(l.nextSibling), Et = t, Me = !0, zt = null, e !== null && (bt[Pt++] = en, bt[Pt++] = tn, bt[Pt++] = Vn, en = e.id, tn = e.overflow, Vn = t), t = ia(t, r.children), t.flags |= 4096, t);
  }
  function pc(e, t, n) {
    e.lanes |= t;
    var r = e.alternate;
    r !== null && (r.lanes |= t), Ii(e.return, t, n);
  }
  function aa(e, t, n, r, l) {
    var i = e.memoizedState;
    i === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: l } : (i.isBackwards = t, i.rendering = null, i.renderingStartTime = 0, i.last = r, i.tail = n, i.tailMode = l);
  }
  function mc(e, t, n) {
    var r = t.pendingProps, l = r.revealOrder, i = r.tail;
    if (st(e, t, r.children, n), r = Ie.current, r & 2)
      r = r & 1 | 2, t.flags |= 128;
    else {
      if (e !== null && e.flags & 128)
        e:
          for (e = t.child; e !== null; ) {
            if (e.tag === 13)
              e.memoizedState !== null && pc(e, n, t);
            else if (e.tag === 19)
              pc(e, n, t);
            else if (e.child !== null) {
              e.child.return = e, e = e.child;
              continue;
            }
            if (e === t)
              break e;
            for (; e.sibling === null; ) {
              if (e.return === null || e.return === t)
                break e;
              e = e.return;
            }
            e.sibling.return = e.return, e = e.sibling;
          }
      r &= 1;
    }
    if (Re(Ie, r), !(t.mode & 1))
      t.memoizedState = null;
    else
      switch (l) {
        case "forwards":
          for (n = t.child, l = null; n !== null; )
            e = n.alternate, e !== null && ll(e) === null && (l = n), n = n.sibling;
          n = l, n === null ? (l = t.child, t.child = null) : (l = n.sibling, n.sibling = null), aa(t, !1, l, n, i);
          break;
        case "backwards":
          for (n = null, l = t.child, t.child = null; l !== null; ) {
            if (e = l.alternate, e !== null && ll(e) === null) {
              t.child = l;
              break;
            }
            e = l.sibling, l.sibling = n, n = l, l = e;
          }
          aa(t, !0, n, null, i);
          break;
        case "together":
          aa(t, !1, null, null, void 0);
          break;
        default:
          t.memoizedState = null;
      }
    return t.child;
  }
  function fl(e, t) {
    !(t.mode & 1) && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2);
  }
  function on(e, t, n) {
    if (e !== null && (t.dependencies = e.dependencies), Xn |= t.lanes, !(n & t.childLanes))
      return null;
    if (e !== null && t.child !== e.child)
      throw Error(a(153));
    if (t.child !== null) {
      for (e = t.child, n = On(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; )
        e = e.sibling, n = n.sibling = On(e, e.pendingProps), n.return = t;
      n.sibling = null;
    }
    return t.child;
  }
  function Bp(e, t, n) {
    switch (t.tag) {
      case 3:
        cc(t), xr();
        break;
      case 5:
        Tu(t);
        break;
      case 1:
        ft(t.type) && Ko(t);
        break;
      case 4:
        Bi(t, t.stateNode.containerInfo);
        break;
      case 10:
        var r = t.type._context, l = t.memoizedProps.value;
        Re(qo, r._currentValue), r._currentValue = l;
        break;
      case 13:
        if (r = t.memoizedState, r !== null)
          return r.dehydrated !== null ? (Re(Ie, Ie.current & 1), t.flags |= 128, null) : n & t.child.childLanes ? fc(e, t, n) : (Re(Ie, Ie.current & 1), e = on(e, t, n), e !== null ? e.sibling : null);
        Re(Ie, Ie.current & 1);
        break;
      case 19:
        if (r = (n & t.childLanes) !== 0, e.flags & 128) {
          if (r)
            return mc(e, t, n);
          t.flags |= 128;
        }
        if (l = t.memoizedState, l !== null && (l.rendering = null, l.tail = null, l.lastEffect = null), Re(Ie, Ie.current), r)
          break;
        return null;
      case 22:
      case 23:
        return t.lanes = 0, ac(e, t, n);
    }
    return on(e, t, n);
  }
  var vc, sa, hc, gc;
  vc = function(e, t) {
    for (var n = t.child; n !== null; ) {
      if (n.tag === 5 || n.tag === 6)
        e.appendChild(n.stateNode);
      else if (n.tag !== 4 && n.child !== null) {
        n.child.return = n, n = n.child;
        continue;
      }
      if (n === t)
        break;
      for (; n.sibling === null; ) {
        if (n.return === null || n.return === t)
          return;
        n = n.return;
      }
      n.sibling.return = n.return, n = n.sibling;
    }
  }, sa = function() {
  }, hc = function(e, t, n, r) {
    var l = e.memoizedProps;
    if (l !== r) {
      e = t.stateNode, Kn(Qt.current);
      var i = null;
      switch (n) {
        case "input":
          l = tt(e, l), r = tt(e, r), i = [];
          break;
        case "select":
          l = m({}, l, { value: void 0 }), r = m({}, r, { value: void 0 }), i = [];
          break;
        case "textarea":
          l = un(e, l), r = un(e, r), i = [];
          break;
        default:
          typeof l.onClick != "function" && typeof r.onClick == "function" && (e.onclick = Vo);
      }
      Pe(n, r);
      var u;
      n = null;
      for (k in l)
        if (!r.hasOwnProperty(k) && l.hasOwnProperty(k) && l[k] != null)
          if (k === "style") {
            var p = l[k];
            for (u in p)
              p.hasOwnProperty(u) && (n || (n = {}), n[u] = "");
          } else
            k !== "dangerouslySetInnerHTML" && k !== "children" && k !== "suppressContentEditableWarning" && k !== "suppressHydrationWarning" && k !== "autoFocus" && (d.hasOwnProperty(k) ? i || (i = []) : (i = i || []).push(k, null));
      for (k in r) {
        var g = r[k];
        if (p = l?.[k], r.hasOwnProperty(k) && g !== p && (g != null || p != null))
          if (k === "style")
            if (p) {
              for (u in p)
                !p.hasOwnProperty(u) || g && g.hasOwnProperty(u) || (n || (n = {}), n[u] = "");
              for (u in g)
                g.hasOwnProperty(u) && p[u] !== g[u] && (n || (n = {}), n[u] = g[u]);
            } else
              n || (i || (i = []), i.push(
                k,
                n
              )), n = g;
          else
            k === "dangerouslySetInnerHTML" ? (g = g ? g.__html : void 0, p = p ? p.__html : void 0, g != null && p !== g && (i = i || []).push(k, g)) : k === "children" ? typeof g != "string" && typeof g != "number" || (i = i || []).push(k, "" + g) : k !== "suppressContentEditableWarning" && k !== "suppressHydrationWarning" && (d.hasOwnProperty(k) ? (g != null && k === "onScroll" && Te("scroll", e), i || p === g || (i = [])) : (i = i || []).push(k, g));
      }
      n && (i = i || []).push("style", n);
      var k = i;
      (t.updateQueue = k) && (t.flags |= 4);
    }
  }, gc = function(e, t, n, r) {
    n !== r && (t.flags |= 4);
  };
  function po(e, t) {
    if (!Me)
      switch (e.tailMode) {
        case "hidden":
          t = e.tail;
          for (var n = null; t !== null; )
            t.alternate !== null && (n = t), t = t.sibling;
          n === null ? e.tail = null : n.sibling = null;
          break;
        case "collapsed":
          n = e.tail;
          for (var r = null; n !== null; )
            n.alternate !== null && (r = n), n = n.sibling;
          r === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : r.sibling = null;
      }
  }
  function it(e) {
    var t = e.alternate !== null && e.alternate.child === e.child, n = 0, r = 0;
    if (t)
      for (var l = e.child; l !== null; )
        n |= l.lanes | l.childLanes, r |= l.subtreeFlags & 14680064, r |= l.flags & 14680064, l.return = e, l = l.sibling;
    else
      for (l = e.child; l !== null; )
        n |= l.lanes | l.childLanes, r |= l.subtreeFlags, r |= l.flags, l.return = e, l = l.sibling;
    return e.subtreeFlags |= r, e.childLanes = n, t;
  }
  function Wp(e, t, n) {
    var r = t.pendingProps;
    switch (Ri(t), t.tag) {
      case 2:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return it(t), null;
      case 1:
        return ft(t.type) && Yo(), it(t), null;
      case 3:
        return r = t.stateNode, Cr(), Oe(dt), Oe(ot), Vi(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (Jo(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, zt !== null && (wa(zt), zt = null))), sa(e, t), it(t), null;
      case 5:
        Wi(t);
        var l = Kn(ao.current);
        if (n = t.type, e !== null && t.stateNode != null)
          hc(e, t, n, r, l), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
        else {
          if (!r) {
            if (t.stateNode === null)
              throw Error(a(166));
            return it(t), null;
          }
          if (e = Kn(Qt.current), Jo(t)) {
            r = t.stateNode, n = t.type;
            var i = t.memoizedProps;
            switch (r[Vt] = t, r[no] = i, e = (t.mode & 1) !== 0, n) {
              case "dialog":
                Te("cancel", r), Te("close", r);
                break;
              case "iframe":
              case "object":
              case "embed":
                Te("load", r);
                break;
              case "video":
              case "audio":
                for (l = 0; l < qr.length; l++)
                  Te(qr[l], r);
                break;
              case "source":
                Te("error", r);
                break;
              case "img":
              case "image":
              case "link":
                Te(
                  "error",
                  r
                ), Te("load", r);
                break;
              case "details":
                Te("toggle", r);
                break;
              case "input":
                or(r, i), Te("invalid", r);
                break;
              case "select":
                r._wrapperState = { wasMultiple: !!i.multiple }, Te("invalid", r);
                break;
              case "textarea":
                rt(r, i), Te("invalid", r);
            }
            Pe(n, i), l = null;
            for (var u in i)
              if (i.hasOwnProperty(u)) {
                var p = i[u];
                u === "children" ? typeof p == "string" ? r.textContent !== p && (i.suppressHydrationWarning !== !0 && Ho(r.textContent, p, e), l = ["children", p]) : typeof p == "number" && r.textContent !== "" + p && (i.suppressHydrationWarning !== !0 && Ho(
                  r.textContent,
                  p,
                  e
                ), l = ["children", "" + p]) : d.hasOwnProperty(u) && p != null && u === "onScroll" && Te("scroll", r);
              }
            switch (n) {
              case "input":
                Ct(r), lr(r, i, !0);
                break;
              case "textarea":
                Ct(r), ir(r);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof i.onClick == "function" && (r.onclick = Vo);
            }
            r = l, t.updateQueue = r, r !== null && (t.flags |= 4);
          } else {
            u = l.nodeType === 9 ? l : l.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = Wt(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = u.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = u.createElement(n, { is: r.is }) : (e = u.createElement(n), n === "select" && (u = e, r.multiple ? u.multiple = !0 : r.size && (u.size = r.size))) : e = u.createElementNS(e, n), e[Vt] = t, e[no] = r, vc(e, t, !1, !1), t.stateNode = e;
            e: {
              switch (u = yt(n, r), n) {
                case "dialog":
                  Te("cancel", e), Te("close", e), l = r;
                  break;
                case "iframe":
                case "object":
                case "embed":
                  Te("load", e), l = r;
                  break;
                case "video":
                case "audio":
                  for (l = 0; l < qr.length; l++)
                    Te(qr[l], e);
                  l = r;
                  break;
                case "source":
                  Te("error", e), l = r;
                  break;
                case "img":
                case "image":
                case "link":
                  Te(
                    "error",
                    e
                  ), Te("load", e), l = r;
                  break;
                case "details":
                  Te("toggle", e), l = r;
                  break;
                case "input":
                  or(e, r), l = tt(e, r), Te("invalid", e);
                  break;
                case "option":
                  l = r;
                  break;
                case "select":
                  e._wrapperState = { wasMultiple: !!r.multiple }, l = m({}, r, { value: void 0 }), Te("invalid", e);
                  break;
                case "textarea":
                  rt(e, r), l = un(e, r), Te("invalid", e);
                  break;
                default:
                  l = r;
              }
              Pe(n, l), p = l;
              for (i in p)
                if (p.hasOwnProperty(i)) {
                  var g = p[i];
                  i === "style" ? ae(e, g) : i === "dangerouslySetInnerHTML" ? (g = g ? g.__html : void 0, g != null && pn(e, g)) : i === "children" ? typeof g == "string" ? (n !== "textarea" || g !== "") && J(e, g) : typeof g == "number" && J(e, "" + g) : i !== "suppressContentEditableWarning" && i !== "suppressHydrationWarning" && i !== "autoFocus" && (d.hasOwnProperty(i) ? g != null && i === "onScroll" && Te("scroll", e) : g != null && B(e, i, g, u));
                }
              switch (n) {
                case "input":
                  Ct(e), lr(e, r, !1);
                  break;
                case "textarea":
                  Ct(e), ir(e);
                  break;
                case "option":
                  r.value != null && e.setAttribute("value", "" + me(r.value));
                  break;
                case "select":
                  e.multiple = !!r.multiple, i = r.value, i != null ? nt(e, !!r.multiple, i, !1) : r.defaultValue != null && nt(
                    e,
                    !!r.multiple,
                    r.defaultValue,
                    !0
                  );
                  break;
                default:
                  typeof l.onClick == "function" && (e.onclick = Vo);
              }
              switch (n) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  r = !!r.autoFocus;
                  break e;
                case "img":
                  r = !0;
                  break e;
                default:
                  r = !1;
              }
            }
            r && (t.flags |= 4);
          }
          t.ref !== null && (t.flags |= 512, t.flags |= 2097152);
        }
        return it(t), null;
      case 6:
        if (e && t.stateNode != null)
          gc(e, t, e.memoizedProps, r);
        else {
          if (typeof r != "string" && t.stateNode === null)
            throw Error(a(166));
          if (n = Kn(ao.current), Kn(Qt.current), Jo(t)) {
            if (r = t.stateNode, n = t.memoizedProps, r[Vt] = t, (i = r.nodeValue !== n) && (e = Et, e !== null))
              switch (e.tag) {
                case 3:
                  Ho(r.nodeValue, n, (e.mode & 1) !== 0);
                  break;
                case 5:
                  e.memoizedProps.suppressHydrationWarning !== !0 && Ho(r.nodeValue, n, (e.mode & 1) !== 0);
              }
            i && (t.flags |= 4);
          } else
            r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[Vt] = t, t.stateNode = r;
        }
        return it(t), null;
      case 13:
        if (Oe(Ie), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
          if (Me && St !== null && t.mode & 1 && !(t.flags & 128))
            wu(), xr(), t.flags |= 98560, i = !1;
          else if (i = Jo(t), r !== null && r.dehydrated !== null) {
            if (e === null) {
              if (!i)
                throw Error(a(318));
              if (i = t.memoizedState, i = i !== null ? i.dehydrated : null, !i)
                throw Error(a(317));
              i[Vt] = t;
            } else
              xr(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
            it(t), i = !1;
          } else
            zt !== null && (wa(zt), zt = null), i = !0;
          if (!i)
            return t.flags & 65536 ? t : null;
        }
        return t.flags & 128 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, t.mode & 1 && (e === null || Ie.current & 1 ? Ye === 0 && (Ye = 3) : Sa())), t.updateQueue !== null && (t.flags |= 4), it(t), null);
      case 4:
        return Cr(), sa(e, t), e === null && eo(t.stateNode.containerInfo), it(t), null;
      case 10:
        return Mi(t.type._context), it(t), null;
      case 17:
        return ft(t.type) && Yo(), it(t), null;
      case 19:
        if (Oe(Ie), i = t.memoizedState, i === null)
          return it(t), null;
        if (r = (t.flags & 128) !== 0, u = i.rendering, u === null)
          if (r)
            po(i, !1);
          else {
            if (Ye !== 0 || e !== null && e.flags & 128)
              for (e = t.child; e !== null; ) {
                if (u = ll(e), u !== null) {
                  for (t.flags |= 128, po(i, !1), r = u.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null; )
                    i = n, e = r, i.flags &= 14680066, u = i.alternate, u === null ? (i.childLanes = 0, i.lanes = e, i.child = null, i.subtreeFlags = 0, i.memoizedProps = null, i.memoizedState = null, i.updateQueue = null, i.dependencies = null, i.stateNode = null) : (i.childLanes = u.childLanes, i.lanes = u.lanes, i.child = u.child, i.subtreeFlags = 0, i.deletions = null, i.memoizedProps = u.memoizedProps, i.memoizedState = u.memoizedState, i.updateQueue = u.updateQueue, i.type = u.type, e = u.dependencies, i.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), n = n.sibling;
                  return Re(Ie, Ie.current & 1 | 2), t.child;
                }
                e = e.sibling;
              }
            i.tail !== null && Fe() > Nr && (t.flags |= 128, r = !0, po(i, !1), t.lanes = 4194304);
          }
        else {
          if (!r)
            if (e = ll(u), e !== null) {
              if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), po(i, !0), i.tail === null && i.tailMode === "hidden" && !u.alternate && !Me)
                return it(t), null;
            } else
              2 * Fe() - i.renderingStartTime > Nr && n !== 1073741824 && (t.flags |= 128, r = !0, po(i, !1), t.lanes = 4194304);
          i.isBackwards ? (u.sibling = t.child, t.child = u) : (n = i.last, n !== null ? n.sibling = u : t.child = u, i.last = u);
        }
        return i.tail !== null ? (t = i.tail, i.rendering = t, i.tail = t.sibling, i.renderingStartTime = Fe(), t.sibling = null, n = Ie.current, Re(Ie, r ? n & 1 | 2 : n & 1), t) : (it(t), null);
      case 22:
      case 23:
        return Ea(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && t.mode & 1 ? kt & 1073741824 && (it(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : it(t), null;
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(a(156, t.tag));
  }
  function Hp(e, t) {
    switch (Ri(t), t.tag) {
      case 1:
        return ft(t.type) && Yo(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 3:
        return Cr(), Oe(dt), Oe(ot), Vi(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
      case 5:
        return Wi(t), null;
      case 13:
        if (Oe(Ie), e = t.memoizedState, e !== null && e.dehydrated !== null) {
          if (t.alternate === null)
            throw Error(a(340));
          xr();
        }
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 19:
        return Oe(Ie), null;
      case 4:
        return Cr(), null;
      case 10:
        return Mi(t.type._context), null;
      case 22:
      case 23:
        return Ea(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var pl = !1, at = !1, Vp = typeof WeakSet == "function" ? WeakSet : Set, Y = null;
  function Pr(e, t) {
    var n = e.ref;
    if (n !== null)
      if (typeof n == "function")
        try {
          n(null);
        } catch (r) {
          je(e, t, r);
        }
      else
        n.current = null;
  }
  function ua(e, t, n) {
    try {
      n();
    } catch (r) {
      je(e, t, r);
    }
  }
  var yc = !1;
  function Qp(e, t) {
    if (Ei = Do, e = Gs(), pi(e)) {
      if ("selectionStart" in e)
        var n = { start: e.selectionStart, end: e.selectionEnd };
      else
        e: {
          n = (n = e.ownerDocument) && n.defaultView || window;
          var r = n.getSelection && n.getSelection();
          if (r && r.rangeCount !== 0) {
            n = r.anchorNode;
            var l = r.anchorOffset, i = r.focusNode;
            r = r.focusOffset;
            try {
              n.nodeType, i.nodeType;
            } catch {
              n = null;
              break e;
            }
            var u = 0, p = -1, g = -1, k = 0, D = 0, z = e, O = null;
            t:
              for (; ; ) {
                for (var Q; z !== n || l !== 0 && z.nodeType !== 3 || (p = u + l), z !== i || r !== 0 && z.nodeType !== 3 || (g = u + r), z.nodeType === 3 && (u += z.nodeValue.length), (Q = z.firstChild) !== null; )
                  O = z, z = Q;
                for (; ; ) {
                  if (z === e)
                    break t;
                  if (O === n && ++k === l && (p = u), O === i && ++D === r && (g = u), (Q = z.nextSibling) !== null)
                    break;
                  z = O, O = z.parentNode;
                }
                z = Q;
              }
            n = p === -1 || g === -1 ? null : { start: p, end: g };
          } else
            n = null;
        }
      n = n || { start: 0, end: 0 };
    } else
      n = null;
    for (Si = { focusedElem: e, selectionRange: n }, Do = !1, Y = t; Y !== null; )
      if (t = Y, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null)
        e.return = t, Y = e;
      else
        for (; Y !== null; ) {
          t = Y;
          try {
            var X = t.alternate;
            if (t.flags & 1024)
              switch (t.tag) {
                case 0:
                case 11:
                case 15:
                  break;
                case 1:
                  if (X !== null) {
                    var Z = X.memoizedProps, Ue = X.memoizedState, E = t.stateNode, w = E.getSnapshotBeforeUpdate(t.elementType === t.type ? Z : Lt(t.type, Z), Ue);
                    E.__reactInternalSnapshotBeforeUpdate = w;
                  }
                  break;
                case 3:
                  var S = t.stateNode.containerInfo;
                  S.nodeType === 1 ? S.textContent = "" : S.nodeType === 9 && S.documentElement && S.removeChild(S.documentElement);
                  break;
                case 5:
                case 6:
                case 4:
                case 17:
                  break;
                default:
                  throw Error(a(163));
              }
          } catch (M) {
            je(t, t.return, M);
          }
          if (e = t.sibling, e !== null) {
            e.return = t.return, Y = e;
            break;
          }
          Y = t.return;
        }
    return X = yc, yc = !1, X;
  }
  function mo(e, t, n) {
    var r = t.updateQueue;
    if (r = r !== null ? r.lastEffect : null, r !== null) {
      var l = r = r.next;
      do {
        if ((l.tag & e) === e) {
          var i = l.destroy;
          l.destroy = void 0, i !== void 0 && ua(t, n, i);
        }
        l = l.next;
      } while (l !== r);
    }
  }
  function ml(e, t) {
    if (t = t.updateQueue, t = t !== null ? t.lastEffect : null, t !== null) {
      var n = t = t.next;
      do {
        if ((n.tag & e) === e) {
          var r = n.create;
          n.destroy = r();
        }
        n = n.next;
      } while (n !== t);
    }
  }
  function ca(e) {
    var t = e.ref;
    if (t !== null) {
      var n = e.stateNode;
      switch (e.tag) {
        case 5:
          e = n;
          break;
        default:
          e = n;
      }
      typeof t == "function" ? t(e) : t.current = e;
    }
  }
  function wc(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null, wc(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[Vt], delete t[no], delete t[Pi], delete t[Np], delete t[_p])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
  }
  function xc(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4;
  }
  function Ec(e) {
    e:
      for (; ; ) {
        for (; e.sibling === null; ) {
          if (e.return === null || xc(e.return))
            return null;
          e = e.return;
        }
        for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
          if (e.flags & 2 || e.child === null || e.tag === 4)
            continue e;
          e.child.return = e, e = e.child;
        }
        if (!(e.flags & 2))
          return e.stateNode;
      }
  }
  function da(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6)
      e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = Vo));
    else if (r !== 4 && (e = e.child, e !== null))
      for (da(e, t, n), e = e.sibling; e !== null; )
        da(e, t, n), e = e.sibling;
  }
  function fa(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6)
      e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (r !== 4 && (e = e.child, e !== null))
      for (fa(e, t, n), e = e.sibling; e !== null; )
        fa(e, t, n), e = e.sibling;
  }
  var qe = null, Mt = !1;
  function $n(e, t, n) {
    for (n = n.child; n !== null; )
      Sc(e, t, n), n = n.sibling;
  }
  function Sc(e, t, n) {
    if (Ht && typeof Ht.onCommitFiberUnmount == "function")
      try {
        Ht.onCommitFiberUnmount($o, n);
      } catch {
      }
    switch (n.tag) {
      case 5:
        at || Pr(n, t);
      case 6:
        var r = qe, l = Mt;
        qe = null, $n(e, t, n), qe = r, Mt = l, qe !== null && (Mt ? (e = qe, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : qe.removeChild(n.stateNode));
        break;
      case 18:
        qe !== null && (Mt ? (e = qe, n = n.stateNode, e.nodeType === 8 ? bi(e.parentNode, n) : e.nodeType === 1 && bi(e, n), Vr(e)) : bi(qe, n.stateNode));
        break;
      case 4:
        r = qe, l = Mt, qe = n.stateNode.containerInfo, Mt = !0, $n(e, t, n), qe = r, Mt = l;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (!at && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
          l = r = r.next;
          do {
            var i = l, u = i.destroy;
            i = i.tag, u !== void 0 && (i & 2 || i & 4) && ua(n, t, u), l = l.next;
          } while (l !== r);
        }
        $n(e, t, n);
        break;
      case 1:
        if (!at && (Pr(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function"))
          try {
            r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount();
          } catch (p) {
            je(n, t, p);
          }
        $n(e, t, n);
        break;
      case 21:
        $n(e, t, n);
        break;
      case 22:
        n.mode & 1 ? (at = (r = at) || n.memoizedState !== null, $n(e, t, n), at = r) : $n(e, t, n);
        break;
      default:
        $n(e, t, n);
    }
  }
  function kc(e) {
    var t = e.updateQueue;
    if (t !== null) {
      e.updateQueue = null;
      var n = e.stateNode;
      n === null && (n = e.stateNode = new Vp()), t.forEach(function(r) {
        var l = tm.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(l, l));
      });
    }
  }
  function It(e, t) {
    var n = t.deletions;
    if (n !== null)
      for (var r = 0; r < n.length; r++) {
        var l = n[r];
        try {
          var i = e, u = t, p = u;
          e:
            for (; p !== null; ) {
              switch (p.tag) {
                case 5:
                  qe = p.stateNode, Mt = !1;
                  break e;
                case 3:
                  qe = p.stateNode.containerInfo, Mt = !0;
                  break e;
                case 4:
                  qe = p.stateNode.containerInfo, Mt = !0;
                  break e;
              }
              p = p.return;
            }
          if (qe === null)
            throw Error(a(160));
          Sc(i, u, l), qe = null, Mt = !1;
          var g = l.alternate;
          g !== null && (g.return = null), l.return = null;
        } catch (k) {
          je(l, t, k);
        }
      }
    if (t.subtreeFlags & 12854)
      for (t = t.child; t !== null; )
        Cc(t, e), t = t.sibling;
  }
  function Cc(e, t) {
    var n = e.alternate, r = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if (It(t, e), Kt(e), r & 4) {
          try {
            mo(3, e, e.return), ml(3, e);
          } catch (Z) {
            je(e, e.return, Z);
          }
          try {
            mo(5, e, e.return);
          } catch (Z) {
            je(e, e.return, Z);
          }
        }
        break;
      case 1:
        It(t, e), Kt(e), r & 512 && n !== null && Pr(n, n.return);
        break;
      case 5:
        if (It(t, e), Kt(e), r & 512 && n !== null && Pr(n, n.return), e.flags & 32) {
          var l = e.stateNode;
          try {
            J(l, "");
          } catch (Z) {
            je(e, e.return, Z);
          }
        }
        if (r & 4 && (l = e.stateNode, l != null)) {
          var i = e.memoizedProps, u = n !== null ? n.memoizedProps : i, p = e.type, g = e.updateQueue;
          if (e.updateQueue = null, g !== null)
            try {
              p === "input" && i.type === "radio" && i.name != null && Un(l, i), yt(p, u);
              var k = yt(p, i);
              for (u = 0; u < g.length; u += 2) {
                var D = g[u], z = g[u + 1];
                D === "style" ? ae(l, z) : D === "dangerouslySetInnerHTML" ? pn(l, z) : D === "children" ? J(l, z) : B(l, D, z, k);
              }
              switch (p) {
                case "input":
                  Bt(l, i);
                  break;
                case "textarea":
                  cn(l, i);
                  break;
                case "select":
                  var O = l._wrapperState.wasMultiple;
                  l._wrapperState.wasMultiple = !!i.multiple;
                  var Q = i.value;
                  Q != null ? nt(l, !!i.multiple, Q, !1) : O !== !!i.multiple && (i.defaultValue != null ? nt(
                    l,
                    !!i.multiple,
                    i.defaultValue,
                    !0
                  ) : nt(l, !!i.multiple, i.multiple ? [] : "", !1));
              }
              l[no] = i;
            } catch (Z) {
              je(e, e.return, Z);
            }
        }
        break;
      case 6:
        if (It(t, e), Kt(e), r & 4) {
          if (e.stateNode === null)
            throw Error(a(162));
          l = e.stateNode, i = e.memoizedProps;
          try {
            l.nodeValue = i;
          } catch (Z) {
            je(e, e.return, Z);
          }
        }
        break;
      case 3:
        if (It(t, e), Kt(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
          try {
            Vr(t.containerInfo);
          } catch (Z) {
            je(e, e.return, Z);
          }
        break;
      case 4:
        It(t, e), Kt(e);
        break;
      case 13:
        It(t, e), Kt(e), l = e.child, l.flags & 8192 && (i = l.memoizedState !== null, l.stateNode.isHidden = i, !i || l.alternate !== null && l.alternate.memoizedState !== null || (va = Fe())), r & 4 && kc(e);
        break;
      case 22:
        if (D = n !== null && n.memoizedState !== null, e.mode & 1 ? (at = (k = at) || D, It(t, e), at = k) : It(t, e), Kt(e), r & 8192) {
          if (k = e.memoizedState !== null, (e.stateNode.isHidden = k) && !D && e.mode & 1)
            for (Y = e, D = e.child; D !== null; ) {
              for (z = Y = D; Y !== null; ) {
                switch (O = Y, Q = O.child, O.tag) {
                  case 0:
                  case 11:
                  case 14:
                  case 15:
                    mo(4, O, O.return);
                    break;
                  case 1:
                    Pr(O, O.return);
                    var X = O.stateNode;
                    if (typeof X.componentWillUnmount == "function") {
                      r = O, n = O.return;
                      try {
                        t = r, X.props = t.memoizedProps, X.state = t.memoizedState, X.componentWillUnmount();
                      } catch (Z) {
                        je(r, n, Z);
                      }
                    }
                    break;
                  case 5:
                    Pr(O, O.return);
                    break;
                  case 22:
                    if (O.memoizedState !== null) {
                      $c(z);
                      continue;
                    }
                }
                Q !== null ? (Q.return = O, Y = Q) : $c(z);
              }
              D = D.sibling;
            }
          e:
            for (D = null, z = e; ; ) {
              if (z.tag === 5) {
                if (D === null) {
                  D = z;
                  try {
                    l = z.stateNode, k ? (i = l.style, typeof i.setProperty == "function" ? i.setProperty("display", "none", "important") : i.display = "none") : (p = z.stateNode, g = z.memoizedProps.style, u = g != null && g.hasOwnProperty("display") ? g.display : null, p.style.display = ee("display", u));
                  } catch (Z) {
                    je(e, e.return, Z);
                  }
                }
              } else if (z.tag === 6) {
                if (D === null)
                  try {
                    z.stateNode.nodeValue = k ? "" : z.memoizedProps;
                  } catch (Z) {
                    je(e, e.return, Z);
                  }
              } else if ((z.tag !== 22 && z.tag !== 23 || z.memoizedState === null || z === e) && z.child !== null) {
                z.child.return = z, z = z.child;
                continue;
              }
              if (z === e)
                break e;
              for (; z.sibling === null; ) {
                if (z.return === null || z.return === e)
                  break e;
                D === z && (D = null), z = z.return;
              }
              D === z && (D = null), z.sibling.return = z.return, z = z.sibling;
            }
        }
        break;
      case 19:
        It(t, e), Kt(e), r & 4 && kc(e);
        break;
      case 21:
        break;
      default:
        It(
          t,
          e
        ), Kt(e);
    }
  }
  function Kt(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        e: {
          for (var n = e.return; n !== null; ) {
            if (xc(n)) {
              var r = n;
              break e;
            }
            n = n.return;
          }
          throw Error(a(160));
        }
        switch (r.tag) {
          case 5:
            var l = r.stateNode;
            r.flags & 32 && (J(l, ""), r.flags &= -33);
            var i = Ec(e);
            fa(e, i, l);
            break;
          case 3:
          case 4:
            var u = r.stateNode.containerInfo, p = Ec(e);
            da(e, p, u);
            break;
          default:
            throw Error(a(161));
        }
      } catch (g) {
        je(e, e.return, g);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function Yp(e, t, n) {
    Y = e, bc(e);
  }
  function bc(e, t, n) {
    for (var r = (e.mode & 1) !== 0; Y !== null; ) {
      var l = Y, i = l.child;
      if (l.tag === 22 && r) {
        var u = l.memoizedState !== null || pl;
        if (!u) {
          var p = l.alternate, g = p !== null && p.memoizedState !== null || at;
          p = pl;
          var k = at;
          if (pl = u, (at = g) && !k)
            for (Y = l; Y !== null; )
              u = Y, g = u.child, u.tag === 22 && u.memoizedState !== null ? Nc(l) : g !== null ? (g.return = u, Y = g) : Nc(l);
          for (; i !== null; )
            Y = i, bc(i), i = i.sibling;
          Y = l, pl = p, at = k;
        }
        Pc(e);
      } else
        l.subtreeFlags & 8772 && i !== null ? (i.return = l, Y = i) : Pc(e);
    }
  }
  function Pc(e) {
    for (; Y !== null; ) {
      var t = Y;
      if (t.flags & 8772) {
        var n = t.alternate;
        try {
          if (t.flags & 8772)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                at || ml(5, t);
                break;
              case 1:
                var r = t.stateNode;
                if (t.flags & 4 && !at)
                  if (n === null)
                    r.componentDidMount();
                  else {
                    var l = t.elementType === t.type ? n.memoizedProps : Lt(t.type, n.memoizedProps);
                    r.componentDidUpdate(l, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
                  }
                var i = t.updateQueue;
                i !== null && ku(t, i, r);
                break;
              case 3:
                var u = t.updateQueue;
                if (u !== null) {
                  if (n = null, t.child !== null)
                    switch (t.child.tag) {
                      case 5:
                        n = t.child.stateNode;
                        break;
                      case 1:
                        n = t.child.stateNode;
                    }
                  ku(t, u, n);
                }
                break;
              case 5:
                var p = t.stateNode;
                if (n === null && t.flags & 4) {
                  n = p;
                  var g = t.memoizedProps;
                  switch (t.type) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                      g.autoFocus && n.focus();
                      break;
                    case "img":
                      g.src && (n.src = g.src);
                  }
                }
                break;
              case 6:
                break;
              case 4:
                break;
              case 12:
                break;
              case 13:
                if (t.memoizedState === null) {
                  var k = t.alternate;
                  if (k !== null) {
                    var D = k.memoizedState;
                    if (D !== null) {
                      var z = D.dehydrated;
                      z !== null && Vr(z);
                    }
                  }
                }
                break;
              case 19:
              case 17:
              case 21:
              case 22:
              case 23:
              case 25:
                break;
              default:
                throw Error(a(163));
            }
          at || t.flags & 512 && ca(t);
        } catch (O) {
          je(t, t.return, O);
        }
      }
      if (t === e) {
        Y = null;
        break;
      }
      if (n = t.sibling, n !== null) {
        n.return = t.return, Y = n;
        break;
      }
      Y = t.return;
    }
  }
  function $c(e) {
    for (; Y !== null; ) {
      var t = Y;
      if (t === e) {
        Y = null;
        break;
      }
      var n = t.sibling;
      if (n !== null) {
        n.return = t.return, Y = n;
        break;
      }
      Y = t.return;
    }
  }
  function Nc(e) {
    for (; Y !== null; ) {
      var t = Y;
      try {
        switch (t.tag) {
          case 0:
          case 11:
          case 15:
            var n = t.return;
            try {
              ml(4, t);
            } catch (g) {
              je(t, n, g);
            }
            break;
          case 1:
            var r = t.stateNode;
            if (typeof r.componentDidMount == "function") {
              var l = t.return;
              try {
                r.componentDidMount();
              } catch (g) {
                je(t, l, g);
              }
            }
            var i = t.return;
            try {
              ca(t);
            } catch (g) {
              je(t, i, g);
            }
            break;
          case 5:
            var u = t.return;
            try {
              ca(t);
            } catch (g) {
              je(t, u, g);
            }
        }
      } catch (g) {
        je(t, t.return, g);
      }
      if (t === e) {
        Y = null;
        break;
      }
      var p = t.sibling;
      if (p !== null) {
        p.return = t.return, Y = p;
        break;
      }
      Y = t.return;
    }
  }
  var Kp = Math.ceil, vl = j.ReactCurrentDispatcher, pa = j.ReactCurrentOwner, _t = j.ReactCurrentBatchConfig, Ce = 0, Xe = null, We = null, et = 0, kt = 0, $r = Sn(0), Ye = 0, vo = null, Xn = 0, hl = 0, ma = 0, ho = null, mt = null, va = 0, Nr = 1 / 0, ln = null, gl = !1, ha = null, Nn = null, yl = !1, _n = null, wl = 0, go = 0, ga = null, xl = -1, El = 0;
  function ut() {
    return Ce & 6 ? Fe() : xl !== -1 ? xl : xl = Fe();
  }
  function Rn(e) {
    return e.mode & 1 ? Ce & 2 && et !== 0 ? et & -et : Tp.transition !== null ? (El === 0 && (El = xs()), El) : (e = $e, e !== 0 || (e = window.event, e = e === void 0 ? 16 : _s(e.type)), e) : 1;
  }
  function At(e, t, n, r) {
    if (50 < go)
      throw go = 0, ga = null, Error(a(185));
    Fr(e, n, r), (!(Ce & 2) || e !== Xe) && (e === Xe && (!(Ce & 2) && (hl |= n), Ye === 4 && Tn(e, et)), vt(e, r), n === 1 && Ce === 0 && !(t.mode & 1) && (Nr = Fe() + 500, Go && Cn()));
  }
  function vt(e, t) {
    var n = e.callbackNode;
    Tf(e, t);
    var r = Ro(e, e === Xe ? et : 0);
    if (r === 0)
      n !== null && gs(n), e.callbackNode = null, e.callbackPriority = 0;
    else if (t = r & -r, e.callbackPriority !== t) {
      if (n != null && gs(n), t === 1)
        e.tag === 0 ? Rp(Rc.bind(null, e)) : mu(Rc.bind(null, e)), Pp(function() {
          !(Ce & 6) && Cn();
        }), n = null;
      else {
        switch (Es(r)) {
          case 1:
            n = Xl;
            break;
          case 4:
            n = ys;
            break;
          case 16:
            n = Po;
            break;
          case 536870912:
            n = ws;
            break;
          default:
            n = Po;
        }
        n = Ac(n, _c.bind(null, e));
      }
      e.callbackPriority = t, e.callbackNode = n;
    }
  }
  function _c(e, t) {
    if (xl = -1, El = 0, Ce & 6)
      throw Error(a(327));
    var n = e.callbackNode;
    if (_r() && e.callbackNode !== n)
      return null;
    var r = Ro(e, e === Xe ? et : 0);
    if (r === 0)
      return null;
    if (r & 30 || r & e.expiredLanes || t)
      t = Sl(e, r);
    else {
      t = r;
      var l = Ce;
      Ce |= 2;
      var i = Oc();
      (Xe !== e || et !== t) && (ln = null, Nr = Fe() + 500, Jn(e, t));
      do
        try {
          Zp();
          break;
        } catch (p) {
          Tc(e, p);
        }
      while (!0);
      Li(), vl.current = i, Ce = l, We !== null ? t = 0 : (Xe = null, et = 0, t = Ye);
    }
    if (t !== 0) {
      if (t === 2 && (l = Zl(e), l !== 0 && (r = l, t = ya(e, l))), t === 1)
        throw n = vo, Jn(e, 0), Tn(e, r), vt(e, Fe()), n;
      if (t === 6)
        Tn(e, r);
      else {
        if (l = e.current.alternate, !(r & 30) && !Gp(l) && (t = Sl(e, r), t === 2 && (i = Zl(e), i !== 0 && (r = i, t = ya(e, i))), t === 1))
          throw n = vo, Jn(e, 0), Tn(e, r), vt(e, Fe()), n;
        switch (e.finishedWork = l, e.finishedLanes = r, t) {
          case 0:
          case 1:
            throw Error(a(345));
          case 2:
            qn(e, mt, ln);
            break;
          case 3:
            if (Tn(e, r), (r & 130023424) === r && (t = va + 500 - Fe(), 10 < t)) {
              if (Ro(e, 0) !== 0)
                break;
              if (l = e.suspendedLanes, (l & r) !== r) {
                ut(), e.pingedLanes |= e.suspendedLanes & l;
                break;
              }
              e.timeoutHandle = Ci(qn.bind(null, e, mt, ln), t);
              break;
            }
            qn(e, mt, ln);
            break;
          case 4:
            if (Tn(e, r), (r & 4194240) === r)
              break;
            for (t = e.eventTimes, l = -1; 0 < r; ) {
              var u = 31 - Ot(r);
              i = 1 << u, u = t[u], u > l && (l = u), r &= ~i;
            }
            if (r = l, r = Fe() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * Kp(r / 1960)) - r, 10 < r) {
              e.timeoutHandle = Ci(qn.bind(null, e, mt, ln), r);
              break;
            }
            qn(e, mt, ln);
            break;
          case 5:
            qn(e, mt, ln);
            break;
          default:
            throw Error(a(329));
        }
      }
    }
    return vt(e, Fe()), e.callbackNode === n ? _c.bind(null, e) : null;
  }
  function ya(e, t) {
    var n = ho;
    return e.current.memoizedState.isDehydrated && (Jn(e, t).flags |= 256), e = Sl(e, t), e !== 2 && (t = mt, mt = n, t !== null && wa(t)), e;
  }
  function wa(e) {
    mt === null ? mt = e : mt.push.apply(mt, e);
  }
  function Gp(e) {
    for (var t = e; ; ) {
      if (t.flags & 16384) {
        var n = t.updateQueue;
        if (n !== null && (n = n.stores, n !== null))
          for (var r = 0; r < n.length; r++) {
            var l = n[r], i = l.getSnapshot;
            l = l.value;
            try {
              if (!Dt(i(), l))
                return !1;
            } catch {
              return !1;
            }
          }
      }
      if (n = t.child, t.subtreeFlags & 16384 && n !== null)
        n.return = t, t = n;
      else {
        if (t === e)
          break;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e)
            return !0;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
    }
    return !0;
  }
  function Tn(e, t) {
    for (t &= ~ma, t &= ~hl, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
      var n = 31 - Ot(t), r = 1 << n;
      e[n] = -1, t &= ~r;
    }
  }
  function Rc(e) {
    if (Ce & 6)
      throw Error(a(327));
    _r();
    var t = Ro(e, 0);
    if (!(t & 1))
      return vt(e, Fe()), null;
    var n = Sl(e, t);
    if (e.tag !== 0 && n === 2) {
      var r = Zl(e);
      r !== 0 && (t = r, n = ya(e, r));
    }
    if (n === 1)
      throw n = vo, Jn(e, 0), Tn(e, t), vt(e, Fe()), n;
    if (n === 6)
      throw Error(a(345));
    return e.finishedWork = e.current.alternate, e.finishedLanes = t, qn(e, mt, ln), vt(e, Fe()), null;
  }
  function xa(e, t) {
    var n = Ce;
    Ce |= 1;
    try {
      return e(t);
    } finally {
      Ce = n, Ce === 0 && (Nr = Fe() + 500, Go && Cn());
    }
  }
  function Zn(e) {
    _n !== null && _n.tag === 0 && !(Ce & 6) && _r();
    var t = Ce;
    Ce |= 1;
    var n = _t.transition, r = $e;
    try {
      if (_t.transition = null, $e = 1, e)
        return e();
    } finally {
      $e = r, _t.transition = n, Ce = t, !(Ce & 6) && Cn();
    }
  }
  function Ea() {
    kt = $r.current, Oe($r);
  }
  function Jn(e, t) {
    e.finishedWork = null, e.finishedLanes = 0;
    var n = e.timeoutHandle;
    if (n !== -1 && (e.timeoutHandle = -1, bp(n)), We !== null)
      for (n = We.return; n !== null; ) {
        var r = n;
        switch (Ri(r), r.tag) {
          case 1:
            r = r.type.childContextTypes, r != null && Yo();
            break;
          case 3:
            Cr(), Oe(dt), Oe(ot), Vi();
            break;
          case 5:
            Wi(r);
            break;
          case 4:
            Cr();
            break;
          case 13:
            Oe(Ie);
            break;
          case 19:
            Oe(Ie);
            break;
          case 10:
            Mi(r.type._context);
            break;
          case 22:
          case 23:
            Ea();
        }
        n = n.return;
      }
    if (Xe = e, We = e = On(e.current, null), et = kt = t, Ye = 0, vo = null, ma = hl = Xn = 0, mt = ho = null, Yn !== null) {
      for (t = 0; t < Yn.length; t++)
        if (n = Yn[t], r = n.interleaved, r !== null) {
          n.interleaved = null;
          var l = r.next, i = n.pending;
          if (i !== null) {
            var u = i.next;
            i.next = l, r.next = u;
          }
          n.pending = r;
        }
      Yn = null;
    }
    return e;
  }
  function Tc(e, t) {
    do {
      var n = We;
      try {
        if (Li(), il.current = cl, al) {
          for (var r = Ae.memoizedState; r !== null; ) {
            var l = r.queue;
            l !== null && (l.pending = null), r = r.next;
          }
          al = !1;
        }
        if (Gn = 0, Ge = Qe = Ae = null, so = !1, uo = 0, pa.current = null, n === null || n.return === null) {
          Ye = 1, vo = t, We = null;
          break;
        }
        e: {
          var i = e, u = n.return, p = n, g = t;
          if (t = et, p.flags |= 32768, g !== null && typeof g == "object" && typeof g.then == "function") {
            var k = g, D = p, z = D.tag;
            if (!(D.mode & 1) && (z === 0 || z === 11 || z === 15)) {
              var O = D.alternate;
              O ? (D.updateQueue = O.updateQueue, D.memoizedState = O.memoizedState, D.lanes = O.lanes) : (D.updateQueue = null, D.memoizedState = null);
            }
            var Q = nc(u);
            if (Q !== null) {
              Q.flags &= -257, rc(Q, u, p, i, t), Q.mode & 1 && tc(i, k, t), t = Q, g = k;
              var X = t.updateQueue;
              if (X === null) {
                var Z = /* @__PURE__ */ new Set();
                Z.add(g), t.updateQueue = Z;
              } else
                X.add(g);
              break e;
            } else {
              if (!(t & 1)) {
                tc(i, k, t), Sa();
                break e;
              }
              g = Error(a(426));
            }
          } else if (Me && p.mode & 1) {
            var Ue = nc(u);
            if (Ue !== null) {
              !(Ue.flags & 65536) && (Ue.flags |= 256), rc(Ue, u, p, i, t), Di(br(g, p));
              break e;
            }
          }
          i = g = br(g, p), Ye !== 4 && (Ye = 2), ho === null ? ho = [i] : ho.push(i), i = u;
          do {
            switch (i.tag) {
              case 3:
                i.flags |= 65536, t &= -t, i.lanes |= t;
                var E = qu(i, g, t);
                Su(i, E);
                break e;
              case 1:
                p = g;
                var w = i.type, S = i.stateNode;
                if (!(i.flags & 128) && (typeof w.getDerivedStateFromError == "function" || S !== null && typeof S.componentDidCatch == "function" && (Nn === null || !Nn.has(S)))) {
                  i.flags |= 65536, t &= -t, i.lanes |= t;
                  var M = ec(i, p, t);
                  Su(i, M);
                  break e;
                }
            }
            i = i.return;
          } while (i !== null);
        }
        zc(n);
      } catch (q) {
        t = q, We === n && n !== null && (We = n = n.return);
        continue;
      }
      break;
    } while (!0);
  }
  function Oc() {
    var e = vl.current;
    return vl.current = cl, e === null ? cl : e;
  }
  function Sa() {
    (Ye === 0 || Ye === 3 || Ye === 2) && (Ye = 4), Xe === null || !(Xn & 268435455) && !(hl & 268435455) || Tn(Xe, et);
  }
  function Sl(e, t) {
    var n = Ce;
    Ce |= 2;
    var r = Oc();
    (Xe !== e || et !== t) && (ln = null, Jn(e, t));
    do
      try {
        Xp();
        break;
      } catch (l) {
        Tc(e, l);
      }
    while (!0);
    if (Li(), Ce = n, vl.current = r, We !== null)
      throw Error(a(261));
    return Xe = null, et = 0, Ye;
  }
  function Xp() {
    for (; We !== null; )
      Dc(We);
  }
  function Zp() {
    for (; We !== null && !Sf(); )
      Dc(We);
  }
  function Dc(e) {
    var t = Ic(e.alternate, e, kt);
    e.memoizedProps = e.pendingProps, t === null ? zc(e) : We = t, pa.current = null;
  }
  function zc(e) {
    var t = e;
    do {
      var n = t.alternate;
      if (e = t.return, t.flags & 32768) {
        if (n = Hp(n, t), n !== null) {
          n.flags &= 32767, We = n;
          return;
        }
        if (e !== null)
          e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
        else {
          Ye = 6, We = null;
          return;
        }
      } else if (n = Wp(n, t, kt), n !== null) {
        We = n;
        return;
      }
      if (t = t.sibling, t !== null) {
        We = t;
        return;
      }
      We = t = e;
    } while (t !== null);
    Ye === 0 && (Ye = 5);
  }
  function qn(e, t, n) {
    var r = $e, l = _t.transition;
    try {
      _t.transition = null, $e = 1, Jp(e, t, n, r);
    } finally {
      _t.transition = l, $e = r;
    }
    return null;
  }
  function Jp(e, t, n, r) {
    do
      _r();
    while (_n !== null);
    if (Ce & 6)
      throw Error(a(327));
    n = e.finishedWork;
    var l = e.finishedLanes;
    if (n === null)
      return null;
    if (e.finishedWork = null, e.finishedLanes = 0, n === e.current)
      throw Error(a(177));
    e.callbackNode = null, e.callbackPriority = 0;
    var i = n.lanes | n.childLanes;
    if (Of(e, i), e === Xe && (We = Xe = null, et = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || yl || (yl = !0, Ac(Po, function() {
      return _r(), null;
    })), i = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || i) {
      i = _t.transition, _t.transition = null;
      var u = $e;
      $e = 1;
      var p = Ce;
      Ce |= 4, pa.current = null, Qp(e, n), Cc(n, e), yp(Si), Do = !!Ei, Si = Ei = null, e.current = n, Yp(n), kf(), Ce = p, $e = u, _t.transition = i;
    } else
      e.current = n;
    if (yl && (yl = !1, _n = e, wl = l), i = e.pendingLanes, i === 0 && (Nn = null), Pf(n.stateNode), vt(e, Fe()), t !== null)
      for (r = e.onRecoverableError, n = 0; n < t.length; n++)
        l = t[n], r(l.value, { componentStack: l.stack, digest: l.digest });
    if (gl)
      throw gl = !1, e = ha, ha = null, e;
    return wl & 1 && e.tag !== 0 && _r(), i = e.pendingLanes, i & 1 ? e === ga ? go++ : (go = 0, ga = e) : go = 0, Cn(), null;
  }
  function _r() {
    if (_n !== null) {
      var e = Es(wl), t = _t.transition, n = $e;
      try {
        if (_t.transition = null, $e = 16 > e ? 16 : e, _n === null)
          var r = !1;
        else {
          if (e = _n, _n = null, wl = 0, Ce & 6)
            throw Error(a(331));
          var l = Ce;
          for (Ce |= 4, Y = e.current; Y !== null; ) {
            var i = Y, u = i.child;
            if (Y.flags & 16) {
              var p = i.deletions;
              if (p !== null) {
                for (var g = 0; g < p.length; g++) {
                  var k = p[g];
                  for (Y = k; Y !== null; ) {
                    var D = Y;
                    switch (D.tag) {
                      case 0:
                      case 11:
                      case 15:
                        mo(8, D, i);
                    }
                    var z = D.child;
                    if (z !== null)
                      z.return = D, Y = z;
                    else
                      for (; Y !== null; ) {
                        D = Y;
                        var O = D.sibling, Q = D.return;
                        if (wc(D), D === k) {
                          Y = null;
                          break;
                        }
                        if (O !== null) {
                          O.return = Q, Y = O;
                          break;
                        }
                        Y = Q;
                      }
                  }
                }
                var X = i.alternate;
                if (X !== null) {
                  var Z = X.child;
                  if (Z !== null) {
                    X.child = null;
                    do {
                      var Ue = Z.sibling;
                      Z.sibling = null, Z = Ue;
                    } while (Z !== null);
                  }
                }
                Y = i;
              }
            }
            if (i.subtreeFlags & 2064 && u !== null)
              u.return = i, Y = u;
            else
              e:
                for (; Y !== null; ) {
                  if (i = Y, i.flags & 2048)
                    switch (i.tag) {
                      case 0:
                      case 11:
                      case 15:
                        mo(9, i, i.return);
                    }
                  var E = i.sibling;
                  if (E !== null) {
                    E.return = i.return, Y = E;
                    break e;
                  }
                  Y = i.return;
                }
          }
          var w = e.current;
          for (Y = w; Y !== null; ) {
            u = Y;
            var S = u.child;
            if (u.subtreeFlags & 2064 && S !== null)
              S.return = u, Y = S;
            else
              e:
                for (u = w; Y !== null; ) {
                  if (p = Y, p.flags & 2048)
                    try {
                      switch (p.tag) {
                        case 0:
                        case 11:
                        case 15:
                          ml(9, p);
                      }
                    } catch (q) {
                      je(p, p.return, q);
                    }
                  if (p === u) {
                    Y = null;
                    break e;
                  }
                  var M = p.sibling;
                  if (M !== null) {
                    M.return = p.return, Y = M;
                    break e;
                  }
                  Y = p.return;
                }
          }
          if (Ce = l, Cn(), Ht && typeof Ht.onPostCommitFiberRoot == "function")
            try {
              Ht.onPostCommitFiberRoot($o, e);
            } catch {
            }
          r = !0;
        }
        return r;
      } finally {
        $e = n, _t.transition = t;
      }
    }
    return !1;
  }
  function Lc(e, t, n) {
    t = br(n, t), t = qu(e, t, 1), e = Pn(e, t, 1), t = ut(), e !== null && (Fr(e, 1, t), vt(e, t));
  }
  function je(e, t, n) {
    if (e.tag === 3)
      Lc(e, e, n);
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          Lc(t, e, n);
          break;
        } else if (t.tag === 1) {
          var r = t.stateNode;
          if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (Nn === null || !Nn.has(r))) {
            e = br(n, e), e = ec(t, e, 1), t = Pn(t, e, 1), e = ut(), t !== null && (Fr(t, 1, e), vt(t, e));
            break;
          }
        }
        t = t.return;
      }
  }
  function qp(e, t, n) {
    var r = e.pingCache;
    r !== null && r.delete(t), t = ut(), e.pingedLanes |= e.suspendedLanes & n, Xe === e && (et & n) === n && (Ye === 4 || Ye === 3 && (et & 130023424) === et && 500 > Fe() - va ? Jn(e, 0) : ma |= n), vt(e, t);
  }
  function Mc(e, t) {
    t === 0 && (e.mode & 1 ? (t = _o, _o <<= 1, !(_o & 130023424) && (_o = 4194304)) : t = 1);
    var n = ut();
    e = nn(e, t), e !== null && (Fr(e, t, n), vt(e, n));
  }
  function em(e) {
    var t = e.memoizedState, n = 0;
    t !== null && (n = t.retryLane), Mc(e, n);
  }
  function tm(e, t) {
    var n = 0;
    switch (e.tag) {
      case 13:
        var r = e.stateNode, l = e.memoizedState;
        l !== null && (n = l.retryLane);
        break;
      case 19:
        r = e.stateNode;
        break;
      default:
        throw Error(a(314));
    }
    r !== null && r.delete(t), Mc(e, n);
  }
  var Ic;
  Ic = function(e, t, n) {
    if (e !== null)
      if (e.memoizedProps !== t.pendingProps || dt.current)
        pt = !0;
      else {
        if (!(e.lanes & n) && !(t.flags & 128))
          return pt = !1, Bp(e, t, n);
        pt = !!(e.flags & 131072);
      }
    else
      pt = !1, Me && t.flags & 1048576 && vu(t, Zo, t.index);
    switch (t.lanes = 0, t.tag) {
      case 2:
        var r = t.type;
        fl(e, t), e = t.pendingProps;
        var l = gr(t, ot.current);
        Sr(t, n), l = Ki(null, t, r, e, l, n);
        var i = Gi();
        return t.flags |= 1, typeof l == "object" && l !== null && typeof l.render == "function" && l.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, ft(r) ? (i = !0, Ko(t)) : i = !1, t.memoizedState = l.state !== null && l.state !== void 0 ? l.state : null, ji(t), l.updater = rl, t.stateNode = l, l._reactInternals = t, Ui(t, r, e, n), t = ra(null, t, r, !0, i, n)) : (t.tag = 0, Me && i && _i(t), st(null, t, l, n), t = t.child), t;
      case 16:
        r = t.elementType;
        e: {
          switch (fl(e, t), e = t.pendingProps, l = r._init, r = l(r._payload), t.type = r, l = t.tag = rm(r), e = Lt(r, e), l) {
            case 0:
              t = na(null, t, r, e, n);
              break e;
            case 1:
              t = uc(null, t, r, e, n);
              break e;
            case 11:
              t = oc(null, t, r, e, n);
              break e;
            case 14:
              t = lc(null, t, r, Lt(r.type, e), n);
              break e;
          }
          throw Error(a(
            306,
            r,
            ""
          ));
        }
        return t;
      case 0:
        return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : Lt(r, l), na(e, t, r, l, n);
      case 1:
        return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : Lt(r, l), uc(e, t, r, l, n);
      case 3:
        e: {
          if (cc(t), e === null)
            throw Error(a(387));
          r = t.pendingProps, i = t.memoizedState, l = i.element, Eu(e, t), nl(t, r, null, n);
          var u = t.memoizedState;
          if (r = u.element, i.isDehydrated)
            if (i = { element: r, isDehydrated: !1, cache: u.cache, pendingSuspenseBoundaries: u.pendingSuspenseBoundaries, transitions: u.transitions }, t.updateQueue.baseState = i, t.memoizedState = i, t.flags & 256) {
              l = br(Error(a(423)), t), t = dc(e, t, r, n, l);
              break e;
            } else if (r !== l) {
              l = br(Error(a(424)), t), t = dc(e, t, r, n, l);
              break e;
            } else
              for (St = En(t.stateNode.containerInfo.firstChild), Et = t, Me = !0, zt = null, n = Ru(t, null, r, n), t.child = n; n; )
                n.flags = n.flags & -3 | 4096, n = n.sibling;
          else {
            if (xr(), r === l) {
              t = on(e, t, n);
              break e;
            }
            st(e, t, r, n);
          }
          t = t.child;
        }
        return t;
      case 5:
        return Tu(t), e === null && Oi(t), r = t.type, l = t.pendingProps, i = e !== null ? e.memoizedProps : null, u = l.children, ki(r, l) ? u = null : i !== null && ki(r, i) && (t.flags |= 32), sc(e, t), st(e, t, u, n), t.child;
      case 6:
        return e === null && Oi(t), null;
      case 13:
        return fc(e, t, n);
      case 4:
        return Bi(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = kr(t, null, r, n) : st(e, t, r, n), t.child;
      case 11:
        return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : Lt(r, l), oc(e, t, r, l, n);
      case 7:
        return st(e, t, t.pendingProps, n), t.child;
      case 8:
        return st(e, t, t.pendingProps.children, n), t.child;
      case 12:
        return st(e, t, t.pendingProps.children, n), t.child;
      case 10:
        e: {
          if (r = t.type._context, l = t.pendingProps, i = t.memoizedProps, u = l.value, Re(qo, r._currentValue), r._currentValue = u, i !== null)
            if (Dt(i.value, u)) {
              if (i.children === l.children && !dt.current) {
                t = on(e, t, n);
                break e;
              }
            } else
              for (i = t.child, i !== null && (i.return = t); i !== null; ) {
                var p = i.dependencies;
                if (p !== null) {
                  u = i.child;
                  for (var g = p.firstContext; g !== null; ) {
                    if (g.context === r) {
                      if (i.tag === 1) {
                        g = rn(-1, n & -n), g.tag = 2;
                        var k = i.updateQueue;
                        if (k !== null) {
                          k = k.shared;
                          var D = k.pending;
                          D === null ? g.next = g : (g.next = D.next, D.next = g), k.pending = g;
                        }
                      }
                      i.lanes |= n, g = i.alternate, g !== null && (g.lanes |= n), Ii(
                        i.return,
                        n,
                        t
                      ), p.lanes |= n;
                      break;
                    }
                    g = g.next;
                  }
                } else if (i.tag === 10)
                  u = i.type === t.type ? null : i.child;
                else if (i.tag === 18) {
                  if (u = i.return, u === null)
                    throw Error(a(341));
                  u.lanes |= n, p = u.alternate, p !== null && (p.lanes |= n), Ii(u, n, t), u = i.sibling;
                } else
                  u = i.child;
                if (u !== null)
                  u.return = i;
                else
                  for (u = i; u !== null; ) {
                    if (u === t) {
                      u = null;
                      break;
                    }
                    if (i = u.sibling, i !== null) {
                      i.return = u.return, u = i;
                      break;
                    }
                    u = u.return;
                  }
                i = u;
              }
          st(e, t, l.children, n), t = t.child;
        }
        return t;
      case 9:
        return l = t.type, r = t.pendingProps.children, Sr(t, n), l = $t(l), r = r(l), t.flags |= 1, st(e, t, r, n), t.child;
      case 14:
        return r = t.type, l = Lt(r, t.pendingProps), l = Lt(r.type, l), lc(e, t, r, l, n);
      case 15:
        return ic(e, t, t.type, t.pendingProps, n);
      case 17:
        return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : Lt(r, l), fl(e, t), t.tag = 1, ft(r) ? (e = !0, Ko(t)) : e = !1, Sr(t, n), Pu(t, r, l), Ui(t, r, l, n), ra(null, t, r, !0, e, n);
      case 19:
        return mc(e, t, n);
      case 22:
        return ac(e, t, n);
    }
    throw Error(a(156, t.tag));
  };
  function Ac(e, t) {
    return hs(e, t);
  }
  function nm(e, t, n, r) {
    this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function Rt(e, t, n, r) {
    return new nm(e, t, n, r);
  }
  function ka(e) {
    return e = e.prototype, !(!e || !e.isReactComponent);
  }
  function rm(e) {
    if (typeof e == "function")
      return ka(e) ? 1 : 0;
    if (e != null) {
      if (e = e.$$typeof, e === ue)
        return 11;
      if (e === Be)
        return 14;
    }
    return 2;
  }
  function On(e, t) {
    var n = e.alternate;
    return n === null ? (n = Rt(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
  }
  function kl(e, t, n, r, l, i) {
    var u = 2;
    if (r = e, typeof e == "function")
      ka(e) && (u = 1);
    else if (typeof e == "string")
      u = 5;
    else
      e:
        switch (e) {
          case ie:
            return er(n.children, l, i, t);
          case te:
            u = 8, l |= 8;
            break;
          case he:
            return e = Rt(12, n, t, l | 2), e.elementType = he, e.lanes = i, e;
          case ye:
            return e = Rt(13, n, t, l), e.elementType = ye, e.lanes = i, e;
          case fe:
            return e = Rt(19, n, t, l), e.elementType = fe, e.lanes = i, e;
          case pe:
            return Cl(n, l, i, t);
          default:
            if (typeof e == "object" && e !== null)
              switch (e.$$typeof) {
                case Ne:
                  u = 10;
                  break e;
                case Le:
                  u = 9;
                  break e;
                case ue:
                  u = 11;
                  break e;
                case Be:
                  u = 14;
                  break e;
                case ge:
                  u = 16, r = null;
                  break e;
              }
            throw Error(a(130, e == null ? e : typeof e, ""));
        }
    return t = Rt(u, n, t, l), t.elementType = e, t.type = r, t.lanes = i, t;
  }
  function er(e, t, n, r) {
    return e = Rt(7, e, r, t), e.lanes = n, e;
  }
  function Cl(e, t, n, r) {
    return e = Rt(22, e, r, t), e.elementType = pe, e.lanes = n, e.stateNode = { isHidden: !1 }, e;
  }
  function Ca(e, t, n) {
    return e = Rt(6, e, null, t), e.lanes = n, e;
  }
  function ba(e, t, n) {
    return t = Rt(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
  }
  function om(e, t, n, r, l) {
    this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Jl(0), this.expirationTimes = Jl(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Jl(0), this.identifierPrefix = r, this.onRecoverableError = l, this.mutableSourceEagerHydrationData = null;
  }
  function Pa(e, t, n, r, l, i, u, p, g) {
    return e = new om(e, t, n, p, g), t === 1 ? (t = 1, i === !0 && (t |= 8)) : t = 0, i = Rt(3, null, null, t), e.current = i, i.stateNode = e, i.memoizedState = { element: r, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, ji(i), e;
  }
  function lm(e, t, n) {
    var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: ne, key: r == null ? null : "" + r, children: e, containerInfo: t, implementation: n };
  }
  function jc(e) {
    if (!e)
      return kn;
    e = e._reactInternals;
    e: {
      if (Bn(e) !== e || e.tag !== 1)
        throw Error(a(170));
      var t = e;
      do {
        switch (t.tag) {
          case 3:
            t = t.stateNode.context;
            break e;
          case 1:
            if (ft(t.type)) {
              t = t.stateNode.__reactInternalMemoizedMergedChildContext;
              break e;
            }
        }
        t = t.return;
      } while (t !== null);
      throw Error(a(171));
    }
    if (e.tag === 1) {
      var n = e.type;
      if (ft(n))
        return fu(e, n, t);
    }
    return t;
  }
  function Fc(e, t, n, r, l, i, u, p, g) {
    return e = Pa(n, r, !0, e, l, i, u, p, g), e.context = jc(null), n = e.current, r = ut(), l = Rn(n), i = rn(r, l), i.callback = t ?? null, Pn(n, i, l), e.current.lanes = l, Fr(e, l, r), vt(e, r), e;
  }
  function bl(e, t, n, r) {
    var l = t.current, i = ut(), u = Rn(l);
    return n = jc(n), t.context === null ? t.context = n : t.pendingContext = n, t = rn(i, u), t.payload = { element: e }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = Pn(l, t, u), e !== null && (At(e, l, u, i), tl(e, l, u)), u;
  }
  function Pl(e) {
    if (e = e.current, !e.child)
      return null;
    switch (e.child.tag) {
      case 5:
        return e.child.stateNode;
      default:
        return e.child.stateNode;
    }
  }
  function Uc(e, t) {
    if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
      var n = e.retryLane;
      e.retryLane = n !== 0 && n < t ? n : t;
    }
  }
  function $a(e, t) {
    Uc(e, t), (e = e.alternate) && Uc(e, t);
  }
  function im() {
    return null;
  }
  var Bc = typeof reportError == "function" ? reportError : function(e) {
    console.error(e);
  };
  function Na(e) {
    this._internalRoot = e;
  }
  $l.prototype.render = Na.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null)
      throw Error(a(409));
    bl(e, t, null, null);
  }, $l.prototype.unmount = Na.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
      this._internalRoot = null;
      var t = e.containerInfo;
      Zn(function() {
        bl(null, e, null, null);
      }), t[Jt] = null;
    }
  };
  function $l(e) {
    this._internalRoot = e;
  }
  $l.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
      var t = Cs();
      e = { blockedOn: null, target: e, priority: t };
      for (var n = 0; n < yn.length && t !== 0 && t < yn[n].priority; n++)
        ;
      yn.splice(n, 0, e), n === 0 && $s(e);
    }
  };
  function _a(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
  }
  function Nl(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
  }
  function Wc() {
  }
  function am(e, t, n, r, l) {
    if (l) {
      if (typeof r == "function") {
        var i = r;
        r = function() {
          var k = Pl(u);
          i.call(k);
        };
      }
      var u = Fc(t, r, e, 0, null, !1, !1, "", Wc);
      return e._reactRootContainer = u, e[Jt] = u.current, eo(e.nodeType === 8 ? e.parentNode : e), Zn(), u;
    }
    for (; l = e.lastChild; )
      e.removeChild(l);
    if (typeof r == "function") {
      var p = r;
      r = function() {
        var k = Pl(g);
        p.call(k);
      };
    }
    var g = Pa(e, 0, !1, null, null, !1, !1, "", Wc);
    return e._reactRootContainer = g, e[Jt] = g.current, eo(e.nodeType === 8 ? e.parentNode : e), Zn(function() {
      bl(t, g, n, r);
    }), g;
  }
  function _l(e, t, n, r, l) {
    var i = n._reactRootContainer;
    if (i) {
      var u = i;
      if (typeof l == "function") {
        var p = l;
        l = function() {
          var g = Pl(u);
          p.call(g);
        };
      }
      bl(t, u, e, l);
    } else
      u = am(n, t, e, l, r);
    return Pl(u);
  }
  Ss = function(e) {
    switch (e.tag) {
      case 3:
        var t = e.stateNode;
        if (t.current.memoizedState.isDehydrated) {
          var n = jr(t.pendingLanes);
          n !== 0 && (ql(t, n | 1), vt(t, Fe()), !(Ce & 6) && (Nr = Fe() + 500, Cn()));
        }
        break;
      case 13:
        Zn(function() {
          var r = nn(e, 1);
          if (r !== null) {
            var l = ut();
            At(r, e, 1, l);
          }
        }), $a(e, 1);
    }
  }, ei = function(e) {
    if (e.tag === 13) {
      var t = nn(e, 134217728);
      if (t !== null) {
        var n = ut();
        At(t, e, 134217728, n);
      }
      $a(e, 134217728);
    }
  }, ks = function(e) {
    if (e.tag === 13) {
      var t = Rn(e), n = nn(e, t);
      if (n !== null) {
        var r = ut();
        At(n, e, t, r);
      }
      $a(e, t);
    }
  }, Cs = function() {
    return $e;
  }, bs = function(e, t) {
    var n = $e;
    try {
      return $e = e, t();
    } finally {
      $e = n;
    }
  }, mn = function(e, t, n) {
    switch (t) {
      case "input":
        if (Bt(e, n), t = n.name, n.type === "radio" && t != null) {
          for (n = e; n.parentNode; )
            n = n.parentNode;
          for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
            var r = n[t];
            if (r !== e && r.form === e.form) {
              var l = Qo(r);
              if (!l)
                throw Error(a(90));
              Fn(r), Bt(r, l);
            }
          }
        }
        break;
      case "textarea":
        cn(e, n);
        break;
      case "select":
        t = n.value, t != null && nt(e, !!n.multiple, t, !1);
    }
  }, us = xa, cs = Zn;
  var sm = { usingClientEntryPoint: !1, Events: [ro, vr, Qo, as, ss, xa] }, yo = { findFiberByHostInstance: Wn, bundleType: 0, version: "18.2.0", rendererPackageName: "react-dom" }, um = { bundleType: yo.bundleType, version: yo.version, rendererPackageName: yo.rendererPackageName, rendererConfig: yo.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: j.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
    return e = ms(e), e === null ? null : e.stateNode;
  }, findFiberByHostInstance: yo.findFiberByHostInstance || im, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.2.0-next-9e3b772b8-20220608" };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Rl = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Rl.isDisabled && Rl.supportsFiber)
      try {
        $o = Rl.inject(um), Ht = Rl;
      } catch {
      }
  }
  return ht.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = sm, ht.createPortal = function(e, t) {
    var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!_a(t))
      throw Error(a(200));
    return lm(e, t, null, n);
  }, ht.createRoot = function(e, t) {
    if (!_a(e))
      throw Error(a(299));
    var n = !1, r = "", l = Bc;
    return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (l = t.onRecoverableError)), t = Pa(e, 1, !1, null, null, n, !1, r, l), e[Jt] = t.current, eo(e.nodeType === 8 ? e.parentNode : e), new Na(t);
  }, ht.findDOMNode = function(e) {
    if (e == null)
      return null;
    if (e.nodeType === 1)
      return e;
    var t = e._reactInternals;
    if (t === void 0)
      throw typeof e.render == "function" ? Error(a(188)) : (e = Object.keys(e).join(","), Error(a(268, e)));
    return e = ms(t), e = e === null ? null : e.stateNode, e;
  }, ht.flushSync = function(e) {
    return Zn(e);
  }, ht.hydrate = function(e, t, n) {
    if (!Nl(t))
      throw Error(a(200));
    return _l(null, e, t, !0, n);
  }, ht.hydrateRoot = function(e, t, n) {
    if (!_a(e))
      throw Error(a(405));
    var r = n != null && n.hydratedSources || null, l = !1, i = "", u = Bc;
    if (n != null && (n.unstable_strictMode === !0 && (l = !0), n.identifierPrefix !== void 0 && (i = n.identifierPrefix), n.onRecoverableError !== void 0 && (u = n.onRecoverableError)), t = Fc(t, null, e, 1, n ?? null, l, !1, i, u), e[Jt] = t.current, eo(e), r)
      for (e = 0; e < r.length; e++)
        n = r[e], l = n._getVersion, l = l(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, l] : t.mutableSourceEagerHydrationData.push(
          n,
          l
        );
    return new $l(t);
  }, ht.render = function(e, t, n) {
    if (!Nl(t))
      throw Error(a(200));
    return _l(null, e, t, !1, n);
  }, ht.unmountComponentAtNode = function(e) {
    if (!Nl(e))
      throw Error(a(40));
    return e._reactRootContainer ? (Zn(function() {
      _l(null, null, e, !1, function() {
        e._reactRootContainer = null, e[Jt] = null;
      });
    }), !0) : !1;
  }, ht.unstable_batchedUpdates = xa, ht.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
    if (!Nl(n))
      throw Error(a(200));
    if (e == null || e._reactInternals === void 0)
      throw Error(a(38));
    return _l(e, t, n, !1, r);
  }, ht.version = "18.2.0-next-9e3b772b8-20220608", ht;
}
function wd() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(wd);
    } catch (o) {
      console.error(o);
    }
}
wd(), yd.exports = xm();
var Hl = yd.exports;
const xd = /* @__PURE__ */ vd(Hl);
function Em(o, { insertAt: s } = {}) {
  if (!o || typeof document > "u")
    return;
  let a = document.head || document.getElementsByTagName("head")[0], c = document.createElement("style");
  c.type = "text/css", s === "top" && a.firstChild ? a.insertBefore(c, a.firstChild) : a.appendChild(c), c.styleSheet ? c.styleSheet.cssText = o : c.appendChild(document.createTextNode(o));
}
Em(`html[dir=ltr],[data-sonner-toaster][dir=ltr]{--toast-icon-margin-start: -3px;--toast-icon-margin-end: 4px;--toast-svg-margin-start: -1px;--toast-svg-margin-end: 0px;--toast-button-margin-start: auto;--toast-button-margin-end: 0;--toast-close-button-start: 0;--toast-close-button-end: unset;--toast-close-button-transform: translate(-35%, -35%)}html[dir=rtl],[data-sonner-toaster][dir=rtl]{--toast-icon-margin-start: 4px;--toast-icon-margin-end: -3px;--toast-svg-margin-start: 0px;--toast-svg-margin-end: -1px;--toast-button-margin-start: 0;--toast-button-margin-end: auto;--toast-close-button-start: unset;--toast-close-button-end: 0;--toast-close-button-transform: translate(35%, -35%)}[data-sonner-toaster]{position:fixed;width:var(--width);font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;--gray1: hsl(0, 0%, 99%);--gray2: hsl(0, 0%, 97.3%);--gray3: hsl(0, 0%, 95.1%);--gray4: hsl(0, 0%, 93%);--gray5: hsl(0, 0%, 90.9%);--gray6: hsl(0, 0%, 88.7%);--gray7: hsl(0, 0%, 85.8%);--gray8: hsl(0, 0%, 78%);--gray9: hsl(0, 0%, 56.1%);--gray10: hsl(0, 0%, 52.3%);--gray11: hsl(0, 0%, 43.5%);--gray12: hsl(0, 0%, 9%);--border-radius: 8px;box-sizing:border-box;padding:0;margin:0;list-style:none;outline:none;z-index:999999999}[data-sonner-toaster][data-x-position=right]{right:max(var(--offset),env(safe-area-inset-right))}[data-sonner-toaster][data-x-position=left]{left:max(var(--offset),env(safe-area-inset-left))}[data-sonner-toaster][data-x-position=center]{left:50%;transform:translate(-50%)}[data-sonner-toaster][data-y-position=top]{top:max(var(--offset),env(safe-area-inset-top))}[data-sonner-toaster][data-y-position=bottom]{bottom:max(var(--offset),env(safe-area-inset-bottom))}[data-sonner-toast]{--y: translateY(100%);--lift-amount: calc(var(--lift) * var(--gap));z-index:var(--z-index);position:absolute;opacity:0;transform:var(--y);touch-action:none;will-change:transform,opacity,height;transition:transform .4s,opacity .4s,height .4s,box-shadow .2s;box-sizing:border-box;outline:none;overflow-wrap:anywhere}[data-sonner-toast][data-styled=true]{padding:16px;background:var(--normal-bg);border:1px solid var(--normal-border);color:var(--normal-text);border-radius:var(--border-radius);box-shadow:0 4px 12px #0000001a;width:var(--width);font-size:13px;display:flex;align-items:center;gap:6px}[data-sonner-toast]:focus-visible{box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}[data-sonner-toast][data-y-position=top]{top:0;--y: translateY(-100%);--lift: 1;--lift-amount: calc(1 * var(--gap))}[data-sonner-toast][data-y-position=bottom]{bottom:0;--y: translateY(100%);--lift: -1;--lift-amount: calc(var(--lift) * var(--gap))}[data-sonner-toast] [data-description]{font-weight:400;line-height:1.4;color:inherit}[data-sonner-toast] [data-title]{font-weight:500;line-height:1.5;color:inherit}[data-sonner-toast] [data-icon]{display:flex;height:16px;width:16px;position:relative;justify-content:flex-start;align-items:center;flex-shrink:0;margin-left:var(--toast-icon-margin-start);margin-right:var(--toast-icon-margin-end)}[data-sonner-toast][data-promise=true] [data-icon]>svg{opacity:0;transform:scale(.8);transform-origin:center;animation:sonner-fade-in .3s ease forwards}[data-sonner-toast] [data-icon]>*{flex-shrink:0}[data-sonner-toast] [data-icon] svg{margin-left:var(--toast-svg-margin-start);margin-right:var(--toast-svg-margin-end)}[data-sonner-toast] [data-content]{display:flex;flex-direction:column;gap:2px}[data-sonner-toast] [data-button]{border-radius:4px;padding-left:8px;padding-right:8px;height:24px;font-size:12px;color:var(--normal-bg);background:var(--normal-text);margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end);border:none;cursor:pointer;outline:none;display:flex;align-items:center;flex-shrink:0;transition:opacity .4s,box-shadow .2s}[data-sonner-toast] [data-button]:focus-visible{box-shadow:0 0 0 2px #0006}[data-sonner-toast] [data-button]:first-of-type{margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end)}[data-sonner-toast] [data-cancel]{color:var(--normal-text);background:rgba(0,0,0,.08)}[data-sonner-toast][data-theme=dark] [data-cancel]{background:rgba(255,255,255,.3)}[data-sonner-toast] [data-close-button]{position:absolute;left:var(--toast-close-button-start);right:var(--toast-close-button-end);top:0;height:20px;width:20px;display:flex;justify-content:center;align-items:center;padding:0;background:var(--gray1);color:var(--gray12);border:1px solid var(--gray4);transform:var(--toast-close-button-transform);border-radius:50%;cursor:pointer;z-index:1;transition:opacity .1s,background .2s,border-color .2s}[data-sonner-toast] [data-close-button]:focus-visible{box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}[data-sonner-toast] [data-disabled=true]{cursor:not-allowed}[data-sonner-toast]:hover [data-close-button]:hover{background:var(--gray2);border-color:var(--gray5)}[data-sonner-toast][data-swiping=true]:before{content:"";position:absolute;left:0;right:0;height:100%;z-index:-1}[data-sonner-toast][data-y-position=top][data-swiping=true]:before{bottom:50%;transform:scaleY(3) translateY(50%)}[data-sonner-toast][data-y-position=bottom][data-swiping=true]:before{top:50%;transform:scaleY(3) translateY(-50%)}[data-sonner-toast][data-swiping=false][data-removed=true]:before{content:"";position:absolute;inset:0;transform:scaleY(2)}[data-sonner-toast]:after{content:"";position:absolute;left:0;height:calc(var(--gap) + 1px);bottom:100%;width:100%}[data-sonner-toast][data-mounted=true]{--y: translateY(0);opacity:1}[data-sonner-toast][data-expanded=false][data-front=false]{--scale: var(--toasts-before) * .05 + 1;--y: translateY(calc(var(--lift-amount) * var(--toasts-before))) scale(calc(-1 * var(--scale)));height:var(--front-toast-height)}[data-sonner-toast]>*{transition:opacity .4s}[data-sonner-toast][data-expanded=false][data-front=false][data-styled=true]>*{opacity:0}[data-sonner-toast][data-visible=false]{opacity:0;pointer-events:none}[data-sonner-toast][data-mounted=true][data-expanded=true]{--y: translateY(calc(var(--lift) * var(--offset)));height:var(--initial-height)}[data-sonner-toast][data-removed=true][data-front=true][data-swipe-out=false]{--y: translateY(calc(var(--lift) * -100%));opacity:0}[data-sonner-toast][data-removed=true][data-front=false][data-swipe-out=false][data-expanded=true]{--y: translateY(calc(var(--lift) * var(--offset) + var(--lift) * -100%));opacity:0}[data-sonner-toast][data-removed=true][data-front=false][data-swipe-out=false][data-expanded=false]{--y: translateY(40%);opacity:0;transition:transform .5s,opacity .2s}[data-sonner-toast][data-removed=true][data-front=false]:before{height:calc(var(--initial-height) + 20%)}[data-sonner-toast][data-swiping=true]{transform:var(--y) translateY(var(--swipe-amount, 0px));transition:none}[data-sonner-toast][data-swipe-out=true][data-y-position=bottom],[data-sonner-toast][data-swipe-out=true][data-y-position=top]{animation:swipe-out .2s ease-out forwards}@keyframes swipe-out{0%{transform:translateY(calc(var(--lift) * var(--offset) + var(--swipe-amount)));opacity:1}to{transform:translateY(calc(var(--lift) * var(--offset) + var(--swipe-amount) + var(--lift) * -100%));opacity:0}}@media (max-width: 600px){[data-sonner-toaster]{position:fixed;--mobile-offset: 16px;right:var(--mobile-offset);left:var(--mobile-offset);width:100%}[data-sonner-toaster] [data-sonner-toast]{left:0;right:0;width:calc(100% - 32px)}[data-sonner-toaster][data-x-position=left]{left:var(--mobile-offset)}[data-sonner-toaster][data-y-position=bottom]{bottom:20px}[data-sonner-toaster][data-y-position=top]{top:20px}[data-sonner-toaster][data-x-position=center]{left:var(--mobile-offset);right:var(--mobile-offset);transform:none}}[data-sonner-toaster][data-theme=light]{--normal-bg: #fff;--normal-border: var(--gray4);--normal-text: var(--gray12);--success-bg: hsl(143, 85%, 96%);--success-border: hsl(145, 92%, 91%);--success-text: hsl(140, 100%, 27%);--info-bg: hsl(208, 100%, 97%);--info-border: hsl(221, 91%, 91%);--info-text: hsl(210, 92%, 45%);--warning-bg: hsl(49, 100%, 97%);--warning-border: hsl(49, 91%, 91%);--warning-text: hsl(31, 92%, 45%);--error-bg: hsl(359, 100%, 97%);--error-border: hsl(359, 100%, 94%);--error-text: hsl(360, 100%, 45%)}[data-sonner-toaster][data-theme=light] [data-sonner-toast][data-invert=true]{--normal-bg: #000;--normal-border: hsl(0, 0%, 20%);--normal-text: var(--gray1)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast][data-invert=true]{--normal-bg: #fff;--normal-border: var(--gray3);--normal-text: var(--gray12)}[data-sonner-toaster][data-theme=dark]{--normal-bg: #000;--normal-border: hsl(0, 0%, 20%);--normal-text: var(--gray1);--success-bg: hsl(150, 100%, 6%);--success-border: hsl(147, 100%, 12%);--success-text: hsl(150, 86%, 65%);--info-bg: hsl(215, 100%, 6%);--info-border: hsl(223, 100%, 12%);--info-text: hsl(216, 87%, 65%);--warning-bg: hsl(64, 100%, 6%);--warning-border: hsl(60, 100%, 12%);--warning-text: hsl(46, 87%, 65%);--error-bg: hsl(358, 76%, 10%);--error-border: hsl(357, 89%, 16%);--error-text: hsl(358, 100%, 81%)}[data-rich-colors=true] [data-sonner-toast][data-type=success],[data-rich-colors=true] [data-sonner-toast][data-type=success] [data-close-button]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true] [data-sonner-toast][data-type=info],[data-rich-colors=true] [data-sonner-toast][data-type=info] [data-close-button]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true] [data-sonner-toast][data-type=warning],[data-rich-colors=true] [data-sonner-toast][data-type=warning] [data-close-button]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true] [data-sonner-toast][data-type=error],[data-rich-colors=true] [data-sonner-toast][data-type=error] [data-close-button]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}.sonner-loading-wrapper{--size: 16px;height:var(--size);width:var(--size);position:absolute;inset:0;z-index:10}.sonner-loading-wrapper[data-visible=false]{transform-origin:center;animation:sonner-fade-out .2s ease forwards}.sonner-spinner{position:relative;top:50%;left:50%;height:var(--size);width:var(--size)}.sonner-loading-bar{animation:sonner-spin 1.2s linear infinite;background:var(--gray11);border-radius:6px;height:8%;left:-10%;position:absolute;top:-3.9%;width:24%}.sonner-loading-bar:nth-child(1){animation-delay:-1.2s;transform:rotate(.0001deg) translate(146%)}.sonner-loading-bar:nth-child(2){animation-delay:-1.1s;transform:rotate(30deg) translate(146%)}.sonner-loading-bar:nth-child(3){animation-delay:-1s;transform:rotate(60deg) translate(146%)}.sonner-loading-bar:nth-child(4){animation-delay:-.9s;transform:rotate(90deg) translate(146%)}.sonner-loading-bar:nth-child(5){animation-delay:-.8s;transform:rotate(120deg) translate(146%)}.sonner-loading-bar:nth-child(6){animation-delay:-.7s;transform:rotate(150deg) translate(146%)}.sonner-loading-bar:nth-child(7){animation-delay:-.6s;transform:rotate(180deg) translate(146%)}.sonner-loading-bar:nth-child(8){animation-delay:-.5s;transform:rotate(210deg) translate(146%)}.sonner-loading-bar:nth-child(9){animation-delay:-.4s;transform:rotate(240deg) translate(146%)}.sonner-loading-bar:nth-child(10){animation-delay:-.3s;transform:rotate(270deg) translate(146%)}.sonner-loading-bar:nth-child(11){animation-delay:-.2s;transform:rotate(300deg) translate(146%)}.sonner-loading-bar:nth-child(12){animation-delay:-.1s;transform:rotate(330deg) translate(146%)}@keyframes sonner-fade-in{0%{opacity:0;transform:scale(.8)}to{opacity:1;transform:scale(1)}}@keyframes sonner-fade-out{0%{opacity:1;transform:scale(1)}to{opacity:0;transform:scale(.8)}}@keyframes sonner-spin{0%{opacity:1}to{opacity:.15}}@media (prefers-reduced-motion){[data-sonner-toast],[data-sonner-toast]>*,.sonner-loading-bar{transition:none!important;animation:none!important}}.sonner-loader{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);transform-origin:center;transition:opacity .2s,transform .2s}.sonner-loader[data-visible=false]{opacity:0;transform:scale(.8) translate(-50%,-50%)}
`);
var Sm = (o) => {
  switch (o) {
    case "success":
      return bm;
    case "info":
      return $m;
    case "warning":
      return Pm;
    case "error":
      return Nm;
    default:
      return null;
  }
}, km = Array(12).fill(0), Cm = ({ visible: o }) => N.createElement("div", { className: "sonner-loading-wrapper", "data-visible": o }, N.createElement("div", { className: "sonner-spinner" }, km.map((s, a) => N.createElement("div", { className: "sonner-loading-bar", key: `spinner-bar-${a}` })))), bm = N.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20", fill: "currentColor", height: "20", width: "20" }, N.createElement("path", { fillRule: "evenodd", d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z", clipRule: "evenodd" })), Pm = N.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", fill: "currentColor", height: "20", width: "20" }, N.createElement("path", { fillRule: "evenodd", d: "M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z", clipRule: "evenodd" })), $m = N.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20", fill: "currentColor", height: "20", width: "20" }, N.createElement("path", { fillRule: "evenodd", d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z", clipRule: "evenodd" })), Nm = N.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20", fill: "currentColor", height: "20", width: "20" }, N.createElement("path", { fillRule: "evenodd", d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z", clipRule: "evenodd" })), _m = () => {
  let [o, s] = N.useState(!1);
  return N.useEffect(() => {
    let a = () => {
      s(document.hidden);
    };
    return document.addEventListener("visibilitychange", a), () => window.removeEventListener("visibilitychange", a);
  }, []), o;
}, Ba = 1, Rm = class {
  constructor() {
    this.subscribe = (o) => (this.subscribers.push(o), () => {
      let s = this.subscribers.indexOf(o);
      this.subscribers.splice(s, 1);
    }), this.publish = (o) => {
      this.subscribers.forEach((s) => s(o));
    }, this.addToast = (o) => {
      this.publish(o), this.toasts = [...this.toasts, o];
    }, this.create = (o) => {
      var s;
      let { message: a, ...c } = o, d = typeof o?.id == "number" || ((s = o.id) == null ? void 0 : s.length) > 0 ? o.id : Ba++, f = this.toasts.find((v) => v.id === d), h = o.dismissible === void 0 ? !0 : o.dismissible;
      return f ? this.toasts = this.toasts.map((v) => v.id === d ? (this.publish({ ...v, ...o, id: d, title: a }), { ...v, ...o, id: d, dismissible: h, title: a }) : v) : this.addToast({ title: a, ...c, dismissible: h, id: d }), d;
    }, this.dismiss = (o) => (o || this.toasts.forEach((s) => {
      this.subscribers.forEach((a) => a({ id: s.id, dismiss: !0 }));
    }), this.subscribers.forEach((s) => s({ id: o, dismiss: !0 })), o), this.message = (o, s) => this.create({ ...s, message: o }), this.error = (o, s) => this.create({ ...s, message: o, type: "error" }), this.success = (o, s) => this.create({ ...s, type: "success", message: o }), this.info = (o, s) => this.create({ ...s, type: "info", message: o }), this.warning = (o, s) => this.create({ ...s, type: "warning", message: o }), this.loading = (o, s) => this.create({ ...s, type: "loading", message: o }), this.promise = (o, s) => {
      if (!s)
        return;
      let a;
      s.loading !== void 0 && (a = this.create({ ...s, promise: o, type: "loading", message: s.loading, description: typeof s.description != "function" ? s.description : void 0 }));
      let c = o instanceof Promise ? o : o(), d = a !== void 0;
      return c.then((f) => {
        if (f && typeof f.ok == "boolean" && !f.ok) {
          d = !1;
          let h = typeof s.error == "function" ? s.error(`HTTP error! status: ${f.status}`) : s.error, v = typeof s.description == "function" ? s.description(`HTTP error! status: ${f.status}`) : s.description;
          this.create({ id: a, type: "error", message: h, description: v });
        } else if (s.success !== void 0) {
          d = !1;
          let h = typeof s.success == "function" ? s.success(f) : s.success, v = typeof s.description == "function" ? s.description(f) : s.description;
          this.create({ id: a, type: "success", message: h, description: v });
        }
      }).catch((f) => {
        if (s.error !== void 0) {
          d = !1;
          let h = typeof s.error == "function" ? s.error(f) : s.error, v = typeof s.description == "function" ? s.description(f) : s.description;
          this.create({ id: a, type: "error", message: h, description: v });
        }
      }).finally(() => {
        var f;
        d && (this.dismiss(a), a = void 0), (f = s.finally) == null || f.call(s);
      }), a;
    }, this.custom = (o, s) => {
      let a = s?.id || Ba++;
      return this.create({ jsx: o(a), id: a, ...s }), a;
    }, this.subscribers = [], this.toasts = [];
  }
}, jt = new Rm(), Tm = (o, s) => {
  let a = s?.id || Ba++;
  return jt.addToast({ title: o, ...s, id: a }), a;
}, Om = Tm, Dm = Object.assign(Om, { success: jt.success, info: jt.info, warning: jt.warning, error: jt.error, custom: jt.custom, message: jt.message, promise: jt.promise, dismiss: jt.dismiss, loading: jt.loading }), zm = 3, Lm = "32px", Mm = 4e3, Im = 356, Ed = 14, Am = 20, jm = 200;
function Rr(...o) {
  return o.filter(Boolean).join(" ");
}
var Fm = (o) => {
  var s, a, c, d, f, h, v;
  let { invert: C, toast: y, unstyled: _, interacting: b, setHeights: R, visibleToasts: T, heights: G, index: $, toasts: L, expanded: I, removeToast: le, closeButton: B, style: j, cancelButtonStyle: W, actionButtonStyle: ne, className: ie = "", descriptionClassName: te = "", duration: he, position: Ne, gap: Le = Ed, loadingIcon: ue, expandByDefault: ye, classNames: fe, closeButtonAriaLabel: Be = "Close toast", pauseWhenPageIsHidden: ge } = o, [pe, A] = N.useState(!1), [F, m] = N.useState(!1), [P, H] = N.useState(!1), [ce, K] = N.useState(!1), [Se, U] = N.useState(0), [xe, me] = N.useState(0), Ve = N.useRef(null), Ut = N.useRef(null), Ct = $ === 0, Fn = $ + 1 <= T, Je = y.type, tt = y.dismissible !== !1, or = y.className || "", Un = y.descriptionClassName || "", Bt = N.useMemo(() => G.findIndex((V) => V.toastId === y.id) || 0, [G, y.id]), lr = N.useMemo(() => {
    var V;
    return (V = y.closeButton) != null ? V : B;
  }, [y.closeButton, B]), gt = N.useMemo(() => y.duration || he || Mm, [y.duration, he]), Tt = N.useRef(0), nt = N.useRef(0), un = N.useRef(0), rt = N.useRef(null), [cn, ir] = Ne.split("-"), Wt = N.useMemo(() => G.reduce((V, ee, ae) => ae >= Bt ? V : V + ee.height, 0), [G, Bt]), dn = _m(), fn = y.invert || C, pn = Je === "loading";
  nt.current = N.useMemo(() => Bt * Le + Wt, [Bt, Wt]), N.useEffect(() => {
    A(!0);
  }, []), N.useLayoutEffect(() => {
    if (!pe)
      return;
    let V = Ut.current, ee = V.style.height;
    V.style.height = "auto";
    let ae = V.getBoundingClientRect().height;
    V.style.height = ee, me(ae), R((ke) => ke.find((Pe) => Pe.toastId === y.id) ? ke.map((Pe) => Pe.toastId === y.id ? { ...Pe, height: ae } : Pe) : [{ toastId: y.id, height: ae, position: y.position }, ...ke]);
  }, [pe, y.title, y.description, R, y.id]);
  let J = N.useCallback(() => {
    m(!0), U(nt.current), R((V) => V.filter((ee) => ee.toastId !== y.id)), setTimeout(() => {
      le(y);
    }, jm);
  }, [y, le, R, nt]);
  N.useEffect(() => {
    if (y.promise && Je === "loading" || y.duration === 1 / 0 || y.type === "loading")
      return;
    let V, ee = gt;
    return I || b || ge && dn ? (() => {
      if (un.current < Tt.current) {
        let ae = (/* @__PURE__ */ new Date()).getTime() - Tt.current;
        ee = ee - ae;
      }
      un.current = (/* @__PURE__ */ new Date()).getTime();
    })() : (Tt.current = (/* @__PURE__ */ new Date()).getTime(), V = setTimeout(() => {
      var ae;
      (ae = y.onAutoClose) == null || ae.call(y, y), J();
    }, ee)), () => clearTimeout(V);
  }, [I, b, ye, y, gt, J, y.promise, Je, ge, dn]), N.useEffect(() => {
    let V = Ut.current;
    if (V) {
      let ee = V.getBoundingClientRect().height;
      return me(ee), R((ae) => [{ toastId: y.id, height: ee, position: y.position }, ...ae]), () => R((ae) => ae.filter((ke) => ke.toastId !== y.id));
    }
  }, [R, y.id]), N.useEffect(() => {
    y.delete && J();
  }, [J, y.delete]);
  function de() {
    return ue ? N.createElement("div", { className: "sonner-loader", "data-visible": Je === "loading" }, ue) : N.createElement(Cm, { visible: Je === "loading" });
  }
  return N.createElement("li", { "aria-live": y.important ? "assertive" : "polite", "aria-atomic": "true", role: "status", tabIndex: 0, ref: Ut, className: Rr(ie, or, fe?.toast, (s = y?.classNames) == null ? void 0 : s.toast, fe?.[Je], (a = y?.classNames) == null ? void 0 : a[Je]), "data-sonner-toast": "", "data-styled": !(y.jsx || y.unstyled || _), "data-mounted": pe, "data-promise": !!y.promise, "data-removed": F, "data-visible": Fn, "data-y-position": cn, "data-x-position": ir, "data-index": $, "data-front": Ct, "data-swiping": P, "data-dismissible": tt, "data-type": Je, "data-invert": fn, "data-swipe-out": ce, "data-expanded": !!(I || ye && pe), style: { "--index": $, "--toasts-before": $, "--z-index": L.length - $, "--offset": `${F ? Se : nt.current}px`, "--initial-height": ye ? "auto" : `${xe}px`, ...j, ...y.style }, onPointerDown: (V) => {
    pn || !tt || (Ve.current = /* @__PURE__ */ new Date(), U(nt.current), V.target.setPointerCapture(V.pointerId), V.target.tagName !== "BUTTON" && (H(!0), rt.current = { x: V.clientX, y: V.clientY }));
  }, onPointerUp: () => {
    var V, ee, ae, ke;
    if (ce || !tt)
      return;
    rt.current = null;
    let Pe = Number(((V = Ut.current) == null ? void 0 : V.style.getPropertyValue("--swipe-amount").replace("px", "")) || 0), yt = (/* @__PURE__ */ new Date()).getTime() - ((ee = Ve.current) == null ? void 0 : ee.getTime()), wt = Math.abs(Pe) / yt;
    if (Math.abs(Pe) >= Am || wt > 0.11) {
      U(nt.current), (ae = y.onDismiss) == null || ae.call(y, y), J(), K(!0);
      return;
    }
    (ke = Ut.current) == null || ke.style.setProperty("--swipe-amount", "0px"), H(!1);
  }, onPointerMove: (V) => {
    var ee;
    if (!rt.current || !tt)
      return;
    let ae = V.clientY - rt.current.y, ke = V.clientX - rt.current.x, Pe = (cn === "top" ? Math.min : Math.max)(0, ae), yt = V.pointerType === "touch" ? 10 : 2;
    Math.abs(Pe) > yt ? (ee = Ut.current) == null || ee.style.setProperty("--swipe-amount", `${ae}px`) : Math.abs(ke) > yt && (rt.current = null);
  } }, lr && !y.jsx ? N.createElement("button", { "aria-label": Be, "data-disabled": pn, "data-close-button": !0, onClick: pn || !tt ? () => {
  } : () => {
    var V;
    J(), (V = y.onDismiss) == null || V.call(y, y);
  }, className: Rr(fe?.closeButton, (c = y?.classNames) == null ? void 0 : c.closeButton) }, N.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "12", height: "12", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }, N.createElement("line", { x1: "18", y1: "6", x2: "6", y2: "18" }), N.createElement("line", { x1: "6", y1: "6", x2: "18", y2: "18" }))) : null, y.jsx || N.isValidElement(y.title) ? y.jsx || y.title : N.createElement(N.Fragment, null, Je || y.icon || y.promise ? N.createElement("div", { "data-icon": "" }, (y.promise || y.type === "loading") && !y.icon ? de() : null, y.icon || Sm(Je)) : null, N.createElement("div", { "data-content": "" }, N.createElement("div", { "data-title": "", className: Rr(fe?.title, (d = y?.classNames) == null ? void 0 : d.title) }, y.title), y.description ? N.createElement("div", { "data-description": "", className: Rr(te, Un, fe?.description, (f = y?.classNames) == null ? void 0 : f.description) }, y.description) : null), y.cancel ? N.createElement("button", { "data-button": !0, "data-cancel": !0, style: y.cancelButtonStyle || W, onClick: (V) => {
    var ee;
    tt && (J(), (ee = y.cancel) != null && ee.onClick && y.cancel.onClick(V));
  }, className: Rr(fe?.cancelButton, (h = y?.classNames) == null ? void 0 : h.cancelButton) }, y.cancel.label) : null, y.action ? N.createElement("button", { "data-button": "", style: y.actionButtonStyle || ne, onClick: (V) => {
    var ee;
    (ee = y.action) == null || ee.onClick(V), !V.defaultPrevented && J();
  }, className: Rr(fe?.actionButton, (v = y?.classNames) == null ? void 0 : v.actionButton) }, y.action.label) : null));
};
function Gc() {
  if (typeof window > "u" || typeof document > "u")
    return "ltr";
  let o = document.documentElement.getAttribute("dir");
  return o === "auto" || !o ? window.getComputedStyle(document.documentElement).direction : o;
}
var Um = (o) => {
  let { invert: s, position: a = "bottom-right", hotkey: c = ["altKey", "KeyT"], expand: d, closeButton: f, className: h, offset: v, theme: C = "light", richColors: y, duration: _, style: b, visibleToasts: R = zm, toastOptions: T, dir: G = Gc(), gap: $, loadingIcon: L, containerAriaLabel: I = "Notifications", pauseWhenPageIsHidden: le } = o, [B, j] = N.useState([]), W = N.useMemo(() => Array.from(new Set([a].concat(B.filter((F) => F.position).map((F) => F.position)))), [B, a]), [ne, ie] = N.useState([]), [te, he] = N.useState(!1), [Ne, Le] = N.useState(!1), [ue, ye] = N.useState(C !== "system" ? C : typeof window < "u" && window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"), fe = N.useRef(null), Be = c.join("+").replace(/Key/g, "").replace(/Digit/g, ""), ge = N.useRef(null), pe = N.useRef(!1), A = N.useCallback((F) => j((m) => m.filter(({ id: P }) => P !== F.id)), []);
  return N.useEffect(() => jt.subscribe((F) => {
    if (F.dismiss) {
      j((m) => m.map((P) => P.id === F.id ? { ...P, delete: !0 } : P));
      return;
    }
    setTimeout(() => {
      xd.flushSync(() => {
        j((m) => {
          let P = m.findIndex((H) => H.id === F.id);
          return P !== -1 ? [...m.slice(0, P), { ...m[P], ...F }, ...m.slice(P + 1)] : [F, ...m];
        });
      });
    });
  }), []), N.useEffect(() => {
    if (C !== "system") {
      ye(C);
      return;
    }
    C === "system" && (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? ye("dark") : ye("light")), typeof window < "u" && window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", ({ matches: F }) => {
      ye(F ? "dark" : "light");
    });
  }, [C]), N.useEffect(() => {
    B.length <= 1 && he(!1);
  }, [B]), N.useEffect(() => {
    let F = (m) => {
      var P, H;
      c.every((ce) => m[ce] || m.code === ce) && (he(!0), (P = fe.current) == null || P.focus()), m.code === "Escape" && (document.activeElement === fe.current || (H = fe.current) != null && H.contains(document.activeElement)) && he(!1);
    };
    return document.addEventListener("keydown", F), () => document.removeEventListener("keydown", F);
  }, [c]), N.useEffect(() => {
    if (fe.current)
      return () => {
        ge.current && (ge.current.focus({ preventScroll: !0 }), ge.current = null, pe.current = !1);
      };
  }, [fe.current]), B.length ? N.createElement("section", { "aria-label": `${I} ${Be}`, tabIndex: -1 }, W.map((F, m) => {
    var P;
    let [H, ce] = F.split("-");
    return N.createElement("ol", { key: F, dir: G === "auto" ? Gc() : G, tabIndex: -1, ref: fe, className: h, "data-sonner-toaster": !0, "data-theme": ue, "data-rich-colors": y, "data-y-position": H, "data-x-position": ce, style: { "--front-toast-height": `${(P = ne[0]) == null ? void 0 : P.height}px`, "--offset": typeof v == "number" ? `${v}px` : v || Lm, "--width": `${Im}px`, "--gap": `${Ed}px`, ...b }, onBlur: (K) => {
      pe.current && !K.currentTarget.contains(K.relatedTarget) && (pe.current = !1, ge.current && (ge.current.focus({ preventScroll: !0 }), ge.current = null));
    }, onFocus: (K) => {
      K.target instanceof HTMLElement && K.target.dataset.dismissible === "false" || pe.current || (pe.current = !0, ge.current = K.relatedTarget);
    }, onMouseEnter: () => he(!0), onMouseMove: () => he(!0), onMouseLeave: () => {
      Ne || he(!1);
    }, onPointerDown: (K) => {
      K.target instanceof HTMLElement && K.target.dataset.dismissible === "false" || Le(!0);
    }, onPointerUp: () => Le(!1) }, B.filter((K) => !K.position && m === 0 || K.position === F).map((K, Se) => {
      var U, xe;
      return N.createElement(Fm, { key: K.id, index: Se, toast: K, duration: (U = T?.duration) != null ? U : _, className: T?.className, descriptionClassName: T?.descriptionClassName, invert: s, visibleToasts: R, closeButton: (xe = T?.closeButton) != null ? xe : f, interacting: Ne, position: F, style: T?.style, unstyled: T?.unstyled, classNames: T?.classNames, cancelButtonStyle: T?.cancelButtonStyle, actionButtonStyle: T?.actionButtonStyle, removeToast: A, toasts: B.filter((me) => me.position == K.position), heights: ne.filter((me) => me.position == K.position), setHeights: ie, expandByDefault: d, gap: $, loadingIcon: L, expanded: te, pauseWhenPageIsHidden: le });
    }));
  })) : null;
};
function Bm({ ...o }) {
  const { theme: s = "system" } = gm();
  return /* @__PURE__ */ Ee.jsx(
    Um,
    {
      theme: s,
      className: "toaster group",
      toastOptions: {
        classNames: {
          toast: "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
          description: "group-[.toast]:text-muted-foreground",
          actionButton: "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
          cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground"
        }
      },
      ...o
    }
  );
}
function Wm() {
  return /* @__PURE__ */ Ee.jsx(Bm, { richColors: !0, closeButton: !0 });
}
var Wl = {}, Xc = Hl;
Wl.createRoot = Xc.createRoot, Wl.hydrateRoot = Xc.hydrateRoot;
class Hm extends HTMLElement {
  constructor() {
    super(), this.attachShadow({ mode: "open" });
  }
  connectedCallback() {
    const s = document.createElement("div");
    document.body.append(s), Wl.createRoot(s).render(/* @__PURE__ */ Ee.jsx(Wm, {}));
  }
}
function Sd(o) {
  var s, a, c = "";
  if (typeof o == "string" || typeof o == "number")
    c += o;
  else if (typeof o == "object")
    if (Array.isArray(o)) {
      var d = o.length;
      for (s = 0; s < d; s++)
        o[s] && (a = Sd(o[s])) && (c && (c += " "), c += a);
    } else
      for (a in o)
        o[a] && (c && (c += " "), c += a);
  return c;
}
function Vm() {
  for (var o, s, a = 0, c = "", d = arguments.length; a < d; a++)
    (o = arguments[a]) && (s = Sd(o)) && (c && (c += " "), c += s);
  return c;
}
const Za = "-";
function Qm(o) {
  const s = Km(o), {
    conflictingClassGroups: a,
    conflictingClassGroupModifiers: c
  } = o;
  function d(h) {
    const v = h.split(Za);
    return v[0] === "" && v.length !== 1 && v.shift(), kd(v, s) || Ym(h);
  }
  function f(h, v) {
    const C = a[h] || [];
    return v && c[h] ? [...C, ...c[h]] : C;
  }
  return {
    getClassGroupId: d,
    getConflictingClassGroupIds: f
  };
}
function kd(o, s) {
  if (o.length === 0)
    return s.classGroupId;
  const a = o[0], c = s.nextPart.get(a), d = c ? kd(o.slice(1), c) : void 0;
  if (d)
    return d;
  if (s.validators.length === 0)
    return;
  const f = o.join(Za);
  return s.validators.find(({
    validator: h
  }) => h(f))?.classGroupId;
}
const Zc = /^\[(.+)\]$/;
function Ym(o) {
  if (Zc.test(o)) {
    const s = Zc.exec(o)[1], a = s?.substring(0, s.indexOf(":"));
    if (a)
      return "arbitrary.." + a;
  }
}
function Km(o) {
  const {
    theme: s,
    prefix: a
  } = o, c = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  return Xm(Object.entries(o.classGroups), a).forEach(([f, h]) => {
    Wa(h, c, f, s);
  }), c;
}
function Wa(o, s, a, c) {
  o.forEach((d) => {
    if (typeof d == "string") {
      const f = d === "" ? s : Jc(s, d);
      f.classGroupId = a;
      return;
    }
    if (typeof d == "function") {
      if (Gm(d)) {
        Wa(d(c), s, a, c);
        return;
      }
      s.validators.push({
        validator: d,
        classGroupId: a
      });
      return;
    }
    Object.entries(d).forEach(([f, h]) => {
      Wa(h, Jc(s, f), a, c);
    });
  });
}
function Jc(o, s) {
  let a = o;
  return s.split(Za).forEach((c) => {
    a.nextPart.has(c) || a.nextPart.set(c, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), a = a.nextPart.get(c);
  }), a;
}
function Gm(o) {
  return o.isThemeGetter;
}
function Xm(o, s) {
  return s ? o.map(([a, c]) => {
    const d = c.map((f) => typeof f == "string" ? s + f : typeof f == "object" ? Object.fromEntries(Object.entries(f).map(([h, v]) => [s + h, v])) : f);
    return [a, d];
  }) : o;
}
function Zm(o) {
  if (o < 1)
    return {
      get: () => {
      },
      set: () => {
      }
    };
  let s = 0, a = /* @__PURE__ */ new Map(), c = /* @__PURE__ */ new Map();
  function d(f, h) {
    a.set(f, h), s++, s > o && (s = 0, c = a, a = /* @__PURE__ */ new Map());
  }
  return {
    get(f) {
      let h = a.get(f);
      if (h !== void 0)
        return h;
      if ((h = c.get(f)) !== void 0)
        return d(f, h), h;
    },
    set(f, h) {
      a.has(f) ? a.set(f, h) : d(f, h);
    }
  };
}
const Cd = "!";
function Jm(o) {
  const s = o.separator, a = s.length === 1, c = s[0], d = s.length;
  return function(h) {
    const v = [];
    let C = 0, y = 0, _;
    for (let $ = 0; $ < h.length; $++) {
      let L = h[$];
      if (C === 0) {
        if (L === c && (a || h.slice($, $ + d) === s)) {
          v.push(h.slice(y, $)), y = $ + d;
          continue;
        }
        if (L === "/") {
          _ = $;
          continue;
        }
      }
      L === "[" ? C++ : L === "]" && C--;
    }
    const b = v.length === 0 ? h : h.substring(y), R = b.startsWith(Cd), T = R ? b.substring(1) : b, G = _ && _ > y ? _ - y : void 0;
    return {
      modifiers: v,
      hasImportantModifier: R,
      baseClassName: T,
      maybePostfixModifierPosition: G
    };
  };
}
function qm(o) {
  if (o.length <= 1)
    return o;
  const s = [];
  let a = [];
  return o.forEach((c) => {
    c[0] === "[" ? (s.push(...a.sort(), c), a = []) : a.push(c);
  }), s.push(...a.sort()), s;
}
function ev(o) {
  return {
    cache: Zm(o.cacheSize),
    splitModifiers: Jm(o),
    ...Qm(o)
  };
}
const tv = /\s+/;
function nv(o, s) {
  const {
    splitModifiers: a,
    getClassGroupId: c,
    getConflictingClassGroupIds: d
  } = s, f = /* @__PURE__ */ new Set();
  return o.trim().split(tv).map((h) => {
    const {
      modifiers: v,
      hasImportantModifier: C,
      baseClassName: y,
      maybePostfixModifierPosition: _
    } = a(h);
    let b = c(_ ? y.substring(0, _) : y), R = !!_;
    if (!b) {
      if (!_)
        return {
          isTailwindClass: !1,
          originalClassName: h
        };
      if (b = c(y), !b)
        return {
          isTailwindClass: !1,
          originalClassName: h
        };
      R = !1;
    }
    const T = qm(v).join(":");
    return {
      isTailwindClass: !0,
      modifierId: C ? T + Cd : T,
      classGroupId: b,
      originalClassName: h,
      hasPostfixModifier: R
    };
  }).reverse().filter((h) => {
    if (!h.isTailwindClass)
      return !0;
    const {
      modifierId: v,
      classGroupId: C,
      hasPostfixModifier: y
    } = h, _ = v + C;
    return f.has(_) ? !1 : (f.add(_), d(C, y).forEach((b) => f.add(v + b)), !0);
  }).reverse().map((h) => h.originalClassName).join(" ");
}
function rv() {
  let o = 0, s, a, c = "";
  for (; o < arguments.length; )
    (s = arguments[o++]) && (a = bd(s)) && (c && (c += " "), c += a);
  return c;
}
function bd(o) {
  if (typeof o == "string")
    return o;
  let s, a = "";
  for (let c = 0; c < o.length; c++)
    o[c] && (s = bd(o[c])) && (a && (a += " "), a += s);
  return a;
}
function ov(o, ...s) {
  let a, c, d, f = h;
  function h(C) {
    const y = s.reduce((_, b) => b(_), o());
    return a = ev(y), c = a.cache.get, d = a.cache.set, f = v, v(C);
  }
  function v(C) {
    const y = c(C);
    if (y)
      return y;
    const _ = nv(C, a);
    return d(C, _), _;
  }
  return function() {
    return f(rv.apply(null, arguments));
  };
}
function De(o) {
  const s = (a) => a[o] || [];
  return s.isThemeGetter = !0, s;
}
const Pd = /^\[(?:([a-z-]+):)?(.+)\]$/i, lv = /^\d+\/\d+$/, iv = /* @__PURE__ */ new Set(["px", "full", "screen"]), av = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, sv = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, uv = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/, cv = /^-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, dv = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/;
function an(o) {
  return nr(o) || iv.has(o) || lv.test(o);
}
function zn(o) {
  return zr(o, "length", wv);
}
function nr(o) {
  return !!o && !Number.isNaN(Number(o));
}
function Ol(o) {
  return zr(o, "number", nr);
}
function xo(o) {
  return !!o && Number.isInteger(Number(o));
}
function fv(o) {
  return o.endsWith("%") && nr(o.slice(0, -1));
}
function ve(o) {
  return Pd.test(o);
}
function Ln(o) {
  return av.test(o);
}
const pv = /* @__PURE__ */ new Set(["length", "size", "percentage"]);
function mv(o) {
  return zr(o, pv, $d);
}
function vv(o) {
  return zr(o, "position", $d);
}
const hv = /* @__PURE__ */ new Set(["image", "url"]);
function gv(o) {
  return zr(o, hv, Ev);
}
function yv(o) {
  return zr(o, "", xv);
}
function Eo() {
  return !0;
}
function zr(o, s, a) {
  const c = Pd.exec(o);
  return c ? c[1] ? typeof s == "string" ? c[1] === s : s.has(c[1]) : a(c[2]) : !1;
}
function wv(o) {
  return sv.test(o) && !uv.test(o);
}
function $d() {
  return !1;
}
function xv(o) {
  return cv.test(o);
}
function Ev(o) {
  return dv.test(o);
}
function Sv() {
  const o = De("colors"), s = De("spacing"), a = De("blur"), c = De("brightness"), d = De("borderColor"), f = De("borderRadius"), h = De("borderSpacing"), v = De("borderWidth"), C = De("contrast"), y = De("grayscale"), _ = De("hueRotate"), b = De("invert"), R = De("gap"), T = De("gradientColorStops"), G = De("gradientColorStopPositions"), $ = De("inset"), L = De("margin"), I = De("opacity"), le = De("padding"), B = De("saturate"), j = De("scale"), W = De("sepia"), ne = De("skew"), ie = De("space"), te = De("translate"), he = () => ["auto", "contain", "none"], Ne = () => ["auto", "hidden", "clip", "visible", "scroll"], Le = () => ["auto", ve, s], ue = () => [ve, s], ye = () => ["", an, zn], fe = () => ["auto", nr, ve], Be = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"], ge = () => ["solid", "dashed", "dotted", "double", "none"], pe = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity", "plus-lighter"], A = () => ["start", "end", "center", "between", "around", "evenly", "stretch"], F = () => ["", "0", ve], m = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], P = () => [nr, Ol], H = () => [nr, ve];
  return {
    cacheSize: 500,
    separator: ":",
    theme: {
      colors: [Eo],
      spacing: [an, zn],
      blur: ["none", "", Ln, ve],
      brightness: P(),
      borderColor: [o],
      borderRadius: ["none", "", "full", Ln, ve],
      borderSpacing: ue(),
      borderWidth: ye(),
      contrast: P(),
      grayscale: F(),
      hueRotate: H(),
      invert: F(),
      gap: ue(),
      gradientColorStops: [o],
      gradientColorStopPositions: [fv, zn],
      inset: Le(),
      margin: Le(),
      opacity: P(),
      padding: ue(),
      saturate: P(),
      scale: P(),
      sepia: F(),
      skew: H(),
      space: ue(),
      translate: ue()
    },
    classGroups: {
      // Layout
      /**
       * Aspect Ratio
       * @see https://tailwindcss.com/docs/aspect-ratio
       */
      aspect: [{
        aspect: ["auto", "square", "video", ve]
      }],
      /**
       * Container
       * @see https://tailwindcss.com/docs/container
       */
      container: ["container"],
      /**
       * Columns
       * @see https://tailwindcss.com/docs/columns
       */
      columns: [{
        columns: [Ln]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": m()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": m()
      }],
      /**
       * Break Inside
       * @see https://tailwindcss.com/docs/break-inside
       */
      "break-inside": [{
        "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"]
      }],
      /**
       * Box Decoration Break
       * @see https://tailwindcss.com/docs/box-decoration-break
       */
      "box-decoration": [{
        "box-decoration": ["slice", "clone"]
      }],
      /**
       * Box Sizing
       * @see https://tailwindcss.com/docs/box-sizing
       */
      box: [{
        box: ["border", "content"]
      }],
      /**
       * Display
       * @see https://tailwindcss.com/docs/display
       */
      display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"],
      /**
       * Floats
       * @see https://tailwindcss.com/docs/float
       */
      float: [{
        float: ["right", "left", "none", "start", "end"]
      }],
      /**
       * Clear
       * @see https://tailwindcss.com/docs/clear
       */
      clear: [{
        clear: ["left", "right", "both", "none", "start", "end"]
      }],
      /**
       * Isolation
       * @see https://tailwindcss.com/docs/isolation
       */
      isolation: ["isolate", "isolation-auto"],
      /**
       * Object Fit
       * @see https://tailwindcss.com/docs/object-fit
       */
      "object-fit": [{
        object: ["contain", "cover", "fill", "none", "scale-down"]
      }],
      /**
       * Object Position
       * @see https://tailwindcss.com/docs/object-position
       */
      "object-position": [{
        object: [...Be(), ve]
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: Ne()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": Ne()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": Ne()
      }],
      /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      overscroll: [{
        overscroll: he()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": he()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": he()
      }],
      /**
       * Position
       * @see https://tailwindcss.com/docs/position
       */
      position: ["static", "fixed", "absolute", "relative", "sticky"],
      /**
       * Top / Right / Bottom / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      inset: [{
        inset: [$]
      }],
      /**
       * Right / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": [$]
      }],
      /**
       * Top / Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": [$]
      }],
      /**
       * Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      start: [{
        start: [$]
      }],
      /**
       * End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      end: [{
        end: [$]
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: [$]
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: [$]
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: [$]
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: [$]
      }],
      /**
       * Visibility
       * @see https://tailwindcss.com/docs/visibility
       */
      visibility: ["visible", "invisible", "collapse"],
      /**
       * Z-Index
       * @see https://tailwindcss.com/docs/z-index
       */
      z: [{
        z: ["auto", xo, ve]
      }],
      // Flexbox and Grid
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: Le()
      }],
      /**
       * Flex Direction
       * @see https://tailwindcss.com/docs/flex-direction
       */
      "flex-direction": [{
        flex: ["row", "row-reverse", "col", "col-reverse"]
      }],
      /**
       * Flex Wrap
       * @see https://tailwindcss.com/docs/flex-wrap
       */
      "flex-wrap": [{
        flex: ["wrap", "wrap-reverse", "nowrap"]
      }],
      /**
       * Flex
       * @see https://tailwindcss.com/docs/flex
       */
      flex: [{
        flex: ["1", "auto", "initial", "none", ve]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: F()
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: F()
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: ["first", "last", "none", xo, ve]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": [Eo]
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: ["auto", {
          span: ["full", xo, ve]
        }, ve]
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": fe()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": fe()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": [Eo]
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: ["auto", {
          span: [xo, ve]
        }, ve]
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": fe()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": fe()
      }],
      /**
       * Grid Auto Flow
       * @see https://tailwindcss.com/docs/grid-auto-flow
       */
      "grid-flow": [{
        "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
      }],
      /**
       * Grid Auto Columns
       * @see https://tailwindcss.com/docs/grid-auto-columns
       */
      "auto-cols": [{
        "auto-cols": ["auto", "min", "max", "fr", ve]
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": ["auto", "min", "max", "fr", ve]
      }],
      /**
       * Gap
       * @see https://tailwindcss.com/docs/gap
       */
      gap: [{
        gap: [R]
      }],
      /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-x": [{
        "gap-x": [R]
      }],
      /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-y": [{
        "gap-y": [R]
      }],
      /**
       * Justify Content
       * @see https://tailwindcss.com/docs/justify-content
       */
      "justify-content": [{
        justify: ["normal", ...A()]
      }],
      /**
       * Justify Items
       * @see https://tailwindcss.com/docs/justify-items
       */
      "justify-items": [{
        "justify-items": ["start", "end", "center", "stretch"]
      }],
      /**
       * Justify Self
       * @see https://tailwindcss.com/docs/justify-self
       */
      "justify-self": [{
        "justify-self": ["auto", "start", "end", "center", "stretch"]
      }],
      /**
       * Align Content
       * @see https://tailwindcss.com/docs/align-content
       */
      "align-content": [{
        content: ["normal", ...A(), "baseline"]
      }],
      /**
       * Align Items
       * @see https://tailwindcss.com/docs/align-items
       */
      "align-items": [{
        items: ["start", "end", "center", "baseline", "stretch"]
      }],
      /**
       * Align Self
       * @see https://tailwindcss.com/docs/align-self
       */
      "align-self": [{
        self: ["auto", "start", "end", "center", "stretch", "baseline"]
      }],
      /**
       * Place Content
       * @see https://tailwindcss.com/docs/place-content
       */
      "place-content": [{
        "place-content": [...A(), "baseline"]
      }],
      /**
       * Place Items
       * @see https://tailwindcss.com/docs/place-items
       */
      "place-items": [{
        "place-items": ["start", "end", "center", "baseline", "stretch"]
      }],
      /**
       * Place Self
       * @see https://tailwindcss.com/docs/place-self
       */
      "place-self": [{
        "place-self": ["auto", "start", "end", "center", "stretch"]
      }],
      // Spacing
      /**
       * Padding
       * @see https://tailwindcss.com/docs/padding
       */
      p: [{
        p: [le]
      }],
      /**
       * Padding X
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: [le]
      }],
      /**
       * Padding Y
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: [le]
      }],
      /**
       * Padding Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: [le]
      }],
      /**
       * Padding End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: [le]
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: [le]
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: [le]
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: [le]
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: [le]
      }],
      /**
       * Margin
       * @see https://tailwindcss.com/docs/margin
       */
      m: [{
        m: [L]
      }],
      /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: [L]
      }],
      /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: [L]
      }],
      /**
       * Margin Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: [L]
      }],
      /**
       * Margin End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: [L]
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: [L]
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: [L]
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: [L]
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: [L]
      }],
      /**
       * Space Between X
       * @see https://tailwindcss.com/docs/space
       */
      "space-x": [{
        "space-x": [ie]
      }],
      /**
       * Space Between X Reverse
       * @see https://tailwindcss.com/docs/space
       */
      "space-x-reverse": ["space-x-reverse"],
      /**
       * Space Between Y
       * @see https://tailwindcss.com/docs/space
       */
      "space-y": [{
        "space-y": [ie]
      }],
      /**
       * Space Between Y Reverse
       * @see https://tailwindcss.com/docs/space
       */
      "space-y-reverse": ["space-y-reverse"],
      // Sizing
      /**
       * Width
       * @see https://tailwindcss.com/docs/width
       */
      w: [{
        w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", ve, s]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": [ve, s, "min", "max", "fit"]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": [ve, s, "none", "full", "min", "max", "fit", "prose", {
          screen: [Ln]
        }, Ln]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: [ve, s, "auto", "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": [ve, s, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": [ve, s, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Size
       * @see https://tailwindcss.com/docs/size
       */
      size: [{
        size: [ve, s, "auto", "min", "max", "fit"]
      }],
      // Typography
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", Ln, zn]
      }],
      /**
       * Font Smoothing
       * @see https://tailwindcss.com/docs/font-smoothing
       */
      "font-smoothing": ["antialiased", "subpixel-antialiased"],
      /**
       * Font Style
       * @see https://tailwindcss.com/docs/font-style
       */
      "font-style": ["italic", "not-italic"],
      /**
       * Font Weight
       * @see https://tailwindcss.com/docs/font-weight
       */
      "font-weight": [{
        font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", Ol]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [Eo]
      }],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-normal": ["normal-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-ordinal": ["ordinal"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-slashed-zero": ["slashed-zero"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-figure": ["lining-nums", "oldstyle-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-spacing": ["proportional-nums", "tabular-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-fraction": ["diagonal-fractions", "stacked-fractons"],
      /**
       * Letter Spacing
       * @see https://tailwindcss.com/docs/letter-spacing
       */
      tracking: [{
        tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", ve]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": ["none", nr, Ol]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: ["none", "tight", "snug", "normal", "relaxed", "loose", an, ve]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", ve]
      }],
      /**
       * List Style Type
       * @see https://tailwindcss.com/docs/list-style-type
       */
      "list-style-type": [{
        list: ["none", "disc", "decimal", ve]
      }],
      /**
       * List Style Position
       * @see https://tailwindcss.com/docs/list-style-position
       */
      "list-style-position": [{
        list: ["inside", "outside"]
      }],
      /**
       * Placeholder Color
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/placeholder-color
       */
      "placeholder-color": [{
        placeholder: [o]
      }],
      /**
       * Placeholder Opacity
       * @see https://tailwindcss.com/docs/placeholder-opacity
       */
      "placeholder-opacity": [{
        "placeholder-opacity": [I]
      }],
      /**
       * Text Alignment
       * @see https://tailwindcss.com/docs/text-align
       */
      "text-alignment": [{
        text: ["left", "center", "right", "justify", "start", "end"]
      }],
      /**
       * Text Color
       * @see https://tailwindcss.com/docs/text-color
       */
      "text-color": [{
        text: [o]
      }],
      /**
       * Text Opacity
       * @see https://tailwindcss.com/docs/text-opacity
       */
      "text-opacity": [{
        "text-opacity": [I]
      }],
      /**
       * Text Decoration
       * @see https://tailwindcss.com/docs/text-decoration
       */
      "text-decoration": ["underline", "overline", "line-through", "no-underline"],
      /**
       * Text Decoration Style
       * @see https://tailwindcss.com/docs/text-decoration-style
       */
      "text-decoration-style": [{
        decoration: [...ge(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: ["auto", "from-font", an, zn]
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": ["auto", an, ve]
      }],
      /**
       * Text Decoration Color
       * @see https://tailwindcss.com/docs/text-decoration-color
       */
      "text-decoration-color": [{
        decoration: [o]
      }],
      /**
       * Text Transform
       * @see https://tailwindcss.com/docs/text-transform
       */
      "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
      /**
       * Text Overflow
       * @see https://tailwindcss.com/docs/text-overflow
       */
      "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
      /**
       * Text Wrap
       * @see https://tailwindcss.com/docs/text-wrap
       */
      "text-wrap": [{
        text: ["wrap", "nowrap", "balance", "pretty"]
      }],
      /**
       * Text Indent
       * @see https://tailwindcss.com/docs/text-indent
       */
      indent: [{
        indent: ue()
      }],
      /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */
      "vertical-align": [{
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", ve]
      }],
      /**
       * Whitespace
       * @see https://tailwindcss.com/docs/whitespace
       */
      whitespace: [{
        whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"]
      }],
      /**
       * Word Break
       * @see https://tailwindcss.com/docs/word-break
       */
      break: [{
        break: ["normal", "words", "all", "keep"]
      }],
      /**
       * Hyphens
       * @see https://tailwindcss.com/docs/hyphens
       */
      hyphens: [{
        hyphens: ["none", "manual", "auto"]
      }],
      /**
       * Content
       * @see https://tailwindcss.com/docs/content
       */
      content: [{
        content: ["none", ve]
      }],
      // Backgrounds
      /**
       * Background Attachment
       * @see https://tailwindcss.com/docs/background-attachment
       */
      "bg-attachment": [{
        bg: ["fixed", "local", "scroll"]
      }],
      /**
       * Background Clip
       * @see https://tailwindcss.com/docs/background-clip
       */
      "bg-clip": [{
        "bg-clip": ["border", "padding", "content", "text"]
      }],
      /**
       * Background Opacity
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/background-opacity
       */
      "bg-opacity": [{
        "bg-opacity": [I]
      }],
      /**
       * Background Origin
       * @see https://tailwindcss.com/docs/background-origin
       */
      "bg-origin": [{
        "bg-origin": ["border", "padding", "content"]
      }],
      /**
       * Background Position
       * @see https://tailwindcss.com/docs/background-position
       */
      "bg-position": [{
        bg: [...Be(), vv]
      }],
      /**
       * Background Repeat
       * @see https://tailwindcss.com/docs/background-repeat
       */
      "bg-repeat": [{
        bg: ["no-repeat", {
          repeat: ["", "x", "y", "round", "space"]
        }]
      }],
      /**
       * Background Size
       * @see https://tailwindcss.com/docs/background-size
       */
      "bg-size": [{
        bg: ["auto", "cover", "contain", mv]
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
        }, gv]
      }],
      /**
       * Background Color
       * @see https://tailwindcss.com/docs/background-color
       */
      "bg-color": [{
        bg: [o]
      }],
      /**
       * Gradient Color Stops From Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from-pos": [{
        from: [G]
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: [G]
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: [G]
      }],
      /**
       * Gradient Color Stops From
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from": [{
        from: [T]
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via": [{
        via: [T]
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to": [{
        to: [T]
      }],
      // Borders
      /**
       * Border Radius
       * @see https://tailwindcss.com/docs/border-radius
       */
      rounded: [{
        rounded: [f]
      }],
      /**
       * Border Radius Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-s": [{
        "rounded-s": [f]
      }],
      /**
       * Border Radius End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-e": [{
        "rounded-e": [f]
      }],
      /**
       * Border Radius Top
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-t": [{
        "rounded-t": [f]
      }],
      /**
       * Border Radius Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-r": [{
        "rounded-r": [f]
      }],
      /**
       * Border Radius Bottom
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-b": [{
        "rounded-b": [f]
      }],
      /**
       * Border Radius Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-l": [{
        "rounded-l": [f]
      }],
      /**
       * Border Radius Start Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ss": [{
        "rounded-ss": [f]
      }],
      /**
       * Border Radius Start End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-se": [{
        "rounded-se": [f]
      }],
      /**
       * Border Radius End End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ee": [{
        "rounded-ee": [f]
      }],
      /**
       * Border Radius End Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-es": [{
        "rounded-es": [f]
      }],
      /**
       * Border Radius Top Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tl": [{
        "rounded-tl": [f]
      }],
      /**
       * Border Radius Top Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tr": [{
        "rounded-tr": [f]
      }],
      /**
       * Border Radius Bottom Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-br": [{
        "rounded-br": [f]
      }],
      /**
       * Border Radius Bottom Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-bl": [{
        "rounded-bl": [f]
      }],
      /**
       * Border Width
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w": [{
        border: [v]
      }],
      /**
       * Border Width X
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-x": [{
        "border-x": [v]
      }],
      /**
       * Border Width Y
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-y": [{
        "border-y": [v]
      }],
      /**
       * Border Width Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-s": [{
        "border-s": [v]
      }],
      /**
       * Border Width End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-e": [{
        "border-e": [v]
      }],
      /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-t": [{
        "border-t": [v]
      }],
      /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-r": [{
        "border-r": [v]
      }],
      /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-b": [{
        "border-b": [v]
      }],
      /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-l": [{
        "border-l": [v]
      }],
      /**
       * Border Opacity
       * @see https://tailwindcss.com/docs/border-opacity
       */
      "border-opacity": [{
        "border-opacity": [I]
      }],
      /**
       * Border Style
       * @see https://tailwindcss.com/docs/border-style
       */
      "border-style": [{
        border: [...ge(), "hidden"]
      }],
      /**
       * Divide Width X
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-x": [{
        "divide-x": [v]
      }],
      /**
       * Divide Width X Reverse
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-x-reverse": ["divide-x-reverse"],
      /**
       * Divide Width Y
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-y": [{
        "divide-y": [v]
      }],
      /**
       * Divide Width Y Reverse
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-y-reverse": ["divide-y-reverse"],
      /**
       * Divide Opacity
       * @see https://tailwindcss.com/docs/divide-opacity
       */
      "divide-opacity": [{
        "divide-opacity": [I]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/divide-style
       */
      "divide-style": [{
        divide: ge()
      }],
      /**
       * Border Color
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color": [{
        border: [d]
      }],
      /**
       * Border Color X
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-x": [{
        "border-x": [d]
      }],
      /**
       * Border Color Y
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-y": [{
        "border-y": [d]
      }],
      /**
       * Border Color Top
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-t": [{
        "border-t": [d]
      }],
      /**
       * Border Color Right
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-r": [{
        "border-r": [d]
      }],
      /**
       * Border Color Bottom
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-b": [{
        "border-b": [d]
      }],
      /**
       * Border Color Left
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-l": [{
        "border-l": [d]
      }],
      /**
       * Divide Color
       * @see https://tailwindcss.com/docs/divide-color
       */
      "divide-color": [{
        divide: [d]
      }],
      /**
       * Outline Style
       * @see https://tailwindcss.com/docs/outline-style
       */
      "outline-style": [{
        outline: ["", ...ge()]
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [an, ve]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: [an, zn]
      }],
      /**
       * Outline Color
       * @see https://tailwindcss.com/docs/outline-color
       */
      "outline-color": [{
        outline: [o]
      }],
      /**
       * Ring Width
       * @see https://tailwindcss.com/docs/ring-width
       */
      "ring-w": [{
        ring: ye()
      }],
      /**
       * Ring Width Inset
       * @see https://tailwindcss.com/docs/ring-width
       */
      "ring-w-inset": ["ring-inset"],
      /**
       * Ring Color
       * @see https://tailwindcss.com/docs/ring-color
       */
      "ring-color": [{
        ring: [o]
      }],
      /**
       * Ring Opacity
       * @see https://tailwindcss.com/docs/ring-opacity
       */
      "ring-opacity": [{
        "ring-opacity": [I]
      }],
      /**
       * Ring Offset Width
       * @see https://tailwindcss.com/docs/ring-offset-width
       */
      "ring-offset-w": [{
        "ring-offset": [an, zn]
      }],
      /**
       * Ring Offset Color
       * @see https://tailwindcss.com/docs/ring-offset-color
       */
      "ring-offset-color": [{
        "ring-offset": [o]
      }],
      // Effects
      /**
       * Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow
       */
      shadow: [{
        shadow: ["", "inner", "none", Ln, yv]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow-color
       */
      "shadow-color": [{
        shadow: [Eo]
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [I]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      "mix-blend": [{
        "mix-blend": pe()
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": pe()
      }],
      // Filters
      /**
       * Filter
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/filter
       */
      filter: [{
        filter: ["", "none"]
      }],
      /**
       * Blur
       * @see https://tailwindcss.com/docs/blur
       */
      blur: [{
        blur: [a]
      }],
      /**
       * Brightness
       * @see https://tailwindcss.com/docs/brightness
       */
      brightness: [{
        brightness: [c]
      }],
      /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */
      contrast: [{
        contrast: [C]
      }],
      /**
       * Drop Shadow
       * @see https://tailwindcss.com/docs/drop-shadow
       */
      "drop-shadow": [{
        "drop-shadow": ["", "none", Ln, ve]
      }],
      /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */
      grayscale: [{
        grayscale: [y]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      "hue-rotate": [{
        "hue-rotate": [_]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: [b]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [B]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: [W]
      }],
      /**
       * Backdrop Filter
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/backdrop-filter
       */
      "backdrop-filter": [{
        "backdrop-filter": ["", "none"]
      }],
      /**
       * Backdrop Blur
       * @see https://tailwindcss.com/docs/backdrop-blur
       */
      "backdrop-blur": [{
        "backdrop-blur": [a]
      }],
      /**
       * Backdrop Brightness
       * @see https://tailwindcss.com/docs/backdrop-brightness
       */
      "backdrop-brightness": [{
        "backdrop-brightness": [c]
      }],
      /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */
      "backdrop-contrast": [{
        "backdrop-contrast": [C]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      "backdrop-grayscale": [{
        "backdrop-grayscale": [y]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [_]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": [b]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [I]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [B]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": [W]
      }],
      // Tables
      /**
       * Border Collapse
       * @see https://tailwindcss.com/docs/border-collapse
       */
      "border-collapse": [{
        border: ["collapse", "separate"]
      }],
      /**
       * Border Spacing
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing": [{
        "border-spacing": [h]
      }],
      /**
       * Border Spacing X
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-x": [{
        "border-spacing-x": [h]
      }],
      /**
       * Border Spacing Y
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-y": [{
        "border-spacing-y": [h]
      }],
      /**
       * Table Layout
       * @see https://tailwindcss.com/docs/table-layout
       */
      "table-layout": [{
        table: ["auto", "fixed"]
      }],
      /**
       * Caption Side
       * @see https://tailwindcss.com/docs/caption-side
       */
      caption: [{
        caption: ["top", "bottom"]
      }],
      // Transitions and Animation
      /**
       * Tranisition Property
       * @see https://tailwindcss.com/docs/transition-property
       */
      transition: [{
        transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", ve]
      }],
      /**
       * Transition Duration
       * @see https://tailwindcss.com/docs/transition-duration
       */
      duration: [{
        duration: H()
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "in", "out", "in-out", ve]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: H()
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", "spin", "ping", "pulse", "bounce", ve]
      }],
      // Transforms
      /**
       * Transform
       * @see https://tailwindcss.com/docs/transform
       */
      transform: [{
        transform: ["", "gpu", "none"]
      }],
      /**
       * Scale
       * @see https://tailwindcss.com/docs/scale
       */
      scale: [{
        scale: [j]
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": [j]
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": [j]
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: [xo, ve]
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": [te]
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": [te]
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": [ne]
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": [ne]
      }],
      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      "transform-origin": [{
        origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", ve]
      }],
      // Interactivity
      /**
       * Accent Color
       * @see https://tailwindcss.com/docs/accent-color
       */
      accent: [{
        accent: ["auto", o]
      }],
      /**
       * Appearance
       * @see https://tailwindcss.com/docs/appearance
       */
      appearance: [{
        appearance: ["none", "auto"]
      }],
      /**
       * Cursor
       * @see https://tailwindcss.com/docs/cursor
       */
      cursor: [{
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", ve]
      }],
      /**
       * Caret Color
       * @see https://tailwindcss.com/docs/just-in-time-mode#caret-color-utilities
       */
      "caret-color": [{
        caret: [o]
      }],
      /**
       * Pointer Events
       * @see https://tailwindcss.com/docs/pointer-events
       */
      "pointer-events": [{
        "pointer-events": ["none", "auto"]
      }],
      /**
       * Resize
       * @see https://tailwindcss.com/docs/resize
       */
      resize: [{
        resize: ["none", "y", "x", ""]
      }],
      /**
       * Scroll Behavior
       * @see https://tailwindcss.com/docs/scroll-behavior
       */
      "scroll-behavior": [{
        scroll: ["auto", "smooth"]
      }],
      /**
       * Scroll Margin
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-m": [{
        "scroll-m": ue()
      }],
      /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": ue()
      }],
      /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": ue()
      }],
      /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": ue()
      }],
      /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": ue()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": ue()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": ue()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": ue()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": ue()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": ue()
      }],
      /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": ue()
      }],
      /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": ue()
      }],
      /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": ue()
      }],
      /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": ue()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": ue()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": ue()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": ue()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": ue()
      }],
      /**
       * Scroll Snap Align
       * @see https://tailwindcss.com/docs/scroll-snap-align
       */
      "snap-align": [{
        snap: ["start", "end", "center", "align-none"]
      }],
      /**
       * Scroll Snap Stop
       * @see https://tailwindcss.com/docs/scroll-snap-stop
       */
      "snap-stop": [{
        snap: ["normal", "always"]
      }],
      /**
       * Scroll Snap Type
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-type": [{
        snap: ["none", "x", "y", "both"]
      }],
      /**
       * Scroll Snap Type Strictness
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-strictness": [{
        snap: ["mandatory", "proximity"]
      }],
      /**
       * Touch Action
       * @see https://tailwindcss.com/docs/touch-action
       */
      touch: [{
        touch: ["auto", "none", "manipulation"]
      }],
      /**
       * Touch Action X
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-x": [{
        "touch-pan": ["x", "left", "right"]
      }],
      /**
       * Touch Action Y
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-y": [{
        "touch-pan": ["y", "up", "down"]
      }],
      /**
       * Touch Action Pinch Zoom
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-pz": ["touch-pinch-zoom"],
      /**
       * User Select
       * @see https://tailwindcss.com/docs/user-select
       */
      select: [{
        select: ["none", "text", "all", "auto"]
      }],
      /**
       * Will Change
       * @see https://tailwindcss.com/docs/will-change
       */
      "will-change": [{
        "will-change": ["auto", "scroll", "contents", "transform", ve]
      }],
      // SVG
      /**
       * Fill
       * @see https://tailwindcss.com/docs/fill
       */
      fill: [{
        fill: [o, "none"]
      }],
      /**
       * Stroke Width
       * @see https://tailwindcss.com/docs/stroke-width
       */
      "stroke-w": [{
        stroke: [an, zn, Ol]
      }],
      /**
       * Stroke
       * @see https://tailwindcss.com/docs/stroke
       */
      stroke: [{
        stroke: [o, "none"]
      }],
      // Accessibility
      /**
       * Screen Readers
       * @see https://tailwindcss.com/docs/screen-readers
       */
      sr: ["sr-only", "not-sr-only"],
      /**
       * Forced Color Adjust
       * @see https://tailwindcss.com/docs/forced-color-adjust
       */
      "forced-color-adjust": [{
        "forced-color-adjust": ["auto", "none"]
      }]
    },
    conflictingClassGroups: {
      overflow: ["overflow-x", "overflow-y"],
      overscroll: ["overscroll-x", "overscroll-y"],
      inset: ["inset-x", "inset-y", "start", "end", "top", "right", "bottom", "left"],
      "inset-x": ["right", "left"],
      "inset-y": ["top", "bottom"],
      flex: ["basis", "grow", "shrink"],
      gap: ["gap-x", "gap-y"],
      p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
      px: ["pr", "pl"],
      py: ["pt", "pb"],
      m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
      mx: ["mr", "ml"],
      my: ["mt", "mb"],
      size: ["w", "h"],
      "font-size": ["leading"],
      "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
      "fvn-ordinal": ["fvn-normal"],
      "fvn-slashed-zero": ["fvn-normal"],
      "fvn-figure": ["fvn-normal"],
      "fvn-spacing": ["fvn-normal"],
      "fvn-fraction": ["fvn-normal"],
      "line-clamp": ["display", "overflow"],
      rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"],
      "rounded-s": ["rounded-ss", "rounded-es"],
      "rounded-e": ["rounded-se", "rounded-ee"],
      "rounded-t": ["rounded-tl", "rounded-tr"],
      "rounded-r": ["rounded-tr", "rounded-br"],
      "rounded-b": ["rounded-br", "rounded-bl"],
      "rounded-l": ["rounded-tl", "rounded-bl"],
      "border-spacing": ["border-spacing-x", "border-spacing-y"],
      "border-w": ["border-w-s", "border-w-e", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
      "border-w-x": ["border-w-r", "border-w-l"],
      "border-w-y": ["border-w-t", "border-w-b"],
      "border-color": ["border-color-t", "border-color-r", "border-color-b", "border-color-l"],
      "border-color-x": ["border-color-r", "border-color-l"],
      "border-color-y": ["border-color-t", "border-color-b"],
      "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
      "scroll-mx": ["scroll-mr", "scroll-ml"],
      "scroll-my": ["scroll-mt", "scroll-mb"],
      "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
      "scroll-px": ["scroll-pr", "scroll-pl"],
      "scroll-py": ["scroll-pt", "scroll-pb"],
      touch: ["touch-x", "touch-y", "touch-pz"],
      "touch-x": ["touch"],
      "touch-y": ["touch"],
      "touch-pz": ["touch"]
    },
    conflictingClassGroupModifiers: {
      "font-size": ["leading"]
    }
  };
}
const kv = /* @__PURE__ */ ov(Sv);
function Xt(...o) {
  return kv(Vm(o));
}
function Ke() {
  return Ke = Object.assign ? Object.assign.bind() : function(o) {
    for (var s = 1; s < arguments.length; s++) {
      var a = arguments[s];
      for (var c in a)
        Object.prototype.hasOwnProperty.call(a, c) && (o[c] = a[c]);
    }
    return o;
  }, Ke.apply(this, arguments);
}
function An(o, s, { checkForDefaultPrevented: a = !0 } = {}) {
  return function(d) {
    if (o?.(d), a === !1 || !d.defaultPrevented)
      return s?.(d);
  };
}
function Cv(o, s) {
  typeof o == "function" ? o(s) : o != null && (o.current = s);
}
function Nd(...o) {
  return (s) => o.forEach(
    (a) => Cv(a, s)
  );
}
function Lr(...o) {
  return x.useCallback(Nd(...o), o);
}
function bv(o, s = []) {
  let a = [];
  function c(f, h) {
    const v = /* @__PURE__ */ x.createContext(h), C = a.length;
    a = [
      ...a,
      h
    ];
    function y(b) {
      const { scope: R, children: T, ...G } = b, $ = R?.[o][C] || v, L = x.useMemo(
        () => G,
        Object.values(G)
      );
      return /* @__PURE__ */ x.createElement($.Provider, {
        value: L
      }, T);
    }
    function _(b, R) {
      const T = R?.[o][C] || v, G = x.useContext(T);
      if (G)
        return G;
      if (h !== void 0)
        return h;
      throw new Error(`\`${b}\` must be used within \`${f}\``);
    }
    return y.displayName = f + "Provider", [
      y,
      _
    ];
  }
  const d = () => {
    const f = a.map((h) => /* @__PURE__ */ x.createContext(h));
    return function(v) {
      const C = v?.[o] || f;
      return x.useMemo(
        () => ({
          [`__scope${o}`]: {
            ...v,
            [o]: C
          }
        }),
        [
          v,
          C
        ]
      );
    };
  };
  return d.scopeName = o, [
    c,
    Pv(d, ...s)
  ];
}
function Pv(...o) {
  const s = o[0];
  if (o.length === 1)
    return s;
  const a = () => {
    const c = o.map(
      (d) => ({
        useScope: d(),
        scopeName: d.scopeName
      })
    );
    return function(f) {
      const h = c.reduce((v, { useScope: C, scopeName: y }) => {
        const b = C(f)[`__scope${y}`];
        return {
          ...v,
          ...b
        };
      }, {});
      return x.useMemo(
        () => ({
          [`__scope${s.scopeName}`]: h
        }),
        [
          h
        ]
      );
    };
  };
  return a.scopeName = s.scopeName, a;
}
const Ha = globalThis?.document ? x.useLayoutEffect : () => {
}, $v = pm.useId || (() => {
});
let Nv = 0;
function Oa(o) {
  const [s, a] = x.useState($v());
  return Ha(() => {
    o || a(
      (c) => c ?? String(Nv++)
    );
  }, [
    o
  ]), o || (s ? `radix-${s}` : "");
}
function rr(o) {
  const s = x.useRef(o);
  return x.useEffect(() => {
    s.current = o;
  }), x.useMemo(
    () => (...a) => {
      var c;
      return (c = s.current) === null || c === void 0 ? void 0 : c.call(s, ...a);
    },
    []
  );
}
function _v({ prop: o, defaultProp: s, onChange: a = () => {
} }) {
  const [c, d] = Rv({
    defaultProp: s,
    onChange: a
  }), f = o !== void 0, h = f ? o : c, v = rr(a), C = x.useCallback((y) => {
    if (f) {
      const b = typeof y == "function" ? y(o) : y;
      b !== o && v(b);
    } else
      d(y);
  }, [
    f,
    o,
    d,
    v
  ]);
  return [
    h,
    C
  ];
}
function Rv({ defaultProp: o, onChange: s }) {
  const a = x.useState(o), [c] = a, d = x.useRef(c), f = rr(s);
  return x.useEffect(() => {
    d.current !== c && (f(c), d.current = c);
  }, [
    c,
    d,
    f
  ]), a;
}
const Ja = /* @__PURE__ */ x.forwardRef((o, s) => {
  const { children: a, ...c } = o, d = x.Children.toArray(a), f = d.find(Ov);
  if (f) {
    const h = f.props.children, v = d.map((C) => C === f ? x.Children.count(h) > 1 ? x.Children.only(null) : /* @__PURE__ */ x.isValidElement(h) ? h.props.children : null : C);
    return /* @__PURE__ */ x.createElement(Va, Ke({}, c, {
      ref: s
    }), /* @__PURE__ */ x.isValidElement(h) ? /* @__PURE__ */ x.cloneElement(h, void 0, v) : null);
  }
  return /* @__PURE__ */ x.createElement(Va, Ke({}, c, {
    ref: s
  }), a);
});
Ja.displayName = "Slot";
const Va = /* @__PURE__ */ x.forwardRef((o, s) => {
  const { children: a, ...c } = o;
  return /* @__PURE__ */ x.isValidElement(a) ? /* @__PURE__ */ x.cloneElement(a, {
    ...Dv(c, a.props),
    ref: s ? Nd(s, a.ref) : a.ref
  }) : x.Children.count(a) > 1 ? x.Children.only(null) : null;
});
Va.displayName = "SlotClone";
const Tv = ({ children: o }) => /* @__PURE__ */ x.createElement(x.Fragment, null, o);
function Ov(o) {
  return /* @__PURE__ */ x.isValidElement(o) && o.type === Tv;
}
function Dv(o, s) {
  const a = {
    ...s
  };
  for (const c in s) {
    const d = o[c], f = s[c];
    /^on[A-Z]/.test(c) ? d && f ? a[c] = (...v) => {
      f(...v), d(...v);
    } : d && (a[c] = d) : c === "style" ? a[c] = {
      ...d,
      ...f
    } : c === "className" && (a[c] = [
      d,
      f
    ].filter(Boolean).join(" "));
  }
  return {
    ...o,
    ...a
  };
}
const zv = [
  "a",
  "button",
  "div",
  "form",
  "h2",
  "h3",
  "img",
  "input",
  "label",
  "li",
  "nav",
  "ol",
  "p",
  "span",
  "svg",
  "ul"
], jn = zv.reduce((o, s) => {
  const a = /* @__PURE__ */ x.forwardRef((c, d) => {
    const { asChild: f, ...h } = c, v = f ? Ja : s;
    return x.useEffect(() => {
      window[Symbol.for("radix-ui")] = !0;
    }, []), /* @__PURE__ */ x.createElement(v, Ke({}, h, {
      ref: d
    }));
  });
  return a.displayName = `Primitive.${s}`, {
    ...o,
    [s]: a
  };
}, {});
function Lv(o, s) {
  o && Hl.flushSync(
    () => o.dispatchEvent(s)
  );
}
function Mv(o, s = globalThis?.document) {
  const a = rr(o);
  x.useEffect(() => {
    const c = (d) => {
      d.key === "Escape" && a(d);
    };
    return s.addEventListener("keydown", c), () => s.removeEventListener("keydown", c);
  }, [
    a,
    s
  ]);
}
const Qa = "dismissableLayer.update", Iv = "dismissableLayer.pointerDownOutside", Av = "dismissableLayer.focusOutside";
let qc;
const jv = /* @__PURE__ */ x.createContext({
  layers: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
}), Fv = /* @__PURE__ */ x.forwardRef((o, s) => {
  var a;
  const { disableOutsidePointerEvents: c = !1, onEscapeKeyDown: d, onPointerDownOutside: f, onFocusOutside: h, onInteractOutside: v, onDismiss: C, ...y } = o, _ = x.useContext(jv), [b, R] = x.useState(null), T = (a = b?.ownerDocument) !== null && a !== void 0 ? a : globalThis?.document, [, G] = x.useState({}), $ = Lr(
    s,
    (te) => R(te)
  ), L = Array.from(_.layers), [I] = [
    ..._.layersWithOutsidePointerEventsDisabled
  ].slice(-1), le = L.indexOf(I), B = b ? L.indexOf(b) : -1, j = _.layersWithOutsidePointerEventsDisabled.size > 0, W = B >= le, ne = Uv((te) => {
    const he = te.target, Ne = [
      ..._.branches
    ].some(
      (Le) => Le.contains(he)
    );
    !W || Ne || (f?.(te), v?.(te), te.defaultPrevented || C?.());
  }, T), ie = Bv((te) => {
    const he = te.target;
    [
      ..._.branches
    ].some(
      (Le) => Le.contains(he)
    ) || (h?.(te), v?.(te), te.defaultPrevented || C?.());
  }, T);
  return Mv((te) => {
    B === _.layers.size - 1 && (d?.(te), !te.defaultPrevented && C && (te.preventDefault(), C()));
  }, T), x.useEffect(() => {
    if (b)
      return c && (_.layersWithOutsidePointerEventsDisabled.size === 0 && (qc = T.body.style.pointerEvents, T.body.style.pointerEvents = "none"), _.layersWithOutsidePointerEventsDisabled.add(b)), _.layers.add(b), ed(), () => {
        c && _.layersWithOutsidePointerEventsDisabled.size === 1 && (T.body.style.pointerEvents = qc);
      };
  }, [
    b,
    T,
    c,
    _
  ]), x.useEffect(() => () => {
    b && (_.layers.delete(b), _.layersWithOutsidePointerEventsDisabled.delete(b), ed());
  }, [
    b,
    _
  ]), x.useEffect(() => {
    const te = () => G({});
    return document.addEventListener(Qa, te), () => document.removeEventListener(Qa, te);
  }, []), /* @__PURE__ */ x.createElement(jn.div, Ke({}, y, {
    ref: $,
    style: {
      pointerEvents: j ? W ? "auto" : "none" : void 0,
      ...o.style
    },
    onFocusCapture: An(o.onFocusCapture, ie.onFocusCapture),
    onBlurCapture: An(o.onBlurCapture, ie.onBlurCapture),
    onPointerDownCapture: An(o.onPointerDownCapture, ne.onPointerDownCapture)
  }));
});
function Uv(o, s = globalThis?.document) {
  const a = rr(o), c = x.useRef(!1), d = x.useRef(() => {
  });
  return x.useEffect(() => {
    const f = (v) => {
      if (v.target && !c.current) {
        let _ = function() {
          _d(Iv, a, y, {
            discrete: !0
          });
        };
        var C = _;
        const y = {
          originalEvent: v
        };
        v.pointerType === "touch" ? (s.removeEventListener("click", d.current), d.current = _, s.addEventListener("click", d.current, {
          once: !0
        })) : _();
      } else
        s.removeEventListener("click", d.current);
      c.current = !1;
    }, h = window.setTimeout(() => {
      s.addEventListener("pointerdown", f);
    }, 0);
    return () => {
      window.clearTimeout(h), s.removeEventListener("pointerdown", f), s.removeEventListener("click", d.current);
    };
  }, [
    s,
    a
  ]), {
    // ensures we check React component tree (not just DOM tree)
    onPointerDownCapture: () => c.current = !0
  };
}
function Bv(o, s = globalThis?.document) {
  const a = rr(o), c = x.useRef(!1);
  return x.useEffect(() => {
    const d = (f) => {
      f.target && !c.current && _d(Av, a, {
        originalEvent: f
      }, {
        discrete: !1
      });
    };
    return s.addEventListener("focusin", d), () => s.removeEventListener("focusin", d);
  }, [
    s,
    a
  ]), {
    onFocusCapture: () => c.current = !0,
    onBlurCapture: () => c.current = !1
  };
}
function ed() {
  const o = new CustomEvent(Qa);
  document.dispatchEvent(o);
}
function _d(o, s, a, { discrete: c }) {
  const d = a.originalEvent.target, f = new CustomEvent(o, {
    bubbles: !1,
    cancelable: !0,
    detail: a
  });
  s && d.addEventListener(o, s, {
    once: !0
  }), c ? Lv(d, f) : d.dispatchEvent(f);
}
const Da = "focusScope.autoFocusOnMount", za = "focusScope.autoFocusOnUnmount", td = {
  bubbles: !1,
  cancelable: !0
}, Wv = /* @__PURE__ */ x.forwardRef((o, s) => {
  const { loop: a = !1, trapped: c = !1, onMountAutoFocus: d, onUnmountAutoFocus: f, ...h } = o, [v, C] = x.useState(null), y = rr(d), _ = rr(f), b = x.useRef(null), R = Lr(
    s,
    ($) => C($)
  ), T = x.useRef({
    paused: !1,
    pause() {
      this.paused = !0;
    },
    resume() {
      this.paused = !1;
    }
  }).current;
  x.useEffect(() => {
    if (c) {
      let le = function(ne) {
        if (T.paused || !v)
          return;
        const ie = ne.target;
        v.contains(ie) ? b.current = ie : In(b.current, {
          select: !0
        });
      }, B = function(ne) {
        if (T.paused || !v)
          return;
        const ie = ne.relatedTarget;
        ie !== null && (v.contains(ie) || In(b.current, {
          select: !0
        }));
      }, j = function(ne) {
        if (document.activeElement === document.body)
          for (const te of ne)
            te.removedNodes.length > 0 && In(v);
      };
      var $ = le, L = B, I = j;
      document.addEventListener("focusin", le), document.addEventListener("focusout", B);
      const W = new MutationObserver(j);
      return v && W.observe(v, {
        childList: !0,
        subtree: !0
      }), () => {
        document.removeEventListener("focusin", le), document.removeEventListener("focusout", B), W.disconnect();
      };
    }
  }, [
    c,
    v,
    T.paused
  ]), x.useEffect(() => {
    if (v) {
      rd.add(T);
      const $ = document.activeElement;
      if (!v.contains($)) {
        const I = new CustomEvent(Da, td);
        v.addEventListener(Da, y), v.dispatchEvent(I), I.defaultPrevented || (Hv(Gv(Rd(v)), {
          select: !0
        }), document.activeElement === $ && In(v));
      }
      return () => {
        v.removeEventListener(Da, y), setTimeout(() => {
          const I = new CustomEvent(za, td);
          v.addEventListener(za, _), v.dispatchEvent(I), I.defaultPrevented || In($ ?? document.body, {
            select: !0
          }), v.removeEventListener(za, _), rd.remove(T);
        }, 0);
      };
    }
  }, [
    v,
    y,
    _,
    T
  ]);
  const G = x.useCallback(($) => {
    if (!a && !c || T.paused)
      return;
    const L = $.key === "Tab" && !$.altKey && !$.ctrlKey && !$.metaKey, I = document.activeElement;
    if (L && I) {
      const le = $.currentTarget, [B, j] = Vv(le);
      B && j ? !$.shiftKey && I === j ? ($.preventDefault(), a && In(B, {
        select: !0
      })) : $.shiftKey && I === B && ($.preventDefault(), a && In(j, {
        select: !0
      })) : I === le && $.preventDefault();
    }
  }, [
    a,
    c,
    T.paused
  ]);
  return /* @__PURE__ */ x.createElement(jn.div, Ke({
    tabIndex: -1
  }, h, {
    ref: R,
    onKeyDown: G
  }));
});
function Hv(o, { select: s = !1 } = {}) {
  const a = document.activeElement;
  for (const c of o)
    if (In(c, {
      select: s
    }), document.activeElement !== a)
      return;
}
function Vv(o) {
  const s = Rd(o), a = nd(s, o), c = nd(s.reverse(), o);
  return [
    a,
    c
  ];
}
function Rd(o) {
  const s = [], a = document.createTreeWalker(o, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (c) => {
      const d = c.tagName === "INPUT" && c.type === "hidden";
      return c.disabled || c.hidden || d ? NodeFilter.FILTER_SKIP : c.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; a.nextNode(); )
    s.push(a.currentNode);
  return s;
}
function nd(o, s) {
  for (const a of o)
    if (!Qv(a, {
      upTo: s
    }))
      return a;
}
function Qv(o, { upTo: s }) {
  if (getComputedStyle(o).visibility === "hidden")
    return !0;
  for (; o; ) {
    if (s !== void 0 && o === s)
      return !1;
    if (getComputedStyle(o).display === "none")
      return !0;
    o = o.parentElement;
  }
  return !1;
}
function Yv(o) {
  return o instanceof HTMLInputElement && "select" in o;
}
function In(o, { select: s = !1 } = {}) {
  if (o && o.focus) {
    const a = document.activeElement;
    o.focus({
      preventScroll: !0
    }), o !== a && Yv(o) && s && o.select();
  }
}
const rd = Kv();
function Kv() {
  let o = [];
  return {
    add(s) {
      const a = o[0];
      s !== a && a?.pause(), o = od(o, s), o.unshift(s);
    },
    remove(s) {
      var a;
      o = od(o, s), (a = o[0]) === null || a === void 0 || a.resume();
    }
  };
}
function od(o, s) {
  const a = [
    ...o
  ], c = a.indexOf(s);
  return c !== -1 && a.splice(c, 1), a;
}
function Gv(o) {
  return o.filter(
    (s) => s.tagName !== "A"
  );
}
const Xv = /* @__PURE__ */ x.forwardRef((o, s) => {
  var a;
  const { container: c = globalThis == null || (a = globalThis.document) === null || a === void 0 ? void 0 : a.body, ...d } = o;
  return c ? /* @__PURE__ */ xd.createPortal(/* @__PURE__ */ x.createElement(jn.div, Ke({}, d, {
    ref: s
  })), c) : null;
});
function Zv(o, s) {
  return x.useReducer((a, c) => {
    const d = s[a][c];
    return d ?? a;
  }, o);
}
const Vl = (o) => {
  const { present: s, children: a } = o, c = Jv(s), d = typeof a == "function" ? a({
    present: c.isPresent
  }) : x.Children.only(a), f = Lr(c.ref, d.ref);
  return typeof a == "function" || c.isPresent ? /* @__PURE__ */ x.cloneElement(d, {
    ref: f
  }) : null;
};
Vl.displayName = "Presence";
function Jv(o) {
  const [s, a] = x.useState(), c = x.useRef({}), d = x.useRef(o), f = x.useRef("none"), h = o ? "mounted" : "unmounted", [v, C] = Zv(h, {
    mounted: {
      UNMOUNT: "unmounted",
      ANIMATION_OUT: "unmountSuspended"
    },
    unmountSuspended: {
      MOUNT: "mounted",
      ANIMATION_END: "unmounted"
    },
    unmounted: {
      MOUNT: "mounted"
    }
  });
  return x.useEffect(() => {
    const y = Dl(c.current);
    f.current = v === "mounted" ? y : "none";
  }, [
    v
  ]), Ha(() => {
    const y = c.current, _ = d.current;
    if (_ !== o) {
      const R = f.current, T = Dl(y);
      o ? C("MOUNT") : T === "none" || y?.display === "none" ? C("UNMOUNT") : C(_ && R !== T ? "ANIMATION_OUT" : "UNMOUNT"), d.current = o;
    }
  }, [
    o,
    C
  ]), Ha(() => {
    if (s) {
      const y = (b) => {
        const T = Dl(c.current).includes(b.animationName);
        b.target === s && T && Hl.flushSync(
          () => C("ANIMATION_END")
        );
      }, _ = (b) => {
        b.target === s && (f.current = Dl(c.current));
      };
      return s.addEventListener("animationstart", _), s.addEventListener("animationcancel", y), s.addEventListener("animationend", y), () => {
        s.removeEventListener("animationstart", _), s.removeEventListener("animationcancel", y), s.removeEventListener("animationend", y);
      };
    } else
      C("ANIMATION_END");
  }, [
    s,
    C
  ]), {
    isPresent: [
      "mounted",
      "unmountSuspended"
    ].includes(v),
    ref: x.useCallback((y) => {
      y && (c.current = getComputedStyle(y)), a(y);
    }, [])
  };
}
function Dl(o) {
  return o?.animationName || "none";
}
let La = 0;
function qv() {
  x.useEffect(() => {
    var o, s;
    const a = document.querySelectorAll("[data-radix-focus-guard]");
    return document.body.insertAdjacentElement("afterbegin", (o = a[0]) !== null && o !== void 0 ? o : ld()), document.body.insertAdjacentElement("beforeend", (s = a[1]) !== null && s !== void 0 ? s : ld()), La++, () => {
      La === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach(
        (c) => c.remove()
      ), La--;
    };
  }, []);
}
function ld() {
  const o = document.createElement("span");
  return o.setAttribute("data-radix-focus-guard", ""), o.tabIndex = 0, o.style.cssText = "outline: none; opacity: 0; position: fixed; pointer-events: none", o;
}
var Gt = function() {
  return Gt = Object.assign || function(s) {
    for (var a, c = 1, d = arguments.length; c < d; c++) {
      a = arguments[c];
      for (var f in a)
        Object.prototype.hasOwnProperty.call(a, f) && (s[f] = a[f]);
    }
    return s;
  }, Gt.apply(this, arguments);
};
function Td(o, s) {
  var a = {};
  for (var c in o)
    Object.prototype.hasOwnProperty.call(o, c) && s.indexOf(c) < 0 && (a[c] = o[c]);
  if (o != null && typeof Object.getOwnPropertySymbols == "function")
    for (var d = 0, c = Object.getOwnPropertySymbols(o); d < c.length; d++)
      s.indexOf(c[d]) < 0 && Object.prototype.propertyIsEnumerable.call(o, c[d]) && (a[c[d]] = o[c[d]]);
  return a;
}
function eh(o, s, a) {
  if (a || arguments.length === 2)
    for (var c = 0, d = s.length, f; c < d; c++)
      (f || !(c in s)) && (f || (f = Array.prototype.slice.call(s, 0, c)), f[c] = s[c]);
  return o.concat(f || Array.prototype.slice.call(s));
}
var Ul = "right-scroll-bar-position", Bl = "width-before-scroll-bar", th = "with-scroll-bars-hidden", nh = "--removed-body-scroll-bar-size";
function Ma(o, s) {
  return typeof o == "function" ? o(s) : o && (o.current = s), o;
}
function rh(o, s) {
  var a = x.useState(function() {
    return {
      // value
      value: o,
      // last callback
      callback: s,
      // "memoized" public interface
      facade: {
        get current() {
          return a.value;
        },
        set current(c) {
          var d = a.value;
          d !== c && (a.value = c, a.callback(c, d));
        }
      }
    };
  })[0];
  return a.callback = s, a.facade;
}
var id = /* @__PURE__ */ new WeakMap();
function oh(o, s) {
  var a = rh(s || null, function(c) {
    return o.forEach(function(d) {
      return Ma(d, c);
    });
  });
  return x.useLayoutEffect(function() {
    var c = id.get(a);
    if (c) {
      var d = new Set(c), f = new Set(o), h = a.current;
      d.forEach(function(v) {
        f.has(v) || Ma(v, null);
      }), f.forEach(function(v) {
        d.has(v) || Ma(v, h);
      });
    }
    id.set(a, o);
  }, [o]), a;
}
function lh(o) {
  return o;
}
function ih(o, s) {
  s === void 0 && (s = lh);
  var a = [], c = !1, d = {
    read: function() {
      if (c)
        throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
      return a.length ? a[a.length - 1] : o;
    },
    useMedium: function(f) {
      var h = s(f, c);
      return a.push(h), function() {
        a = a.filter(function(v) {
          return v !== h;
        });
      };
    },
    assignSyncMedium: function(f) {
      for (c = !0; a.length; ) {
        var h = a;
        a = [], h.forEach(f);
      }
      a = {
        push: function(v) {
          return f(v);
        },
        filter: function() {
          return a;
        }
      };
    },
    assignMedium: function(f) {
      c = !0;
      var h = [];
      if (a.length) {
        var v = a;
        a = [], v.forEach(f), h = a;
      }
      var C = function() {
        var _ = h;
        h = [], _.forEach(f);
      }, y = function() {
        return Promise.resolve().then(C);
      };
      y(), a = {
        push: function(_) {
          h.push(_), y();
        },
        filter: function(_) {
          return h = h.filter(_), a;
        }
      };
    }
  };
  return d;
}
function ah(o) {
  o === void 0 && (o = {});
  var s = ih(null);
  return s.options = Gt({ async: !0, ssr: !1 }, o), s;
}
var Od = function(o) {
  var s = o.sideCar, a = Td(o, ["sideCar"]);
  if (!s)
    throw new Error("Sidecar: please provide `sideCar` property to import the right car");
  var c = s.read();
  if (!c)
    throw new Error("Sidecar medium not found");
  return x.createElement(c, Gt({}, a));
};
Od.isSideCarExport = !0;
function sh(o, s) {
  return o.useMedium(s), Od;
}
var Dd = ah(), Ia = function() {
}, Ql = x.forwardRef(function(o, s) {
  var a = x.useRef(null), c = x.useState({
    onScrollCapture: Ia,
    onWheelCapture: Ia,
    onTouchMoveCapture: Ia
  }), d = c[0], f = c[1], h = o.forwardProps, v = o.children, C = o.className, y = o.removeScrollBar, _ = o.enabled, b = o.shards, R = o.sideCar, T = o.noIsolation, G = o.inert, $ = o.allowPinchZoom, L = o.as, I = L === void 0 ? "div" : L, le = Td(o, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noIsolation", "inert", "allowPinchZoom", "as"]), B = R, j = oh([a, s]), W = Gt(Gt({}, le), d);
  return x.createElement(
    x.Fragment,
    null,
    _ && x.createElement(B, { sideCar: Dd, removeScrollBar: y, shards: b, noIsolation: T, inert: G, setCallbacks: f, allowPinchZoom: !!$, lockRef: a }),
    h ? x.cloneElement(x.Children.only(v), Gt(Gt({}, W), { ref: j })) : x.createElement(I, Gt({}, W, { className: C, ref: j }), v)
  );
});
Ql.defaultProps = {
  enabled: !0,
  removeScrollBar: !0,
  inert: !1
};
Ql.classNames = {
  fullWidth: Bl,
  zeroRight: Ul
};
var uh = function() {
  if (typeof __webpack_nonce__ < "u")
    return __webpack_nonce__;
};
function ch() {
  if (!document)
    return null;
  var o = document.createElement("style");
  o.type = "text/css";
  var s = uh();
  return s && o.setAttribute("nonce", s), o;
}
function dh(o, s) {
  o.styleSheet ? o.styleSheet.cssText = s : o.appendChild(document.createTextNode(s));
}
function fh(o) {
  var s = document.head || document.getElementsByTagName("head")[0];
  s.appendChild(o);
}
var ph = function() {
  var o = 0, s = null;
  return {
    add: function(a) {
      o == 0 && (s = ch()) && (dh(s, a), fh(s)), o++;
    },
    remove: function() {
      o--, !o && s && (s.parentNode && s.parentNode.removeChild(s), s = null);
    }
  };
}, mh = function() {
  var o = ph();
  return function(s, a) {
    x.useEffect(function() {
      return o.add(s), function() {
        o.remove();
      };
    }, [s && a]);
  };
}, zd = function() {
  var o = mh(), s = function(a) {
    var c = a.styles, d = a.dynamic;
    return o(c, d), null;
  };
  return s;
}, vh = {
  left: 0,
  top: 0,
  right: 0,
  gap: 0
}, Aa = function(o) {
  return parseInt(o || "", 10) || 0;
}, hh = function(o) {
  var s = window.getComputedStyle(document.body), a = s[o === "padding" ? "paddingLeft" : "marginLeft"], c = s[o === "padding" ? "paddingTop" : "marginTop"], d = s[o === "padding" ? "paddingRight" : "marginRight"];
  return [Aa(a), Aa(c), Aa(d)];
}, gh = function(o) {
  if (o === void 0 && (o = "margin"), typeof window > "u")
    return vh;
  var s = hh(o), a = document.documentElement.clientWidth, c = window.innerWidth;
  return {
    left: s[0],
    top: s[1],
    right: s[2],
    gap: Math.max(0, c - a + s[2] - s[0])
  };
}, yh = zd(), wh = function(o, s, a, c) {
  var d = o.left, f = o.top, h = o.right, v = o.gap;
  return a === void 0 && (a = "margin"), `
  .`.concat(th, ` {
   overflow: hidden `).concat(c, `;
   padding-right: `).concat(v, "px ").concat(c, `;
  }
  body {
    overflow: hidden `).concat(c, `;
    overscroll-behavior: contain;
    `).concat([
    s && "position: relative ".concat(c, ";"),
    a === "margin" && `
    padding-left: `.concat(d, `px;
    padding-top: `).concat(f, `px;
    padding-right: `).concat(h, `px;
    margin-left:0;
    margin-top:0;
    margin-right: `).concat(v, "px ").concat(c, `;
    `),
    a === "padding" && "padding-right: ".concat(v, "px ").concat(c, ";")
  ].filter(Boolean).join(""), `
  }
  
  .`).concat(Ul, ` {
    right: `).concat(v, "px ").concat(c, `;
  }
  
  .`).concat(Bl, ` {
    margin-right: `).concat(v, "px ").concat(c, `;
  }
  
  .`).concat(Ul, " .").concat(Ul, ` {
    right: 0 `).concat(c, `;
  }
  
  .`).concat(Bl, " .").concat(Bl, ` {
    margin-right: 0 `).concat(c, `;
  }
  
  body {
    `).concat(nh, ": ").concat(v, `px;
  }
`);
}, xh = function(o) {
  var s = o.noRelative, a = o.noImportant, c = o.gapMode, d = c === void 0 ? "margin" : c, f = x.useMemo(function() {
    return gh(d);
  }, [d]);
  return x.createElement(yh, { styles: wh(f, !s, d, a ? "" : "!important") });
}, Ya = !1;
if (typeof window < "u")
  try {
    var zl = Object.defineProperty({}, "passive", {
      get: function() {
        return Ya = !0, !0;
      }
    });
    window.addEventListener("test", zl, zl), window.removeEventListener("test", zl, zl);
  } catch {
    Ya = !1;
  }
var Tr = Ya ? { passive: !1 } : !1, Eh = function(o) {
  return o.tagName === "TEXTAREA";
}, Ld = function(o, s) {
  var a = window.getComputedStyle(o);
  return (
    // not-not-scrollable
    a[s] !== "hidden" && // contains scroll inside self
    !(a.overflowY === a.overflowX && !Eh(o) && a[s] === "visible")
  );
}, Sh = function(o) {
  return Ld(o, "overflowY");
}, kh = function(o) {
  return Ld(o, "overflowX");
}, ad = function(o, s) {
  var a = s;
  do {
    typeof ShadowRoot < "u" && a instanceof ShadowRoot && (a = a.host);
    var c = Md(o, a);
    if (c) {
      var d = Id(o, a), f = d[1], h = d[2];
      if (f > h)
        return !0;
    }
    a = a.parentNode;
  } while (a && a !== document.body);
  return !1;
}, Ch = function(o) {
  var s = o.scrollTop, a = o.scrollHeight, c = o.clientHeight;
  return [
    s,
    a,
    c
  ];
}, bh = function(o) {
  var s = o.scrollLeft, a = o.scrollWidth, c = o.clientWidth;
  return [
    s,
    a,
    c
  ];
}, Md = function(o, s) {
  return o === "v" ? Sh(s) : kh(s);
}, Id = function(o, s) {
  return o === "v" ? Ch(s) : bh(s);
}, Ph = function(o, s) {
  return o === "h" && s === "rtl" ? -1 : 1;
}, $h = function(o, s, a, c, d) {
  var f = Ph(o, window.getComputedStyle(s).direction), h = f * c, v = a.target, C = s.contains(v), y = !1, _ = h > 0, b = 0, R = 0;
  do {
    var T = Id(o, v), G = T[0], $ = T[1], L = T[2], I = $ - L - f * G;
    (G || I) && Md(o, v) && (b += I, R += G), v = v.parentNode;
  } while (
    // portaled content
    !C && v !== document.body || // self content
    C && (s.contains(v) || s === v)
  );
  return (_ && (d && b === 0 || !d && h > b) || !_ && (d && R === 0 || !d && -h > R)) && (y = !0), y;
}, Ll = function(o) {
  return "changedTouches" in o ? [o.changedTouches[0].clientX, o.changedTouches[0].clientY] : [0, 0];
}, sd = function(o) {
  return [o.deltaX, o.deltaY];
}, ud = function(o) {
  return o && "current" in o ? o.current : o;
}, Nh = function(o, s) {
  return o[0] === s[0] && o[1] === s[1];
}, _h = function(o) {
  return `
  .block-interactivity-`.concat(o, ` {pointer-events: none;}
  .allow-interactivity-`).concat(o, ` {pointer-events: all;}
`);
}, Rh = 0, Or = [];
function Th(o) {
  var s = x.useRef([]), a = x.useRef([0, 0]), c = x.useRef(), d = x.useState(Rh++)[0], f = x.useState(function() {
    return zd();
  })[0], h = x.useRef(o);
  x.useEffect(function() {
    h.current = o;
  }, [o]), x.useEffect(function() {
    if (o.inert) {
      document.body.classList.add("block-interactivity-".concat(d));
      var $ = eh([o.lockRef.current], (o.shards || []).map(ud), !0).filter(Boolean);
      return $.forEach(function(L) {
        return L.classList.add("allow-interactivity-".concat(d));
      }), function() {
        document.body.classList.remove("block-interactivity-".concat(d)), $.forEach(function(L) {
          return L.classList.remove("allow-interactivity-".concat(d));
        });
      };
    }
  }, [o.inert, o.lockRef.current, o.shards]);
  var v = x.useCallback(function($, L) {
    if ("touches" in $ && $.touches.length === 2)
      return !h.current.allowPinchZoom;
    var I = Ll($), le = a.current, B = "deltaX" in $ ? $.deltaX : le[0] - I[0], j = "deltaY" in $ ? $.deltaY : le[1] - I[1], W, ne = $.target, ie = Math.abs(B) > Math.abs(j) ? "h" : "v";
    if ("touches" in $ && ie === "h" && ne.type === "range")
      return !1;
    var te = ad(ie, ne);
    if (!te)
      return !0;
    if (te ? W = ie : (W = ie === "v" ? "h" : "v", te = ad(ie, ne)), !te)
      return !1;
    if (!c.current && "changedTouches" in $ && (B || j) && (c.current = W), !W)
      return !0;
    var he = c.current || W;
    return $h(he, L, $, he === "h" ? B : j, !0);
  }, []), C = x.useCallback(function($) {
    var L = $;
    if (!(!Or.length || Or[Or.length - 1] !== f)) {
      var I = "deltaY" in L ? sd(L) : Ll(L), le = s.current.filter(function(W) {
        return W.name === L.type && W.target === L.target && Nh(W.delta, I);
      })[0];
      if (le && le.should) {
        L.cancelable && L.preventDefault();
        return;
      }
      if (!le) {
        var B = (h.current.shards || []).map(ud).filter(Boolean).filter(function(W) {
          return W.contains(L.target);
        }), j = B.length > 0 ? v(L, B[0]) : !h.current.noIsolation;
        j && L.cancelable && L.preventDefault();
      }
    }
  }, []), y = x.useCallback(function($, L, I, le) {
    var B = { name: $, delta: L, target: I, should: le };
    s.current.push(B), setTimeout(function() {
      s.current = s.current.filter(function(j) {
        return j !== B;
      });
    }, 1);
  }, []), _ = x.useCallback(function($) {
    a.current = Ll($), c.current = void 0;
  }, []), b = x.useCallback(function($) {
    y($.type, sd($), $.target, v($, o.lockRef.current));
  }, []), R = x.useCallback(function($) {
    y($.type, Ll($), $.target, v($, o.lockRef.current));
  }, []);
  x.useEffect(function() {
    return Or.push(f), o.setCallbacks({
      onScrollCapture: b,
      onWheelCapture: b,
      onTouchMoveCapture: R
    }), document.addEventListener("wheel", C, Tr), document.addEventListener("touchmove", C, Tr), document.addEventListener("touchstart", _, Tr), function() {
      Or = Or.filter(function($) {
        return $ !== f;
      }), document.removeEventListener("wheel", C, Tr), document.removeEventListener("touchmove", C, Tr), document.removeEventListener("touchstart", _, Tr);
    };
  }, []);
  var T = o.removeScrollBar, G = o.inert;
  return x.createElement(
    x.Fragment,
    null,
    G ? x.createElement(f, { styles: _h(d) }) : null,
    T ? x.createElement(xh, { gapMode: "margin" }) : null
  );
}
const Oh = sh(Dd, Th);
var Ad = x.forwardRef(function(o, s) {
  return x.createElement(Ql, Gt({}, o, { ref: s, sideCar: Oh }));
});
Ad.classNames = Ql.classNames;
const Dh = Ad;
var zh = function(o) {
  if (typeof document > "u")
    return null;
  var s = Array.isArray(o) ? o[0] : o;
  return s.ownerDocument.body;
}, Dr = /* @__PURE__ */ new WeakMap(), Ml = /* @__PURE__ */ new WeakMap(), Il = {}, ja = 0, jd = function(o) {
  return o && (o.host || jd(o.parentNode));
}, Lh = function(o, s) {
  return s.map(function(a) {
    if (o.contains(a))
      return a;
    var c = jd(a);
    return c && o.contains(c) ? c : (console.error("aria-hidden", a, "in not contained inside", o, ". Doing nothing"), null);
  }).filter(function(a) {
    return !!a;
  });
}, Mh = function(o, s, a, c) {
  var d = Lh(s, Array.isArray(o) ? o : [o]);
  Il[a] || (Il[a] = /* @__PURE__ */ new WeakMap());
  var f = Il[a], h = [], v = /* @__PURE__ */ new Set(), C = new Set(d), y = function(b) {
    !b || v.has(b) || (v.add(b), y(b.parentNode));
  };
  d.forEach(y);
  var _ = function(b) {
    !b || C.has(b) || Array.prototype.forEach.call(b.children, function(R) {
      if (v.has(R))
        _(R);
      else {
        var T = R.getAttribute(c), G = T !== null && T !== "false", $ = (Dr.get(R) || 0) + 1, L = (f.get(R) || 0) + 1;
        Dr.set(R, $), f.set(R, L), h.push(R), $ === 1 && G && Ml.set(R, !0), L === 1 && R.setAttribute(a, "true"), G || R.setAttribute(c, "true");
      }
    });
  };
  return _(s), v.clear(), ja++, function() {
    h.forEach(function(b) {
      var R = Dr.get(b) - 1, T = f.get(b) - 1;
      Dr.set(b, R), f.set(b, T), R || (Ml.has(b) || b.removeAttribute(c), Ml.delete(b)), T || b.removeAttribute(a);
    }), ja--, ja || (Dr = /* @__PURE__ */ new WeakMap(), Dr = /* @__PURE__ */ new WeakMap(), Ml = /* @__PURE__ */ new WeakMap(), Il = {});
  };
}, Ih = function(o, s, a) {
  a === void 0 && (a = "data-aria-hidden");
  var c = Array.from(Array.isArray(o) ? o : [o]), d = s || zh(o);
  return d ? (c.push.apply(c, Array.from(d.querySelectorAll("[aria-live]"))), Mh(c, d, a, "aria-hidden")) : function() {
    return null;
  };
};
const Fd = "Dialog", [Ud, L0] = bv(Fd), [Ah, Ft] = Ud(Fd), jh = (o) => {
  const { __scopeDialog: s, children: a, open: c, defaultOpen: d, onOpenChange: f, modal: h = !0 } = o, v = x.useRef(null), C = x.useRef(null), [y = !1, _] = _v({
    prop: c,
    defaultProp: d,
    onChange: f
  });
  return /* @__PURE__ */ x.createElement(Ah, {
    scope: s,
    triggerRef: v,
    contentRef: C,
    contentId: Oa(),
    titleId: Oa(),
    descriptionId: Oa(),
    open: y,
    onOpenChange: _,
    onOpenToggle: x.useCallback(
      () => _(
        (b) => !b
      ),
      [
        _
      ]
    ),
    modal: h
  }, a);
}, Fh = "DialogTrigger", Uh = /* @__PURE__ */ x.forwardRef((o, s) => {
  const { __scopeDialog: a, ...c } = o, d = Ft(Fh, a), f = Lr(s, d.triggerRef);
  return /* @__PURE__ */ x.createElement(jn.button, Ke({
    type: "button",
    "aria-haspopup": "dialog",
    "aria-expanded": d.open,
    "aria-controls": d.contentId,
    "data-state": qa(d.open)
  }, c, {
    ref: f,
    onClick: An(o.onClick, d.onOpenToggle)
  }));
}), Bd = "DialogPortal", [Bh, Wd] = Ud(Bd, {
  forceMount: void 0
}), Wh = (o) => {
  const { __scopeDialog: s, forceMount: a, children: c, container: d } = o, f = Ft(Bd, s);
  return /* @__PURE__ */ x.createElement(Bh, {
    scope: s,
    forceMount: a
  }, x.Children.map(
    c,
    (h) => /* @__PURE__ */ x.createElement(Vl, {
      present: a || f.open
    }, /* @__PURE__ */ x.createElement(Xv, {
      asChild: !0,
      container: d
    }, h))
  ));
}, Ka = "DialogOverlay", Hh = /* @__PURE__ */ x.forwardRef((o, s) => {
  const a = Wd(Ka, o.__scopeDialog), { forceMount: c = a.forceMount, ...d } = o, f = Ft(Ka, o.__scopeDialog);
  return f.modal ? /* @__PURE__ */ x.createElement(Vl, {
    present: c || f.open
  }, /* @__PURE__ */ x.createElement(Vh, Ke({}, d, {
    ref: s
  }))) : null;
}), Vh = /* @__PURE__ */ x.forwardRef((o, s) => {
  const { __scopeDialog: a, ...c } = o, d = Ft(Ka, a);
  return (
    // Make sure `Content` is scrollable even when it doesn't live inside `RemoveScroll`
    // ie. when `Overlay` and `Content` are siblings
    /* @__PURE__ */ x.createElement(Dh, {
      as: Ja,
      allowPinchZoom: !0,
      shards: [
        d.contentRef
      ]
    }, /* @__PURE__ */ x.createElement(jn.div, Ke({
      "data-state": qa(d.open)
    }, c, {
      ref: s,
      style: {
        pointerEvents: "auto",
        ...c.style
      }
    })))
  );
}), ko = "DialogContent", Qh = /* @__PURE__ */ x.forwardRef((o, s) => {
  const a = Wd(ko, o.__scopeDialog), { forceMount: c = a.forceMount, ...d } = o, f = Ft(ko, o.__scopeDialog);
  return /* @__PURE__ */ x.createElement(Vl, {
    present: c || f.open
  }, f.modal ? /* @__PURE__ */ x.createElement(Yh, Ke({}, d, {
    ref: s
  })) : /* @__PURE__ */ x.createElement(Kh, Ke({}, d, {
    ref: s
  })));
}), Yh = /* @__PURE__ */ x.forwardRef((o, s) => {
  const a = Ft(ko, o.__scopeDialog), c = x.useRef(null), d = Lr(s, a.contentRef, c);
  return x.useEffect(() => {
    const f = c.current;
    if (f)
      return Ih(f);
  }, []), /* @__PURE__ */ x.createElement(Hd, Ke({}, o, {
    ref: d,
    trapFocus: a.open,
    disableOutsidePointerEvents: !0,
    onCloseAutoFocus: An(o.onCloseAutoFocus, (f) => {
      var h;
      f.preventDefault(), (h = a.triggerRef.current) === null || h === void 0 || h.focus();
    }),
    onPointerDownOutside: An(o.onPointerDownOutside, (f) => {
      const h = f.detail.originalEvent, v = h.button === 0 && h.ctrlKey === !0;
      (h.button === 2 || v) && f.preventDefault();
    }),
    onFocusOutside: An(
      o.onFocusOutside,
      (f) => f.preventDefault()
    )
  }));
}), Kh = /* @__PURE__ */ x.forwardRef((o, s) => {
  const a = Ft(ko, o.__scopeDialog), c = x.useRef(!1), d = x.useRef(!1);
  return /* @__PURE__ */ x.createElement(Hd, Ke({}, o, {
    ref: s,
    trapFocus: !1,
    disableOutsidePointerEvents: !1,
    onCloseAutoFocus: (f) => {
      var h;
      if ((h = o.onCloseAutoFocus) === null || h === void 0 || h.call(o, f), !f.defaultPrevented) {
        var v;
        c.current || (v = a.triggerRef.current) === null || v === void 0 || v.focus(), f.preventDefault();
      }
      c.current = !1, d.current = !1;
    },
    onInteractOutside: (f) => {
      var h, v;
      (h = o.onInteractOutside) === null || h === void 0 || h.call(o, f), f.defaultPrevented || (c.current = !0, f.detail.originalEvent.type === "pointerdown" && (d.current = !0));
      const C = f.target;
      ((v = a.triggerRef.current) === null || v === void 0 ? void 0 : v.contains(C)) && f.preventDefault(), f.detail.originalEvent.type === "focusin" && d.current && f.preventDefault();
    }
  }));
}), Hd = /* @__PURE__ */ x.forwardRef((o, s) => {
  const { __scopeDialog: a, trapFocus: c, onOpenAutoFocus: d, onCloseAutoFocus: f, ...h } = o, v = Ft(ko, a), C = x.useRef(null), y = Lr(s, C);
  return qv(), /* @__PURE__ */ x.createElement(x.Fragment, null, /* @__PURE__ */ x.createElement(Wv, {
    asChild: !0,
    loop: !0,
    trapped: c,
    onMountAutoFocus: d,
    onUnmountAutoFocus: f
  }, /* @__PURE__ */ x.createElement(Fv, Ke({
    role: "dialog",
    id: v.contentId,
    "aria-describedby": v.descriptionId,
    "aria-labelledby": v.titleId,
    "data-state": qa(v.open)
  }, h, {
    ref: y,
    onDismiss: () => v.onOpenChange(!1)
  }))), !1);
}), Gh = "DialogTitle", Xh = /* @__PURE__ */ x.forwardRef((o, s) => {
  const { __scopeDialog: a, ...c } = o, d = Ft(Gh, a);
  return /* @__PURE__ */ x.createElement(jn.h2, Ke({
    id: d.titleId
  }, c, {
    ref: s
  }));
}), Zh = "DialogDescription", Jh = /* @__PURE__ */ x.forwardRef((o, s) => {
  const { __scopeDialog: a, ...c } = o, d = Ft(Zh, a);
  return /* @__PURE__ */ x.createElement(jn.p, Ke({
    id: d.descriptionId
  }, c, {
    ref: s
  }));
}), qh = "DialogClose", e0 = /* @__PURE__ */ x.forwardRef((o, s) => {
  const { __scopeDialog: a, ...c } = o, d = Ft(qh, a);
  return /* @__PURE__ */ x.createElement(jn.button, Ke({
    type: "button"
  }, c, {
    ref: s,
    onClick: An(
      o.onClick,
      () => d.onOpenChange(!1)
    )
  }));
});
function qa(o) {
  return o ? "open" : "closed";
}
const Vd = jh, t0 = Uh, Qd = Wh, es = Hh, ts = Qh, ns = Xh, rs = Jh, Yd = e0;
function n0(o, s) {
  if (o == null)
    return {};
  var a = {}, c = Object.keys(o), d, f;
  for (f = 0; f < c.length; f++)
    d = c[f], !(s.indexOf(d) >= 0) && (a[d] = o[d]);
  return a;
}
var r0 = ["color"], o0 = /* @__PURE__ */ x.forwardRef(function(o, s) {
  var a = o.color, c = a === void 0 ? "currentColor" : a, d = n0(o, r0);
  return x.createElement("svg", Object.assign({
    width: "15",
    height: "15",
    viewBox: "0 0 15 15",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, d, {
    ref: s
  }), x.createElement("path", {
    d: "M11.7816 4.03157C12.0062 3.80702 12.0062 3.44295 11.7816 3.2184C11.5571 2.99385 11.193 2.99385 10.9685 3.2184L7.50005 6.68682L4.03164 3.2184C3.80708 2.99385 3.44301 2.99385 3.21846 3.2184C2.99391 3.44295 2.99391 3.80702 3.21846 4.03157L6.68688 7.49999L3.21846 10.9684C2.99391 11.193 2.99391 11.557 3.21846 11.7816C3.44301 12.0061 3.80708 12.0061 4.03164 11.7816L7.50005 8.31316L10.9685 11.7816C11.193 12.0061 11.5571 12.0061 11.7816 11.7816C12.0062 11.557 12.0062 11.193 11.7816 10.9684L8.31322 7.49999L11.7816 4.03157Z",
    fill: c,
    fillRule: "evenodd",
    clipRule: "evenodd"
  }));
});
const l0 = Vd, i0 = Qd, Kd = x.forwardRef(({ className: o, ...s }, a) => /* @__PURE__ */ Ee.jsx(
  es,
  {
    ref: a,
    className: Xt(
      "fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      o
    ),
    ...s
  }
));
Kd.displayName = es.displayName;
const Gd = x.forwardRef(({ className: o, children: s, ...a }, c) => /* @__PURE__ */ Ee.jsxs(i0, { children: [
  /* @__PURE__ */ Ee.jsx(Kd, {}),
  /* @__PURE__ */ Ee.jsxs(
    ts,
    {
      ref: c,
      className: Xt(
        "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",
        o
      ),
      ...a,
      children: [
        s,
        /* @__PURE__ */ Ee.jsxs(Yd, { className: "absolute right-4 top-4 m-0 rounded-sm border-none bg-transparent p-0 opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground", children: [
          /* @__PURE__ */ Ee.jsx(o0, { className: "h-4 w-4" }),
          /* @__PURE__ */ Ee.jsx("span", { className: "sr-only", children: "Close" })
        ] })
      ]
    }
  )
] }));
Gd.displayName = ts.displayName;
function Xd({ className: o, ...s }) {
  return /* @__PURE__ */ Ee.jsx("div", { className: Xt("flex flex-col space-y-1.5 text-center sm:text-left", o), ...s });
}
Xd.displayName = "DialogHeader";
const Zd = x.forwardRef(({ className: o, ...s }, a) => /* @__PURE__ */ Ee.jsx(
  ns,
  {
    ref: a,
    className: Xt("text-lg font-semibold leading-none tracking-tight", o),
    ...s
  }
));
Zd.displayName = ns.displayName;
const Jd = x.forwardRef(({ className: o, ...s }, a) => /* @__PURE__ */ Ee.jsx(
  rs,
  {
    ref: a,
    className: Xt("text-sm text-muted-foreground", o),
    ...s
  }
));
Jd.displayName = rs.displayName;
var qd = N.createContext({ drawerRef: { current: null }, overlayRef: { current: null }, scaleBackground: () => {
}, onPress: () => {
}, onRelease: () => {
}, onDrag: () => {
}, onNestedDrag: () => {
}, onNestedOpenChange: () => {
}, onNestedRelease: () => {
}, openProp: void 0, dismissible: !1, isOpen: !1, keyboardIsOpen: { current: !1 }, snapPointsOffset: null, snapPoints: null, modal: !1, shouldFade: !1, activeSnapPoint: null, onOpenChange: () => {
}, setActiveSnapPoint: () => {
}, visible: !1, closeDrawer: () => {
}, setVisible: () => {
}, direction: "bottom" }), os = () => N.useContext(qd);
function a0(o, { insertAt: s } = {}) {
  if (!o || typeof document > "u")
    return;
  let a = document.head || document.getElementsByTagName("head")[0], c = document.createElement("style");
  c.type = "text/css", s === "top" && a.firstChild ? a.insertBefore(c, a.firstChild) : a.appendChild(c), c.styleSheet ? c.styleSheet.cssText = o : c.appendChild(document.createTextNode(o));
}
a0(`[vaul-drawer]{touch-action:none;transition:transform .5s cubic-bezier(.32,.72,0,1)}[vaul-drawer][vaul-drawer-direction=bottom]{transform:translate3d(0,100%,0)}[vaul-drawer][vaul-drawer-direction=top]{transform:translate3d(0,-100%,0)}[vaul-drawer][vaul-drawer-direction=left]{transform:translate3d(-100%,0,0)}[vaul-drawer][vaul-drawer-direction=right]{transform:translate3d(100%,0,0)}.vaul-dragging .vaul-scrollable [vault-drawer-direction=top],.vaul-dragging .vaul-scrollable [vault-drawer-direction=bottom]{overflow-y:hidden!important}.vaul-dragging .vaul-scrollable [vault-drawer-direction=left],.vaul-dragging .vaul-scrollable [vault-drawer-direction=right]{overflow-x:hidden!important}[vaul-drawer][vaul-drawer-visible=true][vaul-drawer-direction=top],[vaul-drawer][vaul-drawer-visible=true][vaul-drawer-direction=bottom]{transform:translate3d(0,var(--snap-point-height, 0),0)}[vaul-drawer][vaul-drawer-visible=true][vaul-drawer-direction=left],[vaul-drawer][vaul-drawer-visible=true][vaul-drawer-direction=right]{transform:translate3d(var(--snap-point-height, 0),0,0)}[vaul-overlay]{opacity:0;transition:opacity .5s cubic-bezier(.32,.72,0,1)}[vaul-overlay][vaul-drawer-visible=true]{opacity:1}[vaul-drawer]:after{content:"";position:absolute;background:inherit;background-color:inherit}[vaul-drawer][vaul-drawer-direction=top]:after{top:initial;bottom:100%;left:0;right:0;height:200%}[vaul-drawer][vaul-drawer-direction=bottom]:after{top:100%;bottom:initial;left:0;right:0;height:200%}[vaul-drawer][vaul-drawer-direction=left]:after{left:initial;right:100%;top:0;bottom:0;width:200%}[vaul-drawer][vaul-drawer-direction=right]:after{left:100%;right:initial;top:0;bottom:0;width:200%}[vaul-overlay][vaul-snap-points=true]:not([vaul-snap-points-overlay="true"]):not([data-state="closed"]){opacity:0}[vaul-overlay][vaul-snap-points-overlay=true]:not([vaul-drawer-visible="false"]){opacity:1}@keyframes fake-animation{}@media (hover: hover) and (pointer: fine){[vaul-drawer]{user-select:none}}
`);
var s0 = typeof window < "u" ? x.useLayoutEffect : x.useEffect;
function Ga(...o) {
  return (...s) => {
    for (let a of o)
      typeof a == "function" && a(...s);
  };
}
function u0() {
  return ls(/^Mac/);
}
function c0() {
  return ls(/^iPhone/);
}
function d0() {
  return ls(/^iPad/) || u0() && navigator.maxTouchPoints > 1;
}
function ef() {
  return c0() || d0();
}
function ls(o) {
  return typeof window < "u" && window.navigator != null ? o.test(window.navigator.platform) : void 0;
}
var Fa = typeof document < "u" && window.visualViewport;
function cd(o) {
  let s = window.getComputedStyle(o);
  return /(auto|scroll)/.test(s.overflow + s.overflowX + s.overflowY);
}
function tf(o) {
  for (cd(o) && (o = o.parentElement); o && !cd(o); )
    o = o.parentElement;
  return o || document.scrollingElement || document.documentElement;
}
var f0 = /* @__PURE__ */ new Set(["checkbox", "radio", "range", "color", "file", "image", "button", "submit", "reset"]), Al = 0, Ua;
function p0(o = {}) {
  let { isDisabled: s } = o;
  s0(() => {
    if (!s)
      return Al++, Al === 1 && (ef() ? Ua = v0() : Ua = m0()), () => {
        Al--, Al === 0 && Ua();
      };
  }, [s]);
}
function m0() {
  return Ga(nf(document.documentElement, "paddingRight", `${window.innerWidth - document.documentElement.clientWidth}px`));
}
function v0() {
  let o, s = 0, a = (b) => {
    o = tf(b.target), !(o === document.documentElement && o === document.body) && (s = b.changedTouches[0].pageY);
  }, c = (b) => {
    if (!o || o === document.documentElement || o === document.body) {
      b.preventDefault();
      return;
    }
    let R = b.changedTouches[0].pageY, T = o.scrollTop, G = o.scrollHeight - o.clientHeight;
    G !== 0 && ((T <= 0 && R > s || T >= G && R < s) && b.preventDefault(), s = R);
  }, d = (b) => {
    let R = b.target;
    Xa(R) && R !== document.activeElement && (b.preventDefault(), R.style.transform = "translateY(-2000px)", R.focus(), requestAnimationFrame(() => {
      R.style.transform = "";
    }));
  }, f = (b) => {
    let R = b.target;
    Xa(R) && (R.style.transform = "translateY(-2000px)", requestAnimationFrame(() => {
      R.style.transform = "", Fa && (Fa.height < window.innerHeight ? requestAnimationFrame(() => {
        dd(R);
      }) : Fa.addEventListener("resize", () => dd(R), { once: !0 }));
    }));
  }, h = () => {
    window.scrollTo(0, 0);
  }, v = window.pageXOffset, C = window.pageYOffset, y = Ga(nf(document.documentElement, "paddingRight", `${window.innerWidth - document.documentElement.clientWidth}px`));
  window.scrollTo(0, 0);
  let _ = Ga(So(document, "touchstart", a, { passive: !1, capture: !0 }), So(document, "touchmove", c, { passive: !1, capture: !0 }), So(document, "touchend", d, { passive: !1, capture: !0 }), So(document, "focus", f, !0), So(window, "scroll", h));
  return () => {
    y(), _(), window.scrollTo(v, C);
  };
}
function nf(o, s, a) {
  let c = o.style[s];
  return o.style[s] = a, () => {
    o.style[s] = c;
  };
}
function So(o, s, a, c) {
  return o.addEventListener(s, a, c), () => {
    o.removeEventListener(s, a, c);
  };
}
function dd(o) {
  let s = document.scrollingElement || document.documentElement;
  for (; o && o !== s; ) {
    let a = tf(o);
    if (a !== document.documentElement && a !== document.body && a !== o) {
      let c = a.getBoundingClientRect().top, d = o.getBoundingClientRect().top, f = o.getBoundingClientRect().bottom, h = a.getBoundingClientRect().bottom;
      f > h && (a.scrollTop += d - c);
    }
    o = a.parentElement;
  }
}
function Xa(o) {
  return o instanceof HTMLInputElement && !f0.has(o.type) || o instanceof HTMLTextAreaElement || o instanceof HTMLElement && o.isContentEditable;
}
function h0(o, s) {
  typeof o == "function" ? o(s) : o != null && (o.current = s);
}
function g0(...o) {
  return (s) => o.forEach((a) => h0(a, s));
}
function rf(...o) {
  return x.useCallback(g0(...o), o);
}
var Mn = null;
function y0({ isOpen: o, modal: s, nested: a, hasBeenOpened: c, preventScrollRestoration: d }) {
  let [f, h] = N.useState(typeof window < "u" ? window.location.href : ""), v = N.useRef(0), C = N.useCallback(() => {
    if (Mn === null && o) {
      Mn = { position: document.body.style.position, top: document.body.style.top, left: document.body.style.left, height: document.body.style.height };
      let { scrollX: _, innerHeight: b } = window;
      document.body.style.setProperty("position", "fixed", "important"), document.body.style.top = `${-v.current}px`, document.body.style.left = `${-_}px`, document.body.style.right = "0px", document.body.style.height = "auto", setTimeout(() => requestAnimationFrame(() => {
        let R = b - window.innerHeight;
        R && v.current >= b && (document.body.style.top = `${-(v.current + R)}px`);
      }), 300);
    }
  }, [o]), y = N.useCallback(() => {
    if (Mn !== null) {
      let _ = -parseInt(document.body.style.top, 10), b = -parseInt(document.body.style.left, 10);
      document.body.style.position = Mn.position, document.body.style.top = Mn.top, document.body.style.left = Mn.left, document.body.style.height = Mn.height, document.body.style.right = "unset", requestAnimationFrame(() => {
        if (d && f !== window.location.href) {
          h(window.location.href);
          return;
        }
        window.scrollTo(b, _);
      }), Mn = null;
    }
  }, [f]);
  return N.useEffect(() => {
    function _() {
      v.current = window.scrollY;
    }
    return _(), window.addEventListener("scroll", _), () => {
      window.removeEventListener("scroll", _);
    };
  }, []), N.useEffect(() => {
    a || !c || (o ? (C(), s || setTimeout(() => {
      y();
    }, 500)) : y());
  }, [o, c, f, s, a, C, y]), { restorePositionSetting: y };
}
var of = /* @__PURE__ */ new WeakMap();
function ze(o, s, a = !1) {
  if (!o || !(o instanceof HTMLElement) || !s)
    return;
  let c = {};
  Object.entries(s).forEach(([d, f]) => {
    if (d.startsWith("--")) {
      o.style.setProperty(d, f);
      return;
    }
    c[d] = o.style[d], o.style[d] = f;
  }), !a && of.set(o, c);
}
function jl(o, s) {
  if (!o || !(o instanceof HTMLElement))
    return;
  let a = of.get(o);
  a && (s ? o.style[s] = a[s] : Object.entries(a).forEach(([c, d]) => {
    o.style[c] = d;
  }));
}
var He = (o) => {
  switch (o) {
    case "top":
    case "bottom":
      return !0;
    case "left":
    case "right":
      return !1;
    default:
      return o;
  }
};
function Fl(o, s) {
  let a = window.getComputedStyle(o), c = a.transform || a.webkitTransform || a.mozTransform, d = c.match(/^matrix3d\((.+)\)$/);
  return d ? parseFloat(d[1].split(", ")[He(s) ? 13 : 12]) : (d = c.match(/^matrix\((.+)\)$/), d ? parseFloat(d[1].split(", ")[He(s) ? 5 : 4]) : null);
}
function w0(o) {
  return 8 * (Math.log(o + 1) - 2);
}
var _e = { DURATION: 0.5, EASE: [0.32, 0.72, 0, 1] }, lf = 0.4;
function af(o) {
  let s = N.useRef(o);
  return N.useEffect(() => {
    s.current = o;
  }), N.useMemo(() => (...a) => {
    var c;
    return (c = s.current) == null ? void 0 : c.call(s, ...a);
  }, []);
}
function x0({ defaultProp: o, onChange: s }) {
  let a = N.useState(o), [c] = a, d = N.useRef(c), f = af(s);
  return N.useEffect(() => {
    d.current !== c && (f(c), d.current = c);
  }, [c, d, f]), a;
}
function E0({ prop: o, defaultProp: s, onChange: a = () => {
} }) {
  let [c, d] = x0({ defaultProp: s, onChange: a }), f = o !== void 0, h = f ? o : c, v = af(a), C = N.useCallback((y) => {
    if (f) {
      let _ = typeof y == "function" ? y(o) : y;
      _ !== o && v(_);
    } else
      d(y);
  }, [f, o, d, v]);
  return [h, C];
}
function S0({ activeSnapPointProp: o, setActiveSnapPointProp: s, snapPoints: a, drawerRef: c, overlayRef: d, fadeFromIndex: f, onSnapPointChange: h, direction: v = "bottom" }) {
  let [C, y] = E0({ prop: o, defaultProp: a?.[0], onChange: s }), _ = N.useMemo(() => C === a?.[a.length - 1] || null, [a, C]), b = a && a.length > 0 && (f || f === 0) && !Number.isNaN(f) && a[f] === C || !a, R = N.useMemo(() => a?.findIndex((B) => B === C), [a, C]), T = N.useMemo(() => {
    var B;
    return (B = a?.map((j) => {
      let W = typeof window < "u", ne = typeof j == "string", ie = 0;
      if (ne && (ie = parseInt(j, 10)), He(v)) {
        let he = ne ? ie : W ? j * window.innerHeight : 0;
        return W ? v === "bottom" ? window.innerHeight - he : -window.innerHeight + he : he;
      }
      let te = ne ? ie : W ? j * window.innerWidth : 0;
      return W ? v === "right" ? window.innerWidth - te : -window.innerWidth + te : te;
    })) != null ? B : [];
  }, [a]), G = N.useMemo(() => R !== null ? T?.[R] : null, [T, R]), $ = N.useCallback((B) => {
    var j;
    let W = (j = T?.findIndex((ne) => ne === B)) != null ? j : null;
    h(W), ze(c.current, { transition: `transform ${_e.DURATION}s cubic-bezier(${_e.EASE.join(",")})`, transform: He(v) ? `translate3d(0, ${B}px, 0)` : `translate3d(${B}px, 0, 0)` }), T && W !== T.length - 1 && W !== f ? ze(d.current, { transition: `opacity ${_e.DURATION}s cubic-bezier(${_e.EASE.join(",")})`, opacity: "0" }) : ze(d.current, { transition: `opacity ${_e.DURATION}s cubic-bezier(${_e.EASE.join(",")})`, opacity: "1" }), y(W !== null ? a?.[W] : null);
  }, [c.current, a, T, f, d, y]);
  N.useEffect(() => {
    var B;
    if (o) {
      let j = (B = a?.findIndex((W) => W === o)) != null ? B : -1;
      T && j !== -1 && typeof T[j] == "number" && $(T[j]);
    }
  }, [o, a, T, $]);
  function L({ draggedDistance: B, closeDrawer: j, velocity: W, dismissible: ne }) {
    if (f === void 0)
      return;
    let ie = v === "bottom" || v === "right" ? (G ?? 0) - B : (G ?? 0) + B, te = R === f - 1, he = R === 0, Ne = B > 0;
    if (te && ze(d.current, { transition: `opacity ${_e.DURATION}s cubic-bezier(${_e.EASE.join(",")})` }), W > 2 && !Ne) {
      ne ? j() : $(T[0]);
      return;
    }
    if (W > 2 && Ne && T && a) {
      $(T[a.length - 1]);
      return;
    }
    let Le = T?.reduce((ye, fe) => typeof ye != "number" || typeof fe != "number" ? ye : Math.abs(fe - ie) < Math.abs(ye - ie) ? fe : ye), ue = He(v) ? window.innerHeight : window.innerWidth;
    if (W > lf && Math.abs(B) < ue * 0.4) {
      let ye = Ne ? 1 : -1;
      if (ye > 0 && _) {
        $(T[a.length - 1]);
        return;
      }
      if (he && ye < 0 && ne && j(), R === null)
        return;
      $(T[R + ye]);
      return;
    }
    $(Le);
  }
  function I({ draggedDistance: B }) {
    if (G === null)
      return;
    let j = v === "bottom" || v === "right" ? G - B : G + B;
    (v === "bottom" || v === "right") && j < T[T.length - 1] || (v === "top" || v === "left") && j > T[T.length - 1] || ze(c.current, { transform: He(v) ? `translate3d(0, ${j}px, 0)` : `translate3d(${j}px, 0, 0)` });
  }
  function le(B, j) {
    if (!a || typeof R != "number" || !T || f === void 0)
      return null;
    let W = R === f - 1;
    if (R >= f && j)
      return 0;
    if (W && !j)
      return 1;
    if (!b && !W)
      return null;
    let ne = W ? R + 1 : R - 1, ie = W ? T[ne] - T[ne - 1] : T[ne + 1] - T[ne], te = B / Math.abs(ie);
    return W ? 1 - te : te;
  }
  return { isLastSnapPoint: _, activeSnapPoint: C, shouldFade: b, getPercentageDragged: le, setActiveSnapPoint: y, activeSnapPointIndex: R, onRelease: L, onDrag: I, snapPointsOffset: T };
}
var k0 = 0.25, C0 = 100, fd = 8, tr = 16, pd = 26, md = "vaul-dragging";
function sf({ open: o, onOpenChange: s, children: a, shouldScaleBackground: c, onDrag: d, onRelease: f, snapPoints: h, nested: v = !1, closeThreshold: C = k0, scrollLockTimeout: y = C0, dismissible: _ = !0, fadeFromIndex: b = h && h.length - 1, activeSnapPoint: R, setActiveSnapPoint: T, fixed: G, modal: $ = !0, onClose: L, direction: I = "bottom", preventScrollRestoration: le = !0 }) {
  var B;
  let [j = !1, W] = N.useState(!1), [ne, ie] = N.useState(!1), [te, he] = N.useState(!1), [Ne, Le] = N.useState(!1), [ue, ye] = N.useState(!1), [fe, Be] = N.useState(!1), ge = N.useRef(null), pe = N.useRef(null), A = N.useRef(null), F = N.useRef(null), m = N.useRef(null), P = N.useRef(!1), H = N.useRef(null), ce = N.useRef(0), K = N.useRef(!1), Se = N.useRef(0), U = N.useRef(null), xe = N.useRef(((B = U.current) == null ? void 0 : B.getBoundingClientRect().height) || 0), me = N.useRef(0), Ve = N.useCallback((J) => {
    h && J === tt.length - 1 && (pe.current = /* @__PURE__ */ new Date());
  }, []), { activeSnapPoint: Ut, activeSnapPointIndex: Ct, setActiveSnapPoint: Fn, onRelease: Je, snapPointsOffset: tt, onDrag: or, shouldFade: Un, getPercentageDragged: Bt } = S0({ snapPoints: h, activeSnapPointProp: R, setActiveSnapPointProp: T, drawerRef: U, fadeFromIndex: b, overlayRef: ge, onSnapPointChange: Ve, direction: I });
  p0({ isDisabled: !j || ue || !$ || fe || !ne });
  let { restorePositionSetting: lr } = y0({ isOpen: j, modal: $, nested: v, hasBeenOpened: ne, preventScrollRestoration: le });
  function gt() {
    return (window.innerWidth - pd) / window.innerWidth;
  }
  function Tt(J) {
    var de;
    !_ && !h || U.current && !U.current.contains(J.target) || (xe.current = ((de = U.current) == null ? void 0 : de.getBoundingClientRect().height) || 0, ye(!0), A.current = /* @__PURE__ */ new Date(), ef() && window.addEventListener("touchend", () => P.current = !1, { once: !0 }), J.target.setPointerCapture(J.pointerId), ce.current = He(I) ? J.screenY : J.screenX);
  }
  function nt(J, de) {
    var V;
    let ee = J, ae = (V = window.getSelection()) == null ? void 0 : V.toString(), ke = U.current ? Fl(U.current, I) : null, Pe = /* @__PURE__ */ new Date();
    if (ee.hasAttribute("data-vaul-no-drag"))
      return !1;
    if (I === "right" || I === "left")
      return !0;
    if (pe.current && Pe.getTime() - pe.current.getTime() < 500)
      return !1;
    if (ke !== null && (I === "bottom" ? ke > 0 : ke < 0))
      return !0;
    if (ae && ae.length > 0)
      return !1;
    if (m.current && Pe.getTime() - m.current.getTime() < y && ke === 0 || de)
      return m.current = Pe, !1;
    for (; ee; ) {
      if (ee.scrollHeight > ee.clientHeight) {
        if (ee.scrollTop !== 0)
          return m.current = /* @__PURE__ */ new Date(), !1;
        if (ee.getAttribute("role") === "dialog")
          return !0;
      }
      ee = ee.parentNode;
    }
    return !0;
  }
  function un(J) {
    if (U.current && ue) {
      let de = I === "bottom" || I === "right" ? 1 : -1, V = (ce.current - (He(I) ? J.screenY : J.screenX)) * de, ee = V > 0;
      if (h && Ct === 0 && !_ || !P.current && !nt(J.target, ee))
        return;
      if (U.current.classList.add(md), P.current = !0, ze(U.current, { transition: "none" }), ze(ge.current, { transition: "none" }), h && or({ draggedDistance: V }), ee && !h) {
        let ct = w0(V), mn = Math.min(ct * -1, 0) * de;
        ze(U.current, { transform: He(I) ? `translate3d(0, ${mn}px, 0)` : `translate3d(${mn}px, 0, 0)` });
        return;
      }
      let ae = Math.abs(V), ke = document.querySelector("[vaul-drawer-wrapper]"), Pe = ae / xe.current, yt = Bt(ae, ee);
      yt !== null && (Pe = yt);
      let wt = 1 - Pe;
      if ((Un || b && Ct === b - 1) && (d?.(J, Pe), ze(ge.current, { opacity: `${wt}`, transition: "none" }, !0)), ke && ge.current && c) {
        let ct = Math.min(gt() + Pe * (1 - gt()), 1), mn = 8 - Pe * 8, Zt = Math.max(0, 14 - Pe * 14);
        ze(ke, { borderRadius: `${mn}px`, transform: He(I) ? `scale(${ct}) translate3d(0, ${Zt}px, 0)` : `scale(${ct}) translate3d(${Zt}px, 0, 0)`, transition: "none" }, !0);
      }
      if (!h) {
        let ct = ae * de;
        ze(U.current, { transform: He(I) ? `translate3d(0, ${ct}px, 0)` : `translate3d(${ct}px, 0, 0)` });
      }
    }
  }
  N.useEffect(() => () => {
    Wt(!1), lr();
  }, []), N.useEffect(() => {
    var J;
    function de() {
      var V;
      if (!U.current)
        return;
      let ee = document.activeElement;
      if (Xa(ee) || K.current) {
        let ae = ((V = window.visualViewport) == null ? void 0 : V.height) || 0, ke = window.innerHeight - ae, Pe = U.current.getBoundingClientRect().height || 0;
        me.current || (me.current = Pe);
        let yt = U.current.getBoundingClientRect().top;
        if (Math.abs(Se.current - ke) > 60 && (K.current = !K.current), h && h.length > 0 && tt && Ct) {
          let wt = tt[Ct] || 0;
          ke += wt;
        }
        if (Se.current = ke, Pe > ae || K.current) {
          let wt = U.current.getBoundingClientRect().height, ct = wt;
          wt > ae && (ct = ae - pd), G ? U.current.style.height = `${wt - Math.max(ke, 0)}px` : U.current.style.height = `${Math.max(ct, ae - yt)}px`;
        } else
          U.current.style.height = `${me.current}px`;
        h && h.length > 0 && !K.current ? U.current.style.bottom = "0px" : U.current.style.bottom = `${Math.max(ke, 0)}px`;
      }
    }
    return (J = window.visualViewport) == null || J.addEventListener("resize", de), () => {
      var V;
      return (V = window.visualViewport) == null ? void 0 : V.removeEventListener("resize", de);
    };
  }, [Ct, h, tt]);
  function rt() {
    U.current && (L?.(), ze(U.current, { transform: He(I) ? `translate3d(0, ${I === "bottom" ? "100%" : "-100%"}, 0)` : `translate3d(${I === "right" ? "100%" : "-100%"}, 0, 0)`, transition: `transform ${_e.DURATION}s cubic-bezier(${_e.EASE.join(",")})` }), ze(ge.current, { opacity: "0", transition: `opacity ${_e.DURATION}s cubic-bezier(${_e.EASE.join(",")})` }), Wt(!1), setTimeout(() => {
      he(!1), W(!1);
    }, 300), setTimeout(() => {
      h && Fn(h[0]);
    }, _e.DURATION * 1e3));
  }
  N.useEffect(() => {
    if (!j && c) {
      let J = setTimeout(() => {
        jl(document.body);
      }, 200);
      return () => clearTimeout(J);
    }
  }, [j, c]), N.useEffect(() => {
    o ? (W(!0), ie(!0)) : rt();
  }, [o]), N.useEffect(() => {
    Ne && s?.(j);
  }, [j]), N.useEffect(() => {
    Le(!0);
  }, []);
  function cn() {
    if (!U.current)
      return;
    let J = document.querySelector("[vaul-drawer-wrapper]"), de = Fl(U.current, I);
    ze(U.current, { transform: "translate3d(0, 0, 0)", transition: `transform ${_e.DURATION}s cubic-bezier(${_e.EASE.join(",")})` }), ze(ge.current, { transition: `opacity ${_e.DURATION}s cubic-bezier(${_e.EASE.join(",")})`, opacity: "1" }), c && de && de > 0 && j && ze(J, { borderRadius: `${fd}px`, overflow: "hidden", ...He(I) ? { transform: `scale(${gt()}) translate3d(0, calc(env(safe-area-inset-top) + 14px), 0)`, transformOrigin: "top" } : { transform: `scale(${gt()}) translate3d(calc(env(safe-area-inset-top) + 14px), 0, 0)`, transformOrigin: "left" }, transitionProperty: "transform, border-radius", transitionDuration: `${_e.DURATION}s`, transitionTimingFunction: `cubic-bezier(${_e.EASE.join(",")})` }, !0);
  }
  function ir(J) {
    var de;
    if (!ue || !U.current)
      return;
    U.current.classList.remove(md), P.current = !1, ye(!1), F.current = /* @__PURE__ */ new Date();
    let V = Fl(U.current, I);
    if (!nt(J.target, !1) || !V || Number.isNaN(V) || A.current === null)
      return;
    let ee = F.current.getTime() - A.current.getTime(), ae = ce.current - (He(I) ? J.screenY : J.screenX), ke = Math.abs(ae) / ee;
    if (ke > 0.05 && (Be(!0), setTimeout(() => {
      Be(!1);
    }, 200)), h) {
      Je({ draggedDistance: ae * (I === "bottom" || I === "right" ? 1 : -1), closeDrawer: rt, velocity: ke, dismissible: _ }), f?.(J, !0);
      return;
    }
    if (I === "bottom" || I === "right" ? ae > 0 : ae < 0) {
      cn(), f?.(J, !0);
      return;
    }
    if (ke > lf) {
      rt(), f?.(J, !1);
      return;
    }
    let Pe = Math.min((de = U.current.getBoundingClientRect().height) != null ? de : 0, window.innerHeight);
    if (V >= Pe * C) {
      rt(), f?.(J, !1);
      return;
    }
    f?.(J, !0), cn();
  }
  N.useEffect(() => {
    j && (ze(document.documentElement, { scrollBehavior: "auto" }), pe.current = /* @__PURE__ */ new Date(), Wt(!0));
  }, [j]), N.useEffect(() => {
    var J;
    if (U.current && te) {
      let de = (J = U?.current) == null ? void 0 : J.querySelectorAll("*");
      de?.forEach((V) => {
        let ee = V;
        (ee.scrollHeight > ee.clientHeight || ee.scrollWidth > ee.clientWidth) && ee.classList.add("vaul-scrollable");
      });
    }
  }, [te]);
  function Wt(J) {
    let de = document.querySelector("[vaul-drawer-wrapper]");
    !de || !c || (J ? (ze(document.body, { background: document.body.style.backgroundColor || document.body.style.background }), ze(document.body, { background: "black" }, !0), ze(de, { borderRadius: `${fd}px`, overflow: "hidden", ...He(I) ? { transform: `scale(${gt()}) translate3d(0, calc(env(safe-area-inset-top) + 14px), 0)`, transformOrigin: "top" } : { transform: `scale(${gt()}) translate3d(calc(env(safe-area-inset-top) + 14px), 0, 0)`, transformOrigin: "left" }, transitionProperty: "transform, border-radius", transitionDuration: `${_e.DURATION}s`, transitionTimingFunction: `cubic-bezier(${_e.EASE.join(",")})` })) : (jl(de, "overflow"), jl(de, "transform"), jl(de, "borderRadius"), ze(de, { transitionProperty: "transform, border-radius", transitionDuration: `${_e.DURATION}s`, transitionTimingFunction: `cubic-bezier(${_e.EASE.join(",")})` })));
  }
  function dn(J) {
    let de = J ? (window.innerWidth - tr) / window.innerWidth : 1, V = J ? -tr : 0;
    H.current && window.clearTimeout(H.current), ze(U.current, { transition: `transform ${_e.DURATION}s cubic-bezier(${_e.EASE.join(",")})`, transform: `scale(${de}) translate3d(0, ${V}px, 0)` }), !J && U.current && (H.current = setTimeout(() => {
      let ee = Fl(U.current, I);
      ze(U.current, { transition: "none", transform: He(I) ? `translate3d(0, ${ee}px, 0)` : `translate3d(${ee}px, 0, 0)` });
    }, 500));
  }
  function fn(J, de) {
    if (de < 0)
      return;
    let V = He(I) ? window.innerHeight : window.innerWidth, ee = (V - tr) / V, ae = ee + de * (1 - ee), ke = -tr + de * tr;
    ze(U.current, { transform: He(I) ? `scale(${ae}) translate3d(0, ${ke}px, 0)` : `scale(${ae}) translate3d(${ke}px, 0, 0)`, transition: "none" });
  }
  function pn(J, de) {
    let V = He(I) ? window.innerHeight : window.innerWidth, ee = de ? (V - tr) / V : 1, ae = de ? -tr : 0;
    de && ze(U.current, { transition: `transform ${_e.DURATION}s cubic-bezier(${_e.EASE.join(",")})`, transform: He(I) ? `scale(${ee}) translate3d(0, ${ae}px, 0)` : `scale(${ee}) translate3d(${ae}px, 0, 0)` });
  }
  return N.createElement(Vd, { modal: $, onOpenChange: (J) => {
    if (o !== void 0) {
      s?.(J);
      return;
    }
    J ? (ie(!0), W(J)) : rt();
  }, open: j }, N.createElement(qd.Provider, { value: { visible: te, activeSnapPoint: Ut, snapPoints: h, setActiveSnapPoint: Fn, drawerRef: U, overlayRef: ge, scaleBackground: Wt, onOpenChange: s, onPress: Tt, setVisible: he, onRelease: ir, onDrag: un, dismissible: _, isOpen: j, shouldFade: Un, closeDrawer: rt, onNestedDrag: fn, onNestedOpenChange: dn, onNestedRelease: pn, keyboardIsOpen: K, openProp: o, modal: $, snapPointsOffset: tt, direction: I } }, a));
}
var uf = N.forwardRef(function({ children: o, ...s }, a) {
  let { overlayRef: c, snapPoints: d, onRelease: f, shouldFade: h, isOpen: v, visible: C } = os(), y = rf(a, c), _ = d && d.length > 0;
  return N.createElement(es, { onMouseUp: f, ref: y, "vaul-drawer-visible": C ? "true" : "false", "vaul-overlay": "", "vaul-snap-points": v && _ ? "true" : "false", "vaul-snap-points-overlay": v && h ? "true" : "false", ...s });
});
uf.displayName = "Drawer.Overlay";
var cf = N.forwardRef(function({ onOpenAutoFocus: o, onPointerDownOutside: s, onAnimationEnd: a, style: c, ...d }, f) {
  let { drawerRef: h, onPress: v, onRelease: C, onDrag: y, dismissible: _, keyboardIsOpen: b, snapPointsOffset: R, visible: T, closeDrawer: G, modal: $, openProp: L, onOpenChange: I, setVisible: le, direction: B } = os(), j = rf(f, h);
  return N.useEffect(() => {
    le(!0);
  }, []), N.createElement(ts, { onOpenAutoFocus: (W) => {
    var ne;
    o ? o(W) : (W.preventDefault(), (ne = h.current) == null || ne.focus());
  }, onPointerDown: v, onPointerDownOutside: (W) => {
    if (s?.(W), !$ || W.defaultPrevented) {
      W.preventDefault();
      return;
    }
    b.current && (b.current = !1), W.preventDefault(), I?.(!1), !(!_ || L !== void 0) && G();
  }, onPointerMove: y, onPointerUp: C, ref: j, style: R && R.length > 0 ? { "--snap-point-height": `${R[0]}px`, ...c } : c, ...d, "vaul-drawer": "", "vaul-drawer-direction": B, "vaul-drawer-visible": T ? "true" : "false" });
});
cf.displayName = "Drawer.Content";
function b0({ onDrag: o, onOpenChange: s, ...a }) {
  let { onNestedDrag: c, onNestedOpenChange: d, onNestedRelease: f } = os();
  if (!c)
    throw new Error("Drawer.NestedRoot must be placed in another drawer");
  return N.createElement(sf, { nested: !0, onClose: () => {
    d(!1);
  }, onDrag: (h, v) => {
    c(h, v), o?.(h, v);
  }, onOpenChange: (h) => {
    h && d(h), s?.(h);
  }, onRelease: f, ...a });
}
var sn = { Root: sf, NestedRoot: b0, Content: cf, Overlay: uf, Trigger: t0, Portal: Qd, Close: Yd, Title: ns, Description: rs };
function df({ shouldScaleBackground: o = !0, ...s }) {
  return /* @__PURE__ */ Ee.jsx(sn.Root, { shouldScaleBackground: o, ...s });
}
df.displayName = "Drawer";
const P0 = sn.Portal, ff = x.forwardRef(({ className: o, ...s }, a) => /* @__PURE__ */ Ee.jsx(
  sn.Overlay,
  {
    ref: a,
    className: Xt("fixed inset-0 z-50 bg-black/80", o),
    ...s
  }
));
ff.displayName = sn.Overlay.displayName;
const pf = x.forwardRef(({ className: o, children: s, ...a }, c) => /* @__PURE__ */ Ee.jsxs(P0, { children: [
  /* @__PURE__ */ Ee.jsx(ff, {}),
  /* @__PURE__ */ Ee.jsxs(
    sn.Content,
    {
      ref: c,
      className: Xt(
        "fixed inset-x-0 bottom-0 z-50 mt-24 flex h-auto flex-col rounded-t-[10px] border bg-background",
        o
      ),
      ...a,
      children: [
        /* @__PURE__ */ Ee.jsx("div", { className: "mx-auto mt-4 h-2 w-[100px] rounded-full bg-muted" }),
        s
      ]
    }
  )
] }));
pf.displayName = "DrawerContent";
function mf({ className: o, ...s }) {
  return /* @__PURE__ */ Ee.jsx("div", { className: Xt("grid gap-1.5 p-4 text-center sm:text-left", o), ...s });
}
mf.displayName = "DrawerHeader";
const vf = x.forwardRef(({ className: o, ...s }, a) => /* @__PURE__ */ Ee.jsx(
  sn.Title,
  {
    ref: a,
    className: Xt("text-lg font-semibold leading-none tracking-tight", o),
    ...s
  }
));
vf.displayName = sn.Title.displayName;
const hf = x.forwardRef(({ className: o, ...s }, a) => /* @__PURE__ */ Ee.jsx(
  sn.Description,
  {
    ref: a,
    className: Xt("text-sm text-muted-foreground", o),
    ...s
  }
));
hf.displayName = sn.Description.displayName;
var $0 = typeof Tl == "object" && Tl && Tl.Object === Object && Tl, N0 = typeof self == "object" && self && self.Object === Object && self;
$0 || N0 || Function("return this")();
var _0 = typeof window < "u" ? x.useLayoutEffect : x.useEffect, R0 = typeof window > "u";
function T0(o, s) {
  const a = typeof s == "boolean" ? s : s?.defaultValue ?? !1, c = typeof s == "boolean" ? void 0 : s?.initializeWithValue ?? void 0, [d, f] = x.useState(() => c ? h(o) : a), h = (C) => R0 ? a : window.matchMedia(C).matches;
  function v() {
    f(h(o));
  }
  return _0(() => {
    const C = window.matchMedia(o);
    return v(), C.addListener ? C.addListener(v) : C.addEventListener("change", v), () => {
      C.removeListener ? C.removeListener(v) : C.removeEventListener("change", v);
    };
  }, [o]), d;
}
function O0({ rootDocument: o, trigger: s, title: a, description: c, children: d }) {
  const [f, h] = x.useState(!1), v = T0("(min-width: 768px)");
  return x.useEffect(() => {
    function C() {
      h(!0);
    }
    const y = o.querySelector(`[data-trigger-id=${s}]`);
    return y && y.addEventListener("click", C), () => {
      const _ = o.querySelector(`[data-trigger-id=${s}]`);
      _ && _.removeEventListener("click", C);
    };
  }, []), v ? /* @__PURE__ */ Ee.jsx(l0, { open: f, onOpenChange: h, children: /* @__PURE__ */ Ee.jsxs(Gd, { children: [
    /* @__PURE__ */ Ee.jsxs(Xd, { children: [
      /* @__PURE__ */ Ee.jsx(Zd, { className: "m-0", children: a }),
      /* @__PURE__ */ Ee.jsx(Jd, { children: c })
    ] }),
    d
  ] }) }) : /* @__PURE__ */ Ee.jsx(df, { children: /* @__PURE__ */ Ee.jsxs(pf, { children: [
    /* @__PURE__ */ Ee.jsxs(mf, { children: [
      /* @__PURE__ */ Ee.jsx(vf, { className: "m-0", children: a }),
      /* @__PURE__ */ Ee.jsx(hf, { children: c })
    ] }),
    /* @__PURE__ */ Ee.jsx("div", { className: "p-4", children: d })
  ] }) });
}
const D0 = (o) => o.replaceAll(/([A-Z])/g, "-$1").toLowerCase();
class z0 extends HTMLElement {
  constructor() {
    super(), this.attachShadow({ mode: "open" });
  }
  connectedCallback() {
    const s = this.getPropsFromAttributes(), a = [...this.children].map((f) => f.outerHTML).join(""), c = Wl.createRoot(this.shadowRoot), d = this.shadowRoot.getRootNode().ownerDocument;
    c.render(
      /* @__PURE__ */ Ee.jsx(
        O0,
        {
          rootDocument: d,
          trigger: s.trigger,
          title: s.title,
          description: s.description,
          children: /* @__PURE__ */ Ee.jsx("div", { dangerouslySetInnerHTML: { __html: a } })
        }
      )
    );
  }
  getPropsFromAttributes() {
    const s = {};
    for (const a of this.attributes)
      s[D0(a.name)] = a.value;
    return s;
  }
}
customElements.define("detail-sheet", z0);
customElements.define("sonner-toaster", Hm);
window.toast = Dm;
