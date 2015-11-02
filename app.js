var  express = require("express"),
	 app = express(),
	 bodyParser = require("body-parser"),
	 methodOverride = require("method-override");
	 mongoose = require("mongoose");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(methodOverride());

var router = express.Router();

router.get('/', function(req, res){
	res.send("Hola mndo!");
});

// Esto lo metí yo, cuando entra el get con /manola, el res es lo que puse en el res.send()
router.get('/manola', function(req, res){
	res.send("Interpretando?")
});

// Otro ejemplo:
router.get('/site', function(req, res){
	res.send("Candonga!!!!");
});

app.use(router);

app.listen(3000, function(){
	console.log("Node corre en http://localhost:3000");
});