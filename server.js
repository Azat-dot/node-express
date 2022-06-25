const { response } = require("express");
const express = require("express");

const app = express();

app.get("/", function(req, res) {
    res.send("<h1> Hello, world! </h1>")
});

app.get('/contact', function(req, res) {
    res.send("<a>azatsafaryan@mail.ru</a>")
})

app.get('/about', function(req, res) {
 res.send("<h1> Azat Safarian </h1>  <h2> Junior frontend developer</h2>")
})
app.get('/hobbis', function(req, res) {
    res.send("<ul><li>run</li><li>read</li></ul>")
})
app.listen(3000, function(){
    console.log("Server startedon port 3000 ");
})