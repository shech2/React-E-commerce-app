import cartModel from '../models/cart.js';
import ProductModel from '../models/product.js';



const getCart = async () => {
    const cart = await cartModel.find();
    return cart;
}

const deleteCart = async (id) => {
    try {
        await cartModel.findByIdAndDelete(id);
        console.log("Cart deleted from DB");
    } catch (error) {
        console.log(error.message);
    }
}

const addToCart = async (product) => {
    const pr = await ProductModel.findById(product.product._id);
    const cart = await cartModel.findOne();
    if (cart) {
        const index = cart.cartItems.findIndex((p) => p._id.toString() === pr._id.toString());
        if (index === -1) {
            cart.cartItems.push(pr);
        }
        cart.totalPrice += pr.price;
        cart.totalQuantity += 1;
        await cart.save();
    } else {
        const newCart = new cartModel({
            cartItems: [pr],
            totalPrice: pr.price,
            totalQuantity: 1,
        });
        await newCart.save();
    }
}


export default {

    addToCart,
    getCart,
    deleteCart,
}
