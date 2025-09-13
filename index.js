const express=require('express');
const app=express();
const port=8000;
const path=require('path');

app.use(express.urlencoded({ extended: true }));
// app.use(express.json());



app.use('/',require('./routes'));

app.set('view engine','ejs');
app.set('views',path.join(__dirname,"/views"));
app.use(express.static('assets'));
const db=require("./config/mongoose");


app.listen(port,(err)=>{
    if(err){
        console.log("Error occurecd while launching the server", err);
    }

    console.log("Server is up and running on port: ", port);
})

