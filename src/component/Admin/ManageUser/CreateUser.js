import { useState } from "react"
import { createUser, getAllUserTable } from "../../../service/ApiService"
import { toast } from "react-toastify"

const CreateUser = () => {
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

                })
            }
            if (res && res.EC !== 0) {
                toast.warn(res.MES)
            }
        }
        console.log('check isvalid ', formData)
    }
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
                        <input className="form-control "
                            name='roleId'
                            value={formData['roleId']}
                            onChange={(handleOnchange)} />
                    </div>
                    <div className="form-group col-3 my-2">
                        <label>Image</label>
                        <input className="form-control "
                            name='image'
                            value={formData['image']}
                            onChange={(handleOnchange)} />
                    </div>

                    <button className="btn btn-primary my-3" style={{ width: 'fit-content', margin: '40%', padding: '10px 80px' }}
                        onClick={(event) => handleSubmit(event)}
                    >Create</button>
                </div>
            </div>

        </>
    )
}
export default CreateUser