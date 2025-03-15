import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './OtherProduct.scss'
import { useNavigate } from "react-router-dom";

const OtherProduct = (props) => {
    const { settings, dataProductOther } = props
    const navigate = useNavigate()
    return (
        <>
            <div className="container-OtherProduct container">
                <span className='title-footer'>Sản phẩm liên quan</span>
                <Slider {...settings}>


                    {dataProductOther && dataProductOther.length > 0 &&
                        dataProductOther.map((item, index) => {
                            return (
                                <div className='footer-detail'
                                    onClick={() => navigate(`/DetailProduct/${item._id}`)}
                                >

                                    <div className='img-footer'>
                                        <div className='col-3'>
                                            <img src={item.image1} />
                                            <div className='info-product'>
                                                <span className='name-pro'>{item.nameProduct}</span>
                                                <span className='price'>{item.count}đ</span>

                                            </div>
                                            <div className='add-cart'> <span> <i class="fa-solid fa-cart-shopping mx-2"></i></span>Thêm vào giỏ hàng</div>
                                        </div>


                                    </div>
                                </div>
                            )
                        })
                    }

                </Slider>
            </div>
        </>
    )
}
export default OtherProduct