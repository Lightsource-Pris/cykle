import React from "react";
import Logo from "../../components/UI/Logo/logo";
import classes from "./submitted.module.css";
import { Link } from "react-router-dom";
import { icon } from "../../constants/iconsData";
import Footer from "../../components/UI/Footer/footer";
import Button from "../../components/UI/button/button";
import Slider from "react-slick";
import { useEffect } from "react";


const Submitted = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });

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
      <Logo />
      <h2 className=" animate__animated animate__zoomIn animate__fast 0.1s">
        We are super excited to have you, You will hear from us shortly 💌
      </h2>
      <div className={classes.icons}>
        <Slider {...settings}>
          {icon.map((item, index) => (
            <div key={index}>
              <item.Image />
            </div>
          ))}
        </Slider>
      </div>
      <Link to="/" className={classes.submittedBtn}>
        <Button text1="Back Ho" text2="me" />
      </Link>
      <Footer />
    </div>
  );
};

export default Submitted;
