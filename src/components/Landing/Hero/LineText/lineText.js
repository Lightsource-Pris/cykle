import React from "react";
import classes from "./lineText.module.css";

const LineText = ({ text }) => {
  return (
    <div className={classes.main}>
      <span className={classes.text}>
        {text}
        <span className={classes.line}></span>
      </span>
    </div>
  );
};

export default LineText;
