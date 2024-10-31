import { useCart } from "../context/CartContext";

const CartSummary = () => {
  const { cart } = useCart();

  const totalCost = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="cart-summary">
      {cart.map((item) => (
        <div key={item.id} className="cart-item">
          <span>{item.name}</span>
          <span>Quantity: {item.quantity}</span>
          <span>Price: ${item.price}</span>
          <span>Total: ${item.price * item.quantity}</span>
        </div>
      ))}
      <h3>Total Cost: ${totalCost}</h3>
    </div>
  );
};

export default CartSummary;
