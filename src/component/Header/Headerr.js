import './Header.scss'
import logoShop from '../../asset/Comi_shop.png'
import { NavLink } from 'react-router-dom';
const Headerr = () => {
    return (
        <>
            <div className="main-container">
                <div className="content-left">
                    <img src={logoShop}></img>
                </div>
                <div className="content-center">
                    <span> <NavLink to='/' className='nav-link'>Trang chủ</NavLink></span>
                    <span>Sản phẩm</span>
                    <span> <NavLink to='/login' className='nav-link'>Sign In / Register</NavLink></span>

                </div>
                <div className="content-right">
                    <span> <i class="fa-solid fa-magnifying-glass"></i></span>
                    <span><i class="fa-regular fa-user"></i></span>
                    <span> <i class="fa-solid fa-cart-shopping"></i></span>

                </div>
            </div>
        </>
    )
}
export default Headerr