import React from "react";
import classes from "./checkbox.module.css";

const Checkbox = ({ text, _id, name, handleCheckbox }) => {
  return (
      <label htmlFor={_id} className={classes.container}>
        <input
          id={_id}
          type="checkbox"
          defaultChecked={false}
          name={name}
          onChange={(e) => handleCheckbox(e)}
          value={text}
        />
        <span className={classes.checkmark}></span>
        {text}
      </label>
  );
};

export default Checkbox;
