//@flow
import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { incrementCounter, decrementCounter } from './actions'

type Props = {
  counter: number,
  incrementCounter: void,
  decrementCounter: void
}

const Counter = ({ counter, incrementCounter, decrementCounter }) =>
  <div>
    <div>
      {`Total magic number: ${counter}`}
    </div>
    <button onClick={incrementCounter}>Add 1</button>
    <button onClick={decrementCounter}>Minus 1</button>
  </div>

const mapStateToProps = ({ counter: { counter } }) => ({
  counter
})

const mapDispatchToProps = dispatch => bindActionCreators({
  incrementCounter,
  decrementCounter,
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Counter)
