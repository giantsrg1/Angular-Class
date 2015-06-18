(function(app){
  app.factory("MyPeople", function($resource){
    return $resource("/app/json/sampleData.json", null, {
      get: {
        method:"GET",
        isArray: true
      }
    });
  });

  app.factory("MyFriends", function($resource){
    return $resource("/app/json/:userId/profile.json", {userid : "@userid"}, {
      get: {
        method:"GET",
        isArray: true
      }
    });
  });

  app.controller("PeopleController", function(MyPeople, MyFriends){
	var self = this;

	self.people = {};

	self.getPeople = function(){
		MyPeople.get().$promise
		.then(function onSuccess(response){
      response.buttonPressed = false;
			self.people = response;
		});
	};

	self.getPeople();

  self.getFriends = function(person){
    MyFriends.get({userId: person._id}).$promise
    .then(function onSuccess(response){
      person.friends = response;
      person.buttonPressed = true;
    });
  };
}); 

})(angular.module("Lesson9"))