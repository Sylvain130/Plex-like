import Layout from "../../layout/Layout";
import { RouteInterface } from "../../router/Router";
import SeriesPage from "./SeriesPage";

const SeriesRouter: RouteInterface = {
  path: "/Series",
  key: "Series",
  page: SeriesPage,
  layout: Layout,
};

export default SeriesRouter;
