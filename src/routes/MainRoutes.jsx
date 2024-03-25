import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import HomeDashboard from "../pages/Dashboard/HomeDashboard/HomeDashboard";
import Login from "../pages/Login/Login";
import PrivateRoute from "./PrivateRoute";
import HomePage from "../pages/Home/HomePage/HomePage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <MainLayout />
      </PrivateRoute>
    ),
    children: [
      {
        index: true,
        element: <HomeDashboard />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
]);
