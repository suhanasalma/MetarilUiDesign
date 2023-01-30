import { createBrowserRouter } from "react-router-dom";
import Main from "../../../Layout/Main";
import AllProducts from "../../../Pages/AllProductsUnderCategory/AllProducts/AllProducts";
import Home from "../../../Pages/Home/Home/Home";
import ProductsDetails from "../../../Pages/ProductsDetails/ProductsDetails";
import SubCategory from "../../../Pages/SubCategory/SubCategory";



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
        path: "/subCategory",
        element: <SubCategory />,
      },
      {
        path: "/productsUnderSubCat",
        element: <AllProducts />,
      },
      {
        path: "/productdetails",
        element: <ProductsDetails />,
      },
    ],
  },
]);