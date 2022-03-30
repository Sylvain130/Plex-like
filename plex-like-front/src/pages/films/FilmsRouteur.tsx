import Layout from "../../layout/Layout";
import { RouteInterface } from "../../router/Router";
import FilmsPage from "./FilmsPage";

const FilmsRouter: RouteInterface = {
  path: "/films",
  key: "Films",
  page: FilmsPage,
  layout: Layout,
};

export default FilmsRouter;
