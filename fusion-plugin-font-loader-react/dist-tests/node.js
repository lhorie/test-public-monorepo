'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var tape = _interopDefault(require('tape-cup'));
var React = require('react');
var React__default = _interopDefault(React);
var PropTypes = _interopDefault(require('prop-types'));
var App = require('fusion-core');
var App__default = _interopDefault(App);
var fusionTestUtils = require('fusion-test-utils');

/** Copyright (c) 2018 Uber Technologies, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */
const preloadDepth = 1;
const fonts = {
  'Lato-Regular': {
    urls: {
      woff: 'Lato-Regular.woff',
      woff2: 'Lato-Regular.woff2'
    },
    fallback: {
      name: 'Helvetica'
    }
  },
  'Lato-Bold': {
    urls: {
      woff: 'Lato-Bold.woff',
      woff2: 'Lato-Bold.woff2'
    },
    fallback: {
      name: 'Lato-Regular',
      styles: {
        'font-weight': 'bold'
      }
    }
  },
  'Lato-Thin': {
    urls: {
      woff: 'Lato-Thin.woff',
      woff2: 'Lato-Thin.woff2'
    },
    fallback: {
      name: 'Lato-Regular',
      styles: {
        'font-weight': '100'
      }
    }
  }
};

/** Copyright (c) 2018 Uber Technologies, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */
const fallbackLookup = {
  depth0: {},
  depth1: {
    'Lato-Bold': {
      name: 'Lato-Regular',
      styles: {
        'font-weight': 'bold'
      }
    },
    'Lato-Thin': {
      name: 'Lato-Regular',
      styles: {
        'font-weight': '100'
      }
    }
  },
  depth2: {
    'Lato-Regular': {
      name: 'Helvetica'
    },
    'Lato-Bold': {
      name: 'Helvetica'
    },
    'Lato-Thin': {
      name: 'Helvetica'
    }
  }
};
const fontFaces = '\n@font-face {font-family: "Lato-Regular"; font-display: \'fallback\'; src: url("Lato-Regular.woff") format("woff")\n,url("Lato-Regular.woff2") format("woff2")\n;}\n@font-face {font-family: "Lato-Bold"; font-display: \'fallback\'; src: url("Lato-Bold.woff") format("woff")\n,url("Lato-Bold.woff2") format("woff2")\n;}\n@font-face {font-family: "Lato-Thin"; font-display: \'fallback\'; src: url("Lato-Thin.woff") format("woff")\n,url("Lato-Thin.woff2") format("woff2")\n;}';
const preloadLinks = '\n<link rel="preload" href="Lato-Regular.woff2" as="font" type="font/woff2" crossorigin>';

var cov_1a1gz4ht8p = function () {
  var path = "/Users/lhorie/Documents/test-private-monorepo/public/fusion-plugin-font-loader-react/src/generate-fallback-map.js",
      hash = "7f3f735916d2713bb96992dd44310ceaacc9576c",
      Function = function () {}.constructor,
      global = new Function('return this')(),
      gcv = "__coverage__",
      coverageData = {
    path: "/Users/lhorie/Documents/test-private-monorepo/public/fusion-plugin-font-loader-react/src/generate-fallback-map.js",
    statementMap: {
      "0": {
        start: {
          line: 11,
          column: 34
        },
        end: {
          line: 11,
          column: 36
        }
      },
      "1": {
        start: {
          line: 13,
          column: 31
        },
        end: {
          line: 13,
          column: 33
        }
      },
      "2": {
        start: {
          line: 15,
          column: 25
        },
        end: {
          line: 15,
          column: 27
        }
      },
      "3": {
        start: {
          line: 19,
          column: 2
        },
        end: {
          line: 33,
          column: 5
        }
      },
      "4": {
        start: {
          line: 20,
          column: 16
        },
        end: {
          line: 20,
          column: 17
        }
      },
      "5": {
        start: {
          line: 21,
          column: 23
        },
        end: {
          line: 21,
          column: 39
        }
      },
      "6": {
        start: {
          line: 22,
          column: 4
        },
        end: {
          line: 22,
          column: 55
        }
      },
      "7": {
        start: {
          line: 23,
          column: 4
        },
        end: {
          line: 31,
          column: 5
        }
      },
      "8": {
        start: {
          line: 24,
          column: 23
        },
        end: {
          line: 24,
          column: 63
        }
      },
      "9": {
        start: {
          line: 25,
          column: 6
        },
        end: {
          line: 25,
          column: 51
        }
      },
      "10": {
        start: {
          line: 26,
          column: 6
        },
        end: {
          line: 29,
          column: 7
        }
      },
      "11": {
        start: {
          line: 28,
          column: 8
        },
        end: {
          line: 28,
          column: 15
        }
      },
      "12": {
        start: {
          line: 30,
          column: 6
        },
        end: {
          line: 30,
          column: 59
        }
      },
      "13": {
        start: {
          line: 32,
          column: 4
        },
        end: {
          line: 32,
          column: 51
        }
      },
      "14": {
        start: {
          line: 35,
          column: 2
        },
        end: {
          line: 44,
          column: 5
        }
      },
      "15": {
        start: {
          line: 37,
          column: 4
        },
        end: {
          line: 43,
          column: 5
        }
      },
      "16": {
        start: {
          line: 39,
          column: 23
        },
        end: {
          line: 41,
          column: 7
        }
      },
      "17": {
        start: {
          line: 40,
          column: 20
        },
        end: {
          line: 40,
          column: 55
        }
      },
      "18": {
        start: {
          line: 42,
          column: 6
        },
        end: {
          line: 42,
          column: 42
        }
      },
      "19": {
        start: {
          line: 46,
          column: 2
        },
        end: {
          line: 46,
          column: 24
        }
      }
    },
    fnMap: {
      "0": {
        name: "generateFallbackMap",
        decl: {
          start: {
            line: 9,
            column: 24
          },
          end: {
            line: 9,
            column: 43
          }
        },
        loc: {
          start: {
            line: 9,
            column: 77
          },
          end: {
            line: 47,
            column: 1
          }
        },
        line: 9
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 19,
            column: 29
          },
          end: {
            line: 19,
            column: 30
          }
        },
        loc: {
          start: {
            line: 19,
            column: 41
          },
          end: {
            line: 33,
            column: 3
          }
        },
        line: 19
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 35,
            column: 29
          },
          end: {
            line: 35,
            column: 30
          }
        },
        loc: {
          start: {
            line: 35,
            column: 41
          },
          end: {
            line: 44,
            column: 3
          }
        },
        line: 35
      },
      "3": {
        name: "(anonymous_3)",
        decl: {
          start: {
            line: 40,
            column: 8
          },
          end: {
            line: 40,
            column: 9
          }
        },
        loc: {
          start: {
            line: 40,
            column: 20
          },
          end: {
            line: 40,
            column: 55
          }
        },
        line: 40
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 24,
            column: 29
          },
          end: {
            line: 24,
            column: 62
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 24,
            column: 29
          },
          end: {
            line: 24,
            column: 41
          }
        }, {
          start: {
            line: 24,
            column: 45
          },
          end: {
            line: 24,
            column: 62
          }
        }],
        line: 24
      },
      "1": {
        loc: {
          start: {
            line: 25,
            column: 21
          },
          end: {
            line: 25,
            column: 50
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 25,
            column: 21
          },
          end: {
            line: 25,
            column: 29
          }
        }, {
          start: {
            line: 25,
            column: 33
          },
          end: {
            line: 25,
            column: 50
          }
        }],
        line: 25
      },
      "2": {
        loc: {
          start: {
            line: 26,
            column: 6
          },
          end: {
            line: 29,
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
            line: 29,
            column: 7
          }
        }, {
          start: {
            line: 26,
            column: 6
          },
          end: {
            line: 29,
            column: 7
          }
        }],
        line: 26
      },
      "3": {
        loc: {
          start: {
            line: 37,
            column: 4
          },
          end: {
            line: 43,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 37,
            column: 4
          },
          end: {
            line: 43,
            column: 5
          }
        }, {
          start: {
            line: 37,
            column: 4
          },
          end: {
            line: 43,
            column: 5
          }
        }],
        line: 37
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
function generateFallbackMap(fonts, preloadDepth) {
  cov_1a1gz4ht8p.f[0]++;
  // map of font name to array of possible fallbacks (name and style offsets) (closest match first)
  const fallbackCandidateLookup = (cov_1a1gz4ht8p.s[0]++, {}); // keys are fonts that depth strategy suggests we should preload, values are always true

  const preloadableFallbacks = (cov_1a1gz4ht8p.s[1]++, {}); // keys are font names, values are objects with properties for fallback name and style offsets

  const fallbackLookup = (cov_1a1gz4ht8p.s[2]++, {}); // FIRST TRAVERSAL: gather set of possible fallbacks per font and
  // the list of all fonts our depth strategy suggests we should preload

  cov_1a1gz4ht8p.s[3]++;
  Object.keys(fonts).forEach(fontName => {
    cov_1a1gz4ht8p.f[1]++;
    let depth = (cov_1a1gz4ht8p.s[4]++, 0);
    let nextFallback = (cov_1a1gz4ht8p.s[5]++, {
      name: fontName
    });
    cov_1a1gz4ht8p.s[6]++;
    fallbackCandidateLookup[fontName] = [nextFallback];
    cov_1a1gz4ht8p.s[7]++;

    while (preloadDepth > depth++) {
      const nextFont = (cov_1a1gz4ht8p.s[8]++, fonts[(cov_1a1gz4ht8p.b[0][0]++, nextFallback) && (cov_1a1gz4ht8p.b[0][1]++, nextFallback.name)]);
      cov_1a1gz4ht8p.s[9]++;
      nextFallback = (cov_1a1gz4ht8p.b[1][0]++, nextFont) && (cov_1a1gz4ht8p.b[1][1]++, nextFont.fallback);
      cov_1a1gz4ht8p.s[10]++;

      if (!nextFallback) {
        cov_1a1gz4ht8p.b[2][0]++;
        cov_1a1gz4ht8p.s[11]++;
        // possibly reached system font
        return;
      } else {
        cov_1a1gz4ht8p.b[2][1]++;
      }

      cov_1a1gz4ht8p.s[12]++;
      fallbackCandidateLookup[fontName].push(nextFallback);
    }

    cov_1a1gz4ht8p.s[13]++;
    preloadableFallbacks[nextFallback.name] = true;
  }); // SECOND TRAVERSAL: for each font select the closest fallback font that we planned to preloaded

  cov_1a1gz4ht8p.s[14]++;
  Object.keys(fonts).forEach(fontName => {
    cov_1a1gz4ht8p.f[2]++;
    cov_1a1gz4ht8p.s[15]++;

    // if font itself is preloadable then no fallback required
    if (!preloadableFallbacks[fontName]) {
      cov_1a1gz4ht8p.b[3][0]++;
      // otherwise use the first preloadable fallback
      const fallback = (cov_1a1gz4ht8p.s[16]++, fallbackCandidateLookup[fontName].find(fallback => {
        cov_1a1gz4ht8p.f[3]++;
        cov_1a1gz4ht8p.s[17]++;
        return preloadableFallbacks[fallback.name];
      }));
      cov_1a1gz4ht8p.s[18]++;
      fallbackLookup[fontName] = fallback;
    } else {
      cov_1a1gz4ht8p.b[3][1]++;
    }
  });
  cov_1a1gz4ht8p.s[19]++;
  return fallbackLookup;
}

var cov_ey8aba8fi = function () {
  var path = "/Users/lhorie/Documents/test-private-monorepo/public/fusion-plugin-font-loader-react/src/generate-font-faces.js",
      hash = "df63ffdeedc80c61a90d3df994f35ab29345bab3",
      Function = function () {}.constructor,
      global = new Function('return this')(),
      gcv = "__coverage__",
      coverageData = {
    path: "/Users/lhorie/Documents/test-private-monorepo/public/fusion-plugin-font-loader-react/src/generate-font-faces.js",
    statementMap: {
      "0": {
        start: {
          line: 10,
          column: 16
        },
        end: {
          line: 10,
          column: 18
        }
      },
      "1": {
        start: {
          line: 11,
          column: 2
        },
        end: {
          line: 20,
          column: 5
        }
      },
      "2": {
        start: {
          line: 12,
          column: 17
        },
        end: {
          line: 12,
          column: 41
        }
      },
      "3": {
        start: {
          line: 13,
          column: 4
        },
        end: {
          line: 19,
          column: 5
        }
      },
      "4": {
        start: {
          line: 14,
          column: 6
        },
        end: {
          line: 18,
          column: 8
        }
      },
      "5": {
        start: {
          line: 21,
          column: 2
        },
        end: {
          line: 21,
          column: 33
        }
      },
      "6": {
        start: {
          line: 26,
          column: 2
        },
        end: {
          line: 28,
          column: 4
        }
      },
      "7": {
        start: {
          line: 27,
          column: 12
        },
        end: {
          line: 27,
          column: 54
        }
      }
    },
    fnMap: {
      "0": {
        name: "generateFontFaces",
        decl: {
          start: {
            line: 9,
            column: 24
          },
          end: {
            line: 9,
            column: 41
          }
        },
        loc: {
          start: {
            line: 9,
            column: 62
          },
          end: {
            line: 22,
            column: 1
          }
        },
        line: 9
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 11,
            column: 38
          },
          end: {
            line: 11,
            column: 39
          }
        },
        loc: {
          start: {
            line: 11,
            column: 50
          },
          end: {
            line: 20,
            column: 3
          }
        },
        line: 11
      },
      "2": {
        name: "asFontFaceSrc",
        decl: {
          start: {
            line: 24,
            column: 9
          },
          end: {
            line: 24,
            column: 22
          }
        },
        loc: {
          start: {
            line: 24,
            column: 29
          },
          end: {
            line: 29,
            column: 1
          }
        },
        line: 24
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
            column: 12
          },
          end: {
            line: 27,
            column: 54
          }
        },
        line: 27
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 13,
            column: 4
          },
          end: {
            line: 19,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 13,
            column: 4
          },
          end: {
            line: 19,
            column: 5
          }
        }, {
          start: {
            line: 13,
            column: 4
          },
          end: {
            line: 19,
            column: 5
          }
        }],
        line: 13
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
      "3": 0
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
function generateFontFaces(fontDictionary) {
  cov_ey8aba8fi.f[0]++;
  const faces = (cov_ey8aba8fi.s[0]++, []);
  cov_ey8aba8fi.s[1]++;
  Object.keys(fontDictionary).forEach(fontName => {
    cov_ey8aba8fi.f[1]++;
    const font = (cov_ey8aba8fi.s[2]++, fontDictionary[fontName]);
    cov_ey8aba8fi.s[3]++;

    if (font) {
      cov_ey8aba8fi.b[0][0]++;
      cov_ey8aba8fi.s[4]++;
      faces.push(`@font-face {font-family: "${fontName}"; font-display: 'fallback'; src: ${String(asFontFaceSrc(font.urls))};}`);
    } else {
      cov_ey8aba8fi.b[0][1]++;
    }
  });
  cov_ey8aba8fi.s[5]++;
  return '\n' + faces.join('\n');
}

function asFontFaceSrc(urls) {
  cov_ey8aba8fi.f[2]++;
  cov_ey8aba8fi.s[6]++;
  // `urls` is a dictionary of font types (woff, woff2 etc) to url string
  return Object.keys(urls).map(type => {
    cov_ey8aba8fi.f[3]++;
    cov_ey8aba8fi.s[7]++;
    return `url("${urls[type]}") format("${type}")\n`;
  });
}

var cov_1z7fspx47i = function () {
  var path = "/Users/lhorie/Documents/test-private-monorepo/public/fusion-plugin-font-loader-react/src/generate-preload-links.js",
      hash = "56070360a14a0b1e89efe1ee545f478c517e74f5",
      Function = function () {}.constructor,
      global = new Function('return this')(),
      gcv = "__coverage__",
      coverageData = {
    path: "/Users/lhorie/Documents/test-private-monorepo/public/fusion-plugin-font-loader-react/src/generate-preload-links.js",
    statementMap: {
      "0": {
        start: {
          line: 13,
          column: 16
        },
        end: {
          line: 13,
          column: 18
        }
      },
      "1": {
        start: {
          line: 14,
          column: 2
        },
        end: {
          line: 27,
          column: 5
        }
      },
      "2": {
        start: {
          line: 15,
          column: 17
        },
        end: {
          line: 15,
          column: 41
        }
      },
      "3": {
        start: {
          line: 16,
          column: 4
        },
        end: {
          line: 26,
          column: 5
        }
      },
      "4": {
        start: {
          line: 21,
          column: 6
        },
        end: {
          line: 25,
          column: 8
        }
      },
      "5": {
        start: {
          line: 28,
          column: 2
        },
        end: {
          line: 28,
          column: 26
        }
      }
    },
    fnMap: {
      "0": {
        name: "generatePreloadLinks",
        decl: {
          start: {
            line: 9,
            column: 24
          },
          end: {
            line: 9,
            column: 44
          }
        },
        loc: {
          start: {
            line: 12,
            column: 2
          },
          end: {
            line: 29,
            column: 1
          }
        },
        line: 12
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 14,
            column: 33
          },
          end: {
            line: 14,
            column: 34
          }
        },
        loc: {
          start: {
            line: 14,
            column: 45
          },
          end: {
            line: 27,
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
            line: 16,
            column: 4
          },
          end: {
            line: 26,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 16,
            column: 4
          },
          end: {
            line: 26,
            column: 5
          }
        }, {
          start: {
            line: 16,
            column: 4
          },
          end: {
            line: 26,
            column: 5
          }
        }],
        line: 16
      }
    },
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
function generatePreloadLinks(fontNames, fontDictionary) {
  cov_1z7fspx47i.f[0]++;
  const links = (cov_1z7fspx47i.s[0]++, []);
  cov_1z7fspx47i.s[1]++;
  Object.keys(fontNames).forEach(fontName => {
    cov_1z7fspx47i.f[1]++;
    const font = (cov_1z7fspx47i.s[2]++, fontDictionary[fontName]);
    cov_1z7fspx47i.s[3]++;

    if (font) {
      cov_1z7fspx47i.b[0][0]++;
      cov_1z7fspx47i.s[4]++;
      // We can't detect woff2 support on the server, but rel=prelaod
      // is only supported by browsers that support woff2.
      // Others will fail silently and pick up the font a little later
      // via the style
      links.push(`\n<link rel="preload" href="${font.urls.woff2}" as="font" type="font/woff2" crossorigin>`);
    } else {
      cov_1z7fspx47i.b[0][1]++;
    }
  });
  cov_1z7fspx47i.s[5]++;
  return links.join('\n');
}

/** Copyright (c) 2018 Uber Technologies, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */
tape('generateFallbackMap', t => {
  t.equal(typeof generateFallbackMap, 'function', 'exports a generateFallbackMap function');
  t.deepEqual(generateFallbackMap(fonts, 0), fallbackLookup.depth0);
  t.deepEqual(generateFallbackMap(fonts, 1), fallbackLookup.depth1);
  t.deepEqual(generateFallbackMap(fonts, 2), fallbackLookup.depth2);
  t.end();
});
tape('generateFontFaces', t => {
  t.equal(typeof generateFontFaces, 'function', 'exports a generateFontFaces function');
  t.equal(generateFontFaces(fonts), fontFaces);
  t.end();
});
tape('generatePreloadLinks', t => {
  t.equal(typeof generatePreloadLinks, 'function', 'exports a generatePreloadLinks function');
  t.equal(generatePreloadLinks({
    'Lato-Regular': true
  }, fonts), preloadLinks);
  t.end();
});

var cov_1h0w6jvarm = function () {
  var path = "/Users/lhorie/Documents/test-private-monorepo/public/fusion-plugin-font-loader-react/src/font-loader.js",
      hash = "59649213ccc72df2d90a172203be66da64875d78",
      Function = function () {}.constructor,
      global = new Function('return this')(),
      gcv = "__coverage__",
      coverageData = {
    path: "/Users/lhorie/Documents/test-private-monorepo/public/fusion-plugin-font-loader-react/src/font-loader.js",
    statementMap: {
      "0": {
        start: {
          line: 17,
          column: 18
        },
        end: {
          line: 17,
          column: 54
        }
      },
      "1": {
        start: {
          line: 19,
          column: 17
        },
        end: {
          line: 19,
          column: 33
        }
      },
      "2": {
        start: {
          line: 21,
          column: 16
        },
        end: {
          line: 21,
          column: 21
        }
      },
      "3": {
        start: {
          line: 24,
          column: 2
        },
        end: {
          line: 29,
          column: 3
        }
      },
      "4": {
        start: {
          line: 26,
          column: 4
        },
        end: {
          line: 28,
          column: 31
        }
      },
      "5": {
        start: {
          line: 33,
          column: 19
        },
        end: {
          line: 33,
          column: 35
        }
      },
      "6": {
        start: {
          line: 35,
          column: 2
        },
        end: {
          line: 35,
          column: 79
        }
      },
      "7": {
        start: {
          line: 35,
          column: 27
        },
        end: {
          line: 35,
          column: 76
        }
      },
      "8": {
        start: {
          line: 36,
          column: 20
        },
        end: {
          line: 36,
          column: 40
        }
      },
      "9": {
        start: {
          line: 37,
          column: 2
        },
        end: {
          line: 48,
          column: 5
        }
      },
      "10": {
        start: {
          line: 38,
          column: 4
        },
        end: {
          line: 47,
          column: 11
        }
      },
      "11": {
        start: {
          line: 39,
          column: 6
        },
        end: {
          line: 46,
          column: 16
        }
      },
      "12": {
        start: {
          line: 40,
          column: 8
        },
        end: {
          line: 45,
          column: 9
        }
      },
      "13": {
        start: {
          line: 41,
          column: 10
        },
        end: {
          line: 41,
          column: 20
        }
      },
      "14": {
        start: {
          line: 42,
          column: 10
        },
        end: {
          line: 42,
          column: 28
        }
      },
      "15": {
        start: {
          line: 44,
          column: 10
        },
        end: {
          line: 44,
          column: 51
        }
      },
      "16": {
        start: {
          line: 53,
          column: 2
        },
        end: {
          line: 57,
          column: 4
        }
      },
      "17": {
        start: {
          line: 55,
          column: 18
        },
        end: {
          line: 55,
          column: 33
        }
      },
      "18": {
        start: {
          line: 56,
          column: 35
        },
        end: {
          line: 56,
          column: 67
        }
      },
      "19": {
        start: {
          line: 61,
          column: 2
        },
        end: {
          line: 67,
          column: 5
        }
      },
      "20": {
        start: {
          line: 62,
          column: 14
        },
        end: {
          line: 62,
          column: 28
        }
      },
      "21": {
        start: {
          line: 63,
          column: 4
        },
        end: {
          line: 65,
          column: 5
        }
      },
      "22": {
        start: {
          line: 64,
          column: 6
        },
        end: {
          line: 64,
          column: 25
        }
      },
      "23": {
        start: {
          line: 66,
          column: 4
        },
        end: {
          line: 66,
          column: 16
        }
      },
      "24": {
        start: {
          line: 71,
          column: 2
        },
        end: {
          line: 83,
          column: 5
        }
      },
      "25": {
        start: {
          line: 72,
          column: 16
        },
        end: {
          line: 72,
          column: 45
        }
      },
      "26": {
        start: {
          line: 74,
          column: 4
        },
        end: {
          line: 74,
          column: 28
        }
      },
      "27": {
        start: {
          line: 75,
          column: 4
        },
        end: {
          line: 77,
          column: 61
        }
      },
      "28": {
        start: {
          line: 78,
          column: 4
        },
        end: {
          line: 78,
          column: 55
        }
      },
      "29": {
        start: {
          line: 79,
          column: 4
        },
        end: {
          line: 81,
          column: 5
        }
      },
      "30": {
        start: {
          line: 80,
          column: 6
        },
        end: {
          line: 80,
          column: 37
        }
      },
      "31": {
        start: {
          line: 82,
          column: 4
        },
        end: {
          line: 82,
          column: 15
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 23,
            column: 15
          },
          end: {
            line: 23,
            column: 16
          }
        },
        loc: {
          start: {
            line: 23,
            column: 38
          },
          end: {
            line: 30,
            column: 1
          }
        },
        line: 23
      },
      "1": {
        name: "loadFontPolyfill",
        decl: {
          start: {
            line: 32,
            column: 9
          },
          end: {
            line: 32,
            column: 25
          }
        },
        loc: {
          start: {
            line: 32,
            column: 47
          },
          end: {
            line: 49,
            column: 1
          }
        },
        line: 32
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 35,
            column: 19
          },
          end: {
            line: 35,
            column: 20
          }
        },
        loc: {
          start: {
            line: 35,
            column: 27
          },
          end: {
            line: 35,
            column: 76
          }
        },
        line: 35
      },
      "3": {
        name: "(anonymous_3)",
        decl: {
          start: {
            line: 37,
            column: 21
          },
          end: {
            line: 37,
            column: 22
          }
        },
        loc: {
          start: {
            line: 37,
            column: 32
          },
          end: {
            line: 48,
            column: 3
          }
        },
        line: 37
      },
      "4": {
        name: "monitorWidth",
        decl: {
          start: {
            line: 38,
            column: 14
          },
          end: {
            line: 38,
            column: 26
          }
        },
        loc: {
          start: {
            line: 38,
            column: 34
          },
          end: {
            line: 47,
            column: 5
          }
        },
        line: 38
      },
      "5": {
        name: "(anonymous_5)",
        decl: {
          start: {
            line: 39,
            column: 17
          },
          end: {
            line: 39,
            column: 18
          }
        },
        loc: {
          start: {
            line: 39,
            column: 28
          },
          end: {
            line: 46,
            column: 7
          }
        },
        line: 39
      },
      "6": {
        name: "hasFontLoaded",
        decl: {
          start: {
            line: 51,
            column: 9
          },
          end: {
            line: 51,
            column: 22
          }
        },
        loc: {
          start: {
            line: 51,
            column: 33
          },
          end: {
            line: 58,
            column: 1
          }
        },
        line: 51
      },
      "7": {
        name: "(anonymous_7)",
        decl: {
          start: {
            line: 55,
            column: 11
          },
          end: {
            line: 55,
            column: 12
          }
        },
        loc: {
          start: {
            line: 55,
            column: 18
          },
          end: {
            line: 55,
            column: 33
          }
        },
        line: 55
      },
      "8": {
        name: "(anonymous_8)",
        decl: {
          start: {
            line: 56,
            column: 14
          },
          end: {
            line: 56,
            column: 15
          }
        },
        loc: {
          start: {
            line: 56,
            column: 35
          },
          end: {
            line: 56,
            column: 67
          }
        },
        line: 56
      },
      "9": {
        name: "cleanup",
        decl: {
          start: {
            line: 60,
            column: 9
          },
          end: {
            line: 60,
            column: 16
          }
        },
        loc: {
          start: {
            line: 60,
            column: 27
          },
          end: {
            line: 68,
            column: 1
          }
        },
        line: 60
      },
      "10": {
        name: "(anonymous_10)",
        decl: {
          start: {
            line: 61,
            column: 19
          },
          end: {
            line: 61,
            column: 20
          }
        },
        loc: {
          start: {
            line: 61,
            column: 26
          },
          end: {
            line: 67,
            column: 3
          }
        },
        line: 61
      },
      "11": {
        name: "createTestDivs",
        decl: {
          start: {
            line: 70,
            column: 9
          },
          end: {
            line: 70,
            column: 23
          }
        },
        loc: {
          start: {
            line: 70,
            column: 26
          },
          end: {
            line: 84,
            column: 1
          }
        },
        line: 70
      },
      "12": {
        name: "(anonymous_12)",
        decl: {
          start: {
            line: 71,
            column: 23
          },
          end: {
            line: 71,
            column: 24
          }
        },
        loc: {
          start: {
            line: 71,
            column: 40
          },
          end: {
            line: 83,
            column: 3
          }
        },
        line: 71
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 24,
            column: 2
          },
          end: {
            line: 29,
            column: 3
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 24,
            column: 2
          },
          end: {
            line: 29,
            column: 3
          }
        }, {
          start: {
            line: 24,
            column: 2
          },
          end: {
            line: 29,
            column: 3
          }
        }],
        line: 24
      },
      "1": {
        loc: {
          start: {
            line: 24,
            column: 6
          },
          end: {
            line: 24,
            column: 29
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
            column: 17
          }
        }, {
          start: {
            line: 24,
            column: 21
          },
          end: {
            line: 24,
            column: 29
          }
        }],
        line: 24
      },
      "2": {
        loc: {
          start: {
            line: 26,
            column: 11
          },
          end: {
            line: 28,
            column: 30
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 27,
            column: 8
          },
          end: {
            line: 27,
            column: 42
          }
        }, {
          start: {
            line: 28,
            column: 8
          },
          end: {
            line: 28,
            column: 30
          }
        }],
        line: 26
      },
      "3": {
        loc: {
          start: {
            line: 26,
            column: 11
          },
          end: {
            line: 26,
            column: 70
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 26,
            column: 11
          },
          end: {
            line: 26,
            column: 25
          }
        }, {
          start: {
            line: 26,
            column: 29
          },
          end: {
            line: 26,
            column: 70
          }
        }],
        line: 26
      },
      "4": {
        loc: {
          start: {
            line: 40,
            column: 8
          },
          end: {
            line: 45,
            column: 9
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 40,
            column: 8
          },
          end: {
            line: 45,
            column: 9
          }
        }, {
          start: {
            line: 40,
            column: 8
          },
          end: {
            line: 45,
            column: 9
          }
        }],
        line: 40
      },
      "5": {
        loc: {
          start: {
            line: 40,
            column: 12
          },
          end: {
            line: 40,
            column: 62
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 40,
            column: 12
          },
          end: {
            line: 40,
            column: 35
          }
        }, {
          start: {
            line: 40,
            column: 39
          },
          end: {
            line: 40,
            column: 62
          }
        }],
        line: 40
      },
      "6": {
        loc: {
          start: {
            line: 56,
            column: 35
          },
          end: {
            line: 56,
            column: 67
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 56,
            column: 55
          },
          end: {
            line: 56,
            column: 61
          }
        }, {
          start: {
            line: 56,
            column: 64
          },
          end: {
            line: 56,
            column: 67
          }
        }],
        line: 56
      },
      "7": {
        loc: {
          start: {
            line: 63,
            column: 4
          },
          end: {
            line: 65,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 63,
            column: 4
          },
          end: {
            line: 65,
            column: 5
          }
        }, {
          start: {
            line: 63,
            column: 4
          },
          end: {
            line: 65,
            column: 5
          }
        }],
        line: 63
      },
      "8": {
        loc: {
          start: {
            line: 79,
            column: 4
          },
          end: {
            line: 81,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 79,
            column: 4
          },
          end: {
            line: 81,
            column: 5
          }
        }, {
          start: {
            line: 79,
            column: 4
          },
          end: {
            line: 81,
            column: 5
          }
        }],
        line: 79
      },
      "9": {
        loc: {
          start: {
            line: 79,
            column: 8
          },
          end: {
            line: 79,
            column: 33
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 79,
            column: 8
          },
          end: {
            line: 79,
            column: 16
          }
        }, {
          start: {
            line: 79,
            column: 20
          },
          end: {
            line: 79,
            column: 33
          }
        }],
        line: 79
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

/** Copyright (c) 2018 Uber Technologies, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

/**
 * Polyfill loosely based on zenfonts
 * https://github.com/zengabor/zenfonts/
 * Copyright (c) 2015 Gabor Lenard
 */

/* global document */
const testFonts = (cov_1h0w6jvarm.s[0]++, ['sans-serif', 'serif', 'monospace']); // TODO(#3): allow override

const testText = (cov_1h0w6jvarm.s[1]++, 'π+[.—_]imW12/?'); // how long to wait for load before switching style to true font anyway

const timeout = (cov_1h0w6jvarm.s[2]++, 60000);

var cov_1m99fxor61 = function () {
  var path = "/Users/lhorie/Documents/test-private-monorepo/public/fusion-plugin-font-loader-react/src/with-font-loading.js",
      hash = "21a60a87e57f61a2069bf6c782557658259b2d43",
      Function = function () {}.constructor,
      global = new Function('return this')(),
      gcv = "__coverage__",
      coverageData = {
    path: "/Users/lhorie/Documents/test-private-monorepo/public/fusion-plugin-font-loader-react/src/with-font-loading.js",
    statementMap: {
      "0": {
        start: {
          line: 29,
          column: 24
        },
        end: {
          line: 70,
          column: 1
        }
      },
      "1": {
        start: {
          line: 30,
          column: 2
        },
        end: {
          line: 69,
          column: 4
        }
      },
      "2": {
        start: {
          line: 39,
          column: 8
        },
        end: {
          line: 39,
          column: 30
        }
      },
      "3": {
        start: {
          line: 40,
          column: 39
        },
        end: {
          line: 40,
          column: 76
        }
      },
      "4": {
        start: {
          line: 41,
          column: 8
        },
        end: {
          line: 47,
          column: 9
        }
      },
      "5": {
        start: {
          line: 43,
          column: 10
        },
        end: {
          line: 43,
          column: 76
        }
      },
      "6": {
        start: {
          line: 46,
          column: 10
        },
        end: {
          line: 46,
          column: 61
        }
      },
      "7": {
        start: {
          line: 51,
          column: 8
        },
        end: {
          line: 57,
          column: 9
        }
      },
      "8": {
        start: {
          line: 53,
          column: 10
        },
        end: {
          line: 56,
          column: 13
        }
      },
      "9": {
        start: {
          line: 55,
          column: 12
        },
        end: {
          line: 55,
          column: 65
        }
      },
      "10": {
        start: {
          line: 61,
          column: 8
        },
        end: {
          line: 61,
          column: 73
        }
      },
      "11": {
        start: {
          line: 65,
          column: 4
        },
        end: {
          line: 67,
          column: 6
        }
      },
      "12": {
        start: {
          line: 68,
          column: 4
        },
        end: {
          line: 68,
          column: 27
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 29,
            column: 24
          },
          end: {
            line: 29,
            column: 25
          }
        },
        loc: {
          start: {
            line: 29,
            column: 46
          },
          end: {
            line: 70,
            column: 1
          }
        },
        line: 29
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 30,
            column: 9
          },
          end: {
            line: 30,
            column: 10
          }
        },
        loc: {
          start: {
            line: 32,
            column: 31
          },
          end: {
            line: 69,
            column: 3
          }
        },
        line: 32
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 38,
            column: 6
          },
          end: {
            line: 38,
            column: 7
          }
        },
        loc: {
          start: {
            line: 38,
            column: 44
          },
          end: {
            line: 48,
            column: 7
          }
        },
        line: 38
      },
      "3": {
        name: "(anonymous_3)",
        decl: {
          start: {
            line: 50,
            column: 6
          },
          end: {
            line: 50,
            column: 7
          }
        },
        loc: {
          start: {
            line: 50,
            column: 26
          },
          end: {
            line: 58,
            column: 7
          }
        },
        line: 50
      },
      "4": {
        name: "(anonymous_4)",
        decl: {
          start: {
            line: 53,
            column: 39
          },
          end: {
            line: 53,
            column: 40
          }
        },
        loc: {
          start: {
            line: 53,
            column: 45
          },
          end: {
            line: 56,
            column: 11
          }
        },
        line: 53
      },
      "5": {
        name: "(anonymous_5)",
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
            line: 62,
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
            line: 41,
            column: 8
          },
          end: {
            line: 47,
            column: 9
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 41,
            column: 8
          },
          end: {
            line: 47,
            column: 9
          }
        }, {
          start: {
            line: 41,
            column: 8
          },
          end: {
            line: 47,
            column: 9
          }
        }],
        line: 41
      },
      "1": {
        loc: {
          start: {
            line: 51,
            column: 8
          },
          end: {
            line: 57,
            column: 9
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 51,
            column: 8
          },
          end: {
            line: 57,
            column: 9
          }
        }, {
          start: {
            line: 51,
            column: 8
          },
          end: {
            line: 57,
            column: 9
          }
        }],
        line: 51
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
      "3": 0,
      "4": 0,
      "5": 0
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
/*
Returns a React HOC
1) starts loading real font and passes fallback font and faux styling to wrappedComponent as props.$fontStyles
2) when font load completes passes real font to wrappedComponent as props.$fontStyles

Usage:
withFontLoading(fontName)(wrappedComponent)

fontProps is hash of font property names to required font names
e.g. (with styletron)
withFontLoading('Lato-Bold')(styled('div', props => props.$fontStyles));

All requested fonts should be defined in src/fonts/fontConfig.js
*/

cov_1m99fxor61.s[0]++;

var cov_1vhrfi0uee = function () {
  var path = "/Users/lhorie/Documents/test-private-monorepo/public/fusion-plugin-font-loader-react/src/provider.js",
      hash = "7d935dd551ea147f5b2ae7130da49e7c3e5d8e9d",
      Function = function () {}.constructor,
      global = new Function('return this')(),
      gcv = "__coverage__",
      coverageData = {
    path: "/Users/lhorie/Documents/test-private-monorepo/public/fusion-plugin-font-loader-react/src/provider.js",
    statementMap: {
      "0": {
        start: {
          line: 14,
          column: 4
        },
        end: {
          line: 14,
          column: 26
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
          line: 21,
          column: 4
        },
        end: {
          line: 23,
          column: 6
        }
      },
      "3": {
        start: {
          line: 26,
          column: 4
        },
        end: {
          line: 26,
          column: 52
        }
      },
      "4": {
        start: {
          line: 30,
          column: 0
        },
        end: {
          line: 33,
          column: 2
        }
      },
      "5": {
        start: {
          line: 34,
          column: 0
        },
        end: {
          line: 36,
          column: 2
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 13,
            column: 2
          },
          end: {
            line: 13,
            column: 3
          }
        },
        loc: {
          start: {
            line: 13,
            column: 36
          },
          end: {
            line: 16,
            column: 3
          }
        },
        line: 13
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 20,
            column: 2
          },
          end: {
            line: 20,
            column: 3
          }
        },
        loc: {
          start: {
            line: 20,
            column: 20
          },
          end: {
            line: 24,
            column: 3
          }
        },
        line: 20
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 25,
            column: 2
          },
          end: {
            line: 25,
            column: 3
          }
        },
        loc: {
          start: {
            line: 25,
            column: 11
          },
          end: {
            line: 27,
            column: 3
          }
        },
        line: 25
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
class FontProvider extends React.Component {
  constructor(props, context) {
    cov_1vhrfi0uee.f[0]++;
    cov_1vhrfi0uee.s[0]++;
    super(props, context);
    cov_1vhrfi0uee.s[1]++;
    this.getFontDetails = props.getFontDetails;
  }

  getChildContext() {
    cov_1vhrfi0uee.f[1]++;
    cov_1vhrfi0uee.s[2]++;
    return {
      getFontDetails: this.props.getFontDetails
    };
  }

  render() {
    cov_1vhrfi0uee.f[2]++;
    cov_1vhrfi0uee.s[3]++;
    return React__default.Children.only(this.props.children);
  }

}
cov_1vhrfi0uee.s[4]++;
FontProvider.propTypes = {
  getFontDetails: PropTypes.func.isRequired,
  children: PropTypes.element.isRequired
};
cov_1vhrfi0uee.s[5]++;
FontProvider.childContextTypes = {
  getFontDetails: PropTypes.func.isRequired
};

var cov_v2nrqcojy = function () {
  var path = "/Users/lhorie/Documents/test-private-monorepo/public/fusion-plugin-font-loader-react/src/preload-session.js",
      hash = "a37ffa68d25049d21f4ae1fbbe81a3ef53df9ff9",
      Function = function () {}.constructor,
      global = new Function('return this')(),
      gcv = "__coverage__",
      coverageData = {
    path: "/Users/lhorie/Documents/test-private-monorepo/public/fusion-plugin-font-loader-react/src/preload-session.js",
    statementMap: {
      "0": {
        start: {
          line: 22,
          column: 4
        },
        end: {
          line: 22,
          column: 29
        }
      },
      "1": {
        start: {
          line: 23,
          column: 4
        },
        end: {
          line: 23,
          column: 41
        }
      },
      "2": {
        start: {
          line: 27,
          column: 46
        },
        end: {
          line: 27,
          column: 77
        }
      },
      "3": {
        start: {
          line: 28,
          column: 19
        },
        end: {
          line: 32,
          column: 5
        }
      },
      "4": {
        start: {
          line: 33,
          column: 4
        },
        end: {
          line: 36,
          column: 5
        }
      },
      "5": {
        start: {
          line: 35,
          column: 6
        },
        end: {
          line: 35,
          column: 55
        }
      },
      "6": {
        start: {
          line: 37,
          column: 4
        },
        end: {
          line: 37,
          column: 18
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 20,
            column: 2
          },
          end: {
            line: 20,
            column: 3
          }
        },
        loc: {
          start: {
            line: 20,
            column: 46
          },
          end: {
            line: 24,
            column: 3
          }
        },
        line: 20
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 26,
            column: 19
          },
          end: {
            line: 26,
            column: 20
          }
        },
        loc: {
          start: {
            line: 26,
            column: 37
          },
          end: {
            line: 38,
            column: 3
          }
        },
        line: 26
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 27,
            column: 31
          },
          end: {
            line: 27,
            column: 42
          }
        },
        type: "default-arg",
        locations: [{
          start: {
            line: 27,
            column: 40
          },
          end: {
            line: 27,
            column: 42
          }
        }],
        line: 27
      },
      "1": {
        loc: {
          start: {
            line: 27,
            column: 46
          },
          end: {
            line: 27,
            column: 77
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 27,
            column: 46
          },
          end: {
            line: 27,
            column: 71
          }
        }, {
          start: {
            line: 27,
            column: 75
          },
          end: {
            line: 27,
            column: 77
          }
        }],
        line: 27
      },
      "2": {
        loc: {
          start: {
            line: 33,
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
            line: 33,
            column: 4
          },
          end: {
            line: 36,
            column: 5
          }
        }, {
          start: {
            line: 33,
            column: 4
          },
          end: {
            line: 36,
            column: 5
          }
        }],
        line: 33
      },
      "3": {
        loc: {
          start: {
            line: 35,
            column: 26
          },
          end: {
            line: 35,
            column: 46
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 35,
            column: 26
          },
          end: {
            line: 35,
            column: 38
          }
        }, {
          start: {
            line: 35,
            column: 42
          },
          end: {
            line: 35,
            column: 46
          }
        }],
        line: 35
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
      "1": 0
    },
    b: {
      "0": [0],
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
class PreloadSession {
  constructor(fallbackLookup) {
    this.getFontDetails = name => {
      cov_v2nrqcojy.f[1]++;
      const {
        name: fallbackName,
        styles = (cov_v2nrqcojy.b[0][0]++, {})
      } = (cov_v2nrqcojy.s[2]++, (cov_v2nrqcojy.b[1][0]++, this.fallbackLookup[name]) || (cov_v2nrqcojy.b[1][1]++, {}));
      const result = (cov_v2nrqcojy.s[3]++, {
        name,
        fallbackName,
        styles
      });
      cov_v2nrqcojy.s[4]++;

      {
        cov_v2nrqcojy.b[2][0]++;
        cov_v2nrqcojy.s[5]++;
        // preload fallback, or if font has no fallback preload font itself
        this.fontsToPreload[(cov_v2nrqcojy.b[3][0]++, fallbackName) || (cov_v2nrqcojy.b[3][1]++, name)] = true;
      }

      cov_v2nrqcojy.s[6]++;
      return result;
    };

    cov_v2nrqcojy.f[0]++;
    cov_v2nrqcojy.s[0]++;
    // keys are the actual fonts to preload (based on usage on the page), values are always true
    this.fontsToPreload = {};
    cov_v2nrqcojy.s[1]++;
    this.fallbackLookup = fallbackLookup;
  }

}

var cov_qjvjet9dh = function () {
  var path = "/Users/lhorie/Documents/test-private-monorepo/public/fusion-plugin-font-loader-react/src/tokens.js",
      hash = "a4e0987dc8467536d5cc4f38c542a2af1c6cda34",
      Function = function () {}.constructor,
      global = new Function('return this')(),
      gcv = "__coverage__",
      coverageData = {
    path: "/Users/lhorie/Documents/test-private-monorepo/public/fusion-plugin-font-loader-react/src/tokens.js",
    statementMap: {
      "0": {
        start: {
          line: 13,
          column: 53
        },
        end: {
          line: 15,
          column: 1
        }
      },
      "1": {
        start: {
          line: 17,
          column: 59
        },
        end: {
          line: 19,
          column: 1
        }
      }
    },
    fnMap: {},
    branchMap: {},
    s: {
      "0": 0,
      "1": 0
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
const FontLoaderReactToken = (cov_qjvjet9dh.s[0]++, App.createToken('FontLoaderReactToken'));
const FontLoaderReactConfigToken = (cov_qjvjet9dh.s[1]++, App.createToken('FontLoaderReactConfigToken'));

var cov_2qv58eg7od = function () {
  var path = "/Users/lhorie/Documents/test-private-monorepo/public/fusion-plugin-font-loader-react/src/plugin.js",
      hash = "5caffaf6954fa0dda367566585da42fb054f50e2",
      Function = function () {}.constructor,
      global = new Function('return this')(),
      gcv = "__coverage__",
      coverageData = {
    path: "/Users/lhorie/Documents/test-private-monorepo/public/fusion-plugin-font-loader-react/src/plugin.js",
    statementMap: {
      "0": {
        start: {
          line: 23,
          column: 15
        },
        end: {
          line: 58,
          column: 2
        }
      },
      "1": {
        start: {
          line: 28,
          column: 34
        },
        end: {
          line: 28,
          column: 40
        }
      },
      "2": {
        start: {
          line: 29,
          column: 27
        },
        end: {
          line: 29,
          column: 67
        }
      },
      "3": {
        start: {
          line: 30,
          column: 27
        },
        end: {
          line: 30,
          column: 61
        }
      },
      "4": {
        start: {
          line: 32,
          column: 4
        },
        end: {
          line: 56,
          column: 6
        }
      },
      "5": {
        start: {
          line: 33,
          column: 6
        },
        end: {
          line: 55,
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
          column: 10
        }
      },
      "7": {
        start: {
          line: 39,
          column: 8
        },
        end: {
          line: 52,
          column: 11
        }
      },
      "8": {
        start: {
          line: 40,
          column: 10
        },
        end: {
          line: 51,
          column: 11
        }
      },
      "9": {
        start: {
          line: 41,
          column: 12
        },
        end: {
          line: 41,
          column: 50
        }
      },
      "10": {
        start: {
          line: 42,
          column: 12
        },
        end: {
          line: 44,
          column: 14
        }
      },
      "11": {
        start: {
          line: 45,
          column: 12
        },
        end: {
          line: 45,
          column: 51
        }
      },
      "12": {
        start: {
          line: 46,
          column: 12
        },
        end: {
          line: 50,
          column: 14
        }
      },
      "13": {
        start: {
          line: 54,
          column: 8
        },
        end: {
          line: 54,
          column: 22
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 27,
            column: 14
          },
          end: {
            line: 27,
            column: 15
          }
        },
        loc: {
          start: {
            line: 27,
            column: 28
          },
          end: {
            line: 57,
            column: 3
          }
        },
        line: 27
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 32,
            column: 11
          },
          end: {
            line: 32,
            column: 12
          }
        },
        loc: {
          start: {
            line: 32,
            column: 26
          },
          end: {
            line: 56,
            column: 5
          }
        },
        line: 32
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 39,
            column: 27
          },
          end: {
            line: 39,
            column: 28
          }
        },
        loc: {
          start: {
            line: 39,
            column: 33
          },
          end: {
            line: 52,
            column: 9
          }
        },
        line: 39
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 33,
            column: 6
          },
          end: {
            line: 55,
            column: 7
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 33,
            column: 6
          },
          end: {
            line: 55,
            column: 7
          }
        }, {
          start: {
            line: 33,
            column: 6
          },
          end: {
            line: 55,
            column: 7
          }
        }],
        line: 33
      },
      "1": {
        loc: {
          start: {
            line: 40,
            column: 10
          },
          end: {
            line: 51,
            column: 11
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 40,
            column: 10
          },
          end: {
            line: 51,
            column: 11
          }
        }, {
          start: {
            line: 40,
            column: 10
          },
          end: {
            line: 51,
            column: 11
          }
        }],
        line: 40
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

/** Copyright (c) 2018 Uber Technologies, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

/* eslint-env node */
const plugin = (cov_2qv58eg7od.s[0]++, App.createPlugin({
  deps: {
    config: FontLoaderReactConfigToken
  },
  middleware: ({
    config
  }) => {
    cov_2qv58eg7od.f[0]++;
    const {
      fonts,
      preloadDepth
    } = (cov_2qv58eg7od.s[1]++, config);
    const fallbackLookup = (cov_2qv58eg7od.s[2]++, generateFallbackMap(fonts, preloadDepth));
    const preloadSession = (cov_2qv58eg7od.s[3]++, new PreloadSession(fallbackLookup));
    cov_2qv58eg7od.s[4]++;
    return (ctx, next) => {
      cov_2qv58eg7od.f[1]++;
      cov_2qv58eg7od.s[5]++;

      if (ctx.element) {
        cov_2qv58eg7od.b[0][0]++;
        cov_2qv58eg7od.s[6]++;
        ctx.element = React__default.createElement(FontProvider, {
          getFontDetails: preloadSession.getFontDetails
        }, ctx.element);
        cov_2qv58eg7od.s[7]++;
        return next().then(() => {
          cov_2qv58eg7od.f[2]++;
          cov_2qv58eg7od.s[8]++;

          {
            cov_2qv58eg7od.b[1][0]++;
            cov_2qv58eg7od.s[9]++;
            ctx.template.head.push(App.html`<style>`);
            cov_2qv58eg7od.s[10]++;
            ctx.template.head.push(App.dangerouslySetHTML(generateFontFaces(fonts)));
            cov_2qv58eg7od.s[11]++;
            ctx.template.head.push(App.html`</style>`);
            cov_2qv58eg7od.s[12]++;
            ctx.template.head.push(App.dangerouslySetHTML(generatePreloadLinks(preloadSession.fontsToPreload, fonts)));
          }
        });
      } else {
        cov_2qv58eg7od.b[0][1]++;
        cov_2qv58eg7od.s[13]++;
        return next();
      }
    };
  }
}));

var cov_14vwa2m1u9 = function () {
  var path = "/Users/lhorie/Documents/test-private-monorepo/public/fusion-plugin-font-loader-react/src/index.js",
      hash = "2d40a7284ce57a62a4d16b4862da5d034c8cdbd8",
      Function = function () {}.constructor,
      global = new Function('return this')(),
      gcv = "__coverage__",
      coverageData = {
    path: "/Users/lhorie/Documents/test-private-monorepo/public/fusion-plugin-font-loader-react/src/index.js",
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

/** Copyright (c) 2018 Uber Technologies, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */
tape('exported as expected', t => {
  t.ok(plugin, 'plugin defined as expected');
  t.equal(typeof plugin, 'object', 'plugin is an object');
  t.end();
});
tape('plugin - middleware modifies head as expected', t => {
  const mockConfig = {
    fonts: fonts,
    preloadDepth: preloadDepth
  };
  const app = new App__default('content', el => el);
  app.middleware(async (ctx, next) => {
    await next();
    t.true(ctx.template.head.length > 0, 'head was modified by plugin');
  });
  app.register(FontLoaderReactToken, plugin);
  app.register(FontLoaderReactConfigToken, mockConfig);
  app.middleware((ctx, next) => {
    ctx.body = {
      head: []
    };
    return next();
  });
  fusionTestUtils.getSimulator(app).render('/');
  t.end();
});
//# sourceMappingURL=node.js.map
