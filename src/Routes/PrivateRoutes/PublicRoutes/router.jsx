import { createBrowserRouter } from "react-router-dom";
import Main from "../../../Layout/Main";
import AllProducts from "../../../Pages/AllProductsUnderCategory/AllProducts/AllProducts";
import Home from "../../../Pages/Home/Home/Home";
import MyCarts from "../../../Pages/MyCart/MyCart/MyCarts";
import ProductsDetails from "../../../Pages/ProductsDetails/ProductsDetails/ProductsDetails";




export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      
      {
        path: "/productsUnderSubCat/:id",
        element: <AllProducts />,
      },
      {
        path: "/productdetails/:id",
        element: <ProductsDetails />,
      },
      {
        path: "/carts",
        element: <MyCarts />,
      },
    ],
  },
]);