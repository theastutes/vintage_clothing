import User from "../models/User.js";


// Add Product to cart
export const addToCart = async (req, res) => {
    try {
        const { productId, email, size, color, colorName } = req.body;
        const quantity = 1;

        // Find the user
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }
        // Find or create the cart
        let cart = user.cart;
        if (!cart) {
            console.log('cart not found in user');
            cart = [];
        }
        console.log("user cart : ", cart)

        // Check if the product already exists in the cart
        const existingItem = cart.find(item => item.productId.toString() === productId.toString());
        console.log("user cart : ", cart)
        if (existingItem) {
            existingItem.quantity += quantity;
        } else {
            cart.push({ productId, quantity, size, color, colorName });
        }

        // Save the changes to the user
        user.cart = cart;
        await user.save();
        console.log(user.cart);
        res.status(201).json("done!");
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Internal server error' });
    }
};


// View Products from cart
export const getCart = async (req, res) => {
    const { email } = req.body;
    console.log("passed email: ", email);
    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }
        console.log("returning user cart : ", user.cart);
        res.status(200).json(user.cart);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
};

// delete Product from cart
export const removeFromCart = async (req, res) => {
    try {
        const { productId, email } = req.body;
        let user = await User.findOne({ email });
        if (!user.cart) {

            return res.status(404).json({ error: "Cart not found" });
        }
        user.cart.$pop({ productId })
        await user.save();
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
};


export const updateCart = async (req, res) => {
    try {
        const { productId, quantity, email } = req.body
        const user = await User.findOne({ email }).select('cart');
        console.log(user.cart);
        const existingItem = user.cart.find(item => item.productId.toString() === productId.toString());

        console.log("user cart : ", user.cart)
        if (existingItem) {
            if (quantity === 0) {
                user.cart.$pop({ productId });
            }
            existingItem.quantity = quantity;
        }
        else {
            user.cart.push({ productId, quantity })
        }

        const newCart = await user.save();
        res.status(200).json(newCart);
    } catch (error) {
        console.error('Error Deleting Cart :', error);
        res.status(500).json({ error: 'Internal server error' });
    }
}