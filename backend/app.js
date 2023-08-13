const express = require('express');
const mongoose = require ('mongoose');
require('dotenv').config();

const app= express();

const routes = require("./routes/route");
const cors= require('cors');



const PORT=process.env.PORT
app.use(express.json())
app.use(express.urlencoded({extended: true}));
app.use(cors());

mongoose.connect(process.env.MONGO_URI)
.then(()=>console.log("Connected to mongo db"))
.catch((err)=> console.log("error in connection"))


app.use(routes)

app.listen(PORT,()=>{
    console.log(`Listnening to to port number ${PORT}`);
})