import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import Main  from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Menu from '../Pages/Menu/Menu'
import Order from '../Pages/Order/Order/Order'
import Login from '../Pages/Login/Login'
import SignUP from '../Pages/SignuP/SignUP'
import PrivateRoute from '../../src/Router/PrivateRoute'
import Dashboard from '../Layout/Dashboard'
import Cart  from '../Pages/Dashboard/Cart/Cart'
import Alluser from '../Pages/Dashboard/Cart/Allusers/Alluser'
import Additem from '../../src/Pages/Dashboard/Additem/Additem'
import Adminroutes from '../Router/Adminroutes'
import Payment from '../../src/Pages/Dashboard/Payment/Payment'
import Secrect from '../../src/Pages/Shared/Secret/Secrect'
import  Manageitem from '../Pages/Dashboard/Manageitem/Manageitem'
import UPdateitem from '../../src/Pages/Dashboard/UPdateitem/UPdateitem'
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
      ,
      {
        path:'/order/:category',
        element:<Order></Order>
      },{
        path:'/login',
        element:<Login></Login>
      },{
        path:'/signuP',
        element:<SignUP></SignUP>
      },
      {
        path:'/Secrect',
        element:<PrivateRoute><Secrect></Secrect></PrivateRoute>
      }
    ]
  },{
    path:'/dashboard',
    element:<PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
    children:[
      {
        path:'cart',
        element:<Cart></Cart>
      },
      {
        path:'Payment',
        element:<Payment></Payment>
      },
      //adimn route
      {
        path:'additem',
        element:<Adminroutes><Additem></Additem></Adminroutes>

      },
      {
        path: 'manageitems',
        element: <Adminroutes><Manageitem /></Adminroutes>
      },
      {
        path:'uPdateitem/:id',
        element:<Adminroutes><UPdateitem></UPdateitem></Adminroutes>
        ,loader:({params})=> fetch(`http://localhost:5000/menu/${params.id}`)
      },
      {
        path:'allusers',
        element:<Adminroutes><Alluser></Alluser></Adminroutes>
      }
    ]
  }
]);
