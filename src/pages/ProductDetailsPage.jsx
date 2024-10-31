import { useParams } from "react-router-dom";
import ProductDetails from "../UI/ProductDetails";
import Layout from "../UI/Layout";
import useProducts from "../hooks/useProducts";

const ProductDetailsPage = () => {
  const { productId } = useParams();
  const { products, loading, error } = useProducts();

  if (loading) return <p>Loading product details...</p>;
  if (error) return <p>{error}</p>;

  const product = products.find((item) => item.id === parseInt(productId, 10));

  if (!product) return <p>Product not found</p>;

  return (
    <Layout>
      <div className="product-details-page">
        <ProductDetails product={product} />
      </div>
    </Layout>
  );
};

export default ProductDetailsPage;
