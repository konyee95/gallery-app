import {
  GET_DATA_SUCCESS,
  GET_DATA_FAIL,
  GET_PROJECT_SUCCESS,
  GET_PROJECT_FAIL
} from "../actions/types";

const INITIAL_STATE = {
  username: "",
  display_name: "",
  images: [],
  sections: null,
  location: "",
  occupation: "",
  twitter: "",
  url: "",
  views: "",
  followers: "",
  following: "",
  projects: [],
  loaded: null,
  error: {
    "status": "",
    "statusText": ""
  }
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_DATA_SUCCESS:
      const { user } = action.payload;
      const {
        username,
        display_name,
        images,
        sections,
        location,
        occupation,
        twitter,
        url
      } = user;
      const { views, followers, following } = user.stats;

      return {
        ...state,
        username,
        display_name,
        images,
        sections,
        location,
        occupation,
        twitter,
        url,
        views,
        followers,
        following,
        loaded: true,
        error: null
      };
    case GET_PROJECT_SUCCESS:
      const { projects } = action.payload;
      return { ...state, projects, loaded: true, error: null };
    case GET_DATA_FAIL:
    case GET_PROJECT_FAIL:
      const error  = action.payload.response;
      return {
        ...INITIAL_STATE,
        error: {
          "status": error.status,
          "statusText": error.statusText
        }
      };
    default:
      return state;
  }
};
