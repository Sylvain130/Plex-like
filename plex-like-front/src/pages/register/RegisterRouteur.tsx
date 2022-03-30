import { RouteInterface } from "../../router/Router";
import RegisterPage from "./RegisterPage";

const RegisterRouter: RouteInterface = {
  path: "/register",
  key: "Register",
  page: RegisterPage,
};

export default RegisterRouter;
