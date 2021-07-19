import React from 'react'
import {Categories, SortPopup} from "./index";
import PizzaBlock from "./PizzaBlock";

const Home = ({pizzas}) => {
    return (
        <div className="content">
            <div className="container">
                <div className="content__top">
                    <Categories items={['Wszystkie', 'Mięsna', 'Wegetariańska', 'Z grilla', 'Pikantna']}/>
                    <SortPopup items={['Popularność', 'Cena', 'Alfabet']}/>
                </div>
                <h2 className="content__title">Wszystkie pizzy</h2>
                <div className="content__items">
                    {pizzas && pizzas.map((item, index) =>
                        <PizzaBlock key={`${item.name}_${item.id}`}
                                    {...item}
                        />)}
                </div>
            </div>
        </div>
    )
}

export default Home