import React, { useContext } from "react";
import CartGrid from '../partials/CartGrid.js';
import axios from "axios";
// import CSS for Footer and Header:
import '../../css/Cart.css'
import { Store } from '../../Store.js';

function Cart() {
    const { state: { cart }, dispatch: ctxDispatch } = useContext(Store);
    const onClickHandler = () => {
        const fetchData = async () => {
            await axios({
                method: 'POST',
                url: 'http://localhost:3001/add-order',
                data: {
                    orderItems: cart.cartItems,
                }
            })
        };
        fetchData().then((data) => {
            axios({
                method: 'POST',
                url: 'http://localhost:3001/delete-cart',
            }).then(() => {
                ctxDispatch({ type: "DELETE_CART" });
                alert("Order placed");
                clearCart();
            });
        });
    }

    const clearCart = () => {
        axios({
            method: 'POST',
            url: 'http://localhost:3001/delete-cart',
        }).then(() => {
            ctxDispatch({ type: "DELETE_CART" });
        });
    }

    return (
        <div>
            <CartGrid />
            <div className="checkout">{cart.cartItems.length !== 0 ? <button onClick={clearCart}>Clear Cart</button> : ''}
                {cart.cartItems.length !== 0 ? <button onClick={onClickHandler}>Checkout</button> : ''}</div>

        </div >
    );
}

export default Cart;