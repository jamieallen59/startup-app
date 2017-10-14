import React from 'react'
import PropTypes form 'prop-types'
import { Router, Route, IndexRoute } from 'react-router'
import { Provider } from 'react-redux'

export default ({ store, history }) => (
    <Provider store={store}>
        <Router history={history}>
            <Route path="/">
            </Route>
        </Router>
    </Provider>
)

Root.propTypes = {
    history: PropTypes.object.isRequired,
    store: PropTypes.object.isRequired
}
