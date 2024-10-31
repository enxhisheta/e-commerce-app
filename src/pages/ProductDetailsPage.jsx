import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductDetails from "../UI/ProductDetails";
import Layout from "../UI/Layout";

const ProductDetailsPage = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch("/products.json")
      .then((response) => response.json())
      .then((data) => {
        const selectedProduct = data.find(
          (item) => item.id === parseInt(productId, 10)
        );
        setProduct(selectedProduct);
      })
      .catch((error) => {
        console.error("Error fetching product data:", error);
      });
  }, [productId]);

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
