import { act } from 'react-dom/test-utils';
import * as type from '../constants/index';

var initialState = {
    loading: false,
    users: [],
    user: {},
    usersFetched: false,
    userFetched: false,
    userRemoved: false,
    userUpdated: false,
    userAdded: false,
    msg: ""
}
export const userReducer = (state = initialState,action) => {
    switch(action.type){
        case type.GET_USERS_PENDING:
            state = {
                ...state,
                loading: true,
            }
            break;
        case type.GET_USERS_FULFILLED:
            state = {
                ...state,
                loading: false,
                users: action.payload,
                usersFetched: true
            }
            break;
        case type.GET_USERS_REJECTED:
            state = {
                loading:false,
                msg: action.payload
            }
            break;
        case type.GET_USER_PENDING:
            state = {
                loading:true
            };
            break;
        case type.GET_USER_FULFILLED:
            console.log("get user ful",action.payload)
            state = {
                loading:false,
                user: action.payload,
                userFetched: true
            };
            break;
        case type.GET_USER_REJECTED:
            state = {
                loading: false,
                msg: action.payload
            };
            break;
        case type.ADD_USER_PENDING:
            state = {
                loading:true
            };
            break;
        case type.ADD_USER_FULFILLED:
            state = {
                loading: false,
                users: action.payload,
                userAdded: true
            };
            break;
        case type.ADD_USER_REJECTED:
            state = {
                loading:false,
                msg: action.payload
            };
            break;
        case type.REMOVE_USER_PENDING:
            state = {
                loading: true,
            };
            break;
        case type.REMOVE_USER_FULFILLED:
            state = {
                loading: false,
                userRemoved: true
            };
            break;
        case type.REMOVE_USER_REJECTED:
            state = {
                loading:false,
                msg: action.payload
            };
            break;
        case type.UPDATE_USER_PENDING:
            state = {
                loading: true
            };
            break;
        case type.UPDATE_USER_FULFILLED:
            state = {
                loading: false,
                userUpdated:true
            };
            break;
        case type.UPDATE_USER_REJECTED:
            state = {
                loading: false,
                msg: action.payload
            };
            break;
        
        
    }
    return state;
}