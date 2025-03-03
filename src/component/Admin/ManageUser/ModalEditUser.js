import { useEffect, useState } from "react"
import { Button, Modal } from "react-bootstrap"
import Select from "react-select"
import _ from "lodash"
import { toast } from "react-toastify"
import { getAllUserTable, UpdateAUser } from "../../../service/ApiService"
const ModalEditUser = (props) => {

    const { show, setShow, dataUserEdit, selectGender, selectRole, handleGetUserTable } = props
    const handleClose = () => {
        setShow(!show)

        setFirstName("")
        setLastName("")
        setRole("")
        setEmail("")
        setGender("")
        setAddress("")
        setImage("")
        setImagePreview('')
    }

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [roleId, setRole] = useState('')
    const [email, setEmail] = useState('')
    const [address, setAddress] = useState('')
    const [image, setImage] = useState('')
    const [imagePreview, setImagePreview] = useState('')
    const [gender, setGender] = useState('')

    useEffect(() => {
        if (!_.isEmpty(dataUserEdit)) {
            setFirstName(dataUserEdit.firstName)
            setLastName(dataUserEdit.lastName)
            setRole(dataUserEdit.roleId)
            setEmail(dataUserEdit.email)
            setGender(dataUserEdit.gender)
            setAddress(dataUserEdit.address)

            setImage(dataUserEdit.image)
            setImagePreview(dataUserEdit.image)
        }
    }, [dataUserEdit])
    const handleSubmitUpdate = async () => {
        let res = await UpdateAUser(dataUserEdit._id, firstName, lastName, roleId, address, gender, image)
        if (res && res.EC === 0) {
            toast.success(res.MES)
            handleClose()

        }
        handleGetUserTable()
    }
    const handleLoadImg = (event) => {
        console.log(event)
        if (event && event.target.files && event.target.files[0]) {
            setImagePreview(URL.createObjectURL(event.target.files[0]))
            // setImage(event.target.files[0])

            const reader = new FileReader();
            reader.onload = () => setImage(reader.result); // Base64 string
            reader.readAsDataURL(event.target.files[0]);
        }
    }
    return (
        <>
            <>
                <Modal
                    show={show}
                    onHide={setShow}
                    size='xl'
                    backdrop="static"
                >
                    <Modal.Header closeButton>
                        <Modal.Title>Edit User</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div className='modal-Edit col-12 row '>
                            <div className='form-group col-4 my-3'>
                                <label>First Name</label>
                                <input
                                    value={firstName}
                                    onChange={(event) => setFirstName(event.target.value)}
                                    className='form-control '
                                    type='text'
                                />
                            </div>
                            <div className='form-group col-4 my-3'>
                                <label>last Name</label>
                                <input
                                    value={lastName}
                                    onChange={(event) => setLastName(event.target.value)}
                                    className='form-control '
                                    type='text'
                                />
                            </div>
                            <div className='form-group col-4 my-3'>
                                <label>Email</label>
                                <input
                                    value={email}
                                    onChange={(event) => setEmail(event.target.value)}
                                    className='form-control'
                                    type='text'
                                    disabled
                                />

                            </div>
                            <div className='form-group col-3 my-4'>
                                <Select
                                    placeholder={roleId}
                                    options={selectRole}
                                    value={roleId}
                                    onChange={(event) => setRole(event.label)}
                                />
                            </div>
                            <div className='form-group col-3 my-4'>
                                <Select
                                    placeholder={gender}
                                    options={selectGender}
                                    value={gender}
                                    onChange={(event) => setGender(event.label)}
                                />
                            </div>
                            <div className='form-group col-6'>
                                <label>Address</label>
                                <input
                                    value={address}
                                    onChange={(event) => setAddress(event.target.value)}
                                    className='form-control'
                                    type='text'
                                />
                            </div>
                            <div className='form-group col-4'>
                                <label htmlFor="file-img" className='btn btn-secondary '  > Load Image</label>

                                <input

                                    onChange={(event) => handleLoadImg(event)}
                                    type='file'
                                    id="file-img" hidden

                                />

                            </div>

                            <div className='img-preview col-3 mt-4 ' >

                                {imagePreview ?
                                    <img style={{ width: '220px', height: '190px', borderRadius: ' 50%' }} src={imagePreview} />

                                    :
                                    <span >preview Img</span>
                                }

                            </div>
                        </div>


                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary"

                            onClick={() => handleClose()}
                        >
                            cancel

                        </Button>

                        <Button variant="primary" onClick={() => handleSubmitUpdate()}
                        >
                            Save
                        </Button>
                    </Modal.Footer>
                </Modal>
            </>
        </>
    )
}
export default ModalEditUser