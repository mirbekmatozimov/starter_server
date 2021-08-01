const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config(); //it return some object and than we run this method

const app = express();
const port = process.env.PORT || 5000;


//this middleware thing is to kind of run some plugins each time server runs
app.use(cors());
app.use(express.json()); //it is an analogy to bodyParser

app.listen(port, ()=>{
	console.log('Server is running on port: ${port}');
});


