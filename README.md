@stevensd2m/tiny

[![npm (scoped)](https://img.shields.io/badge/npm-2.0.0-blue.svg)](https://github.com/stevensd2m/tiny) [![npm bundle size (minified)](https://img.shields.io/badge/minified%20size-257B-blue.svg)](https://github.com/stevensd2m/tiny)

Removes all spaces from a string.

##Install
---

```
$ npm install @stevensd2m/tiny
```

##Usage
---

```javascript
const tiny = require("@stevensd2m/tiny")

tiny("So much space!");
//=> "Somuchspace!"

tiny(1337);
//=> Uncaught TypeError: Tiny wants a string!
//    at tiny (<anonymous>:2:41)
//    at <anonymous>:1:1
```
