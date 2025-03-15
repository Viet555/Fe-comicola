import Select from "react-select"
import 'react-markdown-editor-lite/lib/index.css';
import MdEditor from 'react-markdown-editor-lite';
import MarkdownIt from "markdown-it";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import * as action from '../../Store/export'
import { ApiFetchAllProductByType, GetDetailProduct, handleMarkdown } from "../../../service/ApiService";
import { toast } from "react-toastify";
import _ from "lodash";
const mdParser = new MarkdownIt(/* Markdown-it options */);
const MarkdownProduct = () => {
    const dispatch = useDispatch()
    const buildDataSelect = (inputData, type) => {
        let result = [];

        if (inputData && inputData.length > 0 &&
            inputData.map((item, index) => {
                let object = {};
                object.label = type === 'SelectName' ? item.nameProduct : item.allCodeInfo?.name
                object.value = type === 'SelectName' ? item._id : item.allCodeInfo?.keyMap
                result.push(object)
            })
        )
            return result;
    }
    const dataAllType = useSelector(state => state.admin.typeProduct)
    const [dataSelectType, setDataSelectType] = useState({})
    const [listProduct, setListProduct] = useState('')

    const [dataProduct, setDataProduct] = useState()
    const [formMarkdowns, setFormMarkdown] = useState({
        contentMarkdown: '',
        contentHTML: '',
        action: '',
        productId: ''
    })

    const [hasOldData, sethasOldData] = useState(false)

    useEffect(() => {
        dispatch(action.fetchAllTypeProduct())
        if (dataAllType) {
            let dataBuild = buildDataSelect(dataAllType);
            setDataSelectType(dataBuild)
        }
    }, [])
    useEffect(() => {
        if (dataProduct && dataProduct?._id) {
            setFormMarkdown({
                ...formMarkdowns,
                productId: dataProduct._id
            });
        }
    }, [dataProduct]);
    useEffect(() => {
        if (hasOldData === true) {
            setFormMarkdown({
                ...formMarkdowns,
                action: 'EDIT'
            })
        } else {
            setFormMarkdown({
                ...formMarkdowns,
                action: 'CREATE'
            })
        }

    }, [hasOldData])
    const handleChangeSelect = async (event) => {

        let data = await ApiFetchAllProductByType(event.label, '')
        if (data && data.EC === 0) {
            let dataOptionName = []
            dataOptionName = buildDataSelect(data.data, 'SelectName')
            setListProduct(dataOptionName)
        }
        else {
            toast.error(data.MES)
        }
    }
    const handleChangeSelectName = async (e) => {

        const res = await GetDetailProduct(e.value)
        if (res && res.data && res.EC === 0) {
            setFormMarkdown(prevState => ({
                ...prevState,
                productId: res.data._id
            }));
            setDataProduct(res.data)

        }

        console.log(formMarkdowns)
        if (res && res.data && res.data?.markdowns.length > 0) {

            let markdowns = res.data.markdowns
            setFormMarkdown({
                ...formMarkdowns,
                contentHTML: markdowns[0]?.contentHTML,
                contentMarkdown: markdowns[0]?.contentMarkdown,
                productId: res.data._id,
            })
            sethasOldData(true)
        }
        else {
            setFormMarkdown({
                ...formMarkdowns,
                contentHTML: '',
                contentMarkdown: '',
            })
            sethasOldData(false)
        }
    }
    const handleEditorChange = (e) => {
        setFormMarkdown({
            ...formMarkdowns,
            contentHTML: e.html,
            contentMarkdown: e.text
        })

    }
    const handleSaveDetailProduct = async () => {
        console.log(formMarkdowns)

        let response = await handleMarkdown(formMarkdowns)
        if (response && response.EC === 0) {
            toast.success(response.MES)
        }
        else {
            toast.error(response.MES)
        }
    }
    return (
        <>
            <div className="markdown-container">
                <div className="detail-product col-12 px-4 row">
                    <div className="form-group col-3">
                        <label>Select Type </label>
                        <Select

                            onChange={(event) => handleChangeSelect(event)}
                            options={dataSelectType}
                        />
                    </div>
                    <div className='form-group col-3'>
                        <label>Code Product</label>
                        <input
                            value={dataProduct?.code}
                            type='text'
                            className='form-control' disabled />
                    </div>

                    <div className='form-group col-6'>
                        {listProduct && listProduct.length > 0 &&
                            <>
                                <label>ProductName</label>

                                <Select
                                    // value={productName}
                                    onChange={(event) => handleChangeSelectName(event)}
                                    options={listProduct}
                                />
                            </>}
                    </div>
                </div>
                <MdEditor
                    className='py-5 px-4 my-5'
                    style={{ height: '500px' }}
                    renderHTML={text => mdParser.render(text)}
                    onChange={(event) => handleEditorChange(event)}
                    value={formMarkdowns['contentMarkdown']}
                />
                <button className='btn btn-primary my-3 w-25'
                    onClick={() => handleSaveDetailProduct()}
                >
                    {hasOldData === false
                        ? 'Create'
                        : 'Edit'
                    }
                </button>
            </div>

        </>
    )
}
export default MarkdownProduct 