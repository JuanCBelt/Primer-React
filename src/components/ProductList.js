import React from "react";
import Catalog from './data/Catalog';

const ProductList = () => {
  return (
    <div>
      <h2>Productos de Ropa</h2>
      <ul>
        {Catalog.map((product) => (
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
