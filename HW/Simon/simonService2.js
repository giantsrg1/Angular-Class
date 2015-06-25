(function(app){
	app.value("COLOROBJECT", {
		"red": {
			"color": "red",
			"lightColor" : "light-red"
		},
		"green" : {
			"color": "green",
			"lightColor" : "light-green"
		},
		"blue" : {
			"color": "blue",
			"lightColor" : "light-blue"
		},
		"yellow" : {
			"color": "yellow",
			"lightColor" : "light-yellow"
		}
	});

	app.factory("simonFactory", function(){
		function Simon(){
			this.colorList = [];
			this.currentColor;
		};

		Simon.prototype.reset = function() {
			this.colorList = [];
		};

		Simon.prototype.compareLists = function(listToCompare) {
			var correctFlag = false;

			for(var i = 0; i < listToCompare.length; i++){
				if(listToCompare[i] === this.colorList[i]){
					correctFlag = true;
				}
				else{
					correctFlag = false;
					break;
				}
			}

			return correctFlag;
		};

		Simon.prototype.getColor = function() {
			var number = (Math.random() * (4 - 1) + 1).toFixed(0);
			switch(number){
				case "1":
					this.currentColor = "red";
					break;
				case "2":
					this.currentColor = "green";
					break;
				case "3":
					this.currentColor = "blue";
					break;
				case "4":
					this.currentColor = "yellow";
					break;
			}
		};

		Simon.prototype.addColor = function(color) {		
			this.colorList.push(color);
		};

		return Simon;
	});

	app.factory("playerFactory", function(){
		function Player(){
			this.colorList = [];
		};

		Player.prototype.reset = function() {
			this.colorList = [];
		};

		Player.prototype.addColor = function(color) {
			this.colorList.push(color);
		};		

		return Player;
	});

	app.service("gameEngine", function(playerFactory, simonFactory ,COLOROBJECT, $timeout){
		var self = this;
		self.playerDisabled = true;
		self.level = 0;
		self.simon = new simonFactory();;
		self.player = new playerFactory();;
		self.colors = {
			"red": COLOROBJECT["red"].color,
			"green": COLOROBJECT["green"].color,
			"blue": COLOROBJECT["blue"].color,
			"yellow": COLOROBJECT["yellow"].color
		};

		function setDisabled() {
			if(self.playerDisabled){
				self.playerDisabled = false;
			}
			else{
				self.playerDisabled = true;
			}
		};

		self.start = function(){
			self.level++;
			self.simon.reset();
			self.player.reset();
			setDisabled();
		};

		self.stop = function(){
			self.simon = null;
			self.player = null;
			self.level = 0;
		};

		self.changeColors = function(colorValue, selectedValue){
			if(selectedValue){
				self.colors[colorValue] = COLOROBJECT[colorValue].lightColor;
			}
			else{
				self.colors[colorValue] = COLOROBJECT[colorValue].color;
			}
		};

		self.userClick = function(colorValue){
			if(!self.playerDisabled){
				setDisabled()
				self.player.addColor(colorValue);
				self.changeColors(colorValue, true);
				$timeout(function(){
					self.changeColors(colorValue, false);
					setDisabled()
				}, 1000);
			}
		}
	});
})(angular.module("SimonServices", []))