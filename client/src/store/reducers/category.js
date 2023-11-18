import actionTypes from "./../actions/actionTypes";

const initState = {
  categories: [],
 
};

const CategoryReducer = (state = initState, action) => {
    switch (action.type) {
        case actionTypes.GET_CATEGORIES_SUCCESS:
          return {
            ...state,
            categories: action.categoriesData,
          };
        case actionTypes.GET_CATEGORIES_FAILURE:
          return {
            ...state,
            categories: null,
          };
        default:
          return state;
      }
};

export default CategoryReducer;
