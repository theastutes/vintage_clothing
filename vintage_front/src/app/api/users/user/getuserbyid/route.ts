import { NextApiRequest, NextApiResponse } from 'next';
import {User} from '../../../../../../models/User'; 

export default async function GET(req: NextApiRequest, res: NextApiResponse) {
    try {
        const userId = req.query.id as string; 
        const user = await User.findOne({ _id: userId });
        if (!user) {
            return res.status(404).json({ error: "User doesn't exist" });
        }
        return res.status(200).json(user);
    } catch (error) {
        console.error('Error in getting User:', error);
        return res.status(500).json({ error: 'Error in getting User' });
    }
}
