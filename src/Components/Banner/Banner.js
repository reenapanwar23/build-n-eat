import React from "react";
import classes from "./Banner.module.css";

const Banner = () => {
  return (
    <img
      className={classes.banner}
      src={`${process.env.PUBLIC_URL}/assets/b4.jpg`}
      alt="Burger"
    />
  );
};

export default Banner;
