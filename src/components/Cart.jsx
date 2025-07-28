import { useSelector } from "react-redux";
import CartItem from "./CartItem";

// Cart Page
function Cart() {
  const cartItems = useSelector((state) => state.cart.cartItems);
  return (
    <div>
      <h2>Your Cart</h2>
      {cartItems.length === 0 && (
        <p style={{ margin: "20px" }}>No items in cart.</p>
      )}
      {cartItems.map((item) => (
        <CartItem key={item.id} item={item} />
      ))}
    </div>
  );
}

export default Cart;