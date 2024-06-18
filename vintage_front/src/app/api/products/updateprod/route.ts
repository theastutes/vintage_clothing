import { NextApiRequest, NextApiResponse } from 'next';
import Product from '../../../../../models/Product'; // Adjust the import path as needed

export default async function POST(req: NextApiRequest, res: NextApiResponse) {
    const prod = req.body;
    //console.log(prod);

    if (!prod.title || !prod.details || !prod.images || !prod.mrp || !prod.sp || !prod.category || !prod.sizes) {
        return res.status(400).json({ message: "All fields are required!" });
    }

    try {
        await Product.findOneAndUpdate({ _id: prod._id }, prod);
        return res.status(200).json({ message: "Update Successful!" });
    } catch (error) {
        console.error("Error updating product:", error);
        return res.status(500).json({ error: "Internal Server Error" });
    }
}
