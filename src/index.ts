import express from 'express';

// set enviroment variables
require("dotenv").config(); 

// setup stuff for express app
import { SetupExpressApp } from './setup';
import { RouteSetIndex } from './routes/index';

// create express app instance
const app = express();

// setup express app router
SetupExpressApp(app);
RouteSetIndex(app);

// start the server by listening on port 3000
// you can change the port by setting the PORT environment variable
app.listen(process.env.SERVER_PORT, () => {
    console.log('The application is listening on port 3000!');
})