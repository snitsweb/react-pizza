import React from 'react'
import classNames from 'classnames'

const Button = (props) => {
    return (
        <button onClick={props.onClick} className={classNames('button', {
            'button--outline': props.outline,
            'button--cart': props.cart,
            'button--add' : props.btnAdd,
            'button--circle': props.circle,
            'pay-btn' : props.paybtn
        })}>
            {props.children}
        </button>
    )
}

export default Button