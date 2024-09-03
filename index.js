const express = require("express");
const app = express();
const port = 3000;

// set the view engine to ejs
app.set('view engine', 'ejs');

// use res.render to load up an ejs view file
// index page
app.get('/', function(req, res) {
  res.render('index');
});

app.listen(port, () => {
  console.log(`Server listening on port: ${port}.`);
});
