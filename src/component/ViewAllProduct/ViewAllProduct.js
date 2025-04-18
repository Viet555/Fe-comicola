import Select from 'react-select'
import './ViewAllProduct.scss'
import { NavLink, useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux'
import * as action from '../Store/export'
import { useEffect, useState } from 'react'
import { sortOption } from '../../constants';
const ViewAllProduct = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [sort, SetSort] = useState('')
    useEffect(() => {
        dispatch(action.getdataProductBysort(sort))

    }, [sort])
    useEffect(() => {
        if (sortOption) {
            SetSort(sortOption[0].value)
        }
    }, [])
    let ProductSort = useSelector(state => state.admin.dataProductSort)
    const handleChangSort = (e) => {
        SetSort(e.value)
    }
    return (
        <>
            <div className="view-all-container container">
                <div className="content-header">
                    <span className='home' ><NavLink to='/' className='nav-link'>Trang chủ/</NavLink></span>
                    <span className='product-name mx-1'>Xem toàn bộ sản phẩm </span>
                </div>
                <div className='sort-product '>
                    <span className='text-view'>Hiển thị {ProductSort.length} kết quả</span>
                    <span className='Sort-by'>
                        <Select

                            options={sortOption}
                            defaultValue={sortOption[0]}
                            onChange={(e) => handleChangSort(e)}
                        />
                        {/* <select >
                            <option >qweqwewq</option>
                            <option>qweqwewq</option>
                        </select> */}
                    </span>
                </div>
                <div className='content-viewAll'>
                    <div className='NewProduct-content col-12 '>

                        {ProductSort && ProductSort.length > 0 &&
                            ProductSort.map((item, index) => {
                                return (
                                    <div className='content col-3' key={{ index }}
                                        onClick={() => navigate(`/DetailProduct/${item._id}`, window.scroll(0, 0))}
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

                </div>
            </div>
        </>
    )
}
export default ViewAllProduct