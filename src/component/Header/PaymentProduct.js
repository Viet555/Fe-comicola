import './PaymentProduct.scss'
import test from '../../asset/Banner/Dedokhaocoky_Digging_Comishop_04.webp'
import Select from 'react-select'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import * as action from '../Store/export'
import { toast } from 'react-toastify'
import { orderCheckOutProduct } from '../../service/ApiService'
const PaymentProduct = (props) => {
    const params = useParams()
    const dispatch = useDispatch()
    const dataCart = useSelector(state => state.user.cart)
    const dataUseId = useSelector(state => state.user.account?.id)

    const [formOrder, setFormOrder] = useState({
        address: '',
        phoneNumber: '',
        paymentMethod: ''
    })
    const [formErrors, setFormErrors] = useState({
        address: '',
        phoneNumber: '',
        paymentMethod: ''
    })
    const [show, setShow] = useState(false)
    const isValidInput = () => {
        const newErrors = {};
        for (const key in formOrder) {
            if (!formOrder[key]) {
                newErrors[key] = `${key} has not been entered`;
            }
        }

        if (Object.keys(newErrors).length > 0) {
            setFormErrors(newErrors);
            return false;
        }

        setFormErrors({}); // Xóa lỗi nếu hợp lệ
        return true;
    };

    const handleOnchange = (event) => {
        setFormOrder({
            ...formOrder,
            [event.target.name]: event.target.value
        })
        if (event.target.value) {
            setFormErrors({
                ...formErrors,
                [event.target.name]: ''
            })
        }
    }
    const handleOrderProduct = async () => {
        let check = isValidInput()


        if (check == false) {
            toast.error('Missing Input')
            return;
        }
        let res = await orderCheckOutProduct(dataUseId, formOrder.paymentMethod, formOrder.address, formOrder.phoneNumber)
        if (res && res.EC === 0) {
            setShow(true)
            try {
                dispatch(action.getProductcartByRedux(dataUseId))
            } catch (e) {
                console.log(e)
            }
            setTimeout(() => {
                setShow(false);
            }, 2000);
        }
        else {
            toast.warning(res.MES)
        }
    }
    return (
        <>
            <div className="Payment-container container">

                <div className="payment-main">
                    <span className='header-contact'><i className="fa-solid fa-location-dot"></i>Địa chỉ và số địa thoại nhận hàng</span>
                    <div className="info-contact d-flex">
                        <div className="form-group col-6">
                            <label>Adress<span style={{ color: 'red' }}>(*)</span></label>
                            <input
                                name='address'
                                value={formOrder['address']}
                                onChange={(handleOnchange)}
                                className="form-control" />
                            {formErrors.address && <p style={{ color: 'red' }}>Address has not been entered</p>}
                        </div>
                        <div className="form-group col-4 mx-3">
                            <label>Phone Number<span style={{ color: 'red' }}>(*)</span></label>
                            <input
                                name='phoneNumber'
                                value={formOrder['phoneNumber']}
                                onChange={(handleOnchange)}
                                className="form-control" />
                            {formErrors.phoneNumber && <p style={{ color: 'red' }}>phoneNumber has not been entered</p>}
                        </div>
                    </div>
                    <div className='content-orderProduct'>
                        <div className='thead '>
                            <div className='product'>Sản phẩm</div>
                            <div className='type'></div>
                            <div className='price'>Đơn giá </div>
                            <div className='cart-quantity'>Số lượng</div>
                            <div className='into-money'>Thành tiền</div>
                        </div>

                        {dataCart && dataCart.items && dataCart.items.length > 0 ?
                            dataCart.items.map((item) => {
                                return (
                                    <div className='tbody p-3'>
                                        <div className='product-body'>
                                            <img src={item.productId?.image1} />
                                            <span className='name-product'>{item.productId?.nameProduct}</span>
                                        </div>
                                        <div className='type-body'>Type:{Array.isArray(item.productId?.typeProduct) ? item.productId?.typeProduct.join(', ') : item.productId?.typeProduct}</div>
                                        <div className='price-body'>{item.productId?.count}đ</div>
                                        <div className='quantity-body'>{item.quantity}</div>
                                        <div className='money-body'>{item.total}</div>
                                    </div>
                                )
                            })
                            : <p style={{ color: ' #1772ae', fontSize: '17px', textAlign: 'center' }}>Không có sản phẩm trong giỏ hàng</p>


                        }


                    </div>

                    <div className='payment-method'>
                        <div className='Select-method'>
                            <span className='title-select'>Phương thức thanh toán</span>
                            <Select
                                className='col-2'
                                options={[
                                    { value: 'Cash', label: 'Tiền mặt' }
                                ]}
                                onChange={(e) => setFormOrder({
                                    ...formOrder,
                                    paymentMethod: e.value

                                })}
                            />
                            {formErrors.paymentMethod && <p style={{ color: 'red' }}>paymentMethod has not been entered</p>}
                        </div>
                    </div>
                    <div className='total-payment'>
                        <span >Tổng thanh toán :<p className='' style={{ color: 'rgb(237, 91, 12);' }}>{(dataCart.totalPrice ? dataCart.totalPrice : '')}</p></span>
                    </div>
                    <div className='confirm-payment'>
                        <button className='btn-payment' onClick={() => handleOrderProduct()}>Đặt hàng</button>
                    </div>
                </div>
                {show === true &&
                    <div className='model-success'>
                        <i className="fa-solid fa-check"></i>
                        <span>Đặt hàng thành công</span>
                    </div>
                }
            </div>


        </>
    )
}
export default PaymentProduct 