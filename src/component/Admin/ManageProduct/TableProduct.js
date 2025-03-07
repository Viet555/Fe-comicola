import { useEffect, useState } from "react"
import { Table } from "react-bootstrap"
import { IconContext } from "react-icons"
import { AiFillLeftCircle, AiFillRightCircle } from "react-icons/ai"
import ReactPaginate from "react-paginate"
import Select from 'react-select'
const TableProduct = (props) => {
    const { totalPages, listProduct, currentPages, setCurrentPages, listTypeProduct, buildDataSelect, setType } = props

    const handlePageClick = (event) => {
        setCurrentPages(event.selected + 1)
    }
    const [dataSelectType, setDataSelectType] = useState('')
    useEffect(() => {
        if (listTypeProduct) {
            let typeBuild = buildDataSelect(listTypeProduct)
            setDataSelectType(typeBuild)
        }
    }, [listTypeProduct])
    return (
        <>

            <Select
                className="col-3 p-4 text-center"
                placeholder='Type'
                options={dataSelectType}
                onChange={async (handleChangeType) => {
                    setType(handleChangeType.label)

                }}

            />
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
                    {listProduct && listProduct.length > 0 &&
                        listProduct.map((item, index) => {

                            return (

                                <tr key={`table-user-manager${index}`}>

                                    <td>{item.nameProduct} </td>
                                    <td>{item.count}</td>
                                    <td>{item.code}</td>
                                    <td>{item.typeProduct}</td>

                                    <td><img className="img-tabel " style={{ width: "60px" }} src={item.image1} /></td>

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


                    {listProduct && listProduct.length === 0 &&
                        <tr>
                            <td colSpan={'7'}>
                                not foud Product
                            </td>
                        </tr>
                    }
                </tbody>

            </Table>
            <div className="paginate-main d-flex gap-3 " style={{ justifyContent: 'center', alignItems: 'center', padding: '23px' }}>
                <ReactPaginate
                    containerClassName={"pagination gap-4"}
                    pageClassName={"page-item"}
                    activeClassName={"active"}
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
export default TableProduct