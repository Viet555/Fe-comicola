import './Log.scss'
const Register = () => {
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
                                // value={firstName}
                                // onChange={(event) => setfirstName(event.target.value)}
                                type='email'
                                className='form-control' />

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
                                // onClick={() => handleCreateAccount()}
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