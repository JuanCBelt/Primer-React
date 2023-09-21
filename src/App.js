import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import Catalog from './components/Catalog';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <div className="container">
          <Switch>
            <Route path="/" exact>
              <h1>Bienvenido a Styles</h1>
              <ItemListContainer greeting="Bienvenido a Styles" />
            </Route>
            <Route path="/item/:id">
              <ProductDetail />
            </Route>
            <Route path="/category/:categoryId">
              <Catalog />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
