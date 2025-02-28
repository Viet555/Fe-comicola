
import './NewProduct.scss'
import product from '../../../asset/newBanner/Hesman_Comishop_1.webp'
const NewProduct = () => {
    return (
        <>
            <div className="container-NewProduct ">
                <div className="title ">
                    <span className="title-header">Sản Phẩm Mới</span>
                    <span className="title-header2">Sản Phẩm Mới</span>
                </div>
                <div className='container '>
                    <div className='NewProduct-content col-12 '>
                        <div className='content col-3' >
                            <img src={product} />
                            <div className='info-product'>
                                <span className='name-pro'>abcd-xuz</span>
                                <span className='price'>555d</span>

                            </div>
                            <div className='add-cart'> <span> <i class="fa-solid fa-cart-shopping mx-2"></i></span>Thêm vào giỏ hàng</div>
                        </div>
                        <div className='content col-3' >
                            <img src={product} />
                            <div className='info-product'>
                                <span className='name-pro'>abcd-xuz</span>
                                <span className='price'>555d</span>
                            </div>
                        </div>
                        <div className='content col-3' >
                            <img src={product} />
                            <div className='info-product'>
                                <span className='name-pro'>abcd-xuz</span>
                                <span className='price'>555d</span>
                            </div>
                        </div>
                        <div className='content col-3' >
                            <img src={product} />
                            <div className='info-product'>
                                <span className='name-pro'>abcd-xuz</span>
                                <span className='price'>555d</span>
                            </div>
                        </div>
                    </div>
                    <div className='all-product'>Xem toàn bộ sản phẩm</div>
                </div>
            </div>
        </>
    )
}
export default NewProduct