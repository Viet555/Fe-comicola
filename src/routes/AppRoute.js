import { Route, Routes } from "react-router-dom";
import Home from "../component/Home/Home";
import Login from "../component/Header/Login/Login";
import Register from "../component/Header/Login/Register";
import ManageUSer from "../component/Admin/ManageUser/ManageUser";
import ManageProducts from "../component/Admin/ManageProduct/ManageProducts";
import ManageBanner from "../component/Admin/ManageBanner/ManageBanner";
import DetailProduct from "../component/DetailProduct.js/DetailProduct";
import MarkdownProduct from "../component/Admin/MarkDownProduct/MarkdownProduct";
import ViewAllProduct from "../component/ViewAllProduct/ViewAllProduct";
import PaymentProduct from "../component/Header/PaymentProduct";
import ProfileUser from "../component/Header/ProfileUser/ProfileUser";
import Dashboard from "../component/Header/ProfileUser/Dashboard";
import Order from "../component/Header/ProfileUser/Order";
import ProfileAccount from "../component/Header/ProfileUser/ProfileAccount";
import ViewProductFind from "../component/Header/ViewProductFind";
import ViewProductByType from "../component/DetailProduct.js/ViewProductByType";
import ManageOrder from '../component/Admin/ManageOrder/ManageOrder'
import Pagebanned from "../404Page";
const AppRoute = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/Register" element={<Register />} />

                <Route path="/ManageUser" element={<ManageUSer />} />
                <Route path="/ManageProduct" element={<ManageProducts />} />
                <Route path="/ManageBanner" element={<ManageBanner />} />

                <Route path="/DetailProduct/:id" element={<DetailProduct />} />
                <Route path="/ManageMarkdown" element={<MarkdownProduct />} />

                <Route path="/viewAllproDuct" element={<ViewAllProduct />} />
                <Route path="/Payment-product" element={<PaymentProduct />} />

                <Route path="/manage-profile-user" element={<ProfileUser />} >
                    <Route index element={<Dashboard />} />
                    <Route path="order-user" element={<Order />} />
                    <Route path="account" element={<ProfileAccount />} />
                </Route>
                <Route path="/View-product-find" element={<ViewProductFind />} />
                <Route path="/View-product-Type" element={<ViewProductByType />} />
                <Route path="/Manage-order-product" element={<ManageOrder />} />

                <Route path="/404-page" element={<Pagebanned />} />
            </Routes>
        </>
    )
}
export default AppRoute