'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var execa = _interopDefault(require('execa'));
var tape = _interopDefault(require('tape-cup'));
var redux = require('redux');
var App = require('fusion-core');
var App__default = _interopDefault(App);
var React = _interopDefault(require('react'));
var reactRedux = require('react-redux');
var fusionTestUtils = require('fusion-test-utils');

/** Copyright (c) 2018 Uber Technologies, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

/* eslint-env node */
tape('Flow tests', async t => {
  // This test is currently failing in release verification due to monorepo construction.
  // Quick fix to disable this running in CI.
  if (process.env.BUILDKITE_PIPELINE_SLUG === 'fusion-release-verification') {
    return t.end();
  }

  const failurePath = 'src/fixtures/failure';
  const successPath = 'src/fixtures/success';

  try {
    await execa.shell(`flow check ${failurePath}`);
    t.fail('Should fail flow check');
  } catch (e) {
    const {
      stdout
    } = e;
    t.ok(stdout.includes('Found 1 error'));
  }

  await execa.shell(`flow check ${successPath}`);
  t.end();
});

var cov_15l7vwy1va = function () {
  var path = "/Users/lhorie/Documents/test-private-monorepo/public/fusion-plugin-react-redux/src/ctx-enhancer.js",
      hash = "2c2c3b044512184fa5966563c1b9db808968f6f2",
      Function = function () {}.constructor,
      global = new Function('return this')(),
      gcv = "__coverage__",
      coverageData = {
    path: "/Users/lhorie/Documents/test-private-monorepo/public/fusion-plugin-react-redux/src/ctx-enhancer.js",
    statementMap: {
      "0": {
        start: {
          line: 19,
          column: 34
        },
        end: {
          line: 27,
          column: 1
        }
      },
      "1": {
        start: {
          line: 19,
          column: 68
        },
        end: {
          line: 27,
          column: 1
        }
      },
      "2": {
        start: {
          line: 22,
          column: 38
        },
        end: {
          line: 25,
          column: 3
        }
      },
      "3": {
        start: {
          line: 26,
          column: 2
        },
        end: {
          line: 26,
          column: 15
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 19,
            column: 15
          },
          end: {
            line: 19,
            column: 16
          }
        },
        loc: {
          start: {
            line: 19,
            column: 34
          },
          end: {
            line: 27,
            column: 1
          }
        },
        line: 19
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 19,
            column: 34
          },
          end: {
            line: 19,
            column: 35
          }
        },
        loc: {
          start: {
            line: 19,
            column: 68
          },
          end: {
            line: 27,
            column: 1
          }
        },
        line: 19
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 19,
            column: 68
          },
          end: {
            line: 19,
            column: 69
          }
        },
        loc: {
          start: {
            line: 21,
            column: 5
          },
          end: {
            line: 27,
            column: 1
          }
        },
        line: 21
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

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/** Copyright (c) 2018 Uber Technologies, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

/* eslint-env browser */
var ctxEnhancer = (ctx => {
  cov_15l7vwy1va.f[0]++;
  cov_15l7vwy1va.s[0]++;
  return createStore => {
    cov_15l7vwy1va.f[1]++;
    cov_15l7vwy1va.s[1]++;
    return (...args) => {
      cov_15l7vwy1va.f[2]++;
      const store = (cov_15l7vwy1va.s[2]++, _objectSpread({}, createStore(...args), {
        ctx: ctx
      }));
      cov_15l7vwy1va.s[3]++;
      return store;
    };
  };
});

var cov_1uiq5t2gk6 = function () {
  var path = "/Users/lhorie/Documents/test-private-monorepo/public/fusion-plugin-react-redux/src/tokens.js",
      hash = "916e578da5982ee0e7baede94e34e0805d57f0a7",
      Function = function () {}.constructor,
      global = new Function('return this')(),
      gcv = "__coverage__",
      coverageData = {
    path: "/Users/lhorie/Documents/test-private-monorepo/public/fusion-plugin-react-redux/src/tokens.js",
    statementMap: {
      "0": {
        start: {
          line: 16,
          column: 56
        },
        end: {
          line: 18,
          column: 1
        }
      },
      "1": {
        start: {
          line: 19,
          column: 50
        },
        end: {
          line: 19,
          column: 77
        }
      },
      "2": {
        start: {
          line: 20,
          column: 50
        },
        end: {
          line: 22,
          column: 1
        }
      },
      "3": {
        start: {
          line: 23,
          column: 60
        },
        end: {
          line: 25,
          column: 1
        }
      },
      "4": {
        start: {
          line: 28,
          column: 4
        },
        end: {
          line: 28,
          column: 39
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
const ReduxToken = (cov_1uiq5t2gk6.s[0]++, App.createToken('ReduxToken'));
const ReducerToken = (cov_1uiq5t2gk6.s[1]++, App.createToken('ReducerToken'));
const PreloadedStateToken = (cov_1uiq5t2gk6.s[2]++, App.createToken('PreloadedStateToken'));
const EnhancerToken = (cov_1uiq5t2gk6.s[3]++, App.createToken('EnhancerToken'));
const GetInitialStateToken = (cov_1uiq5t2gk6.s[4]++, App.createToken('GetInitialStateToken'));

var cov_2ahwavt7as = function () {
  var path = "/Users/lhorie/Documents/test-private-monorepo/public/fusion-plugin-react-redux/src/browser.js",
      hash = "124d995dd3b5e403c08d588679f4963593ba760d",
      Function = function () {}.constructor,
      global = new Function('return this')(),
      gcv = "__coverage__",
      coverageData = {
    path: "/Users/lhorie/Documents/test-private-monorepo/public/fusion-plugin-react-redux/src/browser.js",
    statementMap: {
      "0": {
        start: {
          line: 27,
          column: 18
        },
        end: {
          line: 88,
          column: 1
        }
      },
      "1": {
        start: {
          line: 28,
          column: 19
        },
        end: {
          line: 28,
          column: 23
        }
      },
      "2": {
        start: {
          line: 29,
          column: 2
        },
        end: {
          line: 87,
          column: 5
        }
      },
      "3": {
        start: {
          line: 40,
          column: 10
        },
        end: {
          line: 68,
          column: 11
        }
      },
      "4": {
        start: {
          line: 42,
          column: 12
        },
        end: {
          line: 42,
          column: 36
        }
      },
      "5": {
        start: {
          line: 46,
          column: 12
        },
        end: {
          line: 51,
          column: 13
        }
      },
      "6": {
        start: {
          line: 47,
          column: 35
        },
        end: {
          line: 47,
          column: 77
        }
      },
      "7": {
        start: {
          line: 48,
          column: 14
        },
        end: {
          line: 50,
          column: 15
        }
      },
      "8": {
        start: {
          line: 49,
          column: 16
        },
        end: {
          line: 49,
          column: 80
        }
      },
      "9": {
        start: {
          line: 53,
          column: 14
        },
        end: {
          line: 56,
          column: 44
        }
      },
      "10": {
        start: {
          line: 57,
          column: 30
        },
        end: {
          line: 59,
          column: 13
        }
      },
      "11": {
        start: {
          line: 61,
          column: 12
        },
        end: {
          line: 66,
          column: 14
        }
      },
      "12": {
        start: {
          line: 67,
          column: 12
        },
        end: {
          line: 67,
          column: 36
        }
      },
      "13": {
        start: {
          line: 71,
          column: 6
        },
        end: {
          line: 75,
          column: 8
        }
      },
      "14": {
        start: {
          line: 73,
          column: 10
        },
        end: {
          line: 73,
          column: 32
        }
      },
      "15": {
        start: {
          line: 78,
          column: 6
        },
        end: {
          line: 82,
          column: 8
        }
      },
      "16": {
        start: {
          line: 79,
          column: 24
        },
        end: {
          line: 79,
          column: 39
        }
      },
      "17": {
        start: {
          line: 80,
          column: 8
        },
        end: {
          line: 80,
          column: 71
        }
      },
      "18": {
        start: {
          line: 81,
          column: 8
        },
        end: {
          line: 81,
          column: 22
        }
      },
      "19": {
        start: {
          line: 85,
          column: 6
        },
        end: {
          line: 85,
          column: 24
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 27,
            column: 18
          },
          end: {
            line: 27,
            column: 19
          }
        },
        loc: {
          start: {
            line: 27,
            column: 24
          },
          end: {
            line: 88,
            column: 1
          }
        },
        line: 27
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 35,
            column: 4
          },
          end: {
            line: 35,
            column: 5
          }
        },
        loc: {
          start: {
            line: 35,
            column: 50
          },
          end: {
            line: 76,
            column: 5
          }
        },
        line: 35
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 39,
            column: 8
          },
          end: {
            line: 39,
            column: 9
          }
        },
        loc: {
          start: {
            line: 39,
            column: 25
          },
          end: {
            line: 69,
            column: 9
          }
        },
        line: 39
      },
      "3": {
        name: "(anonymous_3)",
        decl: {
          start: {
            line: 72,
            column: 14
          },
          end: {
            line: 72,
            column: 15
          }
        },
        loc: {
          start: {
            line: 72,
            column: 33
          },
          end: {
            line: 74,
            column: 9
          }
        },
        line: 72
      },
      "4": {
        name: "(anonymous_4)",
        decl: {
          start: {
            line: 77,
            column: 4
          },
          end: {
            line: 77,
            column: 5
          }
        },
        loc: {
          start: {
            line: 77,
            column: 25
          },
          end: {
            line: 83,
            column: 5
          }
        },
        line: 77
      },
      "5": {
        name: "(anonymous_5)",
        decl: {
          start: {
            line: 78,
            column: 13
          },
          end: {
            line: 78,
            column: 14
          }
        },
        loc: {
          start: {
            line: 78,
            column: 28
          },
          end: {
            line: 82,
            column: 7
          }
        },
        line: 78
      },
      "6": {
        name: "(anonymous_6)",
        decl: {
          start: {
            line: 84,
            column: 13
          },
          end: {
            line: 84,
            column: 14
          }
        },
        loc: {
          start: {
            line: 84,
            column: 25
          },
          end: {
            line: 86,
            column: 5
          }
        },
        line: 84
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 40,
            column: 10
          },
          end: {
            line: 68,
            column: 11
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 40,
            column: 10
          },
          end: {
            line: 68,
            column: 11
          }
        }, {
          start: {
            line: 40,
            column: 10
          },
          end: {
            line: 68,
            column: 11
          }
        }],
        line: 40
      },
      "1": {
        loc: {
          start: {
            line: 46,
            column: 12
          },
          end: {
            line: 51,
            column: 13
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 46,
            column: 12
          },
          end: {
            line: 51,
            column: 13
          }
        }, {
          start: {
            line: 46,
            column: 12
          },
          end: {
            line: 51,
            column: 13
          }
        }],
        line: 46
      },
      "2": {
        loc: {
          start: {
            line: 48,
            column: 14
          },
          end: {
            line: 50,
            column: 15
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 48,
            column: 14
          },
          end: {
            line: 50,
            column: 15
          }
        }, {
          start: {
            line: 48,
            column: 14
          },
          end: {
            line: 50,
            column: 15
          }
        }],
        line: 48
      },
      "3": {
        loc: {
          start: {
            line: 53,
            column: 14
          },
          end: {
            line: 56,
            column: 44
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 53,
            column: 14
          },
          end: {
            line: 53,
            column: 21
          }
        }, {
          start: {
            line: 54,
            column: 14
          },
          end: {
            line: 54,
            column: 49
          }
        }, {
          start: {
            line: 56,
            column: 14
          },
          end: {
            line: 56,
            column: 44
          }
        }],
        line: 53
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
      "19": 0
    },
    f: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0
    },
    b: {
      "0": [0, 0],
      "1": [0, 0],
      "2": [0, 0],
      "3": [0, 0, 0]
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

/* globals __REDUX_DEVTOOLS_EXTENSION__ */
cov_2ahwavt7as.s[0]++;

var cov_207nclb5zj = function () {
  var path = "/Users/lhorie/Documents/test-private-monorepo/public/fusion-plugin-react-redux/src/server.js",
      hash = "3efcdf43c2f32a366231d7f2053ca0ed71461a76",
      Function = function () {}.constructor,
      global = new Function('return this')(),
      gcv = "__coverage__",
      coverageData = {
    path: "/Users/lhorie/Documents/test-private-monorepo/public/fusion-plugin-react-redux/src/server.js",
    statementMap: {
      "0": {
        start: {
          line: 30,
          column: 2
        },
        end: {
          line: 91,
          column: 4
        }
      },
      "1": {
        start: {
          line: 46,
          column: 10
        },
        end: {
          line: 46,
          column: 25
        }
      },
      "2": {
        start: {
          line: 47,
          column: 10
        },
        end: {
          line: 47,
          column: 28
        }
      },
      "3": {
        start: {
          line: 50,
          column: 10
        },
        end: {
          line: 52,
          column: 11
        }
      },
      "4": {
        start: {
          line: 51,
          column: 12
        },
        end: {
          line: 51,
          column: 30
        }
      },
      "5": {
        start: {
          line: 53,
          column: 10
        },
        end: {
          line: 59,
          column: 11
        }
      },
      "6": {
        start: {
          line: 54,
          column: 12
        },
        end: {
          line: 58,
          column: 14
        }
      },
      "7": {
        start: {
          line: 60,
          column: 28
        },
        end: {
          line: 60,
          column: 77
        }
      },
      "8": {
        start: {
          line: 62,
          column: 10
        },
        end: {
          line: 67,
          column: 12
        }
      },
      "9": {
        start: {
          line: 68,
          column: 10
        },
        end: {
          line: 68,
          column: 28
        }
      },
      "10": {
        start: {
          line: 71,
          column: 6
        },
        end: {
          line: 73,
          column: 8
        }
      },
      "11": {
        start: {
          line: 72,
          column: 29
        },
        end: {
          line: 72,
          column: 43
        }
      },
      "12": {
        start: {
          line: 76,
          column: 6
        },
        end: {
          line: 89,
          column: 8
        }
      },
      "13": {
        start: {
          line: 77,
          column: 8
        },
        end: {
          line: 77,
          column: 40
        }
      },
      "14": {
        start: {
          line: 77,
          column: 26
        },
        end: {
          line: 77,
          column: 40
        }
      },
      "15": {
        start: {
          line: 78,
          column: 22
        },
        end: {
          line: 78,
          column: 55
        }
      },
      "16": {
        start: {
          line: 79,
          column: 8
        },
        end: {
          line: 79,
          column: 71
        }
      },
      "17": {
        start: {
          line: 80,
          column: 8
        },
        end: {
          line: 80,
          column: 21
        }
      },
      "18": {
        start: {
          line: 82,
          column: 27
        },
        end: {
          line: 82,
          column: 59
        }
      },
      "19": {
        start: {
          line: 83,
          column: 23
        },
        end: {
          line: 87,
          column: 9
        }
      },
      "20": {
        start: {
          line: 88,
          column: 8
        },
        end: {
          line: 88,
          column: 39
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 38,
            column: 4
          },
          end: {
            line: 38,
            column: 5
          }
        },
        loc: {
          start: {
            line: 38,
            column: 67
          },
          end: {
            line: 74,
            column: 5
          }
        },
        line: 38
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 43,
            column: 8
          },
          end: {
            line: 43,
            column: 9
          }
        },
        loc: {
          start: {
            line: 43,
            column: 25
          },
          end: {
            line: 48,
            column: 9
          }
        },
        line: 43
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 49,
            column: 8
          },
          end: {
            line: 49,
            column: 9
          }
        },
        loc: {
          start: {
            line: 49,
            column: 26
          },
          end: {
            line: 69,
            column: 9
          }
        },
        line: 49
      },
      "3": {
        name: "(anonymous_3)",
        decl: {
          start: {
            line: 72,
            column: 22
          },
          end: {
            line: 72,
            column: 23
          }
        },
        loc: {
          start: {
            line: 72,
            column: 29
          },
          end: {
            line: 72,
            column: 43
          }
        },
        line: 72
      },
      "4": {
        name: "(anonymous_4)",
        decl: {
          start: {
            line: 75,
            column: 4
          },
          end: {
            line: 75,
            column: 5
          }
        },
        loc: {
          start: {
            line: 75,
            column: 25
          },
          end: {
            line: 90,
            column: 5
          }
        },
        line: 75
      },
      "5": {
        name: "(anonymous_5)",
        decl: {
          start: {
            line: 76,
            column: 13
          },
          end: {
            line: 76,
            column: 14
          }
        },
        loc: {
          start: {
            line: 76,
            column: 34
          },
          end: {
            line: 89,
            column: 7
          }
        },
        line: 76
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 30,
            column: 2
          },
          end: {
            line: 91,
            column: 4
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 30,
            column: 2
          },
          end: {
            line: 30,
            column: 10
          }
        }, {
          start: {
            line: 31,
            column: 2
          },
          end: {
            line: 91,
            column: 4
          }
        }],
        line: 30
      },
      "1": {
        loc: {
          start: {
            line: 50,
            column: 10
          },
          end: {
            line: 52,
            column: 11
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 50,
            column: 10
          },
          end: {
            line: 52,
            column: 11
          }
        }, {
          start: {
            line: 50,
            column: 10
          },
          end: {
            line: 52,
            column: 11
          }
        }],
        line: 50
      },
      "2": {
        loc: {
          start: {
            line: 53,
            column: 10
          },
          end: {
            line: 59,
            column: 11
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 53,
            column: 10
          },
          end: {
            line: 59,
            column: 11
          }
        }, {
          start: {
            line: 53,
            column: 10
          },
          end: {
            line: 59,
            column: 11
          }
        }],
        line: 53
      },
      "3": {
        loc: {
          start: {
            line: 77,
            column: 8
          },
          end: {
            line: 77,
            column: 40
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 77,
            column: 8
          },
          end: {
            line: 77,
            column: 40
          }
        }, {
          start: {
            line: 77,
            column: 8
          },
          end: {
            line: 77,
            column: 40
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
      "20": 0
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
      "1": [0, 0],
      "2": [0, 0],
      "3": [0, 0]
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
const plugin = (cov_207nclb5zj.s[0]++, (cov_207nclb5zj.b[0][0]++, true) && (cov_207nclb5zj.b[0][1]++, App.createPlugin({
  deps: {
    reducer: ReducerToken,
    preloadedState: PreloadedStateToken.optional,
    enhancer: EnhancerToken.optional,
    getInitialState: GetInitialStateToken.optional
  },

  provides({
    reducer,
    preloadedState,
    enhancer,
    getInitialState
  }) {
    cov_207nclb5zj.f[0]++;

    class Redux {
      constructor(ctx) {
        cov_207nclb5zj.f[1]++;
        cov_207nclb5zj.s[1]++;
        // We only use initialState for client-side hydration
        // The real initial state should be derived from the reducer and the @@INIT action
        this.ctx = ctx;
        cov_207nclb5zj.s[2]++;
        this.store = null;
      }

      async initStore() {
        cov_207nclb5zj.f[2]++;
        cov_207nclb5zj.s[3]++;

        if (this.store) {
          cov_207nclb5zj.b[1][0]++;
          cov_207nclb5zj.s[4]++;
          return this.store;
        } else {
          cov_207nclb5zj.b[1][1]++;
        }

        cov_207nclb5zj.s[5]++;

        if (getInitialState) {
          cov_207nclb5zj.b[2][0]++;
          cov_207nclb5zj.s[6]++;
          preloadedState = Object.assign({}, preloadedState, (await getInitialState(this.ctx)));
        } else {
          cov_207nclb5zj.b[2][1]++;
        }

        const enhancers = (cov_207nclb5zj.s[7]++, [enhancer, ctxEnhancer(this.ctx)].filter(Boolean)); // $FlowFixMe

        cov_207nclb5zj.s[8]++;
        this.store = redux.createStore(reducer, preloadedState, // $FlowFixMe
        redux.compose(...enhancers));
        cov_207nclb5zj.s[9]++;
        return this.store;
      }

    }

    cov_207nclb5zj.s[10]++;
    return {
      from: App.memoize(ctx => {
        cov_207nclb5zj.f[3]++;
        cov_207nclb5zj.s[11]++;
        return new Redux(ctx);
      })
    };
  },

  middleware(_, redux$$1) {
    cov_207nclb5zj.f[4]++;
    cov_207nclb5zj.s[12]++;
    return async (ctx, next) => {
      cov_207nclb5zj.f[5]++;
      cov_207nclb5zj.s[13]++;

      if (!ctx.element) {
        cov_207nclb5zj.b[3][0]++;
        cov_207nclb5zj.s[14]++;
        return next();
      } else {
        cov_207nclb5zj.b[3][1]++;
      }

      const store = (cov_207nclb5zj.s[15]++, await redux$$1.from(ctx).initStore());
      cov_207nclb5zj.s[16]++;
      ctx.element = React.createElement(reactRedux.Provider, {
        store: store
      }, ctx.element);
      cov_207nclb5zj.s[17]++;
      await next();
      const serialized = (cov_207nclb5zj.s[18]++, JSON.stringify(store.getState()));
      const script = (cov_207nclb5zj.s[19]++, App.html`
          <script type="application/json" id="__REDUX_STATE__">
            ${serialized}
          </script>
        `);
      cov_207nclb5zj.s[20]++;
      ctx.template.body.push(script);
    };
  }

})));

var cov_loap9rid5 = function () {
  var path = "/Users/lhorie/Documents/test-private-monorepo/public/fusion-plugin-react-redux/src/index.js",
      hash = "8eca649f1cb45e8ca3ef15c4d90fdf7a98a76856",
      Function = function () {}.constructor,
      global = new Function('return this')(),
      gcv = "__coverage__",
      coverageData = {
    path: "/Users/lhorie/Documents/test-private-monorepo/public/fusion-plugin-react-redux/src/index.js",
    statementMap: {},
    fnMap: {},
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 12,
            column: 16
          },
          end: {
            line: 12,
            column: 57
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 12,
            column: 27
          },
          end: {
            line: 12,
            column: 39
          }
        }, {
          start: {
            line: 12,
            column: 42
          },
          end: {
            line: 12,
            column: 57
          }
        }],
        line: 12
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
var Redux = (cov_loap9rid5.b[0][0]++, plugin);

function _objectSpread$1(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty$1(target, key, source[key]); }); } return target; }

function _defineProperty$1(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/** Copyright (c) 2018 Uber Technologies, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */
/* Test fixtures */

const appCreator = (reducer, preloadedState, getInitialState, enhancer) => {
  const app = new App__default('test', el => el);

  if (reducer) {
    app.register(ReducerToken, reducer);
  }

  if (preloadedState) {
    app.register(PreloadedStateToken, preloadedState);
  }

  if (getInitialState) {
    app.register(GetInitialStateToken, getInitialState);
  }

  if (enhancer) {
    app.register(EnhancerToken, enhancer);
  }

  return () => app;
};

tape('interface', async t => {
  const ctx = {
    memoized: new Map()
  };

  const reducer = (state, action) => ({
    test: action.payload || 1
  });

  const redux$$1 = fusionTestUtils.getService(appCreator(reducer), Redux).from(ctx);
  t.plan(2);

  if (!redux$$1.initStore) {
    t.end();
    return;
  }

  const store = await redux$$1.initStore();
  t.equals(store.getState().test, 1, 'state is accessible');
  store.dispatch({
    type: 'CHANGE',
    payload: 2
  });
  t.equals(store.getState().test, 2, 'state receives dispatch');
  t.end();
});
tape('non-ssr routes', async t => {
  const reducer = (state, action) => ({
    test: action.payload || 1
  });

  const plugin = fusionTestUtils.getService(appCreator(reducer), Redux);
  let mockCtx = {
    body: null,
    memoized: new Map()
  };
  t.plan(1);

  if (!Redux.middleware) {
    t.end();
    return;
  } // $FlowFixMe


  await Redux.middleware(null, plugin)(mockCtx, () => Promise.resolve());
  t.notok(plugin.from(mockCtx).store);
  t.end();
});
tape('getInitialState', async t => {
  const reducer = (state = {}, action) => _objectSpread$1({}, state, {
    test: action.payload || 1
  });

  const mockCtx = {
    mock: true,
    memoized: new Map()
  };

  const getInitialState = async ctx => {
    t.equal(ctx, mockCtx);
    return {
      hello: 'world'
    };
  };

  const preloadedState = {
    a: 'b'
  };
  const redux$$1 = fusionTestUtils.getService(appCreator(reducer, preloadedState, getInitialState), Redux).from(mockCtx);
  t.plan(6);

  if (!redux$$1.initStore) {
    t.end();
    return;
  }

  const store = await redux$$1.initStore();
  t.equals(store.getState().test, 1, 'state is accessible');
  t.equal(store.getState().hello, 'world');
  t.equal(store.getState().a, 'b');
  store.dispatch({
    type: 'CHANGE',
    payload: 2
  });
  t.equals(store.getState().test, 2, 'state receives dispatch');
  t.equal(store, (await (redux$$1.initStore && redux$$1.initStore())), 'memoization works');
  t.end();
});
tape('enhancers', async t => {
  const mockCtx = {
    mock: true,
    memoized: new Map()
  };

  const myEnhancer = createStore => (...args) => {
    const store = createStore(...args); // $FlowFixMe

    t.equals(store.ctx, mockCtx, '[Enhancer] ctx provided by ctxEnhancer');
    return store;
  };

  const reducer = s => s;

  const redux$$1 = fusionTestUtils.getService(appCreator(reducer, null, null, myEnhancer), Redux).from(mockCtx);
  t.plan(2);

  if (!redux$$1.initStore) {
    t.end();
    return;
  }

  const store = await redux$$1.initStore();
  t.equals(store.ctx, mockCtx, '[Final store] ctx provided by ctxEnhancer');
  t.end();
});

const testEnhancer = async (t, enhancer) => {
  const app = new App__default('el', el => el);

  const mockReducer = s => s;

  app.register(EnhancerToken, enhancer);
  app.register(ReducerToken, mockReducer);
  app.register(ReduxToken, Redux);
  const testPlugin = App.createPlugin({
    deps: {
      redux: ReduxToken
    },

    middleware({
      redux: redux$$1
    }) {
      return async (ctx, next) => {
        const reduxScoped = redux$$1.from(ctx);

        if (!reduxScoped.initStore) {
          t.fail();
          t.end();
          return;
        }

        const store = await reduxScoped.initStore(); // $FlowFixMe

        t.equals(store.mock, true, '[Final store] ctx provided by ctxEnhancer');
        return next();
      };
    }

  });
  app.register(testPlugin);
  const simulator = fusionTestUtils.getSimulator(app);
  await simulator.render('/');
};

tape('enhancers - via app.register', async t => {
  /* Enhancer function */
  const myEnhancer = createStore => (...args) => {
    const store = createStore(...args); // $FlowFixMe

    store.mock = true;
    return store;
  };

  await testEnhancer(t, myEnhancer);
  /* Enhancer plugin */

  const myEnhancerPlugin = App.createPlugin({
    provides() {
      return myEnhancer;
    }

  });
  await testEnhancer(t, myEnhancerPlugin);
  t.end();
});
tape('serialization', async t => {
  const reducer = (state, action) => ({
    test: action.payload || 1,
    xss: '</div>'
  });

  const element = React.createElement('div');
  const ctx = {
    element,
    template: {
      body: []
    },
    memoized: new Map()
  };
  const Plugin = fusionTestUtils.getService(appCreator(reducer), Redux);
  t.plan(5);

  if (!Redux.middleware) {
    t.end();
    return;
  } // $FlowFixMe


  await Redux.middleware(null, Plugin)(ctx, () => Promise.resolve());
  t.ok(Plugin.from(ctx).store);
  t.notEquals(ctx.element, element, 'wraps provider');
  t.equals(ctx.template.body.length, 1, 'pushes serialization to body'); // $FlowFixMe

  t.equals(App.consumeSanitizedHTML(ctx.template.body[0]).match('test')[0], 'test');
  t.equals(App.consumeSanitizedHTML(ctx.template.body[0]).match('</div>'), null);
  t.end();
});
//# sourceMappingURL=node.js.map
