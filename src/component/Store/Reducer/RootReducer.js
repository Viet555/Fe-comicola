import { combineReducers } from 'redux';
import userReducer from './UserReducer';
import AdminReducer from './AdminReducer';

// import adminReducer from './adminReducer';
const rootReducer = combineReducers({
    user: userReducer,
    admin: AdminReducer
});

export default rootReducer;