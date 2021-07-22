import {Header, Home, Cart} from './Components/index'
import {Route} from 'react-router-dom'
import React from 'react'
import axios from "axios";
import { useDispatch } from 'react-redux'
import {setPizzas as setPizzasAction} from "./redux/actions/pizzas";

import './scss/app.scss';

function App() {

    const dispatch = useDispatch()

    React.useEffect(() => {
        axios.get('/db.json').then(({data}) => {
            dispatch(setPizzasAction(data.pizzas))
        })
    }, [])

    return (
        <div className="wrapper">
            <Header/>
            <Route path="/" exact>
                <Home/>
            </Route>
            <Route path="/cart" exact>
                <Cart/>
            </Route>
        </div>
    );
}

export default App

// state => {
//     return {
//         items: state.pizzas.items
//     }
// }