var ECT = require('ect');
var renderer;
var tplData;
var tpl;

module.exports.name = 'ECT';

renderer = new ECT({ root: __dirname, cache: true, debug: true });

module.exports.prepareEscaped = function (data, done) {
	tplData = data;
	tpl = 'tpl_escaped.ect';
	renderer.render(tpl, tplData);
	done();
};

module.exports.prepareUnescaped = function (data, done) {
	tplData = data;
	tpl = 'tpl_unescaped.ect';
	renderer.render(tpl, tplData);
	done();
};

module.exports.render = function (done) {
	var html = renderer.render(tpl, tplData);
	done(undefined, html);
};