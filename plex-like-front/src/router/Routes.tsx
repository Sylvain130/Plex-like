import LoginRouter from "../pages/login/LoginRouter";
import RegisterRouter from "../pages/register/RegisterRouteur";
import FilmsRouter from "../pages/films/FilmsRouteur";
import SeriesRouter from "../pages/series/SeriesRouter";
import { RouteInterface } from "./Router";
import HomeRouter from "../pages/home/HomeRouter";

const Routes: RouteInterface[] = [

        LoginRouter,
        RegisterRouter,
        HomeRouter,
        SeriesRouter,
        FilmsRouter,

]

export default Routes;