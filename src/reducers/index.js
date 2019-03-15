import { combineReducers } from "redux";
import NameReducer from "./NameReducer";
import UserReducer from "./UserReducer";

export default combineReducers({
    names: NameReducer,
    user: UserReducer
})