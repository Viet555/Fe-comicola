import './BannerSecond.scss'
import bannerS1 from '../../../asset/newBanner/Tiem-ca-phe-sua-da_2000x2000.webp'
import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import { ApitfetchAllBannerByAction } from '../../../service/ApiService'
const BannerSecond = () => {
    const [dataBannerSecond, setDataBannerSecond] = useState('')
    const FetchAllBannerSecondByType = async () => {
        let response = await ApitfetchAllBannerByAction('Bsecond')
        if (response && response.EC === 0) {

            setDataBannerSecond(response.data)
        }
        else {
            toast.error(response.MES)
        }
    }
    useEffect(() => {
        FetchAllBannerSecondByType()
    }, [])

    return (
        <>
            <div className="BannerSecond-container container">
                <div className="left-banner">
                    <img src={dataBannerSecond[0]?.bannerMidle[0]?.image} />
                    <div className='info-banner'>
                        <span className='title'> {dataBannerSecond[0]?.bannerMidle[0]?.name}</span>
                        <span className='text-banner'> {dataBannerSecond[0]?.bannerMidle[0]?.productId.desProduct}</span>
                    </div>
                </div>

                <div className="right-banner">
                    <img src={dataBannerSecond[1]?.bannerMidle[0]?.image} />
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