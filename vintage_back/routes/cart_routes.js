import express from 'express';
import * as cartController from '../controllers/cart_controllers.js';

const router = express.Router();

// Add to cart
router.post('/add', cartController.addToCart);

// View items in cart
router.post('/getCart', cartController.getCart);

// Remove Item
router.post('/removefromcart', cartController.removeFromCart);

// Remove cart
router.put("/updateCart", cartController.updateCart);


export default router;