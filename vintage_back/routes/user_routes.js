import express from "express";
import * as userController from '../controllers/user_controller.js'

const router = express.Router();

//get users
router.get('/', userController.getUsers);
router.post('/', userController.postUser);



export default router;