import { Button, Modal, Table } from 'react-bootstrap';
import './ManageBanner.scss'
import { useEffect, useState } from 'react';
import Select from 'react-select'
import { useDispatch, useSelector } from 'react-redux';
import * as action from "../../Store/export"
import { toast } from 'react-toastify';
import { ApiCreateNewBanner, ApiDeleteBanner, ApitfetchAllBannerByAction, ApiUpdateBanner } from '../../../service/ApiService';

const ManageBanner = () => {


    const selectGender = [
        { value: 'Bfirst', label: 'Bfirst' },
        { value: 'Bsecond', label: 'Bsecond' },
    ]
    const dispatch = useDispatch()
    const dataAllProduct = useSelector(state => state.admin.allProduct)
    useEffect(() => {
        dispatch(action.fetchAllProduct('', ''))
        FetchAllBannerFirstByType()
        FetchAllBannerSecondtByType()
    }, [])



    const [show, setShow] = useState(false)
    const [showEdit, setShowEdit] = useState(false)
    const [dataBannerFirst, setDataBannerFirst] = useState('')
    const [dataBannerSecond, setDataBannerSecond] = useState('')
    const [selectedItemId, setSelectedItemId] = useState(null);
    const [formCreateBanner, setFormCreateBanner] = useState({
        action: '',
        name: '',
        productId: '',
        image: '',

    })
    const [formEditBanner, setFormEditBanner] = useState({
        _id: '',
        action: '',
        name: '',
        productId: '',
        image: '',

    })
    const handleSelectBanner = () => {
        setShow(!show)
    }
    const FetchAllBannerFirstByType = async () => {
        let response = await ApitfetchAllBannerByAction('Bfirst')
        if (response && response.EC === 0) {
            setDataBannerFirst(response.data)
        }
        else {
            toast.error(response.MES)
        }
    }
    const FetchAllBannerSecondtByType = async () => {
        let response = await ApitfetchAllBannerByAction('Bsecond')
        if (response && response.EC === 0) {
            setDataBannerSecond(response.data)
        }
        else {
            toast.error(response.MES)
        }
    }


    // const handleOnchange = (event) => {
    //     setFormCreateBanner({
    //         ...formCreateBanner,
    //         [event.target.name]: event.target.value
    //     })
    //     console.log(formCreateBanner)
    // }
    const handleSelectProduct = (data) => {
        if (data) {

            setFormCreateBanner({
                ...formCreateBanner,
                productId: data._id,
                name: data.nameProduct,
                image: data.bannerProduct
            })
            setShow(!show)
        }
        else {
            toast.error('FAIL')
        }
    }

    const handleCreateBanner = async () => {
        if (!formCreateBanner.action) {
            toast.error('Please choose action')
            return;
        }
        let res = await ApiCreateNewBanner(formCreateBanner)
        if (res && res.EC === 0) {
            console.log(res)
            toast.success(res.MES)
            setFormCreateBanner({
                action: '',
                name: '',
                productId: '',
                image: '',
            })
            if (formCreateBanner.action === 'Bfirst') {
                FetchAllBannerFirstByType()
            }
            if (formCreateBanner.action === 'Bsecond') {
                FetchAllBannerSecondtByType()
            }

        }
        else {
            toast.error(res.MES)
        }
    }
    const handleDeleteUser = async (item) => {
        console.log(item)
        let data = await ApiDeleteBanner(item._id)
        if (data && data.EC === 0) {
            toast.success(data.MES)
            if (item.bannerHeader) {
                FetchAllBannerFirstByType()
            }
            if (item.bannerMidle) {
                FetchAllBannerSecondtByType()
            }
        }

    }
    const handleSelectEdit = (dataEdit) => {

        setFormEditBanner({
            ...formEditBanner,
            name: dataEdit?.nameProduct,
            productId: dataEdit?._id,
            image: dataEdit?.bannerProduct,
        })
    }
    const handleClose = () => {
        setShowEdit(!showEdit)
        setFormEditBanner({
            action: '',
            name: '',
            productId: '',
            image: '',
        })
    }
    const handleSubmitEditBanner = async () => {
        let res = await ApiUpdateBanner(formEditBanner)
        if (res && res.EC === 0) {
            toast.success(res.MES)
            if (formEditBanner.action === 'Bfirst') {
                FetchAllBannerFirstByType()
            }
            if (formEditBanner.action === 'Bsecond') {
                FetchAllBannerSecondtByType()
            }
            handleClose()
        }

    }
    const handleEditBanner = (item) => {
        setShowEdit(!showEdit)
        console.log("caca", item)
        if (item && item.bannerHeader) {
            setFormEditBanner({
                ...formEditBanner,
                action: 'Bfirst',
                _id: item._id
            })
        }
        if (item && item.bannerMidle) {
            setFormEditBanner({
                ...formEditBanner,
                action: 'Bsecond',
                _id: item._id
            })
        }

    }
    return (
        <>
            <div className="ManageBanner-container container">
                <span className="header-banner">Manage Banner </span>
                <div className="banner-main ">
                    <div className="form-group col-4 content-banner">
                        <button className='btn btn-warning'
                            onClick={() => handleSelectBanner()}
                        >Select</button>
                        <label>Name Product</label>
                        <input className='form-control my-3 '
                            value={formCreateBanner['name']}
                            disabled
                        />
                        <Select
                            name='action'
                            placeholder={'Choose Action '}
                            options={selectGender}
                            onChange={(event) => setFormCreateBanner({
                                ...formCreateBanner,
                                action: event.label,

                            })}
                        />
                        <img src={formCreateBanner.image} className='p-3' />
                        <button className='btn btn-info button-create'
                            onClick={(e) => handleCreateBanner(e)}
                        >Create Banner</button>
                    </div>

                </div>
                <div className='table-banner-header'>
                    <span className='Title-header'>Banner Header in action </span>
                    <Table striped bordered hover className='text-center col-12'>
                        <thead style={{ background: "rgb(83, 168, 237)" }} className="col-12">
                            <tr>
                                <th>Name Banner</th>
                                <th>Image </th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody >
                            {dataBannerFirst && dataBannerFirst.length > 0 &&
                                dataBannerFirst.map((item, index) => {

                                    return (

                                        <tr key={`table-user-manager${index}`}>

                                            <td>{item.bannerHeader[0].name} </td>
                                            <td><img className="img-tabel " style={{ width: "60px" }} src={item.bannerHeader[0].image} /></td>

                                            <td>
                                                <div className='action-btn '>
                                                    <button
                                                        className='btn btn-danger mx-3 px-3'
                                                        onClick={() => handleDeleteUser(item)}
                                                    >
                                                        <i className="fa-solid fa-trash-can "></i></button>
                                                    <button className='btn btn-warning px-3'
                                                        name='Bfirst'
                                                        onClick={() => handleEditBanner(item)}
                                                    ><i className="fa-solid fa-pen-to-square "></i></button></div>
                                            </td>

                                        </tr>
                                    )
                                })

                            }
                        </tbody>
                    </Table>
                    <div className='table-banner-midle my-5'>
                        <span className='Title-header'>Banner Midle in action</span>
                        <Table striped bordered hover className='text-center col-12'>
                            <thead style={{ background: "rgb(83, 168, 237)" }} className="col-12">
                                <tr>
                                    <th>Name Banner</th>
                                    <th>Image </th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody >
                                {dataBannerSecond && dataBannerSecond.length > 0 &&
                                    dataBannerSecond.map((item, index) => {

                                        return (

                                            <tr key={`table-user-manager${index}`}>

                                                <td>{item.bannerMidle[0].name} </td>
                                                <td><img className="img-tabel " style={{ width: "60px" }} src={item.bannerMidle[0].image} /></td>

                                                <td>
                                                    <div className='action-btn '>
                                                        <button
                                                            className='btn btn-danger mx-3 px-3'
                                                            onClick={() => handleDeleteUser(item)}
                                                        >
                                                            <i className="fa-solid fa-trash-can "></i></button>
                                                        <button className='btn btn-warning px-3'
                                                            onClick={() => handleEditBanner(item)}
                                                        ><i className="fa-solid fa-pen-to-square "></i></button></div>
                                                </td>

                                            </tr>
                                        )
                                    })

                                }
                            </tbody>
                        </Table>
                    </div>
                </div>
            </div>
            <Modal
                show={show}
                onHide={setShow}
                size='lg'
                backdrop="static"
            >
                <Modal.Header closeButton>
                    <Modal.Title>Product</Modal.Title>
                </Modal.Header>
                <Modal.Body className='modal-body'>
                    {dataAllProduct && dataAllProduct.length > 0 &&
                        dataAllProduct.map((item, index) => {
                            return (
                                <div className='modal-container'>
                                    <div className='modal-content row'>
                                        <div className='form-group  my-3'>
                                            <label >{item.nameProduct}</label>
                                        </div>
                                        <div className='form-group img-product  my-3'>
                                            <img src={item.bannerProduct} />
                                        </div>
                                        <div className='btn-select'>
                                            <button className='btn btn-info'
                                                onClick={() => handleSelectProduct(item)}
                                            >Select</button>
                                        </div>
                                    </div>
                                </div>
                            )

                        })
                    }
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary"
                        onClick={() => setShow(!show)}>
                        cancel
                    </Button>
                </Modal.Footer>
            </Modal>
            <Modal
                show={showEdit}
                onHide={setShowEdit}
                size='lg'
                backdrop="static"
            >
                <Modal.Header closeButton>
                    <Modal.Title>Product</Modal.Title>
                </Modal.Header>
                <Modal.Body className='modal-body'>
                    {dataAllProduct && dataAllProduct.length > 0 &&
                        dataAllProduct.map((item, index) => {

                            return (
                                <div className='modal-container'>
                                    <div className='modal-content row'>
                                        <div className='form-group  my-3'>
                                            <label >{item.nameProduct}</label>
                                        </div>
                                        <div className='form-group img-product  my-3'>
                                            <img src={item.bannerProduct} />
                                        </div>
                                        <div className='btn-select'>
                                            <button className='btn btn-info'


                                                onClick={(e) => {
                                                    handleSelectEdit(item);
                                                }}
                                            >
                                                Select</button>
                                        </div>
                                    </div>
                                </div>
                            )

                        })
                    }
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary"
                        onClick={() => setShow(!show)}>
                        cancel
                    </Button>
                    <Button variant="primary"
                        onClick={() => handleSubmitEditBanner()}>
                        Submit
                    </Button>
                </Modal.Footer>
            </Modal >
        </>
    )
}
export default ManageBanner 