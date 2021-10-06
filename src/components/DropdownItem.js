import "../styles/DropdownItem.css";

function DropdownItem(props) {
  const item = props.item;

  function removeItemFromCart() {
    props.removeItemFromCart(item);
  }

  return (
    <div className="dropdownItem" id={`item${item.id}`}>
      <img
        className="dropdownItemImage"
        src={`/shopping-cart/assets/images/item-images/${item.id}.svg`}
        alt=""
      />
      <p className="dropdownItemTitle">{item.title}</p>
      <p className="dropdownItemPrice">${item.price}</p>
      <p className="dropdownItemQuantity">x{item.quantity}</p>
      <button className="btnRemoveItemFromCart" onClick={removeItemFromCart}>
        X
      </button>
    </div>
  );
}

export default DropdownItem;
