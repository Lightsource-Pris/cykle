import React from "react";
import classes from "./button.module.css";

const Button = ({ text1, text2 }) => {
  return (
    <span className={classes.main}>
      <span>{text1}</span>
      <span className={classes.after}>
       <span>{text2}</span>
      </span>
    </span>
  );
};

export default Button;
