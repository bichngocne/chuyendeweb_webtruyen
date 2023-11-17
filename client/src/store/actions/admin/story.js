import actionTypes from "../actionTypes";
import * as apis from "../../../apis";

const getStories = () => async (dispatch) => {
  try {
    const response = await apis.getStories();
    if (response?.status === 200) {
      dispatch({
        type: actionTypes.GET_STORIES_FOR_ADMIN,
        storyData: response?.data.stories,
      });
    } else {
      dispatch({
        type: actionTypes.GET_STORY_DETAIL_ADMIN,
        storyIdData: response?.data.storyById,
      });
    }
  } catch (error) {
    dispatch({
      type: actionTypes.GET_STORIES_FOR_POSTER,
      data: null,
    });
  }
};

const apiGetStoryById = (id) => async (dispatch) => {
  try {
    const response = await apis.apiGetStoryById(id);
    if (response?.status === 200) {
      dispatch({
        type: actionTypes.GET_STORY_DETAIL,
        storyIdData: response?.data.storyById,
      });
    } else {
      dispatch({
        type: actionTypes.GET_STORY_DETAIL,
        storyIdData: null,
      });
    }
  } catch (error) {
    dispatch({
      type: actionTypes.GET_STORY_DETAIL,
      data: null,
    });
  }
};
export { getStories, apiGetStoryById };
