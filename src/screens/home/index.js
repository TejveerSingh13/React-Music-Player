import { RouterProvider, createBrowserRouter } from "react-router-dom";
import routesConfig from "../../routesConfig";
import "./home.css";
import Sidebar from "../../components/sidebar";

const router = createBrowserRouter(routesConfig);

export default function Home() {
  return (
    <div className="main-body">
      <Sidebar />
      <RouterProvider router={router} />
    </div>
  );
}
