import React from 'react'
import PropTypes from 'prop-types'
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from './home/Home'

export default ({ store }) => (
    <Router>
        <Route path="/" component={Home} />
    </Router>
)

Root.propTypes = {
    history: PropTypes.object.isRequired,
    store: PropTypes.object.isRequired
}
