//bringing in connection from connection.js
var connection = require("./connection.js");

var orm = {
  //retrieving all burgers
	selectAll: function(seeAll){
		connection.query('SELECT * FROM burgers', function(err, data){
			if(err){
				console.log('Error: ' + err);
			}
			seeAll(data);
		});
	},
  //inserting a burger into the table
	insertOne: function(newBurger){
		connection.query('INSERT INTO burgers (burger_name, devoured) VALUES (?, false)', newBurger, function(err){
			if(err){
				console.log('Error: ' +  err);
			}
		});
	},
  //updating a burger from not eaten (devoured = false) to eaten (devoured = true)
	updateOne: function(eatOne){
		connection.query('UPDATE burgers SET devoured = true WHERE burger_name = ?', eatOne, function(err){
			if(err){
				console.log('Error: ' + err);
			}
		});
	}
};
//exporting orm
module.exports = orm;
