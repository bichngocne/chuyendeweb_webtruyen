import actionTypes from "../actionTypes";
import * as apis from "../../../apis";

export const getCategories = () => async (dispatch) => {
    try {
        const response = await apis.getAllCategories();
        console.log(response);
        if(response?.status === 200){
            dispatch({
                type : actionTypes.GET_CATEGORIES_SUCCESS,
                categoriesData: response?.data.categories
            })
        } else {
            dispatch({
                type : actionTypes.GET_CATEGORIES_FAILURE,
                categoriesData: null
            })
        }
    } catch (error) {
        dispatch({
            type : actionTypes.GET_CATEGORIES_FAILURE,
            data: null
        })
    }
};