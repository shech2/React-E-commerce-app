import orderService from '../services/orderService.js';

const createOrder = async (req, res) => {
    const order = req.body;
    console.log(order, "order");
    try {
        const order = await orderService.createOrder(req.body);
        res.status(200).json(order);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

const getOrders = async (req, res) => {
    try {
        const orders = await orderService.getOrders();
        res.status(200).json(orders);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export default {
    createOrder,
    getOrders
}