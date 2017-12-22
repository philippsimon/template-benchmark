'use strict';

var fs = require('fs');
var mustache = require('mustache');
var template;
var tplData;

module.exports.name = 'mustache.js';

module.exports.prepareEscaped = function (data, done) {
	template = fs.readFileSync(__dirname + '/tpl_escaped.mustache', 'utf8');
	tplData = data;
	mustache.parse(template);
	done();
};

module.exports.prepareUnescaped = function (data, done) {
	template = fs.readFileSync(__dirname + '/tpl_unescaped.mustache', 'utf8');
	tplData = data;
	mustache.parse(template);
	done();
};

module.exports.render = function (done) {
	var html = mustache.render(template, tplData);
	done(undefined, html);
};