'use strict'

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Route, Link } from 'react-router-dom'
import './Home.styles.scss'

const propTypes = {}

const defaultProps = {}

class Home extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit() {
    this.props.submitLoginRequest(this.state.email, this.state.password);
  }

  render() {
    let onEmailChange = (e) => {
      this.setState({email: e.target.value});
    };

    let onPasswordChange = (e) => {
      this.setState({password: e.target.value});
    };

    return (
      <div>
        <h3>Consult now!</h3>
        <form id="login-form">
          <div className="form-text-field-container">
            <input type="email" name="email" placeholder="Email" onChange={onEmailChange} />
          </div>
          <div className="form-text-field-container">
            <input type="password" name="password" placeholder="Password" onChange={onPasswordChange} />
          </div>
          <button type="submit" className="form-btn" onClick={this.handleSubmit}>Login</button>
        </form>
        <div>
          <Link to="/signup">Sign Up</Link>
        </div>
        <div>
          <Link to="/consultation">Try for free!</Link>
        </div>
      </div>
    );
  }
}

Home.propTypes = propTypes
Home.defaultProps = defaultProps

export default connect()(Home)
