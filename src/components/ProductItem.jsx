import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/cartSlice';
import { Link } from 'react-router-dom';


// Individual Product for product list
function ProductItem({ data }) {
  const dispatch = useDispatch();

  return (
    <div className="product-item">
      <Link to={`/product/${data.id}`}>
        <img src={data.thumbnail} alt={data.title} className="product-thumb" />
      </Link>

      <div className="product-details">
        <h3 className="product-title">
          <Link to={`/product/${data.id}`}>{data.title}</Link>
        </h3>
        <p className="product-price">${data.price}</p>
        <p className="product-meta">⭐ {data.rating} | {data.category}</p>
      </div>

      <button onClick={() => dispatch(addToCart(data))}>Add to Cart</button>
    </div>
  );
}

export default ProductItem;