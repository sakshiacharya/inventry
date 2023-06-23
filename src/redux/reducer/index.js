import { combineReducers } from "redux";
import fetchUserReducer from "./fetchUserReducer";
const reducer = combineReducers({
  
    fetchUserReducer: fetchUserReducer
})

export default reducer;