import Main from "../../Outlet/Main";
import Home from "../Home/Home";
import Footer from "../Shared/Footer/Footer";
import Header from "../Shared/Header/Header";

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
                path: '/footer',
                element: <Footer></Footer>
            }
        ]

    }
])
export default router;