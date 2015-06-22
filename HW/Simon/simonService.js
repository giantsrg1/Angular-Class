(function(app){
	app.factory("gameFactory", function(){
		function Colors(){
			this.colorList = [];
		}

		return Colors;
	});
})(angular.module("SimonService", []))