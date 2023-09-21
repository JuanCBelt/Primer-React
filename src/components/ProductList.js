import React from "react";

const ProductList = () => {
  const products = [
    {
      id: 1,
      name: "Camiseta de algodón",
      description: "Camiseta cómoda de algodón",
      price: 3000,
      imageUrl: "https://tienda.guantexindustrial.com.ar/712-large_default/remera-algodon-jersey-blanco-talle-l.jpg",
    },
    {
      id: 2,
      name: "Pantalones vaqueros",
      description: "https://www.shopmultimarca.es/uploads/photo/image/29486/gallery_A08235_qQaSxYUj.JPG",
      price: 5000,
      imageUrl: "url-de-la-imagen-2.jpg",
    },
    {
      id: 3,
      name: "Zapatos deportivos",
      description: "https://http2.mlstatic.com/D_NQ_NP_896635-MLA70396278976_072023-O.webp",
      price: 10000,
      imageUrl: "url-de-la-imagen-3.jpg",
    },
  ];

  return (
    <div>
      <h2>Productos de Ropa</h2>
      <ul>
        {products.map((product) => (
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
