(function(app){


	app.controller("myCtrl", function(THEMES){
		var self = this;
		self.themes = THEMES;
	});

	app.controller("myCtrl2", function(THEMES, COLOR){
		var self = this;
		self.themes = THEMES;
		self.favoriteColor = COLOR;
	});

})(angular.module("lesson5App", ["lesson5AppService"]))