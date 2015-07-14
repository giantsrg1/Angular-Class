(function() {
  'use strict';

  angular
    .module('template')
    .controller('UserController', UserController);

  /** @ngInject */
  function UserController(server) {
    var self = this;

    self.headers = ["Sport", "Team"];
    self.headers2 = ["Name"];

    self.getData = function(){
      server.get({link: "/assets/userProfile.json"}).$promise.then(function(data){
        self.profile = data;
        self.userTitle = "Personal Info - " + self.profile.username;
        return data;
      });  
    };

    self.getData();
  }
})();
