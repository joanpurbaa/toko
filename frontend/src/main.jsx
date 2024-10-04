import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home.jsx";
import AddProduct from "./pages/AddProduct.jsx";
import axios from "axios";

axios.defaults.withCredentials = true;

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "/add",
    element: <AddProduct/>,
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
