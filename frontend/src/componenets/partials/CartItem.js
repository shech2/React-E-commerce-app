import React from "react";


function CartItem({ items }) {
    const { description, title, price, url } = items;

    return (
        <div className='card'>
            <img src={url} className='card-img-top' alt='...' />
            <div className='card-body'>
                <h5 className='card-title'>{title}</h5>
                <h5 className='card-price'>Price: ${price}</h5>
                <p className='card-text'>{description}</p>
            </div>
        </div >
    );
}

export default CartItem;

