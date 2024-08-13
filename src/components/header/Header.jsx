import "./header.css";
import LogoSVG from "../../assets/LogoSVG";
import ShoppingCartSVG from "../../assets/ShoppingCartSVG";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <LogoSVG className="header-logo" />
      <div className="header-btn-group">
        <Link to="/" className="header-btn">
          Home
        </Link>
        <Link to="store" className="header-btn">
          Store
        </Link>

        <ShoppingCartSVG />
      </div>
    </div>
  );
};

export default Header;
