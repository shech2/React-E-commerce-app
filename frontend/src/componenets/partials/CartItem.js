import React from "react";


function CartItem({ items }) {
    const { description, title, price, url } = items;

    return (
        <div class="card">
            <div class="row">
                <div class="col-sm-4 col-md-8 col-lg-4">
                    <img src={url} className='card-img2' alt='...' />
                </div>
                <div class="col-sm-6 col-md-4 col-lg-6">
                    <div className='card-body2'>
                        <h5 className='card-title'>{title}</h5>
                        <h5 className='card-price'>Price: ${price}</h5>
                        <p className='card-text'>{description}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CartItem;

