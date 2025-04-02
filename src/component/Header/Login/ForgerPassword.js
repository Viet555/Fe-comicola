import React, { useState } from 'react';
import axios from '../../../utils/CustomizeAxios';
import { toast } from 'react-toastify';

const ForgotPassword = () => {
    const [email, setEmail] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post("/forgot-password", { email });
            toast.success("Email đặt lại mật khẩu đã được gửi!");
        } catch (error) {
            console.log(error)
            toast.error('error');
        }
    };

    return (
        <div className='text-center'>
            <h2>Quên mật khẩu</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="email"
                    placeholder="Nhập email của bạn"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <button type="submit">Gửi yêu cầu</button>
            </form>
        </div>
    );
};

export default ForgotPassword;
