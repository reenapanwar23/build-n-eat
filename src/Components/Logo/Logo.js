import React from "react";
import BurgerLogo from "../../assets/images/Burger-Logo.png";
import classes from "./Logo.module.css";

const logo = (props) => {
  return (
    <div className={classes.Logo}>
      <img src={BurgerLogo} alt="MyBurger" />
    </div>
  );
};
export default logo;
