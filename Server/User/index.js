const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');

const router = express.Router();
const pool = require('../utils/connection');


//get user
router.get('/', (req,res) => {
    pool.getConnection((err,connection) =>{
      if(err) throw err;
      console.log("Connection is created successfull\y...");
      connection.release();
      connection.query("SELECT * FROM TBL_USER",(err,result) => {
        if(err) throw err;
        res.send(result);
      })
    })
})

//get user by id
router.get('/:id', (req,res) => {
  pool.getConnection((err,connection) =>{
    if(err) throw err;
    console.log("Connection is created successfull\y...");
    connection.release();
    connection.query("SELECT * FROM TBL_USER WHERE id = ?",[req.params.id],(err,result) => {
      if(err) throw err;
      console.log(result)
      if (result) {
        res.status(500);
      }
      res.status(200).send(result);
    })
  })
})

//delete user by id
router.delete('/:id', (req,res) => {
  console.log("Request is comming in delete part");
  pool.getConnection((err,connection) =>{
    if(err) throw err;
    console.log("Connection is created successfull\y...");
    connection.release();
    connection.query("DELETE FROM TBL_USER WHERE id = ?",[req.params.id],(err,result) => {
      if(err) throw err;
      res.send(result);
    })
  })
})
//add user 
router.post('/', (req,res) => {
  //console.log("eewrhwkurwrukw")
  pool.getConnection((err,connection) => {
    if(err) throw err
    console.log(`Database is connect as id: `+connection.threadId);
    const params = req.body;
    connection.query("INSERT INTO TBL_USER SET ?",params,(err,row) =>{
    //connection.query('insert into tbl_clients(client_code,company_name,address,contact_person_name,contact_person_email,client_type,client_category,doj) values('CLI1001','Assert','GZB','Shivhom','shivhot8@gmail.com','B2B','Non',now());',[req.params.id],(err,rows) => {
      connection.release() //return the connection to pool
      if(err) throw err;
      res.send(`The Client with ClientCode: ${params.fname} has been added.`);

    })
  })
})

//update User
//Update Client
router.put('/', (req,res) => {
  pool.getConnection((err,connection) => {
    if(err) throw err
    console.log(`Database is connect as id: `+connection.threadId);
    //const params = req.body;
    const {id,fname,lname,email,password,gender,department,message} = req.body;
    connection.query("UPDATE TBL_USER SET fname = ?, lname = ?, email = ?, password = ?, gender = ?, department = ?, message = ? WHERE id = ?",[fname,lname,email,password,gender,department,message,id],(err,row) =>{
      connection.release() //return the connection to pool
      if(err) throw err;
      res.send(`The Client with ClientCode: ${fname} has been Updated.`);

    })
  })
})


router.get("/", (req,res) => {
  res.send("hiii")
})

module.exports = router;