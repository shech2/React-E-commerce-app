import React from 'react';

import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand
} from 'mdb-react-ui-kit';

function Header(props) {
    return (
        <MDBNavbar light bgColor='light'>
            <MDBContainer>
                <MDBNavbarBrand href='#'>
                    <img className='img-fluid'
                        src={props.logo}
                        height='30'
                        alt=''
                        loading='lazy'
                    />
                </MDBNavbarBrand>
            </MDBContainer>
        </MDBNavbar>
    );
}

export default Header;