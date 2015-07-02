(function  (app) {

	app.directive("sgContactCard", function(){
		return {
  			templateUrl: 'app/partials/home/contactCard.html',
  			controller: 'sgContactCardController as ctrl',
  			restrict: 'EA',
  			bindToController : true,
  			scope: {
  				contactInfo : "=",
  				onConfirmedDelete: "&"
  			}
  		} 
	});

  app.controller('HomeCtrlMain', function(contactService) {
		var self = this;

		self.contactList = contactService.contactList;
		
    self.deleteContact = function(value){
      contactService.deleteContact(value);
		};

  });

  app.controller("sgContactCardController", function(){
  		var self = this;

  		self.delete = false;

  		self.deleteContact = function(){
  			self.delete = true;
  		};

  		self.cancelDelete = function(){
  			self.delete = false;
  		};

      self.confirmedDelete = function(){
        self.onConfirmedDelete({user : self.contactInfo});
      };
  });
    
})(angular.module('GDHome', []));