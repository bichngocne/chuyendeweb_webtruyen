import actionTypes from "../actionTypes";
import * as apis from "../../../apis";
//get Stories
const getStories = () => async (dispatch) => {
    try {
        const response = await apis.getStories();
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
// api Get Story By Id
const apiGetStoryById = (id) => async (dispatch) => {
    try {
        const response = await apis.apiGetStoryById(id);
        if(response?.status === 200){
            dispatch({
                type : actionTypes.GET_STORY_DETAIL,
                storyIdData: response?.data.storyById
            })
        }else{
            dispatch({
                type : actionTypes.GET_STORY_DETAIL,
                storyIdData: null
            })
        }
    } catch (error) {
        dispatch({
            type : actionTypes.GET_STORY_DETAIL,
            data: null
        })
    }
};
// api Get Category Of Story By Id
const apiGetCategoryOfStoryById = (id) => async (dispatch) => {
    try {
        console.log('ih');
        const response = await apis.apiGetCategoryOfStoryById(id);
        if(response?.status === 200){
            dispatch({
                type : actionTypes.GET_STORY_DETAIL,
                storyIdData: response?.data.foundStory
            })
        }else{
            dispatch({
                type : actionTypes.GET_STORY_DETAIL,
                storyIdData: null
            })
        }
    } catch (error) {
        dispatch({
            type : actionTypes.GET_STORY_DETAIL,
            data: null
        })
    }
};
export {getStories,apiGetStoryById,apiGetCategoryOfStoryById}