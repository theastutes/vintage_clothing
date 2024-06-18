import { NextApiRequest, NextApiResponse } from 'next';
import {User} from '../../../../../../models/User'; // Adjust the import path as needed

export default async function GET(req: NextApiRequest, res: NextApiResponse) {
    try {
        const users = await User.find({});
        return res.status(200).json(users);
    } catch (error) {
        console.error('Error in getting Users:', error);
        return res.status(500).json({ error: 'Error in getting Users' });
    }
}
