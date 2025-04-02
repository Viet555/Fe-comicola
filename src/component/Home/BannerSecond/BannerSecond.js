import './BannerSecond.scss'
import bannerS1 from '../../../asset/newBanner/Tiem-ca-phe-sua-da_2000x2000.webp'
import { use, useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import { ApitfetchAllBannerByAction } from '../../../service/ApiService'
import { useNavigate } from 'react-router-dom'
const BannerSecond = () => {
    const [dataBannerSecond, setDataBannerSecond] = useState('')
    const navigate = useNavigate()
    const FetchAllBannerSecondByType = async () => {
        let response = await ApitfetchAllBannerByAction('Bsecond')
        if (response && response.EC === 0) {

            setDataBannerSecond(response.data)
        }
        else {
            toast.error(response?.MES)
        }
    }
    useEffect(() => {
        FetchAllBannerSecondByType()
    }, [])

    return (
        <>
            <div className="BannerSecond-container container">
                <div className="left-banner"
                    onClick={() => {
                        navigate(`/DetailProduct/${dataBannerSecond[0]?.bannerMidle[0]?.productId._id}`);
                        window.scroll(0, 0)
                    }}
                >
                    <img src={dataBannerSecond[0]?.bannerMidle[0]?.image} />
                    <div className='info-banner'>
                        <span className='title'> {dataBannerSecond[0]?.bannerMidle[0]?.name}</span>
                        <span className='text-banner'> {dataBannerSecond[0]?.bannerMidle[0]?.productId.desProduct}</span>
                    </div>
                </div>

                <div className="right-banner"
                    onClick={() => navigate(`/DetailProduct/${dataBannerSecond[1]?.bannerMidle[0]?.productId._id}`, window.scroll(0, 0))}
                >
                    <img src={dataBannerSecond[1]?.bannerMidle[0]?.image}
                    />
                    <div className='info-banner'>
                        <span className='title'>  {dataBannerSecond[1]?.bannerMidle[0]?.name}</span>
                        <span className='text-banner'>{dataBannerSecond[1]?.bannerMidle[0]?.productId.desProduct}</span>
                    </div>
                </div>

            </div>
        </>
    )
}
export default BannerSecond