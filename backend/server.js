const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose'); //thing that helps us to connect to mongodb

require('dotenv').config(); //it return some object and than we run this method

const app = express();
const port = process.env.PORT || 5000;

//this middleware thing is to kind of run some plugins each time server runs
app.use(cors());
app.use(express.json()); //it is an analogy to bodyParser

//connection to mongodb with mongoose
const uri = process.env.ATLAS_URI; //saving data in dotenv and then set it to var
mongoose.connect(uri, {useNewUrlParser: true,useCreateIndex: true, useUnifiedTopology: true});
const connection = mongoose.connection;
connection.once('open', ()=>{
	console.log('MongoDB connection established successfully');
})
//end connection

app.listen(port, ()=>{
	console.log('Server is running on port: ${port}');
});


