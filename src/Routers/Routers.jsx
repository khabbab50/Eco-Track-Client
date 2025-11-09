import { createBrowserRouter } from "react-router";
import RootLayout from "../layout/RootLayout";
import ChallengeDetail from "../Pages/ChallengeDetail/ChallengeDetail";
import Challenges from "../Pages/Challenges/Challenges";
import ForgotPassword from "../Pages/ForgotPassword/ForgotPassword";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/challenges",
        element: <Challenges />,
      },
      {
        path: "/challenges/:id",
        element: <ChallengeDetail />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/forgot-password",
        element: <ForgotPassword />,
      },
    ],
  },
]);
