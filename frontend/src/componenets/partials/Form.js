import React from "react";
import { MDBContainer } from 'mdb-react-ui-kit';



const Form = ({ handleSubmit, clearCart, cart, toggleModal }) => {

    return (
        <MDBContainer className="container-bottom">
            <form onSubmit={(e) => handleSubmit(e)}>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        name="name"
                        className="form-control"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        name="email"
                        className="form-control"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="address">Address</label>
                    <input
                        type="text"
                        name="address"
                        className="form-control"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password2">Phone</label>
                    <input
                        type="number"
                        name="phone"
                        className="form-control"
                    />
                </div>
                <div className="checkout">{cart.cartItems.length !== 0 ? <button onClick={() => clearCart()}>Clear Cart</button> : ''}
                    <button type="submit" onClick={() => toggleModal(true)}>
                        Checkout
                    </button>
                </div>
            </form>
        </MDBContainer >
    );
}

export default Form;
