import Card from "../../components/Card/card";
import Hero from "../../components/Landing/Hero/hero";
import { cardData } from "../../constants/iconsData";
import classes from "./landing.module.css";
import React from "react";

function Landing() {
  return (
    <div>
      <Hero />
      <div className={classes.cardSection}>
        {cardData.map((item, index) => (
            <Card key={index} {...item} />
        ))}
      </div>
    </div>
  );
}

export default Landing;
