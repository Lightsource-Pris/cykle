import { useRoutes } from "react-router";
import Landing from "./pages/Landing/landing";
import MainLayout from "./layout/MainLayout/mainLayout";
import Submitted from "./pages/Submitted/submitted";
import ContactUs from "./pages/ContactUs/contactUs";
import React from "react";
const Routes = () => {
  return useRoutes([
    {
      path: "/",
      element: <MainLayout />,
      children: [{ path: "/", element: <Landing /> }],
    },
    {
      path: "/submitted",
      element: <Submitted />,
    },
    {
      path: "/contact-us",
      element: <ContactUs />,
    },
  ]);
};

export default Routes;
