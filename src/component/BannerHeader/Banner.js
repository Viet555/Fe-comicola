import Banner1 from '../../asset/Banner/Dedokhaocoky_Digging_Comishop_04.webp'
import Banner2 from '../../asset/Banner/MDDS_Comishop_0.webp'
import './Banner.scss'
import Banner3 from '../../asset/Banner/ChimSeDuKy_Comishop_4.webp'
const Banner = () => {
    return (
        <>
            <div className="container-banner">
                <div className="banner-left">
                    <img src={Banner1}></img>
                </div>
                <div className="banner-right">
                    <div className='Content-up'>
                        <img src={Banner2}></img>
                    </div>
                    <div className='Content-down'>

                        <div className='child-left'>
                            <img src={Banner3}></img>
                        </div>
                        <div className='child-right'>
                            <img src={Banner3}></img>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}
export default Banner 