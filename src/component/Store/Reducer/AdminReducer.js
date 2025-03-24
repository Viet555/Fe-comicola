import actiontypes from "../Action/ActionType";
const INITIAL_STATE = {
    typeProduct: [],
    allProduct: [],
    detailProduct: [],
    dataProductSort: [],
    historyOrder: []
};

const AdminReducer = (state = INITIAL_STATE, action) => {
    console.log(action)
    switch (action.type) {

        case actiontypes.FETCH_DATA_TYPE_SUCCESS:

            return {
                ...state,
                typeProduct: action.data
            };

        case actiontypes.FETCH_DATA_TYPE_FAIL:
            return {
                ...state,
                typeProduct: []
            };

        case actiontypes.FETCH_ALL_PRODUCT_BY_TYPE_SUCCESS:
            return {
                ...state,
                allProduct: action.data
            };
        case actiontypes.FETCH_ALL_PRODUCT_BY_TYPE_FAIL:
            return {
                ...state,
                allProduct: []
            };
        case actiontypes.GET_DATA_DETAIL_PRODUCT_SUCCESS:

            return {
                ...state,
                detailProduct: action.data,

            };
        case actiontypes.GET_DATA_DETAIL_PRODUCT_FAIL:
            return {
                ...state,
                detailProduct: []
            };
        //Sort
        case actiontypes.GET_DATA_PRODUCT_BY_SORT_SUCCESS:
            return {
                ...state,
                dataProductSort: action.data
            };
        case actiontypes.GET_DATA_PRODUCT_BY_SORT_FAIL:
            return {
                ...state,
                dataProductSort: []
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
        default: // need this for default case
            return state

    }
};

export default AdminReducer;