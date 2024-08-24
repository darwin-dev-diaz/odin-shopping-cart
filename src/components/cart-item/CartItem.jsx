import styles from "./cartItem.module.css";
import DeleteSVG from "../../assets/DeleteSVG";

const CartItem = () => {
  return (
    <div className={styles.cart_item}>
      <div className={styles.cart_item_img}></div>
      <div className={styles.cart_item_right}>
        <div className={styles.cart_item_top}>
          <div>
            <h3 className={styles.cart_item_title}>Item title</h3>
            <span className={styles.cart_item_price}>$5.00</span>
          </div>
          <DeleteSVG className={styles.delete_btn} onClick={null} />
        </div>

          <form noValidate="" className={styles.product_form}>
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
                max="14"
                min="1"
              />
            </label>
          </form>

      </div>
    </div>
  );
};

export default CartItem;
