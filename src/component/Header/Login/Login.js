import { useNavigate } from 'react-router-dom'
import './Log.scss'
const Login = () => {
    const navigate = useNavigate()
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
                            // value={email}
                            // type='email'
                            // className='form-control'
                            // onChange={(event) => setemmail(event.target.value)}
                            />


                            <label>Password(*)</label>
                            <input
                            // value={password}
                            // onChange={(event) => setpassword(event.target.value)}
                            // type='password'
                            // className='form-control' 
                            />

                            {/* <div className='forgot-password' onClick={() => handleForgotPass()}>Forgot your password?</div> */}

                            <div className='button-control'>
                                <button className='btn-login'
                                // onClick={() => handleLogin()}
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