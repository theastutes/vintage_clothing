import express from "express";
import * as prodController from '../controllers/prod_controller.js'


const router = express.Router();


router.post('/', prodController.addProd);
router.post('/deleteprod', prodController.delProd);
router.get('/getProducts', prodController.getProd);
router.post('/getProduct', prodController.getProdById);
router.post('/updateProduct', prodController.updateprod);




export default router;