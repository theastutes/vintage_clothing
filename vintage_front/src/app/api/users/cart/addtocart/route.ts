import { NextApiRequest, NextApiResponse } from 'next';
import mongoose from 'mongoose';
import {User, Item} from '../../../../../../models/User'; // Update with the correct path

export default async function POST(req: NextApiRequest, res: NextApiResponse) {
    try {
        const { productId, email, size, color, colorName } = req.body;
        const quantity = 1;

        // Find the user
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }

        // Check if the product already exists in the cart
        const existingItemIndex = user.cart.findIndex(item => item.productId.equals(new mongoose.Types.ObjectId(productId)));
        if (existingItemIndex > -1) {
            // Increase quantity by one if the item already exists in the cart
            user.cart[existingItemIndex].quantity += quantity;
        } else {
            // Add new item to the cart if it doesn't exist
            const newItem = new Item({
                productId: new mongoose.Types.ObjectId(productId),
                quantity,
                size,
                color,
                colorName
            });
            user.cart.push(newItem);
        }

        // Save the changes to the user
        await user.save();
        
        return res.status(201).json({ message: 'Product added to cart successfully' });
    } catch (error) {
        console.error('Error adding to cart:', error);
        return res.status(500).json({ error: 'Internal server error' });
    }
}
