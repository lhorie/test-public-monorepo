'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var assert = _interopDefault(require('assert'));
var uuidv4 = _interopDefault(require('uuid/v4'));
var UAParser = _interopDefault(require('ua-parser-js'));
var tape = _interopDefault(require('tape-cup'));

var cov_1g8my47lro = function () {
  var path = "/Users/lhorie/Documents/test-private-monorepo/public/fusion-core/src/create-plugin.js",
      hash = "a0b04fdfa306668c28c0407ef1ab5c5adc17c5dd",
      Function = function () {}.constructor,
      global = new Function('return this')(),
      gcv = "__coverage__",
      coverageData = {
    path: "/Users/lhorie/Documents/test-private-monorepo/public/fusion-core/src/create-plugin.js",
    statementMap: {
      "0": {
        start: {
          line: 20,
          column: 2
        },
        end: {
          line: 24,
          column: 4
        }
      }
    },
    fnMap: {
      "0": {
        name: "createPlugin",
        decl: {
          start: {
            line: 17,
            column: 16
          },
          end: {
            line: 17,
            column: 28
          }
        },
        loc: {
          start: {
            line: 19,
            column: 33
          },
          end: {
            line: 25,
            column: 1
          }
        },
        line: 19
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

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/** Copyright (c) 2018 Uber Technologies, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */
// eslint-disable-next-line flowtype/generic-spacing
function createPlugin(opts) {
  cov_1g8my47lro.f[0]++;
  cov_1g8my47lro.s[0]++;
  return _objectSpread({
    __plugin__: true,
    stack: new Error().stack
  }, opts);
}

var cov_25xs0eherz = function () {
  var path = "/Users/lhorie/Documents/test-private-monorepo/public/fusion-core/src/create-token.js",
      hash = "c67fa93a52125a7d130db9362be58a9b8e21bebe",
      Function = function () {}.constructor,
      global = new Function('return this')(),
      gcv = "__coverage__",
      coverageData = {
    path: "/Users/lhorie/Documents/test-private-monorepo/public/fusion-core/src/create-token.js",
    statementMap: {
      "0": {
        start: {
          line: 11,
          column: 25
        },
        end: {
          line: 14,
          column: 2
        }
      },
      "1": {
        start: {
          line: 27,
          column: 4
        },
        end: {
          line: 27,
          column: 21
        }
      },
      "2": {
        start: {
          line: 28,
          column: 4
        },
        end: {
          line: 28,
          column: 32
        }
      },
      "3": {
        start: {
          line: 29,
          column: 4
        },
        end: {
          line: 29,
          column: 62
        }
      },
      "4": {
        start: {
          line: 30,
          column: 4
        },
        end: {
          line: 30,
          column: 62
        }
      },
      "5": {
        start: {
          line: 31,
          column: 4
        },
        end: {
          line: 33,
          column: 5
        }
      },
      "6": {
        start: {
          line: 32,
          column: 6
        },
        end: {
          line: 32,
          column: 52
        }
      },
      "7": {
        start: {
          line: 38,
          column: 2
        },
        end: {
          line: 38,
          column: 60
        }
      }
    },
    fnMap: {
      "0": {
        name: "Ref",
        decl: {
          start: {
            line: 15,
            column: 9
          },
          end: {
            line: 15,
            column: 12
          }
        },
        loc: {
          start: {
            line: 15,
            column: 15
          },
          end: {
            line: 15,
            column: 17
          }
        },
        line: 15
      },
      "1": {
        name: "(anonymous_1)",
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
            column: 40
          },
          end: {
            line: 34,
            column: 3
          }
        },
        line: 26
      },
      "2": {
        name: "createToken",
        decl: {
          start: {
            line: 37,
            column: 16
          },
          end: {
            line: 37,
            column: 27
          }
        },
        loc: {
          start: {
            line: 37,
            column: 79
          },
          end: {
            line: 39,
            column: 1
          }
        },
        line: 37
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 28,
            column: 15
          },
          end: {
            line: 28,
            column: 31
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 28,
            column: 15
          },
          end: {
            line: 28,
            column: 18
          }
        }, {
          start: {
            line: 28,
            column: 22
          },
          end: {
            line: 28,
            column: 31
          }
        }],
        line: 28
      },
      "1": {
        loc: {
          start: {
            line: 29,
            column: 16
          },
          end: {
            line: 29,
            column: 61
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 29,
            column: 22
          },
          end: {
            line: 29,
            column: 40
          }
        }, {
          start: {
            line: 29,
            column: 43
          },
          end: {
            line: 29,
            column: 61
          }
        }],
        line: 29
      },
      "2": {
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
const TokenType = (cov_25xs0eherz.s[0]++, Object.freeze({
  Required: 0,
  Optional: 1
}));

function Ref() {
  cov_25xs0eherz.f[0]++;
}

class TokenImpl {
  constructor(name, ref) {
    cov_25xs0eherz.f[1]++;
    cov_25xs0eherz.s[1]++;
    this.name = name;
    cov_25xs0eherz.s[2]++;
    this.ref = (cov_25xs0eherz.b[0][0]++, ref) || (cov_25xs0eherz.b[0][1]++, new Ref());
    cov_25xs0eherz.s[3]++;
    this.type = ref ? (cov_25xs0eherz.b[1][0]++, TokenType.Optional) : (cov_25xs0eherz.b[1][1]++, TokenType.Required);
    cov_25xs0eherz.s[4]++;
    this.stacks = [{
      type: 'token',
      stack: new Error().stack
    }];
    cov_25xs0eherz.s[5]++;

    if (!ref) {
      cov_25xs0eherz.b[2][0]++;
      cov_25xs0eherz.s[6]++;
      this.optional = new TokenImpl(name, this.ref);
    } else {
      cov_25xs0eherz.b[2][1]++;
    }
  }

}
function createToken(name) {
  cov_25xs0eherz.f[2]++;
  cov_25xs0eherz.s[7]++;
  return new TokenImpl(name);
}

var cov_1oxwx4ibch = function () {
  var path = "/Users/lhorie/Documents/test-private-monorepo/public/fusion-core/src/tokens.js",
      hash = "2f74c443f17152d3b5a16351da117f11e0f08d74",
      Function = function () {}.constructor,
      global = new Function('return this')(),
      gcv = "__coverage__",
      coverageData = {
    path: "/Users/lhorie/Documents/test-private-monorepo/public/fusion-core/src/tokens.js",
    statementMap: {
      "0": {
        start: {
          line: 18,
          column: 27
        },
        end: {
          line: 18,
          column: 65
        }
      },
      "1": {
        start: {
          line: 19,
          column: 28
        },
        end: {
          line: 19,
          column: 60
        }
      },
      "2": {
        start: {
          line: 20,
          column: 31
        },
        end: {
          line: 20,
          column: 73
        }
      },
      "3": {
        start: {
          line: 21,
          column: 31
        },
        end: {
          line: 21,
          column: 69
        }
      },
      "4": {
        start: {
          line: 22,
          column: 36
        },
        end: {
          line: 24,
          column: 1
        }
      },
      "5": {
        start: {
          line: 25,
          column: 32
        },
        end: {
          line: 25,
          column: 71
        }
      },
      "6": {
        start: {
          line: 33,
          column: 37
        },
        end: {
          line: 35,
          column: 1
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
      "6": 0
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
const RenderToken = (cov_1oxwx4ibch.s[0]++, createToken('RenderToken'));
const ElementToken = (cov_1oxwx4ibch.s[1]++, createToken('ElementToken'));
const SSRDeciderToken = (cov_1oxwx4ibch.s[2]++, createToken('SSRDeciderToken'));
const HttpServerToken = (cov_1oxwx4ibch.s[3]++, createToken('HttpServerToken'));
const SSRBodyTemplateToken = (cov_1oxwx4ibch.s[4]++, createToken('SSRBodyTemplateToken'));
const RoutePrefixToken = (cov_1oxwx4ibch.s[5]++, createToken('RoutePrefixToken'));
const CriticalChunkIdsToken = (cov_1oxwx4ibch.s[6]++, createToken('CriticalChunkIdsToken'));

var cov_2fw4iqtb7x = function () {
  var path = "/Users/lhorie/Documents/test-private-monorepo/public/fusion-core/src/sanitization.js",
      hash = "68a0fea07b37cc0bccfd9b82be4619f3159d44d1",
      Function = function () {}.constructor,
      global = new Function('return this')(),
      gcv = "__coverage__",
      coverageData = {
    path: "/Users/lhorie/Documents/test-private-monorepo/public/fusion-core/src/sanitization.js",
    statementMap: {
      "0": {
        start: {
          line: 20,
          column: 0
        },
        end: {
          line: 55,
          column: 1
        }
      },
      "1": {
        start: {
          line: 21,
          column: 25
        },
        end: {
          line: 28,
          column: 3
        }
      },
      "2": {
        start: {
          line: 29,
          column: 27
        },
        end: {
          line: 29,
          column: 49
        }
      },
      "3": {
        start: {
          line: 29,
          column: 32
        },
        end: {
          line: 29,
          column: 49
        }
      },
      "4": {
        start: {
          line: 31,
          column: 14
        },
        end: {
          line: 31,
          column: 38
        }
      },
      "5": {
        start: {
          line: 32,
          column: 2
        },
        end: {
          line: 43,
          column: 4
        }
      },
      "6": {
        start: {
          line: 36,
          column: 16
        },
        end: {
          line: 36,
          column: 18
        }
      },
      "7": {
        start: {
          line: 37,
          column: 4
        },
        end: {
          line: 41,
          column: 7
        }
      },
      "8": {
        start: {
          line: 40,
          column: 41
        },
        end: {
          line: 40,
          column: 60
        }
      },
      "9": {
        start: {
          line: 42,
          column: 4
        },
        end: {
          line: 42,
          column: 15
        }
      },
      "10": {
        start: {
          line: 44,
          column: 2
        },
        end: {
          line: 44,
          column: 60
        }
      },
      "11": {
        start: {
          line: 44,
          column: 48
        },
        end: {
          line: 44,
          column: 59
        }
      },
      "12": {
        start: {
          line: 45,
          column: 2
        },
        end: {
          line: 48,
          column: 4
        }
      },
      "13": {
        start: {
          line: 46,
          column: 4
        },
        end: {
          line: 46,
          column: 58
        }
      },
      "14": {
        start: {
          line: 46,
          column: 25
        },
        end: {
          line: 46,
          column: 58
        }
      },
      "15": {
        start: {
          line: 47,
          column: 4
        },
        end: {
          line: 47,
          column: 72
        }
      },
      "16": {
        start: {
          line: 49,
          column: 2
        },
        end: {
          line: 54,
          column: 4
        }
      },
      "17": {
        start: {
          line: 50,
          column: 4
        },
        end: {
          line: 52,
          column: 5
        }
      },
      "18": {
        start: {
          line: 51,
          column: 6
        },
        end: {
          line: 51,
          column: 60
        }
      },
      "19": {
        start: {
          line: 53,
          column: 4
        },
        end: {
          line: 53,
          column: 18
        }
      },
      "20": {
        start: {
          line: 56,
          column: 23
        },
        end: {
          line: 56,
          column: 74
        }
      },
      "21": {
        start: {
          line: 56,
          column: 28
        },
        end: {
          line: 56,
          column: 74
        }
      },
      "22": {
        start: {
          line: 57,
          column: 17
        },
        end: {
          line: 62,
          column: 1
        }
      },
      "23": {
        start: {
          line: 58,
          column: 2
        },
        end: {
          line: 61,
          column: 4
        }
      },
      "24": {
        start: {
          line: 65,
          column: 18
        },
        end: {
          line: 68,
          column: 25
        }
      },
      "25": {
        start: {
          line: 70,
          column: 32
        },
        end: {
          line: 72,
          column: 11
        }
      },
      "26": {
        start: {
          line: 74,
          column: 34
        },
        end: {
          line: 76,
          column: 11
        }
      },
      "27": {
        start: {
          line: 78,
          column: 20
        },
        end: {
          line: 78,
          column: 58
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 29,
            column: 27
          },
          end: {
            line: 29,
            column: 28
          }
        },
        loc: {
          start: {
            line: 29,
            column: 32
          },
          end: {
            line: 29,
            column: 49
          }
        },
        line: 29
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 32,
            column: 9
          },
          end: {
            line: 32,
            column: 10
          }
        },
        loc: {
          start: {
            line: 35,
            column: 29
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
            line: 40,
            column: 31
          },
          end: {
            line: 40,
            column: 32
          }
        },
        loc: {
          start: {
            line: 40,
            column: 41
          },
          end: {
            line: 40,
            column: 60
          }
        },
        line: 40
      },
      "3": {
        name: "(anonymous_3)",
        decl: {
          start: {
            line: 44,
            column: 23
          },
          end: {
            line: 44,
            column: 24
          }
        },
        loc: {
          start: {
            line: 44,
            column: 48
          },
          end: {
            line: 44,
            column: 59
          }
        },
        line: 44
      },
      "4": {
        name: "(anonymous_4)",
        decl: {
          start: {
            line: 45,
            column: 11
          },
          end: {
            line: 45,
            column: 12
          }
        },
        loc: {
          start: {
            line: 45,
            column: 33
          },
          end: {
            line: 48,
            column: 3
          }
        },
        line: 45
      },
      "5": {
        name: "(anonymous_5)",
        decl: {
          start: {
            line: 49,
            column: 25
          },
          end: {
            line: 49,
            column: 26
          }
        },
        loc: {
          start: {
            line: 49,
            column: 62
          },
          end: {
            line: 54,
            column: 3
          }
        },
        line: 49
      },
      "6": {
        name: "(anonymous_6)",
        decl: {
          start: {
            line: 56,
            column: 23
          },
          end: {
            line: 56,
            column: 24
          }
        },
        loc: {
          start: {
            line: 56,
            column: 28
          },
          end: {
            line: 56,
            column: 74
          }
        },
        line: 56
      },
      "7": {
        name: "(anonymous_7)",
        decl: {
          start: {
            line: 57,
            column: 17
          },
          end: {
            line: 57,
            column: 18
          }
        },
        loc: {
          start: {
            line: 57,
            column: 42
          },
          end: {
            line: 62,
            column: 1
          }
        },
        line: 57
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 20,
            column: 0
          },
          end: {
            line: 55,
            column: 1
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 20,
            column: 0
          },
          end: {
            line: 55,
            column: 1
          }
        }, {
          start: {
            line: 20,
            column: 0
          },
          end: {
            line: 55,
            column: 1
          }
        }],
        line: 20
      },
      "1": {
        loc: {
          start: {
            line: 46,
            column: 4
          },
          end: {
            line: 46,
            column: 58
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 46,
            column: 4
          },
          end: {
            line: 46,
            column: 58
          }
        }, {
          start: {
            line: 46,
            column: 4
          },
          end: {
            line: 46,
            column: 58
          }
        }],
        line: 46
      },
      "2": {
        loc: {
          start: {
            line: 46,
            column: 8
          },
          end: {
            line: 46,
            column: 23
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
            column: 11
          }
        }, {
          start: {
            line: 46,
            column: 15
          },
          end: {
            line: 46,
            column: 23
          }
        }],
        line: 46
      },
      "3": {
        loc: {
          start: {
            line: 50,
            column: 4
          },
          end: {
            line: 52,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 50,
            column: 4
          },
          end: {
            line: 52,
            column: 5
          }
        }, {
          start: {
            line: 50,
            column: 4
          },
          end: {
            line: 52,
            column: 5
          }
        }],
        line: 50
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
      "27": 0
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

/*
We never want developers to be able to write `ctx.template.body.push(`<div>${stuff}</div>`)`
because that allows XSS attacks by default (e.g. if stuff === '<script>alert(1)</script>')
Instead, they should use html`<div>{stuff}</div>` so interpolated data gets automatically escaped
We trust the markup outside of interpolation because it's code written by a developer with commit permissions,
which can be audited via code reviews
*/
// eslint-disable-next-line import/no-mutable-exports
let html;
let dangerouslySetHTML;
let consumeSanitizedHTML;
let escape;
cov_2fw4iqtb7x.s[0]++;

{
  cov_2fw4iqtb7x.b[0][0]++;
  const forbiddenChars = (cov_2fw4iqtb7x.s[1]++, {
    '<': '\\u003C',
    '>': '\\u003E',
    '"': '\\u0022',
    '/': '\\u002F',
    '\u2028': '\\u2028',
    '\u2029': '\\u2029'
  });
  cov_2fw4iqtb7x.s[2]++;

  const replaceForbidden = c => {
    cov_2fw4iqtb7x.f[0]++;
    cov_2fw4iqtb7x.s[3]++;
    return forbiddenChars[c];
  };

  const key = (cov_2fw4iqtb7x.s[4]++, Symbol('sanitized html'));
  cov_2fw4iqtb7x.s[5]++;

  html = ([head, ...rest], ...values) => {
    cov_2fw4iqtb7x.f[1]++;
    const obj = (cov_2fw4iqtb7x.s[6]++, {});
    cov_2fw4iqtb7x.s[7]++;
    Object.defineProperty(obj, key, {
      enumerable: false,
      configurable: false,
      value: head + values.map((s, i) => {
        cov_2fw4iqtb7x.f[2]++;
        cov_2fw4iqtb7x.s[8]++;
        return escape(s) + rest[i];
      }).join('')
    });
    cov_2fw4iqtb7x.s[9]++;
    return obj;
  };

  cov_2fw4iqtb7x.s[10]++;

  dangerouslySetHTML = str => {
    cov_2fw4iqtb7x.f[3]++;
    cov_2fw4iqtb7x.s[11]++;
    return html([str]);
  };

  cov_2fw4iqtb7x.s[12]++;

  escape = str => {
    cov_2fw4iqtb7x.f[4]++;
    cov_2fw4iqtb7x.s[13]++;

    if ((cov_2fw4iqtb7x.b[2][0]++, str) && (cov_2fw4iqtb7x.b[2][1]++, str[key])) {
      cov_2fw4iqtb7x.b[1][0]++;
      cov_2fw4iqtb7x.s[14]++;
      return consumeSanitizedHTML(str);
    } else {
      cov_2fw4iqtb7x.b[1][1]++;
    }

    cov_2fw4iqtb7x.s[15]++;
    return String(str).replace(/[<>"/\u2028\u2029]/g, replaceForbidden);
  };

  cov_2fw4iqtb7x.s[16]++;

  consumeSanitizedHTML = h => {
    cov_2fw4iqtb7x.f[5]++;
    cov_2fw4iqtb7x.s[17]++;

    if (typeof h === 'string') {
      cov_2fw4iqtb7x.b[3][0]++;
      cov_2fw4iqtb7x.s[18]++;
      throw new Error(`Unsanitized html. Use html\`${h}\``);
    } else {
      cov_2fw4iqtb7x.b[3][1]++;
    }

    cov_2fw4iqtb7x.s[19]++;
    return h[key];
  };
}

cov_2fw4iqtb7x.s[20]++;

const replaceEscaped = c => {
  cov_2fw4iqtb7x.f[6]++;
  cov_2fw4iqtb7x.s[21]++;
  return String.fromCodePoint(parseInt(c.slice(2), 16));
};

cov_2fw4iqtb7x.s[22]++;

const unescape = str => {
  cov_2fw4iqtb7x.f[7]++;
  cov_2fw4iqtb7x.s[23]++;
  return str.replace(/\\u003C|\\u003E|\\u0022|\\u002F|\\u2028|\\u2029/g, replaceEscaped);
}; // These types are necessary due to not having an assignment in the __BROWSER__ environment


const flowHtml = (cov_2fw4iqtb7x.s[24]++, html);
const flowDangerouslySetHTML = (cov_2fw4iqtb7x.s[25]++, dangerouslySetHTML);
const flowConsumeSanitizedHTML = (cov_2fw4iqtb7x.s[26]++, consumeSanitizedHTML);
const flowEscape = (cov_2fw4iqtb7x.s[27]++, escape);

var cov_9vv6q15uj = function () {
  var path = "/Users/lhorie/Documents/test-private-monorepo/public/fusion-core/src/plugins/ssr.js",
      hash = "20745595e1f4fdd9208cba785c89209a246eb043",
      Function = function () {}.constructor,
      global = new Function('return this')(),
      gcv = "__coverage__",
      coverageData = {
    path: "/Users/lhorie/Documents/test-private-monorepo/public/fusion-core/src/plugins/ssr.js",
    statementMap: {
      "0": {
        start: {
          line: 17,
          column: 17
        },
        end: {
          line: 17,
          column: 40
        }
      },
      "1": {
        start: {
          line: 18,
          column: 19
        },
        end: {
          line: 41,
          column: 2
        }
      },
      "2": {
        start: {
          line: 20,
          column: 4
        },
        end: {
          line: 39,
          column: 6
        }
      },
      "3": {
        start: {
          line: 23,
          column: 6
        },
        end: {
          line: 23,
          column: 71
        }
      },
      "4": {
        start: {
          line: 23,
          column: 58
        },
        end: {
          line: 23,
          column: 71
        }
      },
      "5": {
        start: {
          line: 26,
          column: 6
        },
        end: {
          line: 31,
          column: 7
        }
      },
      "6": {
        start: {
          line: 27,
          column: 22
        },
        end: {
          line: 27,
          column: 47
        }
      },
      "7": {
        start: {
          line: 28,
          column: 8
        },
        end: {
          line: 30,
          column: 9
        }
      },
      "8": {
        start: {
          line: 29,
          column: 10
        },
        end: {
          line: 29,
          column: 22
        }
      },
      "9": {
        start: {
          line: 36,
          column: 6
        },
        end: {
          line: 36,
          column: 44
        }
      },
      "10": {
        start: {
          line: 36,
          column: 31
        },
        end: {
          line: 36,
          column: 44
        }
      },
      "11": {
        start: {
          line: 37,
          column: 6
        },
        end: {
          line: 37,
          column: 66
        }
      },
      "12": {
        start: {
          line: 37,
          column: 53
        },
        end: {
          line: 37,
          column: 66
        }
      },
      "13": {
        start: {
          line: 38,
          column: 6
        },
        end: {
          line: 38,
          column: 18
        }
      },
      "14": {
        start: {
          line: 53,
          column: 2
        },
        end: {
          line: 81,
          column: 4
        }
      },
      "15": {
        start: {
          line: 54,
          column: 4
        },
        end: {
          line: 54,
          column: 40
        }
      },
      "16": {
        start: {
          line: 54,
          column: 26
        },
        end: {
          line: 54,
          column: 40
        }
      },
      "17": {
        start: {
          line: 56,
          column: 21
        },
        end: {
          line: 62,
          column: 5
        }
      },
      "18": {
        start: {
          line: 63,
          column: 4
        },
        end: {
          line: 63,
          column: 26
        }
      },
      "19": {
        start: {
          line: 64,
          column: 4
        },
        end: {
          line: 64,
          column: 22
        }
      },
      "20": {
        start: {
          line: 65,
          column: 4
        },
        end: {
          line: 65,
          column: 28
        }
      },
      "21": {
        start: {
          line: 66,
          column: 4
        },
        end: {
          line: 66,
          column: 27
        }
      },
      "22": {
        start: {
          line: 68,
          column: 4
        },
        end: {
          line: 68,
          column: 17
        }
      },
      "23": {
        start: {
          line: 72,
          column: 4
        },
        end: {
          line: 74,
          column: 5
        }
      },
      "24": {
        start: {
          line: 73,
          column: 6
        },
        end: {
          line: 73,
          column: 13
        }
      },
      "25": {
        start: {
          line: 76,
          column: 4
        },
        end: {
          line: 80,
          column: 5
        }
      },
      "26": {
        start: {
          line: 77,
          column: 6
        },
        end: {
          line: 77,
          column: 38
        }
      },
      "27": {
        start: {
          line: 79,
          column: 6
        },
        end: {
          line: 79,
          column: 44
        }
      },
      "28": {
        start: {
          line: 85,
          column: 52
        },
        end: {
          line: 85,
          column: 64
        }
      },
      "29": {
        start: {
          line: 86,
          column: 20
        },
        end: {
          line: 90,
          column: 13
        }
      },
      "30": {
        start: {
          line: 88,
          column: 6
        },
        end: {
          line: 88,
          column: 67
        }
      },
      "31": {
        start: {
          line: 92,
          column: 24
        },
        end: {
          line: 96,
          column: 13
        }
      },
      "32": {
        start: {
          line: 94,
          column: 6
        },
        end: {
          line: 94,
          column: 67
        }
      },
      "33": {
        start: {
          line: 98,
          column: 20
        },
        end: {
          line: 98,
          column: 33
        }
      },
      "34": {
        start: {
          line: 99,
          column: 19
        },
        end: {
          line: 99,
          column: 58
        }
      },
      "35": {
        start: {
          line: 100,
          column: 19
        },
        end: {
          line: 100,
          column: 58
        }
      },
      "36": {
        start: {
          line: 102,
          column: 27
        },
        end: {
          line: 102,
          column: 51
        }
      },
      "37": {
        start: {
          line: 103,
          column: 22
        },
        end: {
          line: 103,
          column: 41
        }
      },
      "38": {
        start: {
          line: 104,
          column: 23
        },
        end: {
          line: 104,
          column: 43
        }
      },
      "39": {
        start: {
          line: 105,
          column: 35
        },
        end: {
          line: 109,
          column: 12
        }
      },
      "40": {
        start: {
          line: 111,
          column: 2
        },
        end: {
          line: 121,
          column: 13
        }
      },
      "41": {
        start: {
          line: 125,
          column: 37
        },
        end: {
          line: 125,
          column: 40
        }
      },
      "42": {
        start: {
          line: 127,
          column: 2
        },
        end: {
          line: 133,
          column: 13
        }
      },
      "43": {
        start: {
          line: 138,
          column: 24
        },
        end: {
          line: 138,
          column: 60
        }
      },
      "44": {
        start: {
          line: 139,
          column: 31
        },
        end: {
          line: 139,
          column: 78
        }
      },
      "45": {
        start: {
          line: 140,
          column: 2
        },
        end: {
          line: 148,
          column: 5
        }
      },
      "46": {
        start: {
          line: 141,
          column: 14
        },
        end: {
          line: 141,
          column: 44
        }
      },
      "47": {
        start: {
          line: 142,
          column: 4
        },
        end: {
          line: 146,
          column: 5
        }
      },
      "48": {
        start: {
          line: 143,
          column: 6
        },
        end: {
          line: 143,
          column: 36
        }
      },
      "49": {
        start: {
          line: 145,
          column: 6
        },
        end: {
          line: 145,
          column: 42
        }
      },
      "50": {
        start: {
          line: 147,
          column: 4
        },
        end: {
          line: 147,
          column: 39
        }
      },
      "51": {
        start: {
          line: 152,
          column: 15
        },
        end: {
          line: 158,
          column: 3
        }
      },
      "52": {
        start: {
          line: 154,
          column: 6
        },
        end: {
          line: 156,
          column: 62
        }
      },
      "53": {
        start: {
          line: 159,
          column: 20
        },
        end: {
          line: 166,
          column: 4
        }
      },
      "54": {
        start: {
          line: 161,
          column: 37
        },
        end: {
          line: 161,
          column: 67
        }
      },
      "55": {
        start: {
          line: 163,
          column: 4
        },
        end: {
          line: 165,
          column: 60
        }
      },
      "56": {
        start: {
          line: 167,
          column: 2
        },
        end: {
          line: 167,
          column: 42
        }
      },
      "57": {
        start: {
          line: 171,
          column: 17
        },
        end: {
          line: 171,
          column: 58
        }
      },
      "58": {
        start: {
          line: 172,
          column: 16
        },
        end: {
          line: 176,
          column: 4
        }
      },
      "59": {
        start: {
          line: 173,
          column: 4
        },
        end: {
          line: 175,
          column: 23
        }
      },
      "60": {
        start: {
          line: 177,
          column: 2
        },
        end: {
          line: 177,
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
            column: 12
          },
          end: {
            line: 19,
            column: 13
          }
        },
        loc: {
          start: {
            line: 19,
            column: 18
          },
          end: {
            line: 40,
            column: 3
          }
        },
        line: 19
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 20,
            column: 11
          },
          end: {
            line: 20,
            column: 12
          }
        },
        loc: {
          start: {
            line: 20,
            column: 18
          },
          end: {
            line: 39,
            column: 5
          }
        },
        line: 20
      },
      "2": {
        name: "createSSRPlugin",
        decl: {
          start: {
            line: 44,
            column: 24
          },
          end: {
            line: 44,
            column: 39
          }
        },
        loc: {
          start: {
            line: 52,
            column: 3
          },
          end: {
            line: 82,
            column: 1
          }
        },
        line: 52
      },
      "3": {
        name: "ssrPlugin",
        decl: {
          start: {
            line: 53,
            column: 24
          },
          end: {
            line: 53,
            column: 33
          }
        },
        loc: {
          start: {
            line: 53,
            column: 75
          },
          end: {
            line: 81,
            column: 3
          }
        },
        line: 53
      },
      "4": {
        name: "legacySSRBodyTemplate",
        decl: {
          start: {
            line: 84,
            column: 9
          },
          end: {
            line: 84,
            column: 30
          }
        },
        loc: {
          start: {
            line: 84,
            column: 36
          },
          end: {
            line: 122,
            column: 1
          }
        },
        line: 84
      },
      "5": {
        name: "(anonymous_5)",
        decl: {
          start: {
            line: 87,
            column: 9
          },
          end: {
            line: 87,
            column: 10
          }
        },
        loc: {
          start: {
            line: 87,
            column: 20
          },
          end: {
            line: 89,
            column: 5
          }
        },
        line: 87
      },
      "6": {
        name: "(anonymous_6)",
        decl: {
          start: {
            line: 93,
            column: 9
          },
          end: {
            line: 93,
            column: 10
          }
        },
        loc: {
          start: {
            line: 93,
            column: 20
          },
          end: {
            line: 95,
            column: 5
          }
        },
        line: 93
      },
      "7": {
        name: "getCoreGlobals",
        decl: {
          start: {
            line: 124,
            column: 9
          },
          end: {
            line: 124,
            column: 23
          }
        },
        loc: {
          start: {
            line: 124,
            column: 29
          },
          end: {
            line: 134,
            column: 1
          }
        },
        line: 124
      },
      "8": {
        name: "getUrls",
        decl: {
          start: {
            line: 136,
            column: 9
          },
          end: {
            line: 136,
            column: 16
          }
        },
        loc: {
          start: {
            line: 136,
            column: 59
          },
          end: {
            line: 149,
            column: 1
          }
        },
        line: 136
      },
      "9": {
        name: "(anonymous_9)",
        decl: {
          start: {
            line: 140,
            column: 34
          },
          end: {
            line: 140,
            column: 35
          }
        },
        loc: {
          start: {
            line: 140,
            column: 40
          },
          end: {
            line: 148,
            column: 3
          }
        },
        line: 140
      },
      "10": {
        name: "getChunkScripts",
        decl: {
          start: {
            line: 151,
            column: 9
          },
          end: {
            line: 151,
            column: 24
          }
        },
        loc: {
          start: {
            line: 151,
            column: 30
          },
          end: {
            line: 168,
            column: 1
          }
        },
        line: 151
      },
      "11": {
        name: "(anonymous_11)",
        decl: {
          start: {
            line: 153,
            column: 4
          },
          end: {
            line: 153,
            column: 5
          }
        },
        loc: {
          start: {
            line: 153,
            column: 37
          },
          end: {
            line: 157,
            column: 5
          }
        },
        line: 153
      },
      "12": {
        name: "(anonymous_12)",
        decl: {
          start: {
            line: 161,
            column: 29
          },
          end: {
            line: 161,
            column: 30
          }
        },
        loc: {
          start: {
            line: 161,
            column: 37
          },
          end: {
            line: 161,
            column: 67
          }
        },
        line: 161
      },
      "13": {
        name: "(anonymous_13)",
        decl: {
          start: {
            line: 162,
            column: 8
          },
          end: {
            line: 162,
            column: 9
          }
        },
        loc: {
          start: {
            line: 162,
            column: 41
          },
          end: {
            line: 166,
            column: 3
          }
        },
        line: 162
      },
      "14": {
        name: "getPreloadHintLinks",
        decl: {
          start: {
            line: 170,
            column: 9
          },
          end: {
            line: 170,
            column: 28
          }
        },
        loc: {
          start: {
            line: 170,
            column: 34
          },
          end: {
            line: 178,
            column: 1
          }
        },
        line: 170
      },
      "15": {
        name: "(anonymous_15)",
        decl: {
          start: {
            line: 172,
            column: 41
          },
          end: {
            line: 172,
            column: 42
          }
        },
        loc: {
          start: {
            line: 172,
            column: 74
          },
          end: {
            line: 176,
            column: 3
          }
        },
        line: 172
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 23,
            column: 6
          },
          end: {
            line: 23,
            column: 71
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 23,
            column: 6
          },
          end: {
            line: 23,
            column: 71
          }
        }, {
          start: {
            line: 23,
            column: 6
          },
          end: {
            line: 23,
            column: 71
          }
        }],
        line: 23
      },
      "1": {
        loc: {
          start: {
            line: 26,
            column: 6
          },
          end: {
            line: 31,
            column: 7
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 26,
            column: 6
          },
          end: {
            line: 31,
            column: 7
          }
        }, {
          start: {
            line: 26,
            column: 6
          },
          end: {
            line: 31,
            column: 7
          }
        }],
        line: 26
      },
      "2": {
        loc: {
          start: {
            line: 28,
            column: 8
          },
          end: {
            line: 30,
            column: 9
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 28,
            column: 8
          },
          end: {
            line: 30,
            column: 9
          }
        }, {
          start: {
            line: 28,
            column: 8
          },
          end: {
            line: 30,
            column: 9
          }
        }],
        line: 28
      },
      "3": {
        loc: {
          start: {
            line: 36,
            column: 6
          },
          end: {
            line: 36,
            column: 44
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 36,
            column: 6
          },
          end: {
            line: 36,
            column: 44
          }
        }, {
          start: {
            line: 36,
            column: 6
          },
          end: {
            line: 36,
            column: 44
          }
        }],
        line: 36
      },
      "4": {
        loc: {
          start: {
            line: 37,
            column: 6
          },
          end: {
            line: 37,
            column: 66
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 37,
            column: 6
          },
          end: {
            line: 37,
            column: 66
          }
        }, {
          start: {
            line: 37,
            column: 6
          },
          end: {
            line: 37,
            column: 66
          }
        }],
        line: 37
      },
      "5": {
        loc: {
          start: {
            line: 54,
            column: 4
          },
          end: {
            line: 54,
            column: 40
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 54,
            column: 4
          },
          end: {
            line: 54,
            column: 40
          }
        }, {
          start: {
            line: 54,
            column: 4
          },
          end: {
            line: 54,
            column: 40
          }
        }],
        line: 54
      },
      "6": {
        loc: {
          start: {
            line: 72,
            column: 4
          },
          end: {
            line: 74,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 72,
            column: 4
          },
          end: {
            line: 74,
            column: 5
          }
        }, {
          start: {
            line: 72,
            column: 4
          },
          end: {
            line: 74,
            column: 5
          }
        }],
        line: 72
      },
      "7": {
        loc: {
          start: {
            line: 72,
            column: 8
          },
          end: {
            line: 72,
            column: 41
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 72,
            column: 8
          },
          end: {
            line: 72,
            column: 16
          }
        }, {
          start: {
            line: 72,
            column: 20
          },
          end: {
            line: 72,
            column: 41
          }
        }],
        line: 72
      },
      "8": {
        loc: {
          start: {
            line: 76,
            column: 4
          },
          end: {
            line: 80,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 76,
            column: 4
          },
          end: {
            line: 80,
            column: 5
          }
        }, {
          start: {
            line: 76,
            column: 4
          },
          end: {
            line: 80,
            column: 5
          }
        }],
        line: 76
      },
      "9": {
        loc: {
          start: {
            line: 139,
            column: 31
          },
          end: {
            line: 139,
            column: 78
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 139,
            column: 47
          },
          end: {
            line: 139,
            column: 73
          }
        }, {
          start: {
            line: 139,
            column: 76
          },
          end: {
            line: 139,
            column: 78
          }
        }],
        line: 139
      },
      "10": {
        loc: {
          start: {
            line: 142,
            column: 4
          },
          end: {
            line: 146,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 142,
            column: 4
          },
          end: {
            line: 146,
            column: 5
          }
        }, {
          start: {
            line: 142,
            column: 4
          },
          end: {
            line: 146,
            column: 5
          }
        }],
        line: 142
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
      "52": 0,
      "53": 0,
      "54": 0,
      "55": 0,
      "56": 0,
      "57": 0,
      "58": 0,
      "59": 0,
      "60": 0
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
      "15": 0
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
const botRegex = (cov_9vv6q15uj.s[0]++, /(bot|crawler|spider)/i);
const SSRDecider = (cov_9vv6q15uj.s[1]++, createPlugin({
  provides: () => {
    cov_9vv6q15uj.f[0]++;
    cov_9vv6q15uj.s[2]++;
    return ctx => {
      cov_9vv6q15uj.f[1]++;
      cov_9vv6q15uj.s[3]++;

      // If the request has one of these extensions, we assume it's not something that requires server-side rendering of virtual dom
      // TODO(#46): this check should probably look at the asset manifest to ensure asset 404s are handled correctly
      if (ctx.path.match(/\.(js|gif|jpg|png|pdf|json)$/)) {
        cov_9vv6q15uj.b[0][0]++;
        cov_9vv6q15uj.s[4]++;
        return false;
      } else {
        cov_9vv6q15uj.b[0][1]++;
      } // Bots don't always include the accept header.


      cov_9vv6q15uj.s[5]++;

      if (ctx.headers['user-agent']) {
        cov_9vv6q15uj.b[1][0]++;
        const agent = (cov_9vv6q15uj.s[6]++, ctx.headers['user-agent']);
        cov_9vv6q15uj.s[7]++;

        if (botRegex.test(agent)) {
          cov_9vv6q15uj.b[2][0]++;
          cov_9vv6q15uj.s[8]++;
          return true;
        } else {
          cov_9vv6q15uj.b[2][1]++;
        }
      } else {
        cov_9vv6q15uj.b[1][1]++;
      } // The Accept header is a good proxy for whether SSR should happen
      // Requesting an HTML page via the browser url bar generates a request with `text/html` in its Accept headers
      // XHR/fetch requests do not have `text/html` in the Accept headers


      cov_9vv6q15uj.s[9]++;

      if (!ctx.headers.accept) {
        cov_9vv6q15uj.b[3][0]++;
        cov_9vv6q15uj.s[10]++;
        return false;
      } else {
        cov_9vv6q15uj.b[3][1]++;
      }

      cov_9vv6q15uj.s[11]++;

      if (!ctx.headers.accept.includes('text/html')) {
        cov_9vv6q15uj.b[4][0]++;
        cov_9vv6q15uj.s[12]++;
        return false;
      } else {
        cov_9vv6q15uj.b[4][1]++;
      }

      cov_9vv6q15uj.s[13]++;
      return true;
    };
  }
}));
function createSSRPlugin({
  element,
  ssrDecider,
  ssrBodyTemplate
}) {
  cov_9vv6q15uj.f[2]++;
  cov_9vv6q15uj.s[14]++;
  return async function ssrPlugin(ctx, next) {
    cov_9vv6q15uj.f[3]++;
    cov_9vv6q15uj.s[15]++;

    if (!ssrDecider(ctx)) {
      cov_9vv6q15uj.b[5][0]++;
      cov_9vv6q15uj.s[16]++;
      return next();
    } else {
      cov_9vv6q15uj.b[5][1]++;
    }

    const template = (cov_9vv6q15uj.s[17]++, {
      htmlAttrs: {},
      bodyAttrs: {},
      title: '',
      head: [],
      body: []
    });
    cov_9vv6q15uj.s[18]++;
    ctx.element = element;
    cov_9vv6q15uj.s[19]++;
    ctx.rendered = '';
    cov_9vv6q15uj.s[20]++;
    ctx.template = template;
    cov_9vv6q15uj.s[21]++;
    ctx.type = 'text/html';
    cov_9vv6q15uj.s[22]++;
    await next(); // Allow someone to override the ssr by setting ctx.body
    // This is especially useful for things like ctx.redirect

    cov_9vv6q15uj.s[23]++;

    if ((cov_9vv6q15uj.b[7][0]++, ctx.body) && (cov_9vv6q15uj.b[7][1]++, ctx.respond !== false)) {
      cov_9vv6q15uj.b[6][0]++;
      cov_9vv6q15uj.s[24]++;
      return;
    } else {
      cov_9vv6q15uj.b[6][1]++;
    }

    cov_9vv6q15uj.s[25]++;

    if (ssrBodyTemplate) {
      cov_9vv6q15uj.b[8][0]++;
      cov_9vv6q15uj.s[26]++;
      ctx.body = ssrBodyTemplate(ctx);
    } else {
      cov_9vv6q15uj.b[8][1]++;
      cov_9vv6q15uj.s[27]++;
      ctx.body = legacySSRBodyTemplate(ctx);
    }
  };
}

function legacySSRBodyTemplate(ctx) {
  cov_9vv6q15uj.f[4]++;
  const {
    htmlAttrs,
    bodyAttrs,
    title,
    head,
    body
  } = (cov_9vv6q15uj.s[28]++, ctx.template);
  const safeAttrs = (cov_9vv6q15uj.s[29]++, Object.keys(htmlAttrs).map(attrKey => {
    cov_9vv6q15uj.f[5]++;
    cov_9vv6q15uj.s[30]++;
    return ` ${flowEscape(attrKey)}="${flowEscape(htmlAttrs[attrKey])}"`;
  }).join(''));
  const safeBodyAttrs = (cov_9vv6q15uj.s[31]++, Object.keys(bodyAttrs).map(attrKey => {
    cov_9vv6q15uj.f[6]++;
    cov_9vv6q15uj.s[32]++;
    return ` ${flowEscape(attrKey)}="${flowEscape(bodyAttrs[attrKey])}"`;
  }).join(''));
  const safeTitle = (cov_9vv6q15uj.s[33]++, flowEscape(title));
  const safeHead = (cov_9vv6q15uj.s[34]++, head.map(flowConsumeSanitizedHTML).join(''));
  const safeBody = (cov_9vv6q15uj.s[35]++, body.map(flowConsumeSanitizedHTML).join(''));
  const preloadHintLinks = (cov_9vv6q15uj.s[36]++, getPreloadHintLinks(ctx));
  const coreGlobals = (cov_9vv6q15uj.s[37]++, getCoreGlobals(ctx));
  const chunkScripts = (cov_9vv6q15uj.s[38]++, getChunkScripts(ctx));
  const bundleSplittingBootstrap = (cov_9vv6q15uj.s[39]++, [preloadHintLinks, coreGlobals, chunkScripts].join(''));
  cov_9vv6q15uj.s[40]++;
  return ['<!doctype html>', `<html${safeAttrs}>`, `<head>`, `<meta charset="utf-8" />`, `<title>${safeTitle}</title>`, `${bundleSplittingBootstrap}${safeHead}`, `</head>`, `<body${safeBodyAttrs}>${ctx.rendered}${safeBody}</body>`, '</html>'].join('');
}

function getCoreGlobals(ctx) {
  cov_9vv6q15uj.f[7]++;
  const {
    webpackPublicPath,
    nonce
  } = (cov_9vv6q15uj.s[41]++, ctx);
  cov_9vv6q15uj.s[42]++;
  return [`<script nonce="${nonce}">`, `window.performance && window.performance.mark && window.performance.mark('firstRenderStart');`, `__ROUTE_PREFIX__ = ${JSON.stringify(ctx.prefix)};`, // consumed by ./client
  `__WEBPACK_PUBLIC_PATH__ = ${JSON.stringify(webpackPublicPath)};`, // consumed by fusion-clientries/client-entry
  `</script>`].join('');
}

function getUrls({
  chunkUrlMap,
  webpackPublicPath
}, chunks) {
  cov_9vv6q15uj.f[8]++;
  // cross origin is needed to get meaningful errors in window.onerror
  const isCrossOrigin = (cov_9vv6q15uj.s[43]++, webpackPublicPath.startsWith('http'));
  const crossOriginAttribute = (cov_9vv6q15uj.s[44]++, isCrossOrigin ? (cov_9vv6q15uj.b[9][0]++, ' crossorigin="anonymous"') : (cov_9vv6q15uj.b[9][1]++, ''));
  cov_9vv6q15uj.s[45]++;
  return [...new Set(chunks)].map(id => {
    cov_9vv6q15uj.f[9]++;
    let url = (cov_9vv6q15uj.s[46]++, chunkUrlMap.get(id).get('es5'));
    cov_9vv6q15uj.s[47]++;

    if (webpackPublicPath.endsWith('/')) {
      cov_9vv6q15uj.b[10][0]++;
      cov_9vv6q15uj.s[48]++;
      url = webpackPublicPath + url;
    } else {
      cov_9vv6q15uj.b[10][1]++;
      cov_9vv6q15uj.s[49]++;
      url = webpackPublicPath + '/' + url;
    }

    cov_9vv6q15uj.s[50]++;
    return {
      url,
      crossOriginAttribute
    };
  });
}

function getChunkScripts(ctx) {
  cov_9vv6q15uj.f[10]++;
  const sync = (cov_9vv6q15uj.s[51]++, getUrls(ctx, ctx.syncChunks).map(({
    url,
    crossOriginAttribute
  }) => {
    cov_9vv6q15uj.f[11]++;
    cov_9vv6q15uj.s[52]++;
    return `<script nonce="${ctx.nonce}" defer${crossOriginAttribute} src="${url}"></script>`;
  }));
  const preloaded = (cov_9vv6q15uj.s[53]++, getUrls(ctx, ctx.preloadChunks.filter(item => {
    cov_9vv6q15uj.f[12]++;
    cov_9vv6q15uj.s[54]++;
    return !ctx.syncChunks.includes(item);
  })).map(({
    url,
    crossOriginAttribute
  }) => {
    cov_9vv6q15uj.f[13]++;
    cov_9vv6q15uj.s[55]++;
    return `<script nonce="${ctx.nonce}" defer${crossOriginAttribute} src="${url}"></script>`;
  }));
  cov_9vv6q15uj.s[56]++;
  return [...preloaded, ...sync].join('');
}

function getPreloadHintLinks(ctx) {
  cov_9vv6q15uj.f[14]++;
  const chunks = (cov_9vv6q15uj.s[57]++, [...ctx.preloadChunks, ...ctx.syncChunks]);
  const hints = (cov_9vv6q15uj.s[58]++, getUrls(ctx, chunks).map(({
    url,
    crossOriginAttribute
  }) => {
    cov_9vv6q15uj.f[15]++;
    cov_9vv6q15uj.s[59]++;
    return `<link rel="preload"${crossOriginAttribute} href="${url}" nonce="${ctx.nonce}" as="script" />`;
  }));
  cov_9vv6q15uj.s[60]++;
  return hints.join('');
}

var cov_1i9alyqkyt = function () {
  var path = "/Users/lhorie/Documents/test-private-monorepo/public/fusion-core/src/base-app.js",
      hash = "d57660a6bad21559b28e48884436606fddc7a846",
      Function = function () {}.constructor,
      global = new Function('return this')(),
      gcv = "__coverage__",
      coverageData = {
    path: "/Users/lhorie/Documents/test-private-monorepo/public/fusion-core/src/base-app.js",
    statementMap: {
      "0": {
        start: {
          line: 23,
          column: 4
        },
        end: {
          line: 23,
          column: 32
        }
      },
      "1": {
        start: {
          line: 24,
          column: 4
        },
        end: {
          line: 24,
          column: 37
        }
      },
      "2": {
        start: {
          line: 25,
          column: 4
        },
        end: {
          line: 25,
          column: 33
        }
      },
      "3": {
        start: {
          line: 26,
          column: 4
        },
        end: {
          line: 26,
          column: 22
        }
      },
      "4": {
        start: {
          line: 27,
          column: 4
        },
        end: {
          line: 27,
          column: 23
        }
      },
      "5": {
        start: {
          line: 28,
          column: 4
        },
        end: {
          line: 28,
          column: 42
        }
      },
      "6": {
        start: {
          line: 29,
          column: 4
        },
        end: {
          line: 29,
          column: 49
        }
      },
      "7": {
        start: {
          line: 30,
          column: 4
        },
        end: {
          line: 30,
          column: 47
        }
      },
      "8": {
        start: {
          line: 51,
          column: 21
        },
        end: {
          line: 51,
          column: 54
        }
      },
      "9": {
        start: {
          line: 52,
          column: 18
        },
        end: {
          line: 54,
          column: 36
        }
      },
      "10": {
        start: {
          line: 55,
          column: 23
        },
        end: {
          line: 55,
          column: 59
        }
      },
      "11": {
        start: {
          line: 56,
          column: 4
        },
        end: {
          line: 66,
          column: 5
        }
      },
      "12": {
        start: {
          line: 57,
          column: 6
        },
        end: {
          line: 65,
          column: 8
        }
      },
      "13": {
        start: {
          line: 68,
          column: 4
        },
        end: {
          line: 75,
          column: 5
        }
      },
      "14": {
        start: {
          line: 69,
          column: 6
        },
        end: {
          line: 69,
          column: 28
        }
      },
      "15": {
        start: {
          line: 70,
          column: 6
        },
        end: {
          line: 74,
          column: 8
        }
      },
      "16": {
        start: {
          line: 72,
          column: 10
        },
        end: {
          line: 72,
          column: 69
        }
      },
      "17": {
        start: {
          line: 76,
          column: 4
        },
        end: {
          line: 76,
          column: 68
        }
      },
      "18": {
        start: {
          line: 77,
          column: 4
        },
        end: {
          line: 79,
          column: 5
        }
      },
      "19": {
        start: {
          line: 78,
          column: 6
        },
        end: {
          line: 78,
          column: 62
        }
      },
      "20": {
        start: {
          line: 80,
          column: 4
        },
        end: {
          line: 80,
          column: 40
        }
      },
      "21": {
        start: {
          line: 83,
          column: 4
        },
        end: {
          line: 83,
          column: 29
        }
      },
      "22": {
        start: {
          line: 84,
          column: 33
        },
        end: {
          line: 87,
          column: 5
        }
      },
      "23": {
        start: {
          line: 88,
          column: 4
        },
        end: {
          line: 94,
          column: 5
        }
      },
      "24": {
        start: {
          line: 89,
          column: 6
        },
        end: {
          line: 93,
          column: 7
        }
      },
      "25": {
        start: {
          line: 90,
          column: 8
        },
        end: {
          line: 92,
          column: 10
        }
      },
      "26": {
        start: {
          line: 91,
          column: 10
        },
        end: {
          line: 91,
          column: 50
        }
      },
      "27": {
        start: {
          line: 95,
          column: 4
        },
        end: {
          line: 100,
          column: 7
        }
      },
      "28": {
        start: {
          line: 101,
          column: 18
        },
        end: {
          line: 110,
          column: 5
        }
      },
      "29": {
        start: {
          line: 102,
          column: 20
        },
        end: {
          line: 102,
          column: 37
        }
      },
      "30": {
        start: {
          line: 103,
          column: 6
        },
        end: {
          line: 103,
          column: 59
        }
      },
      "31": {
        start: {
          line: 104,
          column: 6
        },
        end: {
          line: 104,
          column: 55
        }
      },
      "32": {
        start: {
          line: 105,
          column: 6
        },
        end: {
          line: 105,
          column: 51
        }
      },
      "33": {
        start: {
          line: 106,
          column: 6
        },
        end: {
          line: 108,
          column: 7
        }
      },
      "34": {
        start: {
          line: 107,
          column: 8
        },
        end: {
          line: 107,
          column: 57
        }
      },
      "35": {
        start: {
          line: 109,
          column: 6
        },
        end: {
          line: 109,
          column: 21
        }
      },
      "36": {
        start: {
          line: 111,
          column: 4
        },
        end: {
          line: 111,
          column: 19
        }
      },
      "37": {
        start: {
          line: 114,
          column: 4
        },
        end: {
          line: 116,
          column: 5
        }
      },
      "38": {
        start: {
          line: 115,
          column: 6
        },
        end: {
          line: 115,
          column: 30
        }
      },
      "39": {
        start: {
          line: 115,
          column: 25
        },
        end: {
          line: 115,
          column: 29
        }
      },
      "40": {
        start: {
          line: 117,
          column: 4
        },
        end: {
          line: 117,
          column: 52
        }
      },
      "41": {
        start: {
          line: 120,
          column: 4
        },
        end: {
          line: 120,
          column: 67
        }
      },
      "42": {
        start: {
          line: 121,
          column: 40
        },
        end: {
          line: 127,
          column: 5
        }
      },
      "43": {
        start: {
          line: 128,
          column: 4
        },
        end: {
          line: 128,
          column: 46
        }
      },
      "44": {
        start: {
          line: 130,
          column: 4
        },
        end: {
          line: 132,
          column: 5
        }
      },
      "45": {
        start: {
          line: 131,
          column: 6
        },
        end: {
          line: 131,
          column: 31
        }
      },
      "46": {
        start: {
          line: 133,
          column: 4
        },
        end: {
          line: 138,
          column: 7
        }
      },
      "47": {
        start: {
          line: 141,
          column: 4
        },
        end: {
          line: 141,
          column: 54
        }
      },
      "48": {
        start: {
          line: 141,
          column: 47
        },
        end: {
          line: 141,
          column: 51
        }
      },
      "49": {
        start: {
          line: 144,
          column: 4
        },
        end: {
          line: 146,
          column: 5
        }
      },
      "50": {
        start: {
          line: 145,
          column: 6
        },
        end: {
          line: 145,
          column: 62
        }
      },
      "51": {
        start: {
          line: 147,
          column: 4
        },
        end: {
          line: 147,
          column: 47
        }
      },
      "52": {
        start: {
          line: 148,
          column: 21
        },
        end: {
          line: 148,
          column: 30
        }
      },
      "53": {
        start: {
          line: 149,
          column: 28
        },
        end: {
          line: 149,
          column: 37
        }
      },
      "54": {
        start: {
          line: 150,
          column: 22
        },
        end: {
          line: 150,
          column: 31
        }
      },
      "55": {
        start: {
          line: 151,
          column: 23
        },
        end: {
          line: 151,
          column: 38
        }
      },
      "56": {
        start: {
          line: 152,
          column: 28
        },
        end: {
          line: 152,
          column: 30
        }
      },
      "57": {
        start: {
          line: 153,
          column: 29
        },
        end: {
          line: 153,
          column: 31
        }
      },
      "58": {
        start: {
          line: 154,
          column: 25
        },
        end: {
          line: 297,
          column: 5
        }
      },
      "59": {
        start: {
          line: 156,
          column: 6
        },
        end: {
          line: 161,
          column: 7
        }
      },
      "60": {
        start: {
          line: 157,
          column: 25
        },
        end: {
          line: 157,
          column: 61
        }
      },
      "61": {
        start: {
          line: 158,
          column: 8
        },
        end: {
          line: 160,
          column: 9
        }
      },
      "62": {
        start: {
          line: 159,
          column: 10
        },
        end: {
          line: 159,
          column: 27
        }
      },
      "63": {
        start: {
          line: 162,
          column: 6
        },
        end: {
          line: 164,
          column: 7
        }
      },
      "64": {
        start: {
          line: 163,
          column: 8
        },
        end: {
          line: 163,
          column: 48
        }
      },
      "65": {
        start: {
          line: 167,
          column: 6
        },
        end: {
          line: 169,
          column: 7
        }
      },
      "66": {
        start: {
          line: 168,
          column: 8
        },
        end: {
          line: 168,
          column: 77
        }
      },
      "67": {
        start: {
          line: 173,
          column: 8
        },
        end: {
          line: 173,
          column: 48
        }
      },
      "68": {
        start: {
          line: 174,
          column: 6
        },
        end: {
          line: 242,
          column: 7
        }
      },
      "69": {
        start: {
          line: 176,
          column: 8
        },
        end: {
          line: 241,
          column: 9
        }
      },
      "70": {
        start: {
          line: 177,
          column: 10
        },
        end: {
          line: 177,
          column: 42
        }
      },
      "71": {
        start: {
          line: 179,
          column: 29
        },
        end: {
          line: 179,
          column: 66
        }
      },
      "72": {
        start: {
          line: 185,
          column: 38
        },
        end: {
          line: 194,
          column: 11
        }
      },
      "73": {
        start: {
          line: 186,
          column: 12
        },
        end: {
          line: 193,
          column: 49
        }
      },
      "74": {
        start: {
          line: 188,
          column: 16
        },
        end: {
          line: 190,
          column: 17
        }
      },
      "75": {
        start: {
          line: 189,
          column: 18
        },
        end: {
          line: 189,
          column: 31
        }
      },
      "76": {
        start: {
          line: 191,
          column: 16
        },
        end: {
          line: 191,
          column: 74
        }
      },
      "77": {
        start: {
          line: 193,
          column: 28
        },
        end: {
          line: 193,
          column: 47
        }
      },
      "78": {
        start: {
          line: 195,
          column: 41
        },
        end: {
          line: 209,
          column: 11
        }
      },
      "79": {
        start: {
          line: 196,
          column: 12
        },
        end: {
          line: 208,
          column: 17
        }
      },
      "80": {
        start: {
          line: 198,
          column: 16
        },
        end: {
          line: 200,
          column: 17
        }
      },
      "81": {
        start: {
          line: 199,
          column: 18
        },
        end: {
          line: 199,
          column: 31
        }
      },
      "82": {
        start: {
          line: 201,
          column: 16
        },
        end: {
          line: 201,
          column: 68
        }
      },
      "83": {
        start: {
          line: 204,
          column: 38
        },
        end: {
          line: 204,
          column: 72
        }
      },
      "84": {
        start: {
          line: 205,
          column: 16
        },
        end: {
          line: 207,
          column: 20
        }
      },
      "85": {
        start: {
          line: 210,
          column: 34
        },
        end: {
          line: 213,
          column: 11
        }
      },
      "86": {
        start: {
          line: 216,
          column: 12
        },
        end: {
          line: 216,
          column: 75
        }
      },
      "87": {
        start: {
          line: 218,
          column: 12
        },
        end: {
          line: 219,
          column: 65
        }
      },
      "88": {
        start: {
          line: 219,
          column: 41
        },
        end: {
          line: 219,
          column: 53
        }
      },
      "89": {
        start: {
          line: 220,
          column: 24
        },
        end: {
          line: 220,
          column: 66
        }
      },
      "90": {
        start: {
          line: 220,
          column: 47
        },
        end: {
          line: 220,
          column: 65
        }
      },
      "91": {
        start: {
          line: 221,
          column: 23
        },
        end: {
          line: 223,
          column: 57
        }
      },
      "92": {
        start: {
          line: 224,
          column: 23
        },
        end: {
          line: 224,
          column: 79
        }
      },
      "93": {
        start: {
          line: 225,
          column: 30
        },
        end: {
          line: 233,
          column: 16
        }
      },
      "94": {
        start: {
          line: 227,
          column: 29
        },
        end: {
          line: 227,
          column: 50
        }
      },
      "95": {
        start: {
          line: 229,
          column: 32
        },
        end: {
          line: 229,
          column: 70
        }
      },
      "96": {
        start: {
          line: 229,
          column: 51
        },
        end: {
          line: 229,
          column: 69
        }
      },
      "97": {
        start: {
          line: 230,
          column: 18
        },
        end: {
          line: 230,
          column: 70
        }
      },
      "98": {
        start: {
          line: 235,
          column: 12
        },
        end: {
          line: 237,
          column: 111
        }
      },
      "99": {
        start: {
          line: 238,
          column: 10
        },
        end: {
          line: 240,
          column: 12
        }
      },
      "100": {
        start: {
          line: 245,
          column: 6
        },
        end: {
          line: 245,
          column: 40
        }
      },
      "101": {
        start: {
          line: 248,
          column: 31
        },
        end: {
          line: 248,
          column: 60
        }
      },
      "102": {
        start: {
          line: 249,
          column: 29
        },
        end: {
          line: 249,
          column: 31
        }
      },
      "103": {
        start: {
          line: 250,
          column: 8
        },
        end: {
          line: 253,
          column: 9
        }
      },
      "104": {
        start: {
          line: 251,
          column: 34
        },
        end: {
          line: 251,
          column: 53
        }
      },
      "105": {
        start: {
          line: 252,
          column: 10
        },
        end: {
          line: 252,
          column: 69
        }
      },
      "106": {
        start: {
          line: 256,
          column: 10
        },
        end: {
          line: 256,
          column: 79
        }
      },
      "107": {
        start: {
          line: 257,
          column: 8
        },
        end: {
          line: 259,
          column: 9
        }
      },
      "108": {
        start: {
          line: 258,
          column: 10
        },
        end: {
          line: 258,
          column: 74
        }
      },
      "109": {
        start: {
          line: 260,
          column: 8
        },
        end: {
          line: 260,
          column: 24
        }
      },
      "110": {
        start: {
          line: 263,
          column: 21
        },
        end: {
          line: 263,
          column: 26
        }
      },
      "111": {
        start: {
          line: 264,
          column: 6
        },
        end: {
          line: 275,
          column: 7
        }
      },
      "112": {
        start: {
          line: 265,
          column: 8
        },
        end: {
          line: 265,
          column: 43
        }
      },
      "113": {
        start: {
          line: 266,
          column: 8
        },
        end: {
          line: 272,
          column: 9
        }
      },
      "114": {
        start: {
          line: 267,
          column: 10
        },
        end: {
          line: 271,
          column: 13
        }
      },
      "115": {
        start: {
          line: 268,
          column: 12
        },
        end: {
          line: 270,
          column: 34
        }
      },
      "116": {
        start: {
          line: 274,
          column: 8
        },
        end: {
          line: 274,
          column: 35
        }
      },
      "117": {
        start: {
          line: 277,
          column: 6
        },
        end: {
          line: 293,
          column: 7
        }
      },
      "118": {
        start: {
          line: 278,
          column: 8
        },
        end: {
          line: 292,
          column: 11
        }
      },
      "119": {
        start: {
          line: 279,
          column: 29
        },
        end: {
          line: 279,
          column: 40
        }
      },
      "120": {
        start: {
          line: 280,
          column: 10
        },
        end: {
          line: 280,
          column: 51
        }
      },
      "121": {
        start: {
          line: 281,
          column: 10
        },
        end: {
          line: 290,
          column: 11
        }
      },
      "122": {
        start: {
          line: 283,
          column: 12
        },
        end: {
          line: 283,
          column: 42
        }
      },
      "123": {
        start: {
          line: 284,
          column: 12
        },
        end: {
          line: 288,
          column: 13
        }
      },
      "124": {
        start: {
          line: 285,
          column: 14
        },
        end: {
          line: 287,
          column: 16
        }
      },
      "125": {
        start: {
          line: 286,
          column: 16
        },
        end: {
          line: 286,
          column: 56
        }
      },
      "126": {
        start: {
          line: 289,
          column: 12
        },
        end: {
          line: 289,
          column: 55
        }
      },
      "127": {
        start: {
          line: 291,
          column: 10
        },
        end: {
          line: 291,
          column: 34
        }
      },
      "128": {
        start: {
          line: 294,
          column: 6
        },
        end: {
          line: 294,
          column: 49
        }
      },
      "129": {
        start: {
          line: 295,
          column: 6
        },
        end: {
          line: 295,
          column: 43
        }
      },
      "130": {
        start: {
          line: 296,
          column: 6
        },
        end: {
          line: 296,
          column: 22
        }
      },
      "131": {
        start: {
          line: 299,
          column: 4
        },
        end: {
          line: 301,
          column: 5
        }
      },
      "132": {
        start: {
          line: 300,
          column: 6
        },
        end: {
          line: 300,
          column: 36
        }
      },
      "133": {
        start: {
          line: 302,
          column: 4
        },
        end: {
          line: 312,
          column: 5
        }
      },
      "134": {
        start: {
          line: 303,
          column: 6
        },
        end: {
          line: 311,
          column: 7
        }
      },
      "135": {
        start: {
          line: 308,
          column: 8
        },
        end: {
          line: 310,
          column: 10
        }
      },
      "136": {
        start: {
          line: 314,
          column: 4
        },
        end: {
          line: 314,
          column: 35
        }
      },
      "137": {
        start: {
          line: 315,
          column: 4
        },
        end: {
          line: 315,
          column: 65
        }
      },
      "138": {
        start: {
          line: 315,
          column: 32
        },
        end: {
          line: 315,
          column: 64
        }
      },
      "139": {
        start: {
          line: 318,
          column: 4
        },
        end: {
          line: 320,
          column: 5
        }
      },
      "140": {
        start: {
          line: 319,
          column: 6
        },
        end: {
          line: 319,
          column: 64
        }
      },
      "141": {
        start: {
          line: 321,
          column: 4
        },
        end: {
          line: 321,
          column: 35
        }
      },
      "142": {
        start: {
          line: 327,
          column: 2
        },
        end: {
          line: 329,
          column: 3
        }
      },
      "143": {
        start: {
          line: 328,
          column: 4
        },
        end: {
          line: 328,
          column: 21
        }
      },
      "144": {
        start: {
          line: 330,
          column: 2
        },
        end: {
          line: 330,
          column: 15
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
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
            column: 56
          },
          end: {
            line: 31,
            column: 3
          }
        },
        line: 22
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 50,
            column: 26
          },
          end: {
            line: 50,
            column: 27
          }
        },
        loc: {
          start: {
            line: 50,
            column: 59
          },
          end: {
            line: 81,
            column: 3
          }
        },
        line: 50
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 71,
            column: 15
          },
          end: {
            line: 71,
            column: 16
          }
        },
        loc: {
          start: {
            line: 71,
            column: 21
          },
          end: {
            line: 73,
            column: 9
          }
        },
        line: 71
      },
      "3": {
        name: "(anonymous_3)",
        decl: {
          start: {
            line: 82,
            column: 2
          },
          end: {
            line: 82,
            column: 3
          }
        },
        loc: {
          start: {
            line: 82,
            column: 58
          },
          end: {
            line: 112,
            column: 3
          }
        },
        line: 82
      },
      "4": {
        name: "(anonymous_4)",
        decl: {
          start: {
            line: 90,
            column: 42
          },
          end: {
            line: 90,
            column: 43
          }
        },
        loc: {
          start: {
            line: 91,
            column: 10
          },
          end: {
            line: 91,
            column: 50
          }
        },
        line: 91
      },
      "5": {
        name: "(anonymous_5)",
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
            column: 46
          },
          end: {
            line: 110,
            column: 5
          }
        },
        line: 101
      },
      "6": {
        name: "(anonymous_6)",
        decl: {
          start: {
            line: 113,
            column: 2
          },
          end: {
            line: 113,
            column: 3
          }
        },
        loc: {
          start: {
            line: 113,
            column: 37
          },
          end: {
            line: 118,
            column: 3
          }
        },
        line: 113
      },
      "7": {
        name: "(anonymous_7)",
        decl: {
          start: {
            line: 115,
            column: 19
          },
          end: {
            line: 115,
            column: 20
          }
        },
        loc: {
          start: {
            line: 115,
            column: 25
          },
          end: {
            line: 115,
            column: 29
          }
        },
        line: 115
      },
      "8": {
        name: "(anonymous_8)",
        decl: {
          start: {
            line: 119,
            column: 2
          },
          end: {
            line: 119,
            column: 3
          }
        },
        loc: {
          start: {
            line: 119,
            column: 66
          },
          end: {
            line: 139,
            column: 3
          }
        },
        line: 119
      },
      "9": {
        name: "(anonymous_9)",
        decl: {
          start: {
            line: 140,
            column: 2
          },
          end: {
            line: 140,
            column: 3
          }
        },
        loc: {
          start: {
            line: 140,
            column: 12
          },
          end: {
            line: 142,
            column: 3
          }
        },
        line: 140
      },
      "10": {
        name: "(anonymous_10)",
        decl: {
          start: {
            line: 141,
            column: 41
          },
          end: {
            line: 141,
            column: 42
          }
        },
        loc: {
          start: {
            line: 141,
            column: 47
          },
          end: {
            line: 141,
            column: 51
          }
        },
        line: 141
      },
      "11": {
        name: "(anonymous_11)",
        decl: {
          start: {
            line: 143,
            column: 2
          },
          end: {
            line: 143,
            column: 3
          }
        },
        loc: {
          start: {
            line: 143,
            column: 23
          },
          end: {
            line: 316,
            column: 3
          }
        },
        line: 143
      },
      "12": {
        name: "(anonymous_12)",
        decl: {
          start: {
            line: 154,
            column: 25
          },
          end: {
            line: 154,
            column: 26
          }
        },
        loc: {
          start: {
            line: 154,
            column: 68
          },
          end: {
            line: 297,
            column: 5
          }
        },
        line: 154
      },
      "13": {
        name: "(anonymous_13)",
        decl: {
          start: {
            line: 185,
            column: 38
          },
          end: {
            line: 185,
            column: 39
          }
        },
        loc: {
          start: {
            line: 185,
            column: 44
          },
          end: {
            line: 194,
            column: 11
          }
        },
        line: 185
      },
      "14": {
        name: "(anonymous_14)",
        decl: {
          start: {
            line: 187,
            column: 22
          },
          end: {
            line: 187,
            column: 23
          }
        },
        loc: {
          start: {
            line: 187,
            column: 31
          },
          end: {
            line: 192,
            column: 15
          }
        },
        line: 187
      },
      "15": {
        name: "(anonymous_15)",
        decl: {
          start: {
            line: 193,
            column: 19
          },
          end: {
            line: 193,
            column: 20
          }
        },
        loc: {
          start: {
            line: 193,
            column: 28
          },
          end: {
            line: 193,
            column: 47
          }
        },
        line: 193
      },
      "16": {
        name: "(anonymous_16)",
        decl: {
          start: {
            line: 195,
            column: 41
          },
          end: {
            line: 195,
            column: 42
          }
        },
        loc: {
          start: {
            line: 195,
            column: 47
          },
          end: {
            line: 209,
            column: 11
          }
        },
        line: 195
      },
      "17": {
        name: "(anonymous_17)",
        decl: {
          start: {
            line: 197,
            column: 22
          },
          end: {
            line: 197,
            column: 23
          }
        },
        loc: {
          start: {
            line: 197,
            column: 40
          },
          end: {
            line: 202,
            column: 15
          }
        },
        line: 197
      },
      "18": {
        name: "(anonymous_18)",
        decl: {
          start: {
            line: 203,
            column: 19
          },
          end: {
            line: 203,
            column: 20
          }
        },
        loc: {
          start: {
            line: 203,
            column: 35
          },
          end: {
            line: 208,
            column: 15
          }
        },
        line: 203
      },
      "19": {
        name: "(anonymous_19)",
        decl: {
          start: {
            line: 219,
            column: 32
          },
          end: {
            line: 219,
            column: 33
          }
        },
        loc: {
          start: {
            line: 219,
            column: 41
          },
          end: {
            line: 219,
            column: 53
          }
        },
        line: 219
      },
      "20": {
        name: "(anonymous_20)",
        decl: {
          start: {
            line: 220,
            column: 42
          },
          end: {
            line: 220,
            column: 43
          }
        },
        loc: {
          start: {
            line: 220,
            column: 47
          },
          end: {
            line: 220,
            column: 65
          }
        },
        line: 220
      },
      "21": {
        name: "(anonymous_21)",
        decl: {
          start: {
            line: 227,
            column: 24
          },
          end: {
            line: 227,
            column: 25
          }
        },
        loc: {
          start: {
            line: 227,
            column: 29
          },
          end: {
            line: 227,
            column: 50
          }
        },
        line: 227
      },
      "22": {
        name: "(anonymous_22)",
        decl: {
          start: {
            line: 228,
            column: 21
          },
          end: {
            line: 228,
            column: 22
          }
        },
        loc: {
          start: {
            line: 228,
            column: 26
          },
          end: {
            line: 231,
            column: 17
          }
        },
        line: 228
      },
      "23": {
        name: "(anonymous_23)",
        decl: {
          start: {
            line: 229,
            column: 46
          },
          end: {
            line: 229,
            column: 47
          }
        },
        loc: {
          start: {
            line: 229,
            column: 51
          },
          end: {
            line: 229,
            column: 69
          }
        },
        line: 229
      },
      "24": {
        name: "resolvePlugin",
        decl: {
          start: {
            line: 247,
            column: 15
          },
          end: {
            line: 247,
            column: 28
          }
        },
        loc: {
          start: {
            line: 247,
            column: 37
          },
          end: {
            line: 261,
            column: 7
          }
        },
        line: 247
      },
      "25": {
        name: "(anonymous_25)",
        decl: {
          start: {
            line: 267,
            column: 29
          },
          end: {
            line: 267,
            column: 30
          }
        },
        loc: {
          start: {
            line: 267,
            column: 40
          },
          end: {
            line: 271,
            column: 11
          }
        },
        line: 267
      },
      "26": {
        name: "(anonymous_26)",
        decl: {
          start: {
            line: 278,
            column: 26
          },
          end: {
            line: 278,
            column: 27
          }
        },
        loc: {
          start: {
            line: 278,
            column: 31
          },
          end: {
            line: 292,
            column: 9
          }
        },
        line: 278
      },
      "27": {
        name: "(anonymous_27)",
        decl: {
          start: {
            line: 285,
            column: 55
          },
          end: {
            line: 285,
            column: 56
          }
        },
        loc: {
          start: {
            line: 286,
            column: 16
          },
          end: {
            line: 286,
            column: 56
          }
        },
        line: 286
      },
      "28": {
        name: "(anonymous_28)",
        decl: {
          start: {
            line: 315,
            column: 23
          },
          end: {
            line: 315,
            column: 24
          }
        },
        loc: {
          start: {
            line: 315,
            column: 32
          },
          end: {
            line: 315,
            column: 64
          }
        },
        line: 315
      },
      "29": {
        name: "(anonymous_29)",
        decl: {
          start: {
            line: 317,
            column: 2
          },
          end: {
            line: 317,
            column: 3
          }
        },
        loc: {
          start: {
            line: 317,
            column: 54
          },
          end: {
            line: 322,
            column: 3
          }
        },
        line: 317
      },
      "30": {
        name: "getTokenRef",
        decl: {
          start: {
            line: 326,
            column: 9
          },
          end: {
            line: 326,
            column: 20
          }
        },
        loc: {
          start: {
            line: 326,
            column: 28
          },
          end: {
            line: 331,
            column: 1
          }
        },
        line: 326
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
            line: 28,
            column: 41
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
            column: 6
          }
        }, {
          start: {
            line: 28,
            column: 10
          },
          end: {
            line: 28,
            column: 41
          }
        }],
        line: 28
      },
      "1": {
        loc: {
          start: {
            line: 29,
            column: 4
          },
          end: {
            line: 29,
            column: 48
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 29,
            column: 4
          },
          end: {
            line: 29,
            column: 10
          }
        }, {
          start: {
            line: 29,
            column: 14
          },
          end: {
            line: 29,
            column: 48
          }
        }],
        line: 29
      },
      "2": {
        loc: {
          start: {
            line: 52,
            column: 18
          },
          end: {
            line: 54,
            column: 36
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 53,
            column: 9
          },
          end: {
            line: 53,
            column: 38
          }
        }, {
          start: {
            line: 54,
            column: 8
          },
          end: {
            line: 54,
            column: 36
          }
        }],
        line: 52
      },
      "3": {
        loc: {
          start: {
            line: 55,
            column: 23
          },
          end: {
            line: 55,
            column: 59
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 55,
            column: 34
          },
          end: {
            line: 55,
            column: 44
          }
        }, {
          start: {
            line: 55,
            column: 47
          },
          end: {
            line: 55,
            column: 59
          }
        }],
        line: 55
      },
      "4": {
        loc: {
          start: {
            line: 56,
            column: 4
          },
          end: {
            line: 66,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 56,
            column: 4
          },
          end: {
            line: 66,
            column: 5
          }
        }, {
          start: {
            line: 56,
            column: 4
          },
          end: {
            line: 66,
            column: 5
          }
        }],
        line: 56
      },
      "5": {
        loc: {
          start: {
            line: 56,
            column: 8
          },
          end: {
            line: 56,
            column: 57
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 56,
            column: 8
          },
          end: {
            line: 56,
            column: 17
          }
        }, {
          start: {
            line: 56,
            column: 22
          },
          end: {
            line: 56,
            column: 35
          }
        }, {
          start: {
            line: 56,
            column: 39
          },
          end: {
            line: 56,
            column: 56
          }
        }],
        line: 56
      },
      "6": {
        loc: {
          start: {
            line: 58,
            column: 8
          },
          end: {
            line: 64,
            column: 48
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 59,
            column: 12
          },
          end: {
            line: 63,
            column: 64
          }
        }, {
          start: {
            line: 64,
            column: 12
          },
          end: {
            line: 64,
            column: 48
          }
        }],
        line: 58
      },
      "7": {
        loc: {
          start: {
            line: 62,
            column: 14
          },
          end: {
            line: 62,
            column: 45
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 62,
            column: 25
          },
          end: {
            line: 62,
            column: 34
          }
        }, {
          start: {
            line: 62,
            column: 37
          },
          end: {
            line: 62,
            column: 45
          }
        }],
        line: 62
      },
      "8": {
        loc: {
          start: {
            line: 63,
            column: 30
          },
          end: {
            line: 63,
            column: 61
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 63,
            column: 41
          },
          end: {
            line: 63,
            column: 49
          }
        }, {
          start: {
            line: 63,
            column: 52
          },
          end: {
            line: 63,
            column: 61
          }
        }],
        line: 63
      },
      "9": {
        loc: {
          start: {
            line: 68,
            column: 4
          },
          end: {
            line: 75,
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
            line: 75,
            column: 5
          }
        }, {
          start: {
            line: 68,
            column: 4
          },
          end: {
            line: 75,
            column: 5
          }
        }],
        line: 68
      },
      "10": {
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
      },
      "11": {
        loc: {
          start: {
            line: 77,
            column: 8
          },
          end: {
            line: 77,
            column: 33
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 77,
            column: 8
          },
          end: {
            line: 77,
            column: 13
          }
        }, {
          start: {
            line: 77,
            column: 17
          },
          end: {
            line: 77,
            column: 33
          }
        }],
        line: 77
      },
      "12": {
        loc: {
          start: {
            line: 84,
            column: 33
          },
          end: {
            line: 87,
            column: 5
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 84,
            column: 33
          },
          end: {
            line: 84,
            column: 72
          }
        }, {
          start: {
            line: 84,
            column: 76
          },
          end: {
            line: 87,
            column: 5
          }
        }],
        line: 84
      },
      "13": {
        loc: {
          start: {
            line: 88,
            column: 4
          },
          end: {
            line: 94,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 88,
            column: 4
          },
          end: {
            line: 94,
            column: 5
          }
        }, {
          start: {
            line: 88,
            column: 4
          },
          end: {
            line: 94,
            column: 5
          }
        }],
        line: 88
      },
      "14": {
        loc: {
          start: {
            line: 88,
            column: 8
          },
          end: {
            line: 88,
            column: 33
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 88,
            column: 8
          },
          end: {
            line: 88,
            column: 13
          }
        }, {
          start: {
            line: 88,
            column: 17
          },
          end: {
            line: 88,
            column: 33
          }
        }],
        line: 88
      },
      "15": {
        loc: {
          start: {
            line: 89,
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
            line: 89,
            column: 6
          },
          end: {
            line: 93,
            column: 7
          }
        }, {
          start: {
            line: 89,
            column: 6
          },
          end: {
            line: 93,
            column: 7
          }
        }],
        line: 89
      },
      "16": {
        loc: {
          start: {
            line: 106,
            column: 6
          },
          end: {
            line: 108,
            column: 7
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 106,
            column: 6
          },
          end: {
            line: 108,
            column: 7
          }
        }, {
          start: {
            line: 106,
            column: 6
          },
          end: {
            line: 108,
            column: 7
          }
        }],
        line: 106
      },
      "17": {
        loc: {
          start: {
            line: 114,
            column: 4
          },
          end: {
            line: 116,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 114,
            column: 4
          },
          end: {
            line: 116,
            column: 5
          }
        }, {
          start: {
            line: 114,
            column: 4
          },
          end: {
            line: 116,
            column: 5
          }
        }],
        line: 114
      },
      "18": {
        loc: {
          start: {
            line: 121,
            column: 40
          },
          end: {
            line: 127,
            column: 5
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 121,
            column: 40
          },
          end: {
            line: 123,
            column: 5
          }
        }, {
          start: {
            line: 123,
            column: 9
          },
          end: {
            line: 127,
            column: 5
          }
        }],
        line: 121
      },
      "19": {
        loc: {
          start: {
            line: 130,
            column: 4
          },
          end: {
            line: 132,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 130,
            column: 4
          },
          end: {
            line: 132,
            column: 5
          }
        }, {
          start: {
            line: 130,
            column: 4
          },
          end: {
            line: 132,
            column: 5
          }
        }],
        line: 130
      },
      "20": {
        loc: {
          start: {
            line: 130,
            column: 8
          },
          end: {
            line: 130,
            column: 45
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 130,
            column: 8
          },
          end: {
            line: 130,
            column: 17
          }
        }, {
          start: {
            line: 130,
            column: 21
          },
          end: {
            line: 130,
            column: 45
          }
        }],
        line: 130
      },
      "21": {
        loc: {
          start: {
            line: 144,
            column: 4
          },
          end: {
            line: 146,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 144,
            column: 4
          },
          end: {
            line: 146,
            column: 5
          }
        }, {
          start: {
            line: 144,
            column: 4
          },
          end: {
            line: 146,
            column: 5
          }
        }],
        line: 144
      },
      "22": {
        loc: {
          start: {
            line: 156,
            column: 6
          },
          end: {
            line: 161,
            column: 7
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 156,
            column: 6
          },
          end: {
            line: 161,
            column: 7
          }
        }, {
          start: {
            line: 156,
            column: 6
          },
          end: {
            line: 161,
            column: 7
          }
        }],
        line: 156
      },
      "23": {
        loc: {
          start: {
            line: 156,
            column: 10
          },
          end: {
            line: 156,
            column: 62
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 156,
            column: 10
          },
          end: {
            line: 156,
            column: 22
          }
        }, {
          start: {
            line: 156,
            column: 26
          },
          end: {
            line: 156,
            column: 62
          }
        }],
        line: 156
      },
      "24": {
        loc: {
          start: {
            line: 158,
            column: 8
          },
          end: {
            line: 160,
            column: 9
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 158,
            column: 8
          },
          end: {
            line: 160,
            column: 9
          }
        }, {
          start: {
            line: 158,
            column: 8
          },
          end: {
            line: 160,
            column: 9
          }
        }],
        line: 158
      },
      "25": {
        loc: {
          start: {
            line: 162,
            column: 6
          },
          end: {
            line: 164,
            column: 7
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 162,
            column: 6
          },
          end: {
            line: 164,
            column: 7
          }
        }, {
          start: {
            line: 162,
            column: 6
          },
          end: {
            line: 164,
            column: 7
          }
        }],
        line: 162
      },
      "26": {
        loc: {
          start: {
            line: 167,
            column: 6
          },
          end: {
            line: 169,
            column: 7
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 167,
            column: 6
          },
          end: {
            line: 169,
            column: 7
          }
        }, {
          start: {
            line: 167,
            column: 6
          },
          end: {
            line: 169,
            column: 7
          }
        }],
        line: 167
      },
      "27": {
        loc: {
          start: {
            line: 173,
            column: 8
          },
          end: {
            line: 173,
            column: 48
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 173,
            column: 8
          },
          end: {
            line: 173,
            column: 42
          }
        }, {
          start: {
            line: 173,
            column: 46
          },
          end: {
            line: 173,
            column: 48
          }
        }],
        line: 173
      },
      "28": {
        loc: {
          start: {
            line: 174,
            column: 6
          },
          end: {
            line: 242,
            column: 7
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 174,
            column: 6
          },
          end: {
            line: 242,
            column: 7
          }
        }, {
          start: {
            line: 174,
            column: 6
          },
          end: {
            line: 242,
            column: 7
          }
        }],
        line: 174
      },
      "29": {
        loc: {
          start: {
            line: 176,
            column: 8
          },
          end: {
            line: 241,
            column: 9
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 176,
            column: 8
          },
          end: {
            line: 241,
            column: 9
          }
        }, {
          start: {
            line: 176,
            column: 8
          },
          end: {
            line: 241,
            column: 9
          }
        }],
        line: 176
      },
      "30": {
        loc: {
          start: {
            line: 176,
            column: 12
          },
          end: {
            line: 176,
            column: 75
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 176,
            column: 12
          },
          end: {
            line: 176,
            column: 38
          }
        }, {
          start: {
            line: 176,
            column: 42
          },
          end: {
            line: 176,
            column: 75
          }
        }],
        line: 176
      },
      "31": {
        loc: {
          start: {
            line: 188,
            column: 16
          },
          end: {
            line: 190,
            column: 17
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 188,
            column: 16
          },
          end: {
            line: 190,
            column: 17
          }
        }, {
          start: {
            line: 188,
            column: 16
          },
          end: {
            line: 190,
            column: 17
          }
        }],
        line: 188
      },
      "32": {
        loc: {
          start: {
            line: 188,
            column: 20
          },
          end: {
            line: 188,
            column: 59
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 188,
            column: 20
          },
          end: {
            line: 188,
            column: 35
          }
        }, {
          start: {
            line: 188,
            column: 39
          },
          end: {
            line: 188,
            column: 59
          }
        }],
        line: 188
      },
      "33": {
        loc: {
          start: {
            line: 198,
            column: 16
          },
          end: {
            line: 200,
            column: 17
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 198,
            column: 16
          },
          end: {
            line: 200,
            column: 17
          }
        }, {
          start: {
            line: 198,
            column: 16
          },
          end: {
            line: 200,
            column: 17
          }
        }],
        line: 198
      },
      "34": {
        loc: {
          start: {
            line: 198,
            column: 20
          },
          end: {
            line: 198,
            column: 47
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 198,
            column: 20
          },
          end: {
            line: 198,
            column: 29
          }
        }, {
          start: {
            line: 198,
            column: 33
          },
          end: {
            line: 198,
            column: 47
          }
        }],
        line: 198
      },
      "35": {
        loc: {
          start: {
            line: 206,
            column: 18
          },
          end: {
            line: 206,
            column: 66
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 206,
            column: 34
          },
          end: {
            line: 206,
            column: 52
          }
        }, {
          start: {
            line: 206,
            column: 55
          },
          end: {
            line: 206,
            column: 66
          }
        }],
        line: 206
      },
      "36": {
        loc: {
          start: {
            line: 222,
            column: 12
          },
          end: {
            line: 222,
            column: 35
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 222,
            column: 20
          },
          end: {
            line: 222,
            column: 30
          }
        }, {
          start: {
            line: 222,
            column: 33
          },
          end: {
            line: 222,
            column: 35
          }
        }],
        line: 222
      },
      "37": {
        loc: {
          start: {
            line: 223,
            column: 31
          },
          end: {
            line: 223,
            column: 55
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 223,
            column: 39
          },
          end: {
            line: 223,
            column: 50
          }
        }, {
          start: {
            line: 223,
            column: 53
          },
          end: {
            line: 223,
            column: 55
          }
        }],
        line: 223
      },
      "38": {
        loc: {
          start: {
            line: 225,
            column: 30
          },
          end: {
            line: 233,
            column: 16
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 226,
            column: 14
          },
          end: {
            line: 232,
            column: 29
          }
        }, {
          start: {
            line: 233,
            column: 14
          },
          end: {
            line: 233,
            column: 16
          }
        }],
        line: 225
      },
      "39": {
        loc: {
          start: {
            line: 230,
            column: 39
          },
          end: {
            line: 230,
            column: 63
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 230,
            column: 47
          },
          end: {
            line: 230,
            column: 58
          }
        }, {
          start: {
            line: 230,
            column: 61
          },
          end: {
            line: 230,
            column: 63
          }
        }],
        line: 230
      },
      "40": {
        loc: {
          start: {
            line: 239,
            column: 37
          },
          end: {
            line: 239,
            column: 77
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 239,
            column: 37
          },
          end: {
            line: 239,
            column: 48
          }
        }, {
          start: {
            line: 239,
            column: 52
          },
          end: {
            line: 239,
            column: 77
          }
        }],
        line: 239
      },
      "41": {
        loc: {
          start: {
            line: 248,
            column: 31
          },
          end: {
            line: 248,
            column: 60
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 248,
            column: 32
          },
          end: {
            line: 248,
            column: 38
          }
        }, {
          start: {
            line: 248,
            column: 42
          },
          end: {
            line: 248,
            column: 53
          }
        }, {
          start: {
            line: 248,
            column: 58
          },
          end: {
            line: 248,
            column: 60
          }
        }],
        line: 248
      },
      "42": {
        loc: {
          start: {
            line: 256,
            column: 10
          },
          end: {
            line: 256,
            column: 79
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 256,
            column: 38
          },
          end: {
            line: 256,
            column: 67
          }
        }, {
          start: {
            line: 256,
            column: 70
          },
          end: {
            line: 256,
            column: 79
          }
        }],
        line: 256
      },
      "43": {
        loc: {
          start: {
            line: 256,
            column: 10
          },
          end: {
            line: 256,
            column: 35
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 256,
            column: 10
          },
          end: {
            line: 256,
            column: 16
          }
        }, {
          start: {
            line: 256,
            column: 20
          },
          end: {
            line: 256,
            column: 35
          }
        }],
        line: 256
      },
      "44": {
        loc: {
          start: {
            line: 257,
            column: 8
          },
          end: {
            line: 259,
            column: 9
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 257,
            column: 8
          },
          end: {
            line: 259,
            column: 9
          }
        }, {
          start: {
            line: 257,
            column: 8
          },
          end: {
            line: 259,
            column: 9
          }
        }],
        line: 257
      },
      "45": {
        loc: {
          start: {
            line: 257,
            column: 12
          },
          end: {
            line: 257,
            column: 39
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 257,
            column: 12
          },
          end: {
            line: 257,
            column: 18
          }
        }, {
          start: {
            line: 257,
            column: 22
          },
          end: {
            line: 257,
            column: 39
          }
        }],
        line: 257
      },
      "46": {
        loc: {
          start: {
            line: 264,
            column: 6
          },
          end: {
            line: 275,
            column: 7
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 264,
            column: 6
          },
          end: {
            line: 275,
            column: 7
          }
        }, {
          start: {
            line: 264,
            column: 6
          },
          end: {
            line: 275,
            column: 7
          }
        }],
        line: 264
      },
      "47": {
        loc: {
          start: {
            line: 264,
            column: 10
          },
          end: {
            line: 264,
            column: 35
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 264,
            column: 10
          },
          end: {
            line: 264,
            column: 15
          }
        }, {
          start: {
            line: 264,
            column: 19
          },
          end: {
            line: 264,
            column: 35
          }
        }],
        line: 264
      },
      "48": {
        loc: {
          start: {
            line: 266,
            column: 8
          },
          end: {
            line: 272,
            column: 9
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 266,
            column: 8
          },
          end: {
            line: 272,
            column: 9
          }
        }, {
          start: {
            line: 266,
            column: 8
          },
          end: {
            line: 272,
            column: 9
          }
        }],
        line: 266
      },
      "49": {
        loc: {
          start: {
            line: 268,
            column: 19
          },
          end: {
            line: 270,
            column: 33
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 269,
            column: 16
          },
          end: {
            line: 269,
            column: 39
          }
        }, {
          start: {
            line: 270,
            column: 16
          },
          end: {
            line: 270,
            column: 33
          }
        }],
        line: 268
      },
      "50": {
        loc: {
          start: {
            line: 277,
            column: 6
          },
          end: {
            line: 293,
            column: 7
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 277,
            column: 6
          },
          end: {
            line: 293,
            column: 7
          }
        }, {
          start: {
            line: 277,
            column: 6
          },
          end: {
            line: 293,
            column: 7
          }
        }],
        line: 277
      },
      "51": {
        loc: {
          start: {
            line: 277,
            column: 10
          },
          end: {
            line: 277,
            column: 39
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 277,
            column: 10
          },
          end: {
            line: 277,
            column: 19
          }
        }, {
          start: {
            line: 277,
            column: 23
          },
          end: {
            line: 277,
            column: 39
          }
        }],
        line: 277
      },
      "52": {
        loc: {
          start: {
            line: 281,
            column: 10
          },
          end: {
            line: 290,
            column: 11
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 281,
            column: 10
          },
          end: {
            line: 290,
            column: 11
          }
        }, {
          start: {
            line: 281,
            column: 10
          },
          end: {
            line: 290,
            column: 11
          }
        }],
        line: 281
      },
      "53": {
        loc: {
          start: {
            line: 281,
            column: 14
          },
          end: {
            line: 281,
            column: 53
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 281,
            column: 14
          },
          end: {
            line: 281,
            column: 26
          }
        }, {
          start: {
            line: 281,
            column: 30
          },
          end: {
            line: 281,
            column: 53
          }
        }],
        line: 281
      },
      "54": {
        loc: {
          start: {
            line: 284,
            column: 12
          },
          end: {
            line: 288,
            column: 13
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 284,
            column: 12
          },
          end: {
            line: 288,
            column: 13
          }
        }, {
          start: {
            line: 284,
            column: 12
          },
          end: {
            line: 288,
            column: 13
          }
        }],
        line: 284
      },
      "55": {
        loc: {
          start: {
            line: 303,
            column: 6
          },
          end: {
            line: 311,
            column: 7
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 303,
            column: 6
          },
          end: {
            line: 311,
            column: 7
          }
        }, {
          start: {
            line: 303,
            column: 6
          },
          end: {
            line: 311,
            column: 7
          }
        }],
        line: 303
      },
      "56": {
        loc: {
          start: {
            line: 304,
            column: 8
          },
          end: {
            line: 306,
            column: 49
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 304,
            column: 8
          },
          end: {
            line: 304,
            column: 30
          }
        }, {
          start: {
            line: 305,
            column: 8
          },
          end: {
            line: 305,
            column: 29
          }
        }, {
          start: {
            line: 306,
            column: 8
          },
          end: {
            line: 306,
            column: 49
          }
        }],
        line: 304
      },
      "57": {
        loc: {
          start: {
            line: 318,
            column: 4
          },
          end: {
            line: 320,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 318,
            column: 4
          },
          end: {
            line: 320,
            column: 5
          }
        }, {
          start: {
            line: 318,
            column: 4
          },
          end: {
            line: 320,
            column: 5
          }
        }],
        line: 318
      },
      "58": {
        loc: {
          start: {
            line: 327,
            column: 2
          },
          end: {
            line: 329,
            column: 3
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 327,
            column: 2
          },
          end: {
            line: 329,
            column: 3
          }
        }, {
          start: {
            line: 327,
            column: 2
          },
          end: {
            line: 329,
            column: 3
          }
        }],
        line: 327
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
      "52": 0,
      "53": 0,
      "54": 0,
      "55": 0,
      "56": 0,
      "57": 0,
      "58": 0,
      "59": 0,
      "60": 0,
      "61": 0,
      "62": 0,
      "63": 0,
      "64": 0,
      "65": 0,
      "66": 0,
      "67": 0,
      "68": 0,
      "69": 0,
      "70": 0,
      "71": 0,
      "72": 0,
      "73": 0,
      "74": 0,
      "75": 0,
      "76": 0,
      "77": 0,
      "78": 0,
      "79": 0,
      "80": 0,
      "81": 0,
      "82": 0,
      "83": 0,
      "84": 0,
      "85": 0,
      "86": 0,
      "87": 0,
      "88": 0,
      "89": 0,
      "90": 0,
      "91": 0,
      "92": 0,
      "93": 0,
      "94": 0,
      "95": 0,
      "96": 0,
      "97": 0,
      "98": 0,
      "99": 0,
      "100": 0,
      "101": 0,
      "102": 0,
      "103": 0,
      "104": 0,
      "105": 0,
      "106": 0,
      "107": 0,
      "108": 0,
      "109": 0,
      "110": 0,
      "111": 0,
      "112": 0,
      "113": 0,
      "114": 0,
      "115": 0,
      "116": 0,
      "117": 0,
      "118": 0,
      "119": 0,
      "120": 0,
      "121": 0,
      "122": 0,
      "123": 0,
      "124": 0,
      "125": 0,
      "126": 0,
      "127": 0,
      "128": 0,
      "129": 0,
      "130": 0,
      "131": 0,
      "132": 0,
      "133": 0,
      "134": 0,
      "135": 0,
      "136": 0,
      "137": 0,
      "138": 0,
      "139": 0,
      "140": 0,
      "141": 0,
      "142": 0,
      "143": 0,
      "144": 0
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
      "30": 0
    },
    b: {
      "0": [0, 0],
      "1": [0, 0],
      "2": [0, 0],
      "3": [0, 0],
      "4": [0, 0],
      "5": [0, 0, 0],
      "6": [0, 0],
      "7": [0, 0],
      "8": [0, 0],
      "9": [0, 0],
      "10": [0, 0],
      "11": [0, 0],
      "12": [0, 0],
      "13": [0, 0],
      "14": [0, 0],
      "15": [0, 0],
      "16": [0, 0],
      "17": [0, 0],
      "18": [0, 0],
      "19": [0, 0],
      "20": [0, 0],
      "21": [0, 0],
      "22": [0, 0],
      "23": [0, 0],
      "24": [0, 0],
      "25": [0, 0],
      "26": [0, 0],
      "27": [0, 0],
      "28": [0, 0],
      "29": [0, 0],
      "30": [0, 0],
      "31": [0, 0],
      "32": [0, 0],
      "33": [0, 0],
      "34": [0, 0],
      "35": [0, 0],
      "36": [0, 0],
      "37": [0, 0],
      "38": [0, 0],
      "39": [0, 0],
      "40": [0, 0],
      "41": [0, 0, 0],
      "42": [0, 0],
      "43": [0, 0],
      "44": [0, 0],
      "45": [0, 0],
      "46": [0, 0],
      "47": [0, 0],
      "48": [0, 0],
      "49": [0, 0],
      "50": [0, 0],
      "51": [0, 0],
      "52": [0, 0],
      "53": [0, 0],
      "54": [0, 0],
      "55": [0, 0],
      "56": [0, 0, 0],
      "57": [0, 0],
      "58": [0, 0]
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
class FusionApp {
  constructor(el, render) {
    this.register = (tokenOrValue, maybeValue) => {
      cov_1i9alyqkyt.f[1]++;
      const hasToken = (cov_1i9alyqkyt.s[8]++, tokenOrValue instanceof TokenImpl);
      const token = (cov_1i9alyqkyt.s[9]++, hasToken ? (cov_1i9alyqkyt.b[2][0]++, tokenOrValue) : (cov_1i9alyqkyt.b[2][1]++, createToken('UnnamedPlugin')));
      const value = (cov_1i9alyqkyt.s[10]++, hasToken ? (cov_1i9alyqkyt.b[3][0]++, maybeValue) : (cov_1i9alyqkyt.b[3][1]++, tokenOrValue));
      cov_1i9alyqkyt.s[11]++;

      if ((cov_1i9alyqkyt.b[5][0]++, !hasToken) && ((cov_1i9alyqkyt.b[5][1]++, value == null) || (cov_1i9alyqkyt.b[5][2]++, !value.__plugin__))) {
        cov_1i9alyqkyt.b[4][0]++;
        cov_1i9alyqkyt.s[12]++;
        throw new Error(process.env.NODE_ENV !== "production" ? (cov_1i9alyqkyt.b[6][0]++, `Cannot register ${String(tokenOrValue)} without a token. Did you accidentally register a ${(cov_1i9alyqkyt.b[7][0]++, 'browser')} plugin on the ${(cov_1i9alyqkyt.b[8][0]++, 'server')}?`) : (cov_1i9alyqkyt.b[6][1]++, 'Invalid configuration registration'));
      } else {
        cov_1i9alyqkyt.b[4][1]++;
      } // the renderer is a special case, since it needs to be always run last


      cov_1i9alyqkyt.s[13]++;

      if (token === RenderToken) {
        cov_1i9alyqkyt.b[9][0]++;
        cov_1i9alyqkyt.s[14]++;
        this.renderer = value;
        cov_1i9alyqkyt.s[15]++;
        return {
          alias: () => {
            cov_1i9alyqkyt.f[2]++;
            cov_1i9alyqkyt.s[16]++;
            throw new Error('Aliasing for RenderToken not supported.');
          }
        };
      } else {
        cov_1i9alyqkyt.b[9][1]++;
      }

      cov_1i9alyqkyt.s[17]++;
      token.stacks.push({
        type: 'register',
        stack: new Error().stack
      });
      cov_1i9alyqkyt.s[18]++;

      if ((cov_1i9alyqkyt.b[11][0]++, value) && (cov_1i9alyqkyt.b[11][1]++, value.__plugin__)) {
        cov_1i9alyqkyt.b[10][0]++;
        cov_1i9alyqkyt.s[19]++;
        token.stacks.push({
          type: 'plugin',
          stack: value.stack
        });
      } else {
        cov_1i9alyqkyt.b[10][1]++;
      }

      cov_1i9alyqkyt.s[20]++;
      return this._register(token, value);
    };

    cov_1i9alyqkyt.f[0]++;
    cov_1i9alyqkyt.s[0]++;
    this.registered = new Map(); // getTokenRef(token) -> {value, aliases, enhancers}

    cov_1i9alyqkyt.s[1]++;
    this.enhancerToToken = new Map(); // enhancer -> token

    cov_1i9alyqkyt.s[2]++;
    this._dependedOn = new Set();
    cov_1i9alyqkyt.s[3]++;
    this.plugins = []; // Token

    cov_1i9alyqkyt.s[4]++;
    this.cleanups = [];
    cov_1i9alyqkyt.s[5]++;
    (cov_1i9alyqkyt.b[0][0]++, el) && (cov_1i9alyqkyt.b[0][1]++, this.register(ElementToken, el));
    cov_1i9alyqkyt.s[6]++;
    (cov_1i9alyqkyt.b[1][0]++, render) && (cov_1i9alyqkyt.b[1][1]++, this.register(RenderToken, render));
    cov_1i9alyqkyt.s[7]++;
    this.register(SSRDeciderToken, SSRDecider);
  } // eslint-disable-next-line


  _register(token, value) {
    cov_1i9alyqkyt.f[3]++;
    cov_1i9alyqkyt.s[21]++;
    this.plugins.push(token);
    const {
      aliases,
      enhancers
    } = (cov_1i9alyqkyt.s[22]++, (cov_1i9alyqkyt.b[12][0]++, this.registered.get(getTokenRef(token))) || (cov_1i9alyqkyt.b[12][1]++, {
      aliases: new Map(),
      enhancers: []
    }));
    cov_1i9alyqkyt.s[23]++;

    if ((cov_1i9alyqkyt.b[14][0]++, value) && (cov_1i9alyqkyt.b[14][1]++, value.__plugin__)) {
      cov_1i9alyqkyt.b[13][0]++;
      cov_1i9alyqkyt.s[24]++;

      if (value.deps) {
        cov_1i9alyqkyt.b[15][0]++;
        cov_1i9alyqkyt.s[25]++;
        Object.values(value.deps).forEach(token => {
          cov_1i9alyqkyt.f[4]++;
          cov_1i9alyqkyt.s[26]++;
          return this._dependedOn.add(getTokenRef(token));
        });
      } else {
        cov_1i9alyqkyt.b[15][1]++;
      }
    } else {
      cov_1i9alyqkyt.b[13][1]++;
    }

    cov_1i9alyqkyt.s[27]++;
    this.registered.set(getTokenRef(token), {
      value,
      aliases,
      enhancers,
      token
    });
    cov_1i9alyqkyt.s[28]++;

    const alias = (sourceToken, destToken) => {
      cov_1i9alyqkyt.f[5]++;
      const stack = (cov_1i9alyqkyt.s[29]++, new Error().stack);
      cov_1i9alyqkyt.s[30]++;
      sourceToken.stacks.push({
        type: 'alias-from',
        stack
      });
      cov_1i9alyqkyt.s[31]++;
      destToken.stacks.push({
        type: 'alias-to',
        stack
      });
      cov_1i9alyqkyt.s[32]++;

      this._dependedOn.add(getTokenRef(destToken));

      cov_1i9alyqkyt.s[33]++;

      if (aliases) {
        cov_1i9alyqkyt.b[16][0]++;
        cov_1i9alyqkyt.s[34]++;
        aliases.set(getTokenRef(sourceToken), destToken);
      } else {
        cov_1i9alyqkyt.b[16][1]++;
      }

      cov_1i9alyqkyt.s[35]++;
      return {
        alias
      };
    };

    cov_1i9alyqkyt.s[36]++;
    return {
      alias
    };
  }

  middleware(deps, middleware) {
    cov_1i9alyqkyt.f[6]++;
    cov_1i9alyqkyt.s[37]++;

    if (middleware === undefined) {
      cov_1i9alyqkyt.b[17][0]++;
      cov_1i9alyqkyt.s[38]++;

      middleware = () => {
        cov_1i9alyqkyt.f[7]++;
        cov_1i9alyqkyt.s[39]++;
        return deps;
      };
    } else {
      cov_1i9alyqkyt.b[17][1]++;
    }

    cov_1i9alyqkyt.s[40]++;
    this.register(createPlugin({
      deps,
      middleware
    }));
  }

  enhance(token, enhancer) {
    cov_1i9alyqkyt.f[8]++;
    cov_1i9alyqkyt.s[41]++;
    token.stacks.push({
      type: 'enhance',
      stack: new Error().stack
    });
    const {
      value,
      aliases,
      enhancers
    } = (cov_1i9alyqkyt.s[42]++, (cov_1i9alyqkyt.b[18][0]++, this.registered.get(getTokenRef(token))) || (cov_1i9alyqkyt.b[18][1]++, {
      aliases: new Map(),
      enhancers: [],
      value: undefined
    }));
    cov_1i9alyqkyt.s[43]++;
    this.enhancerToToken.set(enhancer, token);
    cov_1i9alyqkyt.s[44]++;

    if ((cov_1i9alyqkyt.b[20][0]++, enhancers) && (cov_1i9alyqkyt.b[20][1]++, Array.isArray(enhancers))) {
      cov_1i9alyqkyt.b[19][0]++;
      cov_1i9alyqkyt.s[45]++;
      enhancers.push(enhancer);
    } else {
      cov_1i9alyqkyt.b[19][1]++;
    }

    cov_1i9alyqkyt.s[46]++;
    this.registered.set(getTokenRef(token), {
      value,
      aliases,
      enhancers,
      token
    });
  }

  cleanup() {
    cov_1i9alyqkyt.f[9]++;
    cov_1i9alyqkyt.s[47]++;
    return Promise.all(this.cleanups.map(fn => {
      cov_1i9alyqkyt.f[10]++;
      cov_1i9alyqkyt.s[48]++;
      return fn();
    }));
  }

  resolve() {
    cov_1i9alyqkyt.f[11]++;
    cov_1i9alyqkyt.s[49]++;

    if (!this.renderer) {
      cov_1i9alyqkyt.b[21][0]++;
      cov_1i9alyqkyt.s[50]++;
      throw new Error('Missing registration for RenderToken');
    } else {
      cov_1i9alyqkyt.b[21][1]++;
    }

    cov_1i9alyqkyt.s[51]++;

    this._register(RenderToken, this.renderer);

    const resolved = (cov_1i9alyqkyt.s[52]++, new Map()); // Token.ref || Token => Service

    const nonPluginTokens = (cov_1i9alyqkyt.s[53]++, new Set()); // Token

    const resolving = (cov_1i9alyqkyt.s[54]++, new Set()); // Token.ref || Token

    const registered = (cov_1i9alyqkyt.s[55]++, this.registered); // Token.ref || Token -> {value, aliases, enhancers}

    const resolvedPlugins = (cov_1i9alyqkyt.s[56]++, []); // Plugins

    const appliedEnhancers = (cov_1i9alyqkyt.s[57]++, []);
    cov_1i9alyqkyt.s[58]++;

    const resolveToken = (token, tokenAliases) => {
      cov_1i9alyqkyt.f[12]++;
      cov_1i9alyqkyt.s[59]++;

      // Base: if we have already resolved the type, return it
      if ((cov_1i9alyqkyt.b[23][0]++, tokenAliases) && (cov_1i9alyqkyt.b[23][1]++, tokenAliases.has(getTokenRef(token)))) {
        cov_1i9alyqkyt.b[22][0]++;
        const newToken = (cov_1i9alyqkyt.s[60]++, tokenAliases.get(getTokenRef(token)));
        cov_1i9alyqkyt.s[61]++;

        if (newToken) {
          cov_1i9alyqkyt.b[24][0]++;
          cov_1i9alyqkyt.s[62]++;
          token = newToken;
        } else {
          cov_1i9alyqkyt.b[24][1]++;
        }
      } else {
        cov_1i9alyqkyt.b[22][1]++;
      }

      cov_1i9alyqkyt.s[63]++;

      if (resolved.has(getTokenRef(token))) {
        cov_1i9alyqkyt.b[25][0]++;
        cov_1i9alyqkyt.s[64]++;
        return resolved.get(getTokenRef(token));
      } else {
        cov_1i9alyqkyt.b[25][1]++;
      } // Base: if currently resolving the same type, we have a circular dependency


      cov_1i9alyqkyt.s[65]++;

      if (resolving.has(getTokenRef(token))) {
        cov_1i9alyqkyt.b[26][0]++;
        cov_1i9alyqkyt.s[66]++;
        throw new Error(`Cannot resolve circular dependency: ${token.name}`);
      } else {
        cov_1i9alyqkyt.b[26][1]++;
      } // Base: the type was never registered, throw error or provide undefined if optional


      let {
        value,
        aliases,
        enhancers
      } = (cov_1i9alyqkyt.s[67]++, (cov_1i9alyqkyt.b[27][0]++, registered.get(getTokenRef(token))) || (cov_1i9alyqkyt.b[27][1]++, {}));
      cov_1i9alyqkyt.s[68]++;

      if (value === undefined) {
        cov_1i9alyqkyt.b[28][0]++;
        cov_1i9alyqkyt.s[69]++;

        // Attempt to get default value, if optional
        if ((cov_1i9alyqkyt.b[30][0]++, token instanceof TokenImpl) && (cov_1i9alyqkyt.b[30][1]++, token.type === TokenType.Optional)) {
          cov_1i9alyqkyt.b[29][0]++;
          cov_1i9alyqkyt.s[70]++;
          this.register(token, undefined);
        } else {
          cov_1i9alyqkyt.b[29][1]++;
          const dependents = (cov_1i9alyqkyt.s[71]++, Array.from(this.registered.entries()));
          /**
           * Iterate over the entire list of dependencies and find all
           * dependencies of a given token.
           */

          cov_1i9alyqkyt.s[72]++;

          const findDependentTokens = () => {
            cov_1i9alyqkyt.f[13]++;
            cov_1i9alyqkyt.s[73]++;
            return dependents.filter(entry => {
              cov_1i9alyqkyt.f[14]++;
              cov_1i9alyqkyt.s[74]++;

              if ((cov_1i9alyqkyt.b[32][0]++, !entry[1].value) || (cov_1i9alyqkyt.b[32][1]++, !entry[1].value.deps)) {
                cov_1i9alyqkyt.b[31][0]++;
                cov_1i9alyqkyt.s[75]++;
                return false;
              } else {
                cov_1i9alyqkyt.b[31][1]++;
              }

              cov_1i9alyqkyt.s[76]++;
              return Object.values(entry[1].value.deps).includes(token);
            }).map(entry => {
              cov_1i9alyqkyt.f[15]++;
              cov_1i9alyqkyt.s[77]++;
              return entry[1].token.name;
            });
          };

          cov_1i9alyqkyt.s[78]++;

          const findDependentEnhancers = () => {
            cov_1i9alyqkyt.f[16]++;
            cov_1i9alyqkyt.s[79]++;
            return appliedEnhancers.filter(([, provides]) => {
              cov_1i9alyqkyt.f[17]++;
              cov_1i9alyqkyt.s[80]++;

              if ((cov_1i9alyqkyt.b[34][0]++, !provides) || (cov_1i9alyqkyt.b[34][1]++, !provides.deps)) {
                cov_1i9alyqkyt.b[33][0]++;
                cov_1i9alyqkyt.s[81]++;
                return false;
              } else {
                cov_1i9alyqkyt.b[33][1]++;
              }

              cov_1i9alyqkyt.s[82]++;
              return Object.values(provides.deps).includes(token);
            }).map(([enhancer]) => {
              cov_1i9alyqkyt.f[18]++;
              const enhancedToken = (cov_1i9alyqkyt.s[83]++, this.enhancerToToken.get(enhancer));
              cov_1i9alyqkyt.s[84]++;
              return `EnhancerOf<${enhancedToken ? (cov_1i9alyqkyt.b[35][0]++, enhancedToken.name) : (cov_1i9alyqkyt.b[35][1]++, '(unknown)')}>`;
            });
          };

          const dependentTokens = (cov_1i9alyqkyt.s[85]++, [...findDependentTokens(), ...findDependentEnhancers()]);
          const base = (cov_1i9alyqkyt.s[86]++, 'A plugin depends on a token, but the token was not registered');
          const downstreams = (cov_1i9alyqkyt.s[87]++, 'This token is required by plugins registered with tokens: ' + dependentTokens.map(token => {
            cov_1i9alyqkyt.f[19]++;
            cov_1i9alyqkyt.s[88]++;
            return `"${token}"`;
          }).join(', '));
          const stack = (cov_1i9alyqkyt.s[89]++, token.stacks.find(t => {
            cov_1i9alyqkyt.f[20]++;
            cov_1i9alyqkyt.s[90]++;
            return t.type === 'token';
          }));
          const meta = (cov_1i9alyqkyt.s[91]++, `Required token: ${token ? (cov_1i9alyqkyt.b[36][0]++, token.name) : (cov_1i9alyqkyt.b[36][1]++, '')}\n${downstreams}\n${stack ? (cov_1i9alyqkyt.b[37][0]++, stack.stack) : (cov_1i9alyqkyt.b[37][1]++, '')}`);
          const clue = (cov_1i9alyqkyt.s[92]++, 'Different tokens with the same name were detected:\n\n');
          const suggestions = (cov_1i9alyqkyt.s[93]++, token ? (cov_1i9alyqkyt.b[38][0]++, this.plugins.filter(p => {
            cov_1i9alyqkyt.f[21]++;
            cov_1i9alyqkyt.s[94]++;
            return p.name === token.name;
          }).map(p => {
            cov_1i9alyqkyt.f[22]++;
            const stack = (cov_1i9alyqkyt.s[95]++, p.stacks.find(t => {
              cov_1i9alyqkyt.f[23]++;
              cov_1i9alyqkyt.s[96]++;
              return t.type === 'token';
            }));
            cov_1i9alyqkyt.s[97]++;
            return `${p.name}\n${stack ? (cov_1i9alyqkyt.b[39][0]++, stack.stack) : (cov_1i9alyqkyt.b[39][1]++, '')}\n\n`;
          }).join('\n\n')) : (cov_1i9alyqkyt.b[38][1]++, ''));
          const help = (cov_1i9alyqkyt.s[98]++, 'You may have multiple versions of the same plugin installed.\n' + 'Ensure that `yarn list [the-plugin]` results in one version, ' + 'and use a yarn resolution or merge package version in your lock file to consolidate versions.\n\n');
          cov_1i9alyqkyt.s[99]++;
          throw new Error(`${base}\n\n${meta}\n\n${(cov_1i9alyqkyt.b[40][0]++, suggestions) && (cov_1i9alyqkyt.b[40][1]++, clue + suggestions + help)}`);
        }
      } else {
        cov_1i9alyqkyt.b[28][1]++;
      } // Recursive: get the registered type and resolve it


      cov_1i9alyqkyt.s[100]++;
      resolving.add(getTokenRef(token));

      function resolvePlugin(plugin) {
        cov_1i9alyqkyt.f[24]++;
        const registeredDeps = (cov_1i9alyqkyt.s[101]++, (cov_1i9alyqkyt.b[41][0]++, plugin) && (cov_1i9alyqkyt.b[41][1]++, plugin.deps) || (cov_1i9alyqkyt.b[41][2]++, {}));
        const resolvedDeps = (cov_1i9alyqkyt.s[102]++, {});
        cov_1i9alyqkyt.s[103]++;

        for (const key in registeredDeps) {
          const registeredToken = (cov_1i9alyqkyt.s[104]++, registeredDeps[key]);
          cov_1i9alyqkyt.s[105]++;
          resolvedDeps[key] = resolveToken(registeredToken, aliases);
        } // `provides` should be undefined if the plugin does not have a `provides` function


        let provides = (cov_1i9alyqkyt.s[106]++, (cov_1i9alyqkyt.b[43][0]++, plugin) && (cov_1i9alyqkyt.b[43][1]++, plugin.provides) ? (cov_1i9alyqkyt.b[42][0]++, plugin.provides(resolvedDeps)) : (cov_1i9alyqkyt.b[42][1]++, undefined));
        cov_1i9alyqkyt.s[107]++;

        if ((cov_1i9alyqkyt.b[45][0]++, plugin) && (cov_1i9alyqkyt.b[45][1]++, plugin.middleware)) {
          cov_1i9alyqkyt.b[44][0]++;
          cov_1i9alyqkyt.s[108]++;
          resolvedPlugins.push(plugin.middleware(resolvedDeps, provides));
        } else {
          cov_1i9alyqkyt.b[44][1]++;
        }

        cov_1i9alyqkyt.s[109]++;
        return provides;
      }

      let provides = (cov_1i9alyqkyt.s[110]++, value);
      cov_1i9alyqkyt.s[111]++;

      if ((cov_1i9alyqkyt.b[47][0]++, value) && (cov_1i9alyqkyt.b[47][1]++, value.__plugin__)) {
        cov_1i9alyqkyt.b[46][0]++;
        cov_1i9alyqkyt.s[112]++;
        provides = resolvePlugin(provides);
        cov_1i9alyqkyt.s[113]++;

        if (value.cleanup) {
          cov_1i9alyqkyt.b[48][0]++;
          cov_1i9alyqkyt.s[114]++;
          this.cleanups.push(function () {
            cov_1i9alyqkyt.f[25]++;
            cov_1i9alyqkyt.s[115]++;
            return typeof value.cleanup === 'function' ? (cov_1i9alyqkyt.b[49][0]++, value.cleanup(provides)) : (cov_1i9alyqkyt.b[49][1]++, Promise.resolve());
          });
        } else {
          cov_1i9alyqkyt.b[48][1]++;
        }
      } else {
        cov_1i9alyqkyt.b[46][1]++;
        cov_1i9alyqkyt.s[116]++;
        nonPluginTokens.add(token);
      }

      cov_1i9alyqkyt.s[117]++;

      if ((cov_1i9alyqkyt.b[51][0]++, enhancers) && (cov_1i9alyqkyt.b[51][1]++, enhancers.length)) {
        cov_1i9alyqkyt.b[50][0]++;
        cov_1i9alyqkyt.s[118]++;
        enhancers.forEach(e => {
          cov_1i9alyqkyt.f[26]++;
          let nextProvides = (cov_1i9alyqkyt.s[119]++, e(provides));
          cov_1i9alyqkyt.s[120]++;
          appliedEnhancers.push([e, nextProvides]);
          cov_1i9alyqkyt.s[121]++;

          if ((cov_1i9alyqkyt.b[53][0]++, nextProvides) && (cov_1i9alyqkyt.b[53][1]++, nextProvides.__plugin__)) {
            cov_1i9alyqkyt.b[52][0]++;
            cov_1i9alyqkyt.s[122]++;
            // if the token has a plugin enhancer, allow it to be registered with no dependents
            nonPluginTokens.delete(token);
            cov_1i9alyqkyt.s[123]++;

            if (nextProvides.deps) {
              cov_1i9alyqkyt.b[54][0]++;
              cov_1i9alyqkyt.s[124]++;
              Object.values(nextProvides.deps).forEach(token => {
                cov_1i9alyqkyt.f[27]++;
                cov_1i9alyqkyt.s[125]++;
                return this._dependedOn.add(getTokenRef(token));
              });
            } else {
              cov_1i9alyqkyt.b[54][1]++;
            }

            cov_1i9alyqkyt.s[126]++;
            nextProvides = resolvePlugin(nextProvides);
          } else {
            cov_1i9alyqkyt.b[52][1]++;
          }

          cov_1i9alyqkyt.s[127]++;
          provides = nextProvides;
        });
      } else {
        cov_1i9alyqkyt.b[50][1]++;
      }

      cov_1i9alyqkyt.s[128]++;
      resolved.set(getTokenRef(token), provides);
      cov_1i9alyqkyt.s[129]++;
      resolving.delete(getTokenRef(token));
      cov_1i9alyqkyt.s[130]++;
      return provides;
    };

    cov_1i9alyqkyt.s[131]++;

    for (let i = 0; i < this.plugins.length; i++) {
      cov_1i9alyqkyt.s[132]++;
      resolveToken(this.plugins[i]);
    }

    cov_1i9alyqkyt.s[133]++;

    for (const token of nonPluginTokens) {
      cov_1i9alyqkyt.s[134]++;

      if ((cov_1i9alyqkyt.b[56][0]++, token !== ElementToken) && (cov_1i9alyqkyt.b[56][1]++, token !== RenderToken) && (cov_1i9alyqkyt.b[56][2]++, !this._dependedOn.has(getTokenRef(token)))) {
        cov_1i9alyqkyt.b[55][0]++;
        cov_1i9alyqkyt.s[135]++;
        throw new Error(`Registered token without depending on it: "${token.name}"`);
      } else {
        cov_1i9alyqkyt.b[55][1]++;
      }
    }

    cov_1i9alyqkyt.s[136]++;
    this.plugins = resolvedPlugins;
    cov_1i9alyqkyt.s[137]++;

    this._getService = token => {
      cov_1i9alyqkyt.f[28]++;
      cov_1i9alyqkyt.s[138]++;
      return resolved.get(getTokenRef(token));
    };
  }

  getService(token) {
    cov_1i9alyqkyt.f[29]++;
    cov_1i9alyqkyt.s[139]++;

    if (!this._getService) {
      cov_1i9alyqkyt.b[57][0]++;
      cov_1i9alyqkyt.s[140]++;
      throw new Error('Cannot get service from unresolved app');
    } else {
      cov_1i9alyqkyt.b[57][1]++;
    }

    cov_1i9alyqkyt.s[141]++;
    return this._getService(token);
  }

}
/* Helper functions */


function getTokenRef(token) {
  cov_1i9alyqkyt.f[30]++;
  cov_1i9alyqkyt.s[142]++;

  if (token instanceof TokenImpl) {
    cov_1i9alyqkyt.b[58][0]++;
    cov_1i9alyqkyt.s[143]++;
    return token.ref;
  } else {
    cov_1i9alyqkyt.b[58][1]++;
  }

  cov_1i9alyqkyt.s[144]++;
  return token;
}

var cov_1rq9z8lras = function () {
  var path = "/Users/lhorie/Documents/test-private-monorepo/public/fusion-core/src/compose.js",
      hash = "371925e67b7fd25e468c47ab90f7dda6e066e34e",
      Function = function () {}.constructor,
      global = new Function('return this')(),
      gcv = "__coverage__",
      coverageData = {
    path: "/Users/lhorie/Documents/test-private-monorepo/public/fusion-core/src/compose.js",
    statementMap: {
      "0": {
        start: {
          line: 13,
          column: 2
        },
        end: {
          line: 15,
          column: 3
        }
      },
      "1": {
        start: {
          line: 14,
          column: 4
        },
        end: {
          line: 14,
          column: 62
        }
      },
      "2": {
        start: {
          line: 16,
          column: 2
        },
        end: {
          line: 22,
          column: 3
        }
      },
      "3": {
        start: {
          line: 17,
          column: 4
        },
        end: {
          line: 21,
          column: 5
        }
      },
      "4": {
        start: {
          line: 18,
          column: 6
        },
        end: {
          line: 20,
          column: 8
        }
      },
      "5": {
        start: {
          line: 24,
          column: 2
        },
        end: {
          line: 43,
          column: 4
        }
      },
      "6": {
        start: {
          line: 25,
          column: 16
        },
        end: {
          line: 25,
          column: 18
        }
      },
      "7": {
        start: {
          line: 26,
          column: 4
        },
        end: {
          line: 26,
          column: 23
        }
      },
      "8": {
        start: {
          line: 28,
          column: 6
        },
        end: {
          line: 30,
          column: 7
        }
      },
      "9": {
        start: {
          line: 29,
          column: 8
        },
        end: {
          line: 29,
          column: 73
        }
      },
      "10": {
        start: {
          line: 31,
          column: 6
        },
        end: {
          line: 31,
          column: 16
        }
      },
      "11": {
        start: {
          line: 32,
          column: 15
        },
        end: {
          line: 32,
          column: 28
        }
      },
      "12": {
        start: {
          line: 33,
          column: 6
        },
        end: {
          line: 33,
          column: 45
        }
      },
      "13": {
        start: {
          line: 33,
          column: 35
        },
        end: {
          line: 33,
          column: 45
        }
      },
      "14": {
        start: {
          line: 34,
          column: 6
        },
        end: {
          line: 34,
          column: 40
        }
      },
      "15": {
        start: {
          line: 34,
          column: 15
        },
        end: {
          line: 34,
          column: 40
        }
      },
      "16": {
        start: {
          line: 35,
          column: 6
        },
        end: {
          line: 41,
          column: 7
        }
      },
      "17": {
        start: {
          line: 36,
          column: 8
        },
        end: {
          line: 38,
          column: 11
        }
      },
      "18": {
        start: {
          line: 37,
          column: 10
        },
        end: {
          line: 37,
          column: 33
        }
      },
      "19": {
        start: {
          line: 40,
          column: 8
        },
        end: {
          line: 40,
          column: 35
        }
      }
    },
    fnMap: {
      "0": {
        name: "compose",
        decl: {
          start: {
            line: 12,
            column: 16
          },
          end: {
            line: 12,
            column: 23
          }
        },
        loc: {
          start: {
            line: 12,
            column: 67
          },
          end: {
            line: 44,
            column: 1
          }
        },
        line: 12
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 24,
            column: 9
          },
          end: {
            line: 24,
            column: 10
          }
        },
        loc: {
          start: {
            line: 24,
            column: 33
          },
          end: {
            line: 43,
            column: 3
          }
        },
        line: 24
      },
      "2": {
        name: "dispatch",
        decl: {
          start: {
            line: 27,
            column: 13
          },
          end: {
            line: 27,
            column: 21
          }
        },
        loc: {
          start: {
            line: 27,
            column: 25
          },
          end: {
            line: 42,
            column: 5
          }
        },
        line: 27
      },
      "3": {
        name: "next",
        decl: {
          start: {
            line: 36,
            column: 36
          },
          end: {
            line: 36,
            column: 40
          }
        },
        loc: {
          start: {
            line: 36,
            column: 43
          },
          end: {
            line: 38,
            column: 9
          }
        },
        line: 36
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 13,
            column: 2
          },
          end: {
            line: 15,
            column: 3
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 13,
            column: 2
          },
          end: {
            line: 15,
            column: 3
          }
        }, {
          start: {
            line: 13,
            column: 2
          },
          end: {
            line: 15,
            column: 3
          }
        }],
        line: 13
      },
      "1": {
        loc: {
          start: {
            line: 17,
            column: 4
          },
          end: {
            line: 21,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 17,
            column: 4
          },
          end: {
            line: 21,
            column: 5
          }
        }, {
          start: {
            line: 17,
            column: 4
          },
          end: {
            line: 21,
            column: 5
          }
        }],
        line: 17
      },
      "2": {
        loc: {
          start: {
            line: 28,
            column: 6
          },
          end: {
            line: 30,
            column: 7
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 28,
            column: 6
          },
          end: {
            line: 30,
            column: 7
          }
        }, {
          start: {
            line: 28,
            column: 6
          },
          end: {
            line: 30,
            column: 7
          }
        }],
        line: 28
      },
      "3": {
        loc: {
          start: {
            line: 33,
            column: 6
          },
          end: {
            line: 33,
            column: 45
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 33,
            column: 6
          },
          end: {
            line: 33,
            column: 45
          }
        }, {
          start: {
            line: 33,
            column: 6
          },
          end: {
            line: 33,
            column: 45
          }
        }],
        line: 33
      },
      "4": {
        loc: {
          start: {
            line: 34,
            column: 6
          },
          end: {
            line: 34,
            column: 40
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 34,
            column: 6
          },
          end: {
            line: 34,
            column: 40
          }
        }, {
          start: {
            line: 34,
            column: 6
          },
          end: {
            line: 34,
            column: 40
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
      "3": 0
    },
    b: {
      "0": [0, 0],
      "1": [0, 0],
      "2": [0, 0],
      "3": [0, 0],
      "4": [0, 0]
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
// inline version of koa-compose to get around Rollup/CUP commonjs-related issue
function compose(middleware) {
  cov_1rq9z8lras.f[0]++;
  cov_1rq9z8lras.s[0]++;

  if (!Array.isArray(middleware)) {
    cov_1rq9z8lras.b[0][0]++;
    cov_1rq9z8lras.s[1]++;
    throw new TypeError('Middleware stack must be an array!');
  } else {
    cov_1rq9z8lras.b[0][1]++;
  }

  cov_1rq9z8lras.s[2]++;

  for (const fn of middleware) {
    cov_1rq9z8lras.s[3]++;

    if (typeof fn !== 'function') {
      cov_1rq9z8lras.b[1][0]++;
      cov_1rq9z8lras.s[4]++;
      throw new TypeError(`Expected middleware function, received: ${typeof fn}`);
    } else {
      cov_1rq9z8lras.b[1][1]++;
    }
  }

  cov_1rq9z8lras.s[5]++;
  return function (context, next) {
    cov_1rq9z8lras.f[1]++;
    let index = (cov_1rq9z8lras.s[6]++, -1);
    cov_1rq9z8lras.s[7]++;
    return dispatch(0);

    function dispatch(i) {
      cov_1rq9z8lras.f[2]++;
      cov_1rq9z8lras.s[8]++;

      if (i <= index) {
        cov_1rq9z8lras.b[2][0]++;
        cov_1rq9z8lras.s[9]++;
        return Promise.reject(new Error('next() called multiple times'));
      } else {
        cov_1rq9z8lras.b[2][1]++;
      }

      cov_1rq9z8lras.s[10]++;
      index = i;
      let fn = (cov_1rq9z8lras.s[11]++, middleware[i]);
      cov_1rq9z8lras.s[12]++;

      if (i === middleware.length) {
        cov_1rq9z8lras.b[3][0]++;
        cov_1rq9z8lras.s[13]++;
        fn = next;
      } else {
        cov_1rq9z8lras.b[3][1]++;
      }

      cov_1rq9z8lras.s[14]++;

      if (!fn) {
        cov_1rq9z8lras.b[4][0]++;
        cov_1rq9z8lras.s[15]++;
        return Promise.resolve();
      } else {
        cov_1rq9z8lras.b[4][1]++;
      }

      cov_1rq9z8lras.s[16]++;

      try {
        cov_1rq9z8lras.s[17]++;
        return fn(context, function next() {
          cov_1rq9z8lras.f[3]++;
          cov_1rq9z8lras.s[18]++;
          return dispatch(i + 1);
        });
      } catch (err) {
        cov_1rq9z8lras.s[19]++;
        return Promise.reject(err);
      }
    }
  };
}

var cov_1ucyxpm5un = function () {
  var path = "/Users/lhorie/Documents/test-private-monorepo/public/fusion-core/src/memoize.js",
      hash = "cd2a4a4615f24fd95a25155476c766a067c6f3ab",
      Function = function () {}.constructor,
      global = new Function('return this')(),
      gcv = "__coverage__",
      coverageData = {
    path: "/Users/lhorie/Documents/test-private-monorepo/public/fusion-core/src/memoize.js",
    statementMap: {
      "0": {
        start: {
          line: 16,
          column: 21
        },
        end: {
          line: 16,
          column: 71
        }
      },
      "1": {
        start: {
          line: 17,
          column: 2
        },
        end: {
          line: 24,
          column: 4
        }
      },
      "2": {
        start: {
          line: 18,
          column: 4
        },
        end: {
          line: 20,
          column: 5
        }
      },
      "3": {
        start: {
          line: 19,
          column: 6
        },
        end: {
          line: 19,
          column: 42
        }
      },
      "4": {
        start: {
          line: 21,
          column: 19
        },
        end: {
          line: 21,
          column: 26
        }
      },
      "5": {
        start: {
          line: 22,
          column: 4
        },
        end: {
          line: 22,
          column: 41
        }
      },
      "6": {
        start: {
          line: 23,
          column: 4
        },
        end: {
          line: 23,
          column: 18
        }
      }
    },
    fnMap: {
      "0": {
        name: "Container",
        decl: {
          start: {
            line: 13,
            column: 9
          },
          end: {
            line: 13,
            column: 18
          }
        },
        loc: {
          start: {
            line: 13,
            column: 21
          },
          end: {
            line: 13,
            column: 23
          }
        },
        line: 13
      },
      "1": {
        name: "memoize",
        decl: {
          start: {
            line: 15,
            column: 16
          },
          end: {
            line: 15,
            column: 23
          }
        },
        loc: {
          start: {
            line: 15,
            column: 59
          },
          end: {
            line: 25,
            column: 1
          }
        },
        line: 15
      },
      "2": {
        name: "memoized",
        decl: {
          start: {
            line: 17,
            column: 18
          },
          end: {
            line: 17,
            column: 26
          }
        },
        loc: {
          start: {
            line: 17,
            column: 41
          },
          end: {
            line: 24,
            column: 3
          }
        },
        line: 17
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 16,
            column: 21
          },
          end: {
            line: 16,
            column: 71
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 16,
            column: 32
          },
          end: {
            line: 16,
            column: 53
          }
        }, {
          start: {
            line: 16,
            column: 56
          },
          end: {
            line: 16,
            column: 71
          }
        }],
        line: 16
      },
      "1": {
        loc: {
          start: {
            line: 18,
            column: 4
          },
          end: {
            line: 20,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 18,
            column: 4
          },
          end: {
            line: 20,
            column: 5
          }
        }, {
          start: {
            line: 18,
            column: 4
          },
          end: {
            line: 20,
            column: 5
          }
        }],
        line: 18
      }
    },
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0
    },
    f: {
      "0": 0,
      "1": 0,
      "2": 0
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

function memoize(fn) {
  cov_1ucyxpm5un.f[1]++;
  const memoizeKey = (cov_1ucyxpm5un.s[0]++, (cov_1ucyxpm5un.b[0][0]++, Symbol('memoize-key')));
  cov_1ucyxpm5un.s[1]++;
  return function memoized(ctx) {
    cov_1ucyxpm5un.f[2]++;
    cov_1ucyxpm5un.s[2]++;

    if (ctx.memoized.has(memoizeKey)) {
      cov_1ucyxpm5un.b[1][0]++;
      cov_1ucyxpm5un.s[3]++;
      return ctx.memoized.get(memoizeKey);
    } else {
      cov_1ucyxpm5un.b[1][1]++;
    }

    const result = (cov_1ucyxpm5un.s[4]++, fn(ctx));
    cov_1ucyxpm5un.s[5]++;
    ctx.memoized.set(memoizeKey, result);
    cov_1ucyxpm5un.s[6]++;
    return result;
  };
}

var cov_1hxl6f36h7 = function () {
  var path = "/Users/lhorie/Documents/test-private-monorepo/public/fusion-core/src/plugins/timing.js",
      hash = "011f7b03f040c1c967a0da23aefe3a1354776582",
      Function = function () {}.constructor,
      global = new Function('return this')(),
      gcv = "__coverage__",
      coverageData = {
    path: "/Users/lhorie/Documents/test-private-monorepo/public/fusion-core/src/plugins/timing.js",
    statementMap: {
      "0": {
        start: {
          line: 27,
          column: 4
        },
        end: {
          line: 27,
          column: 23
        }
      },
      "1": {
        start: {
          line: 28,
          column: 4
        },
        end: {
          line: 28,
          column: 29
        }
      },
      "2": {
        start: {
          line: 29,
          column: 4
        },
        end: {
          line: 29,
          column: 26
        }
      },
      "3": {
        start: {
          line: 30,
          column: 4
        },
        end: {
          line: 30,
          column: 33
        }
      },
      "4": {
        start: {
          line: 31,
          column: 4
        },
        end: {
          line: 31,
          column: 31
        }
      },
      "5": {
        start: {
          line: 32,
          column: 4
        },
        end: {
          line: 32,
          column: 28
        }
      },
      "6": {
        start: {
          line: 39,
          column: 29
        },
        end: {
          line: 41,
          column: 1
        }
      },
      "7": {
        start: {
          line: 40,
          column: 22
        },
        end: {
          line: 40,
          column: 34
        }
      },
      "8": {
        start: {
          line: 43,
          column: 48
        },
        end: {
          line: 43,
          column: 74
        }
      },
      "9": {
        start: {
          line: 46,
          column: 2
        },
        end: {
          line: 46,
          column: 27
        }
      },
      "10": {
        start: {
          line: 47,
          column: 53
        },
        end: {
          line: 47,
          column: 69
        }
      },
      "11": {
        start: {
          line: 48,
          column: 2
        },
        end: {
          line: 54,
          column: 4
        }
      },
      "12": {
        start: {
          line: 55,
          column: 2
        },
        end: {
          line: 72,
          column: 7
        }
      },
      "13": {
        start: {
          line: 57,
          column: 27
        },
        end: {
          line: 57,
          column: 65
        }
      },
      "14": {
        start: {
          line: 58,
          column: 6
        },
        end: {
          line: 58,
          column: 37
        }
      },
      "15": {
        start: {
          line: 59,
          column: 22
        },
        end: {
          line: 59,
          column: 46
        }
      },
      "16": {
        start: {
          line: 60,
          column: 6
        },
        end: {
          line: 60,
          column: 27
        }
      },
      "17": {
        start: {
          line: 65,
          column: 6
        },
        end: {
          line: 68,
          column: 7
        }
      },
      "18": {
        start: {
          line: 67,
          column: 8
        },
        end: {
          line: 67,
          column: 30
        }
      },
      "19": {
        start: {
          line: 69,
          column: 22
        },
        end: {
          line: 69,
          column: 46
        }
      },
      "20": {
        start: {
          line: 70,
          column: 6
        },
        end: {
          line: 70,
          column: 27
        }
      },
      "21": {
        start: {
          line: 71,
          column: 6
        },
        end: {
          line: 71,
          column: 14
        }
      },
      "22": {
        start: {
          line: 76,
          column: 18
        },
        end: {
          line: 76,
          column: 24
        }
      },
      "23": {
        start: {
          line: 77,
          column: 20
        },
        end: {
          line: 77,
          column: 30
        }
      },
      "24": {
        start: {
          line: 81,
          column: 2
        },
        end: {
          line: 91,
          column: 3
        }
      },
      "25": {
        start: {
          line: 82,
          column: 26
        },
        end: {
          line: 82,
          column: 42
        }
      },
      "26": {
        start: {
          line: 83,
          column: 4
        },
        end: {
          line: 83,
          column: 49
        }
      },
      "27": {
        start: {
          line: 86,
          column: 4
        },
        end: {
          line: 89,
          column: 5
        }
      },
      "28": {
        start: {
          line: 88,
          column: 6
        },
        end: {
          line: 88,
          column: 50
        }
      },
      "29": {
        start: {
          line: 90,
          column: 4
        },
        end: {
          line: 90,
          column: 22
        }
      },
      "30": {
        start: {
          line: 95,
          column: 16
        },
        end: {
          line: 95,
          column: 24
        }
      },
      "31": {
        start: {
          line: 96,
          column: 15
        },
        end: {
          line: 96,
          column: 23
        }
      },
      "32": {
        start: {
          line: 97,
          column: 18
        },
        end: {
          line: 100,
          column: 4
        }
      },
      "33": {
        start: {
          line: 98,
          column: 4
        },
        end: {
          line: 98,
          column: 18
        }
      },
      "34": {
        start: {
          line: 99,
          column: 4
        },
        end: {
          line: 99,
          column: 17
        }
      },
      "35": {
        start: {
          line: 101,
          column: 2
        },
        end: {
          line: 105,
          column: 4
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
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
            column: 16
          },
          end: {
            line: 33,
            column: 3
          }
        },
        line: 26
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 40,
            column: 16
          },
          end: {
            line: 40,
            column: 17
          }
        },
        loc: {
          start: {
            line: 40,
            column: 22
          },
          end: {
            line: 40,
            column: 34
          }
        },
        line: 40
      },
      "2": {
        name: "middleware",
        decl: {
          start: {
            line: 45,
            column: 9
          },
          end: {
            line: 45,
            column: 19
          }
        },
        loc: {
          start: {
            line: 45,
            column: 31
          },
          end: {
            line: 73,
            column: 1
          }
        },
        line: 45
      },
      "3": {
        name: "(anonymous_3)",
        decl: {
          start: {
            line: 56,
            column: 10
          },
          end: {
            line: 56,
            column: 11
          }
        },
        loc: {
          start: {
            line: 56,
            column: 16
          },
          end: {
            line: 61,
            column: 5
          }
        },
        line: 56
      },
      "4": {
        name: "(anonymous_4)",
        decl: {
          start: {
            line: 62,
            column: 11
          },
          end: {
            line: 62,
            column: 12
          }
        },
        loc: {
          start: {
            line: 62,
            column: 16
          },
          end: {
            line: 72,
            column: 5
          }
        },
        line: 62
      },
      "5": {
        name: "(anonymous_5)",
        decl: {
          start: {
            line: 76,
            column: 12
          },
          end: {
            line: 76,
            column: 13
          }
        },
        loc: {
          start: {
            line: 76,
            column: 18
          },
          end: {
            line: 76,
            column: 24
          }
        },
        line: 76
      },
      "6": {
        name: "(anonymous_6)",
        decl: {
          start: {
            line: 77,
            column: 14
          },
          end: {
            line: 77,
            column: 15
          }
        },
        loc: {
          start: {
            line: 77,
            column: 20
          },
          end: {
            line: 77,
            column: 30
          }
        },
        line: 77
      },
      "7": {
        name: "now",
        decl: {
          start: {
            line: 80,
            column: 16
          },
          end: {
            line: 80,
            column: 19
          }
        },
        loc: {
          start: {
            line: 80,
            column: 30
          },
          end: {
            line: 92,
            column: 1
          }
        },
        line: 80
      },
      "8": {
        name: "deferred",
        decl: {
          start: {
            line: 94,
            column: 9
          },
          end: {
            line: 94,
            column: 17
          }
        },
        loc: {
          start: {
            line: 94,
            column: 36
          },
          end: {
            line: 106,
            column: 1
          }
        },
        line: 94
      },
      "9": {
        name: "(anonymous_9)",
        decl: {
          start: {
            line: 95,
            column: 16
          },
          end: {
            line: 95,
            column: 17
          }
        },
        loc: {
          start: {
            line: 95,
            column: 22
          },
          end: {
            line: 95,
            column: 24
          }
        },
        line: 95
      },
      "10": {
        name: "(anonymous_10)",
        decl: {
          start: {
            line: 96,
            column: 15
          },
          end: {
            line: 96,
            column: 16
          }
        },
        loc: {
          start: {
            line: 96,
            column: 21
          },
          end: {
            line: 96,
            column: 23
          }
        },
        line: 96
      },
      "11": {
        name: "(anonymous_11)",
        decl: {
          start: {
            line: 97,
            column: 30
          },
          end: {
            line: 97,
            column: 31
          }
        },
        loc: {
          start: {
            line: 97,
            column: 44
          },
          end: {
            line: 100,
            column: 3
          }
        },
        line: 97
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 65,
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
            line: 65,
            column: 6
          },
          end: {
            line: 68,
            column: 7
          }
        }, {
          start: {
            line: 65,
            column: 6
          },
          end: {
            line: 68,
            column: 7
          }
        }],
        line: 65
      },
      "1": {
        loc: {
          start: {
            line: 65,
            column: 10
          },
          end: {
            line: 65,
            column: 23
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 65,
            column: 10
          },
          end: {
            line: 65,
            column: 11
          }
        }, {
          start: {
            line: 65,
            column: 15
          },
          end: {
            line: 65,
            column: 23
          }
        }],
        line: 65
      },
      "2": {
        loc: {
          start: {
            line: 81,
            column: 2
          },
          end: {
            line: 91,
            column: 3
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 81,
            column: 2
          },
          end: {
            line: 91,
            column: 3
          }
        }, {
          start: {
            line: 81,
            column: 2
          },
          end: {
            line: 91,
            column: 3
          }
        }],
        line: 81
      },
      "3": {
        loc: {
          start: {
            line: 86,
            column: 4
          },
          end: {
            line: 89,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 86,
            column: 4
          },
          end: {
            line: 89,
            column: 5
          }
        }, {
          start: {
            line: 86,
            column: 4
          },
          end: {
            line: 89,
            column: 5
          }
        }],
        line: 86
      },
      "4": {
        loc: {
          start: {
            line: 86,
            column: 8
          },
          end: {
            line: 86,
            column: 52
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 86,
            column: 8
          },
          end: {
            line: 86,
            column: 26
          }
        }, {
          start: {
            line: 86,
            column: 30
          },
          end: {
            line: 86,
            column: 52
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
      "35": 0
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
      "11": 0
    },
    b: {
      "0": [0, 0],
      "1": [0, 0],
      "2": [0, 0],
      "3": [0, 0],
      "4": [0, 0]
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
class Timing {
  constructor() {
    cov_1hxl6f36h7.f[0]++;
    cov_1hxl6f36h7.s[0]++;
    this.start = now();
    cov_1hxl6f36h7.s[1]++;
    this.render = deferred();
    cov_1hxl6f36h7.s[2]++;
    this.end = deferred();
    cov_1hxl6f36h7.s[3]++;
    this.downstream = deferred();
    cov_1hxl6f36h7.s[4]++;
    this.upstream = deferred();
    cov_1hxl6f36h7.s[5]++;
    this.upstreamStart = -1;
  }

}

const timing = (cov_1hxl6f36h7.s[6]++, {
  from: memoize(() => {
    cov_1hxl6f36h7.f[1]++;
    cov_1hxl6f36h7.s[7]++;
    return new Timing();
  })
});
const TimingToken = (cov_1hxl6f36h7.s[8]++, createToken('TimingToken'));

function middleware(ctx, next) {
  cov_1hxl6f36h7.f[2]++;
  cov_1hxl6f36h7.s[9]++;
  ctx.memoized = new Map();
  const {
    start,
    render,
    end,
    downstream,
    upstream
  } = (cov_1hxl6f36h7.s[10]++, timing.from(ctx));
  cov_1hxl6f36h7.s[11]++;
  ctx.timing = {
    start,
    render: render.promise,
    end: end.promise,
    downstream: downstream.promise,
    upstream: upstream.promise
  };
  cov_1hxl6f36h7.s[12]++;
  return next().then(() => {
    cov_1hxl6f36h7.f[3]++;
    const upstreamTime = (cov_1hxl6f36h7.s[13]++, now() - timing.from(ctx).upstreamStart);
    cov_1hxl6f36h7.s[14]++;
    upstream.resolve(upstreamTime);
    const endTime = (cov_1hxl6f36h7.s[15]++, now() - ctx.timing.start);
    cov_1hxl6f36h7.s[16]++;
    end.resolve(endTime);
  }).catch(e => {
    cov_1hxl6f36h7.f[4]++;
    cov_1hxl6f36h7.s[17]++;

    // currently we only resolve upstream and downstream when the request does not error
    // we should however always resolve the request end timing
    if ((cov_1hxl6f36h7.b[1][0]++, e) && (cov_1hxl6f36h7.b[1][1]++, e.status)) {
      cov_1hxl6f36h7.b[0][0]++;
      cov_1hxl6f36h7.s[18]++;
      // this ensures any logging / metrics based on ctx.status will recieve the correct status code
      ctx.status = e.status;
    } else {
      cov_1hxl6f36h7.b[0][1]++;
    }

    const endTime = (cov_1hxl6f36h7.s[19]++, now() - ctx.timing.start);
    cov_1hxl6f36h7.s[20]++;
    end.resolve(endTime);
    cov_1hxl6f36h7.s[21]++;
    throw e;
  });
}

var timing$1 = createPlugin({
  provides: () => {
    cov_1hxl6f36h7.f[5]++;
    cov_1hxl6f36h7.s[22]++;
    return timing;
  },
  middleware: () => {
    cov_1hxl6f36h7.f[6]++;
    cov_1hxl6f36h7.s[23]++;
    return middleware;
  }
});
function now() {
  cov_1hxl6f36h7.f[7]++;
  cov_1hxl6f36h7.s[24]++;

  {
    cov_1hxl6f36h7.b[2][0]++;
    const [seconds, ns] = (cov_1hxl6f36h7.s[25]++, process.hrtime());
    cov_1hxl6f36h7.s[26]++;
    return Math.round(seconds * 1000 + ns / 1e6);
  }
}

function deferred() {
  cov_1hxl6f36h7.f[8]++;
  cov_1hxl6f36h7.s[30]++;

  let resolve = () => {
    cov_1hxl6f36h7.f[9]++;
  };

  cov_1hxl6f36h7.s[31]++;

  let reject = () => {
    cov_1hxl6f36h7.f[10]++;
  };

  const promise = (cov_1hxl6f36h7.s[32]++, new Promise((res, rej) => {
    cov_1hxl6f36h7.f[11]++;
    cov_1hxl6f36h7.s[33]++;
    resolve = res;
    cov_1hxl6f36h7.s[34]++;
    reject = rej;
  }));
  cov_1hxl6f36h7.s[35]++;
  return {
    promise,
    resolve,
    reject
  };
}

var cov_2nm7m34f7e = function () {
  var path = "/Users/lhorie/Documents/test-private-monorepo/public/fusion-core/src/plugins/server-renderer.js",
      hash = "c15203ab6eda65c041671a7c5f48d272f6779a33",
      Function = function () {}.constructor,
      global = new Function('return this')(),
      gcv = "__coverage__",
      coverageData = {
    path: "/Users/lhorie/Documents/test-private-monorepo/public/fusion-core/src/plugins/server-renderer.js",
    statementMap: {
      "0": {
        start: {
          line: 20,
          column: 2
        },
        end: {
          line: 37,
          column: 4
        }
      },
      "1": {
        start: {
          line: 21,
          column: 18
        },
        end: {
          line: 21,
          column: 34
        }
      },
      "2": {
        start: {
          line: 22,
          column: 4
        },
        end: {
          line: 22,
          column: 50
        }
      },
      "3": {
        start: {
          line: 24,
          column: 21
        },
        end: {
          line: 24,
          column: 25
        }
      },
      "4": {
        start: {
          line: 25,
          column: 4
        },
        end: {
          line: 29,
          column: 5
        }
      },
      "5": {
        start: {
          line: 26,
          column: 26
        },
        end: {
          line: 26,
          column: 31
        }
      },
      "6": {
        start: {
          line: 27,
          column: 6
        },
        end: {
          line: 27,
          column: 52
        }
      },
      "7": {
        start: {
          line: 28,
          column: 6
        },
        end: {
          line: 28,
          column: 39
        }
      },
      "8": {
        start: {
          line: 31,
          column: 4
        },
        end: {
          line: 31,
          column: 32
        }
      },
      "9": {
        start: {
          line: 32,
          column: 4
        },
        end: {
          line: 32,
          column: 17
        }
      },
      "10": {
        start: {
          line: 34,
          column: 4
        },
        end: {
          line: 36,
          column: 5
        }
      },
      "11": {
        start: {
          line: 35,
          column: 6
        },
        end: {
          line: 35,
          column: 39
        }
      }
    },
    fnMap: {
      "0": {
        name: "getRendererPlugin",
        decl: {
          start: {
            line: 13,
            column: 24
          },
          end: {
            line: 13,
            column: 41
          }
        },
        loc: {
          start: {
            line: 19,
            column: 3
          },
          end: {
            line: 38,
            column: 1
          }
        },
        line: 19
      },
      "1": {
        name: "renderer",
        decl: {
          start: {
            line: 20,
            column: 24
          },
          end: {
            line: 20,
            column: 32
          }
        },
        loc: {
          start: {
            line: 20,
            column: 74
          },
          end: {
            line: 37,
            column: 3
          }
        },
        line: 20
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 25,
            column: 4
          },
          end: {
            line: 29,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 25,
            column: 4
          },
          end: {
            line: 29,
            column: 5
          }
        }, {
          start: {
            line: 25,
            column: 4
          },
          end: {
            line: 29,
            column: 5
          }
        }],
        line: 25
      },
      "1": {
        loc: {
          start: {
            line: 25,
            column: 8
          },
          end: {
            line: 25,
            column: 57
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 25,
            column: 8
          },
          end: {
            line: 25,
            column: 19
          }
        }, {
          start: {
            line: 25,
            column: 23
          },
          end: {
            line: 25,
            column: 32
          }
        }, {
          start: {
            line: 25,
            column: 36
          },
          end: {
            line: 25,
            column: 57
          }
        }],
        line: 25
      },
      "2": {
        loc: {
          start: {
            line: 34,
            column: 4
          },
          end: {
            line: 36,
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
            line: 36,
            column: 5
          }
        }, {
          start: {
            line: 34,
            column: 4
          },
          end: {
            line: 36,
            column: 5
          }
        }],
        line: 34
      },
      "3": {
        loc: {
          start: {
            line: 34,
            column: 8
          },
          end: {
            line: 34,
            column: 53
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 34,
            column: 8
          },
          end: {
            line: 34,
            column: 19
          }
        }, {
          start: {
            line: 34,
            column: 23
          },
          end: {
            line: 34,
            column: 53
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
      "9": 0,
      "10": 0,
      "11": 0
    },
    f: {
      "0": 0,
      "1": 0
    },
    b: {
      "0": [0, 0],
      "1": [0, 0, 0],
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
function getRendererPlugin({
  render,
  timing
}) {
  cov_2nm7m34f7e.f[0]++;
  cov_2nm7m34f7e.s[0]++;
  return async function renderer(ctx, next) {
    cov_2nm7m34f7e.f[1]++;
    const timer = (cov_2nm7m34f7e.s[1]++, timing.from(ctx));
    cov_2nm7m34f7e.s[2]++;
    timer.downstream.resolve(now() - timer.start);
    let renderTime = (cov_2nm7m34f7e.s[3]++, null);
    cov_2nm7m34f7e.s[4]++;

    if ((cov_2nm7m34f7e.b[1][0]++, ctx.element) && (cov_2nm7m34f7e.b[1][1]++, !ctx.body) && (cov_2nm7m34f7e.b[1][2]++, ctx.respond !== false)) {
      cov_2nm7m34f7e.b[0][0]++;
      const renderStart = (cov_2nm7m34f7e.s[5]++, now());
      cov_2nm7m34f7e.s[6]++;
      ctx.rendered = await render(ctx.element, ctx);
      cov_2nm7m34f7e.s[7]++;
      renderTime = now() - renderStart;
    } else {
      cov_2nm7m34f7e.b[0][1]++;
    }

    cov_2nm7m34f7e.s[8]++;
    timer.upstreamStart = now();
    cov_2nm7m34f7e.s[9]++;
    await next();
    cov_2nm7m34f7e.s[10]++;

    if ((cov_2nm7m34f7e.b[3][0]++, ctx.element) && (cov_2nm7m34f7e.b[3][1]++, typeof renderTime === 'number')) {
      cov_2nm7m34f7e.b[2][0]++;
      cov_2nm7m34f7e.s[11]++;
      timer.render.resolve(renderTime);
    } else {
      cov_2nm7m34f7e.b[2][1]++;
    }
  };
}

var cov_b3u3jownd = function () {
  var path = "/Users/lhorie/Documents/test-private-monorepo/public/fusion-core/src/get-env.js",
      hash = "073c236e96225d291053da6358f8adcc07dd8c64",
      Function = function () {}.constructor,
      global = new Function('return this')(),
      gcv = "__coverage__",
      coverageData = {
    path: "/Users/lhorie/Documents/test-private-monorepo/public/fusion-core/src/get-env.js",
    statementMap: {
      "0": {
        start: {
          line: 14,
          column: 2
        },
        end: {
          line: 14,
          column: 35
        }
      },
      "1": {
        start: {
          line: 18,
          column: 18
        },
        end: {
          line: 18,
          column: 39
        }
      },
      "2": {
        start: {
          line: 19,
          column: 14
        },
        end: {
          line: 19,
          column: 45
        }
      },
      "3": {
        start: {
          line: 20,
          column: 2
        },
        end: {
          line: 22,
          column: 3
        }
      },
      "4": {
        start: {
          line: 21,
          column: 4
        },
        end: {
          line: 21,
          column: 56
        }
      },
      "5": {
        start: {
          line: 23,
          column: 17
        },
        end: {
          line: 23,
          column: 41
        }
      },
      "6": {
        start: {
          line: 24,
          column: 2
        },
        end: {
          line: 24,
          column: 68
        }
      },
      "7": {
        start: {
          line: 25,
          column: 24
        },
        end: {
          line: 25,
          column: 71
        }
      },
      "8": {
        start: {
          line: 26,
          column: 2
        },
        end: {
          line: 29,
          column: 4
        }
      },
      "9": {
        start: {
          line: 30,
          column: 17
        },
        end: {
          line: 30,
          column: 36
        }
      },
      "10": {
        start: {
          line: 31,
          column: 2
        },
        end: {
          line: 31,
          column: 63
        }
      },
      "11": {
        start: {
          line: 33,
          column: 20
        },
        end: {
          line: 33,
          column: 47
        }
      },
      "12": {
        start: {
          line: 34,
          column: 2
        },
        end: {
          line: 44,
          column: 4
        }
      },
      "13": {
        start: {
          line: 35,
          column: 4
        },
        end: {
          line: 43,
          column: 6
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 11,
            column: 30
          },
          end: {
            line: 11,
            column: 31
          }
        },
        loc: {
          start: {
            line: 11,
            column: 36
          },
          end: {
            line: 11,
            column: 38
          }
        },
        line: 11
      },
      "1": {
        name: "load",
        decl: {
          start: {
            line: 13,
            column: 9
          },
          end: {
            line: 13,
            column: 13
          }
        },
        loc: {
          start: {
            line: 13,
            column: 26
          },
          end: {
            line: 15,
            column: 1
          }
        },
        line: 13
      },
      "2": {
        name: "loadEnv",
        decl: {
          start: {
            line: 17,
            column: 16
          },
          end: {
            line: 17,
            column: 23
          }
        },
        loc: {
          start: {
            line: 17,
            column: 26
          },
          end: {
            line: 45,
            column: 1
          }
        },
        line: 17
      },
      "3": {
        name: "loadEnv",
        decl: {
          start: {
            line: 34,
            column: 18
          },
          end: {
            line: 34,
            column: 25
          }
        },
        loc: {
          start: {
            line: 34,
            column: 33
          },
          end: {
            line: 44,
            column: 3
          }
        },
        line: 34
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 11,
            column: 16
          },
          end: {
            line: 11,
            column: 50
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 11,
            column: 30
          },
          end: {
            line: 11,
            column: 38
          }
        }, {
          start: {
            line: 11,
            column: 41
          },
          end: {
            line: 11,
            column: 50
          }
        }],
        line: 11
      },
      "1": {
        loc: {
          start: {
            line: 14,
            column: 9
          },
          end: {
            line: 14,
            column: 34
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 14,
            column: 9
          },
          end: {
            line: 14,
            column: 25
          }
        }, {
          start: {
            line: 14,
            column: 29
          },
          end: {
            line: 14,
            column: 34
          }
        }],
        line: 14
      },
      "2": {
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
      "3": {
        loc: {
          start: {
            line: 20,
            column: 8
          },
          end: {
            line: 20,
            column: 71
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 20,
            column: 8
          },
          end: {
            line: 20,
            column: 29
          }
        }, {
          start: {
            line: 20,
            column: 33
          },
          end: {
            line: 20,
            column: 53
          }
        }, {
          start: {
            line: 20,
            column: 57
          },
          end: {
            line: 20,
            column: 71
          }
        }],
        line: 20
      },
      "4": {
        loc: {
          start: {
            line: 42,
            column: 25
          },
          end: {
            line: 42,
            column: 44
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 42,
            column: 25
          },
          end: {
            line: 42,
            column: 31
          }
        }, {
          start: {
            line: 42,
            column: 35
          },
          end: {
            line: 42,
            column: 44
          }
        }],
        line: 42
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
      "13": 0
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
      "3": [0, 0, 0],
      "4": [0, 0]
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
var getEnv = (cov_b3u3jownd.b[0][1]++, loadEnv());

function load(key, value) {
  cov_b3u3jownd.f[1]++;
  cov_b3u3jownd.s[0]++;
  return (cov_b3u3jownd.b[1][0]++, process.env[key]) || (cov_b3u3jownd.b[1][1]++, value);
}

function loadEnv() {
  cov_b3u3jownd.f[2]++;
  const rootDir = (cov_b3u3jownd.s[1]++, load('ROOT_DIR', '.'));
  const env = (cov_b3u3jownd.s[2]++, load('NODE_ENV', 'development'));
  cov_b3u3jownd.s[3]++;

  if (!((cov_b3u3jownd.b[3][0]++, env === 'development') || (cov_b3u3jownd.b[3][1]++, env === 'production') || (cov_b3u3jownd.b[3][2]++, env === 'test'))) {
    cov_b3u3jownd.b[2][0]++;
    cov_b3u3jownd.s[4]++;
    throw new Error(`Invalid NODE_ENV loaded: ${env}.`);
  } else {
    cov_b3u3jownd.b[2][1]++;
  }

  const prefix = (cov_b3u3jownd.s[5]++, load('ROUTE_PREFIX', ''));
  cov_b3u3jownd.s[6]++;
  assert(!prefix.endsWith('/'), 'ROUTE_PREFIX must not end with /');
  const baseAssetPath = (cov_b3u3jownd.s[7]++, load('FRAMEWORK_STATIC_ASSET_PATH', `/_static`));
  cov_b3u3jownd.s[8]++;
  assert(!baseAssetPath.endsWith('/'), 'FRAMEWORK_STATIC_ASSET_PATH must not end with /');
  const cdnUrl = (cov_b3u3jownd.s[9]++, load('CDN_URL', ''));
  cov_b3u3jownd.s[10]++;
  assert(!cdnUrl.endsWith('/'), 'CDN_URL must not end with /');
  const assetPath = (cov_b3u3jownd.s[11]++, `${prefix}${baseAssetPath}`);
  cov_b3u3jownd.s[12]++;
  return function loadEnv() {
    cov_b3u3jownd.f[3]++;
    cov_b3u3jownd.s[13]++;
    return {
      rootDir,
      env,
      prefix,
      assetPath,
      baseAssetPath,
      cdnUrl,
      webpackPublicPath: (cov_b3u3jownd.b[4][0]++, cdnUrl) || (cov_b3u3jownd.b[4][1]++, assetPath)
    };
  };
} // Handle flow-types for export so browser export is ignored.

var cov_24adosf7e4 = function () {
  var path = "/Users/lhorie/Documents/test-private-monorepo/public/fusion-core/src/plugins/server-context.js",
      hash = "3b0229a5ac2ccefa063b1fbdc43a73016bd5df80",
      Function = function () {}.constructor,
      global = new Function('return this')(),
      gcv = "__coverage__",
      coverageData = {
    path: "/Users/lhorie/Documents/test-private-monorepo/public/fusion-core/src/plugins/server-context.js",
    statementMap: {
      "0": {
        start: {
          line: 15,
          column: 16
        },
        end: {
          line: 15,
          column: 24
        }
      },
      "1": {
        start: {
          line: 19,
          column: 2
        },
        end: {
          line: 19,
          column: 32
        }
      },
      "2": {
        start: {
          line: 20,
          column: 2
        },
        end: {
          line: 20,
          column: 24
        }
      },
      "3": {
        start: {
          line: 21,
          column: 2
        },
        end: {
          line: 21,
          column: 30
        }
      },
      "4": {
        start: {
          line: 22,
          column: 2
        },
        end: {
          line: 22,
          column: 36
        }
      },
      "5": {
        start: {
          line: 23,
          column: 2
        },
        end: {
          line: 23,
          column: 30
        }
      },
      "6": {
        start: {
          line: 26,
          column: 2
        },
        end: {
          line: 26,
          column: 25
        }
      },
      "7": {
        start: {
          line: 27,
          column: 2
        },
        end: {
          line: 28,
          column: 65
        }
      },
      "8": {
        start: {
          line: 32,
          column: 2
        },
        end: {
          line: 32,
          column: 40
        }
      },
      "9": {
        start: {
          line: 33,
          column: 2
        },
        end: {
          line: 33,
          column: 49
        }
      },
      "10": {
        start: {
          line: 36,
          column: 2
        },
        end: {
          line: 36,
          column: 23
        }
      },
      "11": {
        start: {
          line: 37,
          column: 2
        },
        end: {
          line: 37,
          column: 70
        }
      },
      "12": {
        start: {
          line: 38,
          column: 2
        },
        end: {
          line: 38,
          column: 21
        }
      },
      "13": {
        start: {
          line: 39,
          column: 2
        },
        end: {
          line: 39,
          column: 22
        }
      },
      "14": {
        start: {
          line: 41,
          column: 2
        },
        end: {
          line: 41,
          column: 16
        }
      }
    },
    fnMap: {
      "0": {
        name: "middleware",
        decl: {
          start: {
            line: 17,
            column: 24
          },
          end: {
            line: 17,
            column: 34
          }
        },
        loc: {
          start: {
            line: 17,
            column: 76
          },
          end: {
            line: 42,
            column: 1
          }
        },
        line: 17
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
            line: 28,
            column: 64
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
            column: 25
          }
        }, {
          start: {
            line: 28,
            column: 29
          },
          end: {
            line: 28,
            column: 43
          }
        }, {
          start: {
            line: 28,
            column: 47
          },
          end: {
            line: 28,
            column: 64
          }
        }],
        line: 28
      },
      "1": {
        loc: {
          start: {
            line: 32,
            column: 19
          },
          end: {
            line: 32,
            column: 39
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 32,
            column: 19
          },
          end: {
            line: 32,
            column: 33
          }
        }, {
          start: {
            line: 32,
            column: 37
          },
          end: {
            line: 32,
            column: 39
          }
        }],
        line: 32
      },
      "2": {
        loc: {
          start: {
            line: 33,
            column: 20
          },
          end: {
            line: 33,
            column: 48
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 33,
            column: 20
          },
          end: {
            line: 33,
            column: 35
          }
        }, {
          start: {
            line: 33,
            column: 39
          },
          end: {
            line: 33,
            column: 48
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
      "11": 0,
      "12": 0,
      "13": 0,
      "14": 0
    },
    f: {
      "0": 0
    },
    b: {
      "0": [0, 0, 0],
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
const envVars = (cov_24adosf7e4.s[0]++, getEnv());
function middleware$1(ctx, next) {
  cov_24adosf7e4.f[0]++;
  cov_24adosf7e4.s[1]++;
  // env vars
  ctx.rootDir = envVars.rootDir;
  cov_24adosf7e4.s[2]++;
  ctx.env = envVars.env;
  cov_24adosf7e4.s[3]++;
  ctx.prefix = envVars.prefix;
  cov_24adosf7e4.s[4]++;
  ctx.assetPath = envVars.assetPath;
  cov_24adosf7e4.s[5]++;
  ctx.cdnUrl = envVars.cdnUrl; // webpack-related things

  cov_24adosf7e4.s[6]++;
  ctx.preloadChunks = [];
  cov_24adosf7e4.s[7]++;
  ctx.webpackPublicPath = (cov_24adosf7e4.b[0][0]++, ctx.webpackPublicPath) || (cov_24adosf7e4.b[0][1]++, envVars.cdnUrl) || (cov_24adosf7e4.b[0][2]++, envVars.assetPath); // these are set by fusion-cli, however since fusion-cli plugins are not added when
  // running simulation tests, it is good to default them here

  cov_24adosf7e4.s[8]++;
  ctx.syncChunks = (cov_24adosf7e4.b[1][0]++, ctx.syncChunks) || (cov_24adosf7e4.b[1][1]++, []);
  cov_24adosf7e4.s[9]++;
  ctx.chunkUrlMap = (cov_24adosf7e4.b[2][0]++, ctx.chunkUrlMap) || (cov_24adosf7e4.b[2][1]++, new Map()); // fusion-specific things

  cov_24adosf7e4.s[10]++;
  ctx.nonce = uuidv4();
  cov_24adosf7e4.s[11]++;
  ctx.useragent = new UAParser(ctx.headers['user-agent']).getResult();
  cov_24adosf7e4.s[12]++;
  ctx.element = null;
  cov_24adosf7e4.s[13]++;
  ctx.rendered = null;
  cov_24adosf7e4.s[14]++;
  return next();
}

var cov_2lvcvtgi8s = function () {
  var path = "/Users/lhorie/Documents/test-private-monorepo/public/fusion-core/src/server-app.js",
      hash = "66d7f76f1f061760a2a3fc3f4dc1ca63c2f1cb5d",
      Function = function () {}.constructor,
      global = new Function('return this')(),
      gcv = "__coverage__",
      coverageData = {
    path: "/Users/lhorie/Documents/test-private-monorepo/public/fusion-core/src/server-app.js",
    statementMap: {
      "0": {
        start: {
          line: 23,
          column: 14
        },
        end: {
          line: 23,
          column: 28
        }
      },
      "1": {
        start: {
          line: 25,
          column: 2
        },
        end: {
          line: 54,
          column: 4
        }
      },
      "2": {
        start: {
          line: 28,
          column: 6
        },
        end: {
          line: 28,
          column: 24
        }
      },
      "3": {
        start: {
          line: 29,
          column: 6
        },
        end: {
          line: 29,
          column: 28
        }
      },
      "4": {
        start: {
          line: 30,
          column: 6
        },
        end: {
          line: 30,
          column: 29
        }
      },
      "5": {
        start: {
          line: 31,
          column: 6
        },
        end: {
          line: 31,
          column: 41
        }
      },
      "6": {
        start: {
          line: 32,
          column: 6
        },
        end: {
          line: 32,
          column: 41
        }
      },
      "7": {
        start: {
          line: 33,
          column: 6
        },
        end: {
          line: 40,
          column: 8
        }
      },
      "8": {
        start: {
          line: 43,
          column: 6
        },
        end: {
          line: 46,
          column: 8
        }
      },
      "9": {
        start: {
          line: 47,
          column: 6
        },
        end: {
          line: 47,
          column: 29
        }
      },
      "10": {
        start: {
          line: 50,
          column: 6
        },
        end: {
          line: 50,
          column: 21
        }
      },
      "11": {
        start: {
          line: 51,
          column: 6
        },
        end: {
          line: 51,
          column: 43
        }
      },
      "12": {
        start: {
          line: 52,
          column: 6
        },
        end: {
          line: 52,
          column: 34
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 22,
            column: 15
          },
          end: {
            line: 22,
            column: 16
          }
        },
        loc: {
          start: {
            line: 22,
            column: 42
          },
          end: {
            line: 55,
            column: 1
          }
        },
        line: 22
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
            column: 28
          },
          end: {
            line: 41,
            column: 5
          }
        },
        line: 27
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 42,
            column: 4
          },
          end: {
            line: 42,
            column: 5
          }
        },
        loc: {
          start: {
            line: 42,
            column: 14
          },
          end: {
            line: 48,
            column: 5
          }
        },
        line: 42
      },
      "3": {
        name: "(anonymous_3)",
        decl: {
          start: {
            line: 49,
            column: 4
          },
          end: {
            line: 49,
            column: 5
          }
        },
        loc: {
          start: {
            line: 49,
            column: 15
          },
          end: {
            line: 53,
            column: 5
          }
        },
        line: 49
      }
    },
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
function ServerAppFactory () {
  cov_2lvcvtgi8s.f[0]++;
  const Koa = (cov_2lvcvtgi8s.s[0]++, require('koa'));
  cov_2lvcvtgi8s.s[1]++;
  return class ServerApp extends FusionApp {
    constructor(el, render) {
      cov_2lvcvtgi8s.f[1]++;
      cov_2lvcvtgi8s.s[2]++;
      super(el, render);
      cov_2lvcvtgi8s.s[3]++;
      this._app = new Koa();
      cov_2lvcvtgi8s.s[4]++;
      this._app.proxy = true;
      cov_2lvcvtgi8s.s[5]++;
      this.middleware(middleware$1);
      cov_2lvcvtgi8s.s[6]++;
      this.register(TimingToken, timing$1);
      cov_2lvcvtgi8s.s[7]++;
      this.middleware({
        element: ElementToken,
        ssrDecider: SSRDeciderToken,
        ssrBodyTemplate: SSRBodyTemplateToken.optional
      }, createSSRPlugin);
    }

    resolve() {
      cov_2lvcvtgi8s.f[2]++;
      cov_2lvcvtgi8s.s[8]++;
      this.middleware({
        timing: TimingToken,
        render: RenderToken
      }, getRendererPlugin);
      cov_2lvcvtgi8s.s[9]++;
      return super.resolve();
    }

    callback() {
      cov_2lvcvtgi8s.f[3]++;
      cov_2lvcvtgi8s.s[10]++;
      this.resolve();
      cov_2lvcvtgi8s.s[11]++;

      this._app.use(compose(this.plugins));

      cov_2lvcvtgi8s.s[12]++;
      return this._app.callback();
    }

  };
}

var cov_wspwz0jid = function () {
  var path = "/Users/lhorie/Documents/test-private-monorepo/public/fusion-core/src/plugins/client-hydrate.js",
      hash = "81e1a712601cc91483f7755970595f62904add60",
      Function = function () {}.constructor,
      global = new Function('return this')(),
      gcv = "__coverage__",
      coverageData = {
    path: "/Users/lhorie/Documents/test-private-monorepo/public/fusion-core/src/plugins/client-hydrate.js",
    statementMap: {
      "0": {
        start: {
          line: 14,
          column: 2
        },
        end: {
          line: 19,
          column: 4
        }
      },
      "1": {
        start: {
          line: 15,
          column: 4
        },
        end: {
          line: 15,
          column: 47
        }
      },
      "2": {
        start: {
          line: 16,
          column: 4
        },
        end: {
          line: 16,
          column: 26
        }
      },
      "3": {
        start: {
          line: 17,
          column: 4
        },
        end: {
          line: 17,
          column: 27
        }
      },
      "4": {
        start: {
          line: 18,
          column: 4
        },
        end: {
          line: 18,
          column: 18
        }
      }
    },
    fnMap: {
      "0": {
        name: "createClientHydrate",
        decl: {
          start: {
            line: 13,
            column: 24
          },
          end: {
            line: 13,
            column: 43
          }
        },
        loc: {
          start: {
            line: 13,
            column: 71
          },
          end: {
            line: 20,
            column: 1
          }
        },
        line: 13
      },
      "1": {
        name: "clientHydrate",
        decl: {
          start: {
            line: 14,
            column: 18
          },
          end: {
            line: 14,
            column: 31
          }
        },
        loc: {
          start: {
            line: 14,
            column: 73
          },
          end: {
            line: 19,
            column: 3
          }
        },
        line: 14
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 15,
            column: 17
          },
          end: {
            line: 15,
            column: 46
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 15,
            column: 17
          },
          end: {
            line: 15,
            column: 40
          }
        }, {
          start: {
            line: 15,
            column: 44
          },
          end: {
            line: 15,
            column: 46
          }
        }],
        line: 15
      }
    },
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0
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

var cov_n9rnunk7v = function () {
  var path = "/Users/lhorie/Documents/test-private-monorepo/public/fusion-core/src/plugins/client-renderer.js",
      hash = "a396abc6dbaa96f418a997cf443aaedc54a81295",
      Function = function () {}.constructor,
      global = new Function('return this')(),
      gcv = "__coverage__",
      coverageData = {
    path: "/Users/lhorie/Documents/test-private-monorepo/public/fusion-core/src/plugins/client-renderer.js",
    statementMap: {
      "0": {
        start: {
          line: 12,
          column: 2
        },
        end: {
          line: 23,
          column: 4
        }
      },
      "1": {
        start: {
          line: 13,
          column: 21
        },
        end: {
          line: 13,
          column: 45
        }
      },
      "2": {
        start: {
          line: 14,
          column: 4
        },
        end: {
          line: 22,
          column: 5
        }
      },
      "3": {
        start: {
          line: 15,
          column: 6
        },
        end: {
          line: 18,
          column: 9
        }
      },
      "4": {
        start: {
          line: 16,
          column: 8
        },
        end: {
          line: 16,
          column: 25
        }
      },
      "5": {
        start: {
          line: 17,
          column: 8
        },
        end: {
          line: 17,
          column: 22
        }
      },
      "6": {
        start: {
          line: 20,
          column: 6
        },
        end: {
          line: 20,
          column: 30
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
        name: "createClientRenderer",
        decl: {
          start: {
            line: 11,
            column: 24
          },
          end: {
            line: 11,
            column: 44
          }
        },
        loc: {
          start: {
            line: 11,
            column: 70
          },
          end: {
            line: 24,
            column: 1
          }
        },
        line: 11
      },
      "1": {
        name: "renderer",
        decl: {
          start: {
            line: 12,
            column: 18
          },
          end: {
            line: 12,
            column: 26
          }
        },
        loc: {
          start: {
            line: 12,
            column: 68
          },
          end: {
            line: 23,
            column: 3
          }
        },
        line: 12
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 15,
            column: 27
          },
          end: {
            line: 15,
            column: 28
          }
        },
        loc: {
          start: {
            line: 15,
            column: 32
          },
          end: {
            line: 18,
            column: 7
          }
        },
        line: 15
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 14,
            column: 4
          },
          end: {
            line: 22,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 14,
            column: 4
          },
          end: {
            line: 22,
            column: 5
          }
        }, {
          start: {
            line: 14,
            column: 4
          },
          end: {
            line: 22,
            column: 5
          }
        }],
        line: 14
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

var cov_2jn11sa60k = function () {
  var path = "/Users/lhorie/Documents/test-private-monorepo/public/fusion-core/src/client-app.js",
      hash = "b7e713755bf0f1c9f31bce1741e04e36732f75c0",
      Function = function () {}.constructor,
      global = new Function('return this')(),
      gcv = "__coverage__",
      coverageData = {
    path: "/Users/lhorie/Documents/test-private-monorepo/public/fusion-core/src/client-app.js",
    statementMap: {
      "0": {
        start: {
          line: 17,
          column: 2
        },
        end: {
          line: 40,
          column: 4
        }
      },
      "1": {
        start: {
          line: 19,
          column: 6
        },
        end: {
          line: 19,
          column: 24
        }
      },
      "2": {
        start: {
          line: 20,
          column: 6
        },
        end: {
          line: 20,
          column: 41
        }
      },
      "3": {
        start: {
          line: 21,
          column: 6
        },
        end: {
          line: 21,
          column: 68
        }
      },
      "4": {
        start: {
          line: 24,
          column: 6
        },
        end: {
          line: 24,
          column: 67
        }
      },
      "5": {
        start: {
          line: 25,
          column: 6
        },
        end: {
          line: 25,
          column: 29
        }
      },
      "6": {
        start: {
          line: 28,
          column: 6
        },
        end: {
          line: 28,
          column: 21
        }
      },
      "7": {
        start: {
          line: 29,
          column: 25
        },
        end: {
          line: 29,
          column: 46
        }
      },
      "8": {
        start: {
          line: 30,
          column: 6
        },
        end: {
          line: 38,
          column: 8
        }
      },
      "9": {
        start: {
          line: 32,
          column: 25
        },
        end: {
          line: 36,
          column: 9
        }
      },
      "10": {
        start: {
          line: 37,
          column: 8
        },
        end: {
          line: 37,
          column: 72
        }
      },
      "11": {
        start: {
          line: 37,
          column: 37
        },
        end: {
          line: 37,
          column: 54
        }
      },
      "12": {
        start: {
          line: 37,
          column: 67
        },
        end: {
          line: 37,
          column: 70
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 16,
            column: 15
          },
          end: {
            line: 16,
            column: 16
          }
        },
        loc: {
          start: {
            line: 16,
            column: 42
          },
          end: {
            line: 41,
            column: 1
          }
        },
        line: 16
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 18,
            column: 4
          },
          end: {
            line: 18,
            column: 5
          }
        },
        loc: {
          start: {
            line: 18,
            column: 28
          },
          end: {
            line: 22,
            column: 5
          }
        },
        line: 18
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 23,
            column: 4
          },
          end: {
            line: 23,
            column: 5
          }
        },
        loc: {
          start: {
            line: 23,
            column: 14
          },
          end: {
            line: 26,
            column: 5
          }
        },
        line: 23
      },
      "3": {
        name: "(anonymous_3)",
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
            column: 15
          },
          end: {
            line: 39,
            column: 5
          }
        },
        line: 27
      },
      "4": {
        name: "(anonymous_4)",
        decl: {
          start: {
            line: 30,
            column: 13
          },
          end: {
            line: 30,
            column: 14
          }
        },
        loc: {
          start: {
            line: 30,
            column: 19
          },
          end: {
            line: 38,
            column: 7
          }
        },
        line: 30
      },
      "5": {
        name: "(anonymous_5)",
        decl: {
          start: {
            line: 37,
            column: 31
          },
          end: {
            line: 37,
            column: 32
          }
        },
        loc: {
          start: {
            line: 37,
            column: 37
          },
          end: {
            line: 37,
            column: 54
          }
        },
        line: 37
      },
      "6": {
        name: "(anonymous_6)",
        decl: {
          start: {
            line: 37,
            column: 61
          },
          end: {
            line: 37,
            column: 62
          }
        },
        loc: {
          start: {
            line: 37,
            column: 67
          },
          end: {
            line: 37,
            column: 70
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
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0
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

/* eslint-env browser */

var cov_t7wm5upuo = function () {
  var path = "/Users/lhorie/Documents/test-private-monorepo/public/fusion-core/src/virtual/index.js",
      hash = "79c5e121b920570118fc35ee4cf74a925022ae93",
      Function = function () {}.constructor,
      global = new Function('return this')(),
      gcv = "__coverage__",
      coverageData = {
    path: "/Users/lhorie/Documents/test-private-monorepo/public/fusion-core/src/virtual/index.js",
    statementMap: {
      "0": {
        start: {
          line: 14,
          column: 2
        },
        end: {
          line: 14,
          column: 13
        }
      },
      "1": {
        start: {
          line: 22,
          column: 2
        },
        end: {
          line: 22,
          column: 18
        }
      },
      "2": {
        start: {
          line: 30,
          column: 2
        },
        end: {
          line: 30,
          column: 18
        }
      },
      "3": {
        start: {
          line: 38,
          column: 2
        },
        end: {
          line: 38,
          column: 18
        }
      }
    },
    fnMap: {
      "0": {
        name: "assetUrl",
        decl: {
          start: {
            line: 9,
            column: 16
          },
          end: {
            line: 9,
            column: 24
          }
        },
        loc: {
          start: {
            line: 9,
            column: 46
          },
          end: {
            line: 15,
            column: 1
          }
        },
        line: 9
      },
      "1": {
        name: "chunkId",
        decl: {
          start: {
            line: 17,
            column: 16
          },
          end: {
            line: 17,
            column: 23
          }
        },
        loc: {
          start: {
            line: 17,
            column: 50
          },
          end: {
            line: 23,
            column: 1
          }
        },
        line: 17
      },
      "2": {
        name: "syncChunkIds",
        decl: {
          start: {
            line: 25,
            column: 16
          },
          end: {
            line: 25,
            column: 28
          }
        },
        loc: {
          start: {
            line: 25,
            column: 49
          },
          end: {
            line: 31,
            column: 1
          }
        },
        line: 25
      },
      "3": {
        name: "syncChunkPaths",
        decl: {
          start: {
            line: 33,
            column: 16
          },
          end: {
            line: 33,
            column: 30
          }
        },
        loc: {
          start: {
            line: 33,
            column: 51
          },
          end: {
            line: 39,
            column: 1
          }
        },
        line: 33
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
      "2": 0,
      "3": 0
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
function assetUrl(url) {
  cov_t7wm5upuo.f[0]++;
  cov_t7wm5upuo.s[0]++;

  /**
   * PLEASE NOTE: a build step transforms
   * the arguments provided to this function
   */
  return url;
}
function chunkId(filename) {
  cov_t7wm5upuo.f[1]++;
  cov_t7wm5upuo.s[1]++;

  /**
   * PLEASE NOTE: a build step transforms
   * the arguments provided to this function
   */
  return filename;
}
function syncChunkIds(argument) {
  cov_t7wm5upuo.f[2]++;
  cov_t7wm5upuo.s[2]++;

  /**
   * PLEASE NOTE: a build step transforms
   * the arguments provided to this function
   */
  return argument;
}
function syncChunkPaths(argument) {
  cov_t7wm5upuo.f[3]++;
  cov_t7wm5upuo.s[3]++;

  /**
   * PLEASE NOTE: a build step transforms
   * the arguments provided to this function
   */
  return argument;
}

var cov_2q4b9iqhax = function () {
  var path = "/Users/lhorie/Documents/test-private-monorepo/public/fusion-core/src/index.js",
      hash = "aad8f9e8d4e4aaf221147f0f9377dda9bb3e4b0b",
      Function = function () {}.constructor,
      global = new Function('return this')(),
      gcv = "__coverage__",
      coverageData = {
    path: "/Users/lhorie/Documents/test-private-monorepo/public/fusion-core/src/index.js",
    statementMap: {},
    fnMap: {},
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 22,
            column: 16
          },
          end: {
            line: 22,
            column: 55
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 22,
            column: 30
          },
          end: {
            line: 22,
            column: 41
          }
        }, {
          start: {
            line: 22,
            column: 44
          },
          end: {
            line: 22,
            column: 55
          }
        }],
        line: 22
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
var App = (cov_2q4b9iqhax.b[0][1]++, ServerAppFactory());

/** Copyright (c) 2018 Uber Technologies, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */
tape('interface', t => {
  const element = () => 'hi';

  const render = () => {};

  const app = new App(element, render);
  t.ok(app.plugins instanceof Array, 'sets plugins');
  t.equal(typeof app.register, 'function', 'has a register function');
  t.equal(typeof app.getService, 'function', 'has a getService function');
  t.ok(typeof app.callback === 'function', 'callback is function');
  t.ok(typeof app.callback() === 'function', 'callback returns server handler');
  t.end();
});

/** Copyright (c) 2018 Uber Technologies, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */
tape('context composition', async t => {
  const element = 'hello';

  const render = el => `<h1>${el}</h1>`;

  const wrap = (ctx, next) => {
    ctx.element = ctx.element.toUpperCase();
    return next();
  };

  const chunkUrlMap = new Map();
  const chunkIdZero = new Map();
  chunkIdZero.set('es5', 'es5-file.js');
  chunkUrlMap.set(0, chunkIdZero);
  const context = {
    headers: {
      accept: 'text/html'
    },
    path: '/',
    syncChunks: [0],
    preloadChunks: [],
    chunkUrlMap,
    webpackPublicPath: '/',
    element: null,
    rendered: null,
    render: null,
    type: null,
    body: null
  };
  const app = new App(element, render);
  app.middleware(wrap);

  try {
    app.resolve();
    const middleware = compose(app.plugins); // $FlowFixMe

    await middleware(context, () => Promise.resolve()); // $FlowFixMe

    t.equals(typeof context.rendered, 'string', 'renders'); // $FlowFixMe

    t.ok(context.rendered.includes('<h1>HELLO</h1>'), 'has expected html');
  } catch (e) {
    t.ifError(e, 'something went wrong');
  }

  t.end();
});
tape('context composition with a cdn', async t => {
  const element = 'hello';

  const render = el => `<h1>${el}</h1>`;

  const wrap = () => (ctx, next) => {
    ctx.element = ctx.element.toUpperCase();
    return next();
  };

  const chunkUrlMap = new Map();
  const chunkIdZero = new Map();
  chunkIdZero.set('es5', 'es5-file.js');
  chunkUrlMap.set(0, chunkIdZero);
  const context = {
    headers: {
      accept: 'text/html'
    },
    path: '/',
    syncChunks: [0],
    preloadChunks: [],
    chunkUrlMap,
    webpackPublicPath: 'https://something.com/lol',
    element: null,
    rendered: null,
    render: null,
    type: null,
    body: null
  };
  const app = new App(element, render);
  app.middleware(wrap());
  app.resolve();
  const middleware = compose(app.plugins);

  try {
    await middleware(context, () => Promise.resolve()); // $FlowFixMe

    t.ok(context.body.includes('https://something.com/lol/es5-file.js'));
  } catch (e) {
    t.ifError(e, 'something went wrong');
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
const env = 'NODE';

function testHelper(tapeFn) {
  return (name, testFn) => {
    return tapeFn(`${env} - ${name}`, testFn);
  };
}

const test = testHelper(tape);
test.only = testHelper(tape.only.bind(tape));
test.skip = testHelper(tape.skip.bind(tape));
function getContext() {
  return {
    path: '/',
    headers: {
      accept: 'text/html'
    }
  };
} // $FlowFixMe


function run(app, ctx = {}) {
  // $FlowFixMe
  ctx = Object.assign(getContext(), ctx);
  app.resolve();
  return compose(app.plugins)(ctx, () => Promise.resolve()).then(() => ctx);
}

const App$1 = ServerAppFactory();
test('app.cleanup with no cleanup plugins', async t => {
  const app = new App$1('el', el => el);
  app.register(createPlugin({
    provides: () => 'hello world',
    middleware: () => (ctx, next) => next()
  }));
  app.resolve();
  await app.cleanup();
  t.ok('cleans up ok');
  t.end();
});
test('app.cleanup with async cleanup plugins', async t => {
  const app = new App$1('el', el => el);
  let firstCleanupCalled = false;
  let nextCleanupCalled = false;
  app.register(createPlugin({
    provides: () => 'hello world',
    cleanup: p => {
      firstCleanupCalled = true;
      t.equal(p, 'hello world', 'provides correct value to cleanup');
      return Promise.resolve();
    },
    middleware: () => (ctx, next) => next()
  }));
  app.register(createPlugin({
    provides: () => 'another test',
    cleanup: p => {
      nextCleanupCalled = true;
      t.equal(p, 'another test', 'provides correct value to cleanup');
      return Promise.resolve();
    },
    middleware: () => (ctx, next) => next()
  }));
  app.resolve();
  t.notOk(firstCleanupCalled, 'resolve() does not call cleanups');
  t.notOk(nextCleanupCalled, 'resolve() does not call cleanups');
  await app.cleanup();
  t.ok(firstCleanupCalled, 'calls all cleanups');
  t.ok(nextCleanupCalled, 'calls all cleanups');
  t.end();
});
test('app.cleanup does not cleanup if cleanup was not given a function', async t => {
  const app = new App$1('el', el => el);
  app.register(createPlugin({
    provides: () => 'hello world',
    // $FlowFixMe - Ignore this to test branch
    cleanup: 'notafunc',
    middleware: () => (ctx, next) => next()
  }));
  app.resolve();
  await app.cleanup();
  t.end();
});

/** Copyright (c) 2018 Uber Technologies, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */
test('composed middleware are executed correctly', t => {
  function A(ctx, next) {
    return next();
  }

  const middleware = compose([A]);

  const next = () => Promise.resolve(); // $FlowFixMe


  t.doesNotThrow(() => middleware({}, next), 'works with valid args'); // $FlowFixMe

  t.doesNotThrow(() => middleware(void 0, next), 'works with missing ctx'); // $FlowFixMe

  t.doesNotThrow(() => middleware(), 'works with missing next');
  t.end();
});
test('downstream and upstream run in same order as koa', t => {
  t.plan(6);

  function a(ctx, next) {
    t.equals(++ctx.number, 1, 'A downstream is called correctly');
    return next().then(() => {
      t.equals(++ctx.number, 6, 'A upstream is called correctly');
    });
  }

  function b(ctx, next) {
    t.equals(++ctx.number, 2, 'B downstream is called correctly');
    return next().then(() => {
      t.equals(++ctx.number, 5, 'B upstream is called correctly');
    });
  }

  function c(ctx, next) {
    t.equals(++ctx.number, 3, 'D downstream is called correctly');
    return next().then(() => {
      t.equals(++ctx.number, 4, 'D upstream is called correctly');
    });
  }

  const middleware = compose([a, b, c]);
  const ctx = {
    number: 0
  };

  const next = () => Promise.resolve(); // $FlowFixMe


  middleware(ctx, next).then(t.end);
});

const App$2 = ServerAppFactory();
const TokenA = createToken('TokenA');
const TokenB = createToken('TokenB');
const TokenC = createToken('TokenC');
const TokenD = createToken('TokenD');
const TokenEAsNullable = createToken('TokenEAsNullable');
const TokenString = createToken('TokenString');
const TokenNumber = createToken('TokenNumber');
tape('dependency registration', t => {
  const app = new App$2('el', el => el);
  t.ok(app, 'creates an app');
  const counters = {
    a: 0,
    b: 0,
    c: 0,
    d: 0
  };
  const PluginA = createPlugin({
    provides: () => {
      counters.a++;
      t.equal(counters.a, 1, 'only instantiates once');
      return {
        a: 'PluginA'
      };
    }
  });
  const PluginB = createPlugin({
    deps: {
      a: TokenA
    },
    provides: deps => {
      counters.b++;
      t.equal(deps.a.a, 'PluginA');
      t.equal(counters.b, 1, 'only instantiates once');
      return {
        b: 'PluginB'
      };
    }
  });
  const PluginC = createPlugin({
    deps: {
      a: TokenA,
      b: TokenB
    },
    provides: deps => {
      counters.c++;
      t.equal(deps.a.a, 'PluginA');
      t.equal(deps.b.b, 'PluginB');
      t.equal(counters.c, 1, 'only instantiates once');
      return {
        c: 'PluginC'
      };
    }
  });
  app.register(TokenA, PluginA);
  app.register(TokenB, PluginB);
  app.register(TokenC, PluginC);
  app.register(createPlugin({
    deps: {
      a: TokenA,
      b: TokenB,
      c: TokenC
    },
    provides: deps => {
      counters.d++;
      t.equal(deps.a.a, 'PluginA');
      t.equal(deps.b.b, 'PluginB');
      t.equal(deps.c.c, 'PluginC');
    }
  }));
  t.equal(counters.a, 0, 'does not instantiate until resolve is called');
  t.equal(counters.b, 0, 'does not instantiate until resolve is called');
  t.equal(counters.c, 0, 'does not instantiate until resolve is called');
  t.equal(counters.d, 0, 'does not instantiate until resolve is called');
  app.resolve();
  t.equal(counters.a, 1, 'only instantiates once');
  t.equal(counters.b, 1, 'only instantiates once');
  t.equal(counters.c, 1, 'only instantiates once');
  t.equal(counters.d, 1, 'only instantiates once');
  t.end();
});
tape('dependency registration with aliases', t => {
  const app = new App$2('el', el => el);
  t.ok(app, 'creates an app');
  const counters = {
    a: 0,
    b: 0,
    c: 0,
    d: 0
  };
  const PluginA = createPlugin({
    provides: () => {
      counters.a++;
      t.equal(counters.a, 1, 'only instantiates once');
      return {
        a: 'PluginA'
      };
    }
  });
  const PluginB = createPlugin({
    deps: {
      a: TokenA
    },
    provides: deps => {
      counters.b++;
      t.equal(deps.a.a, 'PluginA');
      t.equal(counters.b, 1, 'only instantiates once');
      return {
        b: 'PluginB'
      };
    }
  });
  const PluginC = createPlugin({
    deps: {
      a: TokenA,
      b: TokenB
    },
    provides: deps => {
      counters.c++;
      t.equal(deps.a.a, 'PluginA');
      t.equal(deps.b.b, 'PluginD', 'uses correct alias');
      t.equal(counters.c, 1, 'only instantiates once');
      return {
        c: 'PluginC'
      };
    }
  });
  const PluginD = createPlugin({
    deps: {
      a: TokenA
    },
    provides: deps => {
      counters.d++;
      t.equal(deps.a.a, 'PluginA');
      t.equal(counters.d, 1, 'only instantiates once');
      return {
        b: 'PluginD'
      };
    }
  });
  app.register(TokenA, PluginA);
  app.register(TokenB, PluginB);
  app.register(TokenC, PluginC).alias(TokenB, TokenD);
  app.register(TokenD, PluginD);
  t.equal(counters.a, 0, 'does not instantiate until resolve is called');
  t.equal(counters.b, 0, 'does not instantiate until resolve is called');
  t.equal(counters.c, 0, 'does not instantiate until resolve is called');
  t.equal(counters.d, 0, 'does not instantiate until resolve is called');
  app.resolve();
  t.equal(counters.a, 1, 'only instantiates once');
  t.equal(counters.b, 1, 'only instantiates once');
  t.equal(counters.c, 1, 'only instantiates once');
  t.equal(counters.d, 1, 'only instantiates once');
  t.end();
});
tape('optional dependency registration with aliases', t => {
  const app = new App$2('el', el => el);
  t.ok(app, 'creates an app');
  const counters = {
    a: 0,
    b: 0,
    c: 0,
    d: 0
  };
  const PluginA = createPlugin({
    provides: () => {
      counters.a++;
      t.equal(counters.a, 1, 'only instantiates once');
      return {
        a: 'PluginA'
      };
    }
  });
  const PluginB = createPlugin({
    deps: {
      a: TokenA
    },
    provides: deps => {
      counters.b++;
      t.equal(deps.a.a, 'PluginA');
      t.equal(counters.b, 1, 'only instantiates once');
      return {
        b: 'PluginB'
      };
    }
  });
  const PluginC = createPlugin({
    deps: {
      a: TokenA,
      b: TokenB.optional
    },
    provides: deps => {
      counters.c++;
      t.equal(deps.a.a, 'PluginA');
      t.equal(deps.b && deps.b.b, 'PluginD', 'uses correct alias');
      t.equal(counters.c, 1, 'only instantiates once');
      return {
        c: 'PluginC'
      };
    }
  });
  const PluginD = createPlugin({
    deps: {
      a: TokenA
    },
    provides: deps => {
      counters.d++;
      t.equal(deps.a.a, 'PluginA');
      t.equal(counters.d, 1, 'only instantiates once');
      return {
        b: 'PluginD'
      };
    }
  });
  app.register(TokenA, PluginA);
  app.register(TokenB, PluginB);
  app.register(TokenC, PluginC).alias(TokenB, TokenD);
  app.register(TokenD, PluginD);
  t.equal(counters.a, 0, 'does not instantiate until resolve is called');
  t.equal(counters.b, 0, 'does not instantiate until resolve is called');
  t.equal(counters.c, 0, 'does not instantiate until resolve is called');
  t.equal(counters.d, 0, 'does not instantiate until resolve is called');
  app.resolve();
  t.equal(counters.a, 1, 'only instantiates once');
  t.equal(counters.b, 1, 'only instantiates once');
  t.equal(counters.c, 1, 'only instantiates once');
  t.equal(counters.d, 1, 'only instantiates once');
  t.end();
});
tape('dependency registration with aliasing non-plugins', t => {
  const app = new App$2('el', el => el);
  t.ok(app, 'creates an app');
  const counters = {
    a: 0,
    b: 0,
    c: 0,
    d: 0
  };
  const ValueA = 'some-value';
  const AliasedValue = 'some-aliased-value';
  const ValueTokenA = createToken('ValueA');
  const AliasedTokenA = createToken('AliasedTokenA');
  const PluginB = createPlugin({
    deps: {
      a: ValueTokenA
    },
    provides: deps => {
      counters.b++;
      t.equal(deps.a, 'some-value');
      t.equal(counters.b, 1, 'only instantiates once');
      return {
        b: 'PluginB'
      };
    }
  });
  const PluginC = createPlugin({
    deps: {
      a: ValueTokenA
    },
    provides: deps => {
      counters.c++;
      t.equal(deps.a, 'some-aliased-value');
      t.equal(counters.c, 1, 'only instantiates once');
      return {
        c: 'PluginC'
      };
    }
  });
  app.register(ValueTokenA, ValueA);
  app.register(TokenB, PluginB);
  app.register(TokenC, PluginC).alias(ValueTokenA, AliasedTokenA);
  app.register(AliasedTokenA, AliasedValue);
  t.equal(counters.b, 0, 'does not instantiate until resolve is called');
  t.equal(counters.c, 0, 'does not instantiate until resolve is called');
  app.resolve();
  t.equal(counters.b, 1, 'only instantiates once');
  t.equal(counters.c, 1, 'only instantiates once');
  t.end();
});
tape('dependency registration with no token', t => {
  const app = new App$2('el', el => el);
  const PluginA = createPlugin({
    provides: () => {
      return {
        a: 'PluginA'
      };
    }
  });
  const PluginB = createPlugin({
    deps: {
      a: TokenA
    },
    provides: deps => {
      t.equal(deps.a.a, 'PluginA');
      return {
        b: 'PluginB'
      };
    }
  });
  app.register(TokenA, PluginA);
  app.register(TokenB, PluginB);
  app.register(createPlugin({
    deps: {
      a: TokenA,
      b: TokenB
    },
    provides: deps => {
      t.equal(deps.a.a, 'PluginA');
      t.equal(deps.b.b, 'PluginB');
    }
  }));
  app.resolve();
  t.end();
});
tape('dependency registration with middleware', t => {
  const counters = {
    a: 0,
    b: 0,
    c: 0,
    d: 0
  };
  const app = new App$2('el', el => el);
  t.ok(app, 'creates an app');
  const PluginA = createPlugin({
    provides: () => {
      counters.a++;
      t.equal(counters.a, 1, 'only instantiates once');
      return {
        a: 'PluginA'
      };
    }
  });
  const PluginB = createPlugin({
    deps: {
      a: TokenA
    },
    provides: deps => {
      counters.b++;
      t.equal(deps.a.a, 'PluginA');
      t.equal(counters.b, 1, 'only instantiates once');
      return {
        b: 'PluginB'
      };
    }
  });
  const PluginC = createPlugin({
    deps: {
      a: TokenA,
      b: TokenB
    },
    provides: deps => {
      counters.c++;
      t.equal(deps.a.a, 'PluginA');
      t.equal(deps.b.b, 'PluginB');
      t.equal(counters.c, 1, 'only instantiates once');
      return {
        c: 'PluginC'
      };
    },
    middleware: () => (ctx, next) => next()
  });
  app.register(TokenA, PluginA);
  app.register(TokenB, PluginB);
  app.register(TokenC, PluginC);
  t.equal(counters.a, 0, 'does not instantiate until resolve is called');
  t.equal(counters.b, 0, 'does not instantiate until resolve is called');
  t.equal(counters.c, 0, 'does not instantiate until resolve is called');
  app.resolve();
  t.equal(counters.a, 1, 'only instantiates once');
  t.equal(counters.b, 1, 'only instantiates once');
  t.equal(counters.c, 1, 'only instantiates once');
  t.end();
});
tape('dependency registration with missing dependency', t => {
  const app = new App$2('el', el => el);
  const PluginA = createPlugin({
    provides: () => {
      return {
        a: 'PluginA'
      };
    }
  });
  const PluginC = createPlugin({
    deps: {
      a: TokenA,
      b: TokenB
    },
    provides: () => {
      return {
        c: 'PluginC'
      };
    }
  });
  app.register(TokenA, PluginA);
  app.register(TokenC, PluginC);
  t.throws(() => app.resolve(), 'Catches missing dependencies');
  t.end();
});
tape('dependency registration with null value', t => {
  const app = new App$2('el', el => el);
  t.doesNotThrow(() => {
    const PluginC = createPlugin({
      deps: {
        optionalNull: TokenEAsNullable
      },
      provides: deps => {
        t.equal(deps.optionalNull, null, 'null provided as expected');
      }
    });
    app.register(TokenEAsNullable, null);
    app.register(PluginC);
    app.resolve();
  });
  t.doesNotThrow(() => {
    const app = new App$2('el', el => el); // $FlowFixMe

    app.register(TokenString, null);
    app.middleware({
      something: TokenString
    }, ({
      something
    }) => {
      t.equal(something, null, 'null provided as expected');
      return (ctx, next) => next();
    });
    app.resolve();
  });
  t.end();
});
tape('dependency registration with optional deps', t => {
  const app = new App$2('el', el => el);

  const checkString = s => {
    t.equals(s, 'hello', 'correct string value is provided');
  };

  const checkNumUndefined = n => {
    t.equals(n, undefined, 'no number value is provided for unregistered optional token');
  };

  const PluginA = createPlugin({
    deps: {
      str: TokenString,
      numOpt: TokenNumber.optional
    },
    provides: ({
      str,
      numOpt
    }) => {
      checkString(str);
      checkNumUndefined(numOpt);
      return {
        a: 'Hello'
      };
    }
  });
  app.register(TokenString, 'hello');
  app.register(PluginA);
  app.resolve();
  t.end();
});
tape('dependency registration with missing deep tree dependency', t => {
  const app = new App$2('el', el => el);
  const PluginA = createPlugin({
    provides: () => {
      return {
        a: 'PluginA'
      };
    }
  });
  const PluginB = createPlugin({
    deps: {
      a: TokenA,
      d: 'RANDOM-TOKEN'
    },
    provides: () => {
      return {
        b: 'PluginB'
      };
    }
  });
  const PluginC = createPlugin({
    deps: {
      a: TokenA,
      b: TokenB
    },
    provides: () => {
      return {
        c: 'PluginC'
      };
    }
  });
  app.register(TokenC, PluginC);
  app.register(TokenA, PluginA);
  app.register(TokenB, PluginB);
  t.throws(() => app.resolve(), 'Catches missing dependencies');
  t.end();
});
tape('dependency registration with circular dependency', t => {
  const app = new App$2('el', el => el);
  const PluginB = createPlugin({
    deps: {
      c: TokenC
    },
    provides: () => {
      return {
        b: 'PluginB'
      };
    }
  });
  const PluginC = createPlugin({
    deps: {
      b: TokenB
    },
    provides: () => {
      return {
        c: 'PluginC'
      };
    }
  });
  app.register(TokenB, PluginB);
  app.register(TokenC, PluginC);
  t.throws(() => app.resolve(), 'Catches circular dependencies');
  t.end();
});
tape('dependency configuration with missing deps', t => {
  const ParentToken = createToken('parent-token');
  const StringToken = createToken('string-token');
  const OtherStringToken = createToken('other-string-token');
  const app = new App$2('el', el => el);
  app.register(ParentToken, createPlugin({
    deps: {
      a: StringToken,
      b: OtherStringToken
    },
    provides: () => {
      t.fail('should not get here');
      return 'service';
    }
  }));
  app.register(StringToken, 'string-a');
  t.throws(() => app.resolve(), 'throws if dependencies are not configured');
  t.throws(() => app.resolve(), /required by plugins registered with tokens: "parent-token"/);
  t.end();
});
tape('error message when dependent plugin does not have token', t => {
  const StringToken = createToken('string-token');
  const OtherStringToken = createToken('other-string-token');
  const app = new App$2('el', el => el);
  app.register(createPlugin({
    deps: {
      a: StringToken,
      b: OtherStringToken
    },
    provides: () => {
      t.fail('should not get here');
      return {};
    }
  }));
  app.register(StringToken, 'string-a');
  t.throws(() => app.resolve(), /required by plugins registered with tokens: "UnnamedPlugin"/);
  t.end();
});
tape('Extraneous dependencies', t => {
  const app = new App$2('el', el => el);
  const TestToken = createToken('test');
  app.register(TestToken, 'some-value');
  t.throws(() => app.resolve());
  t.end();
});
tape('Extraneous dependencies after re-registering', t => {
  const app = new App$2('el', el => el);
  const TokenA = createToken('A');
  const TokenB = createToken('B');
  app.register(TokenA, createPlugin({
    deps: {
      b: TokenB
    }
  }));
  app.register(TokenB, 'test');
  app.register(TokenA, createPlugin({}));
  t.doesNotThrow(() => app.resolve());
  t.end();
});
tape('Missing token errors reasonably', t => {
  const app = new App$2('el', el => el); // $FlowFixMe

  t.throws(() => app.register('some-value'), /Cannot register some-value/);
  const BrowserPlugin = null; // idiomatic browser plugin implementation for server-only plugin is `export default null`;
  // $FlowFixMe

  t.throws(() => app.register(BrowserPlugin), /Cannot register null/);
  t.end();
});
tape('retrieve dependency', t => {
  const app = new App$2('el', el => el);
  const TokenA = createToken('a');
  const PluginA = createPlugin({
    provides: () => {
      return {
        a: 'Hello'
      };
    }
  });
  app.register(TokenA, PluginA);
  app.resolve();
  t.equal(app.getService(TokenA).a, 'Hello');
  t.end();
});
tape('retrieve unresolved dependency', t => {
  const app = new App$2('el', el => el);
  const TokenA = createToken('a');
  const PluginA = createPlugin({
    provides: () => {
      return {
        a: 'Hello'
      };
    }
  });
  app.register(TokenA, PluginA);
  t.throws(() => app.getService(TokenA), /Cannot get service from unresolved app/);
  t.end();
});

const App$3 = ServerAppFactory();
tape('enhancement', t => {
  const app = new App$3('el', el => el);
  const FnToken = createToken('FnType');
  const BaseFn = createPlugin({
    provides: () => {
      return arg => arg;
    }
  });

  const BaseFnEnhancer = fn => {
    return arg => {
      return fn(arg) + ' enhanced';
    };
  };

  app.register(FnToken, BaseFn);
  app.enhance(FnToken, BaseFnEnhancer);
  app.middleware({
    fn: FnToken
  }, ({
    fn
  }) => {
    t.equal(fn('hello'), 'hello enhanced');
    t.end();
    return (ctx, next) => next();
  });
  app.resolve();
});
tape('enhancement with a plugin', t => {
  const app = new App$3('el', el => el);
  const FnToken = createToken('FnType');
  const BaseFn = createPlugin({
    provides: () => {
      return arg => arg;
    }
  });

  const BaseFnEnhancer = fn => {
    return createPlugin({
      provides: () => {
        return arg => {
          return fn(arg) + ' enhanced';
        };
      }
    });
  };

  app.register(FnToken, BaseFn);
  app.enhance(FnToken, BaseFnEnhancer);
  app.middleware({
    fn: FnToken
  }, ({
    fn
  }) => {
    t.equal(fn('hello'), 'hello enhanced');
    t.end();
    return (ctx, next) => next();
  });
  app.resolve();
});
tape('enhancement with a plugin allows orphan plugins', t => {
  const app = new App$3('el', el => el);
  const FnToken = createToken('FnType');

  const BaseFn = a => a;

  const BaseFnEnhancer = fn => {
    return createPlugin({
      provides: () => {
        return arg => {
          return fn(arg) + ' enhanced';
        };
      }
    });
  };

  app.register(FnToken, BaseFn);
  app.enhance(FnToken, BaseFnEnhancer);
  t.doesNotThrow(() => {
    app.resolve();
  });
  t.end();
});
tape('enhancement with a non-plugin enhancer does not allow orphan plugins', t => {
  const app = new App$3('el', el => el);
  const FnToken = createToken('FnType');

  const BaseFn = a => a;

  const BaseFnEnhancer = fn => {
    return fn;
  };

  app.register(FnToken, BaseFn);
  app.enhance(FnToken, BaseFnEnhancer);
  t.throws(() => {
    app.resolve();
  });
  t.end();
});
tape('enhancement with a plugin with deps', t => {
  const app = new App$3('el', el => el);
  const DepAToken = createToken('DepA');
  const DepBToken = createToken('DepB');
  const DepCToken = createToken('DepC');
  const DepA = 'test-dep-a';
  const DepB = createPlugin({
    deps: {
      a: DepAToken
    },
    provides: ({
      a
    }) => {
      t.equal(a, DepA);
      return 'test-dep-b';
    }
  });
  const FnToken = createToken('FnType');
  const BaseFn = createPlugin({
    provides: () => {
      return arg => arg;
    }
  });

  const BaseFnEnhancer = fn => {
    return createPlugin({
      deps: {
        a: DepAToken,
        b: DepBToken,
        c: DepCToken
      },
      provides: ({
        a,
        b,
        c
      }) => {
        t.equal(a, 'test-dep-a');
        t.equal(b, 'test-dep-b');
        t.equal(c, 'test-dep-c');
        return arg => {
          return fn(arg) + ' enhanced';
        };
      }
    });
  };

  app.register(DepAToken, DepA);
  app.register(DepBToken, DepB);
  app.register(DepCToken, 'test-dep-c');
  app.register(FnToken, BaseFn);
  app.enhance(FnToken, BaseFnEnhancer);
  app.middleware({
    fn: FnToken
  }, ({
    fn
  }) => {
    t.equal(fn('hello'), 'hello enhanced');
    t.end();
    return (ctx, next) => next();
  });
  app.resolve();
});
tape('enhancement with a plugin with missing deps', t => {
  const app = new App$3('el', el => el);
  const DepAToken = createToken('DepA');
  const DepBToken = createToken('DepB');
  const DepB = 'test-dep-b';
  const FnToken = createToken('FnType');
  const BaseFn = createPlugin({
    provides: () => {
      return arg => arg;
    }
  });

  const BaseFnEnhancer = fn => {
    return createPlugin({
      deps: {
        a: DepAToken,
        b: DepBToken
      },
      provides: () => {
        t.fail('should not get here');
        return arg => {
          return fn(arg) + ' enhanced';
        };
      }
    });
  };

  app.register(DepBToken, DepB);
  app.register(FnToken, BaseFn);
  app.enhance(FnToken, BaseFnEnhancer);
  app.middleware({
    fn: FnToken
  }, ({
    fn
  }) => {
    t.equal(fn('hello'), 'hello enhanced');
    t.end();
    return (ctx, next) => next();
  });
  t.throws(() => app.resolve(), /This token is required by plugins registered with tokens: "EnhancerOf<FnType>"/);
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
tape('loadEnv defaults', t => {
  const env = loadEnv()();
  t.deepEqual(env, {
    rootDir: '.',
    env: 'development',
    prefix: '',
    assetPath: '/_static',
    baseAssetPath: '/_static',
    cdnUrl: '',
    webpackPublicPath: '/_static'
  });
  t.end();
});
tape('loadEnv overrides', t => {
  process.env.ROOT_DIR = 'test_root_dir';
  process.env.NODE_ENV = 'production';
  process.env.ROUTE_PREFIX = 'test_route_prefix';
  process.env.FRAMEWORK_STATIC_ASSET_PATH = '/test_framework';
  process.env.CDN_URL = 'test_cdn_url';
  const env = loadEnv()();
  t.deepEqual(env, {
    rootDir: 'test_root_dir',
    env: 'production',
    prefix: 'test_route_prefix',
    assetPath: 'test_route_prefix/test_framework',
    baseAssetPath: '/test_framework',
    cdnUrl: 'test_cdn_url',
    webpackPublicPath: 'test_cdn_url'
  });
  process.env.ROOT_DIR = '';
  process.env.NODE_ENV = '';
  process.env.ROUTE_PREFIX = '';
  process.env.FRAMEWORK_STATIC_ASSET_PATH = '';
  process.env.CDN_URL = '';
  t.end();
});
tape('loadEnv validation', t => {
  process.env.NODE_ENV = 'LOL';
  t.throws(loadEnv, /Invalid NODE_ENV loaded/);
  process.env.NODE_ENV = '';
  process.env.ROUTE_PREFIX = 'test/';
  t.throws(loadEnv, /ROUTE_PREFIX must not end with /);
  process.env.ROUTE_PREFIX = '';
  process.env.FRAMEWORK_STATIC_ASSET_PATH = 'test/';
  t.throws(loadEnv, /FRAMEWORK_STATIC_ASSET_PATH must not end with /);
  process.env.FRAMEWORK_STATIC_ASSET_PATH = '';
  process.env.CDN_URL = 'test/';
  t.throws(loadEnv, /CDN_URL must not end with /);
  process.env.CDN_URL = '';
  t.end();
});

/** Copyright (c) 2018 Uber Technologies, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */
tape('fusion-core api', t => {
  t.ok(App, 'exports App as default');

  {
    t.ok(flowHtml, 'exports html');
    t.ok(flowDangerouslySetHTML, 'exports dangerouslySetHTML');
    t.ok(flowConsumeSanitizedHTML, 'exports consumeSanitizedHTML');
    t.ok(flowEscape, 'exports escape');
  }

  t.ok(unescape, 'exports unescape');
  t.ok(compose, 'exports compose');
  t.ok(memoize, 'exports memoize');
  t.ok(assetUrl, 'exports assetUrl');
  t.ok(chunkId, 'exports chunkId');
  t.ok(syncChunkIds, 'exports syncChunkIds');
  t.ok(syncChunkPaths, 'exports syncChunkPaths');
  t.ok(RenderToken, 'exports RenderToken');
  t.ok(ElementToken, 'exports ElementToken');
  t.ok(SSRDeciderToken, 'exports SSRDeciderToken');
  t.ok(createPlugin, 'exports createPlugin');
  t.end();
});

/** Copyright (c) 2018 Uber Technologies, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */
tape('ssr with accept header', async t => {
  const flags = {
    render: false
  };
  const element = 'hi';

  const render = () => {
    flags.render = true;
    return 'lol';
  };

  const app = new App(element, render);
  app.middleware(async (ctx, next) => {
    t.equals(ctx.element, element, 'sets ctx.element');
    t.equals(ctx.type, 'text/html', 'sets ctx.type');
    t.equals(typeof ctx.template, 'object', 'sets ctx.template');
    t.equals(typeof ctx.template.title, 'string', 'sets ctx.template.title');
    t.equals(typeof ctx.template.htmlAttrs, 'object', 'ctx.template.htmlAttrs'); // $FlowFixMe

    t.equals(typeof ctx.template.bodyAttrs, 'object', 'ctx.template.bodyAttrs');
    t.ok(ctx.template.head instanceof Array, 'ctx.template.head');
    t.ok(ctx.template.body instanceof Array, 'ctx.template.body');
    await next();
    t.equals(typeof ctx.template, 'object', 'ctx.template keeps structure on upstream');
    t.equals(typeof ctx.template.title, 'string', 'ctx.template.title keeps structure on upstream');
    t.equals(typeof ctx.template.htmlAttrs, 'object', 'ctx.template.htmlAttrs keeps structure on upstream');
    t.equals( // $FlowFixMe
    typeof ctx.template.bodyAttrs, 'object', 'ctx.template.bodyAttrs keeps structure on upstream');
    t.ok(ctx.template.head instanceof Array, 'ctx.template.head keeps structure on upstream');
    t.ok(ctx.template.body instanceof Array, 'ctx.template.body keeps structure on upstream');
  });

  try {
    // $FlowFixMe
    const ctx = await run(app);
    t.equals(typeof ctx.rendered, 'string', 'ctx.rendered');
    t.equals(typeof ctx.body, 'string', 'renders ctx.body to string');
    t.ok(!ctx.body.includes(element), 'does not renders element into ctx.body');
    t.ok(flags.render, 'calls render');
  } catch (e) {
    t.ifError(e, 'should not error');
  }

  t.end();
});
tape('ssr with bot user agent', async t => {
  const flags = {
    render: false
  };
  const element = 'hi';

  const render = () => {
    flags.render = true;
    return 'lol';
  };

  const app = new App(element, render);
  app.middleware(async (ctx, next) => {
    t.equals(ctx.element, element, 'sets ctx.element');
    t.equals(ctx.type, 'text/html', 'sets ctx.type');
    t.equals(typeof ctx.template, 'object', 'sets ctx.template');
    t.equals(typeof ctx.template.title, 'string', 'sets ctx.template.title');
    t.equals(typeof ctx.template.htmlAttrs, 'object', 'ctx.template.htmlAttrs'); // $FlowFixMe

    t.equals(typeof ctx.template.bodyAttrs, 'object', 'ctx.template.bodyAttrs');
    t.ok(ctx.template.head instanceof Array, 'ctx.template.head');
    t.ok(ctx.template.body instanceof Array, 'ctx.template.body');
    await next();
    t.equals(typeof ctx.template, 'object', 'ctx.template keeps structure on upstream');
    t.equals(typeof ctx.template.title, 'string', 'ctx.template.title keeps structure on upstream');
    t.equals(typeof ctx.template.htmlAttrs, 'object', 'ctx.template.htmlAttrs keeps structure on upstream');
    t.equals( // $FlowFixMe
    typeof ctx.template.bodyAttrs, 'object', 'ctx.template.bodyAttrs keeps structure on upstream');
    t.ok(ctx.template.head instanceof Array, 'ctx.template.head keeps structure on upstream');
    t.ok(ctx.template.body instanceof Array, 'ctx.template.body keeps structure on upstream');
  });

  try {
    // $FlowFixMe
    let initialCtx = {
      headers: {
        accept: '*/*',
        'user-agent': 'AdsBot-Google'
      }
    }; // $FlowFixMe

    const ctx = await run(app, initialCtx);
    t.equals(typeof ctx.rendered, 'string', 'ctx.rendered');
    t.equals(typeof ctx.body, 'string', 'renders ctx.body to string');
    t.ok(!ctx.body.includes(element), 'does not renders element into ctx.body');
    t.ok(flags.render, 'calls render');
  } catch (e) {
    t.ifError(e, 'should not error');
  }

  t.end();
});
tape('ssr without valid accept header', async t => {
  const flags = {
    render: false
  };
  const element = 'hi';

  const render = () => {
    flags.render = true;
  };

  const app = new App(element, render);
  let initialCtx = {
    headers: {
      accept: '*/*'
    }
  };

  try {
    // $FlowFixMe
    const ctx = await run(app, initialCtx);
    t.notok(ctx.element, 'does not set ctx.element');
    t.notok(ctx.type, 'does not set ctx.type');
    t.notok(ctx.body, 'does not set ctx.body');
    t.ok(!flags.render, 'does not call render');
    t.notok(ctx.body, 'does not render ctx.body to string');
  } catch (e) {
    t.ifError(e, 'does not error');
  }

  t.end();
});
tape('ssr without valid bot user agent', async t => {
  const flags = {
    render: false
  };
  const element = 'hi';

  const render = () => {
    flags.render = true;
  };

  const app = new App(element, render);
  let initialCtx = {
    headers: {
      accept: '*/*',
      'user-agent': 'test'
    }
  };

  try {
    // $FlowFixMe
    const ctx = await run(app, initialCtx);
    t.notok(ctx.element, 'does not set ctx.element');
    t.notok(ctx.type, 'does not set ctx.type');
    t.notok(ctx.body, 'does not set ctx.body');
    t.ok(!flags.render, 'does not call render');
    t.notok(ctx.body, 'does not render ctx.body to string');
  } catch (e) {
    t.ifError(e, 'does not error');
  }

  t.end();
});
tape('disable SSR by composing SSRDecider with a plugin', async t => {
  const flags = {
    render: false
  };
  const element = 'hi';

  const render = () => {
    flags.render = true;
  };

  function buildApp() {
    const app = new App(element, render);
    app.middleware((ctx, next) => {
      ctx.body = '_NO_SSR_';
      return next();
    });

    const SSRDeciderEnhancer = ssrDecider => {
      return createPlugin({
        provides: () => {
          return ctx => {
            return ssrDecider(ctx) && !ctx.path.startsWith('/foo') && !ctx.path.startsWith('/bar');
          };
        }
      });
    };

    app.enhance(SSRDeciderToken, SSRDeciderEnhancer);
    return app;
  }

  try {
    let initialCtx = {
      path: '/foo'
    }; // $FlowFixMe

    const ctx = await run(buildApp(), initialCtx);
    t.notok(ctx.element, 'non-ssr route does not set ctx.element');
    t.notok(ctx.type, 'non-ssr route does not set ctx.type');
    t.ok(!flags.render, 'non-ssr route does not call render');
    t.equals(ctx.body, '_NO_SSR_', 'can set body in plugin during non-ssr');
    let validSSRPathCtx = {
      path: '/some-path'
    }; // $FlowFixMe

    const renderCtx = await run(buildApp(), validSSRPathCtx);
    t.equals(renderCtx.element, element, 'ssr route sets ctx.element');
    t.equals(renderCtx.type, 'text/html', 'ssr route sets ctx.type');
  } catch (e) {
    t.ifError(e, 'does not error');
  }

  t.end();
});
tape('disable SSR by composing SSRDecider with a function', async t => {
  const flags = {
    render: false
  };
  const element = 'hi';

  const render = () => {
    flags.render = true;
  };

  function buildApp() {
    const app = new App(element, render);
    app.middleware((ctx, next) => {
      ctx.body = '_NO_SSR_';
      return next();
    });
    app.enhance(SSRDeciderToken, decide => ctx => decide(ctx) && !ctx.path.startsWith('/foo'));
    return app;
  }

  try {
    let initialCtx = {
      path: '/foo'
    }; // $FlowFixMe

    const ctx = await run(buildApp(), initialCtx);
    t.notok(ctx.element, 'non-ssr route does not set ctx.element');
    t.notok(ctx.type, 'non-ssr route does not set ctx.type');
    t.ok(!flags.render, 'non-ssr route does not call render');
    t.equals(ctx.body, '_NO_SSR_', 'can set body in plugin during non-ssr');
    let validSSRPathCtx = {
      path: '/some-path'
    }; // $FlowFixMe

    const renderCtx = await run(buildApp(), validSSRPathCtx);
    t.equals(renderCtx.element, element, 'ssr route sets ctx.element');
    t.equals(renderCtx.type, 'text/html', 'ssr route sets ctx.type');
  } catch (e) {
    t.ifError(e, 'does not error');
  }

  t.end();
});
tape('SSR extension handling', async t => {
  const extensionToSSRSupported = {
    js: false,
    gif: false,
    jpg: false,
    png: false,
    pdf: false,
    json: false,
    html: true
  };
  const flags = {
    render: false
  };
  const element = 'hi';

  const render = () => {
    flags.render = true;
  };

  function buildApp() {
    const app = new App(element, render);
    return app;
  }

  try {
    for (let i in extensionToSSRSupported) {
      flags.render = false;
      let initialCtx = {
        path: `/some-path.${i}`
      }; // $FlowFixMe

      await run(buildApp(), initialCtx);
      const shouldSSR = extensionToSSRSupported[i];
      t.equals(flags.render, shouldSSR, `extension of ${i} should ${shouldSSR ? '' : 'not'} have ssr`);
    }
  } catch (e) {
    t.ifError(e, 'does not error');
  }

  t.end();
});
tape('SSR with redirects downstream', async t => {
  const flags = {
    render: false
  };
  const element = 'hi';

  const render = () => {
    flags.render = true;
    return 'lol';
  };

  const app = new App(element, render);
  app.middleware(async (ctx, next) => {
    t.equals(ctx.element, element, 'sets ctx.element');
    t.equals(ctx.type, 'text/html', 'sets ctx.type');
    t.equals(typeof ctx.template, 'object', 'sets ctx.template');
    t.equals(typeof ctx.template.title, 'string', 'sets ctx.template.title');
    t.equals(typeof ctx.template.htmlAttrs, 'object', 'ctx.template.htmlAttrs'); // $FlowFixMe

    t.equals(typeof ctx.template.bodyAttrs, 'object', 'ctx.template.bodyAttrs');
    t.ok(ctx.template.head instanceof Array, 'ctx.template.head');
    t.ok(ctx.template.body instanceof Array, 'ctx.template.body');
    ctx.status = 302;
    ctx.body = 'redirect';
    await next();
    t.equals(typeof ctx.template, 'object', 'ctx.template keeps structure on upstream');
    t.equals(typeof ctx.template.title, 'string', 'ctx.template.title keeps structure on upstream');
    t.equals(typeof ctx.template.htmlAttrs, 'object', 'ctx.template.htmlAttrs keeps structure on upstream');
    t.equals( // $FlowFixMe
    typeof ctx.template.bodyAttrs, 'object', 'ctx.template.bodyAttrs keeps structure on upstream');
    t.ok(ctx.template.head instanceof Array, 'ctx.template.head keeps structure on upstream');
    t.ok(ctx.template.body instanceof Array, 'ctx.template.body keeps structure on upstream');
  });

  try {
    const ctx = await run(app);
    t.equal(ctx.status, 302, 'sends 302 status code');
    t.notok(ctx.rendered, 'does not render');
    t.equal(typeof ctx.body, 'string');
    t.notok(flags.render, 'does not call render');
  } catch (e) {
    t.ifError(e, 'should not error');
  }

  t.end();
});
tape('SSR with redirects upstream', async t => {
  const flags = {
    render: false
  };
  const element = 'hi';

  const render = () => {
    flags.render = true;
    return 'lol';
  };

  const app = new App(element, render);
  app.middleware(async (ctx, next) => {
    t.equals(ctx.element, element, 'sets ctx.element');
    t.equals(ctx.type, 'text/html', 'sets ctx.type');
    t.equals(typeof ctx.template, 'object', 'sets ctx.template');
    t.equals(typeof ctx.template.title, 'string', 'sets ctx.template.title');
    t.equals(typeof ctx.template.htmlAttrs, 'object', 'ctx.template.htmlAttrs'); // $FlowFixMe

    t.equals(typeof ctx.template.bodyAttrs, 'object', 'ctx.template.bodyAttrs');
    t.ok(ctx.template.head instanceof Array, 'ctx.template.head');
    t.ok(ctx.template.body instanceof Array, 'ctx.template.body');
    await next();
    ctx.status = 302;
    ctx.body = 'redirect';
    t.equals(typeof ctx.template, 'object', 'ctx.template keeps structure on upstream');
    t.equals(typeof ctx.template.title, 'string', 'ctx.template.title keeps structure on upstream');
    t.equals(typeof ctx.template.htmlAttrs, 'object', 'ctx.template.htmlAttrs keeps structure on upstream');
    t.equals( // $FlowFixMe
    typeof ctx.template.bodyAttrs, 'object', 'ctx.template.bodyAttrs keeps structure on upstream');
    t.ok(ctx.template.head instanceof Array, 'ctx.template.head keeps structure on upstream');
    t.ok(ctx.template.body instanceof Array, 'ctx.template.body keeps structure on upstream');
  });

  try {
    const ctx = await run(app);
    t.equal(ctx.status, 302, 'sends 302 status code');
    t.equal(ctx.rendered, 'lol', 'renders');
    t.equal(typeof ctx.body, 'string');
    t.ok(flags.render, 'calls render');
  } catch (e) {
    t.ifError(e, 'should not error');
  }

  t.end();
});
tape('HTML escaping works', async t => {
  const element = 'hi';

  const render = el => el;

  const template = (ctx, next) => {
    ctx.template.htmlAttrs = {
      lang: '">'
    }; // $FlowFixMe

    ctx.template.bodyAttrs = {
      test: '">'
    };
    ctx.template.title = '</title>';
    return next();
  };

  const app = new App(element, render);
  app.middleware(template);

  try {
    // $FlowFixMe
    const ctx = await run(app);
    t.ok(ctx.body.includes('<html lang="\\u0022\\u003E">'), 'lang works');
    t.ok(ctx.body.includes('<body test="\\u0022\\u003E">'), 'bodyAttrs work');
    t.ok(ctx.body.includes('<title>\\u003C\\u002Ftitle\\u003E</title>'), 'title works');
  } catch (e) {
    t.ifError(e, 'does not error');
  }

  t.end();
});
tape('head and body must be sanitized', async t => {
  const element = 'hi';

  const render = el => el;

  const template = (ctx, next) => {
    ctx.template.head.push(flowHtml`
        <meta charset="${'">'}" />
      `);
    ctx.template.body.push(flowHtml`
        <div>${'">'}</div>
      `);
    return next();
  };

  const app = new App(element, render);
  app.middleware(template);

  try {
    // $FlowFixMe
    const ctx = await run(app);
    t.ok(ctx.body.includes('<meta charset="\\u0022\\u003E" />'), 'head works');
    t.ok(ctx.body.includes('<div>\\u0022\\u003E</div>'), 'body works');
  } catch (e) {
    t.ifError(e, 'does not error');
  }

  t.end();
});
tape('throws if head is not sanitized', async t => {
  const element = 'hi';

  const render = el => el;

  const template = (ctx, next) => {
    // $FlowFixMe
    ctx.template.head.push(`<meta charset="${'">'}" />`);
    return next();
  };

  const app = new App(element, render);
  app.middleware(template);

  try {
    await run(app);
    t.fail('should throw');
  } catch (e) {
    t.ok(e, 'throws if head is not sanitized');
  }

  t.end();
});
tape('throws if body is not sanitized', async t => {
  const element = 'hi';

  const render = el => el;

  const template = (ctx, next) => {
    // $FlowFixMe
    ctx.template.body.push(`<meta charset="${'">'}" />`);
    return next();
  };

  const app = new App(element, render);
  app.middleware(template);

  try {
    await run(app);
    t.fail('should throw');
  } catch (e) {
    t.ok(e, 'throws if body is not sanitized');
  }

  t.end();
});
tape('rendering error handling', async t => {
  const element = 'hi';

  const render = () => {
    return new Promise(() => {
      throw new Error('Test error');
    });
  };

  const app = new App(element, render);

  try {
    await run(app);
  } catch (e) {
    t.equal(e.message, 'Test error');
    t.end();
  }
});
tape('app handles no render token', async t => {
  const app = new FusionApp('el', el => el);
  app.renderer = null;

  try {
    await app.resolve();
    t.end();
  } catch (e) {
    t.equal(e.message, 'Missing registration for RenderToken');
    t.end();
  }
});
tape('enable proxy flag', async t => {
  const element = 'hi';

  const render = () => {
    return 'lol';
  };

  const app = new App(element, render); // $FlowFixMe

  t.equal(app._app.proxy, true, 'fusion proxy should be true by default');
  t.end();
});

/** Copyright (c) 2018 Uber Technologies, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */
test('memoize', t => {
  // $FlowFixMe
  const mockCtx = {
    memoized: new Map()
  };
  let counter = 0;
  const memoized = memoize(() => {
    return ++counter;
  });
  let counterB = 0;
  const memoizedB = memoize(() => {
    return ++counterB;
  });
  t.equal(memoized(mockCtx), 1, 'calls function when it has no value');
  t.equal(memoized(mockCtx), 1, 'memoizes correctly');
  t.equal(memoizedB(mockCtx), 1, 'calls function when it has no value');
  t.equal(memoizedB(mockCtx), 1, 'memoizes correctly');
  t.equal(memoized(mockCtx), 1, 'calls function when it has no value');
  t.equal(memoized(mockCtx), 1, 'memoizes correctly');
  t.end();
});

const App$4 = ServerAppFactory();
const TokenA$1 = createToken('TokenA');
const TokenB$1 = createToken('TokenB');
const TokenString$1 = createToken('TokenString');

function delay() {
  return new Promise(resolve => {
    setTimeout(resolve, 1);
  });
}

test('async render', async t => {
  let numRenders = 0;
  const element = 'hi';

  const renderFn = el => {
    t.equals(el, element, 'render receives correct args');
    return delay().then(() => {
      numRenders++;
      return el;
    });
  };

  const app = new App$4(element, renderFn);
  const ctx = await run(app);
  t.ok(ctx.element, 'sets ctx.element');
  t.equal(ctx.rendered, element);
  t.equal(numRenders, 1, 'calls render once');
  t.equal(ctx.element, element, 'sets ctx.element');
  t.end();
});
test('sync render', async t => {
  let numRenders = 0;
  const element = 'hi';

  const renderFn = el => {
    numRenders++;
    t.equals(el, element, 'render receives correct args');
    return el;
  };

  const app = new App$4(element, renderFn);
  const ctx = await run(app);
  t.equal(ctx.rendered, element);
  t.equal(numRenders, 1, 'calls render once');
  t.equal(ctx.element, element, 'sets ctx.element');
  t.end();
});
test('render plugin order', async t => {
  let numRenders = 0;
  const element = 'hi';
  let order = 0;

  const renderFn = el => {
    order++;
    t.equals(el, element, 'render receives correct args');
    t.equal(order, 3, 'runs render function last');
    return delay().then(() => {
      numRenders++;
      return el;
    });
  };

  const renderPlugin = createPlugin({
    provides: () => renderFn,
    middleware: () => (ctx, next) => {
      order++;
      t.equal(ctx.element, element, 'sets ctx.element before running render middleware');
      t.equal(order, 2, 'runs render middleware before render');
      return next();
    }
  }); // TODO(#137): fix flow types for renderPlugin
  // $FlowFixMe

  const app = new App$4(element, renderPlugin);
  app.middleware((ctx, next) => {
    order++;
    t.equal(order, 1, 'runs middleware before renderer');
    return next();
  });
  const ctx = await run(app);
  t.ok(ctx.element, 'sets ctx.element');
  t.equal(ctx.rendered, element);
  t.equal(numRenders, 1, 'calls render once');
  t.equal(ctx.element, element, 'sets ctx.element');
  t.end();
});
test('app.register - async render with async middleware', async t => {
  let numRenders = 0;
  const element = 'hi';

  const renderFn = el => {
    t.equals(el, element, 'render receives correct args');
    return delay().then(() => {
      numRenders++;
      return el;
    });
  };

  const app = new App$4(element, renderFn);
  app.middleware(async (ctx, next) => {
    t.equal(ctx.element, element);
    t.equal(numRenders, 0);
    t.notok(ctx.rendered);
    await next();
    t.equal(numRenders, 1);
    t.equal(ctx.rendered, element);
  });
  const ctx = await run(app);
  t.equal(ctx.rendered, element);
  t.equal(numRenders, 1, 'calls render');
  t.equal(ctx.element, element, 'sets ctx.element');
  t.end();
});
test('app.register - middleware execution respects registration order', async t => {
  let numRenders = 0;
  const element = 'hi';

  const renderFn = el => {
    t.equals(el, element, 'render receives correct args');
    return delay().then(() => {
      numRenders++;
      return el;
    });
  };

  const app = new App$4(element, renderFn);
  let order = 0;
  app.middleware(async (ctx, next) => {
    t.equal(order, 0, 'calls downstream in correct order');
    order++;
    t.equal(ctx.element, element);
    t.equal(numRenders, 0);
    t.notok(ctx.rendered);
    await next();
    t.equal(order, 3, 'calls upstream in correct order');
    t.equal(numRenders, 1);
    t.equal(ctx.rendered, element);
    order++;
  });
  app.middleware(async (ctx, next) => {
    t.equal(order, 1, 'calls downstream in correct order');
    order++;
    t.equal(ctx.element, element);
    t.equal(numRenders, 0);
    t.notok(ctx.rendered);
    await next();
    t.equal(order, 2, 'calls upstream in correct order');
    order++;
    t.equal(numRenders, 1);
    t.equal(ctx.rendered, element);
  });
  const ctx = await run(app);
  t.equal(ctx.rendered, element);
  t.equal(numRenders, 1, 'calls render');
  t.equal(order, 4, 'calls middleware in correct order');
  t.end();
});
test('app.register - middleware execution respects dependency order', async t => {
  let numRenders = 0;
  const element = 'hi';

  const renderFn = el => {
    t.equals(el, element, 'render receives correct args');
    return delay().then(() => {
      numRenders++;
      return el;
    });
  };

  const app = new App$4(element, renderFn);
  let order = 0;
  app.middleware(async function first(ctx, next) {
    t.equal(order, 0, 'calls downstream in correct order');
    t.equal(numRenders, 0);
    order++;
    await next();
    t.equal(order, 7, 'calls upstream in correct order');
    t.equal(numRenders, 1);
    order++;
  });
  app.register(TokenA$1, createPlugin({
    deps: {
      TokenB: TokenB$1
    },
    provides: deps => {
      t.equal(deps.TokenB().b, 'something-b');
      return {
        a: 'something'
      };
    },
    middleware: deps => {
      t.equal(deps.TokenB().b, 'something-b');
      return async function second(ctx, next) {
        t.equal(order, 2, 'calls downstream in correct order');
        t.equal(numRenders, 0);
        order++;
        await next();
        t.equal(order, 5, 'calls upstream in correct order');
        t.equal(numRenders, 1);
        order++;
      };
    }
  }));
  app.middleware(async function third(ctx, next) {
    t.equal(order, 3, 'calls downstream in correct order');
    t.equal(numRenders, 0);
    order++;
    await next();
    t.equal(order, 4, 'calls upstream in correct order');
    t.equal(numRenders, 1);
    order++;
  });
  app.register(TokenB$1, createPlugin({
    provides: () => () => ({
      b: 'something-b'
    }),
    middleware: () => {
      return async function fourth(ctx, next) {
        t.equal(order, 1, 'calls downstream in correct order');
        t.equal(numRenders, 0);
        order++;
        await next();
        t.equal(order, 6, 'calls upstream in correct order');
        t.equal(numRenders, 1);
        order++;
      };
    }
  }));
  const ctx = await run(app);
  t.equal(ctx.rendered, element);
  t.equal(numRenders, 1, 'calls render');
  t.equal(order, 8, 'calls middleware in correct order');
  t.end();
});
test('app.middleware with dependencies', async t => {
  const element = 'hi';

  const renderFn = el => {
    return el;
  };

  const app = new App$4(element, renderFn);
  let called = false;
  app.register(TokenString$1, 'Something');
  app.middleware({
    TokenString: TokenString$1
  }, deps => {
    t.equal(deps.TokenString, 'Something');
    return (ctx, next) => {
      called = true;
      return next();
    };
  });
  await run(app);
  t.ok(called, 'calls middleware');
  t.end();
});
test('app.middleware with no dependencies', async t => {
  const element = 'hi';

  const renderFn = el => {
    return el;
  };

  const app = new App$4(element, renderFn);
  let called = false;
  app.middleware((ctx, next) => {
    called = true;
    return next();
  });
  await run(app);
  t.ok(called, 'calls middleware');
  t.end();
});
true && test('ctx.respond as false', async t => {
  const element = 'hi';

  const renderFn = el => {
    t.fail('should not render if ctx.respond is false');
    return el;
  };

  const app = new App$4(element, renderFn);
  app.middleware((ctx, next) => {
    ctx.respond = false;
    return next();
  });
  const ctx = await run(app);
  t.notOk(ctx.rendered, 'should not render');
  t.end();
});

/** Copyright (c) 2018 Uber Technologies, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */
tape('escaping works', async t => {
  t.equals(flowEscape('<meta name="" />'), '\\u003Cmeta name=\\u0022\\u0022 \\u002F\\u003E');
  t.end();
});
tape('unescaping works', async t => {
  t.equals(unescape('\\u003Cmeta name=\\u0022\\u0022 \\u002F\\u003E'), '<meta name="" />');
  t.end();
});
tape('html sanitization works', async t => {
  const userData = '<malicious data="" />';
  const value = flowHtml`
    <div>${userData}</div>
    ${null}
  `;
  t.equals(typeof value, 'object');
  t.equals( // $FlowFixMe
  flowConsumeSanitizedHTML(value), `\n    <div>\\u003Cmalicious data=\\u0022\\u0022 \\u002F\\u003E</div>\n    null\n  `);
  t.end();
});
tape('nested sanitization works', async t => {
  const safe = flowHtml`
    hello
  `;
  const value = flowHtml`
    <div>${safe}</div>
  `;
  t.equals(typeof value, 'object'); // $FlowFixMe

  t.equals(flowConsumeSanitizedHTML(value), `\n    <div>\n    hello\n  </div>\n  `);
  t.end();
});
tape('dangerouslySetHTML works', async t => {
  const trusted = flowDangerouslySetHTML(JSON.stringify({
    a: 1
  }));
  t.equals(typeof trusted, 'object'); // $FlowFixMe

  t.equals(flowConsumeSanitizedHTML(trusted), `{"a":1}`);
  t.end();
});

const App$5 = ServerAppFactory();
tape('timing plugin', async t => {
  const element = 'hi';

  const renderFn = el => {
    return el;
  };

  const app = new App$5(element, renderFn);
  app.middleware({
    timing: TimingToken
  }, deps => (ctx, next) => {
    t.equal(deps.timing.from(ctx), deps.timing.from(ctx), 'timing is memoized');
    return next();
  });
  const ctx = await run(app);
  t.equal(typeof ctx.timing.start, 'number', 'sets up ctx.timing.start');
  t.ok(ctx.timing.end instanceof Promise, 'sets up ctx.timing.end to be a promise');
  ctx.timing.downstream.then(result => {
    t.equal(typeof result, 'number', 'sets downstream timing result');
  });
  ctx.timing.render.then(result => {
    t.equal(typeof result, 'number', 'sets render timing result');
  });
  ctx.timing.upstream.then(result => {
    t.equal(typeof result, 'number', 'sets upstream timing result');
  });
  ctx.timing.end.then(result => {
    t.equal(typeof result, 'number', 'sets end timing result');
    t.end();
  });
});
tape('timing plugin on error middleware', async t => {
  const element = 'hi';

  const renderFn = el => {
    return el;
  };

  const app = new App$5(element, renderFn);
  let resolved = {
    downstream: false,
    upstream: false,
    render: false
  };
  app.middleware((ctx, next) => {
    ctx.timing.downstream.then(result => {
      resolved.downstream = true;
    });
    ctx.timing.render.then(result => {
      resolved.render = true;
    });
    ctx.timing.upstream.then(result => {
      resolved.upstream = true;
    });
    ctx.timing.end.then(result => {
      t.equal(typeof result, 'number', 'sets end timing result');
      t.equal(resolved.downstream, false, 'does not resolve downstream');
      t.equal(resolved.render, false, 'does not resolve render');
      t.equal(resolved.upstream, false, 'does not resolve upstream');
      t.equal(ctx.status, 500, 'sets ctx.status');
      t.end();
    });
    return next();
  });
  app.middleware((ctx, next) => {
    const e = new Error('fail request'); // $FlowFixMe

    e.status = 500;
    throw e;
  });
  await run(app).catch(e => {});
});

/** Copyright (c) 2018 Uber Technologies, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */
tape('virtualModules api', t => {
  t.equal(typeof assetUrl, 'function');
  t.equal(typeof chunkId, 'function');
  t.equal(typeof syncChunkIds, 'function');
  t.equal(typeof syncChunkPaths, 'function');
  t.equal(assetUrl('0'), '0');
  t.equal(chunkId('0'), '0');
  t.equal(syncChunkIds(0), 0);
  t.equal(syncChunkPaths(0), 0);
  t.end();
});

exports.run = run;
//# sourceMappingURL=node.js.map
