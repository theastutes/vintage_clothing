import mongoose from 'mongoose';

const addSchema = new mongoose.Schema({
    fullname:{
        type:String,
        default:"",
        required:true
    },
    phoneno:{
        type:Number,
        default:"",
        required:true,
        validate: {
            validator: function(val) {
                return val.toString().length === 10
            },
            message: val => `${val.value} has to be 10 digits`
        }
    },
    pincode:{
        type:Number,
        validate: {
            validator: function(val) {
                return val.toString().length === 6
            },
            message: val => `${val.value} has to be 6 digits`
        }
    },
    town:{
        type:String,
        required:true,
    },
    state:{
        type:String,
        required:true,
    },
    adres:{
        type:String,
        required:true,
    }

})

export const Item = new mongoose.Schema({
    productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product',
        required: true,
    },
    quantity: {
        type: Number,
        required: true,
    },
    size:{
        type:String,
        required:true,
    },
    color:{
        type:String,
        required:true
    },
    colorName:{
        type:String,
        default:""
    }

});

const orderSchema = new mongoose.Schema({
    items: [Item],
    shippingAddress:addSchema,
    totalPrice: {
        type: Number,
        default: 0,
    },
    status: {
        type: String,
        enum: ['pending', 'processing', 'placed', 'shipped', 'completed'],
        default: 'pending'
    },
    createdAt: {
        type: Date,
        default: Date.now,
    }
});

const userSchema = new mongoose.Schema({
    googleId:{
        type:String,
    },
    name: {
        type: String,
        required: [true, "Please provide username"],
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    image: {
        type: String,
        default: "",
    },
    address:{
        type:[addSchema],
        default:[],
    },
    cart: {
        type: [Item],
        default: [],
    },
    orders: {
        type: [orderSchema],
        default: [],
    },
});

const User = mongoose.model("users", userSchema);
export default User;

export const Order = mongoose.model("orders",orderSchema);

