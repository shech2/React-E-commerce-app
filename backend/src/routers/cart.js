import Express from 'express';
import cartController from '../controllers/cartController.js';
const router = Express.Router();



router.post('/add-to-cart', cartController.addToCart);



export default router;