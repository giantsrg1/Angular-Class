(function(app){

	var ACCOUNT_GROUPS = {
		kGroupOne: "George_Group",
		kGroupTwo: "Victor_Group",
		kGroupThree: "Scott_Group",
		kGroupFour: "Vishnu_Group"
	};

	var ACCOUNTS = {};

	ACCOUNTS[ACCOUNT_GROUP.kGroupOne] = {
		items: []
	}
	ACCOUNTS[ACCOUNT_GROUP.kGroupTwo] = {
		items: []
	}
	ACCOUNTS[ACCOUNT_GROUP.kGroupThree] = {
		items: []
	}
	ACCOUNTS[ACCOUNT_GROUP.kGroupFour] = {
		items: []
	}

	app.value("ACCOUNT_GROUPS", ACCOUNT_GROUPS);
	app.value("ACCOUNTS", ACCOUNTS)

	app.value("FOLDERS", [{
		name: "Folder 1",
		items: [{
			name: "item1",
			name: "item2",
			name: "item3"
		}]
	},{
		name: "Folder 2",
		items: [{
			name: "item4",
			name: "item5",
			name: "item6"
		}]
	}])
})(angular.module("lesson04_services", []))