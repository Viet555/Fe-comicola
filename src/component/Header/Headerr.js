import './Header.scss'
import logoShop from '../../asset/Comi_shop.png'
import { NavLink, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import * as action from '../Store/export'
import { NavDropdown } from 'react-bootstrap';
import ModelShowCart from './ModelShowCart';
import { useEffect, useState } from 'react';
import _ from 'lodash';
const Headerr = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const authen = useSelector(state => state.user)
    const userInfor = useSelector(state => state.user.account)
    const cartInfor = useSelector(state => state.user.cart)
    const [showCart, setShowCart] = useState(false)
    const [dataCart, setDataCart] = useState('')
    useEffect(() => {
        if (cartInfor && !_.isEmpty(cartInfor)) {
            setDataCart(cartInfor)
        }
    }, [cartInfor])
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
                    {authen && authen.isauthentic === true &&
                        <span className='btn-logout'>
                            <i
                                onClick={() => dispatch((action.UserLogout()))}
                                className="fa-solid fa-right-from-bracket" style={{ fontSize: '15px' }}></i>
                        </span>
                    }

                </div>
                <div className="content-right">
                    {userInfor && userInfor.roleId === 'admin' ?
                        <div className='d-flex '>
                            <span> <NavLink to='/ManageUser' className='nav-link SetupBut' >Manage User</NavLink></span>


                            <NavDropdown title="Product Manage" className='SetupBut navdrop-header' >
                                <NavLink to='/ManageProduct' className='nav-link nav-link-drop '>Manage Products</NavLink>
                                <NavLink to='/ManageMarkdown' className='nav-link nav-link-drop'>Manage Markdown</NavLink>
                            </NavDropdown>

                            <span> <NavLink to='/ManageBanner' className='nav-link SetupBut'>Manage Banners</NavLink></span>
                        </div>
                        :
                        <>
                            <div className='d-flex'>
                                <span> <i className="fa-solid fa-magnifying-glass"></i></span>
                                <span><i className="fa-regular fa-user"></i></span>
                                <div className='hide-cart'>
                                    <span className='cart-shop' onClick={() => setShowCart(!showCart)}><i className="fa-solid fa-cart-shopping"></i></span>
                                    {cartInfor && cartInfor?.items?.length > 0 ?
                                        <span className='hide-quantity'>{cartInfor?.items?.length}</span>
                                        :
                                        <span className='hide-quantity'>0</span>
                                    }
                                </div>
                                <span>{cartInfor?.totalPrice ? cartInfor?.totalPrice + 'đ' : ''}</span>
                            </div>

                        </>
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