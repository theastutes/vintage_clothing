import User from "../models/User.js";

export const getUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (error) {
        res.status(500).json({ error: 'Error in getting User' });
    }
}

export const postUser = async (req, res) => {
    try {
        const { id, name, email, image } = await req.body;

        const existingUser = await User.findOne({ email: email });
        if (existingUser) {
            return res.json(existingUser);
        }
        const newUser = new User({
            _id: id,
            name,
            email,
            image
        });

        // Save the user to the database
        const saveduser = await newUser.save();

        // Create a new user instance (assuming you have a User model)


        // Respond with success message or other relevant data
        res.json(saveduser);
    } catch (error) {
        res.status(500).json({ error: 'Error in adding User' });
    }
};
