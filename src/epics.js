import { combineEpics } from 'redux-observable'

import counterEpics from '__counter/epics'

export default combineEpics(counterEpics)
