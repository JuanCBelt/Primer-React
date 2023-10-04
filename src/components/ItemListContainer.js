import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Catalog from './data/Catalog'; 

const ItemListContainer = ({ greeting }) => {
  const { categoryId } = useParams();
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    if (categoryId) {
      const productsInCategory = Catalog.filter(
        (product) => product.category === categoryId
      );
      setFilteredProducts(productsInCategory);
    } else {
      setFilteredProducts(Catalog);
    }
  }, [categoryId]);

  return (
    <div className="container">
      <h1>{greeting}</h1>
      <ul>
        {filteredProducts.map((product) => (
          <li key={product.id}>{product.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default ItemListContainer;
