import classes from "./mainLayout.module.css";
import { Outlet } from "react-router-dom";
import Logo from "../../components/UI/Logo/logo";
import Project from "../../components/UI/socials/socials";
import Footer from "../../components/UI/Footer/footer";
import React from "react";

const MainLayout = () => {
  return (
    <div className={classes.main}>
      <Logo center />
      <main>
        <Outlet />
      </main>
      <Project btn />
      <Footer />
    </div>
  );
};

export default MainLayout;
