'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var App = require('fusion-core');
var App__default = _interopDefault(App);
var nodeTimers = _interopDefault(require('timers'));
var gcStats = _interopDefault(require('gc-stats'));
var http = require('http');
var assert = _interopDefault(require('assert'));
var fusionPluginUniversalEvents = require('fusion-plugin-universal-events');
var test = _interopDefault(require('tape-cup'));
var MockEmitter = _interopDefault(require('events'));
var fusionTestUtils = require('fusion-test-utils');

var cov_nwr8w4db9 = function () {
  var path = "/Users/lhorie/Documents/test-private-monorepo/public/fusion-plugin-node-performance-emitter/src/tokens.js",
      hash = "017d471d82f85863a4a5d8de5ead17e3366a0ab6",
      Function = function () {}.constructor,
      global = new Function('return this')(),
      gcv = "__coverage__",
      coverageData = {
    path: "/Users/lhorie/Documents/test-private-monorepo/public/fusion-plugin-node-performance-emitter/src/tokens.js",
    statementMap: {
      "0": {
        start: {
          line: 17,
          column: 55
        },
        end: {
          line: 19,
          column: 1
        }
      },
      "1": {
        start: {
          line: 21,
          column: 42
        },
        end: {
          line: 21,
          column: 68
        }
      },
      "2": {
        start: {
          line: 23,
          column: 56
        },
        end: {
          line: 25,
          column: 1
        }
      },
      "3": {
        start: {
          line: 26,
          column: 50
        },
        end: {
          line: 28,
          column: 1
        }
      },
      "4": {
        start: {
          line: 29,
          column: 50
        },
        end: {
          line: 31,
          column: 1
        }
      }
    },
    fnMap: {},
    branchMap: {},
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0
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
const NodePerformanceEmitterToken = (cov_nwr8w4db9.s[0]++, App.createToken('NodePerformanceEmitterToken'));
const TimersToken = (cov_nwr8w4db9.s[1]++, App.createToken('TimersToken'));
const EventLoopLagIntervalToken = (cov_nwr8w4db9.s[2]++, App.createToken('EventLoopLagIntervalToken'));
const MemoryIntervalToken = (cov_nwr8w4db9.s[3]++, App.createToken('MemoryIntervalToken'));
const SocketIntervalToken = (cov_nwr8w4db9.s[4]++, App.createToken('SocketIntervalToken'));

var cov_36jnaknz0 = function () {
  var path = "/Users/lhorie/Documents/test-private-monorepo/public/fusion-plugin-node-performance-emitter/src/server.js",
      hash = "6183e4dde65a973d77eabce323376abfb20d9b86",
      Function = function () {}.constructor,
      global = new Function('return this')(),
      gcv = "__coverage__",
      coverageData = {
    path: "/Users/lhorie/Documents/test-private-monorepo/public/fusion-plugin-node-performance-emitter/src/server.js",
    statementMap: {
      "0": {
        start: {
          line: 33,
          column: 24
        },
        end: {
          line: 37,
          column: 1
        }
      },
      "1": {
        start: {
          line: 41,
          column: 22
        },
        end: {
          line: 41,
          column: 23
        }
      },
      "2": {
        start: {
          line: 42,
          column: 18
        },
        end: {
          line: 42,
          column: 35
        }
      },
      "3": {
        start: {
          line: 43,
          column: 2
        },
        end: {
          line: 48,
          column: 3
        }
      },
      "4": {
        start: {
          line: 44,
          column: 19
        },
        end: {
          line: 44,
          column: 35
        }
      },
      "5": {
        start: {
          line: 45,
          column: 4
        },
        end: {
          line: 47,
          column: 5
        }
      },
      "6": {
        start: {
          line: 46,
          column: 6
        },
        end: {
          line: 46,
          column: 37
        }
      },
      "7": {
        start: {
          line: 49,
          column: 2
        },
        end: {
          line: 49,
          column: 23
        }
      },
      "8": {
        start: {
          line: 53,
          column: 15
        },
        end: {
          line: 53,
          column: 31
        }
      },
      "9": {
        start: {
          line: 54,
          column: 2
        },
        end: {
          line: 57,
          column: 5
        }
      },
      "10": {
        start: {
          line: 55,
          column: 17
        },
        end: {
          line: 55,
          column: 37
        }
      },
      "11": {
        start: {
          line: 56,
          column: 4
        },
        end: {
          line: 56,
          column: 39
        }
      },
      "12": {
        start: {
          line: 76,
          column: 4
        },
        end: {
          line: 76,
          column: 54
        }
      },
      "13": {
        start: {
          line: 77,
          column: 4
        },
        end: {
          line: 77,
          column: 50
        }
      },
      "14": {
        start: {
          line: 78,
          column: 4
        },
        end: {
          line: 78,
          column: 54
        }
      },
      "15": {
        start: {
          line: 80,
          column: 4
        },
        end: {
          line: 80,
          column: 24
        }
      },
      "16": {
        start: {
          line: 82,
          column: 4
        },
        end: {
          line: 82,
          column: 60
        }
      },
      "17": {
        start: {
          line: 83,
          column: 4
        },
        end: {
          line: 83,
          column: 48
        }
      },
      "18": {
        start: {
          line: 84,
          column: 4
        },
        end: {
          line: 84,
          column: 48
        }
      },
      "19": {
        start: {
          line: 86,
          column: 4
        },
        end: {
          line: 86,
          column: 21
        }
      },
      "20": {
        start: {
          line: 88,
          column: 4
        },
        end: {
          line: 88,
          column: 25
        }
      },
      "21": {
        start: {
          line: 91,
          column: 4
        },
        end: {
          line: 91,
          column: 36
        }
      },
      "22": {
        start: {
          line: 92,
          column: 4
        },
        end: {
          line: 92,
          column: 37
        }
      },
      "23": {
        start: {
          line: 93,
          column: 4
        },
        end: {
          line: 93,
          column: 31
        }
      },
      "24": {
        start: {
          line: 94,
          column: 4
        },
        end: {
          line: 94,
          column: 45
        }
      },
      "25": {
        start: {
          line: 99,
          column: 4
        },
        end: {
          line: 99,
          column: 37
        }
      },
      "26": {
        start: {
          line: 100,
          column: 4
        },
        end: {
          line: 100,
          column: 36
        }
      },
      "27": {
        start: {
          line: 101,
          column: 4
        },
        end: {
          line: 101,
          column: 32
        }
      },
      "28": {
        start: {
          line: 102,
          column: 4
        },
        end: {
          line: 102,
          column: 36
        }
      },
      "29": {
        start: {
          line: 106,
          column: 4
        },
        end: {
          line: 106,
          column: 36
        }
      },
      "30": {
        start: {
          line: 107,
          column: 4
        },
        end: {
          line: 107,
          column: 35
        }
      },
      "31": {
        start: {
          line: 108,
          column: 4
        },
        end: {
          line: 108,
          column: 31
        }
      },
      "32": {
        start: {
          line: 109,
          column: 4
        },
        end: {
          line: 109,
          column: 35
        }
      },
      "33": {
        start: {
          line: 115,
          column: 4
        },
        end: {
          line: 118,
          column: 8
        }
      },
      "34": {
        start: {
          line: 116,
          column: 6
        },
        end: {
          line: 118,
          column: 8
        }
      },
      "35": {
        start: {
          line: 120,
          column: 4
        },
        end: {
          line: 123,
          column: 6
        }
      },
      "36": {
        start: {
          line: 127,
          column: 4
        },
        end: {
          line: 127,
          column: 60
        }
      },
      "37": {
        start: {
          line: 128,
          column: 4
        },
        end: {
          line: 128,
          column: 37
        }
      },
      "38": {
        start: {
          line: 132,
          column: 4
        },
        end: {
          line: 132,
          column: 24
        }
      },
      "39": {
        start: {
          line: 133,
          column: 4
        },
        end: {
          line: 136,
          column: 7
        }
      },
      "40": {
        start: {
          line: 134,
          column: 6
        },
        end: {
          line: 134,
          column: 45
        }
      },
      "41": {
        start: {
          line: 135,
          column: 6
        },
        end: {
          line: 135,
          column: 20
        }
      },
      "42": {
        start: {
          line: 141,
          column: 4
        },
        end: {
          line: 144,
          column: 8
        }
      },
      "43": {
        start: {
          line: 142,
          column: 6
        },
        end: {
          line: 144,
          column: 8
        }
      },
      "44": {
        start: {
          line: 146,
          column: 4
        },
        end: {
          line: 149,
          column: 6
        }
      },
      "45": {
        start: {
          line: 153,
          column: 4
        },
        end: {
          line: 153,
          column: 54
        }
      },
      "46": {
        start: {
          line: 154,
          column: 4
        },
        end: {
          line: 154,
          column: 31
        }
      },
      "47": {
        start: {
          line: 158,
          column: 24
        },
        end: {
          line: 158,
          column: 45
        }
      },
      "48": {
        start: {
          line: 160,
          column: 4
        },
        end: {
          line: 160,
          column: 60
        }
      },
      "49": {
        start: {
          line: 161,
          column: 4
        },
        end: {
          line: 161,
          column: 44
        }
      },
      "50": {
        start: {
          line: 162,
          column: 4
        },
        end: {
          line: 162,
          column: 56
        }
      },
      "51": {
        start: {
          line: 163,
          column: 4
        },
        end: {
          line: 163,
          column: 54
        }
      },
      "52": {
        start: {
          line: 168,
          column: 4
        },
        end: {
          line: 171,
          column: 8
        }
      },
      "53": {
        start: {
          line: 169,
          column: 6
        },
        end: {
          line: 171,
          column: 8
        }
      },
      "54": {
        start: {
          line: 173,
          column: 4
        },
        end: {
          line: 178,
          column: 7
        }
      },
      "55": {
        start: {
          line: 174,
          column: 6
        },
        end: {
          line: 177,
          column: 9
        }
      },
      "56": {
        start: {
          line: 182,
          column: 4
        },
        end: {
          line: 182,
          column: 40
        }
      },
      "57": {
        start: {
          line: 183,
          column: 4
        },
        end: {
          line: 183,
          column: 45
        }
      },
      "58": {
        start: {
          line: 188,
          column: 4
        },
        end: {
          line: 191,
          column: 8
        }
      },
      "59": {
        start: {
          line: 189,
          column: 6
        },
        end: {
          line: 191,
          column: 8
        }
      },
      "60": {
        start: {
          line: 193,
          column: 4
        },
        end: {
          line: 196,
          column: 6
        }
      },
      "61": {
        start: {
          line: 200,
          column: 4
        },
        end: {
          line: 200,
          column: 59
        }
      },
      "62": {
        start: {
          line: 201,
          column: 4
        },
        end: {
          line: 201,
          column: 36
        }
      },
      "63": {
        start: {
          line: 206,
          column: 4
        },
        end: {
          line: 209,
          column: 6
        }
      },
      "64": {
        start: {
          line: 211,
          column: 4
        },
        end: {
          line: 214,
          column: 6
        }
      },
      "65": {
        start: {
          line: 216,
          column: 4
        },
        end: {
          line: 219,
          column: 6
        }
      },
      "66": {
        start: {
          line: 225,
          column: 2
        },
        end: {
          line: 258,
          column: 4
        }
      },
      "67": {
        start: {
          line: 243,
          column: 21
        },
        end: {
          line: 247,
          column: 7
        }
      },
      "68": {
        start: {
          line: 248,
          column: 19
        },
        end: {
          line: 250,
          column: 7
        }
      },
      "69": {
        start: {
          line: 249,
          column: 8
        },
        end: {
          line: 249,
          column: 68
        }
      },
      "70": {
        start: {
          line: 252,
          column: 22
        },
        end: {
          line: 252,
          column: 70
        }
      },
      "71": {
        start: {
          line: 253,
          column: 6
        },
        end: {
          line: 253,
          column: 22
        }
      },
      "72": {
        start: {
          line: 255,
          column: 6
        },
        end: {
          line: 255,
          column: 21
        }
      },
      "73": {
        start: {
          line: 257,
          column: 30
        },
        end: {
          line: 257,
          column: 44
        }
      }
    },
    fnMap: {
      "0": {
        name: "getCountFromGlobalAgent",
        decl: {
          start: {
            line: 40,
            column: 9
          },
          end: {
            line: 40,
            column: 32
          }
        },
        loc: {
          start: {
            line: 40,
            column: 47
          },
          end: {
            line: 50,
            column: 1
          }
        },
        line: 40
      },
      "1": {
        name: "eventLoopLag",
        decl: {
          start: {
            line: 52,
            column: 9
          },
          end: {
            line: 52,
            column: 21
          }
        },
        loc: {
          start: {
            line: 52,
            column: 36
          },
          end: {
            line: 58,
            column: 1
          }
        },
        line: 52
      },
      "2": {
        name: "nextLoop",
        decl: {
          start: {
            line: 54,
            column: 24
          },
          end: {
            line: 54,
            column: 32
          }
        },
        loc: {
          start: {
            line: 54,
            column: 35
          },
          end: {
            line: 57,
            column: 3
          }
        },
        line: 54
      },
      "3": {
        name: "noop",
        decl: {
          start: {
            line: 60,
            column: 9
          },
          end: {
            line: 60,
            column: 13
          }
        },
        loc: {
          start: {
            line: 60,
            column: 16
          },
          end: {
            line: 60,
            column: 18
          }
        },
        line: 60
      },
      "4": {
        name: "(anonymous_4)",
        decl: {
          start: {
            line: 75,
            column: 2
          },
          end: {
            line: 75,
            column: 3
          }
        },
        loc: {
          start: {
            line: 75,
            column: 36
          },
          end: {
            line: 95,
            column: 3
          }
        },
        line: 75
      },
      "5": {
        name: "(anonymous_5)",
        decl: {
          start: {
            line: 98,
            column: 2
          },
          end: {
            line: 98,
            column: 3
          }
        },
        loc: {
          start: {
            line: 98,
            column: 10
          },
          end: {
            line: 103,
            column: 3
          }
        },
        line: 98
      },
      "6": {
        name: "(anonymous_6)",
        decl: {
          start: {
            line: 105,
            column: 2
          },
          end: {
            line: 105,
            column: 3
          }
        },
        loc: {
          start: {
            line: 105,
            column: 9
          },
          end: {
            line: 110,
            column: 3
          }
        },
        line: 105
      },
      "7": {
        name: "(anonymous_7)",
        decl: {
          start: {
            line: 114,
            column: 2
          },
          end: {
            line: 114,
            column: 3
          }
        },
        loc: {
          start: {
            line: 114,
            column: 30
          },
          end: {
            line: 124,
            column: 3
          }
        },
        line: 114
      },
      "8": {
        name: "(anonymous_8)",
        decl: {
          start: {
            line: 126,
            column: 2
          },
          end: {
            line: 126,
            column: 3
          }
        },
        loc: {
          start: {
            line: 126,
            column: 29
          },
          end: {
            line: 129,
            column: 3
          }
        },
        line: 126
      },
      "9": {
        name: "(anonymous_9)",
        decl: {
          start: {
            line: 131,
            column: 2
          },
          end: {
            line: 131,
            column: 3
          }
        },
        loc: {
          start: {
            line: 131,
            column: 35
          },
          end: {
            line: 137,
            column: 3
          }
        },
        line: 131
      },
      "10": {
        name: "(anonymous_10)",
        decl: {
          start: {
            line: 133,
            column: 17
          },
          end: {
            line: 133,
            column: 18
          }
        },
        loc: {
          start: {
            line: 133,
            column: 34
          },
          end: {
            line: 136,
            column: 5
          }
        },
        line: 133
      },
      "11": {
        name: "(anonymous_11)",
        decl: {
          start: {
            line: 140,
            column: 2
          },
          end: {
            line: 140,
            column: 3
          }
        },
        loc: {
          start: {
            line: 140,
            column: 29
          },
          end: {
            line: 150,
            column: 3
          }
        },
        line: 140
      },
      "12": {
        name: "(anonymous_12)",
        decl: {
          start: {
            line: 152,
            column: 2
          },
          end: {
            line: 152,
            column: 3
          }
        },
        loc: {
          start: {
            line: 152,
            column: 28
          },
          end: {
            line: 155,
            column: 3
          }
        },
        line: 152
      },
      "13": {
        name: "(anonymous_13)",
        decl: {
          start: {
            line: 157,
            column: 2
          },
          end: {
            line: 157,
            column: 3
          }
        },
        loc: {
          start: {
            line: 157,
            column: 20
          },
          end: {
            line: 164,
            column: 3
          }
        },
        line: 157
      },
      "14": {
        name: "(anonymous_14)",
        decl: {
          start: {
            line: 167,
            column: 2
          },
          end: {
            line: 167,
            column: 3
          }
        },
        loc: {
          start: {
            line: 167,
            column: 25
          },
          end: {
            line: 179,
            column: 3
          }
        },
        line: 167
      },
      "15": {
        name: "(anonymous_15)",
        decl: {
          start: {
            line: 173,
            column: 24
          },
          end: {
            line: 173,
            column: 25
          }
        },
        loc: {
          start: {
            line: 173,
            column: 33
          },
          end: {
            line: 178,
            column: 5
          }
        },
        line: 173
      },
      "16": {
        name: "(anonymous_16)",
        decl: {
          start: {
            line: 181,
            column: 2
          },
          end: {
            line: 181,
            column: 3
          }
        },
        loc: {
          start: {
            line: 181,
            column: 24
          },
          end: {
            line: 184,
            column: 3
          }
        },
        line: 181
      },
      "17": {
        name: "(anonymous_17)",
        decl: {
          start: {
            line: 187,
            column: 2
          },
          end: {
            line: 187,
            column: 3
          }
        },
        loc: {
          start: {
            line: 187,
            column: 29
          },
          end: {
            line: 197,
            column: 3
          }
        },
        line: 187
      },
      "18": {
        name: "(anonymous_18)",
        decl: {
          start: {
            line: 199,
            column: 2
          },
          end: {
            line: 199,
            column: 3
          }
        },
        loc: {
          start: {
            line: 199,
            column: 28
          },
          end: {
            line: 202,
            column: 3
          }
        },
        line: 199
      },
      "19": {
        name: "(anonymous_19)",
        decl: {
          start: {
            line: 204,
            column: 2
          },
          end: {
            line: 204,
            column: 3
          }
        },
        loc: {
          start: {
            line: 204,
            column: 20
          },
          end: {
            line: 220,
            column: 3
          }
        },
        line: 204
      },
      "20": {
        name: "(anonymous_20)",
        decl: {
          start: {
            line: 236,
            column: 14
          },
          end: {
            line: 236,
            column: 15
          }
        },
        loc: {
          start: {
            line: 242,
            column: 10
          },
          end: {
            line: 256,
            column: 5
          }
        },
        line: 242
      },
      "21": {
        name: "(anonymous_21)",
        decl: {
          start: {
            line: 248,
            column: 19
          },
          end: {
            line: 248,
            column: 20
          }
        },
        loc: {
          start: {
            line: 248,
            column: 40
          },
          end: {
            line: 250,
            column: 7
          }
        },
        line: 248
      },
      "22": {
        name: "(anonymous_22)",
        decl: {
          start: {
            line: 257,
            column: 13
          },
          end: {
            line: 257,
            column: 14
          }
        },
        loc: {
          start: {
            line: 257,
            column: 30
          },
          end: {
            line: 257,
            column: 44
          }
        },
        line: 257
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 45,
            column: 4
          },
          end: {
            line: 47,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 45,
            column: 4
          },
          end: {
            line: 47,
            column: 5
          }
        }, {
          start: {
            line: 45,
            column: 4
          },
          end: {
            line: 47,
            column: 5
          }
        }],
        line: 45
      },
      "1": {
        loc: {
          start: {
            line: 45,
            column: 8
          },
          end: {
            line: 45,
            column: 31
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 45,
            column: 8
          },
          end: {
            line: 45,
            column: 14
          }
        }, {
          start: {
            line: 45,
            column: 18
          },
          end: {
            line: 45,
            column: 31
          }
        }],
        line: 45
      },
      "2": {
        loc: {
          start: {
            line: 115,
            column: 4
          },
          end: {
            line: 118,
            column: 8
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 115,
            column: 4
          },
          end: {
            line: 118,
            column: 8
          }
        }, {
          start: {
            line: 115,
            column: 4
          },
          end: {
            line: 118,
            column: 8
          }
        }],
        line: 115
      },
      "3": {
        loc: {
          start: {
            line: 132,
            column: 11
          },
          end: {
            line: 132,
            column: 23
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 132,
            column: 11
          },
          end: {
            line: 132,
            column: 15
          }
        }, {
          start: {
            line: 132,
            column: 19
          },
          end: {
            line: 132,
            column: 23
          }
        }],
        line: 132
      },
      "4": {
        loc: {
          start: {
            line: 141,
            column: 4
          },
          end: {
            line: 144,
            column: 8
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 141,
            column: 4
          },
          end: {
            line: 144,
            column: 8
          }
        }, {
          start: {
            line: 141,
            column: 4
          },
          end: {
            line: 144,
            column: 8
          }
        }],
        line: 141
      },
      "5": {
        loc: {
          start: {
            line: 168,
            column: 4
          },
          end: {
            line: 171,
            column: 8
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 168,
            column: 4
          },
          end: {
            line: 171,
            column: 8
          }
        }, {
          start: {
            line: 168,
            column: 4
          },
          end: {
            line: 171,
            column: 8
          }
        }],
        line: 168
      },
      "6": {
        loc: {
          start: {
            line: 188,
            column: 4
          },
          end: {
            line: 191,
            column: 8
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 188,
            column: 4
          },
          end: {
            line: 191,
            column: 8
          }
        }, {
          start: {
            line: 188,
            column: 4
          },
          end: {
            line: 191,
            column: 8
          }
        }],
        line: 188
      },
      "7": {
        loc: {
          start: {
            line: 225,
            column: 2
          },
          end: {
            line: 258,
            column: 4
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 225,
            column: 2
          },
          end: {
            line: 225,
            column: 10
          }
        }, {
          start: {
            line: 226,
            column: 2
          },
          end: {
            line: 258,
            column: 4
          }
        }],
        line: 225
      },
      "8": {
        loc: {
          start: {
            line: 238,
            column: 6
          },
          end: {
            line: 238,
            column: 25
          }
        },
        type: "default-arg",
        locations: [{
          start: {
            line: 238,
            column: 15
          },
          end: {
            line: 238,
            column: 25
          }
        }],
        line: 238
      },
      "9": {
        loc: {
          start: {
            line: 239,
            column: 6
          },
          end: {
            line: 239,
            column: 65
          }
        },
        type: "default-arg",
        locations: [{
          start: {
            line: 239,
            column: 29
          },
          end: {
            line: 239,
            column: 65
          }
        }],
        line: 239
      },
      "10": {
        loc: {
          start: {
            line: 240,
            column: 6
          },
          end: {
            line: 240,
            column: 53
          }
        },
        type: "default-arg",
        locations: [{
          start: {
            line: 240,
            column: 23
          },
          end: {
            line: 240,
            column: 53
          }
        }],
        line: 240
      },
      "11": {
        loc: {
          start: {
            line: 241,
            column: 6
          },
          end: {
            line: 241,
            column: 53
          }
        },
        type: "default-arg",
        locations: [{
          start: {
            line: 241,
            column: 23
          },
          end: {
            line: 241,
            column: 53
          }
        }],
        line: 241
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
      "65": 0,
      "66": 0,
      "67": 0,
      "68": 0,
      "69": 0,
      "70": 0,
      "71": 0,
      "72": 0,
      "73": 0
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
      "22": 0
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
      "8": [0],
      "9": [0],
      "10": [0],
      "11": [0]
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

/* Configuration Tokens */
// $FlowFixMe flow should be aware of native timers module
const CONFIG_DEFAULTS = (cov_36jnaknz0.s[0]++, {
  eventLoopLagInterval: 1000 * 10,
  memoryInterval: 1000 * 10,
  socketInterval: 1000 * 10
});
/* Helper Functions */

function getCountFromGlobalAgent(data) {
  cov_36jnaknz0.f[0]++;
  let numUnassigned = (cov_36jnaknz0.s[1]++, 0);
  const domains = (cov_36jnaknz0.s[2]++, Object.keys(data));
  cov_36jnaknz0.s[3]++;

  for (let x = 0; x < domains.length; x++) {
    const domain = (cov_36jnaknz0.s[4]++, data[domains[x]]);
    cov_36jnaknz0.s[5]++;

    if ((cov_36jnaknz0.b[1][0]++, domain) && (cov_36jnaknz0.b[1][1]++, domain.length)) {
      cov_36jnaknz0.b[0][0]++;
      cov_36jnaknz0.s[6]++;
      numUnassigned += domain.length;
    } else {
      cov_36jnaknz0.b[0][1]++;
    }
  }

  cov_36jnaknz0.s[7]++;
  return numUnassigned;
}

function eventLoopLag(cb) {
  cov_36jnaknz0.f[1]++;
  const time = (cov_36jnaknz0.s[8]++, process.hrtime());
  cov_36jnaknz0.s[9]++;
  setImmediate(function nextLoop() {
    cov_36jnaknz0.f[2]++;
    const diff = (cov_36jnaknz0.s[10]++, process.hrtime(time));
    cov_36jnaknz0.s[11]++;
    return cb(diff[0] * 1e9 + diff[1]);
  });
}

function noop() {
  cov_36jnaknz0.f[3]++;
}
/* Service */


class NodePerformanceEmitter {
  constructor(config, emit, timers) {
    cov_36jnaknz0.f[4]++;
    cov_36jnaknz0.s[12]++;
    assert.ok(config, 'config provided, as expected');
    cov_36jnaknz0.s[13]++;
    assert.ok(emit, 'emit provided, as expected');
    cov_36jnaknz0.s[14]++;
    assert.ok(timers, 'timers provided, as expected');
    cov_36jnaknz0.s[15]++;
    this.gc = gcStats();
    cov_36jnaknz0.s[16]++;
    this.eventLoopLagInterval = config.eventLoopLagInterval;
    cov_36jnaknz0.s[17]++;
    this.memoryInterval = config.memoryInterval;
    cov_36jnaknz0.s[18]++;
    this.socketInterval = config.socketInterval;
    cov_36jnaknz0.s[19]++;
    this.emit = emit;
    cov_36jnaknz0.s[20]++;
    this.timers = timers; // Track running timers

    cov_36jnaknz0.s[21]++;
    this.socketUsageIntervalRef = 0;
    cov_36jnaknz0.s[22]++;
    this.eventLoopLagIntervalRef = 0;
    cov_36jnaknz0.s[23]++;
    this.memoryIntervalRef = 0;
    cov_36jnaknz0.s[24]++;
    this.isTrackingGarbageCollection = false;
  }
  /* PRODUCTIVITY API */


  start() {
    cov_36jnaknz0.f[5]++;
    cov_36jnaknz0.s[25]++;
    this.startTrackingEventLoopLag();
    cov_36jnaknz0.s[26]++;
    this.startTrackingMemoryUsage();
    cov_36jnaknz0.s[27]++;
    this.startTrackingGCUsage();
    cov_36jnaknz0.s[28]++;
    this.startTrackingSocketUsage();
  }

  stop() {
    cov_36jnaknz0.f[6]++;
    cov_36jnaknz0.s[29]++;
    this.stopTrackingEventLoopLag();
    cov_36jnaknz0.s[30]++;
    this.stopTrackingMemoryUsage();
    cov_36jnaknz0.s[31]++;
    this.stopTrackingGCUsage();
    cov_36jnaknz0.s[32]++;
    this.stopTrackingSocketUsage();
  }
  /* POWER API */

  /* Tracking Lag */


  startTrackingEventLoopLag() {
    cov_36jnaknz0.f[7]++;
    cov_36jnaknz0.s[33]++;

    if (this.eventLoopLagIntervalRef) {
      cov_36jnaknz0.b[2][0]++;
      cov_36jnaknz0.s[34]++;
      throw new Error('Event Loop Lag is already being tracked.  Please stop previous instance before beginning a new one.');
    } else {
      cov_36jnaknz0.b[2][1]++;
    }

    cov_36jnaknz0.s[35]++;
    this.eventLoopLagIntervalRef = this.timers.setInterval(this.emitEventLoopLag.bind(this), this.eventLoopLagInterval);
  }

  stopTrackingEventLoopLag() {
    cov_36jnaknz0.f[8]++;
    cov_36jnaknz0.s[36]++;
    this.timers.clearInterval(this.eventLoopLagIntervalRef);
    cov_36jnaknz0.s[37]++;
    this.eventLoopLagIntervalRef = 0;
  }

  emitEventLoopLag(done) {
    cov_36jnaknz0.f[9]++;
    cov_36jnaknz0.s[38]++;
    done = (cov_36jnaknz0.b[3][0]++, done) || (cov_36jnaknz0.b[3][1]++, noop);
    cov_36jnaknz0.s[39]++;
    eventLoopLag(lag => {
      cov_36jnaknz0.f[10]++;
      cov_36jnaknz0.s[40]++;
      this.emit('gauge:event_loop_lag', lag);
      cov_36jnaknz0.s[41]++;
      return done();
    });
  }
  /* Tracking Memory Usage */


  startTrackingMemoryUsage() {
    cov_36jnaknz0.f[11]++;
    cov_36jnaknz0.s[42]++;

    if (this.memoryIntervalRef) {
      cov_36jnaknz0.b[4][0]++;
      cov_36jnaknz0.s[43]++;
      throw new Error('Memory Usage is already being tracked.  Please stop previous instance before beginning a new one.');
    } else {
      cov_36jnaknz0.b[4][1]++;
    }

    cov_36jnaknz0.s[44]++;
    this.memoryIntervalRef = this.timers.setInterval(this.emitMemoryUsage.bind(this), this.memoryInterval);
  }

  stopTrackingMemoryUsage() {
    cov_36jnaknz0.f[12]++;
    cov_36jnaknz0.s[45]++;
    this.timers.clearInterval(this.memoryIntervalRef);
    cov_36jnaknz0.s[46]++;
    this.memoryIntervalRef = 0;
  }

  emitMemoryUsage() {
    cov_36jnaknz0.f[13]++;
    const memoryUsage = (cov_36jnaknz0.s[47]++, process.memoryUsage()); // $FlowFixMe .external should be present in typedef of process.memoryUsage()

    cov_36jnaknz0.s[48]++;
    this.emit('gauge:externalMemory', memoryUsage.external);
    cov_36jnaknz0.s[49]++;
    this.emit('gauge:rss', memoryUsage.rss);
    cov_36jnaknz0.s[50]++;
    this.emit('gauge:heapTotal', memoryUsage.heapTotal);
    cov_36jnaknz0.s[51]++;
    this.emit('gauge:heapUsed', memoryUsage.heapUsed);
  }
  /* Tracking Garbage Collection */


  startTrackingGCUsage() {
    cov_36jnaknz0.f[14]++;
    cov_36jnaknz0.s[52]++;

    if (this.isTrackingGarbageCollection) {
      cov_36jnaknz0.b[5][0]++;
      cov_36jnaknz0.s[53]++;
      throw new Error('Garbage Collection is already being tracked.  Please stop previous instance before beginning a new one.');
    } else {
      cov_36jnaknz0.b[5][1]++;
    }

    cov_36jnaknz0.s[54]++;
    this.gc.on('stats', stats => {
      cov_36jnaknz0.f[15]++;
      cov_36jnaknz0.s[55]++;
      this.emit('timing:gc', {
        duration: stats.pauseMS,
        type: stats.gctype
      });
    });
  }

  stopTrackingGCUsage() {
    cov_36jnaknz0.f[16]++;
    cov_36jnaknz0.s[56]++;
    this.gc.removeAllListeners('stats');
    cov_36jnaknz0.s[57]++;
    this.isTrackingGarbageCollection = false;
  }
  /* Tracking Socket Usage */


  startTrackingSocketUsage() {
    cov_36jnaknz0.f[17]++;
    cov_36jnaknz0.s[58]++;

    if (this.socketUsageIntervalRef) {
      cov_36jnaknz0.b[6][0]++;
      cov_36jnaknz0.s[59]++;
      throw new Error('Socket Usage is already being tracked.  Please stop previous instance before beginning a new one.');
    } else {
      cov_36jnaknz0.b[6][1]++;
    }

    cov_36jnaknz0.s[60]++;
    this.socketUsageIntervalRef = this.timers.setInterval(this.emitSocketUsage.bind(this), this.socketInterval);
  }

  stopTrackingSocketUsage() {
    cov_36jnaknz0.f[18]++;
    cov_36jnaknz0.s[61]++;
    this.timers.clearInterval(this.socketUsageIntervalRef);
    cov_36jnaknz0.s[62]++;
    this.socketUsageIntervalRef = 0;
  }

  emitSocketUsage() {
    cov_36jnaknz0.f[19]++;
    cov_36jnaknz0.s[63]++;
    // number of sockets currently in use
    this.emit('gauge:globalAgentSockets', getCountFromGlobalAgent(http.globalAgent.sockets)); // number of requests that have not yet been assigned to sockets

    cov_36jnaknz0.s[64]++;
    this.emit('gauge:globalAgentRequests', getCountFromGlobalAgent(http.globalAgent.requests)); // number of free sockets

    cov_36jnaknz0.s[65]++;
    this.emit('gauge:globalAgentFreeSockets', getCountFromGlobalAgent(http.globalAgent.freeSockets));
  }

}
/* Plugin */


const plugin = (cov_36jnaknz0.s[66]++, (cov_36jnaknz0.b[7][0]++, true) && (cov_36jnaknz0.b[7][1]++, App.createPlugin({
  deps: {
    emitter: fusionPluginUniversalEvents.UniversalEventsToken,
    timers: TimersToken.optional,

    /* Config */
    eventLoopLagInterval: EventLoopLagIntervalToken.optional,
    memoryInterval: MemoryIntervalToken.optional,
    socketInterval: SocketIntervalToken.optional
  },
  provides: ({
    emitter,
    timers = (cov_36jnaknz0.b[8][0]++, nodeTimers),
    eventLoopLagInterval = (cov_36jnaknz0.b[9][0]++, CONFIG_DEFAULTS.eventLoopLagInterval),
    memoryInterval = (cov_36jnaknz0.b[10][0]++, CONFIG_DEFAULTS.memoryInterval),
    socketInterval = (cov_36jnaknz0.b[11][0]++, CONFIG_DEFAULTS.socketInterval)
  }) => {
    cov_36jnaknz0.f[20]++;
    const config = (cov_36jnaknz0.s[67]++, {
      eventLoopLagInterval: eventLoopLagInterval,
      memoryInterval: memoryInterval,
      socketInterval: socketInterval
    });
    cov_36jnaknz0.s[68]++;

    const emit = (header, payload) => {
      cov_36jnaknz0.f[21]++;
      cov_36jnaknz0.s[69]++;
      emitter.emit(`node-performance-emitter:${header}`, payload);
    };

    const service = (cov_36jnaknz0.s[70]++, new NodePerformanceEmitter(config, emit, timers));
    cov_36jnaknz0.s[71]++;
    service.start();
    cov_36jnaknz0.s[72]++;
    return service;
  },
  cleanup: async service => {
    cov_36jnaknz0.f[22]++;
    cov_36jnaknz0.s[73]++;
    return service.stop();
  }
})));

/** Copyright (c) 2018 Uber Technologies, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

/* eslint-env node */
/* Constants */

const EVENT_PLUGIN_NAME = 'node-performance-emitter';
/* Mocks */

const mockConfig = {
  eventLoopLagInterval: 1,
  memoryInterval: 10,
  socketInterval: 100
};

const mockEmitterFactory = () => {
  const mockEmitter = new MockEmitter(); // $FlowFixMe

  mockEmitter.from = () => mockEmitter;

  return mockEmitter;
};

const mockTimersFactory = t => {
  let _numSetInterval = 0;
  return {
    _getNumSetInterval: () => _numSetInterval,
    setInterval: (fn, timeout) => {
      if (t) {
        t.equals(typeof fn, 'function', 'passes a function into setInterval');
        t.equals(typeof timeout, 'number', 'passes a number into setInterval');
      }

      fn();
      _numSetInterval++;
      return 5;
    },
    clearInterval: function mockClearInterval(intervalId) {
      _numSetInterval--;

      if (t) {
        t.equals(intervalId, 5, 'clears the interval correctly');
      }
    }
  };
};
/* Fixtures */


function createTestFixture() {
  const mockTimers = mockTimersFactory();
  const mockEmitterPlugin = App.createPlugin({
    provides: () => mockEmitterFactory()
  });
  const app = new App__default('content', el => el);
  app.register(NodePerformanceEmitterToken, plugin);
  app.register(TimersToken, mockTimers);
  app.register(fusionPluginUniversalEvents.UniversalEventsToken, mockEmitterPlugin);
  return app;
}

function registerMockConfig(app) {
  app.register(EventLoopLagIntervalToken, mockConfig.eventLoopLagInterval);
  app.register(MemoryIntervalToken, mockConfig.memoryInterval);
  app.register(SocketIntervalToken, mockConfig.socketInterval);
}
/* Tests */


test('FusionApp - service resolved', t => {
  const app = createTestFixture();
  let wasResolved = false;
  fusionTestUtils.getSimulator(app, App.createPlugin({
    deps: {
      perfEmitter: NodePerformanceEmitterToken
    },
    provides: ({
      perfEmitter
    }) => {
      t.ok(perfEmitter);
      wasResolved = true;
    }
  }));
  t.true(wasResolved, 'service was resolved');
  t.end();
});
test('service - cannot track the same types more than once at a time', t => {
  const perfService = fusionTestUtils.getService(createTestFixture, plugin);
  t.throws(() => perfService.start(), 'already running trackers cannot start'); // Able to start now that we've stopped

  t.doesNotThrow(() => perfService.stop(), 'service can be stopped');
  t.doesNotThrow(() => perfService.start(), 'service can run if the trackers are not active');
  t.doesNotThrow(() => perfService.stop(), 'service can be stopped');
  t.doesNotThrow(() => perfService.stop(), 'stopped service can remain stopped');
  t.end();
});
test('service - tracking number of timer intervals set', t => {
  const mockTimers = mockTimersFactory(t);

  const appCreator = () => {
    const app = new App__default('content', el => el);
    app.register(TimersToken, mockTimers);
    app.register(fusionPluginUniversalEvents.UniversalEventsToken, mockEmitterFactory());
    registerMockConfig(app);
    return app;
  };

  const perfService = fusionTestUtils.getService(appCreator, plugin);
  t.assert(mockTimers._getNumSetInterval() === 3, 'socket usage, event loop, and memory intervals should be set');
  perfService.stop();
  t.assert(mockTimers._getNumSetInterval() === 0, 'when stopped, no timer intervals should be set');
  t.end();
});
test('service - tracking emit messages', t => {
  const mockEmitter = mockEmitterFactory();
  const mockTimers = mockTimersFactory();

  const appCreator = () => {
    const app = new App__default('content', el => el);
    app.register(TimersToken, mockTimers);
    app.register(fusionPluginUniversalEvents.UniversalEventsToken, mockEmitter);
    registerMockConfig(app);
    return app;
  }; // Register to listen to emits


  let emitNumberTracker = 0;
  mockEmitter.on(`${EVENT_PLUGIN_NAME}:gauge:event_loop_lag`, payload => {
    emitNumberTracker++;
    t.assert(payload !== undefined, 'event_loop_lag: message received');
  });
  mockEmitter.on(`${EVENT_PLUGIN_NAME}:gauge:rss`, payload => {
    emitNumberTracker++;
    t.assert(payload !== undefined, 'rss: message received');
  });
  mockEmitter.on(`${EVENT_PLUGIN_NAME}:gauge:externalMemory`, payload => {
    emitNumberTracker++;
    t.assert(payload !== undefined, 'externalMemory: message received');
  });
  mockEmitter.on(`${EVENT_PLUGIN_NAME}:gauge:heapTotal`, payload => {
    emitNumberTracker++;
    t.assert(payload !== undefined, 'heapTotal: message received');
  });
  mockEmitter.on(`${EVENT_PLUGIN_NAME}:gauge:heapUsed`, payload => {
    emitNumberTracker++;
    t.assert(payload !== undefined, 'heapUsed: message received');
  });
  mockEmitter.on(`${EVENT_PLUGIN_NAME}:gauge:globalAgentSockets`, payload => {
    emitNumberTracker++;
    t.assert(payload !== undefined, 'globalAgentSockets: message received');
  });
  mockEmitter.on(`${EVENT_PLUGIN_NAME}:gauge:globalAgentRequests`, payload => {
    emitNumberTracker++;
    t.assert(payload !== undefined, 'globalAgentRequests: message received');
  });
  mockEmitter.on(`${EVENT_PLUGIN_NAME}:gauge:globalAgentFreeSockets`, payload => {
    emitNumberTracker++;
    t.assert(payload !== undefined, 'globalAgentFreeSockets: message received');
  });
  const perfService = fusionTestUtils.getService(appCreator, plugin);
  perfService.stop();
  setImmediate(() => {
    t.assert(emitNumberTracker === 8, 'all emits should be captured');
    t.end();
  });
});
test('service - testing garbage collection emits', t => {
  const mockEmitter = mockEmitterFactory();
  const mockTimers = mockTimersFactory();

  const appCreator = () => {
    const app = new App__default('content', el => el);
    app.register(TimersToken, mockTimers);
    app.register(fusionPluginUniversalEvents.UniversalEventsToken, mockEmitter);
    registerMockConfig(app);
    return app;
  }; // Register to listen to emits


  let gcMessageReceived = false;
  let totalDuration = 0;
  mockEmitter.on(`${EVENT_PLUGIN_NAME}:timing:gc`, args => {
    totalDuration += args.duration;
    gcMessageReceived = true;
  });
  const perfService = fusionTestUtils.getService(appCreator, plugin);
  perfService.startTrackingGCUsage(); // Make some garbage!

  var myTracker = [];

  for (var i = 0; i < 1000000; i++) {
    myTracker.push({
      lotsof: 'garbage'
    });
  }

  myTracker = [];
  setTimeout(() => {
    perfService.stopTrackingGCUsage();
    t.assert(gcMessageReceived, 'gc: message was received');
    t.assert(totalDuration > 0, 'gc: total duration is greater than 0');
    t.end();
  }, 100);
});
//# sourceMappingURL=node.js.map
