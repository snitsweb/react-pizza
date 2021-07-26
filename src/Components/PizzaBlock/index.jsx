import React from "react";
import PropTypes from 'prop-types'
import classNames from 'class-names'
import Button from "../Button";


const PizzaBlock = ({name, id, price, category, rating, imageUrl, types, sizes, onClickAddPizza, addedCount}) => {

    const batterTypes = ['cienkie', 'tradycyjne']
    const pizzaSizes = [26, 30, 40]
    const [activeSize, setActiveSize] = React.useState(pizzaSizes.findIndex((el) => el === sizes[0]))
    const [activeType, setActiveType] = React.useState(types[0])

    const onChangeSize = (index, event) => {
        !event.target.classList.contains('disabled') && setActiveSize(index)
    }

    const onChangeType = (index, event) => {
        !event.target.classList.contains('disabled') && setActiveType(index)
    }

    const onAddPizza = () => {
        const obj = {
            name,
            id,
            price,
            imageUrl,
            type : batterTypes[activeType],
            size : pizzaSizes[activeSize]
        }
        onClickAddPizza(obj)
    }


    return (
        <div className="pizza-block">
            <img
                className="pizza-block__image"
                src={imageUrl}
                alt="Pizza"
            />
            <h4 className="pizza-block__title">{name}</h4>
            <div className="pizza-block__selector">
                <ul>
                    {batterTypes.map((type, index) =>
                        <li className={classNames({
                            'active': index === activeType,
                            'disabled': !types.includes(index)
                        })}
                            key={`${type}`}
                            onClick={(event) => onChangeType(index, event)}
                        >{type}</li>)}
                </ul>
                <ul>
                    {pizzaSizes.map((size, index) => <li key={`${name}_${size}`}
                                                    onClick={(event) => onChangeSize(index, event)}
                                                    className={classNames({
                                                        'disabled' : !sizes.includes(size),
                                                        'active' : index === activeSize
                                                    })}>
                        {size} cm.
                    </li>)}
                </ul>
            </div>
            <div className="pizza-block__bottom">
                <div className="pizza-block__price">od {price} zł.</div>
                <Button onClickAdd={onAddPizza} btnAdd outline >
                    <svg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                            fill="white"
                        />
                    </svg>
                    <span>Dodaj</span>
                    {addedCount !== 0 && <i>{addedCount}</i>}
                </Button>
            </div>
        </div>

    )
}

PizzaBlock.propTypes = {
    name : PropTypes.string,
    id : PropTypes.number,
    price : PropTypes.number,
    category : PropTypes.number,
    rating : PropTypes.number,
    imageUrl : PropTypes.string,
    types : PropTypes.arrayOf(PropTypes.number),
    sizes : PropTypes.arrayOf(PropTypes.number),
    onClickAddPizza: PropTypes.func,
    addedCount : PropTypes.number
}

PizzaBlock.defaultProps = {
    types : [],
    sizes : [],
    addedCount :  0
}

export default PizzaBlock