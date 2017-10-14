import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import { Provider } from 'react-redux'

import storeConfig from './store'
import Root from './Root'

const { store, history } = storeConfig()

const render = (Component, store) => {
  ReactDOM.render(
    <AppContainer>
      <Provider store={store}>
        <Component />
      </Provider>
    </AppContainer>,
    document.getElementById('app'),
  )
}

render(Root)

// Webpack Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./Root', () => { render(App) })
}
