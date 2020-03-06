/**https://codeforgeek.com/file-uploads-using-node-js/ */
var express = require("express");
var fs = require('fs');
var bodyParser = require('body-parser')
var multer = require('multer');
var cors = require('cors');

var app = express();
app.use(bodyParser.urlencoded({extended: false}))

// parse application/json
app.use(bodyParser.json())
var corsOptions = {
	origin: '*',
	optionsSuccessStatus: 200,
}
app.use(cors(corsOptions))
var storage = multer.diskStorage({
	destination: function(req, file, callback) {
		console.log('file in destination', file);
		callback(null, './uploads/files');
	},
	/**commented to remove double upload, will need to review */
	// filename: function(req, file, callback) {
	// 	console.log('file in filename', file);
	// 	callback(null, file.fieldname + '-' + Date.now());
	// }
});
var upload = multer({storage: storage}).single('filepond');

app.get('/', function(req, res) {
	res.sendFile(__dirname + "/index.html");
});
app.get('/file', function(req, res) {
	res.sendFile(__dirname + "/file.html");
});
app.get('/file.js', function(req, res) {
	res.sendFile(__dirname + "/file.js");
});

app.post('/api/photo', function(req, res) {
	console.log('request arrived');
	console.log(req);
	upload(req, res, function(err) {
		if(err) {
			console.log(err);
			return res.end("Error uploading file.");
		}
		res.end("File is uploaded");
	});
});

app.post('/app/64', function(req, res) {
	var buf = new Buffer(req.body.base64String, 'base64');
	fs.writeFile('image.png', buf, function(err) {
		if(err) throw err;
		console.log('Saved!');
	});
})

app.listen(3004, function() {
	console.log("Working on port 3004");
});