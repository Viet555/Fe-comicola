import './Header.scss'
import logoShop from '../../asset/Comi_shop.png'
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import * as action from '../Store/export'
import { NavDropdown } from 'react-bootstrap';
import ModelShowCart from './ModelShowCart';
import { useEffect, useRef, useState } from 'react';
import _, { assign } from 'lodash';
import { toast } from 'react-toastify';
import { searchProduct } from '../../service/ApiService';
import SidebarManage from './SiderBar';
import { persistor } from '../Store/ReduxStore';
const Headerr = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const dataAllType = useSelector(state => state.admin.typeProduct)
    const authen = useSelector(state => state.user)
    const userInfor = useSelector(state => state.user.account)
    const cartInfor = useSelector(state => state.user.cart)
    const userId = useSelector(state => state.user.account?.id)
    const [showCart, setShowCart] = useState(false)
    const [dataCart, setDataCart] = useState('')
    const [nameSearch, setNameSearch] = useState()

    const [collapsed, setCollapsed] = useState(true);
    const toggleSidebar = () => {
        setCollapsed(!collapsed);
    }
    useEffect(() => {
        if (userId) {
            dispatch(action.getProductcartByRedux(userId))
        }

    }, [userId])
    useEffect(() => {
        if (cartInfor && !_.isEmpty(cartInfor)) {
            setDataCart(cartInfor)
        }
        else {
            setDataCart([])
        }
    }, [cartInfor])
    useEffect(() => {
        if (_.isEmpty(dataAllType)) {
            dispatch(action.fetchAllTypeProduct())
        }
    }, [])

    const handleLogout = () => {
        dispatch((action.UserLogout()))
        localStorage.removeItem("token");
        localStorage.removeItem("refreshToken");
        persistor.purge();
        navigate('/')
    }
    const handleOnkey = async (e) => {

        if (e.key === 'Enter') {
            await haneleSearchProduct();
        }
    }
    const haneleSearchProduct = async () => {

        if (!nameSearch) {
            toast.error('Name is Empty')
            return;
        }
        else {
            dispatch(action.findProductbyName(nameSearch))
            navigate('/View-product-find')
        }

    }
    const handleOnClickType = (e) => {
        let clickedType = e.target.innerText
        dispatch(action.fetchAllProduct(clickedType, ''))
        navigate('/View-product-Type', window.scroll(0, 0))
    }
    return (
        <>
            <div className="main-container">
                <div className="content-left">
                    <img src={logoShop} onClick={() => navigate('/')} style={{ cursor: 'pointer' }} ></img >
                </div>
                <div className="content-center">
                    <span> <NavLink to='/' className='nav-link'>Trang chủ</NavLink></span>
                    <div className='dropdown-product'>
                        <span>Sản phẩm</span>
                        <div className='drop-content'>
                            {dataAllType && dataAllType.length > 0 &&
                                dataAllType.map(item => {
                                    return (
                                        <span key={item._id} onClick={handleOnClickType}>{item.allCodeInfo?.name}</span>
                                    )
                                })

                            }


                        </div>
                    </div>


                    <span className={authen && authen.isauthentic === true ? 'text-primary' : ''}> <NavLink to={authen && authen.isauthentic === true ? '/manage-profile-user ' : '/login'} className='nav-link'>{userInfor && userInfor.email ? `hello ${userInfor.email}` : 'Sign In / Register'}</NavLink></span>
                    {authen && authen.isauthentic === true &&
                        <span className='btn-logout'>
                            <i
                                onClick={() => handleLogout()}
                                className="fa-solid fa-right-from-bracket" style={{ fontSize: '15px' }}></i>
                        </span>
                    }

                </div>
                <div className="content-right">
                    <>

                        <div className='d-flex'>
                            <span className='find-icon'>
                                <input placeholder='Tìm kiếm sản phẩm'
                                    value={nameSearch}
                                    onChange={(e) => setNameSearch(e.target.value)}
                                    onKeyDown={handleOnkey}

                                />
                                <i className="fa-solid fa-magnifying-glass" onClick={() => haneleSearchProduct()}></i></span>
                            <span><i className="fa-regular fa-user" onClick={() => navigate(`/manage-profile-user/account`)}></i></span>
                            <div className='hide-cart'>
                                <span className='cart-shop' onClick={() => setShowCart(!showCart)}><i className="fa-solid fa-cart-shopping"></i></span>
                                {cartInfor && cartInfor?.items?.length > 0 ?
                                    <span className='hide-quantity'>{cartInfor?.items?.length}</span>
                                    :
                                    <span className='hide-quantity'>0</span>
                                }
                            </div>
                            <span>{cartInfor?.totalPrice ? cartInfor?.totalPrice + '₫' : ''}</span>
                        </div>
                    </>
                    {userInfor && userInfor.roleId === 'admin' &&
                        <div className='' >

                            <button
                                className="toggle-sidebar"
                                onClick={toggleSidebar}
                                title="Manage"

                            >
                                <i className="fa-solid fa-bars mx-2 "></i>
                            </button>

                            <SidebarManage
                                collapsed={collapsed}
                                setCollapsed={setCollapsed}
                                toggleSidebar={toggleSidebar}
                            />

                        </div>
                    }

                </div>
                <ModelShowCart
                    dataCart={dataCart}
                    setShowCart={setShowCart}
                    showCart={showCart}
                />
            </div>

        </>
    )
}
export default Headerr