# Node.JS template engines benchmark
[![Build Status](https://api.travis-ci.org/philippsimon/template-benchmark.png)](https://travis-ci.org/philippsimon/template-benchmark)

## Engines

- [CoffeeKup](https://github.com/mauricemach/coffeekup) v0.3.1 ([website](http://coffeekup.org/))
- [diet dot](https://github.com/jamescostian/diet-dot) v1.0.1 (added the _safe_tags_regex_ escape function from [this webpage](http://jsperf.com/encode-html-entities/29))
- [doT philippsimon](https://github.com/philippsimon/doT) latest
- [Dust](https://github.com/linkedin/dustjs) v2.7.5 ([website](http://linkedin.github.com/dustjs/))
- [Eco](https://github.com/sstephenson/eco) v1.1.0-rc-3
- [ECT](https://github.com/baryshev/ect) v0.5.9 ([website](http://ectjs.com/))
- [EJS](https://github.com/mde/ejs) v2.5.7 ([website](http://ejs.co))
- [Fest](https://github.com/mailru/fest) v0.12.1
- [Gaikan](https://github.com/Deathspike/gaikan) v2.0.2
- [Handlebars.js](https://github.com/wycats/handlebars.js/) v4.0.11 ([website](http://handlebarsjs.com/))
- [Hogan.js](https://github.com/twitter/hogan.js) v3.0.2 ([website](http://twitter.github.com/hogan.js/))
- [Jade](https://github.com/visionmedia/jade) v1.11.0 ([website](http://jade-lang.com/))
- [mustache.js](https://github.com/janl/mustache.js) v2.3.0 ([website](http://mustache.github.io/))
- [Swig](https://github.com/paularmstrong/swig) v1.4.2
- [Underscore](https://github.com/documentcloud/underscore) v1.8.3 ([website](http://underscorejs.org/))

## Test environment

- CPU: Intel(R) Core(TM) i7-4960HQ CPU @ 2.60GHz
- Platform: darwin
- Node.JS version: v6.11.0

## Ranking

```
Rendering 100000 templates:

Ranking escaped
  100.00%  ECT : 1112ms
  103.60%  gaikan : 1152ms
  116.28%  Fest : 1293ms
  123.20%  Hogan.js : 1370ms
  138.94%  Jade without `with` : 1545ms
  142.90%  doT without `with` : 1589ms
  143.08%  Handlebars.js : 1591ms
  147.39%  EJS without `with` : 1639ms
  175.36%  Dust : 1950ms
  259.08%  Swig : 2881ms
  271.58%  Eco : 3020ms
  277.34%  Underscore : 3084ms
  282.64%  Jade : 3143ms
  318.97%  mustache.js : 3547ms
  335.97%  EJS : 3736ms
  362.41%  CoffeeKup : 4030ms
  406.74%  doT : 4523ms

Ranking unescaped
  100.00%  gaikan : 34ms
  126.47%  doT without `with` : 43ms
  176.47%  ECT : 60ms
  535.29%  Swig : 182ms
  547.06%  Fest : 186ms
  605.88%  Hogan.js : 206ms
  1111.76%  Jade without `with` : 378ms
  1238.24%  Handlebars.js : 421ms
  1288.24%  EJS without `with` : 438ms
  1376.47%  Eco : 468ms
  1935.29%  Dust : 658ms
  4729.41%  Underscore : 1608ms
  4764.71%  mustache.js : 1620ms
  4985.29%  CoffeeKup : 1695ms
  5364.71%  Jade : 1824ms
  5938.24%  doT : 2019ms
  6223.53%  EJS : 2116ms

Ranking total
  100.00%  ECT : 1172ms
  101.19%  gaikan : 1186ms
  126.19%  Fest : 1479ms
  134.47%  Hogan.js : 1576ms
  139.25%  doT without `with` : 1632ms
  164.08%  Jade without `with` : 1923ms
  171.67%  Handlebars.js : 2012ms
  177.22%  EJS without `with` : 2077ms
  222.53%  Dust : 2608ms
  261.35%  Swig : 3063ms
  297.61%  Eco : 3488ms
  400.34%  Underscore : 4692ms
  423.81%  Jade : 4967ms
  440.87%  mustache.js : 5167ms
  488.48%  CoffeeKup : 5725ms
  499.32%  EJS : 5852ms
  558.19%  doT : 6542ms
```

## Results by engine

```
Rendering 100000 templates:

CoffeeKup
  Escaped   : 4358ms
  Unescaped : 2730ms
  Total     : 7088ms

doT
  Escaped   : 5276ms
  Unescaped : 2766ms
  Total     : 8042ms

doT without `with`
  Escaped   : 1563ms
  Unescaped : 39ms
  Total     : 1602ms

Dust
  Escaped   : 1475ms
  Unescaped : 652ms
  Total     : 2127ms

Eco
  Escaped   : 3266ms
  Unescaped : 690ms
  Total     : 3956ms

ECT
  Escaped   : 926ms
  Unescaped : 64ms
  Total     : 990ms

EJS
  Escaped   : 6726ms
  Unescaped : 4167ms
  Total     : 10893ms

EJS without `with`
  Escaped   : 10386ms
  Unescaped : 2006ms
  Total     : 12392ms

Fest
  Escaped   : 1219ms
  Unescaped : 215ms
  Total     : 1434ms

gaikan
  Escaped   : 1058ms
  Unescaped : 41ms
  Total     : 1099ms

Handlebars.js
  Escaped   : 5236ms
  Unescaped : 598ms
  Total     : 5834ms

Hogan.js
  Escaped   : 1184ms
  Unescaped : 198ms
  Total     : 1382ms

Jade
  Escaped   : 3544ms
  Unescaped : 2239ms
  Total     : 5783ms

Jade without `with`
  Escaped   : 6013ms
  Unescaped : 491ms
  Total     : 6504ms

Swig
  Escaped   : 2862ms
  Unescaped : 549ms
  Total     : 3411ms

Underscore
  Escaped   : 7689ms
  Unescaped : 1928ms
  Total     : 9617ms
```

## Usage
```
git clone git://github.com/baryshev/template-benchmark.git
cd template-benchmark
npm install
node ./benchmark.js
```

## Test
```
npm test
```