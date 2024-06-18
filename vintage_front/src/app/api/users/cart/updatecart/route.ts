import type { NextApiRequest, NextApiResponse } from 'next';
import {User} from '../../../../../../models/User'; // Replace with the actual path to your User model

// ... rest of your imports

export default async function POST(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const { productId, quantity, email } = req.body;
    const user = await User.findOne({ email }).select('cart');
    
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    console.log(user.cart);
    
    if (quantity === 0) {
      // Use $pull to remove items from the cart array
      await User.updateOne(
        { email },
        { $pull: { cart: { productId } } }
      );
    } else {
      const existingItem = user.cart.find(item => item.productId.toString() === productId.toString());
      
      if (existingItem) {
        existingItem.quantity = quantity;
      } else {
        // user.cart.push({ productId, quantity });
        res.status(400).json("Cart Item not found!");
      }
    }

    // Save the user document after updating the cart
    const newCart = await user.save();
    
    res.status(200).json(newCart);
  } catch (error) {
    console.error('Error Updating Cart :', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}
