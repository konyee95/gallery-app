import { UPDATE_NAME } from "./types";

export const updateName = payload => {
    return {
        type: UPDATE_NAME,
        payload
    }
}