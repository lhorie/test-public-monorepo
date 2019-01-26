'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var App = require('fusion-core');
var App__default = _interopDefault(App);
var assert = _interopDefault(require('assert'));
var util = require('util');
var jwt = _interopDefault(require('jsonwebtoken'));
var get = _interopDefault(require('just-safe-get'));
var set = _interopDefault(require('just-safe-set'));
var tape = _interopDefault(require('tape-cup'));
var fusionTokens = require('fusion-tokens');
var http = require('http');
var fetch = _interopDefault(require('node-fetch'));

var cov_l7sthl7b9 = function () {
  var path = "/Users/lhorie/Documents/test-private-monorepo/public/fusion-plugin-jwt/src/jwt-browser.js",
      hash = "ae2845b96b9936840831c3d9da5ff4222ccd3dad",
      Function = function () {}.constructor,
      global = new Function('return this')(),
      gcv = "__coverage__",
      coverageData = {
    path: "/Users/lhorie/Documents/test-private-monorepo/public/fusion-plugin-jwt/src/jwt-browser.js",
    statementMap: {},
    fnMap: {},
    branchMap: {},
    s: {},
    f: {},
    b: {},
    _coverageSchema: "43e27e138ebf9cfc5966b082cf9a028302ed4184"
  },
      coverage = global[gcv] || (global[gcv] = {});

  if (coverage[path] && coverage[path].hash === hash) {
    return coverage[path];
  }

  coverageData.hash = hash;
  return coverage[path] = coverageData;
}();

var cov_10a8we1nno = function () {
  var path = "/Users/lhorie/Documents/test-private-monorepo/public/fusion-plugin-jwt/src/tokens.js",
      hash = "f7b799213d20e9297f768e3cbc33114d67e462d1",
      Function = function () {}.constructor,
      global = new Function('return this')(),
      gcv = "__coverage__",
      coverageData = {
    path: "/Users/lhorie/Documents/test-private-monorepo/public/fusion-plugin-jwt/src/tokens.js",
    statementMap: {
      "0": {
        start: {
          line: 12,
          column: 49
        },
        end: {
          line: 12,
          column: 77
        }
      },
      "1": {
        start: {
          line: 13,
          column: 53
        },
        end: {
          line: 15,
          column: 1
        }
      },
      "2": {
        start: {
          line: 16,
          column: 56
        },
        end: {
          line: 18,
          column: 1
        }
      }
    },
    fnMap: {},
    branchMap: {},
    s: {
      "0": 0,
      "1": 0,
      "2": 0
    },
    f: {},
    b: {},
    _coverageSchema: "43e27e138ebf9cfc5966b082cf9a028302ed4184"
  },
      coverage = global[gcv] || (global[gcv] = {});

  if (coverage[path] && coverage[path].hash === hash) {
    return coverage[path];
  }

  coverageData.hash = hash;
  return coverage[path] = coverageData;
}();

/** Copyright (c) 2018 Uber Technologies, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */
const SessionSecretToken = (cov_10a8we1nno.s[0]++, App.createToken('SessionSecret'));
const SessionCookieNameToken = (cov_10a8we1nno.s[1]++, App.createToken('SessionCookieName'));
const SessionCookieExpiresToken = (cov_10a8we1nno.s[2]++, App.createToken('SessionCookieExpires'));

var cov_pu9l06zxq = function () {
  var path = "/Users/lhorie/Documents/test-private-monorepo/public/fusion-plugin-jwt/src/jwt-server.js",
      hash = "b6ec0cf8fe64095608af611ec1f7c749212ed878",
      Function = function () {}.constructor,
      global = new Function('return this')(),
      gcv = "__coverage__",
      coverageData = {
    path: "/Users/lhorie/Documents/test-private-monorepo/public/fusion-plugin-jwt/src/jwt-server.js",
    statementMap: {
      "0": {
        start: {
          line: 28,
          column: 20
        },
        end: {
          line: 28,
          column: 48
        }
      },
      "1": {
        start: {
          line: 28,
          column: 31
        },
        end: {
          line: 28,
          column: 48
        }
      },
      "2": {
        start: {
          line: 42,
          column: 4
        },
        end: {
          line: 42,
          column: 25
        }
      },
      "3": {
        start: {
          line: 43,
          column: 4
        },
        end: {
          line: 43,
          column: 58
        }
      },
      "4": {
        start: {
          line: 44,
          column: 4
        },
        end: {
          line: 44,
          column: 22
        }
      },
      "5": {
        start: {
          line: 47,
          column: 4
        },
        end: {
          line: 52,
          column: 5
        }
      },
      "6": {
        start: {
          line: 48,
          column: 21
        },
        end: {
          line: 48,
          column: 52
        }
      },
      "7": {
        start: {
          line: 49,
          column: 6
        },
        end: {
          line: 51,
          column: 13
        }
      },
      "8": {
        start: {
          line: 50,
          column: 69
        },
        end: {
          line: 50,
          column: 71
        }
      },
      "9": {
        start: {
          line: 53,
          column: 4
        },
        end: {
          line: 53,
          column: 22
        }
      },
      "10": {
        start: {
          line: 56,
          column: 4
        },
        end: {
          line: 59,
          column: 6
        }
      },
      "11": {
        start: {
          line: 60,
          column: 4
        },
        end: {
          line: 60,
          column: 49
        }
      },
      "12": {
        start: {
          line: 63,
          column: 4
        },
        end: {
          line: 66,
          column: 6
        }
      },
      "13": {
        start: {
          line: 67,
          column: 4
        },
        end: {
          line: 67,
          column: 54
        }
      },
      "14": {
        start: {
          line: 73,
          column: 2
        },
        end: {
          line: 114,
          column: 4
        }
      },
      "15": {
        start: {
          line: 81,
          column: 52
        },
        end: {
          line: 81,
          column: 56
        }
      },
      "16": {
        start: {
          line: 82,
          column: 38
        },
        end: {
          line: 86,
          column: 7
        }
      },
      "17": {
        start: {
          line: 84,
          column: 10
        },
        end: {
          line: 84,
          column: 68
        }
      },
      "18": {
        start: {
          line: 87,
          column: 6
        },
        end: {
          line: 87,
          column: 21
        }
      },
      "19": {
        start: {
          line: 90,
          column: 52
        },
        end: {
          line: 90,
          column: 56
        }
      },
      "20": {
        start: {
          line: 91,
          column: 6
        },
        end: {
          line: 112,
          column: 8
        }
      },
      "21": {
        start: {
          line: 95,
          column: 21
        },
        end: {
          line: 95,
          column: 50
        }
      },
      "22": {
        start: {
          line: 96,
          column: 24
        },
        end: {
          line: 96,
          column: 41
        }
      },
      "23": {
        start: {
          line: 97,
          column: 22
        },
        end: {
          line: 97,
          column: 47
        }
      },
      "24": {
        start: {
          line: 98,
          column: 8
        },
        end: {
          line: 98,
          column: 21
        }
      },
      "25": {
        start: {
          line: 99,
          column: 8
        },
        end: {
          line: 111,
          column: 9
        }
      },
      "26": {
        start: {
          line: 101,
          column: 10
        },
        end: {
          line: 101,
          column: 27
        }
      },
      "27": {
        start: {
          line: 102,
          column: 23
        },
        end: {
          line: 102,
          column: 33
        }
      },
      "28": {
        start: {
          line: 103,
          column: 25
        },
        end: {
          line: 105,
          column: 12
        }
      },
      "29": {
        start: {
          line: 106,
          column: 10
        },
        end: {
          line: 110,
          column: 11
        }
      },
      "30": {
        start: {
          line: 107,
          column: 30
        },
        end: {
          line: 107,
          column: 61
        }
      },
      "31": {
        start: {
          line: 109,
          column: 12
        },
        end: {
          line: 109,
          column: 70
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 28,
            column: 20
          },
          end: {
            line: 28,
            column: 21
          }
        },
        loc: {
          start: {
            line: 28,
            column: 31
          },
          end: {
            line: 28,
            column: 48
          }
        },
        line: 28
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 41,
            column: 2
          },
          end: {
            line: 41,
            column: 3
          }
        },
        loc: {
          start: {
            line: 41,
            column: 47
          },
          end: {
            line: 45,
            column: 3
          }
        },
        line: 41
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 46,
            column: 2
          },
          end: {
            line: 46,
            column: 3
          }
        },
        loc: {
          start: {
            line: 46,
            column: 20
          },
          end: {
            line: 54,
            column: 3
          }
        },
        line: 46
      },
      "3": {
        name: "(anonymous_3)",
        decl: {
          start: {
            line: 50,
            column: 62
          },
          end: {
            line: 50,
            column: 63
          }
        },
        loc: {
          start: {
            line: 50,
            column: 69
          },
          end: {
            line: 50,
            column: 71
          }
        },
        line: 50
      },
      "4": {
        name: "(anonymous_4)",
        decl: {
          start: {
            line: 55,
            column: 2
          },
          end: {
            line: 55,
            column: 3
          }
        },
        loc: {
          start: {
            line: 55,
            column: 30
          },
          end: {
            line: 61,
            column: 3
          }
        },
        line: 55
      },
      "5": {
        name: "(anonymous_5)",
        decl: {
          start: {
            line: 62,
            column: 2
          },
          end: {
            line: 62,
            column: 3
          }
        },
        loc: {
          start: {
            line: 62,
            column: 44
          },
          end: {
            line: 68,
            column: 3
          }
        },
        line: 62
      },
      "6": {
        name: "(anonymous_6)",
        decl: {
          start: {
            line: 80,
            column: 14
          },
          end: {
            line: 80,
            column: 15
          }
        },
        loc: {
          start: {
            line: 80,
            column: 22
          },
          end: {
            line: 88,
            column: 5
          }
        },
        line: 80
      },
      "7": {
        name: "(anonymous_7)",
        decl: {
          start: {
            line: 83,
            column: 22
          },
          end: {
            line: 83,
            column: 23
          }
        },
        loc: {
          start: {
            line: 83,
            column: 40
          },
          end: {
            line: 85,
            column: 9
          }
        },
        line: 83
      },
      "8": {
        name: "(anonymous_8)",
        decl: {
          start: {
            line: 89,
            column: 16
          },
          end: {
            line: 89,
            column: 17
          }
        },
        loc: {
          start: {
            line: 89,
            column: 35
          },
          end: {
            line: 113,
            column: 5
          }
        },
        line: 89
      },
      "9": {
        name: "jwtMiddleware",
        decl: {
          start: {
            line: 91,
            column: 28
          },
          end: {
            line: 91,
            column: 41
          }
        },
        loc: {
          start: {
            line: 94,
            column: 8
          },
          end: {
            line: 112,
            column: 7
          }
        },
        line: 94
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 47,
            column: 4
          },
          end: {
            line: 52,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 47,
            column: 4
          },
          end: {
            line: 52,
            column: 5
          }
        }, {
          start: {
            line: 47,
            column: 4
          },
          end: {
            line: 52,
            column: 5
          }
        }],
        line: 47
      },
      "1": {
        loc: {
          start: {
            line: 49,
            column: 19
          },
          end: {
            line: 51,
            column: 12
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 50,
            column: 10
          },
          end: {
            line: 50,
            column: 73
          }
        }, {
          start: {
            line: 51,
            column: 10
          },
          end: {
            line: 51,
            column: 12
          }
        }],
        line: 49
      },
      "2": {
        loc: {
          start: {
            line: 73,
            column: 2
          },
          end: {
            line: 114,
            column: 4
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 73,
            column: 2
          },
          end: {
            line: 73,
            column: 10
          }
        }, {
          start: {
            line: 74,
            column: 2
          },
          end: {
            line: 114,
            column: 4
          }
        }],
        line: 73
      },
      "3": {
        loc: {
          start: {
            line: 81,
            column: 33
          },
          end: {
            line: 81,
            column: 48
          }
        },
        type: "default-arg",
        locations: [{
          start: {
            line: 81,
            column: 43
          },
          end: {
            line: 81,
            column: 48
          }
        }],
        line: 81
      },
      "4": {
        loc: {
          start: {
            line: 90,
            column: 33
          },
          end: {
            line: 90,
            column: 48
          }
        },
        type: "default-arg",
        locations: [{
          start: {
            line: 90,
            column: 43
          },
          end: {
            line: 90,
            column: 48
          }
        }],
        line: 90
      },
      "5": {
        loc: {
          start: {
            line: 99,
            column: 8
          },
          end: {
            line: 111,
            column: 9
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 99,
            column: 8
          },
          end: {
            line: 111,
            column: 9
          }
        }, {
          start: {
            line: 99,
            column: 8
          },
          end: {
            line: 111,
            column: 9
          }
        }],
        line: 99
      },
      "6": {
        loc: {
          start: {
            line: 106,
            column: 10
          },
          end: {
            line: 110,
            column: 11
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 106,
            column: 10
          },
          end: {
            line: 110,
            column: 11
          }
        }, {
          start: {
            line: 106,
            column: 10
          },
          end: {
            line: 110,
            column: 11
          }
        }],
        line: 106
      }
    },
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0,
      "7": 0,
      "8": 0,
      "9": 0,
      "10": 0,
      "11": 0,
      "12": 0,
      "13": 0,
      "14": 0,
      "15": 0,
      "16": 0,
      "17": 0,
      "18": 0,
      "19": 0,
      "20": 0,
      "21": 0,
      "22": 0,
      "23": 0,
      "24": 0,
      "25": 0,
      "26": 0,
      "27": 0,
      "28": 0,
      "29": 0,
      "30": 0,
      "31": 0
    },
    f: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0,
      "7": 0,
      "8": 0,
      "9": 0
    },
    b: {
      "0": [0, 0],
      "1": [0, 0],
      "2": [0, 0],
      "3": [0],
      "4": [0],
      "5": [0, 0],
      "6": [0, 0]
    },
    _coverageSchema: "43e27e138ebf9cfc5966b082cf9a028302ed4184"
  },
      coverage = global[gcv] || (global[gcv] = {});

  if (coverage[path] && coverage[path].hash === hash) {
    return coverage[path];
  }

  coverageData.hash = hash;
  return coverage[path] = coverageData;
}();

/** Copyright (c) 2018 Uber Technologies, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

/* eslint-env node */
cov_pu9l06zxq.s[0]++;

// Scope path to `data.` here since `jsonwebtoken` has some special top-level keys that we do not want to expose (ex: `exp`)
const getFullPath = keyPath => {
  cov_pu9l06zxq.f[0]++;
  cov_pu9l06zxq.s[1]++;
  return `data.${keyPath}`;
};

class JWTSession {
  constructor(ctx, config) {
    cov_pu9l06zxq.f[1]++;
    cov_pu9l06zxq.s[2]++;
    this.config = config;
    cov_pu9l06zxq.s[3]++;
    this.cookie = ctx.cookies.get(this.config.cookieName);
    cov_pu9l06zxq.s[4]++;
    this.token = null;
  }

  async loadToken() {
    cov_pu9l06zxq.f[2]++;
    cov_pu9l06zxq.s[5]++;

    if (this.token == null) {
      cov_pu9l06zxq.b[0][0]++;
      const verify = (cov_pu9l06zxq.s[6]++, util.promisify(jwt.verify.bind(jwt)));
      cov_pu9l06zxq.s[7]++;
      this.token = this.cookie ? (cov_pu9l06zxq.b[1][0]++, await verify(this.cookie, this.config.secret).catch(() => {
        cov_pu9l06zxq.f[3]++;
        cov_pu9l06zxq.s[8]++;
        return {};
      })) : (cov_pu9l06zxq.b[1][1]++, {});
    } else {
      cov_pu9l06zxq.b[0][1]++;
    }

    cov_pu9l06zxq.s[9]++;
    return this.token;
  }

  get(keyPath) {
    cov_pu9l06zxq.f[4]++;
    cov_pu9l06zxq.s[10]++;
    assert(this.token, "Cannot access token before loaded, please use this plugin before any of it's dependencies");
    cov_pu9l06zxq.s[11]++;
    return get(this.token, getFullPath(keyPath));
  }

  set(keyPath, val) {
    cov_pu9l06zxq.f[5]++;
    cov_pu9l06zxq.s[12]++;
    assert(this.token, "Cannot access token before loaded, please use this plugin before any of it's dependencies");
    cov_pu9l06zxq.s[13]++;
    return set(this.token, getFullPath(keyPath), val);
  }

}

const p = ( // $FlowFixMe
cov_pu9l06zxq.s[14]++, (cov_pu9l06zxq.b[2][0]++, true) && (cov_pu9l06zxq.b[2][1]++, App.createPlugin({
  deps: {
    secret: SessionSecretToken,
    cookieName: SessionCookieNameToken,
    expires: SessionCookieExpiresToken.optional
  },
  provides: deps => {
    cov_pu9l06zxq.f[6]++;
    const {
      secret,
      cookieName,
      expires = (cov_pu9l06zxq.b[3][0]++, 86400)
    } = (cov_pu9l06zxq.s[15]++, deps);
    const service = (cov_pu9l06zxq.s[16]++, {
      from: App.memoize(ctx => {
        cov_pu9l06zxq.f[7]++;
        cov_pu9l06zxq.s[17]++;
        return new JWTSession(ctx, {
          secret,
          cookieName,
          expires
        });
      })
    });
    cov_pu9l06zxq.s[18]++;
    return service;
  },
  middleware: (deps, service) => {
    cov_pu9l06zxq.f[8]++;
    const {
      secret,
      cookieName,
      expires = (cov_pu9l06zxq.b[4][0]++, 86400)
    } = (cov_pu9l06zxq.s[19]++, deps);
    cov_pu9l06zxq.s[20]++;
    return async function jwtMiddleware(ctx, next) {
      cov_pu9l06zxq.f[9]++;
      const sign = (cov_pu9l06zxq.s[21]++, util.promisify(jwt.sign.bind(jwt)));
      const session = (cov_pu9l06zxq.s[22]++, service.from(ctx));
      const token = (cov_pu9l06zxq.s[23]++, await session.loadToken());
      cov_pu9l06zxq.s[24]++;
      await next();
      cov_pu9l06zxq.s[25]++;

      if (token) {
        cov_pu9l06zxq.b[5][0]++;
        cov_pu9l06zxq.s[26]++;
        // $FlowFixMe
        delete token.exp; // Clear previous exp time and instead use `expiresIn` option below

        const time = (cov_pu9l06zxq.s[27]++, Date.now()); // get time *before* async signing

        const signed = (cov_pu9l06zxq.s[28]++, await sign(token, secret, {
          expiresIn: expires
        }));
        cov_pu9l06zxq.s[29]++;

        if (signed !== session.cookie) {
          cov_pu9l06zxq.b[6][0]++;
          const msExpires = (cov_pu9l06zxq.s[30]++, new Date(time + expires * 1000)); // TODO(#3) provide way to not set cookie if not needed yet

          cov_pu9l06zxq.s[31]++;
          ctx.cookies.set(cookieName, signed, {
            expires: msExpires
          });
        } else {
          cov_pu9l06zxq.b[6][1]++;
        }
      } else {
        cov_pu9l06zxq.b[5][1]++;
      }
    };
  }
})));

var cov_k6g3l1p11 = function () {
  var path = "/Users/lhorie/Documents/test-private-monorepo/public/fusion-plugin-jwt/src/index.js",
      hash = "f926287bb537462401331775ff948a4eff693729",
      Function = function () {}.constructor,
      global = new Function('return this')(),
      gcv = "__coverage__",
      coverageData = {
    path: "/Users/lhorie/Documents/test-private-monorepo/public/fusion-plugin-jwt/src/index.js",
    statementMap: {},
    fnMap: {},
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 19,
            column: 16
          },
          end: {
            line: 19,
            column: 46
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 19,
            column: 30
          },
          end: {
            line: 19,
            column: 37
          }
        }, {
          start: {
            line: 19,
            column: 40
          },
          end: {
            line: 19,
            column: 46
          }
        }],
        line: 19
      }
    },
    s: {},
    f: {},
    b: {
      "0": [0, 0]
    },
    _coverageSchema: "43e27e138ebf9cfc5966b082cf9a028302ed4184"
  },
      coverage = global[gcv] || (global[gcv] = {});

  if (coverage[path] && coverage[path].hash === hash) {
    return coverage[path];
  }

  coverageData.hash = hash;
  return coverage[path] = coverageData;
}();

/** Copyright (c) 2018 Uber Technologies, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */
// Main export file
var JWTServer = (cov_k6g3l1p11.b[0][1]++, p);

/** Copyright (c) 2018 Uber Technologies, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */
tape('registers against session token', t => {
  const app = new App__default('fake-element', el => el);
  app.register(fusionTokens.SessionToken, JWTServer);
  t.end();
});

/** Copyright (c) 2018 Uber Technologies, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */
tape('interface', t => {
  t.ok(JWTServer, 'exports a default plugin');
  t.ok(SessionCookieExpiresToken, 'exports SessionCookieExpiresToken');
  t.ok(SessionCookieNameToken, 'exports SessionCookieNameToken');
  t.ok(SessionSecretToken, 'exports SessionSecretToken');
  t.end();
});

/** Copyright (c) 2018 Uber Technologies, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */
const JWTToken = App.createToken('Session');
tape('JWTServer', async t => {
  const app = new App__default('fake-element', el => el);
  app.register(SessionSecretToken, 'session-secret');
  app.register(SessionCookieNameToken, 'cookie-name');
  app.register(SessionCookieExpiresToken, 86300);
  app.register(JWTToken, JWTServer);
  let count = 0;
  app.middleware({
    Session: JWTToken
  }, ({
    Session
  }) => (ctx, next) => {
    count++;
    const session = Session.from(ctx);

    if (count === 2) {
      t.equal(session.get('test-something'), 'test-value');
    }

    session.set('test-something', 'test-value');
    ctx.body = 'OK';
    return next();
  });
  const cb = app.callback(); // $FlowFixMe

  const server = http.createServer(cb);
  await new Promise(resolve => server.listen(3000, resolve));
  let res = await fetch('http://localhost:3000/');
  t.ok(res.headers.get('set-cookie'), 'generates a session');
  t.equal(res.status, 200);
  res = await fetch('http://localhost:3000/', {
    headers: {
      Cookie: res.headers.get('set-cookie')
    }
  });
  t.equal(res.status, 200);
  server.close();
  t.end();
});
tape('JWTServer with expired token', async t => {
  const app = new App__default('fake-element', el => el);
  app.register(SessionSecretToken, 'session-secret');
  app.register(SessionCookieNameToken, 'cookie-name');
  app.register(SessionCookieExpiresToken, 1);
  app.register(JWTToken, JWTServer);
  let count = 0;
  app.middleware({
    Session: JWTToken
  }, ({
    Session
  }) => (ctx, next) => {
    count++;
    const session = Session.from(ctx);

    if (count === 2) {
      t.notok(session.get('test-something'), 'does not set the session if it has expired');
    }

    session.set('test-something', 'test-value');
    ctx.body = 'OK';
    return next();
  });
  const cb = app.callback(); // $FlowFixMe

  const server = http.createServer(cb);
  await new Promise(resolve => server.listen(3000, resolve));
  let res = await fetch('http://localhost:3000/');
  t.ok(res.headers.get('set-cookie'), 'generates a session');
  t.equal(res.status, 200);
  await new Promise(resolve => setTimeout(resolve, 2000));
  res = await fetch('http://localhost:3000/', {
    headers: {
      Cookie: res.headers.get('set-cookie')
    }
  });
  t.equal(res.status, 200);
  server.close();
  t.end();
});
//# sourceMappingURL=node.js.map
