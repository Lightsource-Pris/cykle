import React from "react";
import { useState } from "react";
import Checkbox from "../UI/Checkbox/checkbox";
import Input from "../UI/Input/input";
import classes from "./form.module.css";
import { useNavigate } from "react-router";
import { inputArray, checkboxArray } from "../../constants";
//import { registerUser } from "../../service/sendmail";
import loaderImg from "../../assets/Images/load.svg";

const Form = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [error, setError] = useState(false);

  const handleBlur = (e) => {
    setError(true);
  };
  const [payload, setPayload] = useState({
    productName: "",
    firstName: "",
    lastName: "",
    phoneNo: "",
    email: "",
    address: "",
    productType: [],
    serviceType: [],
    description: "",
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      //const res = await registerUser(payload);
      navigate("/submitted");
    } catch (error) {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    setPayload((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleCheckBox = (e) => {
    if (e.target.checked) {
      const newArray = [...payload[e.target.name], e.target.value];
      setPayload((prevState) => ({
        ...prevState,
        [e.target.name]: newArray,
      }));
    } else {
      const newArray = payload[e.target.name].filter(
        (item) => item !== e.target.value
      );
      setPayload((prevState) => ({
        ...prevState,
        [e.target.name]: newArray,
      }));
    }
  };

  return (
    <div className={classes.main}>
      <div className={classes.formContent}>
        <h3>fill this in two minutes</h3>
        <p>
          We will like to know more about your product, fill the form required
          below
        </p>
      </div>
      <form className={classes.form}>
        {inputArray.map((input, i) => (
          <Input
            key={`inputfield-${i}`}
            value={payload[input.name]}
            handleChange={handleChange}
            {...input}
          />
        ))}
        <div className={classes.checkBox}>
          <h3>
            Project Type <span>How would you categories your product?</span>{" "}
          </h3>
          <div className={classes.checkBoxOne}>
            {checkboxArray.slice(0, 8).map((item, i) => (
              <Checkbox
                handleCheckbox={handleCheckBox}
                key={`checkbox1-${i}`}
                {...item}
              />
            ))}
          </div>
          <div className={classes.checkBox}>
            <h3>Service Type</h3>
            <div className={classes.checkBoxTwo}>
              {checkboxArray.slice(8).map((item, i) => (
                <Checkbox
                  handleCheckbox={handleCheckBox}
                  key={`checkbox2-${i}`}
                  {...item}
                />
              ))}
            </div>
          </div>
        </div>
        <textarea
          spellCheck={true}
          placeholder="Tell us a bit about your product"
          name="description"
          onChange={handleChange}
          required
          onBlur={handleBlur}
          error={error.toString()}
          pattern="^[a-zA-Z0-9]{3,16}$"
        ></textarea>
        <button
          onClick={handleSubmit}
          disabled={
            !payload.productName ||
            !payload.firstName ||
            !payload.lastName ||
            !payload.phoneNo ||
            !payload.email ||
            !payload.address ||
            payload.productType.length < 1 ||
            payload.serviceType.length < 1 ||
            !payload.description
          }
        >
          {loading ? <img src={loaderImg} alt="loader" /> : "Submit"}
        </button>
      </form>
    </div>
  );
};

export default Form;
