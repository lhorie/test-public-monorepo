'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var App = require('fusion-core');
var App__default = _interopDefault(App);
var test = _interopDefault(require('tape-cup'));
var fusionTestUtils = require('fusion-test-utils');

var cov_2j8gkirgo = function () {
  var path = "/Users/lhorie/Documents/test-private-monorepo/public/fusion-plugin-service-worker/src/browser.js",
      hash = "87cd939a2e0c25c8b0924e7ac6e71b664a55e287",
      Function = function () {}.constructor,
      global = new Function('return this')(),
      gcv = "__coverage__",
      coverageData = {
    path: "/Users/lhorie/Documents/test-private-monorepo/public/fusion-plugin-service-worker/src/browser.js",
    statementMap: {
      "0": {
        start: {
          line: 10,
          column: 4
        },
        end: {
          line: 22,
          column: 6
        }
      },
      "1": {
        start: {
          line: 11,
          column: 6
        },
        end: {
          line: 20,
          column: 7
        }
      },
      "2": {
        start: {
          line: 12,
          column: 8
        },
        end: {
          line: 19,
          column: 11
        }
      },
      "3": {
        start: {
          line: 13,
          column: 21
        },
        end: {
          line: 13,
          column: 51
        }
      },
      "4": {
        start: {
          line: 14,
          column: 10
        },
        end: {
          line: 18,
          column: 71
        }
      },
      "5": {
        start: {
          line: 16,
          column: 25
        },
        end: {
          line: 16,
          column: 63
        }
      },
      "6": {
        start: {
          line: 18,
          column: 24
        },
        end: {
          line: 18,
          column: 69
        }
      },
      "7": {
        start: {
          line: 21,
          column: 6
        },
        end: {
          line: 21,
          column: 20
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 9,
            column: 2
          },
          end: {
            line: 9,
            column: 3
          }
        },
        loc: {
          start: {
            line: 9,
            column: 15
          },
          end: {
            line: 23,
            column: 3
          }
        },
        line: 9
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 10,
            column: 11
          },
          end: {
            line: 10,
            column: 12
          }
        },
        loc: {
          start: {
            line: 10,
            column: 26
          },
          end: {
            line: 22,
            column: 5
          }
        },
        line: 10
      },
      "2": {
        name: "register",
        decl: {
          start: {
            line: 12,
            column: 49
          },
          end: {
            line: 12,
            column: 57
          }
        },
        loc: {
          start: {
            line: 12,
            column: 60
          },
          end: {
            line: 19,
            column: 9
          }
        },
        line: 12
      },
      "3": {
        name: "(anonymous_3)",
        decl: {
          start: {
            line: 16,
            column: 18
          },
          end: {
            line: 16,
            column: 19
          }
        },
        loc: {
          start: {
            line: 16,
            column: 25
          },
          end: {
            line: 16,
            column: 63
          }
        },
        line: 16
      },
      "4": {
        name: "(anonymous_4)",
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
            column: 24
          },
          end: {
            line: 18,
            column: 69
          }
        },
        line: 18
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 11,
            column: 6
          },
          end: {
            line: 20,
            column: 7
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 11,
            column: 6
          },
          end: {
            line: 20,
            column: 7
          }
        }, {
          start: {
            line: 11,
            column: 6
          },
          end: {
            line: 20,
            column: 7
          }
        }],
        line: 11
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
      "2": 0,
      "3": 0,
      "4": 0
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

/* global window */
App.createPlugin({
  middleware() {
    cov_2j8gkirgo.f[0]++;
    cov_2j8gkirgo.s[0]++;
    return (ctx, next) => {
      cov_2j8gkirgo.f[1]++;
      cov_2j8gkirgo.s[1]++;

      if ('serviceWorker' in window.navigator) {
        cov_2j8gkirgo.b[0][0]++;
        cov_2j8gkirgo.s[2]++;
        window.addEventListener('load', function register() {
          cov_2j8gkirgo.f[2]++;
          const sw = (cov_2j8gkirgo.s[3]++, window.navigator.serviceWorker);
          cov_2j8gkirgo.s[4]++;
          sw.register('/sw.js')
          /* eslint-disable-next-line no-console */
          .then(res => {
            cov_2j8gkirgo.f[3]++;
            cov_2j8gkirgo.s[5]++;
            return console.log('*** sw registered:', res);
          })
          /* eslint-disable-next-line no-console */
          .catch(e => {
            cov_2j8gkirgo.f[4]++;
            cov_2j8gkirgo.s[6]++;
            return console.log('*** sw registration failed:', e);
          });
        });
      } else {
        cov_2j8gkirgo.b[0][1]++;
      }

      cov_2j8gkirgo.s[7]++;
      return next();
    };
  }

});

var cov_7c1qj3im3 = function () {
  var path = "/Users/lhorie/Documents/test-private-monorepo/public/fusion-plugin-service-worker/src/tokens.js",
      hash = "580169404c4909dba3fa5821831464fc26335f23",
      Function = function () {}.constructor,
      global = new Function('return this')(),
      gcv = "__coverage__",
      coverageData = {
    path: "/Users/lhorie/Documents/test-private-monorepo/public/fusion-plugin-service-worker/src/tokens.js",
    statementMap: {
      "0": {
        start: {
          line: 13,
          column: 56
        },
        end: {
          line: 15,
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

/** Copyright (c) 2018 Uber Technologies, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */
const SWTemplateFunctionToken = (cov_7c1qj3im3.s[0]++, App.createToken('SWTemplateFunctionToken'));

var cov_8fw2vxx3s = function () {
  var path = "/Users/lhorie/Documents/test-private-monorepo/public/fusion-plugin-service-worker/src/server.js",
      hash = "ec2d2de61d87b0a1a77c0232d63d5a216f411377",
      Function = function () {}.constructor,
      global = new Function('return this')(),
      gcv = "__coverage__",
      coverageData = {
    path: "/Users/lhorie/Documents/test-private-monorepo/public/fusion-plugin-service-worker/src/server.js",
    statementMap: {
      "0": {
        start: {
          line: 11,
          column: 2
        },
        end: {
          line: 11,
          column: 31
        }
      },
      "1": {
        start: {
          line: 20,
          column: 6
        },
        end: {
          line: 40,
          column: 8
        }
      },
      "2": {
        start: {
          line: 21,
          column: 8
        },
        end: {
          line: 39,
          column: 9
        }
      },
      "3": {
        start: {
          line: 22,
          column: 10
        },
        end: {
          line: 37,
          column: 11
        }
      },
      "4": {
        start: {
          line: 23,
          column: 30
        },
        end: {
          line: 25,
          column: 13
        }
      },
      "5": {
        start: {
          line: 24,
          column: 14
        },
        end: {
          line: 24,
          column: 33
        }
      },
      "6": {
        start: {
          line: 26,
          column: 12
        },
        end: {
          line: 36,
          column: 13
        }
      },
      "7": {
        start: {
          line: 27,
          column: 14
        },
        end: {
          line: 27,
          column: 43
        }
      },
      "8": {
        start: {
          line: 28,
          column: 14
        },
        end: {
          line: 28,
          column: 52
        }
      },
      "9": {
        start: {
          line: 29,
          column: 14
        },
        end: {
          line: 33,
          column: 17
        }
      },
      "10": {
        start: {
          line: 38,
          column: 10
        },
        end: {
          line: 38,
          column: 24
        }
      }
    },
    fnMap: {
      "0": {
        name: "invokeTemplateFn",
        decl: {
          start: {
            line: 10,
            column: 9
          },
          end: {
            line: 10,
            column: 25
          }
        },
        loc: {
          start: {
            line: 10,
            column: 49
          },
          end: {
            line: 12,
            column: 1
          }
        },
        line: 10
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 19,
            column: 16
          },
          end: {
            line: 19,
            column: 17
          }
        },
        loc: {
          start: {
            line: 19,
            column: 34
          },
          end: {
            line: 41,
            column: 5
          }
        },
        line: 19
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 20,
            column: 13
          },
          end: {
            line: 20,
            column: 14
          }
        },
        loc: {
          start: {
            line: 20,
            column: 34
          },
          end: {
            line: 40,
            column: 7
          }
        },
        line: 20
      },
      "3": {
        name: "(anonymous_3)",
        decl: {
          start: {
            line: 23,
            column: 62
          },
          end: {
            line: 23,
            column: 63
          }
        },
        loc: {
          start: {
            line: 24,
            column: 14
          },
          end: {
            line: 24,
            column: 33
          }
        },
        line: 24
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
            line: 42,
            column: 4
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
            column: 25
          }
        }, {
          start: {
            line: 15,
            column: 2
          },
          end: {
            line: 42,
            column: 4
          }
        }],
        line: 14
      },
      "1": {
        loc: {
          start: {
            line: 21,
            column: 8
          },
          end: {
            line: 39,
            column: 9
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 21,
            column: 8
          },
          end: {
            line: 39,
            column: 9
          }
        }, {
          start: {
            line: 21,
            column: 8
          },
          end: {
            line: 39,
            column: 9
          }
        }],
        line: 21
      },
      "2": {
        loc: {
          start: {
            line: 22,
            column: 10
          },
          end: {
            line: 37,
            column: 11
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 22,
            column: 10
          },
          end: {
            line: 37,
            column: 11
          }
        }, {
          start: {
            line: 22,
            column: 10
          },
          end: {
            line: 37,
            column: 11
          }
        }],
        line: 22
      },
      "3": {
        loc: {
          start: {
            line: 22,
            column: 14
          },
          end: {
            line: 22,
            column: 58
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 22,
            column: 14
          },
          end: {
            line: 22,
            column: 34
          }
        }, {
          start: {
            line: 22,
            column: 38
          },
          end: {
            line: 22,
            column: 58
          }
        }],
        line: 22
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
      "10": 0
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

/* global */
function invokeTemplateFn(templateFn, resources) {
  cov_8fw2vxx3s.f[0]++;
  cov_8fw2vxx3s.s[0]++;
  return templateFn(resources);
}

var serverPlugin = (cov_8fw2vxx3s.b[0][0]++, true) && (cov_8fw2vxx3s.b[0][1]++, App.createPlugin({
  deps: {
    templateFn: SWTemplateFunctionToken
  },
  middleware: ({
    templateFn
  }) => {
    cov_8fw2vxx3s.f[1]++;
    cov_8fw2vxx3s.s[1]++;
    return async (ctx, next) => {
      cov_8fw2vxx3s.f[2]++;
      cov_8fw2vxx3s.s[2]++;

      {
        cov_8fw2vxx3s.b[1][0]++;
        cov_8fw2vxx3s.s[3]++;

        if ((cov_8fw2vxx3s.b[3][0]++, ctx.method === 'GET') && (cov_8fw2vxx3s.b[3][1]++, ctx.url === '/sw.js')) {
          cov_8fw2vxx3s.b[2][0]++;
          const chunkUrls = (cov_8fw2vxx3s.s[4]++, Array.from(ctx.chunkUrlMap).map(value => {
            cov_8fw2vxx3s.f[3]++;
            cov_8fw2vxx3s.s[5]++;
            return value[1].get('es5');
          }));
          cov_8fw2vxx3s.s[6]++;

          try {
            cov_8fw2vxx3s.s[7]++;
            ctx.type = 'text/javascript';
            cov_8fw2vxx3s.s[8]++;
            ctx.set('Cache-Control', 'max-age=0');
            cov_8fw2vxx3s.s[9]++;
            ctx.body = invokeTemplateFn(templateFn, {
              // TODO(#24): use correct values
              precachePaths: chunkUrls,
              cacheablePaths: chunkUrls
            });
          } catch (e) {// TODO(#25): do something maybe
          }
        } else {
          cov_8fw2vxx3s.b[2][1]++;
        }

        cov_8fw2vxx3s.s[10]++;
        return next();
      }
    };
  }
}));

var cov_1j9hc8ukfw = function () {
  var path = "/Users/lhorie/Documents/test-private-monorepo/public/fusion-plugin-service-worker/src/handlers.js",
      hash = "3bc329c2ed518b9d693bfa1ba79b9339f025c25d",
      Function = function () {}.constructor,
      global = new Function('return this')(),
      gcv = "__coverage__",
      coverageData = {
    path: "/Users/lhorie/Documents/test-private-monorepo/public/fusion-plugin-service-worker/src/handlers.js",
    statementMap: {
      "0": {
        start: {
          line: 8,
          column: 18
        },
        end: {
          line: 8,
          column: 25
        }
      },
      "1": {
        start: {
          line: 11,
          column: 42
        },
        end: {
          line: 11,
          column: 51
        }
      },
      "2": {
        start: {
          line: 12,
          column: 2
        },
        end: {
          line: 61,
          column: 4
        }
      },
      "3": {
        start: {
          line: 14,
          column: 6
        },
        end: {
          line: 14,
          column: 25
        }
      },
      "4": {
        start: {
          line: 15,
          column: 6
        },
        end: {
          line: 31,
          column: 8
        }
      },
      "5": {
        start: {
          line: 20,
          column: 12
        },
        end: {
          line: 26,
          column: 16
        }
      },
      "6": {
        start: {
          line: 23,
          column: 16
        },
        end: {
          line: 25,
          column: 17
        }
      },
      "7": {
        start: {
          line: 24,
          column: 18
        },
        end: {
          line: 24,
          column: 49
        }
      },
      "8": {
        start: {
          line: 29,
          column: 12
        },
        end: {
          line: 29,
          column: 75
        }
      },
      "9": {
        start: {
          line: 34,
          column: 23
        },
        end: {
          line: 34,
          column: 46
        }
      },
      "10": {
        start: {
          line: 35,
          column: 26
        },
        end: {
          line: 35,
          column: 59
        }
      },
      "11": {
        start: {
          line: 36,
          column: 6
        },
        end: {
          line: 42,
          column: 7
        }
      },
      "12": {
        start: {
          line: 41,
          column: 8
        },
        end: {
          line: 41,
          column: 15
        }
      },
      "13": {
        start: {
          line: 43,
          column: 16
        },
        end: {
          line: 57,
          column: 8
        }
      },
      "14": {
        start: {
          line: 44,
          column: 8
        },
        end: {
          line: 55,
          column: 9
        }
      },
      "15": {
        start: {
          line: 45,
          column: 10
        },
        end: {
          line: 53,
          column: 11
        }
      },
      "16": {
        start: {
          line: 46,
          column: 36
        },
        end: {
          line: 48,
          column: 23
        }
      },
      "17": {
        start: {
          line: 49,
          column: 12
        },
        end: {
          line: 52,
          column: 13
        }
      },
      "18": {
        start: {
          line: 51,
          column: 14
        },
        end: {
          line: 51,
          column: 54
        }
      },
      "19": {
        start: {
          line: 54,
          column: 10
        },
        end: {
          line: 54,
          column: 32
        }
      },
      "20": {
        start: {
          line: 56,
          column: 8
        },
        end: {
          line: 56,
          column: 55
        }
      },
      "21": {
        start: {
          line: 58,
          column: 6
        },
        end: {
          line: 58,
          column: 27
        }
      },
      "22": {
        start: {
          line: 59,
          column: 6
        },
        end: {
          line: 59,
          column: 25
        }
      },
      "23": {
        start: {
          line: 65,
          column: 2
        },
        end: {
          line: 71,
          column: 4
        }
      },
      "24": {
        start: {
          line: 66,
          column: 4
        },
        end: {
          line: 70,
          column: 6
        }
      },
      "25": {
        start: {
          line: 67,
          column: 6
        },
        end: {
          line: 69,
          column: 9
        }
      },
      "26": {
        start: {
          line: 68,
          column: 8
        },
        end: {
          line: 68,
          column: 61
        }
      },
      "27": {
        start: {
          line: 75,
          column: 2
        },
        end: {
          line: 75,
          column: 57
        }
      },
      "28": {
        start: {
          line: 75,
          column: 37
        },
        end: {
          line: 75,
          column: 54
        }
      },
      "29": {
        start: {
          line: 79,
          column: 2
        },
        end: {
          line: 94,
          column: 5
        }
      },
      "30": {
        start: {
          line: 80,
          column: 4
        },
        end: {
          line: 82,
          column: 5
        }
      },
      "31": {
        start: {
          line: 81,
          column: 6
        },
        end: {
          line: 81,
          column: 35
        }
      },
      "32": {
        start: {
          line: 83,
          column: 27
        },
        end: {
          line: 83,
          column: 39
        }
      },
      "33": {
        start: {
          line: 84,
          column: 4
        },
        end: {
          line: 92,
          column: 7
        }
      },
      "34": {
        start: {
          line: 85,
          column: 6
        },
        end: {
          line: 90,
          column: 7
        }
      },
      "35": {
        start: {
          line: 87,
          column: 8
        },
        end: {
          line: 89,
          column: 9
        }
      },
      "36": {
        start: {
          line: 88,
          column: 10
        },
        end: {
          line: 88,
          column: 39
        }
      },
      "37": {
        start: {
          line: 91,
          column: 6
        },
        end: {
          line: 91,
          column: 45
        }
      },
      "38": {
        start: {
          line: 93,
          column: 4
        },
        end: {
          line: 93,
          column: 33
        }
      },
      "39": {
        start: {
          line: 98,
          column: 2
        },
        end: {
          line: 100,
          column: 3
        }
      },
      "40": {
        start: {
          line: 99,
          column: 4
        },
        end: {
          line: 99,
          column: 17
        }
      },
      "41": {
        start: {
          line: 101,
          column: 23
        },
        end: {
          line: 101,
          column: 52
        }
      },
      "42": {
        start: {
          line: 102,
          column: 2
        },
        end: {
          line: 102,
          column: 59
        }
      },
      "43": {
        start: {
          line: 106,
          column: 2
        },
        end: {
          line: 108,
          column: 3
        }
      },
      "44": {
        start: {
          line: 107,
          column: 4
        },
        end: {
          line: 107,
          column: 17
        }
      },
      "45": {
        start: {
          line: 109,
          column: 22
        },
        end: {
          line: 109,
          column: 58
        }
      },
      "46": {
        start: {
          line: 110,
          column: 2
        },
        end: {
          line: 110,
          column: 57
        }
      }
    },
    fnMap: {
      "0": {
        name: "getHandlers",
        decl: {
          start: {
            line: 10,
            column: 24
          },
          end: {
            line: 10,
            column: 35
          }
        },
        loc: {
          start: {
            line: 10,
            column: 58
          },
          end: {
            line: 62,
            column: 1
          }
        },
        line: 10
      },
      "1": {
        name: "(anonymous_1)",
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
            column: 40
          },
          end: {
            line: 32,
            column: 5
          }
        },
        line: 13
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 19,
            column: 16
          },
          end: {
            line: 19,
            column: 17
          }
        },
        loc: {
          start: {
            line: 19,
            column: 25
          },
          end: {
            line: 27,
            column: 11
          }
        },
        line: 19
      },
      "3": {
        name: "(anonymous_3)",
        decl: {
          start: {
            line: 22,
            column: 20
          },
          end: {
            line: 22,
            column: 21
          }
        },
        loc: {
          start: {
            line: 23,
            column: 16
          },
          end: {
            line: 25,
            column: 17
          }
        },
        line: 23
      },
      "4": {
        name: "(anonymous_4)",
        decl: {
          start: {
            line: 23,
            column: 60
          },
          end: {
            line: 23,
            column: 61
          }
        },
        loc: {
          start: {
            line: 24,
            column: 18
          },
          end: {
            line: 24,
            column: 49
          }
        },
        line: 24
      },
      "5": {
        name: "(anonymous_5)",
        decl: {
          start: {
            line: 28,
            column: 17
          },
          end: {
            line: 28,
            column: 18
          }
        },
        loc: {
          start: {
            line: 28,
            column: 22
          },
          end: {
            line: 30,
            column: 11
          }
        },
        line: 28
      },
      "6": {
        name: "(anonymous_6)",
        decl: {
          start: {
            line: 33,
            column: 13
          },
          end: {
            line: 33,
            column: 14
          }
        },
        loc: {
          start: {
            line: 33,
            column: 36
          },
          end: {
            line: 60,
            column: 5
          }
        },
        line: 33
      },
      "7": {
        name: "(anonymous_7)",
        decl: {
          start: {
            line: 43,
            column: 49
          },
          end: {
            line: 43,
            column: 50
          }
        },
        loc: {
          start: {
            line: 43,
            column: 67
          },
          end: {
            line: 57,
            column: 7
          }
        },
        line: 43
      },
      "8": {
        name: "getOutdatedKeys",
        decl: {
          start: {
            line: 64,
            column: 9
          },
          end: {
            line: 64,
            column: 24
          }
        },
        loc: {
          start: {
            line: 64,
            column: 48
          },
          end: {
            line: 72,
            column: 1
          }
        },
        line: 64
      },
      "9": {
        name: "(anonymous_9)",
        decl: {
          start: {
            line: 65,
            column: 27
          },
          end: {
            line: 65,
            column: 28
          }
        },
        loc: {
          start: {
            line: 66,
            column: 4
          },
          end: {
            line: 70,
            column: 6
          }
        },
        line: 66
      },
      "10": {
        name: "(anonymous_10)",
        decl: {
          start: {
            line: 66,
            column: 20
          },
          end: {
            line: 66,
            column: 21
          }
        },
        loc: {
          start: {
            line: 66,
            column: 31
          },
          end: {
            line: 70,
            column: 5
          }
        },
        line: 66
      },
      "11": {
        name: "(anonymous_11)",
        decl: {
          start: {
            line: 67,
            column: 34
          },
          end: {
            line: 67,
            column: 35
          }
        },
        loc: {
          start: {
            line: 67,
            column: 41
          },
          end: {
            line: 69,
            column: 7
          }
        },
        line: 67
      },
      "12": {
        name: "removeKeys",
        decl: {
          start: {
            line: 74,
            column: 9
          },
          end: {
            line: 74,
            column: 19
          }
        },
        loc: {
          start: {
            line: 74,
            column: 33
          },
          end: {
            line: 76,
            column: 1
          }
        },
        line: 74
      },
      "13": {
        name: "(anonymous_13)",
        decl: {
          start: {
            line: 75,
            column: 30
          },
          end: {
            line: 75,
            column: 31
          }
        },
        loc: {
          start: {
            line: 75,
            column: 37
          },
          end: {
            line: 75,
            column: 54
          }
        },
        line: 75
      },
      "14": {
        name: "fetchNCache",
        decl: {
          start: {
            line: 78,
            column: 9
          },
          end: {
            line: 78,
            column: 20
          }
        },
        loc: {
          start: {
            line: 78,
            column: 43
          },
          end: {
            line: 95,
            column: 1
          }
        },
        line: 78
      },
      "15": {
        name: "(anonymous_15)",
        decl: {
          start: {
            line: 79,
            column: 29
          },
          end: {
            line: 79,
            column: 30
          }
        },
        loc: {
          start: {
            line: 79,
            column: 37
          },
          end: {
            line: 94,
            column: 3
          }
        },
        line: 79
      },
      "16": {
        name: "(anonymous_16)",
        decl: {
          start: {
            line: 84,
            column: 32
          },
          end: {
            line: 84,
            column: 33
          }
        },
        loc: {
          start: {
            line: 84,
            column: 41
          },
          end: {
            line: 92,
            column: 5
          }
        },
        line: 84
      },
      "17": {
        name: "requestExpectsHtml",
        decl: {
          start: {
            line: 97,
            column: 9
          },
          end: {
            line: 97,
            column: 27
          }
        },
        loc: {
          start: {
            line: 97,
            column: 37
          },
          end: {
            line: 103,
            column: 1
          }
        },
        line: 97
      },
      "18": {
        name: "responseIsHtml",
        decl: {
          start: {
            line: 105,
            column: 9
          },
          end: {
            line: 105,
            column: 23
          }
        },
        loc: {
          start: {
            line: 105,
            column: 34
          },
          end: {
            line: 111,
            column: 1
          }
        },
        line: 105
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 36,
            column: 6
          },
          end: {
            line: 42,
            column: 7
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 36,
            column: 6
          },
          end: {
            line: 42,
            column: 7
          }
        }, {
          start: {
            line: 36,
            column: 6
          },
          end: {
            line: 42,
            column: 7
          }
        }],
        line: 36
      },
      "1": {
        loc: {
          start: {
            line: 37,
            column: 8
          },
          end: {
            line: 38,
            column: 69
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 37,
            column: 8
          },
          end: {
            line: 37,
            column: 20
          }
        }, {
          start: {
            line: 38,
            column: 8
          },
          end: {
            line: 38,
            column: 69
          }
        }],
        line: 37
      },
      "2": {
        loc: {
          start: {
            line: 44,
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
            line: 44,
            column: 8
          },
          end: {
            line: 55,
            column: 9
          }
        }, {
          start: {
            line: 44,
            column: 8
          },
          end: {
            line: 55,
            column: 9
          }
        }],
        line: 44
      },
      "3": {
        loc: {
          start: {
            line: 45,
            column: 10
          },
          end: {
            line: 53,
            column: 11
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 45,
            column: 10
          },
          end: {
            line: 53,
            column: 11
          }
        }, {
          start: {
            line: 45,
            column: 10
          },
          end: {
            line: 53,
            column: 11
          }
        }],
        line: 45
      },
      "4": {
        loc: {
          start: {
            line: 47,
            column: 14
          },
          end: {
            line: 47,
            column: 53
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 47,
            column: 14
          },
          end: {
            line: 47,
            column: 48
          }
        }, {
          start: {
            line: 47,
            column: 52
          },
          end: {
            line: 47,
            column: 53
          }
        }],
        line: 47
      },
      "5": {
        loc: {
          start: {
            line: 49,
            column: 12
          },
          end: {
            line: 52,
            column: 13
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 49,
            column: 12
          },
          end: {
            line: 52,
            column: 13
          }
        }, {
          start: {
            line: 49,
            column: 12
          },
          end: {
            line: 52,
            column: 13
          }
        }],
        line: 49
      },
      "6": {
        loc: {
          start: {
            line: 80,
            column: 4
          },
          end: {
            line: 82,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 80,
            column: 4
          },
          end: {
            line: 82,
            column: 5
          }
        }, {
          start: {
            line: 80,
            column: 4
          },
          end: {
            line: 82,
            column: 5
          }
        }],
        line: 80
      },
      "7": {
        loc: {
          start: {
            line: 85,
            column: 6
          },
          end: {
            line: 90,
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
            line: 90,
            column: 7
          }
        }, {
          start: {
            line: 85,
            column: 6
          },
          end: {
            line: 90,
            column: 7
          }
        }],
        line: 85
      },
      "8": {
        loc: {
          start: {
            line: 87,
            column: 8
          },
          end: {
            line: 89,
            column: 9
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 87,
            column: 8
          },
          end: {
            line: 89,
            column: 9
          }
        }, {
          start: {
            line: 87,
            column: 8
          },
          end: {
            line: 89,
            column: 9
          }
        }],
        line: 87
      },
      "9": {
        loc: {
          start: {
            line: 98,
            column: 2
          },
          end: {
            line: 100,
            column: 3
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 98,
            column: 2
          },
          end: {
            line: 100,
            column: 3
          }
        }, {
          start: {
            line: 98,
            column: 2
          },
          end: {
            line: 100,
            column: 3
          }
        }],
        line: 98
      },
      "10": {
        loc: {
          start: {
            line: 98,
            column: 6
          },
          end: {
            line: 98,
            column: 34
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 98,
            column: 6
          },
          end: {
            line: 98,
            column: 14
          }
        }, {
          start: {
            line: 98,
            column: 18
          },
          end: {
            line: 98,
            column: 34
          }
        }],
        line: 98
      },
      "11": {
        loc: {
          start: {
            line: 102,
            column: 9
          },
          end: {
            line: 102,
            column: 58
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 102,
            column: 9
          },
          end: {
            line: 102,
            column: 21
          }
        }, {
          start: {
            line: 102,
            column: 25
          },
          end: {
            line: 102,
            column: 58
          }
        }],
        line: 102
      },
      "12": {
        loc: {
          start: {
            line: 106,
            column: 2
          },
          end: {
            line: 108,
            column: 3
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 106,
            column: 2
          },
          end: {
            line: 108,
            column: 3
          }
        }, {
          start: {
            line: 106,
            column: 2
          },
          end: {
            line: 108,
            column: 3
          }
        }],
        line: 106
      },
      "13": {
        loc: {
          start: {
            line: 106,
            column: 6
          },
          end: {
            line: 106,
            column: 36
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 106,
            column: 6
          },
          end: {
            line: 106,
            column: 15
          }
        }, {
          start: {
            line: 106,
            column: 19
          },
          end: {
            line: 106,
            column: 36
          }
        }],
        line: 106
      },
      "14": {
        loc: {
          start: {
            line: 110,
            column: 9
          },
          end: {
            line: 110,
            column: 56
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 110,
            column: 9
          },
          end: {
            line: 110,
            column: 20
          }
        }, {
          start: {
            line: 110,
            column: 24
          },
          end: {
            line: 110,
            column: 56
          }
        }],
        line: 110
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
      "46": 0
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
      "18": 0
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

/* eslint-env serviceworker */

/* globals location, URL, fetch,  */
const cacheName = (cov_1j9hc8ukfw.s[0]++, '0.0.0'); // we don't expect this to change

var cov_2bztggvoy1 = function () {
  var path = "/Users/lhorie/Documents/test-private-monorepo/public/fusion-plugin-service-worker/src/index.js",
      hash = "a6d2f69fdef9b0f467ee1d166ba4722f72016fe6",
      Function = function () {}.constructor,
      global = new Function('return this')(),
      gcv = "__coverage__",
      coverageData = {
    path: "/Users/lhorie/Documents/test-private-monorepo/public/fusion-plugin-service-worker/src/index.js",
    statementMap: {},
    fnMap: {},
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 8,
            column: 16
          },
          end: {
            line: 8,
            column: 55
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 8,
            column: 27
          },
          end: {
            line: 8,
            column: 39
          }
        }, {
          start: {
            line: 8,
            column: 42
          },
          end: {
            line: 8,
            column: 55
          }
        }],
        line: 8
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

var ServiceWorker = (cov_2bztggvoy1.b[0][0]++, serverPlugin);

/* globals,  */
var swTemplateFunction = (params => {
  // simplified sw for testing
  return `var sw = (assetInfo: AssetInfo) => {
    return /* test SW */
    var cacheName = '0.0.0';
    var precachePaths = assetInfo.precachePaths;
    console.log('1');
    event => {
      self.skipWaiting();
      event.waitUntil(
        caches
          .open(cacheName)
          .then(cache => {
            return cache.addAll(precachePaths);
          })
          .catch(e => {
            throw new Error();
          })
      );
    };;
  };
  return sw(${JSON.stringify(params)})`;
});

test('/health request', async t => {
  const app = new App__default('el', el => el);
  app.register(SWTemplateFunctionToken, swTemplateFunction);
  app.register(ServiceWorker);
  const sim = fusionTestUtils.getSimulator(app); // Basic /health request

  const ctx_1 = await sim.request('/sw.js');
  t.equal(ctx_1.status, 200, 'sends 200 status on sw request');
  t.ok(ctx_1.body.replace(/\n/g, '').startsWith(`var sw = (assetInfo: AssetInfo) => {`), 'sends correct response');
  t.end();
  await app.cleanup();
});
//# sourceMappingURL=node.js.map
