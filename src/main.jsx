import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import LandingPage from "./pages/LandingPage.jsx";
import Login from "./pages/Login.jsx";
import Dashboard from "./pages/Dashboard.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/mails",
    element: <Login />,
  },
  {
    path: "/learning",
    element: <Login />,
  },
  {
    path: "/health",
    element: <Login />,
  },
  {
    path: "/library",
    element: <Login />,
  },
  {
    path: "/academics",
    element: <Login />,
  },
  {
    path: "/research",
    element: <Login />,
  },
  {
    path: "/humanresource",
    element: <Login />,
  },
  {
    path: "/community",
    element: <Login />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    {/* <App /> */}
  </React.StrictMode>
);
