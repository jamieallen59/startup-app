//@flow
import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux'

type Props = {
  example: string,
};

export default class extends React.Component<Props> {
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
