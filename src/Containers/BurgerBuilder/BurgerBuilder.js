import React, { useEffect, useState } from "react";
import Aux from "../../hoc/Auxiliary";
import Burger from "../../Components/Burger/Burger";
import BuildControls from "../../Components/Burger/BuildControls/BuildControls";
import Modal from "../../Components/UI/Modal/Modal";
import OrderSummary from "../../Components/OrderSummary/OrderSummary";
import axios from "../../axios-order";
import Spinner from "../../Components/UI/Spinner/Spinner";
import withErrorHandler from "../../hoc/withErrorHandler/withErrorHandler";
import { connect } from "react-redux";
import * as actions from "../../store/actions/index";
import Layout from "../../Components/Layout/Layout";
import classes from "./BurgerBuilder.module.css";
//---------------- FUNCTIONAL APPROACH---------------------------------------------------------------------

const BurgerBuilder = (props) => {
  const [purchasing, setPurchasing] = useState(false);

  const { initIngredientsHandler } = props;

  useEffect(() => {
    initIngredientsHandler();
  }, [initIngredientsHandler]);

  const updatePurchaseState = (updtdIngredients) => {
    const sum = Object.keys(updtdIngredients) // coverting obj to array with only keys in array ["salad", "bacon"..]
      .map((igkey) => {
        return updtdIngredients[igkey]; //return value of each key [salad(value),cheese(value),value,value]
      })
      .reduce((currentsum, ele) => {
        return currentsum + ele; //sum of all values of ings ie X
      }, 0);

    return sum > 0;
  };

  const purchasingStateHandler = () => {
    if (props.isAuth) {
      setPurchasing(true);
    } else {
      props.onSetAuthRedirectPath("/checkout");
      props.history.push("/auth");
    }
  };

  const purchasingCancelHandler = () => {
    setPurchasing(false);
  };

  const purchaseContinueHandler = () => {
    props.initPurchaseHandler();
    props.history.push("/checkout");
  };

  const disabledInfo = {
    ...props.ings,
  };
  // updating disabledInfo to { salad: true, meat: false... }
  for (let key in disabledInfo) {
    // goes through each ppty in an object
    disabledInfo[key] = disabledInfo[key] <= 0; // to set a ppty to true or false based on value
  }

  let burger = props.error ? (
    <div className={classes.errMsg}>
      <p>
        Sorry{" "}
        <span role="img" aria-label="">
          🙁
        </span>
        , could not load ingredients!
      </p>
    </div>
  ) : (
    <Spinner />
  ); //if error during request to fetch data from remote server
  let orderSummary = null;

  if (props.ings) {
    burger = (
      <Aux>
        <Burger ingredients={props.ings} />
        <BuildControls
          ingredientAdded={props.addIngredientHandler}
          ingredientRemoved={props.removeIngredientHandler}
          disabled={disabledInfo}
          purchasable={updatePurchaseState(props.ings)}
          ordered={purchasingStateHandler}
          isAuth={props.isAuth}
          price={props.ttlPrice}
        />
      </Aux>
    );
    orderSummary = (
      <OrderSummary
        ingredients={props.ings}
        price={props.ttlPrice}
        purchaseCancel={purchasingCancelHandler}
        purchaseContinue={purchaseContinueHandler}
      />
    );
  }
  return (
    <Aux>
      <Layout>
        <Modal show={purchasing} modalClosed={purchasingCancelHandler}>
          {orderSummary}
        </Modal>
        {burger}
      </Layout>
    </Aux>
  );
};
const mapStateToProps = (state) => {
  return {
    ings: state.burgerBuilder.ingredients,
    ttlPrice: state.burgerBuilder.totalPrice,
    error: state.burgerBuilder.error,
    isAuth: state.auth.token !== null,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    addIngredientHandler: (ingType) => dispatch(actions.addIngredient(ingType)),
    removeIngredientHandler: (ingType) =>
      dispatch(actions.removeIngredient(ingType)),
    initIngredientsHandler: () => dispatch(actions.initIngredients()),
    initPurchaseHandler: () => dispatch(actions.purchaseInit()),
    onSetAuthRedirectPath: (path) =>
      dispatch(actions.setAuthRedirectPath(path)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withErrorHandler(BurgerBuilder, axios));
