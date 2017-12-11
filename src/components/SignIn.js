'use strict'

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import './SignIn.styles.scss'

import { loginRequest } from '../actions/auth'

const propTypes = {
  loading: PropTypes.bool.isRequired,
  token: PropTypes.string,
  errorMessage: PropTypes.string,
  history: PropTypes.array.isRequired,
  loginRequest: PropTypes.func.isRequired
}

const defaultProps = {
  token: null
}

class SignIn extends Component {
  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit() {
    this.props.loginRequest(this.state.email, this.state.password)
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.token !== this.props.token) {
      console.log(nextProps.token)
      this.props.history.push('/home')
    }

    if (nextProps.errorMessage != null) {
      alert(nextProps.errorMessage)
    }
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
        <div className="form-text-field-container">
          <input type="email" name="email" placeholder="Email" onChange={onEmailChange} />
        </div>
        <div className="form-text-field-container">
          <input type="password" name="password" placeholder="Password" onChange={onPasswordChange} />
        </div>
        <button type="button" className="form-btn" onClick={this.handleSubmit}>Login</button>
      </div>
    )
  }
}

SignIn.propTypes = propTypes
SignIn.defaultProps = defaultProps

const mapStateToProps = (state) => {
  return {
    loading: state.auth.loading,
    token: state.auth.token,
    errorMessage: state.auth.errorMessage
  }
}

const mapDispatchToProps = {
  loginRequest
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SignIn))
