# hashmap

[![Version Badge][version-image]][project-url]
[![License][license-image]][license-url]
[![Build Status][build-image]][build-url]

> A superior alternative to object literals for basic hash maps

## Install

Download the [CJS](https://github.com/ryanmorr/hashmap/raw/master/dist/cjs/hashmap.js), [ESM](https://github.com/ryanmorr/hashmap/raw/master/dist/esm/hashmap.js), [UMD](https://github.com/ryanmorr/hashmap/raw/master/dist/umd/hashmap.js) versions or install via NPM:

``` sh
npm install @ryanmorr/hashmap
```

## Usage

Use just like an object literal:

``` javascript
import hashmap from '@ryanmorr/hashmap';

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
[version-image]: https://img.shields.io/github/package-json/v/ryanmorr/hashmap?color=blue&style=flat-square
[build-url]: https://github.com/ryanmorr/hashmap/actions
[build-image]: https://img.shields.io/github/actions/workflow/status/ryanmorr/hashmap/node.js.yml?style=flat-square
[license-image]: https://img.shields.io/github/license/ryanmorr/hashmap?color=blue&style=flat-square
[license-url]: UNLICENSE