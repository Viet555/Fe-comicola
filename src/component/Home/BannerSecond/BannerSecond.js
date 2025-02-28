import './BannerSecond.scss'
import bannerS1 from '../../../asset/newBanner/Tiem-ca-phe-sua-da_2000x2000.webp'
const BannerSecond = () => {
    return (
        <>
            <div className="BannerSecond-container container">

                <div className="banner-left">
                    <img src={bannerS1} />
                    <div className='info-banner'>
                        <span className='title'> Tiệm Cà Phê Sữa Đá</span>
                        <span className='text-banner'> Lấy ý tưởng từ món đồ uống quen thuộc của người Việt – Cà phê sữa đá, kết hợp với tạo hình của các nhân vật truyện tranh Việt Nam nổi tiếng.</span>
                    </div>
                </div>

                <div className="banner-right">
                    <img src={bannerS1} />
                    <div className='info-banner'>
                        <span className='title'> Tiệm Cà Phê Sữa Đá</span>
                        <span className='text-banner'> Lấy ý tưởng từ món đồ uống quen thuộc của người Việt – Cà phê sữa đá, kết hợp với tạo hình của các nhân vật truyện tranh Việt Nam nổi tiếng.</span>
                    </div>
                </div>
            </div>
        </>
    )
}
export default BannerSecond