'use strict'

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import './SignUp.styles.scss'

const propTypes = {}

const defaultProps = {}

class SignUp extends Component {
  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit() {
    this.props.submitSignupRequest(this.state.email, this.state.password)
  }

  render() {
    let onEmailChange = (e) => {
      this.setState({email: e.target.value})
    }

    let onPasswordChange = (e) => {
      this.setState({password: e.target.value})
    }

    return (
      <div>
        <h3>Sign Up to Medifi</h3>
        <form id="signup-form">
          <div className="form-text-field-container">
            <input type="email" name="email" placeholder="Email" onChange={onEmailChange} />
          </div>
          <div className="form-text-field-container">
            <input type="password" name="password" placeholder="Password" onChange={onPasswordChange} />
          </div>
          <button type="submit" className="form-btn" onClick={this.handleSubmit}>Sign up</button>
        </form>
      </div>
    )
  }
}

SignUp.propTypes = propTypes
SignUp.defaultProps = defaultProps

export default connect()(SignUp)
