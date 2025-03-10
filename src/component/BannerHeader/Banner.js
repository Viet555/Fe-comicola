import Banner1 from '../../asset/Banner/Dedokhaocoky_Digging_Comishop_04.webp'
import Banner2 from '../../asset/Banner/MDDS_Comishop_0.webp'
import './Banner.scss'
import Banner3 from '../../asset/Banner/ChimSeDuKy_Comishop_4.webp'
import { toast } from 'react-toastify'
import { ApitfetchAllBannerByAction } from '../../service/ApiService'
import { useEffect, useState } from 'react'
const Banner = () => {

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
                    <img src={dataBannerFirst[0]?.bannerHeader[0]?.image}></img>
                </div>
                <div className="banner-right">
                    <div className='Content-up'>
                        <img src={dataBannerFirst[1]?.bannerHeader[0]?.image}></img>
                    </div>
                    <div className='Content-down'>

                        <div className='child-left'>
                            <img src={dataBannerFirst[2]?.bannerHeader[0]?.image}></img>
                        </div>
                        <div className='child-right'>
                            <img src={dataBannerFirst[3]?.bannerHeader[0]?.image} ></img>
                        </div>
                    </div>

                </div>
            </div >





        </>
    )
}
export default Banner 