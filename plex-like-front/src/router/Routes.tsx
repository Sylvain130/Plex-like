import HomeRouter from "../pages/home/HomeRouter";
import RegisterRouter from "../pages/register/RegisterRouteur";
import FilmsRouter from "../pages/films/FilmsRouteur";
import SeriesRouter from "../pages/series/SeriesRouter";
import { RouteInterface } from "./Router";

const Routes: RouteInterface[] = [

        HomeRouter,
        RegisterRouter,
        SeriesRouter,
        FilmsRouter

]

export default Routes;