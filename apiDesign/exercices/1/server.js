//(function(module, exports, __dirname, console ){

var express = require("express")
var app = express();

var jsonData = {count: null, message: "hey"}

app.get("/", function(req, res){
	res.sendFile(__dirname+'/index.html', function(err){
		if (err) {
			res.status(500).send(err)
		}
	})
})

app.get("/data", function(req, res){
	res.json(jsonData)
})

var port = 3000

app.listen(port, function(){
	console.log("listening on http://localhost:", port)
})

//})();