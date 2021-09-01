import express from "express";
import path from "path";
import open from "open";
import compression from "compression";

/* eslint-disable no-console */
const port = 3000;
const app = express();

app.use(compression());
app.use(express.static('dist'));

app.get('/', function(req, res){
  res.sendFile(path.join(__dirname, '../dist/index.html'))
});

app.get('/users', function(req, res){
  res.json([
    {"id":1,"firstName":"CoderP1","lastName":"Sing1", "email": "a1@xyz.com"},
    {"id":2,"firstName":"CoderP2","lastName":"Sing2", "email": "a2@xyz.com"},
    {"id":3,"firstName":"CoderP3","lastName":"Sing3", "email": "a3@xyz.com"},
  ])
});

app.listen(port, function(err){
  if (err){
    console.log("Error: " + err);
  }
  else {
    open('http://localhost:' + port);
  }
});
