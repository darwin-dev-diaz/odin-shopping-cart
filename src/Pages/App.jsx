import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import Promotion from "../components/promotion/Promotion";
import ShoppingCart from "../components/shopping-cart/ShoppingCart";
import "../styles/reset.css";
import "../styles/App.css";
import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import useData from "../util/useData";
function App() {
  const [showShoppingCart, setShowShoppingCart] = useState(false);
  const [cart, setCart] = useState([]);
  const { data, error, loading } = useData();

  const newCartEntry = (key, quantity) => {
    const newCartOBJ = {
      itemTitle: data[key].itemTitle,
      itemPrice: Number(data[key].itemPrice),
      imageURL: data[key].imageURL,
      key,
      quantity,
    };

    setCart([...cart, newCartOBJ]);
  };

  const increaseItemQuantity = (key, newQuantity) => {
    const item = cart.find((cartItem) => cartItem.key === key);
    const index = (cart.indexOf(item));
    const newCart = cart;
    newCart.splice(index, 1, {...item, quantity: (item.quantity + Number(newQuantity))})
    setCart(newCart);
  };

  useEffect(() => {
    if (showShoppingCart) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, [showShoppingCart]);

  return (
    <div className="app">
      <button
        onClick={() => {
          console.log({ cart });
        }}
      >
        TEST
      </button>
      <Header onCartClick={() => setShowShoppingCart(true)} />
      {showShoppingCart ? (
        <ShoppingCart
          cart={cart}
          setCart={setCart}
          onClose={() => setShowShoppingCart(false)}
        />
      ) : null}
      <div className="body">
        <Outlet context={[cart, setCart, data, error, loading, newCartEntry, increaseItemQuantity]} />
      </div>
      <Promotion />
      <Footer />
    </div>
  );
}

export default App;
