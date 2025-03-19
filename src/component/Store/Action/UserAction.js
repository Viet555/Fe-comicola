import { addProductInCart, getProductCart } from "../../../service/ApiService";
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

