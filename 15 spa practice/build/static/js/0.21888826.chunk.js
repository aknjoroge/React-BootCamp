(this["webpackJsonpreact-complete-guide"] =
  this["webpackJsonpreact-complete-guide"] || []).push([
  [0],
  {
    35: function (t, r, e) {
      t.exports = e(44);
    },
    36: function (t, r, e) {
      "use strict";
      function n(t, r, e, n, o, i, a) {
        try {
          var c = t[i](a),
            u = c.value;
        } catch (s) {
          return void e(s);
        }
        c.done ? r(u) : Promise.resolve(u).then(n, o);
      }
      function o(t) {
        return function () {
          var r = this,
            e = arguments;
          return new Promise(function (o, i) {
            var a = t.apply(r, e);
            function c(t) {
              n(a, o, i, c, u, "next", t);
            }
            function u(t) {
              n(a, o, i, c, u, "throw", t);
            }
            c(void 0);
          });
        };
      }
      e.d(r, "a", function () {
        return o;
      });
    },
    37: function (t, r, e) {
      "use strict";
      var n = e(41),
        o = e.n(n),
        i = e(1);
      r.a = function (t) {
        return Object(i.jsx)("div", {
          className: o.a.card,
          children: t.children,
        });
      };
    },
    38: function (t, r, e) {
      "use strict";
      e.d(r, "a", function () {
        return o;
      });
      var n = e(42);
      function o(t, r) {
        return (
          (function (t) {
            if (Array.isArray(t)) return t;
          })(t) ||
          (function (t, r) {
            if ("undefined" !== typeof Symbol && Symbol.iterator in Object(t)) {
              var e = [],
                n = !0,
                o = !1,
                i = void 0;
              try {
                for (
                  var a, c = t[Symbol.iterator]();
                  !(n = (a = c.next()).done) &&
                  (e.push(a.value), !r || e.length !== r);
                  n = !0
                );
              } catch (u) {
                (o = !0), (i = u);
              } finally {
                try {
                  n || null == c.return || c.return();
                } finally {
                  if (o) throw i;
                }
              }
              return e;
            }
          })(t, r) ||
          Object(n.a)(t, r) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
    },
    39: function (t, r, e) {
      "use strict";
      e.d(r, "b", function () {
        return n;
      }),
        e.d(r, "a", function () {
          return o;
        }),
        e.d(r, "c", function () {
          return i;
        }),
        e.d(r, "d", function () {
          return a;
        });
      var n = function (t, r) {
          var e = { id: Date.now(), author: t, text: r };
          return {
            url: "quotes.json",
            data: JSON.stringify(e),
            method: "POST",
          };
        },
        o = function (t, r, e) {
          var n = { id: r, quoteID: e, text: t };
          return {
            url: "comments.json",
            data: JSON.stringify(n),
            method: "POST",
          };
        },
        i = function () {
          return { url: "comments.json", return: !0 };
        },
        a = function () {
          return { url: "quotes.json", return: !0 };
        };
    },
    40: function (t, r, e) {
      "use strict";
      var n = e(35),
        o = e.n(n),
        i = e(36),
        a = e(38),
        c = e(0),
        u = "https://fakeFirebaseURL-default-rtdb.firebaseio.com";
      r.a = function () {
        var t = Object(c.useState)(!1),
          r = Object(a.a)(t, 2),
          e = r[0],
          n = r[1],
          s = Object(c.useState)(!1),
          f = Object(a.a)(s, 2),
          h = f[0],
          l = f[1],
          p = Object(c.useState)(""),
          y = Object(a.a)(p, 2),
          d = y[0],
          v = y[1],
          m = Object(c.useState)(!1),
          g = Object(a.a)(m, 2),
          b = g[0],
          w = g[1];
        function x() {
          return (x = Object(i.a)(
            o.a.mark(function t(r) {
              var e, i;
              return o.a.wrap(
                function (t) {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                        return (
                          (t.prev = 0),
                          l(!0),
                          n(!1),
                          (t.next = 5),
                          fetch("".concat(u, "/").concat(r.url), {
                            method: r.method || "GET",
                            body: r.data || null,
                          })
                        );
                      case 5:
                        return (e = t.sent), (t.next = 8), e.json();
                      case 8:
                        if (((i = t.sent), l(!1), w(!0), !r.return)) {
                          t.next = 13;
                          break;
                        }
                        return t.abrupt("return", i);
                      case 13:
                        return t.abrupt("return", !0);
                      case 16:
                        (t.prev = 16),
                          (t.t0 = t.catch(0)),
                          n(!0),
                          l(!1),
                          v(t.t0.message);
                      case 21:
                      case "end":
                        return t.stop();
                    }
                },
                t,
                null,
                [[0, 16]]
              );
            })
          )).apply(this, arguments);
        }
        return {
          sendRequest: function (t) {
            return x.apply(this, arguments);
          },
          isLoading: h,
          isSuccess: b,
          hasError: e,
          errorMessage: d,
        };
      };
    },
    41: function (t, r, e) {
      t.exports = { card: "Card_card__3xnd3" };
    },
    42: function (t, r, e) {
      "use strict";
      e.d(r, "a", function () {
        return o;
      });
      var n = e(43);
      function o(t, r) {
        if (t) {
          if ("string" === typeof t) return Object(n.a)(t, r);
          var e = Object.prototype.toString.call(t).slice(8, -1);
          return (
            "Object" === e && t.constructor && (e = t.constructor.name),
            "Map" === e || "Set" === e
              ? Array.from(t)
              : "Arguments" === e ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)
              ? Object(n.a)(t, r)
              : void 0
          );
        }
      }
    },
    43: function (t, r, e) {
      "use strict";
      function n(t, r) {
        (null == r || r > t.length) && (r = t.length);
        for (var e = 0, n = new Array(r); e < r; e++) n[e] = t[e];
        return n;
      }
      e.d(r, "a", function () {
        return n;
      });
    },
    44: function (t, r, e) {
      var n = (function (t) {
        "use strict";
        var r,
          e = Object.prototype,
          n = e.hasOwnProperty,
          o = "function" === typeof Symbol ? Symbol : {},
          i = o.iterator || "@@iterator",
          a = o.asyncIterator || "@@asyncIterator",
          c = o.toStringTag || "@@toStringTag";
        function u(t, r, e) {
          return (
            Object.defineProperty(t, r, {
              value: e,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            }),
            t[r]
          );
        }
        try {
          u({}, "");
        } catch (P) {
          u = function (t, r, e) {
            return (t[r] = e);
          };
        }
        function s(t, r, e, n) {
          var o = r && r.prototype instanceof v ? r : v,
            i = Object.create(o.prototype),
            a = new k(n || []);
          return (
            (i._invoke = (function (t, r, e) {
              var n = h;
              return function (o, i) {
                if (n === p) throw new Error("Generator is already running");
                if (n === y) {
                  if ("throw" === o) throw i;
                  return T();
                }
                for (e.method = o, e.arg = i; ; ) {
                  var a = e.delegate;
                  if (a) {
                    var c = E(a, e);
                    if (c) {
                      if (c === d) continue;
                      return c;
                    }
                  }
                  if ("next" === e.method) e.sent = e._sent = e.arg;
                  else if ("throw" === e.method) {
                    if (n === h) throw ((n = y), e.arg);
                    e.dispatchException(e.arg);
                  } else "return" === e.method && e.abrupt("return", e.arg);
                  n = p;
                  var u = f(t, r, e);
                  if ("normal" === u.type) {
                    if (((n = e.done ? y : l), u.arg === d)) continue;
                    return { value: u.arg, done: e.done };
                  }
                  "throw" === u.type &&
                    ((n = y), (e.method = "throw"), (e.arg = u.arg));
                }
              };
            })(t, e, a)),
            i
          );
        }
        function f(t, r, e) {
          try {
            return { type: "normal", arg: t.call(r, e) };
          } catch (P) {
            return { type: "throw", arg: P };
          }
        }
        t.wrap = s;
        var h = "suspendedStart",
          l = "suspendedYield",
          p = "executing",
          y = "completed",
          d = {};
        function v() {}
        function m() {}
        function g() {}
        var b = {};
        u(b, i, function () {
          return this;
        });
        var w = Object.getPrototypeOf,
          x = w && w(w(N([])));
        x && x !== e && n.call(x, i) && (b = x);
        var j = (g.prototype = v.prototype = Object.create(b));
        function O(t) {
          ["next", "throw", "return"].forEach(function (r) {
            u(t, r, function (t) {
              return this._invoke(r, t);
            });
          });
        }
        function L(t, r) {
          function e(o, i, a, c) {
            var u = f(t[o], t, i);
            if ("throw" !== u.type) {
              var s = u.arg,
                h = s.value;
              return h && "object" === typeof h && n.call(h, "__await")
                ? r.resolve(h.__await).then(
                    function (t) {
                      e("next", t, a, c);
                    },
                    function (t) {
                      e("throw", t, a, c);
                    }
                  )
                : r.resolve(h).then(
                    function (t) {
                      (s.value = t), a(s);
                    },
                    function (t) {
                      return e("throw", t, a, c);
                    }
                  );
            }
            c(u.arg);
          }
          var o;
          this._invoke = function (t, n) {
            function i() {
              return new r(function (r, o) {
                e(t, n, r, o);
              });
            }
            return (o = o ? o.then(i, i) : i());
          };
        }
        function E(t, e) {
          var n = t.iterator[e.method];
          if (n === r) {
            if (((e.delegate = null), "throw" === e.method)) {
              if (
                t.iterator.return &&
                ((e.method = "return"),
                (e.arg = r),
                E(t, e),
                "throw" === e.method)
              )
                return d;
              (e.method = "throw"),
                (e.arg = new TypeError(
                  "The iterator does not provide a 'throw' method"
                ));
            }
            return d;
          }
          var o = f(n, t.iterator, e.arg);
          if ("throw" === o.type)
            return (
              (e.method = "throw"), (e.arg = o.arg), (e.delegate = null), d
            );
          var i = o.arg;
          return i
            ? i.done
              ? ((e[t.resultName] = i.value),
                (e.next = t.nextLoc),
                "return" !== e.method && ((e.method = "next"), (e.arg = r)),
                (e.delegate = null),
                d)
              : i
            : ((e.method = "throw"),
              (e.arg = new TypeError("iterator result is not an object")),
              (e.delegate = null),
              d);
        }
        function S(t) {
          var r = { tryLoc: t[0] };
          1 in t && (r.catchLoc = t[1]),
            2 in t && ((r.finallyLoc = t[2]), (r.afterLoc = t[3])),
            this.tryEntries.push(r);
        }
        function _(t) {
          var r = t.completion || {};
          (r.type = "normal"), delete r.arg, (t.completion = r);
        }
        function k(t) {
          (this.tryEntries = [{ tryLoc: "root" }]),
            t.forEach(S, this),
            this.reset(!0);
        }
        function N(t) {
          if (t) {
            var e = t[i];
            if (e) return e.call(t);
            if ("function" === typeof t.next) return t;
            if (!isNaN(t.length)) {
              var o = -1,
                a = function e() {
                  for (; ++o < t.length; )
                    if (n.call(t, o)) return (e.value = t[o]), (e.done = !1), e;
                  return (e.value = r), (e.done = !0), e;
                };
              return (a.next = a);
            }
          }
          return { next: T };
        }
        function T() {
          return { value: r, done: !0 };
        }
        return (
          (m.prototype = g),
          u(j, "constructor", g),
          u(g, "constructor", m),
          (m.displayName = u(g, c, "GeneratorFunction")),
          (t.isGeneratorFunction = function (t) {
            var r = "function" === typeof t && t.constructor;
            return (
              !!r &&
              (r === m || "GeneratorFunction" === (r.displayName || r.name))
            );
          }),
          (t.mark = function (t) {
            return (
              Object.setPrototypeOf
                ? Object.setPrototypeOf(t, g)
                : ((t.__proto__ = g), u(t, c, "GeneratorFunction")),
              (t.prototype = Object.create(j)),
              t
            );
          }),
          (t.awrap = function (t) {
            return { __await: t };
          }),
          O(L.prototype),
          u(L.prototype, a, function () {
            return this;
          }),
          (t.AsyncIterator = L),
          (t.async = function (r, e, n, o, i) {
            void 0 === i && (i = Promise);
            var a = new L(s(r, e, n, o), i);
            return t.isGeneratorFunction(e)
              ? a
              : a.next().then(function (t) {
                  return t.done ? t.value : a.next();
                });
          }),
          O(j),
          u(j, c, "Generator"),
          u(j, i, function () {
            return this;
          }),
          u(j, "toString", function () {
            return "[object Generator]";
          }),
          (t.keys = function (t) {
            var r = [];
            for (var e in t) r.push(e);
            return (
              r.reverse(),
              function e() {
                for (; r.length; ) {
                  var n = r.pop();
                  if (n in t) return (e.value = n), (e.done = !1), e;
                }
                return (e.done = !0), e;
              }
            );
          }),
          (t.values = N),
          (k.prototype = {
            constructor: k,
            reset: function (t) {
              if (
                ((this.prev = 0),
                (this.next = 0),
                (this.sent = this._sent = r),
                (this.done = !1),
                (this.delegate = null),
                (this.method = "next"),
                (this.arg = r),
                this.tryEntries.forEach(_),
                !t)
              )
                for (var e in this)
                  "t" === e.charAt(0) &&
                    n.call(this, e) &&
                    !isNaN(+e.slice(1)) &&
                    (this[e] = r);
            },
            stop: function () {
              this.done = !0;
              var t = this.tryEntries[0].completion;
              if ("throw" === t.type) throw t.arg;
              return this.rval;
            },
            dispatchException: function (t) {
              if (this.done) throw t;
              var e = this;
              function o(n, o) {
                return (
                  (c.type = "throw"),
                  (c.arg = t),
                  (e.next = n),
                  o && ((e.method = "next"), (e.arg = r)),
                  !!o
                );
              }
              for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                var a = this.tryEntries[i],
                  c = a.completion;
                if ("root" === a.tryLoc) return o("end");
                if (a.tryLoc <= this.prev) {
                  var u = n.call(a, "catchLoc"),
                    s = n.call(a, "finallyLoc");
                  if (u && s) {
                    if (this.prev < a.catchLoc) return o(a.catchLoc, !0);
                    if (this.prev < a.finallyLoc) return o(a.finallyLoc);
                  } else if (u) {
                    if (this.prev < a.catchLoc) return o(a.catchLoc, !0);
                  } else {
                    if (!s)
                      throw new Error("try statement without catch or finally");
                    if (this.prev < a.finallyLoc) return o(a.finallyLoc);
                  }
                }
              }
            },
            abrupt: function (t, r) {
              for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                var o = this.tryEntries[e];
                if (
                  o.tryLoc <= this.prev &&
                  n.call(o, "finallyLoc") &&
                  this.prev < o.finallyLoc
                ) {
                  var i = o;
                  break;
                }
              }
              i &&
                ("break" === t || "continue" === t) &&
                i.tryLoc <= r &&
                r <= i.finallyLoc &&
                (i = null);
              var a = i ? i.completion : {};
              return (
                (a.type = t),
                (a.arg = r),
                i
                  ? ((this.method = "next"), (this.next = i.finallyLoc), d)
                  : this.complete(a)
              );
            },
            complete: function (t, r) {
              if ("throw" === t.type) throw t.arg;
              return (
                "break" === t.type || "continue" === t.type
                  ? (this.next = t.arg)
                  : "return" === t.type
                  ? ((this.rval = this.arg = t.arg),
                    (this.method = "return"),
                    (this.next = "end"))
                  : "normal" === t.type && r && (this.next = r),
                d
              );
            },
            finish: function (t) {
              for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                var e = this.tryEntries[r];
                if (e.finallyLoc === t)
                  return this.complete(e.completion, e.afterLoc), _(e), d;
              }
            },
            catch: function (t) {
              for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                var e = this.tryEntries[r];
                if (e.tryLoc === t) {
                  var n = e.completion;
                  if ("throw" === n.type) {
                    var o = n.arg;
                    _(e);
                  }
                  return o;
                }
              }
              throw new Error("illegal catch attempt");
            },
            delegateYield: function (t, e, n) {
              return (
                (this.delegate = { iterator: N(t), resultName: e, nextLoc: n }),
                "next" === this.method && (this.arg = r),
                d
              );
            },
          }),
          t
        );
      })(t.exports);
      try {
        regeneratorRuntime = n;
      } catch (o) {
        "object" === typeof globalThis
          ? (globalThis.regeneratorRuntime = n)
          : Function("r", "regeneratorRuntime = r")(n);
      }
    },
  },
]);
//# sourceMappingURL=0.21888826.chunk.js.map
