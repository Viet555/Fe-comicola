
import './Banner.scss'
import { toast } from 'react-toastify'
import { ApitfetchAllBannerByAction } from '../../service/ApiService'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
const Banner = () => {
    const navigate = useNavigate()
    const [dataBannerFirst, setDataBannerFirst] = useState('')
    const FetchAllBannerFirstByType = async () => {
        let response = await ApitfetchAllBannerByAction('Bfirst')
        if (response && response.EC === 0) {

            setDataBannerFirst(response.data)
        }
        else {
            toast.error(response.MES)
        }
    }
    useEffect(() => {
        FetchAllBannerFirstByType()
    }, [])

    return (
        <>
            <div className="container-banner ">
                <div className="banner-left">
                    <img src={dataBannerFirst[0]?.bannerHeader[0]?.image}

                        onClick={() => navigate(`/DetailProduct/${dataBannerFirst[0]?.bannerHeader[0]?.productId._id}`, window.scroll(0, 0))}
                    ></img>
                    <div className='title-banner d-flex'>
                        <span className=''>{dataBannerFirst[0]?.bannerHeader[0].name}</span>
                        <span className='line'></span>
                        <span className='cart'><i className="fa-solid fa-cart-shopping"></i></span>
                    </div>
                </div>
                <div className="banner-right">
                    <div className='Content-up'>
                        <img src={dataBannerFirst[1]?.bannerHeader[0]?.image}
                            onClick={() => navigate(`/DetailProduct/${dataBannerFirst[1]?.bannerHeader[0]?.productId._id}`)}
                        ></img>
                        <div className='title-banner d-flex'>
                            <span className=''>{dataBannerFirst[1]?.bannerHeader[0].name}</span>
                            <span className='line'></span>
                            <span className='cart'><i className="fa-solid fa-cart-shopping"></i></span>
                        </div>
                    </div>
                    <div className='Content-down'>

                        <div className='child-left'>

                            <img src={dataBannerFirst[2]?.bannerHeader[0]?.image}
                                onClick={() => navigate(`/DetailProduct/${dataBannerFirst[2]?.bannerHeader[0]?.productId._id}`)}
                            ></img>
                            <div className='title-banner d-flex'>
                                <span className=''>{dataBannerFirst[2]?.bannerHeader[0].name}</span>
                                <span className='line'></span>
                                <span className='cart'><i className="fa-solid fa-cart-shopping"></i></span>
                            </div>
                        </div>
                        <div className='child-right'>
                            <img src={dataBannerFirst[3]?.bannerHeader[0]?.image}
                                onClick={() => navigate(`/DetailProduct/${dataBannerFirst[3]?.bannerHeader[0]?.productId._id}`)}
                            ></img>
                            <div className='title-banner d-flex'>
                                <span className=''>{dataBannerFirst[3]?.bannerHeader[0].name}</span>
                                <span className='line'></span>
                                <span className='cart'><i className="fa-solid fa-cart-shopping"></i></span>
                            </div>
                        </div>
                    </div>

                </div>
            </div >





        </>
    )
}
export default Banner 