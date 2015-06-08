(function(app){
	app.controller("mainCtrl", function(FOLDERS){
		var self = this;
		self.folders = FOLDERS;
	});
})(angular.module("Lesson04", []))