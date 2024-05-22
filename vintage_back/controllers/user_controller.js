import User from "../models/User.js";

export const getUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (error) {
        res.status(500).json({ error: 'Error in getting User' });
    }
}

export const getUserById = async (req, res) => {
    try {
        const userId = req.id;
        const user = await User.findOne({ id: userId });
        if (!user) {
            res.status(404).json({ error: "User doesn't exist" });
        }
        return res.json(user);
    }
    catch {
        res.status(500).json({ error: 'Error in getting User' });
    }

}

export const createUser = async (req, res) => {
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

export const updateUser = async (req, res) => {

}

export const delAddr = async (req, res) => {
    const {userId,addressId} = req.body;
    try {
        const user = await User.findById(userId);
        user.address.$pop({_id:addressId})
        await user.save();
        res.status(201).json(user);

    } catch (error) {
        console.error('Error adding address:', error);
        res.status(500).send('Internal ServerError');
    }
}

export const addAddr = async (req, res) => {
    const { userId, address } = req.body;

    try {
        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).send('User not found');
        }

        user.address.push(address);
        await user.save();

        res.status(200).send('Address added successfully');
    } catch (error) {
        console.error('Error adding address:', error);
        res.status(500).send('Internal Server Error');
    }
}
