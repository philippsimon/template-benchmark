var fs = require('fs');
var coffeekup = require('coffeekup');
var compiled;
var tplData;

module.exports.name = 'CoffeeKup';

module.exports.prepareEscaped = function(data, done) {
	var str = fs.readFileSync(__dirname + '/tpl_escaped.coffeekup', 'utf8');
	tplData = data;
	compiled = coffeekup.compile(str);
	done();
};

module.exports.prepareUnescaped = function(data, done) {
	var str = fs.readFileSync(__dirname + '/tpl_unescaped.coffeekup', 'utf8');
	tplData = data;
	compiled = coffeekup.compile(str);
	done();
};

module.exports.render = function(done) {
	var html = compiled(tplData);
	done(undefined, html);
};