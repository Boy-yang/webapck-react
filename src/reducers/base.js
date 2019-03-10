import {GET_USER_INFO} from '../constants'

let initialState = {
    userInfo:{},
};
export default function update(state=initialState,action) {
    switch (action.type){
        case GET_USER_INFO:
            return Object.assign({},state,{
                userInfo:action.payload,
            });
            //或者
            // return {
            //     userInfo: {...action.payload}
            // };
        default:
            return state;
    }
};