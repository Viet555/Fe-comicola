import { use, useState } from 'react'
import './Log.scss'
import { toast } from 'react-toastify'
import { createUser } from '../../../service/ApiService'
import { useNavigate } from 'react-router-dom'
const Register = () => {
    const navigate = useNavigate()
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPass: ''
    })
    const [errors, setErrors] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPass: ''
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
        if (!formData.confirmPass) {
            setErrors({
                ...errors,
                confirmPass: 'confirmPass has not been entered  '
            })
            return;
        }
    }
    const [hiddenpass, setHiddenpass] = useState(true)
    const [checkPassword, setCheckPassword] = useState(true)
    const handleOnchange = (event) => {

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
    const handleCreateAccount = async (event) => {
        event.preventDefault()
        isValidInput()
        if (!errors) {
            toast.error('Missing Input')
            return
        }
        if (formData.confirmPass !== formData.password) {
            setCheckPassword(false)
            return
        }
        else {
            setCheckPassword(true)
        }
        if (checkPassword === true) {
            let res = await createUser(formData)
            if (res && res.EC === 0) {
                toast.success('Create User Succes')
                navigate('/login')
            }
            else {
                toast.warning(res.MES)
            }
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
                                type='text'
                                className='form-control' />
                            {errors.firstName && <p style={{ color: 'red' }}>firstName has not been entered</p>}
                            <label>LastName (*)</label>
                            <input
                                name='lastName'
                                value={formData['lastName']}
                                onChange={(handleOnchange)}
                                type='text'
                                className='form-control' />
                            {errors.lastName && <p style={{ color: 'red' }}>lastName has not been entered</p>}
                            <label>Email Address(*)</label>
                            <input
                                name='email'
                                value={formData.email}
                                onChange={(handleOnchange)}
                                type='email'
                                className='form-control' />
                            {errors.email && <p style={{ color: 'red' }}>email has not been entered</p>}
                            <div className='input-password'>
                                <label>Password(*)</label>
                                <input
                                    name='password'
                                    value={formData['password']}
                                    onChange={(handleOnchange)}
                                    type={!hiddenpass ? 'text' : 'password'}
                                    className='form-control ' />
                                {
                                    errors.password && <p style={{ color: 'red' }}> Password has not been entered</p>
                                }
                                <span
                                    onClick={() => setHiddenpass(!hiddenpass)}
                                >
                                    {hiddenpass ?
                                        <i className="fa-solid fa-eye"></i>
                                        :
                                        <i className="fa-regular fa-eye"></i>
                                    }
                                </span>

                            </div>
                            <label>re-enter password(*)</label>
                            <input
                                name='confirmPass'
                                value={formData['confirmPass']}
                                onChange={(handleOnchange)}
                                type='password'
                                className='form-control' />
                            {
                                errors.confirmPass && <p style={{ color: 'red' }}>confirm Password has not been entered</p>
                            }
                            {checkPassword === false && <p style={{ color: 'red' }}>confirm Password wrong</p>}
                            <span
                                style={{ cursor: 'pointer', color: 'blue' }}
                                onClick={() => navigate('/login')}>Login</span>
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