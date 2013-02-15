var labor = require('../src/labor');  

var primes_lib = {};

primes_lib.find = function( max_prime_index ) {

	// var num_primes = 1;
	// var current_prime = 1;
	// var n = 1;

	// while (num_primes < max_prime_index ) {
		
	// 	n += 1;
	// 	for (var i = 2, l = Math.sqrt(n); i <= l; i ++) {
	// 		if (n % i === 0)
	// 		  continue;
	// 	}

	// 	num_primes++;
	// 	current_prime = n;
		
	// }

	return 10000;

}

var router = new labor.Router( primes_lib );

