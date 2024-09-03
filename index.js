const express = require("express");
const app = express();
const port = 3000;

/** Part 3: Exploring Response Options */

// serve static files from the static directory
app.use(express.static("./static"));

/** Part 2: Middleware */

// A middleware function to display the timestamp of your request in the browser
const requestTime = function (req, res, next) {
  req.requestTime = Date.now();
  next();
};

// A middleware function to convert a timestamp to various formats
const convertTimestamp = function (req, res, next) {
  req.requestISOTime = new Date(req.requestTime).toISOString();
  req.requestUTCTime = new Date(req.requestTime).toUTCString();
  req.requestDateTime = new Date(req.requestTime).toDateString();
  next();
};

app.use(requestTime, convertTimestamp);

/** Part 1: Routes, Templates, and Views */

// set the view engine to ejs
app.set("view engine", "ejs");

// use res.render to load up an ejs view file

// index page
app.get("/", function (req, res) {
  console.log(req.requestTime);
  const options = {
    title: "Home Page",
    content:
      "Here, we've created a basic template engine using <code>app.engine()</code> \
      and the <code>fs</code> module, then used <code>res.render</code> to \
      render this page using custom content within the template.<br><br> \
      Generally, you won't want to create your own view engines, \
      but it important to understand how they work behind the scenes. \
      For a look at some popular view engines, check out the documentation for \
      <a href='https://pugjs.org/api/getting-started.html'>Pug</a>, \
      <a href='https://www.npmjs.com/package/mustache'>Mustache</a>, or \
      <a href='https://www.npmjs.com/package/ejs'>EJS</a>. \
      More complete front-end libraries like React, Angular, and Vue \
      also have Express integrations.",
    requestTime: req.requestDateTime,
    image: "as6.jpg",
  };
  res.render("index", options);
});

// about page
app.get("/about", function (req, res) {
  console.log(req.requestTime);
  const options = {
    title: "About Page",
    content:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. \
      Reprehenderit eveniet quod architecto ab ex fugit repellat consequuntur \
      repudiandae, nisi ratione voluptas et veniam. Alias aliquam neque \
      pariatur inventore omnis dicta?",
    requestTime: req.requestUTCTime,
  };
  res.render("about", options);
});

app.listen(port, () => {
  console.log(`Server listening on port: ${port}.`);
});
