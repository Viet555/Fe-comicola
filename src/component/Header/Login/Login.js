import { useActionData, useNavigate } from 'react-router-dom'
import './Log.scss'
import { useState } from 'react'
import { toast } from 'react-toastify'
import { UserLogin } from '../../../service/ApiService'
import { useDispatch } from 'react-redux'
import { UserLoginSuccess } from '../../Store/Action/UserAction'
const Login = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [formLogin, setFormLogin] = useState({
        email: '',
        password: ''
    })
    const [errors, setErrors] = useState({
        email: '',
        password: ''
    })
    const checkIsValid = () => {
        if (!formLogin.email) {
            setErrors({
                ...errors,
                email: 'Email has not been entered '
            })
        }
        if (!formLogin.password) {
            setErrors({
                ...errors,
                password: 'password has not been entered '
            })
        }
    }
    const handleOnchange = (event) => {
        setFormLogin({
            ...formLogin,
            [event.target.name]: event.target.value
        })
        if (event.target.value) {
            setErrors({
                [event.target.name]: ''
            })
        }

    }
    const handleLogin = async (event) => {
        if (event.key === 'Enter') {

        }
        event.preventDefault()
        checkIsValid()
        if (!errors) {
            toast.error('Missing Input ')
            return;
        }
        let res = await UserLogin(formLogin)
        if (res && res.EC === 0) {
            dispatch(UserLoginSuccess(res))
            toast.success(res.MES)
            navigate('/')
        }
        else {
            toast.warning(res.MES)
        }

    }
    // const handleKeyDown = async (event) => {
    //     console.log(event)
    //     // Kiểm tra nếu phím được nhấn là Enter
    //     if (event.code === 'Enter') {
    //         event.preventDefault(); // Ngăn chặn hành vi mặc định của form
    //         await handleLogin(); // Gọi hàm đăng nhập
    //     }
    // };
    return (
        <>
            <div className='login-container'>
                <div className='content-up'>
                    <span><a href='/'>HOME</a><i className="fa-solid fa-caret-right mx-3"></i>My Account</span>
                    <h4>My Account</h4>
                </div>

                <div className='content-down col-12'>
                    <div className='main-contet-login col-12'>

                        <div className='form-group col-6 '>
                            <div className='header-form '>Login</div>
                            <label>Email Address(*)</label>

                            <input
                                name='email'
                                value={formLogin.email}
                                type='email'
                                className='form-control'
                                onChange={(handleOnchange)}
                            />
                            {errors.email && <p style={{ color: 'red' }}>Email has not been entered</p>}

                            <label>Password(*)</label>
                            <input
                                name='password'
                                value={formLogin.password}
                                onChange={(handleOnchange)}
                                type='password'
                                className='form-control'
                            // onKeyDown={handleKeyDown}
                            />
                            {errors.password && <p style={{ color: 'red' }}>password has not been entered</p>}
                            <div className='forgot-password' onClick={() => navigate('/')}>Forgot your password?</div>

                            <div className='button-control'>
                                <button className='btn-login'
                                    onClick={(event) => handleLogin(event)}
                                >Log in</button>
                                <button className='btn-login'
                                    onClick={() => navigate('/Register  ')}
                                >Create An Account</button>
                            </div>

                        </div>
                    </div>

                </div>

            </div>

        </>)
}
export default Login