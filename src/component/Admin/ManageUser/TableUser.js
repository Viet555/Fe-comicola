import { useEffect, useState } from "react"
import { Table } from "react-bootstrap"
import { DeleteUser, getAllUserTable } from "../../../service/ApiService"
import { toast } from "react-toastify"
import ReactPaginate from "react-paginate"
import { IconContext } from "react-icons"; // for customizing icons
import { AiFillLeftCircle, AiFillRightCircle } from "react-icons/ai"; // icons form react-icons


const TableUser = (props) => {
    // const [listUSer, setListUser] = useState('')

    const { handleEditUser, listUSer, handleGetUserTable, currentPages, totalPages, setCurrentPages } = props


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

    const handlePageClick = (event) => {
        setCurrentPages(+event.selected + 1)
    };
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
            <div className="paginate-main d-flex gap-3 " style={{ justifyContent: 'center', alignItems: 'center', padding: '23px' }}>
                <ReactPaginate
                    containerClassName={"pagination gap-4"}
                    pageClassName={"page-item"}
                    activeClassName={""}
                    onPageChange={handlePageClick}
                    nextLabel={
                        <IconContext.Provider value={{ color: "#B8C1CC", size: "36px" }}>
                            <AiFillRightCircle />
                        </IconContext.Provider>

                    }
                    pageCount={totalPages}
                    breakLabel="..."
                    previousLabel={
                        <IconContext.Provider value={{ color: "#B8C1CC", size: "36px" }}>
                            <AiFillLeftCircle />
                        </IconContext.Provider>
                    }

                    forcePage={currentPages - 1}//currentPage = 1 => 1-1 =0 => quay ve trag dau
                />
            </div>
        </>
    )
}
export default TableUser