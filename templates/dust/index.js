var fs = require('fs');
var dust = require('dustjs-linkedin');
var compiled;
var tplData;

module.exports.name = 'Dust';

module.exports.prepareEscaped = function (data, done) {
	var str = fs.readFileSync(__dirname + '/tpl_escaped.dust', 'utf8');
	tplData = data;

	compiled = dust.compile(str, 'test');
	dust.loadSource(compiled);

	done();
};

module.exports.prepareUnescaped = function (data, done) {
	var str = fs.readFileSync(__dirname + '/tpl_unescaped.dust', 'utf8');
	tplData = data;

	compiled = dust.compile(str, 'test');
	dust.loadSource(compiled);

	done();
};

module.exports.render = function (done) {
	dust.render('test', tplData, function(err, html) {
		done(err, html);
	});
};
