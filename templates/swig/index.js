var swig = require('swig');
var compiled;
var tplData;

swig.init({
	root: __dirname
});

module.exports.name = 'Swig';

module.exports.prepareEscaped = function (data, done) {
	tplData = data;
	compiled = swig.compileFile('./tpl_escaped.swig');
	done();
};

module.exports.prepareUnescaped = function (data, done) {
	tplData = data;
	compiled = swig.compileFile('./tpl_unescaped.swig');
	done();
};

module.exports.render = function (done) {
	var html = compiled.render(tplData);
	done(undefined, html);
};
