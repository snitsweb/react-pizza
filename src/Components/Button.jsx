import React from 'react'
import classNames from 'classnames'

const Button = (props) => {
    return (
        <button className={classNames('button', {
            'button--outline': props.outline,
            'button--cart': props.cart
        })}>
            {props.children}
        </button>
    )
}

export default Button