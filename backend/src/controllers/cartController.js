import cartService from '../services/cartService.js';


const getCart = async (req, res) => {
    try {
        const cart = await cartService.getCart();
        res.status(200).json(cart);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};



const addToCart = (req, res) => {
    const product = req.body;
    cartService.addToCart(product);
    res.send(product);
};

export default {
    addToCart,
    getCart,
}

