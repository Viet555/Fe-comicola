import actiontypes from "../Action/ActionType";
const INITIAL_STATE = {
    typeProduct: [],
    allProduct: [],

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


        default: // need this for default case
            return state

    }
};

export default AdminReducer;