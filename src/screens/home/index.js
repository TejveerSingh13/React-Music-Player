import { RouterProvider, createBrowserRouter } from "react-router-dom";
import routesConfig from "../../routesConfig";
import "./home.css";

const router = createBrowserRouter(routesConfig);

export default function Home() {
  return <RouterProvider router={router} />;
}
