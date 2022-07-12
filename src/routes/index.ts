import express from 'express';
import { RouteData } from './data'
import { RouteSetControllers } from './controllers'

// setup express app router
export function RouteSetIndex(app: express.Application) {

    // sample route handler
    // it will be called when the user navigates to /
    // the route handler will send a response to the user
    // the response will be sent as a string: 'Well done!'
    app.get('/', (_req, res) => {
        res.send('Well done!');
    });

    // sample route handler
    // it will be called when the user navigates to /json
    // the route handler will send a response to the user
    // the response will be sent as a json object: { message: 'Well done!' }
    app.get('/json', (_req, res) => {
        res.json({ message: 'Well done!' });
    });

    // sample controller setup
    // from './controllers.ts'
    // this file exports a function that will setup the controllers routes
    RouteSetControllers(app);

    // sample data setup
    // from './data.ts'
    // this file exports a function that will setup the data routes
    RouteData(app);
}