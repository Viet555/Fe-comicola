import { Table } from "react-bootstrap"

const TableUser = () => {
    return (
        <>
            <Table striped bordered hover className='text-center col-12'>
                <thead style={{ background: "rgb(83, 168, 237)" }} className="col-12">
                    <tr>
                        <th>ID</th>
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



                    <tr>
                        <td>1</td>
                        <td>2</td>
                        <td>3</td>
                        <td>4</td>
                        <td>5</td>
                        <td>6</td>
                        <td>7</td>
                        <td></td>
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