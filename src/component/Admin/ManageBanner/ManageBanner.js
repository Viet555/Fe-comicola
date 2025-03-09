import { Button, Modal } from 'react-bootstrap';
import './ManageBanner.scss'
import { useState } from 'react';
const ManageBanner = () => {
    const [show, setShow] = useState(false)

    const handleSelectBanner = () => {
        setShow(!show)
    }
    return (
        <>
            <div className="ManageBanner-container">
                <span className="header-banner">Manage Banner </span>
                <div className="banner-main container">
                    <div className="form-group col-2 content-banner">
                        <button className='btn btn-warning'
                            onClick={() => handleSelectBanner()}
                        >Select</button>
                        <label className='name-banner'>sadasdasdasd</label>
                        <img src="" />
                    </div>
                    <div className="form-group col-2 content-banner">
                        <button className='btn btn-warning'>Select</button>
                        <label className='name-banner'>sadasdasdasd</label>
                        <img src="" />
                    </div>
                    <div className="form-group col-2 content-banner">
                        <button className='btn btn-warning'>Select</button>
                        <label className='name-banner'>sadasdasdasd</label>
                        <img src="" />
                    </div>
                    <div className="form-group col-2 content-banner">
                        <button className='btn btn-warning'>Select</button>
                        <label className='name-banner'>sadasdasdasd</label>
                        <img src="" />
                    </div>
                    <div className="form-group col-2 content-banner">
                        <button className='btn btn-warning'>Select</button>
                        <label className='name-banner'>sadasdasdasd</label>
                        <img src="" />
                    </div>
                </div>

            </div>
            <Modal
                show={show}
                onHide={setShow}
                size='lg'
                backdrop="static"
            >
                <Modal.Header closeButton>
                    <Modal.Title>Edit User</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className='modal-Edit col-12 row '>
                        <div className='form-group col-5 my-3'>
                            <label>Name</label>

                        </div>
                        <div className='form-group col-4 my-3'>
                            <label>Image</label>
                            <img src='' />
                        </div>
                    </div>

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary"

                    // onClick={() => handleClose()}
                    >
                        cancel

                    </Button>

                    <Button variant="primary"   >
                        Save
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}
export default ManageBanner 