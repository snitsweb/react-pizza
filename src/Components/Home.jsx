import React from 'react'
import {Categories, SortPopup} from "./index";
import PizzaBlock from "./PizzaBlock";
import {useSelector} from "react-redux";

const Home = ({pizzas}) => {

    const {items, filters} = useSelector(({pizzas, filters}) => {
        return {
            items : pizzas.items,
            filters: filters
        }
    })

    return (
        <div className="content">
            <div className="container">
                <div className="content__top">
                    <Categories items={['Wszystkie', 'Mięsna', 'Wegetariańska', 'Z grilla', 'Pikantna']}/>
                    <SortPopup items={[
                        {name: 'Popularność', type: 'popular'},
                        {name: 'Cena', type: 'price'},
                        {name: 'Alfabet', type: 'alfabet'}]}/>
                </div>
                <h2 className="content__title">Wszystkie pizzy</h2>
                <div className="content__items">
                    {items && items.map((item, index) =>
                        <PizzaBlock key={`${item.name}_${item.id}`}
                                    {...item}
                        />)}
                </div>
            </div>
        </div>
    )
}

export default Home