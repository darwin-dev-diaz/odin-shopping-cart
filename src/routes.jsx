import App from "./pages/App.jsx";
import Store from "./pages/store/Store.jsx";
import ProductPage from "./pages/product/ProductPage.jsx";

const routes = [
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: null },
      { path: "store", element: <Store /> },
      { path: "product", element: <ProductPage /> },
    ],
  },
];

export default routes;
