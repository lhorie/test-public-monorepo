'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var App = require('fusion-core');
var App__default = _interopDefault(App);
var bodyparser = _interopDefault(require('koa-bodyparser'));
var fusionPluginUniversalEvents = require('fusion-plugin-universal-events');
var test = _interopDefault(require('tape-cup'));
var MockEmitter = _interopDefault(require('events'));
var MockReq = _interopDefault(require('mock-req'));
var fusionTestUtils = require('fusion-test-utils');

var cov_1wa2v4z3gf = function () {
  var path = "/Users/lhorie/Documents/test-private-monorepo/public/fusion-plugin-rpc/src/tokens.js",
      hash = "622b666ad3ff559183a5e4a749b4c2664451179a",
      Function = function () {}.constructor,
      global = new Function('return this')(),
      gcv = "__coverage__",
      coverageData = {
    path: "/Users/lhorie/Documents/test-private-monorepo/public/fusion-plugin-rpc/src/tokens.js",
    statementMap: {
      "0": {
        start: {
          line: 12,
          column: 36
        },
        end: {
          line: 12,
          column: 59
        }
      },
      "1": {
        start: {
          line: 15,
          column: 52
        },
        end: {
          line: 17,
          column: 1
        }
      },
      "2": {
        start: {
          line: 18,
          column: 52
        },
        end: {
          line: 20,
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
const RPCToken = (cov_1wa2v4z3gf.s[0]++, App.createToken('RPCToken'));
const RPCHandlersToken = (cov_1wa2v4z3gf.s[1]++, App.createToken('RPCHandlersToken'));
const BodyParserOptionsToken = (cov_1wa2v4z3gf.s[2]++, App.createToken('BodyParserOptionsToken'));

var cov_1yfgjzhjkg = function () {
  var path = "/Users/lhorie/Documents/test-private-monorepo/public/fusion-plugin-rpc/src/missing-handler-error.js",
      hash = "91ae543ec364bd327f7385965019c43336548dcc",
      Function = function () {}.constructor,
      global = new Function('return this')(),
      gcv = "__coverage__",
      coverageData = {
    path: "/Users/lhorie/Documents/test-private-monorepo/public/fusion-plugin-rpc/src/missing-handler-error.js",
    statementMap: {
      "0": {
        start: {
          line: 13,
          column: 4
        },
        end: {
          line: 13,
          column: 47
        }
      },
      "1": {
        start: {
          line: 14,
          column: 4
        },
        end: {
          line: 14,
          column: 38
        }
      },
      "2": {
        start: {
          line: 15,
          column: 4
        },
        end: {
          line: 15,
          column: 55
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 12,
            column: 2
          },
          end: {
            line: 12,
            column: 3
          }
        },
        loc: {
          start: {
            line: 12,
            column: 30
          },
          end: {
            line: 16,
            column: 3
          }
        },
        line: 12
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
class MissingHandlerError extends Error {
  constructor(method) {
    cov_1yfgjzhjkg.f[0]++;
    cov_1yfgjzhjkg.s[0]++;
    super(`Missing RPC handler for ${method}`);
    cov_1yfgjzhjkg.s[1]++;
    this.code = 'ERR_MISSING_HANDLER';
    cov_1yfgjzhjkg.s[2]++;
    Error.captureStackTrace(this, MissingHandlerError);
  }

}

var cov_1fwnwpjh7t = function () {
  var path = "/Users/lhorie/Documents/test-private-monorepo/public/fusion-plugin-rpc/src/response-error.js",
      hash = "7a2d00186eeebdfd7d7cf9515724d4667b1cee79",
      Function = function () {}.constructor,
      global = new Function('return this')(),
      gcv = "__coverage__",
      coverageData = {
    path: "/Users/lhorie/Documents/test-private-monorepo/public/fusion-plugin-rpc/src/response-error.js",
    statementMap: {
      "0": {
        start: {
          line: 14,
          column: 4
        },
        end: {
          line: 14,
          column: 19
        }
      },
      "1": {
        start: {
          line: 15,
          column: 4
        },
        end: {
          line: 15,
          column: 21
        }
      },
      "2": {
        start: {
          line: 16,
          column: 4
        },
        end: {
          line: 16,
          column: 21
        }
      },
      "3": {
        start: {
          line: 17,
          column: 4
        },
        end: {
          line: 17,
          column: 49
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 13,
            column: 2
          },
          end: {
            line: 13,
            column: 3
          }
        },
        loc: {
          start: {
            line: 13,
            column: 31
          },
          end: {
            line: 18,
            column: 3
          }
        },
        line: 13
      }
    },
    branchMap: {},
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0
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
class ResponseError extends Error {
  constructor(message) {
    cov_1fwnwpjh7t.f[0]++;
    cov_1fwnwpjh7t.s[0]++;
    super(message);
    cov_1fwnwpjh7t.s[1]++;
    this.code = null;
    cov_1fwnwpjh7t.s[2]++;
    this.meta = null;
    cov_1fwnwpjh7t.s[3]++;
    Error.captureStackTrace(this, ResponseError);
  }

}

var cov_95w7x9ixt = function () {
  var path = "/Users/lhorie/Documents/test-private-monorepo/public/fusion-plugin-rpc/src/server.js",
      hash = "38a6852ad3b2f128718cd458248cb245e166a71c",
      Function = function () {}.constructor,
      global = new Function('return this')(),
      gcv = "__coverage__",
      coverageData = {
    path: "/Users/lhorie/Documents/test-private-monorepo/public/fusion-plugin-rpc/src/server.js",
    statementMap: {
      "0": {
        start: {
          line: 24,
          column: 16
        },
        end: {
          line: 24,
          column: 28
        }
      },
      "1": {
        start: {
          line: 28,
          column: 2
        },
        end: {
          line: 28,
          column: 41
        }
      },
      "2": {
        start: {
          line: 38,
          column: 4
        },
        end: {
          line: 40,
          column: 5
        }
      },
      "3": {
        start: {
          line: 39,
          column: 6
        },
        end: {
          line: 39,
          column: 58
        }
      },
      "4": {
        start: {
          line: 41,
          column: 4
        },
        end: {
          line: 41,
          column: 19
        }
      },
      "5": {
        start: {
          line: 42,
          column: 4
        },
        end: {
          line: 42,
          column: 27
        }
      },
      "6": {
        start: {
          line: 43,
          column: 4
        },
        end: {
          line: 43,
          column: 29
        }
      },
      "7": {
        start: {
          line: 45,
          column: 4
        },
        end: {
          line: 45,
          column: 16
        }
      },
      "8": {
        start: {
          line: 49,
          column: 22
        },
        end: {
          line: 49,
          column: 26
        }
      },
      "9": {
        start: {
          line: 51,
          column: 4
        },
        end: {
          line: 53,
          column: 5
        }
      },
      "10": {
        start: {
          line: 52,
          column: 6
        },
        end: {
          line: 52,
          column: 58
        }
      },
      "11": {
        start: {
          line: 54,
          column: 4
        },
        end: {
          line: 56,
          column: 5
        }
      },
      "12": {
        start: {
          line: 55,
          column: 6
        },
        end: {
          line: 55,
          column: 62
        }
      },
      "13": {
        start: {
          line: 57,
          column: 26
        },
        end: {
          line: 57,
          column: 53
        }
      },
      "14": {
        start: {
          line: 59,
          column: 4
        },
        end: {
          line: 61,
          column: 5
        }
      },
      "15": {
        start: {
          line: 60,
          column: 6
        },
        end: {
          line: 60,
          column: 63
        }
      },
      "16": {
        start: {
          line: 62,
          column: 4
        },
        end: {
          line: 72,
          column: 5
        }
      },
      "17": {
        start: {
          line: 63,
          column: 16
        },
        end: {
          line: 63,
          column: 47
        }
      },
      "18": {
        start: {
          line: 64,
          column: 6
        },
        end: {
          line: 70,
          column: 7
        }
      },
      "19": {
        start: {
          line: 65,
          column: 8
        },
        end: {
          line: 69,
          column: 11
        }
      },
      "20": {
        start: {
          line: 71,
          column: 6
        },
        end: {
          line: 71,
          column: 14
        }
      },
      "21": {
        start: {
          line: 73,
          column: 4
        },
        end: {
          line: 95,
          column: 5
        }
      },
      "22": {
        start: {
          line: 74,
          column: 21
        },
        end: {
          line: 74,
          column: 64
        }
      },
      "23": {
        start: {
          line: 75,
          column: 6
        },
        end: {
          line: 82,
          column: 7
        }
      },
      "24": {
        start: {
          line: 76,
          column: 8
        },
        end: {
          line: 81,
          column: 11
        }
      },
      "25": {
        start: {
          line: 83,
          column: 6
        },
        end: {
          line: 83,
          column: 20
        }
      },
      "26": {
        start: {
          line: 85,
          column: 6
        },
        end: {
          line: 93,
          column: 7
        }
      },
      "27": {
        start: {
          line: 86,
          column: 8
        },
        end: {
          line: 92,
          column: 11
        }
      },
      "28": {
        start: {
          line: 94,
          column: 6
        },
        end: {
          line: 94,
          column: 14
        }
      },
      "29": {
        start: {
          line: 99,
          column: 43
        },
        end: {
          line: 194,
          column: 4
        }
      },
      "30": {
        start: {
          line: 100,
          column: 2
        },
        end: {
          line: 194,
          column: 4
        }
      },
      "31": {
        start: {
          line: 108,
          column: 34
        },
        end: {
          line: 108,
          column: 38
        }
      },
      "32": {
        start: {
          line: 110,
          column: 22
        },
        end: {
          line: 112,
          column: 7
        }
      },
      "33": {
        start: {
          line: 111,
          column: 29
        },
        end: {
          line: 111,
          column: 60
        }
      },
      "34": {
        start: {
          line: 113,
          column: 6
        },
        end: {
          line: 113,
          column: 21
        }
      },
      "35": {
        start: {
          line: 117,
          column: 53
        },
        end: {
          line: 117,
          column: 57
        }
      },
      "36": {
        start: {
          line: 118,
          column: 6
        },
        end: {
          line: 119,
          column: 75
        }
      },
      "37": {
        start: {
          line: 119,
          column: 8
        },
        end: {
          line: 119,
          column: 75
        }
      },
      "38": {
        start: {
          line: 120,
          column: 6
        },
        end: {
          line: 121,
          column: 78
        }
      },
      "39": {
        start: {
          line: 121,
          column: 8
        },
        end: {
          line: 121,
          column: 78
        }
      },
      "40": {
        start: {
          line: 122,
          column: 24
        },
        end: {
          line: 122,
          column: 53
        }
      },
      "41": {
        start: {
          line: 124,
          column: 6
        },
        end: {
          line: 192,
          column: 8
        }
      },
      "42": {
        start: {
          line: 125,
          column: 8
        },
        end: {
          line: 125,
          column: 21
        }
      },
      "43": {
        start: {
          line: 126,
          column: 30
        },
        end: {
          line: 126,
          column: 47
        }
      },
      "44": {
        start: {
          line: 127,
          column: 8
        },
        end: {
          line: 191,
          column: 9
        }
      },
      "45": {
        start: {
          line: 128,
          column: 28
        },
        end: {
          line: 128,
          column: 32
        }
      },
      "46": {
        start: {
          line: 129,
          column: 29
        },
        end: {
          line: 129,
          column: 68
        }
      },
      "47": {
        start: {
          line: 130,
          column: 10
        },
        end: {
          line: 190,
          column: 11
        }
      },
      "48": {
        start: {
          line: 131,
          column: 12
        },
        end: {
          line: 131,
          column: 58
        }
      },
      "49": {
        start: {
          line: 131,
          column: 39
        },
        end: {
          line: 131,
          column: 56
        }
      },
      "50": {
        start: {
          line: 132,
          column: 12
        },
        end: {
          line: 172,
          column: 13
        }
      },
      "51": {
        start: {
          line: 133,
          column: 29
        },
        end: {
          line: 133,
          column: 74
        }
      },
      "52": {
        start: {
          line: 134,
          column: 14
        },
        end: {
          line: 137,
          column: 16
        }
      },
      "53": {
        start: {
          line: 138,
          column: 14
        },
        end: {
          line: 145,
          column: 15
        }
      },
      "54": {
        start: {
          line: 139,
          column: 16
        },
        end: {
          line: 144,
          column: 19
        }
      },
      "55": {
        start: {
          line: 148,
          column: 16
        },
        end: {
          line: 152,
          column: 21
        }
      },
      "56": {
        start: {
          line: 153,
          column: 14
        },
        end: {
          line: 162,
          column: 16
        }
      },
      "57": {
        start: {
          line: 163,
          column: 14
        },
        end: {
          line: 171,
          column: 15
        }
      },
      "58": {
        start: {
          line: 164,
          column: 16
        },
        end: {
          line: 170,
          column: 19
        }
      },
      "59": {
        start: {
          line: 174,
          column: 22
        },
        end: {
          line: 174,
          column: 53
        }
      },
      "60": {
        start: {
          line: 175,
          column: 12
        },
        end: {
          line: 181,
          column: 14
        }
      },
      "61": {
        start: {
          line: 182,
          column: 12
        },
        end: {
          line: 182,
          column: 29
        }
      },
      "62": {
        start: {
          line: 183,
          column: 12
        },
        end: {
          line: 189,
          column: 13
        }
      },
      "63": {
        start: {
          line: 184,
          column: 14
        },
        end: {
          line: 188,
          column: 17
        }
      },
      "64": {
        start: {
          line: 198,
          column: 24
        },
        end: {
          line: 198,
          column: 40
        }
      },
      "65": {
        start: {
          line: 199,
          column: 2
        },
        end: {
          line: 199,
          column: 47
        }
      }
    },
    fnMap: {
      "0": {
        name: "hasHandler",
        decl: {
          start: {
            line: 27,
            column: 9
          },
          end: {
            line: 27,
            column: 19
          }
        },
        loc: {
          start: {
            line: 27,
            column: 68
          },
          end: {
            line: 29,
            column: 1
          }
        },
        line: 27
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 37,
            column: 2
          },
          end: {
            line: 37,
            column: 3
          }
        },
        loc: {
          start: {
            line: 37,
            column: 62
          },
          end: {
            line: 46,
            column: 3
          }
        },
        line: 37
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 48,
            column: 2
          },
          end: {
            line: 48,
            column: 3
          }
        },
        loc: {
          start: {
            line: 48,
            column: 79
          },
          end: {
            line: 96,
            column: 3
          }
        },
        line: 48
      },
      "3": {
        name: "(anonymous_3)",
        decl: {
          start: {
            line: 99,
            column: 43
          },
          end: {
            line: 99,
            column: 44
          }
        },
        loc: {
          start: {
            line: 100,
            column: 2
          },
          end: {
            line: 194,
            column: 4
          }
        },
        line: 100
      },
      "4": {
        name: "(anonymous_4)",
        decl: {
          start: {
            line: 107,
            column: 14
          },
          end: {
            line: 107,
            column: 15
          }
        },
        loc: {
          start: {
            line: 107,
            column: 22
          },
          end: {
            line: 114,
            column: 5
          }
        },
        line: 107
      },
      "5": {
        name: "(anonymous_5)",
        decl: {
          start: {
            line: 111,
            column: 22
          },
          end: {
            line: 111,
            column: 23
          }
        },
        loc: {
          start: {
            line: 111,
            column: 29
          },
          end: {
            line: 111,
            column: 60
          }
        },
        line: 111
      },
      "6": {
        name: "(anonymous_6)",
        decl: {
          start: {
            line: 116,
            column: 16
          },
          end: {
            line: 116,
            column: 17
          }
        },
        loc: {
          start: {
            line: 116,
            column: 24
          },
          end: {
            line: 193,
            column: 5
          }
        },
        line: 116
      },
      "7": {
        name: "(anonymous_7)",
        decl: {
          start: {
            line: 124,
            column: 13
          },
          end: {
            line: 124,
            column: 14
          }
        },
        loc: {
          start: {
            line: 124,
            column: 34
          },
          end: {
            line: 192,
            column: 7
          }
        },
        line: 124
      },
      "8": {
        name: "(anonymous_8)",
        decl: {
          start: {
            line: 131,
            column: 33
          },
          end: {
            line: 131,
            column: 34
          }
        },
        loc: {
          start: {
            line: 131,
            column: 39
          },
          end: {
            line: 131,
            column: 56
          }
        },
        line: 131
      },
      "9": {
        name: "ms",
        decl: {
          start: {
            line: 197,
            column: 9
          },
          end: {
            line: 197,
            column: 11
          }
        },
        loc: {
          start: {
            line: 197,
            column: 14
          },
          end: {
            line: 200,
            column: 1
          }
        },
        line: 197
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 38,
            column: 4
          },
          end: {
            line: 40,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 38,
            column: 4
          },
          end: {
            line: 40,
            column: 5
          }
        }, {
          start: {
            line: 38,
            column: 4
          },
          end: {
            line: 40,
            column: 5
          }
        }],
        line: 38
      },
      "1": {
        loc: {
          start: {
            line: 38,
            column: 8
          },
          end: {
            line: 38,
            column: 28
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 38,
            column: 8
          },
          end: {
            line: 38,
            column: 12
          }
        }, {
          start: {
            line: 38,
            column: 16
          },
          end: {
            line: 38,
            column: 28
          }
        }],
        line: 38
      },
      "2": {
        loc: {
          start: {
            line: 51,
            column: 4
          },
          end: {
            line: 53,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 51,
            column: 4
          },
          end: {
            line: 53,
            column: 5
          }
        }, {
          start: {
            line: 51,
            column: 4
          },
          end: {
            line: 53,
            column: 5
          }
        }],
        line: 51
      },
      "3": {
        loc: {
          start: {
            line: 54,
            column: 4
          },
          end: {
            line: 56,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 54,
            column: 4
          },
          end: {
            line: 56,
            column: 5
          }
        }, {
          start: {
            line: 54,
            column: 4
          },
          end: {
            line: 56,
            column: 5
          }
        }],
        line: 54
      },
      "4": {
        loc: {
          start: {
            line: 59,
            column: 4
          },
          end: {
            line: 61,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 59,
            column: 4
          },
          end: {
            line: 61,
            column: 5
          }
        }, {
          start: {
            line: 59,
            column: 4
          },
          end: {
            line: 61,
            column: 5
          }
        }],
        line: 59
      },
      "5": {
        loc: {
          start: {
            line: 62,
            column: 4
          },
          end: {
            line: 72,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 62,
            column: 4
          },
          end: {
            line: 72,
            column: 5
          }
        }, {
          start: {
            line: 62,
            column: 4
          },
          end: {
            line: 72,
            column: 5
          }
        }],
        line: 62
      },
      "6": {
        loc: {
          start: {
            line: 64,
            column: 6
          },
          end: {
            line: 70,
            column: 7
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 64,
            column: 6
          },
          end: {
            line: 70,
            column: 7
          }
        }, {
          start: {
            line: 64,
            column: 6
          },
          end: {
            line: 70,
            column: 7
          }
        }],
        line: 64
      },
      "7": {
        loc: {
          start: {
            line: 75,
            column: 6
          },
          end: {
            line: 82,
            column: 7
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 75,
            column: 6
          },
          end: {
            line: 82,
            column: 7
          }
        }, {
          start: {
            line: 75,
            column: 6
          },
          end: {
            line: 82,
            column: 7
          }
        }],
        line: 75
      },
      "8": {
        loc: {
          start: {
            line: 85,
            column: 6
          },
          end: {
            line: 93,
            column: 7
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 85,
            column: 6
          },
          end: {
            line: 93,
            column: 7
          }
        }, {
          start: {
            line: 85,
            column: 6
          },
          end: {
            line: 93,
            column: 7
          }
        }],
        line: 85
      },
      "9": {
        loc: {
          start: {
            line: 118,
            column: 6
          },
          end: {
            line: 119,
            column: 75
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 118,
            column: 6
          },
          end: {
            line: 119,
            column: 75
          }
        }, {
          start: {
            line: 118,
            column: 6
          },
          end: {
            line: 119,
            column: 75
          }
        }],
        line: 118
      },
      "10": {
        loc: {
          start: {
            line: 120,
            column: 6
          },
          end: {
            line: 121,
            column: 78
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 120,
            column: 6
          },
          end: {
            line: 121,
            column: 78
          }
        }, {
          start: {
            line: 120,
            column: 6
          },
          end: {
            line: 121,
            column: 78
          }
        }],
        line: 120
      },
      "11": {
        loc: {
          start: {
            line: 127,
            column: 8
          },
          end: {
            line: 191,
            column: 9
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 127,
            column: 8
          },
          end: {
            line: 191,
            column: 9
          }
        }, {
          start: {
            line: 127,
            column: 8
          },
          end: {
            line: 191,
            column: 9
          }
        }],
        line: 127
      },
      "12": {
        loc: {
          start: {
            line: 127,
            column: 12
          },
          end: {
            line: 127,
            column: 65
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 127,
            column: 12
          },
          end: {
            line: 127,
            column: 33
          }
        }, {
          start: {
            line: 127,
            column: 37
          },
          end: {
            line: 127,
            column: 65
          }
        }],
        line: 127
      },
      "13": {
        loc: {
          start: {
            line: 129,
            column: 29
          },
          end: {
            line: 129,
            column: 68
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 129,
            column: 29
          },
          end: {
            line: 129,
            column: 62
          }
        }, {
          start: {
            line: 129,
            column: 66
          },
          end: {
            line: 129,
            column: 68
          }
        }],
        line: 129
      },
      "14": {
        loc: {
          start: {
            line: 130,
            column: 10
          },
          end: {
            line: 190,
            column: 11
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 130,
            column: 10
          },
          end: {
            line: 190,
            column: 11
          }
        }, {
          start: {
            line: 130,
            column: 10
          },
          end: {
            line: 190,
            column: 11
          }
        }],
        line: 130
      },
      "15": {
        loc: {
          start: {
            line: 138,
            column: 14
          },
          end: {
            line: 145,
            column: 15
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 138,
            column: 14
          },
          end: {
            line: 145,
            column: 15
          }
        }, {
          start: {
            line: 138,
            column: 14
          },
          end: {
            line: 145,
            column: 15
          }
        }],
        line: 138
      },
      "16": {
        loc: {
          start: {
            line: 148,
            column: 16
          },
          end: {
            line: 152,
            column: 21
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 149,
            column: 20
          },
          end: {
            line: 149,
            column: 21
          }
        }, {
          start: {
            line: 150,
            column: 20
          },
          end: {
            line: 152,
            column: 21
          }
        }],
        line: 148
      },
      "17": {
        loc: {
          start: {
            line: 163,
            column: 14
          },
          end: {
            line: 171,
            column: 15
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 163,
            column: 14
          },
          end: {
            line: 171,
            column: 15
          }
        }, {
          start: {
            line: 163,
            column: 14
          },
          end: {
            line: 171,
            column: 15
          }
        }],
        line: 163
      },
      "18": {
        loc: {
          start: {
            line: 183,
            column: 12
          },
          end: {
            line: 189,
            column: 13
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 183,
            column: 12
          },
          end: {
            line: 189,
            column: 13
          }
        }, {
          start: {
            line: 183,
            column: 12
          },
          end: {
            line: 189,
            column: 13
          }
        }],
        line: 183
      },
      "19": {
        loc: {
          start: {
            line: 202,
            column: 17
          },
          end: {
            line: 202,
            column: 44
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 202,
            column: 17
          },
          end: {
            line: 202,
            column: 25
          }
        }, {
          start: {
            line: 202,
            column: 29
          },
          end: {
            line: 202,
            column: 44
          }
        }],
        line: 202
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
      "31": 0,
      "32": 0,
      "33": 0,
      "34": 0,
      "35": 0,
      "36": 0,
      "37": 0,
      "38": 0,
      "39": 0,
      "40": 0,
      "41": 0,
      "42": 0,
      "43": 0,
      "44": 0,
      "45": 0,
      "46": 0,
      "47": 0,
      "48": 0,
      "49": 0,
      "50": 0,
      "51": 0,
      "52": 0,
      "53": 0,
      "54": 0,
      "55": 0,
      "56": 0,
      "57": 0,
      "58": 0,
      "59": 0,
      "60": 0,
      "61": 0,
      "62": 0,
      "63": 0,
      "64": 0,
      "65": 0
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
      "3": [0, 0],
      "4": [0, 0],
      "5": [0, 0],
      "6": [0, 0],
      "7": [0, 0],
      "8": [0, 0],
      "9": [0, 0],
      "10": [0, 0],
      "11": [0, 0],
      "12": [0, 0],
      "13": [0, 0],
      "14": [0, 0],
      "15": [0, 0],
      "16": [0, 0],
      "17": [0, 0],
      "18": [0, 0],
      "19": [0, 0]
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
const statKey = (cov_95w7x9ixt.s[0]++, 'rpc:method');
/* Helper function */

function hasHandler(handlers, method) {
  cov_95w7x9ixt.f[0]++;
  cov_95w7x9ixt.s[1]++;
  return handlers.hasOwnProperty(method);
}

class RPC {
  constructor(emitter, handlers, ctx) {
    cov_95w7x9ixt.f[1]++;
    cov_95w7x9ixt.s[2]++;

    if ((cov_95w7x9ixt.b[1][0]++, !ctx) || (cov_95w7x9ixt.b[1][1]++, !ctx.headers)) {
      cov_95w7x9ixt.b[0][0]++;
      cov_95w7x9ixt.s[3]++;
      throw new Error('fusion-plugin-rpc requires `ctx`');
    } else {
      cov_95w7x9ixt.b[0][1]++;
    }

    cov_95w7x9ixt.s[4]++;
    this.ctx = ctx;
    cov_95w7x9ixt.s[5]++;
    this.emitter = emitter;
    cov_95w7x9ixt.s[6]++;
    this.handlers = handlers;
    cov_95w7x9ixt.s[7]++;
    return this;
  }

  async request(method, args) {
    cov_95w7x9ixt.f[2]++;
    const startTime = (cov_95w7x9ixt.s[8]++, ms());
    cov_95w7x9ixt.s[9]++;

    if (!this.ctx) {
      cov_95w7x9ixt.b[2][0]++;
      cov_95w7x9ixt.s[10]++;
      throw new Error('fusion-plugin-rpc requires `ctx`');
    } else {
      cov_95w7x9ixt.b[2][1]++;
    }

    cov_95w7x9ixt.s[11]++;

    if (!this.emitter) {
      cov_95w7x9ixt.b[3][0]++;
      cov_95w7x9ixt.s[12]++;
      throw new Error('fusion-plugin-rpc requires `emitter`');
    } else {
      cov_95w7x9ixt.b[3][1]++;
    }

    const scopedEmitter = (cov_95w7x9ixt.s[13]++, this.emitter.from(this.ctx));
    cov_95w7x9ixt.s[14]++;

    if (!this.handlers) {
      cov_95w7x9ixt.b[4][0]++;
      cov_95w7x9ixt.s[15]++;
      throw new Error('fusion-plugin-rpc requires `handlers`');
    } else {
      cov_95w7x9ixt.b[4][1]++;
    }

    cov_95w7x9ixt.s[16]++;

    if (!hasHandler(this.handlers, method)) {
      cov_95w7x9ixt.b[5][0]++;
      const e = (cov_95w7x9ixt.s[17]++, new MissingHandlerError(method));
      cov_95w7x9ixt.s[18]++;

      if (scopedEmitter) {
        cov_95w7x9ixt.b[6][0]++;
        cov_95w7x9ixt.s[19]++;
        scopedEmitter.emit('rpc:error', {
          method,
          origin: 'server',
          error: e
        });
      } else {
        cov_95w7x9ixt.b[6][1]++;
      }

      cov_95w7x9ixt.s[20]++;
      throw e;
    } else {
      cov_95w7x9ixt.b[5][1]++;
    }

    cov_95w7x9ixt.s[21]++;

    try {
      const result = (cov_95w7x9ixt.s[22]++, await this.handlers[method](args, this.ctx));
      cov_95w7x9ixt.s[23]++;

      if (scopedEmitter) {
        cov_95w7x9ixt.b[7][0]++;
        cov_95w7x9ixt.s[24]++;
        scopedEmitter.emit(statKey, {
          method,
          status: 'success',
          origin: 'server',
          timing: ms() - startTime
        });
      } else {
        cov_95w7x9ixt.b[7][1]++;
      }

      cov_95w7x9ixt.s[25]++;
      return result;
    } catch (e) {
      cov_95w7x9ixt.s[26]++;

      if (scopedEmitter) {
        cov_95w7x9ixt.b[8][0]++;
        cov_95w7x9ixt.s[27]++;
        scopedEmitter.emit(statKey, {
          method,
          error: e,
          status: 'failure',
          origin: 'server',
          timing: ms() - startTime
        });
      } else {
        cov_95w7x9ixt.b[8][1]++;
      }

      cov_95w7x9ixt.s[28]++;
      throw e;
    }
  }

}

cov_95w7x9ixt.s[29]++;

const pluginFactory = () => {
  cov_95w7x9ixt.f[3]++;
  cov_95w7x9ixt.s[30]++;
  return App.createPlugin({
    deps: {
      emitter: fusionPluginUniversalEvents.UniversalEventsToken,
      handlers: RPCHandlersToken,
      bodyParserOptions: BodyParserOptionsToken.optional
    },
    provides: deps => {
      cov_95w7x9ixt.f[4]++;
      const {
        emitter,
        handlers
      } = (cov_95w7x9ixt.s[31]++, deps);
      const service = (cov_95w7x9ixt.s[32]++, {
        from: App.memoize(ctx => {
          cov_95w7x9ixt.f[5]++;
          cov_95w7x9ixt.s[33]++;
          return new RPC(emitter, handlers, ctx);
        })
      });
      cov_95w7x9ixt.s[34]++;
      return service;
    },
    middleware: deps => {
      cov_95w7x9ixt.f[6]++;
      const {
        emitter,
        handlers,
        bodyParserOptions
      } = (cov_95w7x9ixt.s[35]++, deps);
      cov_95w7x9ixt.s[36]++;

      if (!handlers) {
        cov_95w7x9ixt.b[9][0]++;
        cov_95w7x9ixt.s[37]++;
        throw new Error('Missing handlers registered to RPCHandlersToken');
      } else {
        cov_95w7x9ixt.b[9][1]++;
      }

      cov_95w7x9ixt.s[38]++;

      if (!emitter) {
        cov_95w7x9ixt.b[10][0]++;
        cov_95w7x9ixt.s[39]++;
        throw new Error('Missing emitter registered to UniversalEventsToken');
      } else {
        cov_95w7x9ixt.b[10][1]++;
      }

      const parseBody = (cov_95w7x9ixt.s[40]++, bodyparser(bodyParserOptions));
      cov_95w7x9ixt.s[41]++;
      return async (ctx, next) => {
        cov_95w7x9ixt.f[7]++;
        cov_95w7x9ixt.s[42]++;
        await next();
        const scopedEmitter = (cov_95w7x9ixt.s[43]++, emitter.from(ctx));
        cov_95w7x9ixt.s[44]++;

        if ((cov_95w7x9ixt.b[12][0]++, ctx.method === 'POST') && (cov_95w7x9ixt.b[12][1]++, ctx.path.startsWith('/api/'))) {
          cov_95w7x9ixt.b[11][0]++;
          const startTime = (cov_95w7x9ixt.s[45]++, ms());
          const [, method] = (cov_95w7x9ixt.s[46]++, (cov_95w7x9ixt.b[13][0]++, ctx.path.match(/\/api\/([^/]+)/i)) || (cov_95w7x9ixt.b[13][1]++, []));
          cov_95w7x9ixt.s[47]++;

          if (hasHandler(handlers, method)) {
            cov_95w7x9ixt.b[14][0]++;
            cov_95w7x9ixt.s[48]++;
            await parseBody(ctx, () => {
              cov_95w7x9ixt.f[8]++;
              cov_95w7x9ixt.s[49]++;
              return Promise.resolve();
            });
            cov_95w7x9ixt.s[50]++;

            try {
              const result = (cov_95w7x9ixt.s[51]++, await handlers[method](ctx.request.body, ctx));
              cov_95w7x9ixt.s[52]++;
              ctx.body = {
                status: 'success',
                data: result
              };
              cov_95w7x9ixt.s[53]++;

              if (scopedEmitter) {
                cov_95w7x9ixt.b[15][0]++;
                cov_95w7x9ixt.s[54]++;
                scopedEmitter.emit(statKey, {
                  method,
                  status: 'success',
                  origin: 'browser',
                  timing: ms() - startTime
                });
              } else {
                cov_95w7x9ixt.b[15][1]++;
              }
            } catch (e) {
              const error = (cov_95w7x9ixt.s[55]++, e instanceof ResponseError ? (cov_95w7x9ixt.b[16][0]++, e) : (cov_95w7x9ixt.b[16][1]++, new Error('UnknownError - Use ResponseError for more detailed error messages')));
              cov_95w7x9ixt.s[56]++;
              ctx.body = {
                status: 'failure',
                data: {
                  message: error.message,
                  // $FlowFixMe
                  code: error.code,
                  // $FlowFixMe
                  meta: error.meta
                }
              };
              cov_95w7x9ixt.s[57]++;

              if (scopedEmitter) {
                cov_95w7x9ixt.b[17][0]++;
                cov_95w7x9ixt.s[58]++;
                scopedEmitter.emit(statKey, {
                  method,
                  error: e,
                  status: 'failure',
                  origin: 'browser',
                  timing: ms() - startTime
                });
              } else {
                cov_95w7x9ixt.b[17][1]++;
              }
            }
          } else {
            cov_95w7x9ixt.b[14][1]++;
            const e = (cov_95w7x9ixt.s[59]++, new MissingHandlerError(method));
            cov_95w7x9ixt.s[60]++;
            ctx.body = {
              status: 'failure',
              data: {
                message: e.message,
                code: e.code
              }
            };
            cov_95w7x9ixt.s[61]++;
            ctx.status = 404;
            cov_95w7x9ixt.s[62]++;

            if (scopedEmitter) {
              cov_95w7x9ixt.b[18][0]++;
              cov_95w7x9ixt.s[63]++;
              scopedEmitter.emit('rpc:error', {
                origin: 'browser',
                method,
                error: e
              });
            } else {
              cov_95w7x9ixt.b[18][1]++;
            }
          }
        } else {
          cov_95w7x9ixt.b[11][1]++;
        }
      };
    }
  });
};
/* Helper functions */


function ms() {
  cov_95w7x9ixt.f[9]++;
  const [seconds, ns] = (cov_95w7x9ixt.s[64]++, process.hrtime());
  cov_95w7x9ixt.s[65]++;
  return Math.round(seconds * 1000 + ns / 1e6);
}

var RPCPlugin = (cov_95w7x9ixt.b[19][0]++, true) && (cov_95w7x9ixt.b[19][1]++, pluginFactory());

var cov_14nsrowl4l = function () {
  var path = "/Users/lhorie/Documents/test-private-monorepo/public/fusion-plugin-rpc/src/mock.js",
      hash = "5cbd643c1ca5abc980cc5fb61f9567a66c287d6f",
      Function = function () {}.constructor,
      global = new Function('return this')(),
      gcv = "__coverage__",
      coverageData = {
    path: "/Users/lhorie/Documents/test-private-monorepo/public/fusion-plugin-rpc/src/mock.js",
    statementMap: {
      "0": {
        start: {
          line: 25,
          column: 4
        },
        end: {
          line: 25,
          column: 29
        }
      },
      "1": {
        start: {
          line: 29,
          column: 4
        },
        end: {
          line: 31,
          column: 5
        }
      },
      "2": {
        start: {
          line: 30,
          column: 6
        },
        end: {
          line: 30,
          column: 63
        }
      },
      "3": {
        start: {
          line: 33,
          column: 4
        },
        end: {
          line: 35,
          column: 5
        }
      },
      "4": {
        start: {
          line: 34,
          column: 6
        },
        end: {
          line: 34,
          column: 44
        }
      },
      "5": {
        start: {
          line: 36,
          column: 4
        },
        end: {
          line: 36,
          column: 39
        }
      },
      "6": {
        start: {
          line: 40,
          column: 30
        },
        end: {
          line: 47,
          column: 2
        }
      },
      "7": {
        start: {
          line: 45,
          column: 4
        },
        end: {
          line: 45,
          column: 43
        }
      },
      "8": {
        start: {
          line: 45,
          column: 24
        },
        end: {
          line: 45,
          column: 41
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 24,
            column: 2
          },
          end: {
            line: 24,
            column: 3
          }
        },
        loc: {
          start: {
            line: 24,
            column: 29
          },
          end: {
            line: 26,
            column: 3
          }
        },
        line: 24
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 28,
            column: 2
          },
          end: {
            line: 28,
            column: 3
          }
        },
        loc: {
          start: {
            line: 28,
            column: 79
          },
          end: {
            line: 37,
            column: 3
          }
        },
        line: 28
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 44,
            column: 12
          },
          end: {
            line: 44,
            column: 13
          }
        },
        loc: {
          start: {
            line: 44,
            column: 33
          },
          end: {
            line: 46,
            column: 3
          }
        },
        line: 44
      },
      "3": {
        name: "(anonymous_3)",
        decl: {
          start: {
            line: 45,
            column: 18
          },
          end: {
            line: 45,
            column: 19
          }
        },
        loc: {
          start: {
            line: 45,
            column: 24
          },
          end: {
            line: 45,
            column: 41
          }
        },
        line: 45
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 29,
            column: 4
          },
          end: {
            line: 31,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 29,
            column: 4
          },
          end: {
            line: 31,
            column: 5
          }
        }, {
          start: {
            line: 29,
            column: 4
          },
          end: {
            line: 31,
            column: 5
          }
        }],
        line: 29
      },
      "1": {
        loc: {
          start: {
            line: 33,
            column: 4
          },
          end: {
            line: 35,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 33,
            column: 4
          },
          end: {
            line: 35,
            column: 5
          }
        }, {
          start: {
            line: 33,
            column: 4
          },
          end: {
            line: 35,
            column: 5
          }
        }],
        line: 33
      },
      "2": {
        loc: {
          start: {
            line: 44,
            column: 13
          },
          end: {
            line: 44,
            column: 28
          }
        },
        type: "default-arg",
        locations: [{
          start: {
            line: 44,
            column: 26
          },
          end: {
            line: 44,
            column: 28
          }
        }],
        line: 44
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
      "8": 0
    },
    f: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0
    },
    b: {
      "0": [0, 0],
      "1": [0, 0],
      "2": [0]
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
class RPC$1 {
  constructor(handlers) {
    cov_14nsrowl4l.f[0]++;
    cov_14nsrowl4l.s[0]++;
    this.handlers = handlers;
  }

  async request(method, args) {
    cov_14nsrowl4l.f[1]++;
    cov_14nsrowl4l.s[1]++;

    if (!this.handlers) {
      cov_14nsrowl4l.b[0][0]++;
      cov_14nsrowl4l.s[2]++;
      throw new Error('fusion-plugin-rpc requires `handlers`');
    } else {
      cov_14nsrowl4l.b[0][1]++;
    }

    cov_14nsrowl4l.s[3]++;

    if (!this.handlers[method]) {
      cov_14nsrowl4l.b[1][0]++;
      cov_14nsrowl4l.s[4]++;
      throw new MissingHandlerError(method);
    } else {
      cov_14nsrowl4l.b[1][1]++;
    }

    cov_14nsrowl4l.s[5]++;
    return this.handlers[method](args);
  }

}

const plugin = (cov_14nsrowl4l.s[6]++, App.createPlugin({
  deps: {
    handlers: RPCHandlersToken
  },
  provides: ({
    handlers
  } = (cov_14nsrowl4l.b[2][0]++, {})) => {
    cov_14nsrowl4l.f[2]++;
    cov_14nsrowl4l.s[7]++;
    return {
      from: () => {
        cov_14nsrowl4l.f[3]++;
        cov_14nsrowl4l.s[8]++;
        return new RPC$1(handlers);
      }
    };
  }
}));

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/** Copyright (c) 2018 Uber Technologies, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */
const MockPluginToken = App.createToken('test-plugin-token');
const MOCK_JSON_PARAMS = {
  test: 'test-args'
};
const mockService = fusionTestUtils.getService(() => {
  const app = new App__default('content', el => el);
  app.register(RPCHandlersToken, {});
  return app;
}, plugin);
/* Test fixtures */

function createTestFixture() {
  const mockHandlers = {};
  const mockEmitter = new MockEmitter(); // $FlowFixMe

  mockEmitter.from = () => mockEmitter;

  const mockEmitterPlugin = App.createPlugin({
    provides: () => mockEmitter
  });
  const app = new App__default('content', el => el);
  app.register(fusionPluginUniversalEvents.UniversalEventsToken, mockEmitterPlugin);
  app.register(RPCHandlersToken, mockHandlers);
  app.register(MockPluginToken, RPCPlugin);
  return app;
}

function createMockEmitter(props) {
  const emitter = _objectSpread({
    from: () => {
      return emitter;
    },
    emit: () => {},
    setFrequency: () => {},
    teardown: () => {},
    map: () => {},
    on: () => {},
    off: () => {},
    mapEvent: () => {},
    handleEvent: () => {},
    flush: () => undefined
  }, props);

  return emitter;
}

function mockRequest() {
  const req = new MockReq({
    method: 'POST',
    url: '/api/test',
    headers: {
      Accept: 'text/plain'
    }
  });
  req.write(MOCK_JSON_PARAMS);
  req.end();
  return req;
}

test('FusionApp - service resolved', t => {
  const app = createTestFixture();
  let wasResolved = false;
  fusionTestUtils.getSimulator(app, App.createPlugin({
    deps: {
      rpcFactory: MockPluginToken
    },
    provides: ({
      rpcFactory
    }) => {
      t.ok(rpcFactory);
      wasResolved = true;
    }
  }));
  t.true(wasResolved, 'service was resolved');
  t.end();
});
test('service - requires ctx', t => {
  const app = createTestFixture();
  let wasResolved = false;
  fusionTestUtils.getSimulator(app, App.createPlugin({
    deps: {
      rpcFactory: MockPluginToken
    },
    provides: ({
      rpcFactory
    }) => {
      // $FlowFixMe
      t.throws(() => rpcFactory());
      wasResolved = true;
    }
  }));
  t.true(wasResolved, 'service was resolved');
  t.end();
});
test('service - request api', async t => {
  const mockCtx = {
    headers: {},
    memoized: new Map()
  };
  const mockHandlers = {
    test(args, ctx) {
      t.equal(args, 'test-args');
      t.equal(ctx, mockCtx);
      return 1;
    }

  };
  const mockEmitter = createMockEmitter({
    emit: (type, payload) => {
      t.equal(type, 'rpc:method');
      t.equal(payload.method, 'test');
      t.equal(payload.status, 'success');
      t.equal(typeof payload.timing, 'number');
    },

    from() {
      return this;
    }

  });

  const appCreator = () => {
    const app = new App__default('content', el => el);
    app.register(fusionPluginUniversalEvents.UniversalEventsToken, mockEmitter);
    app.register(RPCHandlersToken, mockHandlers);
    return app;
  };

  const rpcFactory = fusionTestUtils.getService(appCreator, RPCPlugin);
  const rpc = rpcFactory.from(mockCtx);
  t.equals(typeof rpc.request, 'function', 'has request method');

  try {
    const p = rpc.request('test', 'test-args');
    t.ok(p instanceof Promise, 'has right return type');
    t.equals((await p), 1, 'method works');
  } catch (e) {
    t.fail(e);
  }

  t.end();
});
test('service - request api with failing request', async t => {
  const mockCtx = {
    headers: {},
    memoized: new Map()
  };
  const e = new Error('fail');
  const mockHandlers = {
    test() {
      return Promise.reject(e);
    }

  };
  const mockEmitter = createMockEmitter({
    emit(type, payload) {
      t.equal(type, 'rpc:method');
      t.equal(payload.method, 'test');
      t.equal(payload.status, 'failure');
      t.equal(typeof payload.timing, 'number');
      t.equal(payload.error, e);
    },

    from() {
      return this;
    }

  });

  const appCreator = () => {
    const app = new App__default('content', el => el);
    app.register(fusionPluginUniversalEvents.UniversalEventsToken, mockEmitter);
    app.register(RPCHandlersToken, mockHandlers);
    return app;
  };

  const rpcFactory = fusionTestUtils.getService(appCreator, RPCPlugin);
  const rpc = rpcFactory.from(mockCtx);
  t.equals(typeof rpc.request, 'function', 'has request method');
  const p = rpc.request('test', 'test-args');
  t.ok(p instanceof Promise, 'has right return type');

  try {
    await p;
    t.fail('should throw before this point');
  } catch (error) {
    t.equal(error, e);
  }

  t.end();
});
test('service - request api with invalid endpoint', async t => {
  const mockCtx = {
    headers: {},
    memoized: new Map()
  };
  const mockHandlers = {};
  const mockEmitter = createMockEmitter({
    emit(type, payload) {
      t.equal(type, 'rpc:error');
      t.equal(payload.method, 'test');
      t.equal(payload.origin, 'server');
      t.equal(payload.error.message, 'Missing RPC handler for test');
    },

    from() {
      return this;
    }

  });

  const appCreator = () => {
    const app = new App__default('content', el => el);
    app.register(fusionPluginUniversalEvents.UniversalEventsToken, mockEmitter);
    app.register(RPCHandlersToken, mockHandlers);
    return app;
  };

  const rpcFactory = fusionTestUtils.getService(appCreator, RPCPlugin);
  const rpc = rpcFactory.from(mockCtx);
  t.equals(typeof rpc.request, 'function', 'has request method');
  const p = rpc.request('test', 'test-args');
  t.ok(p instanceof Promise, 'has right return type');

  try {
    await p;
    t.fail('should throw before this point');
  } catch (error) {
    t.equal(error.message, 'Missing RPC handler for test');
  }

  t.end();
});
test('FusionJS - middleware resolves', async t => {
  const app = createTestFixture();
  let wasResolved = false;
  const testPlugin = App.createPlugin({
    deps: {
      rpcFactory: MockPluginToken
    },
    middleware: ({
      rpcFactory
    }) => {
      t.ok(rpcFactory);
      wasResolved = true;
      return async () => {};
    }
  });
  app.register(testPlugin);
  fusionTestUtils.getSimulator(app);
  t.true(wasResolved, 'middleware was resolved');
  t.end();
});
test('middleware - invalid endpoint', async t => {
  const mockCtx = {
    headers: {},
    prefix: '',
    path: '/api/valueOf',
    method: 'POST',
    body: {},
    request: {
      body: {}
    },
    memoized: new Map()
  };
  const mockHandlers = {
    something: () => {},
    other: () => {}
  };
  const mockEmitter = createMockEmitter({
    emit(type, payload) {
      t.equal(type, 'rpc:error');
      t.equal(payload.method, 'valueOf');
      t.equal(payload.origin, 'browser');
      t.equal(payload.error.message, 'Missing RPC handler for valueOf', 'emits error in payload');
    }

  });
  const middleware = RPCPlugin.middleware && RPCPlugin.middleware({
    emitter: mockEmitter,
    handlers: mockHandlers
  }, mockService);

  if (!middleware) {
    t.fail();
    t.end();
    return;
  }

  try {
    await middleware(mockCtx, () => Promise.resolve()); // $FlowFixMe

    t.equal(mockCtx.body.data.message, 'Missing RPC handler for valueOf'); // $FlowFixMe

    t.equal(mockCtx.body.data.code, 'ERR_MISSING_HANDLER'); // $FlowFixMe

    t.equal(mockCtx.body.status, 'failure');
    t.equal(mockCtx.status, 404);
  } catch (e) {
    t.fail(e);
  }

  t.end();
});
test('middleware - valid endpoint', async t => {
  const mockCtx = {
    headers: {},
    prefix: '',
    path: '/api/test',
    method: 'POST',
    body: {},
    request: {
      body: 'test-args'
    }
  };
  let executedHandler = false;
  const mockHandlers = {
    test(args, ctx) {
      executedHandler = true;
      t.equal(args, 'test-args');
      t.equal(ctx, mockCtx);
      return 1;
    }

  };
  const mockEmitter = createMockEmitter({
    emit(type, payload) {
      t.equal(type, 'rpc:method');
      t.equal(payload.method, 'test');
      t.equal(payload.origin, 'browser');
      t.equal(payload.status, 'success');
      t.equal(typeof payload.timing, 'number');
    }

  });
  const middleware = RPCPlugin.middleware && RPCPlugin.middleware({
    emitter: mockEmitter,
    handlers: mockHandlers
  }, mockService);

  if (!middleware) {
    t.fail();
    t.end();
    return;
  }

  try {
    await middleware(mockCtx, async () => {
      t.equal(executedHandler, false, 'awaits next');
      
    });
    t.equal(executedHandler, true); // $FlowFixMe

    t.equal(mockCtx.body.data, 1); // $FlowFixMe

    t.equal(mockCtx.body.status, 'success');
  } catch (e) {
    t.fail(e);
  }

  t.end();
});
test('middleware - valid endpoint with route prefix', async t => {
  const mockCtx = {
    headers: {},
    prefix: '/lol',
    path: '/api/test',
    method: 'POST',
    body: {},
    request: {
      body: 'test-args'
    }
  };
  const mockHandlers = {
    test(args, ctx) {
      t.equal(args, 'test-args');
      t.equal(ctx, mockCtx);
      return 1;
    }

  };
  const mockEmitter = createMockEmitter({
    emit(type, payload) {
      t.equal(type, 'rpc:method');
      t.equal(payload.method, 'test');
      t.equal(payload.origin, 'browser');
      t.equal(payload.status, 'success');
      t.equal(typeof payload.timing, 'number');
    }

  });
  const middleware = RPCPlugin.middleware && RPCPlugin.middleware({
    emitter: mockEmitter,
    handlers: mockHandlers
  }, mockService);

  if (!middleware) {
    t.fail();
    t.end();
    return;
  }

  try {
    await middleware(mockCtx, () => Promise.resolve()); // $FlowFixMe

    t.equal(mockCtx.body.data, 1); // $FlowFixMe

    t.equal(mockCtx.body.status, 'success');
  } catch (e) {
    t.fail(e);
  }

  t.end();
});
test('middleware - valid endpoint failure with ResponseError', async t => {
  const mockCtx = {
    headers: {},
    prefix: '',
    path: '/api/test',
    method: 'POST',
    body: {},
    request: {
      body: 'test-args'
    },
    memoized: new Map()
  };
  const e = new ResponseError('Test Failure'); // $FlowFixMe

  e.code = 'ERR_CODE_TEST'; // $FlowFixMe

  e.meta = {
    hello: 'world'
  };
  const mockHandlers = {
    test() {
      return Promise.reject(e);
    }

  };
  const mockEmitter = createMockEmitter({
    emit(type, payload) {
      t.equal(type, 'rpc:method');
      t.equal(payload.method, 'test');
      t.equal(payload.origin, 'browser');
      t.equal(payload.status, 'failure');
      t.equal(typeof payload.timing, 'number');
      t.equal(payload.error, e);
    }

  });
  const middleware = RPCPlugin.middleware && RPCPlugin.middleware({
    emitter: mockEmitter,
    handlers: mockHandlers
  }, mockService);

  if (!middleware) {
    t.fail();
    t.end();
    return;
  }

  try {
    await middleware(mockCtx, () => Promise.resolve()); // $FlowFixMe

    t.equal(mockCtx.body.data.message, e.message); // $FlowFixMe

    t.equal(mockCtx.body.data.code, e.code); // $FlowFixMe

    t.equal(mockCtx.body.data.meta, e.meta); // $FlowFixMe

    t.equal(mockCtx.body.status, 'failure'); // $FlowFixMe

    t.equal(Object.keys(mockCtx.body).length, 2); // $FlowFixMe

    t.equal(Object.keys(mockCtx.body.data).length, 3);
  } catch (e) {
    t.fail(e);
  }

  t.end();
});
test('middleware - valid endpoint failure with standard error', async t => {
  const mockCtx = {
    headers: {},
    prefix: '',
    path: '/api/test',
    method: 'POST',
    body: {},
    request: {
      body: 'test-args'
    },
    memoized: new Map()
  };
  const e = new Error('Test Failure'); // $FlowFixMe

  e.code = 'ERR_CODE_TEST'; // $FlowFixMe

  e.meta = {
    hello: 'world'
  };
  const mockHandlers = {
    test() {
      return Promise.reject(e);
    }

  };
  const mockEmitter = createMockEmitter({
    emit(type, payload) {
      t.equal(type, 'rpc:method');
      t.equal(payload.method, 'test');
      t.equal(payload.origin, 'browser');
      t.equal(payload.status, 'failure');
      t.equal(typeof payload.timing, 'number');
      t.equal(payload.error, e);
    }

  });
  const middleware = RPCPlugin.middleware && RPCPlugin.middleware({
    emitter: mockEmitter,
    handlers: mockHandlers
  }, mockService);

  if (!middleware) {
    t.fail();
    t.end();
    return;
  }

  try {
    await middleware(mockCtx, () => Promise.resolve());
    t.equal( // $FlowFixMe
    mockCtx.body.data.message, 'UnknownError - Use ResponseError for more detailed error messages'); // $FlowFixMe

    t.equal(mockCtx.body.data.code, undefined); // $FlowFixMe

    t.equal(mockCtx.body.data.meta, undefined); // $FlowFixMe

    t.equal(mockCtx.body.status, 'failure'); // $FlowFixMe

    t.equal(Object.keys(mockCtx.body).length, 2); // $FlowFixMe

    t.equal(Object.keys(mockCtx.body.data).length, 3);
  } catch (e) {
    t.fail(e);
  }

  t.end();
});
test('throws when not passed ctx', async t => {
  const app = createTestFixture();
  t.plan(1);
  fusionTestUtils.getSimulator(app, App.createPlugin({
    deps: {
      rpcFactory: MockPluginToken
    },
    middleware: ({
      rpcFactory
    }) => async () => {
      // $FlowFixMe
      t.throws(() => rpcFactory.from(), 'missing context throws error');
      t.end();
    }
  })).request('/');
});
test('middleware - bodyparser options with very small jsonLimit', async t => {
  const mockCtx = {
    req: mockRequest(),
    headers: {},
    prefix: '/lol',
    path: '/api/test',
    method: 'POST',
    request: {
      is: mineTypes => mineTypes.some(mineType => mineType.includes('json'))
    }
  };
  const mockHandlers = {
    test(args, ctx) {
      t.deepEqual(args, MOCK_JSON_PARAMS);
      t.equal(ctx, mockCtx);
      return 1;
    }

  };
  const mockEmitter = createMockEmitter({
    emit(type, payload) {
      t.equal(type, 'rpc:method');
      t.equal(payload.method, 'test');
      t.equal(payload.origin, 'browser');
      t.equal(payload.status, 'success');
      t.equal(typeof payload.timing, 'number');
    }

  });
  const mockBodyParserOptions = {
    jsonLimit: '1b'
  };
  const middleware = RPCPlugin.middleware && RPCPlugin.middleware({
    emitter: mockEmitter,
    handlers: mockHandlers,
    bodyParserOptions: mockBodyParserOptions
  }, mockService);

  if (!middleware) {
    t.fail();
    t.end();
    return;
  }

  try {
    await middleware(mockCtx, () => Promise.resolve());
  } catch (e) {
    t.equal(e.type, 'entity.too.large');
  }

  t.end();
});
test('middleware - bodyparser options with default jsonLimit', async t => {
  const mockCtx = {
    req: mockRequest(),
    headers: {},
    prefix: '/lol',
    path: '/api/test',
    method: 'POST',
    request: {
      is: mineTypes => mineTypes.some(mineType => mineType.includes('json'))
    }
  };
  const mockHandlers = {
    test(args, ctx) {
      t.deepEqual(args, MOCK_JSON_PARAMS);
      t.equal(ctx, mockCtx);
      return 1;
    }

  };
  const mockEmitter = createMockEmitter({
    emit(type, payload) {
      t.equal(type, 'rpc:method');
      t.equal(payload.method, 'test');
      t.equal(payload.origin, 'browser');
      t.equal(payload.status, 'success');
      t.equal(typeof payload.timing, 'number');
    }

  });
  const middleware = RPCPlugin.middleware && RPCPlugin.middleware({
    emitter: mockEmitter,
    handlers: mockHandlers
  }, mockService);

  if (!middleware) {
    t.fail();
    t.end();
    return;
  }

  try {
    await middleware(mockCtx, () => Promise.resolve());
  } catch (e) {
    t.fail(e);
  }

  t.end();
});

/** Copyright (c) 2018 Uber Technologies, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */
const MockPluginToken$1 = App.createToken('test-plugin-token');
const mockCtx = {};

function createTestFixture$1() {
  const mockHandlers = {};
  const app = new App__default('content', el => el);
  app.register(RPCHandlersToken, mockHandlers);
  app.register(MockPluginToken$1, plugin);
  return app;
}

test('mock with missing handler', async t => {
  const app = createTestFixture$1();
  t.plan(1);
  fusionTestUtils.getSimulator(app, App.createPlugin({
    deps: {
      rpcFactory: MockPluginToken$1
    },
    provides: async deps => {
      const rpc = deps.rpcFactory.from(mockCtx);

      try {
        await rpc.request('test');
      } catch (e) {
        t.equal(e.message, 'Missing RPC handler for test');
      } finally {
        t.end();
      }
    }
  }));
});
test('mock with handler', async t => {
  const mockHandlers = {
    test: args => {
      t.deepLooseEqual(args, {
        test: 'args'
      }, 'correct args provded');
      return 10;
    }
  };
  const app = createTestFixture$1();
  app.register(RPCHandlersToken, mockHandlers);
  t.plan(2);
  fusionTestUtils.getSimulator(app, App.createPlugin({
    deps: {
      rpcFactory: MockPluginToken$1
    },
    provides: async deps => {
      const rpc = deps.rpcFactory.from(mockCtx);

      try {
        const result = await rpc.request('test', {
          test: 'args'
        });
        t.equal(result, 10, 'correct request result');
      } catch (e) {
        t.ifError(e);
      } finally {
        t.end();
      }
    }
  }));
});
//# sourceMappingURL=node.js.map
