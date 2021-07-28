import React from 'react'
import {Categories, SortPopup} from "../Components";
import {PizzaLoadingBlock, PizzaBlock} from "../Components";
import {useSelector, useDispatch} from "react-redux";
import {setCategory, setSortBy} from "../redux/actions/filters";
import {fetchPizzas, setLoaded} from "../redux/actions/pizzas";
import {addPizzaToCart} from "../redux/actions/cart";

const categoriesArr = ['Wszystkie', 'Mięsna', 'Wegetariańska', 'Z grilla', 'Pikantna']
const sortPopupItems = [
    {name: 'Popularność', type: 'popular'},
    {name: 'Cena', type: 'price'},
    {name: 'Alfabet', type: 'alfabet'}
]

const Home = () => {

    const dispatch = useDispatch()

    const items = useSelector(({pizzas}) => pizzas.items)
    const cartItems = useSelector(({cart}) => cart.items)
    const isLoaded = useSelector(({pizzas}) => pizzas.isLoaded)
    const {category, sortBy} = useSelector(({filters}) => filters)

    React.useEffect(() => {
            dispatch(setLoaded(false))
            dispatch(fetchPizzas(category, sortBy))
        }, // eslint-disable-next-line
        [category, sortBy])

    const onSelectCategory = React.useCallback((index) => {
            dispatch(setCategory(index))
        }, // eslint-disable-next-line
        [])

    const onSetSortBy = React.useCallback((type) => {
            dispatch(setSortBy(type))
        }, // eslint-disable-next-line
        [])

    const handleAddPizzaCart = obj => {
        dispatch(addPizzaToCart(obj))
    }

    return (
        <div className="content">
            <div className="container">
                <div className="content__top">
                    <Categories activeCategory={category} onClickItem={onSelectCategory} items={categoriesArr}/>
                    <SortPopup onSetSortBy={onSetSortBy} activeSortBy={sortBy} items={sortPopupItems}/>
                </div>
                <h2 className="content__title">Wszystkie pizzy</h2>
                <div className="content__items">
                    {isLoaded
                        ? items && items.map((item, index) =>
                        <PizzaBlock key={`${item.name}_${item.id}`}
                                    {...item}
                                    onClickAddPizza={handleAddPizzaCart}
                                    addedCount={cartItems[item.id] && cartItems[item.id].items.length}
                        />)
                        : [...Array(8)].map((item, index) => <PizzaLoadingBlock key={index}/>)
                    }
                </div>
            </div>
        </div>
    )
}

export default Home