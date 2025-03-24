import './ModelShowCart.scss';
import test from '../../asset/Banner/ChimSeDuKy_Comishop_4.webp';
import { DeleteProductCart, getProductCart } from '../../service/ApiService';
import { toast } from 'react-toastify';
import { act, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as action from '../Store/export'
import { Navigate, useNavigate } from 'react-router-dom';
const ModelShowCart = (props) => {
    const { showCart, setShowCart, dataCart } = props;
    const [dataProductCart, setDataProductCart] = useState()
    const dataUseId = useSelector(state => state.user.account?.id)

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const handleDeleteCart = async (e) => {

        let IdProduct = e?.productId?._id
        let res = await DeleteProductCart(dataUseId, IdProduct)
        if (res && res?.EC === 0) {

            dispatch(action.getProductcartByRedux(dataUseId))
        }
        else {
            toast.error(res.MES)
        }
    }
    const handlePayment = () => {
        navigate(`/Payment-product`);
        setShowCart(!showCart)
    }
    return (
        <>
            {showCart === true && (
                <div className="showCart-container">
                    <div className="header-cart">
                        <span>Sản phẩm gần đây</span>
                        <span className='close-model' onClick={() => setShowCart(!showCart)}>x</span>
                    </div>
                    <div className="content-Cart">
                        {dataCart && dataCart.items && dataCart.items.length > 0 ? (
                            dataCart.items.map((item, index) => (
                                <>
                                    <div className='d-flex my-2 ' key={index}>

                                        <div className="content-img">
                                            <img src={item?.productId?.image1} />
                                        </div>
                                        <div className="content-info">
                                            <span className="nameProduct">
                                                {item?.productId?.nameProduct || 'Tên sản phẩm'}
                                            </span>
                                            <span className="quantity">
                                                ( x{item.quantity})
                                            </span>
                                            <span className="type">
                                                <span className='' style={{ fontWeight: 'bold', }}>Type:</span> {Array.isArray(item?.productId?.typeProduct) ? item?.productId?.typeProduct.join(', ') : item?.productId?.typeProduct}
                                            </span>
                                            <span className="price">
                                                <span className='' style={{ fontWeight: 'bold', }}>Giá sản phẩm:</span> {item?.productId?.count ? item?.productId?.count + 'đ' : ''}
                                            </span>
                                        </div>
                                        <div className='btn-delete-cart' onClick={() => handleDeleteCart(item)}>x</div>
                                    </div>

                                </>
                            ))
                        ) : (
                            <span>Bạn chưa có sản phẩm nào trong giỏ hàng</span>
                        )}
                    </div>
                    <div className="cart-footer">
                        {dataCart && dataCart.items && dataCart.items.length > 0 ? (
                            <>
                                <span className="totalPrice">
                                    Giá sản phẩm: {dataCart?.totalPrice + 'đ'}
                                </span>
                                <span className="btn-cart">
                                    <button onClick={() => handlePayment()}>Thanh Toán</button>
                                </span>
                            </>
                        ) : (
                            <span className="btn-cart">
                                <button onClick={() => setShowCart(!showCart)}>Tiếp tục mua sắm</button>
                            </span>
                        )}
                    </div>
                </div >
            )}
        </>
    );
};

export default ModelShowCart;