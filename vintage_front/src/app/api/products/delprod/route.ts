import { NextApiRequest, NextApiResponse } from 'next';
import Product from '../../../../../models/Product'; // Adjust the import path as needed

export default async function POST(req: NextApiRequest, res: NextApiResponse) {
    const { id } = req.body;
    try {
        const delpro = await Product.findByIdAndDelete(id);
        return res.status(200).json(delpro);
    } catch (error) {
        console.error("Error deleting product:", error);
        return res.status(500).json({ error: "Internal Server Error" });
    }
}