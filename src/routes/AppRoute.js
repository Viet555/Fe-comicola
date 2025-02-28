import { Route, Routes } from "react-router-dom";
import Home from "../component/Home/Home";
import Login from "../component/Header/Login/Login";
import Register from "../component/Header/Login/Register";
import ManageUSer from "../component/Admin/ManageUser/ManageUser";
const AppRoute = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/Register" element={<Register />} />

                <Route path="/ManageUser" element={<ManageUSer />} />
            </Routes>
        </>
    )
}
export default AppRoute