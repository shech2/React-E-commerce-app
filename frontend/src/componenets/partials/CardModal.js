import React, { useEffect } from 'react';
import { MDBModal, MDBModalDialog, MDBModalContent, MDBModalBody } from 'mdb-react-ui-kit';

function CardModal({ toggleModal, bottomModal }) {

    useEffect(() => {
        setTimeout(() => {
            toggleModal(false);
        }, 2000)
    }, [bottomModal]);

    return (
        <>
            <MDBModal animationDirection="bottom" show={bottomModal} tabIndex='-1' setShow={toggleModal}>
                <MDBModalDialog position="bottom" frame>
                    <MDBModalContent>
                        <MDBModalBody className='py-1'>
                            <div className='d-flex justify-content-center align-items-center my-3'>
                                <h3><p className='mb-0'>Item added to cart!</p></h3>
                            </div>
                        </MDBModalBody>
                    </MDBModalContent>
                </MDBModalDialog>
            </MDBModal>
        </>
    );
}

export default CardModal;