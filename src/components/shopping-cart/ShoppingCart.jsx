import CloseSVG from "../../assets/CloseSVG";
import styles from "./shoppingCart.module.css";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const ShoppingCart = ({ onClose }) => {
  return (
    <div className={styles.shopping_cart_overlay}>
      <div className={styles.shopping_cart_blur}></div>
      <div className={styles.shopping_cart}>
        <div className={styles.shopping_cart_header}>
          <h2 className={styles.shopping_cart_title}>Your cart is empty</h2>
          <CloseSVG className={styles.close_btn} onClick={onClose} />
        </div>
        <div className={styles.shopping_cart_body}>
          <Link to="/store" className={styles.shop_button}>
            See all products
          </Link>
        </div>
      </div>
    </div>
  );
};

ShoppingCart.propTypes = {
  onClick: PropTypes.func,
};

export default ShoppingCart;
