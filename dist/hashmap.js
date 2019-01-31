/*! @ryanmorr/hashmap v0.1.2 | https://github.com/ryanmorr/hashmap */
(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.hashmap = f()}})(function(){var define,module,exports;return (function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = hashmap;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * Create a basic iterable hash map
 *
 * @param {...Object} props
 * @return {Object}
 * @api public
 */
function hashmap() {
  var map = Object.create(null, _defineProperty({}, Symbol.iterator, {
    enumerable: false,
    writable: false,
    configurable: false,
    value: function value() {
      return {
        items: Object.entries(map),
        next: function next() {
          return {
            done: this.items.length === 0,
            value: this.items.shift()
          };
        }
      };
    }
  }));

  for (var _len = arguments.length, props = new Array(_len), _key = 0; _key < _len; _key++) {
    props[_key] = arguments[_key];
  }

  if (props.length) {
    Object.assign.apply(Object, [map].concat(props));
  }

  return map;
}

module.exports = exports.default;

},{}]},{},[1])(1)
});

