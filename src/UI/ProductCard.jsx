/* eslint-disable react/prop-types */
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const navigate = useNavigate();

  const handleViewDetails = () => {
    navigate(`/products/${product.id}`);
  };

  const handleAddToCart = () => {
    addToCart(product, quantity);
  };

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

      <button onClick={handleAddToCart}>Add to Cart</button>
      <button onClick={handleViewDetails}>View Details</button>
    </div>
  );
};

export default ProductCard;
