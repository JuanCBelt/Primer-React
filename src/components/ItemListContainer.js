import React from "react";

function ItemListContainer({ greeting }) {
  return (
    <div className="container">
      <h1>{greeting}</h1>
      {/* Agrega aquí el contenido principal de tu tienda */}
      {/* Puedes agregar secciones de productos, banners, etc. */}
    </div>
  );
}

export default ItemListContainer;
