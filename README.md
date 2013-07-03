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

Rendering 100000 templates:

ECT
  Escaped   : 1817ms
  Unescaped : 110ms
  Total     : 1927ms

Dust
  Escaped   : 2559ms
  Unescaped : 672ms
  Total     : 3231ms

Hogan.js
  Escaped   : 2645ms
  Unescaped : 738ms
  Total     : 3383ms

Gaikan
  Escaped   : 1711ms
  Unescaped : 69ms
  Total     : 1780ms

Fest
  Escaped   : 2261ms
  Unescaped : 238ms
  Total     : 2499ms

EJS without `with`
  Escaped   : 4389ms
  Unescaped : 385ms
  Total     : 4774ms

doT
  Escaped   : 2923ms
  Unescaped : 63ms
  Total     : 2986ms

doT (printercu)
  Escaped   : 5720ms
  Unescaped : 1939ms
  Total     : 7659ms

doT (printercu) without `with`
  Escaped   : 2875ms
  Unescaped : 65ms
  Total     : 2940ms

diet dot
  Escaped   : 1994ms
  Unescaped : 65ms
  Total     : 2059ms

Swig
  Escaped   : 4886ms
  Unescaped : 404ms
  Total     : 5290ms

Underscore
  Escaped   : 6809ms
  Unescaped : 2815ms
  Total     : 9624ms

EJS
  Escaped   : 6900ms
  Unescaped : 1720ms
  Total     : 8620ms

Eco
  Escaped   : 6764ms
  Unescaped : 773ms
  Total     : 7537ms

Handlebars.js
  Escaped   : 5657ms
  Unescaped : 2427ms
  Total     : 8084ms

Jade
  Escaped   : 9375ms
  Unescaped : 5015ms
  Total     : 14390ms

Jade without `with`
  Escaped   : 6500ms
  Unescaped : 3138ms
  Total     : 9638ms

CoffeeKup
  Escaped   : 7049ms
  Unescaped : 3651ms
  Total     : 10700ms

## Usage

	git clone git://github.com/baryshev/template-benchmark.git
	cd template-benchmark
	npm install
	node ./benchmark.js
