import { createBrowserRouter } from "react-router-dom";
import Register from "../pages/Register";
import AuthLayout from "../layouts/authLayout";
import ForgotPassword from "../pages/ForgotPassword";
import Home from "../pages/Home";
import Login from "../pages/Login";
import App from "../App";






const router = createBrowserRouter([
    {
        path : '/',
        element : <App/>,
        children : [
            {
                path : 'register',
                element : <AuthLayout><Register/></AuthLayout>
            },
            {
                path : 'login',
                element : <AuthLayout><Login/></AuthLayout>
            },
            {
                path : 'forgot-password',
                element : <AuthLayout><ForgotPassword/></AuthLayout>
            },
            {
                path : "",
                element : <Home/>
            }
        ]
    }
])
export default router;