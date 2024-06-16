import { NextApiRequest, NextApiResponse } from 'next';
import {User} from '../../../../../../models/User'; 

export default async function POST(req: NextApiRequest, res: NextApiResponse) {
    const { userId, address } = req.body;

    try {
        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        user.address.push(address);
        await user.save();

        return res.status(200).json({ message: 'Address added successfully' });
    } catch (error) {
        console.error('Error adding address:', error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
}
