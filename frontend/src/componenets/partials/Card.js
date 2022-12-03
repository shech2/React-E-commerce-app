import React from "react";
import { Link } from 'react-router-dom';
import axios from 'axios';
function Card(props) {
    function onClickHandler(e) {
        e.preventDefault();
        const fetchData = axios({
            method: 'POST',
            url: 'http://localhost:3001/add-to-cart',
            data: {
                product: props
            }
        });
        fetchData.then((response) => {
            console.log(response);
        });
    }

    return (
        <div className='card'>
            <img src={props.url} className='card-img-top' alt='...' />
            <div className='card-body'>
                <h5 className='card-title'>{props.title}</h5>
                <h5 className='card-price'>Price: ${props.price}</h5>
                <p className='card-text'>{props.description}</p>
                <Link onClick={onClickHandler} className='btn btn-primary'>
                    Add to cart
                </Link>
            </div>
        </div >
    );
}

export default Card;