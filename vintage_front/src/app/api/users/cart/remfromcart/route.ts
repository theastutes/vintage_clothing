import type { NextApiRequest, NextApiResponse } from 'next';
import {User} from '../../../../../../models/User';

export default async function POST(
    req: NextApiRequest,
    res: NextApiResponse
  ) {
    try {
      const { productId, email } = req.body;
      let user = await User.findOne({ email });
      if (!user?.cart) {
        return res.status(404).json({ error: "Cart not found" });
      }
      
      // Use $pull to remove the item with the given productId from the cart array
      await User.updateOne(
        { email },
        { $pull: { cart: { productId } } }
      );
      const updatedUser = await User.findOne({ email });    
      res.status(200).json(updatedUser);
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  }
  