/**https://codeforgeek.com/file-uploads-using-node-js/ */
var express = require("express");
var fs = require("fs");
var multer = require("multer");
var axios = require("axios");
var cors = require("cors");

var app = express();
app.use(express.urlencoded({ extended: true }));

// parse application/json
app.use(express.json());
var corsOptions = {
  origin: "http://localhost:808",
  // origin: "*",
  optionsSuccessStatus: 200,
};
app.use(cors(corsOptions));
var storage = multer.diskStorage({
  destination: function (req, file, callback) {
    console.log("file in destination", file);
    callback(null, "./uploads/files");
  },
  filename: function (req, file, callback) {
    console.log("file in filename", file);
    callback(null, file.fieldname + "-" + Date.now());
  },
});
var upload = multer({ storage: storage }).single("filepond");
// g1
app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});
// g2
app.get("/file", function (req, res) {
  res.sendFile(__dirname + "/file.html");
});
// g3
app.get("/file.js", function (req, res) {
  res.sendFile(__dirname + "/file.js");
});
//post1
app.post("/hidden", function (req, res) {
  res.end("form with hidden value submitted");
});
// post5
app.post("/api/image", function (req, res) {
  console.log("request arrived");
  console.log(req);
  upload(req, res, function (err) {
    if (err) {
      console.log(err);
      return res.end("Error uploading file.");
    }
    res.end("File is uploaded");
  });
});
//post2
app.post("/api/file", function (req, res) {
  console.log("request arrived");
  console.log(req);
  upload(req, res, function (err) {
    if (err) {
      console.log(err);
      return res.end("Error uploading file.");
    }
    res.end("File is uploaded");
  });
});
//g4
app.get("/api/detail", async function (req, res) {
  console.log(req);
  console.log("got detail request");
  const { ControlA, ControlB } = req.query;
  // try {
  //   const response = await axios.get("/api/detail1");
  //   console.log("response of detail 1", response);
  // } catch (error) {
  //   console.log("got error while fetching detail1");
  // }

  console.log(`ControlA = ${ControlA} and ControlB = ${ControlB}`);
  res.end("submitted details successfully");
});

//g5
app.get("/api/detail1", function (req, res) {
  // console.log(req)
  console.log("got detail 1 request");
  const { ControlA, ControlB } = req.query;
  console.log(`ControlA = ${ControlA} and ControlB = ${ControlB}`);
  res.end("submitted details successfully");
});

// post3
/***
 * using this api to test for cors specifics
 */
app.post("/api/detail", function (req, res) {
  console.log(req);
  const { ControlA, ControlB } = req.body;
  console.log(`ControlA = ${ControlA} and ControlB = ${ControlB}`);
  res.end("submitted details successfully");
});
// post4
app.post("/app/image", function (req, res) {
  var buf = new Buffer(req.body.base64String, "base64");
  fs.writeFile("uploads/files/image.png", buf, function (err) {
    if (err) throw err;
    console.log("Saved!");
  });
  res.end("done");
});

app.listen(3005, function () {
  console.log("Working on port 3005");
});
