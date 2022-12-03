import React from 'react';
import { Link } from 'react-router-dom';
import Badge from 'react-bootstrap/Badge';

import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand
} from 'mdb-react-ui-kit';

function Header(props) {
    return (
        <MDBNavbar light bgColor='light'>
            <MDBContainer>
                <MDBNavbarBrand>
                    <Link to='/'>
                        <img className='img-fluid'
                            src={props.logo}
                            height='30'
                            alt=''
                            loading='lazy'
                        />
                    </Link>
                    <Link to='/cart'>
                        <img className='img-fluid2'
                            src="https://i.pinimg.com/originals/4f/fa/46/4ffa461181c41d9fcb9f03a683a31e94.png"
                            height='30'
                            alt=''
                            loading='lazy'
                        />
                        <Badge className='badge' bg='danger'>0</Badge>
                    </Link>
                </MDBNavbarBrand>
            </MDBContainer>
        </MDBNavbar>
    );
}

export default Header;