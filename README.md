# Node.JS template engines benchmark
[![Build Status](https://api.travis-ci.org/philippsimon/template-benchmark.png)](https://travis-ci.org/philippsimon/template-benchmark)

## Engines

- [CoffeeKup](https://github.com/mauricemach/coffeekup) v0.3.1 ([website](http://coffeekup.org/))
- [diet dot](https://github.com/jamescostian/diet-dot) v1.0.1 (added the _safe_tags_regex_ escape function from [this webpage](http://jsperf.com/encode-html-entities/29))
- [doT philippsimon](https://github.com/philippsimon/doT) latest
- [Dust](https://github.com/linkedin/dustjs) v2.7.3 ([website](http://linkedin.github.com/dustjs/))
- [Eco](https://github.com/sstephenson/eco) v1.1.0-rc-3
- [ECT](https://github.com/baryshev/ect) v0.5.9 ([website](http://ectjs.com/))
- [EJS](https://github.com/visionmedia/ejs) v2.5.1
- [Fest](https://github.com/mailru/fest) v0.8.2
- [Gaikan](https://github.com/Deathspike/gaikan) v2.0.2
- [Handlebars.js](https://github.com/wycats/handlebars.js/) v4.0.5 ([website](http://handlebarsjs.com/))
- [Hogan.js](https://github.com/twitter/hogan.js) v3.0.2 ([website](http://twitter.github.com/hogan.js/))
- [Jade](https://github.com/visionmedia/jade) v1.11.0 ([website](http://jade-lang.com/))
- [Swig](https://github.com/paularmstrong/swig) v1.4.2
- [Underscore](https://github.com/documentcloud/underscore) v1.8.3 ([website](http://underscorejs.org/))

## Test environment

- CPU: Intel(R) Core(TM) i7-4960HQ CPU @ 2.60GHz
- Platform: darwin
- Node.JS version: v4.4.7

## Ranking

```
Rendering 100000 templates:

Ranking escaped
  100.00%  ECT : 926ms
  114.25%  gaikan : 1058ms
  127.86%  Hogan.js : 1184ms
  131.64%  Fest : 1219ms
  159.29%  Dust : 1475ms
  168.79%  doT without `with` : 1563ms
  309.07%  Swig : 2862ms
  352.70%  Eco : 3266ms
  382.72%  Jade : 3544ms
  470.63%  CoffeeKup : 4358ms
  565.44%  Handlebars.js : 5236ms
  569.76%  doT : 5276ms
  649.35%  Jade without `with` : 6013ms
  726.35%  EJS : 6726ms
  830.35%  Underscore : 7689ms
  1121.60%  EJS without `with` : 10386ms

Ranking unescaped
  100.00%  doT without `with` : 39ms
  105.13%  gaikan : 41ms
  164.10%  ECT : 64ms
  507.69%  Hogan.js : 198ms
  551.28%  Fest : 215ms
  1258.97%  Jade without `with` : 491ms
  1407.69%  Swig : 549ms
  1533.33%  Handlebars.js : 598ms
  1671.79%  Dust : 652ms
  1769.23%  Eco : 690ms
  4943.59%  Underscore : 1928ms
  5143.59%  EJS without `with` : 2006ms
  5741.03%  Jade : 2239ms
  7000.00%  CoffeeKup : 2730ms
  7092.31%  doT : 2766ms
  10684.62%  EJS : 4167ms

Ranking total
  100.00%  ECT : 990ms
  111.01%  gaikan : 1099ms
  139.60%  Hogan.js : 1382ms
  144.85%  Fest : 1434ms
  161.82%  doT without `with` : 1602ms
  214.85%  Dust : 2127ms
  344.55%  Swig : 3411ms
  399.60%  Eco : 3956ms
  584.14%  Jade : 5783ms
  589.29%  Handlebars.js : 5834ms
  656.97%  Jade without `with` : 6504ms
  715.96%  CoffeeKup : 7088ms
  812.32%  doT : 8042ms
  971.41%  Underscore : 9617ms
  1100.30%  EJS : 10893ms
  1251.72%  EJS without `with` : 12392ms
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