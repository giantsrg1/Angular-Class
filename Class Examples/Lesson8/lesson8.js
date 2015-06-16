(function(app){

	app.factory("MyResource", function($resource){
		return $resource("http://maps.googleapis.com/maps/api/geocode/json", null, {
			getAddress: {
				method:"GET"
			}
		});
	});


	app.controller("MainController", function($q, MyResource){
		var self = this;
		var count = 0;
		var deffered = $q.defer();		

		deffered.promise
		.then(function onSuccess(person){
			console.log("Success Message " + person.name);
		},function onError(){
			console.log("Error Message");
		}, function onNotify(){
			console.log("Notify Message");
		});

		self.onClick = function(){
			if(count < 2){
				deffered.notify();
			} else if (count === 7) {
				deffered.reject();
			} else{
				deffered.resolve({name: "Scott"});
			}
			count ++;
		};

		self.searchAddress = "99";
		var MyResourceObject = MyResource;

		self.getAddresses = function(){
			MyResourceObject.getAddress({limit: 10, address: self.searchAddress}).$promise
			.then(function onSuccess(responce){
				self.addresses = responce.results;
			},
			function onError(){
				console.log("ERROR");
			});
		};

		self.getAddresses();		

	});
})(angular.module("MainApp", ["ngResource"]))