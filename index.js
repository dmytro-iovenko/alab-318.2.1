const express = require("express");
const app = express();
const port = 3000;

// set the view engine to ejs
app.set('view engine', 'ejs');

app.listen(port, () => {
  console.log(`Server listening on port: ${port}.`);
});
