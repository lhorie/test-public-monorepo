'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);
var PropTypes = _interopDefault(require('prop-types'));
var reactRouterDom = require('react-router-dom');
var history = require('history');
var test = _interopDefault(require('tape-cup'));
var server = require('react-dom/server');
var fusionPluginUniversalEvents = require('fusion-plugin-universal-events');
var fusionCore = require('fusion-core');
var App = _interopDefault(require('fusion-react'));
var fusionTestUtils = require('fusion-test-utils');

var cov_18dmen37kq = function () {
  var path = "/Users/lhorie/Documents/test-private-monorepo/public/fusion-plugin-react-router/src/modules/Status.js",
      hash = "66634fe00b9c55057059bf2b7a5cdb16d55d226e",
      Function = function () {}.constructor,
      global = new Function('return this')(),
      gcv = "__coverage__",
      coverageData = {
    path: "/Users/lhorie/Documents/test-private-monorepo/public/fusion-plugin-react-router/src/modules/Status.js",
    statementMap: {
      "0": {
        start: {
          line: 25,
          column: 4
        },
        end: {
          line: 25,
          column: 26
        }
      },
      "1": {
        start: {
          line: 28,
          column: 8
        },
        end: {
          line: 28,
          column: 15
        }
      },
      "2": {
        start: {
          line: 29,
          column: 4
        },
        end: {
          line: 31,
          column: 5
        }
      },
      "3": {
        start: {
          line: 30,
          column: 6
        },
        end: {
          line: 30,
          column: 59
        }
      },
      "4": {
        start: {
          line: 35,
          column: 21
        },
        end: {
          line: 35,
          column: 54
        }
      },
      "5": {
        start: {
          line: 36,
          column: 4
        },
        end: {
          line: 36,
          column: 60
        }
      },
      "6": {
        start: {
          line: 40,
          column: 0
        },
        end: {
          line: 44,
          column: 2
        }
      },
      "7": {
        start: {
          line: 46,
          column: 24
        },
        end: {
          line: 48,
          column: 1
        }
      },
      "8": {
        start: {
          line: 47,
          column: 2
        },
        end: {
          line: 47,
          column: 46
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
            column: 66
          },
          end: {
            line: 32,
            column: 3
          }
        },
        line: 24
      },
      "1": {
        name: "(anonymous_1)",
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
            column: 11
          },
          end: {
            line: 37,
            column: 3
          }
        },
        line: 34
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 46,
            column: 24
          },
          end: {
            line: 46,
            column: 25
          }
        },
        loc: {
          start: {
            line: 47,
            column: 2
          },
          end: {
            line: 47,
            column: 46
          }
        },
        line: 47
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
            line: 29,
            column: 8
          },
          end: {
            line: 29,
            column: 46
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 29,
            column: 8
          },
          end: {
            line: 29,
            column: 21
          }
        }, {
          start: {
            line: 29,
            column: 25
          },
          end: {
            line: 29,
            column: 46
          }
        }],
        line: 29
      },
      "2": {
        loc: {
          start: {
            line: 35,
            column: 21
          },
          end: {
            line: 35,
            column: 54
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 35,
            column: 21
          },
          end: {
            line: 35,
            column: 31
          }
        }, {
          start: {
            line: 35,
            column: 35
          },
          end: {
            line: 35,
            column: 54
          }
        }],
        line: 35
      },
      "3": {
        loc: {
          start: {
            line: 36,
            column: 11
          },
          end: {
            line: 36,
            column: 59
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 36,
            column: 37
          },
          end: {
            line: 36,
            column: 48
          }
        }, {
          start: {
            line: 36,
            column: 51
          },
          end: {
            line: 36,
            column: 59
          }
        }],
        line: 36
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
class Status extends (React.Component) {
  constructor(props, context) {
    cov_18dmen37kq.f[0]++;
    cov_18dmen37kq.s[0]++;
    super(props, context);
    const {
      router: {
        staticContext
      }
    } = (cov_18dmen37kq.s[1]++, context);
    cov_18dmen37kq.s[2]++;

    if ((cov_18dmen37kq.b[1][0]++, staticContext) && (cov_18dmen37kq.b[1][1]++, staticContext.setCode)) {
      cov_18dmen37kq.b[0][0]++;
      cov_18dmen37kq.s[3]++;
      staticContext.setCode(parseInt(this.props.code, 10));
    } else {
      cov_18dmen37kq.b[0][1]++;
    }
  }

  render() {
    cov_18dmen37kq.f[1]++;
    const children = (cov_18dmen37kq.s[4]++, (cov_18dmen37kq.b[2][0]++, this.props) && (cov_18dmen37kq.b[2][1]++, this.props.children));
    cov_18dmen37kq.s[5]++;
    return Array.isArray(children) ? (cov_18dmen37kq.b[3][0]++, children[0]) : (cov_18dmen37kq.b[3][1]++, children);
  }

}
cov_18dmen37kq.s[6]++;
Status.contextTypes = {
  router: PropTypes.shape({
    staticContext: PropTypes.object
  })
};
cov_18dmen37kq.s[7]++;
const NotFound = props => {
  cov_18dmen37kq.f[2]++;
  cov_18dmen37kq.s[8]++;
  return React.createElement(Status, {
    code: 404
  }, props.children);
};

var cov_n6spnpfvt = function () {
  var path = "/Users/lhorie/Documents/test-private-monorepo/public/fusion-plugin-react-router/src/modules/Redirect.js",
      hash = "0972acee9ac5971808552fcf0bf538bf773e6987",
      Function = function () {}.constructor,
      global = new Function('return this')(),
      gcv = "__coverage__",
      coverageData = {
    path: "/Users/lhorie/Documents/test-private-monorepo/public/fusion-plugin-react-router/src/modules/Redirect.js",
    statementMap: {
      "0": {
        start: {
          line: 39,
          column: 4
        },
        end: {
          line: 39,
          column: 26
        }
      },
      "1": {
        start: {
          line: 40,
          column: 4
        },
        end: {
          line: 40,
          column: 47
        }
      },
      "2": {
        start: {
          line: 40,
          column: 32
        },
        end: {
          line: 40,
          column: 47
        }
      },
      "3": {
        start: {
          line: 49,
          column: 4
        },
        end: {
          line: 49,
          column: 41
        }
      },
      "4": {
        start: {
          line: 49,
          column: 26
        },
        end: {
          line: 49,
          column: 41
        }
      },
      "5": {
        start: {
          line: 53,
          column: 4
        },
        end: {
          line: 53,
          column: 73
        }
      },
      "6": {
        start: {
          line: 57,
          column: 37
        },
        end: {
          line: 57,
          column: 56
        }
      },
      "7": {
        start: {
          line: 58,
          column: 29
        },
        end: {
          line: 58,
          column: 39
        }
      },
      "8": {
        start: {
          line: 60,
          column: 4
        },
        end: {
          line: 64,
          column: 5
        }
      },
      "9": {
        start: {
          line: 61,
          column: 6
        },
        end: {
          line: 61,
          column: 48
        }
      },
      "10": {
        start: {
          line: 62,
          column: 6
        },
        end: {
          line: 62,
          column: 33
        }
      },
      "11": {
        start: {
          line: 63,
          column: 6
        },
        end: {
          line: 63,
          column: 13
        }
      },
      "12": {
        start: {
          line: 66,
          column: 4
        },
        end: {
          line: 70,
          column: 5
        }
      },
      "13": {
        start: {
          line: 67,
          column: 6
        },
        end: {
          line: 67,
          column: 23
        }
      },
      "14": {
        start: {
          line: 69,
          column: 6
        },
        end: {
          line: 69,
          column: 26
        }
      },
      "15": {
        start: {
          line: 74,
          column: 4
        },
        end: {
          line: 74,
          column: 16
        }
      },
      "16": {
        start: {
          line: 78,
          column: 0
        },
        end: {
          line: 86,
          column: 2
        }
      },
      "17": {
        start: {
          line: 89,
          column: 0
        },
        end: {
          line: 89,
          column: 25
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 38,
            column: 2
          },
          end: {
            line: 38,
            column: 3
          }
        },
        loc: {
          start: {
            line: 38,
            column: 54
          },
          end: {
            line: 41,
            column: 3
          }
        },
        line: 38
      },
      "1": {
        name: "(anonymous_1)",
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
            column: 22
          },
          end: {
            line: 50,
            column: 3
          }
        },
        line: 48
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 52,
            column: 2
          },
          end: {
            line: 52,
            column: 3
          }
        },
        loc: {
          start: {
            line: 52,
            column: 57
          },
          end: {
            line: 54,
            column: 3
          }
        },
        line: 52
      },
      "3": {
        name: "(anonymous_3)",
        decl: {
          start: {
            line: 56,
            column: 2
          },
          end: {
            line: 56,
            column: 3
          }
        },
        loc: {
          start: {
            line: 56,
            column: 12
          },
          end: {
            line: 71,
            column: 3
          }
        },
        line: 56
      },
      "4": {
        name: "(anonymous_4)",
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
            column: 11
          },
          end: {
            line: 75,
            column: 3
          }
        },
        line: 73
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 40,
            column: 4
          },
          end: {
            line: 40,
            column: 47
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 40,
            column: 4
          },
          end: {
            line: 40,
            column: 47
          }
        }, {
          start: {
            line: 40,
            column: 4
          },
          end: {
            line: 40,
            column: 47
          }
        }],
        line: 40
      },
      "1": {
        loc: {
          start: {
            line: 49,
            column: 4
          },
          end: {
            line: 49,
            column: 41
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 49,
            column: 4
          },
          end: {
            line: 49,
            column: 41
          }
        }, {
          start: {
            line: 49,
            column: 4
          },
          end: {
            line: 49,
            column: 41
          }
        }],
        line: 49
      },
      "2": {
        loc: {
          start: {
            line: 52,
            column: 11
          },
          end: {
            line: 52,
            column: 46
          }
        },
        type: "default-arg",
        locations: [{
          start: {
            line: 52,
            column: 34
          },
          end: {
            line: 52,
            column: 46
          }
        }],
        line: 52
      },
      "3": {
        loc: {
          start: {
            line: 53,
            column: 14
          },
          end: {
            line: 53,
            column: 71
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
            line: 53,
            column: 25
          },
          end: {
            line: 53,
            column: 39
          }
        }, {
          start: {
            line: 53,
            column: 43
          },
          end: {
            line: 53,
            column: 71
          }
        }],
        line: 53
      },
      "4": {
        loc: {
          start: {
            line: 60,
            column: 4
          },
          end: {
            line: 64,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 60,
            column: 4
          },
          end: {
            line: 64,
            column: 5
          }
        }, {
          start: {
            line: 60,
            column: 4
          },
          end: {
            line: 64,
            column: 5
          }
        }],
        line: 60
      },
      "5": {
        loc: {
          start: {
            line: 60,
            column: 8
          },
          end: {
            line: 60,
            column: 33
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 60,
            column: 8
          },
          end: {
            line: 60,
            column: 16
          }
        }, {
          start: {
            line: 60,
            column: 20
          },
          end: {
            line: 60,
            column: 33
          }
        }],
        line: 60
      },
      "6": {
        loc: {
          start: {
            line: 66,
            column: 4
          },
          end: {
            line: 70,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 66,
            column: 4
          },
          end: {
            line: 70,
            column: 5
          }
        }, {
          start: {
            line: 66,
            column: 4
          },
          end: {
            line: 70,
            column: 5
          }
        }],
        line: 66
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
      "17": 0
    },
    f: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0
    },
    b: {
      "0": [0, 0],
      "1": [0, 0],
      "2": [0],
      "3": [0, 0, 0],
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
class Redirect extends (React.Component) {
  constructor(props, context) {
    cov_n6spnpfvt.f[0]++;
    cov_n6spnpfvt.s[0]++;
    super(props, context);
    cov_n6spnpfvt.s[1]++;

    if (this.isStatic(context)) {
      cov_n6spnpfvt.b[0][0]++;
      cov_n6spnpfvt.s[2]++;
      this.perform();
    } else {
      cov_n6spnpfvt.b[0][1]++;
    }
  }

  componentDidMount() {
    cov_n6spnpfvt.f[1]++;
    cov_n6spnpfvt.s[3]++;

    if (!this.isStatic()) {
      cov_n6spnpfvt.b[1][0]++;
      cov_n6spnpfvt.s[4]++;
      this.perform();
    } else {
      cov_n6spnpfvt.b[1][1]++;
    }
  }

  isStatic(context = (cov_n6spnpfvt.b[2][0]++, this.context)) {
    cov_n6spnpfvt.f[2]++;
    cov_n6spnpfvt.s[5]++;
    return !!((cov_n6spnpfvt.b[3][0]++, context) && (cov_n6spnpfvt.b[3][1]++, context.router) && (cov_n6spnpfvt.b[3][2]++, context.router.staticContext));
  }

  perform() {
    cov_n6spnpfvt.f[3]++;
    const {
      history: history$$1,
      staticContext
    } = (cov_n6spnpfvt.s[6]++, this.context.router);
    const {
      push,
      to,
      code
    } = (cov_n6spnpfvt.s[7]++, this.props);
    cov_n6spnpfvt.s[8]++;

    if ((cov_n6spnpfvt.b[5][0]++, true) && (cov_n6spnpfvt.b[5][1]++, staticContext)) {
      cov_n6spnpfvt.b[4][0]++;
      cov_n6spnpfvt.s[9]++;
      staticContext.setCode(parseInt(code, 10));
      cov_n6spnpfvt.s[10]++;
      staticContext.redirect(to);
      cov_n6spnpfvt.s[11]++;
      return;
    } else {
      cov_n6spnpfvt.b[4][1]++;
    }

    cov_n6spnpfvt.s[12]++;

    if (push) {
      cov_n6spnpfvt.b[6][0]++;
      cov_n6spnpfvt.s[13]++;
      history$$1.push(to);
    } else {
      cov_n6spnpfvt.b[6][1]++;
      cov_n6spnpfvt.s[14]++;
      history$$1.replace(to);
    }
  }

  render() {
    cov_n6spnpfvt.f[4]++;
    cov_n6spnpfvt.s[15]++;
    return null;
  }

}
Redirect.defaultProps = {
  push: false,
  code: 307
};
cov_n6spnpfvt.s[16]++;
Redirect.contextTypes = {
  router: PropTypes.shape({
    history: PropTypes.shape({
      push: PropTypes.func.isRequired,
      replace: PropTypes.func.isRequired
    }).isRequired,
    staticContext: PropTypes.object
  }).isRequired
}; // Sanity type checking

cov_n6spnpfvt.s[17]++;

var cov_1ehhiug0u6 = function () {
  var path = "/Users/lhorie/Documents/test-private-monorepo/public/fusion-plugin-react-router/src/modules/ServerRouter.js",
      hash = "7adcd74f0488e378cfab488f51b4014e2f0f506c",
      Function = function () {}.constructor,
      global = new Function('return this')(),
      gcv = "__coverage__",
      coverageData = {
    path: "/Users/lhorie/Documents/test-private-monorepo/public/fusion-plugin-react-router/src/modules/ServerRouter.js",
    statementMap: {
      "0": {
        start: {
          line: 15,
          column: 32
        },
        end: {
          line: 15,
          column: 50
        }
      },
      "1": {
        start: {
          line: 41,
          column: 4
        },
        end: {
          line: 47,
          column: 6
        }
      },
      "2": {
        start: {
          line: 46,
          column: 8
        },
        end: {
          line: 46,
          column: 59
        }
      },
      "3": {
        start: {
          line: 51,
          column: 52
        },
        end: {
          line: 51,
          column: 62
        }
      },
      "4": {
        start: {
          line: 52,
          column: 4
        },
        end: {
          line: 52,
          column: 73
        }
      },
      "5": {
        start: {
          line: 52,
          column: 19
        },
        end: {
          line: 52,
          column: 73
        }
      },
      "6": {
        start: {
          line: 53,
          column: 4
        },
        end: {
          line: 57,
          column: 6
        }
      },
      "7": {
        start: {
          line: 61,
          column: 0
        },
        end: {
          line: 64,
          column: 2
        }
      },
      "8": {
        start: {
          line: 66,
          column: 58
        },
        end: {
          line: 66,
          column: 70
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 37,
            column: 13
          },
          end: {
            line: 37,
            column: 14
          }
        },
        loc: {
          start: {
            line: 37,
            column: 19
          },
          end: {
            line: 37,
            column: 21
          }
        },
        line: 37
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 40,
            column: 2
          },
          end: {
            line: 40,
            column: 3
          }
        },
        loc: {
          start: {
            line: 40,
            column: 20
          },
          end: {
            line: 48,
            column: 3
          }
        },
        line: 40
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 45,
            column: 15
          },
          end: {
            line: 45,
            column: 16
          }
        },
        loc: {
          start: {
            line: 46,
            column: 8
          },
          end: {
            line: 46,
            column: 59
          }
        },
        line: 46
      },
      "3": {
        name: "(anonymous_3)",
        decl: {
          start: {
            line: 50,
            column: 2
          },
          end: {
            line: 50,
            column: 3
          }
        },
        loc: {
          start: {
            line: 50,
            column: 11
          },
          end: {
            line: 58,
            column: 3
          }
        },
        line: 50
      },
      "4": {
        name: "(anonymous_4)",
        decl: {
          start: {
            line: 62,
            column: 10
          },
          end: {
            line: 62,
            column: 11
          }
        },
        loc: {
          start: {
            line: 62,
            column: 16
          },
          end: {
            line: 62,
            column: 18
          }
        },
        line: 62
      },
      "5": {
        name: "(anonymous_5)",
        decl: {
          start: {
            line: 63,
            column: 11
          },
          end: {
            line: 63,
            column: 12
          }
        },
        loc: {
          start: {
            line: 63,
            column: 17
          },
          end: {
            line: 63,
            column: 19
          }
        },
        line: 63
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 43,
            column: 23
          },
          end: {
            line: 43,
            column: 47
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 43,
            column: 23
          },
          end: {
            line: 43,
            column: 41
          }
        }, {
          start: {
            line: 43,
            column: 45
          },
          end: {
            line: 43,
            column: 47
          }
        }],
        line: 43
      },
      "1": {
        loc: {
          start: {
            line: 46,
            column: 8
          },
          end: {
            line: 46,
            column: 59
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 46,
            column: 8
          },
          end: {
            line: 46,
            column: 26
          }
        }, {
          start: {
            line: 46,
            column: 30
          },
          end: {
            line: 46,
            column: 59
          }
        }],
        line: 46
      },
      "2": {
        loc: {
          start: {
            line: 52,
            column: 4
          },
          end: {
            line: 52,
            column: 73
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 52,
            column: 4
          },
          end: {
            line: 52,
            column: 73
          }
        }, {
          start: {
            line: 52,
            column: 4
          },
          end: {
            line: 52,
            column: 73
          }
        }],
        line: 52
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
      "3": 0,
      "4": 0,
      "5": 0
    },
    b: {
      "0": [0, 0],
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
const BaseRouter = (cov_1ehhiug0u6.s[0]++, reactRouterDom.Router);

/**
 * The public top-level API for a "static" <Router>, so-called because it
 * can't actually change the current location. Instead, it just records
 * location changes in a context object. Useful mainly in testing and
 * server-rendering scenarios.
 */
class ServerRouter extends (React.Component) {
  getChildContext() {
    cov_1ehhiug0u6.f[1]++;
    cov_1ehhiug0u6.s[1]++;
    return {
      router: {
        staticContext: (cov_1ehhiug0u6.b[0][0]++, this.props.context) || (cov_1ehhiug0u6.b[0][1]++, {})
      },
      onRoute: routeData => {
        cov_1ehhiug0u6.f[2]++;
        cov_1ehhiug0u6.s[2]++;
        return (cov_1ehhiug0u6.b[1][0]++, this.props.onRoute) && (cov_1ehhiug0u6.b[1][1]++, this.props.onRoute(routeData));
      }
    };
  }

  render() {
    cov_1ehhiug0u6.f[3]++;
    const {
      Provider,
      history: history$$1,
      basename,
      children
    } = (cov_1ehhiug0u6.s[3]++, this.props);
    cov_1ehhiug0u6.s[4]++;

    if (!Provider) {
      cov_1ehhiug0u6.b[2][0]++;
      cov_1ehhiug0u6.s[5]++;
      throw new Error('Missing Provider for Server Router');
    } else {
      cov_1ehhiug0u6.b[2][1]++;
    }

    cov_1ehhiug0u6.s[6]++;
    return React.createElement(Provider, {
      basename: basename,
      history: history$$1
    }, children);
  }

}

ServerRouter.defaultProps = {
  basename: '',
  context: {},
  Provider: BaseRouter,
  onRoute: () => {
    cov_1ehhiug0u6.f[0]++;
  }
};
cov_1ehhiug0u6.s[7]++;
ServerRouter.childContextTypes = {
  router: () => {
    cov_1ehhiug0u6.f[4]++;
  },
  onRoute: () => {
    cov_1ehhiug0u6.f[5]++;
  }
};
const ServerRouterTyped = (cov_1ehhiug0u6.s[8]++, ServerRouter);

var cov_1036lfu5q = function () {
  var path = "/Users/lhorie/Documents/test-private-monorepo/public/fusion-plugin-react-router/src/modules/Route.js",
      hash = "3ddaf72155cb57a4823af5d66c12ed38ecba9778",
      Function = function () {}.constructor,
      global = new Function('return this')(),
      gcv = "__coverage__",
      coverageData = {
    path: "/Users/lhorie/Documents/test-private-monorepo/public/fusion-plugin-react-router/src/modules/Route.js",
    statementMap: {
      "0": {
        start: {
          line: 15,
          column: 36
        },
        end: {
          line: 15,
          column: 59
        }
      },
      "1": {
        start: {
          line: 17,
          column: 24
        },
        end: {
          line: 18,
          column: 38
        }
      },
      "2": {
        start: {
          line: 18,
          column: 2
        },
        end: {
          line: 18,
          column: 38
        }
      },
      "3": {
        start: {
          line: 36,
          column: 71
        },
        end: {
          line: 36,
          column: 76
        }
      },
      "4": {
        start: {
          line: 38,
          column: 2
        },
        end: {
          line: 65,
          column: 4
        }
      },
      "5": {
        start: {
          line: 43,
          column: 24
        },
        end: {
          line: 43,
          column: 34
        }
      },
      "6": {
        start: {
          line: 44,
          column: 8
        },
        end: {
          line: 50,
          column: 9
        }
      },
      "7": {
        start: {
          line: 45,
          column: 10
        },
        end: {
          line: 49,
          column: 13
        }
      },
      "8": {
        start: {
          line: 52,
          column: 8
        },
        end: {
          line: 53,
          column: 75
        }
      },
      "9": {
        start: {
          line: 53,
          column: 10
        },
        end: {
          line: 53,
          column: 75
        }
      },
      "10": {
        start: {
          line: 55,
          column: 8
        },
        end: {
          line: 55,
          column: 61
        }
      },
      "11": {
        start: {
          line: 55,
          column: 20
        },
        end: {
          line: 55,
          column: 61
        }
      },
      "12": {
        start: {
          line: 57,
          column: 8
        },
        end: {
          line: 57,
          column: 72
        }
      },
      "13": {
        start: {
          line: 57,
          column: 44
        },
        end: {
          line: 57,
          column: 72
        }
      },
      "14": {
        start: {
          line: 59,
          column: 8
        },
        end: {
          line: 60,
          column: 47
        }
      },
      "15": {
        start: {
          line: 60,
          column: 10
        },
        end: {
          line: 60,
          column: 47
        }
      },
      "16": {
        start: {
          line: 62,
          column: 8
        },
        end: {
          line: 62,
          column: 20
        }
      },
      "17": {
        start: {
          line: 68,
          column: 0
        },
        end: {
          line: 70,
          column: 2
        }
      },
      "18": {
        start: {
          line: 72,
          column: 0
        },
        end: {
          line: 72,
          column: 34
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 17,
            column: 24
          },
          end: {
            line: 17,
            column: 25
          }
        },
        loc: {
          start: {
            line: 18,
            column: 2
          },
          end: {
            line: 18,
            column: 38
          }
        },
        line: 18
      },
      "1": {
        name: "Route",
        decl: {
          start: {
            line: 35,
            column: 9
          },
          end: {
            line: 35,
            column: 14
          }
        },
        loc: {
          start: {
            line: 35,
            column: 55
          },
          end: {
            line: 66,
            column: 1
          }
        },
        line: 35
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 42,
            column: 16
          },
          end: {
            line: 42,
            column: 17
          }
        },
        loc: {
          start: {
            line: 42,
            column: 52
          },
          end: {
            line: 63,
            column: 7
          }
        },
        line: 42
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 44,
            column: 8
          },
          end: {
            line: 50,
            column: 9
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 44,
            column: 8
          },
          end: {
            line: 50,
            column: 9
          }
        }, {
          start: {
            line: 44,
            column: 8
          },
          end: {
            line: 50,
            column: 9
          }
        }],
        line: 44
      },
      "1": {
        loc: {
          start: {
            line: 44,
            column: 12
          },
          end: {
            line: 44,
            column: 34
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 44,
            column: 12
          },
          end: {
            line: 44,
            column: 17
          }
        }, {
          start: {
            line: 44,
            column: 21
          },
          end: {
            line: 44,
            column: 34
          }
        }],
        line: 44
      },
      "2": {
        loc: {
          start: {
            line: 47,
            column: 19
          },
          end: {
            line: 47,
            column: 43
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 47,
            column: 19
          },
          end: {
            line: 47,
            column: 29
          }
        }, {
          start: {
            line: 47,
            column: 33
          },
          end: {
            line: 47,
            column: 43
          }
        }],
        line: 47
      },
      "3": {
        loc: {
          start: {
            line: 52,
            column: 8
          },
          end: {
            line: 53,
            column: 75
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 52,
            column: 8
          },
          end: {
            line: 53,
            column: 75
          }
        }, {
          start: {
            line: 52,
            column: 8
          },
          end: {
            line: 53,
            column: 75
          }
        }],
        line: 52
      },
      "4": {
        loc: {
          start: {
            line: 53,
            column: 17
          },
          end: {
            line: 53,
            column: 74
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 53,
            column: 25
          },
          end: {
            line: 53,
            column: 67
          }
        }, {
          start: {
            line: 53,
            column: 70
          },
          end: {
            line: 53,
            column: 74
          }
        }],
        line: 53
      },
      "5": {
        loc: {
          start: {
            line: 55,
            column: 8
          },
          end: {
            line: 55,
            column: 61
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 55,
            column: 8
          },
          end: {
            line: 55,
            column: 61
          }
        }, {
          start: {
            line: 55,
            column: 8
          },
          end: {
            line: 55,
            column: 61
          }
        }],
        line: 55
      },
      "6": {
        loc: {
          start: {
            line: 55,
            column: 27
          },
          end: {
            line: 55,
            column: 60
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 55,
            column: 35
          },
          end: {
            line: 55,
            column: 53
          }
        }, {
          start: {
            line: 55,
            column: 56
          },
          end: {
            line: 55,
            column: 60
          }
        }],
        line: 55
      },
      "7": {
        loc: {
          start: {
            line: 57,
            column: 8
          },
          end: {
            line: 57,
            column: 72
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 57,
            column: 8
          },
          end: {
            line: 57,
            column: 72
          }
        }, {
          start: {
            line: 57,
            column: 8
          },
          end: {
            line: 57,
            column: 72
          }
        }],
        line: 57
      },
      "8": {
        loc: {
          start: {
            line: 59,
            column: 8
          },
          end: {
            line: 60,
            column: 47
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 59,
            column: 8
          },
          end: {
            line: 60,
            column: 47
          }
        }, {
          start: {
            line: 59,
            column: 8
          },
          end: {
            line: 60,
            column: 47
          }
        }],
        line: 59
      },
      "9": {
        loc: {
          start: {
            line: 59,
            column: 12
          },
          end: {
            line: 59,
            column: 50
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 59,
            column: 12
          },
          end: {
            line: 59,
            column: 20
          }
        }, {
          start: {
            line: 59,
            column: 24
          },
          end: {
            line: 59,
            column: 50
          }
        }],
        line: 59
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
      "18": 0
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

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/** Copyright (c) 2018 Uber Technologies, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */
const ReactRouterRoute = (cov_1036lfu5q.s[0]++, reactRouterDom.Route);
cov_1036lfu5q.s[1]++;

const isEmptyChildren = children => {
  cov_1036lfu5q.f[0]++;
  cov_1036lfu5q.s[2]++;
  return React.Children.count(children) === 0;
};

function Route(props, context) {
  cov_1036lfu5q.f[1]++;

  const _ref = (cov_1036lfu5q.s[3]++, props),
        {
    trackingId,
    component,
    render,
    children
  } = _ref,
        remainingProps = _objectWithoutProperties(_ref, ["trackingId", "component", "render", "children"]);

  cov_1036lfu5q.s[4]++;
  return React.createElement(ReactRouterRoute, _extends({}, remainingProps, {
    // eslint-disable-next-line react/no-children-prop
    children: routeProps => {
      cov_1036lfu5q.f[2]++;
      const {
        match
      } = (cov_1036lfu5q.s[5]++, routeProps);
      cov_1036lfu5q.s[6]++;

      if ((cov_1036lfu5q.b[1][0]++, match) && (cov_1036lfu5q.b[1][1]++, match.isExact)) {
        cov_1036lfu5q.b[0][0]++;
        cov_1036lfu5q.s[7]++;
        context.onRoute({
          page: match.path,
          title: (cov_1036lfu5q.b[2][0]++, trackingId) || (cov_1036lfu5q.b[2][1]++, match.path),
          params: match.params
        });
      } else {
        cov_1036lfu5q.b[0][1]++;
      }

      cov_1036lfu5q.s[8]++;

      if (component) {
        cov_1036lfu5q.b[3][0]++;
        cov_1036lfu5q.s[9]++;
        return match ? (cov_1036lfu5q.b[4][0]++, React.createElement(component, routeProps)) : (cov_1036lfu5q.b[4][1]++, null);
      } else {
        cov_1036lfu5q.b[3][1]++;
      }

      cov_1036lfu5q.s[10]++;

      if (render) {
        cov_1036lfu5q.b[5][0]++;
        cov_1036lfu5q.s[11]++;
        return match ? (cov_1036lfu5q.b[6][0]++, render(routeProps)) : (cov_1036lfu5q.b[6][1]++, null);
      } else {
        cov_1036lfu5q.b[5][1]++;
      }

      cov_1036lfu5q.s[12]++;

      if (typeof children === 'function') {
        cov_1036lfu5q.b[7][0]++;
        cov_1036lfu5q.s[13]++;
        return children(routeProps);
      } else {
        cov_1036lfu5q.b[7][1]++;
      }

      cov_1036lfu5q.s[14]++;

      if ((cov_1036lfu5q.b[9][0]++, children) && (cov_1036lfu5q.b[9][1]++, !isEmptyChildren(children))) {
        cov_1036lfu5q.b[8][0]++;
        cov_1036lfu5q.s[15]++;
        return React.Children.only(children);
      } else {
        cov_1036lfu5q.b[8][1]++;
      }

      cov_1036lfu5q.s[16]++;
      return null;
    }
  }));
}

cov_1036lfu5q.s[17]++;
Route.contextTypes = {
  onRoute: PropTypes.func.isRequired
};
cov_1036lfu5q.s[18]++;
Route.displayName = 'FusionRoute';

var cov_ywn1lqb86 = function () {
  var path = "/Users/lhorie/Documents/test-private-monorepo/public/fusion-plugin-react-router/src/server.js",
      hash = "892f91bea3f9a141f47f25016d3f57b789fbfd6b",
      Function = function () {}.constructor,
      global = new Function('return this')(),
      gcv = "__coverage__",
      coverageData = {
    path: "/Users/lhorie/Documents/test-private-monorepo/public/fusion-plugin-react-router/src/server.js",
    statementMap: {
      "0": {
        start: {
          line: 44,
          column: 41
        },
        end: {
          line: 44,
          column: 61
        }
      },
      "1": {
        start: {
          line: 45,
          column: 35
        },
        end: {
          line: 45,
          column: 52
        }
      },
      "2": {
        start: {
          line: 46,
          column: 23
        },
        end: {
          line: 46,
          column: 34
        }
      },
      "3": {
        start: {
          line: 47,
          column: 39
        },
        end: {
          line: 47,
          column: 58
        }
      },
      "4": {
        start: {
          line: 48,
          column: 29
        },
        end: {
          line: 48,
          column: 43
        }
      },
      "5": {
        start: {
          line: 49,
          column: 27
        },
        end: {
          line: 49,
          column: 40
        }
      },
      "6": {
        start: {
          line: 50,
          column: 27
        },
        end: {
          line: 50,
          column: 40
        }
      },
      "7": {
        start: {
          line: 51,
          column: 33
        },
        end: {
          line: 51,
          column: 49
        }
      },
      "8": {
        start: {
          line: 52,
          column: 35
        },
        end: {
          line: 52,
          column: 52
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
      "4": 0,
      "5": 0,
      "6": 0,
      "7": 0,
      "8": 0
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
/**
 * Cast each of these imports from react-router-dom to a copied-version of their
 * types.  This is necessary as the libdef defined types will not be accessible to
 * consumers of this package.
 */
const BrowserRouter = (cov_ywn1lqb86.s[0]++, reactRouterDom.BrowserRouter);
const HashRouter = (cov_ywn1lqb86.s[1]++, reactRouterDom.HashRouter);
const Link = (cov_ywn1lqb86.s[2]++, reactRouterDom.Link);
const MemoryRouter = (cov_ywn1lqb86.s[3]++, reactRouterDom.MemoryRouter);
const NavLink = (cov_ywn1lqb86.s[4]++, reactRouterDom.NavLink);
const Prompt = (cov_ywn1lqb86.s[5]++, reactRouterDom.Prompt);
const Switch = (cov_ywn1lqb86.s[6]++, reactRouterDom.Switch);
const matchPath = (cov_ywn1lqb86.s[7]++, reactRouterDom.matchPath);
const withRouter = (cov_ywn1lqb86.s[8]++, reactRouterDom.withRouter);

var cov_2oncip9u3t = function () {
  var path = "/Users/lhorie/Documents/test-private-monorepo/public/fusion-plugin-react-router/src/modules/utils.js",
      hash = "5ec4ccfdcfacd238d848bb23dc4f3ac5721a63d4",
      Function = function () {}.constructor,
      global = new Function('return this')(),
      gcv = "__coverage__",
      coverageData = {
    path: "/Users/lhorie/Documents/test-private-monorepo/public/fusion-plugin-react-router/src/modules/utils.js",
    statementMap: {
      "0": {
        start: {
          line: 4,
          column: 24
        },
        end: {
          line: 4,
          column: 76
        }
      },
      "1": {
        start: {
          line: 4,
          column: 33
        },
        end: {
          line: 4,
          column: 75
        }
      },
      "2": {
        start: {
          line: 6,
          column: 30
        },
        end: {
          line: 19,
          column: 1
        }
      },
      "3": {
        start: {
          line: 10,
          column: 2
        },
        end: {
          line: 10,
          column: 31
        }
      },
      "4": {
        start: {
          line: 10,
          column: 15
        },
        end: {
          line: 10,
          column: 31
        }
      },
      "5": {
        start: {
          line: 11,
          column: 2
        },
        end: {
          line: 18,
          column: 3
        }
      },
      "6": {
        start: {
          line: 12,
          column: 4
        },
        end: {
          line: 12,
          column: 51
        }
      },
      "7": {
        start: {
          line: 14,
          column: 4
        },
        end: {
          line: 17,
          column: 6
        }
      },
      "8": {
        start: {
          line: 21,
          column: 33
        },
        end: {
          line: 39,
          column: 1
        }
      },
      "9": {
        start: {
          line: 25,
          column: 2
        },
        end: {
          line: 25,
          column: 31
        }
      },
      "10": {
        start: {
          line: 25,
          column: 15
        },
        end: {
          line: 25,
          column: 31
        }
      },
      "11": {
        start: {
          line: 26,
          column: 19
        },
        end: {
          line: 26,
          column: 78
        }
      },
      "12": {
        start: {
          line: 27,
          column: 20
        },
        end: {
          line: 27,
          column: 64
        }
      },
      "13": {
        start: {
          line: 28,
          column: 29
        },
        end: {
          line: 28,
          column: 58
        }
      },
      "14": {
        start: {
          line: 29,
          column: 27
        },
        end: {
          line: 29,
          column: 68
        }
      },
      "15": {
        start: {
          line: 31,
          column: 2
        },
        end: {
          line: 38,
          column: 3
        }
      },
      "16": {
        start: {
          line: 32,
          column: 4
        },
        end: {
          line: 32,
          column: 28
        }
      },
      "17": {
        start: {
          line: 34,
          column: 4
        },
        end: {
          line: 37,
          column: 6
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 4,
            column: 24
          },
          end: {
            line: 4,
            column: 25
          }
        },
        loc: {
          start: {
            line: 4,
            column: 33
          },
          end: {
            line: 4,
            column: 75
          }
        },
        line: 4
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 6,
            column: 30
          },
          end: {
            line: 6,
            column: 31
          }
        },
        loc: {
          start: {
            line: 9,
            column: 28
          },
          end: {
            line: 19,
            column: 1
          }
        },
        line: 9
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 21,
            column: 33
          },
          end: {
            line: 21,
            column: 34
          }
        },
        loc: {
          start: {
            line: 24,
            column: 28
          },
          end: {
            line: 39,
            column: 1
          }
        },
        line: 24
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 4,
            column: 33
          },
          end: {
            line: 4,
            column: 75
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 4,
            column: 58
          },
          end: {
            line: 4,
            column: 62
          }
        }, {
          start: {
            line: 4,
            column: 65
          },
          end: {
            line: 4,
            column: 75
          }
        }],
        line: 4
      },
      "1": {
        loc: {
          start: {
            line: 10,
            column: 2
          },
          end: {
            line: 10,
            column: 31
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 10,
            column: 2
          },
          end: {
            line: 10,
            column: 31
          }
        }, {
          start: {
            line: 10,
            column: 2
          },
          end: {
            line: 10,
            column: 31
          }
        }],
        line: 10
      },
      "2": {
        loc: {
          start: {
            line: 11,
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
            line: 11,
            column: 2
          },
          end: {
            line: 18,
            column: 3
          }
        }, {
          start: {
            line: 11,
            column: 2
          },
          end: {
            line: 18,
            column: 3
          }
        }],
        line: 11
      },
      "3": {
        loc: {
          start: {
            line: 25,
            column: 2
          },
          end: {
            line: 25,
            column: 31
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 25,
            column: 2
          },
          end: {
            line: 25,
            column: 31
          }
        }, {
          start: {
            line: 25,
            column: 2
          },
          end: {
            line: 25,
            column: 31
          }
        }],
        line: 25
      },
      "4": {
        loc: {
          start: {
            line: 26,
            column: 19
          },
          end: {
            line: 26,
            column: 78
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 26,
            column: 50
          },
          end: {
            line: 26,
            column: 58
          }
        }, {
          start: {
            line: 26,
            column: 61
          },
          end: {
            line: 26,
            column: 78
          }
        }],
        line: 26
      },
      "5": {
        loc: {
          start: {
            line: 29,
            column: 27
          },
          end: {
            line: 29,
            column: 68
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 29,
            column: 39
          },
          end: {
            line: 29,
            column: 57
          }
        }, {
          start: {
            line: 29,
            column: 60
          },
          end: {
            line: 29,
            column: 68
          }
        }],
        line: 29
      },
      "6": {
        loc: {
          start: {
            line: 31,
            column: 2
          },
          end: {
            line: 38,
            column: 3
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 31,
            column: 2
          },
          end: {
            line: 38,
            column: 3
          }
        }, {
          start: {
            line: 31,
            column: 2
          },
          end: {
            line: 38,
            column: 3
          }
        }],
        line: 31
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
      "17": 0
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

  if (coverage[path] && coverage[path].hash === hash) {
    return coverage[path];
  }

  coverageData.hash = hash;
  return coverage[path] = coverageData;
}();

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

cov_2oncip9u3t.s[0]++;

const addLeadingSlash = path => {
  cov_2oncip9u3t.f[0]++;
  cov_2oncip9u3t.s[1]++;
  return path.charAt(0) === '/' ? (cov_2oncip9u3t.b[0][0]++, path) : (cov_2oncip9u3t.b[0][1]++, '/' + path);
};

cov_2oncip9u3t.s[2]++;
const addRoutePrefix = (location, prefix) => {
  cov_2oncip9u3t.f[1]++;
  cov_2oncip9u3t.s[3]++;

  if (!prefix) {
    cov_2oncip9u3t.b[1][0]++;
    cov_2oncip9u3t.s[4]++;
    return location;
  } else {
    cov_2oncip9u3t.b[1][1]++;
  }

  cov_2oncip9u3t.s[5]++;

  if (typeof location === 'string') {
    cov_2oncip9u3t.b[2][0]++;
    cov_2oncip9u3t.s[6]++;
    return `${prefix}${addLeadingSlash(location)}`;
  } else {
    cov_2oncip9u3t.b[2][1]++;
    cov_2oncip9u3t.s[7]++;
    return _objectSpread({}, location, {
      pathname: `${prefix}${addLeadingSlash(location.pathname)}`
    });
  }
};
cov_2oncip9u3t.s[8]++;
const removeRoutePrefix = (location, prefix) => {
  cov_2oncip9u3t.f[2]++;
  cov_2oncip9u3t.s[9]++;

  if (!prefix) {
    cov_2oncip9u3t.b[3][0]++;
    cov_2oncip9u3t.s[10]++;
    return location;
  } else {
    cov_2oncip9u3t.b[3][1]++;
  }

  const pathname = (cov_2oncip9u3t.s[11]++, typeof location === 'string' ? (cov_2oncip9u3t.b[4][0]++, location) : (cov_2oncip9u3t.b[4][1]++, location.pathname));
  const hasPrefix = (cov_2oncip9u3t.s[12]++, (pathname + '/').indexOf(prefix + '/') === 0);
  const unprefixedPathname = (cov_2oncip9u3t.s[13]++, pathname.slice(prefix.length));
  const relativePathname = (cov_2oncip9u3t.s[14]++, hasPrefix ? (cov_2oncip9u3t.b[5][0]++, unprefixedPathname) : (cov_2oncip9u3t.b[5][1]++, pathname));
  cov_2oncip9u3t.s[15]++;

  if (typeof location === 'string') {
    cov_2oncip9u3t.b[6][0]++;
    cov_2oncip9u3t.s[16]++;
    return relativePathname;
  } else {
    cov_2oncip9u3t.b[6][1]++;
    cov_2oncip9u3t.s[17]++;
    return _objectSpread({}, location, {
      pathname: relativePathname
    });
  }
};

var cov_8u3my4md3 = function () {
  var path = "/Users/lhorie/Documents/test-private-monorepo/public/fusion-plugin-react-router/src/modules/ServerHistory.js",
      hash = "da07b5fd8b332328ff51a4c3d4831e10a4b8a239",
      Function = function () {}.constructor,
      global = new Function('return this')(),
      gcv = "__coverage__",
      coverageData = {
    path: "/Users/lhorie/Documents/test-private-monorepo/public/fusion-plugin-react-router/src/modules/ServerHistory.js",
    statementMap: {
      "0": {
        start: {
          line: 14,
          column: 23
        },
        end: {
          line: 20,
          column: 1
        }
      },
      "1": {
        start: {
          line: 18,
          column: 25
        },
        end: {
          line: 18,
          column: 56
        }
      },
      "2": {
        start: {
          line: 19,
          column: 2
        },
        end: {
          line: 19,
          column: 35
        }
      },
      "3": {
        start: {
          line: 22,
          column: 26
        },
        end: {
          line: 31,
          column: 1
        }
      },
      "4": {
        start: {
          line: 26,
          column: 2
        },
        end: {
          line: 30,
          column: 3
        }
      },
      "5": {
        start: {
          line: 27,
          column: 4
        },
        end: {
          line: 27,
          column: 44
        }
      },
      "6": {
        start: {
          line: 29,
          column: 4
        },
        end: {
          line: 29,
          column: 56
        }
      },
      "7": {
        start: {
          line: 33,
          column: 18
        },
        end: {
          line: 42,
          column: 1
        }
      },
      "8": {
        start: {
          line: 37,
          column: 2
        },
        end: {
          line: 41,
          column: 3
        }
      },
      "9": {
        start: {
          line: 38,
          column: 4
        },
        end: {
          line: 38,
          column: 47
        }
      },
      "10": {
        start: {
          line: 40,
          column: 4
        },
        end: {
          line: 40,
          column: 59
        }
      },
      "11": {
        start: {
          line: 44,
          column: 22
        },
        end: {
          line: 46,
          column: 1
        }
      },
      "12": {
        start: {
          line: 44,
          column: 36
        },
        end: {
          line: 46,
          column: 1
        }
      },
      "13": {
        start: {
          line: 45,
          column: 2
        },
        end: {
          line: 45,
          column: 72
        }
      },
      "14": {
        start: {
          line: 48,
          column: 13
        },
        end: {
          line: 48,
          column: 21
        }
      },
      "15": {
        start: {
          line: 62,
          column: 4
        },
        end: {
          line: 62,
          column: 49
        }
      },
      "16": {
        start: {
          line: 65,
          column: 4
        },
        end: {
          line: 65,
          column: 28
        }
      },
      "17": {
        start: {
          line: 66,
          column: 4
        },
        end: {
          line: 66,
          column: 54
        }
      },
      "18": {
        start: {
          line: 67,
          column: 16
        },
        end: {
          line: 67,
          column: 41
        }
      },
      "19": {
        start: {
          line: 68,
          column: 4
        },
        end: {
          line: 70,
          column: 5
        }
      },
      "20": {
        start: {
          line: 69,
          column: 6
        },
        end: {
          line: 69,
          column: 24
        }
      },
      "21": {
        start: {
          line: 74,
          column: 4
        },
        end: {
          line: 74,
          column: 31
        }
      },
      "22": {
        start: {
          line: 75,
          column: 4
        },
        end: {
          line: 75,
          column: 54
        }
      },
      "23": {
        start: {
          line: 76,
          column: 16
        },
        end: {
          line: 76,
          column: 41
        }
      },
      "24": {
        start: {
          line: 77,
          column: 4
        },
        end: {
          line: 79,
          column: 5
        }
      },
      "25": {
        start: {
          line: 78,
          column: 6
        },
        end: {
          line: 78,
          column: 24
        }
      },
      "26": {
        start: {
          line: 81,
          column: 18
        },
        end: {
          line: 92,
          column: 3
        }
      },
      "27": {
        start: {
          line: 91,
          column: 18
        },
        end: {
          line: 91,
          column: 22
        }
      },
      "28": {
        start: {
          line: 93,
          column: 2
        },
        end: {
          line: 93,
          column: 24
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 14,
            column: 23
          },
          end: {
            line: 14,
            column: 24
          }
        },
        loc: {
          start: {
            line: 17,
            column: 19
          },
          end: {
            line: 20,
            column: 1
          }
        },
        line: 17
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 22,
            column: 26
          },
          end: {
            line: 22,
            column: 27
          }
        },
        loc: {
          start: {
            line: 25,
            column: 28
          },
          end: {
            line: 31,
            column: 1
          }
        },
        line: 25
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 33,
            column: 18
          },
          end: {
            line: 33,
            column: 19
          }
        },
        loc: {
          start: {
            line: 36,
            column: 28
          },
          end: {
            line: 42,
            column: 1
          }
        },
        line: 36
      },
      "3": {
        name: "(anonymous_3)",
        decl: {
          start: {
            line: 44,
            column: 22
          },
          end: {
            line: 44,
            column: 23
          }
        },
        loc: {
          start: {
            line: 44,
            column: 36
          },
          end: {
            line: 46,
            column: 1
          }
        },
        line: 44
      },
      "4": {
        name: "(anonymous_4)",
        decl: {
          start: {
            line: 44,
            column: 36
          },
          end: {
            line: 44,
            column: 37
          }
        },
        loc: {
          start: {
            line: 44,
            column: 42
          },
          end: {
            line: 46,
            column: 1
          }
        },
        line: 44
      },
      "5": {
        name: "(anonymous_5)",
        decl: {
          start: {
            line: 48,
            column: 13
          },
          end: {
            line: 48,
            column: 14
          }
        },
        loc: {
          start: {
            line: 48,
            column: 19
          },
          end: {
            line: 48,
            column: 21
          }
        },
        line: 48
      },
      "6": {
        name: "createServerHistory",
        decl: {
          start: {
            line: 56,
            column: 16
          },
          end: {
            line: 56,
            column: 35
          }
        },
        loc: {
          start: {
            line: 60,
            column: 21
          },
          end: {
            line: 94,
            column: 1
          }
        },
        line: 60
      },
      "7": {
        name: "createHref",
        decl: {
          start: {
            line: 61,
            column: 11
          },
          end: {
            line: 61,
            column: 21
          }
        },
        loc: {
          start: {
            line: 61,
            column: 78
          },
          end: {
            line: 63,
            column: 3
          }
        },
        line: 61
      },
      "8": {
        name: "push",
        decl: {
          start: {
            line: 64,
            column: 11
          },
          end: {
            line: 64,
            column: 15
          }
        },
        loc: {
          start: {
            line: 64,
            column: 30
          },
          end: {
            line: 71,
            column: 3
          }
        },
        line: 64
      },
      "9": {
        name: "replace",
        decl: {
          start: {
            line: 73,
            column: 11
          },
          end: {
            line: 73,
            column: 18
          }
        },
        loc: {
          start: {
            line: 73,
            column: 33
          },
          end: {
            line: 80,
            column: 3
          }
        },
        line: 73
      },
      "10": {
        name: "(anonymous_10)",
        decl: {
          start: {
            line: 91,
            column: 12
          },
          end: {
            line: 91,
            column: 13
          }
        },
        loc: {
          start: {
            line: 91,
            column: 18
          },
          end: {
            line: 91,
            column: 22
          }
        },
        line: 91
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 26,
            column: 2
          },
          end: {
            line: 30,
            column: 3
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 26,
            column: 2
          },
          end: {
            line: 30,
            column: 3
          }
        }, {
          start: {
            line: 26,
            column: 2
          },
          end: {
            line: 30,
            column: 3
          }
        }],
        line: 26
      },
      "1": {
        loc: {
          start: {
            line: 37,
            column: 2
          },
          end: {
            line: 41,
            column: 3
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 37,
            column: 2
          },
          end: {
            line: 41,
            column: 3
          }
        }, {
          start: {
            line: 37,
            column: 2
          },
          end: {
            line: 41,
            column: 3
          }
        }],
        line: 37
      },
      "2": {
        loc: {
          start: {
            line: 68,
            column: 4
          },
          end: {
            line: 70,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 68,
            column: 4
          },
          end: {
            line: 70,
            column: 5
          }
        }, {
          start: {
            line: 68,
            column: 4
          },
          end: {
            line: 70,
            column: 5
          }
        }],
        line: 68
      },
      "3": {
        loc: {
          start: {
            line: 77,
            column: 4
          },
          end: {
            line: 79,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 77,
            column: 4
          },
          end: {
            line: 79,
            column: 5
          }
        }, {
          start: {
            line: 77,
            column: 4
          },
          end: {
            line: 79,
            column: 5
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
      "28": 0
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
cov_8u3my4md3.s[0]++;

const createLocation = (path, prefix) => {
  cov_8u3my4md3.f[0]++;
  const unprefixedPath = (cov_8u3my4md3.s[1]++, removeRoutePrefix(path, prefix));
  cov_8u3my4md3.s[2]++;
  return history.parsePath(unprefixedPath);
};

cov_8u3my4md3.s[3]++;

const createPrefixedURL = (location, prefix) => {
  cov_8u3my4md3.f[1]++;
  cov_8u3my4md3.s[4]++;

  if (typeof location === 'string') {
    cov_8u3my4md3.b[0][0]++;
    cov_8u3my4md3.s[5]++;
    return addRoutePrefix(location, prefix);
  } else {
    cov_8u3my4md3.b[0][1]++;
    cov_8u3my4md3.s[6]++;
    return history.createPath(addRoutePrefix(location, prefix));
  }
};

cov_8u3my4md3.s[7]++;

const createURL = (location, prefix) => {
  cov_8u3my4md3.f[2]++;
  cov_8u3my4md3.s[8]++;

  if (typeof location === 'string') {
    cov_8u3my4md3.b[1][0]++;
    cov_8u3my4md3.s[9]++;
    return removeRoutePrefix(location, prefix);
  } else {
    cov_8u3my4md3.b[1][1]++;
    cov_8u3my4md3.s[10]++;
    return history.createPath(removeRoutePrefix(location, prefix));
  }
};

cov_8u3my4md3.s[11]++;

const staticHandler = methodName => {
  cov_8u3my4md3.f[3]++;
  cov_8u3my4md3.s[12]++;
  return () => {
    cov_8u3my4md3.f[4]++;
    cov_8u3my4md3.s[13]++;
    throw new Error(`You cannot ${methodName} with server side <Router>`);
  };
};

cov_8u3my4md3.s[14]++;

const noop = () => {
  cov_8u3my4md3.f[5]++;
};

function createServerHistory(basename, context, location) {
  cov_8u3my4md3.f[6]++;

  function createHref(location) {
    cov_8u3my4md3.f[7]++;
    cov_8u3my4md3.s[15]++;
    return createPrefixedURL(location, basename);
  }

  function push(path) {
    cov_8u3my4md3.f[8]++;
    cov_8u3my4md3.s[16]++;
    context.action = 'PUSH';
    cov_8u3my4md3.s[17]++;
    context.location = createLocation(path, basename);
    const url = (cov_8u3my4md3.s[18]++, createURL(path, basename));
    cov_8u3my4md3.s[19]++;

    if (typeof url === 'string') {
      cov_8u3my4md3.b[2][0]++;
      cov_8u3my4md3.s[20]++;
      context.url = url;
    } else {
      cov_8u3my4md3.b[2][1]++;
    }
  }

  function replace(path) {
    cov_8u3my4md3.f[9]++;
    cov_8u3my4md3.s[21]++;
    context.action = 'REPLACE';
    cov_8u3my4md3.s[22]++;
    context.location = createLocation(path, basename);
    const url = (cov_8u3my4md3.s[23]++, createURL(path, basename));
    cov_8u3my4md3.s[24]++;

    if (typeof url === 'string') {
      cov_8u3my4md3.b[3][0]++;
      cov_8u3my4md3.s[25]++;
      context.url = url;
    } else {
      cov_8u3my4md3.b[3][1]++;
    }
  }

  const history$$1 = (cov_8u3my4md3.s[26]++, {
    length: 0,
    createHref,
    action: 'POP',
    location: createLocation(location, basename),
    push,
    replace,
    go: staticHandler('go'),
    goBack: staticHandler('back'),
    goForward: staticHandler('forward'),
    listen: () => {
      cov_8u3my4md3.f[10]++;
      cov_8u3my4md3.s[27]++;
      return noop;
    }
  });
  cov_8u3my4md3.s[28]++;
  return history$$1;
}

/** Copyright (c) 2018 Uber Technologies, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */
test('sets code', t => {
  const Hello = () => React__default.createElement(NotFound, null, React__default.createElement("div", null, "Hello"));

  const state = {
    code: 0
  };
  const ctx = {
    action: null,
    location: null,
    url: null,

    setCode(code) {
      state.code = code;
    }

  };
  const history$$1 = createServerHistory('/', ctx, '/');
  const el = React__default.createElement(ServerRouterTyped, {
    history: history$$1,
    context: ctx
  }, React__default.createElement(Route, {
    component: Hello
  }));
  t.ok(/Hello/.test(server.renderToString(el)), 'matches');
  t.equals(state.code, 404, 'sets code');
  t.end();
});

var cov_2okh49sw9g = function () {
  var path = "/Users/lhorie/Documents/test-private-monorepo/public/fusion-plugin-react-router/src/modules/BrowserRouter.js",
      hash = "dd88c90057ca454fd009a159d866b7aa2bba3dc4",
      Function = function () {}.constructor,
      global = new Function('return this')(),
      gcv = "__coverage__",
      coverageData = {
    path: "/Users/lhorie/Documents/test-private-monorepo/public/fusion-plugin-react-router/src/modules/BrowserRouter.js",
    statementMap: {
      "0": {
        start: {
          line: 18,
          column: 32
        },
        end: {
          line: 18,
          column: 54
        }
      },
      "1": {
        start: {
          line: 41,
          column: 4
        },
        end: {
          line: 41,
          column: 26
        }
      },
      "2": {
        start: {
          line: 42,
          column: 4
        },
        end: {
          line: 42,
          column: 26
        }
      },
      "3": {
        start: {
          line: 46,
          column: 29
        },
        end: {
          line: 46,
          column: 41
        }
      },
      "4": {
        start: {
          line: 47,
          column: 4
        },
        end: {
          line: 54,
          column: 6
        }
      },
      "5": {
        start: {
          line: 49,
          column: 8
        },
        end: {
          line: 52,
          column: 9
        }
      },
      "6": {
        start: {
          line: 50,
          column: 10
        },
        end: {
          line: 50,
          column: 43
        }
      },
      "7": {
        start: {
          line: 51,
          column: 10
        },
        end: {
          line: 51,
          column: 62
        }
      },
      "8": {
        start: {
          line: 58,
          column: 42
        },
        end: {
          line: 58,
          column: 52
        }
      },
      "9": {
        start: {
          line: 59,
          column: 4
        },
        end: {
          line: 59,
          column: 74
        }
      },
      "10": {
        start: {
          line: 59,
          column: 19
        },
        end: {
          line: 59,
          column: 74
        }
      },
      "11": {
        start: {
          line: 60,
          column: 4
        },
        end: {
          line: 64,
          column: 6
        }
      },
      "12": {
        start: {
          line: 68,
          column: 0
        },
        end: {
          line: 74,
          column: 2
        }
      },
      "13": {
        start: {
          line: 76,
          column: 0
        },
        end: {
          line: 78,
          column: 2
        }
      },
      "14": {
        start: {
          line: 80,
          column: 0
        },
        end: {
          line: 82,
          column: 2
        }
      },
      "15": {
        start: {
          line: 84,
          column: 59
        },
        end: {
          line: 84,
          column: 72
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 36,
            column: 13
          },
          end: {
            line: 36,
            column: 14
          }
        },
        loc: {
          start: {
            line: 36,
            column: 19
          },
          end: {
            line: 36,
            column: 21
          }
        },
        line: 36
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 40,
            column: 2
          },
          end: {
            line: 40,
            column: 3
          }
        },
        loc: {
          start: {
            line: 40,
            column: 54
          },
          end: {
            line: 43,
            column: 3
          }
        },
        line: 40
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 45,
            column: 2
          },
          end: {
            line: 45,
            column: 3
          }
        },
        loc: {
          start: {
            line: 45,
            column: 20
          },
          end: {
            line: 55,
            column: 3
          }
        },
        line: 45
      },
      "3": {
        name: "(anonymous_3)",
        decl: {
          start: {
            line: 48,
            column: 15
          },
          end: {
            line: 48,
            column: 16
          }
        },
        loc: {
          start: {
            line: 48,
            column: 35
          },
          end: {
            line: 53,
            column: 7
          }
        },
        line: 48
      },
      "4": {
        name: "(anonymous_4)",
        decl: {
          start: {
            line: 57,
            column: 2
          },
          end: {
            line: 57,
            column: 3
          }
        },
        loc: {
          start: {
            line: 57,
            column: 11
          },
          end: {
            line: 65,
            column: 3
          }
        },
        line: 57
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 49,
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
            line: 49,
            column: 8
          },
          end: {
            line: 52,
            column: 9
          }
        }, {
          start: {
            line: 49,
            column: 8
          },
          end: {
            line: 52,
            column: 9
          }
        }],
        line: 49
      },
      "1": {
        loc: {
          start: {
            line: 49,
            column: 12
          },
          end: {
            line: 49,
            column: 65
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 49,
            column: 12
          },
          end: {
            line: 49,
            column: 46
          }
        }, {
          start: {
            line: 49,
            column: 50
          },
          end: {
            line: 49,
            column: 65
          }
        }],
        line: 49
      },
      "2": {
        loc: {
          start: {
            line: 51,
            column: 10
          },
          end: {
            line: 51,
            column: 61
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 51,
            column: 10
          },
          end: {
            line: 51,
            column: 28
          }
        }, {
          start: {
            line: 51,
            column: 32
          },
          end: {
            line: 51,
            column: 61
          }
        }],
        line: 51
      },
      "3": {
        loc: {
          start: {
            line: 59,
            column: 4
          },
          end: {
            line: 59,
            column: 74
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 59,
            column: 4
          },
          end: {
            line: 59,
            column: 74
          }
        }, {
          start: {
            line: 59,
            column: 4
          },
          end: {
            line: 59,
            column: 74
          }
        }],
        line: 59
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
      "2": 0,
      "3": 0,
      "4": 0
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
const BaseRouter$1 = (cov_2okh49sw9g.s[0]++, reactRouterDom.Router);

class BrowserRouter$1 extends (React.Component) {
  constructor(props, context) {
    cov_2okh49sw9g.f[1]++;
    cov_2okh49sw9g.s[1]++;
    super(props, context);
    cov_2okh49sw9g.s[2]++;
    this.lastTitle = null;
  }

  getChildContext() {
    cov_2okh49sw9g.f[2]++;
    const {
      __IS_PREPARE__
    } = (cov_2okh49sw9g.s[3]++, this.context);
    cov_2okh49sw9g.s[4]++;
    return {
      onRoute: routeData => {
        cov_2okh49sw9g.f[3]++;
        cov_2okh49sw9g.s[5]++;

        if ((cov_2okh49sw9g.b[1][0]++, routeData.title !== this.lastTitle) && (cov_2okh49sw9g.b[1][1]++, !__IS_PREPARE__)) {
          cov_2okh49sw9g.b[0][0]++;
          cov_2okh49sw9g.s[6]++;
          this.lastTitle = routeData.title;
          cov_2okh49sw9g.s[7]++;
          (cov_2okh49sw9g.b[2][0]++, this.props.onRoute) && (cov_2okh49sw9g.b[2][1]++, this.props.onRoute(routeData));
        } else {
          cov_2okh49sw9g.b[0][1]++;
        }
      }
    };
  }

  render() {
    cov_2okh49sw9g.f[4]++;
    const {
      Provider,
      history: history$$1,
      basename
    } = (cov_2okh49sw9g.s[8]++, this.props);
    cov_2okh49sw9g.s[9]++;

    if (!Provider) {
      cov_2okh49sw9g.b[3][0]++;
      cov_2okh49sw9g.s[10]++;
      throw new Error('Missing Provider for Browser Router');
    } else {
      cov_2okh49sw9g.b[3][1]++;
    }

    cov_2okh49sw9g.s[11]++;
    return React.createElement(Provider, {
      basename: basename,
      history: history$$1
    }, this.props.children);
  }

}

BrowserRouter$1.defaultProps = {
  onRoute: () => {
    cov_2okh49sw9g.f[0]++;
  },
  Provider: BaseRouter$1
};
cov_2okh49sw9g.s[12]++;
BrowserRouter$1.propTypes = {
  children: PropTypes.node,
  onRoute: PropTypes.func,
  history: PropTypes.object,
  Provider: PropTypes.any,
  basename: PropTypes.string
};
cov_2okh49sw9g.s[13]++;
BrowserRouter$1.contextTypes = {
  __IS_PREPARE__: PropTypes.bool
};
cov_2okh49sw9g.s[14]++;
BrowserRouter$1.childContextTypes = {
  onRoute: PropTypes.func.isRequired
};
const BrowserRouterTyped = (cov_2okh49sw9g.s[15]++, BrowserRouter$1);

var cov_22sfkqfiq1 = function () {
  var path = "/Users/lhorie/Documents/test-private-monorepo/public/fusion-plugin-react-router/src/browser.js",
      hash = "117d63cac56d35fef1ea114e9d2dfc48cb79dcef",
      Function = function () {}.constructor,
      global = new Function('return this')(),
      gcv = "__coverage__",
      coverageData = {
    path: "/Users/lhorie/Documents/test-private-monorepo/public/fusion-plugin-react-router/src/browser.js",
    statementMap: {
      "0": {
        start: {
          line: 45,
          column: 41
        },
        end: {
          line: 45,
          column: 61
        }
      },
      "1": {
        start: {
          line: 46,
          column: 35
        },
        end: {
          line: 46,
          column: 52
        }
      },
      "2": {
        start: {
          line: 47,
          column: 23
        },
        end: {
          line: 47,
          column: 34
        }
      },
      "3": {
        start: {
          line: 48,
          column: 39
        },
        end: {
          line: 48,
          column: 58
        }
      },
      "4": {
        start: {
          line: 49,
          column: 29
        },
        end: {
          line: 49,
          column: 43
        }
      },
      "5": {
        start: {
          line: 50,
          column: 27
        },
        end: {
          line: 50,
          column: 40
        }
      },
      "6": {
        start: {
          line: 51,
          column: 39
        },
        end: {
          line: 51,
          column: 58
        }
      },
      "7": {
        start: {
          line: 52,
          column: 27
        },
        end: {
          line: 52,
          column: 40
        }
      },
      "8": {
        start: {
          line: 53,
          column: 33
        },
        end: {
          line: 53,
          column: 49
        }
      },
      "9": {
        start: {
          line: 54,
          column: 35
        },
        end: {
          line: 54,
          column: 52
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
      "4": 0,
      "5": 0,
      "6": 0,
      "7": 0,
      "8": 0,
      "9": 0
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
/**
 * Cast each of these imports from react-router-dom to a copied-version of their
 * types.  This is necessary as the libdef defined types will not be accessible to
 * consumers of this package.
 */
const BrowserRouter$2 = (cov_22sfkqfiq1.s[0]++, reactRouterDom.BrowserRouter);
const HashRouter$1 = (cov_22sfkqfiq1.s[1]++, reactRouterDom.HashRouter);
const Link$1 = (cov_22sfkqfiq1.s[2]++, reactRouterDom.Link);
const MemoryRouter$1 = (cov_22sfkqfiq1.s[3]++, reactRouterDom.MemoryRouter);
const NavLink$1 = (cov_22sfkqfiq1.s[4]++, reactRouterDom.NavLink);
const Prompt$1 = (cov_22sfkqfiq1.s[5]++, reactRouterDom.Prompt);
const StaticRouter = (cov_22sfkqfiq1.s[6]++, reactRouterDom.StaticRouter);
const Switch$1 = (cov_22sfkqfiq1.s[7]++, reactRouterDom.Switch);
const matchPath$1 = (cov_22sfkqfiq1.s[8]++, reactRouterDom.matchPath);
const withRouter$1 = (cov_22sfkqfiq1.s[9]++, reactRouterDom.withRouter);

var cov_134dm52mg1 = function () {
  var path = "/Users/lhorie/Documents/test-private-monorepo/public/fusion-plugin-react-router/src/plugin.js",
      hash = "0745c5378deb41bc94fa50dc50e3fdf3c272190e",
      Function = function () {}.constructor,
      global = new Function('return this')(),
      gcv = "__coverage__",
      coverageData = {
    path: "/Users/lhorie/Documents/test-private-monorepo/public/fusion-plugin-react-router/src/plugin.js",
    statementMap: {
      "0": {
        start: {
          line: 39,
          column: 4
        },
        end: {
          line: 39,
          column: 33
        }
      },
      "1": {
        start: {
          line: 41,
          column: 54
        },
        end: {
          line: 41,
          column: 75
        }
      },
      "2": {
        start: {
          line: 43,
          column: 15
        },
        end: {
          line: 43,
          column: 54
        }
      },
      "3": {
        start: {
          line: 50,
          column: 65
        },
        end: {
          line: 173,
          column: 2
        }
      },
      "4": {
        start: {
          line: 56,
          column: 4
        },
        end: {
          line: 161,
          column: 6
        }
      },
      "5": {
        start: {
          line: 57,
          column: 21
        },
        end: {
          line: 57,
          column: 37
        }
      },
      "6": {
        start: {
          line: 58,
          column: 6
        },
        end: {
          line: 60,
          column: 7
        }
      },
      "7": {
        start: {
          line: 59,
          column: 8
        },
        end: {
          line: 59,
          column: 22
        }
      },
      "8": {
        start: {
          line: 61,
          column: 20
        },
        end: {
          line: 61,
          column: 34
        }
      },
      "9": {
        start: {
          line: 62,
          column: 6
        },
        end: {
          line: 160,
          column: 7
        }
      },
      "10": {
        start: {
          line: 63,
          column: 23
        },
        end: {
          line: 66,
          column: 9
        }
      },
      "11": {
        start: {
          line: 67,
          column: 24
        },
        end: {
          line: 80,
          column: 9
        }
      },
      "12": {
        start: {
          line: 72,
          column: 12
        },
        end: {
          line: 72,
          column: 30
        }
      },
      "13": {
        start: {
          line: 75,
          column: 26
        },
        end: {
          line: 75,
          column: 53
        }
      },
      "14": {
        start: {
          line: 76,
          column: 12
        },
        end: {
          line: 78,
          column: 13
        }
      },
      "15": {
        start: {
          line: 77,
          column: 14
        },
        end: {
          line: 77,
          column: 34
        }
      },
      "16": {
        start: {
          line: 82,
          column: 24
        },
        end: {
          line: 82,
          column: 78
        }
      },
      "17": {
        start: {
          line: 83,
          column: 8
        },
        end: {
          line: 83,
          column: 32
        }
      },
      "18": {
        start: {
          line: 84,
          column: 8
        },
        end: {
          line: 96,
          column: 10
        }
      },
      "19": {
        start: {
          line: 89,
          column: 14
        },
        end: {
          line: 89,
          column: 27
        }
      },
      "20": {
        start: {
          line: 97,
          column: 8
        },
        end: {
          line: 127,
          column: 11
        }
      },
      "21": {
        start: {
          line: 98,
          column: 10
        },
        end: {
          line: 104,
          column: 12
        }
      },
      "22": {
        start: {
          line: 106,
          column: 10
        },
        end: {
          line: 126,
          column: 11
        }
      },
      "23": {
        start: {
          line: 107,
          column: 34
        },
        end: {
          line: 107,
          column: 51
        }
      },
      "24": {
        start: {
          line: 108,
          column: 31
        },
        end: {
          line: 115,
          column: 13
        }
      },
      "25": {
        start: {
          line: 108,
          column: 39
        },
        end: {
          line: 115,
          column: 13
        }
      },
      "26": {
        start: {
          line: 109,
          column: 14
        },
        end: {
          line: 114,
          column: 17
        }
      },
      "27": {
        start: {
          line: 116,
          column: 12
        },
        end: {
          line: 121,
          column: 15
        }
      },
      "28": {
        start: {
          line: 117,
          column: 14
        },
        end: {
          line: 119,
          column: 15
        }
      },
      "29": {
        start: {
          line: 118,
          column: 16
        },
        end: {
          line: 118,
          column: 49
        }
      },
      "30": {
        start: {
          line: 120,
          column: 14
        },
        end: {
          line: 120,
          column: 29
        }
      },
      "31": {
        start: {
          line: 122,
          column: 12
        },
        end: {
          line: 125,
          column: 15
        }
      },
      "32": {
        start: {
          line: 123,
          column: 14
        },
        end: {
          line: 123,
          column: 52
        }
      },
      "33": {
        start: {
          line: 124,
          column: 14
        },
        end: {
          line: 124,
          column: 66
        }
      },
      "34": {
        start: {
          line: 128,
          column: 13
        },
        end: {
          line: 160,
          column: 7
        }
      },
      "35": {
        start: {
          line: 130,
          column: 23
        },
        end: {
          line: 130,
          column: 25
        }
      },
      "36": {
        start: {
          line: 131,
          column: 24
        },
        end: {
          line: 131,
          column: 66
        }
      },
      "37": {
        start: {
          line: 132,
          column: 8
        },
        end: {
          line: 134,
          column: 9
        }
      },
      "38": {
        start: {
          line: 133,
          column: 10
        },
        end: {
          line: 133,
          column: 63
        }
      },
      "39": {
        start: {
          line: 135,
          column: 8
        },
        end: {
          line: 142,
          column: 13
        }
      },
      "40": {
        start: {
          line: 137,
          column: 12
        },
        end: {
          line: 140,
          column: 13
        }
      },
      "41": {
        start: {
          line: 138,
          column: 14
        },
        end: {
          line: 138,
          column: 47
        }
      },
      "42": {
        start: {
          line: 139,
          column: 14
        },
        end: {
          line: 139,
          column: 54
        }
      },
      "43": {
        start: {
          line: 141,
          column: 12
        },
        end: {
          line: 141,
          column: 27
        }
      },
      "44": {
        start: {
          line: 144,
          column: 24
        },
        end: {
          line: 144,
          column: 68
        }
      },
      "45": {
        start: {
          line: 145,
          column: 8
        },
        end: {
          line: 145,
          column: 32
        }
      },
      "46": {
        start: {
          line: 146,
          column: 8
        },
        end: {
          line: 158,
          column: 10
        }
      },
      "47": {
        start: {
          line: 152,
          column: 14
        },
        end: {
          line: 152,
          column: 33
        }
      },
      "48": {
        start: {
          line: 153,
          column: 14
        },
        end: {
          line: 153,
          column: 67
        }
      },
      "49": {
        start: {
          line: 159,
          column: 8
        },
        end: {
          line: 159,
          column: 22
        }
      },
      "50": {
        start: {
          line: 164,
          column: 4
        },
        end: {
          line: 171,
          column: 6
        }
      },
      "51": {
        start: {
          line: 166,
          column: 51
        },
        end: {
          line: 168,
          column: 14
        }
      },
      "52": {
        start: {
          line: 169,
          column: 8
        },
        end: {
          line: 169,
          column: 19
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 55,
            column: 14
          },
          end: {
            line: 55,
            column: 15
          }
        },
        loc: {
          start: {
            line: 55,
            column: 63
          },
          end: {
            line: 162,
            column: 3
          }
        },
        line: 55
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 56,
            column: 11
          },
          end: {
            line: 56,
            column: 12
          }
        },
        loc: {
          start: {
            line: 56,
            column: 32
          },
          end: {
            line: 161,
            column: 5
          }
        },
        line: 56
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 71,
            column: 19
          },
          end: {
            line: 71,
            column: 20
          }
        },
        loc: {
          start: {
            line: 71,
            column: 27
          },
          end: {
            line: 73,
            column: 11
          }
        },
        line: 71
      },
      "3": {
        name: "(anonymous_3)",
        decl: {
          start: {
            line: 74,
            column: 20
          },
          end: {
            line: 74,
            column: 21
          }
        },
        loc: {
          start: {
            line: 74,
            column: 37
          },
          end: {
            line: 79,
            column: 11
          }
        },
        line: 74
      },
      "4": {
        name: "(anonymous_4)",
        decl: {
          start: {
            line: 88,
            column: 21
          },
          end: {
            line: 88,
            column: 22
          }
        },
        loc: {
          start: {
            line: 88,
            column: 26
          },
          end: {
            line: 90,
            column: 13
          }
        },
        line: 88
      },
      "5": {
        name: "(anonymous_5)",
        decl: {
          start: {
            line: 97,
            column: 27
          },
          end: {
            line: 97,
            column: 28
          }
        },
        loc: {
          start: {
            line: 97,
            column: 33
          },
          end: {
            line: 127,
            column: 9
          }
        },
        line: 97
      },
      "6": {
        name: "(anonymous_6)",
        decl: {
          start: {
            line: 108,
            column: 31
          },
          end: {
            line: 108,
            column: 32
          }
        },
        loc: {
          start: {
            line: 108,
            column: 39
          },
          end: {
            line: 115,
            column: 13
          }
        },
        line: 108
      },
      "7": {
        name: "(anonymous_7)",
        decl: {
          start: {
            line: 108,
            column: 39
          },
          end: {
            line: 108,
            column: 40
          }
        },
        loc: {
          start: {
            line: 108,
            column: 49
          },
          end: {
            line: 115,
            column: 13
          }
        },
        line: 108
      },
      "8": {
        name: "(anonymous_8)",
        decl: {
          start: {
            line: 116,
            column: 30
          },
          end: {
            line: 116,
            column: 31
          }
        },
        loc: {
          start: {
            line: 116,
            column: 41
          },
          end: {
            line: 121,
            column: 13
          }
        },
        line: 116
      },
      "9": {
        name: "(anonymous_9)",
        decl: {
          start: {
            line: 122,
            column: 32
          },
          end: {
            line: 122,
            column: 33
          }
        },
        loc: {
          start: {
            line: 122,
            column: 42
          },
          end: {
            line: 125,
            column: 13
          }
        },
        line: 122
      },
      "10": {
        name: "(anonymous_10)",
        decl: {
          start: {
            line: 136,
            column: 22
          },
          end: {
            line: 136,
            column: 23
          }
        },
        loc: {
          start: {
            line: 136,
            column: 33
          },
          end: {
            line: 142,
            column: 11
          }
        },
        line: 136
      },
      "11": {
        name: "(anonymous_11)",
        decl: {
          start: {
            line: 151,
            column: 21
          },
          end: {
            line: 151,
            column: 22
          }
        },
        loc: {
          start: {
            line: 151,
            column: 32
          },
          end: {
            line: 154,
            column: 13
          }
        },
        line: 151
      },
      "12": {
        name: "(anonymous_12)",
        decl: {
          start: {
            line: 163,
            column: 2
          },
          end: {
            line: 163,
            column: 3
          }
        },
        loc: {
          start: {
            line: 163,
            column: 13
          },
          end: {
            line: 172,
            column: 3
          }
        },
        line: 163
      },
      "13": {
        name: "(anonymous_13)",
        decl: {
          start: {
            line: 165,
            column: 20
          },
          end: {
            line: 165,
            column: 21
          }
        },
        loc: {
          start: {
            line: 165,
            column: 26
          },
          end: {
            line: 170,
            column: 7
          }
        },
        line: 165
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 43,
            column: 15
          },
          end: {
            line: 43,
            column: 54
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 43,
            column: 26
          },
          end: {
            line: 43,
            column: 38
          }
        }, {
          start: {
            line: 43,
            column: 41
          },
          end: {
            line: 43,
            column: 54
          }
        }],
        line: 43
      },
      "1": {
        loc: {
          start: {
            line: 55,
            column: 25
          },
          end: {
            line: 55,
            column: 51
          }
        },
        type: "default-arg",
        locations: [{
          start: {
            line: 55,
            column: 36
          },
          end: {
            line: 55,
            column: 51
          }
        }],
        line: 55
      },
      "2": {
        loc: {
          start: {
            line: 57,
            column: 21
          },
          end: {
            line: 57,
            column: 37
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 57,
            column: 21
          },
          end: {
            line: 57,
            column: 31
          }
        }, {
          start: {
            line: 57,
            column: 35
          },
          end: {
            line: 57,
            column: 37
          }
        }],
        line: 57
      },
      "3": {
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
      "4": {
        loc: {
          start: {
            line: 62,
            column: 6
          },
          end: {
            line: 160,
            column: 7
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 62,
            column: 6
          },
          end: {
            line: 160,
            column: 7
          }
        }, {
          start: {
            line: 62,
            column: 6
          },
          end: {
            line: 160,
            column: 7
          }
        }],
        line: 62
      },
      "5": {
        loc: {
          start: {
            line: 76,
            column: 12
          },
          end: {
            line: 78,
            column: 13
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 76,
            column: 12
          },
          end: {
            line: 78,
            column: 13
          }
        }, {
          start: {
            line: 76,
            column: 12
          },
          end: {
            line: 78,
            column: 13
          }
        }],
        line: 76
      },
      "6": {
        loc: {
          start: {
            line: 106,
            column: 10
          },
          end: {
            line: 126,
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
            line: 126,
            column: 11
          }
        }, {
          start: {
            line: 106,
            column: 10
          },
          end: {
            line: 126,
            column: 11
          }
        }],
        line: 106
      },
      "7": {
        loc: {
          start: {
            line: 117,
            column: 14
          },
          end: {
            line: 119,
            column: 15
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 117,
            column: 14
          },
          end: {
            line: 119,
            column: 15
          }
        }, {
          start: {
            line: 117,
            column: 14
          },
          end: {
            line: 119,
            column: 15
          }
        }],
        line: 117
      },
      "8": {
        loc: {
          start: {
            line: 117,
            column: 18
          },
          end: {
            line: 117,
            column: 56
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 117,
            column: 18
          },
          end: {
            line: 117,
            column: 25
          }
        }, {
          start: {
            line: 117,
            column: 29
          },
          end: {
            line: 117,
            column: 56
          }
        }],
        line: 117
      },
      "9": {
        loc: {
          start: {
            line: 128,
            column: 13
          },
          end: {
            line: 160,
            column: 7
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 128,
            column: 13
          },
          end: {
            line: 160,
            column: 7
          }
        }, {
          start: {
            line: 128,
            column: 13
          },
          end: {
            line: 160,
            column: 7
          }
        }],
        line: 128
      },
      "10": {
        loc: {
          start: {
            line: 132,
            column: 8
          },
          end: {
            line: 134,
            column: 9
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 132,
            column: 8
          },
          end: {
            line: 134,
            column: 9
          }
        }, {
          start: {
            line: 132,
            column: 8
          },
          end: {
            line: 134,
            column: 9
          }
        }],
        line: 132
      },
      "11": {
        loc: {
          start: {
            line: 135,
            column: 8
          },
          end: {
            line: 142,
            column: 12
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 135,
            column: 8
          },
          end: {
            line: 135,
            column: 15
          }
        }, {
          start: {
            line: 136,
            column: 10
          },
          end: {
            line: 142,
            column: 12
          }
        }],
        line: 135
      },
      "12": {
        loc: {
          start: {
            line: 137,
            column: 12
          },
          end: {
            line: 140,
            column: 13
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 137,
            column: 12
          },
          end: {
            line: 140,
            column: 13
          }
        }, {
          start: {
            line: 137,
            column: 12
          },
          end: {
            line: 140,
            column: 13
          }
        }],
        line: 137
      },
      "13": {
        loc: {
          start: {
            line: 137,
            column: 16
          },
          end: {
            line: 137,
            column: 54
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 137,
            column: 16
          },
          end: {
            line: 137,
            column: 23
          }
        }, {
          start: {
            line: 137,
            column: 27
          },
          end: {
            line: 137,
            column: 54
          }
        }],
        line: 137
      },
      "14": {
        loc: {
          start: {
            line: 153,
            column: 14
          },
          end: {
            line: 153,
            column: 66
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 153,
            column: 14
          },
          end: {
            line: 153,
            column: 21
          }
        }, {
          start: {
            line: 153,
            column: 25
          },
          end: {
            line: 153,
            column: 66
          }
        }],
        line: 153
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
      "52": 0
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
      "13": 0
    },
    b: {
      "0": [0, 0],
      "1": [0],
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
      "14": [0, 0]
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
const RouterProviderToken = (cov_134dm52mg1.s[0]++, fusionCore.createToken('RouterProvider'));
const RouterToken = (cov_134dm52mg1.s[1]++, fusionCore.createToken('Router'));
const Router$$1 = (cov_134dm52mg1.s[2]++, (cov_134dm52mg1.b[0][0]++, ServerRouterTyped));
const plugin = (cov_134dm52mg1.s[3]++, fusionCore.createPlugin({
  deps: {
    emitter: fusionPluginUniversalEvents.UniversalEventsToken.optional,
    Provider: RouterProviderToken.optional
  },
  middleware: ({
    emitter,
    Provider = (cov_134dm52mg1.b[1][0]++, reactRouterDom.Router)
  }, self) => {
    cov_134dm52mg1.f[0]++;
    cov_134dm52mg1.s[4]++;
    return async (ctx, next) => {
      cov_134dm52mg1.f[1]++;
      const prefix = (cov_134dm52mg1.s[5]++, (cov_134dm52mg1.b[2][0]++, ctx.prefix) || (cov_134dm52mg1.b[2][1]++, ''));
      cov_134dm52mg1.s[6]++;

      if (!ctx.element) {
        cov_134dm52mg1.b[3][0]++;
        cov_134dm52mg1.s[7]++;
        return next();
      } else {
        cov_134dm52mg1.b[3][1]++;
      }

      const myAPI = (cov_134dm52mg1.s[8]++, self.from(ctx));
      cov_134dm52mg1.s[9]++;

      {
        cov_134dm52mg1.b[4][0]++;
        let pageData = (cov_134dm52mg1.s[10]++, {
          title: ctx.path,
          page: ctx.path
        });
        const context = (cov_134dm52mg1.s[11]++, {
          action: null,
          location: null,
          url: null,
          setCode: code => {
            cov_134dm52mg1.f[2]++;
            cov_134dm52mg1.s[12]++;
            ctx.status = code;
          },
          redirect: url => {
            cov_134dm52mg1.f[3]++;
            const toUrl = (cov_134dm52mg1.s[13]++, addRoutePrefix(url, prefix));
            cov_134dm52mg1.s[14]++;

            if (typeof toUrl === 'string') {
              cov_134dm52mg1.b[5][0]++;
              cov_134dm52mg1.s[15]++;
              ctx.redirect(toUrl);
            } else {
              cov_134dm52mg1.b[5][1]++;
            }
          }
        }); // Expose the history object

        const history$$1 = (cov_134dm52mg1.s[16]++, createServerHistory(prefix, context, prefix + ctx.url));
        cov_134dm52mg1.s[17]++;
        myAPI.history = history$$1;
        cov_134dm52mg1.s[18]++;
        ctx.element = React.createElement(Router$$1, {
          history: history$$1,
          Provider: Provider,
          onRoute: d => {
            cov_134dm52mg1.f[4]++;
            cov_134dm52mg1.s[19]++;
            pageData = d;
          },
          basename: prefix,
          context: context
        }, ctx.element);
        cov_134dm52mg1.s[20]++;
        return next().then(() => {
          cov_134dm52mg1.f[5]++;
          cov_134dm52mg1.s[21]++;
          ctx.template.body.push(fusionCore.html`
              <script id="__ROUTER_DATA__" type="application/json">
                ${JSON.stringify(pageData)}
              </script>
            `);
          cov_134dm52mg1.s[22]++;

          if (emitter) {
            cov_134dm52mg1.b[6][0]++;
            const scopedEmitter = (cov_134dm52mg1.s[23]++, emitter.from(ctx));
            cov_134dm52mg1.s[24]++;

            const emitTiming = type => {
              cov_134dm52mg1.f[6]++;
              cov_134dm52mg1.s[25]++;
              return timing => {
                cov_134dm52mg1.f[7]++;
                cov_134dm52mg1.s[26]++;
                scopedEmitter.emit(type, {
                  title: pageData.title,
                  page: pageData.page,
                  status: ctx.status,
                  timing
                });
              };
            };

            cov_134dm52mg1.s[27]++;
            scopedEmitter.map(payload => {
              cov_134dm52mg1.f[8]++;
              cov_134dm52mg1.s[28]++;

              if ((cov_134dm52mg1.b[8][0]++, payload) && (cov_134dm52mg1.b[8][1]++, typeof payload === 'object')) {
                cov_134dm52mg1.b[7][0]++;
                cov_134dm52mg1.s[29]++;
                payload.__url__ = pageData.title;
              } else {
                cov_134dm52mg1.b[7][1]++;
              }

              cov_134dm52mg1.s[30]++;
              return payload;
            });
            cov_134dm52mg1.s[31]++;
            ctx.timing.end.then(timing => {
              cov_134dm52mg1.f[9]++;
              cov_134dm52mg1.s[32]++;
              emitTiming('pageview:server')(timing);
              cov_134dm52mg1.s[33]++;
              ctx.timing.render.then(emitTiming('render:server'));
            });
          } else {
            cov_134dm52mg1.b[6][1]++;
          }
        });
      }
    };
  },

  provides() {
    cov_134dm52mg1.f[12]++;
    cov_134dm52mg1.s[50]++;
    return {
      from: fusionCore.memoize(() => {
        cov_134dm52mg1.f[13]++;
        const api = (cov_134dm52mg1.s[51]++, {
          history: null
        });
        cov_134dm52mg1.s[52]++;
        return api;
      })
    };
  }

}));

/** Copyright (c) 2018 Uber Technologies, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */
const addRoutePrefix$1 = (ctx, next) => {
  // hack until we have better route prefix support in fusion-test-utils
  ctx.prefix = '/test';
  return next();
};

function getApp(el) {
  const app = new App(el);
  app.register(RouterToken, plugin);
  return app;
}

function getPrefixApp(el) {
  const app = new App(el);
  app.middleware(addRoutePrefix$1);
  app.register(plugin);
  return app;
}

{
  test('server side redirects', async t => {
    const Hello = () => React__default.createElement("div", null, "Hello");

    const element = React__default.createElement("div", null, React__default.createElement(Redirect, {
      from: "/",
      to: "/lol"
    }), React__default.createElement(Route, {
      path: "/lol",
      component: Hello
    }));
    const app = getApp(element);
    const emitter = fusionCore.createPlugin({
      provides: () => ({
        map() {},

        emit() {},

        from() {
          return {
            map() {},

            emit() {}

          };
        }

      })
    });
    app.register(fusionPluginUniversalEvents.UniversalEventsToken, emitter);
    const simulator = setup(app);
    const ctx = await simulator.render('/');
    t.equal(ctx.status, 307);
    t.equal(ctx.res.getHeader('Location'), '/lol');
    t.end();
  });
  test('server side redirects with prefix', async t => {
    const Hello = () => React__default.createElement("div", null, "Hello");

    const element = React__default.createElement("div", null, React__default.createElement(Redirect, {
      from: "/",
      to: "/lol"
    }), React__default.createElement(Route, {
      path: "/lol",
      component: Hello
    }));
    const app = getPrefixApp(element);
    const simulator = setup(app);
    const ctx = await simulator.render('/');
    t.equal(ctx.status, 307);
    t.equal(ctx.res.getHeader('Location'), '/test/lol');
    t.end();
  });
}

test('events with trackingId', async t => {
  const Hello = () => React__default.createElement("div", null, "Hello");

  const element = React__default.createElement("div", null, React__default.createElement(Route, {
    path: "/",
    trackingId: "home",
    component: Hello
  }), React__default.createElement(Route, {
    path: "/lol",
    component: Hello
  }));
  const app = getApp(element);
  const UniversalEvents = getMockEvents({
    t,
    title: 'home',
    page: '/'
  });
  app.register(fusionPluginUniversalEvents.UniversalEventsToken, UniversalEvents);
  const simulator = setup(app);
  await simulator.render('/');
  t.end();
});
test('events with no tracking id', async t => {
  const Hello = () => React__default.createElement("div", null, "Hello");

  const element = React__default.createElement("div", null, React__default.createElement(Route, {
    path: "/",
    component: Hello
  }), React__default.createElement(Route, {
    path: "/lol",
    component: Hello
  }));
  const app = getApp(element);
  const UniversalEvents = getMockEvents({
    t,
    title: '/',
    page: '/'
  });
  app.register(fusionPluginUniversalEvents.UniversalEventsToken, UniversalEvents);
  const simulator = setup(app);
  await simulator.render('/');
  t.end();
});
test('Custom Provider', async t => {
  const Hello = () => React__default.createElement("div", null, "Hello");

  const element = React__default.createElement("div", null, React__default.createElement(Route, {
    path: "/",
    component: Hello
  }), React__default.createElement(Route, {
    path: "/lol",
    component: Hello
  }));
  const app = getApp(element);
  const UniversalEvents = getMockEvents({
    t,
    title: '/',
    page: '/'
  });
  app.register(fusionPluginUniversalEvents.UniversalEventsToken, UniversalEvents);
  app.register(RouterProviderToken, () => {
    return React__default.createElement("div", {
      id: "custom-node"
    }, "CUSTOM PROVIDER RESULT");
  });
  const simulator = setup(app);
  const {
    rendered
  } = await simulator.render('/');
  let result;

  {
    result = rendered;
  }

  t.ok(result.includes('CUSTOM PROVIDER RESULT'), 'uses custom provider');
  t.end();
});
test('Router Providing History', async t => {
  const Hello = () => React__default.createElement("div", null, "Hello");

  const element = React__default.createElement("div", null, React__default.createElement(Route, {
    path: "/",
    component: Hello
  }), React__default.createElement(Route, {
    path: "/lol",
    component: Hello
  }));
  const app = getApp(element);
  const UniversalEvents = getMockEvents({
    t,
    title: '/',
    page: '/'
  });
  app.register(fusionPluginUniversalEvents.UniversalEventsToken, UniversalEvents);
  app.middleware({
    router: RouterToken
  }, ({
    router
  }) => (ctx, next) => {
    const {
      history: history$$1
    } = router.from(ctx);
    t.ok(history$$1, 'provides a history object');
    t.equal(typeof history$$1.push, 'function', 'provides correct history object');
    t.equal(typeof history$$1.replace, 'function', 'provides correct history object');
    return next();
  });
  const simulator = setup(app);
  await simulator.render('/');
  t.end();
});
test('events with no tracking id and route prefix', async t => {
  const Hello = () => React__default.createElement("div", null, "Hello");

  const element = React__default.createElement("div", null, React__default.createElement(Route, {
    path: "/",
    component: Hello
  }), React__default.createElement(Route, {
    path: "/lol",
    component: Hello
  }));
  const app = getPrefixApp(element);
  const UniversalEvents = getMockEvents({
    t,
    title: '/',
    page: '/'
  });
  app.register(fusionPluginUniversalEvents.UniversalEventsToken, UniversalEvents);
  const simulator = setup(app);
  await simulator.render('/');
  t.end();
});
test('events with no tracking id and deep path', async t => {
  const Hello = () => React__default.createElement("div", null, "Hello");

  const NotHere = () => React__default.createElement("div", null, "NotHere");

  const element = React__default.createElement("div", null, React__default.createElement(Route, {
    path: "/user",
    component: Hello
  }), React__default.createElement(Route, {
    path: "/user/:uuid",
    component: Hello
  }), React__default.createElement(Route, {
    path: "/lol",
    component: NotHere
  }), React__default.createElement(reactRouterDom.Link, {
    to: "/lol"
  }));
  const app = getApp(element);
  const UniversalEvents = getMockEvents({
    t,
    title: '/user/:uuid',
    page: '/user/:uuid'
  });
  app.register(fusionPluginUniversalEvents.UniversalEventsToken, UniversalEvents);
  const simulator = setup(app);
  const ctx = await simulator.render('/user/abcd');
  t.ok(ctx.rendered.includes('href="/lol"'), 'sets links correctly');
  t.ok(ctx.rendered.includes('<div>Hello</div><div>Hello</div>'), 'matches both user routes');
  t.ok(!ctx.rendered.includes('NotHere'), 'does not match not here route');
  t.end();
});
test('events with no tracking id and deep path and route prefix', async t => {
  const Hello = () => React__default.createElement("div", null, "Hello");

  const NotHere = () => React__default.createElement("div", null, "NotHere");

  const element = React__default.createElement("div", null, React__default.createElement(Route, {
    path: "/user",
    component: Hello
  }), React__default.createElement(Route, {
    path: "/user/:uuid",
    component: Hello
  }), React__default.createElement(Route, {
    path: "/lol",
    component: NotHere
  }), React__default.createElement(reactRouterDom.Link, {
    to: "/lol"
  }));
  const app = getPrefixApp(element);
  const UniversalEvents = getMockEvents({
    t,
    title: '/user/:uuid',
    page: '/user/:uuid'
  });
  app.register(fusionPluginUniversalEvents.UniversalEventsToken, UniversalEvents);
  const simulator = setup(app);
  const ctx = await simulator.render('/user/abcd');
  t.ok(ctx.rendered.includes('href="/test/lol"'), 'sets links correctly');
  t.ok(ctx.rendered.includes('<div>Hello</div><div>Hello</div>'), 'matches both user routes');
  t.ok(!ctx.rendered.includes('NotHere'), 'does not match not here route');
  t.end();
});
test('without UniversalEventsToken', async t => {
  const Hello = () => React__default.createElement("div", null, "Hello");

  const element = React__default.createElement("div", null, React__default.createElement(Route, {
    path: "/",
    trackingId: "home",
    component: Hello
  }));
  const app = getApp(element);
  const simulator = setup(app);
  const ctx = await simulator.render('/');

  {
    t.ok(ctx.rendered.includes('<div>Hello</div>'), 'matches route');
  }

  t.end();
});

function getMockEvents({
  t,
  title: expectedTitle,
  page: expectedPage
}) {
  const expected = ['pageview:server', 'render:server'];
  return fusionCore.createPlugin({
    provides: () => ({
      map(mapper) {
        t.equal(typeof mapper, 'function');
      },

      emit(type, {
        title,
        page
      }) {
        {
          throw new Error('fail');
        }

        t.equal(type, expected.shift(), 'emits with the correct type');
        t.equal(title, expectedTitle, 'correct title');
        t.equal(page, expectedPage, 'correct page');
      },

      from(ctx) {
        t.ok(ctx, 'emits from scoped emitter');
        return {
          map() {},

          emit(type, {
            title,
            page,
            status,
            timing
          }) {
            t.equal(type, expected.shift(), 'emits with the correct type');
            t.equal(title, expectedTitle, 'correct title');
            t.equal(page, expectedPage, 'correct page');
            t.equal(status, 200, 'emits status code');
            t.equal(typeof timing, 'number', 'emits with the correct value');
          }

        };
      }

    })
  });
}

function setup(app, pageData = {
  title: '/',
  page: '/'
}) {
  const simulator = fusionTestUtils.getSimulator(app);
  return simulator;
}

/** Copyright (c) 2018 Uber Technologies, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */
test('redirects to a new URL', t => {
  const Hello = () => React__default.createElement("div", null, "Hello");

  const Moved = () => React__default.createElement(Redirect, {
    to: "/hello"
  });

  let setCode = false;
  let didRedirect = false;
  const state = {
    action: null,
    location: null,
    url: null,
    setCode: code => {
      t.equal(code, 307);
      setCode = true;
    },
    redirect: to => {
      t.equal(to, '/hello');
      didRedirect = true;
    }
  };
  const ctx = state;
  const history$$1 = createServerHistory('/', ctx, '/');
  const el = React__default.createElement(ServerRouterTyped, {
    history: history$$1,
    context: ctx
  }, React__default.createElement("div", null, React__default.createElement(Route, {
    path: "/",
    component: Moved
  }), React__default.createElement(Route, {
    path: "/hello",
    component: Hello
  })));
  server.renderToString(el);
  t.ok(setCode);
  t.ok(didRedirect);
  t.end();
});

/** Copyright (c) 2018 Uber Technologies, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */
test('matches as expected', t => {
  const Hello = () => React__default.createElement("div", null, "Hello");

  const ctx = {
    action: null,
    location: null,
    url: null
  };
  const history$$1 = createServerHistory('/', ctx, '/');
  const el = React__default.createElement(ServerRouterTyped, {
    history: history$$1
  }, React__default.createElement(Route, {
    path: "/",
    component: Hello
  }));
  t.ok(/Hello/.test(server.renderToString(el)), 'renders matched route in server');
  t.end();
});
test('misses as expected', t => {
  const Hello = () => React__default.createElement("div", null, "Hello");

  const ctx = {
    action: null,
    location: null,
    url: null
  };
  const history$$1 = createServerHistory('/', ctx, '/foo');
  const el = React__default.createElement(ServerRouterTyped, {
    history: history$$1
  }, React__default.createElement(Route, {
    path: "/bar",
    component: Hello
  }));
  t.ok(!/Hello/.test(server.renderToString(el)), 'does not render unmatched route');
  t.end();
});
test('support props.render', t => {
  const ctx = {
    action: null,
    location: null,
    url: null
  };
  const history$$1 = createServerHistory('/', ctx, '/');

  const Hello = () => React__default.createElement("div", null, "Hello");

  const el = React__default.createElement(ServerRouterTyped, {
    history: history$$1
  }, React__default.createElement(Route, {
    path: "/",
    render: () => React__default.createElement(Hello, null)
  }));
  t.doesNotThrow(() => /Hello/.test(server.renderToString(el)), 'does not throw when passing props.render');
  t.ok(/Hello/.test(server.renderToString(el)), 'renders matched route in server');
  t.end();
});
test('support props.children as render prop', t => {
  const ctx = {
    action: null,
    location: null,
    url: null
  };
  const history$$1 = createServerHistory('/', ctx, '/');

  const Hello = () => React__default.createElement("div", null, "Hello");
  /* eslint-disable react/no-children-prop */


  const el = React__default.createElement(ServerRouterTyped, {
    history: history$$1
  }, React__default.createElement(Route, {
    path: "/",
    children: () => React__default.createElement(Hello, null)
  }));
  /* eslint-enable react/no-children-prop */

  t.doesNotThrow(() => /Hello/.test(server.renderToString(el)), 'does not throw when passing props.children as function to <Route>');
  t.ok(/Hello/.test(server.renderToString(el)), 'renders matched route in server');
  t.end();
});

/** Copyright (c) 2018 Uber Technologies, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */
test('sets code with static code', t => {
  const Hello = () => React__default.createElement(Status, {
    code: "404"
  }, React__default.createElement("div", null, "Hello"));

  const state = {
    code: 0
  };
  const ctx = {
    action: null,
    location: null,
    url: null,

    setCode(code) {
      state.code = code;
    }

  };
  const history$$1 = createServerHistory('/', ctx, '/');
  const el = React__default.createElement(ServerRouterTyped, {
    history: history$$1,
    context: ctx
  }, React__default.createElement(Route, {
    component: Hello
  }));
  t.ok(/Hello/.test(server.renderToString(el)), 'matches');
  t.equals(state.code, 404, 'sets code');
  t.end();
});
test('sets code with numeric code', t => {
  const Hello = () => React__default.createElement(Status, {
    code: 404
  }, React__default.createElement("div", null, "Hello"));

  const state = {
    code: 0
  };
  const ctx = {
    action: null,
    location: null,
    url: null,

    setCode(code) {
      state.code = code;
    }

  };
  const history$$1 = createServerHistory('/', ctx, '/');
  const el = React__default.createElement(ServerRouterTyped, {
    history: history$$1,
    context: ctx
  }, React__default.createElement(Route, {
    component: Hello
  }));
  t.ok(/Hello/.test(server.renderToString(el)), 'matches');
  t.equals(state.code, 404, 'sets code');
  t.end();
});
test('sets code with string code', t => {
  const Hello = () => React__default.createElement(Status, {
    code: '404'
  }, React__default.createElement("div", null, "Hello"));

  const state = {
    code: 0
  };
  const ctx = {
    action: null,
    location: null,
    url: null,

    setCode(code) {
      state.code = code;
    }

  };
  const history$$1 = createServerHistory('/', ctx, '/');
  const el = React__default.createElement(ServerRouterTyped, {
    history: history$$1,
    context: ctx
  }, React__default.createElement(Route, {
    component: Hello
  }));
  t.ok(/Hello/.test(server.renderToString(el)), 'matches');
  t.equals(state.code, 404, 'sets code');
  t.end();
});

/** Copyright (c) 2018 Uber Technologies, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */
test('matches as expected', t => {
  const Hello = () => React__default.createElement("div", null, "Hello");

  const Hi = () => React__default.createElement("div", null, "Hi");

  const ctx = {
    action: null,
    location: null,
    url: null
  };
  const history$$1 = createServerHistory('/', ctx, '/');
  const el = React__default.createElement(ServerRouterTyped, {
    history: history$$1
  }, React__default.createElement(Switch, null, React__default.createElement(Route, {
    path: "/",
    component: Hello
  }), React__default.createElement(Route, {
    path: "/",
    component: Hi
  })));
  t.ok(/Hello/.test(server.renderToString(el)), 'matches first');
  t.ok(!/Hi/.test(server.renderToString(el)), 'does not match second');
  t.end();
});
//# sourceMappingURL=node.js.map
