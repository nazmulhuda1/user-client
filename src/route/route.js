import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Main from "../pages/layout/Main";
import AddUser from "../pages/User/AddUser";
import EditUser from "../pages/User/EditUser";
import User from "../pages/User/User";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/user/:id',
                element: <User />
            },
            {
                path: '/adduser',
                element: <AddUser />
            },
            {
                path: '/edit/:id',
                element: <EditUser />
            }
        ]
    }
])
export default router;