//bringing in burgers
var burgers = require("./../models/burger.js")
//requiring express & methodOverride
var express = require('express');
var methodOverride = require('method-override');

var router = express.Router();
router.use(methodOverride("_method"));

router.get("/", function(req, res){
  //two arrays to hold the burgers in two arrays, all burgers & eater burgers
  var Burgs = [];
  var eatenBurgs = [];
  //function to handle the filling of the two arrays
  burgers.all(function(res){
		for(var i = 0; i < res.length; i++){
			if(res[i].devoured === 0){
        //pushing the burgers not devoured into the all burgers array
				allBurgs.push(res[i]);
			}
			else{
        //pushing the burgers that are not-not devoured (thus devoured) into the eatenburgs array
				eatenBurgs.push(res[i]);
			}
		}
    //rendering the data of the two arrays on the index route
		res.render('index', {
			burgers: Burgs,
			eatenBurgers: eatenBurgs
		});
	})
});

//adding a new eaten burger
// router.put("/:newBurger", function(req, res){
//   var burgerToEat = req.params.newBurger;
// 	burgers.update(burgerToEat);
// 	res.redirect('/');
// });

//adding a new burger
router.post("/", function(req, res){
    var newBurg = req.body.newBurger;
    burgers.insert(newBurg);
    res.redirect("/");
});


module.exports = router;
