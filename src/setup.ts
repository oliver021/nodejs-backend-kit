// import express
import express from 'express';

// set statics folder
import path from 'path';

// import monogoose
import { connect as connectDb } from 'mongoose';

// function setup express app stuff
// this function is called from index.ts
// this function configure basic express app middleware
// like static files, body parser, etc
export function SetupExpressApp(app: express.Application) {
    // set the static folder
    app.use(express.static(path.join(__dirname, 'public')));

    // set body parser
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));

    // for every request, brand node.js app with a custom header
    app.use((_req, res, next) => {
        res.setHeader('X-Powered-By', 'Node.js ' + process.version + ' Express.js');
        next();
    });

    // ignore favicon requests by middleware
    app.use((_req, res, next) => {
        if (_req.originalUrl === '/favicon.ico') {
            res.status(204);
            res.end();
        } else {
            next();
        }
    });

    // connect to mongoose targeted database
    if (process.env.USE_DB) {
          // connections from enviroment variable
          connectDb(process.env.DB_CONNECTION_STRING as string, {
            // configure mongoose to use create database if it doesn't exist
            autoCreate: true
          })
          .catch(() => {
            console.log('Error connecting to mongo')
          })
      }
}
