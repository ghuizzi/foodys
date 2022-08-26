import React from "react";
import { useRoutes } from "react-router-dom";
import { IPath } from "./interface";

import { LayoutApp } from "./layout";
import { Home, About, Ingredients, Favorites, Error404 } from "../pages";

export const routes = [
  {
    path: "/",
    element: <LayoutApp />,
    children: [
      {
        path: IPath.Home,
        element: <Home />,
      },
      {
        path: IPath.Ingredients,
        element: <Ingredients />,
      },
      {
        path: IPath.About,
        element: <About />,
      },
      {
        path: IPath.Favorites,
        element: <Favorites />,
      },
    ],
  },
  { path: "*", element: <Error404 /> },
];

export const Routes = () => useRoutes(routes);
