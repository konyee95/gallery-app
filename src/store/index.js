import { createStore, compose, applyMiddleware } from "redux";
import ReduxThunk from "redux-thunk";

import reducers from "../reducers";

const middlewares = [ReduxThunk];

const store = createStore(
    reducers,
    {},
    compose(applyMiddleware(...middlewares))
);

export default store;