var mod = angular.module("HW1", []);

mod.controller("mainController", function(){
	var self = this;
	
	self.checkboxValue = true;

	self.mainList = {"Folder1":"#00FF00","Red":"#FF0000","Blue":"#0000FF"};

	self.themesList = [{
		"name": "Blue",
		"theme": "themeBlue", 
		"shade1": "shade1Blue", 
		"shade2": "shade2Blue"
	},{
		"name": "Red",
		"theme": "themeRed", 
		"shade1": "shade1Red", 
		"shade2": "shade2Red"
	},{
		"name": "Green",
		"theme": "themeGreen", 
		"shade1": "shade1Green", 
		"shade2": "shade2Green"
	},{
		"name": "None",
		"theme": "themeNone", 
		"shade1": "shade1None", 
		"shade2": "shade2None",
	}];

	self.themeSelection = self.themesList[0];

	self.mainList = [{
		"name": "folder1",
		"files": ["file1","file2","file3"]
	},{
		"name": "folder2",
		"files": ["file4","file5","file6"]
	},{
		"name": "folder3",
		"files": ["file7","file8","file9"]
	}];

	self.placeholder = "Lorem ipsum dolor sit amet, cu pro error scaevola, cu usu ferri quando liberavisse. Ne vix epicuri urbanitas, vix modus vocent omittantur no. Ei nec odio dolorum constituam, per ex bonorum docendi, vis paulo offendit te. Mutat legere mea ex, qui et tractatos dissentiet, vim liber albucius volutpat ad. Ex eos prompta maluisset, mea modus oratio diceret at. Posidonium accommodare an vim, ea sed iriure alienum. No tincidunt repudiandae cum. At eum deleniti suavitate. Ei reque assueverit temporibus vis, nec no scaevola legendos reprimique. Qui cu mazim dolorem praesent, ad labitur appareat explicari his, ius te amet evertitur scribentur. Porro discere te pri. Ea nulla oblique consequat mea, posse suscipit salutandi te pro. Vide scribentur dissentiet sea at. Eos eu quando soleat sadipscing, in nam dolores petentium, meis porro nam ad.Epicurei explicari qui in, aperiri impedit omnesque vel te, cu his equidem volutpat. Hinc mazim vel ut, delicata mediocritatem mel te. Sed labitur fuisset id, qui erant dolores mediocritatem ex, eius insolens pertinacia duo id. Quo mundi dolores vivendum ex, vel in accommodare consequuntur. Te ullum nominati explicari usu, omnium maiestatis vel ei. In labores accumsan verterem per. Et pro veri solum, expetenda consequat usu ne. Ei qui ancillae delectus, eu mel soleat causae atomorum. Oporteat percipitur qui ne. Minim antiopam scribentur in his." 

});