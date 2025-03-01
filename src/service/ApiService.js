import axios from "../utils/CustomizeAxios";
const getAllUserTable = () => {
    return axios.get('/api/GetAllUser')
}
const createUser = (dataCreate) => {
    return axios.post('/api/CreateUSer', dataCreate)
}
export { getAllUserTable, createUser }