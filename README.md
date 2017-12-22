# Node.JS template engines benchmark
[![Build Status](https://api.travis-ci.org/philippsimon/template-benchmark.png)](https://travis-ci.org/philippsimon/template-benchmark)

## Engines

- [CoffeeKup](https://github.com/mauricemach/coffeekup) v0.3.1 ([website](http://coffeekup.org/))
- [diet dot](https://github.com/jamescostian/diet-dot) v1.0.1 (added the _safe_tags_regex_ escape function from [this webpage](http://jsperf.com/encode-html-entities/29))
- [doT](https://github.com/olado/doT) v1.1.2 ([website](http://olado.github.io/doT/))
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
  100.00%  ECT : 1162ms
  126.76%  Hogan.js : 1473ms
  169.88%  Dust : 1974ms
  191.05%  gaikan : 2220ms
  201.72%  Fest : 2344ms
  224.78%  EJS without `with` : 2612ms
  227.54%  Handlebars.js : 2644ms
  229.17%  doT : 2663ms
  231.76%  Jade without `with` : 2693ms
  245.61%  Eco : 2854ms
  252.50%  Swig : 2934ms
  306.28%  CoffeeKup : 3559ms
  316.09%  Underscore : 3673ms
  343.80%  Jade : 3995ms
  387.09%  EJS : 4498ms
  399.83%  mustache.js : 4646ms

Ranking unescaped
  100.00%  doT : 36ms
  125.00%  gaikan : 45ms
  202.78%  ECT : 73ms
  402.78%  Swig : 145ms
  536.11%  Fest : 193ms
  669.44%  Hogan.js : 241ms
  1052.78%  Jade without `with` : 379ms
  1105.56%  Handlebars.js : 398ms
  1194.44%  EJS without `with` : 430ms
  1472.22%  Eco : 530ms
  1702.78%  Dust : 613ms
  4166.67%  Underscore : 1500ms
  4452.78%  CoffeeKup : 1603ms
  4608.33%  Jade : 1659ms
  4675.00%  mustache.js : 1683ms
  5563.89%  EJS : 2003ms

Ranking total
  100.00%  ECT : 1235ms
  138.79%  Hogan.js : 1714ms
  183.40%  gaikan : 2265ms
  205.43%  Fest : 2537ms
  209.47%  Dust : 2587ms
  218.54%  doT : 2699ms
  246.32%  Handlebars.js : 3042ms
  246.32%  EJS without `with` : 3042ms
  248.74%  Jade without `with` : 3072ms
  249.31%  Swig : 3079ms
  274.01%  Eco : 3384ms
  417.98%  CoffeeKup : 5162ms
  418.87%  Underscore : 5173ms
  457.81%  Jade : 5654ms
  512.47%  mustache.js : 6329ms
  526.40%  EJS : 6501ms
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