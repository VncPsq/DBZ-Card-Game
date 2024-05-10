import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ApiProvider } from "../contexts/ApiContext";
import App from "./App.jsx";
import Home from "../pages/home/Home";
import About from "../pages/about/About";
import Game from "../pages/game/Game";

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/game",
        element: <Game />,
      },
      {
        path: "/about",
        element: <About />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ApiProvider>
      <RouterProvider router={router} />
    </ApiProvider>
  </React.StrictMode>
);
