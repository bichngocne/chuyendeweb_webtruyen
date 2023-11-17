import actionTypes from "../../actions/actionTypes";

const initState = {
   Users:[],

}

const userAdminReducer = (state = initState,action)=>{
    switch (action.type) {
        case actionTypes.GET_USER_FOR_ADMIN:
            return {
                ...state,
                data :action.usersData
            }
    
        default:
            return state
    }
}

export default userAdminReducer