import React, { useEffect, useState } from 'react';
import { MDBContainer, MDBRow, MDBCol } from 'mdb-react-ui-kit';
import axios from 'axios';

import Card from '../partials/Card.js';
function Grid() {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const { data } = await axios({
                method: 'GET',
                url: 'http://localhost:3001/data',
            });
            setProducts(data);
        };
        fetchData();
    }, []);

    // sort the products by price:
    products.sort((a, b) => a.price - b.price);

    // Card components creation:
    const Items = products.map((product) => {
        return (
            <MDBCol key={product._id} size='4' sm={4} lg={4} xl={4} xxl={4}>
                <Card title={product.title} url={product.url} description={product.description} price={product.price} />
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
        <MDBContainer className='mt-3'>
            <MDBRow className='mb-3'>
                {final}
            </MDBRow>
        </MDBContainer>
    );
}

export default Grid;