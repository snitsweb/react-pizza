import React from 'react'

const Categories = ({items, onClickCategory}) => {
    const [activeItem, setActiveItem] = React.useState(0)

    const onSelectCategory = (index) => {
        onClickCategory(index)
        setActiveItem(index)
    }

    return (
        <div className="categories">
            <ul>
                {items && items.map((item, index) => {
                    return <li className={activeItem === index ? 'active' : ''}
                               onClick={() => onSelectCategory(index)}
                               key={`${item}_${index}`
                               }>{item}</li>
                })}
            </ul>
        </div>
    )
}

export default Categories