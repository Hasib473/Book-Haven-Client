import { createBrowserRouter } from "react-router";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home";
import AllBooks from "../Pages/AllBooks";
import AddBook from "../Pages/AddBook";
import Login from "../Pages/Login";
import Registrantion from "../Pages/Registrantion";

const router = createBrowserRouter([
    {
        path: '/',
        Component: MainLayout,
        children: [
            {
                index: true, 
                Component: Home
            },
            {
                path:'/all-books',
                Component: AllBooks
            },

            {
                path:'/add-books',
                Component: AddBook
            },

            {
                path:'/login',
                Component: Login
            },
            {
                path:'/registration',
                Component: Registrantion
            }
        ]
    }
]);

export default router;