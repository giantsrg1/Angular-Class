(function(app){
	app.value("GRADEGRID", [{
		"grade" : "A",		
		"maxValue" : 100,
		"minValue" : 90,
		"passFlag" : true
	},
	{
		"grade" : "B",		
		"maxValue" : 89,
		"minValue" : 80,
		"passFlag" : true
	},
	{
		"grade" : "C",		
		"maxValue" : 79,
		"minValue" : 70,
		"passFlag" : false
	},
	{
		"grade" : "D",		
		"maxValue" : 69,
		"minValue" : 60,
		"passFlag" : false
	},
	{
		"grade" : "F",		
		"maxValue" : 59,
		"minValue" : 0,
		"passFlag" : false
	}]);

	app.factory("StudentDTO", function(StudentService){
		function Student(){
			this.Name;
			this.Assignments = [];
			this.average;
			this.letterGrade;
		};

		Student.prototype.addAssignment = function(value){
			this.Assignments.push(value);

			this.average = StudentService.getAverage(this.Assignments);
			this.letterGrade = StudentService.getLetterGrade(this.average);
		};

		return Student;
	});

	app.service("StudentService", function(GRADEGRID){
		var self = this;		

		self.getAverage = function(value){
			var length = value.length;
			var sum = 0;

			for(var i = 0; i < length; i++){
				sum += value[i].Grade;
			}

			return sum/length;
		};

		self.getLetterGrade = function(value){
			for(var i = 0; i < GRADEGRID.length; i++){
				var max = GRADEGRID[i].maxValue;
				var min = GRADEGRID[i].minValue;
				if(value < max && value >= min){
					return GRADEGRID[i].grade;
				};
			};
		};
	});

})(angular.module("MainServices", []))