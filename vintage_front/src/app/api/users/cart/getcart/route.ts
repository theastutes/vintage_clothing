import { NextApiRequest, NextApiResponse } from 'next';
import {User} from '../../../../../../models/User'; 

export default async function GET(req: NextApiRequest, res: NextApiResponse) {
    const email = req.query.email as string; // Assuming 'email' is passed as a query parameter

    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }
        
        return res.status(200).json(user.cart);
    } catch (error) {
        console.error('Error retrieving cart:', error);
        return res.status(500).json({ error: 'Internal server error' });
    }
}
