import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import catalog from "../data/catalog";

const ItemListContainer = () => {
  const { categoryId } = useParams();
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    if (categoryId) {
      const productsInCategory = catalog.filter(
        (product) => product.category === categoryId
      );
      setFilteredProducts(productsInCategory);
    } else {
      setFilteredProducts(catalog);
    }
  }, [categoryId]);

  return (
    <div>
      <h2>Productos de Ropa</h2>
      <ul>
        {filteredProducts.map((product) => (
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

export default ItemListContainer;

