import './ComicsViet.scss'
import product from '../../../asset/Banner/ChimSeDuKy_Comishop_4.webp'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import * as action from '../../Store/export'
import { ApiFetchAllProductByType } from '../../../service/ApiService'
import { useNavigate } from 'react-router-dom'
const ComicsViet = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        GetdataProductByType()
    }, [])
    const navigate = useNavigate()
    const [datacomicViet, setDataComicViet] = useState()
    const GetdataProductByType = async () => {
        let res = await ApiFetchAllProductByType("Vietnamese comics", 8)
        if (res && res?.EC === 0) {
            setDataComicViet(res?.data)
        }
        else {
            setDataComicViet('')
        }
    }

    return (
        <>
            <div className="ComicsViet-container">
                <div className="title-header">
                    <span className="title-header1">Truyện tranh Việt Nam đặc sắc</span>
                    <span className="title-header2">Các truyện tranh của tác giả Việt Nam</span>
                </div>
                <div className='container '>
                    <div className='Comics-content col-12 '>
                        {datacomicViet && datacomicViet.length > 0 &&
                            datacomicViet.map((item) => {
                                return (
                                    <div className='content col-3'
                                        onClick={() => navigate(`/DetailProduct/${item._id}`, window.scroll(0, 0))}>
                                        <img src={item.image1}
                                            alt={item.nameProduct}
                                            onMouseOver={(e) => {
                                                if (item.image2) e.target.src = item.image2
                                            }}
                                            onMouseOut={(e) => {
                                                if (item.image2) e.target.src = item.image1
                                            }}
                                        />
                                        <div className='info-product'>
                                            <span className='name-pro'>{item.nameProduct}</span>
                                            <span className='price'>{item.count}</span>

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
export default ComicsViet