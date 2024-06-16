import { NextApiRequest, NextApiResponse } from 'next';
import Product from '../../../../../models/Product'; // Adjust the import path as needed

export default async function GET(req: NextApiRequest, res: NextApiResponse) {
    try {
        const { id } = req.body;
        console.log(`ID      : ${id}`);
        const product = await Product.findById(id);
        console.log("product : ", product);

        if (!product) {
            return res.status(404).json({ error: "Product doesn't exist" });
        }

        return res.status(200).json(product);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: "Internal Server Error" });
    }
}
