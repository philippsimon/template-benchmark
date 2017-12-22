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
- Node.JS version: v6.11.0

## Ranking

```
Rendering 100000 templates:

Ranking escaped
  100.00%  ECT : 1201ms
  111.24%  Fest : 1336ms
  114.40%  gaikan : 1374ms
  114.49%  Hogan.js : 1375ms
  133.47%  doT without `with` : 1603ms
  134.64%  Jade without `with` : 1617ms
  137.05%  EJS without `with` : 1646ms
  146.04%  Handlebars.js : 1754ms
  193.26%  Dust : 2321ms
  231.72%  Swig : 2783ms
  262.45%  Eco : 3152ms
  286.59%  Jade : 3442ms
  294.17%  CoffeeKup : 3533ms
  297.42%  mustache.js : 3572ms
  312.99%  Underscore : 3759ms
  341.22%  doT : 4098ms
  342.55%  EJS : 4114ms

Ranking unescaped
  100.00%  doT without `with` : 34ms
  114.71%  gaikan : 39ms
  188.24%  ECT : 64ms
  523.53%  Swig : 178ms
  526.47%  Fest : 179ms
  688.24%  Hogan.js : 234ms
  1176.47%  Jade without `with` : 400ms
  1285.29%  Handlebars.js : 437ms
  1302.94%  EJS without `with` : 443ms
  1479.41%  Eco : 503ms
  1911.76%  Dust : 650ms
  4870.59%  CoffeeKup : 1656ms
  4947.06%  mustache.js : 1682ms
  5008.82%  Jade : 1703ms
  5361.76%  doT : 1823ms
  5823.53%  Underscore : 1980ms
  6144.12%  EJS : 2089ms

Ranking total
  100.00%  ECT : 1265ms
  111.70%  gaikan : 1413ms
  119.76%  Fest : 1515ms
  127.19%  Hogan.js : 1609ms
  129.41%  doT without `with` : 1637ms
  159.45%  Jade without `with` : 2017ms
  165.14%  EJS without `with` : 2089ms
  173.20%  Handlebars.js : 2191ms
  234.07%  Swig : 2961ms
  234.86%  Dust : 2971ms
  288.93%  Eco : 3655ms
  406.72%  Jade : 5145ms
  410.20%  CoffeeKup : 5189ms
  415.34%  mustache.js : 5254ms
  453.68%  Underscore : 5739ms
  468.06%  doT : 5921ms
  490.36%  EJS : 6203ms
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