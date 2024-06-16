import { NextApiRequest, NextApiResponse } from 'next';
import {User} from '../../../../../../models/User'; // Adjust the import path as needed

export default async function POST(req: NextApiRequest, res: NextApiResponse) {
    try {
        const { id, name, email, image } = req.body;

        const existingUser = await User.findOne({ email: email });
        if (existingUser) {
            return res.status(200).json(existingUser);
        }

        const newUser = new User({
            _id: id,
            name,
            email,
            image
        });

        const savedUser = await newUser.save();
        return res.status(201).json(savedUser);
    } catch (error) {
        console.error('Error in adding User:', error);
        return res.status(500).json({ error: 'Error in adding User' });
    }
}
