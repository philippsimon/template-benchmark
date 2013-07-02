var data = require('./data');

var argv = require('optimist').argv;

var count = 100000;
var ect = require('./ect/ect.js');
var ejs = require('./ejs/ejs.js');
var ejsWithoutWith = require('./ejs-without-with/ejs.js');
var jade = require('./jade/jade.js');
var jadeWithoutWith = require('./jade-without-with/jade.js');
var eco = require('./eco/eco.js');
var swig = require('./swig/swig.js');
var hogan = require('./hogan/hogan.js');
var dust = require('./dust/dust.js');
var fest = require('./fest/fest.js');
var dot = require('./dot/dot.js');
var dotPrintercu = require('./dot-printercu/dot.js');
var dotPrintercuWithoutWith = require('./dot-printercu-without-with/dot.js');
var dietDot = require('./diet-dot/diet-dot.js');
var handlebars = require('./handlebars/handlebars.js');
var coffeekup = require('./coffeekup/coffeekup.js');
var underscore = require('./underscore/underscore.js');
var gaikan = require('./gaikan/gaikan.js');

var test = function(name, sample, cb) {
	var i = 0;
	var start;
	var done = function(error, html) {
		i++;
		if (i === count) {
			var now = Date.now();
			cb(null, name, now - start);
		}
	};
	sample.prepare(data, function() {
		start = Date.now();
		for (var j = 0; j < count; j++) {
			sample.step(done);
		}
	});
};

var testUnescaped = function(name, sample, cb) {
	var i = 0;
	var start;
	var done = function(error, html) {
		i++;
		if (i === count) {
			var now = Date.now();
			cb(null, name, now - start);
		}
	};
	sample.prepareUnescaped(data, function() {
		start = Date.now();
		for (var j = 0; j < count; j++) {
			sample.step(done);
		}
	});
};

var samples = [
	{ name : 'ECT', sample : ect },
	{ name : 'Dust', sample : dust },
	{ name : 'Hogan.js', sample : hogan },
	{ name : 'Gaikan', sample: gaikan },
	{ name : 'Fest', sample : fest },
	{ name : 'EJS without `with`', sample : ejsWithoutWith },
	{ name : 'doT', sample : dot },
	{ name : 'doT (printercu)', sample : dotPrintercu },
	{ name : 'doT (printercu) without `with`', sample : dotPrintercuWithoutWith },
	{ name : 'diet dot', sample : dietDot },
	{ name : 'Swig', sample : swig },
	{ name : 'Underscore', sample : underscore },
	{ name : 'EJS', sample : ejs },
	{ name : 'Eco', sample : eco },
	{ name : 'Handlebars.js', sample : handlebars },
	{ name : 'Jade', sample : jade },
	{ name : 'Jade without `with`', sample : jadeWithoutWith },
	{ name : 'CoffeeKup', sample : coffeekup }
];

var runTests = function (i) {
	if (!i) i = 0;

	if (i < samples.length) {
		var sample = samples[i];
		test(sample.name, sample.sample, function (err, name, result) {
			testUnescaped(sample.name, sample.sample, function (err, name, resultUnescaped) {
				console.log(name);
				console.log('  Escaped   : ' + result + 'ms');
				console.log('  Unescaped : ' + resultUnescaped + 'ms');
				console.log('  Total     : ' + (result + resultUnescaped) + 'ms');
				console.log('');
				runTests(i+1);
			});
		});
	}
};

if (argv.test) {
	require('./validate')(samples, data, function(error) {
		if (error) process.exit(1);
	});
} else {
	console.log('Rendering ' + count + ' templates:\n');
	runTests();
}