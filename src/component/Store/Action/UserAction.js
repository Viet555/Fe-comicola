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

