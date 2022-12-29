import { createBrowserRouter } from "react-router-dom";
import AddTask from "../Components/AddTask";
import CompleteTask from "../Components/CompleteTask";
import Login from "../Components/Login";
import MyTask from "../Components/MyTask";
import Register from "../Components/Register";
import UpdatePage from "../Components/UpdatePage";
import Main from "../Layout/Main";

export const route=createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
          
            {
                path:'/addTask',
                element:<AddTask></AddTask>
            },
            {
                path:'/myTask',
                element:<MyTask></MyTask>
            },
            {
                path:'/completeTask',
                element:<CompleteTask></CompleteTask>
            },
            {
                path:'/update/:id',
                element:<UpdatePage></UpdatePage>,
                loader:({params})=> fetch(`http://localhost:5000/update/${params.id}`)
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