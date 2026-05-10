//Sun May 10 2026 03:00:23 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
const $ = new Env("爱海盐");
const notify = $.isNode() ? require("../sendNotify") : "";
(() => {
  function b(ab) {
    b = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (ad) {
      {
        return typeof ad;
      }
    } : function (ad) {
      {
        return ad && "function" == typeof Symbol && ad.constructor === Symbol && ad !== Symbol.prototype ? "symbol" : typeof ad;
      }
    };
    return b(ab);
  }
  function c(ab, ac) {
    {
      var ae = "undefined" != typeof Symbol && ab[Symbol.iterator] || ab["@@iterator"];
      if (!ae) {
        {
          if (Array.isArray(ab) || (ae = d(ab)) || ac && ab && "number" == typeof ab.length) {
            {
              ae && (ab = ae);
              var af = 0;
              var ag = function () {};
              return {
                s: ag,
                n: function () {
                  {
                    var ak = {
                      done: true
                    };
                    return af >= ab.length ? ak : {
                      done: false,
                      value: ab[af++]
                    };
                  }
                },
                e: function (ak) {
                  {
                    throw ak;
                  }
                },
                f: ag
              };
            }
          }
          throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }
      }
      var ah;
      var ai = true;
      var aj = false;
      return {
        s: function () {
          ae = ae.call(ab);
        },
        n: function () {
          {
            var am = ae.next();
            ai = am.done;
            return am;
          }
        },
        e: function (am) {
          {
            aj = true;
            ah = am;
          }
        },
        f: function () {
          {
            try {
              {
                ai || null == ae.return || ae.return();
              }
            } finally {
              {
                if (aj) {
                  throw ah;
                }
              }
            }
          }
        }
      };
    }
  }
  function d(ab, ac) {
    {
      if (ab) {
        {
          if ("string" == typeof ab) {
            return f(ab, ac);
          }
          var af = {}.toString.call(ab).slice(8, -1);
          "Object" === af && ab.constructor && (af = ab.constructor.name);
          return "Map" === af || "Set" === af ? Array.from(ab) : "Arguments" === af || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(af) ? f(ab, ac) : undefined;
        }
      }
    }
  }
  function f(ab, ac) {
    {
      (null == ac || ac > ab.length) && (ac = ab.length);
      for (var ae = 0, af = Array(ac); ae < ac; ae++) {
        af[ae] = ab[ae];
      }
      return af;
    }
  }
  function g() {
    "use strict";

    var ab = {
      gpvyN: function (aI, aJ) {
        return aI === aJ;
      },
      WhLEf: "icILY",
      ZTcFk: "RUOWZ",
      FFZue: function (aI, aJ) {
        return aI in aJ;
      },
      ajCdw: function (aI, aJ, aK, aL, aM) {
        return aI(aJ, aK, aL, aM);
      },
      taWyq: function (aI, aJ) {
        return aI === aJ;
      },
      bQIgB: "QSWRO",
      PKCRV: function (aI, aJ) {
        return aI instanceof aJ;
      },
      FqaCt: function (aI, aJ, aK, aL) {
        return aI(aJ, aK, aL);
      },
      jObLj: "_invoke",
      OzryA: function (aI, aJ) {
        return aI === aJ;
      },
      KPmEl: "WJFeD",
      upcXO: "CJdpg",
      CuFxm: function (aI, aJ) {
        return aI === aJ;
      },
      dxmyJ: "qskZJ",
      MRirK: "jFAKG",
      YCmkl: "normal",
      JudGi: "EwVpB",
      IjFse: "EAHmn",
      naHIj: "throw",
      CuCCt: function (aI, aJ) {
        return aI(aJ);
      },
      fPGcC: function (aI, aJ) {
        return aI < aJ;
      },
      gBadM: function (aI, aJ) {
        return aI !== aJ;
      },
      lhFwT: function (aI, aJ, aK, aL, aM, aN, aO, aP) {
        return aI(aJ, aK, aL, aM, aN, aO, aP);
      },
      ioNhf: "AeERM",
      YfIvs: "RhalC",
      nSYYi: "WaXVA",
      bXNrW: "VMzDi",
      gjvHE: "next",
      iVlkk: "return",
      kqUBr: function (aI, aJ) {
        return aI > aJ;
      },
      ZJjcI: function (aI, aJ) {
        return aI > aJ;
      },
      dSxPm: function (aI, aJ) {
        return aI | aJ;
      },
      fjyuj: function (aI, aJ) {
        return aI * aJ;
      },
      pxZsX: function (aI, aJ) {
        return aI & aJ;
      },
      rWvMJ: function (aI, aJ) {
        return aI === aJ;
      },
      XYfgH: "hroJm",
      Xrxyv: "mfIrR",
      MyGel: "WmOOF",
      yGnGd: function (aI, aJ, aK, aL, aM) {
        return aI(aJ, aK, aL, aM);
      },
      FyZLQ: "rqZiF",
      OQdkQ: function (aI, aJ, aK, aL) {
        return aI(aJ, aK, aL);
      },
      sTnPb: function (aI, aJ) {
        return aI == aJ;
      },
      fIfrJ: "object",
      JtkPk: "__await",
      QKvJL: function (aI, aJ) {
        return aI === aJ;
      },
      NsGwn: function (aI, aJ) {
        return aI !== aJ;
      },
      nMlaZ: "The iterator does not provide a '",
      NoFSq: "' method",
      LyMCX: function (aI, aJ, aK) {
        return aI(aJ, aK);
      },
      IRsmh: function (aI, aJ, aK) {
        return aI(aJ, aK);
      },
      sutPz: "JsOLf",
      YTSrJ: function (aI, aJ, aK, aL, aM) {
        return aI(aJ, aK, aL, aM);
      },
      CEdiN: "iZNOE",
      FscPA: function (aI, aJ) {
        return aI === aJ;
      },
      yerRo: function (aI) {
        return aI();
      },
      owwvT: function (aI, aJ) {
        return aI + aJ;
      },
      zssBI: "%21",
      BYChx: "%27",
      PvCjk: "%28",
      VpbbB: "%29",
      RgrzB: "%2A",
      CZkjw: "%7E",
      nNnXJ: "AgLsb",
      PiuvM: " API请求失败，请检查网路重试",
      QiAWv: function (aI, aJ) {
        return aI(aJ);
      },
      RgqDD: "end",
      ohehk: function (aI, aJ) {
        return aI !== aJ;
      },
      HyHrv: "SbjnZ",
      RBLOT: "root",
      dQrgQ: "LQMTp",
      qbUjH: "cppcV",
      pKyqX: function (aI, aJ) {
        return aI == aJ;
      },
      rlLhC: "string",
      mZIUg: function (aI, aJ) {
        return aI === aJ;
      },
      unXxr: "Set",
      FioEI: function (aI, aJ) {
        return aI === aJ;
      },
      YrhtV: "Arguments",
      MINuJ: function (aI, aJ, aK) {
        return aI(aJ, aK);
      },
      QZbTh: "SJOXo",
      PhKPt: "function",
      WCYyG: "ECvPK",
      RymgS: "uuQkP",
      zUJsO: function (aI, aJ, aK, aL, aM) {
        return aI(aJ, aK, aL, aM);
      },
      HeYVv: function (aI, aJ) {
        return aI(aJ);
      },
      oCiWz: "xISyS",
      JTmZh: "dYRXM",
      Krfof: "pzCcM",
      PPSxN: "kMPqj",
      oKTFR: "fEuKr",
      wlLzW: function (aI, aJ) {
        return aI(aJ);
      },
      NuCrw: function (aI, aJ) {
        return aI === aJ;
      },
      upaNv: "JVWEO",
      gveIS: function (aI, aJ) {
        return aI !== aJ;
      },
      gXjSa: "jHSxw",
      bhwcv: "ZzImg",
      fhZbw: function (aI, aJ) {
        return aI < aJ;
      },
      pLhko: function (aI, aJ) {
        return aI !== aJ;
      },
      nIhJu: "rJMsp",
      aWaXf: function (aI, aJ) {
        return aI - aJ;
      },
      kDmMf: "bzgCt",
      veSAy: function (aI, aJ) {
        return aI === aJ;
      },
      pbgjv: function (aI, aJ) {
        return aI <= aJ;
      },
      lkBWH: "WhngQ",
      vqizr: "catchLoc",
      XWurP: "finallyLoc",
      MCuHV: function (aI, aJ) {
        return aI && aJ;
      },
      AmIpU: "vfSBk",
      NyfOz: "UPcUl",
      ovJba: function (aI, aJ) {
        return aI < aJ;
      },
      OKECO: function (aI, aJ) {
        return aI === aJ;
      },
      fcKAm: "toQdz",
      PawWI: "qqhSF",
      DIGVW: function (aI, aJ) {
        return aI === aJ;
      },
      wWVJa: "mKyTl",
      kqhnS: "kyyXr",
      QmqeA: "try statement without catch or finally",
      fLXaX: function (aI, aJ) {
        return aI(aJ);
      },
      HJadM: function (aI, aJ) {
        return aI === aJ;
      },
      Rytym: function (aI, aJ) {
        return aI === aJ;
      },
      ECdnK: "continue",
      pfwlC: function (aI, aJ) {
        return aI !== aJ;
      },
      DDywI: "SjMOr",
      vneaq: "HUPwL",
      UCLwt: function (aI, aJ) {
        return aI === aJ;
      },
      BSBtf: "break",
      SCKhs: function (aI, aJ, aK) {
        return aI(aJ, aK);
      },
      BFcCw: function (aI, aJ) {
        return aI(aJ);
      },
      fedce: function (aI, aJ) {
        return aI < aJ;
      },
      cZgQT: function (aI, aJ, aK) {
        return aI(aJ, aK);
      }
    };
    g = function () {
      return ad;
    };
    var ac;
    var ad = {
      wrap: am
    };
    var ae = Object.prototype;
    var af = ae.hasOwnProperty;
    var ag = Object.defineProperty || function (aI, aJ, aK) {
      {
        aI[aJ] = aK.value;
      }
    };
    var ah = "function" == typeof Symbol ? Symbol : {};
    var ai = ah.iterator || "@@iterator";
    var aj = ah.asyncIterator || "@@asyncIterator";
    var ak = ah.toStringTag || "@@toStringTag";
    function al(aI, aJ, aK) {
      {
        var aM = {
          value: aK,
          enumerable: true,
          configurable: true,
          writable: true
        };
        Object.defineProperty(aI, aJ, aM);
        return aI[aJ];
      }
    }
    try {
      {
        al({}, "");
      }
    } catch (aJ) {
      {
        al = function (aK, aL, aM) {
          {
            return aK[aL] = aM;
          }
        };
      }
    }
    function am(aL, aM, aN, aO) {
      {
        var aQ = aM && aM.prototype instanceof at ? aM : at;
        var aR = Object.create(aQ.prototype);
        var aS = new aG(aO || []);
        ag(aR, "_invoke", {
          value: aC(aL, aN, aS)
        });
        return aR;
      }
    }
    function an(aL, aM, aN) {
      {
        try {
          return {
            type: "normal",
            arg: aL.call(aM, aN)
          };
        } catch (aR) {
          {
            var aO = {
              type: "throw",
              arg: aR
            };
            return aO;
          }
        }
      }
    }
    var ao = "suspendedStart";
    var ap = "suspendedYield";
    var aq = "executing";
    var ar = "completed";
    var as = {};
    function at() {}
    function au() {}
    function av() {}
    var aw = {};
    al(aw, ai, function () {
      {
        return this;
      }
    });
    var ax = Object.getPrototypeOf;
    var ay = ax && ax(ax(aH([])));
    ay && ay !== ae && af.call(ay, ai) && (aw = ay);
    av.prototype = at.prototype = Object.create(aw);
    var az = av.prototype;
    function aA(aL) {
      {
        ["next", "throw", "return"].forEach(function (aN) {
          al(aL, aN, function (aP) {
            {
              return this._invoke(aN, aP);
            }
          });
        });
      }
    }
    function aB(aL, aM) {
      {
        function aP(aQ, aR, aS, aT) {
          {
            var aV = an(aL[aQ], aL, aR);
            if ("throw" !== aV.type) {
              {
                var aW = aV.arg;
                var aX = aW.value;
                return aX && "object" == b(aX) && af.call(aX, "__await") ? aM.resolve(aX.__await).then(function (b0) {
                  {
                    aP("next", b0, aS, aT);
                  }
                }, function (b0) {
                  {
                    aP("throw", b0, aS, aT);
                  }
                }) : aM.resolve(aX).then(function (b0) {
                  {
                    aW.value = b0;
                    aS(aW);
                  }
                }, function (b0) {
                  {
                    return aP("throw", b0, aS, aT);
                  }
                });
              }
            }
            aT(aV.arg);
          }
        }
        var aO;
        ag(this, "_invoke", {
          value: function (aQ, aR) {
            {
              function aU() {
                {
                  return new aM(function (aW, aX) {
                    {
                      aP(aQ, aR, aW, aX);
                    }
                  });
                }
              }
              return aO = aO ? aO.then(aU, aU) : aU();
            }
          }
        });
      }
    }
    function aC(aL, aM, aN) {
      {
        var aP = ao;
        return function (aQ, aR) {
          {
            if (aP === aq) {
              throw Error("Generator is already running");
            }
            if (aP === ar) {
              {
                if ("throw" === aQ) {
                  throw aR;
                }
                var aT = {
                  value: ac,
                  done: true
                };
                return aT;
              }
            }
            for (aN.method = aQ, aN.arg = aR;;) {
              {
                var aU = aN.delegate;
                if (aU) {
                  {
                    var aV = aD(aU, aN);
                    if (aV) {
                      {
                        if (aV === as) {
                          continue;
                        }
                        return aV;
                      }
                    }
                  }
                }
                if ("next" === aN.method) {
                  aN.sent = aN._sent = aN.arg;
                } else {
                  if ("throw" === aN.method) {
                    {
                      if (aP === ao) {
                        throw aP = ar, aN.arg;
                      }
                      aN.dispatchException(aN.arg);
                    }
                  } else {
                    "return" === aN.method && aN.abrupt("return", aN.arg);
                  }
                }
                aP = aq;
                var aW = an(aL, aM, aN);
                if ("normal" === aW.type) {
                  {
                    if (aP = aN.done ? ar : ap, aW.arg === as) {
                      continue;
                    }
                    var aX = {
                      value: aW.arg,
                      done: aN.done
                    };
                    return aX;
                  }
                }
                "throw" === aW.type && (aP = ar, aN.method = "throw", aN.arg = aW.arg);
              }
            }
          }
        };
      }
    }
    function aD(aL, aM) {
      {
        var aO = aM.method;
        var aP = aL.iterator[aO];
        if (aP === ac) {
          aM.delegate = null;
          "throw" === aO && aL.iterator.return && (aM.method = "return", aM.arg = ac, aD(aL, aM), "throw" === aM.method) || "return" !== aO && (aM.method = "throw", aM.arg = new TypeError("The iterator does not provide a '" + aO + "' method"));
          return as;
        }
        var aQ = an(aP, aL.iterator, aM.arg);
        if ("throw" === aQ.type) {
          aM.method = "throw";
          aM.arg = aQ.arg;
          aM.delegate = null;
          return as;
        }
        var aR = aQ.arg;
        return aR ? aR.done ? (aM[aL.resultName] = aR.value, aM.next = aL.nextLoc, "return" !== aM.method && (aM.method = "next", aM.arg = ac), aM.delegate = null, as) : aR : (aM.method = "throw", aM.arg = new TypeError("iterator result is not an object"), aM.delegate = null, as);
      }
    }
    function aE(aL) {
      {
        var aN = {
          tryLoc: aL[0]
        };
        1 in aL && (aN.catchLoc = aL[1]);
        2 in aL && (aN.finallyLoc = aL[2], aN.afterLoc = aL[3]);
        this.tryEntries.push(aN);
      }
    }
    function aF(aL) {
      {
        var aM = aL.completion || {};
        aM.type = "normal";
        delete aM.arg;
        aL.completion = aM;
      }
    }
    function aG(aL) {
      {
        var aM = {
          tryLoc: "root"
        };
        this.tryEntries = [aM];
        aL.forEach(aE, this);
        this.reset(true);
      }
    }
    function aH(aL) {
      {
        if (aL || "" === aL) {
          {
            var aN = aL[ai];
            if (aN) {
              return aN.call(aL);
            }
            if ("function" == typeof aL.next) {
              return aL;
            }
            if (!isNaN(aL.length)) {
              {
                var aO = -1;
                var aP = function aS() {
                  {
                    for (; ++aO < aL.length;) {
                      if (af.call(aL, aO)) {
                        aS.value = aL[aO];
                        aS.done = false;
                        return aS;
                      }
                    }
                    aS.value = ac;
                    aS.done = true;
                    return aS;
                  }
                };
                return aP.next = aP;
              }
            }
          }
        }
        throw new TypeError(b(aL) + " is not iterable");
      }
    }
    au.prototype = av;
    ag(az, "constructor", {
      value: av,
      configurable: true
    });
    ag(av, "constructor", {
      value: au,
      configurable: true
    });
    au.displayName = al(av, ak, "GeneratorFunction");
    ad.isGeneratorFunction = function (aL) {
      {
        var aN = "function" == typeof aL && aL.constructor;
        return !!aN && (aN === au || "GeneratorFunction" === (aN.displayName || aN.name));
      }
    };
    ad.mark = function (aL) {
      {
        Object.setPrototypeOf ? Object.setPrototypeOf(aL, av) : (aL.__proto__ = av, al(aL, ak, "GeneratorFunction"));
        aL.prototype = Object.create(az);
        return aL;
      }
    };
    ad.awrap = function (aL) {
      {
        var aM = {
          __await: aL
        };
        return aM;
      }
    };
    aA(aB.prototype);
    al(aB.prototype, aj, function () {
      {
        return this;
      }
    });
    ad.AsyncIterator = aB;
    ad.async = function (aL, aM, aN, aO, aP) {
      {
        undefined === aP && (aP = Promise);
        var aQ = new aB(am(aL, aM, aN, aO), aP);
        return ad.isGeneratorFunction(aM) ? aQ : aQ.next().then(function (aR) {
          {
            return aR.done ? aR.value : aQ.next();
          }
        });
      }
    };
    aA(az);
    al(az, ak, "Generator");
    al(az, ai, function () {
      return this;
    });
    al(az, "toString", function () {
      {
        return "[object Generator]";
      }
    });
    ad.keys = function (aL) {
      {
        var aN = Object(aL);
        var aO = [];
        for (var aP in aN) aO.push(aP);
        aO.reverse();
        return function aR() {
          {
            for (; aO.length;) {
              {
                var aS = aO.pop();
                if (aS in aN) {
                  aR.value = aS;
                  aR.done = false;
                  return aR;
                }
              }
            }
            aR.done = true;
            return aR;
          }
        };
      }
    };
    ad.values = aH;
    aG.prototype = {
      constructor: aG,
      reset: function (aL) {
        {
          if (this.prev = 0, this.next = 0, this.sent = this._sent = ac, this.done = false, this.delegate = null, this.method = "next", this.arg = ac, this.tryEntries.forEach(aF), !aL) {
            for (var aM in this) "t" === aM.charAt(0) && af.call(this, aM) && !isNaN(+aM.slice(1)) && (this[aM] = ac);
          }
        }
      },
      stop: function () {
        {
          this.done = true;
          var aL = this.tryEntries[0].completion;
          if ("throw" === aL.type) {
            throw aL.arg;
          }
          return this.rval;
        }
      },
      dispatchException: function (aL) {
        {
          if (this.done) {
            throw aL;
          }
          var aN = this;
          function aU(aV, aW) {
            {
              aQ.type = "throw";
              aQ.arg = aL;
              aN.next = aV;
              aW && (aN.method = "next", aN.arg = ac);
              return !!aW;
            }
          }
          for (var aO = this.tryEntries.length - 1; aO >= 0; --aO) {
            {
              var aP = this.tryEntries[aO];
              var aQ = aP.completion;
              if ("root" === aP.tryLoc) {
                return aU("end");
              }
              if (aP.tryLoc <= this.prev) {
                {
                  var aR = af.call(aP, "catchLoc");
                  var aS = af.call(aP, "finallyLoc");
                  if (aR && aS) {
                    {
                      if (this.prev < aP.catchLoc) {
                        return aU(aP.catchLoc, true);
                      }
                      if (this.prev < aP.finallyLoc) {
                        return aU(aP.finallyLoc);
                      }
                    }
                  } else {
                    if (aR) {
                      {
                        if (this.prev < aP.catchLoc) {
                          return aU(aP.catchLoc, true);
                        }
                      }
                    } else {
                      {
                        if (!aS) {
                          throw Error("try statement without catch or finally");
                        }
                        if (this.prev < aP.finallyLoc) {
                          return aU(aP.finallyLoc);
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      },
      abrupt: function (aL, aM) {
        {
          for (var aP = this.tryEntries.length - 1; aP >= 0; --aP) {
            {
              var aQ = this.tryEntries[aP];
              if (aQ.tryLoc <= this.prev && af.call(aQ, "finallyLoc") && this.prev < aQ.finallyLoc) {
                {
                  var aR = aQ;
                  break;
                }
              }
            }
          }
          aR && ("break" === aL || "continue" === aL) && aR.tryLoc <= aM && aM <= aR.finallyLoc && (aR = null);
          var aS = aR ? aR.completion : {};
          aS.type = aL;
          aS.arg = aM;
          return aR ? (this.method = "next", this.next = aR.finallyLoc, as) : this.complete(aS);
        }
      },
      complete: function (aL, aM) {
        {
          if ("throw" === aL.type) {
            throw aL.arg;
          }
          "break" === aL.type || "continue" === aL.type ? this.next = aL.arg : "return" === aL.type ? (this.rval = this.arg = aL.arg, this.method = "return", this.next = "end") : "normal" === aL.type && aM && (this.next = aM);
          return as;
        }
      },
      finish: function (aL) {
        {
          for (var aM = this.tryEntries.length - 1; aM >= 0; --aM) {
            {
              var aN = this.tryEntries[aM];
              if (aN.finallyLoc === aL) {
                this.complete(aN.completion, aN.afterLoc);
                aF(aN);
                return as;
              }
            }
          }
        }
      },
      catch: function (aL) {
        {
          for (var aN = this.tryEntries.length - 1; aN >= 0; --aN) {
            {
              var aO = this.tryEntries[aN];
              if (aO.tryLoc === aL) {
                {
                  var aP = aO.completion;
                  if ("throw" === aP.type) {
                    {
                      var aQ = aP.arg;
                      aF(aO);
                    }
                  }
                  return aQ;
                }
              }
            }
          }
          throw Error("illegal catch attempt");
        }
      },
      delegateYield: function (aL, aM, aN) {
        {
          this.delegate = {
            iterator: aH(aL),
            resultName: aM,
            nextLoc: aN
          };
          "next" === this.method && (this.arg = ac);
          return as;
        }
      }
    };
    return ad;
  }
  function h(ab, ac, ad, ae, af, ag, ah) {
    {
      try {
        {
          var ai = ab[ag](ah);
          var aj = ai.value;
        }
      } catch (al) {
        {
          return void ad(al);
        }
      }
      ai.done ? ac(aj) : Promise.resolve(aj).then(ae, af);
    }
  }
  function i(ab) {
    return function () {
      var ad = this;
      var ae = arguments;
      return new Promise(function (af, ag) {
        var ai = ab.apply(ad, ae);
        function aj(al) {
          {
            h(ai, af, ag, aj, ak, "next", al);
          }
        }
        function ak(al) {
          {
            h(ai, af, ag, aj, ak, "throw", al);
          }
        }
        aj(undefined);
      });
    };
  }
  var j = ($.isNode() ? process.env.AiHaiYan : $.getdata("AiHaiYan")) || "";
  var k = ($.isNode() ? process.env.OCR_SERVER : $.getdata("OCR_SERVER")) || "https://ddddocr.xzxxn7.live";
  var l = undefined;
  var m = "";
  var n = "";
  var o = "";
  var p = "";
  var q = "";
  var r = "";
  var s = "";
  var t = "";
  var u = "60";
  var v = "10018";
  var w = "FR*r!isE5W";
  var x = "0be39bb836a0d86aa76761af779aa93e";
  var y = "";
  var z = "";
  var A = "";
  var B = "";
  var D = "";
  function E() {
    return F.apply(this, arguments);
  }
  function F() {
    {
      F = i(g().mark(function ad() {
        {
          var ag;
          var ah;
          var ai;
          var aj;
          var ak;
          var al;
          var am;
          var an;
          var ao;
          var ap;
          var aq;
          var ar;
          var as;
          var at;
          var au;
          var av;
          var aw;
          var ax;
          var ay;
          var az;
          var aA;
          var aB;
          var aC;
          var aD;
          var aE;
          var aF;
          var aG;
          var aH;
          var aI;
          var aJ;
          var aK;
          var aL;
          var aM;
          var aN;
          var aO;
          var aP;
          var aQ;
          var aR;
          var aS;
          var aT;
          var aU;
          var aV;
          var aW;
          var aX;
          var aY;
          var aZ;
          var b0;
          var b1;
          var b2;
          var b3;
          var b4;
          var b5;
          var b6;
          var b7;
          var b8;
          var b9;
          var ba;
          var bb;
          var bc;
          var bd;
          var bf;
          var bg;
          var bh;
          var bi;
          var bj;
          var bk;
          var bl;
          var bm;
          var bn;
          var bo;
          var bp;
          var bq;
          var br;
          var bs;
          var bt;
          var bu;
          var bv;
          var bw;
          var bx;
          var by;
          return g().wrap(function (bz) {
            {
              for (;;) {
                switch (bz.prev = bz.next) {
                  case 0:
                    if (console.log("作者：@xzxxn777\n频道：https://t.me/xzxxn777\n群组：https://t.me/xzxxn7777\n自用机场推荐：https://xn--diqv0fut7b.com\n"), j) {
                      {
                        bz.next = 6;
                        break;
                      }
                    }
                    console.log("先去boxjs填写账号密码");
                    bz.next = 5;
                    return a9("先去boxjs填写账号密码");
                  case 5:
                    return bz.abrupt("return");
                  case 6:
                    bz.next = 8;
                    return a7();
                  case 8:
                    l = bz.sent;
                    ag = j.split(" ");
                    ah = c(ag);
                    bz.prev = 11;
                    ah.s();
                  case 13:
                    if ((ai = ah.n()).done) {
                      {
                        bz.next = 334;
                        break;
                      }
                    }
                    aj = ai.value;
                    console.log("随机生成UA");
                    ak = a3();
                    s = ak.ua;
                    t = ak.commonUa;
                    console.log(s);
                    console.log(t);
                    q = aj.split("&")[0];
                    r = aj.split("&")[1];
                    console.log("用户：".concat(q, "开始任务"));
                    console.log("获取sessionId");
                    bz.next = 27;
                    return M("/api/account/init");
                  case 27:
                    al = bz.sent;
                    o = al.data.session.id;
                    console.log(o);
                    console.log("获取signature_key");
                    bz.next = 33;
                    return G("/web/init?client_id=".concat(v));
                  case 33:
                    am = bz.sent;
                    m = am.data.client.signature_key;
                    console.log(m);
                    console.log("获取code");
                    bz.next = 39;
                    return I("/web/oauth/credential_auth");
                  case 39:
                    if (an = bz.sent, an.data) {
                      {
                        bz.next = 43;
                        break;
                      }
                    }
                    console.log(an.message);
                    return bz.abrupt("continue", 332);
                  case 43:
                    ao = an.data.authorization_code.code;
                    console.log(ao);
                    console.log("登录");
                    bz.next = 48;
                    return M("/api/zbtxz/login", "check_token=&code=".concat(ao, "&token=&type=-1&union_id="));
                  case 48:
                    if (ap = bz.sent, console.log("登录成功"), p = ap.data.session.account_id, o = ap.data.session.id, console.log("————————————"), console.log("阅读抽奖"), console.log("获取id"), y) {
                      {
                        bz.next = 62;
                        break;
                      }
                    }
                    bz.next = 58;
                    return K("/api/buoy/list");
                  case 58:
                    aq = bz.sent;
                    ar = /\/module-study\/home\/home\?hide_back=1&id=([a-zA-Z0-9]+)/;
                    as = JSON.stringify(aq).match(ar);
                    as && (y = as[1]);
                  case 62:
                    if (y) {
                      {
                        bz.next = 65;
                        break;
                      }
                    }
                    console.log("获取id失败");
                    return bz.abrupt("continue", 332);
                  case 65:
                    console.log(y);
                    console.log("获取apiDt");
                    bz.next = 69;
                    return O("/aosbase/_auth_dt");
                  case 69:
                    at = bz.sent;
                    A = at.data.substring(32, 68);
                    console.log(A);
                    B = "0";
                    au = {
                      app_user_token: o,
                      appid: "haiyan",
                      noncestr: a6(6, false),
                      phone: q,
                      portrait_url: ap.data.account.image_url,
                      timestamp: Math.round(new Date().getTime() / 1000).toString(),
                      user_id: ap.data.account.id,
                      user_name: ap.data.account.nick_name,
                      wx_openid: "",
                      wx_unionid: ""
                    };
                    au.signature = l.md5(a4(au) + "&appkey=".concat(x));
                    bz.next = 77;
                    return T("/aosbase/_auth_appuserinit", au);
                  case 77:
                    av = bz.sent;
                    D = av.data.access_token;
                    B = av.data.data.user_id;
                    console.log("阅读token：".concat(D));
                    aw = "";
                    ax = Date.now() + "" + Math.floor(10000000 * Math.random());
                    bz.next = 85;
                    return Q("/aoslearnfoot/_optionp_list?activity_id=".concat(y));
                  case 85:
                    ay = bz.sent;
                    az = c(ay.data);
                    bz.prev = 87;
                    az.s();
                  case 89:
                    if ((aA = az.n()).done) {
                      {
                        bz.next = 176;
                        break;
                      }
                    }
                    aB = aA.value;
                    aC = aB.id;
                    console.log(aB.title);
                    bz.next = 95;
                    return Q("/aoslearnfoot/optionp_detail?id=".concat(aB.id));
                  case 95:
                    if (aD = bz.sent, aD.data.task_num != aD.data.user_done_num) {
                      {
                        bz.next = 99;
                        break;
                      }
                    }
                    console.log("已完成");
                    return bz.abrupt("continue", 174);
                  case 99:
                    if (aw) {
                      {
                        bz.next = 140;
                        break;
                      }
                    }
                    console.log("获取滑块token");
                    aE = 0;
                  case 102:
                    if (!(aE < 3)) {
                      {
                        bz.next = 140;
                        break;
                      }
                    }
                    aF = a6(10, false);
                    aG = Math.round(new Date().getTime() / 1000).toString();
                    aH = "https://haiyan.y-h5.iyunxh.com/module-study/pass-detail/pass-detail?pass_id=".concat(aC);
                    aI = a1({
                      once: aF,
                      referer: aH,
                      timestamp: aG,
                      type: "1"
                    }, "7Pf0cfZPHy1L7PS2PfCfP8r2BGi461LG", "8RsVKSCH8mQ4l7cu");
                    bz.next = 109;
                    return Q("/basemodule/_captcha_get?once=".concat(aF, "&referer=").concat(aH, "&timestamp=").concat(aG, "&type=1&signature=").concat(encodeURIComponent(aI)));
                  case 109:
                    aJ = bz.sent;
                    console.log("滑块：".concat(aJ.data.block));
                    console.log("背景：".concat(aJ.data.background));
                    bz.next = 114;
                    return V({
                      slidingImage: aJ.data.block,
                      backImage: aJ.data.background
                    });
                  case 114:
                    if (aK = bz.sent, aK) {
                      {
                        bz.next = 120;
                        break;
                      }
                    }
                    console.log("ddddocr服务异常");
                    bz.next = 119;
                    return a9("ddddocr服务异常");
                  case 119:
                    return bz.abrupt("continue", 137);
                  case 120:
                    console.log(aK);
                    aL = aK.result;
                    aM = a1({
                      x: aL,
                      width: 384,
                      track: [{
                        x: Math.floor(aL / 10),
                        y: 0,
                        time: 100
                      }, {
                        x: Math.floor(aL / 8),
                        y: 0,
                        time: 100
                      }, {
                        x: Math.floor(aL / 6),
                        y: 0,
                        time: 100
                      }, {
                        x: Math.floor(aL / 4),
                        y: 0,
                        time: 100
                      }, {
                        x: aL / 2,
                        y: 0,
                        time: 100
                      }, {
                        x: aL,
                        y: 0,
                        time: 100
                      }]
                    }, "7Pf0cfZPHy1L7PS2PfCfP8r2BGi461LG", "8RsVKSCH8mQ4l7cu");
                    console.log("验证滑块");
                    bz.next = 126;
                    return T("/basemodule/_captcha_check", {
                      token: aJ.data.token,
                      data: aM,
                      referer: aH,
                      type: aJ.data.type
                    });
                  case 126:
                    if (aN = bz.sent, !aN.data.result) {
                      {
                        bz.next = 136;
                        break;
                      }
                    }
                    var bB = {
                      validate: aN.data.token,
                      verif_type: 3,
                      afs_uuid: "",
                      source: "yundian"
                    };
                    bz.next = 130;
                    return T("/aosbasemodule/intelverifcode_check", bB);
                  case 130:
                    aO = bz.sent;
                    aw = aO.data.tokenid;
                    console.log("滑块token：".concat(aw));
                    return bz.abrupt("break", 140);
                  case 136:
                    console.log("验证失败");
                  case 137:
                    aE++;
                    bz.next = 102;
                    break;
                  case 140:
                    if (aw) {
                      {
                        bz.next = 142;
                        break;
                      }
                    }
                    return bz.abrupt("break", 176);
                  case 142:
                    bz.next = 144;
                    return Q("/aosbasemodule/_task_list?offset=0&count=".concat(aB.task_num, "&module_id=").concat(aB.m_id, "&activity_id=").concat(aB.id));
                  case 144:
                    aP = bz.sent;
                    aQ = c(aP.data);
                    bz.prev = 146;
                    aQ.s();
                  case 148:
                    if ((aR = aQ.n()).done) {
                      {
                        bz.next = 166;
                        break;
                      }
                    }
                    if (aS = aR.value, console.log("文章：".concat(aS.title)), 1 != aS.user_done) {
                      {
                        bz.next = 154;
                        break;
                      }
                    }
                    console.log("已完成");
                    return bz.abrupt("continue", 164);
                  case 154:
                    var bC = {
                      task_id: aS.id
                    };
                    bz.next = 156;
                    return T("/aosbasemodule/task_create", bC);
                  case 156:
                    aT = bz.sent;
                    bz.next = 159;
                    return K("/api/article/detail?id=".concat(JSON.parse(aS.rule).news_id));
                  case 159:
                    var bD = {
                      task_record_id: aT.data.task_record_id,
                      collect_info: "",
                      afs_tokenid: aw,
                      device_token: ax
                    };
                    bz.sent;
                    bz.next = 162;
                    return T("/aosbasemodule/task_done", bD);
                  case 162:
                    aU = bz.sent;
                    console.log("阅读：".concat(aU.msg));
                  case 164:
                    bz.next = 148;
                    break;
                  case 166:
                    bz.next = 171;
                    break;
                  case 168:
                    bz.prev = 168;
                    bz.t0 = bz.catch(146);
                    aQ.e(bz.t0);
                  case 171:
                    bz.prev = 171;
                    aQ.f();
                    return bz.finish(171);
                  case 174:
                    bz.next = 89;
                    break;
                  case 176:
                    bz.next = 181;
                    break;
                  case 178:
                    bz.prev = 178;
                    bz.t1 = bz.catch(87);
                    az.e(bz.t1);
                  case 181:
                    bz.prev = 181;
                    az.f();
                    return bz.finish(181);
                  case 184:
                    bz.next = 186;
                    return Q("/aoslearnfoot/_ac_detail?id=".concat(y));
                  case 186:
                    aV = bz.sent;
                    aW = JSON.parse(aV.data.other_set).lottery.id;
                    bz.next = 190;
                    return Q("/aoslottery/ac_lottery_times?id=".concat(aW));
                  case 190:
                    if (aX = bz.sent, console.log("拥有".concat(aX.data.all_remain, "次抽奖")), !(aX.data.all_remain > 0)) {
                      {
                        bz.next = 254;
                        break;
                      }
                    }
                    console.log("获取抽奖滑块token");
                    aY = "";
                    aZ = 0;
                  case 196:
                    if (!(aZ < 3)) {
                      {
                        bz.next = 234;
                        break;
                      }
                    }
                    b0 = a6(10, false);
                    b1 = Math.round(new Date().getTime() / 1000).toString();
                    b2 = "https://haiyan.y-h5.iyunxh.com/module-study/home/home?hide_back=1";
                    b3 = a1({
                      once: b0,
                      referer: b2,
                      timestamp: b1,
                      type: "1"
                    }, "7Pf0cfZPHy1L7PS2PfCfP8r2BGi461LG", "8RsVKSCH8mQ4l7cu");
                    bz.next = 203;
                    return Q("/basemodule/_captcha_get?once=".concat(b0, "&referer=").concat(b2, "&timestamp=").concat(b1, "&type=1&signature=").concat(encodeURIComponent(b3)));
                  case 203:
                    b4 = bz.sent;
                    console.log("滑块：".concat(b4.data.block));
                    console.log("背景：".concat(b4.data.background));
                    bz.next = 208;
                    return V({
                      slidingImage: b4.data.block,
                      backImage: b4.data.background
                    });
                  case 208:
                    if (b5 = bz.sent, b5) {
                      {
                        bz.next = 214;
                        break;
                      }
                    }
                    console.log("ddddocr服务异常");
                    bz.next = 213;
                    return a9("ddddocr服务异常");
                  case 213:
                    return bz.abrupt("continue", 231);
                  case 214:
                    console.log(b5);
                    b6 = b5.result;
                    b7 = a1({
                      x: b6,
                      width: 384,
                      track: [{
                        x: Math.floor(b6 / 10),
                        y: 0,
                        time: 100
                      }, {
                        x: Math.floor(b6 / 8),
                        y: 0,
                        time: 100
                      }, {
                        x: Math.floor(b6 / 6),
                        y: 0,
                        time: 100
                      }, {
                        x: Math.floor(b6 / 4),
                        y: 0,
                        time: 100
                      }, {
                        x: b6 / 2,
                        y: 0,
                        time: 100
                      }, {
                        x: b6,
                        y: 0,
                        time: 100
                      }]
                    }, "7Pf0cfZPHy1L7PS2PfCfP8r2BGi461LG", "8RsVKSCH8mQ4l7cu");
                    console.log("验证滑块");
                    bz.next = 220;
                    return T("/basemodule/_captcha_check", {
                      token: b4.data.token,
                      data: b7,
                      referer: b2,
                      type: b4.data.type
                    });
                  case 220:
                    if (b8 = bz.sent, !b8.data.result) {
                      {
                        bz.next = 230;
                        break;
                      }
                    }
                    bz.next = 224;
                    return T("/aosbasemodule/intelverifcode_check", {
                      validate: b8.data.token,
                      verif_type: 3,
                      afs_uuid: "",
                      source: "yundian"
                    });
                  case 224:
                    b9 = bz.sent;
                    aY = b9.data.tokenid;
                    console.log("抽奖滑块token：".concat(aY));
                    return bz.abrupt("break", 234);
                  case 230:
                    console.log("验证失败");
                  case 231:
                    aZ++;
                    bz.next = 196;
                    break;
                  case 234:
                    if (aY) {
                      {
                        bz.next = 236;
                        break;
                      }
                    }
                    return bz.abrupt("continue", 332);
                  case 236:
                    bz.next = 238;
                    return Q("/aoslottery/_ac_detail?id=".concat(aW));
                  case 238:
                    ba = bz.sent;
                    bb = 0;
                  case 240:
                    if (!(bb < aX.data.all_remain)) {
                      {
                        bz.next = 254;
                        break;
                      }
                    }
                    bz.next = 243;
                    return T("/aosstat/_event_sub", {
                      _need_stat: 0,
                      _need_task: 0,
                      _need_behavior: 1,
                      event: "lotteryTake",
                      action: "take",
                      brief: "抽奖提交",
                      client_type: 1,
                      module_id: ba.data.m_id,
                      content_id: ba.data.id,
                      num: 1,
                      duration: 0,
                      column_id: 0,
                      column_title: "",
                      title: ba.data.title,
                      device_token: ax,
                      user_id: av.data.data.user_id,
                      user_name: av.data.data.user_name,
                      phone_num: q,
                      page_path: "module-study/home/home",
                      version: "1.0.0",
                      network: "wifi",
                      client_model: "android",
                      system_version: "Android 11",
                      resolution: "",
                      baidu_longitude: "",
                      baidu_latitude: "",
                      longitude: 0,
                      latitude: 0,
                      province: "",
                      city: "",
                      area: "",
                      street: "",
                      address: ""
                    });
                  case 243:
                    if (bc = bz.sent, console.log("抽奖提交：".concat(bc.msg)), 0 == bc.code) {
                      {
                        bz.next = 247;
                        break;
                      }
                    }
                    return bz.abrupt("continue", 251);
                  case 247:
                    var bE = {
                      id: aW,
                      verif_uuid: "",
                      verif_code: "",
                      afs_tokenid: aY,
                      collect_info: "",
                      longitude: 0,
                      latitude: 0,
                      device_token: ax
                    };
                    bz.next = 249;
                    return T("/aoslottery/ac_sub", bE);
                  case 249:
                    bd = bz.sent;
                    0 == bd.code ? (console.log("抽奖获得：".concat(null == bd || null === (bf = bd.data) || undefined === bf ? undefined : bf.title)), n += "用户：".concat(q, " 抽奖获得：").concat(null == bd || null === (bg = bd.data) || undefined === bg ? undefined : bg.title, "\n")) : "o d w" == bd.msg ? console.log("谢谢参与") : console.log(bd.msg);
                  case 251:
                    bb++;
                    bz.next = 240;
                    break;
                  case 254:
                    if (console.log("————————————"), console.log("获取signId"), z) {
                      {
                        bz.next = 263;
                        break;
                      }
                    }
                    bz.next = 259;
                    return K("/api/buoy/list");
                  case 259:
                    bh = bz.sent;
                    bi = /\/module-signin\/home\/home\?hide_back=1&id=([a-zA-Z0-9]+)/;
                    bj = JSON.stringify(bh).match(bi);
                    bj && (z = bj[1]);
                  case 263:
                    if (!z) {
                      {
                        bz.next = 331;
                        break;
                      }
                    }
                    console.log(z);
                    console.log("签到");
                    bz.next = 268;
                    return Q("/aossignin/_ac_detail?id=".concat(z));
                  case 268:
                    bk = bz.sent;
                    bz.next = 271;
                    return T("/aosstat/_event_sub", {
                      _need_stat: 0,
                      _need_task: 0,
                      _need_behavior: 1,
                      event: "signinTake",
                      action: "take",
                      brief: "签到提交",
                      client_type: 1,
                      module_id: bk.data.m_id,
                      content_id: bk.data.id,
                      num: 1,
                      duration: 0,
                      column_id: 0,
                      column_title: "",
                      title: "",
                      device_token: ax,
                      user_id: av.data.data.user_id,
                      user_name: av.data.data.user_name,
                      phone_num: q,
                      page_path: "module-signin/home/home",
                      version: "1.0.0",
                      network: "wifi",
                      client_model: "android",
                      system_version: "Android 11",
                      resolution: "",
                      baidu_longitude: "",
                      baidu_latitude: "",
                      longitude: 0,
                      latitude: 0,
                      province: "",
                      city: "",
                      area: "",
                      street: "",
                      address: ""
                    });
                  case 271:
                    if (bl = bz.sent, console.log("签到提交：".concat(bl.msg)), 0 == bl.code) {
                      {
                        bz.next = 275;
                        break;
                      }
                    }
                    return bz.abrupt("continue", 332);
                  case 275:
                    var bF = {
                      id: z,
                      afs_tokenid: "",
                      collect_info: "",
                      longitude: 0,
                      latitude: 0
                    };
                    bz.next = 277;
                    return T("/aossignin/ac_sub", bF);
                  case 277:
                    if (bm = bz.sent, 0 == bm.code ? (console.log("签到成功，累计签到：".concat(bm.data.times, "天")), console.log(JSON.stringify(bm))) : console.log(bm.msg), console.log("签到抽奖"), console.log("获取lotteryId"), bn = /\/module-lottery\/home\/home\?hide_back=1&id=([a-zA-Z0-9]+)/, bo = JSON.stringify(bk).match(bn), !bo) {
                      {
                        bz.next = 328;
                        break;
                      }
                    }
                    aW = bo[1];
                    bz.next = 287;
                    return Q("/aoslottery/_ac_detail?id=".concat(aW));
                  case 287:
                    bk = bz.sent;
                    bp = JSON.parse(bk.data.other_set).task.id;
                    console.log("任务id：".concat(bp));
                    bz.next = 292;
                    return Q("/aosbasemodule/_mission_detail?activity_id=".concat(bp));
                  case 292:
                    if (bq = bz.sent, 1 != bq.data.group_list[0].list[0].is_complete) {
                      {
                        bz.next = 297;
                        break;
                      }
                    }
                    console.log("分享已完成");
                    bz.next = 306;
                    break;
                  case 297:
                    br = JSON.parse(bq.data.group_list[0].list[0].rule).news_id;
                    bz.next = 300;
                    return M("/api/user_mumber/doTask", "memberType=3&member_type=3&target_id=".concat(br));
                  case 300:
                    var bG = {
                      activity_id: bk.data.id,
                      mission_id: bq.data.group_list[0].list[0].id
                    };
                    bs = bz.sent;
                    console.log("分享：".concat(bs.message));
                    bz.next = 304;
                    return T("/aoslottery/mission_sub", bG);
                  case 304:
                    bt = bz.sent;
                    console.log("任务提交：".concat(bt.msg));
                  case 306:
                    bz.next = 308;
                    return Q("/aoslottery/ac_lottery_times?id=".concat(aW));
                  case 308:
                    if (aX = bz.sent, console.log("拥有".concat(aX.data.all_remain, "次抽奖")), !(aX.data.all_remain > 0)) {
                      {
                        bz.next = 326;
                        break;
                      }
                    }
                    bu = 0;
                  case 312:
                    if (!(bu < aX.data.all_remain)) {
                      {
                        bz.next = 326;
                        break;
                      }
                    }
                    bz.next = 315;
                    return T("/aosstat/_event_sub", {
                      _need_stat: 0,
                      _need_task: 0,
                      _need_behavior: 1,
                      event: "lotteryTake",
                      action: "take",
                      brief: "抽奖提交",
                      client_type: 1,
                      module_id: bk.data.m_id,
                      content_id: bk.data.id,
                      num: 1,
                      duration: 0,
                      column_id: 0,
                      column_title: "",
                      title: bk.data.title,
                      device_token: ax,
                      user_id: av.data.data.user_id,
                      user_name: av.data.data.user_name,
                      phone_num: q,
                      page_path: "module-lottery/home/home",
                      version: "1.0.0",
                      network: "wifi",
                      client_model: "android",
                      system_version: "Android 11",
                      resolution: "",
                      baidu_longitude: "",
                      baidu_latitude: "",
                      longitude: 0,
                      latitude: 0,
                      province: "",
                      city: "",
                      area: "",
                      street: "",
                      address: ""
                    });
                  case 315:
                    if (bv = bz.sent, console.log("抽奖提交：".concat(bv.msg)), 0 == bv.code) {
                      {
                        bz.next = 319;
                        break;
                      }
                    }
                    return bz.abrupt("continue", 323);
                  case 319:
                    bz.next = 321;
                    return T("/aoslottery/ac_sub", {
                      id: "".concat(aW),
                      verif_uuid: "",
                      verif_code: "",
                      afs_tokenid: "",
                      collect_info: "",
                      longitude: 0,
                      latitude: 0,
                      device_token: ax
                    });
                  case 321:
                    bw = bz.sent;
                    0 == bw.code ? (console.log("抽奖获得：".concat(null == bw || null === (bx = bw.data) || undefined === bx ? undefined : bx.title)), n += "用户：".concat(q, " 抽奖获得：").concat(null == bw || null === (by = bw.data) || undefined === by ? undefined : by.title, "\n")) : "o d w" == bw.msg ? console.log("谢谢参与") : console.log(bw.msg);
                  case 323:
                    bu++;
                    bz.next = 312;
                    break;
                  case 326:
                    bz.next = 329;
                    break;
                  case 328:
                    console.log("获取lotteryId失败");
                  case 329:
                    bz.next = 332;
                    break;
                  case 331:
                    console.log("未匹配到signId");
                  case 332:
                    bz.next = 13;
                    break;
                  case 334:
                    bz.next = 339;
                    break;
                  case 336:
                    bz.prev = 336;
                    bz.t2 = bz.catch(11);
                    ah.e(bz.t2);
                  case 339:
                    bz.prev = 339;
                    ah.f();
                    return bz.finish(339);
                  case 342:
                    if (!n) {
                      {
                        bz.next = 345;
                        break;
                      }
                    }
                    bz.next = 345;
                    return a9(n);
                  case 345:
                  case "end":
                    return bz.stop();
                }
              }
            }
          }, ad, null, [[11, 336, 339, 342], [87, 178, 181, 184], [146, 168, 171, 174]]);
        }
      }));
      return F.apply(this, arguments);
    }
  }
  function G(ab) {
    {
      return H.apply(this, arguments);
    }
  }
  function H() {
    H = i(g().mark(function ac(ad) {
      return g().wrap(function (ae) {
        for (;;) {
          switch (ae.prev = ae.next) {
            case 0:
              return ae.abrupt("return", new Promise(function (ag) {
                var ah = {
                  url: "https://passport.tmuyun.com".concat(ad),
                  headers: {
                    Connection: "Keep-Alive",
                    "Cache-Control": "no-cache",
                    "X-REQUEST-ID": a0(),
                    "Accept-Encoding": "gzip",
                    "user-agent": s
                  }
                };
                $.get(ah, function () {
                  var aj = i(g().mark(function ak(al, am, an) {
                    return g().wrap(function (ap) {
                      for (;;) {
                        switch (ap.prev = ap.next) {
                          case 0:
                            try {
                              al ? (console.log("".concat(JSON.stringify(al))), console.log("".concat($.name, " API请求失败，请检查网路重试"))) : ag(JSON.parse(an));
                            } catch (aq) {
                              $.logErr(aq, am);
                            } finally {
                              ag();
                            }
                          case 1:
                          case "end":
                            return ap.stop();
                        }
                      }
                    }, ak);
                  }));
                  return function (al, am, an) {
                    return aj.apply(this, arguments);
                  };
                }());
              }));
            case 1:
            case "end":
              return ae.stop();
          }
        }
      }, ac);
    }));
    return H.apply(this, arguments);
  }
  function I(ab) {
    return J.apply(this, arguments);
  }
  function J() {
    J = i(g().mark(function ac(ad) {
      var ae;
      return g().wrap(function (af) {
        for (;;) {
          switch (af.prev = af.next) {
            case 0:
              ae = X();
              return af.abrupt("return", new Promise(function (ah) {
                var ai = {
                  Connection: "Keep-Alive",
                  "X-REQUEST-ID": ae.uuid,
                  "X-SIGNATURE": ae.signature,
                  "Cache-Control": "no-cache",
                  "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
                  "Accept-Encoding": "gzip",
                  "user-agent": s
                };
                var aj = {
                  url: "https://passport.tmuyun.com".concat(ad),
                  headers: ai,
                  body: ae.body
                };
                $.post(aj, function () {
                  var al = i(g().mark(function am(an, ao, ap) {
                    return g().wrap(function (aq) {
                      for (;;) {
                        switch (aq.prev = aq.next) {
                          case 0:
                            try {
                              an ? (console.log("".concat(JSON.stringify(an))), console.log("".concat($.name, " API请求失败，请检查网路重试"))) : ah(JSON.parse(ap));
                            } catch (ar) {
                              $.logErr(ar, ao);
                            } finally {
                              ah();
                            }
                          case 1:
                          case "end":
                            return aq.stop();
                        }
                      }
                    }, am);
                  }));
                  return function (an, ao, ap) {
                    return al.apply(this, arguments);
                  };
                }());
              }));
            case 2:
            case "end":
              return af.stop();
          }
        }
      }, ac);
    }));
    return J.apply(this, arguments);
  }
  function K(ab) {
    return L.apply(this, arguments);
  }
  function L() {
    L = i(g().mark(function ac(ad) {
      var af;
      return g().wrap(function (ag) {
        for (;;) {
          switch (ag.prev = ag.next) {
            case 0:
              af = Y(ad);
              return ag.abrupt("return", new Promise(function (aj) {
                var ak = {
                  Connection: "Keep-Alive",
                  "X-TIMESTAMP": af.time,
                  "X-SESSION-ID": o,
                  "X-REQUEST-ID": af.uuid,
                  "X-SIGNATURE": af.signature,
                  "X-TENANT-ID": u,
                  "X-ACCOUNT-ID": p,
                  "Cache-Control": "no-cache",
                  "Accept-Encoding": "gzip",
                  "user-agent": t
                };
                var al = {
                  url: "https://vapp.tmuyun.com".concat(ad),
                  headers: ak
                };
                $.get(al, function () {
                  var an = i(g().mark(function ao(ap, aq, ar) {
                    return g().wrap(function (at) {
                      for (;;) {
                        switch (at.prev = at.next) {
                          case 0:
                            if (at.prev = 0, !ap) {
                              at.next = 6;
                              break;
                            }
                            console.log("".concat(JSON.stringify(ap)));
                            console.log("".concat($.name, " API请求失败，请检查网路重试"));
                            at.next = 9;
                            break;
                          case 6:
                            at.next = 8;
                            return $.wait(2000);
                          case 8:
                            aj(JSON.parse(ar));
                          case 9:
                            at.next = 14;
                            break;
                          case 11:
                            at.prev = 11;
                            at.t0 = at.catch(0);
                            $.logErr(at.t0, aq);
                          case 14:
                            at.prev = 14;
                            aj();
                            return at.finish(14);
                          case 17:
                          case "end":
                            return at.stop();
                        }
                      }
                    }, ao, null, [[0, 11, 14, 17]]);
                  }));
                  return function (ap, aq, ar) {
                    return an.apply(this, arguments);
                  };
                }());
              }));
            case 2:
            case "end":
              return ag.stop();
          }
        }
      }, ac);
    }));
    return L.apply(this, arguments);
  }
  function M(ab, ac) {
    return N.apply(this, arguments);
  }
  function N() {
    N = i(g().mark(function ac(ad, ae) {
      var ag;
      return g().wrap(function (ah) {
        for (;;) {
          switch (ah.prev = ah.next) {
            case 0:
              ag = Y(ad);
              return ah.abrupt("return", new Promise(function (ai) {
                var ak = {
                  url: "https://vapp.tmuyun.com".concat(ad),
                  headers: {
                    Connection: "Keep-Alive",
                    "X-TIMESTAMP": ag.time,
                    "X-SESSION-ID": o,
                    "X-REQUEST-ID": ag.uuid,
                    "X-SIGNATURE": ag.signature,
                    "X-TENANT-ID": u,
                    "X-ACCOUNT-ID": p,
                    "Cache-Control": "no-cache",
                    "Accept-Encoding": "gzip",
                    "user-agent": t
                  },
                  body: ae
                };
                $.post(ak, function () {
                  var am = i(g().mark(function an(ao, ap, aq) {
                    return g().wrap(function (as) {
                      for (;;) {
                        switch (as.prev = as.next) {
                          case 0:
                            if (as.prev = 0, !ao) {
                              as.next = 6;
                              break;
                            }
                            console.log("".concat(JSON.stringify(ao)));
                            console.log("".concat($.name, " API请求失败，请检查网路重试"));
                            as.next = 9;
                            break;
                          case 6:
                            as.next = 8;
                            return $.wait(2000);
                          case 8:
                            ai(JSON.parse(aq));
                          case 9:
                            as.next = 14;
                            break;
                          case 11:
                            as.prev = 11;
                            as.t0 = as.catch(0);
                            $.logErr(as.t0, ap);
                          case 14:
                            as.prev = 14;
                            ai();
                            return as.finish(14);
                          case 17:
                          case "end":
                            return as.stop();
                        }
                      }
                    }, an, null, [[0, 11, 14, 17]]);
                  }));
                  return function (ao, ap, aq) {
                    return am.apply(this, arguments);
                  };
                }());
              }));
            case 2:
            case "end":
              return ah.stop();
          }
        }
      }, ac);
    }));
    return N.apply(this, arguments);
  }
  function O(ab) {
    return P.apply(this, arguments);
  }
  function P() {
    P = i(g().mark(function ac(ad) {
      return g().wrap(function (ae) {
        for (;;) {
          switch (ae.prev = ae.next) {
            case 0:
              return ae.abrupt("return", new Promise(function (ag) {
                var ah = {
                  url: "https://yapi.y-h5.iyunxh.com/api".concat(ad),
                  headers: {
                    Connection: "Keep-Alive",
                    "Access-T-Id-In": "69",
                    "User-Agent": "Mozilla/5.0 (Linux; Android 11; 21091116AC Build/RP1A.200720.011; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/94.0.4606.85 Mobile Safari/537.36;xsb_aihaiyan;xsb_aihaiyan;3.0.61.0;native_app;6.12.0",
                    "Access-Api-Unique-Token": "1",
                    "Access-Api-Dt": Date.now(),
                    "Access-T-Id": "69",
                    Accept: "*/*",
                    Origin: "https://haiyan.y-h5.iyunxh.com",
                    "X-Requested-With": "com.hoge.android.app.haiyan",
                    "Sec-Fetch-Site": "same-site",
                    "Sec-Fetch-Mode": "cors",
                    "Sec-Fetch-Dest": "empty",
                    Referer: "https://haiyan.y-h5.iyunxh.com/",
                    "Accept-Encoding": "gzip, deflate",
                    "Accept-Language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7"
                  }
                };
                $.get(ah, function () {
                  var aj = i(g().mark(function ak(al, am, an) {
                    return g().wrap(function (ao) {
                      for (;;) {
                        switch (ao.prev = ao.next) {
                          case 0:
                            if (ao.prev = 0, !al) {
                              ao.next = 6;
                              break;
                            }
                            console.log("".concat(JSON.stringify(al)));
                            console.log("".concat($.name, " API请求失败，请检查网路重试"));
                            ao.next = 9;
                            break;
                          case 6:
                            ao.next = 8;
                            return $.wait(2000);
                          case 8:
                            ag(JSON.parse(an));
                          case 9:
                            ao.next = 14;
                            break;
                          case 11:
                            ao.prev = 11;
                            ao.t0 = ao.catch(0);
                            $.logErr(ao.t0, am);
                          case 14:
                            ao.prev = 14;
                            ag();
                            return ao.finish(14);
                          case 17:
                          case "end":
                            return ao.stop();
                        }
                      }
                    }, ak, null, [[0, 11, 14, 17]]);
                  }));
                  return function (al, am, an) {
                    return aj.apply(this, arguments);
                  };
                }());
              }));
            case 1:
            case "end":
              return ae.stop();
          }
        }
      }, ac);
    }));
    return P.apply(this, arguments);
  }
  function Q(ab) {
    return R.apply(this, arguments);
  }
  function R() {
    R = i(g().mark(function ac(ad) {
      return g().wrap(function (ae) {
        for (;;) {
          switch (ae.prev = ae.next) {
            case 0:
              return ae.abrupt("return", new Promise(function (ag) {
                var ai = {
                  url: "https://yapi.y-h5.iyunxh.com/api".concat(ad),
                  headers: {
                    Connection: "Keep-Alive",
                    "Access-User-Id": B,
                    "Access-Api-Signature": Z(),
                    "Access-T-Id-In": "69",
                    "Access-Wxclient-Type": "wx_app",
                    "User-Agent": "Mozilla/5.0 (Linux; Android 11; 21091116AC Build/RP1A.200720.011; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/94.0.4606.85 Mobile Safari/537.36;xsb_aihaiyan;xsb_aihaiyan;3.0.61.0;native_app;6.12.0",
                    "Access-Token": D,
                    "Access-Api-Unique-Token": "1",
                    "Access-Api-Dt": A,
                    "Access-T-Id": "69",
                    Accept: "*/*",
                    Origin: "https://haiyan.y-h5.iyunxh.com",
                    "X-Requested-With": "com.hoge.android.app.haiyan",
                    "Sec-Fetch-Site": "same-site",
                    "Sec-Fetch-Mode": "cors",
                    "Sec-Fetch-Dest": "empty",
                    Referer: "https://haiyan.y-h5.iyunxh.com/",
                    "Accept-Encoding": "gzip, deflate",
                    "Accept-Language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7"
                  }
                };
                $.get(ai, function () {
                  var aj = i(g().mark(function ak(al, am, an) {
                    return g().wrap(function (ap) {
                      for (;;) {
                        switch (ap.prev = ap.next) {
                          case 0:
                            if (ap.prev = 0, !al) {
                              ap.next = 6;
                              break;
                            }
                            console.log("".concat(JSON.stringify(al)));
                            console.log("".concat($.name, " API请求失败，请检查网路重试"));
                            ap.next = 9;
                            break;
                          case 6:
                            ap.next = 8;
                            return $.wait(2000);
                          case 8:
                            ag(JSON.parse(an));
                          case 9:
                            ap.next = 14;
                            break;
                          case 11:
                            ap.prev = 11;
                            ap.t0 = ap.catch(0);
                            $.logErr(ap.t0, am);
                          case 14:
                            ap.prev = 14;
                            ag();
                            return ap.finish(14);
                          case 17:
                          case "end":
                            return ap.stop();
                        }
                      }
                    }, ak, null, [[0, 11, 14, 17]]);
                  }));
                  return function (al, am, an) {
                    return aj.apply(this, arguments);
                  };
                }());
              }));
            case 1:
            case "end":
              return ae.stop();
          }
        }
      }, ac);
    }));
    return R.apply(this, arguments);
  }
  function T(ab, ac) {
    return U.apply(this, arguments);
  }
  function U() {
    U = i(g().mark(function ab(ac, ad) {
      return g().wrap(function (af) {
        for (;;) {
          switch (af.prev = af.next) {
            case 0:
              return af.abrupt("return", new Promise(function (ah) {
                var ai = {
                  url: "https://yapi.y-h5.iyunxh.com/api".concat(ac),
                  headers: {
                    Connection: "Keep-Alive",
                    "Access-User-Id": B,
                    "Access-Api-Signature": Z(),
                    "Access-T-Id-In": "69",
                    "Access-Wxclient-Type": "wx_app",
                    "User-Agent": "Mozilla/5.0 (Linux; Android 11; 21091116AC Build/RP1A.200720.011; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/94.0.4606.85 Mobile Safari/537.36;xsb_aihaiyan;xsb_aihaiyan;3.0.61.0;native_app;6.12.0",
                    "Access-Token": D,
                    "Access-Api-Unique-Token": "1",
                    "Content-Type": "application/json",
                    "Access-Api-Dt": A,
                    "Access-T-Id": "69",
                    Accept: "*/*",
                    Origin: "https://haiyan.y-h5.iyunxh.com",
                    "X-Requested-With": "com.hoge.android.app.haiyan",
                    "Sec-Fetch-Site": "same-site",
                    "Sec-Fetch-Mode": "cors",
                    "Sec-Fetch-Dest": "empty",
                    Referer: "https://haiyan.y-h5.iyunxh.com/",
                    "Accept-Encoding": "gzip, deflate",
                    "Accept-Language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7"
                  },
                  body: JSON.stringify(ad)
                };
                $.post(ai, function () {
                  var ak = i(g().mark(function al(am, an, ao) {
                    return g().wrap(function (aq) {
                      for (;;) {
                        switch (aq.prev = aq.next) {
                          case 0:
                            if (aq.prev = 0, !am) {
                              aq.next = 6;
                              break;
                            }
                            console.log("".concat(JSON.stringify(am)));
                            console.log("".concat($.name, " API请求失败，请检查网路重试"));
                            aq.next = 9;
                            break;
                          case 6:
                            aq.next = 8;
                            return $.wait(2000);
                          case 8:
                            ah(JSON.parse(ao));
                          case 9:
                            aq.next = 14;
                            break;
                          case 11:
                            aq.prev = 11;
                            aq.t0 = aq.catch(0);
                            $.logErr(aq.t0, an);
                          case 14:
                            aq.prev = 14;
                            ah();
                            return aq.finish(14);
                          case 17:
                          case "end":
                            return aq.stop();
                        }
                      }
                    }, al, null, [[0, 11, 14, 17]]);
                  }));
                  return function (am, an, ao) {
                    return ak.apply(this, arguments);
                  };
                }());
              }));
            case 1:
            case "end":
              return af.stop();
          }
        }
      }, ab);
    }));
    return U.apply(this, arguments);
  }
  function V(ab) {
    return W.apply(this, arguments);
  }
  function W() {
    W = i(g().mark(function ab(ac) {
      return g().wrap(function (ae) {
        for (;;) {
          switch (ae.prev = ae.next) {
            case 0:
              return ae.abrupt("return", new Promise(function (ag) {
                var ai = {
                  "Content-Type": "application/json"
                };
                var aj = {
                  url: "".concat(k, "/capcode"),
                  headers: ai,
                  body: JSON.stringify(ac)
                };
                $.post(aj, function (ak, al, am) {
                  try {
                    ak ? (console.log("".concat(JSON.stringify(ak))), console.log("".concat($.name, " API请求失败，请检查网路重试"))) : ag(JSON.parse(am));
                  } catch (an) {
                    $.logErr(an, al);
                  } finally {
                    ag();
                  }
                });
              }));
            case 1:
            case "end":
              return ae.stop();
          }
        }
      }, ab);
    }));
    return W.apply(this, arguments);
  }
  function X() {
    var ah = new (l.loadJSEncrypt())();
    ah.setPublicKey("MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQD6XO7e9YeAOs+cFqwa7ETJ+WXizPqQeXv68i5vqw9pFREsrqiBTRcg7wB0RIp3rJkDpaeVJLsZqYm5TW7FWx/iOiXFc+zCPvaKZric2dXCw27EvlH5rq+zwIPDAJHGAfnn1nmQH7wR3PCatEIb8pz5GFlTHMlluw4ZYmnOwg+thwIDAQAB");
    r = ah.encrypt(r);
    var ad = a0();
    var ae = "client_id=".concat(v, "&password=").concat(r, "&phone_number=").concat(q);
    var af = "post%%/web/oauth/credential_auth?".concat(ae, "%%").concat(ad, "%%");
    ae = "client_id=".concat(v, "&password=").concat(encodeURIComponent(r), "&phone_number=").concat(q);
    CryptoJS = l.createCryptoJS();
    var ai = CryptoJS.HmacSHA256(af, m);
    var aj = CryptoJS.enc.Hex.stringify(ai);
    var ag = {
      uuid: ad,
      signature: aj,
      body: ae
    };
    return ag;
  }
  function Y(ab) {
    var ac = a0();
    var ad = Date.now();
    ab.indexOf("?") > 0 && (ab = ab.substring(0, ab.indexOf("?")));
    CryptoJS = l.createCryptoJS();
    var ae = CryptoJS.SHA256("".concat(ab, "&&").concat(o, "&&").concat(ac, "&&").concat(ad, "&&").concat(w, "&&").concat(u)).toString();
    var af = {
      uuid: ac,
      time: ad,
      signature: ae
    };
    return af;
  }
  function Z() {
    var ab = Date.now();
    var ac = a6(32, false);
    var ad = "haiyan".concat(ac).concat(ab, "2803cb8d50798c80b66ecd70da7e5fb1");
    var ae = l.md5(ad);
    return "haiyan;".concat(ac, ";").concat(ab, ";").concat(ae);
  }
  function a0() {
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (ab) {
      var ac = 16 * Math.random() | 0;
      var ad = "x" === ab ? ac : 3 & ac | 8;
      return ad.toString(16);
    });
  }
  function a1(ab, ac, ad) {
    var ae = l.createCryptoJS();
    var af = ae.enc.Utf8.parse(ac);
    var ag = ae.enc.Utf8.parse(ad);
    var ah = ae.enc.Utf8.parse(JSON.stringify(ab));
    var ai = ae.AES.encrypt(ah, af, {
      iv: ag,
      mode: ae.mode.CBC,
      padding: ae.pad.Pkcs7
    });
    return ae.enc.Base64.stringify(ai.ciphertext);
  }
  function a2(ab) {
    return ab[Math.floor(Math.random() * ab.length)];
  }
  function a3() {
    var ab = "3.0.61.0";
    var ac = a0();
    var ad = a2(["M1903F2A", "M2001J2E", "M2001J2C", "M2001J1E", "M2001J1C", "M2002J9E", "M2011K2C", "M2102K1C", "M2101K9C", "2107119DC", "2201123C", "2112123AC", "2201122C", "2211133C", "2210132C", "2304FPN6DC", "23127PN0CC", "24031PN0DC", "23090RA98C", "2312DRA50C", "2312CRAD3C", "2312DRAABC", "22101316UCP", "22101316C"]);
    var ae = "Xiaomi " + ad;
    var af = "Android";
    var ag = "".concat(af.toUpperCase(), ";").concat("11", ";").concat(v, ";").concat(ab, ";1.0;null;").concat(ad);
    var ah = "".concat(ab, ";").concat(ac, ";").concat(ae, ";").concat(af, ";").concat("11", ";Release;").concat("6.12.0");
    var ai = {
      ua: ag,
      commonUa: ah
    };
    return ai;
  }
  function a4() {
    var ab = arguments.length > 0 && undefined !== arguments[0] ? arguments[0] : {};
    var ac = [];
    for (var ad in ab) {
      var ae = ab[ad];
      ac.push(ad + "=" + a5(ae));
    }
    return ac.length ? "" + ac.join("&") : "";
  }
  function a5(ab) {
    ab = (ab + "").toString();
    return encodeURIComponent(ab).replace(/!/g, "%21").replace(/'/g, "%27").replace(/\(/g, "%28").replace(/\)/g, "%29").replace(/\*/g, "%2A").replace(/%20/g, "+").replace(/~/g, "%7E");
  }
  function a6() {
    var ab = arguments.length > 0 && undefined !== arguments[0] ? arguments[0] : 32;
    var ac = !(arguments.length > 1 && undefined !== arguments[1]) || arguments[1];
    var ad = arguments.length > 2 && undefined !== arguments[2] ? arguments[2] : null;
    var ae = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split("");
    var af = [];
    if (ad = ad || ae.length, ab) {
      for (var ag = 0; ag < ab; ag++) {
        af[ag] = ae[0 | Math.random() * ad];
      }
    } else {
      var ah;
      af[8] = af[13] = af[18] = af[23] = "-";
      af[14] = "4";
      for (var ai = 0; ai < 36; ai++) {
        af[ai] || (ah = 0 | 16 * Math.random(), af[ai] = ae[19 == ai ? 3 & ah | 8 : ah]);
      }
    }
    return ac ? (af.shift(), "u" + af.join("")) : af.join("");
  }
  function a7() {
    return a8.apply(this, arguments);
  }
  function a8() {
    a8 = i(g().mark(function ac() {
      var ad;
      return g().wrap(function ae(af) {
        for (;;) {
          switch (af.prev = af.next) {
            case 0:
              if (ad = $.getdata("Utils_Code") || "", !ad || !Object.keys(ad).length) {
                af.next = 5;
                break;
              }
              console.log("✅ ".concat($.name, ": 缓存中存在Utils代码, 跳过下载"));
              eval(ad);
              return af.abrupt("return", creatUtils());
            case 5:
              console.log("🚀 ".concat($.name, ": 开始下载Utils代码"));
              return af.abrupt("return", new Promise(function () {
                var ah = i(g().mark(function ai(aj) {
                  return g().wrap(function al(am) {
                    for (;;) {
                      switch (am.prev = am.next) {
                        case 0:
                          $.getScript("https://mirror.ghproxy.com/https://raw.githubusercontent.com/xzxxn777/Surge/main/Utils/Utils.js").then(function (an) {
                            $.setdata(an, "Utils_Code");
                            eval(an);
                            console.log("✅ Utils加载成功, 请继续");
                            aj(creatUtils());
                          });
                        case 1:
                        case "end":
                          return am.stop();
                      }
                    }
                  }, ai);
                }));
                return function (aj) {
                  return ah.apply(this, arguments);
                };
              }()));
            case 7:
            case "end":
              return af.stop();
          }
        }
      }, ac);
    }));
    return a8.apply(this, arguments);
  }
  function a9(ab) {
    return aa.apply(this, arguments);
  }
  function aa() {
    aa = i(g().mark(function ab(ac) {
      return g().wrap(function (af) {
        for (;;) {
          switch (af.prev = af.next) {
            case 0:
              if (!$.isNode()) {
                af.next = 5;
                break;
              }
              af.next = 3;
              return notify.sendNotify($.name, ac);
            case 3:
              af.next = 6;
              break;
            case 5:
              $.msg($.name, "", ac);
            case 6:
            case "end":
              return af.stop();
          }
        }
      }, ab);
    }));
    return aa.apply(this, arguments);
  }
  i(g().mark(function ab() {
    return g().wrap(function (ac) {
      for (;;) {
        switch (ac.prev = ac.next) {
          case 0:
            ac.next = 2;
            return E();
          case 2:
          case "end":
            return ac.stop();
        }
      }
    }, ab);
  }))().catch(function (ac) {
    $.log(ac);
  }).finally(function () {
    $.done({});
  });
})();
function Env(t, e) {
  class s {
    constructor(t) {
      this.env = t;
    }
    send(t, e = "GET") {
      t = "string" == typeof t ? {
        url: t
      } : t;
      let s = this.get;
      "POST" === e && (s = this.post);
      return new Promise((e, i) => {
        s.call(this, t, (t, s, o) => {
          t ? i(t) : e(s);
        });
      });
    }
    get(t) {
      return this.send.call(this.env, t);
    }
    post(t) {
      return this.send.call(this.env, t, "POST");
    }
  }
  return new class {
    constructor(t, e) {
      this.logLevels = {
        debug: 0,
        info: 1,
        warn: 2,
        error: 3
      };
      this.logLevelPrefixs = {
        debug: "[DEBUG] ",
        info: "[INFO] ",
        warn: "[WARN] ",
        error: "[ERROR] "
      };
      this.logLevel = "info";
      this.name = t;
      this.http = new s(this);
      this.data = null;
      this.dataFile = "box.dat";
      this.logs = [];
      this.isMute = false;
      this.isNeedRewrite = false;
      this.logSeparator = "\n";
      this.encoding = "utf-8";
      this.startTime = new Date().getTime();
      Object.assign(this, e);
      this.log("", `🔔${this.name}, 开始!`);
    }
    getEnv() {
      return "undefined" != typeof $environment && $environment["surge-version"] ? "Surge" : "undefined" != typeof $environment && $environment["stash-version"] ? "Stash" : "undefined" != typeof module && module.exports ? "Node.js" : "undefined" != typeof $task ? "Quantumult X" : "undefined" != typeof $loon ? "Loon" : "undefined" != typeof $rocket ? "Shadowrocket" : undefined;
    }
    isNode() {
      return "Node.js" === this.getEnv();
    }
    isQuanX() {
      return "Quantumult X" === this.getEnv();
    }
    isSurge() {
      return "Surge" === this.getEnv();
    }
    isLoon() {
      return "Loon" === this.getEnv();
    }
    isShadowrocket() {
      return "Shadowrocket" === this.getEnv();
    }
    isStash() {
      return "Stash" === this.getEnv();
    }
    toObj(t, e = null) {
      try {
        return JSON.parse(t);
      } catch {
        return e;
      }
    }
    toStr(t, e = null, ...s) {
      try {
        return JSON.stringify(t, ...s);
      } catch {
        return e;
      }
    }
    getjson(t, e) {
      let s = e;
      if (this.getdata(t)) {
        try {
          s = JSON.parse(this.getdata(t));
        } catch {}
      }
      return s;
    }
    setjson(t, e) {
      try {
        return this.setdata(JSON.stringify(t), e);
      } catch {
        return false;
      }
    }
    getScript(t) {
      return new Promise(e => {
        this.get({
          url: t
        }, (t, s, i) => e(i));
      });
    }
    runScript(t, e) {
      return new Promise(s => {
        let i = this.getdata("@chavy_boxjs_userCfgs.httpapi");
        i = i ? i.replace(/\n/g, "").trim() : i;
        let o = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");
        o = o ? 1 * o : 20;
        o = e && e.timeout ? e.timeout : o;
        const [r, a] = i.split("@");
        const n = {
          url: `http://${a}/v1/scripting/evaluate`,
          body: {
            script_text: t,
            mock_type: "cron",
            timeout: o
          },
          headers: {
            "X-Key": r,
            Accept: "*/*"
          },
          timeout: o
        };
        this.post(n, (t, e, i) => s(i));
      }).catch(t => this.logErr(t));
    }
    loaddata() {
      if (!this.isNode()) {
        return {};
      }
      {
        this.fs = this.fs ? this.fs : require("fs");
        this.path = this.path ? this.path : require("path");
        const t = this.path.resolve(this.dataFile);
        const e = this.path.resolve(process.cwd(), this.dataFile);
        const s = this.fs.existsSync(t);
        const i = !s && this.fs.existsSync(e);
        if (!s && !i) {
          return {};
        }
        {
          const i = s ? t : e;
          try {
            return JSON.parse(this.fs.readFileSync(i));
          } catch (t) {
            return {};
          }
        }
      }
    }
    writedata() {
      if (this.isNode()) {
        this.fs = this.fs ? this.fs : require("fs");
        this.path = this.path ? this.path : require("path");
        const t = this.path.resolve(this.dataFile);
        const e = this.path.resolve(process.cwd(), this.dataFile);
        const s = this.fs.existsSync(t);
        const i = !s && this.fs.existsSync(e);
        const o = JSON.stringify(this.data);
        s ? this.fs.writeFileSync(t, o) : i ? this.fs.writeFileSync(e, o) : this.fs.writeFileSync(t, o);
      }
    }
    lodash_get(t, e, s) {
      const i = e.replace(/\[(\d+)\]/g, ".$1").split(".");
      let o = t;
      for (const t of i) if (o = Object(o)[t], undefined === o) {
        return s;
      }
      return o;
    }
    lodash_set(t, e, s) {
      Object(t) !== t || (Array.isArray(e) || (e = e.toString().match(/[^.[\]]+/g) || []), e.slice(0, -1).reduce((t, s, i) => Object(t[s]) === t[s] ? t[s] : t[s] = Math.abs(e[i + 1]) >> 0 == +e[i + 1] ? [] : {}, t)[e[e.length - 1]] = s);
      return t;
    }
    getdata(t) {
      let e = this.getval(t);
      if (/^@/.test(t)) {
        const [, s, i] = /^@(.*?)\.(.*?)$/.exec(t);
        const o = s ? this.getval(s) : "";
        if (o) {
          try {
            const t = JSON.parse(o);
            e = t ? this.lodash_get(t, i, "") : e;
          } catch (t) {
            e = "";
          }
        }
      }
      return e;
    }
    setdata(t, e) {
      let s = false;
      if (/^@/.test(e)) {
        const [, i, o] = /^@(.*?)\.(.*?)$/.exec(e);
        const r = this.getval(i);
        const a = i ? "null" === r ? null : r || "{}" : "{}";
        try {
          const e = JSON.parse(a);
          this.lodash_set(e, o, t);
          s = this.setval(JSON.stringify(e), i);
        } catch (e) {
          const r = {};
          this.lodash_set(r, o, t);
          s = this.setval(JSON.stringify(r), i);
        }
      } else {
        s = this.setval(t, e);
      }
      return s;
    }
    getval(t) {
      switch (this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
          return $persistentStore.read(t);
        case "Quantumult X":
          return $prefs.valueForKey(t);
        case "Node.js":
          this.data = this.loaddata();
          return this.data[t];
        default:
          return this.data && this.data[t] || null;
      }
    }
    setval(t, e) {
      switch (this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
          return $persistentStore.write(t, e);
        case "Quantumult X":
          return $prefs.setValueForKey(t, e);
        case "Node.js":
          this.data = this.loaddata();
          this.data[e] = t;
          this.writedata();
          return true;
        default:
          return this.data && this.data[e] || null;
      }
    }
    initGotEnv(t) {
      this.got = this.got ? this.got : require("got");
      this.cktough = this.cktough ? this.cktough : require("tough-cookie");
      this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar();
      t && (t.headers = t.headers ? t.headers : {}, t && (t.headers = t.headers ? t.headers : {}, undefined === t.headers.cookie && undefined === t.headers.Cookie && undefined === t.cookieJar && (t.cookieJar = this.ckjar)));
    }
    get(t, e = () => {}) {
      switch (t.headers && (delete t.headers["Content-Type"], delete t.headers["Content-Length"], delete t.headers["content-type"], delete t.headers["content-length"]), t.params && (t.url += "?" + this.queryStr(t.params)), undefined === t.followRedirect || t.followRedirect || ((this.isSurge() || this.isLoon()) && (t["auto-redirect"] = false), this.isQuanX() && (t.opts ? t.opts.redirection = false : t.opts = {
        redirection: false
      })), this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
        default:
          this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {
            "X-Surge-Skip-Scripting": false
          }));
          $httpClient.get(t, (t, s, i) => {
            !t && s && (s.body = i, s.statusCode = s.status ? s.status : s.statusCode, s.status = s.statusCode);
            e(t, s, i);
          });
          break;
        case "Quantumult X":
          this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {
            hints: false
          }));
          $task.fetch(t).then(t => {
            const {
              statusCode: s,
              statusCode: i,
              headers: o,
              body: r,
              bodyBytes: a
            } = t;
            e(null, {
              status: s,
              statusCode: i,
              headers: o,
              body: r,
              bodyBytes: a
            }, r, a);
          }, t => e(t && t.error || "UndefinedError"));
          break;
        case "Node.js":
          let s = require("iconv-lite");
          this.initGotEnv(t);
          this.got(t).on("redirect", (t, e) => {
            try {
              if (t.headers["set-cookie"]) {
                const s = t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();
                s && this.ckjar.setCookieSync(s, null);
                e.cookieJar = this.ckjar;
              }
            } catch (t) {
              this.logErr(t);
            }
          }).then(t => {
            const {
              statusCode: i,
              statusCode: o,
              headers: r,
              rawBody: a
            } = t;
            const n = s.decode(a, this.encoding);
            e(null, {
              status: i,
              statusCode: o,
              headers: r,
              rawBody: a,
              body: n
            }, n);
          }, t => {
            const {
              message: i,
              response: o
            } = t;
            e(i, o, o && s.decode(o.rawBody, this.encoding));
          });
          break;
      }
    }
    post(t, e = () => {}) {
      const s = t.method ? t.method.toLocaleLowerCase() : "post";
      switch (t.body && t.headers && !t.headers["Content-Type"] && !t.headers["content-type"] && (t.headers["content-type"] = "application/x-www-form-urlencoded"), t.headers && (delete t.headers["Content-Length"], delete t.headers["content-length"]), undefined === t.followRedirect || t.followRedirect || ((this.isSurge() || this.isLoon()) && (t["auto-redirect"] = false), this.isQuanX() && (t.opts ? t.opts.redirection = false : t.opts = {
        redirection: false
      })), this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
        default:
          this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {
            "X-Surge-Skip-Scripting": false
          }));
          $httpClient[s](t, (t, s, i) => {
            !t && s && (s.body = i, s.statusCode = s.status ? s.status : s.statusCode, s.status = s.statusCode);
            e(t, s, i);
          });
          break;
        case "Quantumult X":
          t.method = s;
          this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {
            hints: false
          }));
          $task.fetch(t).then(t => {
            const {
              statusCode: s,
              statusCode: i,
              headers: o,
              body: r,
              bodyBytes: a
            } = t;
            e(null, {
              status: s,
              statusCode: i,
              headers: o,
              body: r,
              bodyBytes: a
            }, r, a);
          }, t => e(t && t.error || "UndefinedError"));
          break;
        case "Node.js":
          let i = require("iconv-lite");
          this.initGotEnv(t);
          const {
            url: o,
            ...r
          } = t;
          this.got[s](o, r).then(t => {
            const {
              statusCode: s,
              statusCode: o,
              headers: r,
              rawBody: a
            } = t;
            const n = i.decode(a, this.encoding);
            e(null, {
              status: s,
              statusCode: o,
              headers: r,
              rawBody: a,
              body: n
            }, n);
          }, t => {
            const {
              message: s,
              response: o
            } = t;
            e(s, o, o && i.decode(o.rawBody, this.encoding));
          });
          break;
      }
    }
    time(t, e = null) {
      const s = e ? new Date(e) : new Date();
      let i = {
        "M+": s.getMonth() + 1,
        "d+": s.getDate(),
        "H+": s.getHours(),
        "m+": s.getMinutes(),
        "s+": s.getSeconds(),
        "q+": Math.floor((s.getMonth() + 3) / 3),
        S: s.getMilliseconds()
      };
      /(y+)/.test(t) && (t = t.replace(RegExp.$1, (s.getFullYear() + "").substr(4 - RegExp.$1.length)));
      for (let e in i) new RegExp("(" + e + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? i[e] : ("00" + i[e]).substr(("" + i[e]).length)));
      return t;
    }
    queryStr(t) {
      let e = "";
      for (const s in t) {
        let i = t[s];
        null != i && "" !== i && ("object" == typeof i && (i = JSON.stringify(i)), e += `${s}=${i}&`);
      }
      e = e.substring(0, e.length - 1);
      return e;
    }
    msg(e = t, s = "", i = "", o = {}) {
      const r = t => {
        const {
          $open: e,
          $copy: s,
          $media: i,
          $mediaMime: o
        } = t;
        switch (typeof t) {
          case undefined:
            return t;
          case "string":
            switch (this.getEnv()) {
              case "Surge":
              case "Stash":
              default:
                return {
                  url: t
                };
              case "Loon":
              case "Shadowrocket":
                return t;
              case "Quantumult X":
                return {
                  "open-url": t
                };
              case "Node.js":
                return;
            }
          case "object":
            switch (this.getEnv()) {
              case "Surge":
              case "Stash":
              case "Shadowrocket":
              default:
                {
                  const r = {};
                  let a = t.openUrl || t.url || t["open-url"] || e;
                  a && Object.assign(r, {
                    action: "open-url",
                    url: a
                  });
                  let n = t["update-pasteboard"] || t.updatePasteboard || s;
                  if (n && Object.assign(r, {
                    action: "clipboard",
                    text: n
                  }), i) {
                    let t;
                    let e;
                    let s;
                    if (i.startsWith("http")) {
                      t = i;
                    } else {
                      if (i.startsWith("data:")) {
                        const [t] = i.split(";");
                        const [, o] = i.split(",");
                        e = o;
                        s = t.replace("data:", "");
                      } else {
                        e = i;
                        s = (t => {
                          const e = {
                            JVBERi0: "application/pdf",
                            R0lGODdh: "image/gif",
                            R0lGODlh: "image/gif",
                            iVBORw0KGgo: "image/png",
                            "/9j/": "image/jpg"
                          };
                          for (var s in e) if (0 === t.indexOf(s)) {
                            return e[s];
                          }
                          return null;
                        })(i);
                      }
                    }
                    Object.assign(r, {
                      "media-url": t,
                      "media-base64": e,
                      "media-base64-mime": o ?? s
                    });
                  }
                  Object.assign(r, {
                    "auto-dismiss": t["auto-dismiss"],
                    sound: t.sound
                  });
                  return r;
                }
              case "Loon":
                {
                  const s = {};
                  let o = t.openUrl || t.url || t["open-url"] || e;
                  o && Object.assign(s, {
                    openUrl: o
                  });
                  let r = t.mediaUrl || t["media-url"];
                  i?.startsWith("http") && (r = i);
                  r && Object.assign(s, {
                    mediaUrl: r
                  });
                  console.log(JSON.stringify(s));
                  return s;
                }
              case "Quantumult X":
                {
                  const o = {};
                  let r = t["open-url"] || t.url || t.openUrl || e;
                  r && Object.assign(o, {
                    "open-url": r
                  });
                  let a = t["media-url"] || t.mediaUrl;
                  i?.startsWith("http") && (a = i);
                  a && Object.assign(o, {
                    "media-url": a
                  });
                  let n = t["update-pasteboard"] || t.updatePasteboard || s;
                  n && Object.assign(o, {
                    "update-pasteboard": n
                  });
                  console.log(JSON.stringify(o));
                  return o;
                }
              case "Node.js":
                return;
            }
          default:
            return;
        }
      };
      if (!this.isMute) {
        switch (this.getEnv()) {
          case "Surge":
          case "Loon":
          case "Stash":
          case "Shadowrocket":
          default:
            $notification.post(e, s, i, r(o));
            break;
          case "Quantumult X":
            $notify(e, s, i, r(o));
            break;
          case "Node.js":
            break;
        }
      }
      if (!this.isMuteLog) {
        let t = ["", "==============📣系统通知📣=============="];
        t.push(e);
        s && t.push(s);
        i && t.push(i);
        console.log(t.join("\n"));
        this.logs = this.logs.concat(t);
      }
    }
    debug(...t) {
      this.logLevels[this.logLevel] <= this.logLevels.debug && (t.length > 0 && (this.logs = [...this.logs, ...t]), console.log(`${this.logLevelPrefixs.debug}${t.map(t => t ?? String(t)).join(this.logSeparator)}`));
    }
    info(...t) {
      this.logLevels[this.logLevel] <= this.logLevels.info && (t.length > 0 && (this.logs = [...this.logs, ...t]), console.log(`${this.logLevelPrefixs.info}${t.map(t => t ?? String(t)).join(this.logSeparator)}`));
    }
    warn(...t) {
      this.logLevels[this.logLevel] <= this.logLevels.warn && (t.length > 0 && (this.logs = [...this.logs, ...t]), console.log(`${this.logLevelPrefixs.warn}${t.map(t => t ?? String(t)).join(this.logSeparator)}`));
    }
    error(...t) {
      this.logLevels[this.logLevel] <= this.logLevels.error && (t.length > 0 && (this.logs = [...this.logs, ...t]), console.log(`${this.logLevelPrefixs.error}${t.map(t => t ?? String(t)).join(this.logSeparator)}`));
    }
    log(...t) {
      t.length > 0 && (this.logs = [...this.logs, ...t]);
      console.log(t.map(t => t ?? String(t)).join(this.logSeparator));
    }
    logErr(t, e) {
      switch (this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
        case "Quantumult X":
        default:
          this.log("", `❗️${this.name}, 错误!`, e, t);
          break;
        case "Node.js":
          this.log("", `❗️${this.name}, 错误!`, e, undefined !== t.message ? t.message : t, t.stack);
          break;
      }
    }
    wait(t) {
      return new Promise(e => setTimeout(e, t));
    }
    done(t = {}) {
      const e = (new Date().getTime() - this.startTime) / 1000;
      switch (this.log("", `🔔${this.name}, 结束! 🕛 ${e} 秒`), this.log(), this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
        case "Quantumult X":
        default:
          $done(t);
          break;
        case "Node.js":
          process.exit(1);
      }
    }
  }(t, e);
}