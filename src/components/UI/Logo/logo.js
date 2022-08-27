import React from "react";
import classes from "./logo.module.css";
import { Link } from "react-router-dom";
import { Cykle } from "../../../constants/svgs";

const Logo = ({ center }) => {
  return (
      <Link
        to="/"
        className={`${classes.main} ${center ? classes.center : ""}`}
      >
        <Cykle />
      </Link>
  );
};

export default Logo;
