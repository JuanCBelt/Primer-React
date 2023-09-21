import React from "react";
import catalog from "../data/catalog";

const ProductList = () => {
  return (
    <div>
      <h2>Productos de Ropa</h2>
      <ul>
        {catalog.map((product) => (
          <li key={product.id}>
            <img src={product.imageUrl} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p>Precio: ${product.price}</p>
            <button>Agregar al carrito</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
