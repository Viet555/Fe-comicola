import axios from "../utils/CustomizeAxios";
const getAllUserTable = () => {
    return axios.get('/api/GetAllUser')
}
const createUser = (dataCreate) => {
    return axios.post('/api/CreateUSer', dataCreate)
}
const DeleteUser = (UserId) => {
    console.log(UserId)
    return axios.delete(`/api/DeleteUser?id=${UserId}`)
}
export { getAllUserTable, createUser, DeleteUser }