import styles from "./cartItem.module.css";
import DeleteSVG from "../../assets/DeleteSVG";
import PropTypes from "prop-types";

const CartItem = ({
  imageURL,
  itemTitle,
  itemPrice,
  itemQuantity,
  setCart,
  cart,
  index,
}) => {

  return (
    <div className={styles.cart_item}>
      <div className={styles.cart_item_img}>
        <img src={imageURL} alt="item image" />
      </div>
      <div className={styles.cart_item_right}>
        <div className={styles.cart_item_top}>
          <div>
            <h3 className={styles.cart_item_title}>{itemTitle}</h3>
            <span className={styles.cart_item_price}>
              ${itemPrice * itemQuantity}
            </span>
          </div>
          <DeleteSVG className={styles.delete_btn} onClick={null} />
        </div>

        <form
          noValidate=""
          onSubmit={(e) => {
            e.preventDefault();
          }}
          className={styles.product_form}
        >
          <label className={styles.product_quantity_label}>
            QUANTITY:
            <input
              type="number"
              className={styles.product_quantity_input}
              min="1"
              value={itemQuantity}
              onChange={(e) => {
                const newCart = [...cart];

                const updatedCartItem = {
                  ...newCart[index],
                  quantity: Number(e.target.value),
                };
                newCart[index] = updatedCartItem;

                setCart(newCart);
              }}
            />
          </label>
        </form>
      </div>
    </div>
  );
};

CartItem.propTypes = {
  imageURL: PropTypes.string.isRequired,
  itemTitle: PropTypes.string.isRequired,
  itemPrice: PropTypes.number.isRequired,
  itemQuantity: PropTypes.number.isRequired,
  setCart: PropTypes.func,
  cart: PropTypes.array,
  index: PropTypes.number,
};

export default CartItem;
