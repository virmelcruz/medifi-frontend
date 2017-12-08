'use strict'

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import './Consultation.styles.scss'

const propTypes = {}

const defaultProps = {}

class Consultation extends Component {
  render() {
    return (
      <div>
        <h5>How are you feeling?</h5>
        <input type="text" />
      </div>
    )
  }
}

Consultation.propTypes = propTypes
Consultation.defaultProps = defaultProps

export default connect()(Consultation)
