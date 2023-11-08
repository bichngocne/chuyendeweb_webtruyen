import actionTypes from "./../../actions/actionTypes";

const initState = {
  stories: [],
};

const StoryReducer = (state = initState, action) => {
  switch (action.type) {
    case actionTypes.GET_STORIES_FOR_POSTER:
      return {
        ...state,
        data: action.storyData,
      };
    case actionTypes.GET_STORY_DETAIL:
      return {
        ...state,
        data: action.storyIdData,
      };
    default:
      return state;
  }
};

export default StoryReducer;
