var express = require('express');
var app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/api', (req, res) => {
  res.send('on');
});
app.listen(3007, function () {
  console.log('listening on port 3007');
});
