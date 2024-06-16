import { NextApiRequest, NextApiResponse } from 'next';
import Product from '../../../../../models/Product'; // Adjust the import path as needed
import connect from "../../../../../lib/db"
import mongoose from 'mongoose';

connect();

export async function GET(req: NextApiRequest, res: NextApiResponse) {
    try {
        const products = await Product.find();
        console.log("Code reached here!");
        return res.status(200).json(products);
    } catch (error) {
        console.error("Error fetching products:", error);
        return res.status(500).json({ error: "Internal Server Error" });
    }
}
