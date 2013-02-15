importScripts('labor.js');  

var lib = {};

lib.first_arg = function() {
	return arguments[0];
};

var router = new labor.Router(lib);


