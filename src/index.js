import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'

import storeConfig from './store'
import Root from './Root'

const { store, history } = storeConfig()

render(
    <Root history={history} store={store} />,
    document.getElementById('app')
)
