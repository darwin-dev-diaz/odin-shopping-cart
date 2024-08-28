import styles from "./header.module.css";
import LogoSVG from "../../assets/LogoSVG";
import ShoppingCartSVG from "../../assets/ShoppingCartSVG";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const Header = ({ onCartClick, totalItems }) => {
  return (
    <div className={styles.header}>
      <LogoSVG className={styles.headerLogo} />
      <div className={styles.headerBtnGroup}>
        <Link to="/" className={styles.headerBtn}>
          Home
        </Link>
        <Link to="store" className={styles.headerBtn}>
          Store
        </Link>

        <div className={styles.shoppingCartContainer} onClick={onCartClick}>
          <ShoppingCartSVG className={styles.shoppingCartIcon} />
          {totalItems > 0 ? (
            <div className={styles.totalItems}>
              {totalItems < 100 ? totalItems : "99+"}
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

Header.propTypes = {
  onCartClick: PropTypes.func,
  totalItems: PropTypes.number,
};

export default Header;
