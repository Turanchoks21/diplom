import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import "./i18n";
import App from "./App.jsx";
import HomeView from "./views/HomeView.jsx";
import RegisterView from "./views/RegisterView.jsx";
import LoginView from "./views/LoginView.jsx";
import MainPage from "./MainPage.jsx";
import NewsView from "./views/NewsView.jsx";
import FriendsView from "./views/FriendsView.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomeView />,
      },
      {
        path: "register",
        element: <RegisterView />,
      },
      {
        path: "login",
        element: <LoginView />,
      },
    ],
  },
  {
    path: "/main",
    element: <MainPage />,
    children: [
      {
        path: "",
        element: <NewsView />,
      },
      {
        path: "friends",
        element: <FriendsView />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
