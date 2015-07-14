describe('template - module', function(){
	'use strict';

	beforeEach(module('template'));

	describe('Getting User Properties', function(){
		var toTest;
		var scope;

		beforeEach(inject(function($controller,$rootScope){
      		toTest = $controller('UserController');
		}));

		it('should get json string from file', function(){
			var result = toTest.getData;

			expect(result).toBeDefined();
		});
	});
});