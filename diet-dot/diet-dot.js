var fs = require('fs');
var dietDot = require('diet-dot');
var compiled;
var tplData;

module.exports.prepare = function (data, done) {
	var str = fs.readFileSync(__dirname + '/tpl_escaped.dot', 'utf8');
	tplData = data;
	compiled = dietDot(str);
	done();
};

module.exports.prepareUnescaped = function (data, done) {
	var str = fs.readFileSync(__dirname + '/tpl_unescaped.dot', 'utf8');
	tplData = data;
	compiled = dietDot(str);
	done();
};

module.exports.step = function (done) {
	var html = compiled(tplData);
	done(undefined, html);
};