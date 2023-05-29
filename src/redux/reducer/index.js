import { combineReducers } from "redux";
import fetchProductReducer from "./fetchProductReducer";
import detailReducer from "./detailReducer";
const reducer = combineReducers({
    fetchProductReducer: fetchProductReducer,
    detailReducer: detailReducer
})

export default reducer;