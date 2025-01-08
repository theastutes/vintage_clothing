export interface IUser {
  name: string;
  email: string;
  image: string;
  id: string;
}

export interface IAddress {
  fullname: string;
  phoneno: number;
  pincode: number;
  town: string;
  state: string;
  adres: string;
}

export interface IItem {
  productId: string | undefined;
  quantity: number;
  size: string;
  color: string;
  colorName?: string;
}

export interface returnprops {
  data: [IUser];
}
// Define the interface for Size
export interface IColor {
  color: string;
  colorName: string;
  quantity: string;
}

export interface ISize {
  size: string;
  colors: IColor[];
}

export interface variant {
  size: string;
  color: string;
  colorName: string;
  quantity: number;
}

// Define the interface for Product
export interface IProduct {
  _id: string;
  title: string;
  details: string;
  images: string[];
  mrp: number;
  sp: number;
  category: string;
  sizes: ISize[];
  variants: variant[];
}
