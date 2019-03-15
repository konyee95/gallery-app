import { UPDATE_NAME } from "../actions/types";

const INITIAL_STATE = {
    searchName: "matiascorea"
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case UPDATE_NAME:
            return {...state, searchName: action.payload};
        default:
            return state;
    }
};