import React from "react";
import classes from "./card.module.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Card = ({ image, text, title, paddingTop, bg, color, fontSize }) => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div
      className={classes.main}
      style={{ paddingTop: paddingTop, background: bg, color: color }}
      data-aos="flip-left"
      data-aos-easing="ease-out-cubic"
      data-aos-duration="2000"
    >
      <div>
        <img
          src={image}
          alt="icon"
          data-aos="slide-left"
          data-aos-duration="3000"
        />
      </div>
      <div className={classes.cardContent}>
        <h3
          style={{
            fontSize: fontSize,
          }}
        >
          {title}
        </h3>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default Card;
