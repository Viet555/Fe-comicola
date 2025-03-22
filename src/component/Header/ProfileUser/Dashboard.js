import { useEffect, useState } from "react"
import { useNavigate, useOutletContext } from "react-router-dom"
import _ from 'lodash'
const Dashboard = () => {
    const dataUser = useOutletContext()
    const [dataUserRedux, setDataUserRedux] = useState()
    const navigate = useNavigate()
    useEffect(() => {

        if (dataUser && !_.isEmpty(dataUser)) {
            setDataUserRedux(dataUser.dataUser)
        }
    }, [dataUser])

    return (
        <>
            <div className="main-dash p-3 " style={{ fontSize: '17px' }}>
                Xin chào <span style={{ fontWeight: 'bold' }}>{dataUserRedux?.email ? dataUserRedux?.email : ''}</span> (không phải tài khoản <span style={{ fontWeight: 'bold' }}>{dataUserRedux?.email ? dataUserRedux?.email : ''}</span>? Hãy thoát ra và đăng nhập vào tài khoản của bạn)
                <br></br>
                <br></br>
                Từ trang quản lý tài khoản bạn có thể xem <span style={{ color: '#fd6e4f', cursor: 'pointer' }} onClick={() => navigate("/manage-profile-user/order-user")}>đơn hàng mới</span>,quản lý địa chỉ giao hàng và thanh toán, and  <span style={{ color: '#fd6e4f', cursor: 'pointer' }} onClick={() => navigate("/manage-profile-user/account")}> sửa mật khẩu và thông tin tài khoản.</span>
            </div>
        </>
    )
}
export default Dashboard