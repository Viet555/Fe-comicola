import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import _ from "lodash"
import { UpdateUserAndPass } from "../../../service/ApiService"
import { toast } from "react-toastify"
const ProfileAccount = () => {
    const dispatch = useDispatch()
    const user = useSelector(state => state.user.account)
    const [check, setCheck] = useState(true)

    const [formProfile, setFormProfile] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        currentPassword: '',
        confirmPassword: '',
        newPassword: '',
        _id: ''

    })
    useEffect(() => {
        if (user && !_.isEmpty(user)) {
            setFormProfile({
                ...formProfile,
                firstName: user.firstName,
                lastName: user.lastName,
                phoneNumber: user.phoneNumber ? user.phoneNumber : '',
                email: user.email,
                _id: user.id

            })
        }
    }, [user])
    const handleOnchange = (e) => {
        setFormProfile({
            ...formProfile,
            [e.target.name]: e.target.value
        })
    }
    const checkpass = () => {
        if (formProfile.newPassword !== formProfile.confirmPassword) {
            setCheck(false)
        } else {
            setCheck(true)
        }
    }
    const handleSubmit = async () => {
        checkpass()
        console.log(formProfile)
        let res = await UpdateUserAndPass(formProfile)
        console.log(res)
        if (res && res.EC === 0) {
            toast.success('Update Success')
            setFormProfile({
                ...formProfile,
                currentPassword: '',
                confirmPassword: '',
                newPassword: '',
            })
        }
        else {
            toast.error(res.MES)
        }
    }
    return (

        <>
            <div className="account-container container">

                <div className="form-content d-flex px-5" style={{ justifyContent: 'space-between' }}>
                    <div className="form-group col-5">
                        <label>First Name<span style={{ color: 'red' }}>*</span></label>
                        <input className="form-control" value={formProfile.firstName} name="firstName" onChange={(handleOnchange)} />
                    </div>
                    <div className="form-group col-5">
                        <label>Last Name<span style={{ color: 'red' }}>*</span></label>
                        <input className="form-control" value={formProfile.lastName} name="lastName" onChange={(handleOnchange)} />
                    </div>
                    <div className="form-group col-5">
                        <label>Địa chỉ email <span style={{ color: 'red' }}>*</span></label>
                        <input className="form-control" value={formProfile.email} disabled />
                    </div>
                    <div className="form-group col-5">
                        <label>phone Number <span style={{ color: 'red' }}>*</span></label>
                        <input className="form-control" value={formProfile.phoneNumber} name="phoneNumber" onChange={(handleOnchange)} />
                    </div>
                    <div className="col-12">
                        <p style={{ fontSize: '24px ', marginTop: '26px', fontWeight: '600', borderBottom: '1px solid #a89a97' }}> Thay đổi mật khẩu</p>
                        <div className="form-group col-12 py-2">
                            <label>Mật khẩu hiện tại (bỏ trống nếu không đổi)</label>
                            <input className="form-control"
                                type="password"
                                value={formProfile.currentPassword} name="currentPassword" onChange={(handleOnchange)} />
                        </div>
                        <div className="form-group col-12 py-2">
                            <label>Mật khẩu mới (bỏ trống nếu không đổi)</label>
                            <input className="form-control"
                                type="password"
                                value={formProfile.newPassword} name="newPassword" onChange={(handleOnchange)} />
                            {check === false && <p style={{ color: 'red' }}>passwords do not match</p>}
                        </div>
                        <div className="form-group col-12 py-2">
                            <label> Xác nhận mật khẩu mới</label>
                            <input className="form-control"
                                type="password"
                                value={formProfile.confirmPassword} name="confirmPassword" onChange={(handleOnchange)} />
                            {check === false && <p style={{ color: 'red' }}>passwords do not match</p>}
                        </div>
                    </div>
                    <div className="btn-save-account">
                        <button className="btn btn-primary p-2 " onClick={() => handleSubmit()}>Save Change</button>
                    </div>
                </div>


            </div>
        </>
    )
}
export default ProfileAccount