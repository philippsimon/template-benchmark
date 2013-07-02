var fs = require('fs');
var jsBeautify = require('js-beautify');

/**
 * Validate if samples return correct result
 *
 * @param  {Array}    samples
 * @param  {Object}   data
 * @param  {Boolean}  [options.resultsRaw = false]
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
	if (!('resultsRaw' in options)) options.resultsRaw = false;
	if (!('resultsBeautify' in options)) options.resultsBeautify = true;
	if (!('validResultFileEscaped' in options)) options.validResultFileEscaped = 'valid-result-escaped.beautfiy.html';
	if (!('validResultFileUnescaped' in options)) options.validResultFileUnescaped = 'valid-result-unescaped.beautfiy.html';

	var validResultEscaped = fs.readFileSync(__dirname + '/' + options.validResultFileEscaped, 'utf8');
	var validResultUnescaped = fs.readFileSync(__dirname + '/' + options.validResultFileUnescaped, 'utf8');

	var error = false;

	function beautify_html(html) {
		if (html) {
			// clean html
			html = html.replace(/[\r\n]+/gm, ' ').replace(/\s+/gm, ' ').replace(/> /gm, '>').trim();
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
				validateUnescaped(sample.name, sample.sample, function(errUnescaped, htmlUnescaped) {
					// store results
					if (options.resultsRaw) fs.writeFile(__dirname + '/results/' + sample.name + '.raw.html', html);
					if (options.resultsBeautify) fs.writeFile(__dirname + '/results/' + sample.name + '.beautify.html', beautify_html(html));
					if (options.resultsRaw) fs.writeFile(__dirname + '/results/' + sample.name + ' unescaped.raw.html', htmlUnescaped);
					if (options.resultsBeautify) fs.writeFile(__dirname + '/results/' + sample.name + ' unescaped.beautify.html', beautify_html(htmlUnescaped));

					if (err || errUnescaped) error = true;

					console.log(sample.name);
					console.log('  Escaped   : ' + err);
					console.log('  Unescaped : ' + errUnescaped);
					console.log('');
					validateSamples(i + 1);
				});
			});
		} else {
			if (callback) callback(error);
		}
	}

	function validateEscaped(name, sample, cb) {
		sample.prepare(data, function() {
			sample.step(function(error, html) {
				cb(equalHtml(validResultEscaped, html), html);
			});
		});
	}

	function validateUnescaped(name, sample, cb) {
		sample.prepareUnescaped(data, function() {
			sample.step(function(error, html) {
				cb(equalHtml(validResultUnescaped, html), html);
			});
		});
	}

	function equalHtml(html1, html2) {
		html1 = beautify_html(html1);
		html2 = beautify_html(html2);

		return html1 === html2;
	}

	console.log('Valid HTML result');
	console.log('(results are stored in ./results)');
	console.log('');

	validateSamples();
};