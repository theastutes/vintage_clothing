import mongoose from "mongoose";

const Size = new mongoose.Schema({
    size: String,
    colors: [
        {
            color:
            {
                type: String,
                required: true
            },
            colorName:
            {
                type: String,
                required: true
            },
            quantity:
            {
                type: String,
                required: true
            }
        }
    ]
});

const productSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    details: {
        type: String,
        required: true,
    },
    images: [{
        type: String,
        required: true,
    }],
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
        type: [Size],
        required: true,
    },
});

const Product = mongoose.model("Product", productSchema);
export default Product;