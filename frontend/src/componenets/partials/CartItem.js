import React from "react";


function CartItem({ items }) {
    const { description, title, price, url } = items;

    return (
        <div className='card2'>
            <img src={url} className='card-img' alt='...' />
            <div className='card-body2'>
                <h5 className='card-title2'>{title}</h5>
                <h5 className='card-price2'>Price: ${price}</h5>
                <p className='card-text2'>{description}</p>
            </div>
        </div >
    );
}

export default CartItem;

