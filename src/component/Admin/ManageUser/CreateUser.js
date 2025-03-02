import { useState } from "react"
import { createUser, getAllUserTable } from "../../../service/ApiService"
import { toast } from "react-toastify"
import Select from 'react-select'


const CreateUser = () => {
    const selectGender = [
        { value: 'Male', label: 'Male' },
        { value: 'Female', label: 'Female' },
        { value: 'Other', label: 'Other' }
    ]
    const selectRole = [
        { value: 'user', label: 'user' },
        { value: 'admin', label: 'admin' },

    ]
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        gender: '',
        address: '',
        image: '',
        RoleId: '',
        imagePreview: ''
    })
    const [errors, setErrors] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        gender: '',
        address: '',
        image: '',
        RoleId: '',
    })
    const isValidInput = () => {
        console.log('check form data ', formData)
        if (!formData.firstName) {
            setErrors({
                ...errors,
                firstName: 'firstName has not been entered'
            })
            return;
        }
        if (!formData.lastName) {
            setErrors({
                ...errors,
                lastName: 'lastName  has not been entered '
            })
            return;
        }
        if (!formData.email) {
            setErrors({
                ...errors,
                email: 'email has not been entered  '
            })
            return;
        }

        if (!formData.password) {
            setErrors({
                ...errors,
                password: 'password has not been entered  '
            })
            return;
        }
    }
    const handleUploadFile = (event) => {
        console.log(event)
        if (event.target && event.target.files && event.target.files[0]) {

            const reader = new FileReader();
            reader.onload = () => setFormData({
                ...formData,
                imagePreview: (URL.createObjectURL(event.target.files[0])),
                image: (reader.result)
            }); // Base64 string
            reader.readAsDataURL(event.target.files[0]);
        }
    }
    const handleOnchange = (event) => {

        setFormData({

            ...formData,
            [event.target.name]: event.target.value
        })
        console.log(formData)
        if (event.target.value) {
            setErrors({
                ...errors,
                [event.target.name]: ''
            })
        }
    }
    const handleSubmit = async (event) => {
        event.preventDefault()
        isValidInput();
        console.log(errors)
        if (errors === "") {
            toast.error('Missing Input')
            return;
        }
        else {
            let res = await createUser(formData)
            if (res && res.EC === 0) {
                toast.success('Create Success')
                setFormData({
                    firstName: '',
                    lastName: '',
                    email: '',
                    password: '',
                    gender: '',
                    address: '',
                    image: '',
                    RoleId: '',
                    imagePreview: ''

                },)

            }
            if (res && res.EC !== 0) {
                toast.warn(res.MES)
            }
        }
        console.log('check isvalid ', formData)
    }
    // const handleChangeSelect = (event) => {
    //     console.log(event)
    //     setFormData({
    //         ...formData,
    //         name: event.value
    //     })
    // }

    return (


        <>
            <div className="Create-container container my-5">
                <div className="create-main row">
                    <span className="header-title" style={{ fontSize: '30px' }}> Create New User</span>
                    <div className="form-group col-3  my-2">
                        <label>FirstName</label>
                        <input className="form-control "
                            name='firstName'
                            value={formData['firstName']}
                            onChange={(handleOnchange)}
                        />
                        {errors.firstName && <p style={{ color: 'red' }}>firstName has not been entered</p>}
                    </div>
                    <div className="form-group col-3 my-2">
                        <label>LastName</label>
                        <input className="form-control "
                            name='lastName'
                            value={formData['lastName']}
                            onChange={(handleOnchange)}
                        />
                        {errors.lastName && <p style={{ color: 'red' }}>lastName has not been entered</p>}
                    </div>
                    <div className="form-group col-3 my-2">
                        <label>Email</label>
                        <input className="form-control "
                            name='email'
                            value={formData['email']}
                            onChange={(handleOnchange)}

                        />
                        {errors.email && <p style={{ color: 'red' }}>Email has not been entered</p>}
                    </div>
                    <div className="form-group col-3 my-2">
                        <label>Password</label>
                        <input className="form-control "
                            name='password'
                            value={formData['password']}
                            onChange={(handleOnchange)} />
                        {errors.password && <p style={{ color: 'red' }}>Password has not been entered</p>}
                    </div>
                    <div className="form-group col-3 my-2">
                        <label>gender</label>
                        <Select
                            name='gender'
                            options={selectGender}

                            placeholder={'Choosee gender'}
                            onChange={(event) => setFormData({
                                ...formData,
                                gender: event.label
                            })}
                        />

                    </div>
                    <div className="form-group col-3 my-2">
                        <label>Address</label>
                        <input className="form-control "
                            name='address'
                            value={formData['address']}
                            onChange={(handleOnchange)}
                        />
                        {errors.address && <p style={{ color: 'red' }}>Address has not been entered</p>}
                    </div>
                    <div className="form-group col-3 my-2">
                        <label>Role</label>
                        <Select
                            name='RoleId'
                            placeholder={'Choosee role'}
                            options={selectRole}
                            onChange={(event) => setFormData({
                                ...formData,
                                RoleId: event.label
                            })}
                        />

                    </div>
                    <div className="form-group col-3 my-2">
                        <label htmlFor="img-user" className="img-user" style={{
                            border: '1px solid',
                            margin: '25px 30px', cursor: 'pointer',
                            width: '120px', borderRadius: '30px',
                            textAlign: 'center', padding: '6px',
                        }}> {formData['imagePreview'] ? 'Switch Image' : 'Add Image'}</label>
                        <input className="form-control "
                            type="file"
                            id='img-user'
                            onChange={(event) => handleUploadFile(event)}
                            hidden
                        />
                        <div className="img-prev mx-4 " >

                            {formData['imagePreview']

                                ?
                                <div className="d-flex ">
                                    <img style={{ height: '170px', width: '150px' }} src={formData['imagePreview']}

                                    />
                                    <span style={{ marginLeft: '10px', backgroundColor: ' rgba(176, 173, 173, 0.67)', padding: '5px', cursor: 'pointer', height: 'fit-content', }}
                                        onClick={() => setFormData({
                                            ...formData,
                                            image: '',
                                            imagePreview: ''
                                        })}


                                    >X</span>
                                </div>
                                :
                                ''

                            }

                        </div>
                    </div>

                    <button className="btn btn-primary my-3" style={{ width: 'fit-content', margin: '40%', padding: '10px 80px' }}
                        onClick={(event) => handleSubmit(event)}
                    >Create</button>
                </div>
            </div >

        </>
    )
}
export default CreateUser