import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import Main  from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Menu from '../Pages/Menu/Menu'

export const router = createBrowserRouter([
  {
    path: "/",
    element:<Main></Main>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'/menu',
        element:<Menu></Menu>
      }
    ]
  },
]);
