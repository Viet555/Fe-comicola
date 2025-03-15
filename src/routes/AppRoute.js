import { Route, Routes } from "react-router-dom";
import Home from "../component/Home/Home";
import Login from "../component/Header/Login/Login";
import Register from "../component/Header/Login/Register";
import ManageUSer from "../component/Admin/ManageUser/ManageUser";
import ManageProducts from "../component/Admin/ManageProduct/ManageProducts";
import ManageBanner from "../component/Admin/ManageBanner/ManageBanner";
import DetailProduct from "../component/DetailProduct.js/DetailProduct";
import MarkdownProduct from "../component/Admin/MarkDownProduct/MarkdownProduct";
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
            </Routes>
        </>
    )
}
export default AppRoute