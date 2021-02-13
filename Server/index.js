const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const cors = require('cors');

//local import
const user = require('./User/index');

const app = express();
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

//enable Cross-Origin Resource Sharing
app.use(cors())

const port = process.env.port || 5000; 

console.log("Request is comming on server")

//Use User Routers
app.use('/User',user);
app.listen(port,() => {
  console.log(`The Serve is running on the port: ${port}.`);
})