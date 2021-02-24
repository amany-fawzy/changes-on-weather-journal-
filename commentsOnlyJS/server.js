// Setup empty JS object to act as endpoint for all routes
const projectData = {};
// Express to run server and routes
const express = require('express');
// Start up an instance of app
const app = express();
/* Dependencies */
/* Middleware*/
const bodyParser = require('body-parser');
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());
// Initialize the main project folder
app.use(express.static('website'));
// Spin up the server
const port= 8000;
const server = app.listen(port, listening);

// Callback to debug
function listening (){
    console.log('server is running');
    console.log(`running on localhost: ${port}`);
};
// Initialize all route with a callback function

app.get('/all',sendData);
// Callback function to complete GET '/all'

function sendData(req,res){
    res.send(projectData);
};

 
// Post Route

const data=[];
app.post('/data',addData);
function addData(req,res){
    //let data=req.body;
    data.push(req.body);
    console.log(data);
}

let dataPost = req.body;
 projectData.zip=dataPost.zip;
 projectData.feeling=dataPost.feeling;
 projectData.date=dataPost.date;
 projectData.temperature=dataPost.temperature;



  