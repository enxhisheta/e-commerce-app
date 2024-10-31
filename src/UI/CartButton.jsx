import { Link } from "react-router-dom";

const CartButton = () => {
  return (
    <>
      <Link to="/cart">
        <button>Cart</button>
      </Link>
    </>
  );
};
export default CartButton;
