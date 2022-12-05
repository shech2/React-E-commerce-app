import React, { useContext } from "react";
import CartGrid from '../partials/CartGrid.js';
import axios from "axios";

// import CSS for Footer and Header:
import '../../css/Cart.css'
import { Store } from '../../Store.js';

function Cart() {
    const { state } = useContext(Store);
    const { cart } = state
    console.log(cart.cartItems, "cart");

    const onClickHandler = () => {
        const fetchData = async () => {
            const { data } = await axios({
                method: 'POST',
                url: 'http://localhost:3001/add-order',
                data: {
                    orderItems: cart.cartItems,
                }
            })
        };
        fetchData().then(() => {
            console.log("Order created");
        });
    }

    return (
        <div>
            <CartGrid />
            <div className="checkout"><button onClick={onClickHandler}>Checkout</button></div>
        </div>
    );

}

export default Cart;