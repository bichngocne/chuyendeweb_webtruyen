import actionTypes from "../../actions/actionTypes";

const initState = {
   Categories:[],

}

const categoryAdminReducer = (state = initState,action)=>{
    switch (action.type) {
        case actionTypes.GET_CATEGORIES_FOR_ADMIN:
            return {
                ...state,
                data :action.categoriesData
            }
    
        default:
            return state
    }
}

export default categoryAdminReducer