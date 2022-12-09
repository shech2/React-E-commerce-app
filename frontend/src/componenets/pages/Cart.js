import React, { useContext, useReducer, useState } from "react";
import CartGrid from '../partials/CartGrid.js';
import axios from "axios";
// import CSS for Footer and Header:
import '../../css/Cart.css'
import { Store } from '../../Store.js';
import Form from '../partials/Form.js';
import Modal from '../partials/Modal.js';

const reducer = (state, action) => {
    switch (action.type) {
        case "FETCH_REQUEST":
            return { ...state, loading: true };
        case "FETCH_SUCCESS":
            return { ...state, loading: false, cartItems: action.payload };
        case "FETCH_ERROR":
            return { ...state, loading: false, error: action.payload };
        default:
            return state;
    }
};

function Cart() {
    const [topModal, setTopModal] = useState(false);

    const [{ loading }, dispatch] = useReducer(reducer, {
        cartItems: [],
        loading: false,
        error: false,
    });
    const { state: { cart }, dispatch: ctxDispatch } = useContext(Store);
    const onSubmit = (e) => {
        e.preventDefault();
        const fetchData = async () => {
            dispatch({ type: "FETCH_REQUEST" });
            const { data } = await axios({
                method: 'POST',
                url: 'http://localhost:3001/add-order',
                data: {
                    orderItems: cart.cartItems,
                    name: e.target[0].value,
                    email: e.target[1].value,
                    address: e.target[2].value,
                    phone: e.target[3].value,
                    total: cart.total.toFixed(2)
                }
            }).catch((err) => {
                dispatch({ type: "FETCH_ERROR", payload: err });
            });
            dispatch({ type: "FETCH_SUCCESS", payload: data });
        };
        fetchData().then((data) => {
            axios({
                method: 'POST',
                url: 'http://localhost:3001/delete-cart',
            }).then(() => {
                ctxDispatch({ type: "DELETE_CART" });
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
            <Modal toggleModal={setTopModal} topModal={topModal} />
            <CartGrid />
            <div className="price container"> Total Price : ${cart.total.toFixed(2)}  </div>
            {
                cart.cartItems.length !== 0
                    ? <Form clearCart={clearCart} handleSubmit={onSubmit} cart={cart} toggleModal={setTopModal} /> : loading ? <div>Loading...</div>
                        : ''
            }
        </div >
    );
}

export default Cart;