import React from "react";
import classes from "./Spinner.module.css";

const spinner = () => {
  return (
    <div className={classes.Load}>
      <div className={classes.Loader}>Loading...</div>
    </div>
  );
};
export default spinner;
