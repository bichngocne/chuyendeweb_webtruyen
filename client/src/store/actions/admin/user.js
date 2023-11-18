import actionTypes from "../actionTypes";
import * as apis from "../../../apis";

export const getUsers = () => async (dispatch) => {
    try {
        const response = await apis.getUsers();
        if(response?.status === 200){
            dispatch({
                type : actionTypes.GET_USER_FOR_ADMIN,
                usersData: response?.data.users
            })
        }else{
            dispatch({
                type : actionTypes.GET_USER_FOR_ADMIN,
                usersData: null
            })
        }
    } catch (error) {
        dispatch({
            type : actionTypes.GET_USER_FOR_ADMIN,
            data: null
        })
    }
};