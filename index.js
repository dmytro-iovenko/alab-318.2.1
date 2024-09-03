const express = require("express");
const app = express();
const port = 3000;

/** Part 1: Routes, Templates, and Views */

// set the view engine to ejs
app.set("view engine", "ejs");

// use res.render to load up an ejs view file

// index page
app.get("/", function (req, res) {
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
  };
  res.render("index", options);
});

// about page
app.get("/about", function (req, res) {
  const options = {
    title: "About Page",
    content:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. \
      Reprehenderit eveniet quod architecto ab ex fugit repellat consequuntur \
      repudiandae, nisi ratione voluptas et veniam. Alias aliquam neque \
      pariatur inventore omnis dicta?",
  };
  res.render("about", options);
});

app.listen(port, () => {
  console.log(`Server listening on port: ${port}.`);
});
