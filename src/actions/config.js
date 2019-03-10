import {GET_USER_INFO} from '../constants';
// import {XHR} from '../utils';
//
// function receiveUserInfo(json){
//     return {
//         type:GET_USER_INFO,
//         json,
//         receiveAt:Date.now(),
//     }
// }
// export function getUserInfo (params){
//     return dispatch=>{
//         XHR({
//             url:'api',
//             data:params,
//             success:data=>{
//                 dispatch(receiveUserInfo(data))
//             }
//         })
//     }
// }

export function getUserInfo (params){
    return dispatch=>{
        dispatch({
            type:GET_USER_INFO,
            payload:{
                username:'yzx',
                password:'admin'
            }
        });
    }
}


