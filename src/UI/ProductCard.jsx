/* eslint-disable react/prop-types */
import { useState } from "react";
//import { useCart } from "../context/CartContext";

const ProductCard = ({ product }) => {
  //const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);

  //   const handleAddToCart = () => {
  //     addToCart(product, quantity);
  //   };

  return (
    <div className="product-card">
      <img src={product.imageSrc} alt={product.name} />
      <h3>{product.name}</h3>
      <p>${product.price}</p>
      <input
        type="number"
        min="1"
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
      />
      <button>Add to Cart</button>
    </div>
  );
};

export default ProductCard;
