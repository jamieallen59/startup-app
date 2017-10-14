import React from 'react'
import PropTypes from 'prop-types'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux'

export default class extends React.Component {
  static propTypes = {
    example: PropTypes.string
  }
  static defaultProps = {
    example: 'Tadaaa'
  }

  render() {
    const { example } = this.props

    return ([
      <div>{`${example} number one`}</div>,
      <div>{`${example} number two`}</div>
    ])
  }
}
