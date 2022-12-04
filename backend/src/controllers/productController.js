import productServies from '../services/productService.js';
import { Data } from '../../data.js';



const getData = async (req, res) => {
    const products = await productServies.getProducts();
    res.send(products);
}



const addToDB = async (req, res) => {
    try {
        Data.map((product) => {
            productServies.createProduct(product);
        });
        res.status(200).json({ message: "Products added to DB" });
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}


export default {
    getData,
    addToDB
};


