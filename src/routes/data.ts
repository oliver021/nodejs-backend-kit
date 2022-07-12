import express from 'express';
import { crud } from '../helpers/crud';

// import the models
import {User} from '../models/user.model';
import { Product } from '../models/product.model';

// setup express app router controllers
export function RouteData(app: express.Application) {
     crud('users', app, User);   
     crud('products', app, Product);   
}