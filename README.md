# hashmap

[![Version Badge][version-image]][project-url]
[![Build Status][build-image]][build-url]
[![License][license-image]][license-url]

> A superior alternative to object literals for basic hash maps

## Install

Download the [development](http://github.com/ryanmorr/hashmap/raw/master/dist/hashmap.js) or [minified](http://github.com/ryanmorr/hashmap/raw/master/dist/hashmap.min.js) version, or install via NPM:

``` sh
npm install @ryanmorr/hashmap
```

## Usage

Use just like an object literal:

``` javascript
const map = hashmap();

map.foo = 1;
map.bar = 2;

{}.toString.call(map); //=> "[object Object]"
JSON.stringify(map); //=> "{\"foo\":1,\"bar\":2}"
```

Unlike object literals, there is no chance of name collisions:

``` javascript
'toString' in {}; //=> true
'toString' in hashmap(); //=> false

for (const key in map) {
    // `hasOwnProperty` check is unnecessary
}
```

Provide objects as arguments to pre-populate the map:

``` javascript
const map = hashmap({foo: 1}, {bar: 2}, {foo: 10, baz: 3});

map.foo; //=> 10
map.bar; //=> 2
map.baz; //=> 3
```

Implements the [_iterable protocol_](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols#iterable), enabling `for...of` loops:

``` javascript
const map = hashmap({foo: 1, bar: 2, baz: 3});

for (const [key, value] of map) {
    // Do something
}
```

## License

This project is dedicated to the public domain as described by the [Unlicense](http://unlicense.org/).

[project-url]: https://github.com/ryanmorr/hashmap
[version-image]: https://badge.fury.io/gh/ryanmorr%2Fhashmap.svg
[build-url]: https://travis-ci.org/ryanmorr/hashmap
[build-image]: https://travis-ci.org/ryanmorr/hashmap.svg
[license-image]: https://img.shields.io/badge/license-Unlicense-blue.svg
[license-url]: UNLICENSE