import { useEffect, useState } from "react"
import Select from 'react-select'
import { toast } from "react-toastify"
import { createNewProduct } from "../../../service/ApiService"
const CreateProduct = (props) => {
    const { listTypeProduct, buildDataSelect, fecthProductTable } = props
    const [formCreate, setFormCreate] = useState({
        nameProduct: '',
        count: '',
        note: '',
        desProduct: '',
        code: '',
        image1: '',
        image2: '',
        typeProduct: '',
        previewImg1: '',
        previewImg2: '',
        bannerProduct: '',
        bannerPrev: '',
    })
    const [errors, setErrors] = useState({
        nameProduct: '',
        count: '',
        // note: '',
        desProduct: '',
        code: '',
        image1: '',
        image2: '',
        typeProduct: '',
        bannerProduct: '',
        bannerPrev: '',
    })

    const [dataSelectType, setDataSelectType] = useState({})
    useEffect(() => {
        if (listTypeProduct) {
            let dataBuild = buildDataSelect(listTypeProduct);
            setDataSelectType(dataBuild)
        }
    }, [listTypeProduct]);


    // const isValidInput = () => {
    //     console.log('check form data ', formCreate)
    //     if (!formCreate.nameProduct) {
    //         setErrors({
    //             ...errors,
    //             nameProduct: 'nameProduct has not been entered'
    //         })
    //         return;
    //     }
    //     if (!formCreate.count) {
    //         setErrors({
    //             ...errors,
    //             count: 'count  has not been entered '
    //         })
    //         return;
    //     }
    //     if (!formCreate.note) {
    //         setErrors({
    //             ...errors,
    //             note: 'note has not been entered  '
    //         })
    //         return;
    //     }

    //     if (!formCreate.desProduct) {
    //         setErrors({
    //             ...errors,
    //             desProduct: 'desProduct has not been entered  '
    //         })
    //         return;
    //     }
    //     if (!formCreate.code) {
    //         setErrors({
    //             ...errors,
    //             code: 'code has not been entered  '
    //         })
    //         return;
    //     }
    //     if (!formCreate.image1) {
    //         setErrors({
    //             ...errors,
    //             image1: 'image1 has not been entered  '
    //         })
    //         return;
    //     }
    //     if (!formCreate.image2) {
    //         setErrors({
    //             ...errors,
    //             image2: 'image2 has not been entered  '
    //         })
    //         return;
    //     }
    //     if (!formCreate.typeProduct) {
    //         setErrors({
    //             ...errors,
    //             typeProduct: 'typeProduct has not been entered  '
    //         })
    //         return;
    //     }
    // }
    const isValidInput = () => {
        console.log('check form data ', formCreate);

        const newErrors = {};
        for (const key in formCreate) {
            if (!formCreate[key]) {
                newErrors[key] = `${key} has not been entered`;
            }
        }

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return false;
        }

        setErrors({}); // Xóa lỗi nếu hợp lệ
        return true;
    };
    const handleOnchange = (event) => {
        setFormCreate({
            ...formCreate,
            [event.target.name]: event.target.value
        })
        if (event.target.value) {
            setErrors({
                ...errors,
                [event.target.name]: ''
            })
        }
    }
    const handleCreateProduct = async (e) => {
        isValidInput()
        if (!errors) {
            toast.error('Missing Input')
            return;
        }
        else {
            let response = await createNewProduct(formCreate)
            if (response && response.EC === 0) {
                toast.success(response.MES)
                setFormCreate({
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
                fecthProductTable()
            }
            if (response && response.EC !== 0) {
                toast.warning(response.MES)
            }
        }

    }

    const handleOnchangeImg = (event) => {

        if (event.target && event.target.files && event.target.files[0]) {

            const reader = new FileReader();
            reader.onload = () => setFormCreate({
                ...formCreate,
                [event.target.name]: (reader.result),
                [event.target.name === 'image1' ? 'previewImg1' : 'previewImg2']: (URL.createObjectURL(event.target.files[0])),

            }); // Base64 string
            reader.readAsDataURL(event.target.files[0]);
        }
    }
    const handleOnchangeBanner = (event) => {

        if (event.target && event.target.files && event.target.files[0]) {

            const reader = new FileReader();
            reader.onload = () => setFormCreate({
                ...formCreate,
                [event.target.name]: (reader.result),
                bannerPrev: (URL.createObjectURL(event.target.files[0])),

            }); // Base64 string
            reader.readAsDataURL(event.target.files[0]);
        }
    }
    return (
        <>
            <div className="create-Product container my-5">
                <div className="create-main row">
                    <span className="title-header" style={{ textTransform: 'uppercase', textAlign: 'center', fontSize: '25px', color: 'blue' }}>Create Product</span>
                    <div className="form-group col-5  my-2">
                        <label>Name Product</label>
                        <input className="form-control "
                            name='nameProduct'
                            value={formCreate['nameProduct']}
                            onChange={(handleOnchange)}
                        />
                        {errors.nameProduct && <p style={{ color: 'red' }}>name Product has not been entered</p>}
                    </div>
                    <div className="form-group col-3  my-2">
                        <label>Price</label>
                        <input className="form-control "
                            name='count'
                            value={formCreate['count']}
                            onChange={(handleOnchange)}
                        />
                        {errors.count && <p style={{ color: 'red' }}>count has not been entered</p>}
                    </div>

                    <div className="form-group col-3  my-2">
                        <label>Code</label>
                        <input className="form-control "
                            name='code'
                            value={formCreate['code']}
                            onChange={(handleOnchange)}
                        />
                        {errors.code && <p style={{ color: 'red' }}>code has not been entered</p>}
                    </div>
                    <div className="form-group col-3  my-2">
                        <label>Type</label>
                        <Select
                            name="typeProduct"
                            isMulti={true}  // Cho phép chọn nhiều
                            placeholder='Choose Type'
                            options={dataSelectType}
                            onChange={(selecttedOptions) => {
                                let selecttedValues = selecttedOptions.map((item) => item.label)
                                setFormCreate({
                                    ...formCreate,
                                    typeProduct: selecttedValues
                                })
                            }}

                        />
                        {errors.typeProduct && <p style={{ color: 'red' }}>Type has not been entered</p>}
                    </div>
                    <div className="form-group col-4  my-2">
                        <label>Note</label>
                        <textarea className="form-control "
                            name='note'
                            value={formCreate['note']}
                            onChange={(handleOnchange)}
                        />
                        {errors.note && <p style={{ color: 'red' }}>note has not been entered</p>}
                    </div>

                    <div className="form-group col-5  my-2">
                        <label>Description</label>
                        <textarea className="form-control "
                            name='desProduct'
                            value={formCreate['desProduct']}
                            onChange={(handleOnchange)}
                        />
                        {errors.desProduct && <p style={{ color: 'red' }}>Description has not been entered</p>}
                    </div>
                    <div className="form-group col-2  my-2">
                        <label htmlFor="img1" className="img-user" style={{
                            border: '1px solid',
                            margin: '25px 30px', cursor: 'pointer',
                            width: '120px', borderRadius: '30px',
                            textAlign: 'center', padding: '6px',
                        }}>{formCreate['previewImg1'] ? 'Switch Image' : 'Add Image'}</label>
                        <input className="form-control "
                            name="image1"
                            type="file"
                            id="img1"
                            hidden
                            onChange={(event) => handleOnchangeImg(event)}
                        />
                        <div className="img-prev " >

                            {formCreate['previewImg1']

                                ?
                                <div className="d-flex ">
                                    <img style={{ height: '170px', width: '150px' }} src={formCreate['previewImg1']}
                                    />
                                    <span style={{ marginLeft: '10px', backgroundColor: ' rgba(176, 173, 173, 0.67)', padding: '5px', cursor: 'pointer', height: 'fit-content', }}
                                        onClick={() => setFormCreate({
                                            ...formCreate,
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
                    <div className="form-group col-2  my-2">
                        <label htmlFor="img2" className="img-user" style={{
                            border: '1px solid',
                            margin: '25px 30px', cursor: 'pointer',
                            width: '120px', borderRadius: '30px',
                            textAlign: 'center', padding: '6px',
                        }}>{formCreate['previewImg2'] ? 'Switch Image' : 'Add Image'}</label>
                        <input className="form-control "
                            name="image2"
                            type="file"
                            id="img2"
                            hidden
                            onChange={(event) => handleOnchangeImg(event)}
                        />
                        <div className="img-prev mx-4 " >

                            {formCreate['previewImg2']

                                ?
                                <div className="d-flex ">
                                    <img style={{ height: '170px', width: '150px' }} src={formCreate['previewImg2']}

                                    />
                                    <span style={{ marginLeft: '10px', backgroundColor: ' rgba(176, 173, 173, 0.67)', padding: '5px', cursor: 'pointer', height: 'fit-content', }}
                                        onClick={() => setFormCreate({
                                            ...formCreate,
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
                    <div className="form-group  col-2 my-2" style={{ textAlign: 'end' }}>
                        <label htmlFor="imgBanner" className="img-user" style={{
                            border: '1px solid',
                            margin: '25px 20px', cursor: 'pointer',
                            width: '120px', borderRadius: '30px',
                            textAlign: 'center', padding: '6px',
                        }}>{formCreate['bannerPrev'] ? 'Switch Banner' : 'Add Banner'}</label>
                        <input className="form-control "
                            name="bannerProduct"
                            type="file"
                            id="imgBanner"
                            hidden
                            onChange={(event) => handleOnchangeBanner(event)}
                        />
                        <div className="img-prev mx-5 "  >

                            {formCreate['bannerPrev']

                                ?
                                <div className="d-flex ">
                                    <img style={{ height: '170px', width: '150px' }} src={formCreate['bannerPrev']}

                                    />
                                    <span style={{ marginLeft: '10px', backgroundColor: ' rgba(176, 173, 173, 0.67)', padding: '5px', cursor: 'pointer', height: 'fit-content', }}
                                        onClick={() => setFormCreate({
                                            ...formCreate,
                                            bannerProduct: '',
                                            bannerPrev: ''
                                        })}

                                    >X</span>
                                </div>
                                :
                                ''
                            }

                        </div>
                    </div>
                    <button className="btn btn-primary my-3" style={{ width: 'fit-content', margin: '40%', padding: '10px 80px' }}
                        onClick={(event) => handleCreateProduct(event)}
                    >Create</button>
                </div>
            </div>
        </>
    )
}
export default CreateProduct