import axios from "../utils/CustomizeAxios";
const getAllUserTable = () => {
    return axios.get('/api/GetAllUser')
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
export { getAllUserTable, createUser, DeleteUser, UpdateAUser } 