import { useEffect, useState } from "react"
import CreateUser from "./CreateUser"
import TableUser from "./TableUser"
import ModalEditUser from "./ModalEditUser"
import { getAllUserTable } from "../../../service/ApiService"

const ManageUSer = () => {
    let limit = 6

    const [isshow, setIsShow] = useState(false)
    const [listUSer, setListUser] = useState('')
    const [dataEdit, setDataUserEdit] = useState('')
    const [totalPages, setTotalpages] = useState(0)
    const [currentPages, setCurrentPages] = useState(1)
    const handleEditUser = (user) => {
        setIsShow(!isshow)
        console.log(user)
        setDataUserEdit(user)

    }
    useEffect(() => {

        handleGetUserTable('ALL', limit, currentPages);

    }, [currentPages]);

    const handleGetUserTable = async () => {

        let response = await getAllUserTable('ALL', limit, currentPages)
        if (response && response.data && response.EC === 0) {
            let data = response.data
            setListUser(data)
        }
        if (response && response.totalPages) {
            setTotalpages(response.totalPages)

        }
    }
    const selectGender = [
        { value: 'Male', label: 'Male' },
        { value: 'Female', label: 'Female' },
        { value: 'Other', label: 'Other' }
    ]
    const selectRole = [
        { value: 'user', label: 'user' },
        { value: 'admin', label: 'admin' },

    ]
    return (
        <>
            <CreateUser
                handleGetUserTable={handleGetUserTable}
                selectGender={selectGender}
                selectRole={selectRole}
            />
            <TableUser
                handleGetUserTable={handleGetUserTable}
                listUSer={listUSer}
                handleEditUser={handleEditUser}
                totalPages={totalPages}
                currentPages={currentPages}
                setCurrentPages={setCurrentPages}
            />
            <ModalEditUser

                handleGetUserTable={handleGetUserTable}
                selectGender={selectGender}
                selectRole={selectRole}
                show={isshow}
                setShow={setIsShow}
                dataUserEdit={dataEdit}
            />

        </>
    )
}
export default ManageUSer