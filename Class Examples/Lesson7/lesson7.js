(function(app){
	app.config(function(UserPermissionsProvider){
		var userType = "admin";

		var permissions;
		if (userType === "admin"){
			permissions = ["Read", "Write","Delete"];
		}else{
			permissions = ["Read"];
		}
		UserPermissionsProvider.setPermission(permissions);
	})

	app.provider("UserPermissions", function(){
		var self = this;
		var permissions;

		self.setPermission = function(myPermissions){
			permissions = myPermissions;
		};

		self.$get = function() {
			return {
				getPermissions: function(){
					return angular.copy(permissions);
				}
			};
		};

	})

	app.controller("mainCtrl", function(UserPermissions){
		var self = this;

		self.permissions = UserPermissions.getPermissions();
	})

})(angular.module("lesson7App", []))