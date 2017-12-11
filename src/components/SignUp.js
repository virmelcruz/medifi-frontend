'use strict'

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import './SignUp.styles.scss'

const propTypes = {
  signupRequest: PropTypes.func.isRequired
}

const defaultProps = {}

class SignUp extends Component {
  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit() {
    this.props.signupRequest(this.state.email, this.state.password, this.state.firstName, this.state.lastName)
  }

  render() {
    let onEmailChange = (e) => {
      this.setState({email: e.target.value})
    }

    let onPasswordChange = (e) => {
      this.setState({password: e.target.value})
    }

    let onFirstNameChange = (e) => {
      this.setState({firstName: e.target.value})
    }

    let onLastNameChange = (e) => {
      this.setState({lastName: e.target.value})
    }

    return (
      <div>
        <div className="form-text-field-container">
          <input type="email" name="email" placeholder="Email" onChange={onEmailChange} />
        </div>
        <div className="form-text-field-container">
          <input type="password" name="password" placeholder="Password" onChange={onPasswordChange} />
        </div>
        <div className="form-text-field-container">
          <input type="text" name="first_name" placeholder="First Name" onChange={onFirstNameChange} />
        </div>
        <div className="form-text-field-container">
          <input type="text" name="last_name" placeholder="Last Name" onChange={onLastNameChange} />
        </div>
        <button type="submit" className="form-btn" onClick={this.handleSubmit}>Sign up</button>
      </div>
    )
  }
}

SignUp.propTypes = propTypes
SignUp.defaultProps = defaultProps

export default connect()(SignUp)
