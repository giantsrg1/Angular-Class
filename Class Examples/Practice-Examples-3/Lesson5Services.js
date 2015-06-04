(function(app){

	app.value("THEMES", {
		kRed: {
			div1:"red"
		},
		kGreen: {
			div1:"green"
		},
		kBlue: {
			div1:"blue"
		}
	});

	app.constant("SECRET_SERVER_CODE", "123456789");

	app.factory("CarDTO", function(AgeCalculateService){

		var serialNumber = "123456789";

		function Car(make, model, year){
			this.make = make;
			this.model = model;
			this.year = year;
			this.age = AgeCalculateService.calcAge(year);
		}

		Car.prototype.updateAge = function(){
			this.age = AgeCalculateService.calcAge(this.year);
		};

		Car.prototype.getSerialNumber = function(){
			return serialNumber;
		};

		Car.buildMyStandardCar = function() {
			return new Car("Ford","Mustang", 1990);
		};

		return Car;
	});

	app.service("AgeCalculateService", function(){
		var self = this;

		self.calcAge = function(year){
			return 2015 - year;
		};

		self.cars = [];
	});

})(angular.module("lesson5AppService", []))