'use strict'

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import './Home.styles.scss'

import { fetchUserProfile } from '../actions/user'

const propTypes = {
  loading: PropTypes.bool,
  firstName: PropTypes.string,
  fetchUserProfile: PropTypes.func.isRequired
}

const defaultProps = {}

class Home extends Component {
  componentDidMount() {
    this.props.fetchUserProfile('first_name')
  }

  render() {
    return (
      <div>
        <h3>Hi {this.props.firstName},</h3>
        <h5>How are you feeling today?</h5>
        <textarea rows='5' cols='50' placeholder='e.g. I have headache' />
      </div>
    )
  }
}

Home.propTypes = propTypes
Home.defaultProps = defaultProps

const mapStateToProps = (state) => {
  return {
    loading: state.user.loading,
    firstName: state.user.profile.first_name
  }
}

const mapDispatchToProps = {
  fetchUserProfile
}

export default connect(mapStateToProps,mapDispatchToProps)(Home)
