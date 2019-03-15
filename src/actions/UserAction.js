import axios from "axios";
import {
  GET_DATA_SUCCESS,
  GET_DATA_FAIL,
  GET_PROJECT_SUCCESS,
  GET_PROJECT_FAIL
} from "./types";

export const getData = username => {
  const apiKey = "pqfCQK6oyFGno7n6TqiGip8XJaCOfRHr";
  return dispatch => {
    axios
      .get(`https://api.behance.net/v2/users/${username}?client_id=${apiKey}`)
      .then(response =>
        dispatch({
          type: GET_DATA_SUCCESS,
          payload: response.data
        })
      )
      .then(() => {
        axios
          .get(`https://api.behance.net/v2/users/${username}/projects?client_id=${apiKey}`)
          .then(response =>
            dispatch({
              type: GET_PROJECT_SUCCESS,
              payload: response.data
            })
          )
          .catch(error =>
            dispatch({
              type: GET_PROJECT_FAIL,
              payload: error.error
            })
          );
      })
      .catch(error =>
        dispatch({
          type: GET_DATA_FAIL,
          payload: error.error
        })
      );
  };
};
