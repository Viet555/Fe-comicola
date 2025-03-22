import actiontypes from "../Action/ActionType";
const INITIAL_STATE = {
    account: {
        // access_token: "",
        // refresh_token: "",
        email: "",
        image: "",
        roleId: "",
        username: "",
        firstName: '',
        lastName: '',
        gender: '',
        address: '',
        phoneNumber: '',
        id: ''
    },
    dataFind: '',
    historyOrder: '',
    cart: [],
    isauthentic: false
};
const userReducer = (state = INITIAL_STATE, action) => {
    console.log(action)
    switch (action.type) {

        case actiontypes.USER_LOGIN_SUCCESS:

            return {
                ...state, account: {

                    // access_token: action?.payload?.DT?.access_token,
                    // refresh_token: action?.payload?.DT?.refresh_token,
                    email: action?.data?.data?.email,
                    image: action?.data?.data?.image,
                    roleId: action?.data?.data?.roleId,
                    firstName: action?.data?.data?.firstName,
                    lastName: action?.data?.data?.lastName,
                    gender: action?.data?.data?.gender,
                    address: action?.data?.data?.address,
                    phoneNumber: action?.data?.data?.phoneNumber,

                    id: action?.data?.data?._id,
                },
                cart: action?.data?.data?.cart,
                isauthentic: true
            };

        case actiontypes.USER_LOGIN_FAIL:
            return {
                ...state,
                account: null,
                cart: [],
                isauthentic: false
            };
        case actiontypes.USER_LOGOUT:
            return {
                ...state,
                account: null,
                cart: [],
                isauthentic: false
            };
        case actiontypes.ADD_PRODUCT_CART_SUCCESS:
            return {
                ...state,
                cart: action.data,

            };
        case actiontypes.ADD_PRODUCT_CART_FAIL:
            return {
                ...state,
                cart: [],

            };
        case actiontypes.GET_PRODUCT_CART_SUCCESS:
            return {
                ...state,
                cart: action.data,

            };
        case actiontypes.GET_PRODUCT_CART_FAIL:
            return {
                ...state,
                cart: [],

            };
        case actiontypes.GET_ORDER_PRODUCT_SUCCESS:
            return {
                ...state,
                historyOrder: action.data,

            };
        case actiontypes.GET_ORDER_PRODUCT_FAIL:
            return {
                ...state,
                historyOrder: [],

            };
        //
        case actiontypes.FIND_PRODUCT_BY_NAME_SUCCESS:
            return {
                ...state,
                dataFind: action.data,

            };
        case actiontypes.FIND_PRODUCT_BY_NAME_FAIL:
            return {
                ...state,
                dataFind: [],

            };

        default: // need this for default case
            return state

    }
};

export default userReducer;