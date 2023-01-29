import { createBrowserRouter } from "react-router-dom";
import Main from "../../../Layout/Main";
import Home from "../../../Pages/SharedPages/Home/Home/Home";

export const router = createBrowserRouter([
   {
      path:'/',
      element:<Main/>,
      children:[
         {
            path:'/',
            element:<Home/>
         }
      ]
   }
])