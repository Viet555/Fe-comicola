import { Button, Modal } from "react-bootstrap"
import './ModelDetailOrder.scss'
import { StatusOrder } from "../../../service/ApiService"
import { useEffect, useState } from "react"
import { toast } from "react-toastify"
const ModelDetailOrder = (props) => {
    const { show, setShow, detailOrder, getListOrder } = props
    const [idOrder, setIdOrder] = useState('')
    useEffect(() => {
        if (detailOrder && detailOrder?._id) {
            setIdOrder(detailOrder?._id)
        }
    }, [detailOrder])
    const handlePutStatusOrder = async (e) => {

        if (e.target.value) {
            let res = await StatusOrder(idOrder, e.target.value)
            if (res && res.EC === 0) {
                toast.success(res.MES)
                setShow(!show)
                getListOrder()
            }
            else {
                toast.error(res?.MES)
            }
        }

    }
    return (
        <>
            <Modal
                show={show}
                onHide={setShow}
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
                    <Button variant="warning" value='DELETE'
                        onClick={(e) => handlePutStatusOrder(e)}>
                        <i className="fa-solid fa-trash-can" ></i>
                    </Button>
                    <Button variant="danger" value='NO' onClick={(e) => handlePutStatusOrder(e)}>cancle</Button>
                    <Button variant="success" value='OK' onClick={(e) => handlePutStatusOrder(e)}>Comfirm Order</Button>

                </Modal.Footer>
            </Modal>
        </>
    )
}
export default ModelDetailOrder