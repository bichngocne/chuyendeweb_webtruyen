import actionTypes from "../actions/actionTypes";

const initState = {
   banner:[],

}

const appReducer = (state = initState,action)=>{
    switch (action.type) {
        case actionTypes.GET_HOME:
            console.log(action);
            return state
    
        default:
            return state
    }
}

export default appReducer