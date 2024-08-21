import "./store.css";
import Item from "../../components/item/Item";
import useData from "../../util/useData";

const Store = () => {
  const { data, error, loading } = useData();

  return (
    <div className="store">
      <div className="store-contents">
        <h1>All Items</h1>
        <div className="items-container">
          {loading
            ? Array.from(new Array(10).keys()).map((i) => <Item key={i} />)
            : data.map((item, i) => (
                <Item
                  imageURL={item.imageURL}
                  itemPrice={0.0}
                  itemName={item.itemTitle}
                  key={i}
                />
              ))}
        </div>
      </div>
    </div>
  );
};

export default Store;
