var mod = angular.module("myApp", []);

mod.controller("mainCtrl", function(){
	var self = this;
	self.contacts = [
	{
		"position": "CEO",
		"fname": "Scott",
		"lname": "Goldstein"
	},
	{
		"position": "Founder",
		"fname": "Leon",
		"lname": "Keylin"
	},
	{
		"position": "President",
		"fname": "John",
		"lname": "Borders"
	}];

	self.userSelection = self.contacts[0];

	self.isEditing = false;

	self.user={
		"fname": "Leon",
		"lname": "Keylin",
		"email": "lKeylin@jefferies.com"
	};

	self.userEdit = angular.copy(self.user);

	self.saveUser = function(){
		self.user = angular.copy(self.userEdit);
		self.isNotEdit();
	};

	self.isEdit = function(){
		self.isEditing = true;
	};
	self.isNotEdit = function(){
		self.isEditing = false;
	};

});