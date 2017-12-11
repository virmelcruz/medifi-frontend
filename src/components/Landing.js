'use strict'

import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import SignIn from './SignIn'
import SignUp from './SignUp'
import './Landing.styles.scss'

const propTypes = {}

const defaultProps = {}

class Landing extends Component {
  render() {
    return (
      <div>
        <h3>Welcome to Medifi!</h3>
        <SignIn />
        <SignUp />
        <div>
          <Link to="/free_trial">Try for free!</Link>
        </div>
      </div>
    )
  }
}

Landing.propTypes = propTypes
Landing.defaultProps = defaultProps

export default connect()(Landing)
