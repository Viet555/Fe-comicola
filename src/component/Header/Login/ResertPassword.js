import React, { useState } from 'react';
import axios from '../../../utils/CustomizeAxios';
import { useParams, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const ResetPassword = () => {
    const { token } = useParams();
    const navigate = useNavigate();
    const [newPassword, setNewPassword] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post(`/reset-password/${token}`, { newPassword });
            toast.success("Mật khẩu đã được đặt lại!");
            navigate("/login");
        } catch (error) {
            console.log(error)
            toast.error('error');
        }
    };

    return (
        <div className='text-center'>
            <h2>Đặt lại mật khẩu</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="password"
                    placeholder="Nhập mật khẩu mới"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    required
                />
                <button type="submit">Đặt lại mật khẩu</button>
            </form>
        </div>
    );
};

export default ResetPassword;
