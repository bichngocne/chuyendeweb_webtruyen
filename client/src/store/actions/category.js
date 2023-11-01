import actionTypes from "./actionTypes";
import * as apis from "../../apis";

export const getCategories = () => async (dispatch) => {
    try {
        const response = await apis.getCategories();
        console.log(response);
        if(response?.status === 200){
            dispatch({
                type : actionTypes.GET_CATEGORIES_FOR_POSTER,
                categoriesData: response?.data.categories
            })
        }else{
            dispatch({
                type : actionTypes.GET_CATEGORIES_FOR_POSTER,
                categoriesData: null
            })
        }
    } catch (error) {
        dispatch({
            type : actionTypes.GET_CATEGORIES_FOR_POSTER,
            data: null
        })
    }
};