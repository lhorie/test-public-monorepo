'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var UniversalEvents = require('fusion-plugin-universal-events');
var UniversalEvents__default = _interopDefault(UniversalEvents);
var App = require('fusion-react');
var App__default = _interopDefault(App);
var React = _interopDefault(require('react'));
var test = _interopDefault(require('tape-cup'));
var fusionTestUtils = require('fusion-test-utils');

var cov_9rkp9alec = function () {
  var path = "/Users/lhorie/Documents/test-private-monorepo/public/fusion-plugin-universal-events-react/src/plugin.js",
      hash = "92b7ad5525c6cf55fd65a8e2ff66b8b326180a15",
      Function = function () {}.constructor,
      global = new Function('return this')(),
      gcv = "__coverage__",
      coverageData = {
    path: "/Users/lhorie/Documents/test-private-monorepo/public/fusion-plugin-universal-events-react/src/plugin.js",
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
var plugin = App.ProviderPlugin.create('universalEvents', UniversalEvents__default);

var cov_1jcan9r9rg = function () {
  var path = "/Users/lhorie/Documents/test-private-monorepo/public/fusion-plugin-universal-events-react/src/hoc.js",
      hash = "a388c01563e3b543d3f379f91e60d424fdce22e2",
      Function = function () {}.constructor,
      global = new Function('return this')(),
      gcv = "__coverage__",
      coverageData = {
    path: "/Users/lhorie/Documents/test-private-monorepo/public/fusion-plugin-universal-events-react/src/hoc.js",
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
var withBatchEvents = App.ProvidedHOC.create('universalEvents');

var cov_1jdddz2dvq = function () {
  var path = "/Users/lhorie/Documents/test-private-monorepo/public/fusion-plugin-universal-events-react/src/index.js",
      hash = "5d6d54e7e56d16453d2377a7553d687c14719328",
      Function = function () {}.constructor,
      global = new Function('return this')(),
      gcv = "__coverage__",
      coverageData = {
    path: "/Users/lhorie/Documents/test-private-monorepo/public/fusion-plugin-universal-events-react/src/index.js",
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
test('test plugin', async t => {
  let called = false;
  const Root = withBatchEvents(props => {
    const {
      universalEvents
    } = props;
    t.equal(typeof universalEvents.on, 'function');
    t.equal(typeof universalEvents.emit, 'function');
    universalEvents.emit('test', {
      hello: 'world'
    });
    return React.createElement('div', null, 'Hello World');
  });
  const app = new App__default(React.createElement(Root));
  app.register(UniversalEvents.UniversalEventsToken, plugin);
  app.middleware({
    events: UniversalEvents.UniversalEventsToken
  }, ({
    events
  }) => {
    events.on('test', p => {
      t.deepLooseEqual(p, {
        hello: 'world'
      });
      called = true;
    });
    return (ctx, next) => {
      return next();
    };
  });
  const sim = fusionTestUtils.getSimulator(app);
  await sim.render('/');
  t.ok(called);
  t.end();
});
//# sourceMappingURL=node.js.map
