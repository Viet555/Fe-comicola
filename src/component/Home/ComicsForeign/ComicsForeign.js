import '../ComicsViet/ComicsViet.scss'
import product from '../../../asset/Banner/MDDS_Comishop_0.webp'
import { useEffect, useState } from 'react'
import { ApiFetchAllProductByType } from '../../../service/ApiService'
import { useNavigate } from 'react-router-dom'
const ComicsForeign = () => {

    useEffect(() => {
        GetdataProductByType()
    }, [])
    const navigate = useNavigate()
    const [datacomicForeign, setDataComicForeign] = useState()
    const GetdataProductByType = async () => {
        let res = await ApiFetchAllProductByType("Foreign comics", '4')
        if (res && res?.EC === 0) {
            setDataComicForeign(res?.data)
        }
        else {
            setDataComicForeign('')
        }
    }
    return (
        <>
            <div className="ComicsViet-container">
                <div className="title-header">
                    <span className="title-header1">Truyện tranh nước ngoài đặc sắc</span>
                    <span className="title-header2">Các truyện tranh của tác giả quốc tế</span>
                </div>
                <div className='container '>
                    <div className='Comics-content col-12 '>
                        {datacomicForeign && datacomicForeign.length > 0 &&
                            datacomicForeign.map((item) => {

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
                            })
                        }


                    </div>

                </div>
            </div>
        </>
    )
}
export default ComicsForeign