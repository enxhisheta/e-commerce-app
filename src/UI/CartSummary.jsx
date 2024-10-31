import { useCart } from "../context/CartContext";

const CartSummary = () => {
  const { cart, removeFromCart, updateQuantity } = useCart();

  const totalCost = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="cart-summary">
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        cart.map((item) => (
          <div key={item.id} className="cart-item">
            <span>{item.name}</span>
            <input
              type="number"
              min="1"
              value={item.quantity}
              onChange={(e) => updateQuantity(item.id, Number(e.target.value))}
            />
            <span>Price: ${item.price}</span>
            <span>Total: ${item.price * item.quantity}</span>
            <button onClick={() => removeFromCart(item.id)}>Remove</button>
          </div>
        ))
      )}
      {cart.length > 0 && <h3>Total Cost: ${totalCost}</h3>}
    </div>
  );
};

export default CartSummary;
