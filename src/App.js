import {Header, Home, Cart} from './Components/index'
import {Route} from 'react-router-dom'
import React from 'react'

import './scss/app.scss';


function App() {

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
