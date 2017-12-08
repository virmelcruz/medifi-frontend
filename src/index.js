'use strict'

import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'
// import { AppContainer } from 'react-hot-loader'
import configureStore from './configureStore'
import routes from './routes'
import './index.styles.scss'

const store = configureStore()

render(
  <Provider store={store}>
    <BrowserRouter>
      {renderRoutes(routes)}
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
)

// if (module.hot) {
//   module.hot.accept()
// }
