var fs = require('fs');
var dietDot = require('diet-dot');
var compiled;
var tplData;

module.exports.prepare = function(data, done) {
	var str = fs.readFileSync(__dirname + '/tpl_escaped.dot', 'utf8');
	tplData = data;
	// from http://jsperf.com/encode-html-entities/29
	data.esc = function esc(str) {
		return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
	};
	compiled = dietDot(str);
	done();
};

module.exports.prepareUnescaped = function(data, done) {
	var str = fs.readFileSync(__dirname + '/tpl_unescaped.dot', 'utf8');
	tplData = data;
	compiled = dietDot(str);
	done();
};

module.exports.step = function(done) {
	var html = compiled(tplData);
	done(undefined, html);
};