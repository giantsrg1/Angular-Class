(function  (app) {

  app.controller('HomeCtrlMain', function() {
  	var self = this;

  	self.person = {
  		fname: "Paul",
  		lname: "Two"
  	};

  	self.recipeCount = 1;

  	self.recipesBookName = "Scott's Recipes"; 	

  	self.recipeAddCount = function(){
  		self.recipeCount ++;
  	};

  	self.mostRecentRecipe = {};

  	self.updateMostRecent = function(value){
  		self.mostRecentRecipe = value;
  		debugger;
  	};
  });

  app.directive('gdBasic', function(){
  	return {
  		//template: '<h2>Welcome to my first directive</h2>'
  		templateUrl: 'app/partials/home/gd-basic.html',
  		restrict: 'EA'
  	} 
  });

  app.directive('gdBasicControlled', function(){
  	return {
  		templateUrl: 'app/partials/home/gd-basic-controlled.html',
  		controller: 'gdBasicController',
  		controllerAs : 'ctrl',
  		scope: false
  	}
  });  

  app.controller("gdBasicController", function(){
  	var self = this;

  	self.name = "Scott Goldstein"
  });

  app.directive('gdAdvanced', function(){
  	return {
	  	templateUrl: 'app/partials/home/gd-advanced.html',
	  	controller: 'gdAdvancedCtrl as ctrl',
	  	bindToController : true,
	  	scope: {
	  		//bookName: '@'
	  		bookName : '=',
	  		onAddRecipe: '&',
	  		onUpdateRecent: '&'
	  	}
	  };
  });

  app.controller("gdAdvancedCtrl", function(){
  	var self = this;

  	self.recipes = [{
  		flour: '1 cup',
  		rice: '2cups'
  	}];

  	self.addRecipe = function(){
  		var newRecipe = {};

  		newRecipe[self.ingred] = self.amount;

  		self.recipes.push(newRecipe);

  		self.ingred = '';
  		self.amount = '';

  		self.onAddRecipe();
  		self.onUpdateRecent({userRecentRecipe: newRecipe});
  	};
  });
    
})(angular.module('GDHome', []));