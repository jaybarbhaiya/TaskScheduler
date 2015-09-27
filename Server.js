var express     =   require("express");
var app         =   express();
var bodyParser  =   require("body-parser");
var router      =   express.Router();
var mongoOp     =   require("./models/mongo");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({"extended" : false}));

router.get("/",function(req,res){
    res.json({"error" : false,"message" : "Hello World"});
});

router.route("/users").get(function (req, res) {
	var response = {};
	mongoOp.find({}, function (err, data) {
		if(err) {
			response = {"error" : true, "message" : "Error in fetching the data"};
		} else {
			response = {"error" : false, "message" : data};
		}
		res.json(response);
	});
});

app.use('/',router);

app.listen(3000);
console.log("Listening to PORT 3000");