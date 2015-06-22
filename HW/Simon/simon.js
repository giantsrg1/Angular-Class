(function(app){
	app.controller("SimonMainController", function($timeout, gameFactory){
		var self = this;
		var disableFlag = true;
		var count = 0;
		self.showSimon = false;
		self.user;
		self.simon;
		self.level = 0;


		function clearColors(isUser){
			if(isUser){
				disableFlag = false;	
			}			
			self.redColor = "";
			self.greenColor = "";
			self.blueColor = "";
			self.yellowColor = "";
		}

		function changeColor(color){
			switch(color){
				case "red":
					self.redColor = "light-red";
					break;
				case "green":
					self.greenColor = "light-green";
					break;
				case "blue":
					self.blueColor = "light-blue";
					break;
				case "yellow":
					self.yellowColor = "light-yellow";
					break;
			}
		};

		function checkSelection(){
			var correct = false;
			for(var i = 0; i < self.user.colorList.length; i++){
				if(self.user.colorList[i] === self.simon.colorList[i]){
					correct = true;
				}
				else{
					correct = false;
					break;
				}
			}

			if(!correct){
				self.instructions = "WRONG GAME OVER!"
				self.showSimon = true;
				$timeout(function() {
					self.level++;
					endGame();
				}, 3000);				
			}
			else if(self.user.colorList.length == self.simon.colorList.length && correct){
				disableFlag = true;
				self.user.colorList = [];
				self.simon.colorList = [];
				self.instructions = "CORRECT NEXT LEVEL!";
				$timeout(function() {
					self.level++;
					simon();
				}, 3000);
			}
		}

		function simon(){			
			self.instructions = "SIMONS TURN";
			disableFlag = true;
			var number = (Math.random() * (4 - 1) + 1).toFixed(0);
			var color;
			if(number === "1"){
				color = "red";
			}
			if(number === "2"){
				color = "blue";
			}
			if(number === "3"){
				color = "green";
			}
			if(number === "4"){
				color = "yellow";
			}
			
			if(count < self.level){
				changeColor(color);
				self.simon.colorList.push(color);
				count++;	
				$timeout(function(){					
					clearColors(false);
					$timeout(function(){
						simon();
					}, 1000);					
				}, 2000);
			}
			else{
				disableFlag = false;
				count = 0;
				self.instructions = "YOUR TURN";
			}
		};

		self.startGame = function(){
			self.user = new gameFactory();
			self.simon = new gameFactory();
			self.level = 1;
			simon();			
		};

		function endGame(){
			self.user = null;
			self.simon = null;
			self.showSimon = false;
			self.level = 0;
			self.instructions = "";
			disableFlag = true;
		};

		self.addUserColor = function(color){
			if(!disableFlag){
				changeColor(color);
				self.user.colorList.push(color);
				disableFlag = true;
				checkSelection();
				$timeout(function(){
					clearColors(true)
				},1000);				
			}
		};
	});


})(angular.module("SimonApp", ["SimonService"]))