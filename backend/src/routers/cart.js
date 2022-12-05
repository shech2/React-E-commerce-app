import Express from 'express';
import cartController from '../controllers/cartController.js';
const router = Express.Router();



router.post('/add-to-cart', cartController.addToCart);
router.get('/cart', cartController.getCart);



export default router;