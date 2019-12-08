import React from 'react'
// eslint-disable-next-line
import PropTypes from 'prop-types'

const Button = props => {
    return (
        <div className="component-button">
            <button>{props.name}</button>
        </div>
    )
}

Button.propTypes = {}

export default Button
