"use strict";
var a = Object.defineProperty;
var b = Object.getOwnPropertyDescriptor;
var c = Object.getOwnPropertyNames;
var d = Object.prototype.hasOwnProperty;
var p = (r, o, f, x) => {
    if ((o && typeof o == "object") || typeof o == "function")
      for (let e of c(o))
        !d.call(r, e) &&
          e !== f &&
          a(r, e, {
            get: () => o[e],
            enumerable: !(x = b(o, e)) || x.enumerable,
          });
    return r;
  },
  t = (r, o, f) => (p(r, o, "default"), f && p(f, o, "default"));
var g = (r) => p(a({}, "__esModule", { value: !0 }), r);
var m = {};
module.exports = g(m);
t(m, require("@prisma/client"), module.exports);
