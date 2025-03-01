import { combineReducers } from 'redux';
import userReducer from './UserReducer';

// import adminReducer from './adminReducer';
const rootReducer = combineReducers({
    user: userReducer,
    // admin: adminReducer
});

export default rootReducer;