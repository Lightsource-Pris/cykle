import React from "react";
import Logo from "../../components/UI/Logo/logo";
import classes from "./contactUs.module.css";
import { icon } from "../../constants/iconsData";
import Form from "../../components/Form/form";
import Project from "../../components/UI/socials/socials";
import Footer from "../../components/UI/Footer/footer";
import Slider from "react-slick";
import { useEffect } from "react";

const ContactUs = () => {
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
      <div></div>
      <Logo />
      <section className={classes.section}>
        <h2 className={`${classes["animate__animated animate__zoomIn animate__fast 0.1s"]}`}>
          Lets take your product from <span>conception</span> to{" "}
          <span>completion</span>
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
      </section>
      <section className={classes.sectionTwo}>
        <div className={classes.contactForm}>
          <Form />
        </div>
      </section>
      <Project />
      <Footer />
    </div>
  );
};

export default ContactUs;
