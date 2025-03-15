
import './NewProduct.scss'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import * as action from '../../Store/export'
import { useNavigate } from 'react-router-dom'
const NewProduct = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    let dataProduct = useSelector(state => state.admin.allProduct)
    useEffect(() => {
        dispatch(action.fetchAllProduct('', 8))

    }, [])
    useEffect(() => {
        if (dataProduct && dataProduct.length > 0) {
            setDataNewProduct(dataProduct)
        }
    }, [dataProduct])

    const [dataNewproduct, setDataNewProduct] = useState()
    const [hoverImg, setHoverImg] = useState(false)

    return (
        <>
            <div className="container-NewProduct ">
                <div className="title ">
                    <span className="title-header">Sản Phẩm Mới</span>
                    <span className="title-header2">Sản Phẩm Mới</span>
                </div>
                <div className='container '>

                    <div className='NewProduct-content col-12 '>

                        {dataNewproduct && dataNewproduct.length > 0 &&
                            dataNewproduct.map((item, index) => {
                                return (
                                    <div className='content col-3' key={{ index }}
                                        onClick={() => navigate(`/DetailProduct/${item._id}`)}
                                    >
                                        <img
                                            src={item.image1}
                                            alt={item.nameProduct}
                                            onMouseOver={(e) => {
                                                if (item.image2) e.target.src = item.image2;
                                            }}
                                            onMouseOut={(e) => {
                                                if (item.image2) e.target.src = item.image1;
                                            }}
                                        />
                                        {/* <span className='onsale'>cc</span> */}
                                        <div className='info-product'>
                                            <span className='name-pro'>{item.nameProduct}</span>
                                            <span className='price'>{item.count}đ</span>

                                        </div>
                                        <div className='add-cart'> <span> <i class="fa-solid fa-cart-shopping mx-2"></i></span>Thêm vào giỏ hàng</div>
                                    </div>
                                )
                            })}
                    </div>


                    <div className='all-product'>Xem toàn bộ sản phẩm</div>
                </div>
            </div>
        </>
    )
}
export default NewProduct