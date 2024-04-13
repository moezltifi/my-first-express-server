const express = require("express");

const app = express();

app.get("/", function(req, res){
    res.send("<h1>moez<h1><h1>moez<h1>")
});
app.get("/about", function(req, res){
    res.send("<h1>I am Moez I love code <h1>")
});

app.listen(3000, function(){
    console.log("Server started on port 3000");
})