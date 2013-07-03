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

## Results

```
Rendering 100000 templates:

ECT
  Escaped   : 1784ms
  Unescaped : 105ms
  Total     : 1889ms

Dust
  Escaped   : 2854ms
  Unescaped : 655ms
  Total     : 3509ms

Hogan.js
  Escaped   : 2507ms
  Unescaped : 699ms
  Total     : 3206ms

Gaikan
  Escaped   : 1691ms
  Unescaped : 70ms
  Total     : 1761ms

Fest
  Escaped   : 2184ms
  Unescaped : 244ms
  Total     : 2428ms

EJS without `with`
  Escaped   : 4563ms
  Unescaped : 372ms
  Total     : 4935ms

doT
  Escaped   : 2919ms
  Unescaped : 66ms
  Total     : 2985ms

doT (printercu)
  Escaped   : 5092ms
  Unescaped : 1479ms
  Total     : 6571ms

doT (printercu) without `with`
  Escaped   : 3043ms
  Unescaped : 72ms
  Total     : 3115ms

diet dot
  Escaped   : 2042ms
  Unescaped : 72ms
  Total     : 2114ms

Swig
  Escaped   : 5229ms
  Unescaped : 414ms
  Total     : 5643ms

Underscore
  Escaped   : 7026ms
  Unescaped : 2935ms
  Total     : 9961ms

EJS
  Escaped   : 6385ms
  Unescaped : 1660ms
  Total     : 8045ms

Eco
  Escaped   : 8053ms
  Unescaped : 846ms
  Total     : 8899ms

Handlebars.js
  Escaped   : 5928ms
  Unescaped : 2294ms
  Total     : 8222ms

Jade
  Escaped   : 10346ms
  Unescaped : 5271ms
  Total     : 15617ms

Jade without `with`
  Escaped   : 7110ms
  Unescaped : 3248ms
  Total     : 10358ms

CoffeeKup
  Escaped   : 7749ms
  Unescaped : 4211ms
  Total     : 11960ms
```

## Usage

	git clone git://github.com/baryshev/template-benchmark.git
	cd template-benchmark
	npm install
	node ./benchmark.js
