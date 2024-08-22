import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import Promotion from "../components/promotion/Promotion";
import "../styles/reset.css";
import "../styles/App.css";
import { Outlet } from "react-router-dom";

function App() {

  
  return (
    <div className="app">
      <Header />
      <div className="body">
        <Outlet />
      </div>
      <Promotion />
      <Footer />
    </div>
  );
}

export default App;
