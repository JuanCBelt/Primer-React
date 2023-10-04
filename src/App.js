import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import Catalog from './components/data/Catalog';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <div className="container">
          <Routes>
            <Route path="/" element={<h1>Bienvenido a Styles</h1>} />
            <Route path="/item/:id" element={<ProductDetail />} />
            <Route path="/category/:categoryId" element={<Catalog />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
