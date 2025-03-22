import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import './ProfileUser.scss'
import { useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import _ from 'lodash'
import { NavLink } from "react-router-dom"
const ProfileUser = () => {
    const dataUser = useSelector(state => state.user.account)
    const navigate = useNavigate()
    const location = useLocation()
    const [activePath, setActivePath] = useState(location.pathname); // Theo dõi đường dẫn active
    useEffect(() => {
        setActivePath(location.pathname);
    }, [location]);


    return (
        <>
            <div className="content-header">
                <span className='home color' ><NavLink to='/' className='nav-link'>Trang chủ/</NavLink></span>
                <span style={{ fontWeight: 'bold' }}> Tài khoản của tôi</span>
            </div>
            <div className="profile-main container">

                <div className="content-left">
                    <span className={activePath === '/manage-profile-user' ? 'active' : ''} onClick={() => navigate("/manage-profile-user")}><i className="fa-solid fa-house mx-1 "></i>Trang tài khoản</span>
                    <span className={activePath === '/manage-profile-user/order-user' ? 'active' : ''} onClick={() => navigate("/manage-profile-user/order-user")}><i className="fa-solid fa-cart-shopping mx-1" ></i>Đơn hàng</span>
                    <span className={activePath === '/manage-profile-user/account' ? 'active' : ''} onClick={() => navigate("/manage-profile-user/account")}><i className="fa-solid fa-users mx-1"></i>Tài khoản</span>
                </div>
                <div className="content-right">
                    <Outlet
                        context={{ dataUser }}
                    />
                </div>
            </div>
        </>
    )
}
export default ProfileUser