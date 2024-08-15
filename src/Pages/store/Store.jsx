import "./store.css";
import Item from "../../components/item/Item";
import { useState, useEffect } from "react";

const Store = () => {
  const [itemInfo, setItemInfo] = useState([]);

  // useEffect(() => {
  //   async function getData() {
  //     const request = await fetch(
  //       "https://mock.shop/api?query={collection(id:%20%22gid://shopify/Collection/429512622102%22){id%20handle%20title%20description%20image%20{id%20url}%20products(first:%2020){edges%20{node%20{id%20title%20featuredImage%20{id%20url}}}}}}"
  //     );
  //     const json = await request.json();
  //     console.log(json.data.collection.products.edges[0]);
  //     json.data.collection.products.edges.forEach((node) => {
  //       const newItemObj = {
  //         itemImageURL: node.node.featuredImage.url,
  //         itemTitle: node.node.title,
  //       };
  //       setItemInfo(() => [...itemInfo, newItemObj]);
  //     });
  //   }
  //   getData();
  // }, []);

  // console.log(itemInfo);

  return (
    <div className="store">
      <div className="store-contents">
        <h1>All Items</h1>
        <div className="items-container">
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
        </div>
      </div>
    </div>
  );
};

export default Store;
