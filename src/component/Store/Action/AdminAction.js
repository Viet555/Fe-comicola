import { AllProductBySort, ApiFetchAllProductByType, ApitfetchAllBannerByAction, fetchAllDataType, getDataProductByType, GetDetailProduct } from "../../../service/ApiService"
import actiontypes from "./ActionType"

export const fetchAllTypeProduct = () => {
    return async (dispatch, getState) => {

        let resType = await fetchAllDataType()
        try {
            if (resType && resType.EC === 0) {
                dispatch({
                    type: actiontypes.FETCH_DATA_TYPE_SUCCESS,
                    data: resType.data
                })
            } else {
                dispatch({
                    type: actiontypes.FETCH_DATA_TYPE_FAIL,

                })
            }
        } catch (e) {
            dispatch({
                type: actiontypes.FETCH_DATA_TYPE_FAIL,
            })
            console.log('ERR', e)
        }
    }
}
export const fetchAllProduct = (type, limit) => {
    return async (dispatch, getState) => {

        let data = await ApiFetchAllProductByType(type, limit)
        try {
            if (data && data.EC === 0) {
                dispatch({
                    type: actiontypes.FETCH_ALL_PRODUCT_BY_TYPE_SUCCESS,
                    data: data.data
                })
            } else {
                dispatch({
                    type: actiontypes.FETCH_ALL_PRODUCT_BY_TYPE_FAIL,

                })
            }
        } catch (e) {
            dispatch({
                type: actiontypes.FETCH_ALL_PRODUCT_BY_TYPE_FAIL,
            })
            console.log('ERR', e)
        }
    }
}

export const getDataDetailProductRedux = (id) => {
    return async (dispatch, getState) => {

        let data = await GetDetailProduct(id)
        try {
            if (data && data.EC === 0) {
                dispatch({
                    type: actiontypes.GET_DATA_DETAIL_PRODUCT_SUCCESS,
                    data: data.data
                })
            } else {
                dispatch({
                    type: actiontypes.GET_DATA_DETAIL_PRODUCT_FAIL,

                })
            }
        } catch (e) {
            dispatch({
                type: actiontypes.GET_DATA_DETAIL_PRODUCT_FAIL,
            })
            console.log('ERR', e)
        }
    }
}
export const getdataProductBysort = (sort) => {
    return async (dispatch, getState) => {

        let dataSort = await AllProductBySort(sort)
        try {

            if (dataSort && dataSort.EC === 0) {
                dispatch({
                    type: actiontypes.GET_DATA_PRODUCT_BY_SORT_SUCCESS,
                    data: dataSort.dataSort
                })
            } else {
                dispatch({
                    type: actiontypes.GET_DATA_PRODUCT_BY_SORT_FAIL,

                })
            }
        } catch (e) {
            dispatch({
                type: actiontypes.GET_DATA_PRODUCT_BY_SORT_FAIL,
            })
            console.log('ERR', e)
        }
    }
}
