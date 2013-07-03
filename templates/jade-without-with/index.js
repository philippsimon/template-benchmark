var fs = require('fs');
var jade = require('jade');
var compiled;
var tplData;

module.exports.name = 'Jade without `with`';

module.exports.prepareEscaped = function (data, done) {
	var str = fs.readFileSync(__dirname + '/tpl_escaped.jade', 'utf8');
	tplData = data;
	compiled = jade.compile(str, { compileDebug: false, self: true });
	done();
};

module.exports.prepareUnescaped = function (data, done) {
	var str = fs.readFileSync(__dirname + '/tpl_unescaped.jade', 'utf8');
	tplData = data;
	compiled = jade.compile(str, { compileDebug: false, self: true });
	done();
};

module.exports.render = function (done) {
	var html = compiled(tplData);
	done(undefined, html);
};