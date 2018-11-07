[![view on npm](https://img.shields.io/npm/v/race-timeout-anywhere.svg)](https://www.npmjs.org/package/race-timeout-anywhere)
[![npm module downloads](https://img.shields.io/npm/dt/race-timeout-anywhere.svg)](https://www.npmjs.org/package/race-timeout-anywhere)
[![Build Status](https://travis-ci.org/75lb/race-timeout-anywhere.svg?branch=master)](https://travis-ci.org/75lb/race-timeout-anywhere)
[![Dependency Status](https://david-dm.org/75lb/race-timeout-anywhere.svg)](https://david-dm.org/75lb/race-timeout-anywhere)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](https://github.com/feross/standard)

# race-timeout-anywhere

A `Promise.race` timeout function which can be used with any module loader.

```js
const raceTimeout = require('race-timeout-anywhere')

try {
  const data = await Promise.race([
    fetchDataSomehow(),
    raceTimeout(1000)
  ])
  /* process data */
} catch (err) {
  /* timeout expired */
}
```
* * *

&copy; 2018 Lloyd Brookes \<75pound@gmail.com\>.