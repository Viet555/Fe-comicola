import { use, useEffect, useState } from "react"
import * as action from '../../Store/export'
import { useDispatch, useSelector } from "react-redux"
import _ from "lodash"

const Order = (props) => {
    const dispatch = useDispatch()
    const userId = useSelector(state => state.user.account.id)
    const dataHistory = useSelector(state => state.user.historyOrder)

    const [isShow, setIsshow] = useState(false)
    useEffect(() => {

        if (userId && !_.isEmpty(userId))
            dispatch(action.getHistoryOrderByRedux(userId))
    }, [userId])
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
                                    <div className='tbody p-3'>

                                        <div className='codeOrder-body'>
                                            <span className='name-product'>{item.orderCode}</span>
                                        </div>
                                        <div className='dateOrder-body'>{item.createdAt}</div>
                                        <div className='payment-body'>{item.paymentMethod}</div>
                                        <div className='status-body'><span style={{ backgroundColor: 'yellow', padding: '4px', borderRadius: '5px' }}>{item.status}</span></div>
                                        <div className='into-money'>{item.totalAmount}đ</div>

                                    </div>
                                )
                            })
                            : <div className="content-order-empty ">
                                <span className="ct1">Bạn chưa có đơn hàng nào</span>
                                <span className="ct2">Tiếp tục mua sắm</span>
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
        </>
    )
}
export default Order