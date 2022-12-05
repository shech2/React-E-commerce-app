import React from "react";
import { Link } from 'react-router-dom';



function Card({ items, handleClick }) {
    const { description, title, price, url } = items;

    return (
        <div className='card'>
            <img src={url} className='card-img-top' alt='...' />
            <div className='card-body'>
                <h5 className='card-title'>{title}</h5>
                <h5 className='card-price'>Price: ${price}</h5>
                <p className='card-text'>{description}</p>
                <Link className='btn btn-primary' onClick={() => handleClick(items)}>
                    Add to cart
                </Link>
            </div>
        </div >
    );
}

export default Card;

    // const { state, dispatch: cxtDispatch } = useContext(Store);


    // function onClickHandler() {
    //     const fetchData = async () => {
    //         await axios({
    //             method: 'POST',
    //             url: 'http://localhost:3001/add-to-cart',
    //             data: {
    //                 product: items,
    //             }
    //         }).then(() => { cxtDispatch({ type: "ADD_TO_CART", payload: items }); })
    //             .catch((err) => {
    //                 cxtDispatch({ type: "ADD_TO_CART_ERROR", payload: err });
    //             });
    //     }
    //     fetchData();
    // }