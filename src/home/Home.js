//@flow
import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import uuidv4 from 'uuid/v4'

type Props = {
  example: string
}

export default class extends React.Component<Props> {
  static defaultProps = {
    example: 'Tadaaa'
  }

  render() {
    const { example } = this.props

    return [
      <div key={uuidv4()}>{`${example} number one`}</div>,
      <div key={uuidv4()}>{`${example} number two`}</div>
    ]
  }
}
