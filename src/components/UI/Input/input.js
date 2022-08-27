import React from "react";
import { useState } from "react";
import classes from "./input.module.css"
const Input = ({
  _id,
  label,
  name,
  handleChange,
  props,
  value,
  errorMessage,
  ...InputProps
}) => {
  const [error, setError] = useState(false);

const handleBlur = (e) => {
  setError(true);
}

  return (
      <label htmlFor={_id} className={classes.label}>
        {label}
        <input
          id={_id}
          name={name}
          onChange={handleChange}
          value={value}
          {...InputProps}
          onBlur={handleBlur}
          error={error.toString()}
        />
        <span>{errorMessage}</span>
      </label>
  );
};

export default Input;
