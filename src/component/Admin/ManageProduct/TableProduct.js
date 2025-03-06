const TableProduct = () => {
    return (
        <>
            <Table striped bordered hover className='text-center col-12'>
                <thead style={{ background: "rgb(83, 168, 237)" }} className="col-12">
                    <tr>
                        <th>Name Product</th>
                        <th>count </th>
                        <th>code</th>
                        <th>typeProduct </th>
                        <th>Image</th>

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
                                            // onClick={() => handleDeleteUser(item)}
                                            >
                                                <i className="fa-solid fa-trash-can "></i></button>
                                            <button className='btn btn-warning px-3'
                                            // onClick={() => handleEditUser(item,)}
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
export default TableProduct