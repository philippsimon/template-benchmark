var fs = require('fs');
var doT = require('doT');
var compiled;
var tplData;

module.exports.name = 'doT without `with`';

module.exports.prepareEscaped = function(data, done) {
	doT.with = false; // printercu branch
	(doT.templateSettings || doT)['with'] = false;

	var str = fs.readFileSync(__dirname + '/tpl_escaped.dot', 'utf8');
	tplData = data;
	compiled = doT.compile(str);
	done();
};

module.exports.prepareUnescaped = function(data, done) {
	doT.with = false; // printercu branch
	(doT.templateSettings || doT)['with'] = false;

	var str = fs.readFileSync(__dirname + '/tpl_unescaped.dot', 'utf8');
	tplData = data;
	compiled = doT.compile(str);
	done();
};

module.exports.render = function(done) {
	var html = compiled(tplData);
	done(undefined, html);
};