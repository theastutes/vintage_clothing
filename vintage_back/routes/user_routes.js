import express from "express";
import * as userController from '../controllers/user_controller.js'

const router = express.Router();

//get users
router.get('/', userController.getUsers);
router.post('/', userController.createUser);
router.get('/:id', userController.getUserById);
router.post('/updateuser', userController.updateUser)
router.post('/getaddr', userController.getAddr);
router.post('/adadres', userController.addAddr);
router.post('/deladres', userController.delAddr);

export default router;