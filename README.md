# hashmap

[![GitHub version](https://badge.fury.io/gh/ryanmorr%2Fhashmap.svg)](https://badge.fury.io/gh/ryanmorr%2Fhashmap) [![Build Status](https://travis-ci.org/ryanmorr/hashmap.svg)](https://travis-ci.org/ryanmorr/hashmap) ![Size](https://badge-size.herokuapp.com/ryanmorr/hashmap/master/src/hashmap.js.svg?color=blue&label=file%20size)

> A superior alternative to object literals for basic hash maps

## Usage

Use just like an object literal:

``` javascript
const map = hashmap();

map.foo = 1;
map.bar = 2;

console.log({}.toString.call(map)); // [object Object]

console.log(JSON.stringify(map)); // {"foo":1,"bar":2}
```

Unlike object literals, there is no chance of name collisions:

``` javascript
console.log('toString' in {}); // true
console.log('toString' in hashmap()); // false

for (const key in map) {
    // `hasOwnProperty` check is unnecessary
}
```

Provide objects as arguments to pre-populate the map:

``` javascript
const map = hashmap({foo: 1}, {bar: 2}, {foo: 10, baz: 3});

console.log(map.foo) // 10
console.log(map.bar) // 2
console.log(map.baz) // 3
```

Implements the [_iterable protocol_](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols#iterable), enabling `for...of` loops:

``` javascript
const map = hashmap({foo: 1, bar: 2, baz: 3});

for (const [key, value] of map) {
    // do something
}
```

## Installation

Hashmap is [CommonJS](http://www.commonjs.org/) and [AMD](https://github.com/amdjs/amdjs-api/wiki/AMD) compatible with no dependencies. You can download the [development](http://github.com/ryanmorr/hashmap/raw/master/dist/hashmap.js) or [minified](http://github.com/ryanmorr/hashmap/raw/master/dist/hashmap.min.js) version, or install it in one of the following ways:

``` sh
npm install ryanmorr/hashmap

bower install ryanmorr/hashmap
```

## Tests

Run unit tests in the command line by issuing the following commands:

``` sh
npm install
npm install -g gulp
gulp test
```

## License

This project is dedicated to the public domain as described by the [Unlicense](http://unlicense.org/).