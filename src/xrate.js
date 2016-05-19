/**
 * Xrate Filter
 * Transforms a given number to an appropriate amount of decimals based on its values.
 * It is mostly based on traditional display of exchange rate information:
 * > 5000 : No decimals
 * >= 80 and < 5000: 2 decimals
 * >= 20 and < 80 : 3 decimals
 * >= 1 amd < 20 : 4 decimals
 * < 1 : 6 decimals

 * @author Alexandre Vinet <vinetalexandre42@gmail.com>
 *
 * @param {string} input The number to be formatted.
 * @returns {string} Formatted string.
 */
(function(){
	'use strict';

	angular.module('xrate', [])
		.filter('xrate', function() {
			return function(input) {
				if (input === null || input === undefined){
					return '';
				}
				if (input instanceof Array){
					return '';
				}
				if (input === '' || input === false){
					return '';
				}
				if (isNaN(input - 0)){
					return '';
				}
				if (input >= 5000){
					return input.toFixed(0);
				}
				if (input >= 80){
					return input.toFixed(2);
				}
				if (input >= 20){
					return input.toFixed(3);
				}
				if (input >= 1){
					return input.toFixed(4);
				}
				return input.toFixed(6);
			};
		});
})();