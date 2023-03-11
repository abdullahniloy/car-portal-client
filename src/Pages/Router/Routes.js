import Main from "../../Outlet/Main";
import Home from "../Home/Home";
import Login from "../Home/Login/Login";
import Footer from "../Shared/Footer/Footer";
import Header from "../Shared/Header/Header";
import SignUp from "../SignUp/SignUp";

const { createBrowserRouter } = require("react-router-dom");

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/header',
                element: <Header></Header>
            },
            {
                path: '/home',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>,
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/footer',
                element: <Footer></Footer>
            }
        ]

    }
])
export default router;