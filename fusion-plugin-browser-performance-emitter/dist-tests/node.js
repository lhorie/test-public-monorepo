'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var fusionPluginUniversalEvents = require('fusion-plugin-universal-events');
var App = require('fusion-core');
var App__default = _interopDefault(App);
var test = _interopDefault(require('tape-cup'));
var MockEmitter = _interopDefault(require('events'));
var fusionTestUtils = require('fusion-test-utils');

var cov_1z7udccrlf = function () {
  var path = "/Users/lhorie/Documents/test-private-monorepo/public/fusion-plugin-browser-performance-emitter/src/server.js",
      hash = "e3707cd8ce61682adc177585ac4deee8d23a4b50",
      Function = function () {}.constructor,
      global = new Function('return this')(),
      gcv = "__coverage__",
      coverageData = {
    path: "/Users/lhorie/Documents/test-private-monorepo/public/fusion-plugin-browser-performance-emitter/src/server.js",
    statementMap: {
      "0": {
        start: {
          line: 18,
          column: 2
        },
        end: {
          line: 165,
          column: 4
        }
      },
      "1": {
        start: {
          line: 22,
          column: 22
        },
        end: {
          line: 22,
          column: 34
        }
      },
      "2": {
        start: {
          line: 23,
          column: 6
        },
        end: {
          line: 25,
          column: 9
        }
      },
      "3": {
        start: {
          line: 24,
          column: 8
        },
        end: {
          line: 24,
          column: 80
        }
      },
      "4": {
        start: {
          line: 29,
          column: 71
        },
        end: {
          line: 29,
          column: 76
        }
      },
      "5": {
        start: {
          line: 31,
          column: 8
        },
        end: {
          line: 36,
          column: 9
        }
      },
      "6": {
        start: {
          line: 32,
          column: 10
        },
        end: {
          line: 34,
          column: 11
        }
      },
      "7": {
        start: {
          line: 33,
          column: 12
        },
        end: {
          line: 33,
          column: 37
        }
      },
      "8": {
        start: {
          line: 35,
          column: 10
        },
        end: {
          line: 35,
          column: 85
        }
      },
      "9": {
        start: {
          line: 38,
          column: 32
        },
        end: {
          line: 42,
          column: 9
        }
      },
      "10": {
        start: {
          line: 44,
          column: 8
        },
        end: {
          line: 49,
          column: 10
        }
      },
      "11": {
        start: {
          line: 53,
          column: 25
        },
        end: {
          line: 53,
          column: 27
        }
      },
      "12": {
        start: {
          line: 54,
          column: 8
        },
        end: {
          line: 93,
          column: 9
        }
      },
      "13": {
        start: {
          line: 55,
          column: 10
        },
        end: {
          line: 85,
          column: 12
        }
      },
      "14": {
        start: {
          line: 86,
          column: 10
        },
        end: {
          line: 92,
          column: 11
        }
      },
      "15": {
        start: {
          line: 88,
          column: 12
        },
        end: {
          line: 88,
          column: 64
        }
      },
      "16": {
        start: {
          line: 90,
          column: 12
        },
        end: {
          line: 91,
          column: 46
        }
      },
      "17": {
        start: {
          line: 95,
          column: 8
        },
        end: {
          line: 120,
          column: 9
        }
      },
      "18": {
        start: {
          line: 97,
          column: 10
        },
        end: {
          line: 97,
          column: 50
        }
      },
      "19": {
        start: {
          line: 99,
          column: 36
        },
        end: {
          line: 108,
          column: 16
        }
      },
      "20": {
        start: {
          line: 100,
          column: 25
        },
        end: {
          line: 100,
          column: 56
        }
      },
      "21": {
        start: {
          line: 101,
          column: 12
        },
        end: {
          line: 106,
          column: 13
        }
      },
      "22": {
        start: {
          line: 102,
          column: 14
        },
        end: {
          line: 104,
          column: 15
        }
      },
      "23": {
        start: {
          line: 103,
          column: 16
        },
        end: {
          line: 103,
          column: 32
        }
      },
      "24": {
        start: {
          line: 105,
          column: 14
        },
        end: {
          line: 105,
          column: 46
        }
      },
      "25": {
        start: {
          line: 107,
          column: 12
        },
        end: {
          line: 107,
          column: 24
        }
      },
      "26": {
        start: {
          line: 110,
          column: 10
        },
        end: {
          line: 119,
          column: 11
        }
      },
      "27": {
        start: {
          line: 111,
          column: 12
        },
        end: {
          line: 118,
          column: 15
        }
      },
      "28": {
        start: {
          line: 112,
          column: 30
        },
        end: {
          line: 115,
          column: 15
        }
      },
      "29": {
        start: {
          line: 117,
          column: 14
        },
        end: {
          line: 117,
          column: 73
        }
      },
      "30": {
        start: {
          line: 122,
          column: 8
        },
        end: {
          line: 122,
          column: 26
        }
      },
      "31": {
        start: {
          line: 127,
          column: 8
        },
        end: {
          line: 129,
          column: 9
        }
      },
      "32": {
        start: {
          line: 128,
          column: 10
        },
        end: {
          line: 128,
          column: 22
        }
      },
      "33": {
        start: {
          line: 130,
          column: 8
        },
        end: {
          line: 132,
          column: 9
        }
      },
      "34": {
        start: {
          line: 131,
          column: 10
        },
        end: {
          line: 131,
          column: 22
        }
      },
      "35": {
        start: {
          line: 133,
          column: 8
        },
        end: {
          line: 135,
          column: 9
        }
      },
      "36": {
        start: {
          line: 134,
          column: 10
        },
        end: {
          line: 134,
          column: 22
        }
      },
      "37": {
        start: {
          line: 136,
          column: 8
        },
        end: {
          line: 136,
          column: 21
        }
      },
      "38": {
        start: {
          line: 140,
          column: 21
        },
        end: {
          line: 140,
          column: 62
        }
      },
      "39": {
        start: {
          line: 142,
          column: 8
        },
        end: {
          line: 152,
          column: 9
        }
      },
      "40": {
        start: {
          line: 143,
          column: 10
        },
        end: {
          line: 143,
          column: 23
        }
      },
      "41": {
        start: {
          line: 144,
          column: 15
        },
        end: {
          line: 152,
          column: 9
        }
      },
      "42": {
        start: {
          line: 145,
          column: 10
        },
        end: {
          line: 145,
          column: 22
        }
      },
      "43": {
        start: {
          line: 146,
          column: 15
        },
        end: {
          line: 152,
          column: 9
        }
      },
      "44": {
        start: {
          line: 151,
          column: 10
        },
        end: {
          line: 151,
          column: 25
        }
      },
      "45": {
        start: {
          line: 153,
          column: 8
        },
        end: {
          line: 153,
          column: 20
        }
      },
      "46": {
        start: {
          line: 157,
          column: 8
        },
        end: {
          line: 162,
          column: 10
        }
      },
      "47": {
        start: {
          line: 159,
          column: 12
        },
        end: {
          line: 159,
          column: 29
        }
      },
      "48": {
        start: {
          line: 160,
          column: 12
        },
        end: {
          line: 160,
          column: 25
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 21,
            column: 14
          },
          end: {
            line: 21,
            column: 15
          }
        },
        loc: {
          start: {
            line: 21,
            column: 22
          },
          end: {
            line: 164,
            column: 5
          }
        },
        line: 21
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 23,
            column: 67
          },
          end: {
            line: 23,
            column: 68
          }
        },
        loc: {
          start: {
            line: 23,
            column: 79
          },
          end: {
            line: 25,
            column: 7
          }
        },
        line: 23
      },
      "2": {
        name: "mapPerfEvent",
        decl: {
          start: {
            line: 28,
            column: 15
          },
          end: {
            line: 28,
            column: 27
          }
        },
        loc: {
          start: {
            line: 28,
            column: 35
          },
          end: {
            line: 50,
            column: 7
          }
        },
        line: 28
      },
      "3": {
        name: "getCalculatedStats",
        decl: {
          start: {
            line: 52,
            column: 15
          },
          end: {
            line: 52,
            column: 33
          }
        },
        loc: {
          start: {
            line: 52,
            column: 71
          },
          end: {
            line: 123,
            column: 7
          }
        },
        line: 52
      },
      "4": {
        name: "(anonymous_4)",
        decl: {
          start: {
            line: 99,
            column: 59
          },
          end: {
            line: 99,
            column: 60
          }
        },
        loc: {
          start: {
            line: 99,
            column: 76
          },
          end: {
            line: 108,
            column: 11
          }
        },
        line: 99
      },
      "5": {
        name: "(anonymous_5)",
        decl: {
          start: {
            line: 111,
            column: 51
          },
          end: {
            line: 111,
            column: 52
          }
        },
        loc: {
          start: {
            line: 111,
            column: 67
          },
          end: {
            line: 118,
            column: 13
          }
        },
        line: 111
      },
      "6": {
        name: "isEmpty",
        decl: {
          start: {
            line: 125,
            column: 15
          },
          end: {
            line: 125,
            column: 22
          }
        },
        loc: {
          start: {
            line: 125,
            column: 29
          },
          end: {
            line: 137,
            column: 7
          }
        },
        line: 125
      },
      "7": {
        name: "extractResourceType",
        decl: {
          start: {
            line: 139,
            column: 15
          },
          end: {
            line: 139,
            column: 34
          }
        },
        loc: {
          start: {
            line: 139,
            column: 41
          },
          end: {
            line: 154,
            column: 7
          }
        },
        line: 139
      },
      "8": {
        name: "mean",
        decl: {
          start: {
            line: 156,
            column: 15
          },
          end: {
            line: 156,
            column: 19
          }
        },
        loc: {
          start: {
            line: 156,
            column: 27
          },
          end: {
            line: 163,
            column: 7
          }
        },
        line: 156
      },
      "9": {
        name: "(anonymous_9)",
        decl: {
          start: {
            line: 158,
            column: 23
          },
          end: {
            line: 158,
            column: 24
          }
        },
        loc: {
          start: {
            line: 158,
            column: 43
          },
          end: {
            line: 161,
            column: 11
          }
        },
        line: 158
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
            line: 165,
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
            line: 165,
            column: 4
          }
        }],
        line: 18
      },
      "1": {
        loc: {
          start: {
            line: 31,
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
            line: 31,
            column: 8
          },
          end: {
            line: 36,
            column: 9
          }
        }, {
          start: {
            line: 31,
            column: 8
          },
          end: {
            line: 36,
            column: 9
          }
        }],
        line: 31
      },
      "2": {
        loc: {
          start: {
            line: 32,
            column: 10
          },
          end: {
            line: 34,
            column: 11
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 32,
            column: 10
          },
          end: {
            line: 34,
            column: 11
          }
        }, {
          start: {
            line: 32,
            column: 10
          },
          end: {
            line: 34,
            column: 11
          }
        }],
        line: 32
      },
      "3": {
        loc: {
          start: {
            line: 54,
            column: 8
          },
          end: {
            line: 93,
            column: 9
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 54,
            column: 8
          },
          end: {
            line: 93,
            column: 9
          }
        }, {
          start: {
            line: 54,
            column: 8
          },
          end: {
            line: 93,
            column: 9
          }
        }],
        line: 54
      },
      "4": {
        loc: {
          start: {
            line: 86,
            column: 10
          },
          end: {
            line: 92,
            column: 11
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 86,
            column: 10
          },
          end: {
            line: 92,
            column: 11
          }
        }, {
          start: {
            line: 86,
            column: 10
          },
          end: {
            line: 92,
            column: 11
          }
        }],
        line: 86
      },
      "5": {
        loc: {
          start: {
            line: 95,
            column: 8
          },
          end: {
            line: 120,
            column: 9
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 95,
            column: 8
          },
          end: {
            line: 120,
            column: 9
          }
        }, {
          start: {
            line: 95,
            column: 8
          },
          end: {
            line: 120,
            column: 9
          }
        }],
        line: 95
      },
      "6": {
        loc: {
          start: {
            line: 101,
            column: 12
          },
          end: {
            line: 106,
            column: 13
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 101,
            column: 12
          },
          end: {
            line: 106,
            column: 13
          }
        }, {
          start: {
            line: 101,
            column: 12
          },
          end: {
            line: 106,
            column: 13
          }
        }],
        line: 101
      },
      "7": {
        loc: {
          start: {
            line: 102,
            column: 14
          },
          end: {
            line: 104,
            column: 15
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 102,
            column: 14
          },
          end: {
            line: 104,
            column: 15
          }
        }, {
          start: {
            line: 102,
            column: 14
          },
          end: {
            line: 104,
            column: 15
          }
        }],
        line: 102
      },
      "8": {
        loc: {
          start: {
            line: 110,
            column: 10
          },
          end: {
            line: 119,
            column: 11
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 110,
            column: 10
          },
          end: {
            line: 119,
            column: 11
          }
        }, {
          start: {
            line: 110,
            column: 10
          },
          end: {
            line: 119,
            column: 11
          }
        }],
        line: 110
      },
      "9": {
        loc: {
          start: {
            line: 127,
            column: 8
          },
          end: {
            line: 129,
            column: 9
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 127,
            column: 8
          },
          end: {
            line: 129,
            column: 9
          }
        }, {
          start: {
            line: 127,
            column: 8
          },
          end: {
            line: 129,
            column: 9
          }
        }],
        line: 127
      },
      "10": {
        loc: {
          start: {
            line: 127,
            column: 12
          },
          end: {
            line: 127,
            column: 47
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 127,
            column: 12
          },
          end: {
            line: 127,
            column: 25
          }
        }, {
          start: {
            line: 127,
            column: 29
          },
          end: {
            line: 127,
            column: 47
          }
        }],
        line: 127
      },
      "11": {
        loc: {
          start: {
            line: 130,
            column: 8
          },
          end: {
            line: 132,
            column: 9
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 130,
            column: 8
          },
          end: {
            line: 132,
            column: 9
          }
        }, {
          start: {
            line: 130,
            column: 8
          },
          end: {
            line: 132,
            column: 9
          }
        }],
        line: 130
      },
      "12": {
        loc: {
          start: {
            line: 130,
            column: 12
          },
          end: {
            line: 130,
            column: 70
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 130,
            column: 12
          },
          end: {
            line: 130,
            column: 36
          }
        }, {
          start: {
            line: 130,
            column: 40
          },
          end: {
            line: 130,
            column: 70
          }
        }],
        line: 130
      },
      "13": {
        loc: {
          start: {
            line: 133,
            column: 8
          },
          end: {
            line: 135,
            column: 9
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 133,
            column: 8
          },
          end: {
            line: 135,
            column: 9
          }
        }, {
          start: {
            line: 133,
            column: 8
          },
          end: {
            line: 135,
            column: 9
          }
        }],
        line: 133
      },
      "14": {
        loc: {
          start: {
            line: 133,
            column: 12
          },
          end: {
            line: 133,
            column: 52
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 133,
            column: 12
          },
          end: {
            line: 133,
            column: 31
          }
        }, {
          start: {
            line: 133,
            column: 35
          },
          end: {
            line: 133,
            column: 52
          }
        }],
        line: 133
      },
      "15": {
        loc: {
          start: {
            line: 142,
            column: 8
          },
          end: {
            line: 152,
            column: 9
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 142,
            column: 8
          },
          end: {
            line: 152,
            column: 9
          }
        }, {
          start: {
            line: 142,
            column: 8
          },
          end: {
            line: 152,
            column: 9
          }
        }],
        line: 142
      },
      "16": {
        loc: {
          start: {
            line: 144,
            column: 15
          },
          end: {
            line: 152,
            column: 9
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 144,
            column: 15
          },
          end: {
            line: 152,
            column: 9
          }
        }, {
          start: {
            line: 144,
            column: 15
          },
          end: {
            line: 152,
            column: 9
          }
        }],
        line: 144
      },
      "17": {
        loc: {
          start: {
            line: 146,
            column: 15
          },
          end: {
            line: 152,
            column: 9
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 146,
            column: 15
          },
          end: {
            line: 152,
            column: 9
          }
        }, {
          start: {
            line: 146,
            column: 15
          },
          end: {
            line: 152,
            column: 9
          }
        }],
        line: 146
      },
      "18": {
        loc: {
          start: {
            line: 147,
            column: 10
          },
          end: {
            line: 149,
            column: 35
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 147,
            column: 10
          },
          end: {
            line: 147,
            column: 35
          }
        }, {
          start: {
            line: 148,
            column: 10
          },
          end: {
            line: 148,
            column: 35
          }
        }, {
          start: {
            line: 149,
            column: 10
          },
          end: {
            line: 149,
            column: 35
          }
        }],
        line: 147
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
      "48": 0
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
      "12": [0, 0],
      "13": [0, 0],
      "14": [0, 0],
      "15": [0, 0],
      "16": [0, 0],
      "17": [0, 0],
      "18": [0, 0, 0]
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

/* eslint-env node */
const plugin = ( // $FlowFixMe
cov_1z7udccrlf.s[0]++, (cov_1z7udccrlf.b[0][0]++, true) && (cov_1z7udccrlf.b[0][1]++, App.createPlugin({
  deps: {
    emitter: fusionPluginUniversalEvents.UniversalEventsToken
  },
  provides: deps => {
    cov_1z7udccrlf.f[0]++;
    const emitter = (cov_1z7udccrlf.s[1]++, deps.emitter);
    cov_1z7udccrlf.s[2]++;
    emitter.on('browser-performance-emitter:stats:browser-only', (e, ctx) => {
      cov_1z7udccrlf.f[1]++;
      cov_1z7udccrlf.s[3]++;
      emitter.emit('browser-performance-emitter:stats', mapPerfEvent(e), ctx);
    });
    /* Helper Functions */

    function mapPerfEvent(event) {
      cov_1z7udccrlf.f[2]++;
      const {
        timing,
        resourceEntries,
        paintTimes,
        enhancedMetrics
      } = (cov_1z7udccrlf.s[4]++, event);
      cov_1z7udccrlf.s[5]++;

      if (enhancedMetrics) {
        cov_1z7udccrlf.b[1][0]++;
        cov_1z7udccrlf.s[6]++;

        if (!enhancedMetrics.app) {
          cov_1z7udccrlf.b[2][0]++;
          cov_1z7udccrlf.s[7]++;
          enhancedMetrics.app = {};
        } else {
          cov_1z7udccrlf.b[2][1]++;
        }

        cov_1z7udccrlf.s[8]++;
        enhancedMetrics.app.perfLoggerVersion = require('../package.json').version;
      } else {
        cov_1z7udccrlf.b[1][1]++;
      }

      const calculatedStats = (cov_1z7udccrlf.s[9]++, getCalculatedStats(timing, resourceEntries, paintTimes));
      cov_1z7udccrlf.s[10]++;
      return _objectSpread({}, event, {
        calculatedStats,
        timingValues: timing,
        enhancedMetrics
      });
    }

    function getCalculatedStats(timing, resourceEntries, paintTimes) {
      cov_1z7udccrlf.f[3]++;
      let calculated = (cov_1z7udccrlf.s[11]++, {});
      cov_1z7udccrlf.s[12]++;

      if (!isEmpty(timing)) {
        cov_1z7udccrlf.b[3][0]++;
        cov_1z7udccrlf.s[13]++;
        calculated = {
          // time spent following redirects
          redirection_time: timing.fetchStart - timing.navigationStart,
          // time from the initial navigation to getting a response from the server
          time_to_first_byte: timing.responseStart - timing.navigationStart,
          // time from the initial request to having all blocking assets loaded
          dom_content_loaded: timing.domContentLoadedEventEnd - timing.fetchStart,
          // time from initial request to having all assets (blocking and nonblocking) loaded
          full_page_load: timing.loadEventEnd - timing.fetchStart,
          // dns lookup time
          dns: timing.domainLookupEnd - timing.domainLookupStart,
          // time to open tcp connection
          tcp_connection_time: timing.connectEnd - timing.connectStart,
          // time for browser to get back full html response from server
          browser_request_time: timing.responseEnd - timing.requestStart,
          // time for browser to receive initial response from server
          browser_request_first_byte: timing.responseStart - timing.requestStart,
          // time from receiving first byte to receiving full response
          browser_request_response_time: timing.responseEnd - timing.responseStart,
          // time to parse the html response into a DOM tree + load blocking resources
          dom_interactive_time: timing.domInteractive - timing.responseEnd,
          // time from having fully parsed html to having all assets loaded
          total_resource_load_time: timing.loadEventStart - timing.responseEnd,
          // time from having fully parsed html to having all blocking assets loaded
          total_blocking_resource_load_time: timing.domContentLoadedEventStart - timing.responseEnd
        };
        cov_1z7udccrlf.s[14]++;

        if (paintTimes) {
          cov_1z7udccrlf.b[4][0]++;
          cov_1z7udccrlf.s[15]++;
          // $FlowFixMe
          calculated.first_paint_time = paintTimes.firstPaint; // $FlowFixMe

          cov_1z7udccrlf.s[16]++;
          calculated.first_contentful_paint_time = paintTimes.firstContentfulPaint;
        } else {
          cov_1z7udccrlf.b[4][1]++;
        }
      } else {
        cov_1z7udccrlf.b[3][1]++;
      }

      cov_1z7udccrlf.s[17]++;

      if (!isEmpty(resourceEntries)) {
        cov_1z7udccrlf.b[5][0]++;
        cov_1z7udccrlf.s[18]++;
        // $FlowFixMe
        calculated.resources_avg_load_time = {}; // all of the values are on the prototype so we need to extract them

        const resourceLoadTimes = (cov_1z7udccrlf.s[19]++, resourceEntries.reduce((memo, entry) => {
          cov_1z7udccrlf.f[4]++;
          const type = (cov_1z7udccrlf.s[20]++, extractResourceType(entry.name));
          cov_1z7udccrlf.s[21]++;

          if (type) {
            cov_1z7udccrlf.b[6][0]++;
            cov_1z7udccrlf.s[22]++;

            if (!memo[type]) {
              cov_1z7udccrlf.b[7][0]++;
              cov_1z7udccrlf.s[23]++;
              memo[type] = [];
            } else {
              cov_1z7udccrlf.b[7][1]++;
            }

            cov_1z7udccrlf.s[24]++;
            memo[type].push(entry.duration);
          } else {
            cov_1z7udccrlf.b[6][1]++;
          }

          cov_1z7udccrlf.s[25]++;
          return memo;
        }, {}));
        cov_1z7udccrlf.s[26]++;

        if (!isEmpty(resourceLoadTimes)) {
          cov_1z7udccrlf.b[8][0]++;
          cov_1z7udccrlf.s[27]++;
          Object.keys(resourceLoadTimes).forEach(resourceType => {
            cov_1z7udccrlf.f[5]++;
            const avgTime = (cov_1z7udccrlf.s[28]++, parseInt(mean(resourceLoadTimes[resourceType]), 10)); // $FlowFixMe

            cov_1z7udccrlf.s[29]++;
            calculated.resources_avg_load_time[resourceType] = avgTime;
          });
        } else {
          cov_1z7udccrlf.b[8][1]++;
        }
      } else {
        cov_1z7udccrlf.b[5][1]++;
      }

      cov_1z7udccrlf.s[30]++;
      return calculated;
    }

    function isEmpty(item) {
      cov_1z7udccrlf.f[6]++;
      cov_1z7udccrlf.s[31]++;

      // eslint-disable-next-line no-undefined
      if ((cov_1z7udccrlf.b[10][0]++, item === null) || (cov_1z7udccrlf.b[10][1]++, item === undefined)) {
        cov_1z7udccrlf.b[9][0]++;
        cov_1z7udccrlf.s[32]++;
        return true;
      } else {
        cov_1z7udccrlf.b[9][1]++;
      }

      cov_1z7udccrlf.s[33]++;

      if ((cov_1z7udccrlf.b[12][0]++, typeof item === 'object') && (cov_1z7udccrlf.b[12][1]++, Object.keys(item).length === 0)) {
        cov_1z7udccrlf.b[11][0]++;
        cov_1z7udccrlf.s[34]++;
        return true;
      } else {
        cov_1z7udccrlf.b[11][1]++;
      }

      cov_1z7udccrlf.s[35]++;

      if ((cov_1z7udccrlf.b[14][0]++, Array.isArray(item)) && (cov_1z7udccrlf.b[14][1]++, item.length === 0)) {
        cov_1z7udccrlf.b[13][0]++;
        cov_1z7udccrlf.s[36]++;
        return true;
      } else {
        cov_1z7udccrlf.b[13][1]++;
      }

      cov_1z7udccrlf.s[37]++;
      return false;
    }

    function extractResourceType(name) {
      cov_1z7udccrlf.f[7]++;
      const type = (cov_1z7udccrlf.s[38]++, name.substring(name.lastIndexOf('.') + 1));
      cov_1z7udccrlf.s[39]++;

      if (type.indexOf('css') === 0) {
        cov_1z7udccrlf.b[15][0]++;
        cov_1z7udccrlf.s[40]++;
        return 'css';
      } else {
        cov_1z7udccrlf.b[15][1]++;
        cov_1z7udccrlf.s[41]++;

        if (type.indexOf('js') === 0) {
          cov_1z7udccrlf.b[16][0]++;
          cov_1z7udccrlf.s[42]++;
          return 'js';
        } else {
          cov_1z7udccrlf.b[16][1]++;
          cov_1z7udccrlf.s[43]++;

          if ((cov_1z7udccrlf.b[18][0]++, type.indexOf('png') === 0) || (cov_1z7udccrlf.b[18][1]++, type.indexOf('svg') === 0) || (cov_1z7udccrlf.b[18][2]++, type.indexOf('jpg') === 0)) {
            cov_1z7udccrlf.b[17][0]++;
            cov_1z7udccrlf.s[44]++;
            return 'image';
          } else {
            cov_1z7udccrlf.b[17][1]++;
          }
        }
      }

      cov_1z7udccrlf.s[45]++;
      return null;
    }

    function mean(array) {
      cov_1z7udccrlf.f[8]++;
      cov_1z7udccrlf.s[46]++;
      return array.reduce((total, element) => {
        cov_1z7udccrlf.f[9]++;
        cov_1z7udccrlf.s[47]++;
        total += element;
        cov_1z7udccrlf.s[48]++;
        return total;
      }, 0) / array.length;
    }
  }
})));

/** Copyright (c) 2018 Uber Technologies, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

/* eslint-env node */
/* Mock Results */

const mockTiming = {
  connectEnd: 1467935411926,
  connectStart: 1467935411926,
  domComplete: 1467935412992,
  domContentLoadedEventEnd: 1467935412858,
  domContentLoadedEventStart: 1467935412729,
  domInteractive: 1467935412729,
  domLoading: 1467935412016,
  domainLookupEnd: 1467935411926,
  domainLookupStart: 1467935411926,
  fetchStart: 1467935411926,
  loadEventEnd: 1467935412992,
  loadEventStart: 1467935412992,
  navigationStart: 1467935411926,
  redirectEnd: 0,
  redirectStart: 0,
  requestStart: 1467935411933,
  responseEnd: 1467935412008,
  responseStart: 1467935412007,
  secureConnectionStart: 0,
  unloadEventEnd: 1467935412009,
  unloadEventStart: 1467935412009
};
const mockResourceEntries = [{
  initiatorType: 'link',
  name: 'http://localhost:5663/trips-viewer/stylesheets/main.css',
  entryType: 'resource',
  startTime: 132.92000000000002,
  duration: 4.435000000000002
}, {
  initiatorType: 'link',
  name: 'https://d1a3f4spazzrp4.cloudfront.net/uber-icons/3.13.0/uber-icons.css',
  entryType: 'resource',
  startTime: 132.995,
  duration: 77.06
}, {
  initiatorType: 'link',
  name: 'https://d1a3f4spazzrp4.cloudfront.net/uber-fonts/4.0.0/superfine.css',
  entryType: 'resource',
  startTime: 133.06500000000003,
  duration: 83.655
}, {
  initiatorType: 'script',
  name: 'http://localhost:5663/trips-viewer/javascripts/main.js',
  entryType: 'resource',
  startTime: 133.355,
  duration: 16.785000000000025
}, {
  initiatorType: 'link',
  duration: 155.39500000000007,
  entryType: 'resource',
  name: 'https://image.et.uber.com/lib/fe8c12737c64037b71/m/1/us_144x144_teal_community.png',
  startTime: 150.095
}, {
  initiatorType: 'link',
  name: 'http://localhost:5663/trips-viewer/stylesheets/main.css?someVersion=foo',
  entryType: 'resource',
  startTime: 132.92000000000002,
  duration: 4.435000000000002
}, {
  initiatorType: 'script',
  duration: 4.545000000000073,
  entryType: 'resource',
  name: 'https://www.google-analytics.com/collect?v=1&_v=j41&a=2108927418&t=pageview&_s=1&dl=https%3A%2F%2Fweb-platform.uberinternal.com%2Ftrips-viewer%2Fuser&dr=https%3A%2F%2Fapp.onelogin.com%2Ftrust%2Fsaml2%2Fhttp-post%2Fsso%2F358421%3FSAMLRequest%3DnVPBjpswEP0V5DsQSLLLWiESzapqpG2LEtprNbGHXUvGpvbQpH9fQ5Iqh24OPdnMPN578xhWHjrd82qgN7PDnwN6ik6dNp5PjZINznALXnluoEPPSfB99fmF58mM986SFVazqL7cPigjlXm9%252F9rhDPL8U9PUcf1137DoOzqvrClZALBo6%252F2AW%252BMJDIXSLHuIZ4s4nzXZI5%252FnfDlCnkuWLQtY5nMBD2KxKB4zODy1oijmT60Mh0QWVd6jo0C8scYPHbo9ul9K4LfdS8neiHrP0%252FSIh7jXQK11XTIc0ClD6AzoRNgutUpCSCcd8%252FghzjRsvRof%252BeTT3QR2f3C4umHrqzb0fWINavuqzCQ3sqQdEkggSOfLYpFnq%252FRG7Szd8y%252BBfvtcW63E76jS2h43DoGwZOSGMPrHMA3Q%252B4ayJJsqSsbtBOXYgdKVlA69Z%252BlV57IVKKcdCTkSnija2K4Hp%252Fz4yfAEgq6R3KI2Oky8w%252FZ%252FAroLE1yM1KFch%252BNonRwXEEVw2TgwvreOLqH9y8%252F63Htntr%252Fd259i%252FQc%253D%26RelayState%3D%252Ftrips-viewer%252F&dp=trips-viewer&ul=en-us&de=UTF-8&dt=User%20Info&sd=24-bit&sr=2560x1440&vp=1180x818&je=0&fl=21.0%20r0&_u=AACAAEABI~&jid=&cid=1657993685.1456163541&tid=UA-7157694-45&z=2009568991',
  startTime: 1700.3400000000001
}];
const mockEvent = {
  timing: mockTiming,
  resourceEntries: mockResourceEntries,
  firstPaint: null,
  tags: null
};
/* Fixture */

function createTestFixture() {
  const app = new App__default('content', el => el);
  app.register(plugin);
  return app;
}
/* Tests */


test('Correct metrics are emitted', t => {
  const mockEmitter = new MockEmitter();
  const mockEmitterPlugin = App.createPlugin({
    provides: () => mockEmitter
  });
  const app = createTestFixture();
  app.register(fusionPluginUniversalEvents.UniversalEventsToken, mockEmitterPlugin); // Process emits

  t.plan(14);

  const handlePerfEvent = function (event) {
    const calculatedStats = event.calculatedStats;
    t.notEqual(calculatedStats, undefined, 'calculatedStates are defined');
    const redirectionTimeArgs = calculatedStats.redirection_time;
    const timeToFirstByteArgs = calculatedStats.time_to_first_byte;
    const domContentLoadedArgs = calculatedStats.dom_content_loaded;
    const fullPageLoadArgs = calculatedStats.full_page_load;
    const dnsArgs = calculatedStats.dns;
    const tcpConnectionTimeArgs = calculatedStats.tcp_connection_time;
    const browserRequestTimeArgs = calculatedStats.browser_request_time;
    const browserRequestFirstByteArgs = calculatedStats.browser_request_first_byte;
    const browserRequestResponseTimeArgs = calculatedStats.browser_request_response_time;
    const domInteractiveTimeArgs = calculatedStats.dom_interactive_time;
    const totalResourceLoadTimeArgs = calculatedStats.total_resource_load_time;
    const totalBlockingResourceLoadTimeArgs = calculatedStats.total_blocking_resource_load_time;
    const resourcesAvgLoadTime = calculatedStats.resources_avg_load_time;
    t.equal(redirectionTimeArgs, 0, 'redirection_time');
    t.equal(timeToFirstByteArgs, 81, 'time_to_first_byte');
    t.equal(domContentLoadedArgs, 932, 'dom_content_loaded');
    t.equal(fullPageLoadArgs, 1066, 'full_page_load');
    t.equal(dnsArgs, 0, 'dns');
    t.equal(tcpConnectionTimeArgs, 0, 'logs the tcp_connection_time');
    t.equal(browserRequestTimeArgs, 75, 'logs the browser_request_time');
    t.equal(browserRequestFirstByteArgs, 74, 'logs the browser_request_first_byte');
    t.equal(browserRequestResponseTimeArgs, 1, 'logs the browser_request_response_time');
    t.equal(domInteractiveTimeArgs, 721, 'logs the dom_interactive_time');
    t.equal(totalResourceLoadTimeArgs, 984, 'logs the total_resource_load_time');
    t.equal(totalBlockingResourceLoadTimeArgs, 721, 'logs the total_blocking_resource_load_time');
    t.deepLooseEqual(resourcesAvgLoadTime, {
      css: 42,
      image: 155,
      js: 16
    }, 'logs the total_blocking_resource_load_time');
  };
  /* Simulator */


  fusionTestUtils.getSimulator(app, App.createPlugin({
    provides: () => {
      mockEmitter.on('browser-performance-emitter:stats', handlePerfEvent);
      mockEmitter.emit('browser-performance-emitter:stats:browser-only', mockEvent);
    }
  }));
  t.end();
});
test('Re-emitting events from browser to server correctly', t => {
  const mockEmitter = new MockEmitter();
  const mockEmitterPlugin = App.createPlugin({
    provides: () => mockEmitter
  });
  const app = createTestFixture();
  app.register(fusionPluginUniversalEvents.UniversalEventsToken, mockEmitterPlugin);
  const mockEvent = {
    foo: {
      bar: 99
    }
  };
  t.plan(1);
  /* Simulator */

  fusionTestUtils.getSimulator(app, App.createPlugin({
    provides: () => {
      mockEmitter.on('browser-performance-emitter:stats', e => {
        t.deepEqual(e.foo, mockEvent.foo, 'Browser event payload is inherited');
      });
      mockEmitter.emit('browser-performance-emitter:stats:browser-only', mockEvent);
    }
  }));
  t.end();
});
//# sourceMappingURL=node.js.map
