const express = require("express");
const bodyParser = require("body-parser");


const app = express();
var items =[];
app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));
app.get("/",function(req,res){
  var today = new Date();

  var options ={
    weekday: "long",
    day: "numeric",
    month: "long"
  };

  var day = today.toLocaleDateString("en-IN",options);

res.render("list",{kindofDay:day,newitem:items});
});

app.post("/",function(req,res){
  var name = req.body.item;
  items.push(name);
res.redirect("/");
});


app.listen(3000,function(){
  console.log("The Server is working");
});
