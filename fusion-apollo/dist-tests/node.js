'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var reactApollo = require('react-apollo');
var server = require('react-dom/server');
var React = _interopDefault(require('react'));
var CoreApp = require('fusion-core');
var CoreApp__default = _interopDefault(CoreApp);
var fusionReact = require('fusion-react');
var fusionTokens = require('fusion-tokens');
var test = _interopDefault(require('tape-cup'));
var fusionTestUtils = require('fusion-test-utils');
var apolloClient = require('apollo-client');
var apolloCacheInmemory = require('apollo-cache-inmemory');
var apolloLinkSchema = require('apollo-link-schema');
var gql = _interopDefault(require('graphql-tag'));
var graphqlTools = require('graphql-tools');

var cov_a8f1yoib2 = function () {
  var path = "/Users/lhorie/Documents/test-private-monorepo/public/fusion-apollo/src/server.js",
      hash = "d6855eab35e11313cd6283b90b227d2ec2e8597c",
      Function = function () {}.constructor,
      global = new Function('return this')(),
      gcv = "__coverage__",
      coverageData = {
    path: "/Users/lhorie/Documents/test-private-monorepo/public/fusion-apollo/src/server.js",
    statementMap: {
      "0": {
        start: {
          line: 22,
          column: 2
        },
        end: {
          line: 29,
          column: 7
        }
      },
      "1": {
        start: {
          line: 24,
          column: 6
        },
        end: {
          line: 24,
          column: 57
        }
      },
      "2": {
        start: {
          line: 25,
          column: 6
        },
        end: {
          line: 25,
          column: 34
        }
      },
      "3": {
        start: {
          line: 28,
          column: 6
        },
        end: {
          line: 28,
          column: 47
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 21,
            column: 15
          },
          end: {
            line: 21,
            column: 16
          }
        },
        loc: {
          start: {
            line: 21,
            column: 54
          },
          end: {
            line: 30,
            column: 1
          }
        },
        line: 21
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 23,
            column: 11
          },
          end: {
            line: 23,
            column: 12
          }
        },
        loc: {
          start: {
            line: 23,
            column: 16
          },
          end: {
            line: 26,
            column: 5
          }
        },
        line: 23
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 27,
            column: 10
          },
          end: {
            line: 27,
            column: 11
          }
        },
        loc: {
          start: {
            line: 27,
            column: 21
          },
          end: {
            line: 29,
            column: 5
          }
        },
        line: 27
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 24,
            column: 6
          },
          end: {
            line: 24,
            column: 56
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 24,
            column: 6
          },
          end: {
            line: 24,
            column: 12
          }
        }, {
          start: {
            line: 24,
            column: 16
          },
          end: {
            line: 24,
            column: 56
          }
        }],
        line: 24
      }
    },
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

/* eslint-env node */
// Apollo currently does not have an effective error policy for server side rendering (see https://github.com/apollographql/react-apollo/issues/2680)
// This render function first tries to use `renderToStringWithData`. If any query in this render function fails, we will catch the error, log it, and
// fall back to a standard renderToString, which will set the `loading` props of all queries which failed to execute in the first pass to true.
// This allows us to still render with data in the happy case, and defer to client side rendering if any queries fail. This also acts as a form
// of retrying from the browser.
var render = ((root, logger) => {
  cov_a8f1yoib2.f[0]++;
  cov_a8f1yoib2.s[0]++;
  return reactApollo.renderToStringWithData(root).catch(e => {
    cov_a8f1yoib2.f[1]++;
    cov_a8f1yoib2.s[1]++;
    (cov_a8f1yoib2.b[0][0]++, logger) && (cov_a8f1yoib2.b[0][1]++, logger.error('SSR Failed with Error', e));
    cov_a8f1yoib2.s[2]++;
    return server.renderToString(root);
  }).then(content => {
    cov_a8f1yoib2.f[2]++;
    cov_a8f1yoib2.s[3]++;
    return `<div id='root'>${content}</div>`;
  });
});

var cov_1kuk61vqqs = function () {
  var path = "/Users/lhorie/Documents/test-private-monorepo/public/fusion-apollo/src/client.js",
      hash = "b5dee1bfc855faeec527783aecb577e6ab9566f3",
      Function = function () {}.constructor,
      global = new Function('return this')(),
      gcv = "__coverage__",
      coverageData = {
    path: "/Users/lhorie/Documents/test-private-monorepo/public/fusion-apollo/src/client.js",
    statementMap: {
      "0": {
        start: {
          line: 15,
          column: 21
        },
        end: {
          line: 15,
          column: 52
        }
      },
      "1": {
        start: {
          line: 17,
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
          column: 53
        }
      },
      "3": {
        start: {
          line: 21,
          column: 2
        },
        end: {
          line: 23,
          column: 40
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 14,
            column: 15
          },
          end: {
            line: 14,
            column: 16
          }
        },
        loc: {
          start: {
            line: 14,
            column: 37
          },
          end: {
            line: 24,
            column: 1
          }
        },
        line: 14
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 17,
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
            line: 17,
            column: 2
          },
          end: {
            line: 19,
            column: 3
          }
        }, {
          start: {
            line: 17,
            column: 2
          },
          end: {
            line: 19,
            column: 3
          }
        }],
        line: 17
      },
      "1": {
        loc: {
          start: {
            line: 21,
            column: 2
          },
          end: {
            line: 23,
            column: 39
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 22,
            column: 6
          },
          end: {
            line: 22,
            column: 40
          }
        }, {
          start: {
            line: 23,
            column: 6
          },
          end: {
            line: 23,
            column: 39
          }
        }],
        line: 21
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

var cov_26qcg9s28t = function () {
  var path = "/Users/lhorie/Documents/test-private-monorepo/public/fusion-apollo/src/index.js",
      hash = "a3164e2d6eb1bcb7e211c9dc66919099e61ddf63",
      Function = function () {}.constructor,
      global = new Function('return this')(),
      gcv = "__coverage__",
      coverageData = {
    path: "/Users/lhorie/Documents/test-private-monorepo/public/fusion-apollo/src/index.js",
    statementMap: {
      "0": {
        start: {
          line: 39,
          column: 4
        },
        end: {
          line: 39,
          column: 36
        }
      },
      "1": {
        start: {
          line: 43,
          column: 63
        },
        end: {
          line: 45,
          column: 1
        }
      },
      "2": {
        start: {
          line: 47,
          column: 49
        },
        end: {
          line: 49,
          column: 1
        }
      },
      "3": {
        start: {
          line: 51,
          column: 34
        },
        end: {
          line: 53,
          column: 3
        }
      },
      "4": {
        start: {
          line: 57,
          column: 21
        },
        end: {
          line: 113,
          column: 6
        }
      },
      "5": {
        start: {
          line: 63,
          column: 8
        },
        end: {
          line: 71,
          column: 10
        }
      },
      "6": {
        start: {
          line: 64,
          column: 10
        },
        end: {
          line: 70,
          column: 13
        }
      },
      "7": {
        start: {
          line: 65,
          column: 12
        },
        end: {
          line: 69,
          column: 33
        }
      },
      "8": {
        start: {
          line: 75,
          column: 8
        },
        end: {
          line: 111,
          column: 10
        }
      },
      "9": {
        start: {
          line: 76,
          column: 10
        },
        end: {
          line: 78,
          column: 11
        }
      },
      "10": {
        start: {
          line: 77,
          column: 12
        },
        end: {
          line: 77,
          column: 26
        }
      },
      "11": {
        start: {
          line: 81,
          column: 29
        },
        end: {
          line: 81,
          column: 33
        }
      },
      "12": {
        start: {
          line: 82,
          column: 10
        },
        end: {
          line: 87,
          column: 11
        }
      },
      "13": {
        start: {
          line: 83,
          column: 32
        },
        end: {
          line: 83,
          column: 75
        }
      },
      "14": {
        start: {
          line: 84,
          column: 12
        },
        end: {
          line: 86,
          column: 13
        }
      },
      "15": {
        start: {
          line: 85,
          column: 14
        },
        end: {
          line: 85,
          column: 75
        }
      },
      "16": {
        start: {
          line: 90,
          column: 25
        },
        end: {
          line: 90,
          column: 59
        }
      },
      "17": {
        start: {
          line: 91,
          column: 10
        },
        end: {
          line: 95,
          column: 12
        }
      },
      "18": {
        start: {
          line: 97,
          column: 10
        },
        end: {
          line: 110,
          column: 11
        }
      },
      "19": {
        start: {
          line: 98,
          column: 12
        },
        end: {
          line: 107,
          column: 15
        }
      },
      "20": {
        start: {
          line: 99,
          column: 35
        },
        end: {
          line: 99,
          column: 73
        }
      },
      "21": {
        start: {
          line: 100,
          column: 33
        },
        end: {
          line: 100,
          column: 61
        }
      },
      "22": {
        start: {
          line: 101,
          column: 29
        },
        end: {
          line: 105,
          column: 15
        }
      },
      "23": {
        start: {
          line: 106,
          column: 14
        },
        end: {
          line: 106,
          column: 45
        }
      },
      "24": {
        start: {
          line: 109,
          column: 12
        },
        end: {
          line: 109,
          column: 41
        }
      },
      "25": {
        start: {
          line: 114,
          column: 4
        },
        end: {
          line: 114,
          column: 26
        }
      },
      "26": {
        start: {
          line: 121,
          column: 2
        },
        end: {
          line: 121,
          column: 72
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
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
            column: 76
          },
          end: {
            line: 115,
            column: 3
          }
        },
        line: 56
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 62,
            column: 6
          },
          end: {
            line: 62,
            column: 7
          }
        },
        loc: {
          start: {
            line: 62,
            column: 25
          },
          end: {
            line: 72,
            column: 7
          }
        },
        line: 62
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 63,
            column: 15
          },
          end: {
            line: 63,
            column: 16
          }
        },
        loc: {
          start: {
            line: 63,
            column: 28
          },
          end: {
            line: 71,
            column: 9
          }
        },
        line: 63
      },
      "3": {
        name: "(anonymous_3)",
        decl: {
          start: {
            line: 64,
            column: 34
          },
          end: {
            line: 64,
            column: 35
          }
        },
        loc: {
          start: {
            line: 64,
            column: 40
          },
          end: {
            line: 70,
            column: 11
          }
        },
        line: 64
      },
      "4": {
        name: "(anonymous_4)",
        decl: {
          start: {
            line: 73,
            column: 6
          },
          end: {
            line: 73,
            column: 7
          }
        },
        loc: {
          start: {
            line: 73,
            column: 36
          },
          end: {
            line: 112,
            column: 7
          }
        },
        line: 73
      },
      "5": {
        name: "(anonymous_5)",
        decl: {
          start: {
            line: 75,
            column: 15
          },
          end: {
            line: 75,
            column: 16
          }
        },
        loc: {
          start: {
            line: 75,
            column: 30
          },
          end: {
            line: 111,
            column: 9
          }
        },
        line: 75
      },
      "6": {
        name: "(anonymous_6)",
        decl: {
          start: {
            line: 98,
            column: 46
          },
          end: {
            line: 98,
            column: 47
          }
        },
        loc: {
          start: {
            line: 98,
            column: 52
          },
          end: {
            line: 107,
            column: 13
          }
        },
        line: 98
      },
      "7": {
        name: "gql",
        decl: {
          start: {
            line: 120,
            column: 16
          },
          end: {
            line: 120,
            column: 19
          }
        },
        loc: {
          start: {
            line: 120,
            column: 42
          },
          end: {
            line: 122,
            column: 1
          }
        },
        line: 120
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 65,
            column: 19
          },
          end: {
            line: 69,
            column: 32
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 66,
            column: 16
          },
          end: {
            line: 66,
            column: 31
          }
        }, {
          start: {
            line: 67,
            column: 16
          },
          end: {
            line: 69,
            column: 32
          }
        }],
        line: 65
      },
      "1": {
        loc: {
          start: {
            line: 67,
            column: 16
          },
          end: {
            line: 69,
            column: 32
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 68,
            column: 16
          },
          end: {
            line: 68,
            column: 40
          }
        }, {
          start: {
            line: 69,
            column: 16
          },
          end: {
            line: 69,
            column: 32
          }
        }],
        line: 67
      },
      "2": {
        loc: {
          start: {
            line: 76,
            column: 10
          },
          end: {
            line: 78,
            column: 11
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 76,
            column: 10
          },
          end: {
            line: 78,
            column: 11
          }
        }, {
          start: {
            line: 76,
            column: 10
          },
          end: {
            line: 78,
            column: 11
          }
        }],
        line: 76
      },
      "3": {
        loc: {
          start: {
            line: 82,
            column: 10
          },
          end: {
            line: 87,
            column: 11
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 82,
            column: 10
          },
          end: {
            line: 87,
            column: 11
          }
        }, {
          start: {
            line: 82,
            column: 10
          },
          end: {
            line: 87,
            column: 11
          }
        }],
        line: 82
      },
      "4": {
        loc: {
          start: {
            line: 84,
            column: 12
          },
          end: {
            line: 86,
            column: 13
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 84,
            column: 12
          },
          end: {
            line: 86,
            column: 13
          }
        }, {
          start: {
            line: 84,
            column: 12
          },
          end: {
            line: 86,
            column: 13
          }
        }],
        line: 84
      },
      "5": {
        loc: {
          start: {
            line: 97,
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
            line: 97,
            column: 10
          },
          end: {
            line: 110,
            column: 11
          }
        }, {
          start: {
            line: 97,
            column: 10
          },
          end: {
            line: 110,
            column: 11
          }
        }],
        line: 97
      },
      "6": {
        loc: {
          start: {
            line: 99,
            column: 35
          },
          end: {
            line: 99,
            column: 73
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 99,
            column: 35
          },
          end: {
            line: 99,
            column: 47
          }
        }, {
          start: {
            line: 99,
            column: 51
          },
          end: {
            line: 99,
            column: 73
          }
        }],
        line: 99
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
const ApolloClientToken = (cov_26qcg9s28t.s[0]++, CoreApp.createToken('ApolloClientToken'));
const ApolloContextToken = (cov_26qcg9s28t.s[1]++, CoreApp.createToken('ApolloContextToken'));
const GraphQLSchemaToken = (cov_26qcg9s28t.s[2]++, CoreApp.createToken('GraphQlSchemaToken'));
const ApolloCacheContext = (cov_26qcg9s28t.s[3]++, React.createContext());
class App extends CoreApp__default {
  constructor(root, render$$1) {
    cov_26qcg9s28t.f[0]++;
    const renderer = (cov_26qcg9s28t.s[4]++, CoreApp.createPlugin({
      deps: {
        getApolloClient: ApolloClientToken,
        logger: fusionTokens.LoggerToken.optional
      },

      provides({
        logger
      }) {
        cov_26qcg9s28t.f[1]++;
        cov_26qcg9s28t.s[5]++;
        return (el, ctx) => {
          cov_26qcg9s28t.f[2]++;
          cov_26qcg9s28t.s[6]++;
          return fusionReact.prepare(el).then(() => {
            cov_26qcg9s28t.f[3]++;
            cov_26qcg9s28t.s[7]++;
            return render$$1 ? (cov_26qcg9s28t.b[0][0]++, render$$1(el, ctx)) : (cov_26qcg9s28t.b[0][1]++, (cov_26qcg9s28t.b[1][0]++, render(el, logger)));
          });
        };
      },

      middleware({
        getApolloClient
      }) {
        cov_26qcg9s28t.f[4]++;
        cov_26qcg9s28t.s[8]++;
        // This is required to set apollo client/root on context before creating the client.
        return (ctx, next) => {
          cov_26qcg9s28t.f[5]++;
          cov_26qcg9s28t.s[9]++;

          if (!ctx.element) {
            cov_26qcg9s28t.b[2][0]++;
            cov_26qcg9s28t.s[10]++;
            return next();
          } else {
            cov_26qcg9s28t.b[2][1]++;
          } // Deserialize initial state for the browser


          let initialState = (cov_26qcg9s28t.s[11]++, null);
          cov_26qcg9s28t.s[12]++;

          {
            cov_26qcg9s28t.b[3][1]++;
          } // Create the client and apollo provider


          const client$$1 = (cov_26qcg9s28t.s[16]++, getApolloClient(ctx, initialState));
          cov_26qcg9s28t.s[17]++;
          ctx.element = React.createElement(ApolloCacheContext.Provider, {
            value: client$$1.cache
          }, React.createElement(reactApollo.ApolloProvider, {
            client: client$$1
          }, ctx.element));
          cov_26qcg9s28t.s[18]++;

          {
            cov_26qcg9s28t.b[5][0]++;
            cov_26qcg9s28t.s[19]++;
            return fusionReact.middleware(ctx, next).then(() => {
              cov_26qcg9s28t.f[6]++;
              const initialState = (cov_26qcg9s28t.s[20]++, (cov_26qcg9s28t.b[6][0]++, client$$1.cache) && (cov_26qcg9s28t.b[6][1]++, client$$1.cache.extract()));
              const serialized = (cov_26qcg9s28t.s[21]++, JSON.stringify(initialState));
              const script = (cov_26qcg9s28t.s[22]++, CoreApp.html`
                <script type="application/json" id="__APOLLO_STATE__">
                  ${serialized}
                </script>
              `);
              cov_26qcg9s28t.s[23]++;
              ctx.template.body.push(script);
            });
          }
        };
      }

    }));
    cov_26qcg9s28t.s[25]++;
    super(root, renderer);
  }

}
function gql$1(path) {
  cov_26qcg9s28t.f[7]++;
  cov_26qcg9s28t.s[26]++;
  throw new Error('fusion-apollo/gql should be replaced at build time');
}

test('fusion-tokens exports', t => {
  t.ok(ApolloClientToken, 'exports ApolloClientToken');
  t.ok(ApolloContextToken, 'exports ApolloContextToken');
  t.ok(GraphQLSchemaToken, 'exports GraphQLSchemaToken');
  t.ok(App, 'exports App');
  t.equal(typeof gql$1, 'function', 'exports a gql function');
  t.throws(gql$1, 'gql function throws an error if executed directly');
  t.end();
});
test('App with custom render function', async t => {
  const app = new App(React.createElement("div", null, "Hello world"), el => {
    t.ok(el);
    return 'rendered';
  });
  app.register(ApolloClientToken, () => {
    // $FlowFixMe
    return {
      cache: {
        extract: () => {}
      }
    };
  });
  const simulator = fusionTestUtils.getSimulator(app);
  const ctx = await simulator.render('/');
  t.equal(ctx.rendered, 'rendered', 'custom render function called');
  t.end();
});

/** Copyright (c) 2018 Uber Technologies, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

/* eslint-env browser */
test('renders', async t => {
  const rendered = await render(React.createElement('span', null, 'hello'), // $FlowFixMe
  console);
  t.ok(/<span/.test(rendered), 'has right tag');
  t.ok(/hello/.test(rendered), 'has right text');
  t.end();
});
test('Server render simulate', async t => {
  const el = React.createElement("div", null, "Hello World");
  const app = new App(el);
  const typeDefs = gql`
    type Query {
      test: String
    }
  `;
  const resolvers = {
    Query: {
      test() {
        return 'test';
      }

    }
  };
  const schema = graphqlTools.makeExecutableSchema({
    typeDefs,
    resolvers
  });
  app.register(ApolloClientToken, () => {
    return new apolloClient.ApolloClient({
      ssrMode: true,
      cache: new apolloCacheInmemory.InMemoryCache().restore({}),
      link: new apolloLinkSchema.SchemaLink({
        schema
      })
    });
  });
  const simulator = fusionTestUtils.getSimulator(app);
  const ctx = await simulator.render('/');
  t.equal(ctx.rendered.includes('Hello World'), true, 'renders correctly');
  t.end();
});
test('Server render simulate with custom render function', async t => {
  const el = React.createElement("div", null, "Hello World");
  const app = new App(el, (el, ctx) => {
    t.ok(el, 'passes in the element');
    t.ok(ctx, 'passes in the context object');
    return 'TEST OVERRIDE';
  });
  const typeDefs = gql`
    type Query {
      test: String
    }
  `;
  const resolvers = {
    Query: {
      test() {
        return 'test';
      }

    }
  };
  const schema = graphqlTools.makeExecutableSchema({
    typeDefs,
    resolvers
  });
  app.register(ApolloClientToken, () => {
    return new apolloClient.ApolloClient({
      ssrMode: true,
      cache: new apolloCacheInmemory.InMemoryCache().restore({}),
      link: new apolloLinkSchema.SchemaLink({
        schema
      })
    });
  });
  const simulator = fusionTestUtils.getSimulator(app);
  const ctx = await simulator.render('/');
  t.equal(ctx.rendered, 'TEST OVERRIDE', 'renders correctly');
  t.end();
});
test('SSR with <Query>', async t => {
  const query = gql`
    query Test {
      test
    }
  `;
  const el = React.createElement("div", null, React.createElement(reactApollo.Query, {
    query: query
  }, result => {
    if (result.loading) {
      return React.createElement("div", null, "Loading...");
    } else if (result.data) {
      return React.createElement("div", null, result.data.test);
    } else {
      return React.createElement("div", null, "Failure");
    }
  }));
  const app = new App(el);
  const typeDefs = gql`
    type Query {
      test: String
    }
  `;
  const resolvers = {
    Query: {
      test() {
        return 'test';
      }

    }
  };
  const schema = graphqlTools.makeExecutableSchema({
    typeDefs,
    resolvers
  });
  app.register(ApolloClientToken, () => {
    return new apolloClient.ApolloClient({
      ssrMode: true,
      cache: new apolloCacheInmemory.InMemoryCache().restore({}),
      link: new apolloLinkSchema.SchemaLink({
        schema
      })
    });
  });
  const simulator = fusionTestUtils.getSimulator(app);
  const ctx = await simulator.render('/');
  t.equal(ctx.rendered.includes('test'), true, 'renders correctly');
  t.equal(ctx.rendered.includes('Loading'), false, 'does not render loading');
  t.end();
});
test('SSR with <Query> and errors', async t => {
  const query = gql`
    query Test {
      test
    }
  `;
  const el = React.createElement("div", null, React.createElement(reactApollo.Query, {
    query: query
  }, result => {
    if (result.loading) {
      return React.createElement("div", null, "Loading...");
    } else if (result.data) {
      return React.createElement("div", null, result.data.test);
    } else {
      return React.createElement("div", null, "Failure");
    }
  }));
  const app = new App(el);
  const typeDefs = gql`
    type Query {
      test: String
    }
  `;
  const resolvers = {
    Query: {
      test() {
        throw new Error('FAIL');
      }

    }
  };
  const schema = graphqlTools.makeExecutableSchema({
    typeDefs,
    resolvers
  });
  app.register(ApolloClientToken, () => {
    return new apolloClient.ApolloClient({
      ssrMode: true,
      cache: new apolloCacheInmemory.InMemoryCache().restore({}),
      link: new apolloLinkSchema.SchemaLink({
        schema
      })
    });
  });
  const simulator = fusionTestUtils.getSimulator(app);
  const ctx = await simulator.render('/');
  t.equal(ctx.rendered.includes('test'), false, 'does not fetch data');
  t.equal(ctx.rendered.includes('Loading'), true, 'Renders the loading');
  t.end();
});
//# sourceMappingURL=node.js.map
