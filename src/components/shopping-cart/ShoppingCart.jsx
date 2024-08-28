import CloseSVG from "../../assets/CloseSVG";
import styles from "./shoppingCart.module.css";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import CartItem from "../cart-item/CartItem";

const ShoppingCart = ({ onClose, cart, setCart }) => {
  const cashTotal = cart.reduce((accumulator, cartItem) => {
    return accumulator + cartItem.quantity * cartItem.itemPrice;
  }, 0);

  return (
    <div className={styles.shopping_cart_overlay}>
      <div className={styles.shopping_cart_blur} onClick={onClose}></div>
      <div className={styles.shopping_cart}>
        <div className={styles.shopping_cart_header}>
          <h2 className={styles.shopping_cart_title}>
            {Object.keys(cart).length === 0 ? "Your cart is empty" : "la"}
          </h2>
          <CloseSVG className={styles.close_btn} onClick={onClose} />
        </div>
        <div className={styles.shopping_cart_body}>
          {Object.keys(cart).length === 0 ? (
            <Link to="/store" className={styles.shop_button} onClick={onClose}>
              See all products
            </Link>
          ) : (
            cart.map((cartItem, key) => {
              return (
                <CartItem
                  imageURL={cartItem.imageURL}
                  itemTitle={cartItem.itemTitle}
                  itemPrice={cartItem.itemPrice}
                  itemQuantity={cartItem.quantity}
                  setCart={setCart}
                  cart={cart}
                  index={key}
                  key={key}
                />
              );
            })
          )}
        </div>

        {Object.keys(cart).length === 0 ? null : (
          <Link
            to="/store"
            className={styles.checkout_button}
            onClick={onClose}
          >
            {`Checkout ($${cashTotal})`}
          </Link>
        )}
      </div>
    </div>
  );
};

ShoppingCart.propTypes = {
  onClose: PropTypes.func,
  cart: PropTypes.array,
  setCart: PropTypes.func,
};

export default ShoppingCart;
