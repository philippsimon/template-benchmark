'use strict';

var gaikan = require('gaikan');
var compiled;
var tplData;

gaikan.options.directories = ['templates/gaikan'];

module.exports.name = 'gaikan';

module.exports.prepareEscaped = function (data, done) {
	tplData = data;
	compiled = gaikan.compileFromFile('tpl_escaped');
	done();
};

module.exports.prepareUnescaped = function (data, done) {
	tplData = data;
	compiled = gaikan.compileFromFile('tpl_unescaped');
	done();
};

module.exports.render = function (done) {
	var html = compiled(gaikan, tplData);
	done(undefined, html);
};