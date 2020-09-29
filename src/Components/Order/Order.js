import React from "react";
import classes from "./Order.module.css";

const order = (props) => {
  let ingredients = [];
  for (let ingredientName in props.ingredients) {
    ingredients.push({
      name: ingredientName,
      amount: props.ingredients[ingredientName],
    });
  } //[ {name: salad, amount: 2}, {name: cheese, amount: 1}]

  let ingredientOutput = ingredients.map((ig) => {
    return (
      <span
        style={{
          textTransform: "capitalize",
          display: "inline-block",
          fontWeight: "500",
          margin: "0 8px",
          border: "1px solid #ccc",
          padding: "5px",
        }}
        key={ig.name}
      >
        {ig.name + " "}({ig.amount})
      </span>
    );
  });

  return (
    <div className={classes.OrderBg}>
      <div className={classes.Order}>
        <p> INGREDIENTS : {ingredientOutput}</p>
        <p>
          PRICE :
          <strong>
            {" " + Number.parseFloat(props.price).toFixed(2)}
            {/*to covert the string to no.and limit to 2 dec places */}
          </strong>
        </p>
      </div>
    </div>
  );
};
export default order;
