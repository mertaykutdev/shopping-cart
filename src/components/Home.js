import "../styles/Home.css";
import Item from "./Item";

function Home(props) {
  const items = props.items;

  return (
    <div className="home">
      {items.map((item) => {
        return (
          <Item
            item={item}
            addItemToCart={props.addItemToCart}
            removeItemFromCart={props.removeItemFromCart}
          />
        );
      })}
    </div>
  );
}

export default Home;
