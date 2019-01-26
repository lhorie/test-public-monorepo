'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));
var path = _interopDefault(require('path'));
var fs = _interopDefault(require('fs'));
var fusionCore = require('fusion-core');
var styletronReact = require('styletron-react');
var styletronEngineAtomic = require('styletron-engine-atomic');
var tape = _interopDefault(require('tape-cup'));
var server = require('react-dom/server');

var cov_1kcfshwihj = function () {
  var path$$1 = "/Users/lhorie/Documents/test-private-monorepo/public/fusion-plugin-styletron-react/src/legacy-provider.js",
      hash = "369f7026163a6e001cce6d78b0ba448e05ae0638",
      Function = function () {}.constructor,
      global = new Function('return this')(),
      gcv = "__coverage__",
      coverageData = {
    path: "/Users/lhorie/Documents/test-private-monorepo/public/fusion-plugin-styletron-react/src/legacy-provider.js",
    statementMap: {
      "0": {
        start: {
          line: 19,
          column: 4
        },
        end: {
          line: 19,
          column: 39
        }
      },
      "1": {
        start: {
          line: 23,
          column: 4
        },
        end: {
          line: 23,
          column: 26
        }
      },
      "2": {
        start: {
          line: 24,
          column: 4
        },
        end: {
          line: 24,
          column: 33
        }
      },
      "3": {
        start: {
          line: 27,
          column: 4
        },
        end: {
          line: 27,
          column: 52
        }
      },
      "4": {
        start: {
          line: 31,
          column: 0
        },
        end: {
          line: 33,
          column: 2
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
            column: 20
          },
          end: {
            line: 20,
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
            column: 30
          },
          end: {
            line: 25,
            column: 3
          }
        },
        line: 22
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 26,
            column: 2
          },
          end: {
            line: 26,
            column: 3
          }
        },
        loc: {
          start: {
            line: 26,
            column: 11
          },
          end: {
            line: 28,
            column: 3
          }
        },
        line: 26
      },
      "3": {
        name: "noop",
        decl: {
          start: {
            line: 37,
            column: 9
          },
          end: {
            line: 37,
            column: 13
          }
        },
        loc: {
          start: {
            line: 37,
            column: 16
          },
          end: {
            line: 37,
            column: 18
          }
        },
        line: 37
      }
    },
    branchMap: {},
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0
    },
    f: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0
    },
    b: {},
    _coverageSchema: "43e27e138ebf9cfc5966b082cf9a028302ed4184"
  },
      coverage = global[gcv] || (global[gcv] = {});

  if (coverage[path$$1] && coverage[path$$1].hash === hash) {
    return coverage[path$$1];
  }

  coverageData.hash = hash;
  return coverage[path$$1] = coverageData;
}();

/** Copyright (c) 2018 Uber Technologies, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */
/**
 * Provides styletron instance via old context API
 */

class LegacyStyletronProvider extends (React.Component) {
  getChildContext() {
    cov_1kcfshwihj.f[0]++;
    cov_1kcfshwihj.s[0]++;
    return {
      styletron: this.styletron
    };
  } // $FlowFixMe


  constructor(props, context) {
    cov_1kcfshwihj.f[1]++;
    cov_1kcfshwihj.s[1]++;
    super(props, context);
    cov_1kcfshwihj.s[2]++;
    this.styletron = props.value;
  }

  render() {
    cov_1kcfshwihj.f[2]++;
    cov_1kcfshwihj.s[3]++;
    return React.Children.only(this.props.children);
  }

}

cov_1kcfshwihj.s[4]++;
LegacyStyletronProvider.childContextTypes = {
  styletron: noop
};
function noop() {
  cov_1kcfshwihj.f[3]++;
}

var cov_c1ep1ga9c = function () {
  var path$$1 = "/Users/lhorie/Documents/test-private-monorepo/public/fusion-plugin-styletron-react/src/inject-declaration-compat-mixin.js",
      hash = "4238786f661c18a419c32384f2a2b38923edd36c",
      Function = function () {}.constructor,
      global = new Function('return this')(),
      gcv = "__coverage__",
      coverageData = {
    path: "/Users/lhorie/Documents/test-private-monorepo/public/fusion-plugin-styletron-react/src/inject-declaration-compat-mixin.js",
    statementMap: {
      "0": {
        start: {
          line: 10,
          column: 44
        },
        end: {
          line: 27,
          column: 3
        }
      },
      "1": {
        start: {
          line: 11,
          column: 2
        },
        end: {
          line: 27,
          column: 3
        }
      },
      "2": {
        start: {
          line: 14,
          column: 18
        },
        end: {
          line: 14,
          column: 31
        }
      },
      "3": {
        start: {
          line: 15,
          column: 6
        },
        end: {
          line: 19,
          column: 7
        }
      },
      "4": {
        start: {
          line: 16,
          column: 8
        },
        end: {
          line: 18,
          column: 10
        }
      },
      "5": {
        start: {
          line: 20,
          column: 6
        },
        end: {
          line: 24,
          column: 7
        }
      },
      "6": {
        start: {
          line: 21,
          column: 8
        },
        end: {
          line: 23,
          column: 10
        }
      },
      "7": {
        start: {
          line: 25,
          column: 6
        },
        end: {
          line: 25,
          column: 37
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 10,
            column: 44
          },
          end: {
            line: 10,
            column: 45
          }
        },
        loc: {
          start: {
            line: 11,
            column: 2
          },
          end: {
            line: 27,
            column: 3
          }
        },
        line: 11
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 13,
            column: 4
          },
          end: {
            line: 13,
            column: 5
          }
        },
        loc: {
          start: {
            line: 13,
            column: 50
          },
          end: {
            line: 26,
            column: 5
          }
        },
        line: 13
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 15,
            column: 6
          },
          end: {
            line: 19,
            column: 7
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 15,
            column: 6
          },
          end: {
            line: 19,
            column: 7
          }
        }, {
          start: {
            line: 15,
            column: 6
          },
          end: {
            line: 19,
            column: 7
          }
        }],
        line: 15
      },
      "1": {
        loc: {
          start: {
            line: 20,
            column: 6
          },
          end: {
            line: 24,
            column: 7
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 20,
            column: 6
          },
          end: {
            line: 24,
            column: 7
          }
        }, {
          start: {
            line: 20,
            column: 6
          },
          end: {
            line: 24,
            column: 7
          }
        }],
        line: 20
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
      "7": 0
    },
    f: {
      "0": 0,
      "1": 0
    },
    b: {
      "0": [0, 0],
      "1": [0, 0]
    },
    _coverageSchema: "43e27e138ebf9cfc5966b082cf9a028302ed4184"
  },
      coverage = global[gcv] || (global[gcv] = {});

  if (coverage[path$$1] && coverage[path$$1].hash === hash) {
    return coverage[path$$1];
  }

  coverageData.hash = hash;
  return coverage[path$$1] = coverageData;
}();

cov_c1ep1ga9c.s[0]++;

/** Copyright (c) 2018 Uber Technologies, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */
// $FlowFixMe
const injectDeclarationCompatMixin = Base => {
  cov_c1ep1ga9c.f[0]++;
  cov_c1ep1ga9c.s[1]++;
  return class extends Base {
    // $FlowFixMe
    injectDeclaration({
      prop,
      val,
      media,
      pseudo
    }) {
      cov_c1ep1ga9c.f[1]++;
      let style = (cov_c1ep1ga9c.s[2]++, {
        [prop]: val
      });
      cov_c1ep1ga9c.s[3]++;

      if (pseudo) {
        cov_c1ep1ga9c.b[0][0]++;
        cov_c1ep1ga9c.s[4]++;
        style = {
          [pseudo]: style
        };
      } else {
        cov_c1ep1ga9c.b[0][1]++;
      }

      cov_c1ep1ga9c.s[5]++;

      if (media) {
        cov_c1ep1ga9c.b[1][0]++;
        cov_c1ep1ga9c.s[6]++;
        style = {
          [media]: style
        };
      } else {
        cov_c1ep1ga9c.b[1][1]++;
      }

      cov_c1ep1ga9c.s[7]++;
      return this.renderStyle(style);
    }

  };
};

var cov_1nef6kenbj = function () {
  var path$$1 = "/Users/lhorie/Documents/test-private-monorepo/public/fusion-plugin-styletron-react/src/constants.js",
      hash = "4bf8aa3f89910701b08b97b739da803ec65c308c",
      Function = function () {}.constructor,
      global = new Function('return this')(),
      gcv = "__coverage__",
      coverageData = {
    path: "/Users/lhorie/Documents/test-private-monorepo/public/fusion-plugin-styletron-react/src/constants.js",
    statementMap: {
      "0": {
        start: {
          line: 9,
          column: 27
        },
        end: {
          line: 9,
          column: 60
        }
      },
      "1": {
        start: {
          line: 10,
          column: 25
        },
        end: {
          line: 10,
          column: 62
        }
      }
    },
    fnMap: {},
    branchMap: {},
    s: {
      "0": 0,
      "1": 0
    },
    f: {},
    b: {},
    _coverageSchema: "43e27e138ebf9cfc5966b082cf9a028302ed4184"
  },
      coverage = global[gcv] || (global[gcv] = {});

  if (coverage[path$$1] && coverage[path$$1].hash === hash) {
    return coverage[path$$1];
  }

  coverageData.hash = hash;
  return coverage[path$$1] = coverageData;
}();

/** Copyright (c) 2018 Uber Technologies, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */
const workerRoute = (cov_1nef6kenbj.s[0]++, '/__styletron_debugger_worker.js');
const wasmRoute = (cov_1nef6kenbj.s[1]++, '/__styletron_debugger_mappings.wasm');

var cov_1u7lprtmm9 = function () {
  var path$$1 = "/Users/lhorie/Documents/test-private-monorepo/public/fusion-plugin-styletron-react/src/server.js",
      hash = "947a4b64861cbd6e433f0e9a4ed2c0e177133e47",
      Function = function () {}.constructor,
      global = new Function('return this')(),
      gcv = "__coverage__",
      coverageData = {
    path: "/Users/lhorie/Documents/test-private-monorepo/public/fusion-plugin-styletron-react/src/server.js",
    statementMap: {
      "0": {
        start: {
          line: 28,
          column: 0
        },
        end: {
          line: 32,
          column: 1
        }
      },
      "1": {
        start: {
          line: 29,
          column: 15
        },
        end: {
          line: 29,
          column: 74
        }
      },
      "2": {
        start: {
          line: 30,
          column: 2
        },
        end: {
          line: 30,
          column: 47
        }
      },
      "3": {
        start: {
          line: 31,
          column: 2
        },
        end: {
          line: 31,
          column: 49
        }
      },
      "4": {
        start: {
          line: 34,
          column: 24
        },
        end: {
          line: 34,
          column: 63
        }
      },
      "5": {
        start: {
          line: 37,
          column: 2
        },
        end: {
          line: 68,
          column: 4
        }
      },
      "6": {
        start: {
          line: 39,
          column: 22
        },
        end: {
          line: 67,
          column: 5
        }
      },
      "7": {
        start: {
          line: 40,
          column: 6
        },
        end: {
          line: 49,
          column: 7
        }
      },
      "8": {
        start: {
          line: 41,
          column: 8
        },
        end: {
          line: 44,
          column: 9
        }
      },
      "9": {
        start: {
          line: 42,
          column: 10
        },
        end: {
          line: 42,
          column: 53
        }
      },
      "10": {
        start: {
          line: 43,
          column: 10
        },
        end: {
          line: 43,
          column: 24
        }
      },
      "11": {
        start: {
          line: 45,
          column: 8
        },
        end: {
          line: 48,
          column: 9
        }
      },
      "12": {
        start: {
          line: 46,
          column: 10
        },
        end: {
          line: 46,
          column: 51
        }
      },
      "13": {
        start: {
          line: 47,
          column: 10
        },
        end: {
          line: 47,
          column: 24
        }
      },
      "14": {
        start: {
          line: 51,
          column: 6
        },
        end: {
          line: 66,
          column: 7
        }
      },
      "15": {
        start: {
          line: 52,
          column: 23
        },
        end: {
          line: 52,
          column: 44
        }
      },
      "16": {
        start: {
          line: 54,
          column: 8
        },
        end: {
          line: 58,
          column: 10
        }
      },
      "17": {
        start: {
          line: 60,
          column: 8
        },
        end: {
          line: 63,
          column: 11
        }
      },
      "18": {
        start: {
          line: 61,
          column: 32
        },
        end: {
          line: 61,
          column: 59
        }
      },
      "19": {
        start: {
          line: 62,
          column: 10
        },
        end: {
          line: 62,
          column: 68
        }
      },
      "20": {
        start: {
          line: 65,
          column: 8
        },
        end: {
          line: 65,
          column: 22
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 39,
            column: 16
          },
          end: {
            line: 39,
            column: 17
          }
        },
        loc: {
          start: {
            line: 39,
            column: 22
          },
          end: {
            line: 67,
            column: 5
          }
        },
        line: 39
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 39,
            column: 22
          },
          end: {
            line: 39,
            column: 23
          }
        },
        loc: {
          start: {
            line: 39,
            column: 37
          },
          end: {
            line: 67,
            column: 5
          }
        },
        line: 39
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 60,
            column: 27
          },
          end: {
            line: 60,
            column: 28
          }
        },
        loc: {
          start: {
            line: 60,
            column: 33
          },
          end: {
            line: 63,
            column: 9
          }
        },
        line: 60
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 28,
            column: 0
          },
          end: {
            line: 32,
            column: 1
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 28,
            column: 0
          },
          end: {
            line: 32,
            column: 1
          }
        }, {
          start: {
            line: 28,
            column: 0
          },
          end: {
            line: 32,
            column: 1
          }
        }],
        line: 28
      },
      "1": {
        loc: {
          start: {
            line: 28,
            column: 4
          },
          end: {
            line: 28,
            column: 23
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 28,
            column: 4
          },
          end: {
            line: 28,
            column: 11
          }
        }, {
          start: {
            line: 28,
            column: 15
          },
          end: {
            line: 28,
            column: 23
          }
        }],
        line: 28
      },
      "2": {
        loc: {
          start: {
            line: 37,
            column: 2
          },
          end: {
            line: 68,
            column: 4
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 37,
            column: 2
          },
          end: {
            line: 37,
            column: 10
          }
        }, {
          start: {
            line: 38,
            column: 2
          },
          end: {
            line: 68,
            column: 4
          }
        }],
        line: 37
      },
      "3": {
        loc: {
          start: {
            line: 40,
            column: 6
          },
          end: {
            line: 49,
            column: 7
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 40,
            column: 6
          },
          end: {
            line: 49,
            column: 7
          }
        }, {
          start: {
            line: 40,
            column: 6
          },
          end: {
            line: 49,
            column: 7
          }
        }],
        line: 40
      },
      "4": {
        loc: {
          start: {
            line: 41,
            column: 8
          },
          end: {
            line: 44,
            column: 9
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 41,
            column: 8
          },
          end: {
            line: 44,
            column: 9
          }
        }, {
          start: {
            line: 41,
            column: 8
          },
          end: {
            line: 44,
            column: 9
          }
        }],
        line: 41
      },
      "5": {
        loc: {
          start: {
            line: 45,
            column: 8
          },
          end: {
            line: 48,
            column: 9
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 45,
            column: 8
          },
          end: {
            line: 48,
            column: 9
          }
        }, {
          start: {
            line: 45,
            column: 8
          },
          end: {
            line: 48,
            column: 9
          }
        }],
        line: 45
      },
      "6": {
        loc: {
          start: {
            line: 51,
            column: 6
          },
          end: {
            line: 66,
            column: 7
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 51,
            column: 6
          },
          end: {
            line: 66,
            column: 7
          }
        }, {
          start: {
            line: 51,
            column: 6
          },
          end: {
            line: 66,
            column: 7
          }
        }],
        line: 51
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
      "2": 0
    },
    b: {
      "0": [0, 0],
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

  if (coverage[path$$1] && coverage[path$$1].hash === hash) {
    return coverage[path$$1];
  }

  coverageData.hash = hash;
  return coverage[path$$1] = coverageData;
}();

/** Copyright (c) 2018 Uber Technologies, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

/* eslint-env node */
let workerPath;
let wasmPath;
cov_1u7lprtmm9.s[0]++;

if ((cov_1u7lprtmm9.b[1][0]++, process.env.NODE_ENV !== "production") && (cov_1u7lprtmm9.b[1][1]++, true)) {
  cov_1u7lprtmm9.b[0][0]++;
  const base = (cov_1u7lprtmm9.s[1]++, path.dirname(require.resolve('css-to-js-sourcemap-worker')));
  cov_1u7lprtmm9.s[2]++;
  workerPath = path.resolve(base, 'worker.js');
  cov_1u7lprtmm9.s[3]++;
  wasmPath = path.resolve(base, 'mappings.wasm');
} else {
  cov_1u7lprtmm9.b[0][1]++;
}

const StyletronCompat = (cov_1u7lprtmm9.s[4]++, injectDeclarationCompatMixin(styletronEngineAtomic.Server));
const plugin = (cov_1u7lprtmm9.s[5]++, (cov_1u7lprtmm9.b[2][0]++, true) && (cov_1u7lprtmm9.b[2][1]++, fusionCore.createPlugin({
  middleware: () => {
    cov_1u7lprtmm9.f[0]++;
    cov_1u7lprtmm9.s[6]++;
    return (ctx, next) => {
      cov_1u7lprtmm9.f[1]++;
      cov_1u7lprtmm9.s[7]++;

      if (process.env.NODE_ENV !== "production") {
        cov_1u7lprtmm9.b[3][0]++;
        cov_1u7lprtmm9.s[8]++;

        if (ctx.url === workerRoute) {
          cov_1u7lprtmm9.b[4][0]++;
          cov_1u7lprtmm9.s[9]++;
          ctx.body = fs.createReadStream(workerPath);
          cov_1u7lprtmm9.s[10]++;
          return next();
        } else {
          cov_1u7lprtmm9.b[4][1]++;
        }

        cov_1u7lprtmm9.s[11]++;

        if (ctx.url === wasmRoute) {
          cov_1u7lprtmm9.b[5][0]++;
          cov_1u7lprtmm9.s[12]++;
          ctx.body = fs.createReadStream(wasmPath);
          cov_1u7lprtmm9.s[13]++;
          return next();
        } else {
          cov_1u7lprtmm9.b[5][1]++;
        }
      } else {
        cov_1u7lprtmm9.b[3][1]++;
      }

      cov_1u7lprtmm9.s[14]++;

      if (ctx.element) {
        cov_1u7lprtmm9.b[6][0]++;
        const engine = (cov_1u7lprtmm9.s[15]++, new StyletronCompat());
        cov_1u7lprtmm9.s[16]++;
        ctx.element = React.createElement(styletronReact.Provider, {
          value: engine
        }, React.createElement(LegacyStyletronProvider, {
          value: engine
        }, ctx.element));
        cov_1u7lprtmm9.s[17]++;
        return next().then(() => {
          cov_1u7lprtmm9.f[2]++;
          const stylesForHead = (cov_1u7lprtmm9.s[18]++, engine.getStylesheetsHtml());
          cov_1u7lprtmm9.s[19]++;
          ctx.template.head.push(fusionCore.dangerouslySetHTML(stylesForHead));
        });
      } else {
        cov_1u7lprtmm9.b[6][1]++;
        cov_1u7lprtmm9.s[20]++;
        return next();
      }
    };
  }
})));

var cov_183ampm7xi = function () {
  var path$$1 = "/Users/lhorie/Documents/test-private-monorepo/public/fusion-plugin-styletron-react/src/browser.js",
      hash = "159d0eba9a3825308c4f360c61dc1a0da9025ec6",
      Function = function () {}.constructor,
      global = new Function('return this')(),
      gcv = "__coverage__",
      coverageData = {
    path: "/Users/lhorie/Documents/test-private-monorepo/public/fusion-plugin-styletron-react/src/browser.js",
    statementMap: {
      "0": {
        start: {
          line: 22,
          column: 24
        },
        end: {
          line: 22,
          column: 63
        }
      },
      "1": {
        start: {
          line: 28,
          column: 2
        },
        end: {
          line: 71,
          column: 4
        }
      },
      "2": {
        start: {
          line: 30,
          column: 22
        },
        end: {
          line: 70,
          column: 5
        }
      },
      "3": {
        start: {
          line: 31,
          column: 6
        },
        end: {
          line: 67,
          column: 7
        }
      },
      "4": {
        start: {
          line: 32,
          column: 8
        },
        end: {
          line: 36,
          column: 9
        }
      },
      "5": {
        start: {
          line: 33,
          column: 10
        },
        end: {
          line: 35,
          column: 13
        }
      },
      "6": {
        start: {
          line: 37,
          column: 8
        },
        end: {
          line: 57,
          column: 9
        }
      },
      "7": {
        start: {
          line: 38,
          column: 25
        },
        end: {
          line: 38,
          column: 48
        }
      },
      "8": {
        start: {
          line: 39,
          column: 10
        },
        end: {
          line: 42,
          column: 13
        }
      },
      "9": {
        start: {
          line: 43,
          column: 10
        },
        end: {
          line: 46,
          column: 13
        }
      },
      "10": {
        start: {
          line: 48,
          column: 10
        },
        end: {
          line: 55,
          column: 11
        }
      },
      "11": {
        start: {
          line: 50,
          column: 12
        },
        end: {
          line: 54,
          column: 15
        }
      },
      "12": {
        start: {
          line: 51,
          column: 14
        },
        end: {
          line: 53,
          column: 15
        }
      },
      "13": {
        start: {
          line: 52,
          column: 16
        },
        end: {
          line: 52,
          column: 55
        }
      },
      "14": {
        start: {
          line: 56,
          column: 10
        },
        end: {
          line: 56,
          column: 48
        }
      },
      "15": {
        start: {
          line: 58,
          column: 8
        },
        end: {
          line: 66,
          column: 10
        }
      },
      "16": {
        start: {
          line: 69,
          column: 6
        },
        end: {
          line: 69,
          column: 20
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 30,
            column: 16
          },
          end: {
            line: 30,
            column: 17
          }
        },
        loc: {
          start: {
            line: 30,
            column: 22
          },
          end: {
            line: 70,
            column: 5
          }
        },
        line: 30
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 30,
            column: 22
          },
          end: {
            line: 30,
            column: 23
          }
        },
        loc: {
          start: {
            line: 30,
            column: 37
          },
          end: {
            line: 70,
            column: 5
          }
        },
        line: 30
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 50,
            column: 40
          },
          end: {
            line: 50,
            column: 41
          }
        },
        loc: {
          start: {
            line: 50,
            column: 50
          },
          end: {
            line: 54,
            column: 13
          }
        },
        line: 50
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 28,
            column: 2
          },
          end: {
            line: 71,
            column: 4
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 28,
            column: 2
          },
          end: {
            line: 28,
            column: 13
          }
        }, {
          start: {
            line: 29,
            column: 2
          },
          end: {
            line: 71,
            column: 4
          }
        }],
        line: 28
      },
      "1": {
        loc: {
          start: {
            line: 31,
            column: 6
          },
          end: {
            line: 67,
            column: 7
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 31,
            column: 6
          },
          end: {
            line: 67,
            column: 7
          }
        }, {
          start: {
            line: 31,
            column: 6
          },
          end: {
            line: 67,
            column: 7
          }
        }],
        line: 31
      },
      "2": {
        loc: {
          start: {
            line: 32,
            column: 8
          },
          end: {
            line: 36,
            column: 9
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 32,
            column: 8
          },
          end: {
            line: 36,
            column: 9
          }
        }, {
          start: {
            line: 32,
            column: 8
          },
          end: {
            line: 36,
            column: 9
          }
        }],
        line: 32
      },
      "3": {
        loc: {
          start: {
            line: 37,
            column: 8
          },
          end: {
            line: 57,
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
            line: 57,
            column: 9
          }
        }, {
          start: {
            line: 37,
            column: 8
          },
          end: {
            line: 57,
            column: 9
          }
        }],
        line: 37
      },
      "4": {
        loc: {
          start: {
            line: 37,
            column: 12
          },
          end: {
            line: 37,
            column: 68
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
            column: 19
          }
        }, {
          start: {
            line: 37,
            column: 23
          },
          end: {
            line: 37,
            column: 35
          }
        }, {
          start: {
            line: 37,
            column: 39
          },
          end: {
            line: 37,
            column: 68
          }
        }],
        line: 37
      },
      "5": {
        loc: {
          start: {
            line: 48,
            column: 10
          },
          end: {
            line: 55,
            column: 11
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 48,
            column: 10
          },
          end: {
            line: 55,
            column: 11
          }
        }, {
          start: {
            line: 48,
            column: 10
          },
          end: {
            line: 55,
            column: 11
          }
        }],
        line: 48
      },
      "6": {
        loc: {
          start: {
            line: 51,
            column: 14
          },
          end: {
            line: 53,
            column: 15
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 51,
            column: 14
          },
          end: {
            line: 53,
            column: 15
          }
        }, {
          start: {
            line: 51,
            column: 14
          },
          end: {
            line: 53,
            column: 15
          }
        }],
        line: 51
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
      "2": 0
    },
    b: {
      "0": [0, 0],
      "1": [0, 0],
      "2": [0, 0],
      "3": [0, 0],
      "4": [0, 0, 0],
      "5": [0, 0],
      "6": [0, 0]
    },
    _coverageSchema: "43e27e138ebf9cfc5966b082cf9a028302ed4184"
  },
      coverage = global[gcv] || (global[gcv] = {});

  if (coverage[path$$1] && coverage[path$$1].hash === hash) {
    return coverage[path$$1];
  }

  coverageData.hash = hash;
  return coverage[path$$1] = coverageData;
}();

/** Copyright (c) 2018 Uber Technologies, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

/* eslint-env browser */

/* global module */
const StyletronCompat$1 = (cov_183ampm7xi.s[0]++, injectDeclarationCompatMixin(styletronEngineAtomic.Client));
let debugEngine;
let engine;
const plugin$2 = (cov_183ampm7xi.s[1]++, (cov_183ampm7xi.b[0][0]++, false) && (cov_183ampm7xi.b[0][1]++, fusionCore.createPlugin({
  middleware: () => {
    cov_183ampm7xi.f[0]++;
    cov_183ampm7xi.s[2]++;
    return (ctx, next) => {
      cov_183ampm7xi.f[1]++;
      cov_183ampm7xi.s[3]++;

      if (ctx.element) {
        cov_183ampm7xi.b[1][0]++;
        cov_183ampm7xi.s[4]++;

        if (!engine) {
          cov_183ampm7xi.b[2][0]++;
          cov_183ampm7xi.s[5]++;
          engine = new StyletronCompat$1({
            hydrate: document.getElementsByClassName('_styletron_hydrate_')
          });
        } else {
          cov_183ampm7xi.b[2][1]++;
        }

        cov_183ampm7xi.s[6]++;

        if ((cov_183ampm7xi.b[4][0]++, process.env.NODE_ENV !== "production") && (cov_183ampm7xi.b[4][1]++, !debugEngine) && (cov_183ampm7xi.b[4][2]++, typeof Worker !== 'undefined')) {
          cov_183ampm7xi.b[3][0]++;
          const worker = (cov_183ampm7xi.s[7]++, new Worker(workerRoute));
          cov_183ampm7xi.s[8]++;
          worker.postMessage({
            id: 'init_wasm',
            url: wasmRoute
          });
          cov_183ampm7xi.s[9]++;
          worker.postMessage({
            id: 'set_render_interval',
            interval: 180
          }); // $FlowFixMe

          cov_183ampm7xi.s[10]++;

          if (module.hot) {
            cov_183ampm7xi.b[5][0]++;
            cov_183ampm7xi.s[11]++;
            // $FlowFixMe
            module.hot.addStatusHandler(status => {
              cov_183ampm7xi.f[2]++;
              cov_183ampm7xi.s[12]++;

              if (status === 'dispose') {
                cov_183ampm7xi.b[6][0]++;
                cov_183ampm7xi.s[13]++;
                worker.postMessage({
                  id: 'invalidate'
                });
              } else {
                cov_183ampm7xi.b[6][1]++;
              }
            });
          } else {
            cov_183ampm7xi.b[5][1]++;
          }

          cov_183ampm7xi.s[14]++;
          debugEngine = new styletronReact.DebugEngine(worker);
        } else {
          cov_183ampm7xi.b[3][1]++;
        }

        cov_183ampm7xi.s[15]++;
        ctx.element = React.createElement(styletronReact.Provider, {
          value: engine,
          debug: debugEngine,
          debugAfterHydration: Boolean(debugEngine)
        }, React.createElement(LegacyStyletronProvider, {
          value: engine
        }, ctx.element));
      } else {
        cov_183ampm7xi.b[1][1]++;
      }

      cov_183ampm7xi.s[16]++;
      return next();
    };
  }
})));

var cov_1ipw9t9g7f = function () {
  var path$$1 = "/Users/lhorie/Documents/test-private-monorepo/public/fusion-plugin-styletron-react/src/index.js",
      hash = "b50ae3870e6e64a1ec5319d2b902419a71c1a697",
      Function = function () {}.constructor,
      global = new Function('return this')(),
      gcv = "__coverage__",
      coverageData = {
    path: "/Users/lhorie/Documents/test-private-monorepo/public/fusion-plugin-styletron-react/src/index.js",
    statementMap: {},
    fnMap: {},
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 23,
            column: 16
          },
          end: {
            line: 23,
            column: 43
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 23,
            column: 27
          },
          end: {
            line: 23,
            column: 33
          }
        }, {
          start: {
            line: 23,
            column: 36
          },
          end: {
            line: 23,
            column: 43
          }
        }],
        line: 23
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

  if (coverage[path$$1] && coverage[path$$1].hash === hash) {
    return coverage[path$$1];
  }

  coverageData.hash = hash;
  return coverage[path$$1] = coverageData;
}();

/** Copyright (c) 2018 Uber Technologies, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

/* eslint-env browser */
var Plugin = (cov_1ipw9t9g7f.b[0][0]++, plugin);

/** Copyright (c) 2018 Uber Technologies, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

/* eslint-env browser */
tape('styletron-react plugin interface', t => {
  t.equal(typeof Plugin, 'object', 'exports a default plugin object');
  t.equal(typeof Plugin.middleware, 'function', 'exports a plugin with a middleware');
  t.equal(typeof styletronReact.styled, 'function', 'exports a styled function');
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
const SilverPanel = styletronReact.styled('div', {
  backgroundColor: 'silver'
});

const LegacyComponent = (props, ctx) => {
  ctx.styletron.injectDeclaration({
    prop: 'color',
    val: 'red'
  });
  return React.createElement("div", null);
};

LegacyComponent.contextTypes = {
  styletron: () => {}
};
tape('Server plugin', t => {
  const ctx = {
    element: React.createElement("div", null, React.createElement(SilverPanel, null), React.createElement(LegacyComponent, null)),
    template: {
      head: {
        push(h) {
          t.equal(fusionCore.consumeSanitizedHTML(h), '<style class="_styletron_hydrate_">.ae{background-color:silver}.af{color:red}</style>', 'Pushes generated styles to head');
        }

      }
    }
  };

  const next = () => {
    t.pass('Called next()');
    t.equal(ctx.element.type, styletronReact.Provider, 'StyletronProvider wrapping ctx.element');
    server.renderToString(ctx.element);
    return Promise.resolve();
  };

  let result = null;

  if (plugin.middleware) {
    const middleware = plugin.middleware();
    result = middleware(ctx, next);
  }

  t.ok(result instanceof Promise, 'returns next');
  t.end();
});
//# sourceMappingURL=node.js.map
