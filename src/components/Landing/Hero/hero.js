import React from "react";
import classes from "./hero.module.css";
import { icon } from "../../../constants/iconsData";
import LineText from "./LineText/lineText";
import { Link } from "react-router-dom";
import Button from "../../UI/button/button";
import Slider from "react-slick";

const Hero = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 7,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  };

  return (
    <div className={classes.main}>
      <div className={classes.heroContent}>
        <h2 className=" animate__animated animate__zoomIn animate__fast 0.1s">
          Creating digital Products and experiences from{" "}
          <LineText text="conception" /> to <LineText text="completion" />
        </h2>
        <Link to="/contact-us" className={classes.btn}>
          <Button text1="Contact" text2="US" />
        </Link>
      </div>
      <div className={classes.icons}>
        <Slider {...settings} className={classes.slider}>
          {icon.map((item, index) => (
            <div key={index}>
              <item.Image />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Hero;
