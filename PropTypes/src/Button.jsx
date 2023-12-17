import React from 'react'
import PropTypes from 'prop-types'

export const Button = (props) => {
  return (
    <button style={{width: `${props.width}px`}}>{props.children}</button>
  )
}

Button.propTypes ={
    width: PropTypes.number.isRequired,
};
export default Button