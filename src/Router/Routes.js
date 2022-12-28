import { createBrowserRouter } from "react-router-dom";
import AddTask from "../Components/AddTask";
import Login from "../Components/Login";
import Register from "../Components/Register";
import Main from "../Layout/Main";

export const route=createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
          
            {
                path:'/addTask',
                element:<AddTask></AddTask>
            }
           
        ]
    },

    {
        path:'/login',
        element:<Login></Login>
    },
    {
        path:'/register',
        element:<Register></Register>
    }
])