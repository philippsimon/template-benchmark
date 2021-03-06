var fs = require('fs');
var doT = require('dot');
var compiled;
var tplData;

module.exports.name = 'doT';

module.exports.prepareEscaped = function(data, done) {
	var str = fs.readFileSync(__dirname + '/tpl_escaped.dot', 'utf8');
	tplData = data;
	compiled = doT.compile(str);
	done();
};

module.exports.prepareUnescaped = function(data, done) {
	var str = fs.readFileSync(__dirname + '/tpl_unescaped.dot', 'utf8');
	tplData = data;
	compiled = doT.compile(str);
	done();
};

module.exports.render = function(done) {
	var html = compiled(tplData);
	done(undefined, html);
};