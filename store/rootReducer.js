import { combineReducers } from 'redux';
// import User Reducer ...
import userReducer from './user/userSlice';

const rootReducer = combineReducers({
  user: userReducer,
});

export default rootReducer;
