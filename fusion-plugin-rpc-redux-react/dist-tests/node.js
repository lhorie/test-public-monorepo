'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);
var PropTypes = _interopDefault(require('prop-types'));
var fusionReact = require('fusion-react');
var rpc = require('fusion-plugin-rpc');
var rpc__default = _interopDefault(rpc);
var fusionRpcRedux = require('fusion-rpc-redux');
var test = _interopDefault(require('tape-cup'));
var ShallowRenderer = _interopDefault(require('react-test-renderer/shallow'));
var App = _interopDefault(require('fusion-core'));
var fusionTestUtils = require('fusion-test-utils');
var fusionPluginUniversalEvents = require('fusion-plugin-universal-events');

var cov_1wy6j5dm2k = function () {
  var path = "/Users/lhorie/Documents/test-private-monorepo/public/fusion-plugin-rpc-redux-react/src/plugin.js",
      hash = "7b34b571a575ab44bc66eca99977ccdfcbd435d7",
      Function = function () {}.constructor,
      global = new Function('return this')(),
      gcv = "__coverage__",
      coverageData = {
    path: "/Users/lhorie/Documents/test-private-monorepo/public/fusion-plugin-rpc-redux-react/src/plugin.js",
    statementMap: {
      "0": {
        start: {
          line: 20,
          column: 4
        },
        end: {
          line: 20,
          column: 26
        }
      },
      "1": {
        start: {
          line: 21,
          column: 4
        },
        end: {
          line: 21,
          column: 46
        }
      },
      "2": {
        start: {
          line: 24,
          column: 4
        },
        end: {
          line: 24,
          column: 27
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
      },
      "5": {
        start: {
          line: 40,
          column: 20
        },
        end: {
          line: 44,
          column: 1
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 19,
            column: 2
          },
          end: {
            line: 19,
            column: 3
          }
        },
        loc: {
          start: {
            line: 19,
            column: 30
          },
          end: {
            line: 22,
            column: 3
          }
        },
        line: 19
      },
      "1": {
        name: "(anonymous_1)",
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
            column: 20
          },
          end: {
            line: 25,
            column: 3
          }
        },
        line: 23
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
class RPCProvider extends (React.Component) {
  constructor(props, context) {
    cov_1wy6j5dm2k.f[0]++;
    cov_1wy6j5dm2k.s[0]++;
    super(props, context);
    cov_1wy6j5dm2k.s[1]++;
    this.rpc = props.provides.from(props.ctx);
  }

  getChildContext() {
    cov_1wy6j5dm2k.f[1]++;
    cov_1wy6j5dm2k.s[2]++;
    return {
      rpc: this.rpc
    };
  }

  render() {
    cov_1wy6j5dm2k.f[2]++;
    cov_1wy6j5dm2k.s[3]++;
    return React.Children.only(this.props.children);
  }

}

cov_1wy6j5dm2k.s[4]++;
RPCProvider.childContextTypes = {
  rpc: PropTypes.object.isRequired
};
var Plugin = fusionReact.ProviderPlugin.create('rpc', rpc__default, RPCProvider);
const mock = (cov_1wy6j5dm2k.s[5]++, fusionReact.ProviderPlugin.create('rpc', rpc.mock, RPCProvider));

var cov_v7bh13w8t = function () {
  var path = "/Users/lhorie/Documents/test-private-monorepo/public/fusion-plugin-rpc-redux-react/src/hoc.js",
      hash = "3d8eb8fdd83bb16d3c2681bd05aa97018705aad3",
      Function = function () {}.constructor,
      global = new Function('return this')(),
      gcv = "__coverage__",
      coverageData = {
    path: "/Users/lhorie/Documents/test-private-monorepo/public/fusion-plugin-rpc-redux-react/src/hoc.js",
    statementMap: {
      "0": {
        start: {
          line: 19,
          column: 30
        },
        end: {
          line: 39,
          column: 1
        }
      },
      "1": {
        start: {
          line: 32,
          column: 2
        },
        end: {
          line: 38,
          column: 5
        }
      },
      "2": {
        start: {
          line: 55,
          column: 2
        },
        end: {
          line: 57,
          column: 3
        }
      },
      "3": {
        start: {
          line: 56,
          column: 4
        },
        end: {
          line: 56,
          column: 21
        }
      },
      "4": {
        start: {
          line: 58,
          column: 2
        },
        end: {
          line: 84,
          column: 4
        }
      },
      "5": {
        start: {
          line: 61,
          column: 29
        },
        end: {
          line: 61,
          column: 41
        }
      },
      "6": {
        start: {
          line: 62,
          column: 24
        },
        end: {
          line: 69,
          column: 10
        }
      },
      "7": {
        start: {
          line: 70,
          column: 22
        },
        end: {
          line: 73,
          column: 9
        }
      },
      "8": {
        start: {
          line: 74,
          column: 8
        },
        end: {
          line: 74,
          column: 53
        }
      },
      "9": {
        start: {
          line: 77,
          column: 24
        },
        end: {
          line: 77,
          column: 78
        }
      },
      "10": {
        start: {
          line: 78,
          column: 4
        },
        end: {
          line: 78,
          column: 72
        }
      },
      "11": {
        start: {
          line: 79,
          column: 4
        },
        end: {
          line: 82,
          column: 6
        }
      },
      "12": {
        start: {
          line: 83,
          column: 4
        },
        end: {
          line: 83,
          column: 24
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 19,
            column: 30
          },
          end: {
            line: 19,
            column: 31
          }
        },
        loc: {
          start: {
            line: 31,
            column: 5
          },
          end: {
            line: 39,
            column: 1
          }
        },
        line: 31
      },
      "1": {
        name: "withRPCRedux",
        decl: {
          start: {
            line: 41,
            column: 16
          },
          end: {
            line: 41,
            column: 28
          }
        },
        loc: {
          start: {
            line: 54,
            column: 54
          },
          end: {
            line: 85,
            column: 1
          }
        },
        line: 54
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 58,
            column: 9
          },
          end: {
            line: 58,
            column: 10
          }
        },
        loc: {
          start: {
            line: 58,
            column: 48
          },
          end: {
            line: 84,
            column: 3
          }
        },
        line: 58
      },
      "3": {
        name: "(anonymous_3)",
        decl: {
          start: {
            line: 60,
            column: 6
          },
          end: {
            line: 60,
            column: 7
          }
        },
        loc: {
          start: {
            line: 60,
            column: 15
          },
          end: {
            line: 75,
            column: 7
          }
        },
        line: 60
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 22,
            column: 2
          },
          end: {
            line: 30,
            column: 8
          }
        },
        type: "default-arg",
        locations: [{
          start: {
            line: 30,
            column: 6
          },
          end: {
            line: 30,
            column: 8
          }
        }],
        line: 22
      },
      "1": {
        loc: {
          start: {
            line: 43,
            column: 2
          },
          end: {
            line: 53,
            column: 8
          }
        },
        type: "default-arg",
        locations: [{
          start: {
            line: 53,
            column: 6
          },
          end: {
            line: 53,
            column: 8
          }
        }],
        line: 43
      },
      "2": {
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
      "3": {
        loc: {
          start: {
            line: 77,
            column: 24
          },
          end: {
            line: 77,
            column: 78
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 77,
            column: 24
          },
          end: {
            line: 77,
            column: 45
          }
        }, {
          start: {
            line: 77,
            column: 49
          },
          end: {
            line: 77,
            column: 63
          }
        }, {
          start: {
            line: 77,
            column: 67
          },
          end: {
            line: 77,
            column: 78
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
      "12": 0
    },
    f: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0
    },
    b: {
      "0": [0],
      "1": [0],
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

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/** Copyright (c) 2018 Uber Technologies, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */
cov_v7bh13w8t.s[0]++;
const withRPCReactor = (rpcId, reducers, {
  propName,
  transformParams,
  mapStateToParams
} = (cov_v7bh13w8t.b[0][0]++, {})) => {
  cov_v7bh13w8t.f[0]++;
  cov_v7bh13w8t.s[1]++;
  return withRPCRedux(rpcId, {
    actions: fusionRpcRedux.createRPCReactors(rpcId, reducers),
    propName,
    rpcId,
    transformParams,
    mapStateToParams
  });
};
function withRPCRedux(rpcId, {
  propName,
  actions,
  transformParams,
  mapStateToParams
} = (cov_v7bh13w8t.b[1][0]++, {})) {
  cov_v7bh13w8t.f[1]++;
  cov_v7bh13w8t.s[2]++;

  if (!propName) {
    cov_v7bh13w8t.b[2][0]++;
    cov_v7bh13w8t.s[3]++;
    propName = rpcId;
  } else {
    cov_v7bh13w8t.b[2][1]++;
  }

  cov_v7bh13w8t.s[4]++;
  return Component => {
    cov_v7bh13w8t.f[2]++;

    class withRPCRedux extends (React.Component) {
      render() {
        cov_v7bh13w8t.f[3]++;
        const {
          rpc: rpc$$1,
          store
        } = (cov_v7bh13w8t.s[5]++, this.context);
        const handler = (cov_v7bh13w8t.s[6]++, fusionRpcRedux.createRPCHandler({
          rpcId,
          rpc: rpc$$1,
          store,
          actions,
          mapStateToParams,
          transformParams
        }));
        const props = (cov_v7bh13w8t.s[7]++, _objectSpread({}, this.props, {
          [propName]: handler
        }));
        cov_v7bh13w8t.s[8]++;
        return React.createElement(Component, props);
      }

    }

    const displayName = (cov_v7bh13w8t.s[9]++, (cov_v7bh13w8t.b[3][0]++, Component.displayName) || (cov_v7bh13w8t.b[3][1]++, Component.name) || (cov_v7bh13w8t.b[3][2]++, 'Anonymous'));
    cov_v7bh13w8t.s[10]++;
    withRPCRedux.displayName = 'WithRPCRedux' + '(' + displayName + ')';
    cov_v7bh13w8t.s[11]++;
    withRPCRedux.contextTypes = {
      rpc: PropTypes.object.isRequired,
      store: PropTypes.object.isRequired
    };
    cov_v7bh13w8t.s[12]++;
    return withRPCRedux;
  };
}

var cov_1te83rge1u = function () {
  var path = "/Users/lhorie/Documents/test-private-monorepo/public/fusion-plugin-rpc-redux-react/src/index.js",
      hash = "e0f4cbd89f0f7529e99cc04671a627186295bc68",
      Function = function () {}.constructor,
      global = new Function('return this')(),
      gcv = "__coverage__",
      coverageData = {
    path: "/Users/lhorie/Documents/test-private-monorepo/public/fusion-plugin-rpc-redux-react/src/index.js",
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

function _objectSpread$1(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty$1(target, key, source[key]); }); } return target; }

function _defineProperty$1(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/** Copyright (c) 2018 Uber Technologies, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */
/* Test helpers */

function createMockEmitter(props) {
  const emitter = _objectSpread$1({
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
    flush: () => {}
  }, props);

  return emitter;
}

test('plugin', t => {
  t.equals(typeof Plugin.provides, 'function');
  const handlers = {
    test() {}

  };
  const EventEmitter = createMockEmitter();

  const appCreator = () => {
    const app = new App('content', el => el);
    app.register(rpc.RPCHandlersToken, handlers);
    app.register(fusionPluginUniversalEvents.UniversalEventsToken, EventEmitter);
    return app;
  };

  const RPCRedux = fusionTestUtils.getService(appCreator, Plugin);
  const mockCtx = {
    headers: {},
    memoized: new Map()
  };
  t.equal(typeof RPCRedux.from(mockCtx).request, 'function');
  t.end();
});
test('mock plugin', t => {
  t.equals(typeof mock.provides, 'function');
  const handlers = {
    test() {}

  };

  const appCreator = () => {
    const app = new App('content', el => el);
    app.register(rpc.RPCHandlersToken, handlers);
    return app;
  };

  const RPCRedux = fusionTestUtils.getService(appCreator, mock);
  const mockCtx = {
    headers: {},
    memoized: new Map()
  };
  t.equal(typeof RPCRedux.from(mockCtx).request, 'function');
  t.end();
});
test('withRPCRedux hoc', t => {
  function Test() {
    return null;
  }

  t.equals(typeof withRPCRedux, 'function');
  const Connected = withRPCRedux('test')(Test);
  t.equals(Connected.displayName, 'WithRPCRedux(Test)');
  const renderer = new ShallowRenderer();
  const expectedActions = ['TEST_START', 'TEST_SUCCESS'];
  const expectedPayloads = ['test-args', 'test-resolve'];
  renderer.render(React__default.createElement(Connected), {
    rpc: {
      request(method, args) {
        t.equal(method, 'test');
        t.equal(args, 'test-args');
        return Promise.resolve('test-resolve');
      }

    },
    store: {
      dispatch(action) {
        t.equal(action.type, expectedActions.shift());
        t.equal(action.payload, expectedPayloads.shift());
      },

      getState() {}

    }
  });
  const rendered = renderer.getRenderOutput();
  t.equal(typeof rendered.props.test, 'function', 'passes the handler through to props');
  rendered.props.test('test-args');
  t.end();
});
test('withRPCReactor hoc', t => {
  function Test() {
    return null;
  }

  t.equals(typeof withRPCReactor, 'function');
  const Connected = withRPCReactor('test', {
    start() {},

    success() {},

    failure() {}

  })(Test);
  t.equals(Connected.displayName, 'WithRPCRedux(Test)');
  const renderer = new ShallowRenderer();
  const expectedActions = ['TEST_START', 'TEST_SUCCESS'];
  const expectedPayloads = ['test-args', 'test-resolve'];
  renderer.render(React__default.createElement(Connected), {
    rpc: {
      request(method, args) {
        t.equal(method, 'test');
        t.equal(args, 'test-args');
        return Promise.resolve('test-resolve');
      }

    },
    store: {
      dispatch(action) {
        t.equal(action.type, expectedActions.shift());
        t.equal(action.payload, expectedPayloads.shift());
      },

      getState() {}

    }
  });
  const rendered = renderer.getRenderOutput();
  t.equal(typeof rendered.props.test, 'function', 'passes the handler through to props');
  rendered.props.test('test-args');
  t.end();
});
test('ResponseError', t => {
  const e = new rpc.ResponseError('test');
  t.ok(e instanceof Error);
  t.end();
});

/** Copyright (c) 2018 Uber Technologies, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */
test('interface', t => {
  t.equal(typeof Plugin.provides, 'function', 'default export function');
  t.equal(typeof fusionRpcRedux.createRPCReducer, 'function', 'createRPCReducer function export');
  t.equal(typeof mock.provides, 'function', 'mock function export');
  t.equal(typeof withRPCRedux, 'function', 'withRPCRedux function export');
  t.equal(typeof withRPCReactor, 'function', 'withRPCReactor function export');
  t.end();
});
//# sourceMappingURL=node.js.map
