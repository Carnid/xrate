'use strict';
describe('xrate filter', function () {

	beforeEach(module('xrate'));

	var $filter;

	beforeEach(inject(function (_$filter_) {
		$filter = _$filter_;
	}));

	it('should output empty string if input is not a number', function(){
		var testNumber1 = 'hello',
			testNumber2 = {},
			testNumber3 = [],
			testNumber4, //undefined
			testNumber5 = null,
			testNumber6 = '',
			testNumber7 = false,

			result;

		result = $filter('xrate')(testNumber1, false);
		expect(result).toEqual('');

		result = $filter('xrate')(testNumber2, false);
		expect(result).toEqual('');

		result = $filter('xrate')(testNumber3, false);
		expect(result).toEqual('');

		result = $filter('xrate')(testNumber4, false);
		expect(result).toEqual('');

		result = $filter('xrate')(testNumber5, false);
		expect(result).toEqual('');

		result = $filter('xrate')(testNumber6, false);
		expect(result).toEqual('');

		result = $filter('xrate')(testNumber7, false);
		expect(result).toEqual('');
	});

	it('should output "0.700000" if input is 0.7', function () {
		var testNumber = 0.7,
			result;

		result = $filter('xrate')(testNumber, false);

		expect(result).toEqual('0.700000');
	});

	it('should output "0.123456" if input is 0.123456', function () {
		var testNumber = 0.123456,
			result;

		result = $filter('xrate')(testNumber, false);

		expect(result).toEqual('0.123456');
	});

	it('should output "0.123456" if input is 0.1234561', function () {
		var testNumber = 0.1234561,
			result;

		result = $filter('xrate')(testNumber, false);

		expect(result).toEqual('0.123456');
	});

	it('should output "0.123456" if input is 0.1234559', function () {
		var testNumber = 0.1234559,
			result;

		result = $filter('xrate')(testNumber, false);

		expect(result).toEqual('0.123456');
	});

	it('should output "1.0000" if input is 1', function () {
		var testNumber = 1,
			result;

		result = $filter('xrate')(testNumber, false);

		expect(result).toEqual('1.0000');
	});

	it('should output "5.1300" if input is 5.13', function () {
		var testNumber = 5.13,
			result;

		result = $filter('xrate')(testNumber, false);

		expect(result).toEqual('5.1300');
	});

	it('should output "15.0001" if input is 15.0000987', function () {
		var testNumber = 15.0000987,
			result;

		result = $filter('xrate')(testNumber, false);

		expect(result).toEqual('15.0001');
	});

	it('should output "20.000" if input is 20', function () {
		var testNumber = 20,
			result;

		result = $filter('xrate')(testNumber, false);

		expect(result).toEqual('20.000');
	});

	it('should output "50.780" if input is 50.78', function () {
		var testNumber = 50.78,
			result;

		result = $filter('xrate')(testNumber, false);

		expect(result).toEqual('50.780');
	});

	it('should output "50.000" if input is 50.000123', function () {
		var testNumber = 50.000123,
			result;

		result = $filter('xrate')(testNumber, false);

		expect(result).toEqual('50.000');
	});

	it('should output "80.00" if input is 80', function () {
		var testNumber = 80,
			result;

		result = $filter('xrate')(testNumber, false);

		expect(result).toEqual('80.00');
	});

	it('should output "150.40" if input is 150.4', function () {
		var testNumber = 150.4,
			result;

		result = $filter('xrate')(testNumber, false);

		expect(result).toEqual('150.40');
	});

	it('should output "3080.44" if input is 3080.44123', function () {
		var testNumber = 3080.44123,
			result;

		result = $filter('xrate')(testNumber, false);

		expect(result).toEqual('3080.44');
	});

	it('should output "5000" if input is 5000', function () {
		var testNumber = 5000,
			result;

		result = $filter('xrate')(testNumber, false);

		expect(result).toEqual('5000');
	});

	it('should output "10000" if input is 10000.123', function () {
		var testNumber = 10000.123,
			result;

		result = $filter('xrate')(testNumber, false);

		expect(result).toEqual('10000');
	});

	it('should output "10001" if input is 10000.981', function () {
		var testNumber = 10000.981,
			result;

		result = $filter('xrate')(testNumber, false);

		expect(result).toEqual('10001');
	});
});