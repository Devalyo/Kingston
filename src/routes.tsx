import { createBrowserRouter } from "react-router";
import HomeNoAuth from "./pages/HomeNoAuth";
import ListingPage from "./pages/ListingPage";



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
    }
    
])

export default routes