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
    case actionTypes.GET_STORIES_APPROVED_FOR_ADMIN:
      return {
        ...state,
        data: action.storyApprovedData,
      };
    case actionTypes.GET_STORIES_PENDING_FOR_ADMIN:
      return {
        ...state,
        data: action.storyPendingData,
      };
      case actionTypes.GET_STORY_DETAIL_ADMIN:
        return {
          ...state,
          data: action.storyIdData,
        };
        case actionTypes.GET_USER_ID_ADMIN:
          return {
            ...state,
            data: action.userIdData,
          };
    default:
      return state;
  }
};

export default storyAdminReducer;
