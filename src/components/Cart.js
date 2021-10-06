import "../styles/Cart.css";
import CartItem from "./CartItem";

function Cart(props) {
  const cartItems = props.cartItems;

  return (
    <div className="cart">
      {cartItems.map((cartItem) => {
        return (
          <CartItem
            key={cartItem.id}
            cartItem={cartItem}
            removeItemFromCart={props.removeItemFromCart}
            changeQuantity={props.changeQuantity}
          />
        );
      })}

      {cartItems.length === 0 && "Cart is empty"}

      <p className="total">
        Total: $
        {cartItems
          .map((cartItem) => {
            return cartItem.price * cartItem.quantity;
          })
          .reduce((prev, curr) => prev + curr, 0)}
      </p>
    </div>
  );
}

export default Cart;
