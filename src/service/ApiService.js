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
export { getAllUserTable, createUser, DeleteUser, UpdateAUser, UserLogin, fetchAllDataType, createNewProduct, getDataProductByType } 