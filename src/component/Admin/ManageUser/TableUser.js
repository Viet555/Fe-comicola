import { useEffect, useState } from "react"
import { Table } from "react-bootstrap"
import { DeleteUser, getAllUserTable } from "../../../service/ApiService"
import { toast } from "react-toastify"

const TableUser = (props) => {
    // const [listUSer, setListUser] = useState('')

    const { handleEditUser, listUSer, handleGetUserTable } = props
    useEffect(() => {
        handleGetUserTable()
    }, [])
    // const handleGetUserTable = async () => {

    //     let response = await getAllUserTable()
    //     if (response && response.data && response.EC === 0) {
    //         let data = response.data
    //         setListUser(data)
    //     }
    // }
    const handleDeleteUser = async (item) => {
        console.log(item._id)
        if (item && item._id) {
            let response = await DeleteUser(item._id)
            if (response && response.EC === 0) {
                toast.success(response.MES)
                handleGetUserTable()
            }
            if (response && response.EC !== 0) {
                toast.error(response.MES)
            }
        }
    }
    return (
        <>
            <Table striped bordered hover className='text-center col-12'>
                <thead style={{ background: "rgb(83, 168, 237)" }} className="col-12">
                    <tr>
                        <th>first Name</th>
                        <th>last Name </th>
                        <th>Email</th>
                        <th>Gender </th>
                        <th>Address</th>
                        <th>Role</th>
                        <th>Image</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody >
                    {listUSer && listUSer.length > 0 &&
                        listUSer.map((item, index) => {

                            return (

                                <tr key={`table-user-manager${index}`}>

                                    <td>{item.firstName} </td>
                                    <td>{item.lastName}</td>
                                    <td>{item.email}</td>
                                    <td>{item.gender}</td>
                                    <td>{item.address}</td>
                                    <td>{item.roleId}</td>
                                    <td><img className="img-tabel " style={{ width: "60px" }} src={item.image} /></td>

                                    <td>
                                        <div className='action-btn '>
                                            <button
                                                className='btn btn-danger mx-3 px-3'
                                                onClick={() => handleDeleteUser(item)}
                                            >
                                                <i className="fa-solid fa-trash-can "></i></button>
                                            <button className='btn btn-warning px-3'
                                                onClick={() => handleEditUser(item,)}
                                            ><i className="fa-solid fa-pen-to-square "></i></button></div>
                                    </td>

                                </tr>
                            )
                        })

                    }


                    {listUSer && listUSer.length === 0 &&
                        <tr>
                            <td colSpan={'7'}>
                                not foud User
                            </td>
                        </tr>
                    }
                </tbody>
            </Table>



        </>
    )
}
export default TableUser