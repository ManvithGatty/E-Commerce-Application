import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";


// Product page
function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [id]);

  if (!product) {
    return (
      <div className="product-detail">
        <p>Loading product details...</p>
      </div>
    );
  }

  return (
    <div className="product-detail">
      <div className="product-detail-image">
        <img src={product.thumbnail} alt={product.title} />
      </div>
      <div className="product-detail-info">
        <h2>{product.title}</h2>
        <p className="product-brand">{product.brand}</p>
        <p className="product-price">${product.price}</p>
        <p className="product-rating">⭐ {product.rating}</p>
        <p className="product-desc">{product.description}</p>
        <p className="product-category">Category: {product.category}</p>
        <button onClick={() => dispatch(addToCart(product))}>
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default ProductDetail;
