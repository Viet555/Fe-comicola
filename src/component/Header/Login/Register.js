import { useState } from 'react'
import './Log.scss'
import { toast } from 'react-toastify'
const Register = () => {
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
        console.log(formData)
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        })
        if (event.target.value) {
            setErrors({
                [event.target.name]: ''
            })
        }
    }
    const handleCreateAccount = (event) => {
        event.preventDefault()
        isValidInput()
        if (errors) {
            toast.error('Missing Input')
            return;
        }
    }
    return (
        <>
            <div className='login-container register'>
                <div className='content-up'>
                    <span><a href='/'>HOME</a><i className="fa-solid fa-caret-right mx-3"></i>Create Account</span>
                    <h4>Create Account</h4>
                </div>

                <div className='content-down col-12'>
                    <div className='main-contet-login col-12'>

                        <div className='form-group col-6 '>
                            <div className='header-form '>Register</div>
                            <label>FirstName (*)</label>

                            <input
                                name='firstName'
                                value={formData['firstName']}
                                onChange={(handleOnchange)}
                                type='email'
                                className='form-control' />
                            {errors.firstName && <p style={{ color: 'red' }}>firstName has not been entered</p>}
                            <label>LastName (*)</label>
                            <input
                                // value={lastName}
                                // onChange={(event) => setlastName(event.target.value)}
                                type='email'
                                className='form-control' />

                            <label>Email Address(*)</label>
                            <input
                                // value={email}
                                // onChange={(event) => setemmail(event.target.value)}
                                type='email'
                                className='form-control' />

                            <label>Password(*)</label>
                            <input
                                // value={password}
                                // onChange={(event) => setpassword(event.target.value)}
                                type='password'
                                className='form-control' />
                            <span>* Required Fields</span>
                            <div className='button-control'>
                                <button className='btn-login'
                                    onClick={(event) => handleCreateAccount(event)}
                                >Submit</button>
                            </div>

                        </div>
                    </div>

                </div>

            </div>
        </>
    )
}
export default Register