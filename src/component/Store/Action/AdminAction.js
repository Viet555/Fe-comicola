import { fetchAllDataType, getDataProductByType } from "../../../service/ApiService"
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
