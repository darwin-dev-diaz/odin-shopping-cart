import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import Promotion from "../components/promotion/Promotion";
import ShoppingCart from "../components/shopping-cart/ShoppingCart";
import "../styles/reset.css";
import "../styles/App.css";
import { Outlet } from "react-router-dom";
import { useState } from "react";
function App() {
  const [showShoppingCart, setShowShoppingCart] = useState(true);

  return (
    <div className="app">
      <Header onCartClick={() => setShowShoppingCart(!showShoppingCart)} />
      {showShoppingCart ? <ShoppingCart /> : null}
      <div className="body">
        <Outlet />
      </div>
      <Promotion />
      <Footer />
    </div>
  );
}

export default App;
