import appReducer from "./appReducer";
import { combineReducers } from "redux";
// import { persistStore, persistReducer } from 'redux-persist'
// import storage from 'redux-persist/lib/storage'
// import autoMergeLevel2 from "redux-persist/es/stateReconciler/autoMergeLevel2";

// const commonConfig = {
//     storage:storage,
//     stateReconciler: autoMergeLevel2 ,
// }


const rootReducer = combineReducers({
    app:appReducer,
})

export default rootReducer