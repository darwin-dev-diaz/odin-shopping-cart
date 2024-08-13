import App from "./pages/App.jsx";
import Store from "./pages/store/Store.jsx";

const routes = [
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: null },
      { path: "store", element: <Store /> },
      { path: "product", element: null },
    ],
  },
];

export default routes;
