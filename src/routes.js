'use strict'

import Home from './components/Home'
import Landing from './components/Landing'

const routes = [
  {
    path: '/',
    component: Landing,
    exact: true
  },
  {
    path: '/home',
    component: Home
  }
]

export default routes
