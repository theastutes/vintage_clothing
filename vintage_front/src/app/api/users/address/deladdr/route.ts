import { NextApiRequest, NextApiResponse } from 'next';
import {User} from '../../../../../../models/User'; 

export default async function delAddr(req: NextApiRequest, res: NextApiResponse) {
    const { userId, addressId } = req.body;

    try {
        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        // Assuming 'address' is an array of addresses
        user.address = user.address.filter(addr => addr._id.toString() !== addressId);
        await user.save();

        return res.status(200).json({ message: 'Address deleted successfully', user });
    } catch (error) {
        console.error('Error deleting address:', error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
}
