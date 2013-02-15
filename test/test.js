var labor = require('../src/labor');

var pool = new labor.Pool('./prime_search.js', 1);

pool.addWork( 'find', [80], function(result) {

	console.log( result );

});	
	
