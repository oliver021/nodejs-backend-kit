import express from 'express';
import { WheatherController } from '../controllers/WheatherController';
import { DomainSearchController } from '../controllers/DomainSearchController';
import { MVCContext } from './MVCContext';

// setup express app router controllers
export function RouteSetControllers(app: express.Application) {
   
    // wheather controller to /wheather/:city
    app.get('/demo/wheather', async (req, res) => {
        const context = new MVCContext(req, res);
        let ctrl = new WheatherController();
        await ctrl.getWheather(context);
    });

    app.get('/demo/domain-search', async (req, res) => {
        const context = new MVCContext(req, res);
        let ctrl = new DomainSearchController();
        await ctrl.search(context);
    });
    
}
