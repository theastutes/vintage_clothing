import mongoose, { Document, Schema } from 'mongoose';

interface IAddress extends Document {
  fullname: string;
  phoneno: number;
  pincode: number;
  town: string;
  state: string;
  adres: string;
}

const addressSchema = new Schema<IAddress>({
  fullname: { type: String, default: "", required: true },
  phoneno: {
    type: Number,
    default: 0,
    required: true,
    validate: {
      validator: function(val: number) {
        return val.toString().length === 10;
      },
      message: (val: { value: string }) => `${val.value} has to be 10 digits`,
    },
  },
  pincode: {
    type: Number,
    validate: {
      validator: function(val: number) {
        return val.toString().length === 6;
      },
      message: (val: { value: string }) => `${val.value} has to be 6 digits`,
    },
  },
  town: { type: String, required: true },
  state: { type: String, required: true },
  adres: { type: String, required: true },
});

export interface IItem extends Document {
  productId: mongoose.Types.ObjectId;
  quantity: number;
  size: string;
  color: string;
  colorName?: string;
}

const itemSchema = new Schema<IItem>({
  productId: { type: Schema.Types.ObjectId, ref: 'Product', required: true },
  quantity: { type: Number, required: true },
  size: { type: String, required: true },
  color: { type: String, required: true },
  colorName: { type: String, default: "" },
});

interface IOrder extends Document {
  items: IItem[];
  shippingAddress: IAddress;
  totalPrice: number;
  status: 'pending' | 'processing' | 'placed' | 'shipped' | 'completed';
  createdAt: Date;
}

const orderSchema = new Schema<IOrder>({
  items: [itemSchema],
  shippingAddress: addressSchema,
  totalPrice: { type: Number, default: 0 },
  status: {
    type: String,
    enum: ['pending', 'processing', 'placed', 'shipped', 'completed'],
    default: 'pending',
  },
  createdAt: { type: Date, default: Date.now },
});

export interface IUser extends Document {
  googleId?: string;
  name: string;
  email: string;
  image?: string;
  address: IAddress[];
  cart: IItem[];
  orders: IOrder[];
}

const userSchema = new Schema<IUser>({
  googleId: { type: String },
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  image: { type: String, default: "" },
  address: { type: [addressSchema], default: [] },
  cart: { type: [itemSchema], default: [] },
  orders: { type: [orderSchema], default: [] },
});

export const Item = mongoose.model<IItem>('Item',itemSchema)
export const User = mongoose.model<IUser>('User', userSchema);
export const Order = mongoose.model<IOrder>('Order', orderSchema);
