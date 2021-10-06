import "../styles/CartItem.css";

function CartItem(props) {
  const cartItem = props.cartItem;

  function removeItemFromCart() {
    props.removeItemFromCart(cartItem);
  }

  function decreaseQuantity() {
    props.changeQuantity(cartItem, -1);
  }

  function increaseQuantity() {
    props.changeQuantity(cartItem, 1);
  }

  return (
    <div className="cartItem" id={`cartItem${cartItem.id}`}>
      <img
        className="cartItemImage"
        src={`/shopping-cart/assets/images/item-images/${cartItem.id}.svg`}
        alt=""
      />
      <p className="cartItemTitle">{cartItem.title}</p>

      <div className="cartItemPrice">
        <p style={{ margin: "0" }}>
          ${cartItem.price} x {cartItem.quantity} =
        </p>
        <p style={{ margin: "0" }}>${cartItem.price * cartItem.quantity}</p>
      </div>

      <div className="containerQuantity">
        <button className="btnDecreaseQuantity" onClick={decreaseQuantity}>
          -
        </button>
        <p className="quantity"> {cartItem.quantity} </p>
        <button className="btnIncreaseQuantity" onClick={increaseQuantity}>
          +
        </button>
      </div>
      <button
        className="btnRemoveCartItemFromCart"
        onClick={removeItemFromCart}
      >
        X
      </button>
    </div>
  );
}

export default CartItem;
