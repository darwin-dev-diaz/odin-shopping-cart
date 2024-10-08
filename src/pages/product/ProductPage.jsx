/* eslint-disable no-unused-vars */
import styles from "./productpage.module.css";
import loadingGif from "../../assets/loading.gif";
import { useOutletContext, useParams } from "react-router-dom";
import { useState } from "react";

const ProductPage = () => {
  const [
    cart,
    setCart,
    data,
    error,
    loading,
    newCartEntry,
    increaseItemQuantity,
  ] = useOutletContext();
  const { item } = useParams();
  const [quantity, setQuantity] = useState(1);
  const itemInCart = cart.some((cartItem) => cartItem.key === item);

  return (
    <div className={styles.product_page}>
      <div className={styles.product_page_left}>
        <div className={styles.product_images_container}>
          <div className={styles.product_image}>
            <img
              src={loading ? loadingGif : data[item].imageURL}
              alt="product image"
            />
          </div>
        </div>
      </div>
      <div className={styles.product_page_right}>
        <h2 className={styles.product_name}>
          {loading ? "Loading" : data[item].itemTitle}
        </h2>
        <div className={styles.price_container}>
          <span className={styles.price}>
            {loading ? "Loading" : "$" + Number(data[item].itemPrice)}
          </span>
          <span className={styles.old_price}>
            <s>
              {loading ? "Loading" : "$" + (Number(data[item].itemPrice) + 60)}
            </s>
          </span>
        </div>
        <hr />
        <div className={styles.product_description_container}>
          <p className={styles.product_description_paragraph}>
            {loading ? "Loading" : data[item].itemDescription}
          </p>
          <p className={styles.product_technical_details}>COLOR: Green</p>
        </div>
        <form noValidate className={styles.product_form} onSubmit={e=>e.preventDefault()}>
          <label
            htmlFor="product-quantity"
            className={styles.product_quantity_label}
          >
            QUANTITY:
            <input
              type="number"
              className={styles.product_quantity_input}
              name="product-quantity"
              id="product-quantity"
              max="20"
              min="1"
              value={quantity}
              onChange={(e) => {
                setQuantity(e.target.value);
              }}
            />
          </label>
          <button
            className={styles.product_cart_btn}
            type="button"
            onClick={() => {
              if (itemInCart) increaseItemQuantity(item, quantity);
              else newCartEntry(item, quantity);
            }}
          >
            Add to Cart
          </button>
        </form>
      </div>
    </div>
  );
};

export default ProductPage;
