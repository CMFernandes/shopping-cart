import React  from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { App } from './App.jsx';
import { ShopPage } from './components/ShopPage.jsx'
import { CartPage } from './components/CartPage.jsx';
import { HomePage } from './components/Homepage.jsx';
import ErrorPage from './components/ErrorPage.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {index:true, element: <HomePage/>},
      {path: "shop", element: <ShopPage /> },
      {path: "cart", element: <CartPage/> },
      {path: "home", element: <HomePage/>},
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
