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
      type: actionTypes.GET_STORIES_FOR_ADMIN,
      data: null,
    });
  }
};
const getStoriesApproved = () => async (dispatch) => {
  try {
    const response = await apis.getStoriesApproved();
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
const getStoriesPending = () => async (dispatch) => {
  try {
    const response = await apis.getStoriesPending();
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
const apiGetStoryById = (id) => async (dispatch) => {
  try {
    const response = await apis.apiGetStoryById(id);
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
const apiGetUserOfStoryById = (id) => async (dispatch) => {
  try {
    const response = await apis.apiGetUserOfStoryById(id);
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
  getStories,
  getStoriesApproved,
  getStoriesPending,
  apiGetStoryById,
  apiGetUserOfStoryById,
};
