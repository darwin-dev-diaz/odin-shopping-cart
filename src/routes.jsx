import App from "./pages/App.jsx";
import Store from "./pages/store/Store.jsx";
import ProductPage from "./pages/product/ProductPage.jsx";
import Home from "./pages/home/Home.jsx";

const routes = [
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: "store", element: <Store /> },
      { path: "product", element: <ProductPage /> },
    ],
  },
];

export default routes;
