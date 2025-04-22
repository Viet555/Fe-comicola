import { use, useEffect, useState } from "react"
import * as action from '../../Store/export'
import { useDispatch, useSelector } from "react-redux"
import _ from "lodash"
import { NavLink } from "react-router-dom"
import { toast } from "react-toastify"
import { Button, Modal } from "react-bootstrap"

const Order = (props) => {
    const dispatch = useDispatch()
    const userId = useSelector(state => state.user.account.id)
    const dataHistory = useSelector(state => state.user.historyOrder)
    const [detailOrder, setDetailOrder] = useState()
    const [isShow, setIsshow] = useState(false)
    const [showDetail, setShowDetail] = useState(false)
    useEffect(() => {

        if (userId && !_.isEmpty(userId))
            dispatch(action.getHistoryOrderByRedux(userId))
    }, [userId])
    const handleShowDetailOrder = (e) => {
        if (e) {
            setShowDetail(!showDetail)
            setDetailOrder(e)
        } else {
            toast.error('khong tim thay du lieu')
        }
    }
    return (
        <>
            <div className="Order-main">

                <div className="header-order">Orders</div>

                <div className="content-order ">
                    <div className='content-orderProduct'>
                        <div className='thead '>
                            <div className='codeOrder'>Mã đơn</div>
                            <div className='dateOrder'>Ngày đặt</div>
                            <div className='payment'>Thanh toán</div>
                            <div className='status'>Trạng thái</div>
                            <div className='into-money'>Tổng tiền</div>

                        </div>

                        {dataHistory && dataHistory.length > 0 ?
                            dataHistory.map((item) => {
                                return (
                                    <div className='tbody p-3' onClick={() => handleShowDetailOrder(item)}>

                                        <div className='codeOrder-body'>
                                            <span className='name-product'>{item.orderCode}</span>
                                        </div>
                                        <div className='dateOrder-body'>{item.createdAt}</div>
                                        <div className='payment-body'>{item.paymentMethod}</div>
                                        <div className='status-body'><span style={{ backgroundColor: item.status === 'Pending' ? `yellow` : item.status === 'Completed' ? `green` : item.status === 'Canceled' ? 'rgb(226, 77, 77)' : 'transparent', padding: '4px', borderRadius: '5px' }}>{item.status}</span></div>
                                        <div className='into-money'>{item.totalAmount}đ</div>

                                    </div>
                                )
                            })
                            : <div className="content-order-empty ">
                                <span className="ct1">Bạn chưa có đơn hàng nào</span>
                                <span className="ct2"><NavLink to='/' className='nav-link'>Tiếp tục mua sắm</NavLink></span>
                            </div>
                        }
                    </div>
                    {isShow === true &&

                        <div className="Model-Order-container container">
                            <div className="header-model-order">Chi tiết thanh toán</div>
                            <div className="btn-order-view">
                                <button>Đóng</button>
                            </div>
                        </div>
                    }
                </div>

            </div>
            <Modal
                show={showDetail}
                onHide={() => setShowDetail(false)}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Detail Order <span style={{ backgroundColor: detailOrder?.status === 'Pending' ? `yellow` : detailOrder?.status === 'Completed' ? `green` : detailOrder?.status === 'Canceled' ? 'rgb(226, 77, 77)' : 'transparent', padding: '5px', fontSize: '16px', borderRadius: '5px' }}>
                        {detailOrder?.status}</span>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="oders-container">
                        {detailOrder && detailOrder?.items && detailOrder?.items?.length > 0 &&
                            detailOrder?.items.map((item) => {
                                return (
                                    <div className="content-main">
                                        <img src={item.productId.image1} />
                                        <div className="content-order">
                                            <p><span className="bold-text">Name:</span> {item.productId.nameProduct}</p>
                                            <p><span className="bold-text">price:</span> {item.productId.count}₫</p>
                                            <p><span className="bold-text">quantity:</span> {item.quantity}</p>
                                            <p><span className="bold-text">Total: </span>{item.price}đ</p>
                                        </div>
                                    </div>
                                )
                            })}


                        <div className="content-child ">
                            <div className='content'><span className="bold-text">Address: </span>{detailOrder?.address}</div>
                            <div className="content"><span className="bold-text">Total Price: </span>{detailOrder?.totalAmount}đ</div>
                            <div className="content"><span className="bold-text">Payment : </span>{detailOrder?.paymentMethod}</div>
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    {/* <Button variant="secondary" onClick={setShow}>
                        Close
                    </Button> */}

                </Modal.Footer>
            </Modal>
        </>
    )
}
export default Order