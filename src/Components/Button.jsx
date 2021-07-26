import React from 'react'
import classNames from 'classnames'

const Button = (props) => {
    return (
        <button onClick={props.onClickAdd} className={classNames('button', {
            'button--outline': props.outline,
            'button--cart': props.cart,
            'button--add' : props.btnAdd
        })}>
            {props.children}
        </button>
    )
}

export default Button