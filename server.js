var express = require("express");
var path = require("path");
var app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.get("/", function(req, res){
    //console.log("Got request: ", req.method, "\nHeaders: ", JSON.stringify(req.headers));
    res.sendFile(path.join(__dirname, "/index.html")); 
});

app.get("/:data", function(req, res){
    var data = req.params.data;
    var date = parseInt(data) ? new Date(parseInt(data)) : new Date(data);
    res.set("Content-Type", "application/json");
    if(date.getTime()){
        res.send({"unix": date.getTime(), "natural": date.toDateString()});
    }else{
        res.send({"unix": null, "natural": null});
    }
});

app.listen(process.env.PORT || 8080);