import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";

import LoginPage from "./Pages/LoginPage";
import HomePage from "./Pages/HomePage";

export default function Routes() {
  const userKey = localStorage.getItem("userKey");

  const router = createBrowserRouter([
    {
      path: "/login",
      element: <LoginPage />,
    },
    {
      path: "/home",
      element: userKey ? <HomePage /> : <Navigate to="/login" />,
    },
    {
      path: "/*",
      element: userKey ? <Navigate to="/home" /> : <Navigate to="/login" />,
    },
  ]);

  return <RouterProvider router={router} />;
}
