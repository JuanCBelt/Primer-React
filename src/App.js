import React from "react";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greeting="Bienvenido a Styles" />
      <div className="container">
        <h1>Bienvenido a Styles</h1>
       
      </div>
    </div>
  );
}

export default App;
