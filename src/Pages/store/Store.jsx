import styles  from"./store.module.css";
import Item from "../../components/item/Item";
import { useOutletContext, Link } from "react-router-dom";

const Store = () => {
  const [cart, setCart, data, error, loading] = useOutletContext();

  return (
    <div className={styles.store}>
      <div className={styles.store_contents}>
        <h1>All Items</h1>
        <div className={styles.items_container}>
          {loading
            ? Array.from(new Array(10).keys()).map((i) => <Item key={i} />)
            : data.map((item, i) => (
                <Link className={styles.item_link} key={i} to={`/product/${i}`}>
                  <Item
                    imageURL={item.imageURL}
                    itemPrice={10}
                    itemName={item.itemTitle}
                    key={i}
                  />
                </Link>
              ))}
        </div>
      </div>
    </div>
  );
};

export default Store;
