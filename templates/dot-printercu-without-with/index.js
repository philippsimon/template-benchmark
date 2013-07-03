var fs = require('fs');
var dot = require('doT');
var compiled;
var tplData;

module.exports.name = 'doT (printercu) without `with`';

module.exports.prepareEscaped = function(data, done) {
	dot.templateSettings['with'] = false;

	var str = fs.readFileSync(__dirname + '/tpl_escaped.dot', 'utf8');
	tplData = data;
	compiled = dot.template(str);
	done();
};

module.exports.prepareUnescaped = function(data, done) {
	dot.templateSettings['with'] = false;

	var str = fs.readFileSync(__dirname + '/tpl_unescaped.dot', 'utf8');
	tplData = data;
	compiled = dot.template(str);
	done();
};

module.exports.render = function(done) {
	var html = compiled(tplData);
	done(undefined, html);
};