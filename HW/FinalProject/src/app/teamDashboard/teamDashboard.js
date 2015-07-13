(function() {
  'use strict';

  angular
    .module('template')
    .controller('teamController', teamController);

  /** @ngInject */
  function teamController(server) {
    var self = this;

    self.teamHeaders = ["Team"]

    server.getArray({link: "/assets/teamProfile.json"}).$promise.then(function(data){
      self.teamsData = data;
    });

    self.changeListOfTeams = function(){
      self.listOfTeams = [];
      self.listOfTeams.push({"Team":self.teamSelect.Team});
    }

    self.onClick = function(value){
      self.playerHeaders = ["Name", "Position"];
      self.listOfPlayers = {};

      for(var i = 0; i < self.teamsData.length; i++){
        if(self.teamsData[i].Team === value){
          self.listOfPlayers = self.teamsData[i].Players;
        }
      }
    }
  }
})();
