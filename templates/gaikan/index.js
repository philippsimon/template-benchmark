var gaikan = require('gaikan');
var compiled;
var tplData;

module.exports.name = 'Gaikan';

module.exports.prepareEscaped = function (data, done) {
	tplData = data;
	compiled = gaikan.compileFile('tpl_escaped', 'templates/gaikan', undefined, true);
	done();
};

module.exports.prepareUnescaped = function (data, done) {
	tplData = data;
	compiled = gaikan.compileFile('tpl_unescaped', 'templates/gaikan', undefined, true);
	done();
};

module.exports.render = function (done) {
	var html = compiled(tplData);
	done(undefined, html);
};