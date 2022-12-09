import React from 'react';
import { MDBBtn, MDBModal, MDBModalDialog, MDBModalContent, MDBModalBody } from 'mdb-react-ui-kit';

function Modal({ toggleModal, topModal }) {
    return (
        <>
            <MDBModal animationDirection='top' show={topModal} tabIndex='-1' setShow={toggleModal}>
                <MDBModalDialog position='top' frame>
                    <MDBModalContent>
                        <MDBModalBody className='py-1'>
                            <div className='d-flex justify-content-center align-items-center my-3'>
                                <h3><p className='mb-0'>Order complete!</p></h3>
                                <MDBBtn color='success' size='sm' className='ms-2' onClick={() => toggleModal(false)}>
                                    Ok, thanks
                                </MDBBtn>
                            </div>
                        </MDBModalBody>
                    </MDBModalContent>
                </MDBModalDialog>
            </MDBModal>
        </>
    );
}

export default Modal;