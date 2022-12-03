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
    console.log(products);
    var i = 0;

    return (
        <MDBContainer className='mt-3'>
            <MDBRow key={i++} className='mb-3'>
                {/* Card components creation: */}
                {products.map((product) => {
                    return (
                        <MDBCol size='4' sm={4} lg={4} xl={4} xxl={4}>
                            <Card title={product.title} url={product.url} description={product.description} />
                        </MDBCol>
                    )
                })};
            </MDBRow>
        </MDBContainer>
    );
}

export default Grid;