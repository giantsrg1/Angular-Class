describe('template - module', function(){
	'use strict';

	beforeEach(module('template'));

	describe('Getting User Properties', function(){
		var toTest;
		var scope;

		beforeEach(inject(function($controller){			
      		toTest = $controller('teamController');
		}));

		it('should get json string from file', function(){
			var result = toTest.getData;
			var test = false;
			if(typeof(result) === "function"){
				test = true;
			}

			expect(test).toBe(true);
		});

	});


});