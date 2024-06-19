export interface IUser {
  name: string;
  email: string;
  image: string;
  id: string;
}

export interface IItem {
  productId: string|undefined;
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
}
