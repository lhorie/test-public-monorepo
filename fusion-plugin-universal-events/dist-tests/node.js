'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var test = _interopDefault(require('tape-cup'));
var App = require('fusion-core');
var App__default = _interopDefault(App);
var fusionTokens = require('fusion-tokens');
var fusionTestUtils = require('fusion-test-utils');

var cov_w009mnf01 = function () {
  var path = "/Users/lhorie/Documents/test-private-monorepo/public/fusion-plugin-universal-events/src/emitter.js",
      hash = "51eb425bf7fa6b70e49b75349b76f544d9c50614",
      Function = function () {}.constructor,
      global = new Function('return this')(),
      gcv = "__coverage__",
      coverageData = {
    path: "/Users/lhorie/Documents/test-private-monorepo/public/fusion-plugin-universal-events/src/emitter.js",
    statementMap: {
      "0": {
        start: {
          line: 13,
          column: 24
        },
        end: {
          line: 13,
          column: 27
        }
      },
      "1": {
        start: {
          line: 19,
          column: 4
        },
        end: {
          line: 19,
          column: 23
        }
      },
      "2": {
        start: {
          line: 20,
          column: 4
        },
        end: {
          line: 20,
          column: 22
        }
      },
      "3": {
        start: {
          line: 23,
          column: 29
        },
        end: {
          line: 23,
          column: 42
        }
      },
      "4": {
        start: {
          line: 24,
          column: 4
        },
        end: {
          line: 24,
          column: 53
        }
      },
      "5": {
        start: {
          line: 24,
          column: 29
        },
        end: {
          line: 24,
          column: 53
        }
      },
      "6": {
        start: {
          line: 25,
          column: 4
        },
        end: {
          line: 25,
          column: 38
        }
      },
      "7": {
        start: {
          line: 28,
          column: 29
        },
        end: {
          line: 28,
          column: 42
        }
      },
      "8": {
        start: {
          line: 29,
          column: 4
        },
        end: {
          line: 29,
          column: 55
        }
      },
      "9": {
        start: {
          line: 29,
          column: 30
        },
        end: {
          line: 29,
          column: 55
        }
      },
      "10": {
        start: {
          line: 30,
          column: 4
        },
        end: {
          line: 30,
          column: 39
        }
      },
      "11": {
        start: {
          line: 33,
          column: 29
        },
        end: {
          line: 33,
          column: 42
        }
      },
      "12": {
        start: {
          line: 34,
          column: 18
        },
        end: {
          line: 34,
          column: 55
        }
      },
      "13": {
        start: {
          line: 35,
          column: 4
        },
        end: {
          line: 35,
          column: 57
        }
      },
      "14": {
        start: {
          line: 35,
          column: 20
        },
        end: {
          line: 35,
          column: 57
        }
      },
      "15": {
        start: {
          line: 38,
          column: 26
        },
        end: {
          line: 38,
          column: 61
        }
      },
      "16": {
        start: {
          line: 39,
          column: 20
        },
        end: {
          line: 39,
          column: 68
        }
      },
      "17": {
        start: {
          line: 40,
          column: 4
        },
        end: {
          line: 42,
          column: 16
        }
      },
      "18": {
        start: {
          line: 41,
          column: 6
        },
        end: {
          line: 41,
          column: 40
        }
      },
      "19": {
        start: {
          line: 45,
          column: 27
        },
        end: {
          line: 45,
          column: 63
        }
      },
      "20": {
        start: {
          line: 46,
          column: 21
        },
        end: {
          line: 46,
          column: 71
        }
      },
      "21": {
        start: {
          line: 47,
          column: 4
        },
        end: {
          line: 47,
          column: 61
        }
      },
      "22": {
        start: {
          line: 47,
          column: 32
        },
        end: {
          line: 47,
          column: 59
        }
      },
      "23": {
        start: {
          line: 52,
          column: 4
        },
        end: {
          line: 52,
          column: 40
        }
      },
      "24": {
        start: {
          line: 60,
          column: 4
        },
        end: {
          line: 60,
          column: 40
        }
      },
      "25": {
        start: {
          line: 63,
          column: 4
        },
        end: {
          line: 63,
          column: 40
        }
      },
      "26": {
        start: {
          line: 66,
          column: 4
        },
        end: {
          line: 66,
          column: 40
        }
      },
      "27": {
        start: {
          line: 71,
          column: 2
        },
        end: {
          line: 72,
          column: 54
        }
      },
      "28": {
        start: {
          line: 72,
          column: 4
        },
        end: {
          line: 72,
          column: 54
        }
      },
      "29": {
        start: {
          line: 76,
          column: 15
        },
        end: {
          line: 76,
          column: 70
        }
      },
      "30": {
        start: {
          line: 77,
          column: 19
        },
        end: {
          line: 77,
          column: 37
        }
      },
      "31": {
        start: {
          line: 78,
          column: 2
        },
        end: {
          line: 78,
          column: 28
        }
      },
      "32": {
        start: {
          line: 79,
          column: 2
        },
        end: {
          line: 79,
          column: 26
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 18,
            column: 2
          },
          end: {
            line: 18,
            column: 3
          }
        },
        loc: {
          start: {
            line: 18,
            column: 16
          },
          end: {
            line: 21,
            column: 3
          }
        },
        line: 18
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 22,
            column: 2
          },
          end: {
            line: 22,
            column: 3
          }
        },
        loc: {
          start: {
            line: 22,
            column: 21
          },
          end: {
            line: 26,
            column: 3
          }
        },
        line: 22
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 27,
            column: 2
          },
          end: {
            line: 27,
            column: 3
          }
        },
        loc: {
          start: {
            line: 27,
            column: 20
          },
          end: {
            line: 31,
            column: 3
          }
        },
        line: 27
      },
      "3": {
        name: "(anonymous_3)",
        decl: {
          start: {
            line: 32,
            column: 2
          },
          end: {
            line: 32,
            column: 3
          }
        },
        loc: {
          start: {
            line: 32,
            column: 21
          },
          end: {
            line: 36,
            column: 3
          }
        },
        line: 32
      },
      "4": {
        name: "(anonymous_4)",
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
            line: 43,
            column: 3
          }
        },
        line: 37
      },
      "5": {
        name: "(anonymous_5)",
        decl: {
          start: {
            line: 40,
            column: 26
          },
          end: {
            line: 40,
            column: 27
          }
        },
        loc: {
          start: {
            line: 40,
            column: 47
          },
          end: {
            line: 42,
            column: 5
          }
        },
        line: 40
      },
      "6": {
        name: "(anonymous_6)",
        decl: {
          start: {
            line: 44,
            column: 2
          },
          end: {
            line: 44,
            column: 3
          }
        },
        loc: {
          start: {
            line: 44,
            column: 64
          },
          end: {
            line: 48,
            column: 3
          }
        },
        line: 44
      },
      "7": {
        name: "(anonymous_7)",
        decl: {
          start: {
            line: 47,
            column: 21
          },
          end: {
            line: 47,
            column: 22
          }
        },
        loc: {
          start: {
            line: 47,
            column: 32
          },
          end: {
            line: 47,
            column: 59
          }
        },
        line: 47
      },
      "8": {
        name: "(anonymous_8)",
        decl: {
          start: {
            line: 51,
            column: 2
          },
          end: {
            line: 51,
            column: 3
          }
        },
        loc: {
          start: {
            line: 51,
            column: 21
          },
          end: {
            line: 53,
            column: 3
          }
        },
        line: 51
      },
      "9": {
        name: "(anonymous_9)",
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
            column: 51
          },
          end: {
            line: 57,
            column: 3
          }
        },
        line: 55
      },
      "10": {
        name: "(anonymous_10)",
        decl: {
          start: {
            line: 59,
            column: 2
          },
          end: {
            line: 59,
            column: 3
          }
        },
        loc: {
          start: {
            line: 59,
            column: 34
          },
          end: {
            line: 61,
            column: 3
          }
        },
        line: 59
      },
      "11": {
        name: "(anonymous_11)",
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
            column: 13
          },
          end: {
            line: 64,
            column: 3
          }
        },
        line: 62
      },
      "12": {
        name: "(anonymous_12)",
        decl: {
          start: {
            line: 65,
            column: 2
          },
          end: {
            line: 65,
            column: 3
          }
        },
        loc: {
          start: {
            line: 65,
            column: 10
          },
          end: {
            line: 67,
            column: 3
          }
        },
        line: 65
      },
      "13": {
        name: "validateHandler",
        decl: {
          start: {
            line: 70,
            column: 9
          },
          end: {
            line: 70,
            column: 24
          }
        },
        loc: {
          start: {
            line: 70,
            column: 34
          },
          end: {
            line: 73,
            column: 1
          }
        },
        line: 70
      },
      "14": {
        name: "getArgs",
        decl: {
          start: {
            line: 75,
            column: 9
          },
          end: {
            line: 75,
            column: 16
          }
        },
        loc: {
          start: {
            line: 75,
            column: 23
          },
          end: {
            line: 80,
            column: 1
          }
        },
        line: 75
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 24,
            column: 4
          },
          end: {
            line: 24,
            column: 53
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 24,
            column: 4
          },
          end: {
            line: 24,
            column: 53
          }
        }, {
          start: {
            line: 24,
            column: 4
          },
          end: {
            line: 24,
            column: 53
          }
        }],
        line: 24
      },
      "1": {
        loc: {
          start: {
            line: 29,
            column: 4
          },
          end: {
            line: 29,
            column: 55
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 29,
            column: 4
          },
          end: {
            line: 29,
            column: 55
          }
        }, {
          start: {
            line: 29,
            column: 4
          },
          end: {
            line: 29,
            column: 55
          }
        }],
        line: 29
      },
      "2": {
        loc: {
          start: {
            line: 35,
            column: 4
          },
          end: {
            line: 35,
            column: 57
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 35,
            column: 4
          },
          end: {
            line: 35,
            column: 57
          }
        }, {
          start: {
            line: 35,
            column: 4
          },
          end: {
            line: 35,
            column: 57
          }
        }],
        line: 35
      },
      "3": {
        loc: {
          start: {
            line: 38,
            column: 26
          },
          end: {
            line: 38,
            column: 61
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 38,
            column: 26
          },
          end: {
            line: 38,
            column: 55
          }
        }, {
          start: {
            line: 38,
            column: 59
          },
          end: {
            line: 38,
            column: 61
          }
        }],
        line: 38
      },
      "4": {
        loc: {
          start: {
            line: 39,
            column: 21
          },
          end: {
            line: 39,
            column: 45
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 39,
            column: 21
          },
          end: {
            line: 39,
            column: 39
          }
        }, {
          start: {
            line: 39,
            column: 43
          },
          end: {
            line: 39,
            column: 45
          }
        }],
        line: 39
      },
      "5": {
        loc: {
          start: {
            line: 45,
            column: 27
          },
          end: {
            line: 45,
            column: 63
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 45,
            column: 27
          },
          end: {
            line: 45,
            column: 57
          }
        }, {
          start: {
            line: 45,
            column: 61
          },
          end: {
            line: 45,
            column: 63
          }
        }],
        line: 45
      },
      "6": {
        loc: {
          start: {
            line: 46,
            column: 22
          },
          end: {
            line: 46,
            column: 47
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 46,
            column: 22
          },
          end: {
            line: 46,
            column: 41
          }
        }, {
          start: {
            line: 46,
            column: 45
          },
          end: {
            line: 46,
            column: 47
          }
        }],
        line: 46
      },
      "7": {
        loc: {
          start: {
            line: 71,
            column: 2
          },
          end: {
            line: 72,
            column: 54
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 71,
            column: 2
          },
          end: {
            line: 72,
            column: 54
          }
        }, {
          start: {
            line: 71,
            column: 2
          },
          end: {
            line: 72,
            column: 54
          }
        }],
        line: 71
      },
      "8": {
        loc: {
          start: {
            line: 76,
            column: 15
          },
          end: {
            line: 76,
            column: 70
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 76,
            column: 45
          },
          end: {
            line: 76,
            column: 52
          }
        }, {
          start: {
            line: 76,
            column: 55
          },
          end: {
            line: 76,
            column: 70
          }
        }],
        line: 76
      },
      "9": {
        loc: {
          start: {
            line: 77,
            column: 19
          },
          end: {
            line: 77,
            column: 37
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 77,
            column: 19
          },
          end: {
            line: 77,
            column: 26
          }
        }, {
          start: {
            line: 77,
            column: 30
          },
          end: {
            line: 77,
            column: 37
          }
        }],
        line: 77
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
      "32": 0
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
      "14": 0
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
      "9": [0, 0]
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
const globalEventType = (cov_w009mnf01.s[0]++, '*');
class UniversalEmitter {
  constructor() {
    cov_w009mnf01.f[0]++;
    cov_w009mnf01.s[1]++;
    this.handlers = {};
    cov_w009mnf01.s[2]++;
    this.mappers = {};
  }

  map(...args) {
    cov_w009mnf01.f[1]++;
    const {
      type,
      callback
    } = (cov_w009mnf01.s[3]++, getArgs(args));
    cov_w009mnf01.s[4]++;

    if (!this.mappers[type]) {
      cov_w009mnf01.b[0][0]++;
      cov_w009mnf01.s[5]++;
      this.mappers[type] = [];
    } else {
      cov_w009mnf01.b[0][1]++;
    }

    cov_w009mnf01.s[6]++;
    this.mappers[type].push(callback);
  }

  on(...args) {
    cov_w009mnf01.f[2]++;
    const {
      type,
      callback
    } = (cov_w009mnf01.s[7]++, getArgs(args));
    cov_w009mnf01.s[8]++;

    if (!this.handlers[type]) {
      cov_w009mnf01.b[1][0]++;
      cov_w009mnf01.s[9]++;
      this.handlers[type] = [];
    } else {
      cov_w009mnf01.b[1][1]++;
    }

    cov_w009mnf01.s[10]++;
    this.handlers[type].push(callback);
  }

  off(...args) {
    cov_w009mnf01.f[3]++;
    const {
      type,
      callback
    } = (cov_w009mnf01.s[11]++, getArgs(args));
    const index = (cov_w009mnf01.s[12]++, this.handlers[type].indexOf(callback));
    cov_w009mnf01.s[13]++;

    if (index > -1) {
      cov_w009mnf01.b[2][0]++;
      cov_w009mnf01.s[14]++;
      this.handlers[type].splice(index, 1);
    } else {
      cov_w009mnf01.b[2][1]++;
    }
  }

  mapEvent(type, payload, ctx) {
    cov_w009mnf01.f[4]++;
    const globalMappers = (cov_w009mnf01.s[15]++, (cov_w009mnf01.b[3][0]++, this.mappers[globalEventType]) || (cov_w009mnf01.b[3][1]++, []));
    const mappers = (cov_w009mnf01.s[16]++, ((cov_w009mnf01.b[4][0]++, this.mappers[type]) || (cov_w009mnf01.b[4][1]++, [])).concat(globalMappers));
    cov_w009mnf01.s[17]++;
    return mappers.reduce((payload, mapper) => {
      cov_w009mnf01.f[5]++;
      cov_w009mnf01.s[18]++;
      return mapper(payload, ctx, type);
    }, payload);
  }

  handleEvent(type, payload, ctx) {
    cov_w009mnf01.f[6]++;
    const globalHandlers = (cov_w009mnf01.s[19]++, (cov_w009mnf01.b[5][0]++, this.handlers[globalEventType]) || (cov_w009mnf01.b[5][1]++, []));
    const handlers = (cov_w009mnf01.s[20]++, ((cov_w009mnf01.b[6][0]++, this.handlers[type]) || (cov_w009mnf01.b[6][1]++, [])).concat(globalHandlers));
    cov_w009mnf01.s[21]++;
    handlers.forEach(handler => {
      cov_w009mnf01.f[7]++;
      cov_w009mnf01.s[22]++;
      return handler(payload, ctx, type);
    });
  }
  /* eslint-disable-next-line  no-unused-vars */


  from(ctx) {
    cov_w009mnf01.f[8]++;
    cov_w009mnf01.s[23]++;
    throw new Error('Not implemented.');
  }
  /* eslint-disable-next-line  no-unused-vars */


  emit(type, payload, ctx) {
    cov_w009mnf01.f[9]++;
  } // throw new Error('Not implemented.');

  /* eslint-disable-next-line  no-unused-vars */


  setFrequency(frequency) {
    cov_w009mnf01.f[10]++;
    cov_w009mnf01.s[24]++;
    throw new Error('Not implemented.');
  }

  teardown() {
    cov_w009mnf01.f[11]++;
    cov_w009mnf01.s[25]++;
    throw new Error('Not implemented.');
  }

  flush() {
    cov_w009mnf01.f[12]++;
    cov_w009mnf01.s[26]++;
    throw new Error('Not implemented.');
  }

}

function validateHandler(handler) {
  cov_w009mnf01.f[13]++;
  cov_w009mnf01.s[27]++;

  if (typeof handler !== 'function') {
    cov_w009mnf01.b[7][0]++;
    cov_w009mnf01.s[28]++;
    throw new TypeError('handler must be a function');
  } else {
    cov_w009mnf01.b[7][1]++;
  }
}

function getArgs(args) {
  cov_w009mnf01.f[14]++;
  const type = (cov_w009mnf01.s[29]++, typeof args[0] === 'string' ? (cov_w009mnf01.b[8][0]++, args[0]) : (cov_w009mnf01.b[8][1]++, globalEventType));
  const callback = (cov_w009mnf01.s[30]++, (cov_w009mnf01.b[9][0]++, args[1]) || (cov_w009mnf01.b[9][1]++, args[0]));
  cov_w009mnf01.s[31]++;
  validateHandler(callback);
  cov_w009mnf01.s[32]++;
  return {
    type,
    callback
  };
}

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/** Copyright (c) 2018 Uber Technologies, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */
test('Base EventEmitter on/off', t => {
  t.ok(typeof UniversalEmitter === 'function', 'exported correctly');
  const events = new UniversalEmitter();
  let eventHandlerCount = 0;

  function handleEvent(event) {
    eventHandlerCount++;
    t.equal(event, 'test-data', 'correct payload passed to handler');
  }

  events.on('some-event', handleEvent);
  events.handleEvent('other-event', 'other-data');
  events.handleEvent('some-event', 'test-data');
  t.equal(eventHandlerCount, 1, 'calls handler one time');
  events.off('some-event', handleEvent);
  events.handleEvent('some-event', 'test-data');
  t.equal(eventHandlerCount, 1, 'does not call the handler after removal');
  t.end();
});
test('Base EventEmitter mappers', t => {
  const events = new UniversalEmitter();
  let eventHandlerCount = 0;
  let mapCount = 0;
  events.on('test', event => {
    eventHandlerCount++;
    t.equal(event.a, true, 'correct payload passed to handler');
    t.equal(event.b, true, 'correct payload passed to handler');
  });
  events.map('test', event => {
    mapCount++;
    return Object.assign(event, {
      a: true
    });
  });
  const mappedPayload = events.mapEvent('test', {
    b: true
  });
  events.handleEvent('test', mappedPayload);
  t.equal(eventHandlerCount, 1, 'calls handler one time');
  t.equal(mapCount, 1, 'calls mapper one time');
  t.end();
});
test('Base EventEmitter * mappers', t => {
  const events = new UniversalEmitter();
  events.map('*', payload => {
    return _objectSpread({}, payload, {
      a: true
    });
  });
  events.map('test', payload => {
    return _objectSpread({}, payload, {
      b: true
    });
  });
  events.on('test', payload => {
    t.deepLooseEqual(payload, {
      a: true,
      b: true,
      c: true
    });
    t.end();
  });
  const mappedPayload = events.mapEvent('test', {
    c: true
  });
  events.handleEvent('test', mappedPayload);
});
test('Base EventEmitter implicit * mappers', t => {
  const events = new UniversalEmitter();
  events.map(payload => {
    return _objectSpread({}, payload, {
      a: true
    });
  });
  events.map('test', payload => {
    return _objectSpread({}, payload, {
      b: true
    });
  });
  events.on('test', payload => {
    t.deepLooseEqual(payload, {
      a: true,
      b: true,
      c: true
    });
    t.end();
  });
  const mappedPayload = events.mapEvent('test', {
    c: true
  });
  events.handleEvent('test', mappedPayload);
});
test('Base EventEmitter * handlers', t => {
  const events = new UniversalEmitter();
  let calledGlobal = false;
  let calledNormal = false;
  events.on((payload, ctx, type) => {
    t.deepLooseEqual(payload, {
      c: true
    });
    t.equal(type, 'test', 'correct type passed to handler');
    calledGlobal = true;
  });
  events.on('test', payload => {
    t.deepLooseEqual(payload, {
      c: true
    });
    calledNormal = true;
  });
  events.handleEvent('test', {
    c: true
  });
  t.ok(calledGlobal);
  t.ok(calledNormal);
  t.end();
});
test('Base EventEmitter implicit * handlers', t => {
  const events = new UniversalEmitter();
  let calledGlobal = false;
  let calledNormal = false;
  events.on('*', (payload, ctx, type) => {
    t.deepLooseEqual(payload, {
      c: true
    });
    t.equal(type, 'test', 'correct type passed to handler');
    calledGlobal = true;
  });
  events.on('test', payload => {
    t.deepLooseEqual(payload, {
      c: true
    });
    calledNormal = true;
  });
  events.handleEvent('test', {
    c: true
  });
  t.ok(calledGlobal);
  t.ok(calledNormal);
  t.end();
});

var cov_4lot7qibx = function () {
  var path = "/Users/lhorie/Documents/test-private-monorepo/public/fusion-plugin-universal-events/src/server.js",
      hash = "a34f4b26875998c71c1d78f4df078200710ab539",
      Function = function () {}.constructor,
      global = new Function('return this')(),
      gcv = "__coverage__",
      coverageData = {
    path: "/Users/lhorie/Documents/test-private-monorepo/public/fusion-plugin-universal-events/src/server.js",
    statementMap: {
      "0": {
        start: {
          line: 24,
          column: 4
        },
        end: {
          line: 24,
          column: 12
        }
      },
      "1": {
        start: {
          line: 25,
          column: 4
        },
        end: {
          line: 27,
          column: 7
        }
      },
      "2": {
        start: {
          line: 26,
          column: 6
        },
        end: {
          line: 26,
          column: 42
        }
      },
      "3": {
        start: {
          line: 30,
          column: 4
        },
        end: {
          line: 30,
          column: 54
        }
      },
      "4": {
        start: {
          line: 31,
          column: 4
        },
        end: {
          line: 31,
          column: 42
        }
      },
      "5": {
        start: {
          line: 45,
          column: 4
        },
        end: {
          line: 45,
          column: 12
        }
      },
      "6": {
        start: {
          line: 46,
          column: 4
        },
        end: {
          line: 46,
          column: 19
        }
      },
      "7": {
        start: {
          line: 47,
          column: 4
        },
        end: {
          line: 47,
          column: 25
        }
      },
      "8": {
        start: {
          line: 48,
          column: 4
        },
        end: {
          line: 48,
          column: 20
        }
      },
      "9": {
        start: {
          line: 49,
          column: 4
        },
        end: {
          line: 49,
          column: 25
        }
      },
      "10": {
        start: {
          line: 53,
          column: 4
        },
        end: {
          line: 57,
          column: 5
        }
      },
      "11": {
        start: {
          line: 54,
          column: 6
        },
        end: {
          line: 54,
          column: 47
        }
      },
      "12": {
        start: {
          line: 56,
          column: 6
        },
        end: {
          line: 56,
          column: 39
        }
      },
      "13": {
        start: {
          line: 60,
          column: 4
        },
        end: {
          line: 60,
          column: 54
        }
      },
      "14": {
        start: {
          line: 61,
          column: 4
        },
        end: {
          line: 61,
          column: 60
        }
      },
      "15": {
        start: {
          line: 62,
          column: 4
        },
        end: {
          line: 62,
          column: 47
        }
      },
      "16": {
        start: {
          line: 63,
          column: 4
        },
        end: {
          line: 63,
          column: 53
        }
      },
      "17": {
        start: {
          line: 66,
          column: 4
        },
        end: {
          line: 68,
          column: 5
        }
      },
      "18": {
        start: {
          line: 67,
          column: 6
        },
        end: {
          line: 67,
          column: 49
        }
      },
      "19": {
        start: {
          line: 69,
          column: 4
        },
        end: {
          line: 69,
          column: 20
        }
      },
      "20": {
        start: {
          line: 70,
          column: 4
        },
        end: {
          line: 70,
          column: 24
        }
      },
      "21": {
        start: {
          line: 78,
          column: 2
        },
        end: {
          line: 108,
          column: 4
        }
      },
      "22": {
        start: {
          line: 80,
          column: 20
        },
        end: {
          line: 80,
          column: 39
        }
      },
      "23": {
        start: {
          line: 82,
          column: 25
        },
        end: {
          line: 82,
          column: 50
        }
      },
      "24": {
        start: {
          line: 83,
          column: 24
        },
        end: {
          line: 83,
          column: 36
        }
      },
      "25": {
        start: {
          line: 84,
          column: 6
        },
        end: {
          line: 106,
          column: 8
        }
      },
      "26": {
        start: {
          line: 85,
          column: 24
        },
        end: {
          line: 85,
          column: 47
        }
      },
      "27": {
        start: {
          line: 86,
          column: 8
        },
        end: {
          line: 99,
          column: 9
        }
      },
      "28": {
        start: {
          line: 87,
          column: 10
        },
        end: {
          line: 87,
          column: 47
        }
      },
      "29": {
        start: {
          line: 89,
          column: 26
        },
        end: {
          line: 89,
          column: 42
        }
      },
      "30": {
        start: {
          line: 90,
          column: 10
        },
        end: {
          line: 98,
          column: 11
        }
      },
      "31": {
        start: {
          line: 91,
          column: 12
        },
        end: {
          line: 94,
          column: 13
        }
      },
      "32": {
        start: {
          line: 92,
          column: 38
        },
        end: {
          line: 92,
          column: 50
        }
      },
      "33": {
        start: {
          line: 93,
          column: 14
        },
        end: {
          line: 93,
          column: 42
        }
      },
      "34": {
        start: {
          line: 95,
          column: 12
        },
        end: {
          line: 95,
          column: 29
        }
      },
      "35": {
        start: {
          line: 97,
          column: 12
        },
        end: {
          line: 97,
          column: 29
        }
      },
      "36": {
        start: {
          line: 102,
          column: 8
        },
        end: {
          line: 102,
          column: 21
        }
      },
      "37": {
        start: {
          line: 103,
          column: 8
        },
        end: {
          line: 105,
          column: 11
        }
      },
      "38": {
        start: {
          line: 104,
          column: 10
        },
        end: {
          line: 104,
          column: 26
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 23,
            column: 2
          },
          end: {
            line: 23,
            column: 3
          }
        },
        loc: {
          start: {
            line: 23,
            column: 16
          },
          end: {
            line: 28,
            column: 3
          }
        },
        line: 23
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 25,
            column: 24
          },
          end: {
            line: 25,
            column: 25
          }
        },
        loc: {
          start: {
            line: 25,
            column: 31
          },
          end: {
            line: 27,
            column: 5
          }
        },
        line: 25
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 29,
            column: 2
          },
          end: {
            line: 29,
            column: 3
          }
        },
        loc: {
          start: {
            line: 29,
            column: 57
          },
          end: {
            line: 32,
            column: 3
          }
        },
        line: 29
      },
      "3": {
        name: "(anonymous_3)",
        decl: {
          start: {
            line: 34,
            column: 2
          },
          end: {
            line: 34,
            column: 3
          }
        },
        loc: {
          start: {
            line: 34,
            column: 17
          },
          end: {
            line: 34,
            column: 19
          }
        },
        line: 34
      },
      "4": {
        name: "(anonymous_4)",
        decl: {
          start: {
            line: 35,
            column: 2
          },
          end: {
            line: 35,
            column: 3
          }
        },
        loc: {
          start: {
            line: 35,
            column: 13
          },
          end: {
            line: 35,
            column: 15
          }
        },
        line: 35
      },
      "5": {
        name: "(anonymous_5)",
        decl: {
          start: {
            line: 44,
            column: 2
          },
          end: {
            line: 44,
            column: 3
          }
        },
        loc: {
          start: {
            line: 44,
            column: 27
          },
          end: {
            line: 50,
            column: 3
          }
        },
        line: 44
      },
      "6": {
        name: "(anonymous_6)",
        decl: {
          start: {
            line: 51,
            column: 2
          },
          end: {
            line: 51,
            column: 3
          }
        },
        loc: {
          start: {
            line: 51,
            column: 22
          },
          end: {
            line: 58,
            column: 3
          }
        },
        line: 51
      },
      "7": {
        name: "(anonymous_7)",
        decl: {
          start: {
            line: 59,
            column: 2
          },
          end: {
            line: 59,
            column: 3
          }
        },
        loc: {
          start: {
            line: 59,
            column: 38
          },
          end: {
            line: 64,
            column: 3
          }
        },
        line: 59
      },
      "8": {
        name: "(anonymous_8)",
        decl: {
          start: {
            line: 65,
            column: 2
          },
          end: {
            line: 65,
            column: 3
          }
        },
        loc: {
          start: {
            line: 65,
            column: 10
          },
          end: {
            line: 71,
            column: 3
          }
        },
        line: 65
      },
      "9": {
        name: "(anonymous_9)",
        decl: {
          start: {
            line: 73,
            column: 2
          },
          end: {
            line: 73,
            column: 3
          }
        },
        loc: {
          start: {
            line: 73,
            column: 17
          },
          end: {
            line: 73,
            column: 19
          }
        },
        line: 73
      },
      "10": {
        name: "(anonymous_10)",
        decl: {
          start: {
            line: 74,
            column: 2
          },
          end: {
            line: 74,
            column: 3
          }
        },
        loc: {
          start: {
            line: 74,
            column: 13
          },
          end: {
            line: 74,
            column: 15
          }
        },
        line: 74
      },
      "11": {
        name: "(anonymous_11)",
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
            column: 20
          },
          end: {
            line: 80,
            column: 39
          }
        },
        line: 80
      },
      "12": {
        name: "(anonymous_12)",
        decl: {
          start: {
            line: 81,
            column: 16
          },
          end: {
            line: 81,
            column: 17
          }
        },
        loc: {
          start: {
            line: 81,
            column: 41
          },
          end: {
            line: 107,
            column: 5
          }
        },
        line: 81
      },
      "13": {
        name: "universalEventsMiddleware",
        decl: {
          start: {
            line: 84,
            column: 28
          },
          end: {
            line: 84,
            column: 53
          }
        },
        loc: {
          start: {
            line: 84,
            column: 65
          },
          end: {
            line: 106,
            column: 7
          }
        },
        line: 84
      },
      "14": {
        name: "(anonymous_14)",
        decl: {
          start: {
            line: 87,
            column: 31
          },
          end: {
            line: 87,
            column: 32
          }
        },
        loc: {
          start: {
            line: 87,
            column: 43
          },
          end: {
            line: 87,
            column: 45
          }
        },
        line: 87
      },
      "15": {
        name: "(anonymous_15)",
        decl: {
          start: {
            line: 103,
            column: 28
          },
          end: {
            line: 103,
            column: 29
          }
        },
        loc: {
          start: {
            line: 103,
            column: 34
          },
          end: {
            line: 105,
            column: 9
          }
        },
        line: 103
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 53,
            column: 4
          },
          end: {
            line: 57,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 53,
            column: 4
          },
          end: {
            line: 57,
            column: 5
          }
        }, {
          start: {
            line: 53,
            column: 4
          },
          end: {
            line: 57,
            column: 5
          }
        }],
        line: 53
      },
      "1": {
        loc: {
          start: {
            line: 78,
            column: 2
          },
          end: {
            line: 108,
            column: 4
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 78,
            column: 2
          },
          end: {
            line: 78,
            column: 10
          }
        }, {
          start: {
            line: 79,
            column: 2
          },
          end: {
            line: 108,
            column: 4
          }
        }],
        line: 78
      },
      "2": {
        loc: {
          start: {
            line: 86,
            column: 8
          },
          end: {
            line: 99,
            column: 9
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 86,
            column: 8
          },
          end: {
            line: 99,
            column: 9
          }
        }, {
          start: {
            line: 86,
            column: 8
          },
          end: {
            line: 99,
            column: 9
          }
        }],
        line: 86
      },
      "3": {
        loc: {
          start: {
            line: 86,
            column: 12
          },
          end: {
            line: 86,
            column: 60
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 86,
            column: 12
          },
          end: {
            line: 86,
            column: 33
          }
        }, {
          start: {
            line: 86,
            column: 37
          },
          end: {
            line: 86,
            column: 60
          }
        }],
        line: 86
      },
      "4": {
        loc: {
          start: {
            line: 90,
            column: 10
          },
          end: {
            line: 98,
            column: 11
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 90,
            column: 10
          },
          end: {
            line: 98,
            column: 11
          }
        }, {
          start: {
            line: 90,
            column: 10
          },
          end: {
            line: 98,
            column: 11
          }
        }],
        line: 90
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
      "38": 0
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
      "15": 0
    },
    b: {
      "0": [0, 0],
      "1": [0, 0],
      "2": [0, 0],
      "3": [0, 0],
      "4": [0, 0]
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
class GlobalEmitter extends UniversalEmitter {
  constructor() {
    cov_4lot7qibx.f[0]++;
    cov_4lot7qibx.s[0]++;
    super();
    cov_4lot7qibx.s[1]++;
    this.from = App.memoize(ctx => {
      cov_4lot7qibx.f[1]++;
      cov_4lot7qibx.s[2]++;
      return new ScopedEmitter(ctx, this);
    });
  }

  emit(type, payload, ctx) {
    cov_4lot7qibx.f[2]++;
    cov_4lot7qibx.s[3]++;
    payload = super.mapEvent(type, payload, this.ctx);
    cov_4lot7qibx.s[4]++;
    super.handleEvent(type, payload, ctx);
  } // mirror browser api


  setFrequency() {
    cov_4lot7qibx.f[3]++;
  }

  teardown() {
    cov_4lot7qibx.f[4]++;
  }

}

class ScopedEmitter extends UniversalEmitter {
  constructor(ctx, parent) {
    cov_4lot7qibx.f[5]++;
    cov_4lot7qibx.s[5]++;
    super();
    cov_4lot7qibx.s[6]++;
    this.ctx = ctx;
    cov_4lot7qibx.s[7]++;
    this.parent = parent;
    cov_4lot7qibx.s[8]++;
    this.batch = [];
    cov_4lot7qibx.s[9]++;
    this.flushed = false;
  }

  emit(type, payload) {
    cov_4lot7qibx.f[6]++;
    cov_4lot7qibx.s[10]++;

    // this logic exists to manage ensuring we send events after the batch
    if (this.flushed) {
      cov_4lot7qibx.b[0][0]++;
      cov_4lot7qibx.s[11]++;
      this.handleBatchedEvent({
        type,
        payload
      });
    } else {
      cov_4lot7qibx.b[0][1]++;
      cov_4lot7qibx.s[12]++;
      this.batch.push({
        type,
        payload
      });
    }
  }

  handleBatchedEvent({
    type,
    payload
  }) {
    cov_4lot7qibx.f[7]++;
    cov_4lot7qibx.s[13]++;
    payload = super.mapEvent(type, payload, this.ctx);
    cov_4lot7qibx.s[14]++;
    payload = this.parent.mapEvent(type, payload, this.ctx);
    cov_4lot7qibx.s[15]++;
    super.handleEvent(type, payload, this.ctx);
    cov_4lot7qibx.s[16]++;
    this.parent.handleEvent(type, payload, this.ctx);
  }

  flush() {
    cov_4lot7qibx.f[8]++;
    cov_4lot7qibx.s[17]++;

    for (let index = 0; index < this.batch.length; index++) {
      cov_4lot7qibx.s[18]++;
      this.handleBatchedEvent(this.batch[index]);
    }

    cov_4lot7qibx.s[19]++;
    this.batch = [];
    cov_4lot7qibx.s[20]++;
    this.flushed = true;
  } // mirror browser api


  setFrequency() {
    cov_4lot7qibx.f[9]++;
  }

  teardown() {
    cov_4lot7qibx.f[10]++;
  }

}

const plugin = (cov_4lot7qibx.s[21]++, (cov_4lot7qibx.b[1][0]++, true) && (cov_4lot7qibx.b[1][1]++, App.createPlugin({
  provides: () => {
    cov_4lot7qibx.f[11]++;
    cov_4lot7qibx.s[22]++;
    return new GlobalEmitter();
  },
  middleware: (deps, globalEmitter) => {
    cov_4lot7qibx.f[12]++;
    const bodyParser = (cov_4lot7qibx.s[23]++, require('koa-bodyparser'));
    const parseBody = (cov_4lot7qibx.s[24]++, bodyParser());
    cov_4lot7qibx.s[25]++;
    return async function universalEventsMiddleware(ctx, next) {
      cov_4lot7qibx.f[13]++;
      const emitter = (cov_4lot7qibx.s[26]++, globalEmitter.from(ctx));
      cov_4lot7qibx.s[27]++;

      if ((cov_4lot7qibx.b[3][0]++, ctx.method === 'POST') && (cov_4lot7qibx.b[3][1]++, ctx.path === '/_events')) {
        cov_4lot7qibx.b[2][0]++;
        cov_4lot7qibx.s[28]++;
        await parseBody(ctx, async () => {
          cov_4lot7qibx.f[14]++;
        }); // $FlowFixMe

        const {
          items
        } = (cov_4lot7qibx.s[29]++, ctx.request.body);
        cov_4lot7qibx.s[30]++;

        if (items) {
          cov_4lot7qibx.b[4][0]++;
          cov_4lot7qibx.s[31]++;

          for (let index = 0; index < items.length; index++) {
            const {
              type,
              payload
            } = (cov_4lot7qibx.s[32]++, items[index]);
            cov_4lot7qibx.s[33]++;
            emitter.emit(type, payload);
          }

          cov_4lot7qibx.s[34]++;
          ctx.status = 200;
        } else {
          cov_4lot7qibx.b[4][1]++;
          cov_4lot7qibx.s[35]++;
          ctx.status = 400;
        }
      } else {
        cov_4lot7qibx.b[2][1]++;
      } // awaiting next before registering `then` on ctx.timing.end to try and get as much as possible
      // into the event batch flush.


      cov_4lot7qibx.s[36]++;
      await next();
      cov_4lot7qibx.s[37]++;
      ctx.timing.end.then(() => {
        cov_4lot7qibx.f[15]++;
        cov_4lot7qibx.s[38]++;
        emitter.flush();
      });
    };
  }
})));

var cov_1dbdgt89au = function () {
  var path = "/Users/lhorie/Documents/test-private-monorepo/public/fusion-plugin-universal-events/src/storage/in-memory.js",
      hash = "b1bb6d4bb5b9eb73cacfe011c75932cbd06aec60",
      Function = function () {}.constructor,
      global = new Function('return this')(),
      gcv = "__coverage__",
      coverageData = {
    path: "/Users/lhorie/Documents/test-private-monorepo/public/fusion-plugin-universal-events/src/storage/in-memory.js",
    statementMap: {
      "0": {
        start: {
          line: 9,
          column: 4
        },
        end: {
          line: 9,
          column: 33
        }
      },
      "1": {
        start: {
          line: 13,
          column: 4
        },
        end: {
          line: 13,
          column: 36
        }
      },
      "2": {
        start: {
          line: 17,
          column: 19
        },
        end: {
          line: 17,
          column: 28
        }
      },
      "3": {
        start: {
          line: 18,
          column: 4
        },
        end: {
          line: 18,
          column: 19
        }
      },
      "4": {
        start: {
          line: 19,
          column: 4
        },
        end: {
          line: 19,
          column: 18
        }
      },
      "5": {
        start: {
          line: 23,
          column: 36
        },
        end: {
          line: 23,
          column: 62
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 8,
            column: 8
          },
          end: {
            line: 8,
            column: 9
          }
        },
        loc: {
          start: {
            line: 8,
            column: 39
          },
          end: {
            line: 10,
            column: 3
          }
        },
        line: 8
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 12,
            column: 15
          },
          end: {
            line: 12,
            column: 16
          }
        },
        loc: {
          start: {
            line: 12,
            column: 46
          },
          end: {
            line: 14,
            column: 3
          }
        },
        line: 12
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 16,
            column: 16
          },
          end: {
            line: 16,
            column: 17
          }
        },
        loc: {
          start: {
            line: 16,
            column: 22
          },
          end: {
            line: 20,
            column: 3
          }
        },
        line: 16
      }
    },
    branchMap: {},
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0
    },
    f: {
      "0": 0,
      "1": 0,
      "2": 0
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

class InMemoryBatchStorage {
  constructor() {
    this.data = [];

    this.add = (...toBeAdded) => {
      cov_1dbdgt89au.f[0]++;
      cov_1dbdgt89au.s[0]++;
      this.data.push(...toBeAdded);
    };

    this.addToStart = (...toBeAdded) => {
      cov_1dbdgt89au.f[1]++;
      cov_1dbdgt89au.s[1]++;
      this.data.unshift(...toBeAdded);
    };

    this.getAndClear = () => {
      cov_1dbdgt89au.f[2]++;
      const events = (cov_1dbdgt89au.s[2]++, this.data);
      cov_1dbdgt89au.s[3]++;
      this.data = [];
      cov_1dbdgt89au.s[4]++;
      return events;
    };
  }

}

const inMemoryBatchStorage = (cov_1dbdgt89au.s[5]++, new InMemoryBatchStorage());

var cov_2xroi8bxi = function () {
  var path = "/Users/lhorie/Documents/test-private-monorepo/public/fusion-plugin-universal-events/src/storage/local-storage.js",
      hash = "5509a25dcbe3f7dff4d87da14293fabfd86253df",
      Function = function () {}.constructor,
      global = new Function('return this')(),
      gcv = "__coverage__",
      coverageData = {
    path: "/Users/lhorie/Documents/test-private-monorepo/public/fusion-plugin-universal-events/src/storage/local-storage.js",
    statementMap: {
      "0": {
        start: {
          line: 7,
          column: 19
        },
        end: {
          line: 7,
          column: 34
        }
      },
      "1": {
        start: {
          line: 9,
          column: 12
        },
        end: {
          line: 16,
          column: 1
        }
      },
      "2": {
        start: {
          line: 10,
          column: 2
        },
        end: {
          line: 15,
          column: 3
        }
      },
      "3": {
        start: {
          line: 11,
          column: 19
        },
        end: {
          line: 11,
          column: 70
        }
      },
      "4": {
        start: {
          line: 12,
          column: 4
        },
        end: {
          line: 12,
          column: 47
        }
      },
      "5": {
        start: {
          line: 14,
          column: 4
        },
        end: {
          line: 14,
          column: 14
        }
      },
      "6": {
        start: {
          line: 18,
          column: 14
        },
        end: {
          line: 24,
          column: 1
        }
      },
      "7": {
        start: {
          line: 19,
          column: 2
        },
        end: {
          line: 23,
          column: 3
        }
      },
      "8": {
        start: {
          line: 20,
          column: 4
        },
        end: {
          line: 20,
          column: 47
        }
      },
      "9": {
        start: {
          line: 26,
          column: 12
        },
        end: {
          line: 32,
          column: 1
        }
      },
      "10": {
        start: {
          line: 27,
          column: 2
        },
        end: {
          line: 31,
          column: 3
        }
      },
      "11": {
        start: {
          line: 28,
          column: 4
        },
        end: {
          line: 28,
          column: 68
        }
      },
      "12": {
        start: {
          line: 36,
          column: 4
        },
        end: {
          line: 36,
          column: 33
        }
      },
      "13": {
        start: {
          line: 40,
          column: 4
        },
        end: {
          line: 40,
          column: 33
        }
      },
      "14": {
        start: {
          line: 44,
          column: 19
        },
        end: {
          line: 44,
          column: 24
        }
      },
      "15": {
        start: {
          line: 45,
          column: 4
        },
        end: {
          line: 45,
          column: 12
        }
      },
      "16": {
        start: {
          line: 46,
          column: 4
        },
        end: {
          line: 46,
          column: 18
        }
      },
      "17": {
        start: {
          line: 50,
          column: 29
        },
        end: {
          line: 50,
          column: 33
        }
      },
      "18": {
        start: {
          line: 52,
          column: 0
        },
        end: {
          line: 59,
          column: 1
        }
      },
      "19": {
        start: {
          line: 53,
          column: 2
        },
        end: {
          line: 53,
          column: 46
        }
      },
      "20": {
        start: {
          line: 54,
          column: 2
        },
        end: {
          line: 54,
          column: 41
        }
      },
      "21": {
        start: {
          line: 58,
          column: 2
        },
        end: {
          line: 58,
          column: 33
        }
      },
      "22": {
        start: {
          line: 61,
          column: 33
        },
        end: {
          line: 63,
          column: 24
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 9,
            column: 12
          },
          end: {
            line: 9,
            column: 13
          }
        },
        loc: {
          start: {
            line: 9,
            column: 18
          },
          end: {
            line: 16,
            column: 1
          }
        },
        line: 9
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 18,
            column: 14
          },
          end: {
            line: 18,
            column: 15
          }
        },
        loc: {
          start: {
            line: 18,
            column: 20
          },
          end: {
            line: 24,
            column: 1
          }
        },
        line: 18
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 26,
            column: 12
          },
          end: {
            line: 26,
            column: 13
          }
        },
        loc: {
          start: {
            line: 26,
            column: 37
          },
          end: {
            line: 32,
            column: 1
          }
        },
        line: 26
      },
      "3": {
        name: "(anonymous_3)",
        decl: {
          start: {
            line: 35,
            column: 8
          },
          end: {
            line: 35,
            column: 9
          }
        },
        loc: {
          start: {
            line: 35,
            column: 39
          },
          end: {
            line: 37,
            column: 3
          }
        },
        line: 35
      },
      "4": {
        name: "(anonymous_4)",
        decl: {
          start: {
            line: 39,
            column: 15
          },
          end: {
            line: 39,
            column: 16
          }
        },
        loc: {
          start: {
            line: 39,
            column: 46
          },
          end: {
            line: 41,
            column: 3
          }
        },
        line: 39
      },
      "5": {
        name: "(anonymous_5)",
        decl: {
          start: {
            line: 43,
            column: 16
          },
          end: {
            line: 43,
            column: 17
          }
        },
        loc: {
          start: {
            line: 43,
            column: 22
          },
          end: {
            line: 47,
            column: 3
          }
        },
        line: 43
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 12,
            column: 11
          },
          end: {
            line: 12,
            column: 46
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 12,
            column: 35
          },
          end: {
            line: 12,
            column: 41
          }
        }, {
          start: {
            line: 12,
            column: 44
          },
          end: {
            line: 12,
            column: 46
          }
        }],
        line: 12
      },
      "1": {
        loc: {
          start: {
            line: 61,
            column: 33
          },
          end: {
            line: 63,
            column: 24
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 62,
            column: 4
          },
          end: {
            line: 62,
            column: 27
          }
        }, {
          start: {
            line: 63,
            column: 4
          },
          end: {
            line: 63,
            column: 24
          }
        }],
        line: 61
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
      "22": 0
    },
    f: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0
    },
    b: {
      "0": [0, 0],
      "1": [0, 0]
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

/* global window */
const storageKey = (cov_2xroi8bxi.s[0]++, 'fusion-events');
cov_2xroi8bxi.s[1]++;

const get = () => {
  cov_2xroi8bxi.f[0]++;
  cov_2xroi8bxi.s[2]++;

  try {
    const events = (cov_2xroi8bxi.s[3]++, JSON.parse(window.localStorage.getItem(storageKey)));
    cov_2xroi8bxi.s[4]++;
    return Array.isArray(events) ? (cov_2xroi8bxi.b[0][0]++, events) : (cov_2xroi8bxi.b[0][1]++, []);
  } catch (e) {
    cov_2xroi8bxi.s[5]++;
    return [];
  }
};

cov_2xroi8bxi.s[6]++;

const clear = () => {
  cov_2xroi8bxi.f[1]++;
  cov_2xroi8bxi.s[7]++;

  try {
    cov_2xroi8bxi.s[8]++;
    window.localStorage.removeItem(storageKey);
  } catch (e) {// do nothing
  }
};

cov_2xroi8bxi.s[9]++;

const set = events => {
  cov_2xroi8bxi.f[2]++;
  cov_2xroi8bxi.s[10]++;

  try {
    cov_2xroi8bxi.s[11]++;
    window.localStorage.setItem(storageKey, JSON.stringify(events));
  } catch (e) {// storage might be full, do nothing
  }
};

class LocalBatchStorage {
  constructor() {
    this.add = (...toBeAdded) => {
      cov_2xroi8bxi.f[3]++;
      cov_2xroi8bxi.s[12]++;
      set(toBeAdded.concat(get()));
    };

    this.addToStart = (...toBeAdded) => {
      cov_2xroi8bxi.f[4]++;
      cov_2xroi8bxi.s[13]++;
      set(toBeAdded.concat(get()));
    };

    this.getAndClear = () => {
      cov_2xroi8bxi.f[5]++;
      const events = (cov_2xroi8bxi.s[14]++, get());
      cov_2xroi8bxi.s[15]++;
      clear();
      cov_2xroi8bxi.s[16]++;
      return events;
    };
  }

}

let isLocalStorageWritable = (cov_2xroi8bxi.s[17]++, true);
cov_2xroi8bxi.s[18]++;

try {
  cov_2xroi8bxi.s[19]++;
  window.localStorage.setItem('test', 'test');
  cov_2xroi8bxi.s[20]++;
  window.localStorage.removeItem('test');
} catch (e) {
  cov_2xroi8bxi.s[21]++;
  // if set/remove item fails localStorage is not writable
  // fallback to in-memory storage
  isLocalStorageWritable = false;
}

const localBatchStorage = (cov_2xroi8bxi.s[22]++, isLocalStorageWritable ? (cov_2xroi8bxi.b[1][0]++, new LocalBatchStorage()) : (cov_2xroi8bxi.b[1][1]++, inMemoryBatchStorage));

var cov_zutkj59mz = function () {
  var path = "/Users/lhorie/Documents/test-private-monorepo/public/fusion-plugin-universal-events/src/storage/index.js",
      hash = "2aa620748910447f39602aa774c84910801f3171",
      Function = function () {}.constructor,
      global = new Function('return this')(),
      gcv = "__coverage__",
      coverageData = {
    path: "/Users/lhorie/Documents/test-private-monorepo/public/fusion-plugin-universal-events/src/storage/index.js",
    statementMap: {
      "0": {
        start: {
          line: 7,
          column: 69
        },
        end: {
          line: 9,
          column: 1
        }
      }
    },
    fnMap: {},
    branchMap: {},
    s: {
      "0": 0
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

const UniversalEventsBatchStorageToken = (cov_zutkj59mz.s[0]++, App.createToken('UniversalEventsBatchStorageToken'));

var cov_8x9j9poxo = function () {
  var path = "/Users/lhorie/Documents/test-private-monorepo/public/fusion-plugin-universal-events/src/browser.js",
      hash = "5f3ef34e01384bef6181723f963a2f673aba298c",
      Function = function () {}.constructor,
      global = new Function('return this')(),
      gcv = "__coverage__",
      coverageData = {
    path: "/Users/lhorie/Documents/test-private-monorepo/public/fusion-plugin-universal-events/src/browser.js",
    statementMap: {
      "0": {
        start: {
          line: 36,
          column: 4
        },
        end: {
          line: 36,
          column: 12
        }
      },
      "1": {
        start: {
          line: 38,
          column: 4
        },
        end: {
          line: 38,
          column: 27
        }
      },
      "2": {
        start: {
          line: 39,
          column: 4
        },
        end: {
          line: 39,
          column: 47
        }
      },
      "3": {
        start: {
          line: 40,
          column: 4
        },
        end: {
          line: 40,
          column: 23
        }
      },
      "4": {
        start: {
          line: 41,
          column: 4
        },
        end: {
          line: 41,
          column: 32
        }
      },
      "5": {
        start: {
          line: 42,
          column: 4
        },
        end: {
          line: 42,
          column: 76
        }
      },
      "6": {
        start: {
          line: 45,
          column: 4
        },
        end: {
          line: 45,
          column: 40
        }
      },
      "7": {
        start: {
          line: 46,
          column: 4
        },
        end: {
          line: 46,
          column: 55
        }
      },
      "8": {
        start: {
          line: 49,
          column: 4
        },
        end: {
          line: 49,
          column: 44
        }
      },
      "9": {
        start: {
          line: 50,
          column: 4
        },
        end: {
          line: 50,
          column: 37
        }
      },
      "10": {
        start: {
          line: 51,
          column: 4
        },
        end: {
          line: 51,
          column: 38
        }
      },
      "11": {
        start: {
          line: 55,
          column: 4
        },
        end: {
          line: 55,
          column: 16
        }
      },
      "12": {
        start: {
          line: 58,
          column: 4
        },
        end: {
          line: 58,
          column: 65
        }
      },
      "13": {
        start: {
          line: 60,
          column: 18
        },
        end: {
          line: 60,
          column: 44
        }
      },
      "14": {
        start: {
          line: 61,
          column: 4
        },
        end: {
          line: 61,
          column: 35
        }
      },
      "15": {
        start: {
          line: 61,
          column: 28
        },
        end: {
          line: 61,
          column: 35
        }
      },
      "16": {
        start: {
          line: 63,
          column: 4
        },
        end: {
          line: 79,
          column: 5
        }
      },
      "17": {
        start: {
          line: 64,
          column: 18
        },
        end: {
          line: 70,
          column: 8
        }
      },
      "18": {
        start: {
          line: 72,
          column: 6
        },
        end: {
          line: 75,
          column: 7
        }
      },
      "19": {
        start: {
          line: 74,
          column: 8
        },
        end: {
          line: 74,
          column: 42
        }
      },
      "20": {
        start: {
          line: 78,
          column: 6
        },
        end: {
          line: 78,
          column: 40
        }
      },
      "21": {
        start: {
          line: 82,
          column: 4
        },
        end: {
          line: 82,
          column: 79
        }
      },
      "22": {
        start: {
          line: 83,
          column: 4
        },
        end: {
          line: 83,
          column: 33
        }
      },
      "23": {
        start: {
          line: 84,
          column: 4
        },
        end: {
          line: 84,
          column: 25
        }
      },
      "24": {
        start: {
          line: 89,
          column: 2
        },
        end: {
          line: 101,
          column: 4
        }
      },
      "25": {
        start: {
          line: 96,
          column: 6
        },
        end: {
          line: 96,
          column: 71
        }
      },
      "26": {
        start: {
          line: 99,
          column: 6
        },
        end: {
          line: 99,
          column: 32
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 31,
            column: 2
          },
          end: {
            line: 31,
            column: 3
          }
        },
        loc: {
          start: {
            line: 35,
            column: 10
          },
          end: {
            line: 43,
            column: 3
          }
        },
        line: 35
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 44,
            column: 2
          },
          end: {
            line: 44,
            column: 3
          }
        },
        loc: {
          start: {
            line: 44,
            column: 40
          },
          end: {
            line: 47,
            column: 3
          }
        },
        line: 44
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
            column: 42
          },
          end: {
            line: 52,
            column: 3
          }
        },
        line: 48
      },
      "3": {
        name: "(anonymous_3)",
        decl: {
          start: {
            line: 54,
            column: 2
          },
          end: {
            line: 54,
            column: 3
          }
        },
        loc: {
          start: {
            line: 54,
            column: 27
          },
          end: {
            line: 56,
            column: 3
          }
        },
        line: 54
      },
      "4": {
        name: "(anonymous_4)",
        decl: {
          start: {
            line: 57,
            column: 26
          },
          end: {
            line: 57,
            column: 27
          }
        },
        loc: {
          start: {
            line: 58,
            column: 4
          },
          end: {
            line: 58,
            column: 65
          }
        },
        line: 58
      },
      "5": {
        name: "(anonymous_5)",
        decl: {
          start: {
            line: 59,
            column: 2
          },
          end: {
            line: 59,
            column: 3
          }
        },
        loc: {
          start: {
            line: 59,
            column: 39
          },
          end: {
            line: 80,
            column: 3
          }
        },
        line: 59
      },
      "6": {
        name: "(anonymous_6)",
        decl: {
          start: {
            line: 81,
            column: 2
          },
          end: {
            line: 81,
            column: 3
          }
        },
        loc: {
          start: {
            line: 81,
            column: 19
          },
          end: {
            line: 85,
            column: 3
          }
        },
        line: 81
      },
      "7": {
        name: "(anonymous_7)",
        decl: {
          start: {
            line: 95,
            column: 14
          },
          end: {
            line: 95,
            column: 15
          }
        },
        loc: {
          start: {
            line: 95,
            column: 36
          },
          end: {
            line: 97,
            column: 5
          }
        },
        line: 95
      },
      "8": {
        name: "(anonymous_8)",
        decl: {
          start: {
            line: 98,
            column: 13
          },
          end: {
            line: 98,
            column: 14
          }
        },
        loc: {
          start: {
            line: 98,
            column: 30
          },
          end: {
            line: 100,
            column: 5
          }
        },
        line: 98
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 34,
            column: 4
          },
          end: {
            line: 34,
            column: 28
          }
        },
        type: "default-arg",
        locations: [{
          start: {
            line: 34,
            column: 24
          },
          end: {
            line: 34,
            column: 28
          }
        }],
        line: 34
      },
      "1": {
        loc: {
          start: {
            line: 58,
            column: 4
          },
          end: {
            line: 58,
            column: 65
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 58,
            column: 4
          },
          end: {
            line: 58,
            column: 41
          }
        }, {
          start: {
            line: 58,
            column: 45
          },
          end: {
            line: 58,
            column: 65
          }
        }],
        line: 58
      },
      "2": {
        loc: {
          start: {
            line: 61,
            column: 4
          },
          end: {
            line: 61,
            column: 35
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 61,
            column: 4
          },
          end: {
            line: 61,
            column: 35
          }
        }, {
          start: {
            line: 61,
            column: 4
          },
          end: {
            line: 61,
            column: 35
          }
        }],
        line: 61
      },
      "3": {
        loc: {
          start: {
            line: 72,
            column: 6
          },
          end: {
            line: 75,
            column: 7
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 72,
            column: 6
          },
          end: {
            line: 75,
            column: 7
          }
        }, {
          start: {
            line: 72,
            column: 6
          },
          end: {
            line: 75,
            column: 7
          }
        }],
        line: 72
      },
      "4": {
        loc: {
          start: {
            line: 89,
            column: 2
          },
          end: {
            line: 101,
            column: 4
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 89,
            column: 2
          },
          end: {
            line: 89,
            column: 13
          }
        }, {
          start: {
            line: 90,
            column: 2
          },
          end: {
            line: 101,
            column: 4
          }
        }],
        line: 89
      },
      "5": {
        loc: {
          start: {
            line: 96,
            column: 41
          },
          end: {
            line: 96,
            column: 69
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 96,
            column: 41
          },
          end: {
            line: 96,
            column: 48
          }
        }, {
          start: {
            line: 96,
            column: 52
          },
          end: {
            line: 96,
            column: 69
          }
        }],
        line: 96
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
      "26": 0
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
      "8": 0
    },
    b: {
      "0": [0],
      "1": [0, 0],
      "2": [0, 0],
      "3": [0, 0],
      "4": [0, 0],
      "5": [0, 0]
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
class UniversalEmitter$1 extends UniversalEmitter {
  constructor(fetch, storage, interval = (cov_8x9j9poxo.b[0][0]++, 5000)) {
    cov_8x9j9poxo.f[0]++;
    cov_8x9j9poxo.s[0]++;
    super(); //privates

    this.flushBeforeTerminated = () => {
      cov_8x9j9poxo.f[4]++;
      cov_8x9j9poxo.s[12]++;
      return (cov_8x9j9poxo.b[1][0]++, document.visibilityState === 'hidden') && (cov_8x9j9poxo.b[1][1]++, this.flushInternal());
    };

    cov_8x9j9poxo.s[1]++;
    this.storage = storage;
    cov_8x9j9poxo.s[2]++;
    this.flush = this.flushInternal.bind(this);
    cov_8x9j9poxo.s[3]++;
    this.fetch = fetch;
    cov_8x9j9poxo.s[4]++;
    this.setFrequency(interval);
    cov_8x9j9poxo.s[5]++;
    window.addEventListener('visibilitychange', this.flushBeforeTerminated);
  }

  setFrequency(frequency) {
    cov_8x9j9poxo.f[1]++;
    cov_8x9j9poxo.s[6]++;
    window.clearInterval(this.interval);
    cov_8x9j9poxo.s[7]++;
    this.interval = setInterval(this.flush, frequency);
  }

  emit(type, payload) {
    cov_8x9j9poxo.f[2]++;
    cov_8x9j9poxo.s[8]++;
    payload = super.mapEvent(type, payload);
    cov_8x9j9poxo.s[9]++;
    super.handleEvent(type, payload);
    cov_8x9j9poxo.s[10]++;
    this.storage.add({
      type,
      payload
    });
  } // match server api


  from() {
    cov_8x9j9poxo.f[3]++;
    cov_8x9j9poxo.s[11]++;
    return this;
  }

  async flushInternal() {
    cov_8x9j9poxo.f[5]++;
    const items = (cov_8x9j9poxo.s[13]++, this.storage.getAndClear());
    cov_8x9j9poxo.s[14]++;

    if (items.length === 0) {
      cov_8x9j9poxo.b[2][0]++;
      cov_8x9j9poxo.s[15]++;
      return;
    } else {
      cov_8x9j9poxo.b[2][1]++;
    }

    cov_8x9j9poxo.s[16]++;

    try {
      const res = (cov_8x9j9poxo.s[17]++, await this.fetch('/_events', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          items
        })
      }));
      cov_8x9j9poxo.s[18]++;

      if (!res.ok) {
        cov_8x9j9poxo.b[3][0]++;
        cov_8x9j9poxo.s[19]++;
        // sending failed so put the logs back into storage
        this.storage.addToStart(...items);
      } else {
        cov_8x9j9poxo.b[3][1]++;
      }
    } catch (e) {
      cov_8x9j9poxo.s[20]++;
      // sending failed so put the logs back into storage
      this.storage.addToStart(...items);
    }
  }

  teardown() {
    cov_8x9j9poxo.f[6]++;
    cov_8x9j9poxo.s[21]++;
    window.removeEventListener('visibilitychange', this.flushBeforeTerminated);
    cov_8x9j9poxo.s[22]++;
    clearInterval(this.interval);
    cov_8x9j9poxo.s[23]++;
    this.interval = null;
  }

}
const plugin$1 = (cov_8x9j9poxo.s[24]++, (cov_8x9j9poxo.b[4][0]++, false) && (cov_8x9j9poxo.b[4][1]++, App.createPlugin({
  deps: {
    fetch: fusionTokens.FetchToken,
    storage: UniversalEventsBatchStorageToken.optional
  },
  provides: ({
    fetch,
    storage
  }) => {
    cov_8x9j9poxo.f[7]++;
    cov_8x9j9poxo.s[25]++;
    return new UniversalEmitter$1(fetch, (cov_8x9j9poxo.b[5][0]++, storage) || (cov_8x9j9poxo.b[5][1]++, localBatchStorage));
  },
  cleanup: async emitter => {
    cov_8x9j9poxo.f[8]++;
    cov_8x9j9poxo.s[26]++;
    return emitter.teardown();
  }
})));

var cov_2m8twzj6le = function () {
  var path = "/Users/lhorie/Documents/test-private-monorepo/public/fusion-plugin-universal-events/src/index.js",
      hash = "54647ac3438f679ded13fda44debb702e57b82e3",
      Function = function () {}.constructor,
      global = new Function('return this')(),
      gcv = "__coverage__",
      coverageData = {
    path: "/Users/lhorie/Documents/test-private-monorepo/public/fusion-plugin-universal-events/src/index.js",
    statementMap: {
      "0": {
        start: {
          line: 19,
          column: 30
        },
        end: {
          line: 19,
          column: 72
        }
      },
      "1": {
        start: {
          line: 24,
          column: 53
        },
        end: {
          line: 26,
          column: 1
        }
      }
    },
    fnMap: {},
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 19,
            column: 30
          },
          end: {
            line: 19,
            column: 72
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 19,
            column: 44
          },
          end: {
            line: 19,
            column: 57
          }
        }, {
          start: {
            line: 19,
            column: 60
          },
          end: {
            line: 19,
            column: 72
          }
        }],
        line: 19
      }
    },
    s: {
      "0": 0,
      "1": 0
    },
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
const UniversalEventsPlugin = (cov_2m8twzj6le.s[0]++, (cov_2m8twzj6le.b[0][1]++, plugin)); // eslint-disable-next-line prettier/prettier

const UniversalEventsToken = (cov_2m8twzj6le.s[1]++, App.createToken('UniversalEventsToken'));

function _objectSpread$1(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty$1(target, key, source[key]); }); } return target; }

function _defineProperty$1(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/** Copyright (c) 2018 Uber Technologies, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */
test('Instantiation', t => {
  const a = {
    memoized: new Map()
  };
  const b = {
    memoized: new Map()
  };
  const Emitter = new GlobalEmitter(); // $FlowFixMe

  t.notEqual(Emitter.from(a), Emitter.from(b)); // $FlowFixMe

  t.notEqual(Emitter.from(a), Emitter);
  t.end();
});
test('Server EventEmitter - events from browser', async t => {
  let called = false;
  let globalCalled = false;
  const mockCtx = {
    headers: {},
    method: 'POST',
    path: '/_events',
    request: {
      body: {
        items: [{
          type: 'a',
          payload: {
            x: 1
          }
        }]
      }
    },
    timing: {
      end: Promise.resolve(5)
    }
  };
  const app = new App__default('el', el => el);
  app.register(UniversalEventsToken, plugin);
  app.middleware({
    events: UniversalEventsToken
  }, ({
    events
  }) => {
    events.on('a', ({
      x
    }, ctx) => {
      t.equals(x, 1, 'payload is correct');
      t.ok(ctx);
      globalCalled = true;
    });
    return (ctx, next) => {
      const ctxEmitter = events.from(ctx);
      ctxEmitter.on('a', ({
        x
      }, ctx) => {
        t.equals(x, 1, 'payload is correct');
        t.ok(ctx);
        called = true;
      });
      return next();
    };
  });
  app.resolve();

  try {
    // $FlowFixMe
    await App.compose(app.plugins)(mockCtx, () => Promise.resolve());
    t.ok(called, 'called');
    t.ok(globalCalled, 'called global handler');
  } catch (e) {
    t.ifErr(e);
  }

  t.end();
});
test('Server EventEmitter - events with ctx', async t => {
  let globalCalled = false;
  const mockCtx = {
    mock: true
  };
  const app = new App__default('el', el => el);
  app.register(UniversalEventsToken, plugin);
  app.register(App.createPlugin({
    deps: {
      events: UniversalEventsToken
    },
    provides: ({
      events
    }) => {
      events.on('b', ({
        x
      }, ctx) => {
        t.equals(x, 1, 'payload is correct');
        t.equals(ctx, mockCtx, 'ctx is correct');
        globalCalled = true;
      }); // $FlowFixMe

      events.emit('b', {
        x: 1
      }, mockCtx);
      t.ok(globalCalled, 'called global handler');
      t.end();
    }
  }));
  app.resolve();
});
test('Server EventEmitter - mapping', async t => {
  let called = false;
  let globalCalled = false;
  const mockCtx = {
    headers: {},
    method: 'POST',
    path: '/lol',
    timing: {
      end: Promise.resolve(5)
    }
  };
  const app = new App__default('fake-element', el => el);
  app.register(UniversalEventsToken, plugin);
  app.middleware({
    events: UniversalEventsToken
  }, ({
    events
  }) => {
    events.on('a', (payload, c) => {
      t.equal(c, mockCtx, 'ctx is passed to global handlers');
      t.deepLooseEqual(payload, {
        x: true,
        b: true,
        global: true
      }, 'payload is correct for global');
      globalCalled = true;
    });
    events.map('a', (payload, c) => {
      t.equal(c, mockCtx, 'ctx is passed to global mappers');
      return _objectSpread$1({}, payload, {
        global: true
      });
    });
    return (ctx, next) => {
      const emitter = events.from(ctx);
      emitter.on('a', (payload, c) => {
        t.equal(c, ctx, 'ctx is passed to scoped handlers');
        t.deepLooseEqual(payload, {
          x: true,
          b: true,
          global: true
        }, 'payload is correct');
        called = true;
      });
      emitter.map('a', (payload, c) => {
        t.equal(c, ctx, 'ctx is passed to scoped mappers');
        return _objectSpread$1({}, payload, {
          b: true
        });
      });
      emitter.emit('a', {
        x: 1
      });
      return next();
    };
  });
  app.resolve();

  try {
    // $FlowFixMe
    await App.compose(app.plugins)(mockCtx, () => Promise.resolve());
    t.ok(called, 'called');
    t.ok(globalCalled, 'called global handler');
  } catch (e) {
    t.ifErr(e);
  }

  t.end();
});
test('Server EventEmitter batching', async t => {
  const app = new App__default('fake-element', el => el);
  const flags = {
    preawait: false,
    postawait: false,
    postend: false,
    timeout: false
  };
  app.register(UniversalEventsToken, plugin);
  app.middleware({
    events: UniversalEventsToken
  }, ({
    events
  }) => {
    return async (ctx, next) => {
      const emitter = events.from(ctx);
      emitter.on('test-pre-await', ({
        x
      }) => {
        t.equals(x, 1, 'payload is correct');
        flags.preawait = true;
      });
      emitter.emit('test-pre-await', {
        x: 1
      });
      t.notOk(flags.preawait, 'batches pre await next events'); // $FlowFixMe

      t.notOk(emitter.flushed, 'waits to flush');
      return next();
    };
  });
  app.middleware({
    events: UniversalEventsToken
  }, ({
    events
  }) => {
    return async (ctx, next) => {
      const emitter = events.from(ctx);
      emitter.on('test-post-await', ({
        x,
        lol
      }) => {
        t.equals(x, 1, 'payload is correct');
        t.ok(lol, 'runs mappers');
        flags.postawait = true;
      });
      await next();
      emitter.emit('test-post-await', {
        x: 1
      });
      emitter.map(payload => {
        return _objectSpread$1({}, payload, {
          lol: true
        });
      }); // $FlowFixMe

      t.notOk(emitter.flushed, 'waits to flush');
      t.notOk(flags.postawait, 'batches post await next events');
    };
  });
  app.middleware({
    events: UniversalEventsToken
  }, ({
    events
  }) => {
    return async (ctx, next) => {
      const emitter = events.from(ctx);
      emitter.on('test-post-end', ({
        x,
        lol
      }) => {
        t.equals(x, 1, 'payload is correct');
        t.ok(lol, 'runs mappers');
        flags.postend = true;
      });
      ctx.timing.end.then(() => {
        // $FlowFixMe
        t.notOk(emitter.flushed, 'waits to flush');
        emitter.emit('test-post-end', {
          x: 1
        });
        t.notOk(flags.postend, 'batches post-end events');
      });
      return next();
    };
  });
  app.middleware({
    events: UniversalEventsToken
  }, ({
    events
  }) => {
    return async (ctx, next) => {
      const emitter = events.from(ctx);
      emitter.on('test-timeout', ({
        x,
        lol
      }) => {
        t.equals(x, 1, 'payload is correct');
        t.ok(lol, 'runs mappers');
        flags.timeout = true;
      });
      setTimeout(() => {
        // $FlowFixMe
        t.ok(emitter.flushed, 'has flushed events');
        emitter.emit('test-timeout', {
          x: 1
        });
        t.ok(flags.timeout, 'emits events immediately after flushing');
      }, 100);
      return next();
    };
  });
  const simulator = fusionTestUtils.getSimulator(app);
  await simulator.request('/lol', {
    method: 'POST'
  });
  setTimeout(() => {
    t.ok(flags.preawait, 'flushes batch from pre-await emitted events');
    t.ok(flags.postawait, 'flushes batch from post-await emitted events');
    t.ok(flags.postend, 'flushes batch from post-end emitted events');
    t.ok(flags.timeout, 'supports emitting events after batch has flushed');
    t.end();
  }, 150);
});
//# sourceMappingURL=node.js.map
