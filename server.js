/**https://codeforgeek.com/file-uploads-using-node-js/ */
var express = require("express");
var multer = require('multer');
var cors = require('cors');

var corsOptions = {
	origin: '*',
	optionsSuccessStatus: 200,
}
var app = express();
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

app.listen(3004, function() {
	console.log("Working on port 3004");
});