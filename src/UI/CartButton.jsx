import { useNavigate } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";
//import { useCart } from "../store/CartContext";

const CartButton = () => {
  const navigate = useNavigate();
  //const { cart } = useCart();

  const handleCartClick = () => {
    navigate("/cart");
  };

  // const itemCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <button onClick={handleCartClick}>
      <FiShoppingCart size={24}></FiShoppingCart>
    </button>
  );
};

export default CartButton;
