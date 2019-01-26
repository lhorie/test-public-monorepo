'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));
var fusionCore = require('fusion-core');
var Helmet = require('react-helmet-async');
var Helmet__default = _interopDefault(Helmet);
var App = _interopDefault(require('fusion-react'));
var fs = _interopDefault(require('fs'));
var fusionTestUtils = require('fusion-test-utils');
var test = _interopDefault(require('tape-cup'));

var cov_24ogd5okl2 = function () {
  var path = "/Users/lhorie/Documents/test-private-monorepo/public/fusion-plugin-react-helmet-async/src/server.js",
      hash = "68d594c107db9d24d9b22a775348d6933c763bae",
      Function = function () {}.constructor,
      global = new Function('return this')(),
      gcv = "__coverage__",
      coverageData = {
    path: "/Users/lhorie/Documents/test-private-monorepo/public/fusion-plugin-react-helmet-async/src/server.js",
    statementMap: {
      "0": {
        start: {
          line: 15,
          column: 13
        },
        end: {
          line: 15,
          column: 68
        }
      },
      "1": {
        start: {
          line: 18,
          column: 2
        },
        end: {
          line: 42,
          column: 4
        }
      },
      "2": {
        start: {
          line: 21,
          column: 6
        },
        end: {
          line: 40,
          column: 8
        }
      },
      "3": {
        start: {
          line: 22,
          column: 8
        },
        end: {
          line: 24,
          column: 9
        }
      },
      "4": {
        start: {
          line: 23,
          column: 10
        },
        end: {
          line: 23,
          column: 24
        }
      },
      "5": {
        start: {
          line: 25,
          column: 30
        },
        end: {
          line: 25,
          column: 32
        }
      },
      "6": {
        start: {
          line: 26,
          column: 8
        },
        end: {
          line: 28,
          column: 10
        }
      },
      "7": {
        start: {
          line: 29,
          column: 8
        },
        end: {
          line: 29,
          column: 21
        }
      },
      "8": {
        start: {
          line: 30,
          column: 25
        },
        end: {
          line: 30,
          column: 38
        }
      },
      "9": {
        start: {
          line: 31,
          column: 8
        },
        end: {
          line: 39,
          column: 9
        }
      },
      "10": {
        start: {
          line: 32,
          column: 10
        },
        end: {
          line: 35,
          column: 39
        }
      },
      "11": {
        start: {
          line: 36,
          column: 10
        },
        end: {
          line: 38,
          column: 13
        }
      },
      "12": {
        start: {
          line: 37,
          column: 12
        },
        end: {
          line: 37,
          column: 79
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 20,
            column: 16
          },
          end: {
            line: 20,
            column: 17
          }
        },
        loc: {
          start: {
            line: 20,
            column: 22
          },
          end: {
            line: 41,
            column: 5
          }
        },
        line: 20
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 21,
            column: 13
          },
          end: {
            line: 21,
            column: 14
          }
        },
        loc: {
          start: {
            line: 21,
            column: 34
          },
          end: {
            line: 40,
            column: 7
          }
        },
        line: 21
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 36,
            column: 23
          },
          end: {
            line: 36,
            column: 24
          }
        },
        loc: {
          start: {
            line: 36,
            column: 30
          },
          end: {
            line: 38,
            column: 11
          }
        },
        line: 36
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 18,
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
            line: 18,
            column: 2
          },
          end: {
            line: 18,
            column: 10
          }
        }, {
          start: {
            line: 19,
            column: 2
          },
          end: {
            line: 42,
            column: 4
          }
        }],
        line: 18
      },
      "1": {
        loc: {
          start: {
            line: 22,
            column: 8
          },
          end: {
            line: 24,
            column: 9
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 22,
            column: 8
          },
          end: {
            line: 24,
            column: 9
          }
        }, {
          start: {
            line: 22,
            column: 8
          },
          end: {
            line: 24,
            column: 9
          }
        }],
        line: 22
      },
      "2": {
        loc: {
          start: {
            line: 31,
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
            line: 31,
            column: 8
          },
          end: {
            line: 39,
            column: 9
          }
        }, {
          start: {
            line: 31,
            column: 8
          },
          end: {
            line: 39,
            column: 9
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
      "12": 0
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
const keys = (cov_24ogd5okl2.s[0]++, ['meta', 'link', 'style', 'base', 'noscript', 'script']);
const plugin = (cov_24ogd5okl2.s[1]++, (cov_24ogd5okl2.b[0][0]++, true) && (cov_24ogd5okl2.b[0][1]++, fusionCore.createPlugin({
  middleware: () => {
    cov_24ogd5okl2.f[0]++;
    cov_24ogd5okl2.s[2]++;
    return async (ctx, next) => {
      cov_24ogd5okl2.f[1]++;
      cov_24ogd5okl2.s[3]++;

      if (!ctx.element) {
        cov_24ogd5okl2.b[1][0]++;
        cov_24ogd5okl2.s[4]++;
        return next();
      } else {
        cov_24ogd5okl2.b[1][1]++;
      }

      const helmetContext = (cov_24ogd5okl2.s[5]++, {});
      cov_24ogd5okl2.s[6]++;
      ctx.element = React.createElement(Helmet.HelmetProvider, {
        context: helmetContext
      }, ctx.element);
      cov_24ogd5okl2.s[7]++;
      await next();
      const {
        helmet
      } = (cov_24ogd5okl2.s[8]++, helmetContext);
      cov_24ogd5okl2.s[9]++;

      if (helmet) {
        cov_24ogd5okl2.b[2][0]++;
        cov_24ogd5okl2.s[10]++;
        ctx.template.title = helmet.title.toString().replace('</title>', '').replace(/^<title.*>/, '');
        cov_24ogd5okl2.s[11]++;
        keys.forEach(key => {
          cov_24ogd5okl2.f[2]++;
          cov_24ogd5okl2.s[12]++;
          ctx.template.head.push(fusionCore.dangerouslySetHTML(helmet[key].toString()));
        });
      } else {
        cov_24ogd5okl2.b[2][1]++;
      }
    };
  }
})));

var cov_1uqwxsm72i = function () {
  var path = "/Users/lhorie/Documents/test-private-monorepo/public/fusion-plugin-react-helmet-async/src/browser.js",
      hash = "ab51f70c9043bb4c8a40f9ef94fd4560fe789b3a",
      Function = function () {}.constructor,
      global = new Function('return this')(),
      gcv = "__coverage__",
      coverageData = {
    path: "/Users/lhorie/Documents/test-private-monorepo/public/fusion-plugin-react-helmet-async/src/browser.js",
    statementMap: {
      "0": {
        start: {
          line: 16,
          column: 2
        },
        end: {
          line: 26,
          column: 4
        }
      },
      "1": {
        start: {
          line: 19,
          column: 6
        },
        end: {
          line: 24,
          column: 8
        }
      },
      "2": {
        start: {
          line: 20,
          column: 8
        },
        end: {
          line: 22,
          column: 10
        }
      },
      "3": {
        start: {
          line: 23,
          column: 8
        },
        end: {
          line: 23,
          column: 22
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 18,
            column: 16
          },
          end: {
            line: 18,
            column: 17
          }
        },
        loc: {
          start: {
            line: 18,
            column: 22
          },
          end: {
            line: 25,
            column: 5
          }
        },
        line: 18
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 19,
            column: 13
          },
          end: {
            line: 19,
            column: 14
          }
        },
        loc: {
          start: {
            line: 19,
            column: 28
          },
          end: {
            line: 24,
            column: 7
          }
        },
        line: 19
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
            line: 26,
            column: 4
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 16,
            column: 2
          },
          end: {
            line: 16,
            column: 13
          }
        }, {
          start: {
            line: 17,
            column: 2
          },
          end: {
            line: 26,
            column: 4
          }
        }],
        line: 16
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
      "1": 0
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
const plugin$1 = (cov_1uqwxsm72i.s[0]++, (cov_1uqwxsm72i.b[0][0]++, false) && (cov_1uqwxsm72i.b[0][1]++, fusionCore.createPlugin({
  middleware: () => {
    cov_1uqwxsm72i.f[0]++;
    cov_1uqwxsm72i.s[1]++;
    return (ctx, next) => {
      cov_1uqwxsm72i.f[1]++;
      cov_1uqwxsm72i.s[2]++;
      ctx.element = React.createElement(Helmet.HelmetProvider, {
        context: {}
      }, ctx.element);
      cov_1uqwxsm72i.s[3]++;
      return next();
    };
  }
})));

var cov_evzvzntfi = function () {
  var path = "/Users/lhorie/Documents/test-private-monorepo/public/fusion-plugin-react-helmet-async/src/index.js",
      hash = "460aa307b068e5928ebf5a04237601eba483ce33",
      Function = function () {}.constructor,
      global = new Function('return this')(),
      gcv = "__coverage__",
      coverageData = {
    path: "/Users/lhorie/Documents/test-private-monorepo/public/fusion-plugin-react-helmet-async/src/index.js",
    statementMap: {},
    fnMap: {},
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 14,
            column: 16
          },
          end: {
            line: 14,
            column: 54
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 14,
            column: 27
          },
          end: {
            line: 14,
            column: 39
          }
        }, {
          start: {
            line: 14,
            column: 42
          },
          end: {
            line: 14,
            column: 54
          }
        }],
        line: 14
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
var HelmetPlugin = (cov_evzvzntfi.b[0][0]++, plugin);

/** Copyright (c) 2018 Uber Technologies, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */
const name = 'Server';
test(`${name} side render`, async t => {
  const TestA = () => {
    return React.createElement("div", null, React.createElement(Helmet__default, {
      defaultTitle: "My Default Title"
    }, React.createElement("html", {
      lang: "en",
      amp: true
    }), React.createElement("body", {
      className: "root"
    }), React.createElement("title", {
      itemProp: "name",
      lang: "en"
    }, "My Title"), React.createElement("base", {
      target: "_blank",
      href: "http://mysite.com/"
    }), React.createElement("meta", {
      name: "description",
      content: "Helmet application"
    }), React.createElement("meta", {
      property: "og:type",
      content: "article"
    }), React.createElement("link", {
      rel: "canonical",
      href: "http://mysite.com/example"
    }), React.createElement("link", {
      rel: "apple-touch-icon",
      href: "http://mysite.com/img/apple-touch-icon-57x57.png"
    }), React.createElement("script", {
      src: "http://include.com/pathtojs.js",
      type: "text/javascript"
    }), React.createElement("script", {
      type: "application/ld+json"
    }, `
        {
            "@context": "http://schema.org"
        }
    `), React.createElement("noscript", null, `
        <link rel="stylesheet" type="text/css" href="foo.css" />
    `), React.createElement("style", {
      type: "text/css"
    }, `
        body {
            background-color: blue;
        }

        p {
            font-size: 12px;
        }
    `)));
  };

  const Root = React.createElement("div", null, React.createElement(TestA, null));
  let app;
  {
    app = new App(Root);
  }

  app.register(HelmetPlugin);
  app.middleware((ctx, next) => {
    ctx.nonce = 'test-nonce';
    return next();
  });
  const sim = fusionTestUtils.getSimulator(app);
  const ctx = await sim.render('/');

  {
    const fixtureFile = './src/__fixtures__/ssr1.html'; // Uncomment to regenerate fixture
    // fs.writeFileSync(fixtureFile, ctx.body);

    t.equal(ctx.body, fs.readFileSync(fixtureFile).toString());
  }

  t.end();
});

/** Copyright (c) 2018 Uber Technologies, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */
test('Non render request', async t => {
  const app = new App(React.createElement('div'), el => el);
  app.register(HelmetPlugin);
  const sim = fusionTestUtils.getSimulator(app);
  const ctx = await sim.request('/');
  t.equal(ctx.element, null, 'does not wrap ctx.element');
  t.end();
});
test('Render request with server side redirect', async t => {
  const app = new App(React.createElement('div'), el => el);
  app.register(HelmetPlugin);
  app.middleware((ctx, next) => {
    ctx.redirect('/test');
    return next();
  });
  const sim = fusionTestUtils.getSimulator(app);
  await sim.render('/');
  t.end();
});
//# sourceMappingURL=node.js.map
