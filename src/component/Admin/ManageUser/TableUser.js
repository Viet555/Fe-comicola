import { useEffect, useState } from "react"
import { Table } from "react-bootstrap"
import { getAllUserTable } from "../../../service/ApiService"

const TableUser = () => {
    const [listUSer, setListUser] = useState('')
    useEffect(() => {
        handleGetUserTable()
    }, [])
    const handleGetUserTable = async () => {

        let response = await getAllUserTable()
        if (response && response.data && response.EC === 0) {
            let data = response.data
            setListUser(data)
        }
    }
    console.log('list', listUSer)
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
                <tbody>
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
                                    <td>{item.image}</td>

                                    <td>
                                        <div className='action-btn '>
                                            <button
                                                className='btn btn-danger mx-3 px-3'
                                            // onClick={() => handleDeleteUser(item)}
                                            >
                                                <i className="fa-solid fa-trash-can "></i></button>
                                            <button className='btn btn-warning px-3'
                                            // onClick={() => handleEditUser(item, imageBuffer)}
                                            ><i className="fa-solid fa-pen-to-square "></i></button></div>
                                    </td>

                                </tr>
                            )
                        })

                    }




                    {/* {listUser && listUser.length === 0 &&
                        <tr>
                            <td colSpan={'6'}>
                                not foud User
                            </td>
                        </tr>
                    } */}
                </tbody>
            </Table>



        </>
    )
}
export default TableUser