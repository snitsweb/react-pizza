import React from 'react'
import PropTypes from 'prop-types'

const Categories = React.memo(({activeCategory, items, onClickItem}) => {

    return (
        <div className="categories">
            <ul>
                {items && items.map((item, index) => {
                    return <li className={activeCategory === index ? 'active' : ''}
                               onClick={() => onClickItem(index)}
                               key={`${item}_${index}`
                               }>{item}</li>
                })}
            </ul>
        </div>
    )
})

Categories.propTypes = {
    activeCategory : PropTypes.number.isRequired,
    items : PropTypes.arrayOf(PropTypes.string).isRequired,
    onClickItem : PropTypes.func,
}

Categories.defaultProps = {
    activeCategory : 0,
    items : []
}

export default Categories