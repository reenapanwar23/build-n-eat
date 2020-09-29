import React from "react";
import classes from "./NavigationItems.module.css";
import NavigationItem from "./NavigationItem/NavigationItem";

const navigationItems = (props) => (
  <ul className={classes.NavigationItems}>
    <NavigationItem link="/">Home</NavigationItem>

    <NavigationItem link="/build">Burger Builder</NavigationItem>

    {props.isAuthenticated ? (
      <NavigationItem link="/Orders"> My Orders</NavigationItem>
    ) : null}

    {props.isAuthenticated ? (
      <NavigationItem link="/logout"> LogOut</NavigationItem>
    ) : (
      <NavigationItem link="/auth"> Authenticate</NavigationItem>
    )}
  </ul>
);

export default navigationItems;
