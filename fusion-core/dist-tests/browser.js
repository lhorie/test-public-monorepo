/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 12);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global, setImmediate) {var global$1 = typeof global !== "undefined" ? global :
            typeof self !== "undefined" ? self :
            typeof window !== "undefined" ? window : {};

// shim for using process in browser
// based off https://github.com/defunctzombie/node-process/blob/master/browser.js

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
var cachedSetTimeout = defaultSetTimout;
var cachedClearTimeout = defaultClearTimeout;
if (typeof global$1.setTimeout === 'function') {
    cachedSetTimeout = setTimeout;
}
if (typeof global$1.clearTimeout === 'function') {
    cachedClearTimeout = clearTimeout;
}

function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}
function nextTick(fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
}
// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
var title = 'browser';
var platform = 'browser';
var browser = true;
var env = {};
var argv = [];
var version = ''; // empty string to avoid regexp issues
var versions = {};
var release = {};
var config = {};

function noop() {}

var on = noop;
var addListener = noop;
var once = noop;
var off = noop;
var removeListener = noop;
var removeAllListeners = noop;
var emit = noop;

function binding(name) {
    throw new Error('process.binding is not supported');
}

function cwd () { return '/' }
function chdir (dir) {
    throw new Error('process.chdir is not supported');
}
function umask() { return 0; }

// from https://github.com/kumavis/browser-process-hrtime/blob/master/index.js
var performance = global$1.performance || {};
var performanceNow =
  performance.now        ||
  performance.mozNow     ||
  performance.msNow      ||
  performance.oNow       ||
  performance.webkitNow  ||
  function(){ return (new Date()).getTime() };

// generate timestamp or delta
// see http://nodejs.org/api/process.html#process_process_hrtime
function hrtime(previousTimestamp){
  var clocktime = performanceNow.call(performance)*1e-3;
  var seconds = Math.floor(clocktime);
  var nanoseconds = Math.floor((clocktime%1)*1e9);
  if (previousTimestamp) {
    seconds = seconds - previousTimestamp[0];
    nanoseconds = nanoseconds - previousTimestamp[1];
    if (nanoseconds<0) {
      seconds--;
      nanoseconds += 1e9;
    }
  }
  return [seconds,nanoseconds]
}

var startTime = new Date();
function uptime() {
  var currentTime = new Date();
  var dif = currentTime - startTime;
  return dif / 1000;
}

var process = {
  nextTick: nextTick,
  title: title,
  browser: browser,
  env: env,
  argv: argv,
  version: version,
  versions: versions,
  on: on,
  addListener: addListener,
  once: once,
  off: off,
  removeListener: removeListener,
  removeAllListeners: removeAllListeners,
  emit: emit,
  binding: binding,
  cwd: cwd,
  chdir: chdir,
  umask: umask,
  hrtime: hrtime,
  platform: platform,
  release: release,
  config: config,
  uptime: uptime
};

var browser$1 = true;

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var index$2 = function () {
    for (var i = 0; i < arguments.length; i++) {
        if (arguments[i] !== undefined) return arguments[i];
    }
};

var domain;

// This constructor is used to store event handlers. Instantiating this is
// faster than explicitly calling `Object.create(null)` to get a "clean" empty
// object (tested with v8 v4.9).
function EventHandlers() {}
EventHandlers.prototype = Object.create(null);

function EventEmitter() {
  EventEmitter.init.call(this);
}
// nodejs oddity
// require('events') === require('events').EventEmitter
EventEmitter.EventEmitter = EventEmitter;

EventEmitter.usingDomains = false;

EventEmitter.prototype.domain = undefined;
EventEmitter.prototype._events = undefined;
EventEmitter.prototype._maxListeners = undefined;

// By default EventEmitters will print a warning if more than 10 listeners are
// added to it. This is a useful default which helps finding memory leaks.
EventEmitter.defaultMaxListeners = 10;

EventEmitter.init = function() {
  this.domain = null;
  if (EventEmitter.usingDomains) {
    // if there is an active domain, then attach to it.
    if (domain.active && !(this instanceof domain.Domain)) {
      this.domain = domain.active;
    }
  }

  if (!this._events || this._events === Object.getPrototypeOf(this)._events) {
    this._events = new EventHandlers();
    this._eventsCount = 0;
  }

  this._maxListeners = this._maxListeners || undefined;
};

// Obviously not all Emitters should be limited to 10. This function allows
// that to be increased. Set to zero for unlimited.
EventEmitter.prototype.setMaxListeners = function setMaxListeners(n) {
  if (typeof n !== 'number' || n < 0 || isNaN(n))
    throw new TypeError('"n" argument must be a positive number');
  this._maxListeners = n;
  return this;
};

function $getMaxListeners(that) {
  if (that._maxListeners === undefined)
    return EventEmitter.defaultMaxListeners;
  return that._maxListeners;
}

EventEmitter.prototype.getMaxListeners = function getMaxListeners() {
  return $getMaxListeners(this);
};

// These standalone emit* functions are used to optimize calling of event
// handlers for fast cases because emit() itself often has a variable number of
// arguments and can be deoptimized because of that. These functions always have
// the same number of arguments and thus do not get deoptimized, so the code
// inside them can execute faster.
function emitNone(handler, isFn, self) {
  if (isFn)
    handler.call(self);
  else {
    var len = handler.length;
    var listeners = arrayClone(handler, len);
    for (var i = 0; i < len; ++i)
      listeners[i].call(self);
  }
}
function emitOne(handler, isFn, self, arg1) {
  if (isFn)
    handler.call(self, arg1);
  else {
    var len = handler.length;
    var listeners = arrayClone(handler, len);
    for (var i = 0; i < len; ++i)
      listeners[i].call(self, arg1);
  }
}
function emitTwo(handler, isFn, self, arg1, arg2) {
  if (isFn)
    handler.call(self, arg1, arg2);
  else {
    var len = handler.length;
    var listeners = arrayClone(handler, len);
    for (var i = 0; i < len; ++i)
      listeners[i].call(self, arg1, arg2);
  }
}
function emitThree(handler, isFn, self, arg1, arg2, arg3) {
  if (isFn)
    handler.call(self, arg1, arg2, arg3);
  else {
    var len = handler.length;
    var listeners = arrayClone(handler, len);
    for (var i = 0; i < len; ++i)
      listeners[i].call(self, arg1, arg2, arg3);
  }
}

function emitMany(handler, isFn, self, args) {
  if (isFn)
    handler.apply(self, args);
  else {
    var len = handler.length;
    var listeners = arrayClone(handler, len);
    for (var i = 0; i < len; ++i)
      listeners[i].apply(self, args);
  }
}

EventEmitter.prototype.emit = function emit(type) {
  var er, handler, len, args, i, events, domain;
  var needDomainExit = false;
  var doError = (type === 'error');

  events = this._events;
  if (events)
    doError = (doError && events.error == null);
  else if (!doError)
    return false;

  domain = this.domain;

  // If there is no 'error' event listener then throw.
  if (doError) {
    er = arguments[1];
    if (domain) {
      if (!er)
        er = new Error('Uncaught, unspecified "error" event');
      er.domainEmitter = this;
      er.domain = domain;
      er.domainThrown = false;
      domain.emit('error', er);
    } else if (er instanceof Error) {
      throw er; // Unhandled 'error' event
    } else {
      // At least give some kind of context to the user
      var err = new Error('Uncaught, unspecified "error" event. (' + er + ')');
      err.context = er;
      throw err;
    }
    return false;
  }

  handler = events[type];

  if (!handler)
    return false;

  var isFn = typeof handler === 'function';
  len = arguments.length;
  switch (len) {
    // fast cases
    case 1:
      emitNone(handler, isFn, this);
      break;
    case 2:
      emitOne(handler, isFn, this, arguments[1]);
      break;
    case 3:
      emitTwo(handler, isFn, this, arguments[1], arguments[2]);
      break;
    case 4:
      emitThree(handler, isFn, this, arguments[1], arguments[2], arguments[3]);
      break;
    // slower
    default:
      args = new Array(len - 1);
      for (i = 1; i < len; i++)
        args[i - 1] = arguments[i];
      emitMany(handler, isFn, this, args);
  }

  if (needDomainExit)
    domain.exit();

  return true;
};

function _addListener(target, type, listener, prepend) {
  var m;
  var events;
  var existing;

  if (typeof listener !== 'function')
    throw new TypeError('"listener" argument must be a function');

  events = target._events;
  if (!events) {
    events = target._events = new EventHandlers();
    target._eventsCount = 0;
  } else {
    // To avoid recursion in the case that type === "newListener"! Before
    // adding it to the listeners, first emit "newListener".
    if (events.newListener) {
      target.emit('newListener', type,
                  listener.listener ? listener.listener : listener);

      // Re-assign `events` because a newListener handler could have caused the
      // this._events to be assigned to a new object
      events = target._events;
    }
    existing = events[type];
  }

  if (!existing) {
    // Optimize the case of one listener. Don't need the extra array object.
    existing = events[type] = listener;
    ++target._eventsCount;
  } else {
    if (typeof existing === 'function') {
      // Adding the second element, need to change to array.
      existing = events[type] = prepend ? [listener, existing] :
                                          [existing, listener];
    } else {
      // If we've already got an array, just append.
      if (prepend) {
        existing.unshift(listener);
      } else {
        existing.push(listener);
      }
    }

    // Check for listener leak
    if (!existing.warned) {
      m = $getMaxListeners(target);
      if (m && m > 0 && existing.length > m) {
        existing.warned = true;
        var w = new Error('Possible EventEmitter memory leak detected. ' +
                            existing.length + ' ' + type + ' listeners added. ' +
                            'Use emitter.setMaxListeners() to increase limit');
        w.name = 'MaxListenersExceededWarning';
        w.emitter = target;
        w.type = type;
        w.count = existing.length;
        emitWarning(w);
      }
    }
  }

  return target;
}
function emitWarning(e) {
  typeof console.warn === 'function' ? console.warn(e) : console.log(e);
}
EventEmitter.prototype.addListener = function addListener(type, listener) {
  return _addListener(this, type, listener, false);
};

EventEmitter.prototype.on = EventEmitter.prototype.addListener;

EventEmitter.prototype.prependListener =
    function prependListener(type, listener) {
      return _addListener(this, type, listener, true);
    };

function _onceWrap(target, type, listener) {
  var fired = false;
  function g() {
    target.removeListener(type, g);
    if (!fired) {
      fired = true;
      listener.apply(target, arguments);
    }
  }
  g.listener = listener;
  return g;
}

EventEmitter.prototype.once = function once(type, listener) {
  if (typeof listener !== 'function')
    throw new TypeError('"listener" argument must be a function');
  this.on(type, _onceWrap(this, type, listener));
  return this;
};

EventEmitter.prototype.prependOnceListener =
    function prependOnceListener(type, listener) {
      if (typeof listener !== 'function')
        throw new TypeError('"listener" argument must be a function');
      this.prependListener(type, _onceWrap(this, type, listener));
      return this;
    };

// emits a 'removeListener' event iff the listener was removed
EventEmitter.prototype.removeListener =
    function removeListener(type, listener) {
      var list, events, position, i, originalListener;

      if (typeof listener !== 'function')
        throw new TypeError('"listener" argument must be a function');

      events = this._events;
      if (!events)
        return this;

      list = events[type];
      if (!list)
        return this;

      if (list === listener || (list.listener && list.listener === listener)) {
        if (--this._eventsCount === 0)
          this._events = new EventHandlers();
        else {
          delete events[type];
          if (events.removeListener)
            this.emit('removeListener', type, list.listener || listener);
        }
      } else if (typeof list !== 'function') {
        position = -1;

        for (i = list.length; i-- > 0;) {
          if (list[i] === listener ||
              (list[i].listener && list[i].listener === listener)) {
            originalListener = list[i].listener;
            position = i;
            break;
          }
        }

        if (position < 0)
          return this;

        if (list.length === 1) {
          list[0] = undefined;
          if (--this._eventsCount === 0) {
            this._events = new EventHandlers();
            return this;
          } else {
            delete events[type];
          }
        } else {
          spliceOne(list, position);
        }

        if (events.removeListener)
          this.emit('removeListener', type, originalListener || listener);
      }

      return this;
    };

EventEmitter.prototype.removeAllListeners =
    function removeAllListeners(type) {
      var listeners, events;

      events = this._events;
      if (!events)
        return this;

      // not listening for removeListener, no need to emit
      if (!events.removeListener) {
        if (arguments.length === 0) {
          this._events = new EventHandlers();
          this._eventsCount = 0;
        } else if (events[type]) {
          if (--this._eventsCount === 0)
            this._events = new EventHandlers();
          else
            delete events[type];
        }
        return this;
      }

      // emit removeListener for all listeners on all events
      if (arguments.length === 0) {
        var keys = Object.keys(events);
        for (var i = 0, key; i < keys.length; ++i) {
          key = keys[i];
          if (key === 'removeListener') continue;
          this.removeAllListeners(key);
        }
        this.removeAllListeners('removeListener');
        this._events = new EventHandlers();
        this._eventsCount = 0;
        return this;
      }

      listeners = events[type];

      if (typeof listeners === 'function') {
        this.removeListener(type, listeners);
      } else if (listeners) {
        // LIFO order
        do {
          this.removeListener(type, listeners[listeners.length - 1]);
        } while (listeners[0]);
      }

      return this;
    };

EventEmitter.prototype.listeners = function listeners(type) {
  var evlistener;
  var ret;
  var events = this._events;

  if (!events)
    ret = [];
  else {
    evlistener = events[type];
    if (!evlistener)
      ret = [];
    else if (typeof evlistener === 'function')
      ret = [evlistener.listener || evlistener];
    else
      ret = unwrapListeners(evlistener);
  }

  return ret;
};

EventEmitter.listenerCount = function(emitter, type) {
  if (typeof emitter.listenerCount === 'function') {
    return emitter.listenerCount(type);
  } else {
    return listenerCount.call(emitter, type);
  }
};

EventEmitter.prototype.listenerCount = listenerCount;
function listenerCount(type) {
  var events = this._events;

  if (events) {
    var evlistener = events[type];

    if (typeof evlistener === 'function') {
      return 1;
    } else if (evlistener) {
      return evlistener.length;
    }
  }

  return 0;
}

EventEmitter.prototype.eventNames = function eventNames() {
  return this._eventsCount > 0 ? Reflect.ownKeys(this._events) : [];
};

// About 1.5x faster than the two-arg version of Array#splice().
function spliceOne(list, index) {
  for (var i = index, k = i + 1, n = list.length; k < n; i += 1, k += 1)
    list[i] = list[k];
  list.pop();
}

function arrayClone(arr, i) {
  var copy = new Array(i);
  while (i--)
    copy[i] = arr[i];
  return copy;
}

function unwrapListeners(arr) {
  var ret = new Array(arr.length);
  for (var i = 0; i < ret.length; ++i) {
    ret[i] = arr[i].listener || arr[i];
  }
  return ret;
}


var events = Object.freeze({
	default: EventEmitter,
	EventEmitter: EventEmitter
});

var lookup = [];
var revLookup = [];
var Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array;
var inited = false;
function init () {
  inited = true;
  var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
  for (var i = 0, len = code.length; i < len; ++i) {
    lookup[i] = code[i];
    revLookup[code.charCodeAt(i)] = i;
  }

  revLookup['-'.charCodeAt(0)] = 62;
  revLookup['_'.charCodeAt(0)] = 63;
}

function toByteArray (b64) {
  if (!inited) {
    init();
  }
  var i, j, l, tmp, placeHolders, arr;
  var len = b64.length;

  if (len % 4 > 0) {
    throw new Error('Invalid string. Length must be a multiple of 4')
  }

  // the number of equal signs (place holders)
  // if there are two placeholders, than the two characters before it
  // represent one byte
  // if there is only one, then the three characters before it represent 2 bytes
  // this is just a cheap hack to not do indexOf twice
  placeHolders = b64[len - 2] === '=' ? 2 : b64[len - 1] === '=' ? 1 : 0;

  // base64 is 4/3 + up to two characters of the original data
  arr = new Arr(len * 3 / 4 - placeHolders);

  // if there are placeholders, only get up to the last complete 4 chars
  l = placeHolders > 0 ? len - 4 : len;

  var L = 0;

  for (i = 0, j = 0; i < l; i += 4, j += 3) {
    tmp = (revLookup[b64.charCodeAt(i)] << 18) | (revLookup[b64.charCodeAt(i + 1)] << 12) | (revLookup[b64.charCodeAt(i + 2)] << 6) | revLookup[b64.charCodeAt(i + 3)];
    arr[L++] = (tmp >> 16) & 0xFF;
    arr[L++] = (tmp >> 8) & 0xFF;
    arr[L++] = tmp & 0xFF;
  }

  if (placeHolders === 2) {
    tmp = (revLookup[b64.charCodeAt(i)] << 2) | (revLookup[b64.charCodeAt(i + 1)] >> 4);
    arr[L++] = tmp & 0xFF;
  } else if (placeHolders === 1) {
    tmp = (revLookup[b64.charCodeAt(i)] << 10) | (revLookup[b64.charCodeAt(i + 1)] << 4) | (revLookup[b64.charCodeAt(i + 2)] >> 2);
    arr[L++] = (tmp >> 8) & 0xFF;
    arr[L++] = tmp & 0xFF;
  }

  return arr
}

function tripletToBase64 (num) {
  return lookup[num >> 18 & 0x3F] + lookup[num >> 12 & 0x3F] + lookup[num >> 6 & 0x3F] + lookup[num & 0x3F]
}

function encodeChunk (uint8, start, end) {
  var tmp;
  var output = [];
  for (var i = start; i < end; i += 3) {
    tmp = (uint8[i] << 16) + (uint8[i + 1] << 8) + (uint8[i + 2]);
    output.push(tripletToBase64(tmp));
  }
  return output.join('')
}

function fromByteArray (uint8) {
  if (!inited) {
    init();
  }
  var tmp;
  var len = uint8.length;
  var extraBytes = len % 3; // if we have 1 byte left, pad 2 bytes
  var output = '';
  var parts = [];
  var maxChunkLength = 16383; // must be multiple of 3

  // go through the array every three bytes, we'll deal with trailing stuff later
  for (var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) {
    parts.push(encodeChunk(uint8, i, (i + maxChunkLength) > len2 ? len2 : (i + maxChunkLength)));
  }

  // pad the end with zeros, but make sure to not forget the extra bytes
  if (extraBytes === 1) {
    tmp = uint8[len - 1];
    output += lookup[tmp >> 2];
    output += lookup[(tmp << 4) & 0x3F];
    output += '==';
  } else if (extraBytes === 2) {
    tmp = (uint8[len - 2] << 8) + (uint8[len - 1]);
    output += lookup[tmp >> 10];
    output += lookup[(tmp >> 4) & 0x3F];
    output += lookup[(tmp << 2) & 0x3F];
    output += '=';
  }

  parts.push(output);

  return parts.join('')
}

function read (buffer, offset, isLE, mLen, nBytes) {
  var e, m;
  var eLen = nBytes * 8 - mLen - 1;
  var eMax = (1 << eLen) - 1;
  var eBias = eMax >> 1;
  var nBits = -7;
  var i = isLE ? (nBytes - 1) : 0;
  var d = isLE ? -1 : 1;
  var s = buffer[offset + i];

  i += d;

  e = s & ((1 << (-nBits)) - 1);
  s >>= (-nBits);
  nBits += eLen;
  for (; nBits > 0; e = e * 256 + buffer[offset + i], i += d, nBits -= 8) {}

  m = e & ((1 << (-nBits)) - 1);
  e >>= (-nBits);
  nBits += mLen;
  for (; nBits > 0; m = m * 256 + buffer[offset + i], i += d, nBits -= 8) {}

  if (e === 0) {
    e = 1 - eBias;
  } else if (e === eMax) {
    return m ? NaN : ((s ? -1 : 1) * Infinity)
  } else {
    m = m + Math.pow(2, mLen);
    e = e - eBias;
  }
  return (s ? -1 : 1) * m * Math.pow(2, e - mLen)
}

function write (buffer, value, offset, isLE, mLen, nBytes) {
  var e, m, c;
  var eLen = nBytes * 8 - mLen - 1;
  var eMax = (1 << eLen) - 1;
  var eBias = eMax >> 1;
  var rt = (mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0);
  var i = isLE ? 0 : (nBytes - 1);
  var d = isLE ? 1 : -1;
  var s = value < 0 || (value === 0 && 1 / value < 0) ? 1 : 0;

  value = Math.abs(value);

  if (isNaN(value) || value === Infinity) {
    m = isNaN(value) ? 1 : 0;
    e = eMax;
  } else {
    e = Math.floor(Math.log(value) / Math.LN2);
    if (value * (c = Math.pow(2, -e)) < 1) {
      e--;
      c *= 2;
    }
    if (e + eBias >= 1) {
      value += rt / c;
    } else {
      value += rt * Math.pow(2, 1 - eBias);
    }
    if (value * c >= 2) {
      e++;
      c /= 2;
    }

    if (e + eBias >= eMax) {
      m = 0;
      e = eMax;
    } else if (e + eBias >= 1) {
      m = (value * c - 1) * Math.pow(2, mLen);
      e = e + eBias;
    } else {
      m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen);
      e = 0;
    }
  }

  for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}

  e = (e << mLen) | m;
  eLen += mLen;
  for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}

  buffer[offset + i - d] |= s * 128;
}

var toString = {}.toString;

var isArray$1 = Array.isArray || function (arr) {
  return toString.call(arr) == '[object Array]';
};

/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * @license  MIT
 */
/* eslint-disable no-proto */


var INSPECT_MAX_BYTES = 50;

/**
 * If `Buffer.TYPED_ARRAY_SUPPORT`:
 *   === true    Use Uint8Array implementation (fastest)
 *   === false   Use Object implementation (most compatible, even IE6)
 *
 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
 * Opera 11.6+, iOS 4.2+.
 *
 * Due to various browser bugs, sometimes the Object implementation will be used even
 * when the browser supports typed arrays.
 *
 * Note:
 *
 *   - Firefox 4-29 lacks support for adding new properties to `Uint8Array` instances,
 *     See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438.
 *
 *   - Chrome 9-10 is missing the `TypedArray.prototype.subarray` function.
 *
 *   - IE10 has a broken `TypedArray.prototype.subarray` function which returns arrays of
 *     incorrect length in some situations.

 * We detect these buggy browsers and set `Buffer.TYPED_ARRAY_SUPPORT` to `false` so they
 * get the Object implementation, which is slower but behaves correctly.
 */
Buffer.TYPED_ARRAY_SUPPORT = global$1.TYPED_ARRAY_SUPPORT !== undefined
  ? global$1.TYPED_ARRAY_SUPPORT
  : true;

function kMaxLength () {
  return Buffer.TYPED_ARRAY_SUPPORT
    ? 0x7fffffff
    : 0x3fffffff
}

function createBuffer (that, length) {
  if (kMaxLength() < length) {
    throw new RangeError('Invalid typed array length')
  }
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = new Uint8Array(length);
    that.__proto__ = Buffer.prototype;
  } else {
    // Fallback: Return an object instance of the Buffer class
    if (that === null) {
      that = new Buffer(length);
    }
    that.length = length;
  }

  return that
}

/**
 * The Buffer constructor returns instances of `Uint8Array` that have their
 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
 * and the `Uint8Array` methods. Square bracket notation works as expected -- it
 * returns a single octet.
 *
 * The `Uint8Array` prototype remains unmodified.
 */

function Buffer (arg, encodingOrOffset, length) {
  if (!Buffer.TYPED_ARRAY_SUPPORT && !(this instanceof Buffer)) {
    return new Buffer(arg, encodingOrOffset, length)
  }

  // Common case.
  if (typeof arg === 'number') {
    if (typeof encodingOrOffset === 'string') {
      throw new Error(
        'If encoding is specified then the first argument must be a string'
      )
    }
    return allocUnsafe(this, arg)
  }
  return from(this, arg, encodingOrOffset, length)
}

Buffer.poolSize = 8192; // not used by this implementation

// TODO: Legacy, not needed anymore. Remove in next major version.
Buffer._augment = function (arr) {
  arr.__proto__ = Buffer.prototype;
  return arr
};

function from (that, value, encodingOrOffset, length) {
  if (typeof value === 'number') {
    throw new TypeError('"value" argument must not be a number')
  }

  if (typeof ArrayBuffer !== 'undefined' && value instanceof ArrayBuffer) {
    return fromArrayBuffer(that, value, encodingOrOffset, length)
  }

  if (typeof value === 'string') {
    return fromString(that, value, encodingOrOffset)
  }

  return fromObject(that, value)
}

/**
 * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
 * if value is a number.
 * Buffer.from(str[, encoding])
 * Buffer.from(array)
 * Buffer.from(buffer)
 * Buffer.from(arrayBuffer[, byteOffset[, length]])
 **/
Buffer.from = function (value, encodingOrOffset, length) {
  return from(null, value, encodingOrOffset, length)
};

if (Buffer.TYPED_ARRAY_SUPPORT) {
  Buffer.prototype.__proto__ = Uint8Array.prototype;
  Buffer.__proto__ = Uint8Array;
  if (typeof Symbol !== 'undefined' && Symbol.species &&
      Buffer[Symbol.species] === Buffer) {
    // Fix subarray() in ES2016. See: https://github.com/feross/buffer/pull/97
    // Object.defineProperty(Buffer, Symbol.species, {
    //   value: null,
    //   configurable: true
    // })
  }
}

function assertSize (size) {
  if (typeof size !== 'number') {
    throw new TypeError('"size" argument must be a number')
  } else if (size < 0) {
    throw new RangeError('"size" argument must not be negative')
  }
}

function alloc (that, size, fill, encoding) {
  assertSize(size);
  if (size <= 0) {
    return createBuffer(that, size)
  }
  if (fill !== undefined) {
    // Only pay attention to encoding if it's a string. This
    // prevents accidentally sending in a number that would
    // be interpretted as a start offset.
    return typeof encoding === 'string'
      ? createBuffer(that, size).fill(fill, encoding)
      : createBuffer(that, size).fill(fill)
  }
  return createBuffer(that, size)
}

/**
 * Creates a new filled Buffer instance.
 * alloc(size[, fill[, encoding]])
 **/
Buffer.alloc = function (size, fill, encoding) {
  return alloc(null, size, fill, encoding)
};

function allocUnsafe (that, size) {
  assertSize(size);
  that = createBuffer(that, size < 0 ? 0 : checked(size) | 0);
  if (!Buffer.TYPED_ARRAY_SUPPORT) {
    for (var i = 0; i < size; ++i) {
      that[i] = 0;
    }
  }
  return that
}

/**
 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
 * */
Buffer.allocUnsafe = function (size) {
  return allocUnsafe(null, size)
};
/**
 * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
 */
Buffer.allocUnsafeSlow = function (size) {
  return allocUnsafe(null, size)
};

function fromString (that, string, encoding) {
  if (typeof encoding !== 'string' || encoding === '') {
    encoding = 'utf8';
  }

  if (!Buffer.isEncoding(encoding)) {
    throw new TypeError('"encoding" must be a valid string encoding')
  }

  var length = byteLength(string, encoding) | 0;
  that = createBuffer(that, length);

  var actual = that.write(string, encoding);

  if (actual !== length) {
    // Writing a hex string, for example, that contains invalid characters will
    // cause everything after the first invalid character to be ignored. (e.g.
    // 'abxxcd' will be treated as 'ab')
    that = that.slice(0, actual);
  }

  return that
}

function fromArrayLike (that, array) {
  var length = array.length < 0 ? 0 : checked(array.length) | 0;
  that = createBuffer(that, length);
  for (var i = 0; i < length; i += 1) {
    that[i] = array[i] & 255;
  }
  return that
}

function fromArrayBuffer (that, array, byteOffset, length) {
  array.byteLength; // this throws if `array` is not a valid ArrayBuffer

  if (byteOffset < 0 || array.byteLength < byteOffset) {
    throw new RangeError('\'offset\' is out of bounds')
  }

  if (array.byteLength < byteOffset + (length || 0)) {
    throw new RangeError('\'length\' is out of bounds')
  }

  if (byteOffset === undefined && length === undefined) {
    array = new Uint8Array(array);
  } else if (length === undefined) {
    array = new Uint8Array(array, byteOffset);
  } else {
    array = new Uint8Array(array, byteOffset, length);
  }

  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = array;
    that.__proto__ = Buffer.prototype;
  } else {
    // Fallback: Return an object instance of the Buffer class
    that = fromArrayLike(that, array);
  }
  return that
}

function fromObject (that, obj) {
  if (internalIsBuffer(obj)) {
    var len = checked(obj.length) | 0;
    that = createBuffer(that, len);

    if (that.length === 0) {
      return that
    }

    obj.copy(that, 0, 0, len);
    return that
  }

  if (obj) {
    if ((typeof ArrayBuffer !== 'undefined' &&
        obj.buffer instanceof ArrayBuffer) || 'length' in obj) {
      if (typeof obj.length !== 'number' || isnan(obj.length)) {
        return createBuffer(that, 0)
      }
      return fromArrayLike(that, obj)
    }

    if (obj.type === 'Buffer' && isArray$1(obj.data)) {
      return fromArrayLike(that, obj.data)
    }
  }

  throw new TypeError('First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.')
}

function checked (length) {
  // Note: cannot use `length < kMaxLength()` here because that fails when
  // length is NaN (which is otherwise coerced to zero.)
  if (length >= kMaxLength()) {
    throw new RangeError('Attempt to allocate Buffer larger than maximum ' +
                         'size: 0x' + kMaxLength().toString(16) + ' bytes')
  }
  return length | 0
}


Buffer.isBuffer = isBuffer$1;
function internalIsBuffer (b) {
  return !!(b != null && b._isBuffer)
}

Buffer.compare = function compare (a, b) {
  if (!internalIsBuffer(a) || !internalIsBuffer(b)) {
    throw new TypeError('Arguments must be Buffers')
  }

  if (a === b) return 0

  var x = a.length;
  var y = b.length;

  for (var i = 0, len = Math.min(x, y); i < len; ++i) {
    if (a[i] !== b[i]) {
      x = a[i];
      y = b[i];
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
};

Buffer.isEncoding = function isEncoding (encoding) {
  switch (String(encoding).toLowerCase()) {
    case 'hex':
    case 'utf8':
    case 'utf-8':
    case 'ascii':
    case 'latin1':
    case 'binary':
    case 'base64':
    case 'ucs2':
    case 'ucs-2':
    case 'utf16le':
    case 'utf-16le':
      return true
    default:
      return false
  }
};

Buffer.concat = function concat (list, length) {
  if (!isArray$1(list)) {
    throw new TypeError('"list" argument must be an Array of Buffers')
  }

  if (list.length === 0) {
    return Buffer.alloc(0)
  }

  var i;
  if (length === undefined) {
    length = 0;
    for (i = 0; i < list.length; ++i) {
      length += list[i].length;
    }
  }

  var buffer = Buffer.allocUnsafe(length);
  var pos = 0;
  for (i = 0; i < list.length; ++i) {
    var buf = list[i];
    if (!internalIsBuffer(buf)) {
      throw new TypeError('"list" argument must be an Array of Buffers')
    }
    buf.copy(buffer, pos);
    pos += buf.length;
  }
  return buffer
};

function byteLength (string, encoding) {
  if (internalIsBuffer(string)) {
    return string.length
  }
  if (typeof ArrayBuffer !== 'undefined' && typeof ArrayBuffer.isView === 'function' &&
      (ArrayBuffer.isView(string) || string instanceof ArrayBuffer)) {
    return string.byteLength
  }
  if (typeof string !== 'string') {
    string = '' + string;
  }

  var len = string.length;
  if (len === 0) return 0

  // Use a for loop to avoid recursion
  var loweredCase = false;
  for (;;) {
    switch (encoding) {
      case 'ascii':
      case 'latin1':
      case 'binary':
        return len
      case 'utf8':
      case 'utf-8':
      case undefined:
        return utf8ToBytes(string).length
      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return len * 2
      case 'hex':
        return len >>> 1
      case 'base64':
        return base64ToBytes(string).length
      default:
        if (loweredCase) return utf8ToBytes(string).length // assume utf8
        encoding = ('' + encoding).toLowerCase();
        loweredCase = true;
    }
  }
}
Buffer.byteLength = byteLength;

function slowToString (encoding, start, end) {
  var loweredCase = false;

  // No need to verify that "this.length <= MAX_UINT32" since it's a read-only
  // property of a typed array.

  // This behaves neither like String nor Uint8Array in that we set start/end
  // to their upper/lower bounds if the value passed is out of range.
  // undefined is handled specially as per ECMA-262 6th Edition,
  // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.
  if (start === undefined || start < 0) {
    start = 0;
  }
  // Return early if start > this.length. Done here to prevent potential uint32
  // coercion fail below.
  if (start > this.length) {
    return ''
  }

  if (end === undefined || end > this.length) {
    end = this.length;
  }

  if (end <= 0) {
    return ''
  }

  // Force coersion to uint32. This will also coerce falsey/NaN values to 0.
  end >>>= 0;
  start >>>= 0;

  if (end <= start) {
    return ''
  }

  if (!encoding) encoding = 'utf8';

  while (true) {
    switch (encoding) {
      case 'hex':
        return hexSlice(this, start, end)

      case 'utf8':
      case 'utf-8':
        return utf8Slice(this, start, end)

      case 'ascii':
        return asciiSlice(this, start, end)

      case 'latin1':
      case 'binary':
        return latin1Slice(this, start, end)

      case 'base64':
        return base64Slice(this, start, end)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return utf16leSlice(this, start, end)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = (encoding + '').toLowerCase();
        loweredCase = true;
    }
  }
}

// The property is used by `Buffer.isBuffer` and `is-buffer` (in Safari 5-7) to detect
// Buffer instances.
Buffer.prototype._isBuffer = true;

function swap (b, n, m) {
  var i = b[n];
  b[n] = b[m];
  b[m] = i;
}

Buffer.prototype.swap16 = function swap16 () {
  var len = this.length;
  if (len % 2 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 16-bits')
  }
  for (var i = 0; i < len; i += 2) {
    swap(this, i, i + 1);
  }
  return this
};

Buffer.prototype.swap32 = function swap32 () {
  var len = this.length;
  if (len % 4 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 32-bits')
  }
  for (var i = 0; i < len; i += 4) {
    swap(this, i, i + 3);
    swap(this, i + 1, i + 2);
  }
  return this
};

Buffer.prototype.swap64 = function swap64 () {
  var len = this.length;
  if (len % 8 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 64-bits')
  }
  for (var i = 0; i < len; i += 8) {
    swap(this, i, i + 7);
    swap(this, i + 1, i + 6);
    swap(this, i + 2, i + 5);
    swap(this, i + 3, i + 4);
  }
  return this
};

Buffer.prototype.toString = function toString () {
  var length = this.length | 0;
  if (length === 0) return ''
  if (arguments.length === 0) return utf8Slice(this, 0, length)
  return slowToString.apply(this, arguments)
};

Buffer.prototype.equals = function equals (b) {
  if (!internalIsBuffer(b)) throw new TypeError('Argument must be a Buffer')
  if (this === b) return true
  return Buffer.compare(this, b) === 0
};

Buffer.prototype.inspect = function inspect () {
  var str = '';
  var max = INSPECT_MAX_BYTES;
  if (this.length > 0) {
    str = this.toString('hex', 0, max).match(/.{2}/g).join(' ');
    if (this.length > max) str += ' ... ';
  }
  return '<Buffer ' + str + '>'
};

Buffer.prototype.compare = function compare (target, start, end, thisStart, thisEnd) {
  if (!internalIsBuffer(target)) {
    throw new TypeError('Argument must be a Buffer')
  }

  if (start === undefined) {
    start = 0;
  }
  if (end === undefined) {
    end = target ? target.length : 0;
  }
  if (thisStart === undefined) {
    thisStart = 0;
  }
  if (thisEnd === undefined) {
    thisEnd = this.length;
  }

  if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
    throw new RangeError('out of range index')
  }

  if (thisStart >= thisEnd && start >= end) {
    return 0
  }
  if (thisStart >= thisEnd) {
    return -1
  }
  if (start >= end) {
    return 1
  }

  start >>>= 0;
  end >>>= 0;
  thisStart >>>= 0;
  thisEnd >>>= 0;

  if (this === target) return 0

  var x = thisEnd - thisStart;
  var y = end - start;
  var len = Math.min(x, y);

  var thisCopy = this.slice(thisStart, thisEnd);
  var targetCopy = target.slice(start, end);

  for (var i = 0; i < len; ++i) {
    if (thisCopy[i] !== targetCopy[i]) {
      x = thisCopy[i];
      y = targetCopy[i];
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
};

// Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
// OR the last index of `val` in `buffer` at offset <= `byteOffset`.
//
// Arguments:
// - buffer - a Buffer to search
// - val - a string, Buffer, or number
// - byteOffset - an index into `buffer`; will be clamped to an int32
// - encoding - an optional encoding, relevant is val is a string
// - dir - true for indexOf, false for lastIndexOf
function bidirectionalIndexOf (buffer, val, byteOffset, encoding, dir) {
  // Empty buffer means no match
  if (buffer.length === 0) return -1

  // Normalize byteOffset
  if (typeof byteOffset === 'string') {
    encoding = byteOffset;
    byteOffset = 0;
  } else if (byteOffset > 0x7fffffff) {
    byteOffset = 0x7fffffff;
  } else if (byteOffset < -0x80000000) {
    byteOffset = -0x80000000;
  }
  byteOffset = +byteOffset;  // Coerce to Number.
  if (isNaN(byteOffset)) {
    // byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
    byteOffset = dir ? 0 : (buffer.length - 1);
  }

  // Normalize byteOffset: negative offsets start from the end of the buffer
  if (byteOffset < 0) byteOffset = buffer.length + byteOffset;
  if (byteOffset >= buffer.length) {
    if (dir) return -1
    else byteOffset = buffer.length - 1;
  } else if (byteOffset < 0) {
    if (dir) byteOffset = 0;
    else return -1
  }

  // Normalize val
  if (typeof val === 'string') {
    val = Buffer.from(val, encoding);
  }

  // Finally, search either indexOf (if dir is true) or lastIndexOf
  if (internalIsBuffer(val)) {
    // Special case: looking for empty string/buffer always fails
    if (val.length === 0) {
      return -1
    }
    return arrayIndexOf(buffer, val, byteOffset, encoding, dir)
  } else if (typeof val === 'number') {
    val = val & 0xFF; // Search for a byte value [0-255]
    if (Buffer.TYPED_ARRAY_SUPPORT &&
        typeof Uint8Array.prototype.indexOf === 'function') {
      if (dir) {
        return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset)
      } else {
        return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset)
      }
    }
    return arrayIndexOf(buffer, [ val ], byteOffset, encoding, dir)
  }

  throw new TypeError('val must be string, number or Buffer')
}

function arrayIndexOf (arr, val, byteOffset, encoding, dir) {
  var indexSize = 1;
  var arrLength = arr.length;
  var valLength = val.length;

  if (encoding !== undefined) {
    encoding = String(encoding).toLowerCase();
    if (encoding === 'ucs2' || encoding === 'ucs-2' ||
        encoding === 'utf16le' || encoding === 'utf-16le') {
      if (arr.length < 2 || val.length < 2) {
        return -1
      }
      indexSize = 2;
      arrLength /= 2;
      valLength /= 2;
      byteOffset /= 2;
    }
  }

  function read$$1 (buf, i) {
    if (indexSize === 1) {
      return buf[i]
    } else {
      return buf.readUInt16BE(i * indexSize)
    }
  }

  var i;
  if (dir) {
    var foundIndex = -1;
    for (i = byteOffset; i < arrLength; i++) {
      if (read$$1(arr, i) === read$$1(val, foundIndex === -1 ? 0 : i - foundIndex)) {
        if (foundIndex === -1) foundIndex = i;
        if (i - foundIndex + 1 === valLength) return foundIndex * indexSize
      } else {
        if (foundIndex !== -1) i -= i - foundIndex;
        foundIndex = -1;
      }
    }
  } else {
    if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength;
    for (i = byteOffset; i >= 0; i--) {
      var found = true;
      for (var j = 0; j < valLength; j++) {
        if (read$$1(arr, i + j) !== read$$1(val, j)) {
          found = false;
          break
        }
      }
      if (found) return i
    }
  }

  return -1
}

Buffer.prototype.includes = function includes (val, byteOffset, encoding) {
  return this.indexOf(val, byteOffset, encoding) !== -1
};

Buffer.prototype.indexOf = function indexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, true)
};

Buffer.prototype.lastIndexOf = function lastIndexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, false)
};

function hexWrite (buf, string, offset, length) {
  offset = Number(offset) || 0;
  var remaining = buf.length - offset;
  if (!length) {
    length = remaining;
  } else {
    length = Number(length);
    if (length > remaining) {
      length = remaining;
    }
  }

  // must be an even number of digits
  var strLen = string.length;
  if (strLen % 2 !== 0) throw new TypeError('Invalid hex string')

  if (length > strLen / 2) {
    length = strLen / 2;
  }
  for (var i = 0; i < length; ++i) {
    var parsed = parseInt(string.substr(i * 2, 2), 16);
    if (isNaN(parsed)) return i
    buf[offset + i] = parsed;
  }
  return i
}

function utf8Write (buf, string, offset, length) {
  return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length)
}

function asciiWrite (buf, string, offset, length) {
  return blitBuffer(asciiToBytes(string), buf, offset, length)
}

function latin1Write (buf, string, offset, length) {
  return asciiWrite(buf, string, offset, length)
}

function base64Write (buf, string, offset, length) {
  return blitBuffer(base64ToBytes(string), buf, offset, length)
}

function ucs2Write (buf, string, offset, length) {
  return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length)
}

Buffer.prototype.write = function write$$1 (string, offset, length, encoding) {
  // Buffer#write(string)
  if (offset === undefined) {
    encoding = 'utf8';
    length = this.length;
    offset = 0;
  // Buffer#write(string, encoding)
  } else if (length === undefined && typeof offset === 'string') {
    encoding = offset;
    length = this.length;
    offset = 0;
  // Buffer#write(string, offset[, length][, encoding])
  } else if (isFinite(offset)) {
    offset = offset | 0;
    if (isFinite(length)) {
      length = length | 0;
      if (encoding === undefined) encoding = 'utf8';
    } else {
      encoding = length;
      length = undefined;
    }
  // legacy write(string, encoding, offset, length) - remove in v0.13
  } else {
    throw new Error(
      'Buffer.write(string, encoding, offset[, length]) is no longer supported'
    )
  }

  var remaining = this.length - offset;
  if (length === undefined || length > remaining) length = remaining;

  if ((string.length > 0 && (length < 0 || offset < 0)) || offset > this.length) {
    throw new RangeError('Attempt to write outside buffer bounds')
  }

  if (!encoding) encoding = 'utf8';

  var loweredCase = false;
  for (;;) {
    switch (encoding) {
      case 'hex':
        return hexWrite(this, string, offset, length)

      case 'utf8':
      case 'utf-8':
        return utf8Write(this, string, offset, length)

      case 'ascii':
        return asciiWrite(this, string, offset, length)

      case 'latin1':
      case 'binary':
        return latin1Write(this, string, offset, length)

      case 'base64':
        // Warning: maxLength not taken into account in base64Write
        return base64Write(this, string, offset, length)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return ucs2Write(this, string, offset, length)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = ('' + encoding).toLowerCase();
        loweredCase = true;
    }
  }
};

Buffer.prototype.toJSON = function toJSON () {
  return {
    type: 'Buffer',
    data: Array.prototype.slice.call(this._arr || this, 0)
  }
};

function base64Slice (buf, start, end) {
  if (start === 0 && end === buf.length) {
    return fromByteArray(buf)
  } else {
    return fromByteArray(buf.slice(start, end))
  }
}

function utf8Slice (buf, start, end) {
  end = Math.min(buf.length, end);
  var res = [];

  var i = start;
  while (i < end) {
    var firstByte = buf[i];
    var codePoint = null;
    var bytesPerSequence = (firstByte > 0xEF) ? 4
      : (firstByte > 0xDF) ? 3
      : (firstByte > 0xBF) ? 2
      : 1;

    if (i + bytesPerSequence <= end) {
      var secondByte, thirdByte, fourthByte, tempCodePoint;

      switch (bytesPerSequence) {
        case 1:
          if (firstByte < 0x80) {
            codePoint = firstByte;
          }
          break
        case 2:
          secondByte = buf[i + 1];
          if ((secondByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0x1F) << 0x6 | (secondByte & 0x3F);
            if (tempCodePoint > 0x7F) {
              codePoint = tempCodePoint;
            }
          }
          break
        case 3:
          secondByte = buf[i + 1];
          thirdByte = buf[i + 2];
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | (thirdByte & 0x3F);
            if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) {
              codePoint = tempCodePoint;
            }
          }
          break
        case 4:
          secondByte = buf[i + 1];
          thirdByte = buf[i + 2];
          fourthByte = buf[i + 3];
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | (fourthByte & 0x3F);
            if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) {
              codePoint = tempCodePoint;
            }
          }
      }
    }

    if (codePoint === null) {
      // we did not generate a valid codePoint so insert a
      // replacement char (U+FFFD) and advance only 1 byte
      codePoint = 0xFFFD;
      bytesPerSequence = 1;
    } else if (codePoint > 0xFFFF) {
      // encode to utf16 (surrogate pair dance)
      codePoint -= 0x10000;
      res.push(codePoint >>> 10 & 0x3FF | 0xD800);
      codePoint = 0xDC00 | codePoint & 0x3FF;
    }

    res.push(codePoint);
    i += bytesPerSequence;
  }

  return decodeCodePointsArray(res)
}

// Based on http://stackoverflow.com/a/22747272/680742, the browser with
// the lowest limit is Chrome, with 0x10000 args.
// We go 1 magnitude less, for safety
var MAX_ARGUMENTS_LENGTH = 0x1000;

function decodeCodePointsArray (codePoints) {
  var len = codePoints.length;
  if (len <= MAX_ARGUMENTS_LENGTH) {
    return String.fromCharCode.apply(String, codePoints) // avoid extra slice()
  }

  // Decode in chunks to avoid "call stack size exceeded".
  var res = '';
  var i = 0;
  while (i < len) {
    res += String.fromCharCode.apply(
      String,
      codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH)
    );
  }
  return res
}

function asciiSlice (buf, start, end) {
  var ret = '';
  end = Math.min(buf.length, end);

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i] & 0x7F);
  }
  return ret
}

function latin1Slice (buf, start, end) {
  var ret = '';
  end = Math.min(buf.length, end);

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i]);
  }
  return ret
}

function hexSlice (buf, start, end) {
  var len = buf.length;

  if (!start || start < 0) start = 0;
  if (!end || end < 0 || end > len) end = len;

  var out = '';
  for (var i = start; i < end; ++i) {
    out += toHex(buf[i]);
  }
  return out
}

function utf16leSlice (buf, start, end) {
  var bytes = buf.slice(start, end);
  var res = '';
  for (var i = 0; i < bytes.length; i += 2) {
    res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256);
  }
  return res
}

Buffer.prototype.slice = function slice (start, end) {
  var len = this.length;
  start = ~~start;
  end = end === undefined ? len : ~~end;

  if (start < 0) {
    start += len;
    if (start < 0) start = 0;
  } else if (start > len) {
    start = len;
  }

  if (end < 0) {
    end += len;
    if (end < 0) end = 0;
  } else if (end > len) {
    end = len;
  }

  if (end < start) end = start;

  var newBuf;
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    newBuf = this.subarray(start, end);
    newBuf.__proto__ = Buffer.prototype;
  } else {
    var sliceLen = end - start;
    newBuf = new Buffer(sliceLen, undefined);
    for (var i = 0; i < sliceLen; ++i) {
      newBuf[i] = this[i + start];
    }
  }

  return newBuf
};

/*
 * Need to make sure that buffer isn't trying to write out of bounds.
 */
function checkOffset (offset, ext, length) {
  if ((offset % 1) !== 0 || offset < 0) throw new RangeError('offset is not uint')
  if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length')
}

Buffer.prototype.readUIntLE = function readUIntLE (offset, byteLength, noAssert) {
  offset = offset | 0;
  byteLength = byteLength | 0;
  if (!noAssert) checkOffset(offset, byteLength, this.length);

  var val = this[offset];
  var mul = 1;
  var i = 0;
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul;
  }

  return val
};

Buffer.prototype.readUIntBE = function readUIntBE (offset, byteLength, noAssert) {
  offset = offset | 0;
  byteLength = byteLength | 0;
  if (!noAssert) {
    checkOffset(offset, byteLength, this.length);
  }

  var val = this[offset + --byteLength];
  var mul = 1;
  while (byteLength > 0 && (mul *= 0x100)) {
    val += this[offset + --byteLength] * mul;
  }

  return val
};

Buffer.prototype.readUInt8 = function readUInt8 (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length);
  return this[offset]
};

Buffer.prototype.readUInt16LE = function readUInt16LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length);
  return this[offset] | (this[offset + 1] << 8)
};

Buffer.prototype.readUInt16BE = function readUInt16BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length);
  return (this[offset] << 8) | this[offset + 1]
};

Buffer.prototype.readUInt32LE = function readUInt32LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length);

  return ((this[offset]) |
      (this[offset + 1] << 8) |
      (this[offset + 2] << 16)) +
      (this[offset + 3] * 0x1000000)
};

Buffer.prototype.readUInt32BE = function readUInt32BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length);

  return (this[offset] * 0x1000000) +
    ((this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    this[offset + 3])
};

Buffer.prototype.readIntLE = function readIntLE (offset, byteLength, noAssert) {
  offset = offset | 0;
  byteLength = byteLength | 0;
  if (!noAssert) checkOffset(offset, byteLength, this.length);

  var val = this[offset];
  var mul = 1;
  var i = 0;
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul;
  }
  mul *= 0x80;

  if (val >= mul) val -= Math.pow(2, 8 * byteLength);

  return val
};

Buffer.prototype.readIntBE = function readIntBE (offset, byteLength, noAssert) {
  offset = offset | 0;
  byteLength = byteLength | 0;
  if (!noAssert) checkOffset(offset, byteLength, this.length);

  var i = byteLength;
  var mul = 1;
  var val = this[offset + --i];
  while (i > 0 && (mul *= 0x100)) {
    val += this[offset + --i] * mul;
  }
  mul *= 0x80;

  if (val >= mul) val -= Math.pow(2, 8 * byteLength);

  return val
};

Buffer.prototype.readInt8 = function readInt8 (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length);
  if (!(this[offset] & 0x80)) return (this[offset])
  return ((0xff - this[offset] + 1) * -1)
};

Buffer.prototype.readInt16LE = function readInt16LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length);
  var val = this[offset] | (this[offset + 1] << 8);
  return (val & 0x8000) ? val | 0xFFFF0000 : val
};

Buffer.prototype.readInt16BE = function readInt16BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length);
  var val = this[offset + 1] | (this[offset] << 8);
  return (val & 0x8000) ? val | 0xFFFF0000 : val
};

Buffer.prototype.readInt32LE = function readInt32LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length);

  return (this[offset]) |
    (this[offset + 1] << 8) |
    (this[offset + 2] << 16) |
    (this[offset + 3] << 24)
};

Buffer.prototype.readInt32BE = function readInt32BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length);

  return (this[offset] << 24) |
    (this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    (this[offset + 3])
};

Buffer.prototype.readFloatLE = function readFloatLE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length);
  return read(this, offset, true, 23, 4)
};

Buffer.prototype.readFloatBE = function readFloatBE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length);
  return read(this, offset, false, 23, 4)
};

Buffer.prototype.readDoubleLE = function readDoubleLE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length);
  return read(this, offset, true, 52, 8)
};

Buffer.prototype.readDoubleBE = function readDoubleBE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length);
  return read(this, offset, false, 52, 8)
};

function checkInt (buf, value, offset, ext, max, min) {
  if (!internalIsBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance')
  if (value > max || value < min) throw new RangeError('"value" argument is out of bounds')
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
}

Buffer.prototype.writeUIntLE = function writeUIntLE (value, offset, byteLength, noAssert) {
  value = +value;
  offset = offset | 0;
  byteLength = byteLength | 0;
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1;
    checkInt(this, value, offset, byteLength, maxBytes, 0);
  }

  var mul = 1;
  var i = 0;
  this[offset] = value & 0xFF;
  while (++i < byteLength && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF;
  }

  return offset + byteLength
};

Buffer.prototype.writeUIntBE = function writeUIntBE (value, offset, byteLength, noAssert) {
  value = +value;
  offset = offset | 0;
  byteLength = byteLength | 0;
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1;
    checkInt(this, value, offset, byteLength, maxBytes, 0);
  }

  var i = byteLength - 1;
  var mul = 1;
  this[offset + i] = value & 0xFF;
  while (--i >= 0 && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF;
  }

  return offset + byteLength
};

Buffer.prototype.writeUInt8 = function writeUInt8 (value, offset, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0);
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value);
  this[offset] = (value & 0xff);
  return offset + 1
};

function objectWriteUInt16 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffff + value + 1;
  for (var i = 0, j = Math.min(buf.length - offset, 2); i < j; ++i) {
    buf[offset + i] = (value & (0xff << (8 * (littleEndian ? i : 1 - i)))) >>>
      (littleEndian ? i : 1 - i) * 8;
  }
}

Buffer.prototype.writeUInt16LE = function writeUInt16LE (value, offset, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0);
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff);
    this[offset + 1] = (value >>> 8);
  } else {
    objectWriteUInt16(this, value, offset, true);
  }
  return offset + 2
};

Buffer.prototype.writeUInt16BE = function writeUInt16BE (value, offset, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0);
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8);
    this[offset + 1] = (value & 0xff);
  } else {
    objectWriteUInt16(this, value, offset, false);
  }
  return offset + 2
};

function objectWriteUInt32 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffffffff + value + 1;
  for (var i = 0, j = Math.min(buf.length - offset, 4); i < j; ++i) {
    buf[offset + i] = (value >>> (littleEndian ? i : 3 - i) * 8) & 0xff;
  }
}

Buffer.prototype.writeUInt32LE = function writeUInt32LE (value, offset, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0);
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset + 3] = (value >>> 24);
    this[offset + 2] = (value >>> 16);
    this[offset + 1] = (value >>> 8);
    this[offset] = (value & 0xff);
  } else {
    objectWriteUInt32(this, value, offset, true);
  }
  return offset + 4
};

Buffer.prototype.writeUInt32BE = function writeUInt32BE (value, offset, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0);
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24);
    this[offset + 1] = (value >>> 16);
    this[offset + 2] = (value >>> 8);
    this[offset + 3] = (value & 0xff);
  } else {
    objectWriteUInt32(this, value, offset, false);
  }
  return offset + 4
};

Buffer.prototype.writeIntLE = function writeIntLE (value, offset, byteLength, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1);

    checkInt(this, value, offset, byteLength, limit - 1, -limit);
  }

  var i = 0;
  var mul = 1;
  var sub = 0;
  this[offset] = value & 0xFF;
  while (++i < byteLength && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
      sub = 1;
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF;
  }

  return offset + byteLength
};

Buffer.prototype.writeIntBE = function writeIntBE (value, offset, byteLength, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1);

    checkInt(this, value, offset, byteLength, limit - 1, -limit);
  }

  var i = byteLength - 1;
  var mul = 1;
  var sub = 0;
  this[offset + i] = value & 0xFF;
  while (--i >= 0 && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
      sub = 1;
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF;
  }

  return offset + byteLength
};

Buffer.prototype.writeInt8 = function writeInt8 (value, offset, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -0x80);
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value);
  if (value < 0) value = 0xff + value + 1;
  this[offset] = (value & 0xff);
  return offset + 1
};

Buffer.prototype.writeInt16LE = function writeInt16LE (value, offset, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000);
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff);
    this[offset + 1] = (value >>> 8);
  } else {
    objectWriteUInt16(this, value, offset, true);
  }
  return offset + 2
};

Buffer.prototype.writeInt16BE = function writeInt16BE (value, offset, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000);
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8);
    this[offset + 1] = (value & 0xff);
  } else {
    objectWriteUInt16(this, value, offset, false);
  }
  return offset + 2
};

Buffer.prototype.writeInt32LE = function writeInt32LE (value, offset, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000);
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff);
    this[offset + 1] = (value >>> 8);
    this[offset + 2] = (value >>> 16);
    this[offset + 3] = (value >>> 24);
  } else {
    objectWriteUInt32(this, value, offset, true);
  }
  return offset + 4
};

Buffer.prototype.writeInt32BE = function writeInt32BE (value, offset, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000);
  if (value < 0) value = 0xffffffff + value + 1;
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24);
    this[offset + 1] = (value >>> 16);
    this[offset + 2] = (value >>> 8);
    this[offset + 3] = (value & 0xff);
  } else {
    objectWriteUInt32(this, value, offset, false);
  }
  return offset + 4
};

function checkIEEE754 (buf, value, offset, ext, max, min) {
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
  if (offset < 0) throw new RangeError('Index out of range')
}

function writeFloat (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -3.4028234663852886e+38);
  }
  write(buf, value, offset, littleEndian, 23, 4);
  return offset + 4
}

Buffer.prototype.writeFloatLE = function writeFloatLE (value, offset, noAssert) {
  return writeFloat(this, value, offset, true, noAssert)
};

Buffer.prototype.writeFloatBE = function writeFloatBE (value, offset, noAssert) {
  return writeFloat(this, value, offset, false, noAssert)
};

function writeDouble (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -1.7976931348623157E+308);
  }
  write(buf, value, offset, littleEndian, 52, 8);
  return offset + 8
}

Buffer.prototype.writeDoubleLE = function writeDoubleLE (value, offset, noAssert) {
  return writeDouble(this, value, offset, true, noAssert)
};

Buffer.prototype.writeDoubleBE = function writeDoubleBE (value, offset, noAssert) {
  return writeDouble(this, value, offset, false, noAssert)
};

// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
Buffer.prototype.copy = function copy (target, targetStart, start, end) {
  if (!start) start = 0;
  if (!end && end !== 0) end = this.length;
  if (targetStart >= target.length) targetStart = target.length;
  if (!targetStart) targetStart = 0;
  if (end > 0 && end < start) end = start;

  // Copy 0 bytes; we're done
  if (end === start) return 0
  if (target.length === 0 || this.length === 0) return 0

  // Fatal error conditions
  if (targetStart < 0) {
    throw new RangeError('targetStart out of bounds')
  }
  if (start < 0 || start >= this.length) throw new RangeError('sourceStart out of bounds')
  if (end < 0) throw new RangeError('sourceEnd out of bounds')

  // Are we oob?
  if (end > this.length) end = this.length;
  if (target.length - targetStart < end - start) {
    end = target.length - targetStart + start;
  }

  var len = end - start;
  var i;

  if (this === target && start < targetStart && targetStart < end) {
    // descending copy from end
    for (i = len - 1; i >= 0; --i) {
      target[i + targetStart] = this[i + start];
    }
  } else if (len < 1000 || !Buffer.TYPED_ARRAY_SUPPORT) {
    // ascending copy from start
    for (i = 0; i < len; ++i) {
      target[i + targetStart] = this[i + start];
    }
  } else {
    Uint8Array.prototype.set.call(
      target,
      this.subarray(start, start + len),
      targetStart
    );
  }

  return len
};

// Usage:
//    buffer.fill(number[, offset[, end]])
//    buffer.fill(buffer[, offset[, end]])
//    buffer.fill(string[, offset[, end]][, encoding])
Buffer.prototype.fill = function fill (val, start, end, encoding) {
  // Handle string cases:
  if (typeof val === 'string') {
    if (typeof start === 'string') {
      encoding = start;
      start = 0;
      end = this.length;
    } else if (typeof end === 'string') {
      encoding = end;
      end = this.length;
    }
    if (val.length === 1) {
      var code = val.charCodeAt(0);
      if (code < 256) {
        val = code;
      }
    }
    if (encoding !== undefined && typeof encoding !== 'string') {
      throw new TypeError('encoding must be a string')
    }
    if (typeof encoding === 'string' && !Buffer.isEncoding(encoding)) {
      throw new TypeError('Unknown encoding: ' + encoding)
    }
  } else if (typeof val === 'number') {
    val = val & 255;
  }

  // Invalid ranges are not set to a default, so can range check early.
  if (start < 0 || this.length < start || this.length < end) {
    throw new RangeError('Out of range index')
  }

  if (end <= start) {
    return this
  }

  start = start >>> 0;
  end = end === undefined ? this.length : end >>> 0;

  if (!val) val = 0;

  var i;
  if (typeof val === 'number') {
    for (i = start; i < end; ++i) {
      this[i] = val;
    }
  } else {
    var bytes = internalIsBuffer(val)
      ? val
      : utf8ToBytes(new Buffer(val, encoding).toString());
    var len = bytes.length;
    for (i = 0; i < end - start; ++i) {
      this[i + start] = bytes[i % len];
    }
  }

  return this
};

// HELPER FUNCTIONS
// ================

var INVALID_BASE64_RE = /[^+\/0-9A-Za-z-_]/g;

function base64clean (str) {
  // Node strips out invalid characters like \n and \t from the string, base64-js does not
  str = stringtrim(str).replace(INVALID_BASE64_RE, '');
  // Node converts strings with length < 2 to ''
  if (str.length < 2) return ''
  // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
  while (str.length % 4 !== 0) {
    str = str + '=';
  }
  return str
}

function stringtrim (str) {
  if (str.trim) return str.trim()
  return str.replace(/^\s+|\s+$/g, '')
}

function toHex (n) {
  if (n < 16) return '0' + n.toString(16)
  return n.toString(16)
}

function utf8ToBytes (string, units) {
  units = units || Infinity;
  var codePoint;
  var length = string.length;
  var leadSurrogate = null;
  var bytes = [];

  for (var i = 0; i < length; ++i) {
    codePoint = string.charCodeAt(i);

    // is surrogate component
    if (codePoint > 0xD7FF && codePoint < 0xE000) {
      // last char was a lead
      if (!leadSurrogate) {
        // no lead yet
        if (codePoint > 0xDBFF) {
          // unexpected trail
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
          continue
        } else if (i + 1 === length) {
          // unpaired lead
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
          continue
        }

        // valid lead
        leadSurrogate = codePoint;

        continue
      }

      // 2 leads in a row
      if (codePoint < 0xDC00) {
        if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
        leadSurrogate = codePoint;
        continue
      }

      // valid surrogate pair
      codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000;
    } else if (leadSurrogate) {
      // valid bmp char, but last char was a lead
      if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
    }

    leadSurrogate = null;

    // encode utf8
    if (codePoint < 0x80) {
      if ((units -= 1) < 0) break
      bytes.push(codePoint);
    } else if (codePoint < 0x800) {
      if ((units -= 2) < 0) break
      bytes.push(
        codePoint >> 0x6 | 0xC0,
        codePoint & 0x3F | 0x80
      );
    } else if (codePoint < 0x10000) {
      if ((units -= 3) < 0) break
      bytes.push(
        codePoint >> 0xC | 0xE0,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      );
    } else if (codePoint < 0x110000) {
      if ((units -= 4) < 0) break
      bytes.push(
        codePoint >> 0x12 | 0xF0,
        codePoint >> 0xC & 0x3F | 0x80,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      );
    } else {
      throw new Error('Invalid code point')
    }
  }

  return bytes
}

function asciiToBytes (str) {
  var byteArray = [];
  for (var i = 0; i < str.length; ++i) {
    // Node's code seems to be doing this and not & 0x7F..
    byteArray.push(str.charCodeAt(i) & 0xFF);
  }
  return byteArray
}

function utf16leToBytes (str, units) {
  var c, hi, lo;
  var byteArray = [];
  for (var i = 0; i < str.length; ++i) {
    if ((units -= 2) < 0) break

    c = str.charCodeAt(i);
    hi = c >> 8;
    lo = c % 256;
    byteArray.push(lo);
    byteArray.push(hi);
  }

  return byteArray
}


function base64ToBytes (str) {
  return toByteArray(base64clean(str))
}

function blitBuffer (src, dst, offset, length) {
  for (var i = 0; i < length; ++i) {
    if ((i + offset >= dst.length) || (i >= src.length)) break
    dst[i + offset] = src[i];
  }
  return i
}

function isnan (val) {
  return val !== val // eslint-disable-line no-self-compare
}


// the following is from is-buffer, also by Feross Aboukhadijeh and with same lisence
// The _isBuffer check is for Safari 5-7 support, because it's missing
// Object.prototype.constructor. Remove this eventually
function isBuffer$1(obj) {
  return obj != null && (!!obj._isBuffer || isFastBuffer(obj) || isSlowBuffer(obj))
}

function isFastBuffer (obj) {
  return !!obj.constructor && typeof obj.constructor.isBuffer === 'function' && obj.constructor.isBuffer(obj)
}

// For Node v0.10 support. Remove this eventually.
function isSlowBuffer (obj) {
  return typeof obj.readFloatLE === 'function' && typeof obj.slice === 'function' && isFastBuffer(obj.slice(0, 0))
}

var inherits;
if (typeof Object.create === 'function'){
  inherits = function inherits(ctor, superCtor) {
    // implementation from standard node.js 'util' module
    ctor.super_ = superCtor;
    ctor.prototype = Object.create(superCtor.prototype, {
      constructor: {
        value: ctor,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
  };
} else {
  inherits = function inherits(ctor, superCtor) {
    ctor.super_ = superCtor;
    var TempCtor = function () {};
    TempCtor.prototype = superCtor.prototype;
    ctor.prototype = new TempCtor();
    ctor.prototype.constructor = ctor;
  };
}
var inherits$1 = inherits;

// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.
var formatRegExp = /%[sdj%]/g;
function format(f) {
  if (!isString(f)) {
    var objects = [];
    for (var i = 0; i < arguments.length; i++) {
      objects.push(inspect(arguments[i]));
    }
    return objects.join(' ');
  }

  var i = 1;
  var args = arguments;
  var len = args.length;
  var str = String(f).replace(formatRegExp, function(x) {
    if (x === '%%') return '%';
    if (i >= len) return x;
    switch (x) {
      case '%s': return String(args[i++]);
      case '%d': return Number(args[i++]);
      case '%j':
        try {
          return JSON.stringify(args[i++]);
        } catch (_) {
          return '[Circular]';
        }
      default:
        return x;
    }
  });
  for (var x = args[i]; i < len; x = args[++i]) {
    if (isNull(x) || !isObject(x)) {
      str += ' ' + x;
    } else {
      str += ' ' + inspect(x);
    }
  }
  return str;
}


// Mark that a method should not be used.
// Returns a modified function which warns once by default.
// If --no-deprecation is set, then it is a no-op.
function deprecate(fn, msg) {
  // Allow for deprecating things in the process of starting up.
  if (isUndefined(global$1.process)) {
    return function() {
      return deprecate(fn, msg).apply(this, arguments);
    };
  }

  if (process.noDeprecation === true) {
    return fn;
  }

  var warned = false;
  function deprecated() {
    if (!warned) {
      if (process.throwDeprecation) {
        throw new Error(msg);
      } else if (process.traceDeprecation) {
        console.trace(msg);
      } else {
        console.error(msg);
      }
      warned = true;
    }
    return fn.apply(this, arguments);
  }

  return deprecated;
}


var debugs = {};
var debugEnviron;
function debuglog(set) {
  if (isUndefined(debugEnviron))
    debugEnviron = process.env.NODE_DEBUG || '';
  set = set.toUpperCase();
  if (!debugs[set]) {
    if (new RegExp('\\b' + set + '\\b', 'i').test(debugEnviron)) {
      var pid = 0;
      debugs[set] = function() {
        var msg = format.apply(null, arguments);
        console.error('%s %d: %s', set, pid, msg);
      };
    } else {
      debugs[set] = function() {};
    }
  }
  return debugs[set];
}


/**
 * Echos the value of a value. Trys to print the value out
 * in the best way possible given the different types.
 *
 * @param {Object} obj The object to print out.
 * @param {Object} opts Optional options object that alters the output.
 */
/* legacy: obj, showHidden, depth, colors*/
function inspect(obj, opts) {
  // default options
  var ctx = {
    seen: [],
    stylize: stylizeNoColor
  };
  // legacy...
  if (arguments.length >= 3) ctx.depth = arguments[2];
  if (arguments.length >= 4) ctx.colors = arguments[3];
  if (isBoolean(opts)) {
    // legacy...
    ctx.showHidden = opts;
  } else if (opts) {
    // got an "options" object
    _extend(ctx, opts);
  }
  // set default options
  if (isUndefined(ctx.showHidden)) ctx.showHidden = false;
  if (isUndefined(ctx.depth)) ctx.depth = 2;
  if (isUndefined(ctx.colors)) ctx.colors = false;
  if (isUndefined(ctx.customInspect)) ctx.customInspect = true;
  if (ctx.colors) ctx.stylize = stylizeWithColor;
  return formatValue(ctx, obj, ctx.depth);
}

// http://en.wikipedia.org/wiki/ANSI_escape_code#graphics
inspect.colors = {
  'bold' : [1, 22],
  'italic' : [3, 23],
  'underline' : [4, 24],
  'inverse' : [7, 27],
  'white' : [37, 39],
  'grey' : [90, 39],
  'black' : [30, 39],
  'blue' : [34, 39],
  'cyan' : [36, 39],
  'green' : [32, 39],
  'magenta' : [35, 39],
  'red' : [31, 39],
  'yellow' : [33, 39]
};

// Don't use 'blue' not visible on cmd.exe
inspect.styles = {
  'special': 'cyan',
  'number': 'yellow',
  'boolean': 'yellow',
  'undefined': 'grey',
  'null': 'bold',
  'string': 'green',
  'date': 'magenta',
  // "name": intentionally not styling
  'regexp': 'red'
};


function stylizeWithColor(str, styleType) {
  var style = inspect.styles[styleType];

  if (style) {
    return '\u001b[' + inspect.colors[style][0] + 'm' + str +
           '\u001b[' + inspect.colors[style][1] + 'm';
  } else {
    return str;
  }
}


function stylizeNoColor(str, styleType) {
  return str;
}


function arrayToHash(array) {
  var hash = {};

  array.forEach(function(val, idx) {
    hash[val] = true;
  });

  return hash;
}


function formatValue(ctx, value, recurseTimes) {
  // Provide a hook for user-specified inspect functions.
  // Check that value is an object with an inspect function on it
  if (ctx.customInspect &&
      value &&
      isFunction(value.inspect) &&
      // Filter out the util module, it's inspect function is special
      value.inspect !== inspect &&
      // Also filter out any prototype objects using the circular check.
      !(value.constructor && value.constructor.prototype === value)) {
    var ret = value.inspect(recurseTimes, ctx);
    if (!isString(ret)) {
      ret = formatValue(ctx, ret, recurseTimes);
    }
    return ret;
  }

  // Primitive types cannot have properties
  var primitive = formatPrimitive(ctx, value);
  if (primitive) {
    return primitive;
  }

  // Look up the keys of the object.
  var keys = Object.keys(value);
  var visibleKeys = arrayToHash(keys);

  if (ctx.showHidden) {
    keys = Object.getOwnPropertyNames(value);
  }

  // IE doesn't make error fields non-enumerable
  // http://msdn.microsoft.com/en-us/library/ie/dww52sbt(v=vs.94).aspx
  if (isError(value)
      && (keys.indexOf('message') >= 0 || keys.indexOf('description') >= 0)) {
    return formatError(value);
  }

  // Some type of object without properties can be shortcutted.
  if (keys.length === 0) {
    if (isFunction(value)) {
      var name = value.name ? ': ' + value.name : '';
      return ctx.stylize('[Function' + name + ']', 'special');
    }
    if (isRegExp(value)) {
      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
    }
    if (isDate(value)) {
      return ctx.stylize(Date.prototype.toString.call(value), 'date');
    }
    if (isError(value)) {
      return formatError(value);
    }
  }

  var base = '', array = false, braces = ['{', '}'];

  // Make Array say that they are Array
  if (isArray(value)) {
    array = true;
    braces = ['[', ']'];
  }

  // Make functions say that they are functions
  if (isFunction(value)) {
    var n = value.name ? ': ' + value.name : '';
    base = ' [Function' + n + ']';
  }

  // Make RegExps say that they are RegExps
  if (isRegExp(value)) {
    base = ' ' + RegExp.prototype.toString.call(value);
  }

  // Make dates with properties first say the date
  if (isDate(value)) {
    base = ' ' + Date.prototype.toUTCString.call(value);
  }

  // Make error with message first say the error
  if (isError(value)) {
    base = ' ' + formatError(value);
  }

  if (keys.length === 0 && (!array || value.length == 0)) {
    return braces[0] + base + braces[1];
  }

  if (recurseTimes < 0) {
    if (isRegExp(value)) {
      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
    } else {
      return ctx.stylize('[Object]', 'special');
    }
  }

  ctx.seen.push(value);

  var output;
  if (array) {
    output = formatArray(ctx, value, recurseTimes, visibleKeys, keys);
  } else {
    output = keys.map(function(key) {
      return formatProperty(ctx, value, recurseTimes, visibleKeys, key, array);
    });
  }

  ctx.seen.pop();

  return reduceToSingleString(output, base, braces);
}


function formatPrimitive(ctx, value) {
  if (isUndefined(value))
    return ctx.stylize('undefined', 'undefined');
  if (isString(value)) {
    var simple = '\'' + JSON.stringify(value).replace(/^"|"$/g, '')
                                             .replace(/'/g, "\\'")
                                             .replace(/\\"/g, '"') + '\'';
    return ctx.stylize(simple, 'string');
  }
  if (isNumber(value))
    return ctx.stylize('' + value, 'number');
  if (isBoolean(value))
    return ctx.stylize('' + value, 'boolean');
  // For some reason typeof null is "object", so special case here.
  if (isNull(value))
    return ctx.stylize('null', 'null');
}


function formatError(value) {
  return '[' + Error.prototype.toString.call(value) + ']';
}


function formatArray(ctx, value, recurseTimes, visibleKeys, keys) {
  var output = [];
  for (var i = 0, l = value.length; i < l; ++i) {
    if (hasOwnProperty(value, String(i))) {
      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
          String(i), true));
    } else {
      output.push('');
    }
  }
  keys.forEach(function(key) {
    if (!key.match(/^\d+$/)) {
      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
          key, true));
    }
  });
  return output;
}


function formatProperty(ctx, value, recurseTimes, visibleKeys, key, array) {
  var name, str, desc;
  desc = Object.getOwnPropertyDescriptor(value, key) || { value: value[key] };
  if (desc.get) {
    if (desc.set) {
      str = ctx.stylize('[Getter/Setter]', 'special');
    } else {
      str = ctx.stylize('[Getter]', 'special');
    }
  } else {
    if (desc.set) {
      str = ctx.stylize('[Setter]', 'special');
    }
  }
  if (!hasOwnProperty(visibleKeys, key)) {
    name = '[' + key + ']';
  }
  if (!str) {
    if (ctx.seen.indexOf(desc.value) < 0) {
      if (isNull(recurseTimes)) {
        str = formatValue(ctx, desc.value, null);
      } else {
        str = formatValue(ctx, desc.value, recurseTimes - 1);
      }
      if (str.indexOf('\n') > -1) {
        if (array) {
          str = str.split('\n').map(function(line) {
            return '  ' + line;
          }).join('\n').substr(2);
        } else {
          str = '\n' + str.split('\n').map(function(line) {
            return '   ' + line;
          }).join('\n');
        }
      }
    } else {
      str = ctx.stylize('[Circular]', 'special');
    }
  }
  if (isUndefined(name)) {
    if (array && key.match(/^\d+$/)) {
      return str;
    }
    name = JSON.stringify('' + key);
    if (name.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)) {
      name = name.substr(1, name.length - 2);
      name = ctx.stylize(name, 'name');
    } else {
      name = name.replace(/'/g, "\\'")
                 .replace(/\\"/g, '"')
                 .replace(/(^"|"$)/g, "'");
      name = ctx.stylize(name, 'string');
    }
  }

  return name + ': ' + str;
}


function reduceToSingleString(output, base, braces) {
  var numLinesEst = 0;
  var length = output.reduce(function(prev, cur) {
    numLinesEst++;
    if (cur.indexOf('\n') >= 0) numLinesEst++;
    return prev + cur.replace(/\u001b\[\d\d?m/g, '').length + 1;
  }, 0);

  if (length > 60) {
    return braces[0] +
           (base === '' ? '' : base + '\n ') +
           ' ' +
           output.join(',\n  ') +
           ' ' +
           braces[1];
  }

  return braces[0] + base + ' ' + output.join(', ') + ' ' + braces[1];
}


// NOTE: These type checking functions intentionally don't use `instanceof`
// because it is fragile and can be easily faked with `Object.create()`.
function isArray(ar) {
  return Array.isArray(ar);
}

function isBoolean(arg) {
  return typeof arg === 'boolean';
}

function isNull(arg) {
  return arg === null;
}



function isNumber(arg) {
  return typeof arg === 'number';
}

function isString(arg) {
  return typeof arg === 'string';
}



function isUndefined(arg) {
  return arg === void 0;
}

function isRegExp(re) {
  return isObject(re) && objectToString(re) === '[object RegExp]';
}

function isObject(arg) {
  return typeof arg === 'object' && arg !== null;
}

function isDate(d) {
  return isObject(d) && objectToString(d) === '[object Date]';
}

function isError(e) {
  return isObject(e) &&
      (objectToString(e) === '[object Error]' || e instanceof Error);
}

function isFunction(arg) {
  return typeof arg === 'function';
}





function objectToString(o) {
  return Object.prototype.toString.call(o);
}


// log is just a thin wrapper to console.log that prepends a timestamp



/**
 * Inherit the prototype methods from one constructor into another.
 *
 * The Function.prototype.inherits from lang.js rewritten as a standalone
 * function (not on Function.prototype). NOTE: If this file is to be loaded
 * during bootstrapping this function needs to be rewritten using some native
 * functions as prototype setup using normal JavaScript does not work as
 * expected during bootstrapping (see mirror.js in r114903).
 *
 * @param {function} ctor Constructor function which needs to inherit the
 *     prototype.
 * @param {function} superCtor Constructor function to inherit prototype from.
 */
function _extend(origin, add) {
  // Don't do anything if add isn't an object
  if (!add || !isObject(add)) return origin;

  var keys = Object.keys(add);
  var i = keys.length;
  while (i--) {
    origin[keys[i]] = add[keys[i]];
  }
  return origin;
}

function hasOwnProperty(obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}

function BufferList$1() {
  this.head = null;
  this.tail = null;
  this.length = 0;
}

BufferList$1.prototype.push = function (v) {
  var entry = { data: v, next: null };
  if (this.length > 0) this.tail.next = entry;else this.head = entry;
  this.tail = entry;
  ++this.length;
};

BufferList$1.prototype.unshift = function (v) {
  var entry = { data: v, next: this.head };
  if (this.length === 0) this.tail = entry;
  this.head = entry;
  ++this.length;
};

BufferList$1.prototype.shift = function () {
  if (this.length === 0) return;
  var ret = this.head.data;
  if (this.length === 1) this.head = this.tail = null;else this.head = this.head.next;
  --this.length;
  return ret;
};

BufferList$1.prototype.clear = function () {
  this.head = this.tail = null;
  this.length = 0;
};

BufferList$1.prototype.join = function (s) {
  if (this.length === 0) return '';
  var p = this.head;
  var ret = '' + p.data;
  while (p = p.next) {
    ret += s + p.data;
  }return ret;
};

BufferList$1.prototype.concat = function (n) {
  if (this.length === 0) return Buffer.alloc(0);
  if (this.length === 1) return this.head.data;
  var ret = Buffer.allocUnsafe(n >>> 0);
  var p = this.head;
  var i = 0;
  while (p) {
    p.data.copy(ret, i);
    i += p.data.length;
    p = p.next;
  }
  return ret;
};

// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

var isBufferEncoding = Buffer.isEncoding
  || function(encoding) {
       switch (encoding && encoding.toLowerCase()) {
         case 'hex': case 'utf8': case 'utf-8': case 'ascii': case 'binary': case 'base64': case 'ucs2': case 'ucs-2': case 'utf16le': case 'utf-16le': case 'raw': return true;
         default: return false;
       }
     };


function assertEncoding(encoding) {
  if (encoding && !isBufferEncoding(encoding)) {
    throw new Error('Unknown encoding: ' + encoding);
  }
}

// StringDecoder provides an interface for efficiently splitting a series of
// buffers into a series of JS strings without breaking apart multi-byte
// characters. CESU-8 is handled as part of the UTF-8 encoding.
//
// @TODO Handling all encodings inside a single object makes it very difficult
// to reason about this code, so it should be split up in the future.
// @TODO There should be a utf8-strict encoding that rejects invalid UTF-8 code
// points as used by CESU-8.
function StringDecoder(encoding) {
  this.encoding = (encoding || 'utf8').toLowerCase().replace(/[-_]/, '');
  assertEncoding(encoding);
  switch (this.encoding) {
    case 'utf8':
      // CESU-8 represents each of Surrogate Pair by 3-bytes
      this.surrogateSize = 3;
      break;
    case 'ucs2':
    case 'utf16le':
      // UTF-16 represents each of Surrogate Pair by 2-bytes
      this.surrogateSize = 2;
      this.detectIncompleteChar = utf16DetectIncompleteChar;
      break;
    case 'base64':
      // Base-64 stores 3 bytes in 4 chars, and pads the remainder.
      this.surrogateSize = 3;
      this.detectIncompleteChar = base64DetectIncompleteChar;
      break;
    default:
      this.write = passThroughWrite;
      return;
  }

  // Enough space to store all bytes of a single character. UTF-8 needs 4
  // bytes, but CESU-8 may require up to 6 (3 bytes per surrogate).
  this.charBuffer = new Buffer(6);
  // Number of bytes received for the current incomplete multi-byte character.
  this.charReceived = 0;
  // Number of bytes expected for the current incomplete multi-byte character.
  this.charLength = 0;
}


// write decodes the given buffer and returns it as JS string that is
// guaranteed to not contain any partial multi-byte characters. Any partial
// character found at the end of the buffer is buffered up, and will be
// returned when calling write again with the remaining bytes.
//
// Note: Converting a Buffer containing an orphan surrogate to a String
// currently works, but converting a String to a Buffer (via `new Buffer`, or
// Buffer#write) will replace incomplete surrogates with the unicode
// replacement character. See https://codereview.chromium.org/121173009/ .
StringDecoder.prototype.write = function(buffer) {
  var charStr = '';
  // if our last write ended with an incomplete multibyte character
  while (this.charLength) {
    // determine how many remaining bytes this buffer has to offer for this char
    var available = (buffer.length >= this.charLength - this.charReceived) ?
        this.charLength - this.charReceived :
        buffer.length;

    // add the new bytes to the char buffer
    buffer.copy(this.charBuffer, this.charReceived, 0, available);
    this.charReceived += available;

    if (this.charReceived < this.charLength) {
      // still not enough chars in this buffer? wait for more ...
      return '';
    }

    // remove bytes belonging to the current character from the buffer
    buffer = buffer.slice(available, buffer.length);

    // get the character that was split
    charStr = this.charBuffer.slice(0, this.charLength).toString(this.encoding);

    // CESU-8: lead surrogate (D800-DBFF) is also the incomplete character
    var charCode = charStr.charCodeAt(charStr.length - 1);
    if (charCode >= 0xD800 && charCode <= 0xDBFF) {
      this.charLength += this.surrogateSize;
      charStr = '';
      continue;
    }
    this.charReceived = this.charLength = 0;

    // if there are no more bytes in this buffer, just emit our char
    if (buffer.length === 0) {
      return charStr;
    }
    break;
  }

  // determine and set charLength / charReceived
  this.detectIncompleteChar(buffer);

  var end = buffer.length;
  if (this.charLength) {
    // buffer the incomplete character bytes we got
    buffer.copy(this.charBuffer, 0, buffer.length - this.charReceived, end);
    end -= this.charReceived;
  }

  charStr += buffer.toString(this.encoding, 0, end);

  var end = charStr.length - 1;
  var charCode = charStr.charCodeAt(end);
  // CESU-8: lead surrogate (D800-DBFF) is also the incomplete character
  if (charCode >= 0xD800 && charCode <= 0xDBFF) {
    var size = this.surrogateSize;
    this.charLength += size;
    this.charReceived += size;
    this.charBuffer.copy(this.charBuffer, size, 0, size);
    buffer.copy(this.charBuffer, 0, 0, size);
    return charStr.substring(0, end);
  }

  // or just emit the charStr
  return charStr;
};

// detectIncompleteChar determines if there is an incomplete UTF-8 character at
// the end of the given buffer. If so, it sets this.charLength to the byte
// length that character, and sets this.charReceived to the number of bytes
// that are available for this character.
StringDecoder.prototype.detectIncompleteChar = function(buffer) {
  // determine how many bytes we have to check at the end of this buffer
  var i = (buffer.length >= 3) ? 3 : buffer.length;

  // Figure out if one of the last i bytes of our buffer announces an
  // incomplete char.
  for (; i > 0; i--) {
    var c = buffer[buffer.length - i];

    // See http://en.wikipedia.org/wiki/UTF-8#Description

    // 110XXXXX
    if (i == 1 && c >> 5 == 0x06) {
      this.charLength = 2;
      break;
    }

    // 1110XXXX
    if (i <= 2 && c >> 4 == 0x0E) {
      this.charLength = 3;
      break;
    }

    // 11110XXX
    if (i <= 3 && c >> 3 == 0x1E) {
      this.charLength = 4;
      break;
    }
  }
  this.charReceived = i;
};

StringDecoder.prototype.end = function(buffer) {
  var res = '';
  if (buffer && buffer.length)
    res = this.write(buffer);

  if (this.charReceived) {
    var cr = this.charReceived;
    var buf = this.charBuffer;
    var enc = this.encoding;
    res += buf.slice(0, cr).toString(enc);
  }

  return res;
};

function passThroughWrite(buffer) {
  return buffer.toString(this.encoding);
}

function utf16DetectIncompleteChar(buffer) {
  this.charReceived = buffer.length % 2;
  this.charLength = this.charReceived ? 2 : 0;
}

function base64DetectIncompleteChar(buffer) {
  this.charReceived = buffer.length % 3;
  this.charLength = this.charReceived ? 3 : 0;
}

Readable$1.ReadableState = ReadableState;
var debug = debuglog('stream');
inherits$1(Readable$1, EventEmitter);

function prependListener(emitter, event, fn) {
  // Sadly this is not cacheable as some libraries bundle their own
  // event emitter implementation with them.
  if (typeof emitter.prependListener === 'function') {
    return emitter.prependListener(event, fn);
  } else {
    // This is a hack to make sure that our error handler is attached before any
    // userland ones.  NEVER DO THIS. This is here only because this code needs
    // to continue to work with older versions of Node.js that do not include
    // the prependListener() method. The goal is to eventually remove this hack.
    if (!emitter._events || !emitter._events[event])
      emitter.on(event, fn);
    else if (Array.isArray(emitter._events[event]))
      emitter._events[event].unshift(fn);
    else
      emitter._events[event] = [fn, emitter._events[event]];
  }
}
function listenerCount$1 (emitter, type) {
  return emitter.listeners(type).length;
}
function ReadableState(options, stream) {

  options = options || {};

  // object stream flag. Used to make read(n) ignore n and to
  // make all the buffer merging and length checks go away
  this.objectMode = !!options.objectMode;

  if (stream instanceof Duplex$1) this.objectMode = this.objectMode || !!options.readableObjectMode;

  // the point at which it stops calling _read() to fill the buffer
  // Note: 0 is a valid value, means "don't call _read preemptively ever"
  var hwm = options.highWaterMark;
  var defaultHwm = this.objectMode ? 16 : 16 * 1024;
  this.highWaterMark = hwm || hwm === 0 ? hwm : defaultHwm;

  // cast to ints.
  this.highWaterMark = ~ ~this.highWaterMark;

  // A linked list is used to store data chunks instead of an array because the
  // linked list can remove elements from the beginning faster than
  // array.shift()
  this.buffer = new BufferList$1();
  this.length = 0;
  this.pipes = null;
  this.pipesCount = 0;
  this.flowing = null;
  this.ended = false;
  this.endEmitted = false;
  this.reading = false;

  // a flag to be able to tell if the onwrite cb is called immediately,
  // or on a later tick.  We set this to true at first, because any
  // actions that shouldn't happen until "later" should generally also
  // not happen before the first write call.
  this.sync = true;

  // whenever we return null, then we set a flag to say
  // that we're awaiting a 'readable' event emission.
  this.needReadable = false;
  this.emittedReadable = false;
  this.readableListening = false;
  this.resumeScheduled = false;

  // Crypto is kind of old and crusty.  Historically, its default string
  // encoding is 'binary' so we have to make this configurable.
  // Everything else in the universe uses 'utf8', though.
  this.defaultEncoding = options.defaultEncoding || 'utf8';

  // when piping, we only care about 'readable' events that happen
  // after read()ing all the bytes and not getting any pushback.
  this.ranOut = false;

  // the number of writers that are awaiting a drain event in .pipe()s
  this.awaitDrain = 0;

  // if true, a maybeReadMore has been scheduled
  this.readingMore = false;

  this.decoder = null;
  this.encoding = null;
  if (options.encoding) {
    this.decoder = new StringDecoder(options.encoding);
    this.encoding = options.encoding;
  }
}
function Readable$1(options) {

  if (!(this instanceof Readable$1)) return new Readable$1(options);

  this._readableState = new ReadableState(options, this);

  // legacy
  this.readable = true;

  if (options && typeof options.read === 'function') this._read = options.read;

  EventEmitter.call(this);
}

// Manually shove something into the read() buffer.
// This returns true if the highWaterMark has not been hit yet,
// similar to how Writable.write() returns true if you should
// write() some more.
Readable$1.prototype.push = function (chunk, encoding) {
  var state = this._readableState;

  if (!state.objectMode && typeof chunk === 'string') {
    encoding = encoding || state.defaultEncoding;
    if (encoding !== state.encoding) {
      chunk = Buffer.from(chunk, encoding);
      encoding = '';
    }
  }

  return readableAddChunk(this, state, chunk, encoding, false);
};

// Unshift should *always* be something directly out of read()
Readable$1.prototype.unshift = function (chunk) {
  var state = this._readableState;
  return readableAddChunk(this, state, chunk, '', true);
};

Readable$1.prototype.isPaused = function () {
  return this._readableState.flowing === false;
};

function readableAddChunk(stream, state, chunk, encoding, addToFront) {
  var er = chunkInvalid(state, chunk);
  if (er) {
    stream.emit('error', er);
  } else if (chunk === null) {
    state.reading = false;
    onEofChunk(stream, state);
  } else if (state.objectMode || chunk && chunk.length > 0) {
    if (state.ended && !addToFront) {
      var e = new Error('stream.push() after EOF');
      stream.emit('error', e);
    } else if (state.endEmitted && addToFront) {
      var _e = new Error('stream.unshift() after end event');
      stream.emit('error', _e);
    } else {
      var skipAdd;
      if (state.decoder && !addToFront && !encoding) {
        chunk = state.decoder.write(chunk);
        skipAdd = !state.objectMode && chunk.length === 0;
      }

      if (!addToFront) state.reading = false;

      // Don't add to the buffer if we've decoded to an empty string chunk and
      // we're not in object mode
      if (!skipAdd) {
        // if we want the data now, just emit it.
        if (state.flowing && state.length === 0 && !state.sync) {
          stream.emit('data', chunk);
          stream.read(0);
        } else {
          // update the buffer info.
          state.length += state.objectMode ? 1 : chunk.length;
          if (addToFront) state.buffer.unshift(chunk);else state.buffer.push(chunk);

          if (state.needReadable) emitReadable(stream);
        }
      }

      maybeReadMore(stream, state);
    }
  } else if (!addToFront) {
    state.reading = false;
  }

  return needMoreData(state);
}

// if it's past the high water mark, we can push in some more.
// Also, if we have no data yet, we can stand some
// more bytes.  This is to work around cases where hwm=0,
// such as the repl.  Also, if the push() triggered a
// readable event, and the user called read(largeNumber) such that
// needReadable was set, then we ought to push more, so that another
// 'readable' event will be triggered.
function needMoreData(state) {
  return !state.ended && (state.needReadable || state.length < state.highWaterMark || state.length === 0);
}

// backwards compatibility.
Readable$1.prototype.setEncoding = function (enc) {
  this._readableState.decoder = new StringDecoder(enc);
  this._readableState.encoding = enc;
  return this;
};

// Don't raise the hwm > 8MB
var MAX_HWM = 0x800000;
function computeNewHighWaterMark(n) {
  if (n >= MAX_HWM) {
    n = MAX_HWM;
  } else {
    // Get the next highest power of 2 to prevent increasing hwm excessively in
    // tiny amounts
    n--;
    n |= n >>> 1;
    n |= n >>> 2;
    n |= n >>> 4;
    n |= n >>> 8;
    n |= n >>> 16;
    n++;
  }
  return n;
}

// This function is designed to be inlinable, so please take care when making
// changes to the function body.
function howMuchToRead(n, state) {
  if (n <= 0 || state.length === 0 && state.ended) return 0;
  if (state.objectMode) return 1;
  if (n !== n) {
    // Only flow one buffer at a time
    if (state.flowing && state.length) return state.buffer.head.data.length;else return state.length;
  }
  // If we're asking for more than the current hwm, then raise the hwm.
  if (n > state.highWaterMark) state.highWaterMark = computeNewHighWaterMark(n);
  if (n <= state.length) return n;
  // Don't have enough
  if (!state.ended) {
    state.needReadable = true;
    return 0;
  }
  return state.length;
}

// you can override either this method, or the async _read(n) below.
Readable$1.prototype.read = function (n) {
  debug('read', n);
  n = parseInt(n, 10);
  var state = this._readableState;
  var nOrig = n;

  if (n !== 0) state.emittedReadable = false;

  // if we're doing read(0) to trigger a readable event, but we
  // already have a bunch of data in the buffer, then just trigger
  // the 'readable' event and move on.
  if (n === 0 && state.needReadable && (state.length >= state.highWaterMark || state.ended)) {
    debug('read: emitReadable', state.length, state.ended);
    if (state.length === 0 && state.ended) endReadable(this);else emitReadable(this);
    return null;
  }

  n = howMuchToRead(n, state);

  // if we've ended, and we're now clear, then finish it up.
  if (n === 0 && state.ended) {
    if (state.length === 0) endReadable(this);
    return null;
  }

  // All the actual chunk generation logic needs to be
  // *below* the call to _read.  The reason is that in certain
  // synthetic stream cases, such as passthrough streams, _read
  // may be a completely synchronous operation which may change
  // the state of the read buffer, providing enough data when
  // before there was *not* enough.
  //
  // So, the steps are:
  // 1. Figure out what the state of things will be after we do
  // a read from the buffer.
  //
  // 2. If that resulting state will trigger a _read, then call _read.
  // Note that this may be asynchronous, or synchronous.  Yes, it is
  // deeply ugly to write APIs this way, but that still doesn't mean
  // that the Readable class should behave improperly, as streams are
  // designed to be sync/async agnostic.
  // Take note if the _read call is sync or async (ie, if the read call
  // has returned yet), so that we know whether or not it's safe to emit
  // 'readable' etc.
  //
  // 3. Actually pull the requested chunks out of the buffer and return.

  // if we need a readable event, then we need to do some reading.
  var doRead = state.needReadable;
  debug('need readable', doRead);

  // if we currently have less than the highWaterMark, then also read some
  if (state.length === 0 || state.length - n < state.highWaterMark) {
    doRead = true;
    debug('length less than watermark', doRead);
  }

  // however, if we've ended, then there's no point, and if we're already
  // reading, then it's unnecessary.
  if (state.ended || state.reading) {
    doRead = false;
    debug('reading or ended', doRead);
  } else if (doRead) {
    debug('do read');
    state.reading = true;
    state.sync = true;
    // if the length is currently zero, then we *need* a readable event.
    if (state.length === 0) state.needReadable = true;
    // call internal read method
    this._read(state.highWaterMark);
    state.sync = false;
    // If _read pushed data synchronously, then `reading` will be false,
    // and we need to re-evaluate how much data we can return to the user.
    if (!state.reading) n = howMuchToRead(nOrig, state);
  }

  var ret;
  if (n > 0) ret = fromList(n, state);else ret = null;

  if (ret === null) {
    state.needReadable = true;
    n = 0;
  } else {
    state.length -= n;
  }

  if (state.length === 0) {
    // If we have nothing in the buffer, then we want to know
    // as soon as we *do* get something into the buffer.
    if (!state.ended) state.needReadable = true;

    // If we tried to read() past the EOF, then emit end on the next tick.
    if (nOrig !== n && state.ended) endReadable(this);
  }

  if (ret !== null) this.emit('data', ret);

  return ret;
};

function chunkInvalid(state, chunk) {
  var er = null;
  if (!isBuffer$1(chunk) && typeof chunk !== 'string' && chunk !== null && chunk !== undefined && !state.objectMode) {
    er = new TypeError('Invalid non-string/buffer chunk');
  }
  return er;
}

function onEofChunk(stream, state) {
  if (state.ended) return;
  if (state.decoder) {
    var chunk = state.decoder.end();
    if (chunk && chunk.length) {
      state.buffer.push(chunk);
      state.length += state.objectMode ? 1 : chunk.length;
    }
  }
  state.ended = true;

  // emit 'readable' now to make sure it gets picked up.
  emitReadable(stream);
}

// Don't emit readable right away in sync mode, because this can trigger
// another read() call => stack overflow.  This way, it might trigger
// a nextTick recursion warning, but that's not so bad.
function emitReadable(stream) {
  var state = stream._readableState;
  state.needReadable = false;
  if (!state.emittedReadable) {
    debug('emitReadable', state.flowing);
    state.emittedReadable = true;
    if (state.sync) nextTick(emitReadable_, stream);else emitReadable_(stream);
  }
}

function emitReadable_(stream) {
  debug('emit readable');
  stream.emit('readable');
  flow(stream);
}

// at this point, the user has presumably seen the 'readable' event,
// and called read() to consume some data.  that may have triggered
// in turn another _read(n) call, in which case reading = true if
// it's in progress.
// However, if we're not ended, or reading, and the length < hwm,
// then go ahead and try to read some more preemptively.
function maybeReadMore(stream, state) {
  if (!state.readingMore) {
    state.readingMore = true;
    nextTick(maybeReadMore_, stream, state);
  }
}

function maybeReadMore_(stream, state) {
  var len = state.length;
  while (!state.reading && !state.flowing && !state.ended && state.length < state.highWaterMark) {
    debug('maybeReadMore read 0');
    stream.read(0);
    if (len === state.length)
      // didn't get any data, stop spinning.
      break;else len = state.length;
  }
  state.readingMore = false;
}

// abstract method.  to be overridden in specific implementation classes.
// call cb(er, data) where data is <= n in length.
// for virtual (non-string, non-buffer) streams, "length" is somewhat
// arbitrary, and perhaps not very meaningful.
Readable$1.prototype._read = function (n) {
  this.emit('error', new Error('not implemented'));
};

Readable$1.prototype.pipe = function (dest, pipeOpts) {
  var src = this;
  var state = this._readableState;

  switch (state.pipesCount) {
    case 0:
      state.pipes = dest;
      break;
    case 1:
      state.pipes = [state.pipes, dest];
      break;
    default:
      state.pipes.push(dest);
      break;
  }
  state.pipesCount += 1;
  debug('pipe count=%d opts=%j', state.pipesCount, pipeOpts);

  var doEnd = (!pipeOpts || pipeOpts.end !== false);

  var endFn = doEnd ? onend : cleanup;
  if (state.endEmitted) nextTick(endFn);else src.once('end', endFn);

  dest.on('unpipe', onunpipe);
  function onunpipe(readable) {
    debug('onunpipe');
    if (readable === src) {
      cleanup();
    }
  }

  function onend() {
    debug('onend');
    dest.end();
  }

  // when the dest drains, it reduces the awaitDrain counter
  // on the source.  This would be more elegant with a .once()
  // handler in flow(), but adding and removing repeatedly is
  // too slow.
  var ondrain = pipeOnDrain(src);
  dest.on('drain', ondrain);

  var cleanedUp = false;
  function cleanup() {
    debug('cleanup');
    // cleanup event handlers once the pipe is broken
    dest.removeListener('close', onclose);
    dest.removeListener('finish', onfinish);
    dest.removeListener('drain', ondrain);
    dest.removeListener('error', onerror);
    dest.removeListener('unpipe', onunpipe);
    src.removeListener('end', onend);
    src.removeListener('end', cleanup);
    src.removeListener('data', ondata);

    cleanedUp = true;

    // if the reader is waiting for a drain event from this
    // specific writer, then it would cause it to never start
    // flowing again.
    // So, if this is awaiting a drain, then we just call it now.
    // If we don't know, then assume that we are waiting for one.
    if (state.awaitDrain && (!dest._writableState || dest._writableState.needDrain)) ondrain();
  }

  // If the user pushes more data while we're writing to dest then we'll end up
  // in ondata again. However, we only want to increase awaitDrain once because
  // dest will only emit one 'drain' event for the multiple writes.
  // => Introduce a guard on increasing awaitDrain.
  var increasedAwaitDrain = false;
  src.on('data', ondata);
  function ondata(chunk) {
    debug('ondata');
    increasedAwaitDrain = false;
    var ret = dest.write(chunk);
    if (false === ret && !increasedAwaitDrain) {
      // If the user unpiped during `dest.write()`, it is possible
      // to get stuck in a permanently paused state if that write
      // also returned false.
      // => Check whether `dest` is still a piping destination.
      if ((state.pipesCount === 1 && state.pipes === dest || state.pipesCount > 1 && indexOf(state.pipes, dest) !== -1) && !cleanedUp) {
        debug('false write response, pause', src._readableState.awaitDrain);
        src._readableState.awaitDrain++;
        increasedAwaitDrain = true;
      }
      src.pause();
    }
  }

  // if the dest has an error, then stop piping into it.
  // however, don't suppress the throwing behavior for this.
  function onerror(er) {
    debug('onerror', er);
    unpipe();
    dest.removeListener('error', onerror);
    if (listenerCount$1(dest, 'error') === 0) dest.emit('error', er);
  }

  // Make sure our error handler is attached before userland ones.
  prependListener(dest, 'error', onerror);

  // Both close and finish should trigger unpipe, but only once.
  function onclose() {
    dest.removeListener('finish', onfinish);
    unpipe();
  }
  dest.once('close', onclose);
  function onfinish() {
    debug('onfinish');
    dest.removeListener('close', onclose);
    unpipe();
  }
  dest.once('finish', onfinish);

  function unpipe() {
    debug('unpipe');
    src.unpipe(dest);
  }

  // tell the dest that it's being piped to
  dest.emit('pipe', src);

  // start the flow if it hasn't been started already.
  if (!state.flowing) {
    debug('pipe resume');
    src.resume();
  }

  return dest;
};

function pipeOnDrain(src) {
  return function () {
    var state = src._readableState;
    debug('pipeOnDrain', state.awaitDrain);
    if (state.awaitDrain) state.awaitDrain--;
    if (state.awaitDrain === 0 && src.listeners('data').length) {
      state.flowing = true;
      flow(src);
    }
  };
}

Readable$1.prototype.unpipe = function (dest) {
  var state = this._readableState;

  // if we're not piping anywhere, then do nothing.
  if (state.pipesCount === 0) return this;

  // just one destination.  most common case.
  if (state.pipesCount === 1) {
    // passed in one, but it's not the right one.
    if (dest && dest !== state.pipes) return this;

    if (!dest) dest = state.pipes;

    // got a match.
    state.pipes = null;
    state.pipesCount = 0;
    state.flowing = false;
    if (dest) dest.emit('unpipe', this);
    return this;
  }

  // slow case. multiple pipe destinations.

  if (!dest) {
    // remove all.
    var dests = state.pipes;
    var len = state.pipesCount;
    state.pipes = null;
    state.pipesCount = 0;
    state.flowing = false;

    for (var _i = 0; _i < len; _i++) {
      dests[_i].emit('unpipe', this);
    }return this;
  }

  // try to find the right one.
  var i = indexOf(state.pipes, dest);
  if (i === -1) return this;

  state.pipes.splice(i, 1);
  state.pipesCount -= 1;
  if (state.pipesCount === 1) state.pipes = state.pipes[0];

  dest.emit('unpipe', this);

  return this;
};

// set up data events if they are asked for
// Ensure readable listeners eventually get something
Readable$1.prototype.on = function (ev, fn) {
  var res = EventEmitter.prototype.on.call(this, ev, fn);

  if (ev === 'data') {
    // Start flowing on next tick if stream isn't explicitly paused
    if (this._readableState.flowing !== false) this.resume();
  } else if (ev === 'readable') {
    var state = this._readableState;
    if (!state.endEmitted && !state.readableListening) {
      state.readableListening = state.needReadable = true;
      state.emittedReadable = false;
      if (!state.reading) {
        nextTick(nReadingNextTick, this);
      } else if (state.length) {
        emitReadable(this, state);
      }
    }
  }

  return res;
};
Readable$1.prototype.addListener = Readable$1.prototype.on;

function nReadingNextTick(self) {
  debug('readable nexttick read 0');
  self.read(0);
}

// pause() and resume() are remnants of the legacy readable stream API
// If the user uses them, then switch into old mode.
Readable$1.prototype.resume = function () {
  var state = this._readableState;
  if (!state.flowing) {
    debug('resume');
    state.flowing = true;
    resume(this, state);
  }
  return this;
};

function resume(stream, state) {
  if (!state.resumeScheduled) {
    state.resumeScheduled = true;
    nextTick(resume_, stream, state);
  }
}

function resume_(stream, state) {
  if (!state.reading) {
    debug('resume read 0');
    stream.read(0);
  }

  state.resumeScheduled = false;
  state.awaitDrain = 0;
  stream.emit('resume');
  flow(stream);
  if (state.flowing && !state.reading) stream.read(0);
}

Readable$1.prototype.pause = function () {
  debug('call pause flowing=%j', this._readableState.flowing);
  if (false !== this._readableState.flowing) {
    debug('pause');
    this._readableState.flowing = false;
    this.emit('pause');
  }
  return this;
};

function flow(stream) {
  var state = stream._readableState;
  debug('flow', state.flowing);
  while (state.flowing && stream.read() !== null) {}
}

// wrap an old-style stream as the async data source.
// This is *not* part of the readable stream interface.
// It is an ugly unfortunate mess of history.
Readable$1.prototype.wrap = function (stream) {
  var state = this._readableState;
  var paused = false;

  var self = this;
  stream.on('end', function () {
    debug('wrapped end');
    if (state.decoder && !state.ended) {
      var chunk = state.decoder.end();
      if (chunk && chunk.length) self.push(chunk);
    }

    self.push(null);
  });

  stream.on('data', function (chunk) {
    debug('wrapped data');
    if (state.decoder) chunk = state.decoder.write(chunk);

    // don't skip over falsy values in objectMode
    if (state.objectMode && (chunk === null || chunk === undefined)) return;else if (!state.objectMode && (!chunk || !chunk.length)) return;

    var ret = self.push(chunk);
    if (!ret) {
      paused = true;
      stream.pause();
    }
  });

  // proxy all the other methods.
  // important when wrapping filters and duplexes.
  for (var i in stream) {
    if (this[i] === undefined && typeof stream[i] === 'function') {
      this[i] = function (method) {
        return function () {
          return stream[method].apply(stream, arguments);
        };
      }(i);
    }
  }

  // proxy certain important events.
  var events = ['error', 'close', 'destroy', 'pause', 'resume'];
  forEach(events, function (ev) {
    stream.on(ev, self.emit.bind(self, ev));
  });

  // when we try to consume some more bytes, simply unpause the
  // underlying stream.
  self._read = function (n) {
    debug('wrapped _read', n);
    if (paused) {
      paused = false;
      stream.resume();
    }
  };

  return self;
};

// exposed for testing purposes only.
Readable$1._fromList = fromList;

// Pluck off n bytes from an array of buffers.
// Length is the combined lengths of all the buffers in the list.
// This function is designed to be inlinable, so please take care when making
// changes to the function body.
function fromList(n, state) {
  // nothing buffered
  if (state.length === 0) return null;

  var ret;
  if (state.objectMode) ret = state.buffer.shift();else if (!n || n >= state.length) {
    // read it all, truncate the list
    if (state.decoder) ret = state.buffer.join('');else if (state.buffer.length === 1) ret = state.buffer.head.data;else ret = state.buffer.concat(state.length);
    state.buffer.clear();
  } else {
    // read part of list
    ret = fromListPartial(n, state.buffer, state.decoder);
  }

  return ret;
}

// Extracts only enough buffered data to satisfy the amount requested.
// This function is designed to be inlinable, so please take care when making
// changes to the function body.
function fromListPartial(n, list, hasStrings) {
  var ret;
  if (n < list.head.data.length) {
    // slice is the same for buffers and strings
    ret = list.head.data.slice(0, n);
    list.head.data = list.head.data.slice(n);
  } else if (n === list.head.data.length) {
    // first chunk is a perfect match
    ret = list.shift();
  } else {
    // result spans more than one buffer
    ret = hasStrings ? copyFromBufferString(n, list) : copyFromBuffer(n, list);
  }
  return ret;
}

// Copies a specified amount of characters from the list of buffered data
// chunks.
// This function is designed to be inlinable, so please take care when making
// changes to the function body.
function copyFromBufferString(n, list) {
  var p = list.head;
  var c = 1;
  var ret = p.data;
  n -= ret.length;
  while (p = p.next) {
    var str = p.data;
    var nb = n > str.length ? str.length : n;
    if (nb === str.length) ret += str;else ret += str.slice(0, n);
    n -= nb;
    if (n === 0) {
      if (nb === str.length) {
        ++c;
        if (p.next) list.head = p.next;else list.head = list.tail = null;
      } else {
        list.head = p;
        p.data = str.slice(nb);
      }
      break;
    }
    ++c;
  }
  list.length -= c;
  return ret;
}

// Copies a specified amount of bytes from the list of buffered data chunks.
// This function is designed to be inlinable, so please take care when making
// changes to the function body.
function copyFromBuffer(n, list) {
  var ret = Buffer.allocUnsafe(n);
  var p = list.head;
  var c = 1;
  p.data.copy(ret);
  n -= p.data.length;
  while (p = p.next) {
    var buf = p.data;
    var nb = n > buf.length ? buf.length : n;
    buf.copy(ret, ret.length - n, 0, nb);
    n -= nb;
    if (n === 0) {
      if (nb === buf.length) {
        ++c;
        if (p.next) list.head = p.next;else list.head = list.tail = null;
      } else {
        list.head = p;
        p.data = buf.slice(nb);
      }
      break;
    }
    ++c;
  }
  list.length -= c;
  return ret;
}

function endReadable(stream) {
  var state = stream._readableState;

  // If we get here before consuming all the bytes, then that is a
  // bug in node.  Should never happen.
  if (state.length > 0) throw new Error('"endReadable()" called on non-empty stream');

  if (!state.endEmitted) {
    state.ended = true;
    nextTick(endReadableNT, state, stream);
  }
}

function endReadableNT(state, stream) {
  // Check that we didn't get one last unshift.
  if (!state.endEmitted && state.length === 0) {
    state.endEmitted = true;
    stream.readable = false;
    stream.emit('end');
  }
}

function forEach(xs, f) {
  for (var i = 0, l = xs.length; i < l; i++) {
    f(xs[i], i);
  }
}

function indexOf(xs, x) {
  for (var i = 0, l = xs.length; i < l; i++) {
    if (xs[i] === x) return i;
  }
  return -1;
}

// A bit simpler than readable streams.
// Implement an async ._write(chunk, encoding, cb), and it'll handle all
// the drain event emission and buffering.


Writable$1.WritableState = WritableState;
inherits$1(Writable$1, EventEmitter);

function nop() {}

function WriteReq(chunk, encoding, cb) {
  this.chunk = chunk;
  this.encoding = encoding;
  this.callback = cb;
  this.next = null;
}

function WritableState(options, stream) {
  Object.defineProperty(this, 'buffer', {
    get: deprecate(function () {
      return this.getBuffer();
    }, '_writableState.buffer is deprecated. Use _writableState.getBuffer ' + 'instead.')
  });
  options = options || {};

  // object stream flag to indicate whether or not this stream
  // contains buffers or objects.
  this.objectMode = !!options.objectMode;

  if (stream instanceof Duplex$1) this.objectMode = this.objectMode || !!options.writableObjectMode;

  // the point at which write() starts returning false
  // Note: 0 is a valid value, means that we always return false if
  // the entire buffer is not flushed immediately on write()
  var hwm = options.highWaterMark;
  var defaultHwm = this.objectMode ? 16 : 16 * 1024;
  this.highWaterMark = hwm || hwm === 0 ? hwm : defaultHwm;

  // cast to ints.
  this.highWaterMark = ~ ~this.highWaterMark;

  this.needDrain = false;
  // at the start of calling end()
  this.ending = false;
  // when end() has been called, and returned
  this.ended = false;
  // when 'finish' is emitted
  this.finished = false;

  // should we decode strings into buffers before passing to _write?
  // this is here so that some node-core streams can optimize string
  // handling at a lower level.
  var noDecode = options.decodeStrings === false;
  this.decodeStrings = !noDecode;

  // Crypto is kind of old and crusty.  Historically, its default string
  // encoding is 'binary' so we have to make this configurable.
  // Everything else in the universe uses 'utf8', though.
  this.defaultEncoding = options.defaultEncoding || 'utf8';

  // not an actual buffer we keep track of, but a measurement
  // of how much we're waiting to get pushed to some underlying
  // socket or file.
  this.length = 0;

  // a flag to see when we're in the middle of a write.
  this.writing = false;

  // when true all writes will be buffered until .uncork() call
  this.corked = 0;

  // a flag to be able to tell if the onwrite cb is called immediately,
  // or on a later tick.  We set this to true at first, because any
  // actions that shouldn't happen until "later" should generally also
  // not happen before the first write call.
  this.sync = true;

  // a flag to know if we're processing previously buffered items, which
  // may call the _write() callback in the same tick, so that we don't
  // end up in an overlapped onwrite situation.
  this.bufferProcessing = false;

  // the callback that's passed to _write(chunk,cb)
  this.onwrite = function (er) {
    onwrite(stream, er);
  };

  // the callback that the user supplies to write(chunk,encoding,cb)
  this.writecb = null;

  // the amount that is being written when _write is called.
  this.writelen = 0;

  this.bufferedRequest = null;
  this.lastBufferedRequest = null;

  // number of pending user-supplied write callbacks
  // this must be 0 before 'finish' can be emitted
  this.pendingcb = 0;

  // emit prefinish if the only thing we're waiting for is _write cbs
  // This is relevant for synchronous Transform streams
  this.prefinished = false;

  // True if the error was already emitted and should not be thrown again
  this.errorEmitted = false;

  // count buffered requests
  this.bufferedRequestCount = 0;

  // allocate the first CorkedRequest, there is always
  // one allocated and free to use, and we maintain at most two
  this.corkedRequestsFree = new CorkedRequest(this);
}

WritableState.prototype.getBuffer = function writableStateGetBuffer() {
  var current = this.bufferedRequest;
  var out = [];
  while (current) {
    out.push(current);
    current = current.next;
  }
  return out;
};

function Writable$1(options) {

  // Writable ctor is applied to Duplexes, though they're not
  // instanceof Writable, they're instanceof Readable.
  if (!(this instanceof Writable$1) && !(this instanceof Duplex$1)) return new Writable$1(options);

  this._writableState = new WritableState(options, this);

  // legacy.
  this.writable = true;

  if (options) {
    if (typeof options.write === 'function') this._write = options.write;

    if (typeof options.writev === 'function') this._writev = options.writev;
  }

  EventEmitter.call(this);
}

// Otherwise people can pipe Writable streams, which is just wrong.
Writable$1.prototype.pipe = function () {
  this.emit('error', new Error('Cannot pipe, not readable'));
};

function writeAfterEnd(stream, cb) {
  var er = new Error('write after end');
  // TODO: defer error events consistently everywhere, not just the cb
  stream.emit('error', er);
  nextTick(cb, er);
}

// If we get something that is not a buffer, string, null, or undefined,
// and we're not in objectMode, then that's an error.
// Otherwise stream chunks are all considered to be of length=1, and the
// watermarks determine how many objects to keep in the buffer, rather than
// how many bytes or characters.
function validChunk(stream, state, chunk, cb) {
  var valid = true;
  var er = false;
  // Always throw error if a null is written
  // if we are not in object mode then throw
  // if it is not a buffer, string, or undefined.
  if (chunk === null) {
    er = new TypeError('May not write null values to stream');
  } else if (!Buffer.isBuffer(chunk) && typeof chunk !== 'string' && chunk !== undefined && !state.objectMode) {
    er = new TypeError('Invalid non-string/buffer chunk');
  }
  if (er) {
    stream.emit('error', er);
    nextTick(cb, er);
    valid = false;
  }
  return valid;
}

Writable$1.prototype.write = function (chunk, encoding, cb) {
  var state = this._writableState;
  var ret = false;

  if (typeof encoding === 'function') {
    cb = encoding;
    encoding = null;
  }

  if (Buffer.isBuffer(chunk)) encoding = 'buffer';else if (!encoding) encoding = state.defaultEncoding;

  if (typeof cb !== 'function') cb = nop;

  if (state.ended) writeAfterEnd(this, cb);else if (validChunk(this, state, chunk, cb)) {
    state.pendingcb++;
    ret = writeOrBuffer(this, state, chunk, encoding, cb);
  }

  return ret;
};

Writable$1.prototype.cork = function () {
  var state = this._writableState;

  state.corked++;
};

Writable$1.prototype.uncork = function () {
  var state = this._writableState;

  if (state.corked) {
    state.corked--;

    if (!state.writing && !state.corked && !state.finished && !state.bufferProcessing && state.bufferedRequest) clearBuffer(this, state);
  }
};

Writable$1.prototype.setDefaultEncoding = function setDefaultEncoding(encoding) {
  // node::ParseEncoding() requires lower case.
  if (typeof encoding === 'string') encoding = encoding.toLowerCase();
  if (!(['hex', 'utf8', 'utf-8', 'ascii', 'binary', 'base64', 'ucs2', 'ucs-2', 'utf16le', 'utf-16le', 'raw'].indexOf((encoding + '').toLowerCase()) > -1)) throw new TypeError('Unknown encoding: ' + encoding);
  this._writableState.defaultEncoding = encoding;
  return this;
};

function decodeChunk(state, chunk, encoding) {
  if (!state.objectMode && state.decodeStrings !== false && typeof chunk === 'string') {
    chunk = Buffer.from(chunk, encoding);
  }
  return chunk;
}

// if we're already writing something, then just put this
// in the queue, and wait our turn.  Otherwise, call _write
// If we return false, then we need a drain event, so set that flag.
function writeOrBuffer(stream, state, chunk, encoding, cb) {
  chunk = decodeChunk(state, chunk, encoding);

  if (Buffer.isBuffer(chunk)) encoding = 'buffer';
  var len = state.objectMode ? 1 : chunk.length;

  state.length += len;

  var ret = state.length < state.highWaterMark;
  // we must ensure that previous needDrain will not be reset to false.
  if (!ret) state.needDrain = true;

  if (state.writing || state.corked) {
    var last = state.lastBufferedRequest;
    state.lastBufferedRequest = new WriteReq(chunk, encoding, cb);
    if (last) {
      last.next = state.lastBufferedRequest;
    } else {
      state.bufferedRequest = state.lastBufferedRequest;
    }
    state.bufferedRequestCount += 1;
  } else {
    doWrite(stream, state, false, len, chunk, encoding, cb);
  }

  return ret;
}

function doWrite(stream, state, writev, len, chunk, encoding, cb) {
  state.writelen = len;
  state.writecb = cb;
  state.writing = true;
  state.sync = true;
  if (writev) stream._writev(chunk, state.onwrite);else stream._write(chunk, encoding, state.onwrite);
  state.sync = false;
}

function onwriteError(stream, state, sync, er, cb) {
  --state.pendingcb;
  if (sync) nextTick(cb, er);else cb(er);

  stream._writableState.errorEmitted = true;
  stream.emit('error', er);
}

function onwriteStateUpdate(state) {
  state.writing = false;
  state.writecb = null;
  state.length -= state.writelen;
  state.writelen = 0;
}

function onwrite(stream, er) {
  var state = stream._writableState;
  var sync = state.sync;
  var cb = state.writecb;

  onwriteStateUpdate(state);

  if (er) onwriteError(stream, state, sync, er, cb);else {
    // Check if we're actually ready to finish, but don't emit yet
    var finished = needFinish(state);

    if (!finished && !state.corked && !state.bufferProcessing && state.bufferedRequest) {
      clearBuffer(stream, state);
    }

    if (sync) {
      /*<replacement>*/
        nextTick(afterWrite, stream, state, finished, cb);
      /*</replacement>*/
    } else {
        afterWrite(stream, state, finished, cb);
      }
  }
}

function afterWrite(stream, state, finished, cb) {
  if (!finished) onwriteDrain(stream, state);
  state.pendingcb--;
  cb();
  finishMaybe(stream, state);
}

// Must force callback to be called on nextTick, so that we don't
// emit 'drain' before the write() consumer gets the 'false' return
// value, and has a chance to attach a 'drain' listener.
function onwriteDrain(stream, state) {
  if (state.length === 0 && state.needDrain) {
    state.needDrain = false;
    stream.emit('drain');
  }
}

// if there's something in the buffer waiting, then process it
function clearBuffer(stream, state) {
  state.bufferProcessing = true;
  var entry = state.bufferedRequest;

  if (stream._writev && entry && entry.next) {
    // Fast case, write everything using _writev()
    var l = state.bufferedRequestCount;
    var buffer = new Array(l);
    var holder = state.corkedRequestsFree;
    holder.entry = entry;

    var count = 0;
    while (entry) {
      buffer[count] = entry;
      entry = entry.next;
      count += 1;
    }

    doWrite(stream, state, true, state.length, buffer, '', holder.finish);

    // doWrite is almost always async, defer these to save a bit of time
    // as the hot path ends with doWrite
    state.pendingcb++;
    state.lastBufferedRequest = null;
    if (holder.next) {
      state.corkedRequestsFree = holder.next;
      holder.next = null;
    } else {
      state.corkedRequestsFree = new CorkedRequest(state);
    }
  } else {
    // Slow case, write chunks one-by-one
    while (entry) {
      var chunk = entry.chunk;
      var encoding = entry.encoding;
      var cb = entry.callback;
      var len = state.objectMode ? 1 : chunk.length;

      doWrite(stream, state, false, len, chunk, encoding, cb);
      entry = entry.next;
      // if we didn't call the onwrite immediately, then
      // it means that we need to wait until it does.
      // also, that means that the chunk and cb are currently
      // being processed, so move the buffer counter past them.
      if (state.writing) {
        break;
      }
    }

    if (entry === null) state.lastBufferedRequest = null;
  }

  state.bufferedRequestCount = 0;
  state.bufferedRequest = entry;
  state.bufferProcessing = false;
}

Writable$1.prototype._write = function (chunk, encoding, cb) {
  cb(new Error('not implemented'));
};

Writable$1.prototype._writev = null;

Writable$1.prototype.end = function (chunk, encoding, cb) {
  var state = this._writableState;

  if (typeof chunk === 'function') {
    cb = chunk;
    chunk = null;
    encoding = null;
  } else if (typeof encoding === 'function') {
    cb = encoding;
    encoding = null;
  }

  if (chunk !== null && chunk !== undefined) this.write(chunk, encoding);

  // .end() fully uncorks
  if (state.corked) {
    state.corked = 1;
    this.uncork();
  }

  // ignore unnecessary end() calls.
  if (!state.ending && !state.finished) endWritable(this, state, cb);
};

function needFinish(state) {
  return state.ending && state.length === 0 && state.bufferedRequest === null && !state.finished && !state.writing;
}

function prefinish(stream, state) {
  if (!state.prefinished) {
    state.prefinished = true;
    stream.emit('prefinish');
  }
}

function finishMaybe(stream, state) {
  var need = needFinish(state);
  if (need) {
    if (state.pendingcb === 0) {
      prefinish(stream, state);
      state.finished = true;
      stream.emit('finish');
    } else {
      prefinish(stream, state);
    }
  }
  return need;
}

function endWritable(stream, state, cb) {
  state.ending = true;
  finishMaybe(stream, state);
  if (cb) {
    if (state.finished) nextTick(cb);else stream.once('finish', cb);
  }
  state.ended = true;
  stream.writable = false;
}

// It seems a linked list but it is not
// there will be only 2 of these for each stream
function CorkedRequest(state) {
  var _this = this;

  this.next = null;
  this.entry = null;

  this.finish = function (err) {
    var entry = _this.entry;
    _this.entry = null;
    while (entry) {
      var cb = entry.callback;
      state.pendingcb--;
      cb(err);
      entry = entry.next;
    }
    if (state.corkedRequestsFree) {
      state.corkedRequestsFree.next = _this;
    } else {
      state.corkedRequestsFree = _this;
    }
  };
}

inherits$1(Duplex$1, Readable$1);

var keys = Object.keys(Writable$1.prototype);
for (var v = 0; v < keys.length; v++) {
  var method = keys[v];
  if (!Duplex$1.prototype[method]) Duplex$1.prototype[method] = Writable$1.prototype[method];
}
function Duplex$1(options) {
  if (!(this instanceof Duplex$1)) return new Duplex$1(options);

  Readable$1.call(this, options);
  Writable$1.call(this, options);

  if (options && options.readable === false) this.readable = false;

  if (options && options.writable === false) this.writable = false;

  this.allowHalfOpen = true;
  if (options && options.allowHalfOpen === false) this.allowHalfOpen = false;

  this.once('end', onend);
}

// the no-half-open enforcer
function onend() {
  // if we allow half-open state, or if the writable side ended,
  // then we're ok.
  if (this.allowHalfOpen || this._writableState.ended) return;

  // no more data can be written.
  // But allow more writes to happen in this tick.
  nextTick(onEndNT, this);
}

function onEndNT(self) {
  self.end();
}

// a transform stream is a readable/writable stream where you do
// something with the data.  Sometimes it's called a "filter",
// but that's not a great name for it, since that implies a thing where
// some bits pass through, and others are simply ignored.  (That would
// be a valid example of a transform, of course.)
//
// While the output is causally related to the input, it's not a
// necessarily symmetric or synchronous transformation.  For example,
// a zlib stream might take multiple plain-text writes(), and then
// emit a single compressed chunk some time in the future.
//
// Here's how this works:
//
// The Transform stream has all the aspects of the readable and writable
// stream classes.  When you write(chunk), that calls _write(chunk,cb)
// internally, and returns false if there's a lot of pending writes
// buffered up.  When you call read(), that calls _read(n) until
// there's enough pending readable data buffered up.
//
// In a transform stream, the written data is placed in a buffer.  When
// _read(n) is called, it transforms the queued up data, calling the
// buffered _write cb's as it consumes chunks.  If consuming a single
// written chunk would result in multiple output chunks, then the first
// outputted bit calls the readcb, and subsequent chunks just go into
// the read buffer, and will cause it to emit 'readable' if necessary.
//
// This way, back-pressure is actually determined by the reading side,
// since _read has to be called to start processing a new chunk.  However,
// a pathological inflate type of transform can cause excessive buffering
// here.  For example, imagine a stream where every byte of input is
// interpreted as an integer from 0-255, and then results in that many
// bytes of output.  Writing the 4 bytes {ff,ff,ff,ff} would result in
// 1kb of data being output.  In this case, you could write a very small
// amount of input, and end up with a very large amount of output.  In
// such a pathological inflating mechanism, there'd be no way to tell
// the system to stop doing the transform.  A single 4MB write could
// cause the system to run out of memory.
//
// However, even in such a pathological case, only a single written chunk
// would be consumed, and then the rest would wait (un-transformed) until
// the results of the previous transformed chunk were consumed.


inherits$1(Transform$1, Duplex$1);

function TransformState(stream) {
  this.afterTransform = function (er, data) {
    return afterTransform(stream, er, data);
  };

  this.needTransform = false;
  this.transforming = false;
  this.writecb = null;
  this.writechunk = null;
  this.writeencoding = null;
}

function afterTransform(stream, er, data) {
  var ts = stream._transformState;
  ts.transforming = false;

  var cb = ts.writecb;

  if (!cb) return stream.emit('error', new Error('no writecb in Transform class'));

  ts.writechunk = null;
  ts.writecb = null;

  if (data !== null && data !== undefined) stream.push(data);

  cb(er);

  var rs = stream._readableState;
  rs.reading = false;
  if (rs.needReadable || rs.length < rs.highWaterMark) {
    stream._read(rs.highWaterMark);
  }
}
function Transform$1(options) {
  if (!(this instanceof Transform$1)) return new Transform$1(options);

  Duplex$1.call(this, options);

  this._transformState = new TransformState(this);

  // when the writable side finishes, then flush out anything remaining.
  var stream = this;

  // start out asking for a readable event once data is transformed.
  this._readableState.needReadable = true;

  // we have implemented the _read method, and done the other things
  // that Readable wants before the first _read call, so unset the
  // sync guard flag.
  this._readableState.sync = false;

  if (options) {
    if (typeof options.transform === 'function') this._transform = options.transform;

    if (typeof options.flush === 'function') this._flush = options.flush;
  }

  this.once('prefinish', function () {
    if (typeof this._flush === 'function') this._flush(function (er) {
      done(stream, er);
    });else done(stream);
  });
}

Transform$1.prototype.push = function (chunk, encoding) {
  this._transformState.needTransform = false;
  return Duplex$1.prototype.push.call(this, chunk, encoding);
};

// This is the part where you do stuff!
// override this function in implementation classes.
// 'chunk' is an input chunk.
//
// Call `push(newChunk)` to pass along transformed output
// to the readable side.  You may call 'push' zero or more times.
//
// Call `cb(err)` when you are done with this chunk.  If you pass
// an error, then that'll put the hurt on the whole operation.  If you
// never call cb(), then you'll never get another chunk.
Transform$1.prototype._transform = function (chunk, encoding, cb) {
  throw new Error('Not implemented');
};

Transform$1.prototype._write = function (chunk, encoding, cb) {
  var ts = this._transformState;
  ts.writecb = cb;
  ts.writechunk = chunk;
  ts.writeencoding = encoding;
  if (!ts.transforming) {
    var rs = this._readableState;
    if (ts.needTransform || rs.needReadable || rs.length < rs.highWaterMark) this._read(rs.highWaterMark);
  }
};

// Doesn't matter what the args are here.
// _transform does all the work.
// That we got here means that the readable side wants more data.
Transform$1.prototype._read = function (n) {
  var ts = this._transformState;

  if (ts.writechunk !== null && ts.writecb && !ts.transforming) {
    ts.transforming = true;
    this._transform(ts.writechunk, ts.writeencoding, ts.afterTransform);
  } else {
    // mark that we need a transform, so that any data that comes in
    // will get processed, now that we've asked for it.
    ts.needTransform = true;
  }
};

function done(stream, er) {
  if (er) return stream.emit('error', er);

  // if there's nothing in the write buffer, then that means
  // that nothing more will ever be provided
  var ws = stream._writableState;
  var ts = stream._transformState;

  if (ws.length) throw new Error('Calling transform done when ws.length != 0');

  if (ts.transforming) throw new Error('Calling transform done when still transforming');

  return stream.push(null);
}

inherits$1(PassThrough$1, Transform$1);
function PassThrough$1(options) {
  if (!(this instanceof PassThrough$1)) return new PassThrough$1(options);

  Transform$1.call(this, options);
}

PassThrough$1.prototype._transform = function (chunk, encoding, cb) {
  cb(null, chunk);
};

inherits$1(Stream$1, EventEmitter);
Stream$1.Readable = Readable$1;
Stream$1.Writable = Writable$1;
Stream$1.Duplex = Duplex$1;
Stream$1.Transform = Transform$1;
Stream$1.PassThrough = PassThrough$1;

// Backwards-compat with node 0.4.x
Stream$1.Stream = Stream$1;

// old-style streams.  Note that the pipe method (the only relevant
// part of this class) is overridden in the Readable class.

function Stream$1() {
  EventEmitter.call(this);
}

Stream$1.prototype.pipe = function(dest, options) {
  var source = this;

  function ondata(chunk) {
    if (dest.writable) {
      if (false === dest.write(chunk) && source.pause) {
        source.pause();
      }
    }
  }

  source.on('data', ondata);

  function ondrain() {
    if (source.readable && source.resume) {
      source.resume();
    }
  }

  dest.on('drain', ondrain);

  // If the 'end' option is not supplied, dest.end() will be called when
  // source gets the 'end' or 'close' events.  Only dest.end() once.
  if (!dest._isStdio && (!options || options.end !== false)) {
    source.on('end', onend);
    source.on('close', onclose);
  }

  var didOnEnd = false;
  function onend() {
    if (didOnEnd) return;
    didOnEnd = true;

    dest.end();
  }


  function onclose() {
    if (didOnEnd) return;
    didOnEnd = true;

    if (typeof dest.destroy === 'function') dest.destroy();
  }

  // don't leave dangling pipes when there are errors.
  function onerror(er) {
    cleanup();
    if (EventEmitter.listenerCount(this, 'error') === 0) {
      throw er; // Unhandled stream error in pipe.
    }
  }

  source.on('error', onerror);
  dest.on('error', onerror);

  // remove all the event listeners that were added.
  function cleanup() {
    source.removeListener('data', ondata);
    dest.removeListener('drain', ondrain);

    source.removeListener('end', onend);
    source.removeListener('close', onclose);

    source.removeListener('error', onerror);
    dest.removeListener('error', onerror);

    source.removeListener('end', cleanup);
    source.removeListener('close', cleanup);

    dest.removeListener('close', cleanup);
  }

  source.on('end', cleanup);
  source.on('close', cleanup);

  dest.on('close', cleanup);

  dest.emit('pipe', source);

  // Allow for unix-like usage: A.pipe(B).pipe(C)
  return dest;
};


var stream = Object.freeze({
	default: Stream$1,
	Readable: Readable$1,
	Writable: Writable$1,
	Duplex: Duplex$1,
	Transform: Transform$1,
	PassThrough: PassThrough$1,
	Stream: Stream$1
});

var Stream$2 = ( stream && Stream$1 ) || stream;

var index$4 = createCommonjsModule(function (module, exports) {
// through
//
// a stream that does nothing but re-emit the input.
// useful for aggregating a series of changing but not ending streams into one stream)

exports = module.exports = through;
through.through = through;

//create a readable writable stream.

function through (write, end, opts) {
  write = write || function (data) { this.queue(data); };
  end = end || function () { this.queue(null); };

  var ended = false, destroyed = false, buffer = [], _ended = false;
  var stream = new Stream$2();
  stream.readable = stream.writable = true;
  stream.paused = false;

//  stream.autoPause   = !(opts && opts.autoPause   === false)
  stream.autoDestroy = !(opts && opts.autoDestroy === false);

  stream.write = function (data) {
    write.call(this, data);
    return !stream.paused
  };

  function drain() {
    while(buffer.length && !stream.paused) {
      var data = buffer.shift();
      if(null === data)
        return stream.emit('end')
      else
        stream.emit('data', data);
    }
  }

  stream.queue = stream.push = function (data) {
//    console.error(ended)
    if(_ended) return stream
    if(data === null) _ended = true;
    buffer.push(data);
    drain();
    return stream
  };

  //this will be registered as the first 'end' listener
  //must call destroy next tick, to make sure we're after any
  //stream piped from here.
  //this is only a problem if end is not emitted synchronously.
  //a nicer way to do this is to make sure this is the last listener for 'end'

  stream.on('end', function () {
    stream.readable = false;
    if(!stream.writable && stream.autoDestroy)
      nextTick(function () {
        stream.destroy();
      });
  });

  function _end () {
    stream.writable = false;
    end.call(stream);
    if(!stream.readable && stream.autoDestroy)
      stream.destroy();
  }

  stream.end = function (data) {
    if(ended) return
    ended = true;
    if(arguments.length) stream.write(data);
    _end(); // will emit or queue
    return stream
  };

  stream.destroy = function () {
    if(destroyed) return
    destroyed = true;
    ended = true;
    buffer.length = 0;
    stream.writable = stream.readable = false;
    stream.emit('close');
    return stream
  };

  stream.pause = function () {
    if(stream.paused) return
    stream.paused = true;
    return stream
  };

  stream.resume = function () {
    if(stream.paused) {
      stream.paused = false;
      stream.emit('resume');
    }
    drain();
    //may have become paused again,
    //as drain emits 'data'.
    if(!stream.paused)
      stream.emit('drain');
    return stream
  };
  return stream
}
});

var empty = {};


var empty$1 = Object.freeze({
	default: empty
});

var fs = ( empty$1 && empty ) || empty$1;

var default_stream = function () {
    var line = '';
    var stream = index$4(write, flush);
    return stream;
    
    function write (buf) {
        for (var i = 0; i < buf.length; i++) {
            var c = typeof buf === 'string'
                ? buf.charAt(i)
                : String.fromCharCode(buf[i]);
            if (c === '\n') flush();
            else line += c;
        }
    }
    
    function flush () {
        if (fs.writeSync && /^win/.test(process.platform)) {
            try { fs.writeSync(1, line + '\n'); }
            catch (e) { stream.emit('error', e); }
        } else {
            try { console.log(line); }
            catch (e) { stream.emit('error', e); }
        }
        line = '';
    }
};

var __dirname = '/Users/rtsao/rtsaoforks/create-universal-package/packages/tape-cup/node_modules/tape/lib';

var keys$1 = createCommonjsModule(function (module, exports) {
exports = module.exports = typeof Object.keys === 'function'
  ? Object.keys : shim;

exports.shim = shim;
function shim (obj) {
  var keys = [];
  for (var key in obj) keys.push(key);
  return keys;
}
});

var is_arguments = createCommonjsModule(function (module, exports) {
var supportsArgumentsClass = (function(){
  return Object.prototype.toString.call(arguments)
})() == '[object Arguments]';

exports = module.exports = supportsArgumentsClass ? supported : unsupported;

exports.supported = supported;
function supported(object) {
  return Object.prototype.toString.call(object) == '[object Arguments]';
}

exports.unsupported = unsupported;
function unsupported(object){
  return object &&
    typeof object == 'object' &&
    typeof object.length == 'number' &&
    Object.prototype.hasOwnProperty.call(object, 'callee') &&
    !Object.prototype.propertyIsEnumerable.call(object, 'callee') ||
    false;
}
});

var index$6 = createCommonjsModule(function (module) {
var pSlice = Array.prototype.slice;



var deepEqual = module.exports = function (actual, expected, opts) {
  if (!opts) opts = {};
  // 7.1. All identical values are equivalent, as determined by ===.
  if (actual === expected) {
    return true;

  } else if (actual instanceof Date && expected instanceof Date) {
    return actual.getTime() === expected.getTime();

  // 7.3. Other pairs that do not both pass typeof value == 'object',
  // equivalence is determined by ==.
  } else if (!actual || !expected || typeof actual != 'object' && typeof expected != 'object') {
    return opts.strict ? actual === expected : actual == expected;

  // 7.4. For all other Object pairs, including Array objects, equivalence is
  // determined by having the same number of owned properties (as verified
  // with Object.prototype.hasOwnProperty.call), the same set of keys
  // (although not necessarily the same order), equivalent values for every
  // corresponding key, and an identical 'prototype' property. Note: this
  // accounts for both named and indexed properties on Arrays.
  } else {
    return objEquiv(actual, expected, opts);
  }
};

function isUndefinedOrNull(value) {
  return value === null || value === undefined;
}

function isBuffer (x) {
  if (!x || typeof x !== 'object' || typeof x.length !== 'number') return false;
  if (typeof x.copy !== 'function' || typeof x.slice !== 'function') {
    return false;
  }
  if (x.length > 0 && typeof x[0] !== 'number') return false;
  return true;
}

function objEquiv(a, b, opts) {
  var i, key;
  if (isUndefinedOrNull(a) || isUndefinedOrNull(b))
    return false;
  // an identical 'prototype' property.
  if (a.prototype !== b.prototype) return false;
  //~~~I've managed to break Object.keys through screwy arguments passing.
  //   Converting to array solves the problem.
  if (is_arguments(a)) {
    if (!is_arguments(b)) {
      return false;
    }
    a = pSlice.call(a);
    b = pSlice.call(b);
    return deepEqual(a, b, opts);
  }
  if (isBuffer(a)) {
    if (!isBuffer(b)) {
      return false;
    }
    if (a.length !== b.length) return false;
    for (i = 0; i < a.length; i++) {
      if (a[i] !== b[i]) return false;
    }
    return true;
  }
  try {
    var ka = keys$1(a),
        kb = keys$1(b);
  } catch (e) {//happens when one is a string literal and the other isn't
    return false;
  }
  // having the same number of owned properties (keys incorporates
  // hasOwnProperty)
  if (ka.length != kb.length)
    return false;
  //the same set of keys (although not necessarily the same order),
  ka.sort();
  kb.sort();
  //~~~cheap key test
  for (i = ka.length - 1; i >= 0; i--) {
    if (ka[i] != kb[i])
      return false;
  }
  //equivalent values for every corresponding key, and
  //~~~possibly expensive deep test
  for (i = ka.length - 1; i >= 0; i--) {
    key = ka[i];
    if (!deepEqual(a[key], b[key], opts)) return false;
  }
  return typeof a === typeof b;
}
});

// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

// resolves . and .. elements in a path array with directory names there
// must be no slashes, empty elements, or device names (c:\) in the array
// (so also no leading and trailing slashes - it does not distinguish
// relative and absolute paths)
function normalizeArray(parts, allowAboveRoot) {
  // if the path tries to go above the root, `up` ends up > 0
  var up = 0;
  for (var i = parts.length - 1; i >= 0; i--) {
    var last = parts[i];
    if (last === '.') {
      parts.splice(i, 1);
    } else if (last === '..') {
      parts.splice(i, 1);
      up++;
    } else if (up) {
      parts.splice(i, 1);
      up--;
    }
  }

  // if the path is allowed to go above the root, restore leading ..s
  if (allowAboveRoot) {
    for (; up--; up) {
      parts.unshift('..');
    }
  }

  return parts;
}

// Split a filename into [root, dir, basename, ext], unix version
// 'root' is just a slash, or nothing.
var splitPathRe =
    /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/;
var splitPath = function(filename) {
  return splitPathRe.exec(filename).slice(1);
};

// path.resolve([from ...], to)
// posix version
function resolve() {
  var resolvedPath = '',
      resolvedAbsolute = false;

  for (var i = arguments.length - 1; i >= -1 && !resolvedAbsolute; i--) {
    var path = (i >= 0) ? arguments[i] : '/';

    // Skip empty and invalid entries
    if (typeof path !== 'string') {
      throw new TypeError('Arguments to path.resolve must be strings');
    } else if (!path) {
      continue;
    }

    resolvedPath = path + '/' + resolvedPath;
    resolvedAbsolute = path.charAt(0) === '/';
  }

  // At this point the path should be resolved to a full absolute path, but
  // handle relative paths to be safe (might happen when process.cwd() fails)

  // Normalize the path
  resolvedPath = normalizeArray(filter(resolvedPath.split('/'), function(p) {
    return !!p;
  }), !resolvedAbsolute).join('/');

  return ((resolvedAbsolute ? '/' : '') + resolvedPath) || '.';
}

// path.normalize(path)
// posix version
function normalize(path) {
  var isPathAbsolute = isAbsolute(path),
      trailingSlash = substr(path, -1) === '/';

  // Normalize the path
  path = normalizeArray(filter(path.split('/'), function(p) {
    return !!p;
  }), !isPathAbsolute).join('/');

  if (!path && !isPathAbsolute) {
    path = '.';
  }
  if (path && trailingSlash) {
    path += '/';
  }

  return (isPathAbsolute ? '/' : '') + path;
}

// posix version
function isAbsolute(path) {
  return path.charAt(0) === '/';
}

// posix version
function join() {
  var paths = Array.prototype.slice.call(arguments, 0);
  return normalize(filter(paths, function(p, index) {
    if (typeof p !== 'string') {
      throw new TypeError('Arguments to path.join must be strings');
    }
    return p;
  }).join('/'));
}


// path.relative(from, to)
// posix version
function relative(from, to) {
  from = resolve(from).substr(1);
  to = resolve(to).substr(1);

  function trim(arr) {
    var start = 0;
    for (; start < arr.length; start++) {
      if (arr[start] !== '') break;
    }

    var end = arr.length - 1;
    for (; end >= 0; end--) {
      if (arr[end] !== '') break;
    }

    if (start > end) return [];
    return arr.slice(start, end - start + 1);
  }

  var fromParts = trim(from.split('/'));
  var toParts = trim(to.split('/'));

  var length = Math.min(fromParts.length, toParts.length);
  var samePartsLength = length;
  for (var i = 0; i < length; i++) {
    if (fromParts[i] !== toParts[i]) {
      samePartsLength = i;
      break;
    }
  }

  var outputParts = [];
  for (var i = samePartsLength; i < fromParts.length; i++) {
    outputParts.push('..');
  }

  outputParts = outputParts.concat(toParts.slice(samePartsLength));

  return outputParts.join('/');
}

var sep = '/';
var delimiter = ':';

function dirname(path) {
  var result = splitPath(path),
      root = result[0],
      dir = result[1];

  if (!root && !dir) {
    // No dirname whatsoever
    return '.';
  }

  if (dir) {
    // It has a dirname, strip trailing slash
    dir = dir.substr(0, dir.length - 1);
  }

  return root + dir;
}

function basename(path, ext) {
  var f = splitPath(path)[2];
  // TODO: make this comparison case-insensitive on windows?
  if (ext && f.substr(-1 * ext.length) === ext) {
    f = f.substr(0, f.length - ext.length);
  }
  return f;
}


function extname(path) {
  return splitPath(path)[3];
}
var path = {
  extname: extname,
  basename: basename,
  dirname: dirname,
  sep: sep,
  delimiter: delimiter,
  relative: relative,
  join: join,
  isAbsolute: isAbsolute,
  normalize: normalize,
  resolve: resolve
};
function filter (xs, f) {
    if (xs.filter) return xs.filter(f);
    var res = [];
    for (var i = 0; i < xs.length; i++) {
        if (f(xs[i], i, xs)) res.push(xs[i]);
    }
    return res;
}

// String.prototype.substr - negative index don't work in IE8
var substr = 'ab'.substr(-1) === 'b' ?
    function (str, start, len) { return str.substr(start, len) } :
    function (str, start, len) {
        if (start < 0) start = str.length + start;
        return str.substr(start, len);
    };


var path$1 = Object.freeze({
	resolve: resolve,
	normalize: normalize,
	isAbsolute: isAbsolute,
	join: join,
	relative: relative,
	sep: sep,
	delimiter: delimiter,
	dirname: dirname,
	basename: basename,
	extname: extname,
	default: path
});

var inherits_browser = createCommonjsModule(function (module) {
if (typeof Object.create === 'function') {
  // implementation from standard node.js 'util' module
  module.exports = function inherits(ctor, superCtor) {
    ctor.super_ = superCtor;
    ctor.prototype = Object.create(superCtor.prototype, {
      constructor: {
        value: ctor,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
  };
} else {
  // old school shim for old browsers
  module.exports = function inherits(ctor, superCtor) {
    ctor.super_ = superCtor;
    var TempCtor = function () {};
    TempCtor.prototype = superCtor.prototype;
    ctor.prototype = new TempCtor();
    ctor.prototype.constructor = ctor;
  };
}
});

var ERROR_MESSAGE = 'Function.prototype.bind called on incompatible ';
var slice = Array.prototype.slice;
var toStr = Object.prototype.toString;
var funcType = '[object Function]';

var implementation = function bind(that) {
    var target = this;
    if (typeof target !== 'function' || toStr.call(target) !== funcType) {
        throw new TypeError(ERROR_MESSAGE + target);
    }
    var args = slice.call(arguments, 1);

    var bound;
    var binder = function () {
        if (this instanceof bound) {
            var result = target.apply(
                this,
                args.concat(slice.call(arguments))
            );
            if (Object(result) === result) {
                return result;
            }
            return this;
        } else {
            return target.apply(
                that,
                args.concat(slice.call(arguments))
            );
        }
    };

    var boundLength = Math.max(0, target.length - args.length);
    var boundArgs = [];
    for (var i = 0; i < boundLength; i++) {
        boundArgs.push('$' + i);
    }

    bound = Function('binder', 'return function (' + boundArgs.join(',') + '){ return binder.apply(this,arguments); }')(binder);

    if (target.prototype) {
        var Empty = function Empty() {};
        Empty.prototype = target.prototype;
        bound.prototype = new Empty();
        Empty.prototype = null;
    }

    return bound;
};

var index$10 = Function.prototype.bind || implementation;

var index$8 = index$10.call(Function.call, Object.prototype.hasOwnProperty);

var toStr$3 = Object.prototype.toString;

var isArguments$1 = function isArguments(value) {
	var str = toStr$3.call(value);
	var isArgs = str === '[object Arguments]';
	if (!isArgs) {
		isArgs = str !== '[object Array]' &&
			value !== null &&
			typeof value === 'object' &&
			typeof value.length === 'number' &&
			value.length >= 0 &&
			toStr$3.call(value.callee) === '[object Function]';
	}
	return isArgs;
};

// modified from https://github.com/es-shims/es5-shim
var has = Object.prototype.hasOwnProperty;
var toStr$2 = Object.prototype.toString;
var slice$1 = Array.prototype.slice;

var isEnumerable$1 = Object.prototype.propertyIsEnumerable;
var hasDontEnumBug = !isEnumerable$1.call({ toString: null }, 'toString');
var hasProtoEnumBug = isEnumerable$1.call(function () {}, 'prototype');
var dontEnums = [
	'toString',
	'toLocaleString',
	'valueOf',
	'hasOwnProperty',
	'isPrototypeOf',
	'propertyIsEnumerable',
	'constructor'
];
var equalsConstructorPrototype = function (o) {
	var ctor = o.constructor;
	return ctor && ctor.prototype === o;
};
var excludedKeys = {
	$console: true,
	$external: true,
	$frame: true,
	$frameElement: true,
	$frames: true,
	$innerHeight: true,
	$innerWidth: true,
	$outerHeight: true,
	$outerWidth: true,
	$pageXOffset: true,
	$pageYOffset: true,
	$parent: true,
	$scrollLeft: true,
	$scrollTop: true,
	$scrollX: true,
	$scrollY: true,
	$self: true,
	$webkitIndexedDB: true,
	$webkitStorageInfo: true,
	$window: true
};
var hasAutomationEqualityBug = (function () {
	/* global window */
	if (typeof window === 'undefined') { return false; }
	for (var k in window) {
		try {
			if (!excludedKeys['$' + k] && has.call(window, k) && window[k] !== null && typeof window[k] === 'object') {
				try {
					equalsConstructorPrototype(window[k]);
				} catch (e) {
					return true;
				}
			}
		} catch (e) {
			return true;
		}
	}
	return false;
}());
var equalsConstructorPrototypeIfNotBuggy = function (o) {
	/* global window */
	if (typeof window === 'undefined' || !hasAutomationEqualityBug) {
		return equalsConstructorPrototype(o);
	}
	try {
		return equalsConstructorPrototype(o);
	} catch (e) {
		return false;
	}
};

var keysShim = function keys(object) {
	var isObject = object !== null && typeof object === 'object';
	var isFunction = toStr$2.call(object) === '[object Function]';
	var isArguments = isArguments$1(object);
	var isString = isObject && toStr$2.call(object) === '[object String]';
	var theKeys = [];

	if (!isObject && !isFunction && !isArguments) {
		throw new TypeError('Object.keys called on a non-object');
	}

	var skipProto = hasProtoEnumBug && isFunction;
	if (isString && object.length > 0 && !has.call(object, 0)) {
		for (var i = 0; i < object.length; ++i) {
			theKeys.push(String(i));
		}
	}

	if (isArguments && object.length > 0) {
		for (var j = 0; j < object.length; ++j) {
			theKeys.push(String(j));
		}
	} else {
		for (var name in object) {
			if (!(skipProto && name === 'prototype') && has.call(object, name)) {
				theKeys.push(String(name));
			}
		}
	}

	if (hasDontEnumBug) {
		var skipConstructor = equalsConstructorPrototypeIfNotBuggy(object);

		for (var k = 0; k < dontEnums.length; ++k) {
			if (!(skipConstructor && dontEnums[k] === 'constructor') && has.call(object, dontEnums[k])) {
				theKeys.push(dontEnums[k]);
			}
		}
	}
	return theKeys;
};

keysShim.shim = function shimObjectKeys() {
	if (Object.keys) {
		var keysWorksWithArguments = (function () {
			// Safari 5.0 bug
			return (Object.keys(arguments) || '').length === 2;
		}(1, 2));
		if (!keysWorksWithArguments) {
			var originalKeys = Object.keys;
			Object.keys = function keys(object) {
				if (isArguments$1(object)) {
					return originalKeys(slice$1.call(object));
				} else {
					return originalKeys(object);
				}
			};
		}
	} else {
		Object.keys = keysShim;
	}
	return Object.keys || keysShim;
};

var index$16 = keysShim;

var hasOwn = Object.prototype.hasOwnProperty;
var toString$1 = Object.prototype.toString;

var index$18 = function forEach (obj, fn, ctx) {
    if (toString$1.call(fn) !== '[object Function]') {
        throw new TypeError('iterator must be a function');
    }
    var l = obj.length;
    if (l === +l) {
        for (var i = 0; i < l; i++) {
            fn.call(ctx, obj[i], i, obj);
        }
    } else {
        for (var k in obj) {
            if (hasOwn.call(obj, k)) {
                fn.call(ctx, obj[k], k, obj);
            }
        }
    }
};

var hasSymbols = typeof Symbol === 'function' && typeof Symbol() === 'symbol';

var toStr$1 = Object.prototype.toString;

var isFunction$1 = function (fn) {
	return typeof fn === 'function' && toStr$1.call(fn) === '[object Function]';
};

var arePropertyDescriptorsSupported = function () {
	var obj = {};
	try {
		Object.defineProperty(obj, 'x', { enumerable: false, value: obj });
        /* eslint-disable no-unused-vars, no-restricted-syntax */
        for (var _ in obj) { return false; }
        /* eslint-enable no-unused-vars, no-restricted-syntax */
		return obj.x === obj;
	} catch (e) { /* this is IE 8. */
		return false;
	}
};
var supportsDescriptors = Object.defineProperty && arePropertyDescriptorsSupported();

var defineProperty = function (object, name, value, predicate) {
	if (name in object && (!isFunction$1(predicate) || !predicate())) {
		return;
	}
	if (supportsDescriptors) {
		Object.defineProperty(object, name, {
			configurable: true,
			enumerable: false,
			value: value,
			writable: true
		});
	} else {
		object[name] = value;
	}
};

var defineProperties = function (object, map) {
	var predicates = arguments.length > 2 ? arguments[2] : {};
	var props = index$16(map);
	if (hasSymbols) {
		props = props.concat(Object.getOwnPropertySymbols(map));
	}
	index$18(props, function (name) {
		defineProperty(object, name, map[name], predicates[name]);
	});
};

defineProperties.supportsDescriptors = !!supportsDescriptors;

var index$14 = defineProperties;

var _isNaN = Number.isNaN || function isNaN(a) {
	return a !== a;
};

var $isNaN = Number.isNaN || function (a) { return a !== a; };

var _isFinite = Number.isFinite || function (x) { return typeof x === 'number' && !$isNaN(x) && x !== Infinity && x !== -Infinity; };

var sign = function sign(number) {
	return number >= 0 ? 1 : -1;
};

var mod = function mod(number, modulo) {
	var remain = number % modulo;
	return Math.floor(remain >= 0 ? remain : remain + modulo);
};

var fnToStr = Function.prototype.toString;

var constructorRegex = /^\s*class /;
var isES6ClassFn = function isES6ClassFn(value) {
	try {
		var fnStr = fnToStr.call(value);
		var singleStripped = fnStr.replace(/\/\/.*\n/g, '');
		var multiStripped = singleStripped.replace(/\/\*[.\s\S]*\*\//g, '');
		var spaceStripped = multiStripped.replace(/\n/mg, ' ').replace(/ {2}/g, ' ');
		return constructorRegex.test(spaceStripped);
	} catch (e) {
		return false; // not a function
	}
};

var tryFunctionObject = function tryFunctionObject(value) {
	try {
		if (isES6ClassFn(value)) { return false; }
		fnToStr.call(value);
		return true;
	} catch (e) {
		return false;
	}
};
var toStr$4 = Object.prototype.toString;
var fnClass = '[object Function]';
var genClass = '[object GeneratorFunction]';
var hasToStringTag = typeof Symbol === 'function' && typeof Symbol.toStringTag === 'symbol';

var index$20 = function isCallable(value) {
	if (!value) { return false; }
	if (typeof value !== 'function' && typeof value !== 'object') { return false; }
	if (hasToStringTag) { return tryFunctionObject(value); }
	if (isES6ClassFn(value)) { return false; }
	var strClass = toStr$4.call(value);
	return strClass === fnClass || strClass === genClass;
};

var isPrimitive$1 = function isPrimitive(value) {
	return value === null || (typeof value !== 'function' && typeof value !== 'object');
};

var toStr$5 = Object.prototype.toString;





// https://es5.github.io/#x8.12
var ES5internalSlots = {
	'[[DefaultValue]]': function (O, hint) {
		var actualHint = hint || (toStr$5.call(O) === '[object Date]' ? String : Number);

		if (actualHint === String || actualHint === Number) {
			var methods = actualHint === String ? ['toString', 'valueOf'] : ['valueOf', 'toString'];
			var value, i;
			for (i = 0; i < methods.length; ++i) {
				if (index$20(O[methods[i]])) {
					value = O[methods[i]]();
					if (isPrimitive$1(value)) {
						return value;
					}
				}
			}
			throw new TypeError('No default value');
		}
		throw new TypeError('invalid [[DefaultValue]] hint supplied');
	}
};

// https://es5.github.io/#x9
var es5$2 = function ToPrimitive(input, PreferredType) {
	if (isPrimitive$1(input)) {
		return input;
	}
	return ES5internalSlots['[[DefaultValue]]'](input, PreferredType);
};

// https://es5.github.io/#x9
var ES5 = {
	ToPrimitive: es5$2,

	ToBoolean: function ToBoolean(value) {
		return Boolean(value);
	},
	ToNumber: function ToNumber(value) {
		return Number(value);
	},
	ToInteger: function ToInteger(value) {
		var number = this.ToNumber(value);
		if (_isNaN(number)) { return 0; }
		if (number === 0 || !_isFinite(number)) { return number; }
		return sign(number) * Math.floor(Math.abs(number));
	},
	ToInt32: function ToInt32(x) {
		return this.ToNumber(x) >> 0;
	},
	ToUint32: function ToUint32(x) {
		return this.ToNumber(x) >>> 0;
	},
	ToUint16: function ToUint16(value) {
		var number = this.ToNumber(value);
		if (_isNaN(number) || number === 0 || !_isFinite(number)) { return 0; }
		var posInt = sign(number) * Math.floor(Math.abs(number));
		return mod(posInt, 0x10000);
	},
	ToString: function ToString(value) {
		return String(value);
	},
	ToObject: function ToObject(value) {
		this.CheckObjectCoercible(value);
		return Object(value);
	},
	CheckObjectCoercible: function CheckObjectCoercible(value, optMessage) {
		/* jshint eqnull:true */
		if (value == null) {
			throw new TypeError(optMessage || 'Cannot call method on ' + value);
		}
		return value;
	},
	IsCallable: index$20,
	SameValue: function SameValue(x, y) {
		if (x === y) { // 0 === -0, but they are not identical.
			if (x === 0) { return 1 / x === 1 / y; }
			return true;
		}
		return _isNaN(x) && _isNaN(y);
	},

	// http://www.ecma-international.org/ecma-262/5.1/#sec-8
	Type: function Type(x) {
		if (x === null) {
			return 'Null';
		}
		if (typeof x === 'undefined') {
			return 'Undefined';
		}
		if (typeof x === 'function' || typeof x === 'object') {
			return 'Object';
		}
		if (typeof x === 'number') {
			return 'Number';
		}
		if (typeof x === 'boolean') {
			return 'Boolean';
		}
		if (typeof x === 'string') {
			return 'String';
		}
	}
};

var es5 = ES5;

var replace = index$10.call(Function.call, String.prototype.replace);

var leftWhitespace = /^[\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF]+/;
var rightWhitespace = /[\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF]+$/;

var implementation$3 = function trim() {
	var S = es5.ToString(es5.CheckObjectCoercible(this));
	return replace(replace(S, leftWhitespace, ''), rightWhitespace, '');
};

var zeroWidthSpace = '\u200b';

var polyfill = function getPolyfill() {
	if (String.prototype.trim && zeroWidthSpace.trim() === zeroWidthSpace) {
		return String.prototype.trim;
	}
	return implementation$3;
};

var shim = function shimStringTrim() {
	var polyfill$$1 = polyfill();
	index$14(String.prototype, { trim: polyfill$$1 }, { trim: function () { return String.prototype.trim !== polyfill$$1; } });
	return polyfill$$1;
};

var boundTrim = index$10.call(Function.call, polyfill());

index$14(boundTrim, {
	getPolyfill: polyfill,
	implementation: implementation$3,
	shim: shim
});

var index$12 = boundTrim;

var index$24 = isFunction$2;

var toString$3 = Object.prototype.toString;

function isFunction$2 (fn) {
  var string = toString$3.call(fn);
  return string === '[object Function]' ||
    (typeof fn === 'function' && string !== '[object RegExp]') ||
    (typeof window !== 'undefined' &&
     // IE8 and below
     (fn === window.setTimeout ||
      fn === window.alert ||
      fn === window.confirm ||
      fn === window.prompt))
}

var index$22 = forEach$1;

var toString$2 = Object.prototype.toString;
var hasOwnProperty$1 = Object.prototype.hasOwnProperty;

function forEach$1(list, iterator, context) {
    if (!index$24(iterator)) {
        throw new TypeError('iterator must be a function')
    }

    if (arguments.length < 3) {
        context = this;
    }
    
    if (toString$2.call(list) === '[object Array]')
        forEachArray(list, iterator, context);
    else if (typeof list === 'string')
        forEachString(list, iterator, context);
    else
        forEachObject(list, iterator, context);
}

function forEachArray(array, iterator, context) {
    for (var i = 0, len = array.length; i < len; i++) {
        if (hasOwnProperty$1.call(array, i)) {
            iterator.call(context, array[i], i, array);
        }
    }
}

function forEachString(string, iterator, context) {
    for (var i = 0, len = string.length; i < len; i++) {
        // no such thing as a sparse string.
        iterator.call(context, string.charAt(i), i, string);
    }
}

function forEachObject(object, iterator, context) {
    for (var k in object) {
        if (hasOwnProperty$1.call(object, k)) {
            iterator.call(context, object[k], k, object);
        }
    }
}

var path$2 = ( path$1 && path ) || path$1;

var require$$0 = ( events && EventEmitter ) || events;

var EventEmitter$2 = require$$0.EventEmitter;




var isEnumerable = index$10.call(Function.call, Object.prototype.propertyIsEnumerable);

var test$1 = Test;

var nextTick$1 = typeof setImmediate !== 'undefined'
    ? setImmediate
    : nextTick;
var safeSetTimeout = setTimeout;

inherits_browser(Test, EventEmitter$2);

var getTestArgs = function (name_, opts_, cb_) {
    var name = '(anonymous)';
    var opts = {};
    var cb;

    for (var i = 0; i < arguments.length; i++) {
        var arg = arguments[i];
        var t = typeof arg;
        if (t === 'string') {
            name = arg;
        } else if (t === 'object') {
            opts = arg || opts;
        } else if (t === 'function') {
            cb = arg;
        }
    }
    return { name: name, opts: opts, cb: cb };
};

function Test (name_, opts_, cb_) {
    if (! (this instanceof Test)) {
        return new Test(name_, opts_, cb_);
    }

    var args = getTestArgs(name_, opts_, cb_);

    this.readable = true;
    this.name = args.name || '(anonymous)';
    this.assertCount = 0;
    this.pendingCount = 0;
    this._skip = args.opts.skip || false;
    this._timeout = args.opts.timeout;
    this._objectPrintDepth = args.opts.objectPrintDepth || 5;
    this._plan = undefined;
    this._cb = args.cb;
    this._progeny = [];
    this._ok = true;

    for (var prop in this) {
        this[prop] = (function bind$$1(self, val) {
            if (typeof val === 'function') {
                return function bound() {
                    return val.apply(self, arguments);
                };
            }
            return val;
        })(this, this[prop]);
    }
}

Test.prototype.run = function () {
    if (this._skip) {
        this.comment('SKIP ' + this.name);
    }
    if (!this._cb || this._skip) {
        return this._end();
    }
    if (this._timeout != null) {
        this.timeoutAfter(this._timeout);
    }
    this.emit('prerun');
    this._cb(this);
    this.emit('run');
};

Test.prototype.test = function (name, opts, cb) {
    var self = this;
    var t = new Test(name, opts, cb);
    this._progeny.push(t);
    this.pendingCount++;
    this.emit('test', t);
    t.on('prerun', function () {
        self.assertCount++;
    });
    
    if (!self._pendingAsserts()) {
        nextTick$1(function () {
            self._end();
        });
    }
    
    nextTick$1(function() {
        if (!self._plan && self.pendingCount == self._progeny.length) {
            self._end();
        }
    });
};

Test.prototype.comment = function (msg) {
    var that = this;
    index$22(index$12(msg).split('\n'), function (aMsg) {
        that.emit('result', index$12(aMsg).replace(/^#\s*/, ''));
    });
};

Test.prototype.plan = function (n) {
    this._plan = n;
    this.emit('plan', n);
};

Test.prototype.timeoutAfter = function(ms) {
    if (!ms) throw new Error('timeoutAfter requires a timespan');
    var self = this;
    var timeout = safeSetTimeout(function() {
        self.fail('test timed out after ' + ms + 'ms');
        self.end();
    }, ms);
    this.once('end', function() {
        clearTimeout(timeout);
    });
};

Test.prototype.end = function (err) { 
    var self = this;
    if (arguments.length >= 1 && !!err) {
        this.ifError(err);
    }
    
    if (this.calledEnd) {
        this.fail('.end() called twice');
    }
    this.calledEnd = true;
    this._end();
};

Test.prototype._end = function (err) {
    var self = this;
    if (this._progeny.length) {
        var t = this._progeny.shift();
        t.on('end', function () { self._end(); });
        t.run();
        return;
    }
    
    if (!this.ended) this.emit('end');
    var pendingAsserts = this._pendingAsserts();
    if (!this._planError && this._plan !== undefined && pendingAsserts) {
        this._planError = true;
        this.fail('plan != count', {
            expected : this._plan,
            actual : this.assertCount
        });
    }
    this.ended = true;
};

Test.prototype._exit = function () {
    if (this._plan !== undefined &&
        !this._planError && this.assertCount !== this._plan) {
        this._planError = true;
        this.fail('plan != count', {
            expected : this._plan,
            actual : this.assertCount,
            exiting : true
        });
    } else if (!this.ended) {
        this.fail('test exited without ending', {
            exiting: true
        });
    }
};

Test.prototype._pendingAsserts = function () {
    if (this._plan === undefined) {
        return 1;
    }
    return this._plan - (this._progeny.length + this.assertCount);
};

Test.prototype._assert = function assert (ok, opts) {
    var self = this;
    var extra = opts.extra || {};
    
    var res = {
        id : self.assertCount ++,
        ok : Boolean(ok),
        skip : index$2(extra.skip, opts.skip),
        name : index$2(extra.message, opts.message, '(unnamed assert)'),
        operator : index$2(extra.operator, opts.operator),
        objectPrintDepth : self._objectPrintDepth
    };
    if (index$8(opts, 'actual') || index$8(extra, 'actual')) {
        res.actual = index$2(extra.actual, opts.actual);
    }
    if (index$8(opts, 'expected') || index$8(extra, 'expected')) {
        res.expected = index$2(extra.expected, opts.expected);
    }
    this._ok = Boolean(this._ok && ok);
    
    if (!ok) {
        res.error = index$2(extra.error, opts.error, new Error(res.name));
    }
    
    if (!ok) {
        var e = new Error('exception');
        var err = (e.stack || '').split('\n');
        var dir = path$2.dirname(__dirname) + path$2.sep;
        
        for (var i = 0; i < err.length; i++) {
            var m = /^[^\s]*\s*\bat\s+(.+)/.exec(err[i]);
            if (!m) {
                continue;
            }
            
            var s = m[1].split(/\s+/);
            var filem = /((?:\/|[A-Z]:\\)[^:\s]+:(\d+)(?::(\d+))?)/.exec(s[1]);
            if (!filem) {
                filem = /((?:\/|[A-Z]:\\)[^:\s]+:(\d+)(?::(\d+))?)/.exec(s[2]);
                
                if (!filem) {
                    filem = /((?:\/|[A-Z]:\\)[^:\s]+:(\d+)(?::(\d+))?)/.exec(s[3]);

                    if (!filem) {
                        continue;
                    }
                }
            }
            
            if (filem[1].slice(0, dir.length) === dir) {
                continue;
            }
            
            res.functionName = s[0];
            res.file = filem[1];
            res.line = Number(filem[2]);
            if (filem[3]) res.column = filem[3];
            
            res.at = m[1];
            break;
        }
    }

    self.emit('result', res);
    
    var pendingAsserts = self._pendingAsserts();
    if (!pendingAsserts) {
        if (extra.exiting) {
            self._end();
        } else {
            nextTick$1(function () {
                self._end();
            });
        }
    }
    
    if (!self._planError && pendingAsserts < 0) {
        self._planError = true;
        self.fail('plan != count', {
            expected : self._plan,
            actual : self._plan - pendingAsserts
        });
    }
};

Test.prototype.fail = function (msg, extra) {
    this._assert(false, {
        message : msg,
        operator : 'fail',
        extra : extra
    });
};

Test.prototype.pass = function (msg, extra) {
    this._assert(true, {
        message : msg,
        operator : 'pass',
        extra : extra
    });
};

Test.prototype.skip = function (msg, extra) {
    this._assert(true, {
        message : msg,
        operator : 'skip',
        skip : true,
        extra : extra
    });
};

Test.prototype.ok
= Test.prototype['true']
= Test.prototype.assert
= function (value, msg, extra) {
    this._assert(value, {
        message : index$2(msg, 'should be truthy'),
        operator : 'ok',
        expected : true,
        actual : value,
        extra : extra
    });
};

Test.prototype.notOk
= Test.prototype['false']
= Test.prototype.notok
= function (value, msg, extra) {
    this._assert(!value, {
        message : index$2(msg, 'should be falsy'),
        operator : 'notOk',
        expected : false,
        actual : value,
        extra : extra
    });
};

Test.prototype.error
= Test.prototype.ifError
= Test.prototype.ifErr
= Test.prototype.iferror
= function (err, msg, extra) {
    this._assert(!err, {
        message : index$2(msg, String(err)),
        operator : 'error',
        actual : err,
        extra : extra
    });
};

Test.prototype.equal
= Test.prototype.equals
= Test.prototype.isEqual
= Test.prototype.is
= Test.prototype.strictEqual
= Test.prototype.strictEquals
= function (a, b, msg, extra) {
    this._assert(a === b, {
        message : index$2(msg, 'should be equal'),
        operator : 'equal',
        actual : a,
        expected : b,
        extra : extra
    });
};

Test.prototype.notEqual
= Test.prototype.notEquals
= Test.prototype.notStrictEqual
= Test.prototype.notStrictEquals
= Test.prototype.isNotEqual
= Test.prototype.isNot
= Test.prototype.not
= Test.prototype.doesNotEqual
= Test.prototype.isInequal
= function (a, b, msg, extra) {
    this._assert(a !== b, {
        message : index$2(msg, 'should not be equal'),
        operator : 'notEqual',
        actual : a,
        notExpected : b,
        extra : extra
    });
};

Test.prototype.deepEqual
= Test.prototype.deepEquals
= Test.prototype.isEquivalent
= Test.prototype.same
= function (a, b, msg, extra) {
    this._assert(index$6(a, b, { strict: true }), {
        message : index$2(msg, 'should be equivalent'),
        operator : 'deepEqual',
        actual : a,
        expected : b,
        extra : extra
    });
};

Test.prototype.deepLooseEqual
= Test.prototype.looseEqual
= Test.prototype.looseEquals
= function (a, b, msg, extra) {
    this._assert(index$6(a, b), {
        message : index$2(msg, 'should be equivalent'),
        operator : 'deepLooseEqual',
        actual : a,
        expected : b,
        extra : extra
    });
};

Test.prototype.notDeepEqual
= Test.prototype.notEquivalent
= Test.prototype.notDeeply
= Test.prototype.notSame
= Test.prototype.isNotDeepEqual
= Test.prototype.isNotDeeply
= Test.prototype.isNotEquivalent
= Test.prototype.isInequivalent
= function (a, b, msg, extra) {
    this._assert(!index$6(a, b, { strict: true }), {
        message : index$2(msg, 'should not be equivalent'),
        operator : 'notDeepEqual',
        actual : a,
        notExpected : b,
        extra : extra
    });
};

Test.prototype.notDeepLooseEqual
= Test.prototype.notLooseEqual
= Test.prototype.notLooseEquals
= function (a, b, msg, extra) {
    this._assert(!index$6(a, b), {
        message : index$2(msg, 'should be equivalent'),
        operator : 'notDeepLooseEqual',
        actual : a,
        expected : b,
        extra : extra
    });
};

Test.prototype['throws'] = function (fn, expected, msg, extra) {
    if (typeof expected === 'string') {
        msg = expected;
        expected = undefined;
    }

    var caught = undefined;

    try {
        fn();
    } catch (err) {
        caught = { error : err };
        if ((err != null) && (!isEnumerable(err, 'message') || !index$8(err, 'message'))) {
            var message = err.message;
            delete err.message;
            err.message = message;
        }
    }

    var passed = caught;

    if (expected instanceof RegExp) {
        passed = expected.test(caught && caught.error);
        expected = String(expected);
    }

    if (typeof expected === 'function' && caught) {
        passed = caught.error instanceof expected;
        caught.error = caught.error.constructor;
    }

    this._assert(typeof fn === 'function' && passed, {
        message : index$2(msg, 'should throw'),
        operator : 'throws',
        actual : caught && caught.error,
        expected : expected,
        error: !passed && caught && caught.error,
        extra : extra
    });
};

Test.prototype.doesNotThrow = function (fn, expected, msg, extra) {
    if (typeof expected === 'string') {
        msg = expected;
        expected = undefined;
    }
    var caught = undefined;
    try {
        fn();
    }
    catch (err) {
        caught = { error : err };
    }
    this._assert(!caught, {
        message : index$2(msg, 'should not throw'),
        operator : 'throws',
        actual : caught && caught.error,
        expected : expected,
        error : caught && caught.error,
        extra : extra
    });
};

Test.skip = function (name_, _opts, _cb) {
    var args = getTestArgs.apply(null, arguments);
    args.opts.skip = true;
    return Test(args.name, args.opts, args.cb);
};

// vim: set softtabstop=4 shiftwidth=4:

var nextTick$3 = typeof setImmediate !== 'undefined'
    ? setImmediate
    : nextTick;

var index$26 = function (write, end) {
    var tr = index$4(write, end);
    tr.pause();
    var resume = tr.resume;
    var pause = tr.pause;
    var paused = false;
    
    tr.pause = function () {
        paused = true;
        return pause.apply(this, arguments);
    };
    
    tr.resume = function () {
        paused = false;
        return resume.apply(this, arguments);
    };
    
    nextTick$3(function () {
        if (!paused) tr.resume();
    });
    
    return tr;
};

var hasMap = typeof Map === 'function' && Map.prototype;
var mapSizeDescriptor = Object.getOwnPropertyDescriptor && hasMap ? Object.getOwnPropertyDescriptor(Map.prototype, 'size') : null;
var mapSize = hasMap && mapSizeDescriptor && typeof mapSizeDescriptor.get === 'function' ? mapSizeDescriptor.get : null;
var mapForEach = hasMap && Map.prototype.forEach;
var hasSet = typeof Set === 'function' && Set.prototype;
var setSizeDescriptor = Object.getOwnPropertyDescriptor && hasSet ? Object.getOwnPropertyDescriptor(Set.prototype, 'size') : null;
var setSize = hasSet && setSizeDescriptor && typeof setSizeDescriptor.get === 'function' ? setSizeDescriptor.get : null;
var setForEach = hasSet && Set.prototype.forEach;
var booleanValueOf = Boolean.prototype.valueOf;
var objectToString$1 = Object.prototype.toString;

var index$28 = function inspect_ (obj, opts, depth, seen) {
    if (typeof obj === 'undefined') {
        return 'undefined';
    }
    if (obj === null) {
        return 'null';
    }
    if (typeof obj === 'boolean') {
        return obj ? 'true' : 'false';
    }
    if (typeof obj === 'string') {
        return inspectString(obj);
    }
    if (typeof obj === 'number') {
      if (obj === 0) {
        return Infinity / obj > 0 ? '0' : '-0';
      }
      return String(obj);
    }

    if (!opts) opts = {};

    var maxDepth = typeof opts.depth === 'undefined' ? 5 : opts.depth;
    if (typeof depth === 'undefined') depth = 0;
    if (depth >= maxDepth && maxDepth > 0 && typeof obj === 'object') {
        return '[Object]';
    }

    if (typeof seen === 'undefined') seen = [];
    else if (indexOf$1(seen, obj) >= 0) {
        return '[Circular]';
    }
    
    function inspect (value, from) {
        if (from) {
            seen = seen.slice();
            seen.push(from);
        }
        return inspect_(value, opts, depth + 1, seen);
    }

    if (typeof obj === 'function') {
        var name = nameOf(obj);
        return '[Function' + (name ? ': ' + name : '') + ']';
    }
    if (isSymbol$1(obj)) {
        var symString = Symbol.prototype.toString.call(obj);
        return typeof obj === 'object' ? markBoxed(symString) : symString;
    }
    if (isElement(obj)) {
        var s = '<' + String(obj.nodeName).toLowerCase();
        var attrs = obj.attributes || [];
        for (var i = 0; i < attrs.length; i++) {
            s += ' ' + attrs[i].name + '="' + quote(attrs[i].value) + '"';
        }
        s += '>';
        if (obj.childNodes && obj.childNodes.length) s += '...';
        s += '</' + String(obj.nodeName).toLowerCase() + '>';
        return s;
    }
    if (isArray$2(obj)) {
        if (obj.length === 0) return '[]';
        var xs = Array(obj.length);
        for (var i = 0; i < obj.length; i++) {
            xs[i] = has$2(obj, i) ? inspect(obj[i], obj) : '';
        }
        return '[ ' + xs.join(', ') + ' ]';
    }
    if (isError$1(obj)) {
        var parts = [];
        for (var key in obj) {
            if (!has$2(obj, key)) continue;
            
            if (/[^\w$]/.test(key)) {
                parts.push(inspect(key) + ': ' + inspect(obj[key]));
            }
            else {
                parts.push(key + ': ' + inspect(obj[key]));
            }
        }
        if (parts.length === 0) return '[' + String(obj) + ']';
        return '{ [' + String(obj) + '] ' + parts.join(', ') + ' }';
    }
    if (typeof obj === 'object' && typeof obj.inspect === 'function') {
        return obj.inspect();
    }
    if (isMap(obj)) {
        var parts = [];
        mapForEach.call(obj, function (value, key) {
            parts.push(inspect(key, obj) + ' => ' + inspect(value, obj));
        });
        return collectionOf('Map', mapSize.call(obj), parts);
    }
    if (isSet(obj)) {
        var parts = [];
        setForEach.call(obj, function (value ) {
            parts.push(inspect(value, obj));
        });
        return collectionOf('Set', setSize.call(obj), parts);
    }
    if (isNumber$1(obj)) {
        return markBoxed(Number(obj));
    }
    if (isBoolean$1(obj)) {
        return markBoxed(booleanValueOf.call(obj));
    }
    if (isString$1(obj)) {
        return markBoxed(inspect(String(obj)));
    }
    if (!isDate$1(obj) && !isRegExp$1(obj)) {
        var xs = [];
        var keys = objectKeys$1(obj);
        keys.sort();
        for (var i = 0; i < keys.length; i++) {
            var key = keys[i];
            if (/[^\w$]/.test(key)) {
                xs.push(inspect(key) + ': ' + inspect(obj[key], obj));
            }
            else xs.push(key + ': ' + inspect(obj[key], obj));
        }
        if (xs.length === 0) return '{}';
        return '{ ' + xs.join(', ') + ' }';
    }
    return String(obj);
};

function objectKeys$1(obj) {
    var keys = [];
    for (var key in obj) {
        if (has$2(obj, key)) keys.push(key);
    }
    return keys;
}

function quote (s) {
    return String(s).replace(/"/g, '&quot;');
}

function isArray$2 (obj) { return toStr$6(obj) === '[object Array]' }
function isDate$1 (obj) { return toStr$6(obj) === '[object Date]' }
function isRegExp$1 (obj) { return toStr$6(obj) === '[object RegExp]' }
function isError$1 (obj) { return toStr$6(obj) === '[object Error]' }
function isSymbol$1 (obj) { return toStr$6(obj) === '[object Symbol]' }
function isString$1 (obj) { return toStr$6(obj) === '[object String]' }
function isNumber$1 (obj) { return toStr$6(obj) === '[object Number]' }
function isBoolean$1 (obj) { return toStr$6(obj) === '[object Boolean]' }

var hasOwn$1 = Object.prototype.hasOwnProperty || function (key) { return key in this; };
function has$2 (obj, key) {
    return hasOwn$1.call(obj, key);
}

function toStr$6 (obj) {
    return objectToString$1.call(obj);
}

function nameOf (f) {
    if (f.name) return f.name;
    var m = String(f).match(/^function\s*([\w$]+)/);
    if (m) return m[1];
}

function indexOf$1 (xs, x) {
    if (xs.indexOf) return xs.indexOf(x);
    for (var i = 0, l = xs.length; i < l; i++) {
        if (xs[i] === x) return i;
    }
    return -1;
}

function isMap (x) {
    if (!mapSize) {
        return false;
    }
    try {
        mapSize.call(x);
        return true;
    } catch (e) {}
    return false;
}

function isSet (x) {
    if (!setSize) {
        return false;
    }
    try {
        setSize.call(x);
        return true;
    } catch (e) {}
    return false;
}

function isElement (x) {
    if (!x || typeof x !== 'object') return false;
    if (typeof HTMLElement !== 'undefined' && x instanceof HTMLElement) {
        return true;
    }
    return typeof x.nodeName === 'string'
        && typeof x.getAttribute === 'function'
    ;
}

function inspectString (str) {
    var s = str.replace(/(['\\])/g, '\\$1').replace(/[\x00-\x1f]/g, lowbyte);
    return "'" + s + "'";
}

function lowbyte (c) {
    var n = c.charCodeAt(0);
    var x = { 8: 'b', 9: 't', 10: 'n', 12: 'f', 13: 'r' }[n];
    if (x) return '\\' + x;
    return '\\x' + (n < 0x10 ? '0' : '') + n.toString(16);
}

function markBoxed (str) {
    return 'Object(' + str + ')';
}

function collectionOf(type, size, entries) {
    return type + ' (' + size + ') {' + entries.join(', ') + '}';
}

var EventEmitter$3 = require$$0.EventEmitter;






var regexpTest = index$10.call(Function.call, RegExp.prototype.test);
var yamlIndicators = /\:|\-|\?/;
var nextTick$2 = typeof setImmediate !== 'undefined'
    ? setImmediate
    : nextTick;

var results = Results;
inherits_browser(Results, EventEmitter$3);

function Results () {
    if (!(this instanceof Results)) return new Results;
    this.count = 0;
    this.fail = 0;
    this.pass = 0;
    this._stream = index$4();
    this.tests = [];
    this._only = null;
}

Results.prototype.createStream = function (opts) {
    if (!opts) opts = {};
    var self = this;
    var output, testId = 0;
    if (opts.objectMode) {
        output = index$4();
        self.on('_push', function ontest (t, extra) {
            if (!extra) extra = {};
            var id = testId++;
            t.once('prerun', function () {
                var row = {
                    type: 'test',
                    name: t.name,
                    id: id
                };
                if (index$8(extra, 'parent')) {
                    row.parent = extra.parent;
                }
                output.queue(row);
            });
            t.on('test', function (st) {
                ontest(st, { parent: id });
            });
            t.on('result', function (res) {
                res.test = id;
                res.type = 'assert';
                output.queue(res);
            });
            t.on('end', function () {
                output.queue({ type: 'end', test: id });
            });
        });
        self.on('done', function () { output.queue(null); });
    } else {
        output = index$26();
        output.queue('TAP version 13\n');
        self._stream.pipe(output);
    }
    
    nextTick$2(function next() {
        var t;
        while (t = getNextTest(self)) {
            t.run();
            if (!t.ended) return t.once('end', function(){ nextTick$2(next); });
        }
        self.emit('done');
    });
    
    return output;
};

Results.prototype.push = function (t) {
    var self = this;
    self.tests.push(t);
    self._watch(t);
    self.emit('_push', t);
};

Results.prototype.only = function (t) {
    this._only = t;
};

Results.prototype._watch = function (t) {
    var self = this;
    var write = function (s) { self._stream.queue(s); };
    t.once('prerun', function () {
        write('# ' + t.name + '\n');
    });
    
    t.on('result', function (res) {
        if (typeof res === 'string') {
            write('# ' + res + '\n');
            return;
        }
        write(encodeResult(res, self.count + 1));
        self.count ++;

        if (res.ok) self.pass ++;
        else self.fail ++;
    });
    
    t.on('test', function (st) { self._watch(st); });
};

Results.prototype.close = function () {
    var self = this;
    if (self.closed) self._stream.emit('error', new Error('ALREADY CLOSED'));
    self.closed = true;
    var write = function (s) { self._stream.queue(s); };
    
    write('\n1..' + self.count + '\n');
    write('# tests ' + self.count + '\n');
    write('# pass  ' + self.pass + '\n');
    if (self.fail) write('# fail  ' + self.fail + '\n');
    else write('\n# ok\n');

    self._stream.queue(null);
};

function encodeResult (res, count) {
    var output = '';
    output += (res.ok ? 'ok ' : 'not ok ') + count;
    output += res.name ? ' ' + res.name.toString().replace(/\s+/g, ' ') : '';
    
    if (res.skip) output += ' # SKIP';
    else if (res.todo) output += ' # TODO';
    
    output += '\n';
    if (res.ok) return output;
    
    var outer = '  ';
    var inner = outer + '  ';
    output += outer + '---\n';
    output += inner + 'operator: ' + res.operator + '\n';
    
    if (index$8(res, 'expected') || index$8(res, 'actual')) {
        var ex = index$28(res.expected, {depth: res.objectPrintDepth});
        var ac = index$28(res.actual, {depth: res.objectPrintDepth});
        
        if (Math.max(ex.length, ac.length) > 65 || invalidYaml(ex) || invalidYaml(ac)) {
            output += inner + 'expected: |-\n' + inner + '  ' + ex + '\n';
            output += inner + 'actual: |-\n' + inner + '  ' + ac + '\n';
        } else {
            output += inner + 'expected: ' + ex + '\n';
            output += inner + 'actual:   ' + ac + '\n';
        }
    }
    if (res.at) {
        output += inner + 'at: ' + res.at + '\n';
    }

    var actualStack = res.actual && res.actual.stack;
    var errorStack = res.error && res.error.stack;
    var stack = index$2(actualStack, errorStack);
    if (stack) {
        var lines = String(stack).split('\n');
        output += inner + 'stack: |-\n';
        for (var i = 0; i < lines.length; i++) {
            output += inner + '  ' + lines[i] + '\n';
        }
    }
    
    output += outer + '...\n';
    return output;
}

function getNextTest (results) {
    if (!results._only) {
        return results.tests.shift();
    }
    
    do {
        var t = results.tests.shift();
        if (!t) continue;
        if (results._only === t) {
            return t;
        }
    } while (results.tests.length !== 0)
}

function invalidYaml (str) {
    return regexpTest(yamlIndicators, str);
}

var index = createCommonjsModule(function (module, exports) {
var canEmitExit = typeof process !== 'undefined' && process
    && typeof process.on === 'function' && browser$1 !== true;
var canExit = typeof process !== 'undefined' && process
    && typeof process.exit === 'function';

var nextTick$$1 = typeof setImmediate !== 'undefined'
    ? setImmediate
    : nextTick;

exports = module.exports = (function () {
    var harness;
    var lazyLoad = function () {
        return getHarness().apply(this, arguments);
    };
    
    lazyLoad.only = function () {
        return getHarness().only.apply(this, arguments);
    };
    
    lazyLoad.createStream = function (opts) {
        if (!opts) opts = {};
        if (!harness) {
            var output = index$4();
            getHarness({ stream: output, objectMode: opts.objectMode });
            return output;
        }
        return harness.createStream(opts);
    };
    
    lazyLoad.onFinish = function () {
        return getHarness().onFinish.apply(this, arguments);
    };

    lazyLoad.getHarness = getHarness;

    return lazyLoad

    function getHarness (opts) {
        if (!opts) opts = {};
        opts.autoclose = !canEmitExit;
        if (!harness) harness = createExitHarness(opts);
        return harness;
    }
})();

function createExitHarness (conf) {
    if (!conf) conf = {};
    var harness = createHarness({
        autoclose: index$2(conf.autoclose, false)
    });
    
    var stream = harness.createStream({ objectMode: conf.objectMode });
    var es = stream.pipe(conf.stream || default_stream());
    if (canEmitExit) {
        es.on('error', function (err) { harness._exitCode = 1; });
    }
    
    var ended = false;
    stream.on('end', function () { ended = true; });
    
    if (conf.exit === false) return harness;
    if (!canEmitExit || !canExit) return harness;

    var inErrorState = false;

    process.on('exit', function (code) {
        // let the process exit cleanly.
        if (code !== 0) {
            return
        }

        if (!ended) {
            var only = harness._results._only;
            for (var i = 0; i < harness._tests.length; i++) {
                var t = harness._tests[i];
                if (only && t !== only) continue;
                t._exit();
            }
        }
        harness.close();
        process.exit(code || harness._exitCode);
    });
    
    return harness;
}

exports.createHarness = createHarness;
exports.Test = test$1;
exports.test = exports; // tap compat
exports.test.skip = test$1.skip;

var exitInterval;

function createHarness (conf_) {
    if (!conf_) conf_ = {};
    var results$$1 = results();
    if (conf_.autoclose !== false) {
        results$$1.once('done', function () { results$$1.close(); });
    }
    
    var test = function (name, conf, cb) {
        var t = new test$1(name, conf, cb);
        test._tests.push(t);
        
        (function inspectCode (st) {
            st.on('test', function sub (st_) {
                inspectCode(st_);
            });
            st.on('result', function (r) {
                if (!r.ok && typeof r !== 'string') test._exitCode = 1;
            });
        })(t);
        
        results$$1.push(t);
        return t;
    };
    test._results = results$$1;
    
    test._tests = [];
    
    test.createStream = function (opts) {
        return results$$1.createStream(opts);
    };

    test.onFinish = function (cb) {
        results$$1.on('done', cb);
    };
    
    var only = false;
    test.only = function () {
        if (only) throw new Error('there can only be one only test');
        only = true;
        var t = test.apply(null, arguments);
        results$$1.only(t);
        return t;
    };
    test._exitCode = 0;
    
    test.close = function () { results$$1.close(); };
    
    return test;
}
});

var index_3 = index.test;

/* harmony default export */ __webpack_exports__["a"] = (index_3);
//# sourceMappingURL=index.js.map

/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(5), __webpack_require__(14).setImmediate))

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__plugins_timing__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__base_app__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__plugins_client_hydrate__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__plugins_client_renderer__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__tokens__ = __webpack_require__(7);






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

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

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

  for (var _iterator = middleware, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
    var _ref;

    if (_isArray) {
      if (_i >= _iterator.length) break;
      _ref = _iterator[_i++];
    } else {
      _i = _iterator.next();
      if (_i.done) break;
      _ref = _i.value;
    }

    var _fn = _ref;
    cov_1rq9z8lras.s[3]++;

    if (typeof _fn !== 'function') {
      cov_1rq9z8lras.b[1][0]++;
      cov_1rq9z8lras.s[4]++;
      throw new TypeError("Expected middleware function, received: " + _typeof(_fn));
    } else {
      cov_1rq9z8lras.b[1][1]++;
    }
  }

  cov_1rq9z8lras.s[5]++;
  return function (context, next) {
    cov_1rq9z8lras.f[1]++;
    var index = (cov_1rq9z8lras.s[6]++, -1);
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
      var fn = (cov_1rq9z8lras.s[11]++, middleware[i]);
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

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

/** Copyright (c) 2018 Uber Technologies, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

/* eslint-env browser */
function clientApp () {
  cov_2jn11sa60k.f[0]++;
  cov_2jn11sa60k.s[0]++;
  return (
    /*#__PURE__*/
    function (_BaseApp) {
      _inheritsLoose(ClientApp, _BaseApp);

      function ClientApp(el, render) {
        var _this;

        cov_2jn11sa60k.f[1]++;
        cov_2jn11sa60k.s[1]++;
        _this = _BaseApp.call(this, el, render) || this;
        cov_2jn11sa60k.s[2]++;

        _this.register(__WEBPACK_IMPORTED_MODULE_0__plugins_timing__["a" /* TimingToken */], __WEBPACK_IMPORTED_MODULE_0__plugins_timing__["b" /* default */]);

        cov_2jn11sa60k.s[3]++;

        _this.middleware({
          element: __WEBPACK_IMPORTED_MODULE_4__tokens__["a" /* ElementToken */]
        }, __WEBPACK_IMPORTED_MODULE_2__plugins_client_hydrate__["a" /* default */]);

        return _this;
      }

      var _proto = ClientApp.prototype;

      _proto.resolve = function resolve() {
        cov_2jn11sa60k.f[2]++;
        cov_2jn11sa60k.s[4]++;
        this.middleware({
          render: __WEBPACK_IMPORTED_MODULE_4__tokens__["b" /* RenderToken */]
        }, __WEBPACK_IMPORTED_MODULE_3__plugins_client_renderer__["a" /* default */]);
        cov_2jn11sa60k.s[5]++;
        return _BaseApp.prototype.resolve.call(this);
      };

      _proto.callback = function callback() {
        cov_2jn11sa60k.f[3]++;
        cov_2jn11sa60k.s[6]++;
        this.resolve();
        var middleware = (cov_2jn11sa60k.s[7]++, compose(this.plugins));
        cov_2jn11sa60k.s[8]++;
        return function () {
          cov_2jn11sa60k.f[4]++;
          // TODO(#62): Create noop context object to match server api
          var ctx = (cov_2jn11sa60k.s[9]++, {
            url: window.location.path + window.location.search,
            element: null,
            body: null
          });
          cov_2jn11sa60k.s[10]++;
          return middleware(ctx, function () {
            cov_2jn11sa60k.f[5]++;
            cov_2jn11sa60k.s[11]++;
            return Promise.resolve();
          }).then(function () {
            cov_2jn11sa60k.f[6]++;
            cov_2jn11sa60k.s[12]++;
            return ctx;
          });
        };
      };

      return ClientApp;
    }(__WEBPACK_IMPORTED_MODULE_1__base_app__["a" /* default */])
  );
}

/* harmony default export */ __webpack_exports__["a"] = (clientApp);


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return createPlugin; });
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




/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return TokenType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TokenImpl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return createToken; });
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
var TokenType = (cov_25xs0eherz.s[0]++, Object.freeze({
  Required: 0,
  Optional: 1
}));

function Ref() {
  cov_25xs0eherz.f[0]++;
}

var TokenImpl = function TokenImpl(name, ref) {
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
};
function createToken(name) {
  cov_25xs0eherz.f[2]++;
  cov_25xs0eherz.s[7]++;
  return new TokenImpl(name);
}




/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return run; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tape_cup__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__compose__ = __webpack_require__(11);



/** Copyright (c) 2018 Uber Technologies, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */
var env = 'BROWSER';

function testHelper(tapeFn) {
  return function (name, testFn) {
    return tapeFn(env + " - " + name, testFn);
  };
}

var test = testHelper(__WEBPACK_IMPORTED_MODULE_0_tape_cup__["a" /* default */]);
test.only = testHelper(__WEBPACK_IMPORTED_MODULE_0_tape_cup__["a" /* default */].only.bind(__WEBPACK_IMPORTED_MODULE_0_tape_cup__["a" /* default */]));
test.skip = testHelper(__WEBPACK_IMPORTED_MODULE_0_tape_cup__["a" /* default */].skip.bind(__WEBPACK_IMPORTED_MODULE_0_tape_cup__["a" /* default */]));
function getContext() {
  return {};
} // $FlowFixMe


function run(app, ctx) {
  if (ctx === void 0) {
    ctx = {};
  }

  // $FlowFixMe
  ctx = Object.assign(getContext(), ctx);
  app.resolve();
  return Object(__WEBPACK_IMPORTED_MODULE_1__compose__["a" /* compose */])(app.plugins)(ctx, function () {
    return Promise.resolve();
  }).then(function () {
    return ctx;
  });
}

/* harmony default export */ __webpack_exports__["a"] = (test);



/***/ }),
/* 5 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return memoize; });
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

/** Copyright (c) 2018 Uber Technologies, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */
function Container() {
  cov_1ucyxpm5un.f[0]++;
}

function memoize(fn) {
  cov_1ucyxpm5un.f[1]++;
  var memoizeKey = (cov_1ucyxpm5un.s[0]++, (cov_1ucyxpm5un.b[0][1]++, new Container()));
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

    var result = (cov_1ucyxpm5un.s[4]++, fn(ctx));
    cov_1ucyxpm5un.s[5]++;
    ctx.memoized.set(memoizeKey, result);
    cov_1ucyxpm5un.s[6]++;
    return result;
  };
}




/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return RenderToken; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ElementToken; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return SSRDeciderToken; });
/* unused harmony export HttpServerToken */
/* unused harmony export SSRBodyTemplateToken */
/* unused harmony export RoutePrefixToken */
/* unused harmony export CriticalChunkIdsToken */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__create_token__ = __webpack_require__(3);


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
var RenderToken = (cov_1oxwx4ibch.s[0]++, Object(__WEBPACK_IMPORTED_MODULE_0__create_token__["c" /* createToken */])('RenderToken'));
var ElementToken = (cov_1oxwx4ibch.s[1]++, Object(__WEBPACK_IMPORTED_MODULE_0__create_token__["c" /* createToken */])('ElementToken'));
var SSRDeciderToken = (cov_1oxwx4ibch.s[2]++, Object(__WEBPACK_IMPORTED_MODULE_0__create_token__["c" /* createToken */])('SSRDeciderToken'));
var HttpServerToken = (cov_1oxwx4ibch.s[3]++, Object(__WEBPACK_IMPORTED_MODULE_0__create_token__["c" /* createToken */])('HttpServerToken'));
var SSRBodyTemplateToken = (cov_1oxwx4ibch.s[4]++, Object(__WEBPACK_IMPORTED_MODULE_0__create_token__["c" /* createToken */])('SSRBodyTemplateToken'));
var RoutePrefixToken = (cov_1oxwx4ibch.s[5]++, Object(__WEBPACK_IMPORTED_MODULE_0__create_token__["c" /* createToken */])('RoutePrefixToken'));
var CriticalChunkIdsToken = (cov_1oxwx4ibch.s[6]++, Object(__WEBPACK_IMPORTED_MODULE_0__create_token__["c" /* createToken */])('CriticalChunkIdsToken'));




/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return flowHtml; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return flowDangerouslySetHTML; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return flowConsumeSanitizedHTML; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return flowEscape; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return unescape; });
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
var html;
var dangerouslySetHTML;
var consumeSanitizedHTML;
var escape;
cov_2fw4iqtb7x.s[0]++;

{
  cov_2fw4iqtb7x.b[0][1]++;
}

cov_2fw4iqtb7x.s[20]++;

var replaceEscaped = function replaceEscaped(c) {
  cov_2fw4iqtb7x.f[6]++;
  cov_2fw4iqtb7x.s[21]++;
  return String.fromCodePoint(parseInt(c.slice(2), 16));
};

cov_2fw4iqtb7x.s[22]++;

var unescape = function unescape(str) {
  cov_2fw4iqtb7x.f[7]++;
  cov_2fw4iqtb7x.s[23]++;
  return str.replace(/\\u003C|\\u003E|\\u0022|\\u002F|\\u2028|\\u2029/g, replaceEscaped);
}; // These types are necessary due to not having an assignment in the __BROWSER__ environment


var flowHtml = (cov_2fw4iqtb7x.s[24]++, html);
var flowDangerouslySetHTML = (cov_2fw4iqtb7x.s[25]++, dangerouslySetHTML);
var flowConsumeSanitizedHTML = (cov_2fw4iqtb7x.s[26]++, consumeSanitizedHTML);
var flowEscape = (cov_2fw4iqtb7x.s[27]++, escape);




/***/ }),
/* 9 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TimingToken; });
/* unused harmony export now */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__create_plugin__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__memoize__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__create_token__ = __webpack_require__(3);




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
var Timing = function Timing() {
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
};

var timing = (cov_1hxl6f36h7.s[6]++, {
  from: Object(__WEBPACK_IMPORTED_MODULE_1__memoize__["a" /* memoize */])(function () {
    cov_1hxl6f36h7.f[1]++;
    cov_1hxl6f36h7.s[7]++;
    return new Timing();
  })
});
var TimingToken = (cov_1hxl6f36h7.s[8]++, Object(__WEBPACK_IMPORTED_MODULE_2__create_token__["c" /* createToken */])('TimingToken'));

function _middleware(ctx, next) {
  cov_1hxl6f36h7.f[2]++;
  cov_1hxl6f36h7.s[9]++;
  ctx.memoized = new Map();

  var _ref = (cov_1hxl6f36h7.s[10]++, timing.from(ctx)),
      start = _ref.start,
      render = _ref.render,
      end = _ref.end,
      downstream = _ref.downstream,
      upstream = _ref.upstream;

  cov_1hxl6f36h7.s[11]++;
  ctx.timing = {
    start: start,
    render: render.promise,
    end: end.promise,
    downstream: downstream.promise,
    upstream: upstream.promise
  };
  cov_1hxl6f36h7.s[12]++;
  return next().then(function () {
    cov_1hxl6f36h7.f[3]++;
    var upstreamTime = (cov_1hxl6f36h7.s[13]++, now() - timing.from(ctx).upstreamStart);
    cov_1hxl6f36h7.s[14]++;
    upstream.resolve(upstreamTime);
    var endTime = (cov_1hxl6f36h7.s[15]++, now() - ctx.timing.start);
    cov_1hxl6f36h7.s[16]++;
    end.resolve(endTime);
  }).catch(function (e) {
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

    var endTime = (cov_1hxl6f36h7.s[19]++, now() - ctx.timing.start);
    cov_1hxl6f36h7.s[20]++;
    end.resolve(endTime);
    cov_1hxl6f36h7.s[21]++;
    throw e;
  });
}

var timing$1 = Object(__WEBPACK_IMPORTED_MODULE_0__create_plugin__["a" /* createPlugin */])({
  provides: function provides() {
    cov_1hxl6f36h7.f[5]++;
    cov_1hxl6f36h7.s[22]++;
    return timing;
  },
  middleware: function middleware() {
    cov_1hxl6f36h7.f[6]++;
    cov_1hxl6f36h7.s[23]++;
    return _middleware;
  }
});
function now() {
  cov_1hxl6f36h7.f[7]++;
  cov_1hxl6f36h7.s[24]++;

  {
    cov_1hxl6f36h7.b[2][1]++;
    cov_1hxl6f36h7.s[27]++;

    // eslint-disable-next-line cup/no-undef
    if ((cov_1hxl6f36h7.b[4][0]++, window.performance) && (cov_1hxl6f36h7.b[4][1]++, window.performance.now)) {
      cov_1hxl6f36h7.b[3][0]++;
      cov_1hxl6f36h7.s[28]++;
      // eslint-disable-next-line cup/no-undef
      return Math.round(window.performance.now());
    } else {
      cov_1hxl6f36h7.b[3][1]++;
    }

    cov_1hxl6f36h7.s[29]++;
    return Date.now();
  }
}

function deferred() {
  cov_1hxl6f36h7.f[8]++;
  cov_1hxl6f36h7.s[30]++;

  var resolve = function resolve() {
    cov_1hxl6f36h7.f[9]++;
  };

  cov_1hxl6f36h7.s[31]++;

  var reject = function reject() {
    cov_1hxl6f36h7.f[10]++;
  };

  var promise = (cov_1hxl6f36h7.s[32]++, new Promise(function (res, rej) {
    cov_1hxl6f36h7.f[11]++;
    cov_1hxl6f36h7.s[33]++;
    resolve = res;
    cov_1hxl6f36h7.s[34]++;
    reject = rej;
  }));
  cov_1hxl6f36h7.s[35]++;
  return {
    promise: promise,
    resolve: resolve,
    reject: reject
  };
}

/* harmony default export */ __webpack_exports__["b"] = (timing$1);



/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return compose; });
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

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

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

  for (var _iterator = middleware, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
    var _ref;

    if (_isArray) {
      if (_i >= _iterator.length) break;
      _ref = _iterator[_i++];
    } else {
      _i = _iterator.next();
      if (_i.done) break;
      _ref = _i.value;
    }

    var _fn = _ref;
    cov_1rq9z8lras.s[3]++;

    if (typeof _fn !== 'function') {
      cov_1rq9z8lras.b[1][0]++;
      cov_1rq9z8lras.s[4]++;
      throw new TypeError("Expected middleware function, received: " + _typeof(_fn));
    } else {
      cov_1rq9z8lras.b[1][1]++;
    }
  }

  cov_1rq9z8lras.s[5]++;
  return function (context, next) {
    cov_1rq9z8lras.f[1]++;
    var index = (cov_1rq9z8lras.s[6]++, -1);
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
      var fn = (cov_1rq9z8lras.s[11]++, middleware[i]);
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




/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Users_lhorie_Documents_test_private_monorepo_public_fusion_core_src_tests_app_interface_js__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Users_lhorie_Documents_test_private_monorepo_public_fusion_core_src_tests_cleanup_js__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Users_lhorie_Documents_test_private_monorepo_public_fusion_core_src_tests_compose_js__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Users_lhorie_Documents_test_private_monorepo_public_fusion_core_src_tests_dependency_resolution_js__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Users_lhorie_Documents_test_private_monorepo_public_fusion_core_src_tests_enhance_js__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Users_lhorie_Documents_test_private_monorepo_public_fusion_core_src_tests_exports_js__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Users_lhorie_Documents_test_private_monorepo_public_fusion_core_src_tests_index_browser_js__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__Users_lhorie_Documents_test_private_monorepo_public_fusion_core_src_tests_memoize_js__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__Users_lhorie_Documents_test_private_monorepo_public_fusion_core_src_tests_render_js__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__Users_lhorie_Documents_test_private_monorepo_public_fusion_core_src_tests_sanitization_browser_js__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__Users_lhorie_Documents_test_private_monorepo_public_fusion_core_src_tests_test_helper_js__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__Users_lhorie_Documents_test_private_monorepo_public_fusion_core_src_tests_timing_js__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__Users_lhorie_Documents_test_private_monorepo_public_fusion_core_src_tests_virtual_js__ = __webpack_require__(31);














/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tape_cup__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(16);



function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/** Copyright (c) 2018 Uber Technologies, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */
Object(__WEBPACK_IMPORTED_MODULE_0_tape_cup__["a" /* default */])('interface', function (t) {
  var element = function element() {
    return 'hi';
  };

  var render = function render() {};

  var app = new __WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */](element, render);
  t.ok(app.plugins instanceof Array, 'sets plugins');
  t.equal(_typeof(app.register), 'function', 'has a register function');
  t.equal(_typeof(app.getService), 'function', 'has a getService function');
  t.ok(typeof app.callback === 'function', 'callback is function');
  t.ok(typeof app.callback() === 'function', 'callback returns server handler');
  t.end();
});


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var scope = (typeof global !== "undefined" && global) ||
            (typeof self !== "undefined" && self) ||
            window;
var apply = Function.prototype.apply;

// DOM APIs, for completeness

exports.setTimeout = function() {
  return new Timeout(apply.call(setTimeout, scope, arguments), clearTimeout);
};
exports.setInterval = function() {
  return new Timeout(apply.call(setInterval, scope, arguments), clearInterval);
};
exports.clearTimeout =
exports.clearInterval = function(timeout) {
  if (timeout) {
    timeout.close();
  }
};

function Timeout(id, clearFn) {
  this._id = id;
  this._clearFn = clearFn;
}
Timeout.prototype.unref = Timeout.prototype.ref = function() {};
Timeout.prototype.close = function() {
  this._clearFn.call(scope, this._id);
};

// Does not start the time, just sets up the members needed.
exports.enroll = function(item, msecs) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = msecs;
};

exports.unenroll = function(item) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = -1;
};

exports._unrefActive = exports.active = function(item) {
  clearTimeout(item._idleTimeoutId);

  var msecs = item._idleTimeout;
  if (msecs >= 0) {
    item._idleTimeoutId = setTimeout(function onTimeout() {
      if (item._onTimeout)
        item._onTimeout();
    }, msecs);
  }
};

// setimmediate attaches itself to the global object
__webpack_require__(15);
// On some exotic environments, it's not clear which object `setimmediate` was
// able to install onto.  Search each possibility in the same order as the
// `setimmediate` library.
exports.setImmediate = (typeof self !== "undefined" && self.setImmediate) ||
                       (typeof global !== "undefined" && global.setImmediate) ||
                       (this && this.setImmediate);
exports.clearImmediate = (typeof self !== "undefined" && self.clearImmediate) ||
                         (typeof global !== "undefined" && global.clearImmediate) ||
                         (this && this.clearImmediate);

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)))

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, process) {(function (global, undefined) {
    "use strict";

    if (global.setImmediate) {
        return;
    }

    var nextHandle = 1; // Spec says greater than zero
    var tasksByHandle = {};
    var currentlyRunningATask = false;
    var doc = global.document;
    var registerImmediate;

    function setImmediate(callback) {
      // Callback can either be a function or a string
      if (typeof callback !== "function") {
        callback = new Function("" + callback);
      }
      // Copy function arguments
      var args = new Array(arguments.length - 1);
      for (var i = 0; i < args.length; i++) {
          args[i] = arguments[i + 1];
      }
      // Store and register the task
      var task = { callback: callback, args: args };
      tasksByHandle[nextHandle] = task;
      registerImmediate(nextHandle);
      return nextHandle++;
    }

    function clearImmediate(handle) {
        delete tasksByHandle[handle];
    }

    function run(task) {
        var callback = task.callback;
        var args = task.args;
        switch (args.length) {
        case 0:
            callback();
            break;
        case 1:
            callback(args[0]);
            break;
        case 2:
            callback(args[0], args[1]);
            break;
        case 3:
            callback(args[0], args[1], args[2]);
            break;
        default:
            callback.apply(undefined, args);
            break;
        }
    }

    function runIfPresent(handle) {
        // From the spec: "Wait until any invocations of this algorithm started before this one have completed."
        // So if we're currently running a task, we'll need to delay this invocation.
        if (currentlyRunningATask) {
            // Delay by doing a setTimeout. setImmediate was tried instead, but in Firefox 7 it generated a
            // "too much recursion" error.
            setTimeout(runIfPresent, 0, handle);
        } else {
            var task = tasksByHandle[handle];
            if (task) {
                currentlyRunningATask = true;
                try {
                    run(task);
                } finally {
                    clearImmediate(handle);
                    currentlyRunningATask = false;
                }
            }
        }
    }

    function installNextTickImplementation() {
        registerImmediate = function(handle) {
            process.nextTick(function () { runIfPresent(handle); });
        };
    }

    function canUsePostMessage() {
        // The test against `importScripts` prevents this implementation from being installed inside a web worker,
        // where `global.postMessage` means something completely different and can't be used for this purpose.
        if (global.postMessage && !global.importScripts) {
            var postMessageIsAsynchronous = true;
            var oldOnMessage = global.onmessage;
            global.onmessage = function() {
                postMessageIsAsynchronous = false;
            };
            global.postMessage("", "*");
            global.onmessage = oldOnMessage;
            return postMessageIsAsynchronous;
        }
    }

    function installPostMessageImplementation() {
        // Installs an event handler on `global` for the `message` event: see
        // * https://developer.mozilla.org/en/DOM/window.postMessage
        // * http://www.whatwg.org/specs/web-apps/current-work/multipage/comms.html#crossDocumentMessages

        var messagePrefix = "setImmediate$" + Math.random() + "$";
        var onGlobalMessage = function(event) {
            if (event.source === global &&
                typeof event.data === "string" &&
                event.data.indexOf(messagePrefix) === 0) {
                runIfPresent(+event.data.slice(messagePrefix.length));
            }
        };

        if (global.addEventListener) {
            global.addEventListener("message", onGlobalMessage, false);
        } else {
            global.attachEvent("onmessage", onGlobalMessage);
        }

        registerImmediate = function(handle) {
            global.postMessage(messagePrefix + handle, "*");
        };
    }

    function installMessageChannelImplementation() {
        var channel = new MessageChannel();
        channel.port1.onmessage = function(event) {
            var handle = event.data;
            runIfPresent(handle);
        };

        registerImmediate = function(handle) {
            channel.port2.postMessage(handle);
        };
    }

    function installReadyStateChangeImplementation() {
        var html = doc.documentElement;
        registerImmediate = function(handle) {
            // Create a <script> element; its readystatechange event will be fired asynchronously once it is inserted
            // into the document. Do so, thus queuing up the task. Remember to clean up once it's been called.
            var script = doc.createElement("script");
            script.onreadystatechange = function () {
                runIfPresent(handle);
                script.onreadystatechange = null;
                html.removeChild(script);
                script = null;
            };
            html.appendChild(script);
        };
    }

    function installSetTimeoutImplementation() {
        registerImmediate = function(handle) {
            setTimeout(runIfPresent, 0, handle);
        };
    }

    // If supported, we should attach to the prototype of global, since that is where setTimeout et al. live.
    var attachTo = Object.getPrototypeOf && Object.getPrototypeOf(global);
    attachTo = attachTo && attachTo.setTimeout ? attachTo : global;

    // Don't get fooled by e.g. browserify environments.
    if ({}.toString.call(global.process) === "[object process]") {
        // For Node.js before 0.9
        installNextTickImplementation();

    } else if (canUsePostMessage()) {
        // For non-IE10 modern browsers
        installPostMessageImplementation();

    } else if (global.MessageChannel) {
        // For web workers, where supported
        installMessageChannelImplementation();

    } else if (doc && "onreadystatechange" in doc.createElement("script")) {
        // For IE 6–8
        installReadyStateChangeImplementation();

    } else {
        // For older browsers
        installSetTimeoutImplementation();
    }

    attachTo.setImmediate = setImmediate;
    attachTo.clearImmediate = clearImmediate;
}(typeof self === "undefined" ? typeof global === "undefined" ? this : global : self));

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5), __webpack_require__(9)))

/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export getEnv */
/* unused harmony export compose */
/* unused harmony export assetUrl */
/* unused harmony export chunkId */
/* unused harmony export syncChunkIds */
/* unused harmony export syncChunkPaths */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__client_app__ = __webpack_require__(1);


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
var getEnv = (cov_b3u3jownd.b[0][0]++, function () {
  cov_b3u3jownd.f[0]++;
});

 // Handle flow-types for export so browser export is ignored.

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

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

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

  for (var _iterator = middleware, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
    var _ref;

    if (_isArray) {
      if (_i >= _iterator.length) break;
      _ref = _iterator[_i++];
    } else {
      _i = _iterator.next();
      if (_i.done) break;
      _ref = _i.value;
    }

    var _fn = _ref;
    cov_1rq9z8lras.s[3]++;

    if (typeof _fn !== 'function') {
      cov_1rq9z8lras.b[1][0]++;
      cov_1rq9z8lras.s[4]++;
      throw new TypeError("Expected middleware function, received: " + _typeof(_fn));
    } else {
      cov_1rq9z8lras.b[1][1]++;
    }
  }

  cov_1rq9z8lras.s[5]++;
  return function (context, next) {
    cov_1rq9z8lras.f[1]++;
    var index = (cov_1rq9z8lras.s[6]++, -1);
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
      var fn = (cov_1rq9z8lras.s[11]++, middleware[i]);
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
var index = (cov_2q4b9iqhax.b[0][0]++, Object(__WEBPACK_IMPORTED_MODULE_0__client_app__["a" /* default */])());

/* harmony default export */ __webpack_exports__["a"] = (index);



/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__create_plugin__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__create_token__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tokens__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__plugins_ssr__ = __webpack_require__(18);





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
var FusionApp =
/*#__PURE__*/
function () {
  function FusionApp(el, render) {
    var _this = this;

    this.register = function (tokenOrValue, maybeValue) {
      cov_1i9alyqkyt.f[1]++;
      var hasToken = (cov_1i9alyqkyt.s[8]++, tokenOrValue instanceof __WEBPACK_IMPORTED_MODULE_1__create_token__["a" /* TokenImpl */]);
      var token = (cov_1i9alyqkyt.s[9]++, hasToken ? (cov_1i9alyqkyt.b[2][0]++, tokenOrValue) : (cov_1i9alyqkyt.b[2][1]++, Object(__WEBPACK_IMPORTED_MODULE_1__create_token__["c" /* createToken */])('UnnamedPlugin')));
      var value = (cov_1i9alyqkyt.s[10]++, hasToken ? (cov_1i9alyqkyt.b[3][0]++, maybeValue) : (cov_1i9alyqkyt.b[3][1]++, tokenOrValue));
      cov_1i9alyqkyt.s[11]++;

      if ((cov_1i9alyqkyt.b[5][0]++, !hasToken) && ((cov_1i9alyqkyt.b[5][1]++, value == null) || (cov_1i9alyqkyt.b[5][2]++, !value.__plugin__))) {
        cov_1i9alyqkyt.b[4][0]++;
        cov_1i9alyqkyt.s[12]++;
        throw new Error(process.env.NODE_ENV !== "production" ? (cov_1i9alyqkyt.b[6][0]++, "Cannot register " + String(tokenOrValue) + " without a token. Did you accidentally register a " + ((cov_1i9alyqkyt.b[7][1]++, 'server')) + " plugin on the " + ((cov_1i9alyqkyt.b[8][1]++, 'browser')) + "?") : (cov_1i9alyqkyt.b[6][1]++, 'Invalid configuration registration'));
      } else {
        cov_1i9alyqkyt.b[4][1]++;
      } // the renderer is a special case, since it needs to be always run last


      cov_1i9alyqkyt.s[13]++;

      if (token === __WEBPACK_IMPORTED_MODULE_2__tokens__["b" /* RenderToken */]) {
        cov_1i9alyqkyt.b[9][0]++;
        cov_1i9alyqkyt.s[14]++;
        _this.renderer = value;
        cov_1i9alyqkyt.s[15]++;
        return {
          alias: function alias() {
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
      return _this._register(token, value);
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
    (cov_1i9alyqkyt.b[0][0]++, el) && (cov_1i9alyqkyt.b[0][1]++, this.register(__WEBPACK_IMPORTED_MODULE_2__tokens__["a" /* ElementToken */], el));
    cov_1i9alyqkyt.s[6]++;
    (cov_1i9alyqkyt.b[1][0]++, render) && (cov_1i9alyqkyt.b[1][1]++, this.register(__WEBPACK_IMPORTED_MODULE_2__tokens__["b" /* RenderToken */], render));
    cov_1i9alyqkyt.s[7]++;
    this.register(__WEBPACK_IMPORTED_MODULE_2__tokens__["c" /* SSRDeciderToken */], __WEBPACK_IMPORTED_MODULE_3__plugins_ssr__["a" /* SSRDecider */]);
  } // eslint-disable-next-line


  var _proto = FusionApp.prototype;

  _proto._register = function _register(token, value) {
    var _this2 = this;

    cov_1i9alyqkyt.f[3]++;
    cov_1i9alyqkyt.s[21]++;
    this.plugins.push(token);

    var _ref = (cov_1i9alyqkyt.s[22]++, (cov_1i9alyqkyt.b[12][0]++, this.registered.get(getTokenRef(token))) || (cov_1i9alyqkyt.b[12][1]++, {
      aliases: new Map(),
      enhancers: []
    })),
        aliases = _ref.aliases,
        enhancers = _ref.enhancers;

    cov_1i9alyqkyt.s[23]++;

    if ((cov_1i9alyqkyt.b[14][0]++, value) && (cov_1i9alyqkyt.b[14][1]++, value.__plugin__)) {
      cov_1i9alyqkyt.b[13][0]++;
      cov_1i9alyqkyt.s[24]++;

      if (value.deps) {
        cov_1i9alyqkyt.b[15][0]++;
        cov_1i9alyqkyt.s[25]++;
        Object.values(value.deps).forEach(function (token) {
          cov_1i9alyqkyt.f[4]++;
          cov_1i9alyqkyt.s[26]++;
          return _this2._dependedOn.add(getTokenRef(token));
        });
      } else {
        cov_1i9alyqkyt.b[15][1]++;
      }
    } else {
      cov_1i9alyqkyt.b[13][1]++;
    }

    cov_1i9alyqkyt.s[27]++;
    this.registered.set(getTokenRef(token), {
      value: value,
      aliases: aliases,
      enhancers: enhancers,
      token: token
    });
    cov_1i9alyqkyt.s[28]++;

    var alias = function alias(sourceToken, destToken) {
      cov_1i9alyqkyt.f[5]++;
      var stack = (cov_1i9alyqkyt.s[29]++, new Error().stack);
      cov_1i9alyqkyt.s[30]++;
      sourceToken.stacks.push({
        type: 'alias-from',
        stack: stack
      });
      cov_1i9alyqkyt.s[31]++;
      destToken.stacks.push({
        type: 'alias-to',
        stack: stack
      });
      cov_1i9alyqkyt.s[32]++;

      _this2._dependedOn.add(getTokenRef(destToken));

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
        alias: alias
      };
    };

    cov_1i9alyqkyt.s[36]++;
    return {
      alias: alias
    };
  };

  _proto.middleware = function middleware(deps, _middleware) {
    cov_1i9alyqkyt.f[6]++;
    cov_1i9alyqkyt.s[37]++;

    if (_middleware === undefined) {
      cov_1i9alyqkyt.b[17][0]++;
      cov_1i9alyqkyt.s[38]++;

      _middleware = function _middleware() {
        cov_1i9alyqkyt.f[7]++;
        cov_1i9alyqkyt.s[39]++;
        return deps;
      };
    } else {
      cov_1i9alyqkyt.b[17][1]++;
    }

    cov_1i9alyqkyt.s[40]++;
    this.register(Object(__WEBPACK_IMPORTED_MODULE_0__create_plugin__["a" /* createPlugin */])({
      deps: deps,
      middleware: _middleware
    }));
  };

  _proto.enhance = function enhance(token, enhancer) {
    cov_1i9alyqkyt.f[8]++;
    cov_1i9alyqkyt.s[41]++;
    token.stacks.push({
      type: 'enhance',
      stack: new Error().stack
    });

    var _ref2 = (cov_1i9alyqkyt.s[42]++, (cov_1i9alyqkyt.b[18][0]++, this.registered.get(getTokenRef(token))) || (cov_1i9alyqkyt.b[18][1]++, {
      aliases: new Map(),
      enhancers: [],
      value: undefined
    })),
        value = _ref2.value,
        aliases = _ref2.aliases,
        enhancers = _ref2.enhancers;

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
      value: value,
      aliases: aliases,
      enhancers: enhancers,
      token: token
    });
  };

  _proto.cleanup = function cleanup() {
    cov_1i9alyqkyt.f[9]++;
    cov_1i9alyqkyt.s[47]++;
    return Promise.all(this.cleanups.map(function (fn) {
      cov_1i9alyqkyt.f[10]++;
      cov_1i9alyqkyt.s[48]++;
      return fn();
    }));
  };

  _proto.resolve = function resolve() {
    var _this3 = this;

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

    this._register(__WEBPACK_IMPORTED_MODULE_2__tokens__["b" /* RenderToken */], this.renderer);

    var resolved = (cov_1i9alyqkyt.s[52]++, new Map()); // Token.ref || Token => Service

    var nonPluginTokens = (cov_1i9alyqkyt.s[53]++, new Set()); // Token

    var resolving = (cov_1i9alyqkyt.s[54]++, new Set()); // Token.ref || Token

    var registered = (cov_1i9alyqkyt.s[55]++, this.registered); // Token.ref || Token -> {value, aliases, enhancers}

    var resolvedPlugins = (cov_1i9alyqkyt.s[56]++, []); // Plugins

    var appliedEnhancers = (cov_1i9alyqkyt.s[57]++, []);
    cov_1i9alyqkyt.s[58]++;

    var resolveToken = function resolveToken(token, tokenAliases) {
      cov_1i9alyqkyt.f[12]++;
      cov_1i9alyqkyt.s[59]++;

      // Base: if we have already resolved the type, return it
      if ((cov_1i9alyqkyt.b[23][0]++, tokenAliases) && (cov_1i9alyqkyt.b[23][1]++, tokenAliases.has(getTokenRef(token)))) {
        cov_1i9alyqkyt.b[22][0]++;
        var newToken = (cov_1i9alyqkyt.s[60]++, tokenAliases.get(getTokenRef(token)));
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
        throw new Error("Cannot resolve circular dependency: " + token.name);
      } else {
        cov_1i9alyqkyt.b[26][1]++;
      } // Base: the type was never registered, throw error or provide undefined if optional


      var _ref3 = (cov_1i9alyqkyt.s[67]++, (cov_1i9alyqkyt.b[27][0]++, registered.get(getTokenRef(token))) || (cov_1i9alyqkyt.b[27][1]++, {})),
          value = _ref3.value,
          aliases = _ref3.aliases,
          enhancers = _ref3.enhancers;

      cov_1i9alyqkyt.s[68]++;

      if (value === undefined) {
        cov_1i9alyqkyt.b[28][0]++;
        cov_1i9alyqkyt.s[69]++;

        // Attempt to get default value, if optional
        if ((cov_1i9alyqkyt.b[30][0]++, token instanceof __WEBPACK_IMPORTED_MODULE_1__create_token__["a" /* TokenImpl */]) && (cov_1i9alyqkyt.b[30][1]++, token.type === __WEBPACK_IMPORTED_MODULE_1__create_token__["b" /* TokenType */].Optional)) {
          cov_1i9alyqkyt.b[29][0]++;
          cov_1i9alyqkyt.s[70]++;

          _this3.register(token, undefined);
        } else {
          cov_1i9alyqkyt.b[29][1]++;
          var dependents = (cov_1i9alyqkyt.s[71]++, Array.from(_this3.registered.entries()));
          /**
           * Iterate over the entire list of dependencies and find all
           * dependencies of a given token.
           */

          cov_1i9alyqkyt.s[72]++;

          var findDependentTokens = function findDependentTokens() {
            cov_1i9alyqkyt.f[13]++;
            cov_1i9alyqkyt.s[73]++;
            return dependents.filter(function (entry) {
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
            }).map(function (entry) {
              cov_1i9alyqkyt.f[15]++;
              cov_1i9alyqkyt.s[77]++;
              return entry[1].token.name;
            });
          };

          cov_1i9alyqkyt.s[78]++;

          var findDependentEnhancers = function findDependentEnhancers() {
            cov_1i9alyqkyt.f[16]++;
            cov_1i9alyqkyt.s[79]++;
            return appliedEnhancers.filter(function (_ref4) {
              var provides = _ref4[1];
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
            }).map(function (_ref5) {
              var enhancer = _ref5[0];
              cov_1i9alyqkyt.f[18]++;
              var enhancedToken = (cov_1i9alyqkyt.s[83]++, _this3.enhancerToToken.get(enhancer));
              cov_1i9alyqkyt.s[84]++;
              return "EnhancerOf<" + (enhancedToken ? (cov_1i9alyqkyt.b[35][0]++, enhancedToken.name) : (cov_1i9alyqkyt.b[35][1]++, '(unknown)')) + ">";
            });
          };

          var dependentTokens = (cov_1i9alyqkyt.s[85]++, [].concat(findDependentTokens(), findDependentEnhancers()));
          var base = (cov_1i9alyqkyt.s[86]++, 'A plugin depends on a token, but the token was not registered');
          var downstreams = (cov_1i9alyqkyt.s[87]++, 'This token is required by plugins registered with tokens: ' + dependentTokens.map(function (token) {
            cov_1i9alyqkyt.f[19]++;
            cov_1i9alyqkyt.s[88]++;
            return "\"" + token + "\"";
          }).join(', '));
          var stack = (cov_1i9alyqkyt.s[89]++, token.stacks.find(function (t) {
            cov_1i9alyqkyt.f[20]++;
            cov_1i9alyqkyt.s[90]++;
            return t.type === 'token';
          }));
          var meta = (cov_1i9alyqkyt.s[91]++, "Required token: " + (token ? (cov_1i9alyqkyt.b[36][0]++, token.name) : (cov_1i9alyqkyt.b[36][1]++, '')) + "\n" + downstreams + "\n" + (stack ? (cov_1i9alyqkyt.b[37][0]++, stack.stack) : (cov_1i9alyqkyt.b[37][1]++, '')));
          var clue = (cov_1i9alyqkyt.s[92]++, 'Different tokens with the same name were detected:\n\n');
          var suggestions = (cov_1i9alyqkyt.s[93]++, token ? (cov_1i9alyqkyt.b[38][0]++, _this3.plugins.filter(function (p) {
            cov_1i9alyqkyt.f[21]++;
            cov_1i9alyqkyt.s[94]++;
            return p.name === token.name;
          }).map(function (p) {
            cov_1i9alyqkyt.f[22]++;
            var stack = (cov_1i9alyqkyt.s[95]++, p.stacks.find(function (t) {
              cov_1i9alyqkyt.f[23]++;
              cov_1i9alyqkyt.s[96]++;
              return t.type === 'token';
            }));
            cov_1i9alyqkyt.s[97]++;
            return p.name + "\n" + (stack ? (cov_1i9alyqkyt.b[39][0]++, stack.stack) : (cov_1i9alyqkyt.b[39][1]++, '')) + "\n\n";
          }).join('\n\n')) : (cov_1i9alyqkyt.b[38][1]++, ''));
          var help = (cov_1i9alyqkyt.s[98]++, 'You may have multiple versions of the same plugin installed.\n' + 'Ensure that `yarn list [the-plugin]` results in one version, ' + 'and use a yarn resolution or merge package version in your lock file to consolidate versions.\n\n');
          cov_1i9alyqkyt.s[99]++;
          throw new Error(base + "\n\n" + meta + "\n\n" + ((cov_1i9alyqkyt.b[40][0]++, suggestions) && (cov_1i9alyqkyt.b[40][1]++, clue + suggestions + help)));
        }
      } else {
        cov_1i9alyqkyt.b[28][1]++;
      } // Recursive: get the registered type and resolve it


      cov_1i9alyqkyt.s[100]++;
      resolving.add(getTokenRef(token));

      function resolvePlugin(plugin) {
        cov_1i9alyqkyt.f[24]++;
        var registeredDeps = (cov_1i9alyqkyt.s[101]++, (cov_1i9alyqkyt.b[41][0]++, plugin) && (cov_1i9alyqkyt.b[41][1]++, plugin.deps) || (cov_1i9alyqkyt.b[41][2]++, {}));
        var resolvedDeps = (cov_1i9alyqkyt.s[102]++, {});
        cov_1i9alyqkyt.s[103]++;

        for (var key in registeredDeps) {
          var registeredToken = (cov_1i9alyqkyt.s[104]++, registeredDeps[key]);
          cov_1i9alyqkyt.s[105]++;
          resolvedDeps[key] = resolveToken(registeredToken, aliases);
        } // `provides` should be undefined if the plugin does not have a `provides` function


        var provides = (cov_1i9alyqkyt.s[106]++, (cov_1i9alyqkyt.b[43][0]++, plugin) && (cov_1i9alyqkyt.b[43][1]++, plugin.provides) ? (cov_1i9alyqkyt.b[42][0]++, plugin.provides(resolvedDeps)) : (cov_1i9alyqkyt.b[42][1]++, undefined));
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

      var provides = (cov_1i9alyqkyt.s[110]++, value);
      cov_1i9alyqkyt.s[111]++;

      if ((cov_1i9alyqkyt.b[47][0]++, value) && (cov_1i9alyqkyt.b[47][1]++, value.__plugin__)) {
        cov_1i9alyqkyt.b[46][0]++;
        cov_1i9alyqkyt.s[112]++;
        provides = resolvePlugin(provides);
        cov_1i9alyqkyt.s[113]++;

        if (value.cleanup) {
          cov_1i9alyqkyt.b[48][0]++;
          cov_1i9alyqkyt.s[114]++;

          _this3.cleanups.push(function () {
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
        enhancers.forEach(function (e) {
          cov_1i9alyqkyt.f[26]++;
          var nextProvides = (cov_1i9alyqkyt.s[119]++, e(provides));
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
              Object.values(nextProvides.deps).forEach(function (token) {
                cov_1i9alyqkyt.f[27]++;
                cov_1i9alyqkyt.s[125]++;
                return _this3._dependedOn.add(getTokenRef(token));
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

    for (var i = 0; i < this.plugins.length; i++) {
      cov_1i9alyqkyt.s[132]++;
      resolveToken(this.plugins[i]);
    }

    cov_1i9alyqkyt.s[133]++;

    for (var _iterator = nonPluginTokens, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
      var _ref6;

      if (_isArray) {
        if (_i >= _iterator.length) break;
        _ref6 = _iterator[_i++];
      } else {
        _i = _iterator.next();
        if (_i.done) break;
        _ref6 = _i.value;
      }

      var _token = _ref6;
      cov_1i9alyqkyt.s[134]++;

      if ((cov_1i9alyqkyt.b[56][0]++, _token !== __WEBPACK_IMPORTED_MODULE_2__tokens__["a" /* ElementToken */]) && (cov_1i9alyqkyt.b[56][1]++, _token !== __WEBPACK_IMPORTED_MODULE_2__tokens__["b" /* RenderToken */]) && (cov_1i9alyqkyt.b[56][2]++, !this._dependedOn.has(getTokenRef(_token)))) {
        cov_1i9alyqkyt.b[55][0]++;
        cov_1i9alyqkyt.s[135]++;
        throw new Error("Registered token without depending on it: \"" + _token.name + "\"");
      } else {
        cov_1i9alyqkyt.b[55][1]++;
      }
    }

    cov_1i9alyqkyt.s[136]++;
    this.plugins = resolvedPlugins;
    cov_1i9alyqkyt.s[137]++;

    this._getService = function (token) {
      cov_1i9alyqkyt.f[28]++;
      cov_1i9alyqkyt.s[138]++;
      return resolved.get(getTokenRef(token));
    };
  };

  _proto.getService = function getService(token) {
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
  };

  return FusionApp;
}();
/* Helper functions */


function getTokenRef(token) {
  cov_1i9alyqkyt.f[30]++;
  cov_1i9alyqkyt.s[142]++;

  if (token instanceof __WEBPACK_IMPORTED_MODULE_1__create_token__["a" /* TokenImpl */]) {
    cov_1i9alyqkyt.b[58][0]++;
    cov_1i9alyqkyt.s[143]++;
    return token.ref;
  } else {
    cov_1i9alyqkyt.b[58][1]++;
  }

  cov_1i9alyqkyt.s[144]++;
  return token;
}

/* harmony default export */ __webpack_exports__["a"] = (FusionApp);

/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(9)))

/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SSRDecider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__create_plugin__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__sanitization__ = __webpack_require__(8);



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
var botRegex = (cov_9vv6q15uj.s[0]++, /(bot|crawler|spider)/i);
var SSRDecider = (cov_9vv6q15uj.s[1]++, Object(__WEBPACK_IMPORTED_MODULE_0__create_plugin__["a" /* createPlugin */])({
  provides: function provides() {
    cov_9vv6q15uj.f[0]++;
    cov_9vv6q15uj.s[2]++;
    return function (ctx) {
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
        var agent = (cov_9vv6q15uj.s[6]++, ctx.headers['user-agent']);
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
function createSSRPlugin(_ref) {
  var element = _ref.element,
      ssrDecider = _ref.ssrDecider,
      ssrBodyTemplate = _ref.ssrBodyTemplate;
  cov_9vv6q15uj.f[2]++;
  cov_9vv6q15uj.s[14]++;
  return function ssrPlugin(ctx, next) {
    return new Promise(function ($return, $error) {
      var template;
      cov_9vv6q15uj.f[3]++;
      cov_9vv6q15uj.s[15]++;

      if (!ssrDecider(ctx)) {
        cov_9vv6q15uj.b[5][0]++;
        cov_9vv6q15uj.s[16]++;
        return $return(next());
      } else {
        cov_9vv6q15uj.b[5][1]++;
      }

      template = (cov_9vv6q15uj.s[17]++, {
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
      return Promise.resolve(next()).then(function ($await_1) {
        try {
          cov_9vv6q15uj.s[23]++;

          // Allow someone to override the ssr by setting ctx.body
          // This is especially useful for things like ctx.redirect
          if ((cov_9vv6q15uj.b[7][0]++, ctx.body) && (cov_9vv6q15uj.b[7][1]++, ctx.respond !== false)) {
            cov_9vv6q15uj.b[6][0]++;
            cov_9vv6q15uj.s[24]++;
            return $return();
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

          return $return();
        } catch ($boundEx) {
          return $error($boundEx);
        }
      }, $error);
    });
  };
}

function legacySSRBodyTemplate(ctx) {
  cov_9vv6q15uj.f[4]++;

  var _ref2 = (cov_9vv6q15uj.s[28]++, ctx.template),
      htmlAttrs = _ref2.htmlAttrs,
      bodyAttrs = _ref2.bodyAttrs,
      title = _ref2.title,
      head = _ref2.head,
      body = _ref2.body;

  var safeAttrs = (cov_9vv6q15uj.s[29]++, Object.keys(htmlAttrs).map(function (attrKey) {
    cov_9vv6q15uj.f[5]++;
    cov_9vv6q15uj.s[30]++;
    return " " + Object(__WEBPACK_IMPORTED_MODULE_1__sanitization__["c" /* escape */])(attrKey) + "=\"" + Object(__WEBPACK_IMPORTED_MODULE_1__sanitization__["c" /* escape */])(htmlAttrs[attrKey]) + "\"";
  }).join(''));
  var safeBodyAttrs = (cov_9vv6q15uj.s[31]++, Object.keys(bodyAttrs).map(function (attrKey) {
    cov_9vv6q15uj.f[6]++;
    cov_9vv6q15uj.s[32]++;
    return " " + Object(__WEBPACK_IMPORTED_MODULE_1__sanitization__["c" /* escape */])(attrKey) + "=\"" + Object(__WEBPACK_IMPORTED_MODULE_1__sanitization__["c" /* escape */])(bodyAttrs[attrKey]) + "\"";
  }).join(''));
  var safeTitle = (cov_9vv6q15uj.s[33]++, Object(__WEBPACK_IMPORTED_MODULE_1__sanitization__["c" /* escape */])(title));
  var safeHead = (cov_9vv6q15uj.s[34]++, head.map(__WEBPACK_IMPORTED_MODULE_1__sanitization__["a" /* consumeSanitizedHTML */]).join(''));
  var safeBody = (cov_9vv6q15uj.s[35]++, body.map(__WEBPACK_IMPORTED_MODULE_1__sanitization__["a" /* consumeSanitizedHTML */]).join(''));
  var preloadHintLinks = (cov_9vv6q15uj.s[36]++, getPreloadHintLinks(ctx));
  var coreGlobals = (cov_9vv6q15uj.s[37]++, getCoreGlobals(ctx));
  var chunkScripts = (cov_9vv6q15uj.s[38]++, getChunkScripts(ctx));
  var bundleSplittingBootstrap = (cov_9vv6q15uj.s[39]++, [preloadHintLinks, coreGlobals, chunkScripts].join(''));
  cov_9vv6q15uj.s[40]++;
  return ['<!doctype html>', "<html" + safeAttrs + ">", "<head>", "<meta charset=\"utf-8\" />", "<title>" + safeTitle + "</title>", "" + bundleSplittingBootstrap + safeHead, "</head>", "<body" + safeBodyAttrs + ">" + ctx.rendered + safeBody + "</body>", '</html>'].join('');
}

function getCoreGlobals(ctx) {
  cov_9vv6q15uj.f[7]++;

  var _ref3 = (cov_9vv6q15uj.s[41]++, ctx),
      webpackPublicPath = _ref3.webpackPublicPath,
      nonce = _ref3.nonce;

  cov_9vv6q15uj.s[42]++;
  return ["<script nonce=\"" + nonce + "\">", "window.performance && window.performance.mark && window.performance.mark('firstRenderStart');", "__ROUTE_PREFIX__ = " + JSON.stringify(ctx.prefix) + ";", // consumed by ./client
  "__WEBPACK_PUBLIC_PATH__ = " + JSON.stringify(webpackPublicPath) + ";", // consumed by fusion-clientries/client-entry
  "</script>"].join('');
}

function getUrls(_ref4, chunks) {
  var chunkUrlMap = _ref4.chunkUrlMap,
      webpackPublicPath = _ref4.webpackPublicPath;
  cov_9vv6q15uj.f[8]++;
  // cross origin is needed to get meaningful errors in window.onerror
  var isCrossOrigin = (cov_9vv6q15uj.s[43]++, webpackPublicPath.startsWith('http'));
  var crossOriginAttribute = (cov_9vv6q15uj.s[44]++, isCrossOrigin ? (cov_9vv6q15uj.b[9][0]++, ' crossorigin="anonymous"') : (cov_9vv6q15uj.b[9][1]++, ''));
  cov_9vv6q15uj.s[45]++;
  return [].concat(new Set(chunks)).map(function (id) {
    cov_9vv6q15uj.f[9]++;
    var url = (cov_9vv6q15uj.s[46]++, chunkUrlMap.get(id).get('es5'));
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
      url: url,
      crossOriginAttribute: crossOriginAttribute
    };
  });
}

function getChunkScripts(ctx) {
  cov_9vv6q15uj.f[10]++;
  var sync = (cov_9vv6q15uj.s[51]++, getUrls(ctx, ctx.syncChunks).map(function (_ref5) {
    var url = _ref5.url,
        crossOriginAttribute = _ref5.crossOriginAttribute;
    cov_9vv6q15uj.f[11]++;
    cov_9vv6q15uj.s[52]++;
    return "<script nonce=\"" + ctx.nonce + "\" defer" + crossOriginAttribute + " src=\"" + url + "\"></script>";
  }));
  var preloaded = (cov_9vv6q15uj.s[53]++, getUrls(ctx, ctx.preloadChunks.filter(function (item) {
    cov_9vv6q15uj.f[12]++;
    cov_9vv6q15uj.s[54]++;
    return !ctx.syncChunks.includes(item);
  })).map(function (_ref6) {
    var url = _ref6.url,
        crossOriginAttribute = _ref6.crossOriginAttribute;
    cov_9vv6q15uj.f[13]++;
    cov_9vv6q15uj.s[55]++;
    return "<script nonce=\"" + ctx.nonce + "\" defer" + crossOriginAttribute + " src=\"" + url + "\"></script>";
  }));
  cov_9vv6q15uj.s[56]++;
  return [].concat(preloaded, sync).join('');
}

function getPreloadHintLinks(ctx) {
  cov_9vv6q15uj.f[14]++;
  var chunks = (cov_9vv6q15uj.s[57]++, [].concat(ctx.preloadChunks, ctx.syncChunks));
  var hints = (cov_9vv6q15uj.s[58]++, getUrls(ctx, chunks).map(function (_ref7) {
    var url = _ref7.url,
        crossOriginAttribute = _ref7.crossOriginAttribute;
    cov_9vv6q15uj.f[15]++;
    cov_9vv6q15uj.s[59]++;
    return "<link rel=\"preload\"" + crossOriginAttribute + " href=\"" + url + "\" nonce=\"" + ctx.nonce + "\" as=\"script\" />";
  }));
  cov_9vv6q15uj.s[60]++;
  return hints.join('');
}

/* unused harmony default export */ var _unused_webpack_default_export = (createSSRPlugin);



/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
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

/** Copyright (c) 2018 Uber Technologies, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

/* eslint-env browser */
function createClientHydrate(_ref) {
  var element = _ref.element;
  cov_wspwz0jid.f[0]++;
  cov_wspwz0jid.s[0]++;
  return function clientHydrate(ctx, next) {
    cov_wspwz0jid.f[1]++;
    cov_wspwz0jid.s[1]++;
    ctx.prefix = (cov_wspwz0jid.b[0][0]++, window.__ROUTE_PREFIX__) || (cov_wspwz0jid.b[0][1]++, ''); // serialized by ./server

    cov_wspwz0jid.s[2]++;
    ctx.element = element;
    cov_wspwz0jid.s[3]++;
    ctx.preloadChunks = [];
    cov_wspwz0jid.s[4]++;
    return next();
  };
}

/* harmony default export */ __webpack_exports__["a"] = (createClientHydrate);


/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
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

/** Copyright (c) 2018 Uber Technologies, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */
function createClientRenderer(_ref) {
  var render = _ref.render;
  cov_n9rnunk7v.f[0]++;
  cov_n9rnunk7v.s[0]++;
  return function renderer(ctx, next) {
    cov_n9rnunk7v.f[1]++;
    var rendered = (cov_n9rnunk7v.s[1]++, render(ctx.element, ctx));
    cov_n9rnunk7v.s[2]++;

    if (rendered instanceof Promise) {
      cov_n9rnunk7v.b[0][0]++;
      cov_n9rnunk7v.s[3]++;
      return rendered.then(function (r) {
        cov_n9rnunk7v.f[2]++;
        cov_n9rnunk7v.s[4]++;
        ctx.rendered = r;
        cov_n9rnunk7v.s[5]++;
        return next();
      });
    } else {
      cov_n9rnunk7v.b[0][1]++;
      cov_n9rnunk7v.s[6]++;
      ctx.rendered = rendered;
      cov_n9rnunk7v.s[7]++;
      return next();
    }
  };
}

/* harmony default export */ __webpack_exports__["a"] = (createClientRenderer);


/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__test_helper__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__client_app__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__create_plugin__ = __webpack_require__(2);




var App = Object(__WEBPACK_IMPORTED_MODULE_1__client_app__["a" /* default */])();
Object(__WEBPACK_IMPORTED_MODULE_0__test_helper__["a" /* default */])('app.cleanup with no cleanup plugins', function (t) {
  return new Promise(function ($return, $error) {
    var app;
    app = new App('el', function (el) {
      return el;
    });
    app.register(Object(__WEBPACK_IMPORTED_MODULE_2__create_plugin__["a" /* createPlugin */])({
      provides: function provides() {
        return 'hello world';
      },
      middleware: function middleware() {
        return function (ctx, next) {
          return next();
        };
      }
    }));
    app.resolve();
    return Promise.resolve(app.cleanup()).then(function ($await_1) {
      try {
        t.ok('cleans up ok');
        t.end();
        return $return();
      } catch ($boundEx) {
        return $error($boundEx);
      }
    }, $error);
  });
});
Object(__WEBPACK_IMPORTED_MODULE_0__test_helper__["a" /* default */])('app.cleanup with async cleanup plugins', function (t) {
  return new Promise(function ($return, $error) {
    var app, firstCleanupCalled, nextCleanupCalled;
    app = new App('el', function (el) {
      return el;
    });
    firstCleanupCalled = false;
    nextCleanupCalled = false;
    app.register(Object(__WEBPACK_IMPORTED_MODULE_2__create_plugin__["a" /* createPlugin */])({
      provides: function provides() {
        return 'hello world';
      },
      cleanup: function cleanup(p) {
        firstCleanupCalled = true;
        t.equal(p, 'hello world', 'provides correct value to cleanup');
        return Promise.resolve();
      },
      middleware: function middleware() {
        return function (ctx, next) {
          return next();
        };
      }
    }));
    app.register(Object(__WEBPACK_IMPORTED_MODULE_2__create_plugin__["a" /* createPlugin */])({
      provides: function provides() {
        return 'another test';
      },
      cleanup: function cleanup(p) {
        nextCleanupCalled = true;
        t.equal(p, 'another test', 'provides correct value to cleanup');
        return Promise.resolve();
      },
      middleware: function middleware() {
        return function (ctx, next) {
          return next();
        };
      }
    }));
    app.resolve();
    t.notOk(firstCleanupCalled, 'resolve() does not call cleanups');
    t.notOk(nextCleanupCalled, 'resolve() does not call cleanups');
    return Promise.resolve(app.cleanup()).then(function ($await_2) {
      try {
        t.ok(firstCleanupCalled, 'calls all cleanups');
        t.ok(nextCleanupCalled, 'calls all cleanups');
        t.end();
        return $return();
      } catch ($boundEx) {
        return $error($boundEx);
      }
    }, $error);
  });
});
Object(__WEBPACK_IMPORTED_MODULE_0__test_helper__["a" /* default */])('app.cleanup does not cleanup if cleanup was not given a function', function (t) {
  return new Promise(function ($return, $error) {
    var app;
    app = new App('el', function (el) {
      return el;
    });
    app.register(Object(__WEBPACK_IMPORTED_MODULE_2__create_plugin__["a" /* createPlugin */])({
      provides: function provides() {
        return 'hello world';
      },
      // $FlowFixMe - Ignore this to test branch
      cleanup: 'notafunc',
      middleware: function middleware() {
        return function (ctx, next) {
          return next();
        };
      }
    }));
    app.resolve();
    return Promise.resolve(app.cleanup()).then(function ($await_3) {
      try {
        t.end();
        return $return();
      } catch ($boundEx) {
        return $error($boundEx);
      }
    }, $error);
  });
});


/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__test_helper__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__compose__ = __webpack_require__(11);



/** Copyright (c) 2018 Uber Technologies, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */
Object(__WEBPACK_IMPORTED_MODULE_0__test_helper__["a" /* default */])('composed middleware are executed correctly', function (t) {
  function A(ctx, next) {
    return next();
  }

  var middleware = Object(__WEBPACK_IMPORTED_MODULE_1__compose__["a" /* compose */])([A]);

  var next = function next() {
    return Promise.resolve();
  }; // $FlowFixMe


  t.doesNotThrow(function () {
    return middleware({}, next);
  }, 'works with valid args'); // $FlowFixMe

  t.doesNotThrow(function () {
    return middleware(void 0, next);
  }, 'works with missing ctx'); // $FlowFixMe

  t.doesNotThrow(function () {
    return middleware();
  }, 'works with missing next');
  t.end();
});
Object(__WEBPACK_IMPORTED_MODULE_0__test_helper__["a" /* default */])('downstream and upstream run in same order as koa', function (t) {
  t.plan(6);

  function a(ctx, next) {
    t.equals(++ctx.number, 1, 'A downstream is called correctly');
    return next().then(function () {
      t.equals(++ctx.number, 6, 'A upstream is called correctly');
    });
  }

  function b(ctx, next) {
    t.equals(++ctx.number, 2, 'B downstream is called correctly');
    return next().then(function () {
      t.equals(++ctx.number, 5, 'B upstream is called correctly');
    });
  }

  function c(ctx, next) {
    t.equals(++ctx.number, 3, 'D downstream is called correctly');
    return next().then(function () {
      t.equals(++ctx.number, 4, 'D upstream is called correctly');
    });
  }

  var middleware = Object(__WEBPACK_IMPORTED_MODULE_1__compose__["a" /* compose */])([a, b, c]);
  var ctx = {
    number: 0
  };

  var next = function next() {
    return Promise.resolve();
  }; // $FlowFixMe


  middleware(ctx, next).then(t.end);
});


/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tape_cup__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__client_app__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__create_plugin__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__create_token__ = __webpack_require__(3);





var App = Object(__WEBPACK_IMPORTED_MODULE_1__client_app__["a" /* default */])();
var TokenA = Object(__WEBPACK_IMPORTED_MODULE_3__create_token__["c" /* createToken */])('TokenA');
var TokenB = Object(__WEBPACK_IMPORTED_MODULE_3__create_token__["c" /* createToken */])('TokenB');
var TokenC = Object(__WEBPACK_IMPORTED_MODULE_3__create_token__["c" /* createToken */])('TokenC');
var TokenD = Object(__WEBPACK_IMPORTED_MODULE_3__create_token__["c" /* createToken */])('TokenD');
var TokenEAsNullable = Object(__WEBPACK_IMPORTED_MODULE_3__create_token__["c" /* createToken */])('TokenEAsNullable');
var TokenString = Object(__WEBPACK_IMPORTED_MODULE_3__create_token__["c" /* createToken */])('TokenString');
var TokenNumber = Object(__WEBPACK_IMPORTED_MODULE_3__create_token__["c" /* createToken */])('TokenNumber');
Object(__WEBPACK_IMPORTED_MODULE_0_tape_cup__["a" /* default */])('dependency registration', function (t) {
  var app = new App('el', function (el) {
    return el;
  });
  t.ok(app, 'creates an app');
  var counters = {
    a: 0,
    b: 0,
    c: 0,
    d: 0
  };
  var PluginA = Object(__WEBPACK_IMPORTED_MODULE_2__create_plugin__["a" /* createPlugin */])({
    provides: function provides() {
      counters.a++;
      t.equal(counters.a, 1, 'only instantiates once');
      return {
        a: 'PluginA'
      };
    }
  });
  var PluginB = Object(__WEBPACK_IMPORTED_MODULE_2__create_plugin__["a" /* createPlugin */])({
    deps: {
      a: TokenA
    },
    provides: function provides(deps) {
      counters.b++;
      t.equal(deps.a.a, 'PluginA');
      t.equal(counters.b, 1, 'only instantiates once');
      return {
        b: 'PluginB'
      };
    }
  });
  var PluginC = Object(__WEBPACK_IMPORTED_MODULE_2__create_plugin__["a" /* createPlugin */])({
    deps: {
      a: TokenA,
      b: TokenB
    },
    provides: function provides(deps) {
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
  app.register(Object(__WEBPACK_IMPORTED_MODULE_2__create_plugin__["a" /* createPlugin */])({
    deps: {
      a: TokenA,
      b: TokenB,
      c: TokenC
    },
    provides: function provides(deps) {
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
Object(__WEBPACK_IMPORTED_MODULE_0_tape_cup__["a" /* default */])('dependency registration with aliases', function (t) {
  var app = new App('el', function (el) {
    return el;
  });
  t.ok(app, 'creates an app');
  var counters = {
    a: 0,
    b: 0,
    c: 0,
    d: 0
  };
  var PluginA = Object(__WEBPACK_IMPORTED_MODULE_2__create_plugin__["a" /* createPlugin */])({
    provides: function provides() {
      counters.a++;
      t.equal(counters.a, 1, 'only instantiates once');
      return {
        a: 'PluginA'
      };
    }
  });
  var PluginB = Object(__WEBPACK_IMPORTED_MODULE_2__create_plugin__["a" /* createPlugin */])({
    deps: {
      a: TokenA
    },
    provides: function provides(deps) {
      counters.b++;
      t.equal(deps.a.a, 'PluginA');
      t.equal(counters.b, 1, 'only instantiates once');
      return {
        b: 'PluginB'
      };
    }
  });
  var PluginC = Object(__WEBPACK_IMPORTED_MODULE_2__create_plugin__["a" /* createPlugin */])({
    deps: {
      a: TokenA,
      b: TokenB
    },
    provides: function provides(deps) {
      counters.c++;
      t.equal(deps.a.a, 'PluginA');
      t.equal(deps.b.b, 'PluginD', 'uses correct alias');
      t.equal(counters.c, 1, 'only instantiates once');
      return {
        c: 'PluginC'
      };
    }
  });
  var PluginD = Object(__WEBPACK_IMPORTED_MODULE_2__create_plugin__["a" /* createPlugin */])({
    deps: {
      a: TokenA
    },
    provides: function provides(deps) {
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
Object(__WEBPACK_IMPORTED_MODULE_0_tape_cup__["a" /* default */])('optional dependency registration with aliases', function (t) {
  var app = new App('el', function (el) {
    return el;
  });
  t.ok(app, 'creates an app');
  var counters = {
    a: 0,
    b: 0,
    c: 0,
    d: 0
  };
  var PluginA = Object(__WEBPACK_IMPORTED_MODULE_2__create_plugin__["a" /* createPlugin */])({
    provides: function provides() {
      counters.a++;
      t.equal(counters.a, 1, 'only instantiates once');
      return {
        a: 'PluginA'
      };
    }
  });
  var PluginB = Object(__WEBPACK_IMPORTED_MODULE_2__create_plugin__["a" /* createPlugin */])({
    deps: {
      a: TokenA
    },
    provides: function provides(deps) {
      counters.b++;
      t.equal(deps.a.a, 'PluginA');
      t.equal(counters.b, 1, 'only instantiates once');
      return {
        b: 'PluginB'
      };
    }
  });
  var PluginC = Object(__WEBPACK_IMPORTED_MODULE_2__create_plugin__["a" /* createPlugin */])({
    deps: {
      a: TokenA,
      b: TokenB.optional
    },
    provides: function provides(deps) {
      counters.c++;
      t.equal(deps.a.a, 'PluginA');
      t.equal(deps.b && deps.b.b, 'PluginD', 'uses correct alias');
      t.equal(counters.c, 1, 'only instantiates once');
      return {
        c: 'PluginC'
      };
    }
  });
  var PluginD = Object(__WEBPACK_IMPORTED_MODULE_2__create_plugin__["a" /* createPlugin */])({
    deps: {
      a: TokenA
    },
    provides: function provides(deps) {
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
Object(__WEBPACK_IMPORTED_MODULE_0_tape_cup__["a" /* default */])('dependency registration with aliasing non-plugins', function (t) {
  var app = new App('el', function (el) {
    return el;
  });
  t.ok(app, 'creates an app');
  var counters = {
    a: 0,
    b: 0,
    c: 0,
    d: 0
  };
  var ValueA = 'some-value';
  var AliasedValue = 'some-aliased-value';
  var ValueTokenA = Object(__WEBPACK_IMPORTED_MODULE_3__create_token__["c" /* createToken */])('ValueA');
  var AliasedTokenA = Object(__WEBPACK_IMPORTED_MODULE_3__create_token__["c" /* createToken */])('AliasedTokenA');
  var PluginB = Object(__WEBPACK_IMPORTED_MODULE_2__create_plugin__["a" /* createPlugin */])({
    deps: {
      a: ValueTokenA
    },
    provides: function provides(deps) {
      counters.b++;
      t.equal(deps.a, 'some-value');
      t.equal(counters.b, 1, 'only instantiates once');
      return {
        b: 'PluginB'
      };
    }
  });
  var PluginC = Object(__WEBPACK_IMPORTED_MODULE_2__create_plugin__["a" /* createPlugin */])({
    deps: {
      a: ValueTokenA
    },
    provides: function provides(deps) {
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
Object(__WEBPACK_IMPORTED_MODULE_0_tape_cup__["a" /* default */])('dependency registration with no token', function (t) {
  var app = new App('el', function (el) {
    return el;
  });
  var PluginA = Object(__WEBPACK_IMPORTED_MODULE_2__create_plugin__["a" /* createPlugin */])({
    provides: function provides() {
      return {
        a: 'PluginA'
      };
    }
  });
  var PluginB = Object(__WEBPACK_IMPORTED_MODULE_2__create_plugin__["a" /* createPlugin */])({
    deps: {
      a: TokenA
    },
    provides: function provides(deps) {
      t.equal(deps.a.a, 'PluginA');
      return {
        b: 'PluginB'
      };
    }
  });
  app.register(TokenA, PluginA);
  app.register(TokenB, PluginB);
  app.register(Object(__WEBPACK_IMPORTED_MODULE_2__create_plugin__["a" /* createPlugin */])({
    deps: {
      a: TokenA,
      b: TokenB
    },
    provides: function provides(deps) {
      t.equal(deps.a.a, 'PluginA');
      t.equal(deps.b.b, 'PluginB');
    }
  }));
  app.resolve();
  t.end();
});
Object(__WEBPACK_IMPORTED_MODULE_0_tape_cup__["a" /* default */])('dependency registration with middleware', function (t) {
  var counters = {
    a: 0,
    b: 0,
    c: 0,
    d: 0
  };
  var app = new App('el', function (el) {
    return el;
  });
  t.ok(app, 'creates an app');
  var PluginA = Object(__WEBPACK_IMPORTED_MODULE_2__create_plugin__["a" /* createPlugin */])({
    provides: function provides() {
      counters.a++;
      t.equal(counters.a, 1, 'only instantiates once');
      return {
        a: 'PluginA'
      };
    }
  });
  var PluginB = Object(__WEBPACK_IMPORTED_MODULE_2__create_plugin__["a" /* createPlugin */])({
    deps: {
      a: TokenA
    },
    provides: function provides(deps) {
      counters.b++;
      t.equal(deps.a.a, 'PluginA');
      t.equal(counters.b, 1, 'only instantiates once');
      return {
        b: 'PluginB'
      };
    }
  });
  var PluginC = Object(__WEBPACK_IMPORTED_MODULE_2__create_plugin__["a" /* createPlugin */])({
    deps: {
      a: TokenA,
      b: TokenB
    },
    provides: function provides(deps) {
      counters.c++;
      t.equal(deps.a.a, 'PluginA');
      t.equal(deps.b.b, 'PluginB');
      t.equal(counters.c, 1, 'only instantiates once');
      return {
        c: 'PluginC'
      };
    },
    middleware: function middleware() {
      return function (ctx, next) {
        return next();
      };
    }
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
Object(__WEBPACK_IMPORTED_MODULE_0_tape_cup__["a" /* default */])('dependency registration with missing dependency', function (t) {
  var app = new App('el', function (el) {
    return el;
  });
  var PluginA = Object(__WEBPACK_IMPORTED_MODULE_2__create_plugin__["a" /* createPlugin */])({
    provides: function provides() {
      return {
        a: 'PluginA'
      };
    }
  });
  var PluginC = Object(__WEBPACK_IMPORTED_MODULE_2__create_plugin__["a" /* createPlugin */])({
    deps: {
      a: TokenA,
      b: TokenB
    },
    provides: function provides() {
      return {
        c: 'PluginC'
      };
    }
  });
  app.register(TokenA, PluginA);
  app.register(TokenC, PluginC);
  t.throws(function () {
    return app.resolve();
  }, 'Catches missing dependencies');
  t.end();
});
Object(__WEBPACK_IMPORTED_MODULE_0_tape_cup__["a" /* default */])('dependency registration with null value', function (t) {
  var app = new App('el', function (el) {
    return el;
  });
  t.doesNotThrow(function () {
    var PluginC = Object(__WEBPACK_IMPORTED_MODULE_2__create_plugin__["a" /* createPlugin */])({
      deps: {
        optionalNull: TokenEAsNullable
      },
      provides: function provides(deps) {
        t.equal(deps.optionalNull, null, 'null provided as expected');
      }
    });
    app.register(TokenEAsNullable, null);
    app.register(PluginC);
    app.resolve();
  });
  t.doesNotThrow(function () {
    var app = new App('el', function (el) {
      return el;
    }); // $FlowFixMe

    app.register(TokenString, null);
    app.middleware({
      something: TokenString
    }, function (_ref) {
      var something = _ref.something;
      t.equal(something, null, 'null provided as expected');
      return function (ctx, next) {
        return next();
      };
    });
    app.resolve();
  });
  t.end();
});
Object(__WEBPACK_IMPORTED_MODULE_0_tape_cup__["a" /* default */])('dependency registration with optional deps', function (t) {
  var app = new App('el', function (el) {
    return el;
  });

  var checkString = function checkString(s) {
    t.equals(s, 'hello', 'correct string value is provided');
  };

  var checkNumUndefined = function checkNumUndefined(n) {
    t.equals(n, undefined, 'no number value is provided for unregistered optional token');
  };

  var PluginA = Object(__WEBPACK_IMPORTED_MODULE_2__create_plugin__["a" /* createPlugin */])({
    deps: {
      str: TokenString,
      numOpt: TokenNumber.optional
    },
    provides: function provides(_ref2) {
      var str = _ref2.str,
          numOpt = _ref2.numOpt;
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
Object(__WEBPACK_IMPORTED_MODULE_0_tape_cup__["a" /* default */])('dependency registration with missing deep tree dependency', function (t) {
  var app = new App('el', function (el) {
    return el;
  });
  var PluginA = Object(__WEBPACK_IMPORTED_MODULE_2__create_plugin__["a" /* createPlugin */])({
    provides: function provides() {
      return {
        a: 'PluginA'
      };
    }
  });
  var PluginB = Object(__WEBPACK_IMPORTED_MODULE_2__create_plugin__["a" /* createPlugin */])({
    deps: {
      a: TokenA,
      d: 'RANDOM-TOKEN'
    },
    provides: function provides() {
      return {
        b: 'PluginB'
      };
    }
  });
  var PluginC = Object(__WEBPACK_IMPORTED_MODULE_2__create_plugin__["a" /* createPlugin */])({
    deps: {
      a: TokenA,
      b: TokenB
    },
    provides: function provides() {
      return {
        c: 'PluginC'
      };
    }
  });
  app.register(TokenC, PluginC);
  app.register(TokenA, PluginA);
  app.register(TokenB, PluginB);
  t.throws(function () {
    return app.resolve();
  }, 'Catches missing dependencies');
  t.end();
});
Object(__WEBPACK_IMPORTED_MODULE_0_tape_cup__["a" /* default */])('dependency registration with circular dependency', function (t) {
  var app = new App('el', function (el) {
    return el;
  });
  var PluginB = Object(__WEBPACK_IMPORTED_MODULE_2__create_plugin__["a" /* createPlugin */])({
    deps: {
      c: TokenC
    },
    provides: function provides() {
      return {
        b: 'PluginB'
      };
    }
  });
  var PluginC = Object(__WEBPACK_IMPORTED_MODULE_2__create_plugin__["a" /* createPlugin */])({
    deps: {
      b: TokenB
    },
    provides: function provides() {
      return {
        c: 'PluginC'
      };
    }
  });
  app.register(TokenB, PluginB);
  app.register(TokenC, PluginC);
  t.throws(function () {
    return app.resolve();
  }, 'Catches circular dependencies');
  t.end();
});
Object(__WEBPACK_IMPORTED_MODULE_0_tape_cup__["a" /* default */])('dependency configuration with missing deps', function (t) {
  var ParentToken = Object(__WEBPACK_IMPORTED_MODULE_3__create_token__["c" /* createToken */])('parent-token');
  var StringToken = Object(__WEBPACK_IMPORTED_MODULE_3__create_token__["c" /* createToken */])('string-token');
  var OtherStringToken = Object(__WEBPACK_IMPORTED_MODULE_3__create_token__["c" /* createToken */])('other-string-token');
  var app = new App('el', function (el) {
    return el;
  });
  app.register(ParentToken, Object(__WEBPACK_IMPORTED_MODULE_2__create_plugin__["a" /* createPlugin */])({
    deps: {
      a: StringToken,
      b: OtherStringToken
    },
    provides: function provides() {
      t.fail('should not get here');
      return 'service';
    }
  }));
  app.register(StringToken, 'string-a');
  t.throws(function () {
    return app.resolve();
  }, 'throws if dependencies are not configured');
  t.throws(function () {
    return app.resolve();
  }, /required by plugins registered with tokens: "parent-token"/);
  t.end();
});
Object(__WEBPACK_IMPORTED_MODULE_0_tape_cup__["a" /* default */])('error message when dependent plugin does not have token', function (t) {
  var StringToken = Object(__WEBPACK_IMPORTED_MODULE_3__create_token__["c" /* createToken */])('string-token');
  var OtherStringToken = Object(__WEBPACK_IMPORTED_MODULE_3__create_token__["c" /* createToken */])('other-string-token');
  var app = new App('el', function (el) {
    return el;
  });
  app.register(Object(__WEBPACK_IMPORTED_MODULE_2__create_plugin__["a" /* createPlugin */])({
    deps: {
      a: StringToken,
      b: OtherStringToken
    },
    provides: function provides() {
      t.fail('should not get here');
      return {};
    }
  }));
  app.register(StringToken, 'string-a');
  t.throws(function () {
    return app.resolve();
  }, /required by plugins registered with tokens: "UnnamedPlugin"/);
  t.end();
});
Object(__WEBPACK_IMPORTED_MODULE_0_tape_cup__["a" /* default */])('Extraneous dependencies', function (t) {
  var app = new App('el', function (el) {
    return el;
  });
  var TestToken = Object(__WEBPACK_IMPORTED_MODULE_3__create_token__["c" /* createToken */])('test');
  app.register(TestToken, 'some-value');
  t.throws(function () {
    return app.resolve();
  });
  t.end();
});
Object(__WEBPACK_IMPORTED_MODULE_0_tape_cup__["a" /* default */])('Extraneous dependencies after re-registering', function (t) {
  var app = new App('el', function (el) {
    return el;
  });
  var TokenA = Object(__WEBPACK_IMPORTED_MODULE_3__create_token__["c" /* createToken */])('A');
  var TokenB = Object(__WEBPACK_IMPORTED_MODULE_3__create_token__["c" /* createToken */])('B');
  app.register(TokenA, Object(__WEBPACK_IMPORTED_MODULE_2__create_plugin__["a" /* createPlugin */])({
    deps: {
      b: TokenB
    }
  }));
  app.register(TokenB, 'test');
  app.register(TokenA, Object(__WEBPACK_IMPORTED_MODULE_2__create_plugin__["a" /* createPlugin */])({}));
  t.doesNotThrow(function () {
    return app.resolve();
  });
  t.end();
});
Object(__WEBPACK_IMPORTED_MODULE_0_tape_cup__["a" /* default */])('Missing token errors reasonably', function (t) {
  var app = new App('el', function (el) {
    return el;
  }); // $FlowFixMe

  t.throws(function () {
    return app.register('some-value');
  }, /Cannot register some-value/);
  var BrowserPlugin = null; // idiomatic browser plugin implementation for server-only plugin is `export default null`;
  // $FlowFixMe

  t.throws(function () {
    return app.register(BrowserPlugin);
  }, /Cannot register null/);
  t.end();
});
Object(__WEBPACK_IMPORTED_MODULE_0_tape_cup__["a" /* default */])('retrieve dependency', function (t) {
  var app = new App('el', function (el) {
    return el;
  });
  var TokenA = Object(__WEBPACK_IMPORTED_MODULE_3__create_token__["c" /* createToken */])('a');
  var PluginA = Object(__WEBPACK_IMPORTED_MODULE_2__create_plugin__["a" /* createPlugin */])({
    provides: function provides() {
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
Object(__WEBPACK_IMPORTED_MODULE_0_tape_cup__["a" /* default */])('retrieve unresolved dependency', function (t) {
  var app = new App('el', function (el) {
    return el;
  });
  var TokenA = Object(__WEBPACK_IMPORTED_MODULE_3__create_token__["c" /* createToken */])('a');
  var PluginA = Object(__WEBPACK_IMPORTED_MODULE_2__create_plugin__["a" /* createPlugin */])({
    provides: function provides() {
      return {
        a: 'Hello'
      };
    }
  });
  app.register(TokenA, PluginA);
  t.throws(function () {
    return app.getService(TokenA);
  }, /Cannot get service from unresolved app/);
  t.end();
});


/***/ }),
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tape_cup__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__client_app__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__create_plugin__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__create_token__ = __webpack_require__(3);





var App = Object(__WEBPACK_IMPORTED_MODULE_1__client_app__["a" /* default */])();
Object(__WEBPACK_IMPORTED_MODULE_0_tape_cup__["a" /* default */])('enhancement', function (t) {
  var app = new App('el', function (el) {
    return el;
  });
  var FnToken = Object(__WEBPACK_IMPORTED_MODULE_3__create_token__["c" /* createToken */])('FnType');
  var BaseFn = Object(__WEBPACK_IMPORTED_MODULE_2__create_plugin__["a" /* createPlugin */])({
    provides: function provides() {
      return function (arg) {
        return arg;
      };
    }
  });

  var BaseFnEnhancer = function BaseFnEnhancer(fn) {
    return function (arg) {
      return fn(arg) + ' enhanced';
    };
  };

  app.register(FnToken, BaseFn);
  app.enhance(FnToken, BaseFnEnhancer);
  app.middleware({
    fn: FnToken
  }, function (_ref) {
    var fn = _ref.fn;
    t.equal(fn('hello'), 'hello enhanced');
    t.end();
    return function (ctx, next) {
      return next();
    };
  });
  app.resolve();
});
Object(__WEBPACK_IMPORTED_MODULE_0_tape_cup__["a" /* default */])('enhancement with a plugin', function (t) {
  var app = new App('el', function (el) {
    return el;
  });
  var FnToken = Object(__WEBPACK_IMPORTED_MODULE_3__create_token__["c" /* createToken */])('FnType');
  var BaseFn = Object(__WEBPACK_IMPORTED_MODULE_2__create_plugin__["a" /* createPlugin */])({
    provides: function provides() {
      return function (arg) {
        return arg;
      };
    }
  });

  var BaseFnEnhancer = function BaseFnEnhancer(fn) {
    return Object(__WEBPACK_IMPORTED_MODULE_2__create_plugin__["a" /* createPlugin */])({
      provides: function provides() {
        return function (arg) {
          return fn(arg) + ' enhanced';
        };
      }
    });
  };

  app.register(FnToken, BaseFn);
  app.enhance(FnToken, BaseFnEnhancer);
  app.middleware({
    fn: FnToken
  }, function (_ref2) {
    var fn = _ref2.fn;
    t.equal(fn('hello'), 'hello enhanced');
    t.end();
    return function (ctx, next) {
      return next();
    };
  });
  app.resolve();
});
Object(__WEBPACK_IMPORTED_MODULE_0_tape_cup__["a" /* default */])('enhancement with a plugin allows orphan plugins', function (t) {
  var app = new App('el', function (el) {
    return el;
  });
  var FnToken = Object(__WEBPACK_IMPORTED_MODULE_3__create_token__["c" /* createToken */])('FnType');

  var BaseFn = function BaseFn(a) {
    return a;
  };

  var BaseFnEnhancer = function BaseFnEnhancer(fn) {
    return Object(__WEBPACK_IMPORTED_MODULE_2__create_plugin__["a" /* createPlugin */])({
      provides: function provides() {
        return function (arg) {
          return fn(arg) + ' enhanced';
        };
      }
    });
  };

  app.register(FnToken, BaseFn);
  app.enhance(FnToken, BaseFnEnhancer);
  t.doesNotThrow(function () {
    app.resolve();
  });
  t.end();
});
Object(__WEBPACK_IMPORTED_MODULE_0_tape_cup__["a" /* default */])('enhancement with a non-plugin enhancer does not allow orphan plugins', function (t) {
  var app = new App('el', function (el) {
    return el;
  });
  var FnToken = Object(__WEBPACK_IMPORTED_MODULE_3__create_token__["c" /* createToken */])('FnType');

  var BaseFn = function BaseFn(a) {
    return a;
  };

  var BaseFnEnhancer = function BaseFnEnhancer(fn) {
    return fn;
  };

  app.register(FnToken, BaseFn);
  app.enhance(FnToken, BaseFnEnhancer);
  t.throws(function () {
    app.resolve();
  });
  t.end();
});
Object(__WEBPACK_IMPORTED_MODULE_0_tape_cup__["a" /* default */])('enhancement with a plugin with deps', function (t) {
  var app = new App('el', function (el) {
    return el;
  });
  var DepAToken = Object(__WEBPACK_IMPORTED_MODULE_3__create_token__["c" /* createToken */])('DepA');
  var DepBToken = Object(__WEBPACK_IMPORTED_MODULE_3__create_token__["c" /* createToken */])('DepB');
  var DepCToken = Object(__WEBPACK_IMPORTED_MODULE_3__create_token__["c" /* createToken */])('DepC');
  var DepA = 'test-dep-a';
  var DepB = Object(__WEBPACK_IMPORTED_MODULE_2__create_plugin__["a" /* createPlugin */])({
    deps: {
      a: DepAToken
    },
    provides: function provides(_ref3) {
      var a = _ref3.a;
      t.equal(a, DepA);
      return 'test-dep-b';
    }
  });
  var FnToken = Object(__WEBPACK_IMPORTED_MODULE_3__create_token__["c" /* createToken */])('FnType');
  var BaseFn = Object(__WEBPACK_IMPORTED_MODULE_2__create_plugin__["a" /* createPlugin */])({
    provides: function provides() {
      return function (arg) {
        return arg;
      };
    }
  });

  var BaseFnEnhancer = function BaseFnEnhancer(fn) {
    return Object(__WEBPACK_IMPORTED_MODULE_2__create_plugin__["a" /* createPlugin */])({
      deps: {
        a: DepAToken,
        b: DepBToken,
        c: DepCToken
      },
      provides: function provides(_ref4) {
        var a = _ref4.a,
            b = _ref4.b,
            c = _ref4.c;
        t.equal(a, 'test-dep-a');
        t.equal(b, 'test-dep-b');
        t.equal(c, 'test-dep-c');
        return function (arg) {
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
  }, function (_ref5) {
    var fn = _ref5.fn;
    t.equal(fn('hello'), 'hello enhanced');
    t.end();
    return function (ctx, next) {
      return next();
    };
  });
  app.resolve();
});
Object(__WEBPACK_IMPORTED_MODULE_0_tape_cup__["a" /* default */])('enhancement with a plugin with missing deps', function (t) {
  var app = new App('el', function (el) {
    return el;
  });
  var DepAToken = Object(__WEBPACK_IMPORTED_MODULE_3__create_token__["c" /* createToken */])('DepA');
  var DepBToken = Object(__WEBPACK_IMPORTED_MODULE_3__create_token__["c" /* createToken */])('DepB');
  var DepB = 'test-dep-b';
  var FnToken = Object(__WEBPACK_IMPORTED_MODULE_3__create_token__["c" /* createToken */])('FnType');
  var BaseFn = Object(__WEBPACK_IMPORTED_MODULE_2__create_plugin__["a" /* createPlugin */])({
    provides: function provides() {
      return function (arg) {
        return arg;
      };
    }
  });

  var BaseFnEnhancer = function BaseFnEnhancer(fn) {
    return Object(__WEBPACK_IMPORTED_MODULE_2__create_plugin__["a" /* createPlugin */])({
      deps: {
        a: DepAToken,
        b: DepBToken
      },
      provides: function provides() {
        t.fail('should not get here');
        return function (arg) {
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
  }, function (_ref6) {
    var fn = _ref6.fn;
    t.equal(fn('hello'), 'hello enhanced');
    t.end();
    return function (ctx, next) {
      return next();
    };
  });
  t.throws(function () {
    return app.resolve();
  }, /This token is required by plugins registered with tokens: "EnhancerOf<FnType>"/);
  t.end();
});


/***/ }),
/* 25 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__client_app__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__memoize__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sanitization__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tokens__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__create_plugin__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_tape_cup__ = __webpack_require__(0);







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
(cov_b3u3jownd.b[0][0]++, function () {
  cov_b3u3jownd.f[0]++;
});

 // Handle flow-types for export so browser export is ignored.

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

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

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

  for (var _iterator = middleware, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
    var _ref;

    if (_isArray) {
      if (_i >= _iterator.length) break;
      _ref = _iterator[_i++];
    } else {
      _i = _iterator.next();
      if (_i.done) break;
      _ref = _i.value;
    }

    var _fn = _ref;
    cov_1rq9z8lras.s[3]++;

    if (typeof _fn !== 'function') {
      cov_1rq9z8lras.b[1][0]++;
      cov_1rq9z8lras.s[4]++;
      throw new TypeError("Expected middleware function, received: " + _typeof(_fn));
    } else {
      cov_1rq9z8lras.b[1][1]++;
    }
  }

  cov_1rq9z8lras.s[5]++;
  return function (context, next) {
    cov_1rq9z8lras.f[1]++;
    var index = (cov_1rq9z8lras.s[6]++, -1);
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
      var fn = (cov_1rq9z8lras.s[11]++, middleware[i]);
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
var App = (cov_2q4b9iqhax.b[0][0]++, Object(__WEBPACK_IMPORTED_MODULE_0__client_app__["a" /* default */])());

/** Copyright (c) 2018 Uber Technologies, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */
Object(__WEBPACK_IMPORTED_MODULE_5_tape_cup__["a" /* default */])('fusion-core api', function (t) {
  t.ok(App, 'exports App as default');

  {
    t.notok(__WEBPACK_IMPORTED_MODULE_2__sanitization__["d" /* html */], 'does not export html in the browser');
    t.notok(__WEBPACK_IMPORTED_MODULE_2__sanitization__["b" /* dangerouslySetHTML */], 'does not export dangerouslySetHTML in browser');
    t.notok(__WEBPACK_IMPORTED_MODULE_2__sanitization__["a" /* consumeSanitizedHTML */], 'does not export consumeSanitizedHTML in browser');
    t.notok(__WEBPACK_IMPORTED_MODULE_2__sanitization__["c" /* escape */], 'does not export escape in browser');
  }

  t.ok(__WEBPACK_IMPORTED_MODULE_2__sanitization__["e" /* unescape */], 'exports unescape');
  t.ok(compose, 'exports compose');
  t.ok(__WEBPACK_IMPORTED_MODULE_1__memoize__["a" /* memoize */], 'exports memoize');
  t.ok(assetUrl, 'exports assetUrl');
  t.ok(chunkId, 'exports chunkId');
  t.ok(syncChunkIds, 'exports syncChunkIds');
  t.ok(syncChunkPaths, 'exports syncChunkPaths');
  t.ok(__WEBPACK_IMPORTED_MODULE_3__tokens__["b" /* RenderToken */], 'exports RenderToken');
  t.ok(__WEBPACK_IMPORTED_MODULE_3__tokens__["a" /* ElementToken */], 'exports ElementToken');
  t.ok(__WEBPACK_IMPORTED_MODULE_3__tokens__["c" /* SSRDeciderToken */], 'exports SSRDeciderToken');
  t.ok(__WEBPACK_IMPORTED_MODULE_4__create_plugin__["a" /* createPlugin */], 'exports createPlugin');
  t.end();
});


/***/ }),
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tape_cup__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__client_app__ = __webpack_require__(1);



function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/** Copyright (c) 2018 Uber Technologies, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */
var App = Object(__WEBPACK_IMPORTED_MODULE_1__client_app__["a" /* default */])();
Object(__WEBPACK_IMPORTED_MODULE_0_tape_cup__["a" /* default */])('app callback', function (t) {
  return new Promise(function ($return, $error) {
    var numRenders, element, render, app, callback, ctx;
    numRenders = 0;
    element = 'hi';

    render = function render(el) {
      numRenders++;
      t.equals(el, element, 'render receives correct args');
      return el;
    };

    app = new App(element, render);
    callback = app.callback();
    t.equal(_typeof(callback), 'function'); // $FlowFixMe

    return Promise.resolve(callback()).then(function ($await_2) {
      try {
        ctx = $await_2;
        t.equal(ctx.rendered, element);
        t.equal(numRenders, 1, 'calls render once');
        t.equal(ctx.element, element, 'sets ctx.element');
        t.end();
        return $return();
      } catch ($boundEx) {
        return $error($boundEx);
      }
    }, $error);
  });
});
Object(__WEBPACK_IMPORTED_MODULE_0_tape_cup__["a" /* default */])('throws rendering errors', function (t) {
  return new Promise(function ($return, $error) {
    var element, render, app, callback;
    element = 'hi';

    render = function render() {
      return new Promise(function () {
        throw new Error('Test error');
      });
    };

    app = new App(element, render);
    callback = app.callback();

    var $Try_1_Post = function () {
      try {
        return $return();
      } catch ($boundEx) {
        return $error($boundEx);
      }
    };

    var $Try_1_Catch = function (e) {
      try {
        t.equal(e.message, 'Test error');
        t.end();
        return $Try_1_Post();
      } catch ($boundEx) {
        return $error($boundEx);
      }
    };

    try {
      return Promise.resolve(callback()).then(function ($await_3) {
        try {
          return $Try_1_Post();
        } catch ($boundEx) {
          return $Try_1_Catch($boundEx);
        }
      }, $Try_1_Catch);
    } catch (e) {
      $Try_1_Catch(e);
    }
  });
});


/***/ }),
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__test_helper__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__memoize__ = __webpack_require__(6);



/** Copyright (c) 2018 Uber Technologies, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */
Object(__WEBPACK_IMPORTED_MODULE_0__test_helper__["a" /* default */])('memoize', function (t) {
  // $FlowFixMe
  var mockCtx = {
    memoized: new Map()
  };
  var counter = 0;
  var memoized = Object(__WEBPACK_IMPORTED_MODULE_1__memoize__["a" /* memoize */])(function () {
    return ++counter;
  });
  var counterB = 0;
  var memoizedB = Object(__WEBPACK_IMPORTED_MODULE_1__memoize__["a" /* memoize */])(function () {
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


/***/ }),
/* 28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__test_helper__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__client_app__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__create_plugin__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__create_token__ = __webpack_require__(3);





var App = Object(__WEBPACK_IMPORTED_MODULE_1__client_app__["a" /* default */])();
var TokenA = Object(__WEBPACK_IMPORTED_MODULE_3__create_token__["c" /* createToken */])('TokenA');
var TokenB = Object(__WEBPACK_IMPORTED_MODULE_3__create_token__["c" /* createToken */])('TokenB');
var TokenString = Object(__WEBPACK_IMPORTED_MODULE_3__create_token__["c" /* createToken */])('TokenString');

function delay() {
  return new Promise(function (resolve) {
    setTimeout(resolve, 1);
  });
}

Object(__WEBPACK_IMPORTED_MODULE_0__test_helper__["a" /* default */])('async render', function (t) {
  return new Promise(function ($return, $error) {
    var numRenders, element, renderFn, app, ctx;
    numRenders = 0;
    element = 'hi';

    renderFn = function renderFn(el) {
      t.equals(el, element, 'render receives correct args');
      return delay().then(function () {
        numRenders++;
        return el;
      });
    };

    app = new App(element, renderFn);
    return Promise.resolve(Object(__WEBPACK_IMPORTED_MODULE_0__test_helper__["b" /* run */])(app)).then(function ($await_1) {
      try {
        ctx = $await_1;
        t.ok(ctx.element, 'sets ctx.element');
        t.equal(ctx.rendered, element);
        t.equal(numRenders, 1, 'calls render once');
        t.equal(ctx.element, element, 'sets ctx.element');
        t.end();
        return $return();
      } catch ($boundEx) {
        return $error($boundEx);
      }
    }, $error);
  });
});
Object(__WEBPACK_IMPORTED_MODULE_0__test_helper__["a" /* default */])('sync render', function (t) {
  return new Promise(function ($return, $error) {
    var numRenders, element, renderFn, app, ctx;
    numRenders = 0;
    element = 'hi';

    renderFn = function renderFn(el) {
      numRenders++;
      t.equals(el, element, 'render receives correct args');
      return el;
    };

    app = new App(element, renderFn);
    return Promise.resolve(Object(__WEBPACK_IMPORTED_MODULE_0__test_helper__["b" /* run */])(app)).then(function ($await_2) {
      try {
        ctx = $await_2;
        t.equal(ctx.rendered, element);
        t.equal(numRenders, 1, 'calls render once');
        t.equal(ctx.element, element, 'sets ctx.element');
        t.end();
        return $return();
      } catch ($boundEx) {
        return $error($boundEx);
      }
    }, $error);
  });
});
Object(__WEBPACK_IMPORTED_MODULE_0__test_helper__["a" /* default */])('render plugin order', function (t) {
  return new Promise(function ($return, $error) {
    var numRenders, element, order, renderFn, renderPlugin, app, ctx;
    numRenders = 0;
    element = 'hi';
    order = 0;

    renderFn = function renderFn(el) {
      order++;
      t.equals(el, element, 'render receives correct args');
      t.equal(order, 3, 'runs render function last');
      return delay().then(function () {
        numRenders++;
        return el;
      });
    };

    renderPlugin = Object(__WEBPACK_IMPORTED_MODULE_2__create_plugin__["a" /* createPlugin */])({
      provides: function provides() {
        return renderFn;
      },
      middleware: function middleware() {
        return function (ctx, next) {
          order++;
          t.equal(ctx.element, element, 'sets ctx.element before running render middleware');
          t.equal(order, 2, 'runs render middleware before render');
          return next();
        };
      }
    });
    app = new App(element, renderPlugin);
    app.middleware(function (ctx, next) {
      order++;
      t.equal(order, 1, 'runs middleware before renderer');
      return next();
    });
    return Promise.resolve(Object(__WEBPACK_IMPORTED_MODULE_0__test_helper__["b" /* run */])(app)).then(function ($await_3) {
      try {
        ctx = $await_3;
        t.ok(ctx.element, 'sets ctx.element');
        t.equal(ctx.rendered, element);
        t.equal(numRenders, 1, 'calls render once');
        t.equal(ctx.element, element, 'sets ctx.element');
        t.end();
        return $return();
      } catch ($boundEx) {
        return $error($boundEx);
      }
    }, $error);
  });
});
Object(__WEBPACK_IMPORTED_MODULE_0__test_helper__["a" /* default */])('app.register - async render with async middleware', function (t) {
  return new Promise(function ($return, $error) {
    var numRenders, element, renderFn, app, ctx;
    numRenders = 0;
    element = 'hi';

    renderFn = function renderFn(el) {
      t.equals(el, element, 'render receives correct args');
      return delay().then(function () {
        numRenders++;
        return el;
      });
    };

    app = new App(element, renderFn);
    app.middleware(function (ctx, next) {
      return new Promise(function ($return, $error) {
        t.equal(ctx.element, element);
        t.equal(numRenders, 0);
        t.notok(ctx.rendered);
        return Promise.resolve(next()).then(function ($await_4) {
          try {
            t.equal(numRenders, 1);
            t.equal(ctx.rendered, element);
            return $return();
          } catch ($boundEx) {
            return $error($boundEx);
          }
        }, $error);
      });
    });
    return Promise.resolve(Object(__WEBPACK_IMPORTED_MODULE_0__test_helper__["b" /* run */])(app)).then(function ($await_5) {
      try {
        ctx = $await_5;
        t.equal(ctx.rendered, element);
        t.equal(numRenders, 1, 'calls render');
        t.equal(ctx.element, element, 'sets ctx.element');
        t.end();
        return $return();
      } catch ($boundEx) {
        return $error($boundEx);
      }
    }, $error);
  });
});
Object(__WEBPACK_IMPORTED_MODULE_0__test_helper__["a" /* default */])('app.register - middleware execution respects registration order', function (t) {
  return new Promise(function ($return, $error) {
    var numRenders, element, renderFn, app, order, ctx;
    numRenders = 0;
    element = 'hi';

    renderFn = function renderFn(el) {
      t.equals(el, element, 'render receives correct args');
      return delay().then(function () {
        numRenders++;
        return el;
      });
    };

    app = new App(element, renderFn);
    order = 0;
    app.middleware(function (ctx, next) {
      return new Promise(function ($return, $error) {
        t.equal(order, 0, 'calls downstream in correct order');
        order++;
        t.equal(ctx.element, element);
        t.equal(numRenders, 0);
        t.notok(ctx.rendered);
        return Promise.resolve(next()).then(function ($await_6) {
          try {
            t.equal(order, 3, 'calls upstream in correct order');
            t.equal(numRenders, 1);
            t.equal(ctx.rendered, element);
            order++;
            return $return();
          } catch ($boundEx) {
            return $error($boundEx);
          }
        }, $error);
      });
    });
    app.middleware(function (ctx, next) {
      return new Promise(function ($return, $error) {
        t.equal(order, 1, 'calls downstream in correct order');
        order++;
        t.equal(ctx.element, element);
        t.equal(numRenders, 0);
        t.notok(ctx.rendered);
        return Promise.resolve(next()).then(function ($await_7) {
          try {
            t.equal(order, 2, 'calls upstream in correct order');
            order++;
            t.equal(numRenders, 1);
            t.equal(ctx.rendered, element);
            return $return();
          } catch ($boundEx) {
            return $error($boundEx);
          }
        }, $error);
      });
    });
    return Promise.resolve(Object(__WEBPACK_IMPORTED_MODULE_0__test_helper__["b" /* run */])(app)).then(function ($await_8) {
      try {
        ctx = $await_8;
        t.equal(ctx.rendered, element);
        t.equal(numRenders, 1, 'calls render');
        t.equal(order, 4, 'calls middleware in correct order');
        t.end();
        return $return();
      } catch ($boundEx) {
        return $error($boundEx);
      }
    }, $error);
  });
});
Object(__WEBPACK_IMPORTED_MODULE_0__test_helper__["a" /* default */])('app.register - middleware execution respects dependency order', function (t) {
  return new Promise(function ($return, $error) {
    var numRenders, element, renderFn, app, order, ctx;
    numRenders = 0;
    element = 'hi';

    renderFn = function renderFn(el) {
      t.equals(el, element, 'render receives correct args');
      return delay().then(function () {
        numRenders++;
        return el;
      });
    };

    app = new App(element, renderFn);
    order = 0;
    app.middleware(function first(ctx, next) {
      return new Promise(function ($return, $error) {
        t.equal(order, 0, 'calls downstream in correct order');
        t.equal(numRenders, 0);
        order++;
        return Promise.resolve(next()).then(function ($await_9) {
          try {
            t.equal(order, 7, 'calls upstream in correct order');
            t.equal(numRenders, 1);
            order++;
            return $return();
          } catch ($boundEx) {
            return $error($boundEx);
          }
        }, $error);
      });
    });
    app.register(TokenA, Object(__WEBPACK_IMPORTED_MODULE_2__create_plugin__["a" /* createPlugin */])({
      deps: {
        TokenB: TokenB
      },
      provides: function provides(deps) {
        t.equal(deps.TokenB().b, 'something-b');
        return {
          a: 'something'
        };
      },
      middleware: function middleware(deps) {
        t.equal(deps.TokenB().b, 'something-b');
        return function second(ctx, next) {
          return new Promise(function ($return, $error) {
            t.equal(order, 2, 'calls downstream in correct order');
            t.equal(numRenders, 0);
            order++;
            return Promise.resolve(next()).then(function ($await_10) {
              try {
                t.equal(order, 5, 'calls upstream in correct order');
                t.equal(numRenders, 1);
                order++;
                return $return();
              } catch ($boundEx) {
                return $error($boundEx);
              }
            }, $error);
          });
        };
      }
    }));
    app.middleware(function third(ctx, next) {
      return new Promise(function ($return, $error) {
        t.equal(order, 3, 'calls downstream in correct order');
        t.equal(numRenders, 0);
        order++;
        return Promise.resolve(next()).then(function ($await_11) {
          try {
            t.equal(order, 4, 'calls upstream in correct order');
            t.equal(numRenders, 1);
            order++;
            return $return();
          } catch ($boundEx) {
            return $error($boundEx);
          }
        }, $error);
      });
    });
    app.register(TokenB, Object(__WEBPACK_IMPORTED_MODULE_2__create_plugin__["a" /* createPlugin */])({
      provides: function provides() {
        return function () {
          return {
            b: 'something-b'
          };
        };
      },
      middleware: function middleware() {
        return function fourth(ctx, next) {
          return new Promise(function ($return, $error) {
            t.equal(order, 1, 'calls downstream in correct order');
            t.equal(numRenders, 0);
            order++;
            return Promise.resolve(next()).then(function ($await_12) {
              try {
                t.equal(order, 6, 'calls upstream in correct order');
                t.equal(numRenders, 1);
                order++;
                return $return();
              } catch ($boundEx) {
                return $error($boundEx);
              }
            }, $error);
          });
        };
      }
    }));
    return Promise.resolve(Object(__WEBPACK_IMPORTED_MODULE_0__test_helper__["b" /* run */])(app)).then(function ($await_13) {
      try {
        ctx = $await_13;
        t.equal(ctx.rendered, element);
        t.equal(numRenders, 1, 'calls render');
        t.equal(order, 8, 'calls middleware in correct order');
        t.end();
        return $return();
      } catch ($boundEx) {
        return $error($boundEx);
      }
    }, $error);
  });
});
Object(__WEBPACK_IMPORTED_MODULE_0__test_helper__["a" /* default */])('app.middleware with dependencies', function (t) {
  return new Promise(function ($return, $error) {
    var element, renderFn, app, called;
    element = 'hi';

    renderFn = function renderFn(el) {
      return el;
    };

    app = new App(element, renderFn);
    called = false;
    app.register(TokenString, 'Something');
    app.middleware({
      TokenString: TokenString
    }, function (deps) {
      t.equal(deps.TokenString, 'Something');
      return function (ctx, next) {
        called = true;
        return next();
      };
    });
    return Promise.resolve(Object(__WEBPACK_IMPORTED_MODULE_0__test_helper__["b" /* run */])(app)).then(function ($await_14) {
      try {
        t.ok(called, 'calls middleware');
        t.end();
        return $return();
      } catch ($boundEx) {
        return $error($boundEx);
      }
    }, $error);
  });
});
Object(__WEBPACK_IMPORTED_MODULE_0__test_helper__["a" /* default */])('app.middleware with no dependencies', function (t) {
  return new Promise(function ($return, $error) {
    var element, renderFn, app, called;
    element = 'hi';

    renderFn = function renderFn(el) {
      return el;
    };

    app = new App(element, renderFn);
    called = false;
    app.middleware(function (ctx, next) {
      called = true;
      return next();
    });
    return Promise.resolve(Object(__WEBPACK_IMPORTED_MODULE_0__test_helper__["b" /* run */])(app)).then(function ($await_15) {
      try {
        t.ok(called, 'calls middleware');
        t.end();
        return $return();
      } catch ($boundEx) {
        return $error($boundEx);
      }
    }, $error);
  });
});


/***/ }),
/* 29 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tape_cup__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__sanitization__ = __webpack_require__(8);



function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/** Copyright (c) 2018 Uber Technologies, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */
Object(__WEBPACK_IMPORTED_MODULE_0_tape_cup__["a" /* default */])('sanitization api is not bundled', function (t) {
  t.equals(__WEBPACK_IMPORTED_MODULE_1__sanitization__["d" /* html */], void 0);
  t.equals(_typeof(__WEBPACK_IMPORTED_MODULE_1__sanitization__["e" /* unescape */]), 'function');
  t.end();
});


/***/ }),
/* 30 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tape_cup__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__client_app__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__test_helper__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__plugins_timing__ = __webpack_require__(10);





function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var App = Object(__WEBPACK_IMPORTED_MODULE_1__client_app__["a" /* default */])();
Object(__WEBPACK_IMPORTED_MODULE_0_tape_cup__["a" /* default */])('timing plugin', function (t) {
  return new Promise(function ($return, $error) {
    var element, renderFn, app, ctx;
    element = 'hi';

    renderFn = function renderFn(el) {
      return el;
    };

    app = new App(element, renderFn);
    app.middleware({
      timing: __WEBPACK_IMPORTED_MODULE_3__plugins_timing__["a" /* TimingToken */]
    }, function (deps) {
      return function (ctx, next) {
        t.equal(deps.timing.from(ctx), deps.timing.from(ctx), 'timing is memoized');
        return next();
      };
    });
    return Promise.resolve(Object(__WEBPACK_IMPORTED_MODULE_2__test_helper__["b" /* run */])(app)).then(function ($await_1) {
      try {
        ctx = $await_1;
        t.equal(_typeof(ctx.timing.start), 'number', 'sets up ctx.timing.start');
        t.ok(ctx.timing.end instanceof Promise, 'sets up ctx.timing.end to be a promise');
        ctx.timing.downstream.then(function (result) {
          t.equal(_typeof(result), 'number', 'sets downstream timing result');
        });
        ctx.timing.render.then(function (result) {
          t.equal(_typeof(result), 'number', 'sets render timing result');
        });
        ctx.timing.upstream.then(function (result) {
          t.equal(_typeof(result), 'number', 'sets upstream timing result');
        });
        ctx.timing.end.then(function (result) {
          t.equal(_typeof(result), 'number', 'sets end timing result');
          t.end();
        });
        return $return();
      } catch ($boundEx) {
        return $error($boundEx);
      }
    }, $error);
  });
});
Object(__WEBPACK_IMPORTED_MODULE_0_tape_cup__["a" /* default */])('timing plugin on error middleware', function (t) {
  return new Promise(function ($return, $error) {
    var element, renderFn, app, resolved;
    element = 'hi';

    renderFn = function renderFn(el) {
      return el;
    };

    app = new App(element, renderFn);
    resolved = {
      downstream: false,
      upstream: false,
      render: false
    };
    app.middleware(function (ctx, next) {
      ctx.timing.downstream.then(function (result) {
        resolved.downstream = true;
      });
      ctx.timing.render.then(function (result) {
        resolved.render = true;
      });
      ctx.timing.upstream.then(function (result) {
        resolved.upstream = true;
      });
      ctx.timing.end.then(function (result) {
        t.equal(_typeof(result), 'number', 'sets end timing result');
        t.equal(resolved.downstream, false, 'does not resolve downstream');
        t.equal(resolved.render, false, 'does not resolve render');
        t.equal(resolved.upstream, false, 'does not resolve upstream');
        t.equal(ctx.status, 500, 'sets ctx.status');
        t.end();
      });
      return next();
    });
    app.middleware(function (ctx, next) {
      var e = new Error('fail request'); // $FlowFixMe

      e.status = 500;
      throw e;
    });
    return Promise.resolve(Object(__WEBPACK_IMPORTED_MODULE_2__test_helper__["b" /* run */])(app).catch(function (e) {})).then(function ($await_2) {
      try {
        return $return();
      } catch ($boundEx) {
        return $error($boundEx);
      }
    }, $error);
  });
});


/***/ }),
/* 31 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tape_cup__ = __webpack_require__(0);


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

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/** Copyright (c) 2018 Uber Technologies, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */
Object(__WEBPACK_IMPORTED_MODULE_0_tape_cup__["a" /* default */])('virtualModules api', function (t) {
  t.equal(_typeof(assetUrl), 'function');
  t.equal(_typeof(chunkId), 'function');
  t.equal(_typeof(syncChunkIds), 'function');
  t.equal(_typeof(syncChunkPaths), 'function');
  t.equal(assetUrl('0'), '0');
  t.equal(chunkId('0'), '0');
  t.equal(syncChunkIds(0), 0);
  t.equal(syncChunkPaths(0), 0);
  t.end();
});


/***/ })
/******/ ]);