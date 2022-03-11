import FilmsRouter from "../pages/films/FilmsRouteur";
import HomeRouter from "../pages/home/HomeRouter";
import SeriesRouter from "../pages/series/SeriesRouter";
import { RouteInterface } from "./Router";

const Routes: RouteInterface[] = [
    
        HomeRouter,
        SeriesRouter,
        FilmsRouter
    
]

export default Routes;