import './DetailProduct.scss'
import test from '../../asset/newBanner/209965357_516752143077380_5620619095392860277_n.webp'
import { useEffect, useState } from 'react'
import { NavLink, useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import * as action from '../Store/export'
import _ from 'lodash'
import OtherProduct from './OtherProduct'
import { addProductInCart } from '../../service/ApiService'
import { toast } from 'react-toastify'


const DetailProduct = () => {

    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        Default: 3000,
        responsive: [
            {
                breakpoint: 480, // Kích thước màn hình
                settings: {
                    slidesToShow: 2, // Số lượng slide hiển thị
                    slidesToScroll: 2, // Số lượng slide cuộn
                }
            }
        ]
    };
    const [count, setCount] = useState(1)
    const params = useParams()
    const Navigate = useNavigate()
    const dispatch = useDispatch()
    useEffect(() => {
        if (params && params.id) {
            dispatch(action.getDataDetailProductRedux(params.id))
        }
    }, [params.id])
    const data = useSelector(state => state.admin.detailProduct)
    const dataProductOther = useSelector(state => state.admin.allProduct)
    const dataUseId = useSelector(state => state.user.account?.id)

    const [dataDetail, setDataDetail] = useState([])
    const [image, setImage] = useState(1)

    const [userId, setUserId] = useState()
    const [productId, setProductId] = useState()
    useEffect(() => {
        if (data && !_.isEmpty(data)) {
            setDataDetail(data)
        }
    }, [data])
    useEffect(() => {
        dispatch(action.fetchAllProduct('', 8))

    }, [])
    useEffect(() => {
        if (dataDetail && dataDetail._id) {
            setProductId(dataDetail._id)
        }
    }, [dataDetail])
    useEffect(() => {
        if (dataUseId) {
            setUserId(dataUseId)
        }
    }, [dataUseId])
    const handleAddToCart = async () => {
        try {
            await dispatch(action.addProductcartByRedux(userId, productId, count));
            await dispatch(action.getProductcartByRedux(userId));
        } catch (error) {
            toast.error("Có lỗi xảy ra khi thêm vào giỏ hàng");
        }
        // let res = await addProductInCart(userId, productId, count)
        // if (res && res.EC !== 0) {
        //     toast.error(res.MES)
        // }
    }
    const handleOnclickType = (e) => {
        const clickedType = e.target?.getAttribute('data-type');
        if (clickedType) {
            console.log('Clicked type:', e.target.getAttribute('data-type'));
            dispatch(action.fetchAllProduct(clickedType, ''))
            Navigate('/View-product-Type', window.scroll(0, 0))
        }
    };
    return (
        <>
            <div className="DetailProduct-container">
                <div className="content-header">
                    <span className='home' ><NavLink to='/' className='nav-link'>Trang chủ/</NavLink></span>
                    <span className='product-name mx-1'> {dataDetail.nameProduct}</span>
                </div>
                <div className='content-detail container'>
                    <div className='content-left'>
                        <img src={image === 1 ? dataDetail?.image1 : image === 2 ? dataDetail.image2 : ''} />
                        <div className='img-small'>
                            <img src={dataDetail.image1}
                                onClick={() => setImage(1)}
                            />
                            <img src={dataDetail.image2}
                                onClick={() => setImage(2)}
                            />
                        </div>
                    </div>
                    <div className='content-right'>
                        <div className='nameProduct'>{dataDetail.nameProduct}</div>
                        <div className='costProduct'>{dataDetail.count}đ</div>
                        <div className='desProduct'>{dataDetail.desProduct}</div>
                        {dataDetail.note &&
                            <div className='note'>
                                {dataDetail.note}
                            </div>
                        }
                        <div className='evalute'>
                            <div className='amount-product'>
                                <span className='amount-minus'> <i

                                    onClick={() => {
                                        if (count > 0) {
                                            setCount((count) => count - 1)
                                        }
                                    }
                                    }
                                    className="fa-solid fa-minus"></i></span>
                                <span>{count}</span>
                                <span className='amount-plus'><i
                                    onClick={() => setCount((count) => count + 1)}
                                    className="fa-solid fa-plus"></i></span>
                            </div>
                            <div className='Cart'>
                                <button className='add-to-cart'
                                    onClick={(e) => handleAddToCart()}
                                ><i className="fa-solid fa-bag-shopping mx-2"></i>Thêm vào giỏ hàng</button>
                            </div>

                        </div>
                        <div className='' style={{ marginTop: '100px' }}>
                            <div className='code' style={{ fontSize: '20px' }}><span style={{ fontWeight: 'bold' }}>Code :</span>{dataDetail?.code}</div>
                            {/* <div className='type' style={{ fontSize: '20px' }}><span style={{ fontWeight: 'bold' }}>Type :</span><span className='type-active'>{Array.isArray(dataDetail?.typeProduct) ? dataDetail.typeProduct.join(', ') : dataDetail?.typeProduct || 'Khong co du lieu'}</span></div> */}
                            <div className='type' style={{ fontSize: '20px' }}>
                                <span style={{ fontWeight: 'bold' }}>Type :</span>
                                <span className='type-active' onClick={(e) => handleOnclickType(e)}>
                                    {Array.isArray(dataDetail?.typeProduct) && dataDetail.typeProduct.length > 0
                                        ? dataDetail.typeProduct.map((item, index) => (
                                            <span key={index} data-type={item}>
                                                {item}{index !== dataDetail.typeProduct.length - 1 ? ' , ' : ''}
                                            </span>
                                        ))
                                        : 'Không có dữ liệu'}
                                </span>
                            </div>
                        </div>

                    </div>

                </div>

                <div className="content-markdown container " >
                    {data && data.markdowns && data.markdowns[0]?.contentHTML &&
                        <>
                            <span >Giới thiệu nội dung</span>
                            <div className='text-markdown' dangerouslySetInnerHTML={{ __html: data.markdowns[0]?.contentHTML }}></div>
                        </>
                    }

                </div>

            </div>

            <OtherProduct
                dataProductOther={dataProductOther}
                settings={settings}
            />
        </>
    )
}
export default DetailProduct