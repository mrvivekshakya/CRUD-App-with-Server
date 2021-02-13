import * as type from '../constants/index';

var initialState = {
    loading: false,
    isIdSetted: false,
    id: 0,
    msg: ""
};

const setIdReducer = (state = initialState,action) => {
    console.log("before"+state);

    switch(action.type){
        case type.SET_ID_PENDING:
            return {
                loading:true,
            }
        case type.SET_ID:
            return {
                loading: false,
                isIdSetted: true,
                id: action.payload
            }
        case type.SET_ID_FULFILLED:
            return {
                loading: false,
                isIdSetted: true,
                id: action.payload
            }
        case type.SET_ID_REJECTED:
            return {
                msg: action.payload
            }
        default:
            return state
    }
    //console.log("after"+state);
}

export default setIdReducer;