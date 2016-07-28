'use strict';

var fest = require('fest');
var tplData;
var compiled;

module.exports.name = 'Fest';

module.exports.prepareEscaped = function (data, done) {
	var str = __dirname + '/tpl_escaped.fest';
	tplData = data;
	compiled = (new Function('return ' + fest.compile(str, {beautify: false}) ))();
	done();
};

module.exports.prepareUnescaped = function (data, done) {
	var str = __dirname + '/tpl_unescaped.fest';
	tplData = data;
	compiled = (new Function('return ' + fest.compile(str, {beautify: false}) ))();
	done();
};

module.exports.render = function (done) {
	var html = compiled(tplData);
	done(undefined, html);
};