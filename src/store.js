import { applyMiddleware, compose, createStore } from 'redux'
import { createEpicMiddleware } from 'redux-observable';

import rootReducer from './reducers'
import rootEpic from './epics';

const epicMiddleware = createEpicMiddleware(rootEpic);

const middleware = [
    epicMiddleware
];

// To allow chrome extensions Redux devtools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose /* eslint-disable no-underscore-dangle */
const enhancer = {}

const configureStore = initialState => {
    const enhancers = composeEnhancers(
        enhancer,
        applyMiddleware(...middleware)
    )

    return createStore(
        rootReducer,
        initialState,
        enhancers
    )
}

export default () => {
    const initialState = {}
    const store = configureStore(initialState)

    return store
}
