import React from "react";
import Button from "../../Components/UI/Buttons/Button";
import classes from "./Home.module.css";

const HomePg = (props) => {
  const clickHandler = () => {
    props.history.push("/build");
  };

  return (
    <div className={classes.home}>
      <section className={classes.sec}>
        <div className={classes.inner}>
          <h1>
            Build N Eat <span>🍽</span>
          </h1>
          <p>Choose your favourite ingredients to make a delicious Burger!</p>
          <Button clicked={clickHandler}>Start Building</Button>
        </div>
      </section>
    </div>
  );
};
export default HomePg;
