import React from 'react'
import PropTypes from 'prop-types'
import { getBEMClasses } from '../shared/utils'

export const Paper = (props) => {
  const { children, elevation, additionalClassName } = props

  return (
    <div className={getBEMClasses('paper', {[`elevation-${elevation}`]: elevation}, additionalClassName)}>
      {children}
    </div>
  )
}

Paper.defaultProps = {
  elevation : 0
}

Paper.propTypes = {
  additionalClassName: PropTypes.string,
  elevation: PropTypes.number
}

export  default Paper