import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

// Navbar
function Header() {
  const cartCount = useSelector((state) => state.cart.cartItems.length);
  return (
    <nav className="header">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/cart"><img className="cart-img" src="/grocery-store.png"></img> ({cartCount})</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Header;
