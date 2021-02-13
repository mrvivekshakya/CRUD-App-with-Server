import * as type from '../constants/index';
import UserAPI from '../utils/api/UserAPI';

export const addUserAction = (params) =>{
    return {
        type: type.ADD_USER,
        payload: UserAPI.addUser(params)
        .then((response) => {
            return response.data;
        })
    }
}

export const removeUserAction = (params) => {
    return {
        type: type.REMOVE_USER,
        payload: UserAPI.removeUser(params)
        .then((response) => {
            return response.data;
        })
    }
}
export const getUsersAction = () => {
    return {
        type: type.GET_USERS,
        payload: UserAPI.getUsers()
        .then((response) => {
            return response.data;
        })
    }
}

export const getUserAction = (params) => {
    return {
        type: type.GET_USER,
        payload: UserAPI.getUser(params)
        .then((response) => {
            return response.data;
        })
    }
}

export const updateUserAction = (params) => {
    return{
        type: type.UPDATE_USER,
        payload: UserAPI.updateUser(params)
        .then((response) => {
            return response.data;
        })
    }
}

export const setIdAction = (params) => {
    return {
        type: type.SET_ID,
        payload: params
    }
}