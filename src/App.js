
import React from "react";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer"; // Importa el nuevo componente
import "./App.css";

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="container">
        <h1>Bienvenido a Styles</h1>
      </div>
      <ItemListContainer />
    </div>
  );
}

export default App;
