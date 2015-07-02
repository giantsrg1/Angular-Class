(function  (app) {

	app.service("contactService", function(){
		var self = this;

		self.contactList = [{
			fname: "Default",
			lname: "Default"
		},
		{
			fname: "Scott",
			lname: "Goldstein"
		}];

		self.addContact = function(contact){
			self.contactList.push(contact);
		};

		self.deleteContact = function(contact){
			var index = self.contactList.indexOf(contact);
			self.contactList.splice(index, 1);
		};
	});

	app.controller('AboutUsCtrlMain', function(contactService) {
		var self = this;

		function setUp(){
			self.newFName = "";
			self.newLName = "";
		}

		self.addNewUser = function(){
			if(self.newFName && self.newLName){
				var contact = {
					fname: self.newFName,
					lname: self.newLName
				};
				contactService.addContact(contact);

				setUp();
			}
		};

		setUp();
	});
    
})(angular.module('GDAboutUs', []));