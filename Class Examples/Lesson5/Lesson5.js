(function(app){
	
	app.config(function(SECRET_SERVER_CODE){

	});

	app.controller("myCtrl", function(THEMES){
		var self = this;
		self.themes = THEMES;
	});

	app.controller("myCtrl2", function(THEMES, SECRET_SERVER_CODE, AgeCalculateService){
		var self = this;
		self.themes = THEMES;
		self.secretCode = SECRET_SERVER_CODE;

		self.cars = AgeCalculateService.cars;
	});

	app.controller("myCtrl3", function(CarDTO, AgeCalculateService){
		var self = this;
		self.myCar = new CarDTO("Honda", "Accord", 1960);
		self.myCar2 = new CarDTO("Subaru", "Impreza", 2014);
		self.standardCar = CarDTO.buildMyStandardCar();

		AgeCalculateService.cars.push(self.myCar, self.myCar2, self.standardCar);
	});

})(angular.module("lesson5App", ["lesson5AppService"]))