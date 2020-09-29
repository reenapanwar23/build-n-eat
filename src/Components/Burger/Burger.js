import React from "react";
import classes from "./Burger.module.css";
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";

const burger = (props) => {
  let derivedIngredients = Object.keys(props.ingredients) //Converting ingredients objt to an array
    .map((eachIng) => {
      // performing map on each ingredient & getting

      return [...Array(props.ingredients[eachIng])] // the value/qty of each ingredient into a an array with that many elements//
        .map((x, index) => {
          // & mapping each array with number of elements

          return <BurgerIngredient key={eachIng + index} types={eachIng} />; // to get each separate BurgerIngredient
        });
    })
    .reduce(
      //takes 2 args, 1 callback function and other initial value of reduced value
      (arr, el) => {
        // in arg fn takes previous value and current values as input

        return arr.concat(el);
      },
      []
    ); //reduce used to flatten and concat all arrays into one array to check for empty ingdts.

  if (derivedIngredients.length === 0) {
    derivedIngredients = (
      <p className={classes.cont}>Please start adding ingredients!</p>
    );
  }

  return (
    <div className={classes.Burger}>
      <BurgerIngredient types="bread-top" />
      {derivedIngredients}
      <BurgerIngredient types="bread-bottom" />
    </div>
  );
};

export default burger;
