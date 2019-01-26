'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var App = require('fusion-core');
var App__default = _interopDefault(App);
var locale = require('locale');
var fs = _interopDefault(require('fs'));
var path = _interopDefault(require('path'));
var querystring = _interopDefault(require('querystring'));
var fusionTokens = require('fusion-tokens');
var test = _interopDefault(require('tape-cup'));
var fusionTestUtils = require('fusion-test-utils');

var cov_232weh6eu0 = function () {
  var path$$1 = "/Users/lhorie/Documents/test-private-monorepo/public/fusion-plugin-i18n/src/tokens.js",
      hash = "33f3bf38dc623294555639ffdb80753e1fa2c1bc",
      Function = function () {}.constructor,
      global = new Function('return this')(),
      gcv = "__coverage__",
      coverageData = {
    path: "/Users/lhorie/Documents/test-private-monorepo/public/fusion-plugin-i18n/src/tokens.js",
    statementMap: {
      "0": {
        start: {
          line: 14,
          column: 54
        },
        end: {
          line: 16,
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
const I18nLoaderToken = (cov_232weh6eu0.s[0]++, App.createToken('I18nLoaderToken'));

var cov_15encjtjw0 = function () {
  var path$$1 = "/Users/lhorie/Documents/test-private-monorepo/public/fusion-plugin-i18n/src/loader.js",
      hash = "c7cc127783d4f09f6b9abc83b440e8a195c21958",
      Function = function () {}.constructor,
      global = new Function('return this')(),
      gcv = "__coverage__",
      coverageData = {
    path: "/Users/lhorie/Documents/test-private-monorepo/public/fusion-plugin-i18n/src/loader.js",
    statementMap: {
      "0": {
        start: {
          line: 28,
          column: 50
        },
        end: {
          line: 29,
          column: 32
        }
      },
      "1": {
        start: {
          line: 29,
          column: 2
        },
        end: {
          line: 29,
          column: 32
        }
      },
      "2": {
        start: {
          line: 31,
          column: 34
        },
        end: {
          line: 60,
          column: 1
        }
      },
      "3": {
        start: {
          line: 32,
          column: 18
        },
        end: {
          line: 38,
          column: 3
        }
      },
      "4": {
        start: {
          line: 33,
          column: 4
        },
        end: {
          line: 37,
          column: 5
        }
      },
      "5": {
        start: {
          line: 34,
          column: 6
        },
        end: {
          line: 34,
          column: 34
        }
      },
      "6": {
        start: {
          line: 36,
          column: 6
        },
        end: {
          line: 36,
          column: 16
        }
      },
      "7": {
        start: {
          line: 39,
          column: 15
        },
        end: {
          line: 39,
          column: 31
        }
      },
      "8": {
        start: {
          line: 40,
          column: 18
        },
        end: {
          line: 42,
          column: 39
        }
      },
      "9": {
        start: {
          line: 41,
          column: 17
        },
        end: {
          line: 41,
          column: 33
        }
      },
      "10": {
        start: {
          line: 42,
          column: 14
        },
        end: {
          line: 42,
          column: 38
        }
      },
      "11": {
        start: {
          line: 43,
          column: 15
        },
        end: {
          line: 49,
          column: 8
        }
      },
      "12": {
        start: {
          line: 44,
          column: 25
        },
        end: {
          line: 44,
          column: 43
        }
      },
      "13": {
        start: {
          line: 45,
          column: 4
        },
        end: {
          line: 47,
          column: 6
        }
      },
      "14": {
        start: {
          line: 48,
          column: 4
        },
        end: {
          line: 48,
          column: 16
        }
      },
      "15": {
        start: {
          line: 50,
          column: 27
        },
        end: {
          line: 50,
          column: 47
        }
      },
      "16": {
        start: {
          line: 52,
          column: 2
        },
        end: {
          line: 59,
          column: 4
        }
      },
      "17": {
        start: {
          line: 54,
          column: 30
        },
        end: {
          line: 54,
          column: 62
        }
      },
      "18": {
        start: {
          line: 55,
          column: 21
        },
        end: {
          line: 55,
          column: 59
        }
      },
      "19": {
        start: {
          line: 56,
          column: 51
        },
        end: {
          line: 56,
          column: 74
        }
      },
      "20": {
        start: {
          line: 57,
          column: 6
        },
        end: {
          line: 57,
          column: 36
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 28,
            column: 50
          },
          end: {
            line: 28,
            column: 51
          }
        },
        loc: {
          start: {
            line: 29,
            column: 2
          },
          end: {
            line: 29,
            column: 32
          }
        },
        line: 29
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 31,
            column: 34
          },
          end: {
            line: 31,
            column: 35
          }
        },
        loc: {
          start: {
            line: 31,
            column: 78
          },
          end: {
            line: 60,
            column: 1
          }
        },
        line: 31
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 32,
            column: 18
          },
          end: {
            line: 32,
            column: 19
          }
        },
        loc: {
          start: {
            line: 32,
            column: 26
          },
          end: {
            line: 38,
            column: 3
          }
        },
        line: 32
      },
      "3": {
        name: "(anonymous_3)",
        decl: {
          start: {
            line: 41,
            column: 12
          },
          end: {
            line: 41,
            column: 13
          }
        },
        loc: {
          start: {
            line: 41,
            column: 17
          },
          end: {
            line: 41,
            column: 33
          }
        },
        line: 41
      },
      "4": {
        name: "(anonymous_4)",
        decl: {
          start: {
            line: 42,
            column: 9
          },
          end: {
            line: 42,
            column: 10
          }
        },
        loc: {
          start: {
            line: 42,
            column: 14
          },
          end: {
            line: 42,
            column: 38
          }
        },
        line: 42
      },
      "5": {
        name: "(anonymous_5)",
        decl: {
          start: {
            line: 43,
            column: 30
          },
          end: {
            line: 43,
            column: 31
          }
        },
        loc: {
          start: {
            line: 43,
            column: 48
          },
          end: {
            line: 49,
            column: 3
          }
        },
        line: 43
      },
      "6": {
        name: "(anonymous_6)",
        decl: {
          start: {
            line: 53,
            column: 18
          },
          end: {
            line: 53,
            column: 19
          }
        },
        loc: {
          start: {
            line: 53,
            column: 25
          },
          end: {
            line: 58,
            column: 5
          }
        },
        line: 53
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 31,
            column: 35
          },
          end: {
            line: 31,
            column: 73
          }
        },
        type: "default-arg",
        locations: [{
          start: {
            line: 31,
            column: 52
          },
          end: {
            line: 31,
            column: 73
          }
        }],
        line: 31
      },
      "1": {
        loc: {
          start: {
            line: 62,
            column: 18
          },
          end: {
            line: 62,
            column: 42
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 62,
            column: 29
          },
          end: {
            line: 62,
            column: 35
          }
        }, {
          start: {
            line: 62,
            column: 38
          },
          end: {
            line: 62,
            column: 42
          }
        }],
        line: 62
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
      "5": 0,
      "6": 0
    },
    b: {
      "0": [0],
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

/** Copyright (c) 2018 Uber Technologies, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */
cov_15encjtjw0.s[0]++;

const defaultResolveLocales = ctx => {
  cov_15encjtjw0.f[0]++;
  cov_15encjtjw0.s[1]++;
  return ctx.headers['accept-language'];
};

cov_15encjtjw0.s[2]++;

const loader = (resolveLocales = (cov_15encjtjw0.b[0][0]++, defaultResolveLocales)) => {
  cov_15encjtjw0.f[1]++;
  cov_15encjtjw0.s[3]++;

  const readDir = root => {
    cov_15encjtjw0.f[2]++;
    cov_15encjtjw0.s[4]++;

    try {
      cov_15encjtjw0.s[5]++;
      return fs.readdirSync(root);
    } catch (e) {
      cov_15encjtjw0.s[6]++;
      return [];
    }
  };

  const root = (cov_15encjtjw0.s[7]++, './translations');
  const locales = (cov_15encjtjw0.s[8]++, readDir(root).filter(p => {
    cov_15encjtjw0.f[3]++;
    cov_15encjtjw0.s[9]++;
    return p.match(/json$/);
  }).map(p => {
    cov_15encjtjw0.f[4]++;
    cov_15encjtjw0.s[10]++;
    return p.replace(/\.json$/, '');
  }));
  const data = (cov_15encjtjw0.s[11]++, locales.reduce((memo, locale$$1) => {
    cov_15encjtjw0.f[5]++;
    const parsedLocale = (cov_15encjtjw0.s[12]++, new locale.Locale(locale$$1));
    cov_15encjtjw0.s[13]++;
    memo[parsedLocale.normalized] = JSON.parse(fs.readFileSync(path.join(root, locale$$1 + '.json'), 'utf8'));
    cov_15encjtjw0.s[14]++;
    return memo;
  }, {}));
  const supportedLocales = (cov_15encjtjw0.s[15]++, new locale.Locales(locales));
  cov_15encjtjw0.s[16]++;
  return {
    from: App.memoize(ctx => {
      cov_15encjtjw0.f[6]++;
      const expectedLocales = (cov_15encjtjw0.s[17]++, new locale.Locales(resolveLocales(ctx)));
      const locale$$1 = (cov_15encjtjw0.s[18]++, expectedLocales.best(supportedLocales));
      const translations = (cov_15encjtjw0.s[19]++, data[locale$$1.normalized]);
      cov_15encjtjw0.s[20]++;
      return {
        translations,
        locale: locale$$1
      };
    })
  };
};

var createLoader = (cov_15encjtjw0.b[1][0]++, loader);

var cov_27zyhb3ozx = function () {
  var path$$1 = "/Users/lhorie/Documents/test-private-monorepo/public/fusion-plugin-i18n/src/node.js",
      hash = "cd1e86b85e1d2d4b2fa263cc5f9e17452fdbf9a2",
      Function = function () {}.constructor,
      global = new Function('return this')(),
      gcv = "__coverage__",
      coverageData = {
    path: "/Users/lhorie/Documents/test-private-monorepo/public/fusion-plugin-i18n/src/node.js",
    statementMap: {
      "0": {
        start: {
          line: 26,
          column: 40
        },
        end: {
          line: 111,
          column: 4
        }
      },
      "1": {
        start: {
          line: 27,
          column: 2
        },
        end: {
          line: 111,
          column: 4
        }
      },
      "2": {
        start: {
          line: 37,
          column: 10
        },
        end: {
          line: 39,
          column: 11
        }
      },
      "3": {
        start: {
          line: 38,
          column: 12
        },
        end: {
          line: 38,
          column: 36
        }
      },
      "4": {
        start: {
          line: 40,
          column: 41
        },
        end: {
          line: 40,
          column: 57
        }
      },
      "5": {
        start: {
          line: 42,
          column: 10
        },
        end: {
          line: 42,
          column: 43
        }
      },
      "6": {
        start: {
          line: 43,
          column: 10
        },
        end: {
          line: 43,
          column: 31
        }
      },
      "7": {
        start: {
          line: 47,
          column: 27
        },
        end: {
          line: 47,
          column: 49
        }
      },
      "8": {
        start: {
          line: 48,
          column: 10
        },
        end: {
          line: 50,
          column: 18
        }
      },
      "9": {
        start: {
          line: 49,
          column: 55
        },
        end: {
          line: 49,
          column: 72
        }
      },
      "10": {
        start: {
          line: 54,
          column: 22
        },
        end: {
          line: 54,
          column: 59
        }
      },
      "11": {
        start: {
          line: 54,
          column: 44
        },
        end: {
          line: 54,
          column: 57
        }
      },
      "12": {
        start: {
          line: 55,
          column: 6
        },
        end: {
          line: 55,
          column: 21
        }
      },
      "13": {
        start: {
          line: 60,
          column: 34
        },
        end: {
          line: 60,
          column: 69
        }
      },
      "14": {
        start: {
          line: 61,
          column: 6
        },
        end: {
          line: 109,
          column: 8
        }
      },
      "15": {
        start: {
          line: 62,
          column: 8
        },
        end: {
          line: 108,
          column: 9
        }
      },
      "16": {
        start: {
          line: 63,
          column: 10
        },
        end: {
          line: 63,
          column: 23
        }
      },
      "17": {
        start: {
          line: 64,
          column: 23
        },
        end: {
          line: 64,
          column: 39
        }
      },
      "18": {
        start: {
          line: 67,
          column: 49
        },
        end: {
          line: 70,
          column: 11
        }
      },
      "19": {
        start: {
          line: 71,
          column: 31
        },
        end: {
          line: 71,
          column: 33
        }
      },
      "20": {
        start: {
          line: 72,
          column: 10
        },
        end: {
          line: 79,
          column: 13
        }
      },
      "21": {
        start: {
          line: 73,
          column: 25
        },
        end: {
          line: 75,
          column: 13
        }
      },
      "22": {
        start: {
          line: 76,
          column: 12
        },
        end: {
          line: 78,
          column: 15
        }
      },
      "23": {
        start: {
          line: 77,
          column: 14
        },
        end: {
          line: 77,
          column: 78
        }
      },
      "24": {
        start: {
          line: 81,
          column: 10
        },
        end: {
          line: 83,
          column: 11
        }
      },
      "25": {
        start: {
          line: 82,
          column: 12
        },
        end: {
          line: 82,
          column: 53
        }
      },
      "26": {
        start: {
          line: 85,
          column: 12
        },
        end: {
          line: 85,
          column: 76
        }
      },
      "27": {
        start: {
          line: 86,
          column: 29
        },
        end: {
          line: 86,
          column: 79
        }
      },
      "28": {
        start: {
          line: 87,
          column: 25
        },
        end: {
          line: 91,
          column: 11
        }
      },
      "29": {
        start: {
          line: 92,
          column: 10
        },
        end: {
          line: 92,
          column: 41
        }
      },
      "30": {
        start: {
          line: 93,
          column: 15
        },
        end: {
          line: 108,
          column: 9
        }
      },
      "31": {
        start: {
          line: 94,
          column: 23
        },
        end: {
          line: 94,
          column: 39
        }
      },
      "32": {
        start: {
          line: 95,
          column: 22
        },
        end: {
          line: 95,
          column: 66
        }
      },
      "33": {
        start: {
          line: 96,
          column: 25
        },
        end: {
          line: 96,
          column: 67
        }
      },
      "34": {
        start: {
          line: 96,
          column: 50
        },
        end: {
          line: 96,
          column: 66
        }
      },
      "35": {
        start: {
          line: 97,
          column: 31
        },
        end: {
          line: 97,
          column: 33
        }
      },
      "36": {
        start: {
          line: 98,
          column: 10
        },
        end: {
          line: 103,
          column: 13
        }
      },
      "37": {
        start: {
          line: 99,
          column: 25
        },
        end: {
          line: 99,
          column: 74
        }
      },
      "38": {
        start: {
          line: 100,
          column: 12
        },
        end: {
          line: 102,
          column: 15
        }
      },
      "39": {
        start: {
          line: 101,
          column: 14
        },
        end: {
          line: 101,
          column: 78
        }
      },
      "40": {
        start: {
          line: 104,
          column: 10
        },
        end: {
          line: 104,
          column: 34
        }
      },
      "41": {
        start: {
          line: 105,
          column: 10
        },
        end: {
          line: 105,
          column: 24
        }
      },
      "42": {
        start: {
          line: 107,
          column: 10
        },
        end: {
          line: 107,
          column: 24
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 26,
            column: 40
          },
          end: {
            line: 26,
            column: 41
          }
        },
        loc: {
          start: {
            line: 27,
            column: 2
          },
          end: {
            line: 111,
            column: 4
          }
        },
        line: 27
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 31,
            column: 14
          },
          end: {
            line: 31,
            column: 15
          }
        },
        loc: {
          start: {
            line: 31,
            column: 28
          },
          end: {
            line: 56,
            column: 5
          }
        },
        line: 31
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 36,
            column: 8
          },
          end: {
            line: 36,
            column: 9
          }
        },
        loc: {
          start: {
            line: 36,
            column: 25
          },
          end: {
            line: 44,
            column: 9
          }
        },
        line: 36
      },
      "3": {
        name: "(anonymous_3)",
        decl: {
          start: {
            line: 45,
            column: 8
          },
          end: {
            line: 45,
            column: 9
          }
        },
        loc: {
          start: {
            line: 45,
            column: 21
          },
          end: {
            line: 45,
            column: 23
          }
        },
        line: 45
      },
      "4": {
        name: "(anonymous_4)",
        decl: {
          start: {
            line: 46,
            column: 8
          },
          end: {
            line: 46,
            column: 9
          }
        },
        loc: {
          start: {
            line: 46,
            column: 44
          },
          end: {
            line: 51,
            column: 9
          }
        },
        line: 46
      },
      "5": {
        name: "(anonymous_5)",
        decl: {
          start: {
            line: 49,
            column: 45
          },
          end: {
            line: 49,
            column: 46
          }
        },
        loc: {
          start: {
            line: 49,
            column: 55
          },
          end: {
            line: 49,
            column: 72
          }
        },
        line: 49
      },
      "6": {
        name: "(anonymous_6)",
        decl: {
          start: {
            line: 54,
            column: 37
          },
          end: {
            line: 54,
            column: 38
          }
        },
        loc: {
          start: {
            line: 54,
            column: 44
          },
          end: {
            line: 54,
            column: 57
          }
        },
        line: 54
      },
      "7": {
        name: "(anonymous_7)",
        decl: {
          start: {
            line: 57,
            column: 16
          },
          end: {
            line: 57,
            column: 17
          }
        },
        loc: {
          start: {
            line: 57,
            column: 31
          },
          end: {
            line: 110,
            column: 5
          }
        },
        line: 57
      },
      "8": {
        name: "(anonymous_8)",
        decl: {
          start: {
            line: 61,
            column: 13
          },
          end: {
            line: 61,
            column: 14
          }
        },
        loc: {
          start: {
            line: 61,
            column: 34
          },
          end: {
            line: 109,
            column: 7
          }
        },
        line: 61
      },
      "9": {
        name: "(anonymous_9)",
        decl: {
          start: {
            line: 72,
            column: 25
          },
          end: {
            line: 72,
            column: 26
          }
        },
        loc: {
          start: {
            line: 72,
            column: 31
          },
          end: {
            line: 79,
            column: 11
          }
        },
        line: 72
      },
      "10": {
        name: "(anonymous_10)",
        decl: {
          start: {
            line: 76,
            column: 25
          },
          end: {
            line: 76,
            column: 26
          }
        },
        loc: {
          start: {
            line: 76,
            column: 32
          },
          end: {
            line: 78,
            column: 13
          }
        },
        line: 76
      },
      "11": {
        name: "(anonymous_11)",
        decl: {
          start: {
            line: 96,
            column: 44
          },
          end: {
            line: 96,
            column: 45
          }
        },
        loc: {
          start: {
            line: 96,
            column: 50
          },
          end: {
            line: 96,
            column: 66
          }
        },
        line: 96
      },
      "12": {
        name: "(anonymous_12)",
        decl: {
          start: {
            line: 98,
            column: 25
          },
          end: {
            line: 98,
            column: 26
          }
        },
        loc: {
          start: {
            line: 98,
            column: 31
          },
          end: {
            line: 103,
            column: 11
          }
        },
        line: 98
      },
      "13": {
        name: "(anonymous_13)",
        decl: {
          start: {
            line: 100,
            column: 25
          },
          end: {
            line: 100,
            column: 26
          }
        },
        loc: {
          start: {
            line: 100,
            column: 32
          },
          end: {
            line: 102,
            column: 13
          }
        },
        line: 100
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 37,
            column: 10
          },
          end: {
            line: 39,
            column: 11
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 37,
            column: 10
          },
          end: {
            line: 39,
            column: 11
          }
        }, {
          start: {
            line: 37,
            column: 10
          },
          end: {
            line: 39,
            column: 11
          }
        }],
        line: 37
      },
      "1": {
        loc: {
          start: {
            line: 46,
            column: 23
          },
          end: {
            line: 46,
            column: 42
          }
        },
        type: "default-arg",
        locations: [{
          start: {
            line: 46,
            column: 40
          },
          end: {
            line: 46,
            column: 42
          }
        }],
        line: 46
      },
      "2": {
        loc: {
          start: {
            line: 48,
            column: 17
          },
          end: {
            line: 50,
            column: 17
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 49,
            column: 14
          },
          end: {
            line: 49,
            column: 73
          }
        }, {
          start: {
            line: 50,
            column: 14
          },
          end: {
            line: 50,
            column: 17
          }
        }],
        line: 48
      },
      "3": {
        loc: {
          start: {
            line: 62,
            column: 8
          },
          end: {
            line: 108,
            column: 9
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 62,
            column: 8
          },
          end: {
            line: 108,
            column: 9
          }
        }, {
          start: {
            line: 62,
            column: 8
          },
          end: {
            line: 108,
            column: 9
          }
        }],
        line: 62
      },
      "4": {
        loc: {
          start: {
            line: 77,
            column: 34
          },
          end: {
            line: 77,
            column: 77
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 77,
            column: 34
          },
          end: {
            line: 77,
            column: 51
          }
        }, {
          start: {
            line: 77,
            column: 55
          },
          end: {
            line: 77,
            column: 77
          }
        }],
        line: 77
      },
      "5": {
        loc: {
          start: {
            line: 81,
            column: 10
          },
          end: {
            line: 83,
            column: 11
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 81,
            column: 10
          },
          end: {
            line: 83,
            column: 11
          }
        }, {
          start: {
            line: 81,
            column: 10
          },
          end: {
            line: 83,
            column: 11
          }
        }],
        line: 81
      },
      "6": {
        loc: {
          start: {
            line: 85,
            column: 12
          },
          end: {
            line: 85,
            column: 76
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 85,
            column: 46
          },
          end: {
            line: 85,
            column: 57
          }
        }, {
          start: {
            line: 85,
            column: 60
          },
          end: {
            line: 85,
            column: 76
          }
        }],
        line: 85
      },
      "7": {
        loc: {
          start: {
            line: 93,
            column: 15
          },
          end: {
            line: 108,
            column: 9
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 93,
            column: 15
          },
          end: {
            line: 108,
            column: 9
          }
        }, {
          start: {
            line: 93,
            column: 15
          },
          end: {
            line: 108,
            column: 9
          }
        }],
        line: 93
      },
      "8": {
        loc: {
          start: {
            line: 95,
            column: 22
          },
          end: {
            line: 95,
            column: 66
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 95,
            column: 22
          },
          end: {
            line: 95,
            column: 60
          }
        }, {
          start: {
            line: 95,
            column: 64
          },
          end: {
            line: 95,
            column: 66
          }
        }],
        line: 95
      },
      "9": {
        loc: {
          start: {
            line: 101,
            column: 34
          },
          end: {
            line: 101,
            column: 77
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 101,
            column: 34
          },
          end: {
            line: 101,
            column: 51
          }
        }, {
          start: {
            line: 101,
            column: 55
          },
          end: {
            line: 101,
            column: 77
          }
        }],
        line: 101
      },
      "10": {
        loc: {
          start: {
            line: 113,
            column: 17
          },
          end: {
            line: 113,
            column: 44
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 113,
            column: 17
          },
          end: {
            line: 113,
            column: 25
          }
        }, {
          start: {
            line: 113,
            column: 29
          },
          end: {
            line: 113,
            column: 44
          }
        }],
        line: 113
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
      "42": 0
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
      "10": [0, 0]
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
cov_27zyhb3ozx.s[0]++;

const pluginFactory = () => {
  cov_27zyhb3ozx.f[0]++;
  cov_27zyhb3ozx.s[1]++;
  return App.createPlugin({
    deps: {
      loader: I18nLoaderToken.optional
    },
    provides: ({
      loader
    }) => {
      cov_27zyhb3ozx.f[1]++;

      class I18n {
        constructor(ctx) {
          cov_27zyhb3ozx.f[2]++;
          cov_27zyhb3ozx.s[2]++;

          if (!loader) {
            cov_27zyhb3ozx.b[0][0]++;
            cov_27zyhb3ozx.s[3]++;
            loader = createLoader();
          } else {
            cov_27zyhb3ozx.b[0][1]++;
          }

          const {
            translations,
            locale: locale$$1
          } = (cov_27zyhb3ozx.s[4]++, loader.from(ctx)); // eslint-disable-next-line no-console

          cov_27zyhb3ozx.s[5]++;
          this.translations = translations;
          cov_27zyhb3ozx.s[6]++;
          this.locale = locale$$1;
        }

        async load() {
          cov_27zyhb3ozx.f[3]++;
        } //mirror client API


        translate(key, interpolations = (cov_27zyhb3ozx.b[1][0]++, {})) {
          cov_27zyhb3ozx.f[4]++;
          const template = (cov_27zyhb3ozx.s[7]++, this.translations[key]);
          cov_27zyhb3ozx.s[8]++;
          return template != null ? (cov_27zyhb3ozx.b[2][0]++, template.replace(/\${(.*?)}/g, (_, k) => {
            cov_27zyhb3ozx.f[5]++;
            cov_27zyhb3ozx.s[9]++;
            return interpolations[k];
          })) : (cov_27zyhb3ozx.b[2][1]++, key);
        }

      }

      const service = (cov_27zyhb3ozx.s[10]++, {
        from: App.memoize(ctx => {
          cov_27zyhb3ozx.f[6]++;
          cov_27zyhb3ozx.s[11]++;
          return new I18n(ctx);
        })
      });
      cov_27zyhb3ozx.s[12]++;
      return service;
    },
    middleware: (_, plugin) => {
      cov_27zyhb3ozx.f[7]++;
      // TODO(#4) refactor: this currently depends on babel plugins in framework's webpack config.
      // Ideally these babel plugins should be part of this package, not hard-coded in framework core
      const chunkTranslationMap = (cov_27zyhb3ozx.s[13]++, require('../chunk-translation-map'));
      cov_27zyhb3ozx.s[14]++;
      return async (ctx, next) => {
        cov_27zyhb3ozx.f[8]++;
        cov_27zyhb3ozx.s[15]++;

        if (ctx.element) {
          cov_27zyhb3ozx.b[3][0]++;
          cov_27zyhb3ozx.s[16]++;
          await next();
          const i18n = (cov_27zyhb3ozx.s[17]++, plugin.from(ctx)); // get the webpack chunks that are used and serialize their translations

          const chunks = (cov_27zyhb3ozx.s[18]++, [...ctx.syncChunks, ...ctx.preloadChunks]);
          const translations = (cov_27zyhb3ozx.s[19]++, {});
          cov_27zyhb3ozx.s[20]++;
          chunks.forEach(id => {
            cov_27zyhb3ozx.f[9]++;
            const keys = (cov_27zyhb3ozx.s[21]++, Array.from(chunkTranslationMap.translationsForChunk(id)));
            cov_27zyhb3ozx.s[22]++;
            keys.forEach(key => {
              cov_27zyhb3ozx.f[10]++;
              cov_27zyhb3ozx.s[23]++;
              translations[key] = (cov_27zyhb3ozx.b[4][0]++, i18n.translations) && (cov_27zyhb3ozx.b[4][1]++, i18n.translations[key]);
            });
          }); // i18n.locale is actually a locale.Locale instance

          cov_27zyhb3ozx.s[24]++;

          if (!i18n.locale) {
            cov_27zyhb3ozx.b[5][0]++;
            cov_27zyhb3ozx.s[25]++;
            throw new Error('i18n.locale was empty');
          } else {
            cov_27zyhb3ozx.b[5][1]++;
          }

          const localeCode = (cov_27zyhb3ozx.s[26]++, typeof i18n.locale === 'string' ? (cov_27zyhb3ozx.b[6][0]++, i18n.locale) : (cov_27zyhb3ozx.b[6][1]++, i18n.locale.code));
          const serialized = (cov_27zyhb3ozx.s[27]++, JSON.stringify({
            chunks,
            localeCode,
            translations
          }));
          const script = (cov_27zyhb3ozx.s[28]++, App.html`
            <script type="application/json" id="__TRANSLATIONS__">
              ${serialized}
            </script>
          `); // consumed by ./browser

          cov_27zyhb3ozx.s[29]++;
          ctx.template.body.push(script);
        } else {
          cov_27zyhb3ozx.b[3][1]++;
          cov_27zyhb3ozx.s[30]++;

          if (ctx.path === '/_translations') {
            cov_27zyhb3ozx.b[7][0]++;
            const i18n = (cov_27zyhb3ozx.s[31]++, plugin.from(ctx));
            const ids = (cov_27zyhb3ozx.s[32]++, (cov_27zyhb3ozx.b[8][0]++, querystring.parse(ctx.querystring).ids) || (cov_27zyhb3ozx.b[8][1]++, ''));
            const chunks = (cov_27zyhb3ozx.s[33]++, ids.split(',').map(id => {
              cov_27zyhb3ozx.f[11]++;
              cov_27zyhb3ozx.s[34]++;
              return parseInt(id, 10);
            }));
            const translations = (cov_27zyhb3ozx.s[35]++, {});
            cov_27zyhb3ozx.s[36]++;
            chunks.forEach(id => {
              cov_27zyhb3ozx.f[12]++;
              const keys = (cov_27zyhb3ozx.s[37]++, [...chunkTranslationMap.translationsForChunk(id)]);
              cov_27zyhb3ozx.s[38]++;
              keys.forEach(key => {
                cov_27zyhb3ozx.f[13]++;
                cov_27zyhb3ozx.s[39]++;
                translations[key] = (cov_27zyhb3ozx.b[9][0]++, i18n.translations) && (cov_27zyhb3ozx.b[9][1]++, i18n.translations[key]);
              });
            });
            cov_27zyhb3ozx.s[40]++;
            ctx.body = translations;
            cov_27zyhb3ozx.s[41]++;
            return next();
          } else {
            cov_27zyhb3ozx.b[7][1]++;
            cov_27zyhb3ozx.s[42]++;
            return next();
          }
        }
      };
    }
  });
};

var I18n = (cov_27zyhb3ozx.b[10][0]++, true) && (cov_27zyhb3ozx.b[10][1]++, pluginFactory());

var cov_1o8xuz10yb = function () {
  var path$$1 = "/Users/lhorie/Documents/test-private-monorepo/public/fusion-plugin-i18n/src/browser.js",
      hash = "3962bf0c0953f3637d5ac731c65b18ce8ad12be8",
      Function = function () {}.constructor,
      global = new Function('return this')(),
      gcv = "__coverage__",
      coverageData = {
    path: "/Users/lhorie/Documents/test-private-monorepo/public/fusion-plugin-i18n/src/browser.js",
    statementMap: {
      "0": {
        start: {
          line: 26,
          column: 18
        },
        end: {
          line: 26,
          column: 61
        }
      },
      "1": {
        start: {
          line: 27,
          column: 2
        },
        end: {
          line: 31,
          column: 3
        }
      },
      "2": {
        start: {
          line: 28,
          column: 4
        },
        end: {
          line: 30,
          column: 6
        }
      },
      "3": {
        start: {
          line: 32,
          column: 2
        },
        end: {
          line: 38,
          column: 3
        }
      },
      "4": {
        start: {
          line: 33,
          column: 4
        },
        end: {
          line: 33,
          column: 53
        }
      },
      "5": {
        start: {
          line: 35,
          column: 4
        },
        end: {
          line: 37,
          column: 6
        }
      },
      "6": {
        start: {
          line: 46,
          column: 62
        },
        end: {
          line: 48,
          column: 1
        }
      },
      "7": {
        start: {
          line: 51,
          column: 40
        },
        end: {
          line: 117,
          column: 4
        }
      },
      "8": {
        start: {
          line: 52,
          column: 2
        },
        end: {
          line: 117,
          column: 4
        }
      },
      "9": {
        start: {
          line: 65,
          column: 12
        },
        end: {
          line: 65,
          column: 48
        }
      },
      "10": {
        start: {
          line: 66,
          column: 10
        },
        end: {
          line: 66,
          column: 76
        }
      },
      "11": {
        start: {
          line: 67,
          column: 10
        },
        end: {
          line: 67,
          column: 39
        }
      },
      "12": {
        start: {
          line: 68,
          column: 10
        },
        end: {
          line: 68,
          column: 51
        }
      },
      "13": {
        start: {
          line: 71,
          column: 27
        },
        end: {
          line: 73,
          column: 12
        }
      },
      "14": {
        start: {
          line: 72,
          column: 12
        },
        end: {
          line: 72,
          column: 53
        }
      },
      "15": {
        start: {
          line: 74,
          column: 28
        },
        end: {
          line: 82,
          column: 11
        }
      },
      "16": {
        start: {
          line: 83,
          column: 10
        },
        end: {
          line: 105,
          column: 11
        }
      },
      "17": {
        start: {
          line: 87,
          column: 12
        },
        end: {
          line: 87,
          column: 68
        }
      },
      "18": {
        start: {
          line: 89,
          column: 24
        },
        end: {
          line: 89,
          column: 42
        }
      },
      "19": {
        start: {
          line: 91,
          column: 12
        },
        end: {
          line: 104,
          column: 17
        }
      },
      "20": {
        start: {
          line: 92,
          column: 25
        },
        end: {
          line: 92,
          column: 33
        }
      },
      "21": {
        start: {
          line: 94,
          column: 16
        },
        end: {
          line: 94,
          column: 77
        }
      },
      "22": {
        start: {
          line: 94,
          column: 40
        },
        end: {
          line: 94,
          column: 77
        }
      },
      "23": {
        start: {
          line: 100,
          column: 16
        },
        end: {
          line: 102,
          column: 18
        }
      },
      "24": {
        start: {
          line: 101,
          column: 27
        },
        end: {
          line: 101,
          column: 57
        }
      },
      "25": {
        start: {
          line: 103,
          column: 16
        },
        end: {
          line: 103,
          column: 26
        }
      },
      "26": {
        start: {
          line: 108,
          column: 27
        },
        end: {
          line: 108,
          column: 51
        }
      },
      "27": {
        start: {
          line: 109,
          column: 10
        },
        end: {
          line: 111,
          column: 18
        }
      },
      "28": {
        start: {
          line: 110,
          column: 55
        },
        end: {
          line: 110,
          column: 72
        }
      },
      "29": {
        start: {
          line: 114,
          column: 19
        },
        end: {
          line: 114,
          column: 29
        }
      },
      "30": {
        start: {
          line: 115,
          column: 6
        },
        end: {
          line: 115,
          column: 32
        }
      },
      "31": {
        start: {
          line: 115,
          column: 26
        },
        end: {
          line: 115,
          column: 30
        }
      }
    },
    fnMap: {
      "0": {
        name: "loadTranslations",
        decl: {
          start: {
            line: 25,
            column: 9
          },
          end: {
            line: 25,
            column: 25
          }
        },
        loc: {
          start: {
            line: 25,
            column: 52
          },
          end: {
            line: 39,
            column: 1
          }
        },
        line: 25
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 51,
            column: 40
          },
          end: {
            line: 51,
            column: 41
          }
        },
        loc: {
          start: {
            line: 52,
            column: 2
          },
          end: {
            line: 117,
            column: 4
          }
        },
        line: 52
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 57,
            column: 14
          },
          end: {
            line: 57,
            column: 15
          }
        },
        loc: {
          start: {
            line: 57,
            column: 63
          },
          end: {
            line: 116,
            column: 5
          }
        },
        line: 57
      },
      "3": {
        name: "(anonymous_3)",
        decl: {
          start: {
            line: 63,
            column: 8
          },
          end: {
            line: 63,
            column: 9
          }
        },
        loc: {
          start: {
            line: 63,
            column: 22
          },
          end: {
            line: 69,
            column: 9
          }
        },
        line: 63
      },
      "4": {
        name: "(anonymous_4)",
        decl: {
          start: {
            line: 70,
            column: 8
          },
          end: {
            line: 70,
            column: 9
          }
        },
        loc: {
          start: {
            line: 70,
            column: 68
          },
          end: {
            line: 106,
            column: 9
          }
        },
        line: 70
      },
      "5": {
        name: "(anonymous_5)",
        decl: {
          start: {
            line: 71,
            column: 43
          },
          end: {
            line: 71,
            column: 44
          }
        },
        loc: {
          start: {
            line: 71,
            column: 49
          },
          end: {
            line: 73,
            column: 11
          }
        },
        line: 71
      },
      "6": {
        name: "(anonymous_6)",
        decl: {
          start: {
            line: 92,
            column: 20
          },
          end: {
            line: 92,
            column: 21
          }
        },
        loc: {
          start: {
            line: 92,
            column: 25
          },
          end: {
            line: 92,
            column: 33
          }
        },
        line: 92
      },
      "7": {
        name: "(anonymous_7)",
        decl: {
          start: {
            line: 93,
            column: 20
          },
          end: {
            line: 93,
            column: 21
          }
        },
        loc: {
          start: {
            line: 93,
            column: 50
          },
          end: {
            line: 95,
            column: 15
          }
        },
        line: 93
      },
      "8": {
        name: "(anonymous_8)",
        decl: {
          start: {
            line: 96,
            column: 21
          },
          end: {
            line: 96,
            column: 22
          }
        },
        loc: {
          start: {
            line: 96,
            column: 37
          },
          end: {
            line: 104,
            column: 15
          }
        },
        line: 96
      },
      "9": {
        name: "(anonymous_9)",
        decl: {
          start: {
            line: 101,
            column: 18
          },
          end: {
            line: 101,
            column: 19
          }
        },
        loc: {
          start: {
            line: 101,
            column: 27
          },
          end: {
            line: 101,
            column: 57
          }
        },
        line: 101
      },
      "10": {
        name: "(anonymous_10)",
        decl: {
          start: {
            line: 107,
            column: 8
          },
          end: {
            line: 107,
            column: 9
          }
        },
        loc: {
          start: {
            line: 107,
            column: 76
          },
          end: {
            line: 112,
            column: 9
          }
        },
        line: 107
      },
      "11": {
        name: "(anonymous_11)",
        decl: {
          start: {
            line: 110,
            column: 45
          },
          end: {
            line: 110,
            column: 46
          }
        },
        loc: {
          start: {
            line: 110,
            column: 55
          },
          end: {
            line: 110,
            column: 72
          }
        },
        line: 110
      },
      "12": {
        name: "(anonymous_12)",
        decl: {
          start: {
            line: 115,
            column: 20
          },
          end: {
            line: 115,
            column: 21
          }
        },
        loc: {
          start: {
            line: 115,
            column: 26
          },
          end: {
            line: 115,
            column: 30
          }
        },
        line: 115
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 27,
            column: 2
          },
          end: {
            line: 31,
            column: 3
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 27,
            column: 2
          },
          end: {
            line: 31,
            column: 3
          }
        }, {
          start: {
            line: 27,
            column: 2
          },
          end: {
            line: 31,
            column: 3
          }
        }],
        line: 27
      },
      "1": {
        loc: {
          start: {
            line: 57,
            column: 15
          },
          end: {
            line: 57,
            column: 58
          }
        },
        type: "default-arg",
        locations: [{
          start: {
            line: 57,
            column: 56
          },
          end: {
            line: 57,
            column: 58
          }
        }],
        line: 57
      },
      "2": {
        loc: {
          start: {
            line: 57,
            column: 16
          },
          end: {
            line: 57,
            column: 36
          }
        },
        type: "default-arg",
        locations: [{
          start: {
            line: 57,
            column: 24
          },
          end: {
            line: 57,
            column: 36
          }
        }],
        line: 57
      },
      "3": {
        loc: {
          start: {
            line: 65,
            column: 12
          },
          end: {
            line: 65,
            column: 48
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 65,
            column: 12
          },
          end: {
            line: 65,
            column: 26
          }
        }, {
          start: {
            line: 65,
            column: 30
          },
          end: {
            line: 65,
            column: 48
          }
        }],
        line: 65
      },
      "4": {
        loc: {
          start: {
            line: 66,
            column: 30
          },
          end: {
            line: 66,
            column: 75
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 66,
            column: 31
          },
          end: {
            line: 66,
            column: 68
          }
        }, {
          start: {
            line: 66,
            column: 73
          },
          end: {
            line: 66,
            column: 75
          }
        }],
        line: 66
      },
      "5": {
        loc: {
          start: {
            line: 68,
            column: 32
          },
          end: {
            line: 68,
            column: 50
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 68,
            column: 32
          },
          end: {
            line: 68,
            column: 44
          }
        }, {
          start: {
            line: 68,
            column: 48
          },
          end: {
            line: 68,
            column: 50
          }
        }],
        line: 68
      },
      "6": {
        loc: {
          start: {
            line: 78,
            column: 18
          },
          end: {
            line: 80,
            column: 20
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 79,
            column: 18
          },
          end: {
            line: 79,
            column: 59
          }
        }, {
          start: {
            line: 80,
            column: 18
          },
          end: {
            line: 80,
            column: 20
          }
        }],
        line: 78
      },
      "7": {
        loc: {
          start: {
            line: 83,
            column: 10
          },
          end: {
            line: 105,
            column: 11
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 83,
            column: 10
          },
          end: {
            line: 105,
            column: 11
          }
        }, {
          start: {
            line: 83,
            column: 10
          },
          end: {
            line: 105,
            column: 11
          }
        }],
        line: 83
      },
      "8": {
        loc: {
          start: {
            line: 107,
            column: 31
          },
          end: {
            line: 107,
            column: 74
          }
        },
        type: "default-arg",
        locations: [{
          start: {
            line: 107,
            column: 72
          },
          end: {
            line: 107,
            column: 74
          }
        }],
        line: 107
      },
      "9": {
        loc: {
          start: {
            line: 109,
            column: 17
          },
          end: {
            line: 111,
            column: 17
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 110,
            column: 14
          },
          end: {
            line: 110,
            column: 73
          }
        }, {
          start: {
            line: 111,
            column: 14
          },
          end: {
            line: 111,
            column: 17
          }
        }],
        line: 109
      },
      "10": {
        loc: {
          start: {
            line: 119,
            column: 17
          },
          end: {
            line: 119,
            column: 47
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 119,
            column: 17
          },
          end: {
            line: 119,
            column: 28
          }
        }, {
          start: {
            line: 119,
            column: 32
          },
          end: {
            line: 119,
            column: 47
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
      "31": 0
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
      "12": 0
    },
    b: {
      "0": [0, 0],
      "1": [0],
      "2": [0],
      "3": [0, 0],
      "4": [0, 0],
      "5": [0, 0],
      "6": [0, 0],
      "7": [0, 0],
      "8": [0],
      "9": [0, 0],
      "10": [0, 0]
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
function loadTranslations() {
  cov_1o8xuz10yb.f[0]++;
  const element = (cov_1o8xuz10yb.s[0]++, document.getElementById('__TRANSLATIONS__'));
  cov_1o8xuz10yb.s[1]++;

  if (!element) {
    cov_1o8xuz10yb.b[0][0]++;
    cov_1o8xuz10yb.s[2]++;
    throw new Error('[fusion-plugin-i18n] - Could not find a __TRANSLATIONS__ element');
  } else {
    cov_1o8xuz10yb.b[0][1]++;
  }

  cov_1o8xuz10yb.s[3]++;

  try {
    cov_1o8xuz10yb.s[4]++;
    return JSON.parse(App.unescape(element.textContent));
  } catch (e) {
    cov_1o8xuz10yb.s[5]++;
    throw new Error('[fusion-plugin-i18n] - Error parsing __TRANSLATIONS__ element content');
  }
}

const HydrationStateToken = (cov_1o8xuz10yb.s[6]++, App.createToken('HydrationStateToken'));
cov_1o8xuz10yb.s[7]++;

const pluginFactory$1 = () => {
  cov_1o8xuz10yb.f[1]++;
  cov_1o8xuz10yb.s[8]++;
  return App.createPlugin({
    deps: {
      fetch: fusionTokens.FetchToken.optional,
      hydrationState: HydrationStateToken.optional
    },
    provides: ({
      fetch = (cov_1o8xuz10yb.b[2][0]++, window.fetch),
      hydrationState
    } = (cov_1o8xuz10yb.b[1][0]++, {})) => {
      cov_1o8xuz10yb.f[2]++;

      class I18n {
        constructor() {
          cov_1o8xuz10yb.f[3]++;
          const {
            chunks,
            localeCode,
            translations
          } = (cov_1o8xuz10yb.s[9]++, (cov_1o8xuz10yb.b[3][0]++, hydrationState) || (cov_1o8xuz10yb.b[3][1]++, loadTranslations()));
          cov_1o8xuz10yb.s[10]++;
          this.loadedChunks = (cov_1o8xuz10yb.b[4][0]++, chunks) || (cov_1o8xuz10yb.b[4][1]++, []);
          cov_1o8xuz10yb.s[11]++;
          this.localeCode = localeCode;
          cov_1o8xuz10yb.s[12]++;
          this.translationMap = (cov_1o8xuz10yb.b[5][0]++, translations) || (cov_1o8xuz10yb.b[5][1]++, {});
        }

        async load(chunkIds) {
          cov_1o8xuz10yb.f[4]++;
          const unloaded = (cov_1o8xuz10yb.s[13]++, chunkIds.filter(id => {
            cov_1o8xuz10yb.f[5]++;
            cov_1o8xuz10yb.s[14]++;
            return this.loadedChunks.indexOf(id) < 0;
          }));
          const fetchOpts = (cov_1o8xuz10yb.s[15]++, {
            method: 'POST',
            headers: _objectSpread({
              Accept: '*/*'
            }, this.localeCode ? (cov_1o8xuz10yb.b[6][0]++, {
              'X-Fusion-Locale-Code': this.localeCode
            }) : (cov_1o8xuz10yb.b[6][1]++, {}))
          });
          cov_1o8xuz10yb.s[16]++;

          if (unloaded.length > 0) {
            cov_1o8xuz10yb.b[7][0]++;
            cov_1o8xuz10yb.s[17]++;
            // Don't try to load translations again if a request is already in
            // flight. This means that we need to add unloaded chunks to
            // loadedChunks optimistically and remove them if some error happens
            this.loadedChunks = [...this.loadedChunks, ...unloaded];
            const ids = (cov_1o8xuz10yb.s[18]++, unloaded.join(',')); // TODO(#3) don't append prefix if injected fetch also injects prefix

            cov_1o8xuz10yb.s[19]++;
            return fetch(`/_translations?ids=${ids}`, fetchOpts).then(r => {
              cov_1o8xuz10yb.f[6]++;
              cov_1o8xuz10yb.s[20]++;
              return r.json();
            }).then(data => {
              cov_1o8xuz10yb.f[7]++;
              cov_1o8xuz10yb.s[21]++;

              for (const key in data) {
                cov_1o8xuz10yb.s[22]++;
                this.translationMap[key] = data[key];
              }
            }).catch(err => {
              cov_1o8xuz10yb.f[8]++;
              cov_1o8xuz10yb.s[23]++;
              // An error occurred, so remove the chunks we were trying to load
              // from loadedChunks. This allows us to try to load those chunk
              // translations again
              this.loadedChunks = this.loadedChunks.filter(chunk => {
                cov_1o8xuz10yb.f[9]++;
                cov_1o8xuz10yb.s[24]++;
                return unloaded.indexOf(chunk) === -1;
              });
              cov_1o8xuz10yb.s[25]++;
              throw err;
            });
          } else {
            cov_1o8xuz10yb.b[7][1]++;
          }
        }

        translate(key, interpolations = (cov_1o8xuz10yb.b[8][0]++, {})) {
          cov_1o8xuz10yb.f[10]++;
          const template = (cov_1o8xuz10yb.s[26]++, this.translationMap[key]);
          cov_1o8xuz10yb.s[27]++;
          return template ? (cov_1o8xuz10yb.b[9][0]++, template.replace(/\${(.*?)}/g, (_, k) => {
            cov_1o8xuz10yb.f[11]++;
            cov_1o8xuz10yb.s[28]++;
            return interpolations[k];
          })) : (cov_1o8xuz10yb.b[9][1]++, key);
        }

      }

      const i18n = (cov_1o8xuz10yb.s[29]++, new I18n());
      cov_1o8xuz10yb.s[30]++;
      return {
        from: () => {
          cov_1o8xuz10yb.f[12]++;
          cov_1o8xuz10yb.s[31]++;
          return i18n;
        }
      };
    }
  });
};

(cov_1o8xuz10yb.b[10][0]++, false) && (cov_1o8xuz10yb.b[10][1]++, pluginFactory$1());

var cov_qejaq1va4 = function () {
  var path$$1 = "/Users/lhorie/Documents/test-private-monorepo/public/fusion-plugin-i18n/src/index.js",
      hash = "77c7a66443ad50116829747d10a7dab1969430f5",
      Function = function () {}.constructor,
      global = new Function('return this')(),
      gcv = "__coverage__",
      coverageData = {
    path: "/Users/lhorie/Documents/test-private-monorepo/public/fusion-plugin-i18n/src/index.js",
    statementMap: {
      "0": {
        start: {
          line: 19,
          column: 42
        },
        end: {
          line: 19,
          column: 66
        }
      },
      "1": {
        start: {
          line: 21,
          column: 60
        },
        end: {
          line: 23,
          column: 16
        }
      }
    },
    fnMap: {},
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 21,
            column: 60
          },
          end: {
            line: 23,
            column: 16
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 22,
            column: 4
          },
          end: {
            line: 22,
            column: 16
          }
        }, {
          start: {
            line: 23,
            column: 4
          },
          end: {
            line: 23,
            column: 16
          }
        }],
        line: 21
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
const I18nToken = (cov_qejaq1va4.s[0]++, App.createToken('I18nToken'));
const plugin = (cov_qejaq1va4.s[1]++, (cov_qejaq1va4.b[0][0]++, I18n));

/** Copyright (c) 2018 Uber Technologies, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

/* eslint-env node */
test('translate', async t => {
  const data = {
    test: 'hello',
    interpolated: 'hi ${value}'
  };
  const app = new App__default('el', el => el);
  app.register(I18nToken, I18n);
  app.register(I18nLoaderToken, {
    from: () => ({
      translations: data,
      locale: 'en_US'
    })
  });
  app.middleware({
    i18n: I18nToken
  }, ({
    i18n
  }) => {
    return (ctx, next) => {
      const translator = i18n.from(ctx);
      t.equals(translator.translate('test'), 'hello');
      t.equals(translator.translate('interpolated', {
        value: 'world'
      }), 'hi world');
      return next();
    };
  });
  const simulator = fusionTestUtils.getSimulator(app);
  await simulator.render('/');
  t.end();
});
test('ssr', async t => {
  const data = {
    test: 'hello</div>',
    interpolated: 'hi ${value}'
  };
  /* eslint-disable import/no-unresolved */
  // $FlowFixMe

  const chunkTranslationMap = require('../chunk-translation-map'); // relative to ./dist-tests

  /* eslint-enable import/no-unresolved */


  chunkTranslationMap.add('a.js', [0], Object.keys(data));
  const ctx = {
    syncChunks: [0],
    preloadChunks: [],
    headers: {
      'accept-language': 'en-US'
    },
    element: 'test',
    // $FlowFixMe - Invalid context
    template: {
      body: []
    },
    memoized: new Map()
  };
  const deps = {
    loader: {
      from: () => ({
        translations: data,
        locale: 'en-US'
      })
    }
  };
  t.plan(3);

  if (!I18n.provides) {
    t.end();
    return;
  }

  const i18n = I18n.provides(deps);

  if (!I18n.middleware) {
    t.end();
    return;
  }

  await I18n.middleware(deps, i18n)(ctx, () => Promise.resolve());
  t.equals(ctx.template.body.length, 1, 'injects hydration code');
  t.equals( // $FlowFixMe
  App.consumeSanitizedHTML(ctx.template.body[0]).match('hello')[0], 'hello'); // $FlowFixMe

  t.equals(App.consumeSanitizedHTML(ctx.template.body[0]).match('</div>'), null);
  chunkTranslationMap.dispose('a.js', [0], Object.keys(data));
  chunkTranslationMap.translations.clear();
  t.end();
});
test('endpoint', async t => {
  const data = {
    test: 'hello',
    interpolated: 'hi ${value}'
  };
  /* eslint-disable import/no-unresolved */
  // $FlowFixMe

  const chunkTranslationMap = require('../chunk-translation-map'); // relative to ./dist-tests

  /* eslint-enable import/no-unresolved */


  chunkTranslationMap.add('a.js', [0], Object.keys(data)); // $FlowFixMe - Invalid context

  const ctx = {
    syncChunks: [],
    preloadChunks: [],
    headers: {
      'accept-language': 'en_US'
    },
    path: '/_translations',
    querystring: 'ids=0',
    memoized: new Map(),
    body: ''
  };
  const deps = {
    loader: {
      from: () => ({
        translations: data,
        locale: 'en-US'
      })
    }
  };
  t.plan(1);

  if (!I18n.provides) {
    t.end();
    return;
  }

  const i18n = I18n.provides(deps);

  if (!I18n.middleware) {
    t.end();
    return;
  }

  await I18n.middleware(deps, i18n)(ctx, () => Promise.resolve());
  t.deepEquals(ctx.body, data, 'injects hydration code');
  chunkTranslationMap.dispose('a.js', [0], Object.keys(data));
  chunkTranslationMap.translations.clear();
  t.end();
});
test('non matched route', async t => {
  const data = {
    test: 'hello',
    interpolated: 'hi ${value}'
  }; // $FlowFixMe - Invalid context

  const ctx = {
    path: '/_something',
    memoized: new Map(),
    body: ''
  };
  const deps = {
    loader: {
      from: () => ({
        translations: data,
        locale: 'en-US'
      })
    }
  };
  t.plan(1);

  if (!I18n.provides) {
    t.end();
    return;
  }

  const i18n = I18n.provides(deps);

  if (!I18n.middleware) {
    t.end();
    return;
  }

  await I18n.middleware(deps, i18n)(ctx, () => Promise.resolve());
  t.notok(ctx.body, 'does not set ctx.body');
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
test('loader', async t => {
  fs.mkdirSync('translations');
  fs.writeFileSync('translations/en_US.json', '{"test": "hi ${value}"}');
  const app = new App__default('el', el => el);
  app.register(I18nToken, I18n);
  app.middleware({
    i18n: I18nToken
  }, ({
    i18n
  }) => {
    return (ctx, next) => {
      const translator = i18n.from(ctx);
      t.equals(translator.translate('test', {
        value: 'world'
      }), 'hi world');
      return next();
    };
  });
  const simulator = fusionTestUtils.getSimulator(app);
  await simulator.render('/');
  fs.unlinkSync('translations/en_US.json');
  fs.rmdirSync('translations');
  t.end();
});
test('custom locale resolver', async t => {
  fs.mkdirSync('translations');
  fs.writeFileSync('translations/en_US.json', '{"foo": "bar"}');
  fs.writeFileSync('translations/custom_US.json', '{"foo": "qux"}');
  const app = new App__default('el', el => el);
  app.register(I18nLoaderToken, createLoader(ctx => 'custom_US'));
  app.register(I18nToken, I18n);
  app.middleware({
    i18n: I18nToken
  }, ({
    i18n
  }) => {
    return (ctx, next) => {
      const translator = i18n.from(ctx);
      t.equals(translator.translate('foo'), 'qux');
      return next();
    };
  });
  const simulator = fusionTestUtils.getSimulator(app);
  await simulator.render('/', {
    headers: {
      'accept-language': 'en_US'
    }
  });
  fs.unlinkSync('translations/en_US.json');
  fs.unlinkSync('translations/custom_US.json');
  fs.rmdirSync('translations');
  t.end();
});
test('no translations dir', t => {
  t.doesNotThrow(createLoader);
  t.end();
});
//# sourceMappingURL=node.js.map
