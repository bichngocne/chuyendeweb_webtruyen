import actionTypes from "../actionTypes";
import * as apis from "../../../apis";

const getStoriesAdmin = () => async (dispatch) => {
  try {
    const response = await apis.getStoriesAdmin();
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
      type: actionTypes.GET_STORIES_FOR_ADMIN,
      data: null,
    });
  }
};
const getStoriesApprovedAdmin = () => async (dispatch) => {
  try {
    const response = await apis.getStoriesApprovedAdmin();
    if (response?.status === 200) {
      dispatch({
        type: actionTypes.GET_STORIES_APPROVED_FOR_ADMIN,
        storyApprovedData: response?.data.stories,
      });
    } else {
      dispatch({
        type: actionTypes.GET_STORY_DETAIL_ADMIN,
        storyIdData: response?.data.storyById,
      });
    }
  } catch (error) {
    dispatch({
      type: actionTypes.GET_STORIES_APPROVED_FOR_ADMIN,
      data: null,
    });
  }
};
const getStoriesPendingAdmin = () => async (dispatch) => {
  try {
    const response = await apis.getStoriesPendingAdmin();
    if (response?.status === 200) {
      dispatch({
        type: actionTypes.GET_STORIES_PENDING_FOR_ADMIN,
        storyPendingData: response?.data.stories,
      });
    } else {
      dispatch({
        type: actionTypes.GET_STORY_DETAIL_ADMIN,
        storyIdData: response?.data.storyById,
      });
    }
  } catch (error) {
    dispatch({
      type: actionTypes.GET_STORIES_PENDING_FOR_ADMIN,
      data: null,
    });
  }
};
const apiGetStoryByIdAdmin = (id) => async (dispatch) => {
  try {
    const response = await apis.apiGetStoryByIdAdmin(id);
    if (response?.status === 200) {
      dispatch({
        type: actionTypes.GET_STORY_DETAIL_ADMIN,
        storyIdData: response?.data.storyById,
      });
    } else {
      dispatch({
        type: actionTypes.GET_STORY_DETAIL_ADMIN,
        storyIdData: null,
      });
    }
  } catch (error) {
    dispatch({
      type: actionTypes.GET_STORY_DETAIL_ADMIN,
      data: null,
    });
  }
};
const apiGetUserOfStoryByIdAdmin = (id) => async (dispatch) => {
  try {
    const response = await apis.apiGetUserOfStoryByIdAdmin(id);
    if (response?.status === 200) {
      dispatch({
        type: actionTypes.GET_USER_ID_ADMIN,
        userIdData: response?.data.userIdData,
      });
    } else {
      dispatch({
        type: actionTypes.GET_STORY_DETAIL_ADMIN,
        storyIdData: null,
      });
    }
  } catch (error) {
    dispatch({
      type: actionTypes.GET_USER_ID_ADMIN,
      data: null,
    });
  }
};
export {
  getStoriesAdmin,
  getStoriesApprovedAdmin,
  getStoriesPendingAdmin,
  apiGetStoryByIdAdmin,
  apiGetUserOfStoryByIdAdmin,
};
