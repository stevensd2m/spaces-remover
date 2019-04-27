@stevensd2m/spaces-remover

[![npm (scoped)](https://img.shields.io/badge/npm-2.0.0-blue.svg)](https://github.com/stevensd2m/spaces-remover) [![npm bundle size (minified)](https://img.shields.io/badge/minified%20size-257B-blue.svg)](https://github.com/stevensd2m/spaces-remover)

Removes all spaces from a string.

##Install
---

```
$ npm install @stevensd2m/spaces-remover
```

##Usage
---

```javascript
const spacesRemover = require("@stevensd2m/spaces-remover")

spacesRemover("So much space!");
//=> "Somuchspace!"

spacesRemover(1337);
//=> Uncaught TypeError: A string was expected!
//    at spacesRemover (<anonymous>:2:41)
//    at <anonymous>:1:1
```
