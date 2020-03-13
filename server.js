//requiring express
const express = require('express');
//requie path
const path = require('path');

//placing the express function in a variable 

const app = express();

//serving up the static files (from React)
    //Once the React file is made, you will create a path that will 
        //render the client build folder
            //utilizing express
app.use(express.static(path.join(__dirname,'client/build')));


