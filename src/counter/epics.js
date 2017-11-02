import { combineEpics } from 'redux-observable'
import { merge } from 'rxjs/observable/merge'
import { of } from 'rxjs/observable/of'
import 'rxjs/add/operator/map'

import { incrementCounter, decrementCounter } from './actions'
import {
  INCREMENT_COUNTER,
  DECREMENT_COUNTER
} from './constants'

// Only here for example
export const incrementCounterEpic = action$ =>
  action$.ofType(INCREMENT_COUNTER).map(() => {
    return incrementCounter()
  })

export const decrementCounterEpic = action$ =>
  action$.ofType(DECREMENT_COUNTER).map(() => {
    return decrementCounter()
  })


export default action$ =>
  merge(
    incrementCounterEpic(action$),
    decrementCounterEpic(action$),
  )
