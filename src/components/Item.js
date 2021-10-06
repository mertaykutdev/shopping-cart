import "../styles/Item.css";
import { useState } from "react";

function Item(props) {
  const item = props.item;
  const [previewQuantity, setPreviewQuantity] = useState(0);

  function addItemToCart() {
    if (previewQuantity === 0) return;
    props.addItemToCart(item, previewQuantity);
  }

  function decreasePreviewQuantity() {
    if (previewQuantity === 0) return;
    setPreviewQuantity((previewQuantity) => previewQuantity - 1);
  }

  function increasePreviewQuantity() {
    setPreviewQuantity((previewQuantity) => previewQuantity + 1);
  }

  return (
    <div className="item" id={`item${item.id}`}>
      <img
        className="itemImage"
        src={`/shopping-cart/assets/images/item-images/${item.id}.svg`}
        alt=""
      />
      <p className="itemTitle">{item.title}</p>
      <p className="itemPrice">${item.price}</p>
      <p className="itemDescription">{item.description}</p>

      <button
        className="btnDecreasePreviewQuantity"
        onClick={decreasePreviewQuantity}
      >
        -
      </button>
      <p className="previewQuantity"> {previewQuantity} </p>
      <button
        className="btnIncreasePreviewQuantity"
        onClick={increasePreviewQuantity}
      >
        +
      </button>
      <button className="btnAddItemToCart" onClick={addItemToCart}>
        Add to Cart
      </button>
    </div>
  );
}

export default Item;
