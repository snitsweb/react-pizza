import {Header, Home, Cart} from './Components/index'
import {Route} from 'react-router-dom'

import './scss/app.scss';

const onClickCategory = (index) => {
    console.log(index)
}

function App() {
  return (
      <div className="wrapper">
          <Header/>
          <Route path="/" exact>
              <Home onClickCategory={onClickCategory}/>
          </Route>
          <Route path="/cart" exact>
              <Cart/>
          </Route>
      </div>
  );
}

export default App;
