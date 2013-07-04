# Node.JS template engines benchmark
[![Build Status](https://api.travis-ci.org/philippsimon/template-benchmark.png)](https://travis-ci.org/philippsimon/template-benchmark)

## Engines

- [CoffeeKup](https://github.com/mauricemach/coffeekup) v0.3.1 ([website](http://coffeekup.org/))
- [diet dot](https://github.com/jamescostian/diet-dot) v1.0.1
- [doT](https://github.com/olado/doT) v1.0.1 ([website](http://olado.github.com/doT/))
- [doT printercu](https://github.com/printercu/doT) latest
- [Dust](https://github.com/linkedin/dustjs) v1.2.6 ([website](http://linkedin.github.com/dustjs/))
- [Eco](https://github.com/sstephenson/eco) v1.1.0-rc-3
- [ECT](https://github.com/baryshev/ect) v0.5.2 ([website](http://ectjs.com/))
- [EJS](https://github.com/visionmedia/ejs) v0.8.4
- [Fest](https://github.com/mailru/fest) v0.7.1
- [Gaikan](https://github.com/Deathspike/gaikan) v1.3.13
- [Handlebars.js](https://github.com/wycats/handlebars.js/) v1.0.12 ([website](http://handlebarsjs.com/))
- [Hogan.js](https://github.com/twitter/hogan.js) v2.0.0 ([website](http://twitter.github.com/hogan.js/))
- [Jade](https://github.com/visionmedia/jade) v0.32.0 ([website](http://jade-lang.com/))
- [Swig](https://github.com/paularmstrong/swig) v0.14.0
- [Underscore](https://github.com/documentcloud/underscore) v1.4.4 ([website](http://underscorejs.org/))

## Test environment

- CPU: Intel(R) Xeon(R) CPU E5-2620 0 @ 2.00GHz
- OS: Ubuntu Server 10.04
- Node.JS version: 0.10.11

## Ranking

```
Rendering 100000 templates:

Ranking escaped
  100.00%  Gaikan : 1694ms
  106.67%  ECT : 1807ms
  118.95%  diet dot : 2015ms
  129.34%  Fest : 2191ms
  149.65%  Dust : 2535ms
  155.08%  Hogan.js : 2627ms
  165.76%  doT (printercu) without `with` : 2808ms
  166.59%  doT : 2822ms
  257.38%  EJS : 4360ms
  260.21%  EJS without `with` : 4408ms
  277.98%  doT (printercu) : 4709ms
  309.09%  Swig : 5236ms
  318.06%  Handlebars.js : 5388ms
  387.37%  Eco : 6562ms
  388.37%  Jade without `with` : 6579ms
  407.97%  Underscore : 6911ms
  420.13%  CoffeeKup : 7117ms
  606.85%  Jade : 10280ms

Ranking unescaped
  100.00%  doT : 63ms
  103.17%  diet dot : 65ms
  104.76%  doT (printercu) without `with` : 66ms
  109.52%  Gaikan : 69ms
  169.84%  ECT : 107ms
  401.59%  Fest : 253ms
  619.05%  EJS without `with` : 390ms
  661.90%  Swig : 417ms
  1061.90%  Dust : 669ms
  1153.97%  Hogan.js : 727ms
  1241.27%  Eco : 782ms
  2373.02%  doT (printercu) : 1495ms
  2382.54%  EJS : 1501ms
  3555.56%  Handlebars.js : 2240ms
  4693.65%  Underscore : 2957ms
  5526.98%  CoffeeKup : 3482ms
  5609.52%  Jade without `with` : 3534ms
  8238.10%  Jade : 5190ms

Ranking total
  100.00%  Gaikan : 1763ms
  108.56%  ECT : 1914ms
  117.98%  diet dot : 2080ms
  138.63%  Fest : 2444ms
  163.02%  doT (printercu) without `with` : 2874ms
  163.64%  doT : 2885ms
  181.74%  Dust : 3204ms
  190.24%  Hogan.js : 3354ms
  272.15%  EJS without `with` : 4798ms
  320.65%  Swig : 5653ms
  332.44%  EJS : 5861ms
  351.90%  doT (printercu) : 6204ms
  416.56%  Eco : 7344ms
  432.67%  Handlebars.js : 7628ms
  559.73%  Underscore : 9868ms
  573.62%  Jade without `with` : 10113ms
  601.19%  CoffeeKup : 10599ms
  877.48%  Jade : 15470ms
```

## Results by engine

```
Rendering 100000 templates:

CoffeeKup
  Escaped   : 7117ms
  Unescaped : 3482ms
  Total     : 10599ms

diet dot
  Escaped   : 2015ms
  Unescaped : 65ms
  Total     : 2080ms

doT
  Escaped   : 2822ms
  Unescaped : 63ms
  Total     : 2885ms

doT (printercu)
  Escaped   : 4709ms
  Unescaped : 1495ms
  Total     : 6204ms

doT (printercu) without `with`
  Escaped   : 2808ms
  Unescaped : 66ms
  Total     : 2874ms

Dust
  Escaped   : 2535ms
  Unescaped : 669ms
  Total     : 3204ms

Eco
  Escaped   : 6562ms
  Unescaped : 782ms
  Total     : 7344ms

ECT
  Escaped   : 1807ms
  Unescaped : 107ms
  Total     : 1914ms

EJS
  Escaped   : 4360ms
  Unescaped : 1501ms
  Total     : 5861ms

EJS without `with`
  Escaped   : 4408ms
  Unescaped : 390ms
  Total     : 4798ms

Fest
  Escaped   : 2191ms
  Unescaped : 253ms
  Total     : 2444ms

Gaikan
  Escaped   : 1694ms
  Unescaped : 69ms
  Total     : 1763ms

Handlebars.js
  Escaped   : 5388ms
  Unescaped : 2240ms
  Total     : 7628ms

Hogan.js
  Escaped   : 2627ms
  Unescaped : 727ms
  Total     : 3354ms

Jade
  Escaped   : 10280ms
  Unescaped : 5190ms
  Total     : 15470ms

Jade without `with`
  Escaped   : 6579ms
  Unescaped : 3534ms
  Total     : 10113ms

Swig
  Escaped   : 5236ms
  Unescaped : 417ms
  Total     : 5653ms

Underscore
  Escaped   : 6911ms
  Unescaped : 2957ms
  Total     : 9868ms
```

## Usage

	git clone git://github.com/baryshev/template-benchmark.git
	cd template-benchmark
	npm install
	node ./benchmark.js
