import { Application } from 'express';
import { Model } from 'mongoose';

/**
 * @function crud
 * @description Create, Read, Update, Delete for any MongoDb Document, for every CRUD operation
 * create, read, update, delete in routes
 * @param {Model<Document>} model
 */
export function crud<TModel>(prefix: string, app: Application, model: Model<TModel>): void {
    app.get(`/${prefix}`, async (_req, res) => {
        const docs = await model.find();
        res.json(docs);
    });
    
    app.get(`/${prefix}/:id`, async (req, res) => {
        const doc = await model.findById(req.params.id);
        res.json(doc);
    });

    app.post(`/${prefix}`, async (req, res) => {
        const doc = await model.create(req.body);
        res.json(doc);
    });

    app.put(`/${prefix}/:id`, async (req, res) => {
        const doc = await model.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(doc);
    });

    app.delete(`/${prefix}/:id`, async (req, res) => {
        const doc = await model.findByIdAndDelete(req.params.id);
        res.json(doc);
    });
}