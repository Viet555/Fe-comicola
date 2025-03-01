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

    },
    isauthentic: false
};
const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case actiontypes.USER_LOGIN_SUCCESS:
            console.log('check data action ', action)
            return {
                ...state, account: {
                    ///copyham
                    // access_token: action?.payload?.DT?.access_token,
                    // refresh_token: action?.payload?.DT?.refresh_token,
                    // email: action?.data?.userData.email,
                    // image: action?.data?.data?.userData.image,
                    // roleId: action?.data?.userData.roleId,
                    // firstName: action?.data?.userData.firstname,
                    // lastName: action?.data?.userData.lastname,
                    // gender: action?.data?.userData.gender,
                    // address: action?.data?.userData.address,
                },
                isauthentic: true
            };

        case actiontypes.USER_LOGIN_FAIL:
            return {
                ...state,
                account: null,
                isauthentic: false
            };
        case actiontypes.USER_LOGOUT:
            return {
                ...state,
                account: null,
                isauthentic: false
            };
        default: // need this for default case
            return state

    }
};

export default userReducer;