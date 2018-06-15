//(function(module, exports, __dirname, console ){

var express = require("express")
var app = express();

var jsonData = {count: null, message: "hey"}

var fs = require("fs")

app.get("/", function(req, res){
	fs.readFile('index.html', function(err, buffer){
		var html = buffer.toString();
		res.setHeader("Content-Type", "text/html")
		res.send(html)
	})
//	res.sendFile(__dirname+'/index.html', function(err){
//		if (err) {
//			res.status(500).send(err)
//		}
//	})
})

app.get("/data", function(req, res){
	res.json(jsonData)
})

var port = 3000

app.listen(port, function(){
	console.log("listening on http://localhost:", port)
})

//})();