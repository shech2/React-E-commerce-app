import express from 'express';
import PC from '../controllers/productController.js';
const router = express.Router();

router.get('/add-to-db', PC.addToDB);
router.get("/data", PC.getData);

export default router;