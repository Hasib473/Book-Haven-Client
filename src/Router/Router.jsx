import { createBrowserRouter } from "react-router";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home";
import AllBooks from "../Pages/AllBooks";
import AddBook from "../Pages/AddBook";
import Login from "../Pages/Login";
import Registrantion from "../Pages/Registrantion";
import MyBooks from "../Pages/MyBooks";
import PrivateRoute from "./PrivateRoute";

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
                Component: AllBooks,
                loader: () => fetch('http://localhost:3000/allbooks')
            },

            {
                path:'/add-books',
                element:(
                    <PrivateRoute>
                        <AddBook/>
                    </PrivateRoute>
                    
                )
            },

            {
                path:'/login',
                Component: Login
            },
            {
                path:'/registration',
                Component: Registrantion
            },
          {
  path: "/mybooks",
  element: (
    <PrivateRoute>
      <MyBooks />
    </PrivateRoute>
  )
}
        ]
    }
]);

export default router;