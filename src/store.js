import { applyMiddleware, compose, createStore } from 'redux'
import { createEpicMiddleware } from 'redux-observable';

import reducers from './reducers'
import rootEpic from './epics';

const epicMiddleware = createEpicMiddleware(rootEpic);

const middleware = [
    epicMiddleware
];

// To allow chrome extensions Redux devtools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose /* eslint-disable no-underscore-dangle */

const configureStore = initialState => {
    const enhancers = composeEnhancers(
        applyMiddleware(...middleware)
    )

    return createStore(
        reducers,
        initialState,
        enhancers
    )
}

export default () => {
    const initialState = {}
    const store = configureStore(initialState)

    return store
}
