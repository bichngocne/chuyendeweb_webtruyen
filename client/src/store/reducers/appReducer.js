import actionTypes from "../actions/actionTypes";

const initState = {
   Categories:[],

}

const appReducer = (state = initState,action)=>{
    switch (action.type) {
        case actionTypes.GET_CATEGORIES_FOR_POSTER:
            return {
                ...state,
                data :action.categoriesData
            }
    
        default:
            return state
    }
}

export default appReducer