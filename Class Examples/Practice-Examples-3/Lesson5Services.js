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

	app.constant("COLOR", "Blue is Scotts Favorite Color!");

})(angular.module("lesson5AppService", []))