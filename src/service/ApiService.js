import axios from "../utils/CustomizeAxios";
const getAllUserTable = (id, limit, page) => {
    return axios.get(`/api/GetAllUser?id=ALL&limit=${limit}&page=${page}`)
}
const createUser = (dataCreate) => {
    return axios.post('/api/CreateUSer', dataCreate)
}
const DeleteUser = (UserId) => {

    return axios.delete(`/api/DeleteUser?id=${UserId}`)
}
const UpdateAUser = (_id, firstName, lastName, roleId, address, gender, image) => {
    return axios.put('/api/UpdateUser', { _id, firstName, lastName, roleId, address, gender, image })
}
const UpdateUserAndPass = (dataEdit) => {
    return axios.put('/api/UpdateUser', dataEdit)
}
const UserLogin = (dataLog) => {
    return axios.post('/api/LoginUser', dataLog)
}

const fetchAllDataType = () => {
    return axios.get('/api/Get-dataType-product',)
}
const createNewProduct = (dataCreate) => {
    return axios.post('/api/Create-product', dataCreate)
}
const getDataProductByType = (type, limit, page) => {
    return axios.get(`/api/getAllproductByType?type=${type}&limit=${limit}&page=${page}`)
}
const deleteAProduct = (productId) => {
    return axios.delete(`/api/deleteAProduct?id=${productId}`)
}
const ApiUpdateProduct = (dataUpdate) => {
    return axios.put(`/api/Update-Product`, dataUpdate)
}

const ApiFetchAllProductByType = (type, limit) => {
    return axios.get(`/fetchAllProduct-byType?type=${type}&limit=${limit}`,)
}
const ApiCreateNewBanner = (dataBanner) => {
    return axios.post(`/api/Create-banner`, dataBanner)
}
const ApitfetchAllBannerByAction = (action) => {
    return axios.get(`/api/fetch-all-banner?action=${action}`,)
}
const ApiDeleteBanner = (id) => {
    return axios.delete(`/api/Delete-banner?id=${id}`,)
}
const ApiUpdateBanner = (dataUpdate) => {
    return axios.put(`/api/update-banner`, dataUpdate)
}
const GetDetailProduct = (id) => {
    return axios.get(`/getAproduct-Detail?id=${id}`)
}
const handleMarkdown = (data) => {
    return axios.post(`/Create-Update-Markdown`, data)
}
const AllProductBySort = (sort) => {

    return axios.get(`/fetchAllProduct-bySort?sort=${sort}`,)
}
const addProductInCart = (userId, productId, quantity) => {
    return axios.post(`/add-product-tocart`, { userId, productId, quantity })
}
const getProductCart = (userId,) => {
    return axios.get(`/get-product-tocart?userId=${userId}`,)
}
const DeleteProductCart = (userId, productId) => {
    return axios.delete(`/Delete-product-cart-User?userId=${userId}&productId=${productId}`)
}
const orderCheckOutProduct = (userId, paymentMethod, address, phoneNumber) => {
    return axios.post(`/Ordercheckout-Product`, { userId, paymentMethod, address, phoneNumber })
}
const getHistoryOrder = (userId,) => {
    return axios.get(`/api/getHistory-Order?userId=${userId}`)
}
const searchProduct = (name) => {
    return axios.get(`/api/Search-product?name=${name}`,)
}
export {
    getAllUserTable, createUser, DeleteUser, UpdateAUser,
    UserLogin, fetchAllDataType, createNewProduct, getDataProductByType, deleteAProduct, ApiUpdateProduct, ApiFetchAllProductByType,
    ApiCreateNewBanner, ApitfetchAllBannerByAction, ApiDeleteBanner, ApiUpdateBanner, GetDetailProduct, handleMarkdown,
    AllProductBySort, addProductInCart, getProductCart, DeleteProductCart, orderCheckOutProduct, getHistoryOrder, UpdateUserAndPass, searchProduct
} 