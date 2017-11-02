import React from 'react'
import PropTypes from 'prop-types'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Counter from '__counter/Counter'

export default () => (
  <Router>
    <Route path="/" component={Counter} />
  </Router>
)
