import { useDispatch } from "react-redux";
import {
  removeFromCart,
  incrementQuantity,
  decrementQuantity,
} from "../redux/cartSlice";


function CartItem({ item }) {
  const dispatch = useDispatch();

  return (
    <div className="cart-item">
      <img src={item.thumbnail} alt={item.title} />
      <p>{item.title}</p>

      <div className="quantity-controls">
        <button onClick={() => dispatch(decrementQuantity(item.id))}>-</button>
        <span>{item.quantity}</span>
        <button onClick={() => dispatch(incrementQuantity(item.id))}>+</button>
      </div>

      <button onClick={() => dispatch(removeFromCart(item.id))}>Remove</button>
    </div>
  );
}

export default CartItem;