'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var fusionCore = require('fusion-core');
var test = _interopDefault(require('tape-cup'));

var cov_1qed6eawe3 = function () {
  var path = "/Users/lhorie/Documents/test-private-monorepo/public/fusion-tokens/src/index.js",
      hash = "c50f5629e216045fcc47edf206b92081aaa0f308",
      Function = function () {}.constructor,
      global = new Function('return this')(),
      gcv = "__coverage__",
      coverageData = {
    path: "/Users/lhorie/Documents/test-private-monorepo/public/fusion-tokens/src/index.js",
    statementMap: {
      "0": {
        start: {
          line: 11,
          column: 40
        },
        end: {
          line: 11,
          column: 65
        }
      },
      "1": {
        start: {
          line: 21,
          column: 44
        },
        end: {
          line: 21,
          column: 71
        }
      },
      "2": {
        start: {
          line: 29,
          column: 40
        },
        end: {
          line: 29,
          column: 65
        }
      },
      "3": {
        start: {
          line: 67,
          column: 42
        },
        end: {
          line: 67,
          column: 68
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

const FetchToken = (cov_1qed6eawe3.s[0]++, fusionCore.createToken('FetchToken'));
const SessionToken = (cov_1qed6eawe3.s[1]++, fusionCore.createToken('SessionToken'));
const CacheToken = (cov_1qed6eawe3.s[2]++, fusionCore.createToken('CacheToken'));
const LoggerToken = (cov_1qed6eawe3.s[3]++, fusionCore.createToken('LoggerToken'));

test('fusion-tokens exports', t => {
  t.ok(FetchToken, 'exports FetchToken');
  t.ok(SessionToken, 'exports SessionToken');
  t.ok(LoggerToken, 'exports LoggerToken');
  t.ok(CacheToken, 'exports CacheToken');
  t.end();
});
//# sourceMappingURL=node.js.map
