import Library from "./screens/library";
import Feed from "./screens/feed";
import Trending from "./screens/trending";
import Player from "./screens/player";
import Favourites from "./screens/favourites";

import { Outlet } from "react-router-dom";

const routesConfig = [
  {
    path: "/",
    element: <Outlet />,
    errorElement: <h1> NOT FOUND!</h1>,
    children: [
      { path: "/", element: <Library /> },
      { path: "/feed", element: <Feed /> },
      { path: "/trending", element: <Trending /> },
      { path: "/player", element: <Player /> },
      { path: "/favourites", element: <Favourites /> },
    ],
  },
];

export default routesConfig;
