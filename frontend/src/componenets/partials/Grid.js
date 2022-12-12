import React, { useEffect, useState, useReducer, useContext } from 'react';
import { MDBContainer, MDBRow, MDBCol } from 'mdb-react-ui-kit';
import axios from 'axios';
import Card from '../partials/Card.js';
import { Store } from '../../Store.js';
import Spinner from 'react-bootstrap/Spinner';
import CardModal from '../partials/CardModal.js';

// Reducer:
const reducer = (state, action) => {
    switch (action.type) {
        case "FETCH_REQUEST":
            return { ...state, loading: true };
        case "FETCH_SUCCESS":
            return { ...state, loading: false, products: action.payload };
        case "FETCH_ERROR":
            return { ...state, loading: false, error: action.payload };
        default:
            return state;
    }
};


function Grid() {
    const [bottomModal, setBottomModal] = useState(false);


    const [{ loading }, dispatch] = useReducer(reducer, {
        products: [],
        loading: false,
        error: false,
    });


    const [productsNew, setProducts] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            dispatch({ type: "FETCH_REQUEST" });
            const { data } = await axios({
                method: 'GET',
                url: 'http://localhost:3001/data',
            }).catch((err) => {
                dispatch({ type: "FETCH_ERROR", payload: err });
            });
            dispatch({ type: "FETCH_SUCCESS", payload: data });
            setProducts(data);
        };
        fetchData();
    }, []);


    // sort the products by price:
    productsNew.sort((a, b) => a.price - b.price);
    const [Cart, setCart] = useState([]);


    const { dispatch: ctxDispatch } = useContext(Store);
    const onClickHandler = (item) => {
        setCart([...Cart, item]);
        axios({
            method: 'POST',
            url: 'http://localhost:3001/add-to-cart',
            data: {
                product: item
            }
        })
        ctxDispatch({
            type: 'ADD_TO_CART', payload: {
                product: item,
                price: item.price
            }
        });
        setBottomModal(true);
    };



    // Card components creation:
    const Items = productsNew.map((product) => {
        return (
            <MDBCol key={product._id} size='4' sm={4} lg={4} xl={4} xxl={4}>
                <Card key={product._id} items={product} handleClick={onClickHandler} />
            </MDBCol>
        )
    });

    // Seperate To Rows:
    var final = [];
    for (let i = 0; i < Items.length; i + 3) {
        const slice = Items.splice(0, 3);
        final.push(<MDBRow className={"Row" + i} key={i++}>{slice}</MDBRow>);
    }

    return (
        <>
            <CardModal bottomModal={bottomModal} toggleModal={setBottomModal} />
            <MDBContainer className='mt-3'>
                <MDBRow className='mb-3'>
                    {loading ? <Spinner variant='primary' className='loading'>
                        <span className='visually-hidden'>Loading...</span>
                    </Spinner> : final}
                </MDBRow>
            </MDBContainer>
        </>
    );
}

export default Grid;