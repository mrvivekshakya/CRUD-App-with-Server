import { combineReducers } from "redux";
import {userReducer} from './user';
import setIdReducer from './SetId';

export const allReducers = combineReducers({
    userReducer,
    setIdReducer
});