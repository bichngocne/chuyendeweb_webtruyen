import actionTypes from "./actionTypes";
import * as apis from "../../apis";
//get Stories
const getAllStories = () => async (dispatch) => {
    try {
        const response = await apis.getAllStories();
        if(response?.status === 200){
            dispatch({
                type : actionTypes.GET_STORIES_FOR_POSTER,
                storyData: response?.data.stories
            })
        }else{
            dispatch({
                type : actionTypes.GET_STORIES_FOR_POSTER,
                storyData: null
            })
        }
    } catch (error) {
        dispatch({
            type : actionTypes.GET_STORIES_FOR_POSTER,
            data: null
        })
    }
};

export {getAllStories}