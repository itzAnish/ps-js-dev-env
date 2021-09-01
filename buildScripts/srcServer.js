import express from "express";
import path from "path";
import open from "open";

import webpack from "webpack";
import config from "../webpack.config.dev"

/* eslint-disable no-console */
const port = 3000;
const app = express();
const compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler,{
  publicPath: config.output.publicPath
}));

app.get('/', function(req, res){
  res.sendFile(path.join(__dirname, '../src/index.html'))
});

app.get('/users', function(req, res){
  res.json([
    {"id":1,"firstName":"Coder1","lastName":"Sing1", "email": "a1@xyz.com"},
    {"id":2,"firstName":"Coder2","lastName":"Sing2", "email": "a2@xyz.com"},
    {"id":3,"firstName":"Coder3","lastName":"Sing3", "email": "a3@xyz.com"},
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
