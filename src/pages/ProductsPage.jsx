import useProducts from "../hooks/useProducts";
import Layout from "../UI/Layout";
import ProductCard from "../UI/ProductCard";

const ProductsPage = () => {
  const { products, loading, error } = useProducts();

  return (
    <Layout>
      <div className="product-grid">
        {loading && <p>Loading products...</p>}
        {error && <p>{error}</p>}
        {products &&
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
    </Layout>
  );
};

export default ProductsPage;
