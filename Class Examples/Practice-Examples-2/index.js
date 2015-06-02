(function(app){
	app.controller("mainCtrl", function(FOLDERS){
		var self = this;
		self.folder = FOLDERS;
	});
})(angular.module("Lesson04", ["lesson04_services"]))