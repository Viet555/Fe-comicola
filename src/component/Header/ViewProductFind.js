import { useSelector } from "react-redux"
import { NavLink, useLocation, useNavigate } from "react-router-dom"
import Select from "react-select"

const ViewProductFind = () => {
    const navigate = useNavigate()
    const location = useLocation()

    let data = useSelector(state => state.user.dataFind)
    return (
        <>
            <div className="view-all-container container">
                <div className="content-header">
                    <span className='home' ><NavLink to='/' className='nav-link'>Trang chủ/</NavLink></span>
                    <span className='product-name mx-1'></span>
                </div>
                <div className='sort-product '>
                    <span className='text-view'>{data.length} kết quả</span>
                    {/* <span className='Sort-by'>
                        <Select

                            options={sortOption}
                            defaultValue={sortOption[0]}
                            onChange={(e) => handleChangSort(e)}
                        />
                    
                    </span> */}
                </div>
                <div className='content-viewAll'>
                    <div className='NewProduct-content col-12 '>

                        {data && data.length > 0 ?
                            data.map((item, index) => {
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
                                        <div className='add-cart'> <span> <i className="fa-solid fa-cart-shopping mx-2"></i></span>Thêm vào giỏ hàng</div>
                                    </div>
                                )
                            })
                            :
                            <div>
                                <span className='text-view'>Không có sản phẩm nào.</span>

                            </div>
                        }
                    </div>

                </div>
            </div>
        </>
    )
}
export default ViewProductFind