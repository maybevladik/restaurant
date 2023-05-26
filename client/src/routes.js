import {
    ABOUT_ROUTE,
    ADMIN_ROUTE,
    CONTACT_ROUTE, DISH_ROUTE,
    HOME_ROUTE,
    LOGIN_ROUTE,
    MENU_ROUTE, ORDER_ROUTE,
    REGISTRATION_ROUTE, RESERVE_ROUTE
} from "./utils/constants";
import AdminPage from "./pages/AdminPage";
import Auth from "./pages/Auth";
import HomePage from "./pages/HomePage";
import AboutUs from "./pages/AboutUs";
import Contact from "./pages/Contact";
import Menu from "./pages/Menu";
import DishPage from "./pages/DishPage";
import Order from "./pages/Order";
import ReserveTable from "./pages/ReserveTable";

export const authRoutes = [
    {
        path: ADMIN_ROUTE,
        Component: AdminPage
    }
]
export const publicRoutes = [
    {
        path: LOGIN_ROUTE,
        Component: Auth
    },
    {
        path: MENU_ROUTE,
        Component: Menu
    },
    {
        path: DISH_ROUTE + '/:dishId',
        Component: DishPage
    },
    {
        path: REGISTRATION_ROUTE,
        Component: Auth
    },
    {
        path: HOME_ROUTE,
        Component: HomePage
    },
    {
        path: ABOUT_ROUTE,
        Component: AboutUs
    },
    {
        path: CONTACT_ROUTE,
        Component: Contact
    },
    {
        path: ORDER_ROUTE,
        Component: Order
    },
    {
        path: RESERVE_ROUTE,
        Component: ReserveTable
    }
]