import CartSummary from "../UI/CartSummary";
import Layout from "../UI/Layout";

const CartSummaryPage = () => {
  return (
    <Layout>
      <div className="cart-summary-page">
        <h1>Cart Summary</h1>
        <CartSummary />
      </div>
    </Layout>
  );
};

export default CartSummaryPage;
