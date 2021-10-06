import "../styles/Nav.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import DropdownItem from "./DropdownItem";
import { useState, useEffect } from "react";

function Nav(props) {
  const [cartItems, setCartItems] = useState(props.cartItems);

  useEffect(() => {
    setCartItems(props.cartItems);
  }, [props.cartItems]);

  function onMouseEnter() {
    let div = document.getElementById("dropdown");
    div.style.display = "block";
  }

  function onMouseLeave() {
    let div = document.getElementById("dropdown");
    div.style.display = "none";
  }

  return (
    <nav>
      <Link to="/shopping-cart">Home</Link>

      <div
        id="dropdownparent"
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        <Link to="/cart">
          <img
            src={"/shopping-cart/assets/images/shopping-cart.svg"}
            alt="Shopping Cart"
            style={{ height: "50px", margin: "2px" }}
          />
        </Link>
        <div id="counter">{cartItems.length}</div>

        <div id="dropdown" style={{ display: "none" }}>
          {cartItems.map((cartItem) => {
            return (
              <DropdownItem
                key={cartItem.id}
                item={cartItem}
                removeItemFromCart={props.removeItemFromCart}
              />
            );
          })}

          {/* {cartItems.length > 0 && (
            <Link to="/cart">
              <button type="button" className="btncart">
                Go to cart
              </button>
            </Link>
          )} */}
        </div>
      </div>
    </nav>
  );
}

export default Nav;
