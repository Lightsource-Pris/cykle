import React from "react";
import classes from "./socials.module.css";
import { Link } from "react-router-dom";
import Behance from "../../../assets/Images/Behance.svg";
import Dribble from "../../../assets/Images/Dribble.svg";
import instagram from "../../../assets/Images/instagram.svg";
import twitter from "../../../assets/Images/twitter.svg";
import LinkedIn from "../../../assets/Images/LinkedIn.svg";
import facebook from "../../../assets/Images/facebook.svg";
import Button from "../button/button";
import "aos/dist/aos.css";
import AOS from "aos";
import { useEffect } from "react";

const Project = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div className={classes.main}>
      <div>
        <h2>Take a look at Our recent projects Here</h2>
        <div className={classes.projectSite}>
          <a
            href="https://www.behance.net/cyklestudio"
            target="_blank"
            rel="noopener noreferrer"
            data-aos="fade-right"
          >
            <img
              src={Behance}
              alt="behance"
              data-aos="fade-right"
              data-aos-duration="2000"
            />
          </a>
          <a
            href="https://dribbble.com/Cykle"
            target="_blank"
            rel="noopener noreferrer"
            data-aos="fade-down"
          >
            <img
              src={Dribble}
              alt="dribble"
              data-aos="fade-down"
              data-aos-duration="2000"
            />
          </a>
          <a
            href="https://instagram.com/cyklestudio"
            target="_blank"
            rel="noopener noreferrer"
            data-aos="zoom-in"
          >
            <img
              src={instagram}
              alt="instagram"
              data-aos="zoom-in"
              data-aos-duration="2000"
            />
          </a>
          <a
            href="https://twitter.com/cyklestudio"
            target="_blank"
            rel="noopener noreferrer"
            data-aos="zoom-out"
          >
            <img
              src={twitter}
              alt="twitter"
              data-aos="zoom-out"
              data-aos-duration="2000"
            />
          </a>
          <a
            href="https://www.linkedin.com/company/cyklestudio"
            rel="noopener noreferrer"
            target="_blank"
            data-aos="fade-up"
          >
            <img
              src={LinkedIn}
              alt="linkedin"
              data-aos="fade-up"
              data-aos-duration="2000"
            />
          </a>
          <a
            href="https://www.facebook.com/cykleproducts"
            target="_blank"
            rel="noopener noreferrer"
            data-aos="fade-upleft"
          >
            <img
              src={facebook}
              alt="facebook"
              data-aos="fade-left"
              data-aos-duration="2000"
            />
          </a>
        </div>
      </div>
      <Link to="/contact-us" className={classes.btn} type="projects">
        <Button text1="Contact" text2="US" />
      </Link>
    </div>
  );
};

export default Project;
