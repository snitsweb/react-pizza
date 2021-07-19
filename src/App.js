import {Header, Home, Cart} from './Components/index'
import {Route} from 'react-router-dom'
import React from 'react'
import axios from "axios";

import './scss/app.scss';

function App() {
    const [pizzas, setPizzas] = React.useState([])

    React.useEffect(() => {
        axios.get('/db.json').then((res) => {
            setPizzas(res.data.pizzas)
        })
    }, [])


    return (
        <div className="wrapper">
            <Header/>
            <Route path="/" exact>
                <Home pizzas={pizzas}/>
            </Route>
            <Route path="/cart" exact>
                <Cart/>
            </Route>
        </div>
    );
}

export default App;
