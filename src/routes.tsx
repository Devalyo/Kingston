import { createBrowserRouter } from "react-router";
import HomeNoAuth from "./pages/HomeNoAuth";
import ListingPage from "./pages/ListingPage";
import About from "./pages/About";
import Page404 from "./pages/Page404";



const routes = createBrowserRouter([
    {
        path: '/',
        element: <HomeNoAuth />,
    },

    {
        path: '/home',
        element: <HomeNoAuth />,
    },
    {
        path: '/shop',
        element: <ListingPage></ListingPage>
    },

    {
        path: '/about',
        element: <About></About>
    },

    {
        path: '/*',
        element: <Page404></Page404>
    },
    
    
])

export default routes