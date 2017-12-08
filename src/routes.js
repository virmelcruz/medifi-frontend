'use strict'

import Home from './components/Home'
import SignUp from './components/SignUp'
import Consultation from './components/Consultation'

const routes = [
  {
    path: '/',
    component: Home,
    exact: true
  },
  {
    path: '/signup',
    component: SignUp
  },
  {
    path: '/consultation',
    component: Consultation
  }
]

export default routes
