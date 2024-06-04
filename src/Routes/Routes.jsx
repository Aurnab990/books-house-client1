import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Registration/Login";
import Signup from "../Pages/Registration/Signup";
import Dashboard from "../Pages/Dashboard/Dashboard";
import Addbook from "../Pages/Dashboard/Addbook";
import Managestore from "../Pages/Dashboard/Managestore";
import Userprofile from "../Pages/Dashboard/Userprofile";
import Updateuserprofile from "../Pages/Dashboard/Updateuserprofile";
import Allbooks from "../Pages/Home/Allbooks/Allbooks";
import PrivateRoute from "./Private/PrivateRoute";
import Updatebooks from "../Pages/Dashboard/Updatebooks";


export const router = createBrowserRouter([

    {
        path: "/",
        element: <Home></Home>,
        loader:()=>fetch("http://localhost:3000/books")
        
    },
    {
        path:"/login",
        element: <Login></Login>
    },
    {
        path: "/signup",
        element: <Signup></Signup>
    },
    {
        path: "/dashboard",
        element: <Dashboard></Dashboard>,
        // children: [
        //     {
        //         path:"addbooks",
        //         element: (
        //         <PrivateRoute>
        //           <Addbook></Addbook>
        //         </PrivateRoute>)
        //     }
        // ]
    },
    {
        path: "/dashboard/addbooks",
        element: <Addbook></Addbook>
    },
    {
        path: "/dashboard/managestore",
        element: <Managestore></Managestore>
    },
    {
        path: "/dashboard/profile",
        element: <Userprofile></Userprofile>,
        
        
    },
    {
        path: "dashboard/profile/edit",
        element: <Updateuserprofile></Updateuserprofile>
    },
    {
        path: "/allbooks",
        element: <Allbooks></Allbooks>,
        
    },
    {
        path: "/dashboard/update/:id",
        element: <Updatebooks></Updatebooks>,
        loader: ({params})=>fetch(`http://localhost:3000/books/${params.id}`)
    }

])