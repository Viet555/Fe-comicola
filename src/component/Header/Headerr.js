import './Header.scss'
import logoShop from '../../asset/Comi_shop.png'
import { NavLink, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import * as action from '../Store/export'
const Headerr = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const authen = useSelector(state => state.user)
    const userInfor = useSelector(state => state.user.account)
    return (
        <>
            <div className="main-container">
                <div className="content-left">
                    <img src={logoShop} onClick={() => navigate('/')} style={{ cursor: 'pointer' }} ></img >
                </div>
                <div className="content-center">
                    <span> <NavLink to='/' className='nav-link'>Trang chủ</NavLink></span>
                    <span>Sản phẩm</span>

                    <span className={authen && authen.isauthentic === true ? 'text-primary' : ''}> <NavLink to={authen && authen.isauthentic === true ? '/ ' : '/login'} className='nav-link'>{userInfor && userInfor.email ? `hello ${userInfor.email}` : 'Sign In / Register'}</NavLink></span>

                </div>
                <div className="content-right">
                    {userInfor && userInfor.roleId === 'admin' ?
                        <div className='d-flex '>
                            <span> <NavLink to='/ManageUser' className='nav-link SetupBut' >Manage User</NavLink></span>
                            <span> <NavLink to='/ManageProduct' className='nav-link SetupBut'>Manage Products</NavLink></span>
                            <span> <NavLink to='/ManageBanner' className='nav-link SetupBut'>Manage Banners</NavLink></span>
                        </div>
                        :
                        <div>
                            <span> <i className="fa-solid fa-magnifying-glass"></i></span>
                            <span><i className="fa-regular fa-user"></i></span>
                            <span> <i className="fa-solid fa-cart-shopping"></i></span>
                        </div>

                    }
                    {authen && authen.isauthentic === true &&
                        <span>
                            <i
                                onClick={() => dispatch((action.UserLogout()))}
                                className="fa-solid fa-right-from-bracket"></i>
                        </span>
                    }

                </div>
            </div>
        </>
    )
}
export default Headerr