import "./store.css";
import Item from "../../components/item/Item";

const Store = () => {
  return (
    <div className="store">
      <div className="store-contents">
        <h1>All Items</h1>
        <div className="items-container">
          {/* items will be their own component */}
          <Item/>
          <Item/>
          <Item/>
          <Item/>
          <Item/>
          <Item/>
          <Item/>
          <Item/> 
          <Item/> 
          <Item/> 
          <Item/> 
        </div>
      </div>
    </div>
  );
};

export default Store;
