import "./App.css";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./components/Home";
import Cart from "./components/Cart";
import { items } from "./items.js";
import { useState } from "react";

function App() {
  const [cartItems, setCartItems] = useState([]);

  function addItemToCart(newItem, newQuantity) {
    const alreadyInCart = cartItems.find((item) => item.id === newItem.id);

    if (alreadyInCart) {
      const newCartItems = cartItems.map((item) =>
        item.id === newItem.id
          ? { ...item, quantity: item.quantity + newQuantity }
          : item
      );

      setCartItems([...newCartItems]);
    } else {
      newItem.quantity = newQuantity;
      setCartItems(cartItems.concat(newItem));
    }
  }

  function removeItemFromCart(newItem) {
    setCartItems(cartItems.filter((item) => item !== newItem));
  }

  function changeQuantity(newItem, quantity) {
    const newCartItems = cartItems.map((item) => {
      if (item.id === newItem.id) {
        let newQuantity = item.quantity + quantity;
        newQuantity = newQuantity < 1 ? 1 : newQuantity;
        return { ...item, quantity: newQuantity };
      } else {
        return item;
      }
    });
    setCartItems([...newCartItems]);
  }

  return (
    <div className="App">
      <Router>
        <Nav cartItems={cartItems} removeItemFromCart={removeItemFromCart}/>
        <Switch>
          <div className="maincontent">
            <Route exact path="/">
              <Home
                items={items}
                addItemToCart={addItemToCart}
                removeItemFromCart={removeItemFromCart}
              />
            </Route>
            <Route exact path="/cart">
              <Cart
                cartItems={cartItems}
                removeItemFromCart={removeItemFromCart}
                changeQuantity={changeQuantity}
              />
            </Route>
          </div>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
