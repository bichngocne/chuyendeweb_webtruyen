import { combineReducers } from "redux";
import {storyAdminReducer,categoryAdminReducer, userAdminReducer} from './admin';
// import { persistStore, persistReducer } from 'redux-persist'
// import storage from 'redux-persist/lib/storage'
// import autoMergeLevel2 from "redux-persist/es/stateReconciler/autoMergeLevel2";
import storyReducer from './poster/story.js'
// const commonConfig = {
//     storage:storage,
//     stateReconciler: autoMergeLevel2 ,
// }


const rootReducer = combineReducers({
    app:appReducer,
    story:storyReducer,
    categoryAdmin:categoryAdminReducer,
    storyAdmin:storyAdminReducer,
    userAdmin:userAdminReducer,
})

export default rootReducer