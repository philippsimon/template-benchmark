var fs = require('fs');
var jsBeautify = require('js-beautify');
var ent = require('ent');

/**
 * Validate if samples return correct result
 *
 * @param  {Array}    samples
 * @param  {Object}   data
 * @param  {Boolean}  [options.resultsRaw = true]
 * @param  {Boolean}  [options.resultsBeautify = true]
 * @param  {String}   [options.validResultFileEscaped = 'valid-result-escaped.beautfiy.html]
 * @param  {String}   [options.validResultFileUnescaped = 'valid-result-unescaped.beautfiy.html']
 * @param  {Function} [callback]
 */
module.exports = function validate(samples, data, options, callback) {
	if (typeof options === 'function') {
		callback = options;
		options = {};
	}

	if (!options) options = {};
	if (!('resultsRaw' in options)) options.resultsRaw = true;
	if (!('resultsBeautify' in options)) options.resultsBeautify = true;
	if (!('validResultFileEscaped' in options)) options.validResultFileEscaped = 'valid-result-escaped.beautfiy.html';
	if (!('validResultFileUnescaped' in options)) options.validResultFileUnescaped = 'valid-result-unescaped.beautfiy.html';

	var validResultEscaped = fs.readFileSync(__dirname + '/' + options.validResultFileEscaped, 'utf8');
	var validResultUnescaped = fs.readFileSync(__dirname + '/' + options.validResultFileUnescaped, 'utf8');

	var errors = 0;

	function booleanToColoredPassedOrFailed(value) {
		var red = '\u001b[31m';
		var green = '\u001b[32m';
		var reset = '\u001b[0m';

		if (value) return green + 'passed' + reset;
		else return red + 'failed' + reset;
	}

	function replaceEntities(html) {
		return html.replace(/&#[#0-9a-z]{2,5};/gmi, function(match) {
			return ent.encode(ent.decode(match));
		});
	}

	function beautify_html(html) {
		if (html) {
			// clean html
			html = replaceEntities(html.replace(/[\r\n]+/gm, ' ').replace(/\s+/gm, ' ').replace(/> /gm, '>').trim());
			return jsBeautify.html(html, {
				"wrap_line_length": 0
			});
		} else {
			return '';
		}
	}

	function validateSamples(i) {
		if (!i) i = 0;

		if (i < samples.length) {
			var sample = samples[i];
			validateEscaped(sample.name, sample.sample, function(err, html) {
				if (err) errors++;
				validateUnescaped(sample.name, sample.sample, function(errUnescaped, htmlUnescaped) {
					if (errUnescaped) errors++;

					// store results
					if (options.resultsRaw) fs.writeFileSync(__dirname + '/results/' + sample.name + '.raw.html', html);
					if (options.resultsBeautify) fs.writeFileSync(__dirname + '/results/' + sample.name + '.beautify.html', beautify_html(html));
					if (options.resultsRaw) fs.writeFileSync(__dirname + '/results/' + sample.name + ' unescaped.raw.html', htmlUnescaped);
					if (options.resultsBeautify) fs.writeFileSync(__dirname + '/results/' + sample.name + ' unescaped.beautify.html', beautify_html(htmlUnescaped));

					// log results
					console.log(sample.name);
					console.log('  Escaped   : ' + booleanToColoredPassedOrFailed(!err));
					console.log('  Unescaped : ' + booleanToColoredPassedOrFailed(!errUnescaped));
					console.log('');
					validateSamples(i + 1);
				});
			});
		} else {
			var passed = samples.length * 2 - errors;
			console.log(passed + '/' + (samples.length * 2) + ' passed\n');
			if (callback) callback(errors ? errors : false);
		}
	}

	function validateEscaped(name, sample, cb) {
		sample.prepare(data, function() {
			sample.step(function(error, html) {
				cb(errorInHtml(validResultEscaped, html), html);
			});
		});
	}

	function validateUnescaped(name, sample, cb) {
		sample.prepareUnescaped(data, function() {
			sample.step(function(error, html) {
				cb(errorInHtml(validResultUnescaped, html), html);
			});
		});
	}

	function errorInHtml(html1, html2) {
		html1 = beautify_html(html1);
		html2 = beautify_html(html2);

		return html1 !== html2;
	}

	console.log('Valid HTML result');
	console.log('(results are stored in ./results)');
	console.log('');

	validateSamples();
};