import { combineReducers } from "redux";

import NameReducer from "./NameReducer";

export default combineReducers({
    names: NameReducer
})