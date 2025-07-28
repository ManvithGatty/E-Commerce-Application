// Custom Hook to fetch product API
import { useEffect, useState } from 'react';

function useFetchProducts() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then(res => res.json())
      .then(data => setProducts(data.products))
      .catch(err => setError("Failed to fetch products"));
  }, []);

  return { products, error };
}

export default useFetchProducts;