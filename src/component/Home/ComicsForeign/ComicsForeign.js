import '../ComicsViet/ComicsViet.scss'
import product from '../../../asset/Banner/MDDS_Comishop_0.webp'
const ComicsForeign = () => {
    return (
        <>
            <div className="ComicsViet-container">
                <div className="title-header">
                    <span className="title-header1">Truyện tranh Việt Nam đặc sắc</span>
                    <span className="title-header2">Các truyện tranh của tác giả quốc tế</span>
                </div>
                <div className='container '>
                    <div className='Comics-content col-12 '>
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

                </div>
            </div>
        </>
    )
}
export default ComicsForeign