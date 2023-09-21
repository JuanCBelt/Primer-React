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
    <div className="container">
      <h1>{greeting}</h1>
    </div>
  );
};

export default ItemListContainer;

