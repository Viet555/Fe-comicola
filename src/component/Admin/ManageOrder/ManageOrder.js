import { useEffect, useState } from "react"
import { Table } from "react-bootstrap"
import * as action from '../../Store/export'
import { useDispatch, useSelector } from "react-redux"
import ModelDetailOrder from "./ModelDetailOrder"
import { toast } from "react-toastify"
const ManageOrder = () => {


    const [show, setShow] = useState(false)
    const [detailOrder, setDetailOrder] = useState()

    const dispatch = useDispatch()
    useEffect(() => {
        getListOrder()
    }, [])
    const getListOrder = () => {
        dispatch(action.getHistoryOrderByRedux('ALL_ORDERS'))
    }
    const listOrder = useSelector(state => state.admin.historyOrder)
    const handleShowModelOrder = (e) => {
        if (e) {
            setShow(!show)
            setDetailOrder(e)
        }
        else {
            toast.error('lỗi dữ liệu')
        }
    }
    return (
        <>
            <Table striped bordered hover className='text-center col-12'>
                <thead style={{ background: "rgb(83, 168, 237)" }} className="col-12">
                    <tr>
                        <th>order Code</th>
                        <th>phone number </th>
                        <th>Status</th>
                        <th>Method </th>
                        <th>Total Price</th>

                    </tr>
                </thead>
                <tbody >
                    {listOrder && listOrder.length > 0 &&
                        listOrder.map((item, index) => {
                            const isDisabled = item.status === 'Completed' || item.status === 'Canceled';
                            return (

                                <tr
                                    key={`table-user-manager${index}`}
                                // className={isDisabled ? 'disabled-row' : ''}
                                // style={{ pointerEvents: isDisabled ? 'none' : 'auto', opacity: isDisabled ? 0.5 : 1 }}
                                >

                                    <td>{item.orderCode} </td>
                                    <td>{item.phoneNumber}</td>
                                    <td ><span style={{ backgroundColor: item.status === 'Pending' ? `yellow` : item.status === 'Completed' ? `green` : item.status === 'Canceled' ? 'rgb(226, 77, 77)' : 'transparent', padding: '5px', borderRadius: '5px' }}>{item.status}</span></td>
                                    <td>{item.paymentMethod}</td>

                                    <td>{item.totalAmount}₫</td>

                                    <td>
                                        <i className="fa-solid fa-ellipsis" style={{ cursor: 'pointer' }}
                                            onClick={() => handleShowModelOrder(item)}
                                        ></i>
                                    </td>

                                </tr>
                            )
                        })

                    }
                    {listOrder && listOrder.length === 0 &&
                        <tr>
                            <td colSpan={'7'}>
                                not foud order
                            </td>
                        </tr>
                    }
                </tbody>
            </Table>
            <ModelDetailOrder
                show={show}
                setShow={setShow}
                detailOrder={detailOrder}
                getListOrder={getListOrder}
            />
        </>
    )
}
export default ManageOrder