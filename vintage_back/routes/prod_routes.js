import express from "express";
import * as prodController from '../controllers/prod_controller.js'


const router = express.Router();


router.post('/', prodController.addProd);
router.post('/deleteprod', prodController.delProd);
router.get('/getprods', prodController.getProd);
router.post('/getproduct', prodController.getProdById);
router.post('/updateprod', prodController.updateprod);




export default router;