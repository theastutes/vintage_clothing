// src/models/Product.ts
import mongoose, { Document, Schema } from "mongoose";

// Define the interface for Size
interface IColor {
  size:string;
  color: string;
  colorName: string;
  quantity: string;
}

// Define the interface for Product
interface IProduct extends Document {
  title: string;
  details: string;
  images: string[];
  mrp: number;
  sp: number;
  category: string;
  sizes: string[];
  colors: IColor[]
}

// Define the Color schema
const colorSchema: Schema = new Schema({
  colors: [
    {
      size:{
        type:String,
        required: true,
      },
      color: {
        type: String,
        required: true,
      },
      colorName: {
        type: String,
        required: true,
      },
      quantity: {
        type: String,
        required: true,
      },
    },
  ],
});

// Define the Product schema
const ProductSchema: Schema = new Schema({
  title: {
    type: String,
    required: true,
  },
  details: {
    type: String,
    required: true,
  },
  images: [
    {
      type: String,
      required: true,
    },
  ],
  mrp: {
    type: Number,
    required: true,
  },
  sp: {
    type: Number,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  sizes: {
    type: [String],
    required: true,
  },
  colors:{
    type:[colorSchema],
    required:true,
  }
});

// Create and export the Product model
const Product = mongoose.model<IProduct>("Product", ProductSchema);
export default Product;
