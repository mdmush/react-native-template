import { combineReducers } from 'redux';
import userReducer from './slices/userSlice';

export const rootReducer = combineReducers({
  user: userReducer,
});
