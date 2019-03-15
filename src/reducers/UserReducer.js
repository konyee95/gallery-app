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
  projects:[],
  loaded: null
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
        following
      };
    case GET_PROJECT_SUCCESS:
      console.log(action.payload);
      const { projects } = action.payload;
      return {...state, projects};
    case GET_DATA_FAIL:
    case GET_PROJECT_FAIL:
      return INITIAL_STATE;
    default:
      return state;
  }
};
