import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import LandingPage from "./pages/LandingPage.jsx";
import Login from "./pages/Login.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import Schedule from "./components/Schedule.jsx";
import Mails from "./pages/Mails.jsx";
import Learning from "./pages/Learning.jsx";
import Health from "./pages/Health.jsx";
import Library from "./pages/Library.jsx";
import Research from "./pages/Research.jsx";
import DashNavbar from "./components/DashNavbar.jsx";
import HR from "./pages/HR.jsx";
import CommunityImpact from "./pages/CommunityImpact.jsx";
import Academics from "./pages/Academics.jsx";



const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/dashboard",
    element: <Mails />,
  },
  {
    path: "/home",
    element: <App />,
  },

  {
    path: "/login",
    element: <Login />,
  },
  // routes  begin here
  {
    path: "/mails",
    element: <Mails />,
  },
  {
    path: "/learning",
    element: <Learning />,
  },
  {
    path: "/health",
    element: <Health />,
  },
  {
    path: "/library",
    element: <Library />,
  },
  {
    path: "/academics",
    element: <Academics />,
  },
 
  {
    path: "/research",
    element: <Research />,
  },
  {
    path: "/humanresource",
    element: <HR />,
  },
  {
    path: "/community",
    element: <CommunityImpact />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    {/* <App /> */}
  </React.StrictMode>
);
