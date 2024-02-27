import Library from "../src/screens/library";
import Feed from "../src/screens/feed";
import Trending from "../src/screens/trending";
import Player from "../src/screens/player";
import Favourites from "../src/screens/favourites";

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
