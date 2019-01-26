'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var App = require('fusion-core');
var App__default = _interopDefault(App);
var test = _interopDefault(require('tape-cup'));
var fusionTokens = require('fusion-tokens');
var fusionTestUtils = require('fusion-test-utils');

var cov_n6m8zmq7a = function () {
  var path = "/Users/lhorie/Documents/test-private-monorepo/public/fusion-plugin-csrf-protection/src/shared.js",
      hash = "9cd47b9cbdd56cc27fe6fb6c3936782c0139094e",
      Function = function () {}.constructor,
      global = new Function('return this')(),
      gcv = "__coverage__",
      coverageData = {
    path: "/Users/lhorie/Documents/test-private-monorepo/public/fusion-plugin-csrf-protection/src/shared.js",
    statementMap: {
      "0": {
        start: {
          line: 12,
          column: 16
        },
        end: {
          line: 12,
          column: 54
        }
      },
      "1": {
        start: {
          line: 17,
          column: 2
        },
        end: {
          line: 17,
          column: 25
        }
      },
      "2": {
        start: {
          line: 19,
          column: 59
        },
        end: {
          line: 21,
          column: 1
        }
      }
    },
    fnMap: {
      "0": {
        name: "verifyMethod",
        decl: {
          start: {
            line: 14,
            column: 16
          },
          end: {
            line: 14,
            column: 28
          }
        },
        loc: {
          start: {
            line: 16,
            column: 27
          },
          end: {
            line: 18,
            column: 1
          }
        },
        line: 16
      }
    },
    branchMap: {},
    s: {
      "0": 0,
      "1": 0,
      "2": 0
    },
    f: {
      "0": 0
    },
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
const methods = (cov_n6m8zmq7a.s[0]++, {
  POST: 1,
  PUT: 1,
  PATCH: 1,
  DELETE: 1
});
function verifyMethod(method) {
  cov_n6m8zmq7a.f[0]++;
  cov_n6m8zmq7a.s[1]++;
  return methods[method];
}
const CsrfIgnoreRoutesToken = (cov_n6m8zmq7a.s[2]++, App.createToken('CsrfIgnoreRoutesToken'));

var cov_1uchqshkbi = function () {
  var path = "/Users/lhorie/Documents/test-private-monorepo/public/fusion-plugin-csrf-protection/src/server.js",
      hash = "ef867e9e433d87dca3218b26ae547b85e5143580",
      Function = function () {}.constructor,
      global = new Function('return this')(),
      gcv = "__coverage__",
      coverageData = {
    path: "/Users/lhorie/Documents/test-private-monorepo/public/fusion-plugin-csrf-protection/src/server.js",
    statementMap: {
      "0": {
        start: {
          line: 20,
          column: 17
        },
        end: {
          line: 57,
          column: 1
        }
      },
      "1": {
        start: {
          line: 23,
          column: 2
        },
        end: {
          line: 56,
          column: 5
        }
      },
      "2": {
        start: {
          line: 28,
          column: 6
        },
        end: {
          line: 30,
          column: 8
        }
      },
      "3": {
        start: {
          line: 29,
          column: 8
        },
        end: {
          line: 29,
          column: 75
        }
      },
      "4": {
        start: {
          line: 33,
          column: 29
        },
        end: {
          line: 33,
          column: 33
        }
      },
      "5": {
        start: {
          line: 34,
          column: 24
        },
        end: {
          line: 34,
          column: 40
        }
      },
      "6": {
        start: {
          line: 36,
          column: 6
        },
        end: {
          line: 54,
          column: 8
        }
      },
      "7": {
        start: {
          line: 37,
          column: 8
        },
        end: {
          line: 52,
          column: 9
        }
      },
      "8": {
        start: {
          line: 39,
          column: 10
        },
        end: {
          line: 39,
          column: 39
        }
      },
      "9": {
        start: {
          line: 40,
          column: 10
        },
        end: {
          line: 40,
          column: 27
        }
      },
      "10": {
        start: {
          line: 41,
          column: 10
        },
        end: {
          line: 41,
          column: 24
        }
      },
      "11": {
        start: {
          line: 42,
          column: 15
        },
        end: {
          line: 52,
          column: 9
        }
      },
      "12": {
        start: {
          line: 43,
          column: 24
        },
        end: {
          line: 43,
          column: 51
        }
      },
      "13": {
        start: {
          line: 44,
          column: 10
        },
        end: {
          line: 51,
          column: 11
        }
      },
      "14": {
        start: {
          line: 46,
          column: 14
        },
        end: {
          line: 49,
          column: 21
        }
      },
      "15": {
        start: {
          line: 50,
          column: 12
        },
        end: {
          line: 50,
          column: 36
        }
      },
      "16": {
        start: {
          line: 53,
          column: 8
        },
        end: {
          line: 53,
          column: 22
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 20,
            column: 17
          },
          end: {
            line: 20,
            column: 18
          }
        },
        loc: {
          start: {
            line: 22,
            column: 48
          },
          end: {
            line: 57,
            column: 1
          }
        },
        line: 22
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 27,
            column: 14
          },
          end: {
            line: 27,
            column: 15
          }
        },
        loc: {
          start: {
            line: 27,
            column: 22
          },
          end: {
            line: 31,
            column: 5
          }
        },
        line: 27
      },
      "2": {
        name: "serverFetch",
        decl: {
          start: {
            line: 28,
            column: 22
          },
          end: {
            line: 28,
            column: 33
          }
        },
        loc: {
          start: {
            line: 28,
            column: 36
          },
          end: {
            line: 30,
            column: 7
          }
        },
        line: 28
      },
      "3": {
        name: "(anonymous_3)",
        decl: {
          start: {
            line: 32,
            column: 16
          },
          end: {
            line: 32,
            column: 17
          }
        },
        loc: {
          start: {
            line: 32,
            column: 24
          },
          end: {
            line: 55,
            column: 5
          }
        },
        line: 32
      },
      "4": {
        name: "csrfMiddleware",
        decl: {
          start: {
            line: 36,
            column: 28
          },
          end: {
            line: 36,
            column: 42
          }
        },
        loc: {
          start: {
            line: 36,
            column: 54
          },
          end: {
            line: 54,
            column: 7
          }
        },
        line: 36
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 33,
            column: 13
          },
          end: {
            line: 33,
            column: 25
          }
        },
        type: "default-arg",
        locations: [{
          start: {
            line: 33,
            column: 23
          },
          end: {
            line: 33,
            column: 25
          }
        }],
        line: 33
      },
      "1": {
        loc: {
          start: {
            line: 37,
            column: 8
          },
          end: {
            line: 52,
            column: 9
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 37,
            column: 8
          },
          end: {
            line: 52,
            column: 9
          }
        }, {
          start: {
            line: 37,
            column: 8
          },
          end: {
            line: 52,
            column: 9
          }
        }],
        line: 37
      },
      "2": {
        loc: {
          start: {
            line: 37,
            column: 12
          },
          end: {
            line: 37,
            column: 63
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 37,
            column: 12
          },
          end: {
            line: 37,
            column: 38
          }
        }, {
          start: {
            line: 37,
            column: 42
          },
          end: {
            line: 37,
            column: 63
          }
        }],
        line: 37
      },
      "3": {
        loc: {
          start: {
            line: 42,
            column: 15
          },
          end: {
            line: 52,
            column: 9
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 42,
            column: 15
          },
          end: {
            line: 52,
            column: 9
          }
        }, {
          start: {
            line: 42,
            column: 15
          },
          end: {
            line: 52,
            column: 9
          }
        }],
        line: 42
      },
      "4": {
        loc: {
          start: {
            line: 42,
            column: 19
          },
          end: {
            line: 42,
            column: 71
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 42,
            column: 19
          },
          end: {
            line: 42,
            column: 43
          }
        }, {
          start: {
            line: 42,
            column: 47
          },
          end: {
            line: 42,
            column: 71
          }
        }],
        line: 42
      },
      "5": {
        loc: {
          start: {
            line: 44,
            column: 10
          },
          end: {
            line: 51,
            column: 11
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 44,
            column: 10
          },
          end: {
            line: 51,
            column: 11
          }
        }, {
          start: {
            line: 44,
            column: 10
          },
          end: {
            line: 51,
            column: 11
          }
        }],
        line: 44
      },
      "6": {
        loc: {
          start: {
            line: 47,
            column: 15
          },
          end: {
            line: 49,
            column: 20
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 48,
            column: 18
          },
          end: {
            line: 48,
            column: 94
          }
        }, {
          start: {
            line: 49,
            column: 18
          },
          end: {
            line: 49,
            column: 20
          }
        }],
        line: 47
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
      "16": 0
    },
    f: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0
    },
    b: {
      "0": [0],
      "1": [0, 0],
      "2": [0, 0],
      "3": [0, 0],
      "4": [0, 0],
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
cov_1uchqshkbi.s[0]++;

const enhancer = oldFetch => {
  cov_1uchqshkbi.f[0]++;
  cov_1uchqshkbi.s[1]++;
  return App.createPlugin({
    deps: {
      ignored: CsrfIgnoreRoutesToken.optional
    },
    provides: deps => {
      cov_1uchqshkbi.f[1]++;
      cov_1uchqshkbi.s[2]++;
      return function serverFetch() {
        cov_1uchqshkbi.f[2]++;
        cov_1uchqshkbi.s[3]++;
        return Promise.reject(new Error('Cannot use fetch on the server'));
      };
    },
    middleware: deps => {
      cov_1uchqshkbi.f[3]++;
      const {
        ignored = (cov_1uchqshkbi.b[0][0]++, [])
      } = (cov_1uchqshkbi.s[4]++, deps);
      const ignoreSet = (cov_1uchqshkbi.s[5]++, new Set(ignored));
      cov_1uchqshkbi.s[6]++;
      return async function csrfMiddleware(ctx, next) {
        cov_1uchqshkbi.f[4]++;
        cov_1uchqshkbi.s[7]++;

        if ((cov_1uchqshkbi.b[2][0]++, ctx.path === '/csrf-token') && (cov_1uchqshkbi.b[2][1]++, ctx.method === 'POST')) {
          cov_1uchqshkbi.b[1][0]++;
          cov_1uchqshkbi.s[8]++;
          // TODO(#158): Remove this once clients have had the opportunity to upgrade
          ctx.set('x-csrf-token', 'x');
          cov_1uchqshkbi.s[9]++;
          ctx.status = 200;
          cov_1uchqshkbi.s[10]++;
          ctx.body = '';
        } else {
          cov_1uchqshkbi.b[1][1]++;
          cov_1uchqshkbi.s[11]++;

          if ((cov_1uchqshkbi.b[4][0]++, verifyMethod(ctx.method)) && (cov_1uchqshkbi.b[4][1]++, !ignoreSet.has(ctx.path))) {
            cov_1uchqshkbi.b[3][0]++;
            const token = (cov_1uchqshkbi.s[12]++, ctx.headers['x-csrf-token']);
            cov_1uchqshkbi.s[13]++;

            if (!token) {
              cov_1uchqshkbi.b[5][0]++;
              const message = (cov_1uchqshkbi.s[14]++, `Missing csrf token on ${ctx.path}` + (process.env.NODE_ENV !== "production" ? (cov_1uchqshkbi.b[6][0]++, ' Ensure you are using `fetch` from `fusion-plugin-csrf-protection-[react].') : (cov_1uchqshkbi.b[6][1]++, '')));
              cov_1uchqshkbi.s[15]++;
              ctx.throw(403, message);
            } else {
              cov_1uchqshkbi.b[5][1]++;
            }
          } else {
            cov_1uchqshkbi.b[3][1]++;
          }
        }

        cov_1uchqshkbi.s[16]++;
        return next();
      };
    }
  });
};

var cov_2ctr8kcgqh = function () {
  var path = "/Users/lhorie/Documents/test-private-monorepo/public/fusion-plugin-csrf-protection/src/browser.js",
      hash = "36157ece7881b2d88a5aa1dd43dfd72e3841ff42",
      Function = function () {}.constructor,
      global = new Function('return this')(),
      gcv = "__coverage__",
      coverageData = {
    path: "/Users/lhorie/Documents/test-private-monorepo/public/fusion-plugin-csrf-protection/src/browser.js",
    statementMap: {
      "0": {
        start: {
          line: 13,
          column: 17
        },
        end: {
          line: 31,
          column: 1
        }
      },
      "1": {
        start: {
          line: 14,
          column: 17
        },
        end: {
          line: 14,
          column: 46
        }
      },
      "2": {
        start: {
          line: 15,
          column: 34
        },
        end: {
          line: 29,
          column: 3
        }
      },
      "3": {
        start: {
          line: 16,
          column: 4
        },
        end: {
          line: 16,
          column: 31
        }
      },
      "4": {
        start: {
          line: 16,
          column: 18
        },
        end: {
          line: 16,
          column: 31
        }
      },
      "5": {
        start: {
          line: 17,
          column: 25
        },
        end: {
          line: 17,
          column: 62
        }
      },
      "6": {
        start: {
          line: 18,
          column: 4
        },
        end: {
          line: 20,
          column: 5
        }
      },
      "7": {
        start: {
          line: 19,
          column: 6
        },
        end: {
          line: 19,
          column: 33
        }
      },
      "8": {
        start: {
          line: 21,
          column: 4
        },
        end: {
          line: 28,
          column: 7
        }
      },
      "9": {
        start: {
          line: 30,
          column: 2
        },
        end: {
          line: 30,
          column: 28
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 13,
            column: 17
          },
          end: {
            line: 13,
            column: 18
          }
        },
        loc: {
          start: {
            line: 13,
            column: 35
          },
          end: {
            line: 31,
            column: 1
          }
        },
        line: 13
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 15,
            column: 34
          },
          end: {
            line: 15,
            column: 35
          }
        },
        loc: {
          start: {
            line: 15,
            column: 52
          },
          end: {
            line: 29,
            column: 3
          }
        },
        line: 15
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 14,
            column: 17
          },
          end: {
            line: 14,
            column: 46
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 14,
            column: 17
          },
          end: {
            line: 14,
            column: 40
          }
        }, {
          start: {
            line: 14,
            column: 44
          },
          end: {
            line: 14,
            column: 46
          }
        }],
        line: 14
      },
      "1": {
        loc: {
          start: {
            line: 16,
            column: 4
          },
          end: {
            line: 16,
            column: 31
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 16,
            column: 4
          },
          end: {
            line: 16,
            column: 31
          }
        }, {
          start: {
            line: 16,
            column: 4
          },
          end: {
            line: 16,
            column: 31
          }
        }],
        line: 16
      },
      "2": {
        loc: {
          start: {
            line: 17,
            column: 38
          },
          end: {
            line: 17,
            column: 61
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 17,
            column: 38
          },
          end: {
            line: 17,
            column: 52
          }
        }, {
          start: {
            line: 17,
            column: 56
          },
          end: {
            line: 17,
            column: 61
          }
        }],
        line: 17
      },
      "3": {
        loc: {
          start: {
            line: 18,
            column: 4
          },
          end: {
            line: 20,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 18,
            column: 4
          },
          end: {
            line: 20,
            column: 5
          }
        }, {
          start: {
            line: 18,
            column: 4
          },
          end: {
            line: 20,
            column: 5
          }
        }],
        line: 18
      },
      "4": {
        loc: {
          start: {
            line: 25,
            column: 12
          },
          end: {
            line: 25,
            column: 46
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 25,
            column: 13
          },
          end: {
            line: 25,
            column: 20
          }
        }, {
          start: {
            line: 25,
            column: 24
          },
          end: {
            line: 25,
            column: 39
          }
        }, {
          start: {
            line: 25,
            column: 44
          },
          end: {
            line: 25,
            column: 46
          }
        }],
        line: 25
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
      "9": 0
    },
    f: {
      "0": 0,
      "1": 0
    },
    b: {
      "0": [0, 0],
      "1": [0, 0],
      "2": [0, 0],
      "3": [0, 0],
      "4": [0, 0, 0]
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

/* eslint-env browser */
cov_2ctr8kcgqh.s[0]++;

var cov_aug79erpe = function () {
  var path = "/Users/lhorie/Documents/test-private-monorepo/public/fusion-plugin-csrf-protection/src/index.js",
      hash = "4877b8d6a6e405345d090829ff1c82c48e21eec9",
      Function = function () {}.constructor,
      global = new Function('return this')(),
      gcv = "__coverage__",
      coverageData = {
    path: "/Users/lhorie/Documents/test-private-monorepo/public/fusion-plugin-csrf-protection/src/index.js",
    statementMap: {},
    fnMap: {},
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 13,
            column: 16
          },
          end: {
            line: 13,
            column: 50
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 13,
            column: 27
          },
          end: {
            line: 13,
            column: 37
          }
        }, {
          start: {
            line: 13,
            column: 40
          },
          end: {
            line: 13,
            column: 50
          }
        }],
        line: 13
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
var Plugin = (cov_aug79erpe.b[0][0]++, enhancer);

/** Copyright (c) 2018 Uber Technologies, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */
test('plugin api', t => {
  t.ok(Plugin);
  t.ok(CsrfIgnoreRoutesToken);
  t.end();
});

/** Copyright (c) 2018 Uber Technologies, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

/* eslint-env node */
function MockFetch() {
  return Promise.resolve();
}

function getApp() {
  const app = new App__default('fake-element', el => el);
  app.middleware(async (ctx, next) => {
    try {
      await next();
    } catch (e) {
      ctx.status = e.status || 500;
      ctx.body = e.message;
    }
  }); // $FlowFixMe

  app.register(fusionTokens.FetchToken, MockFetch);
  app.enhance(fusionTokens.FetchToken, enhancer);
  return app;
}

test('valid token', async t => {
  const app = getApp();
  app.middleware((ctx, next) => {
    if (ctx.url === '/test' && ctx.method === 'POST') {
      ctx.status = 200;
      ctx.body = 'test';
    }

    return next();
  });
  const sim = fusionTestUtils.getSimulator(app);
  const ctx = await sim.request('/test', {
    method: 'POST',
    headers: {
      'x-csrf-token': 'x'
    }
  });
  t.equal(ctx.status, 200);
  t.equal(ctx.body, 'test');
  t.end();
});
test('GET request', async t => {
  const app = getApp();
  app.middleware((ctx, next) => {
    if (ctx.url === '/test' && ctx.method === 'GET') {
      ctx.status = 200;
      ctx.body = 'test';
    }

    return next();
  });
  const sim = fusionTestUtils.getSimulator(app);
  const ctx = await sim.request('/test');
  t.equal(ctx.status, 200);
  t.equal(ctx.body, 'test');
  t.end();
});
test('/csrf-token POST', async t => {
  const app = getApp();
  const sim = fusionTestUtils.getSimulator(app);
  const ctx = await sim.request('/csrf-token', {
    method: 'POST'
  });
  t.equal(ctx.status, 200);
  t.end();
});
test('POST with missing token', async t => {
  const app = getApp();
  app.middleware((ctx, next) => {
    if (ctx.url === '/test' && ctx.method === 'POST') {
      ctx.status = 200;
      ctx.body = 'test';
    }

    return next();
  });
  const sim = fusionTestUtils.getSimulator(app);
  const ctx = await sim.request('/test', {
    method: 'POST'
  });
  t.equal(ctx.status, 403);
  t.end();
});
test('does not verify ignored paths', async t => {
  const app = getApp();
  app.register(CsrfIgnoreRoutesToken, ['/test']);
  app.middleware((ctx, next) => {
    if (ctx.path === '/test') ctx.body = {
      ok: 1
    };
    return next();
  });
  const simulator = fusionTestUtils.getSimulator(app);
  const ctx = await simulator.request('/test', {
    method: 'POST'
  });
  t.equal(ctx.status, 200);
  t.end();
});
test('throws if fetch is used on server', async t => {
  const app = getApp();
  app.register(App.createPlugin({
    deps: {
      fetch: fusionTokens.FetchToken
    },
    provides: ({
      fetch
    }) => {
      fetch('/test').catch(e => {
        t.ok(e, 'throws on server');
        t.end();
      });
    }
  }));
  fusionTestUtils.getSimulator(app);
});
//# sourceMappingURL=node.js.map
