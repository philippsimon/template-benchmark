var fs = require('fs');
var eco = require('eco');
var tplData;
var compiled;

module.exports.prepare = function (data, done) {
	var str = fs.readFileSync(__dirname + '/tpl_escaped.eco', 'utf8');
	tplData = data;
	compiled = eco.compile(str);
	done();
};

module.exports.prepareUnescaped = function (data, done) {
	var str = fs.readFileSync(__dirname + '/tpl_unescaped.eco', 'utf8');
	tplData = data;
	compiled = eco.compile(str);
	done();
};

module.exports.step = function (done) {
	var html = compiled(tplData);
	done(undefined, html);
};