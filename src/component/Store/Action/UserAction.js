import { addProductInCart, getHistoryOrder, getProductCart, searchProduct } from "../../../service/ApiService";
import actiontypes from "./ActionType";

export const UserLoginSuccess = (userInfor) => ({
    type: actiontypes.USER_LOGIN_SUCCESS,
    data: userInfor
})
export const UserLoginFail = () => ({
    type: actiontypes.USER_LOGIN_FAIL,

})

export const UserLogout = () => ({
    type: actiontypes.USER_LOGOUT,

})
export const addProductcartByRedux = (userId, productId, quatity) => {
    return async (dispatch, getState) => {

        let data = await addProductInCart(userId, productId, quatity)
        try {

            if (data && data.EC === 0) {
                // dataGet = await getProductCart(userId)
                dispatch({
                    type: actiontypes.ADD_PRODUCT_CART_SUCCESS,
                    data: data.cart
                })

            } else {
                dispatch({
                    type: actiontypes.ADD_PRODUCT_CART_FAIL,

                })
            }
        } catch (e) {
            dispatch({
                type: actiontypes.ADD_PRODUCT_CART_FAIL,
            })
            console.log('ERR', e)
        }
    }
}

export const getProductcartByRedux = (userId) => {
    return async (dispatch, getState) => {

        let dataGet = await getProductCart(userId)
        try {

            if (dataGet && dataGet.EC === 0) {
                dispatch({
                    type: actiontypes.GET_PRODUCT_CART_SUCCESS,
                    data: dataGet.cart
                })

            } else {
                dispatch({
                    type: actiontypes.GET_PRODUCT_CART_FAIL,

                })
            }
        } catch (e) {
            dispatch({
                type: actiontypes.GET_PRODUCT_CART_FAIL,
            })
            console.log('ERR', e)
        }
    }
}
export const getHistoryOrderByRedux = (userId) => {
    return async (dispatch, getState) => {

        let dataGet = await getHistoryOrder(userId)
        try {

            if (dataGet && dataGet.EC === 0) {
                console.log(dataGet)
                dispatch({
                    type: actiontypes.GET_ORDER_PRODUCT_SUCCESS,
                    data: dataGet.orders
                })

            } else {
                dispatch({
                    type: actiontypes.GET_ORDER_PRODUCT_FAIL,

                })
            }
        } catch (e) {
            dispatch({
                type: actiontypes.GET_ORDER_PRODUCT_FAIL,
            })
            console.log('ERR', e)
        }
    }
}
///
export const findProductbyName = (name) => {
    return async (dispatch, getState) => {

        let dataFind = await searchProduct(name)
        try {

            if (dataFind && dataFind.EC === 0) {
                dispatch({
                    type: actiontypes.FIND_PRODUCT_BY_NAME_SUCCESS,
                    data: dataFind.products
                })

            } else {
                dispatch({
                    type: actiontypes.FIND_PRODUCT_BY_NAME_FAIL,

                })
            }
        } catch (e) {
            dispatch({
                type: actiontypes.FIND_PRODUCT_BY_NAME_FAIL,
            })
            console.log('ERR', e)
        }
    }
}


