import { NextApiRequest, NextApiResponse } from 'next';
import Product from '../../../../../models/Product'; // Adjust the import path as needed

export default async function POST(req: NextApiRequest, res: NextApiResponse) {
    try {
        const { title, details, images, mrp, sp, category, sizes } = req.body;

        if (!title || !details || !images || !mrp || !sp || !category || !sizes) {
            return res.status(400).json({ message: "All fields are required!" });
        }

        const newProduct = new Product({
            title,
            details,
            images,
            mrp,
            sp,
            category,
            sizes
        });

        await newProduct.save();
        return res.status(201).json(newProduct);
    } catch (error) {
        console.error("Error creating product:", error);
        return res.status(500).json({ error: "Internal Server Error" });
    }
}