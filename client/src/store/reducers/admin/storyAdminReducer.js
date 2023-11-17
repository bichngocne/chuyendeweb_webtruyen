import actionTypes from "../../actions/actionTypes";

const initState = {
  stories: [],
};

const storyAdminReducer = (state = initState, action) => {
  switch (action.type) {
    case actionTypes.GET_STORIES_FOR_ADMIN:
      return {
        ...state,
        data: action.storyData,
      };
    case actionTypes.GET_STORY_DETAIL_ADMIN:
      return {
        ...state,
        data: action.storyIdData,
      };
    default:
      return state;
  }
};

export default storyAdminReducer;
