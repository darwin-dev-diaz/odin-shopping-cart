import CloseSVG from "../../assets/CloseSVG";
import styles from "./shoppingCart.module.css";

const ShoppingCart = () => {
  return (
    <div className={styles.shopping_cart_overlay}>
      <div className={styles.shopping_cart_blur}></div>
      <div className={styles.shopping_cart}>
        <div className={styles.shopping_cart_header}>
          <h2 className={styles.shopping_cart_title}>Your cart is empty</h2>
          <CloseSVG className={styles.close_btn} onClick={null} />
        </div>
        <div className={styles.shopping_cart_body}>
          <button className={styles.shopping_cart_shop_btn}>
            See all products
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
