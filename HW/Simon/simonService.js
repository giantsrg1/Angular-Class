(function(app){
	app.factory("gameFactory", function(){
		function Colors(){
			this.colorList = [];
		}

		return Colors;
	});

	app.service("gameServices", function(){
		var self = this;


	})
})(angular.module("SimonService", []))