import { useEffect, useState } from "react";

const useProducts = () => {
  const [products, setProducts] = useState(null); 
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("/products.json");
        const data = await response.json();

        if (!Array.isArray(data) || data.length === 0) {
          throw new Error("No products found in the file.");
        }

        setProducts(data);
      } catch (error) {
        console.error("Error loading products:", error.message);
        setError("Failed to load products. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return { products, loading, error };
};

export default useProducts;
