//bringing in orm
var orm = require("./../config/orm.js");

//calling orm functions
var burgers = {
	all: function(seeAll){
		orm.selectAll(function(data){
			seeAll(data);
		});
	},
	insert: function(newBurger){
		orm.insertOne(newburger);
	},
	update: function(eatOne){
		orm.updateOne(eatOne);
	}
};

module.exports = burgers;
