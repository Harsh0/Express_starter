//Start Coding
var express = require('express');
var app = express();

app.get('/myApp',function(req,res){
  //console.log(Object.keys(req));
  res.send("<h1>Hello from Express Get</h1>");
});

app.post('/myApp',function(req,res){
  //console.log(Object.keys(req));
  res.send("<h1>Hello from Express Post</h1>");
});

app.delete('/myApp',function(req,res){
 //console.log(req);
  res.send("<h1>Hello from Express Delete</h1>");
});

app.put('/myApp',function(req,res){
 //console.log(req);
  res.send("<h1>Hello from Express Put</h1>");
});
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  res.send("Page Not Found");
  next(err);
});

app.listen('8080',function(err){
  if(err){
    console.log("Eroor while starting server");
  }
console.log("Server Started and listening for request.....");
});
