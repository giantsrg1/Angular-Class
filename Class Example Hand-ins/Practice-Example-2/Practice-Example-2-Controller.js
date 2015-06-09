(function(app){
	app.controller("controller", function(StudentDTO){
		var self = this;
		
		self.student = new StudentDTO();
		self.AssignmentInput = {
			"Name": "",
			"Grade": null};

		self.AddAssignmentToStudent = function(){
			self.student.addAssignment(self.AssignmentInput);
			self.AssignmentInput = {
				"Name": "",
				"Grade": null
			};
		};
	});
})(angular.module("MainApp", ["MainServices"]))