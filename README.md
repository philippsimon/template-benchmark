# Node.JS template engines benchmark

## Engines

- [CoffeeKup](https://github.com/mauricemach/coffeekup) v0.3.1 ([website](http://coffeekup.org/))
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
	  Escaped   : 1848ms
	  Unescaped : 108ms
	  Total     : 1956ms

	Dust
	  Escaped   : 2554ms
	  Unescaped : 704ms
	  Total     : 3258ms

	Hogan.js
	  Escaped   : 2525ms
	  Unescaped : 520ms
	  Total     : 3045ms

	Gaikan
	  Escaped   : 1894ms
	  Unescaped : 70ms
	  Total     : 1964ms

	Fest
	  Escaped   : 2164ms
	  Unescaped : 236ms
	  Total     : 2400ms

	EJS without `with`
	  Escaped   : 4445ms
	  Unescaped : 378ms
	  Total     : 4823ms

	doT
	  Escaped   : 3035ms
	  Unescaped : 68ms
	  Total     : 3103ms

	doT (printercu)
	  Escaped   : 5760ms
	  Unescaped : 1650ms
	  Total     : 7410ms

	doT (printercu) without `with`
	  Escaped   : 3231ms
	  Unescaped : 66ms
	  Total     : 3297ms

	diet dot
	  Escaped   : 16ms
	  Unescaped : 68ms
	  Total     : 84ms

	Swig
	  Escaped   : 5453ms
	  Unescaped : 451ms
	  Total     : 5904ms

	Underscore
	  Escaped   : 3110ms
	  Unescaped : 1807ms
	  Total     : 4917ms

	EJS
	  Escaped   : 4572ms
	  Unescaped : 1574ms
	  Total     : 6146ms

	Eco
	  Escaped   : 7013ms
	  Unescaped : 794ms
	  Total     : 7807ms

	Handlebars.js
	  Escaped   : 5570ms
	  Unescaped : 2323ms
	  Total     : 7893ms

	Jade
	  Escaped   : 8738ms
	  Unescaped : 5589ms
	  Total     : 14327ms

	Jade without `with`
	  Escaped   : 6755ms
	  Unescaped : 3599ms
	  Total     : 10354ms

	CoffeeKup
	  Escaped   : 6873ms
	  Unescaped : 7124ms
	  Total     : 13997ms

## Usage

	git clone git://github.com/baryshev/template-benchmark.git
	cd template-benchmark
	npm install
	node ./benchmark.js
