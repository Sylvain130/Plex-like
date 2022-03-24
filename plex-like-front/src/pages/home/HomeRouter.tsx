import Layout from "../../layout/Layout";
import { RouteInterface } from "../../router/Router";
import HomePage from "./HomePage";

const HomeRouter: RouteInterface = {
    path: "/Home",
    key: "Home",
    page: HomePage,
    layout: Layout,
};

    
export default HomeRouter;