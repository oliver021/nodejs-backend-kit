import { Document, Model, model, Schema } from 'mongoose'

// create a new mongoose schema for our user model
export interface IProductInfo{
  id: string,
    name: string,
    stock: number,
    price: number,
    stdPrice: number,
    description: string,
    imageUrl: string,
    category: string,
    tags: string[],
    created: Date,
    updated: Date,
    deleted: Date,
    isDeleted: boolean
}

// create a interface for our product model
export interface IProduct extends Document {
    id: string,
    name: string,
    stock: number,
    price: number,
    stdPrice: number,
    description: string,
    imageUrl: string,
    category: string,
    tags: string[],
    created: Date,
    updated: Date,
    deleted: Date,
    isDeleted: boolean
}

// create schema for our product model
// specify the properties of our product model
export let ProductSchema: Schema = new Schema({
    id: {
        type: Schema.Types.String,
        required: true,
        unique: true,
        default: () => {
            return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
        }
    },
    name: {
        type: Schema.Types.String,
        required: true,
    },
    stock: {
        type: Schema.Types.Number,
        required: true,
    },
    price: {
        type: Schema.Types.Number,
        required: true,
    },
    stdPrice: {
        type: Schema.Types.Number,
        required: true,
    },
    description: {
        type: Schema.Types.String,
        required: false,
        default: "",
    },
    imageUrl: {
        type: Schema.Types.String,
        required: false,
        default: "/img/default.png",
    },
    category: {
        type: Schema.Types.String,
        required: true,
    },
    tags: {
        type: [Schema.Types.String],
        required: false,
        default: [],
    },
    created: {
        type: Schema.Types.String,
        default: Date.now(),
    },
    updated: {
        type: Schema.Types.String,
        default: Date.now(),
    },
    deleted: {
        type: Schema.Types.String,
        default: Date.now(),
    }
});

// create a virtual for our product's URL
ProductSchema.virtual('url').get(function(this: IProduct){
    return '/product/' + this.id;
});

// create a virtual to determine if the product is deleted
ProductSchema.virtual('isDeleted').get(function(this: IProduct){
    return this.deleted != null;
});

export const Product: Model<IProduct> = model<IProduct>(
    'Product',
    ProductSchema,
  )