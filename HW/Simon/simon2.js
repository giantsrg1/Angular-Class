(function(app){
	app.controller("SimonMainController", function(gameEngine){
		var self = this;
		self.simon;
		self.player;
		self.level = gameEngine.level;
		self.colors = gameEngine.colors;

		self.startGame = function(){
			gameEngine.start();
			self.simon = gameEngine.simon;
			self.player = gameEngine.player;
			self.level = gameEngine.level;
		};

		self.userClicksColor = function(color){
			gameEngine.userClick(color);
		};
	});

})(angular.module("SimonApp", ["SimonServices"]))