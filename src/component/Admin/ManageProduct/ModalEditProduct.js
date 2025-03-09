import { useEffect, useState } from "react"
import { Button, Modal } from "react-bootstrap"
import Select from "react-select"
import _ from "lodash"
import { toast } from "react-toastify"
import { ApiUpdateProduct } from "../../../service/ApiService"
const ModalEditUser = (props) => {

    const { show, setShow, dataProductEdit, listTypeProduct, buildDataSelect, fecthProductTable } = props
    const [dataSelectType, setDataSelectType] = useState({})
    console.log(props)
    const handleClose = () => {
        setShow(!show)
        setFormUpdate({
            _id: "",
            nameProduct: '',
            count: '',
            note: '',
            desProduct: '',
            code: '',
            image1: '',
            image2: '',
            typeProduct: '',
            previewImg1: '',
            previewImg2: ''
        })
    }

    const [formUpdate, setFormUpdate] = useState({
        nameProduct: '',
        _id: "",
        count: '',
        note: '',
        desProduct: '',
        code: '',
        image1: '',
        image2: '',
        typeProduct: '',
        previewImg1: '',
        previewImg2: ''
    })

    useEffect(() => {
        if (!_.isEmpty(dataProductEdit)) {
            setFormUpdate({
                _id: dataProductEdit._id,
                nameProduct: dataProductEdit.nameProduct,
                count: dataProductEdit.count,
                note: dataProductEdit.note,
                desProduct: dataProductEdit.desProduct,
                code: dataProductEdit.code,
                image1: dataProductEdit.image1,
                image2: dataProductEdit.image2,
                typeProduct: dataProductEdit.typeProduct,
                previewImg1: dataProductEdit.image1,
                previewImg2: dataProductEdit.image2,
            })
        }
    }, [dataProductEdit])
    // const handleSubmitUpdate = async () => {
    //     let res = await UpdateAUser(dataUserEdit._id, firstName, lastName, roleId, address, gender, image)
    //     if (res && res.EC === 0) {
    //         toast.success(res.MES)
    //         handleClose()

    //     }
    //     handleGetUserTable()
    // }
    // const handleLoadImg = (event) => {
    //     console.log(event)
    //     if (event && event.target.files && event.target.files[0]) {
    //         setImagePreview(URL.createObjectURL(event.target.files[0]))
    //         // setImage(event.target.files[0])

    //         const reader = new FileReader();
    //         reader.onload = () => setImage(reader.result); // Base64 string
    //         reader.readAsDataURL(event.target.files[0]);
    //     }
    // }
    const handleOnchange = (event) => {
        setFormUpdate({
            ...formUpdate,
            [event.target.name]: event.target.value
        })
    }

    useEffect(() => {
        if (listTypeProduct) {
            let dataBuild = buildDataSelect(listTypeProduct);
            setDataSelectType(dataBuild)
        }
    }, [listTypeProduct]);
    const handleOnchangeImg = (event) => {

        if (event.target && event.target.files && event.target.files[0]) {

            const reader = new FileReader();
            reader.onload = () => setFormUpdate({
                ...formUpdate,
                [event.target.name]: (reader.result),
                [event.target.name === 'image1' ? 'previewImg1' : 'previewImg2']: (URL.createObjectURL(event.target.files[0])),

            }); // Base64 string
            reader.readAsDataURL(event.target.files[0]);
        }
    }
    const handleSubmitUpdate = async () => {
        console.log('cacc', formUpdate)
        let response = await ApiUpdateProduct(formUpdate)
        if (response && response.EC === 0) {
            toast.success(response.MES)
            setShow(!show)
            handleClose()
            fecthProductTable()
        }
        else {
            toast.error(response.MES)
        }
    }

    return (
        <>
            <>
                <Modal
                    show={show}
                    onHide={setShow}
                    size='xl'
                    backdrop="static"
                >
                    <Modal.Header closeButton>
                        <Modal.Title>Edit User</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div className='modal-Edit col-12 row '>
                            <div className='form-group col-5 my-3'>
                                <label>Name</label>
                                <input
                                    name='nameProduct'
                                    value={formUpdate.nameProduct}
                                    onChange={(handleOnchange)}
                                    className='form-control '
                                    type='text'
                                />
                            </div>
                            <div className='form-group col-4 my-3'>
                                <label>Count</label>
                                <input
                                    name="count"
                                    value={formUpdate.count}
                                    onChange={(handleOnchange)}
                                    className='form-control '
                                    type='text'
                                />
                            </div>
                            <div className='form-group col-3 my-3'>
                                <label>Code</label>
                                <input
                                    name="code"
                                    value={formUpdate.code}
                                    onChange={(handleOnchange)}
                                    className='form-control'
                                    type='text'
                                    disabled
                                />

                            </div>
                            <div className='form-group col-5 my-4'>
                                <label>Type</label>
                                <Select

                                    placeholder={formUpdate.typeProduct}
                                    options={dataSelectType}
                                    isMulti={true}
                                    onChange={(selectedOptions) => {
                                        setFormUpdate({
                                            ...formUpdate,
                                            typeProduct: selectedOptions.map(option => option.label) // Cập nhật mảng đã chọn
                                        });
                                    }}
                                />

                            </div>


                            <div className='form-group col-6'>
                                <label>Note</label>
                                <textarea
                                    name="note"
                                    value={formUpdate.note}
                                    onChange={(handleOnchange)}
                                    className='form-control'
                                    type='text'
                                />
                            </div>
                            <div className='form-group col-6'>
                                <label>Description</label>
                                <textarea
                                    name="desProduct"
                                    value={formUpdate.desProduct}
                                    onChange={(handleOnchange)}
                                    className='form-control'
                                    type='text'
                                />
                            </div>
                            <div className="d-flex">
                                <div >
                                    <div className="form-group col-2  my-2 ">
                                        <label htmlFor="imgUpdate1" className="img-user" style={{
                                            border: '1px solid',
                                            margin: '25px 30px', cursor: 'pointer',
                                            width: '120px', borderRadius: '30px',
                                            textAlign: 'center', padding: '6px',
                                        }}>{formUpdate['previewImg1'] ? 'Switch Image' : 'Add Image'}</label>
                                        <input className="form-control "
                                            name="image1"
                                            type="file"
                                            id="imgUpdate1"
                                            hidden
                                            onChange={(event) => handleOnchangeImg(event)}
                                        />
                                        <div className="img-prev " >

                                            {formUpdate['previewImg1']

                                                ?
                                                <div className="d-flex ">
                                                    <img style={{ height: '170px', width: '150px' }} src={formUpdate['previewImg1']}
                                                    />
                                                    <span style={{ marginLeft: '10px', backgroundColor: ' rgba(176, 173, 173, 0.67)', padding: '5px', cursor: 'pointer', height: 'fit-content', }}
                                                        onClick={() => setFormUpdate({
                                                            ...formUpdate,
                                                            image1: '',
                                                            previewImg1: ''
                                                        })}
                                                    >X</span>
                                                </div>
                                                :
                                                ''
                                            }
                                        </div>
                                    </div>
                                </div>
                                <div >
                                    <div className="form-group col-2 my-2">
                                        <label htmlFor="imgUpdate2" className="img-user" style={{
                                            border: '1px solid',
                                            margin: '25px 30px', cursor: 'pointer',
                                            width: '120px', borderRadius: '30px',
                                            textAlign: 'center', padding: '6px',
                                        }}>{formUpdate['previewImg2'] ? 'Switch Image' : 'Add Image'}</label>
                                        <input className="form-control "
                                            name="image2"
                                            type="file"
                                            id="imgUpdate2"
                                            hidden
                                            onChange={(event) => handleOnchangeImg(event)}
                                        />
                                        <div className="img-prev mx-4 " >

                                            {formUpdate['previewImg2']

                                                ?
                                                <div className="d-flex ">
                                                    <img style={{ height: '170px', width: '150px' }} src={formUpdate['previewImg2']}

                                                    />
                                                    <span style={{ marginLeft: '10px', backgroundColor: ' rgba(176, 173, 173, 0.67)', padding: '5px', cursor: 'pointer', height: 'fit-content', }}
                                                        onClick={() => setFormUpdate({
                                                            ...formUpdate,
                                                            image2: '',
                                                            previewImg2: ''
                                                        })}

                                                    >X</span>
                                                </div>
                                                :
                                                ''
                                            }

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary"

                            onClick={() => handleClose()}
                        >
                            cancel

                        </Button>

                        <Button variant="warning" onClick={() => handleSubmitUpdate()}
                        >
                            Save
                        </Button>
                    </Modal.Footer>
                </Modal>
            </>
        </>
    )
}
export default ModalEditUser