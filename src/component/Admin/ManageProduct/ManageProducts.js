import { use, useEffect, useState } from "react"
import CreateProduct from "./CreateProduct"
import { useDispatch, useSelector } from "react-redux"
import * as action from '../../Store/export'
import _ from "lodash"
import { getDataProductByType } from "../../../service/ApiService"
import TableProduct from "./TableProduct"
import ModalEditUser from "./ModalEditProduct"
const ManageProducts = () => {
    const dispatch = useDispatch()
    const [listTypeProduct, setListTypeProduct] = useState([])
    const [totalPages, setTotalpages] = useState(0)
    const [type, setType] = useState('')
    const [currentPages, setCurrentPages] = useState(1)
    const [listProduct, setListProduct] = useState('')
    const listType = useSelector(state => state.admin.typeProduct)

    const [isShow, setIsShow] = useState(false)
    const [dataProductEdit, setDataProductEdit] = useState()
    const limit = 6
    console.log(type)
    useEffect(() => {
        dispatch(action.fetchAllTypeProduct())
    }, [])
    useEffect(() => {
        if (listType && !_.isEmpty(listType)) {
            setListTypeProduct(listType)
        }
    }, [listType])
    useEffect(() => {
        fecthProductTable()

    }, [currentPages])
    useEffect(() => {
        if (type) {
            fecthProductTable(); // Gọi hàm khi `type` thay đổi
        }
    }, [type]); // Theo dõi thay đổi của `type`
    const buildDataSelect = (inputData) => {
        let result = [];

        if (inputData && inputData.length > 0 &&
            inputData.map((item, index) => {
                let object = {};
                object.label = item.allCodeInfo?.name
                object.value = item.allCodeInfo?.keyMap
                result.push(object)
            })
        )
            return result;
    }
    const fecthProductTable = async () => {
        let response = await getDataProductByType(type, limit, currentPages)
        if (response && response.EC === 0) {
            setListProduct(response.data)
        }
        if (response && response.totalPages) {
            setTotalpages(response.totalPages)
        }
    }
    // const selectType = listTypeProduct.map(item => ({
    //     name: item.allCodeInfo?.name || "",
    //     keyMap: item.allCodeInfo?.keyMap || ""
    // }));

    const handleEditProduct = (data) => {
        console.log('check', data)
        setIsShow(!isShow)
        if (data) {
            setDataProductEdit(data)
        }

    }
    return (
        <>
            <CreateProduct
                buildDataSelect={buildDataSelect}
                listTypeProduct={listTypeProduct}
                fecthProductTable={fecthProductTable}

            />
            <TableProduct
                handleEditProduct={handleEditProduct}
                listProduct={listProduct}
                currentPages={currentPages}
                totalPages={totalPages}
                listTypeProduct={listTypeProduct}
                buildDataSelect={buildDataSelect}
                setCurrentPages={setCurrentPages}
                setType={setType}
                fecthProductTable={fecthProductTable}
            />
            <ModalEditUser
                fecthProductTable={fecthProductTable}
                buildDataSelect={buildDataSelect}
                listTypeProduct={listTypeProduct}
                show={isShow}
                setShow={setIsShow}
                dataProductEdit={dataProductEdit}
            />
        </>
    )
}
export default ManageProducts