'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var PropTypes = _interopDefault(require('prop-types'));
var reactIs = require('react-is');
var FusionApp = require('fusion-core');
var FusionApp__default = _interopDefault(FusionApp);
var server = require('react-dom/server');
var tape = _interopDefault(require('tape-cup'));
var fusionTestUtils = require('fusion-test-utils');
var Enzyme = require('enzyme');
var Enzyme__default = _interopDefault(Enzyme);
var Adapter = _interopDefault(require('enzyme-adapter-react-16'));

var cov_1hp55qam1 = function () {
  var path = "/Users/lhorie/Documents/test-private-monorepo/public/fusion-react/src/async/constants.js",
      hash = "a2701887f2cf4115fc2e5b890f5d1d03b1d18db7",
      Function = function () {}.constructor,
      global = new Function('return this')(),
      gcv = "__coverage__",
      coverageData = {
    path: "/Users/lhorie/Documents/test-private-monorepo/public/fusion-react/src/async/constants.js",
    statementMap: {
      "0": {
        start: {
          line: 9,
          column: 29
        },
        end: {
          line: 9,
          column: 50
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

/** Copyright (c) 2018 Uber Technologies, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */
const REACT_PREPARE = (cov_1hp55qam1.s[0]++, '@__REACT_PREPARE__@');

var cov_1v3z3k3i1z = function () {
  var path = "/Users/lhorie/Documents/test-private-monorepo/public/fusion-react/src/async/prepared.js",
      hash = "df7b1d0771a3d1751280a64db37268ecc2e757c5",
      Function = function () {}.constructor,
      global = new Function('return this')(),
      gcv = "__coverage__",
      coverageData = {
    path: "/Users/lhorie/Documents/test-private-monorepo/public/fusion-react/src/async/prepared.js",
    statementMap: {
      "0": {
        start: {
          line: 14,
          column: 17
        },
        end: {
          line: 74,
          column: 1
        }
      },
      "1": {
        start: {
          line: 14,
          column: 44
        },
        end: {
          line: 74,
          column: 1
        }
      },
      "2": {
        start: {
          line: 15,
          column: 2
        },
        end: {
          line: 26,
          column: 4
        }
      },
      "3": {
        start: {
          line: 27,
          column: 15
        },
        end: {
          line: 30,
          column: 3
        }
      },
      "4": {
        start: {
          line: 28,
          column: 26
        },
        end: {
          line: 28,
          column: 62
        }
      },
      "5": {
        start: {
          line: 36,
          column: 6
        },
        end: {
          line: 36,
          column: 28
        }
      },
      "6": {
        start: {
          line: 38,
          column: 6
        },
        end: {
          line: 38,
          column: 33
        }
      },
      "7": {
        start: {
          line: 41,
          column: 6
        },
        end: {
          line: 47,
          column: 7
        }
      },
      "8": {
        start: {
          line: 42,
          column: 8
        },
        end: {
          line: 46,
          column: 11
        }
      },
      "9": {
        start: {
          line: 43,
          column: 10
        },
        end: {
          line: 45,
          column: 11
        }
      },
      "10": {
        start: {
          line: 44,
          column: 12
        },
        end: {
          line: 44,
          column: 31
        }
      },
      "11": {
        start: {
          line: 52,
          column: 6
        },
        end: {
          line: 54,
          column: 7
        }
      },
      "12": {
        start: {
          line: 53,
          column: 8
        },
        end: {
          line: 53,
          column: 43
        }
      },
      "13": {
        start: {
          line: 58,
          column: 6
        },
        end: {
          line: 60,
          column: 7
        }
      },
      "14": {
        start: {
          line: 59,
          column: 8
        },
        end: {
          line: 59,
          column: 45
        }
      },
      "15": {
        start: {
          line: 64,
          column: 6
        },
        end: {
          line: 64,
          column: 51
        }
      },
      "16": {
        start: {
          line: 69,
          column: 4
        },
        end: {
          line: 69,
          column: 65
        }
      },
      "17": {
        start: {
          line: 70,
          column: 2
        },
        end: {
          line: 70,
          column: 53
        }
      },
      "18": {
        start: {
          line: 71,
          column: 2
        },
        end: {
          line: 71,
          column: 70
        }
      },
      "19": {
        start: {
          line: 73,
          column: 2
        },
        end: {
          line: 73,
          column: 27
        }
      },
      "20": {
        start: {
          line: 78,
          column: 2
        },
        end: {
          line: 81,
          column: 4
        }
      },
      "21": {
        start: {
          line: 86,
          column: 2
        },
        end: {
          line: 86,
          column: 46
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 14,
            column: 17
          },
          end: {
            line: 14,
            column: 18
          }
        },
        loc: {
          start: {
            line: 14,
            column: 44
          },
          end: {
            line: 74,
            column: 1
          }
        },
        line: 14
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 14,
            column: 44
          },
          end: {
            line: 14,
            column: 45
          }
        },
        loc: {
          start: {
            line: 14,
            column: 65
          },
          end: {
            line: 74,
            column: 1
          }
        },
        line: 14
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 28,
            column: 13
          },
          end: {
            line: 28,
            column: 14
          }
        },
        loc: {
          start: {
            line: 28,
            column: 26
          },
          end: {
            line: 28,
            column: 62
          }
        },
        line: 28
      },
      "3": {
        name: "(anonymous_3)",
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
            column: 32
          },
          end: {
            line: 39,
            column: 5
          }
        },
        line: 35
      },
      "4": {
        name: "(anonymous_4)",
        decl: {
          start: {
            line: 40,
            column: 4
          },
          end: {
            line: 40,
            column: 5
          }
        },
        loc: {
          start: {
            line: 40,
            column: 24
          },
          end: {
            line: 48,
            column: 5
          }
        },
        line: 40
      },
      "5": {
        name: "(anonymous_5)",
        decl: {
          start: {
            line: 42,
            column: 67
          },
          end: {
            line: 42,
            column: 68
          }
        },
        loc: {
          start: {
            line: 42,
            column: 73
          },
          end: {
            line: 46,
            column: 9
          }
        },
        line: 42
      },
      "6": {
        name: "(anonymous_6)",
        decl: {
          start: {
            line: 51,
            column: 4
          },
          end: {
            line: 51,
            column: 5
          }
        },
        loc: {
          start: {
            line: 51,
            column: 61
          },
          end: {
            line: 55,
            column: 5
          }
        },
        line: 51
      },
      "7": {
        name: "(anonymous_7)",
        decl: {
          start: {
            line: 57,
            column: 4
          },
          end: {
            line: 57,
            column: 5
          }
        },
        loc: {
          start: {
            line: 57,
            column: 25
          },
          end: {
            line: 61,
            column: 5
          }
        },
        line: 57
      },
      "8": {
        name: "(anonymous_8)",
        decl: {
          start: {
            line: 63,
            column: 4
          },
          end: {
            line: 63,
            column: 5
          }
        },
        loc: {
          start: {
            line: 63,
            column: 13
          },
          end: {
            line: 65,
            column: 5
          }
        },
        line: 63
      },
      "9": {
        name: "isPrepared",
        decl: {
          start: {
            line: 77,
            column: 9
          },
          end: {
            line: 77,
            column: 19
          }
        },
        loc: {
          start: {
            line: 77,
            column: 37
          },
          end: {
            line: 82,
            column: 1
          }
        },
        line: 77
      },
      "10": {
        name: "getPrepare",
        decl: {
          start: {
            line: 85,
            column: 9
          },
          end: {
            line: 85,
            column: 19
          }
        },
        loc: {
          start: {
            line: 85,
            column: 37
          },
          end: {
            line: 87,
            column: 1
          }
        },
        line: 85
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 14,
            column: 30
          },
          end: {
            line: 14,
            column: 39
          }
        },
        type: "default-arg",
        locations: [{
          start: {
            line: 14,
            column: 37
          },
          end: {
            line: 14,
            column: 39
          }
        }],
        line: 14
      },
      "1": {
        loc: {
          start: {
            line: 41,
            column: 6
          },
          end: {
            line: 47,
            column: 7
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 41,
            column: 6
          },
          end: {
            line: 47,
            column: 7
          }
        }, {
          start: {
            line: 41,
            column: 6
          },
          end: {
            line: 47,
            column: 7
          }
        }],
        line: 41
      },
      "2": {
        loc: {
          start: {
            line: 43,
            column: 10
          },
          end: {
            line: 45,
            column: 11
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 43,
            column: 10
          },
          end: {
            line: 45,
            column: 11
          }
        }, {
          start: {
            line: 43,
            column: 10
          },
          end: {
            line: 45,
            column: 11
          }
        }],
        line: 43
      },
      "3": {
        loc: {
          start: {
            line: 52,
            column: 6
          },
          end: {
            line: 54,
            column: 7
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 52,
            column: 6
          },
          end: {
            line: 54,
            column: 7
          }
        }, {
          start: {
            line: 52,
            column: 6
          },
          end: {
            line: 54,
            column: 7
          }
        }],
        line: 52
      },
      "4": {
        loc: {
          start: {
            line: 58,
            column: 6
          },
          end: {
            line: 60,
            column: 7
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 58,
            column: 6
          },
          end: {
            line: 60,
            column: 7
          }
        }, {
          start: {
            line: 58,
            column: 6
          },
          end: {
            line: 60,
            column: 7
          }
        }],
        line: 58
      },
      "5": {
        loc: {
          start: {
            line: 69,
            column: 4
          },
          end: {
            line: 69,
            column: 65
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 69,
            column: 4
          },
          end: {
            line: 69,
            column: 33
          }
        }, {
          start: {
            line: 69,
            column: 37
          },
          end: {
            line: 69,
            column: 59
          }
        }, {
          start: {
            line: 69,
            column: 63
          },
          end: {
            line: 69,
            column: 65
          }
        }],
        line: 69
      },
      "6": {
        loc: {
          start: {
            line: 79,
            column: 4
          },
          end: {
            line: 80,
            column: 64
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 79,
            column: 4
          },
          end: {
            line: 79,
            column: 34
          }
        }, {
          start: {
            line: 80,
            column: 4
          },
          end: {
            line: 80,
            column: 64
          }
        }],
        line: 79
      },
      "7": {
        loc: {
          start: {
            line: 86,
            column: 9
          },
          end: {
            line: 86,
            column: 45
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 86,
            column: 9
          },
          end: {
            line: 86,
            column: 39
          }
        }, {
          start: {
            line: 86,
            column: 43
          },
          end: {
            line: 86,
            column: 45
          }
        }],
        line: 86
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
      "21": 0
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
      "10": 0
    },
    b: {
      "0": [0],
      "1": [0, 0],
      "2": [0, 0],
      "3": [0, 0],
      "4": [0, 0],
      "5": [0, 0, 0],
      "6": [0, 0],
      "7": [0, 0]
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
cov_1v3z3k3i1z.s[0]++;

const prepared = (sideEffect, opts = (cov_1v3z3k3i1z.b[0][0]++, {})) => {
  cov_1v3z3k3i1z.f[0]++;
  cov_1v3z3k3i1z.s[1]++;
  return OriginalComponent => {
    cov_1v3z3k3i1z.f[1]++;
    cov_1v3z3k3i1z.s[2]++;
    opts = Object.assign({
      boundary: false,
      defer: false,
      componentDidMount: true,
      componentWillReceiveProps: false,
      componentDidUpdate: false,
      contextTypes: {},
      forceUpdate: false
    }, opts);
    const prep = (cov_1v3z3k3i1z.s[3]++, {
      prepare: (...args) => {
        cov_1v3z3k3i1z.f[2]++;
        cov_1v3z3k3i1z.s[4]++;
        return Promise.resolve(sideEffect(...args));
      },
      defer: opts.defer
    }); // Disable eslint for deprecated componentWillReceiveProps
    // eslint-disable-next-line react/no-deprecated

    class PreparedComponent extends (React.Component) {
      // $FlowFixMe
      constructor(props, context) {
        cov_1v3z3k3i1z.f[3]++;
        cov_1v3z3k3i1z.s[5]++;
        super(props, context); // $FlowFixMe

        cov_1v3z3k3i1z.s[6]++;
        this[REACT_PREPARE] = prep;
      }

      componentDidMount() {
        cov_1v3z3k3i1z.f[4]++;
        cov_1v3z3k3i1z.s[7]++;

        if (opts.componentDidMount) {
          cov_1v3z3k3i1z.b[1][0]++;
          cov_1v3z3k3i1z.s[8]++;
          Promise.resolve(sideEffect(this.props, this.context)).then(() => {
            cov_1v3z3k3i1z.f[5]++;
            cov_1v3z3k3i1z.s[9]++;

            if (opts.forceUpdate) {
              cov_1v3z3k3i1z.b[2][0]++;
              cov_1v3z3k3i1z.s[10]++;
              this.forceUpdate();
            } else {
              cov_1v3z3k3i1z.b[2][1]++;
            }
          });
        } else {
          cov_1v3z3k3i1z.b[1][1]++;
        }
      } // $FlowFixMe


      UNSAFE_componentWillReceiveProps(nextProps, nextContext) {
        cov_1v3z3k3i1z.f[6]++;
        cov_1v3z3k3i1z.s[11]++;

        if (opts.componentWillReceiveProps) {
          cov_1v3z3k3i1z.b[3][0]++;
          cov_1v3z3k3i1z.s[12]++;
          sideEffect(nextProps, nextContext);
        } else {
          cov_1v3z3k3i1z.b[3][1]++;
        }
      }

      componentDidUpdate() {
        cov_1v3z3k3i1z.f[7]++;
        cov_1v3z3k3i1z.s[13]++;

        if (opts.componentDidUpdate) {
          cov_1v3z3k3i1z.b[4][0]++;
          cov_1v3z3k3i1z.s[14]++;
          sideEffect(this.props, this.context);
        } else {
          cov_1v3z3k3i1z.b[4][1]++;
        }
      }

      render() {
        cov_1v3z3k3i1z.f[8]++;
        cov_1v3z3k3i1z.s[15]++;
        return React.createElement(OriginalComponent, this.props);
      }

    }

    const displayName = (cov_1v3z3k3i1z.s[16]++, (cov_1v3z3k3i1z.b[5][0]++, OriginalComponent.displayName) || (cov_1v3z3k3i1z.b[5][1]++, OriginalComponent.name) || (cov_1v3z3k3i1z.b[5][2]++, ''));
    cov_1v3z3k3i1z.s[17]++;
    PreparedComponent.contextTypes = opts.contextTypes;
    cov_1v3z3k3i1z.s[18]++;
    PreparedComponent.displayName = `PreparedComponent(${displayName})`;
    cov_1v3z3k3i1z.s[19]++;
    return PreparedComponent;
  };
}; // $FlowFixMe


function isPrepared(CustomComponent) {
  cov_1v3z3k3i1z.f[9]++;
  cov_1v3z3k3i1z.s[20]++;
  return (cov_1v3z3k3i1z.b[6][0]++, CustomComponent[REACT_PREPARE]) && (cov_1v3z3k3i1z.b[6][1]++, typeof CustomComponent[REACT_PREPARE].prepare === 'function');
} // $FlowFixMe


function getPrepare(CustomComponent) {
  cov_1v3z3k3i1z.f[10]++;
  cov_1v3z3k3i1z.s[21]++;
  return (cov_1v3z3k3i1z.b[7][0]++, CustomComponent[REACT_PREPARE]) || (cov_1v3z3k3i1z.b[7][1]++, {});
}

var cov_1qj7bvv8hw = function () {
  var path = "/Users/lhorie/Documents/test-private-monorepo/public/fusion-react/src/async/dispatched.js",
      hash = "700242b314c9265a38f91f89a07349c9ea9a351a",
      Function = function () {}.constructor,
      global = new Function('return this')(),
      gcv = "__coverage__",
      coverageData = {
    path: "/Users/lhorie/Documents/test-private-monorepo/public/fusion-react/src/async/dispatched.js",
    statementMap: {
      "0": {
        start: {
          line: 13,
          column: 19
        },
        end: {
          line: 15,
          column: 2
        }
      },
      "1": {
        start: {
          line: 18,
          column: 19
        },
        end: {
          line: 29,
          column: 1
        }
      },
      "2": {
        start: {
          line: 18,
          column: 56
        },
        end: {
          line: 29,
          column: 1
        }
      },
      "3": {
        start: {
          line: 19,
          column: 18
        },
        end: {
          line: 21,
          column: 3
        }
      },
      "4": {
        start: {
          line: 20,
          column: 4
        },
        end: {
          line: 20,
          column: 63
        }
      },
      "5": {
        start: {
          line: 22,
          column: 23
        },
        end: {
          line: 26,
          column: 3
        }
      },
      "6": {
        start: {
          line: 27,
          column: 23
        },
        end: {
          line: 27,
          column: 62
        }
      },
      "7": {
        start: {
          line: 28,
          column: 2
        },
        end: {
          line: 28,
          column: 60
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 18,
            column: 19
          },
          end: {
            line: 18,
            column: 20
          }
        },
        loc: {
          start: {
            line: 18,
            column: 56
          },
          end: {
            line: 29,
            column: 1
          }
        },
        line: 18
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 18,
            column: 56
          },
          end: {
            line: 18,
            column: 57
          }
        },
        loc: {
          start: {
            line: 18,
            column: 77
          },
          end: {
            line: 29,
            column: 1
          }
        },
        line: 18
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 19,
            column: 18
          },
          end: {
            line: 19,
            column: 19
          }
        },
        loc: {
          start: {
            line: 19,
            column: 38
          },
          end: {
            line: 21,
            column: 3
          }
        },
        line: 19
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 18,
            column: 42
          },
          end: {
            line: 18,
            column: 51
          }
        },
        type: "default-arg",
        locations: [{
          start: {
            line: 18,
            column: 49
          },
          end: {
            line: 18,
            column: 51
          }
        }],
        line: 18
      },
      "1": {
        loc: {
          start: {
            line: 24,
            column: 4
          },
          end: {
            line: 24,
            column: 54
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 24,
            column: 32
          },
          end: {
            line: 24,
            column: 49
          }
        }, {
          start: {
            line: 24,
            column: 52
          },
          end: {
            line: 24,
            column: 54
          }
        }],
        line: 24
      },
      "2": {
        loc: {
          start: {
            line: 24,
            column: 4
          },
          end: {
            line: 24,
            column: 29
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 24,
            column: 4
          },
          end: {
            line: 24,
            column: 8
          }
        }, {
          start: {
            line: 24,
            column: 12
          },
          end: {
            line: 24,
            column: 29
          }
        }],
        line: 24
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
      "1": 0,
      "2": 0
    },
    b: {
      "0": [0],
      "1": [0, 0],
      "2": [0, 0]
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
const storeShape = (cov_1qj7bvv8hw.s[0]++, PropTypes.shape({
  dispatch: PropTypes.func.isRequired
})); // $FlowFixMe

cov_1qj7bvv8hw.s[1]++;

var cov_2nwm1f3a1y = function () {
  var path = "/Users/lhorie/Documents/test-private-monorepo/public/fusion-react/src/async/utils/isReactCompositeComponent.js",
      hash = "a65e86aa1442dee727cbe3e3b61546f1c9e1605b",
      Function = function () {}.constructor,
      global = new Function('return this')(),
      gcv = "__coverage__",
      coverageData = {
    path: "/Users/lhorie/Documents/test-private-monorepo/public/fusion-react/src/async/utils/isReactCompositeComponent.js",
    statementMap: {
      "0": {
        start: {
          line: 10,
          column: 2
        },
        end: {
          line: 17,
          column: 3
        }
      },
      "1": {
        start: {
          line: 16,
          column: 4
        },
        end: {
          line: 16,
          column: 16
        }
      },
      "2": {
        start: {
          line: 18,
          column: 2
        },
        end: {
          line: 18,
          column: 15
        }
      }
    },
    fnMap: {
      "0": {
        name: "isReactCompositeComponent",
        decl: {
          start: {
            line: 9,
            column: 24
          },
          end: {
            line: 9,
            column: 49
          }
        },
        loc: {
          start: {
            line: 9,
            column: 63
          },
          end: {
            line: 19,
            column: 1
          }
        },
        line: 9
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 10,
            column: 2
          },
          end: {
            line: 17,
            column: 3
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 10,
            column: 2
          },
          end: {
            line: 17,
            column: 3
          }
        }, {
          start: {
            line: 10,
            column: 2
          },
          end: {
            line: 17,
            column: 3
          }
        }],
        line: 10
      },
      "1": {
        loc: {
          start: {
            line: 11,
            column: 4
          },
          end: {
            line: 14,
            column: 47
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 11,
            column: 4
          },
          end: {
            line: 11,
            column: 16
          }
        }, {
          start: {
            line: 12,
            column: 4
          },
          end: {
            line: 12,
            column: 28
          }
        }, {
          start: {
            line: 13,
            column: 4
          },
          end: {
            line: 13,
            column: 26
          }
        }, {
          start: {
            line: 14,
            column: 4
          },
          end: {
            line: 14,
            column: 47
          }
        }],
        line: 11
      }
    },
    s: {
      "0": 0,
      "1": 0,
      "2": 0
    },
    f: {
      "0": 0
    },
    b: {
      "0": [0, 0],
      "1": [0, 0, 0, 0]
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
function isReactCompositeComponent(type) {
  cov_2nwm1f3a1y.f[0]++;
  cov_2nwm1f3a1y.s[0]++;

  if ((cov_2nwm1f3a1y.b[1][0]++, type != null) && (cov_2nwm1f3a1y.b[1][1]++, type instanceof Function) && (cov_2nwm1f3a1y.b[1][2]++, type.prototype != null) && (cov_2nwm1f3a1y.b[1][3]++, typeof type.prototype.render === 'function')) {
    cov_2nwm1f3a1y.b[0][0]++;
    cov_2nwm1f3a1y.s[1]++;
    return true;
  } else {
    cov_2nwm1f3a1y.b[0][1]++;
  }

  cov_2nwm1f3a1y.s[2]++;
  return false;
}

var cov_mr0oui4n4 = function () {
  var path = "/Users/lhorie/Documents/test-private-monorepo/public/fusion-react/src/async/utils/isReactFunctionalComponent.js",
      hash = "f956163d82913b0b689886269b73cba0cce75c21",
      Function = function () {}.constructor,
      global = new Function('return this')(),
      gcv = "__coverage__",
      coverageData = {
    path: "/Users/lhorie/Documents/test-private-monorepo/public/fusion-react/src/async/utils/isReactFunctionalComponent.js",
    statementMap: {
      "0": {
        start: {
          line: 10,
          column: 2
        },
        end: {
          line: 14,
          column: 16
        }
      },
      "1": {
        start: {
          line: 14,
          column: 4
        },
        end: {
          line: 14,
          column: 16
        }
      },
      "2": {
        start: {
          line: 15,
          column: 2
        },
        end: {
          line: 15,
          column: 15
        }
      }
    },
    fnMap: {
      "0": {
        name: "isReactFunctionalComponent",
        decl: {
          start: {
            line: 9,
            column: 24
          },
          end: {
            line: 9,
            column: 50
          }
        },
        loc: {
          start: {
            line: 9,
            column: 64
          },
          end: {
            line: 16,
            column: 1
          }
        },
        line: 9
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 10,
            column: 2
          },
          end: {
            line: 14,
            column: 16
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 10,
            column: 2
          },
          end: {
            line: 14,
            column: 16
          }
        }, {
          start: {
            line: 10,
            column: 2
          },
          end: {
            line: 14,
            column: 16
          }
        }],
        line: 10
      },
      "1": {
        loc: {
          start: {
            line: 11,
            column: 4
          },
          end: {
            line: 12,
            column: 54
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 11,
            column: 4
          },
          end: {
            line: 11,
            column: 28
          }
        }, {
          start: {
            line: 12,
            column: 5
          },
          end: {
            line: 12,
            column: 27
          }
        }, {
          start: {
            line: 12,
            column: 31
          },
          end: {
            line: 12,
            column: 53
          }
        }],
        line: 11
      }
    },
    s: {
      "0": 0,
      "1": 0,
      "2": 0
    },
    f: {
      "0": 0
    },
    b: {
      "0": [0, 0],
      "1": [0, 0, 0]
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
function isReactFunctionalComponent(type) {
  cov_mr0oui4n4.f[0]++;
  cov_mr0oui4n4.s[0]++;

  if ((cov_mr0oui4n4.b[1][0]++, type instanceof Function) && ((cov_mr0oui4n4.b[1][1]++, type.prototype == null) || (cov_mr0oui4n4.b[1][2]++, !type.prototype.render))) {
    cov_mr0oui4n4.b[0][0]++;
    cov_mr0oui4n4.s[1]++;
    return true;
  } else {
    cov_mr0oui4n4.b[0][1]++;
  }

  cov_mr0oui4n4.s[2]++;
  return false;
}

var cov_2qldprl5q7 = function () {
  var path = "/Users/lhorie/Documents/test-private-monorepo/public/fusion-react/src/async/prepare.js",
      hash = "c604156300416d607cb7eb9fe03d7529e8bd409b",
      Function = function () {}.constructor,
      global = new Function('return this')(),
      gcv = "__coverage__",
      coverageData = {
    path: "/Users/lhorie/Documents/test-private-monorepo/public/fusion-react/src/async/prepare.js",
    statementMap: {
      "0": {
        start: {
          line: 23,
          column: 23
        },
        end: {
          line: 27,
          column: 3
        }
      },
      "1": {
        start: {
          line: 29,
          column: 2
        },
        end: {
          line: 44,
          column: 3
        }
      },
      "2": {
        start: {
          line: 30,
          column: 4
        },
        end: {
          line: 36,
          column: 6
        }
      },
      "3": {
        start: {
          line: 39,
          column: 4
        },
        end: {
          line: 43,
          column: 5
        }
      },
      "4": {
        start: {
          line: 40,
          column: 6
        },
        end: {
          line: 40,
          column: 36
        }
      },
      "5": {
        start: {
          line: 41,
          column: 11
        },
        end: {
          line: 43,
          column: 5
        }
      },
      "6": {
        start: {
          line: 42,
          column: 6
        },
        end: {
          line: 42,
          column: 43
        }
      },
      "7": {
        start: {
          line: 45,
          column: 19
        },
        end: {
          line: 45,
          column: 36
        }
      },
      "8": {
        start: {
          line: 46,
          column: 2
        },
        end: {
          line: 46,
          column: 34
        }
      },
      "9": {
        start: {
          line: 50,
          column: 2
        },
        end: {
          line: 52,
          column: 3
        }
      },
      "10": {
        start: {
          line: 51,
          column: 4
        },
        end: {
          line: 51,
          column: 31
        }
      },
      "11": {
        start: {
          line: 53,
          column: 24
        },
        end: {
          line: 53,
          column: 44
        }
      },
      "12": {
        start: {
          line: 55,
          column: 2
        },
        end: {
          line: 57,
          column: 3
        }
      },
      "13": {
        start: {
          line: 56,
          column: 4
        },
        end: {
          line: 56,
          column: 42
        }
      },
      "14": {
        start: {
          line: 59,
          column: 2
        },
        end: {
          line: 61,
          column: 5
        }
      },
      "15": {
        start: {
          line: 60,
          column: 4
        },
        end: {
          line: 60,
          column: 25
        }
      },
      "16": {
        start: {
          line: 65,
          column: 2
        },
        end: {
          line: 67,
          column: 3
        }
      },
      "17": {
        start: {
          line: 66,
          column: 4
        },
        end: {
          line: 66,
          column: 44
        }
      },
      "18": {
        start: {
          line: 68,
          column: 24
        },
        end: {
          line: 68,
          column: 31
        }
      },
      "19": {
        start: {
          line: 69,
          column: 2
        },
        end: {
          line: 71,
          column: 3
        }
      },
      "20": {
        start: {
          line: 70,
          column: 4
        },
        end: {
          line: 70,
          column: 74
        }
      },
      "21": {
        start: {
          line: 72,
          column: 2
        },
        end: {
          line: 75,
          column: 3
        }
      },
      "22": {
        start: {
          line: 73,
          column: 4
        },
        end: {
          line: 73,
          column: 46
        }
      },
      "23": {
        start: {
          line: 74,
          column: 4
        },
        end: {
          line: 74,
          column: 54
        }
      },
      "24": {
        start: {
          line: 76,
          column: 2
        },
        end: {
          line: 106,
          column: 3
        }
      },
      "25": {
        start: {
          line: 81,
          column: 4
        },
        end: {
          line: 81,
          column: 54
        }
      },
      "26": {
        start: {
          line: 82,
          column: 9
        },
        end: {
          line: 106,
          column: 3
        }
      },
      "27": {
        start: {
          line: 83,
          column: 4
        },
        end: {
          line: 83,
          column: 60
        }
      },
      "28": {
        start: {
          line: 84,
          column: 9
        },
        end: {
          line: 106,
          column: 3
        }
      },
      "29": {
        start: {
          line: 85,
          column: 31
        },
        end: {
          line: 85,
          column: 35
        }
      },
      "30": {
        start: {
          line: 86,
          column: 21
        },
        end: {
          line: 86,
          column: 59
        }
      },
      "31": {
        start: {
          line: 87,
          column: 4
        },
        end: {
          line: 87,
          column: 27
        }
      },
      "32": {
        start: {
          line: 88,
          column: 4
        },
        end: {
          line: 88,
          column: 31
        }
      },
      "33": {
        start: {
          line: 89,
          column: 4
        },
        end: {
          line: 95,
          column: 7
        }
      },
      "34": {
        start: {
          line: 91,
          column: 6
        },
        end: {
          line: 93,
          column: 7
        }
      },
      "35": {
        start: {
          line: 92,
          column: 8
        },
        end: {
          line: 92,
          column: 48
        }
      },
      "36": {
        start: {
          line: 94,
          column: 6
        },
        end: {
          line: 94,
          column: 54
        }
      },
      "37": {
        start: {
          line: 96,
          column: 9
        },
        end: {
          line: 106,
          column: 3
        }
      },
      "38": {
        start: {
          line: 97,
          column: 4
        },
        end: {
          line: 97,
          column: 56
        }
      },
      "39": {
        start: {
          line: 99,
          column: 4
        },
        end: {
          line: 105,
          column: 6
        }
      },
      "40": {
        start: {
          line: 110,
          column: 2
        },
        end: {
          line: 116,
          column: 5
        }
      },
      "41": {
        start: {
          line: 111,
          column: 4
        },
        end: {
          line: 115,
          column: 6
        }
      },
      "42": {
        start: {
          line: 113,
          column: 8
        },
        end: {
          line: 113,
          column: 37
        }
      },
      "43": {
        start: {
          line: 120,
          column: 2
        },
        end: {
          line: 120,
          column: 32
        }
      },
      "44": {
        start: {
          line: 121,
          column: 2
        },
        end: {
          line: 123,
          column: 5
        }
      },
      "45": {
        start: {
          line: 122,
          column: 4
        },
        end: {
          line: 122,
          column: 35
        }
      }
    },
    fnMap: {
      "0": {
        name: "renderCompositeElementInstance",
        decl: {
          start: {
            line: 22,
            column: 9
          },
          end: {
            line: 22,
            column: 39
          }
        },
        loc: {
          start: {
            line: 22,
            column: 50
          },
          end: {
            line: 47,
            column: 1
          }
        },
        line: 22
      },
      "1": {
        name: "prepareComponentInstance",
        decl: {
          start: {
            line: 49,
            column: 9
          },
          end: {
            line: 49,
            column: 33
          }
        },
        loc: {
          start: {
            line: 49,
            column: 44
          },
          end: {
            line: 62,
            column: 1
          }
        },
        line: 49
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 59,
            column: 70
          },
          end: {
            line: 59,
            column: 71
          }
        },
        loc: {
          start: {
            line: 59,
            column: 76
          },
          end: {
            line: 61,
            column: 3
          }
        },
        line: 59
      },
      "3": {
        name: "prepareElement",
        decl: {
          start: {
            line: 64,
            column: 9
          },
          end: {
            line: 64,
            column: 23
          }
        },
        loc: {
          start: {
            line: 64,
            column: 42
          },
          end: {
            line: 107,
            column: 1
          }
        },
        line: 64
      },
      "4": {
        name: "(anonymous_4)",
        decl: {
          start: {
            line: 89,
            column: 51
          },
          end: {
            line: 89,
            column: 52
          }
        },
        loc: {
          start: {
            line: 89,
            column: 68
          },
          end: {
            line: 95,
            column: 5
          }
        },
        line: 89
      },
      "5": {
        name: "_prepare",
        decl: {
          start: {
            line: 109,
            column: 9
          },
          end: {
            line: 109,
            column: 17
          }
        },
        loc: {
          start: {
            line: 109,
            column: 36
          },
          end: {
            line: 117,
            column: 1
          }
        },
        line: 109
      },
      "6": {
        name: "(anonymous_6)",
        decl: {
          start: {
            line: 110,
            column: 47
          },
          end: {
            line: 110,
            column: 48
          }
        },
        loc: {
          start: {
            line: 110,
            column: 77
          },
          end: {
            line: 116,
            column: 3
          }
        },
        line: 110
      },
      "7": {
        name: "(anonymous_7)",
        decl: {
          start: {
            line: 112,
            column: 43
          },
          end: {
            line: 112,
            column: 44
          }
        },
        loc: {
          start: {
            line: 113,
            column: 8
          },
          end: {
            line: 113,
            column: 37
          }
        },
        line: 113
      },
      "8": {
        name: "prepare",
        decl: {
          start: {
            line: 119,
            column: 9
          },
          end: {
            line: 119,
            column: 16
          }
        },
        loc: {
          start: {
            line: 119,
            column: 50
          },
          end: {
            line: 124,
            column: 1
          }
        },
        line: 119
      },
      "9": {
        name: "(anonymous_9)",
        decl: {
          start: {
            line: 121,
            column: 41
          },
          end: {
            line: 121,
            column: 42
          }
        },
        loc: {
          start: {
            line: 121,
            column: 47
          },
          end: {
            line: 123,
            column: 3
          }
        },
        line: 121
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 26,
            column: 4
          },
          end: {
            line: 26,
            column: 62
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 26,
            column: 31
          },
          end: {
            line: 26,
            column: 57
          }
        }, {
          start: {
            line: 26,
            column: 60
          },
          end: {
            line: 26,
            column: 62
          }
        }],
        line: 26
      },
      "1": {
        loc: {
          start: {
            line: 29,
            column: 2
          },
          end: {
            line: 44,
            column: 3
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 29,
            column: 2
          },
          end: {
            line: 44,
            column: 3
          }
        }, {
          start: {
            line: 29,
            column: 2
          },
          end: {
            line: 44,
            column: 3
          }
        }],
        line: 29
      },
      "2": {
        loc: {
          start: {
            line: 29,
            column: 6
          },
          end: {
            line: 29,
            column: 75
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 29,
            column: 6
          },
          end: {
            line: 29,
            column: 26
          }
        }, {
          start: {
            line: 29,
            column: 30
          },
          end: {
            line: 29,
            column: 75
          }
        }],
        line: 29
      },
      "3": {
        loc: {
          start: {
            line: 39,
            column: 4
          },
          end: {
            line: 43,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 39,
            column: 4
          },
          end: {
            line: 43,
            column: 5
          }
        }, {
          start: {
            line: 39,
            column: 4
          },
          end: {
            line: 43,
            column: 5
          }
        }],
        line: 39
      },
      "4": {
        loc: {
          start: {
            line: 41,
            column: 11
          },
          end: {
            line: 43,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 41,
            column: 11
          },
          end: {
            line: 43,
            column: 5
          }
        }, {
          start: {
            line: 41,
            column: 11
          },
          end: {
            line: 43,
            column: 5
          }
        }],
        line: 41
      },
      "5": {
        loc: {
          start: {
            line: 50,
            column: 2
          },
          end: {
            line: 52,
            column: 3
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 50,
            column: 2
          },
          end: {
            line: 52,
            column: 3
          }
        }, {
          start: {
            line: 50,
            column: 2
          },
          end: {
            line: 52,
            column: 3
          }
        }],
        line: 50
      },
      "6": {
        loc: {
          start: {
            line: 55,
            column: 2
          },
          end: {
            line: 57,
            column: 3
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 55,
            column: 2
          },
          end: {
            line: 57,
            column: 3
          }
        }, {
          start: {
            line: 55,
            column: 2
          },
          end: {
            line: 57,
            column: 3
          }
        }],
        line: 55
      },
      "7": {
        loc: {
          start: {
            line: 65,
            column: 2
          },
          end: {
            line: 67,
            column: 3
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 65,
            column: 2
          },
          end: {
            line: 67,
            column: 3
          }
        }, {
          start: {
            line: 65,
            column: 2
          },
          end: {
            line: 67,
            column: 3
          }
        }],
        line: 65
      },
      "8": {
        loc: {
          start: {
            line: 65,
            column: 6
          },
          end: {
            line: 65,
            column: 53
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 65,
            column: 6
          },
          end: {
            line: 65,
            column: 22
          }
        }, {
          start: {
            line: 65,
            column: 26
          },
          end: {
            line: 65,
            column: 53
          }
        }],
        line: 65
      },
      "9": {
        loc: {
          start: {
            line: 69,
            column: 2
          },
          end: {
            line: 71,
            column: 3
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 69,
            column: 2
          },
          end: {
            line: 71,
            column: 3
          }
        }, {
          start: {
            line: 69,
            column: 2
          },
          end: {
            line: 71,
            column: 3
          }
        }],
        line: 69
      },
      "10": {
        loc: {
          start: {
            line: 72,
            column: 2
          },
          end: {
            line: 75,
            column: 3
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 72,
            column: 2
          },
          end: {
            line: 75,
            column: 3
          }
        }, {
          start: {
            line: 72,
            column: 2
          },
          end: {
            line: 75,
            column: 3
          }
        }],
        line: 72
      },
      "11": {
        loc: {
          start: {
            line: 76,
            column: 2
          },
          end: {
            line: 106,
            column: 3
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 76,
            column: 2
          },
          end: {
            line: 106,
            column: 3
          }
        }, {
          start: {
            line: 76,
            column: 2
          },
          end: {
            line: 106,
            column: 3
          }
        }],
        line: 76
      },
      "12": {
        loc: {
          start: {
            line: 77,
            column: 4
          },
          end: {
            line: 79,
            column: 25
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 77,
            column: 4
          },
          end: {
            line: 77,
            column: 28
          }
        }, {
          start: {
            line: 78,
            column: 4
          },
          end: {
            line: 78,
            column: 23
          }
        }, {
          start: {
            line: 79,
            column: 4
          },
          end: {
            line: 79,
            column: 25
          }
        }],
        line: 77
      },
      "13": {
        loc: {
          start: {
            line: 82,
            column: 9
          },
          end: {
            line: 106,
            column: 3
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 82,
            column: 9
          },
          end: {
            line: 106,
            column: 3
          }
        }, {
          start: {
            line: 82,
            column: 9
          },
          end: {
            line: 106,
            column: 3
          }
        }],
        line: 82
      },
      "14": {
        loc: {
          start: {
            line: 84,
            column: 9
          },
          end: {
            line: 106,
            column: 3
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 84,
            column: 9
          },
          end: {
            line: 106,
            column: 3
          }
        }, {
          start: {
            line: 84,
            column: 9
          },
          end: {
            line: 106,
            column: 3
          }
        }],
        line: 84
      },
      "15": {
        loc: {
          start: {
            line: 91,
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
            line: 91,
            column: 6
          },
          end: {
            line: 93,
            column: 7
          }
        }, {
          start: {
            line: 91,
            column: 6
          },
          end: {
            line: 93,
            column: 7
          }
        }],
        line: 91
      },
      "16": {
        loc: {
          start: {
            line: 91,
            column: 10
          },
          end: {
            line: 91,
            column: 55
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 91,
            column: 10
          },
          end: {
            line: 91,
            column: 29
          }
        }, {
          start: {
            line: 91,
            column: 33
          },
          end: {
            line: 91,
            column: 55
          }
        }],
        line: 91
      },
      "17": {
        loc: {
          start: {
            line: 96,
            column: 9
          },
          end: {
            line: 106,
            column: 3
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 96,
            column: 9
          },
          end: {
            line: 106,
            column: 3
          }
        }, {
          start: {
            line: 96,
            column: 9
          },
          end: {
            line: 106,
            column: 3
          }
        }],
        line: 96
      },
      "18": {
        loc: {
          start: {
            line: 119,
            column: 31
          },
          end: {
            line: 119,
            column: 48
          }
        },
        type: "default-arg",
        locations: [{
          start: {
            line: 119,
            column: 46
          },
          end: {
            line: 119,
            column: 48
          }
        }],
        line: 119
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
      "45": 0
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
      "12": [0, 0, 0],
      "13": [0, 0],
      "14": [0, 0],
      "15": [0, 0],
      "16": [0, 0],
      "17": [0, 0],
      "18": [0]
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

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/** Copyright (c) 2018 Uber Technologies, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */
function renderCompositeElementInstance(instance) {
  cov_2qldprl5q7.f[0]++;
  const childContext = (cov_2qldprl5q7.s[0]++, Object.assign({}, instance.context, instance.getChildContext ? (cov_2qldprl5q7.b[0][0]++, instance.getChildContext()) : (cov_2qldprl5q7.b[0][1]++, {})));
  cov_2qldprl5q7.s[1]++;

  if ((cov_2qldprl5q7.b[2][0]++, instance.constructor) && (cov_2qldprl5q7.b[2][1]++, instance.constructor.getDerivedStateFromProps)) {
    cov_2qldprl5q7.b[1][0]++;
    cov_2qldprl5q7.s[2]++;
    instance.state = _objectSpread({}, instance.state, instance.constructor.getDerivedStateFromProps(instance.props, instance.state));
  } else {
    cov_2qldprl5q7.b[1][1]++;
    cov_2qldprl5q7.s[3]++;

    // see https://github.com/reactjs/react-lifecycles-compat/blob/0a02b805fcf119128d1a9244e71ea7077e2cdcc0/index.js#L114
    if (instance.componentWillMount) {
      cov_2qldprl5q7.b[3][0]++;
      cov_2qldprl5q7.s[4]++;
      instance.componentWillMount();
    } else {
      cov_2qldprl5q7.b[3][1]++;
      cov_2qldprl5q7.s[5]++;

      if (instance.UNSAFE_componentWillMount) {
        cov_2qldprl5q7.b[4][0]++;
        cov_2qldprl5q7.s[6]++;
        instance.UNSAFE_componentWillMount();
      } else {
        cov_2qldprl5q7.b[4][1]++;
      }
    }
  }

  const children = (cov_2qldprl5q7.s[7]++, instance.render());
  cov_2qldprl5q7.s[8]++;
  return [children, childContext];
}

function prepareComponentInstance(instance) {
  cov_2qldprl5q7.f[1]++;
  cov_2qldprl5q7.s[9]++;

  if (!isPrepared(instance)) {
    cov_2qldprl5q7.b[5][0]++;
    cov_2qldprl5q7.s[10]++;
    return Promise.resolve({});
  } else {
    cov_2qldprl5q7.b[5][1]++;
  }

  const prepareConfig = (cov_2qldprl5q7.s[11]++, getPrepare(instance)); // If the component is deferred, skip the prepare step

  cov_2qldprl5q7.s[12]++;

  if (prepareConfig.defer) {
    cov_2qldprl5q7.b[6][0]++;
    cov_2qldprl5q7.s[13]++;
    return Promise.resolve(prepareConfig);
  } else {
    cov_2qldprl5q7.b[6][1]++;
  } // $FlowFixMe


  cov_2qldprl5q7.s[14]++;
  return prepareConfig.prepare(instance.props, instance.context).then(() => {
    cov_2qldprl5q7.f[2]++;
    cov_2qldprl5q7.s[15]++;
    return prepareConfig;
  });
}

function prepareElement(element, context) {
  cov_2qldprl5q7.f[3]++;
  cov_2qldprl5q7.s[16]++;

  if ((cov_2qldprl5q7.b[8][0]++, element === null) || (cov_2qldprl5q7.b[8][1]++, typeof element !== 'object')) {
    cov_2qldprl5q7.b[7][0]++;
    cov_2qldprl5q7.s[17]++;
    return Promise.resolve([null, context]);
  } else {
    cov_2qldprl5q7.b[7][1]++;
  }

  const {
    type,
    props
  } = (cov_2qldprl5q7.s[18]++, element);
  cov_2qldprl5q7.s[19]++;

  if (reactIs.isContextConsumer(element)) {
    cov_2qldprl5q7.b[9][0]++;
    cov_2qldprl5q7.s[20]++;
    return Promise.resolve([props.children(type._currentValue), context]);
  } else {
    cov_2qldprl5q7.b[9][1]++;
  }

  cov_2qldprl5q7.s[21]++;

  if (reactIs.isContextProvider(element)) {
    cov_2qldprl5q7.b[10][0]++;
    cov_2qldprl5q7.s[22]++;
    type._context._currentValue = props.value;
    cov_2qldprl5q7.s[23]++;
    return Promise.resolve([props.children, context]);
  } else {
    cov_2qldprl5q7.b[10][1]++;
  }

  cov_2qldprl5q7.s[24]++;

  if ((cov_2qldprl5q7.b[12][0]++, typeof type === 'string') || (cov_2qldprl5q7.b[12][1]++, reactIs.isFragment(element)) || (cov_2qldprl5q7.b[12][2]++, reactIs.isForwardRef(element))) {
    cov_2qldprl5q7.b[11][0]++;
    cov_2qldprl5q7.s[25]++;
    return Promise.resolve([props.children, context]);
  } else {
    cov_2qldprl5q7.b[11][1]++;
    cov_2qldprl5q7.s[26]++;

    if (isReactFunctionalComponent(type)) {
      cov_2qldprl5q7.b[13][0]++;
      cov_2qldprl5q7.s[27]++;
      return Promise.resolve([type(props, context), context]);
    } else {
      cov_2qldprl5q7.b[13][1]++;
      cov_2qldprl5q7.s[28]++;

      if (isReactCompositeComponent(type)) {
        cov_2qldprl5q7.b[14][0]++;
        const CompositeComponent = (cov_2qldprl5q7.s[29]++, type);
        const instance = (cov_2qldprl5q7.s[30]++, new CompositeComponent(props, context));
        cov_2qldprl5q7.s[31]++;
        instance.props = props;
        cov_2qldprl5q7.s[32]++;
        instance.context = context;
        cov_2qldprl5q7.s[33]++;
        return prepareComponentInstance(instance).then(prepareConfig => {
          cov_2qldprl5q7.f[4]++;
          cov_2qldprl5q7.s[34]++;

          // Stop traversing if the component is defer or boundary
          if ((cov_2qldprl5q7.b[16][0]++, prepareConfig.defer) || (cov_2qldprl5q7.b[16][1]++, prepareConfig.boundary)) {
            cov_2qldprl5q7.b[15][0]++;
            cov_2qldprl5q7.s[35]++;
            return Promise.resolve([null, context]);
          } else {
            cov_2qldprl5q7.b[15][1]++;
          }

          cov_2qldprl5q7.s[36]++;
          return renderCompositeElementInstance(instance);
        });
      } else {
        cov_2qldprl5q7.b[14][1]++;
        cov_2qldprl5q7.s[37]++;

        if (reactIs.isPortal(element)) {
          cov_2qldprl5q7.b[17][0]++;
          cov_2qldprl5q7.s[38]++;
          return Promise.resolve([element.children, context]);
        } else {
          cov_2qldprl5q7.b[17][1]++;
          cov_2qldprl5q7.s[39]++;
          throw new TypeError(`Invalid React element type. Must be a string, a function or a subclass of React.Component. ` + `This error happens if you write a React Component <Foo> where Foo is undefined. ` + `This can happen when mistakenly using a default import instead of a named import or vice-versa, ` + `or if you are missing a peerDependency in your package.json and your package manager hoists an older version from an unrelated dependency \n\n` + JSON.stringify(element, null, 2));
        }
      }
    }
  }
}

function _prepare(element, context) {
  cov_2qldprl5q7.f[5]++;
  cov_2qldprl5q7.s[40]++;
  return prepareElement(element, context).then(([children, childContext]) => {
    cov_2qldprl5q7.f[6]++;
    cov_2qldprl5q7.s[41]++;
    return Promise.all(React.Children.toArray(children).map(child => {
      cov_2qldprl5q7.f[7]++;
      cov_2qldprl5q7.s[42]++;
      return _prepare(child, childContext);
    }));
  });
}

function prepare(element, context = (cov_2qldprl5q7.b[18][0]++, {})) {
  cov_2qldprl5q7.f[8]++;
  cov_2qldprl5q7.s[43]++;
  context.__IS_PREPARE__ = true;
  cov_2qldprl5q7.s[44]++;
  return _prepare(element, context).then(() => {
    cov_2qldprl5q7.f[9]++;
    cov_2qldprl5q7.s[45]++;
    context.__IS_PREPARE__ = false;
  });
}

var cov_6yrtnykwt = function () {
  var path = "/Users/lhorie/Documents/test-private-monorepo/public/fusion-react/src/async/split.js",
      hash = "8d1b4181b77308ff59b2cd002ad941d1b85aa592",
      Function = function () {}.constructor,
      global = new Function('return this')(),
      gcv = "__coverage__",
      coverageData = {
    path: "/Users/lhorie/Documents/test-private-monorepo/public/fusion-react/src/async/split.js",
    statementMap: {
      "0": {
        start: {
          line: 13,
          column: 19
        },
        end: {
          line: 13,
          column: 32
        }
      },
      "1": {
        start: {
          line: 15,
          column: 21
        },
        end: {
          line: 17,
          column: 1
        }
      },
      "2": {
        start: {
          line: 19,
          column: 0
        },
        end: {
          line: 22,
          column: 1
        }
      },
      "3": {
        start: {
          line: 21,
          column: 2
        },
        end: {
          line: 21,
          column: 47
        }
      },
      "4": {
        start: {
          line: 31,
          column: 23
        },
        end: {
          line: 31,
          column: 27
        }
      },
      "5": {
        start: {
          line: 32,
          column: 14
        },
        end: {
          line: 32,
          column: 18
        }
      },
      "6": {
        start: {
          line: 33,
          column: 17
        },
        end: {
          line: 33,
          column: 19
        }
      },
      "7": {
        start: {
          line: 36,
          column: 4
        },
        end: {
          line: 38,
          column: 5
        }
      },
      "8": {
        start: {
          line: 37,
          column: 6
        },
        end: {
          line: 37,
          column: 46
        }
      },
      "9": {
        start: {
          line: 39,
          column: 4
        },
        end: {
          line: 41,
          column: 5
        }
      },
      "10": {
        start: {
          line: 40,
          column: 6
        },
        end: {
          line: 40,
          column: 34
        }
      },
      "11": {
        start: {
          line: 42,
          column: 4
        },
        end: {
          line: 42,
          column: 41
        }
      },
      "12": {
        start: {
          line: 44,
          column: 2
        },
        end: {
          line: 92,
          column: 24
        }
      },
      "13": {
        start: {
          line: 46,
          column: 6
        },
        end: {
          line: 53,
          column: 7
        }
      },
      "14": {
        start: {
          line: 47,
          column: 8
        },
        end: {
          line: 51,
          column: 9
        }
      },
      "15": {
        start: {
          line: 48,
          column: 10
        },
        end: {
          line: 50,
          column: 13
        }
      },
      "16": {
        start: {
          line: 49,
          column: 12
        },
        end: {
          line: 49,
          column: 44
        }
      },
      "17": {
        start: {
          line: 52,
          column: 8
        },
        end: {
          line: 52,
          column: 47
        }
      },
      "18": {
        start: {
          line: 56,
          column: 6
        },
        end: {
          line: 60,
          column: 7
        }
      },
      "19": {
        start: {
          line: 57,
          column: 8
        },
        end: {
          line: 57,
          column: 34
        }
      },
      "20": {
        start: {
          line: 59,
          column: 8
        },
        end: {
          line: 59,
          column: 45
        }
      },
      "21": {
        start: {
          line: 62,
          column: 6
        },
        end: {
          line: 62,
          column: 52
        }
      },
      "22": {
        start: {
          line: 64,
          column: 6
        },
        end: {
          line: 68,
          column: 7
        }
      },
      "23": {
        start: {
          line: 65,
          column: 8
        },
        end: {
          line: 67,
          column: 11
        }
      },
      "24": {
        start: {
          line: 66,
          column: 10
        },
        end: {
          line: 66,
          column: 42
        }
      },
      "25": {
        start: {
          line: 70,
          column: 27
        },
        end: {
          line: 73,
          column: 7
        }
      },
      "26": {
        start: {
          line: 72,
          column: 55
        },
        end: {
          line: 72,
          column: 71
        }
      },
      "27": {
        start: {
          line: 75,
          column: 6
        },
        end: {
          line: 89,
          column: 11
        }
      },
      "28": {
        start: {
          line: 78,
          column: 10
        },
        end: {
          line: 78,
          column: 50
        }
      },
      "29": {
        start: {
          line: 79,
          column: 10
        },
        end: {
          line: 81,
          column: 11
        }
      },
      "30": {
        start: {
          line: 80,
          column: 12
        },
        end: {
          line: 80,
          column: 72
        }
      },
      "31": {
        start: {
          line: 84,
          column: 10
        },
        end: {
          line: 84,
          column: 22
        }
      },
      "32": {
        start: {
          line: 85,
          column: 10
        },
        end: {
          line: 88,
          column: 15
        }
      },
      "33": {
        start: {
          line: 86,
          column: 12
        },
        end: {
          line: 88,
          column: 15
        }
      },
      "34": {
        start: {
          line: 87,
          column: 14
        },
        end: {
          line: 87,
          column: 24
        }
      }
    },
    fnMap: {
      "0": {
        name: "withAsyncComponent",
        decl: {
          start: {
            line: 25,
            column: 24
          },
          end: {
            line: 25,
            column: 42
          }
        },
        loc: {
          start: {
            line: 30,
            column: 3
          },
          end: {
            line: 93,
            column: 1
          }
        },
        line: 30
      },
      "1": {
        name: "WithAsyncComponent",
        decl: {
          start: {
            line: 35,
            column: 11
          },
          end: {
            line: 35,
            column: 29
          }
        },
        loc: {
          start: {
            line: 35,
            column: 37
          },
          end: {
            line: 43,
            column: 3
          }
        },
        line: 35
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 45,
            column: 4
          },
          end: {
            line: 45,
            column: 5
          }
        },
        loc: {
          start: {
            line: 45,
            column: 24
          },
          end: {
            line: 90,
            column: 5
          }
        },
        line: 45
      },
      "3": {
        name: "(anonymous_3)",
        decl: {
          start: {
            line: 48,
            column: 27
          },
          end: {
            line: 48,
            column: 28
          }
        },
        loc: {
          start: {
            line: 48,
            column: 38
          },
          end: {
            line: 50,
            column: 11
          }
        },
        line: 48
      },
      "4": {
        name: "(anonymous_4)",
        decl: {
          start: {
            line: 65,
            column: 25
          },
          end: {
            line: 65,
            column: 26
          }
        },
        loc: {
          start: {
            line: 65,
            column: 36
          },
          end: {
            line: 67,
            column: 9
          }
        },
        line: 65
      },
      "5": {
        name: "(anonymous_5)",
        decl: {
          start: {
            line: 72,
            column: 45
          },
          end: {
            line: 72,
            column: 46
          }
        },
        loc: {
          start: {
            line: 72,
            column: 55
          },
          end: {
            line: 72,
            column: 71
          }
        },
        line: 72
      },
      "6": {
        name: "(anonymous_6)",
        decl: {
          start: {
            line: 76,
            column: 14
          },
          end: {
            line: 76,
            column: 15
          }
        },
        loc: {
          start: {
            line: 76,
            column: 36
          },
          end: {
            line: 82,
            column: 9
          }
        },
        line: 76
      },
      "7": {
        name: "(anonymous_7)",
        decl: {
          start: {
            line: 83,
            column: 15
          },
          end: {
            line: 83,
            column: 16
          }
        },
        loc: {
          start: {
            line: 83,
            column: 22
          },
          end: {
            line: 89,
            column: 9
          }
        },
        line: 83
      },
      "8": {
        name: "(anonymous_8)",
        decl: {
          start: {
            line: 86,
            column: 23
          },
          end: {
            line: 86,
            column: 24
          }
        },
        loc: {
          start: {
            line: 86,
            column: 29
          },
          end: {
            line: 88,
            column: 13
          }
        },
        line: 86
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 19,
            column: 0
          },
          end: {
            line: 22,
            column: 1
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 19,
            column: 0
          },
          end: {
            line: 22,
            column: 1
          }
        }, {
          start: {
            line: 19,
            column: 0
          },
          end: {
            line: 22,
            column: 1
          }
        }],
        line: 19
      },
      "1": {
        loc: {
          start: {
            line: 36,
            column: 4
          },
          end: {
            line: 38,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 36,
            column: 4
          },
          end: {
            line: 38,
            column: 5
          }
        }, {
          start: {
            line: 36,
            column: 4
          },
          end: {
            line: 38,
            column: 5
          }
        }],
        line: 36
      },
      "2": {
        loc: {
          start: {
            line: 39,
            column: 4
          },
          end: {
            line: 41,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 39,
            column: 4
          },
          end: {
            line: 41,
            column: 5
          }
        }, {
          start: {
            line: 39,
            column: 4
          },
          end: {
            line: 41,
            column: 5
          }
        }],
        line: 39
      },
      "3": {
        loc: {
          start: {
            line: 46,
            column: 6
          },
          end: {
            line: 53,
            column: 7
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 46,
            column: 6
          },
          end: {
            line: 53,
            column: 7
          }
        }, {
          start: {
            line: 46,
            column: 6
          },
          end: {
            line: 53,
            column: 7
          }
        }],
        line: 46
      },
      "4": {
        loc: {
          start: {
            line: 47,
            column: 8
          },
          end: {
            line: 51,
            column: 9
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 47,
            column: 8
          },
          end: {
            line: 51,
            column: 9
          }
        }, {
          start: {
            line: 47,
            column: 8
          },
          end: {
            line: 51,
            column: 9
          }
        }],
        line: 47
      },
      "5": {
        loc: {
          start: {
            line: 47,
            column: 12
          },
          end: {
            line: 47,
            column: 46
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 47,
            column: 12
          },
          end: {
            line: 47,
            column: 20
          }
        }, {
          start: {
            line: 47,
            column: 24
          },
          end: {
            line: 47,
            column: 46
          }
        }],
        line: 47
      },
      "6": {
        loc: {
          start: {
            line: 62,
            column: 17
          },
          end: {
            line: 62,
            column: 51
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 62,
            column: 17
          },
          end: {
            line: 62,
            column: 45
          }
        }, {
          start: {
            line: 62,
            column: 49
          },
          end: {
            line: 62,
            column: 51
          }
        }],
        line: 62
      },
      "7": {
        loc: {
          start: {
            line: 64,
            column: 6
          },
          end: {
            line: 68,
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
            line: 68,
            column: 7
          }
        }, {
          start: {
            line: 64,
            column: 6
          },
          end: {
            line: 68,
            column: 7
          }
        }],
        line: 64
      },
      "8": {
        loc: {
          start: {
            line: 64,
            column: 10
          },
          end: {
            line: 64,
            column: 44
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 64,
            column: 10
          },
          end: {
            line: 64,
            column: 18
          }
        }, {
          start: {
            line: 64,
            column: 22
          },
          end: {
            line: 64,
            column: 44
          }
        }],
        line: 64
      },
      "9": {
        loc: {
          start: {
            line: 79,
            column: 10
          },
          end: {
            line: 81,
            column: 11
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 79,
            column: 10
          },
          end: {
            line: 81,
            column: 11
          }
        }, {
          start: {
            line: 79,
            column: 10
          },
          end: {
            line: 81,
            column: 11
          }
        }],
        line: 79
      },
      "10": {
        loc: {
          start: {
            line: 85,
            column: 10
          },
          end: {
            line: 88,
            column: 15
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 85,
            column: 10
          },
          end: {
            line: 88,
            column: 15
          }
        }, {
          start: {
            line: 85,
            column: 10
          },
          end: {
            line: 88,
            column: 15
          }
        }],
        line: 85
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
      "34": 0
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
      "10": [0, 0]
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
const CHUNKS_KEY = (cov_6yrtnykwt.s[0]++, '__CHUNK_IDS');
const contextTypes = (cov_6yrtnykwt.s[1]++, {
  splitComponentLoaders: PropTypes.array.isRequired
});
cov_6yrtnykwt.s[2]++;

{
  cov_6yrtnykwt.b[0][0]++;
  cov_6yrtnykwt.s[3]++;
  // $FlowFixMe
  contextTypes.markAsCritical = PropTypes.func;
} // $FlowFixMe


function withAsyncComponent({
  defer,
  load,
  LoadingComponent,
  ErrorComponent
}) {
  cov_6yrtnykwt.f[0]++;
  let AsyncComponent = (cov_6yrtnykwt.s[4]++, null);
  let error = (cov_6yrtnykwt.s[5]++, null);
  let chunkIds = (cov_6yrtnykwt.s[6]++, []);

  function WithAsyncComponent(props) {
    cov_6yrtnykwt.f[1]++;
    cov_6yrtnykwt.s[7]++;

    if (error) {
      cov_6yrtnykwt.b[1][0]++;
      cov_6yrtnykwt.s[8]++;
      return React.createElement(ErrorComponent, {
        error: error
      });
    } else {
      cov_6yrtnykwt.b[1][1]++;
    }

    cov_6yrtnykwt.s[9]++;

    if (!AsyncComponent) {
      cov_6yrtnykwt.b[2][0]++;
      cov_6yrtnykwt.s[10]++;
      return React.createElement(LoadingComponent, null);
    } else {
      cov_6yrtnykwt.b[2][1]++;
    }

    cov_6yrtnykwt.s[11]++;
    return React.createElement(AsyncComponent, props);
  }

  cov_6yrtnykwt.s[12]++;
  return prepared((props, context) => {
    cov_6yrtnykwt.f[2]++;
    cov_6yrtnykwt.s[13]++;

    if (AsyncComponent) {
      cov_6yrtnykwt.b[3][0]++;
      cov_6yrtnykwt.s[14]++;

      if ((cov_6yrtnykwt.b[5][0]++, true) && (cov_6yrtnykwt.b[5][1]++, context.markAsCritical)) {
        cov_6yrtnykwt.b[4][0]++;
        cov_6yrtnykwt.s[15]++;
        chunkIds.forEach(chunkId => {
          cov_6yrtnykwt.f[3]++;
          cov_6yrtnykwt.s[16]++;
          context.markAsCritical(chunkId);
        });
      } else {
        cov_6yrtnykwt.b[4][1]++;
      }

      cov_6yrtnykwt.s[17]++;
      return Promise.resolve(AsyncComponent);
    } else {
      cov_6yrtnykwt.b[3][1]++;
    }

    let componentPromise;
    cov_6yrtnykwt.s[18]++;

    try {
      cov_6yrtnykwt.s[19]++;
      componentPromise = load();
    } catch (e) {
      cov_6yrtnykwt.s[20]++;
      componentPromise = Promise.reject(e);
    } // $FlowFixMe


    cov_6yrtnykwt.s[21]++;
    chunkIds = (cov_6yrtnykwt.b[6][0]++, componentPromise[CHUNKS_KEY]) || (cov_6yrtnykwt.b[6][1]++, []);
    cov_6yrtnykwt.s[22]++;

    if ((cov_6yrtnykwt.b[8][0]++, true) && (cov_6yrtnykwt.b[8][1]++, context.markAsCritical)) {
      cov_6yrtnykwt.b[7][0]++;
      cov_6yrtnykwt.s[23]++;
      chunkIds.forEach(chunkId => {
        cov_6yrtnykwt.f[4]++;
        cov_6yrtnykwt.s[24]++;
        context.markAsCritical(chunkId);
      });
    } else {
      cov_6yrtnykwt.b[7][1]++;
    }

    const loadPromises = (cov_6yrtnykwt.s[25]++, [componentPromise, ...context.splitComponentLoaders.map(loader => {
      cov_6yrtnykwt.f[5]++;
      cov_6yrtnykwt.s[26]++;
      return loader(chunkIds);
    })]);
    cov_6yrtnykwt.s[27]++;
    return Promise.all(loadPromises).then(([asyncComponent]) => {
      cov_6yrtnykwt.f[6]++;
      cov_6yrtnykwt.s[28]++;
      // Note: .default is toolchain specific, breaks w/ CommonJS exports
      AsyncComponent = asyncComponent.default;
      cov_6yrtnykwt.s[29]++;

      if (AsyncComponent === undefined) {
        cov_6yrtnykwt.b[9][0]++;
        cov_6yrtnykwt.s[30]++;
        throw new Error('Bundle does not contain a default export');
      } else {
        cov_6yrtnykwt.b[9][1]++;
      }
    }).catch(err => {
      cov_6yrtnykwt.f[7]++;
      cov_6yrtnykwt.s[31]++;
      error = err;
      cov_6yrtnykwt.s[32]++;

      {
        cov_6yrtnykwt.b[10][1]++;
      } // log error

    });
  }, {
    defer,
    contextTypes,
    forceUpdate: true
  })(WithAsyncComponent);
}

var cov_18zj1peka6 = function () {
  var path = "/Users/lhorie/Documents/test-private-monorepo/public/fusion-react/src/async/traverse-exclude.js",
      hash = "ab27079a90802558b2a3823b0898a7ee4f380cf0",
      Function = function () {}.constructor,
      global = new Function('return this')(),
      gcv = "__coverage__",
      coverageData = {
    path: "/Users/lhorie/Documents/test-private-monorepo/public/fusion-react/src/async/traverse-exclude.js",
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

/** Copyright (c) 2018 Uber Technologies, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */
// to visit the minimum number of nodes

var exclude = prepared(Promise.resolve(), {
  componentDidMount: false,
  componentWillReceiveProps: false,
  componentDidUpdate: false,
  defer: true
});

var cov_1xioqlnd9j = function () {
  var path = "/Users/lhorie/Documents/test-private-monorepo/public/fusion-react/src/async/prepare-provider.js",
      hash = "31dc3cbd533579fed6086c03e34f9a36e923bf54",
      Function = function () {}.constructor,
      global = new Function('return this')(),
      gcv = "__coverage__",
      coverageData = {
    path: "/Users/lhorie/Documents/test-private-monorepo/public/fusion-react/src/async/prepare-provider.js",
    statementMap: {
      "0": {
        start: {
          line: 14,
          column: 4
        },
        end: {
          line: 14,
          column: 26
        }
      },
      "1": {
        start: {
          line: 15,
          column: 4
        },
        end: {
          line: 15,
          column: 36
        }
      },
      "2": {
        start: {
          line: 16,
          column: 4
        },
        end: {
          line: 16,
          column: 47
        }
      },
      "3": {
        start: {
          line: 23,
          column: 4
        },
        end: {
          line: 26,
          column: 6
        }
      },
      "4": {
        start: {
          line: 29,
          column: 4
        },
        end: {
          line: 29,
          column: 52
        }
      },
      "5": {
        start: {
          line: 33,
          column: 0
        },
        end: {
          line: 36,
          column: 2
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
            column: 40
          },
          end: {
            line: 17,
            column: 3
          }
        },
        line: 13
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
            column: 20
          },
          end: {
            line: 27,
            column: 3
          }
        },
        line: 22
      },
      "2": {
        name: "(anonymous_2)",
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
            column: 11
          },
          end: {
            line: 30,
            column: 3
          }
        },
        line: 28
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

/** Copyright (c) 2018 Uber Technologies, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */
class PrepareProvider extends (React.Component) {
  constructor(props, context) {
    cov_1xioqlnd9j.f[0]++;
    cov_1xioqlnd9j.s[0]++;
    super(props, context);
    cov_1xioqlnd9j.s[1]++;
    this.splitComponentLoaders = [];
    cov_1xioqlnd9j.s[2]++;
    this.markAsCritical = props.markAsCritical;
  }

  getChildContext() {
    cov_1xioqlnd9j.f[1]++;
    cov_1xioqlnd9j.s[3]++;
    return {
      splitComponentLoaders: this.splitComponentLoaders,
      markAsCritical: this.markAsCritical
    };
  }

  render() {
    cov_1xioqlnd9j.f[2]++;
    cov_1xioqlnd9j.s[4]++;
    return React.Children.only(this.props.children);
  }

}

cov_1xioqlnd9j.s[5]++;
PrepareProvider.childContextTypes = {
  splitComponentLoaders: PropTypes.array.isRequired,
  markAsCritical: PropTypes.func
};

var cov_1l2nu80hih = function () {
  var path = "/Users/lhorie/Documents/test-private-monorepo/public/fusion-react/src/async/middleware.js",
      hash = "007c849491848b414151b04c5dbc4418d007b3aa",
      Function = function () {}.constructor,
      global = new Function('return this')(),
      gcv = "__coverage__",
      coverageData = {
    path: "/Users/lhorie/Documents/test-private-monorepo/public/fusion-react/src/async/middleware.js",
    statementMap: {
      "0": {
        start: {
          line: 15,
          column: 31
        },
        end: {
          line: 37,
          column: 1
        }
      },
      "1": {
        start: {
          line: 16,
          column: 2
        },
        end: {
          line: 19,
          column: 3
        }
      },
      "2": {
        start: {
          line: 18,
          column: 4
        },
        end: {
          line: 18,
          column: 77
        }
      },
      "3": {
        start: {
          line: 21,
          column: 2
        },
        end: {
          line: 23,
          column: 3
        }
      },
      "4": {
        start: {
          line: 22,
          column: 4
        },
        end: {
          line: 22,
          column: 18
        }
      },
      "5": {
        start: {
          line: 25,
          column: 25
        },
        end: {
          line: 30,
          column: 10
        }
      },
      "6": {
        start: {
          line: 28,
          column: 8
        },
        end: {
          line: 28,
          column: 40
        }
      },
      "7": {
        start: {
          line: 31,
          column: 2
        },
        end: {
          line: 35,
          column: 4
        }
      },
      "8": {
        start: {
          line: 36,
          column: 2
        },
        end: {
          line: 36,
          column: 16
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 15,
            column: 31
          },
          end: {
            line: 15,
            column: 32
          }
        },
        loc: {
          start: {
            line: 15,
            column: 51
          },
          end: {
            line: 37,
            column: 1
          }
        },
        line: 15
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 26,
            column: 6
          },
          end: {
            line: 26,
            column: 7
          }
        },
        loc: {
          start: {
            line: 26,
            column: 17
          },
          end: {
            line: 29,
            column: 7
          }
        },
        line: 26
      },
      "2": {
        name: "noop",
        decl: {
          start: {
            line: 41,
            column: 9
          },
          end: {
            line: 41,
            column: 13
          }
        },
        loc: {
          start: {
            line: 41,
            column: 16
          },
          end: {
            line: 41,
            column: 18
          }
        },
        line: 41
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 16,
            column: 2
          },
          end: {
            line: 19,
            column: 3
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 16,
            column: 2
          },
          end: {
            line: 19,
            column: 3
          }
        }, {
          start: {
            line: 16,
            column: 2
          },
          end: {
            line: 19,
            column: 3
          }
        }],
        line: 16
      },
      "1": {
        loc: {
          start: {
            line: 21,
            column: 2
          },
          end: {
            line: 23,
            column: 3
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 21,
            column: 2
          },
          end: {
            line: 23,
            column: 3
          }
        }, {
          start: {
            line: 21,
            column: 2
          },
          end: {
            line: 23,
            column: 3
          }
        }],
        line: 21
      },
      "2": {
        loc: {
          start: {
            line: 21,
            column: 6
          },
          end: {
            line: 21,
            column: 30
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 21,
            column: 6
          },
          end: {
            line: 21,
            column: 14
          }
        }, {
          start: {
            line: 21,
            column: 18
          },
          end: {
            line: 21,
            column: 30
          }
        }],
        line: 21
      },
      "3": {
        loc: {
          start: {
            line: 25,
            column: 25
          },
          end: {
            line: 30,
            column: 10
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 26,
            column: 6
          },
          end: {
            line: 29,
            column: 7
          }
        }, {
          start: {
            line: 30,
            column: 6
          },
          end: {
            line: 30,
            column: 10
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
      "8": 0
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
cov_1l2nu80hih.s[0]++;

var cov_a59b71bks = function () {
  var path = "/Users/lhorie/Documents/test-private-monorepo/public/fusion-react/src/async/index.js",
      hash = "0d00a2a54697c059747b4d8ab8c8e1518f4fe66c",
      Function = function () {}.constructor,
      global = new Function('return this')(),
      gcv = "__coverage__",
      coverageData = {
    path: "/Users/lhorie/Documents/test-private-monorepo/public/fusion-react/src/async/index.js",
    statementMap: {
      "0": {
        start: {
          line: 21,
          column: 41
        },
        end: {
          line: 21,
          column: 48
        }
      },
      "1": {
        start: {
          line: 36,
          column: 32
        },
        end: {
          line: 36,
          column: 40
        }
      },
      "2": {
        start: {
          line: 42,
          column: 33
        },
        end: {
          line: 42,
          column: 38
        }
      },
      "3": {
        start: {
          line: 46,
          column: 32
        },
        end: {
          line: 46,
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
      "3": 0
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
const prepareTyped = (cov_a59b71bks.s[0]++, prepare);
const preparedTyped = (cov_a59b71bks.s[1]++, prepared);
const splitTyped = (cov_a59b71bks.s[2]++, withAsyncComponent);
const excludeTyped = (cov_a59b71bks.s[3]++, exclude);

var cov_1ro03iy4hg = function () {
  var path = "/Users/lhorie/Documents/test-private-monorepo/public/fusion-react/src/injector.js",
      hash = "5dc3ce03319e504ba9a541d483c7fb9c81eb300f",
      Function = function () {}.constructor,
      global = new Function('return this')(),
      gcv = "__coverage__",
      coverageData = {
    path: "/Users/lhorie/Documents/test-private-monorepo/public/fusion-react/src/injector.js",
    statementMap: {
      "0": {
        start: {
          line: 20,
          column: 2
        },
        end: {
          line: 22,
          column: 3
        }
      },
      "1": {
        start: {
          line: 21,
          column: 4
        },
        end: {
          line: 21,
          column: 66
        }
      },
      "2": {
        start: {
          line: 24,
          column: 14
        },
        end: {
          line: 24,
          column: 54
        }
      },
      "3": {
        start: {
          line: 28,
          column: 6
        },
        end: {
          line: 28,
          column: 48
        }
      },
      "4": {
        start: {
          line: 32,
          column: 6
        },
        end: {
          line: 32,
          column: 33
        }
      },
      "5": {
        start: {
          line: 36,
          column: 2
        },
        end: {
          line: 38,
          column: 4
        }
      },
      "6": {
        start: {
          line: 41,
          column: 4
        },
        end: {
          line: 41,
          column: 40
        }
      },
      "7": {
        start: {
          line: 44,
          column: 2
        },
        end: {
          line: 46,
          column: 4
        }
      },
      "8": {
        start: {
          line: 48,
          column: 2
        },
        end: {
          line: 51,
          column: 4
        }
      },
      "9": {
        start: {
          line: 57,
          column: 19
        },
        end: {
          line: 57,
          column: 21
        }
      },
      "10": {
        start: {
          line: 59,
          column: 2
        },
        end: {
          line: 63,
          column: 5
        }
      },
      "11": {
        start: {
          line: 62,
          column: 4
        },
        end: {
          line: 62,
          column: 43
        }
      },
      "12": {
        start: {
          line: 65,
          column: 2
        },
        end: {
          line: 65,
          column: 18
        }
      },
      "13": {
        start: {
          line: 74,
          column: 2
        },
        end: {
          line: 74,
          column: 18
        }
      },
      "14": {
        start: {
          line: 79,
          column: 2
        },
        end: {
          line: 79,
          column: 49
        }
      },
      "15": {
        start: {
          line: 82,
          column: 4
        },
        end: {
          line: 82,
          column: 34
        }
      },
      "16": {
        start: {
          line: 86,
          column: 4
        },
        end: {
          line: 90,
          column: 6
        }
      },
      "17": {
        start: {
          line: 93,
          column: 25
        },
        end: {
          line: 99,
          column: 4
        }
      },
      "18": {
        start: {
          line: 94,
          column: 22
        },
        end: {
          line: 98,
          column: 5
        }
      },
      "19": {
        start: {
          line: 95,
          column: 6
        },
        end: {
          line: 95,
          column: 63
        }
      },
      "20": {
        start: {
          line: 97,
          column: 6
        },
        end: {
          line: 97,
          column: 20
        }
      },
      "21": {
        start: {
          line: 101,
          column: 2
        },
        end: {
          line: 101,
          column: 31
        }
      },
      "22": {
        start: {
          line: 109,
          column: 21
        },
        end: {
          line: 109,
          column: 33
        }
      },
      "23": {
        start: {
          line: 110,
          column: 25
        },
        end: {
          line: 110,
          column: 53
        }
      },
      "24": {
        start: {
          line: 112,
          column: 4
        },
        end: {
          line: 115,
          column: 6
        }
      },
      "25": {
        start: {
          line: 119,
          column: 4
        },
        end: {
          line: 123,
          column: 6
        }
      },
      "26": {
        start: {
          line: 121,
          column: 19
        },
        end: {
          line: 121,
          column: 60
        }
      },
      "27": {
        start: {
          line: 126,
          column: 2
        },
        end: {
          line: 130,
          column: 4
        }
      },
      "28": {
        start: {
          line: 127,
          column: 4
        },
        end: {
          line: 129,
          column: 6
        }
      },
      "29": {
        start: {
          line: 128,
          column: 6
        },
        end: {
          line: 128,
          column: 46
        }
      }
    },
    fnMap: {
      "0": {
        name: "createContext",
        decl: {
          start: {
            line: 19,
            column: 9
          },
          end: {
            line: 19,
            column: 22
          }
        },
        loc: {
          start: {
            line: 19,
            column: 30
          },
          end: {
            line: 52,
            column: 1
          }
        },
        line: 19
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 27,
            column: 4
          },
          end: {
            line: 27,
            column: 5
          }
        },
        loc: {
          start: {
            line: 27,
            column: 22
          },
          end: {
            line: 29,
            column: 5
          }
        },
        line: 27
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 31,
            column: 4
          },
          end: {
            line: 31,
            column: 5
          }
        },
        loc: {
          start: {
            line: 31,
            column: 13
          },
          end: {
            line: 33,
            column: 5
          }
        },
        line: 31
      },
      "3": {
        name: "Consumer",
        decl: {
          start: {
            line: 40,
            column: 11
          },
          end: {
            line: 40,
            column: 19
          }
        },
        loc: {
          start: {
            line: 40,
            column: 42
          },
          end: {
            line: 42,
            column: 3
          }
        },
        line: 40
      },
      "4": {
        name: "getServices",
        decl: {
          start: {
            line: 56,
            column: 9
          },
          end: {
            line: 56,
            column: 20
          }
        },
        loc: {
          start: {
            line: 56,
            column: 67
          },
          end: {
            line: 66,
            column: 1
          }
        },
        line: 56
      },
      "5": {
        name: "(anonymous_5)",
        decl: {
          start: {
            line: 59,
            column: 31
          },
          end: {
            line: 59,
            column: 32
          }
        },
        loc: {
          start: {
            line: 59,
            column: 50
          },
          end: {
            line: 63,
            column: 3
          }
        },
        line: 59
      },
      "6": {
        name: "defaultMap",
        decl: {
          start: {
            line: 73,
            column: 9
          },
          end: {
            line: 73,
            column: 19
          }
        },
        loc: {
          start: {
            line: 73,
            column: 47
          },
          end: {
            line: 75,
            column: 1
          }
        },
        line: 73
      },
      "7": {
        name: "registerInjector",
        decl: {
          start: {
            line: 77,
            column: 16
          },
          end: {
            line: 77,
            column: 32
          }
        },
        loc: {
          start: {
            line: 77,
            column: 49
          },
          end: {
            line: 102,
            column: 1
          }
        },
        line: 77
      },
      "8": {
        name: "inject",
        decl: {
          start: {
            line: 81,
            column: 11
          },
          end: {
            line: 81,
            column: 17
          }
        },
        loc: {
          start: {
            line: 81,
            column: 48
          },
          end: {
            line: 83,
            column: 3
          }
        },
        line: 81
      },
      "9": {
        name: "renderProvider",
        decl: {
          start: {
            line: 85,
            column: 11
          },
          end: {
            line: 85,
            column: 25
          }
        },
        loc: {
          start: {
            line: 85,
            column: 36
          },
          end: {
            line: 91,
            column: 3
          }
        },
        line: 85
      },
      "10": {
        name: "(anonymous_10)",
        decl: {
          start: {
            line: 94,
            column: 16
          },
          end: {
            line: 94,
            column: 17
          }
        },
        loc: {
          start: {
            line: 94,
            column: 22
          },
          end: {
            line: 98,
            column: 5
          }
        },
        line: 94
      },
      "11": {
        name: "(anonymous_11)",
        decl: {
          start: {
            line: 94,
            column: 22
          },
          end: {
            line: 94,
            column: 23
          }
        },
        loc: {
          start: {
            line: 94,
            column: 37
          },
          end: {
            line: 98,
            column: 5
          }
        },
        line: 94
      },
      "12": {
        name: "withServices",
        decl: {
          start: {
            line: 104,
            column: 16
          },
          end: {
            line: 104,
            column: 28
          }
        },
        loc: {
          start: {
            line: 107,
            column: 2
          },
          end: {
            line: 131,
            column: 1
          }
        },
        line: 107
      },
      "13": {
        name: "resolve",
        decl: {
          start: {
            line: 108,
            column: 11
          },
          end: {
            line: 108,
            column: 18
          }
        },
        loc: {
          start: {
            line: 108,
            column: 34
          },
          end: {
            line: 116,
            column: 3
          }
        },
        line: 108
      },
      "14": {
        name: "renderConsumer",
        decl: {
          start: {
            line: 118,
            column: 11
          },
          end: {
            line: 118,
            column: 25
          }
        },
        loc: {
          start: {
            line: 118,
            column: 44
          },
          end: {
            line: 124,
            column: 3
          }
        },
        line: 118
      },
      "15": {
        name: "(anonymous_15)",
        decl: {
          start: {
            line: 121,
            column: 9
          },
          end: {
            line: 121,
            column: 10
          }
        },
        loc: {
          start: {
            line: 121,
            column: 19
          },
          end: {
            line: 121,
            column: 60
          }
        },
        line: 121
      },
      "16": {
        name: "(anonymous_16)",
        decl: {
          start: {
            line: 126,
            column: 9
          },
          end: {
            line: 126,
            column: 10
          }
        },
        loc: {
          start: {
            line: 126,
            column: 48
          },
          end: {
            line: 130,
            column: 3
          }
        },
        line: 126
      },
      "17": {
        name: "WithServices",
        decl: {
          start: {
            line: 127,
            column: 20
          },
          end: {
            line: 127,
            column: 32
          }
        },
        loc: {
          start: {
            line: 127,
            column: 43
          },
          end: {
            line: 129,
            column: 5
          }
        },
        line: 127
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 20,
            column: 2
          },
          end: {
            line: 22,
            column: 3
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 20,
            column: 2
          },
          end: {
            line: 22,
            column: 3
          }
        }, {
          start: {
            line: 20,
            column: 2
          },
          end: {
            line: 22,
            column: 3
          }
        }],
        line: 20
      },
      "1": {
        loc: {
          start: {
            line: 28,
            column: 21
          },
          end: {
            line: 28,
            column: 46
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 28,
            column: 21
          },
          end: {
            line: 28,
            column: 37
          }
        }, {
          start: {
            line: 28,
            column: 41
          },
          end: {
            line: 28,
            column: 46
          }
        }],
        line: 28
      },
      "2": {
        loc: {
          start: {
            line: 95,
            column: 20
          },
          end: {
            line: 95,
            column: 62
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 95,
            column: 20
          },
          end: {
            line: 95,
            column: 31
          }
        }, {
          start: {
            line: 95,
            column: 35
          },
          end: {
            line: 95,
            column: 62
          }
        }],
        line: 95
      },
      "3": {
        loc: {
          start: {
            line: 106,
            column: 2
          },
          end: {
            line: 106,
            column: 41
          }
        },
        type: "default-arg",
        locations: [{
          start: {
            line: 106,
            column: 31
          },
          end: {
            line: 106,
            column: 41
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
      "29": 0
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
      "17": 0
    },
    b: {
      "0": [0, 0],
      "1": [0, 0],
      "2": [0, 0],
      "3": [0]
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

function _objectSpread$1(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty$1(target, key, source[key]); }); } return target; }

function _defineProperty$1(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/** Copyright (c) 2018 Uber Technologies, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */
// React.createContext ponyfill
function createContext(value) {
  cov_1ro03iy4hg.f[0]++;
  cov_1ro03iy4hg.s[0]++;

  if ('createContext' in React) {
    cov_1ro03iy4hg.b[0][0]++;
    cov_1ro03iy4hg.s[1]++;
    return React.createContext(value);
  } else {
    cov_1ro03iy4hg.b[0][1]++;
  }

  const key = (cov_1ro03iy4hg.s[2]++, `_fusionContextPonyfill${Math.random()}`);

  class Provider extends (React.Component) {
    getChildContext() {
      cov_1ro03iy4hg.f[1]++;
      cov_1ro03iy4hg.s[3]++;
      return {
        [key]: (cov_1ro03iy4hg.b[1][0]++, this.props.value) || (cov_1ro03iy4hg.b[1][1]++, value)
      };
    }

    render() {
      cov_1ro03iy4hg.f[2]++;
      cov_1ro03iy4hg.s[4]++;
      return this.props.children;
    }

  }

  cov_1ro03iy4hg.s[5]++;
  Provider.childContextTypes = {
    [key]: PropTypes.any.isRequired
  };

  function Consumer(props, context) {
    cov_1ro03iy4hg.f[3]++;
    cov_1ro03iy4hg.s[6]++;
    return props.children(context[key]);
  }

  cov_1ro03iy4hg.s[7]++;
  Consumer.contextTypes = {
    [key]: PropTypes.any.isRequired
  };
  cov_1ro03iy4hg.s[8]++;
  return {
    Provider,
    Consumer
  };
}

let InjectorContext;

function getServices(app, deps) {
  cov_1ro03iy4hg.f[4]++;
  const services = (cov_1ro03iy4hg.s[9]++, {});
  cov_1ro03iy4hg.s[10]++;
  Object.entries(deps).forEach(([name, token]) => {
    cov_1ro03iy4hg.f[5]++;
    cov_1ro03iy4hg.s[11]++;
    // To be addressed in a future Flow-focued PR.
    // $FlowFixMe
    services[name] = app.getService(token);
  });
  cov_1ro03iy4hg.s[12]++;
  return services;
} // istanbul ignore next


function defaultInject(deps) {
  return {};
}

function defaultMap(services) {
  cov_1ro03iy4hg.f[6]++;
  cov_1ro03iy4hg.s[13]++;
  return services;
}

function registerInjector(app) {
  cov_1ro03iy4hg.f[7]++;
  cov_1ro03iy4hg.s[14]++;
  // Lazily create context for easier testing
  InjectorContext = createContext(defaultInject);

  function inject(deps) {
    cov_1ro03iy4hg.f[8]++;
    cov_1ro03iy4hg.s[15]++;
    return getServices(app, deps);
  }

  function renderProvider(children) {
    cov_1ro03iy4hg.f[9]++;
    cov_1ro03iy4hg.s[16]++;
    return React.createElement(InjectorContext.Provider, {
      value: inject
    }, children);
  }

  const injectorPlugin = (cov_1ro03iy4hg.s[17]++, FusionApp.createPlugin({
    middleware: () => {
      cov_1ro03iy4hg.f[10]++;
      cov_1ro03iy4hg.s[18]++;
      return (ctx, next) => {
        cov_1ro03iy4hg.f[11]++;
        cov_1ro03iy4hg.s[19]++;
        ctx.element = (cov_1ro03iy4hg.b[2][0]++, ctx.element) && (cov_1ro03iy4hg.b[2][1]++, renderProvider(ctx.element));
        cov_1ro03iy4hg.s[20]++;
        return next();
      };
    }
  }));
  cov_1ro03iy4hg.s[21]++;
  app.register(injectorPlugin);
}
function withServices(deps, mapServicesToProps = (cov_1ro03iy4hg.b[3][0]++, defaultMap)) {
  cov_1ro03iy4hg.f[12]++;

  function resolve(inject, props) {
    cov_1ro03iy4hg.f[13]++;
    const services = (cov_1ro03iy4hg.s[22]++, inject(deps));
    const serviceProps = (cov_1ro03iy4hg.s[23]++, mapServicesToProps(services));
    cov_1ro03iy4hg.s[24]++;
    return _objectSpread$1({}, serviceProps, props);
  }

  function renderConsumer(Component, props) {
    cov_1ro03iy4hg.f[14]++;
    cov_1ro03iy4hg.s[25]++;
    return React.createElement(InjectorContext.Consumer, null, inject => {
      cov_1ro03iy4hg.f[15]++;
      cov_1ro03iy4hg.s[26]++;
      return React.createElement(Component, resolve(inject, props));
    });
  }

  cov_1ro03iy4hg.s[27]++;
  return Component => {
    cov_1ro03iy4hg.f[16]++;
    cov_1ro03iy4hg.s[28]++;
    return function WithServices(props) {
      cov_1ro03iy4hg.f[17]++;
      cov_1ro03iy4hg.s[29]++;
      return renderConsumer(Component, props);
    };
  };
}

var cov_8a4wetofu = function () {
  var path = "/Users/lhorie/Documents/test-private-monorepo/public/fusion-react/src/server.js",
      hash = "0917be5fc63ee1e31dd12e91228e152ec9a1f6ea",
      Function = function () {}.constructor,
      global = new Function('return this')(),
      gcv = "__coverage__",
      coverageData = {
    path: "/Users/lhorie/Documents/test-private-monorepo/public/fusion-react/src/server.js",
    statementMap: {
      "0": {
        start: {
          line: 14,
          column: 2
        },
        end: {
          line: 14,
          column: 46
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 13,
            column: 15
          },
          end: {
            line: 13,
            column: 16
          }
        },
        loc: {
          start: {
            line: 14,
            column: 2
          },
          end: {
            line: 14,
            column: 46
          }
        },
        line: 14
      }
    },
    branchMap: {},
    s: {
      "0": 0
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

/* eslint-env node */
var render = (el => {
  cov_8a4wetofu.f[0]++;
  cov_8a4wetofu.s[0]++;
  return `<div id='root'>${server.renderToString(el)}</div>`;
});

var cov_22rjc6hiq7 = function () {
  var path = "/Users/lhorie/Documents/test-private-monorepo/public/fusion-react/src/client.js",
      hash = "2ad4d7a09e04858aa57be751e2aeec411a0253c6",
      Function = function () {}.constructor,
      global = new Function('return this')(),
      gcv = "__coverage__",
      coverageData = {
    path: "/Users/lhorie/Documents/test-private-monorepo/public/fusion-react/src/client.js",
    statementMap: {
      "0": {
        start: {
          line: 14,
          column: 21
        },
        end: {
          line: 14,
          column: 52
        }
      },
      "1": {
        start: {
          line: 16,
          column: 2
        },
        end: {
          line: 18,
          column: 3
        }
      },
      "2": {
        start: {
          line: 17,
          column: 4
        },
        end: {
          line: 17,
          column: 53
        }
      },
      "3": {
        start: {
          line: 20,
          column: 2
        },
        end: {
          line: 22,
          column: 38
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 13,
            column: 15
          },
          end: {
            line: 13,
            column: 16
          }
        },
        loc: {
          start: {
            line: 13,
            column: 41
          },
          end: {
            line: 23,
            column: 1
          }
        },
        line: 13
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 16,
            column: 2
          },
          end: {
            line: 18,
            column: 3
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 16,
            column: 2
          },
          end: {
            line: 18,
            column: 3
          }
        }, {
          start: {
            line: 16,
            column: 2
          },
          end: {
            line: 18,
            column: 3
          }
        }],
        line: 16
      },
      "1": {
        loc: {
          start: {
            line: 20,
            column: 9
          },
          end: {
            line: 22,
            column: 37
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 21,
            column: 6
          },
          end: {
            line: 21,
            column: 38
          }
        }, {
          start: {
            line: 22,
            column: 6
          },
          end: {
            line: 22,
            column: 37
          }
        }],
        line: 20
      }
    },
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0
    },
    f: {
      "0": 0
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

/** Copyright (c) 2018 Uber Technologies, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

/* eslint-env browser */

var cov_26m7f0ny72 = function () {
  var path = "/Users/lhorie/Documents/test-private-monorepo/public/fusion-react/src/provider.js",
      hash = "6173e36615377ad947f114f55a458f70966a291c",
      Function = function () {}.constructor,
      global = new Function('return this')(),
      gcv = "__coverage__",
      coverageData = {
    path: "/Users/lhorie/Documents/test-private-monorepo/public/fusion-react/src/provider.js",
    statementMap: {
      "0": {
        start: {
          line: 16,
          column: 8
        },
        end: {
          line: 16,
          column: 45
        }
      },
      "1": {
        start: {
          line: 19,
          column: 8
        },
        end: {
          line: 19,
          column: 56
        }
      },
      "2": {
        start: {
          line: 22,
          column: 4
        },
        end: {
          line: 25,
          column: 6
        }
      },
      "3": {
        start: {
          line: 26,
          column: 4
        },
        end: {
          line: 27,
          column: 60
        }
      },
      "4": {
        start: {
          line: 27,
          column: 30
        },
        end: {
          line: 27,
          column: 45
        }
      },
      "5": {
        start: {
          line: 29,
          column: 4
        },
        end: {
          line: 29,
          column: 20
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 13,
            column: 10
          },
          end: {
            line: 13,
            column: 11
          }
        },
        loc: {
          start: {
            line: 13,
            column: 28
          },
          end: {
            line: 30,
            column: 3
          }
        },
        line: 13
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 15,
            column: 6
          },
          end: {
            line: 15,
            column: 7
          }
        },
        loc: {
          start: {
            line: 15,
            column: 24
          },
          end: {
            line: 17,
            column: 7
          }
        },
        line: 15
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 18,
            column: 6
          },
          end: {
            line: 18,
            column: 7
          }
        },
        loc: {
          start: {
            line: 18,
            column: 15
          },
          end: {
            line: 20,
            column: 7
          }
        },
        line: 18
      },
      "3": {
        name: "(anonymous_3)",
        decl: {
          start: {
            line: 27,
            column: 25
          },
          end: {
            line: 27,
            column: 26
          }
        },
        loc: {
          start: {
            line: 27,
            column: 30
          },
          end: {
            line: 27,
            column: 45
          }
        },
        line: 27
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 23,
            column: 10
          },
          end: {
            line: 23,
            column: 42
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 23,
            column: 10
          },
          end: {
            line: 23,
            column: 36
          }
        }, {
          start: {
            line: 23,
            column: 40
          },
          end: {
            line: 23,
            column: 42
          }
        }],
        line: 23
      }
    },
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
      "2": 0,
      "3": 0
    },
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

function _objectSpread$2(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty$2(target, key, source[key]); }); } return target; }

function _defineProperty$2(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/** Copyright (c) 2018 Uber Technologies, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */
var Provider$1 = {
  create: name => {
    cov_26m7f0ny72.f[0]++;

    class Provider extends (React.Component) {
      getChildContext() {
        cov_26m7f0ny72.f[1]++;
        cov_26m7f0ny72.s[0]++;
        return {
          [name]: this.props.provides
        };
      }

      render() {
        cov_26m7f0ny72.f[2]++;
        cov_26m7f0ny72.s[1]++;
        return React.Children.only(this.props.children);
      }

    }

    cov_26m7f0ny72.s[2]++;
    Provider.childContextTypes = _objectSpread$2({}, (cov_26m7f0ny72.b[0][0]++, Provider.childContextTypes) || (cov_26m7f0ny72.b[0][1]++, {}), {
      [name]: PropTypes.any.isRequired
    });
    cov_26m7f0ny72.s[3]++;
    Provider.displayName = name.replace(/^./, c => {
      cov_26m7f0ny72.f[3]++;
      cov_26m7f0ny72.s[4]++;
      return c.toUpperCase();
    }) + 'Provider';
    cov_26m7f0ny72.s[5]++;
    return Provider;
  }
};

var cov_1d8od718hg = function () {
  var path = "/Users/lhorie/Documents/test-private-monorepo/public/fusion-react/src/plugin.js",
      hash = "e7ef8b7bf68b75f152a6f78dc835fa87a68c4f60",
      Function = function () {}.constructor,
      global = new Function('return this')(),
      gcv = "__coverage__",
      coverageData = {
    path: "/Users/lhorie/Documents/test-private-monorepo/public/fusion-react/src/plugin.js",
    statementMap: {
      "0": {
        start: {
          line: 31,
          column: 4
        },
        end: {
          line: 33,
          column: 5
        }
      },
      "1": {
        start: {
          line: 32,
          column: 6
        },
        end: {
          line: 32,
          column: 36
        }
      },
      "2": {
        start: {
          line: 34,
          column: 4
        },
        end: {
          line: 38,
          column: 5
        }
      },
      "3": {
        start: {
          line: 35,
          column: 6
        },
        end: {
          line: 37,
          column: 8
        }
      },
      "4": {
        start: {
          line: 40,
          column: 29
        },
        end: {
          line: 40,
          column: 46
        }
      },
      "5": {
        start: {
          line: 41,
          column: 30
        },
        end: {
          line: 41,
          column: 63
        }
      },
      "6": {
        start: {
          line: 42,
          column: 4
        },
        end: {
          line: 59,
          column: 6
        }
      },
      "7": {
        start: {
          line: 44,
          column: 8
        },
        end: {
          line: 44,
          column: 64
        }
      },
      "8": {
        start: {
          line: 45,
          column: 29
        },
        end: {
          line: 57,
          column: 7
        }
      },
      "9": {
        start: {
          line: 46,
          column: 8
        },
        end: {
          line: 52,
          column: 9
        }
      },
      "10": {
        start: {
          line: 47,
          column: 10
        },
        end: {
          line: 51,
          column: 12
        }
      },
      "11": {
        start: {
          line: 53,
          column: 8
        },
        end: {
          line: 55,
          column: 9
        }
      },
      "12": {
        start: {
          line: 54,
          column: 10
        },
        end: {
          line: 54,
          column: 43
        }
      },
      "13": {
        start: {
          line: 56,
          column: 8
        },
        end: {
          line: 56,
          column: 22
        }
      },
      "14": {
        start: {
          line: 58,
          column: 6
        },
        end: {
          line: 58,
          column: 16
        }
      },
      "15": {
        start: {
          line: 60,
          column: 4
        },
        end: {
          line: 60,
          column: 18
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 23,
            column: 10
          },
          end: {
            line: 23,
            column: 11
          }
        },
        loc: {
          start: {
            line: 30,
            column: 38
          },
          end: {
            line: 61,
            column: 3
          }
        },
        line: 30
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 42,
            column: 24
          },
          end: {
            line: 42,
            column: 25
          }
        },
        loc: {
          start: {
            line: 42,
            column: 50
          },
          end: {
            line: 59,
            column: 5
          }
        },
        line: 42
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 45,
            column: 29
          },
          end: {
            line: 45,
            column: 30
          }
        },
        loc: {
          start: {
            line: 45,
            column: 49
          },
          end: {
            line: 57,
            column: 7
          }
        },
        line: 45
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 31,
            column: 4
          },
          end: {
            line: 33,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 31,
            column: 4
          },
          end: {
            line: 33,
            column: 5
          }
        }, {
          start: {
            line: 31,
            column: 4
          },
          end: {
            line: 33,
            column: 5
          }
        }],
        line: 31
      },
      "1": {
        loc: {
          start: {
            line: 34,
            column: 4
          },
          end: {
            line: 38,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 34,
            column: 4
          },
          end: {
            line: 38,
            column: 5
          }
        }, {
          start: {
            line: 34,
            column: 4
          },
          end: {
            line: 38,
            column: 5
          }
        }],
        line: 34
      },
      "2": {
        loc: {
          start: {
            line: 41,
            column: 30
          },
          end: {
            line: 41,
            column: 63
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 41,
            column: 30
          },
          end: {
            line: 41,
            column: 38
          }
        }, {
          start: {
            line: 41,
            column: 42
          },
          end: {
            line: 41,
            column: 63
          }
        }],
        line: 41
      },
      "3": {
        loc: {
          start: {
            line: 44,
            column: 8
          },
          end: {
            line: 44,
            column: 64
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 44,
            column: 8
          },
          end: {
            line: 44,
            column: 26
          }
        }, {
          start: {
            line: 44,
            column: 30
          },
          end: {
            line: 44,
            column: 64
          }
        }],
        line: 44
      },
      "4": {
        loc: {
          start: {
            line: 46,
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
            line: 46,
            column: 8
          },
          end: {
            line: 52,
            column: 9
          }
        }, {
          start: {
            line: 46,
            column: 8
          },
          end: {
            line: 52,
            column: 9
          }
        }],
        line: 46
      },
      "5": {
        loc: {
          start: {
            line: 53,
            column: 8
          },
          end: {
            line: 55,
            column: 9
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 53,
            column: 8
          },
          end: {
            line: 55,
            column: 9
          }
        }, {
          start: {
            line: 53,
            column: 8
          },
          end: {
            line: 55,
            column: 9
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
      "15": 0
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
var ReactPlugin = {
  create: (name, plugin, provider) => {
    cov_1d8od718hg.f[0]++;
    cov_1d8od718hg.s[0]++;

    if (plugin.__plugin__ === undefined) {
      cov_1d8od718hg.b[0][0]++;
      cov_1d8od718hg.s[1]++;
      plugin = FusionApp.createPlugin(plugin);
    } else {
      cov_1d8od718hg.b[0][1]++;
    }

    cov_1d8od718hg.s[2]++;

    if (!plugin.__plugin__) {
      cov_1d8od718hg.b[1][0]++;
      cov_1d8od718hg.s[3]++;
      throw new Error('Provided plugin does not match FusionPlugin<TDeps, TService>');
    } else {
      cov_1d8od718hg.b[1][1]++;
    }

    let originalMiddleware = (cov_1d8od718hg.s[4]++, plugin.middleware);
    const ProviderComponent = (cov_1d8od718hg.s[5]++, (cov_1d8od718hg.b[2][0]++, provider) || (cov_1d8od718hg.b[2][1]++, Provider$1.create(name)));
    cov_1d8od718hg.s[6]++;

    plugin.middleware = (deps, provides) => {
      cov_1d8od718hg.f[1]++;
      let nextMiddleware = (cov_1d8od718hg.s[7]++, (cov_1d8od718hg.b[3][0]++, originalMiddleware) && (cov_1d8od718hg.b[3][1]++, originalMiddleware(deps, provides)));
      cov_1d8od718hg.s[8]++;

      const mw = function (ctx, next) {
        cov_1d8od718hg.f[2]++;
        cov_1d8od718hg.s[9]++;

        if (ctx.element) {
          cov_1d8od718hg.b[4][0]++;
          cov_1d8od718hg.s[10]++;
          ctx.element = React.createElement(ProviderComponent, {
            provides,
            ctx
          }, ctx.element);
        } else {
          cov_1d8od718hg.b[4][1]++;
        }

        cov_1d8od718hg.s[11]++;

        if (nextMiddleware) {
          cov_1d8od718hg.b[5][0]++;
          cov_1d8od718hg.s[12]++;
          return nextMiddleware(ctx, next);
        } else {
          cov_1d8od718hg.b[5][1]++;
        }

        cov_1d8od718hg.s[13]++;
        return next();
      };

      cov_1d8od718hg.s[14]++;
      return mw;
    };

    cov_1d8od718hg.s[15]++;
    return plugin;
  }
};

var cov_1zx1ad7426 = function () {
  var path = "/Users/lhorie/Documents/test-private-monorepo/public/fusion-react/src/hoc.js",
      hash = "f454aaf46e4b24d93153d52de1481f47623b5096",
      Function = function () {}.constructor,
      global = new Function('return this')(),
      gcv = "__coverage__",
      coverageData = {
    path: "/Users/lhorie/Documents/test-private-monorepo/public/fusion-react/src/hoc.js",
    statementMap: {
      "0": {
        start: {
          line: 16,
          column: 24
        },
        end: {
          line: 18,
          column: 40
        }
      },
      "1": {
        start: {
          line: 18,
          column: 21
        },
        end: {
          line: 18,
          column: 39
        }
      },
      "2": {
        start: {
          line: 19,
          column: 4
        },
        end: {
          line: 44,
          column: 6
        }
      },
      "3": {
        start: {
          line: 24,
          column: 10
        },
        end: {
          line: 24,
          column: 28
        }
      },
      "4": {
        start: {
          line: 25,
          column: 10
        },
        end: {
          line: 25,
          column: 36
        }
      },
      "5": {
        start: {
          line: 28,
          column: 24
        },
        end: {
          line: 28,
          column: 70
        }
      },
      "6": {
        start: {
          line: 29,
          column: 10
        },
        end: {
          line: 29,
          column: 55
        }
      },
      "7": {
        start: {
          line: 33,
          column: 8
        },
        end: {
          line: 33,
          column: 62
        }
      },
      "8": {
        start: {
          line: 34,
          column: 6
        },
        end: {
          line: 39,
          column: 12
        }
      },
      "9": {
        start: {
          line: 36,
          column: 32
        },
        end: {
          line: 36,
          column: 47
        }
      },
      "10": {
        start: {
          line: 40,
          column: 6
        },
        end: {
          line: 42,
          column: 8
        }
      },
      "11": {
        start: {
          line: 43,
          column: 6
        },
        end: {
          line: 43,
          column: 17
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 15,
            column: 10
          },
          end: {
            line: 15,
            column: 11
          }
        },
        loc: {
          start: {
            line: 15,
            column: 77
          },
          end: {
            line: 45,
            column: 3
          }
        },
        line: 15
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 18,
            column: 8
          },
          end: {
            line: 18,
            column: 9
          }
        },
        loc: {
          start: {
            line: 18,
            column: 21
          },
          end: {
            line: 18,
            column: 39
          }
        },
        line: 18
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 19,
            column: 11
          },
          end: {
            line: 19,
            column: 12
          }
        },
        loc: {
          start: {
            line: 19,
            column: 50
          },
          end: {
            line: 44,
            column: 5
          }
        },
        line: 19
      },
      "3": {
        name: "(anonymous_3)",
        decl: {
          start: {
            line: 23,
            column: 8
          },
          end: {
            line: 23,
            column: 9
          }
        },
        loc: {
          start: {
            line: 23,
            column: 38
          },
          end: {
            line: 26,
            column: 9
          }
        },
        line: 23
      },
      "4": {
        name: "(anonymous_4)",
        decl: {
          start: {
            line: 27,
            column: 8
          },
          end: {
            line: 27,
            column: 9
          }
        },
        loc: {
          start: {
            line: 27,
            column: 17
          },
          end: {
            line: 30,
            column: 9
          }
        },
        line: 27
      },
      "5": {
        name: "(anonymous_5)",
        decl: {
          start: {
            line: 36,
            column: 27
          },
          end: {
            line: 36,
            column: 28
          }
        },
        loc: {
          start: {
            line: 36,
            column: 32
          },
          end: {
            line: 36,
            column: 47
          }
        },
        line: 36
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 16,
            column: 24
          },
          end: {
            line: 18,
            column: 40
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 17,
            column: 8
          },
          end: {
            line: 17,
            column: 26
          }
        }, {
          start: {
            line: 18,
            column: 8
          },
          end: {
            line: 18,
            column: 40
          }
        }],
        line: 16
      },
      "1": {
        loc: {
          start: {
            line: 33,
            column: 8
          },
          end: {
            line: 33,
            column: 62
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 33,
            column: 8
          },
          end: {
            line: 33,
            column: 29
          }
        }, {
          start: {
            line: 33,
            column: 33
          },
          end: {
            line: 33,
            column: 47
          }
        }, {
          start: {
            line: 33,
            column: 51
          },
          end: {
            line: 33,
            column: 62
          }
        }],
        line: 33
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
      "11": 0
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
      "1": [0, 0, 0]
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

function _objectSpread$3(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty$3(target, key, source[key]); }); } return target; }

function _defineProperty$3(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/** Copyright (c) 2018 Uber Technologies, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */
var hoc = {
  create: (name, mapProvidesToProps) => {
    cov_1zx1ad7426.f[0]++;
    const mapProvides = (cov_1zx1ad7426.s[0]++, mapProvidesToProps ? (cov_1zx1ad7426.b[0][0]++, mapProvidesToProps) : (cov_1zx1ad7426.b[0][1]++, provides => {
      cov_1zx1ad7426.f[1]++;
      cov_1zx1ad7426.s[1]++;
      return {
        [name]: provides
      };
    }));
    cov_1zx1ad7426.s[2]++;
    return Component => {
      cov_1zx1ad7426.f[2]++;

      class HOC extends (React.Component) {
        constructor(props, ctx) {
          cov_1zx1ad7426.f[3]++;
          cov_1zx1ad7426.s[3]++;
          super(props, ctx);
          cov_1zx1ad7426.s[4]++;
          this.provides = ctx[name];
        }

        render() {
          cov_1zx1ad7426.f[4]++;
          const props = (cov_1zx1ad7426.s[5]++, _objectSpread$3({}, this.props, mapProvides(this.provides)));
          cov_1zx1ad7426.s[6]++;
          return React.createElement(Component, props);
        }

      }

      const displayName = (cov_1zx1ad7426.s[7]++, (cov_1zx1ad7426.b[1][0]++, Component.displayName) || (cov_1zx1ad7426.b[1][1]++, Component.name) || (cov_1zx1ad7426.b[1][2]++, 'Anonymous'));
      cov_1zx1ad7426.s[8]++;
      HOC.displayName = 'With' + name.replace(/^./, c => {
        cov_1zx1ad7426.f[5]++;
        cov_1zx1ad7426.s[9]++;
        return c.toUpperCase();
      }) + '(' + displayName + ')';
      cov_1zx1ad7426.s[10]++;
      HOC.contextTypes = {
        [name]: PropTypes.any.isRequired
      };
      cov_1zx1ad7426.s[11]++;
      return HOC;
    };
  }
};

var cov_16y91egl1u = function () {
  var path = "/Users/lhorie/Documents/test-private-monorepo/public/fusion-react/src/index.js",
      hash = "e0a49dd07da55df465285a2a02a4f4c756a17e3e",
      Function = function () {}.constructor,
      global = new Function('return this')(),
      gcv = "__coverage__",
      coverageData = {
    path: "/Users/lhorie/Documents/test-private-monorepo/public/fusion-react/src/index.js",
    statementMap: {
      "0": {
        start: {
          line: 28,
          column: 4
        },
        end: {
          line: 31,
          column: 8
        }
      },
      "1": {
        start: {
          line: 29,
          column: 6
        },
        end: {
          line: 31,
          column: 8
        }
      },
      "2": {
        start: {
          line: 32,
          column: 21
        },
        end: {
          line: 72,
          column: 6
        }
      },
      "3": {
        start: {
          line: 37,
          column: 8
        },
        end: {
          line: 44,
          column: 10
        }
      },
      "4": {
        start: {
          line: 38,
          column: 10
        },
        end: {
          line: 43,
          column: 13
        }
      },
      "5": {
        start: {
          line: 39,
          column: 12
        },
        end: {
          line: 41,
          column: 13
        }
      },
      "6": {
        start: {
          line: 40,
          column: 14
        },
        end: {
          line: 40,
          column: 32
        }
      },
      "7": {
        start: {
          line: 42,
          column: 12
        },
        end: {
          line: 42,
          column: 66
        }
      },
      "8": {
        start: {
          line: 47,
          column: 8
        },
        end: {
          line: 70,
          column: 10
        }
      },
      "9": {
        start: {
          line: 48,
          column: 10
        },
        end: {
          line: 50,
          column: 11
        }
      },
      "10": {
        start: {
          line: 49,
          column: 12
        },
        end: {
          line: 49,
          column: 26
        }
      },
      "11": {
        start: {
          line: 52,
          column: 33
        },
        end: {
          line: 63,
          column: 18
        }
      },
      "12": {
        start: {
          line: 55,
          column: 16
        },
        end: {
          line: 55,
          column: 48
        }
      },
      "13": {
        start: {
          line: 58,
          column: 16
        },
        end: {
          line: 61,
          column: 17
        }
      },
      "14": {
        start: {
          line: 59,
          column: 33
        },
        end: {
          line: 59,
          column: 59
        }
      },
      "15": {
        start: {
          line: 60,
          column: 18
        },
        end: {
          line: 60,
          column: 40
        }
      },
      "16": {
        start: {
          line: 64,
          column: 10
        },
        end: {
          line: 68,
          column: 12
        }
      },
      "17": {
        start: {
          line: 69,
          column: 10
        },
        end: {
          line: 69,
          column: 24
        }
      },
      "18": {
        start: {
          line: 73,
          column: 4
        },
        end: {
          line: 73,
          column: 26
        }
      },
      "19": {
        start: {
          line: 74,
          column: 4
        },
        end: {
          line: 74,
          column: 27
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
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
            column: 74
          },
          end: {
            line: 75,
            column: 3
          }
        },
        line: 27
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 36,
            column: 6
          },
          end: {
            line: 36,
            column: 7
          }
        },
        loc: {
          start: {
            line: 36,
            column: 17
          },
          end: {
            line: 45,
            column: 7
          }
        },
        line: 36
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 37,
            column: 15
          },
          end: {
            line: 37,
            column: 16
          }
        },
        loc: {
          start: {
            line: 37,
            column: 41
          },
          end: {
            line: 44,
            column: 9
          }
        },
        line: 37
      },
      "3": {
        name: "(anonymous_3)",
        decl: {
          start: {
            line: 38,
            column: 34
          },
          end: {
            line: 38,
            column: 35
          }
        },
        loc: {
          start: {
            line: 38,
            column: 40
          },
          end: {
            line: 43,
            column: 11
          }
        },
        line: 38
      },
      "4": {
        name: "(anonymous_4)",
        decl: {
          start: {
            line: 46,
            column: 6
          },
          end: {
            line: 46,
            column: 7
          }
        },
        loc: {
          start: {
            line: 46,
            column: 37
          },
          end: {
            line: 71,
            column: 7
          }
        },
        line: 46
      },
      "5": {
        name: "(anonymous_5)",
        decl: {
          start: {
            line: 47,
            column: 15
          },
          end: {
            line: 47,
            column: 16
          }
        },
        loc: {
          start: {
            line: 47,
            column: 30
          },
          end: {
            line: 70,
            column: 9
          }
        },
        line: 47
      },
      "6": {
        name: "(anonymous_6)",
        decl: {
          start: {
            line: 53,
            column: 14
          },
          end: {
            line: 53,
            column: 15
          }
        },
        loc: {
          start: {
            line: 53,
            column: 25
          },
          end: {
            line: 62,
            column: 15
          }
        },
        line: 53
      },
      "7": {
        name: "noop",
        decl: {
          start: {
            line: 80,
            column: 9
          },
          end: {
            line: 80,
            column: 13
          }
        },
        loc: {
          start: {
            line: 80,
            column: 16
          },
          end: {
            line: 80,
            column: 18
          }
        },
        line: 80
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 28,
            column: 4
          },
          end: {
            line: 31,
            column: 8
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 28,
            column: 4
          },
          end: {
            line: 31,
            column: 8
          }
        }, {
          start: {
            line: 28,
            column: 4
          },
          end: {
            line: 31,
            column: 8
          }
        }],
        line: 28
      },
      "1": {
        loc: {
          start: {
            line: 39,
            column: 12
          },
          end: {
            line: 41,
            column: 13
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 39,
            column: 12
          },
          end: {
            line: 41,
            column: 13
          }
        }, {
          start: {
            line: 39,
            column: 12
          },
          end: {
            line: 41,
            column: 13
          }
        }],
        line: 39
      },
      "2": {
        loc: {
          start: {
            line: 42,
            column: 19
          },
          end: {
            line: 42,
            column: 65
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 42,
            column: 30
          },
          end: {
            line: 42,
            column: 46
          }
        }, {
          start: {
            line: 42,
            column: 49
          },
          end: {
            line: 42,
            column: 65
          }
        }],
        line: 42
      },
      "3": {
        loc: {
          start: {
            line: 48,
            column: 10
          },
          end: {
            line: 50,
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
            line: 50,
            column: 11
          }
        }, {
          start: {
            line: 48,
            column: 10
          },
          end: {
            line: 50,
            column: 11
          }
        }],
        line: 48
      },
      "4": {
        loc: {
          start: {
            line: 48,
            column: 14
          },
          end: {
            line: 48,
            column: 38
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 48,
            column: 14
          },
          end: {
            line: 48,
            column: 22
          }
        }, {
          start: {
            line: 48,
            column: 26
          },
          end: {
            line: 48,
            column: 38
          }
        }],
        line: 48
      },
      "5": {
        loc: {
          start: {
            line: 52,
            column: 33
          },
          end: {
            line: 63,
            column: 18
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 53,
            column: 14
          },
          end: {
            line: 62,
            column: 15
          }
        }, {
          start: {
            line: 63,
            column: 14
          },
          end: {
            line: 63,
            column: 18
          }
        }],
        line: 52
      },
      "6": {
        loc: {
          start: {
            line: 58,
            column: 16
          },
          end: {
            line: 61,
            column: 17
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 58,
            column: 16
          },
          end: {
            line: 61,
            column: 17
          }
        }, {
          start: {
            line: 58,
            column: 16
          },
          end: {
            line: 61,
            column: 17
          }
        }],
        line: 58
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
      "6": 0,
      "7": 0
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
class App extends FusionApp__default {
  constructor(root, render$$1) {
    cov_16y91egl1u.f[0]++;
    cov_16y91egl1u.s[0]++;

    if (!React.isValidElement(root)) {
      cov_16y91egl1u.b[0][0]++;
      cov_16y91egl1u.s[1]++;
      throw new Error('Invalid React element. Ensure your root element is a React.Element (e.g. <Foo />) and not a React.Component (e.g. Foo)');
    } else {
      cov_16y91egl1u.b[0][1]++;
    }

    const renderer = (cov_16y91egl1u.s[2]++, FusionApp.createPlugin({
      deps: {
        criticalChunkIds: FusionApp.CriticalChunkIdsToken.optional
      },

      provides() {
        cov_16y91egl1u.f[1]++;
        cov_16y91egl1u.s[3]++;
        return el => {
          cov_16y91egl1u.f[2]++;
          cov_16y91egl1u.s[4]++;
          return prepareTyped(el).then(() => {
            cov_16y91egl1u.f[3]++;
            cov_16y91egl1u.s[5]++;

            if (render$$1) {
              cov_16y91egl1u.b[1][0]++;
              cov_16y91egl1u.s[6]++;
              return render$$1(el);
            } else {
              cov_16y91egl1u.b[1][1]++;
            }

            cov_16y91egl1u.s[7]++;
            return (cov_16y91egl1u.b[2][0]++, render(el));
          });
        };
      },

      middleware({
        criticalChunkIds
      }) {
        cov_16y91egl1u.f[4]++;
        cov_16y91egl1u.s[8]++;
        return (ctx, next) => {
          cov_16y91egl1u.f[5]++;
          cov_16y91egl1u.s[9]++;

          if ((cov_16y91egl1u.b[4][0]++, true) && (cov_16y91egl1u.b[4][1]++, !ctx.element)) {
            cov_16y91egl1u.b[3][0]++;
            cov_16y91egl1u.s[10]++;
            return next();
          } else {
            cov_16y91egl1u.b[3][1]++;
          }

          const markAsCritical = (cov_16y91egl1u.s[11]++, (cov_16y91egl1u.b[5][0]++, chunkId => {
            cov_16y91egl1u.f[6]++;
            cov_16y91egl1u.s[12]++;
            // Push to legacy context for backwards compat w/ legacy SSR template
            ctx.preloadChunks.push(chunkId); // Also use new service if registered

            cov_16y91egl1u.s[13]++;

            if (criticalChunkIds) {
              cov_16y91egl1u.b[6][0]++;
              let chunkIds = (cov_16y91egl1u.s[14]++, criticalChunkIds.from(ctx));
              cov_16y91egl1u.s[15]++;
              chunkIds.add(chunkId);
            } else {
              cov_16y91egl1u.b[6][1]++;
            }
          }));
          cov_16y91egl1u.s[16]++;
          ctx.element = React.createElement(PrepareProvider, {
            markAsCritical: markAsCritical
          }, ctx.element);
          cov_16y91egl1u.s[17]++;
          return next();
        };
      }

    }));
    cov_16y91egl1u.s[18]++;
    super(root, renderer);
    cov_16y91egl1u.s[19]++;
    registerInjector(this);
  }

}

/** Copyright (c) 2018 Uber Technologies, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */
tape('hoc', async t => {
  const withTest = hoc.create('test');
  const testProvides = {
    hello: 'world'
  };
  let didRender = false;

  function TestComponent(props) {
    didRender = true;
    t.deepLooseEqual(props.test, testProvides);
    t.notok(props.ctx, 'does not pass ctx through by default');
    return React.createElement('div', null, 'hello');
  }

  const testPlugin = ReactPlugin.create('test', FusionApp.createPlugin({
    provides: () => testProvides
  }));
  const element = React.createElement(withTest(TestComponent));
  const app = new App(element);
  app.register(testPlugin);
  const sim = fusionTestUtils.getSimulator(app);
  const ctx = await sim.render('/');
  t.ok(typeof ctx.body === 'string' && ctx.body.includes('hello'));
  t.ok(didRender);
  t.end();
});
tape('hoc with mapProvidesToProps', async t => {
  const withTest = hoc.create('test', provides => {
    return {
      mapped: provides
    };
  });
  const testProvides = {
    hello: 'world'
  };
  let didRender = false;

  function TestComponent(props) {
    didRender = true;
    t.deepLooseEqual(props.mapped, testProvides);
    return React.createElement('div', null, 'hello');
  }

  const testPlugin = ReactPlugin.create('test', FusionApp.createPlugin({
    provides: () => testProvides
  }));
  const element = React.createElement(withTest(TestComponent));
  const app = new App(element);
  app.register(testPlugin);
  const sim = fusionTestUtils.getSimulator(app);
  const ctx = await sim.render('/');
  t.ok(typeof ctx.body === 'string' && ctx.body.includes('hello'));
  t.ok(didRender);
  t.end();
});
tape('hoc with custom provider', async t => {
  const withTest = hoc.create('test');
  const testProvides = {
    hello: 'world'
  };
  let didRender = false;
  let didUseCustomProvider = false;

  function TestComponent(props) {
    didRender = true;
    t.deepLooseEqual(props.test, testProvides);
    return React.createElement('div', null, 'hello');
  }

  class CustomProvider extends React.Component {
    getChildContext() {
      return {
        test: this.props.provides
      };
    }

    render() {
      didUseCustomProvider = true;
      t.ok(this.props.ctx, 'passes ctx through');
      return React.Children.only(this.props.children);
    }

  }

  CustomProvider.childContextTypes = {
    test: PropTypes.any.isRequired
  };
  const testPlugin = ReactPlugin.create('test', FusionApp.createPlugin({
    provides: () => testProvides
  }), CustomProvider);
  const element = React.createElement(withTest(TestComponent));
  const app = new App(element);
  app.register(testPlugin);
  const sim = fusionTestUtils.getSimulator(app);
  const ctx = await sim.render('/');
  t.ok(typeof ctx.body === 'string' && ctx.body.includes('hello'));
  t.ok(didRender);
  t.ok(didUseCustomProvider);
  t.end();
});

/** Copyright (c) 2018 Uber Technologies, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */
async function injectServices(t) {
  const HelloToken = FusionApp.createToken('hola');
  const HelloPlugin = FusionApp.createPlugin({
    provides() {
      return 'world';
    }

  });
  const GoodbyeToken = FusionApp.createToken('adios');
  const GoodbyePlugin = FusionApp.createPlugin({
    provides() {
      return 'moon';
    }

  });

  function TestComponent({
    hi,
    bye
  }) {
    t.equal(hi, 'world');
    t.equal(bye, 'moon');
    return React.createElement("div", null, hi, " ", bye);
  }

  const TestComponentContainer = withServices({
    hi: HelloToken,
    bye: GoodbyeToken
  })(TestComponent);
  const element = React.createElement(TestComponentContainer);
  const app = new App(element);
  app.register(HelloToken, HelloPlugin);
  app.register(GoodbyeToken, GoodbyePlugin);
  const sim = fusionTestUtils.getSimulator(app);
  const {
    body
  } = await sim.render('/');
  t.ok(body && typeof body === 'string' && body.match(/\bworld\b.*\bmoon\b/));
}

tape('inject services', async t => {
  await injectServices(t);
  t.end();
}); // Can't overwrite React import due to * import.
// Re-enable when we migrate to using fusion-cli to run tests.
// tape('inject services (legacy)', async t => {
//   const createContext = React.createContext;
//   try {
//     // $FlowFixMe
//     React.createContext = undefined;
//     await injectServices(t);
//   } finally {
//     // $FlowFixMe
//     React.createContext = createContext;
//   }
//   t.end();
// });

/** Copyright (c) 2018 Uber Technologies, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */
tape('.create works', t => {
  class Foo {
    foo() {}

  }

  const plugin = ReactPlugin.create('foo', {}); // $FlowFixMe

  const middleware = plugin.middleware({}, new Foo());
  const element = React.createElement('div');
  const ctx = {
    element
  }; // $FlowFixMe

  middleware(ctx, () => Promise.resolve()).then(() => {
    t.notEquals(ctx.element, element, 'wraps provider'); // $FlowFixMe

    t.equals(ctx.element.type.displayName, 'FooProvider'); // $FlowFixMe

    t.equals(ctx.element.type.childContextTypes.foo, PropTypes.any.isRequired);
    t.end();
  });
});
tape('idempotency with wrapped middleware', async t => {
  let called = 0;
  const foo = 'foo';
  const bar = 'bar';
  const baz = 'baz';
  const expectedDeps = [foo, bar];
  const expectedSelf = [bar, baz];
  const plugin = ReactPlugin.create('foo', {
    middleware: (deps, self) => async () => {
      t.equal(deps, expectedDeps.shift());
      t.equal(self, expectedSelf.shift());
      called += 1;
    }
  }); // $FlowFixMe

  const middleware = plugin.middleware(foo, bar); // $FlowFixMe

  const middleware2 = plugin.middleware(bar, baz);
  const element = React.createElement('div');
  const ctx = {
    element
  }; // $FlowFixMe

  middleware(ctx, () => Promise.resolve()); // $FlowFixMe

  middleware2(ctx, () => Promise.resolve());
  t.equals(called, 2, 'called two times');
  t.end();
});

/** Copyright (c) 2018 Uber Technologies, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */
tape('custom render function', async t => {
  let didRender = false;
  const app = new App(React.createElement('span', null, 'hello'), () => {
    didRender = true;
    return 10;
  });
  const simulator = fusionTestUtils.getSimulator(app);
  const ctx = await simulator.render('/');
  t.ok(ctx.element);
  t.equal(ctx.rendered, 10);
  t.ok(didRender);
  t.end();
});

/** Copyright (c) 2018 Uber Technologies, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */
tape('renders', t => {
  const rendered = render(React.createElement('span', null, 'hello'));
  t.ok(/<span/.test(rendered), 'has right tag');
  t.ok(/hello/.test(rendered), 'has right text');
  t.end();
});
tape('app api', async t => {
  t.equal(typeof App, 'function', 'exports a function');

  try {
    const app = new App(React.createElement('div', null, 'Hello World'));
    const simulator = fusionTestUtils.getSimulator(app);
    const ctx = await simulator.render('/');
    t.ok(ctx.rendered.includes('Hello World'));
    t.ok(typeof ctx.body === 'string' && ctx.body.includes(ctx.rendered));
  } catch (e) {
    t.ifError(e);
  } finally {
    t.end();
  }
});
tape('throw on non-element root', async t => {
  t.throws(() => {
    // $FlowFixMe
    new App(function () {
      return null;
    });
  }, 'Passing a component instead of an element throws');
  t.end();
});

/** Copyright (c) 2018 Uber Technologies, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

/* eslint-disable react/no-multi-comp */
Enzyme__default.configure({
  adapter: new Adapter()
});
tape('Preparing a sync app', t => {
  let numConstructors = 0;
  let numRenders = 0;
  let numChildRenders = 0;

  class SimpleComponent extends React.Component {
    constructor(props, context) {
      super(props, context);
      t.equal(context.__IS_PREPARE__, true, 'sets __IS_PREPARE__ to true in context');
      numConstructors++;
    }

    render() {
      numRenders++;
      return React.createElement(SimplePresentational, null);
    }

  }

  function SimplePresentational() {
    numChildRenders++;
    return React.createElement("div", null, "Hello World");
  }

  const app = React.createElement(SimpleComponent, null);
  const p = prepareTyped(app);
  t.ok(p instanceof Promise, 'prepare returns a promise');
  p.then(() => {
    t.equal(numConstructors, 1, 'constructs SimpleComponent once');
    t.equal(numRenders, 1, 'renders SimpleComponent once');
    t.equal(numChildRenders, 1, 'renders SimplePresentational once');
    t.end();
  });
});
tape('Preparing a sync app with nested children', t => {
  let numConstructors = 0;
  let numRenders = 0;
  let numChildRenders = 0;

  class SimpleComponent extends React.Component {
    constructor(props, context) {
      super(props, context);
      t.equal(context.__IS_PREPARE__, true, 'sets __IS_PREPARE__ to true in context');
      numConstructors++;
    }

    render() {
      numRenders++;
      return React.createElement("div", null, this.props.children);
    }

  }

  function SimplePresentational() {
    numChildRenders++;
    return React.createElement("div", null, "Hello World");
  }

  const app = React.createElement(SimpleComponent, null, React.createElement(SimplePresentational, null), ";");
  const p = prepareTyped(app);
  t.ok(p instanceof Promise, 'prepare returns a promise');
  p.then(() => {
    t.equal(numConstructors, 1, 'constructs SimpleComponent once');
    t.equal(numRenders, 1, 'renders SimpleComponent once');
    t.equal(numChildRenders, 1, 'renders SimplePresentational once');
    t.end();
  });
});
tape('Preparing a sync app with functional components referencing children', t => {
  let numRenders = 0;
  let numChildRenders = 0;
  let numPrepares = 0;

  function SimpleComponent(props, context) {
    t.equal(context.__IS_PREPARE__, true, 'sets __IS_PREPARE__ to true in context');
    numRenders++;
    return React.createElement("div", null, props.children);
  }

  function SimplePresentational() {
    numChildRenders++;
    return React.createElement("div", null, "Hello World");
  }

  const AsyncChild = preparedTyped(props => {
    numPrepares++;
    t.equal(props.data, 'test', 'passes props through to prepared component correctly');
    return Promise.resolve();
  })(SimplePresentational);
  const app = React.createElement(SimpleComponent, null, React.createElement(AsyncChild, {
    data: "test"
  }));
  const p = prepareTyped(app);
  t.ok(p instanceof Promise, 'prepare returns a promise');
  p.then(() => {
    t.equal(numRenders, 1, 'renders SimpleComponent once');
    t.equal(numPrepares, 1, 'runs prepare function once');
    t.equal(numChildRenders, 1, 'renders SimplePresentational once');
    t.end();
  });
});
tape('Preparing an async app', t => {
  let numConstructors = 0;
  let numRenders = 0;
  let numChildRenders = 0;
  let numPrepares = 0;

  class SimpleComponent extends React.Component {
    constructor(props, context) {
      super(props, context);
      t.equal(context.__IS_PREPARE__, true, 'sets __IS_PREPARE__ to true in context');
      numConstructors++;
    }

    render() {
      numRenders++;
      return React.createElement(SimplePresentational, null);
    }

  }

  function SimplePresentational() {
    numChildRenders++;
    return React.createElement("div", null, "Hello World");
  }

  const AsyncParent = preparedTyped(props => {
    numPrepares++;
    t.equal(props.data, 'test', 'passes props through to prepared component correctly');
    return Promise.resolve();
  })(SimpleComponent);
  const app = React.createElement(AsyncParent, {
    data: "test"
  });
  const p = prepareTyped(app);
  t.ok(p instanceof Promise, 'prepare returns a promise');
  p.then(() => {
    t.equal(numPrepares, 1, 'runs the prepare function once');
    t.equal(numConstructors, 1, 'constructs SimpleComponent once');
    t.equal(numRenders, 1, 'renders SimpleComponent once');
    t.equal(numChildRenders, 1, 'renders SimplePresentational once');
    t.end();
  });
});
tape('Preparing an async app with nested asyncs', t => {
  let numConstructors = 0;
  let numRenders = 0;
  let numChildRenders = 0;
  let numPrepares = 0;

  class SimpleComponent extends React.Component {
    constructor(props, context) {
      super(props, context);
      t.equal(context.__IS_PREPARE__, true, 'sets __IS_PREPARE__ to true in context');
      numConstructors++;
    }

    render() {
      numRenders++;
      return React.createElement("div", null, this.props.children);
    }

  }

  function SimplePresentational() {
    numChildRenders++;
    return React.createElement("div", null, "Hello World");
  }

  const AsyncParent = preparedTyped(props => {
    numPrepares++;
    t.equal(props.data, 'test', 'passes props through to prepared component correctly');
    return Promise.resolve();
  })(SimpleComponent);
  const app = React.createElement(AsyncParent, {
    data: "test"
  }, React.createElement(AsyncParent, {
    data: "test"
  }, React.createElement(SimplePresentational, null)));
  const p = prepareTyped(app);
  t.ok(p instanceof Promise, 'prepare returns a promise');
  p.then(() => {
    t.equal(numPrepares, 2, 'runs each prepare function once');
    t.equal(numConstructors, 2, 'constructs SimpleComponent once for each render');
    t.equal(numRenders, 2, 'renders SimpleComponent twice');
    t.equal(numChildRenders, 1, 'renders SimplePresentational once');
    t.end();
  });
});
tape('Preparing an app with sibling async components', t => {
  let numConstructors = 0;
  let numRenders = 0;
  let numChildRenders = 0;
  let numPrepares = 0;

  class SimpleComponent extends React.Component {
    constructor(props, context) {
      super(props, context);
      t.equal(context.__IS_PREPARE__, true, 'sets __IS_PREPARE__ to true in context');
      numConstructors++;
    }

    render() {
      numRenders++;
      return React.createElement("div", null, this.props.children);
    }

  }

  function SimplePresentational() {
    numChildRenders++;
    return React.createElement("div", null, "Hello World");
  }

  const AsyncParent = preparedTyped(props => {
    numPrepares++;
    t.equal(props.data, 'test', 'passes props through to prepared component correctly');
    return;
  })(SimpleComponent);
  const app = React.createElement("div", null, React.createElement(AsyncParent, {
    data: "test"
  }, React.createElement(SimplePresentational, null)), React.createElement(AsyncParent, {
    data: "test"
  }, React.createElement(SimplePresentational, null)));
  const p = prepareTyped(app);
  t.ok(p instanceof Promise, 'prepare returns a promise');
  p.then(() => {
    t.equal(numPrepares, 2, 'runs each prepare function once');
    t.equal(numConstructors, 2, 'constructs SimpleComponent once for each render');
    t.equal(numRenders, 2, 'renders SimpleComponent twice');
    t.equal(numChildRenders, 2, 'renders SimplePresentational once for each render');
    t.end();
  });
});
tape('Rendering a component triggers componentWillMount before render', t => {
  const orderedMethodCalls = [];
  const orderedChildMethodCalls = []; // Disable eslint for deprecated componentWillMount
  // eslint-disable-next-line react/no-deprecated

  class SimpleComponent extends React.Component {
    UNSAFE_componentWillMount() {
      orderedMethodCalls.push('componentWillMount');
    }

    render() {
      orderedMethodCalls.push('render');
      return React.createElement(SimpleChildComponent, null);
    }

  } // Disable eslint for deprecated componentWillMount
  // eslint-disable-next-line react/no-deprecated


  class SimpleChildComponent extends React.Component {
    UNSAFE_componentWillMount() {
      orderedChildMethodCalls.push('componentWillMount');
    }

    render() {
      orderedChildMethodCalls.push('render');
      return React.createElement("div", null, "Hello World");
    }

  }

  const app = React.createElement(SimpleComponent, null);
  const p = prepareTyped(app);
  t.ok(p instanceof Promise, 'prepare returns a promise');
  p.then(() => {
    t.deepEqual(orderedMethodCalls, ['componentWillMount', 'render']);
    t.deepEqual(orderedChildMethodCalls, ['componentWillMount', 'render']);
    t.end();
  });
});
tape('Preparing an async app with componentWillReceiveProps option', t => {
  let numConstructors = 0;
  let numRenders = 0;
  let numChildRenders = 0;
  let numPrepares = 0;

  class SimpleComponent extends React.Component {
    constructor(props, context) {
      super(props, context);
      t.equal(context.__IS_PREPARE__, true, 'sets __IS_PREPARE__ to true in context');
      numConstructors++;
    }

    render() {
      numRenders++;
      return React.createElement(SimplePresentational, null);
    }

  }

  function SimplePresentational() {
    numChildRenders++;
    return React.createElement("div", null, "Hello World");
  }

  const AsyncParent = preparedTyped(props => {
    numPrepares++;
    t.equal(props.data, 'test', 'passes props through to prepared component correctly');
    return Promise.resolve();
  }, {
    componentWillReceiveProps: true
  })(SimpleComponent);
  const app = React.createElement(AsyncParent, {
    data: "test"
  });
  const p = prepareTyped(app);
  t.ok(p instanceof Promise, 'prepare returns a promise');
  p.then(() => {
    t.equal(numPrepares, 1, 'runs the prepare function once');
    t.equal(numConstructors, 1, 'constructs SimpleComponent once');
    t.equal(numRenders, 1, 'renders SimpleComponent once');
    t.equal(numChildRenders, 1, 'renders SimplePresentational once'); // triggers componentDidMount

    const wrapper = Enzyme.shallow(app);
    t.equal(numPrepares, 2, 'runs prepare on componentDidMount'); // triggers componentWillReceiveProps

    wrapper.setProps({
      test: true
    });
    t.equal(numPrepares, 3, 'runs prepare on componentWillReceiveProps');
    t.end();
  });
});
tape('Preparing an async app with componentDidUpdate option', t => {
  let numConstructors = 0;
  let numRenders = 0;
  let numChildRenders = 0;
  let numPrepares = 0;

  class SimpleComponent extends React.Component {
    constructor(props, context) {
      super(props, context);
      t.equal(context.__IS_PREPARE__, true, 'sets __IS_PREPARE__ to true in context');
      numConstructors++;
    }

    render() {
      numRenders++;
      return React.createElement(SimplePresentational, null);
    }

  }

  function SimplePresentational() {
    numChildRenders++;
    return React.createElement("div", null, "Hello World");
  }

  const AsyncParent = preparedTyped(props => {
    numPrepares++;
    t.equal(props.data, 'test', 'passes props through to prepared component correctly');
    return Promise.resolve();
  }, {
    componentDidUpdate: true
  })(SimpleComponent);
  const app = React.createElement(AsyncParent, {
    data: "test"
  });
  const p = prepareTyped(app);
  t.ok(p instanceof Promise, 'prepare returns a promise');
  p.then(() => {
    t.equal(numPrepares, 1, 'runs the prepare function once');
    t.equal(numConstructors, 1, 'constructs SimpleComponent once');
    t.equal(numRenders, 1, 'renders SimpleComponent once');
    t.equal(numChildRenders, 1, 'renders SimplePresentational once'); // triggers componentDidMount

    const wrapper = Enzyme.shallow(app);
    t.equal(numPrepares, 2, 'runs prepare on componentDidMount'); // triggers componentDidUpdate

    wrapper.setProps({
      test: true
    });
    t.equal(numPrepares, 3, 'runs prepare on componentDidUpdate');
    t.end();
  });
});
tape('Preparing React.forwardRef', t => {
  // $FlowFixMe
  const Forwarded = React.forwardRef(function Inner(props, ref) {
    return React.createElement("div", {
      ref: ref
    }, props.children);
  });
  const app = React.createElement(Forwarded, null, React.createElement("span", null, "1"), React.createElement("span", null, "2"));
  const p = prepareTyped(app);
  t.ok(p instanceof Promise, 'prepare returns a promise');
  p.then(() => {
    const wrapper = Enzyme.shallow(React.createElement("div", null, app));
    t.equal(wrapper.find('span').length, 2, 'has two children');
    t.end();
  });
});
tape('Preparing React.forwardRef with async children', t => {
  // $FlowFixMe
  const Forwarded = React.forwardRef(function Inner(props, ref) {
    return React.createElement("div", {
      ref: ref
    }, props.children);
  });
  let numChildRenders = 0;
  let numPrepares = 0;

  function SimplePresentational() {
    numChildRenders++;
    return React.createElement("div", null, "Hello World");
  }

  const AsyncChild = preparedTyped(props => {
    numPrepares++;
    t.equal(props.data, 'test', 'passes props through to prepared component correctly');
    return Promise.resolve();
  })(SimplePresentational);
  const app = React.createElement(Forwarded, null, React.createElement(AsyncChild, {
    data: "test"
  }), React.createElement(AsyncChild, {
    data: "test"
  }));
  const p = prepareTyped(app);
  t.ok(p instanceof Promise, 'prepare returns a promise');
  p.then(() => {
    t.equal(numPrepares, 2, 'runs prepare function twice');
    t.equal(numChildRenders, 2, 'renders SimplePresentational twice');
    t.end();
  });
});
tape('Preparing a Fragment', t => {
  const app = React.createElement(React.Fragment, null, React.createElement("span", null, "1"), React.createElement("span", null, "2"));
  const p = prepareTyped(app);
  t.ok(p instanceof Promise, 'prepare returns a promise');
  p.then(() => {
    const wrapper = Enzyme.shallow(React.createElement("div", null, app));
    t.equal(wrapper.find('span').length, 2, 'has two children');
    t.end();
  });
});
tape('Preparing a fragment with async children', t => {
  let numChildRenders = 0;
  let numPrepares = 0;

  function SimplePresentational() {
    numChildRenders++;
    return React.createElement("div", null, "Hello World");
  }

  const AsyncChild = preparedTyped(props => {
    numPrepares++;
    t.equal(props.data, 'test', 'passes props through to prepared component correctly');
    return Promise.resolve();
  })(SimplePresentational);
  const app = // $FlowFixMe
  React.createElement(React.Fragment, null, React.createElement(AsyncChild, {
    data: "test"
  }), React.createElement(AsyncChild, {
    data: "test"
  }));
  const p = prepareTyped(app);
  t.ok(p instanceof Promise, 'prepare returns a promise');
  p.then(() => {
    t.equal(numPrepares, 2, 'runs prepare function twice');
    t.equal(numChildRenders, 2, 'renders SimplePresentational twice');
    t.end();
  });
});
tape('Preparing React.createContext()', t => {
  // $FlowFixMe
  const {
    Provider,
    Consumer
  } = React.createContext('light');
  const app = React.createElement(Provider, {
    value: "light"
  }, React.createElement("span", null, "1"), React.createElement(Consumer, null, () => React.createElement("span", null, "2")));
  const p = prepareTyped(app);
  t.ok(p instanceof Promise, 'prepare returns a promise');
  p.then(() => {
    const wrapper = Enzyme.shallow(React.createElement("div", null, app));
    t.equal(wrapper.find('span').length, 1, 'one span is rendered');
    t.end();
  });
});
tape('Preparing React.createContext() with async children', t => {
  // $FlowFixMe
  const {
    Provider,
    Consumer
  } = React.createContext('light');
  let numChildRenders = 0;
  let numPrepares = 0;
  let numRenderPropsRenders = 0;

  function SimplePresentational() {
    numChildRenders++;
    return React.createElement(Consumer, null, theme => {
      numRenderPropsRenders++;
      t.equal(theme, 'dark', 'passes the context value correctly');
      return React.createElement("div", null, theme);
    });
  }

  const AsyncChild = preparedTyped(props => {
    numPrepares++;
    t.equal(props.data, 'test', 'passes props through to prepared component correctly');
    return Promise.resolve();
  })(SimplePresentational);
  const app = React.createElement(Provider, {
    value: "dark"
  }, React.createElement(AsyncChild, {
    data: "test"
  }), React.createElement(AsyncChild, {
    data: "test"
  }));
  const p = prepareTyped(app);
  t.ok(p instanceof Promise, 'prepare returns a promise');
  p.then(() => {
    t.equal(numPrepares, 2, 'runs prepare function twice');
    t.equal(numRenderPropsRenders, 2, 'prepares consumer render props');
    t.equal(numChildRenders, 2, 'renders SimplePresentational twice');
    t.equal(Enzyme.shallow(React.createElement("div", null, app)).html(), '<div><div>dark</div><div>dark</div></div>', 'passes values via context');
    t.end();
  });
});
tape('Preparing React.createContext() with deep async children', t => {
  // $FlowFixMe
  const {
    Provider,
    Consumer
  } = React.createContext('light');
  let numChildRenders = 0;
  let numPrepares = 0;
  let numRenderPropsRenders = 0;

  function SimplePresentational() {
    numChildRenders++;
    return React.createElement("div", null, "Hello World");
  }

  const AsyncChild = preparedTyped(props => {
    numPrepares++;
    t.equal(props.data, 'test', 'passes props through to prepared component correctly');
    return Promise.resolve();
  })(SimplePresentational);

  const ConsumerComponent = () => {
    return React.createElement(Consumer, null, theme => {
      numRenderPropsRenders++;
      t.equal(theme, 'dark');
      return React.createElement(AsyncChild, {
        data: "test"
      });
    });
  };

  const app = React.createElement(Provider, {
    value: "dark"
  }, React.createElement(ConsumerComponent, null));
  const p = prepareTyped(app);
  t.ok(p instanceof Promise, 'prepare returns a promise');
  p.then(() => {
    t.equal(numPrepares, 1, 'runs prepare function');
    t.equal(numChildRenders, 1, 'prepares SimplePresentational');
    t.equal(numRenderPropsRenders, 1, 'runs render prop function');
    t.end();
  });
});
tape('Preparing React.createContext() using the default provider value', t => {
  // $FlowFixMe
  const {
    Consumer
  } = React.createContext('light');
  let numChildRenders = 0;
  let numPrepares = 0;
  let numRenderPropsRenders = 0;

  function SimplePresentational() {
    numChildRenders++;
    return React.createElement("div", null, "Hello World");
  }

  const AsyncChild = preparedTyped(props => {
    numPrepares++;
    t.equal(props.data, 'test', 'passes props through to prepared component correctly');
    return Promise.resolve();
  })(SimplePresentational);

  const ConsumerComponent = () => {
    return React.createElement(Consumer, null, theme => {
      numRenderPropsRenders++;
      t.equal(theme, 'light');
      return React.createElement(AsyncChild, {
        data: "test"
      });
    });
  };

  const app = React.createElement(ConsumerComponent, null);
  const p = prepareTyped(app);
  t.ok(p instanceof Promise, 'prepare returns a promise');
  p.then(() => {
    t.equal(numPrepares, 1, 'runs prepare function');
    t.equal(numChildRenders, 1, 'prepares SimplePresentational');
    t.equal(numRenderPropsRenders, 1, 'runs render prop function');
    t.end();
  });
});
tape('Preparing a component using getDerivedStateFromProps', t => {
  let numConstructors = 0;
  let numRenders = 0;
  let numChildRenders = 0;
  let numPrepares = 0;
  let numDerivedStateFromProps = 0;
  let retainedState = false;

  class SimpleComponent extends React.Component {
    constructor(props, context) {
      super(props, context);
      t.equal(context.__IS_PREPARE__, true, 'sets __IS_PREPARE__ to true in context');
      numConstructors++;
      this.state = {
        firstRender: true,
        originalState: 'should remain'
      };
    }

    static getDerivedStateFromProps(props, {
      firstRender
    }) {
      numDerivedStateFromProps++;
      return {
        firstRender: false,
        someNewKey: [1, 2, 3]
      };
    } // eslint-disable-next-line react/no-deprecated


    componentWillMount() {
      throw new Error('Should not be called when gDSFP is defined');
    }

    render() {
      numRenders++;
      retainedState = this.state.originalState === 'should remain';
      return React.createElement("div", null, this.state.someNewKey.map((item, key) => React.createElement("div", {
        key: key
      })), React.createElement(SimplePresentational, null));
    }

  }

  function SimplePresentational() {
    numChildRenders++;
    return React.createElement("div", null, "Hello World");
  }

  const AsyncParent = preparedTyped(props => {
    numPrepares++;
    t.equal(props.data, 'test', 'passes props through to prepared component correctly');
    return Promise.resolve();
  }, {
    componentDidMount: false,
    componentDidUpdate: false
  })(SimpleComponent);
  const app = React.createElement(AsyncParent, {
    data: "test"
  });
  const p = prepareTyped(app);
  t.ok(p instanceof Promise, 'prepare returns a promise');
  p.then(() => {
    t.equal(retainedState, true, 'gDSFP does not overwrite state');
    t.equal(numPrepares, 1, 'runs the prepare function once');
    t.equal(numConstructors, 1, 'constructs SimpleComponent once');
    t.equal(numRenders, 1, 'renders SimpleComponent once');
    t.equal(numChildRenders, 1, 'renders SimplePresentational once');
    const wrapper = Enzyme.shallow(app); // triggers getDerivedStateFromProps
    // Enzyme does not yet support calling getDerivedStateFromProps after setProps

    wrapper.setProps({
      test: true
    });
    t.equal(numDerivedStateFromProps, 1, 'runs prepare on getDerivedStateFromProps');
    t.end();
  });
});

/** Copyright (c) 2018 Uber Technologies, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

/* eslint-disable react/no-multi-comp */
tape('Preparing a sync app passing through context', t => {
  let numConstructors = 0;
  let numRenders = 0;
  let numChildRenders = 0;

  class SimpleComponent extends React.Component {
    constructor(props, context) {
      super(props, context);
      t.equal(context.__IS_PREPARE__, true, 'sets __IS_PREPARE__ to true in context');
      numConstructors++;
    }

    getChildContext() {
      return {
        test: 'data'
      };
    }

    render() {
      numRenders++;
      return React.createElement(SimplePresentational, null);
    }

  }

  function SimplePresentational(props, context) {
    t.equal(context.test, 'data', 'handles child context correctly');
    numChildRenders++;
    return React.createElement("div", null, "Hello World");
  }

  const app = React.createElement(SimpleComponent, null);
  const p = prepareTyped(app);
  t.ok(p instanceof Promise, 'prepare returns a promise');
  p.then(() => {
    t.equal(numConstructors, 1, 'constructs SimpleComponent once');
    t.equal(numRenders, 1, 'renders SimpleComponent once');
    t.equal(numChildRenders, 1, 'renders SimplePresentational once');
    t.end();
  });
});

/** Copyright (c) 2018 Uber Technologies, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

/* eslint-disable react/no-multi-comp */
tape('Preparing an app with an async component', async t => {
  function DeferredComponent() {
    return React.createElement("div", null, "Loaded");
  }

  function LoadingComponent() {
    return React.createElement("div", null, "Loading");
  }

  function ErrorComponent() {
    return React.createElement("div", null, "Failed");
  }

  const ToTest = splitTyped({
    defer: false,
    load: () => Promise.resolve({
      default: DeferredComponent
    }),
    LoadingComponent,
    ErrorComponent
  });
  const app = React.createElement(PrepareProvider, null, React.createElement(ToTest, null));
  t.ok(/Loading/.test(server.renderToString(app)), 'starts off loading');
  await prepareTyped(app);
  t.ok(/Loaded/.test(server.renderToString(app)), 'ends loaded');

  try {
    await prepareTyped(app);
  } catch (e) {
    t.ifError(e, 'should not error');
  }

  t.end();
});
tape('Preparing an app with an errored async component', async t => {
  function LoadingComponent() {
    return React.createElement("div", null, "Loading");
  }

  function ErrorComponent() {
    return React.createElement("div", null, "Failed");
  }

  const ToTest = splitTyped({
    defer: false,
    load: () => Promise.reject(new Error('failed')),
    LoadingComponent,
    ErrorComponent
  });
  const app = React.createElement(PrepareProvider, null, React.createElement(ToTest, null));
  t.ok(/Loading/.test(server.renderToString(app)), 'starts off loading');
  await prepareTyped(app);
  t.ok(/Failed/.test(server.renderToString(app)), 'ends failed');
  t.end();
});

/** Copyright (c) 2018 Uber Technologies, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */
tape('Handling context', async t => {
  class Child extends React.Component {
    constructor(props) {
      super(props);
    }

    render() {
      return React.createElement("h1", null, this.context.field ? 'Yes' : 'No');
    }

  }

  Child.contextTypes = {
    field: () => {}
  };

  class Parent extends React.Component {
    getChildContext() {
      return {
        field: true
      };
    }

    render() {
      return React.createElement(Child, null);
    }

  }

  Parent.childContextTypes = {
    field: () => {}
  };

  const ToTest = () => {
    return React.createElement(Parent, null, React.createElement(Child, null));
  };

  const app = React.createElement(PrepareProvider, null, React.createElement(ToTest, null));
  t.ok(/Yes/.test(server.renderToString(app)));
  await prepareTyped(app);
  t.ok(/Yes/.test(server.renderToString(app)));
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
process.on('unhandledRejection', e => {
  throw e;
});

/** Copyright (c) 2018 Uber Technologies, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */
tape('isReactCompositeComponent', async t => {
  class Yes {
    render() {}

  }

  class No {}

  const fn = function () {};

  const arrow = () => {};

  t.ok(isReactCompositeComponent(Yes));
  t.ok(!isReactCompositeComponent(No));
  t.ok(!isReactCompositeComponent(fn));
  t.ok(!isReactCompositeComponent(arrow));
  t.ok(!isReactCompositeComponent(''));
  t.ok(!isReactCompositeComponent(null));
  t.ok(!isReactCompositeComponent(undefined));
  t.end();
});

/** Copyright (c) 2018 Uber Technologies, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */
tape('isReactFunctionalComponent', async t => {
  class Comp {
    render() {}

  }

  const fn = function () {};

  const arrow = () => {};

  t.ok(!isReactFunctionalComponent(Comp));
  t.ok(isReactFunctionalComponent(fn));
  t.ok(isReactFunctionalComponent(arrow));
  t.ok(!isReactFunctionalComponent(''));
  t.ok(!isReactFunctionalComponent(null));
  t.ok(!isReactFunctionalComponent(undefined));
  t.end();
});
//# sourceMappingURL=node.js.map
