var fs = require('fs');

var data = require('./data');

var argv = require('optimist').argv;

var count = 100000;

var results = [],
	samples = [];

function loadSamples(path) {
	var templates = fs.readdirSync(path);
	for (var i = 0; i < templates.length; i++) {
		samples.push(require(path + '/' + templates[i]));
	}
}
loadSamples(__dirname + '/templates');

function runTests(i) {
	if (!i) i = 0;

	if (i < samples.length) {
		var sample = samples[i];
		testEscaped(sample, function(err, resultEscaped) {
			testUnescaped(sample, function(err, resultUnescaped) {
				var total = resultEscaped + resultUnescaped,
					s = {
						name: sample.name,
						escaped: resultEscaped,
						unescaped: resultUnescaped,
						total: total
					};

				console.log(sample.name);
				console.log('  Escaped   : ' + resultEscaped + 'ms');
				console.log('  Unescaped : ' + resultUnescaped + 'ms');
				console.log('  Total     : ' + total + 'ms');
				console.log('');

				results.push(s);

				runTests(i + 1);
			});
		});
	} else {
		console.log('--------------');
		console.log('');
		showResultsPercent('Ranking escaped', 'escaped');
		showResultsPercent('Ranking unescaped', 'unescaped');
		showResultsPercent('Ranking total', 'total');
	}
}

function testEscaped(sample, cb) {
	var i = 0;
	var start;
	var done = function(error, html) {
		i++;
		if (i === count) {
			var now = Date.now();
			cb(null, now - start);
		}
	};
	sample.prepareEscaped(data, function() {
		start = Date.now();
		for (var j = 0; j < count; j++) {
			sample.render(done);
		}
	});
}

function testUnescaped(sample, cb) {
	var i = 0;
	var start;
	var done = function(error, html) {
		i++;
		if (i === count) {
			var now = Date.now();
			cb(null, now - start);
		}
	};
	sample.prepareUnescaped(data, function() {
		start = Date.now();
		for (var j = 0; j < count; j++) {
			sample.render(done);
		}
	});
}

function showResultsPercent(label, prop) {
	var i, l, per, minVal, arr = results.slice();

	function log(name, val, per) {
		console.log('  ' + per.toFixed(2) + '%  ' + name + ' : ' + val + 'ms');
	}

	arr.sort(function(a, b) {
		return a[prop] - b[prop];
	});

	minVal = arr[0][prop];
	console.log(label);

	log(arr[0].name, minVal, 100);

	for (i = 1, l = arr.length; l > i; i += 1) {
		if (minVal) {
			per = (arr[i][prop] / minVal) * 100;
		} else {
			per = arr[i][prop] * 100;
		}

		log(arr[i].name, arr[i][prop], per);
	}

	console.log('');
}

// run test
if (argv.test) {
	require('./validate')(samples, data, function(error) {
		if (error) process.exit(1);
	});
	// run benchmarks
} else {
	console.log('Rendering ' + count + ' templates:\n');
	runTests();
}