'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var App = require('fusion-core');
var App__default = _interopDefault(App);
var winston = require('winston');
var UniversalEvents = require('fusion-plugin-universal-events');
var UniversalEvents__default = _interopDefault(UniversalEvents);
var test = _interopDefault(require('tape-cup'));
var fusionTestUtils = require('fusion-test-utils');
var fusionTokens = require('fusion-tokens');
var TransportStream = _interopDefault(require('winston-transport'));

var cov_1bjywt1i4v = function () {
  var path = "/Users/lhorie/Documents/test-private-monorepo/public/fusion-plugin-universal-logger/src/tokens.js",
      hash = "497dba820571351593fe3e224614a35397eca56b",
      Function = function () {}.constructor,
      global = new Function('return this')(),
      gcv = "__coverage__",
      coverageData = {
    path: "/Users/lhorie/Documents/test-private-monorepo/public/fusion-plugin-universal-logger/src/tokens.js",
    statementMap: {
      "0": {
        start: {
          line: 16,
          column: 4
        },
        end: {
          line: 16,
          column: 45
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
const UniversalLoggerConfigToken = (cov_1bjywt1i4v.s[0]++, App.createToken('UniversalLoggerConfigToken'));

var cov_1v9xge2pzv = function () {
  var path = "/Users/lhorie/Documents/test-private-monorepo/public/fusion-plugin-universal-logger/src/server.js",
      hash = "a5888f1741837138520e237126ebe64d2f00c9ec",
      Function = function () {}.constructor,
      global = new Function('return this')(),
      gcv = "__coverage__",
      coverageData = {
    path: "/Users/lhorie/Documents/test-private-monorepo/public/fusion-plugin-universal-logger/src/server.js",
    statementMap: {
      "0": {
        start: {
          line: 20,
          column: 2
        },
        end: {
          line: 42,
          column: 4
        }
      },
      "1": {
        start: {
          line: 27,
          column: 6
        },
        end: {
          line: 27,
          column: 28
        }
      },
      "2": {
        start: {
          line: 28,
          column: 21
        },
        end: {
          line: 28,
          column: 41
        }
      },
      "3": {
        start: {
          line: 29,
          column: 6
        },
        end: {
          line: 31,
          column: 9
        }
      },
      "4": {
        start: {
          line: 30,
          column: 8
        },
        end: {
          line: 30,
          column: 31
        }
      },
      "5": {
        start: {
          line: 33,
          column: 6
        },
        end: {
          line: 39,
          column: 7
        }
      },
      "6": {
        start: {
          line: 34,
          column: 8
        },
        end: {
          line: 38,
          column: 9
        }
      },
      "7": {
        start: {
          line: 36,
          column: 10
        },
        end: {
          line: 37,
          column: 80
        }
      },
      "8": {
        start: {
          line: 37,
          column: 12
        },
        end: {
          line: 37,
          column: 79
        }
      },
      "9": {
        start: {
          line: 40,
          column: 6
        },
        end: {
          line: 40,
          column: 35
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 26,
            column: 14
          },
          end: {
            line: 26,
            column: 15
          }
        },
        loc: {
          start: {
            line: 26,
            column: 37
          },
          end: {
            line: 41,
            column: 5
          }
        },
        line: 26
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 29,
            column: 34
          },
          end: {
            line: 29,
            column: 35
          }
        },
        loc: {
          start: {
            line: 29,
            column: 53
          },
          end: {
            line: 31,
            column: 7
          }
        },
        line: 29
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 36,
            column: 43
          },
          end: {
            line: 36,
            column: 44
          }
        },
        loc: {
          start: {
            line: 37,
            column: 12
          },
          end: {
            line: 37,
            column: 79
          }
        },
        line: 37
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
            line: 42,
            column: 4
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 20,
            column: 2
          },
          end: {
            line: 20,
            column: 10
          }
        }, {
          start: {
            line: 21,
            column: 2
          },
          end: {
            line: 42,
            column: 4
          }
        }],
        line: 20
      },
      "1": {
        loc: {
          start: {
            line: 27,
            column: 15
          },
          end: {
            line: 27,
            column: 27
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 27,
            column: 15
          },
          end: {
            line: 27,
            column: 21
          }
        }, {
          start: {
            line: 27,
            column: 25
          },
          end: {
            line: 27,
            column: 27
          }
        }],
        line: 27
      },
      "2": {
        loc: {
          start: {
            line: 34,
            column: 8
          },
          end: {
            line: 38,
            column: 9
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 34,
            column: 8
          },
          end: {
            line: 38,
            column: 9
          }
        }, {
          start: {
            line: 34,
            column: 8
          },
          end: {
            line: 38,
            column: 9
          }
        }],
        line: 34
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
      "9": 0
    },
    f: {
      "0": 0,
      "1": 0,
      "2": 0
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

/* eslint-env node */
const plugin = (cov_1v9xge2pzv.s[0]++, (cov_1v9xge2pzv.b[0][0]++, true) && (cov_1v9xge2pzv.b[0][1]++, App.createPlugin({
  deps: {
    emitter: UniversalEvents.UniversalEventsToken,
    config: UniversalLoggerConfigToken.optional
  },
  provides: ({
    emitter,
    config
  }) => {
    cov_1v9xge2pzv.f[0]++;
    cov_1v9xge2pzv.s[1]++;
    config = (cov_1v9xge2pzv.b[1][0]++, config) || (cov_1v9xge2pzv.b[1][1]++, {});
    const logger = (cov_1v9xge2pzv.s[2]++, winston.createLogger(config));
    cov_1v9xge2pzv.s[3]++;
    emitter.on('universal-log', ({
      level,
      args
    }) => {
      cov_1v9xge2pzv.f[1]++;
      cov_1v9xge2pzv.s[4]++;
      logger[level](...args);
    });

    class UniversalLogger {}

    cov_1v9xge2pzv.s[5]++;

    for (const key in logger) {
      cov_1v9xge2pzv.s[6]++;

      if (typeof logger[key] === 'function') {
        cov_1v9xge2pzv.b[2][0]++;
        cov_1v9xge2pzv.s[7]++;

        // $FlowFixMe
        UniversalLogger.prototype[key] = (...args) => {
          cov_1v9xge2pzv.f[2]++;
          cov_1v9xge2pzv.s[8]++;
          return emitter.emit('universal-log', {
            args,
            level: key,
            source: 'server'
          });
        };
      } else {
        cov_1v9xge2pzv.b[2][1]++;
      }
    }

    cov_1v9xge2pzv.s[9]++;
    return new UniversalLogger();
  }
})));

/** Copyright (c) 2018 Uber Technologies, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */
test('Server logger', async t => {
  t.plan(4);

  class Transport extends TransportStream {
    constructor() {
      super();
      this.name = 'test-transport';
    }

    log({
      level,
      message
    }) {
      t.equals(level, 'info', 'level is ok');
      t.equals(message, 'test message', 'message is ok');
    }

  }

  const app = new App__default('element', el => el);
  app.register(UniversalEvents.UniversalEventsToken, UniversalEvents__default);
  app.register(fusionTokens.LoggerToken, plugin);
  app.register(UniversalLoggerConfigToken, {
    transports: [new Transport()]
  });
  app.middleware({
    events: UniversalEvents.UniversalEventsToken,
    logger: fusionTokens.LoggerToken
  }, ({
    events,
    logger
  }) => {
    events.on('universal-log', ({
      args,
      level
    }) => {
      t.equals(args[0], 'test message', 'all logs are passed through event emitter');
    });
    t.ok(logger);
    logger.info('test message');
    return (ctx, next) => next();
  });
  fusionTestUtils.getSimulator(app);
});
test('Server logger listening on events', async t => {
  let called = false;

  class Transport extends TransportStream {
    constructor() {
      super();
      this.name = 'test-transport';
    }

    log({
      level,
      message,
      hello
    }) {
      t.equals(level, 'info', 'level is ok');
      t.equals(message, 'test', 'message is ok');
      t.equals(message, 'test', 'message is ok');
      t.equals(hello, 'world', 'meta is ok');
      called = true;
    }

  }

  const app = new App__default('element', el => el);
  app.register(UniversalEvents.UniversalEventsToken, UniversalEvents__default);
  app.register(fusionTokens.LoggerToken, plugin);
  app.register(UniversalLoggerConfigToken, {
    transports: [new Transport()]
  });
  app.middleware({
    events: UniversalEvents.UniversalEventsToken
  }, ({
    events
  }) => {
    events.emit('universal-log', {
      level: 'info',
      args: ['test', {
        hello: 'world'
      }]
    });
    return (ctx, next) => next();
  });
  fusionTestUtils.getSimulator(app);
  t.equals(called, true, 'called');
  t.end();
});
//# sourceMappingURL=node.js.map
