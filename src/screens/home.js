import { RouterProvider, createBrowserRouter } from "react-router-dom";
import routesConfig from "../routesConfig";

const router = createBrowserRouter(routesConfig);

export default function Home() {
  return <RouterProvider router={router} />;
}
