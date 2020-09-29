import React from "react";
import CheckoutSummary from "../../Components/Order/CheckoutSummary/CheckoutSummary";
import ContactData from "./ContactData/ContactData";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import Layout from "../../Components/Layout/Layout";

//---------------- FUNCTIONAL APPROACH---------------------------------------------------------------------

const Checkout = (props) => {
  const checkoutCancelledHandler = () => {
    props.history.goBack();
  };

  const checkoutContinuedHandler = () => {
    props.history.replace(props.match.url + "/contact-data");
  };

  let summary = <Redirect to="/build" />;
  if (props.ings) {
    let purchaseRedirect = props.purchased ? <Redirect to="/build" /> : null;

    summary = (
      <div>
        {purchaseRedirect}
        <CheckoutSummary
          ingredients={props.ings}
          checkoutCancelled={checkoutCancelledHandler}
          checkoutContinued={checkoutContinuedHandler}
        />

        <Route
          path={props.match.url + "/contact-data"}
          component={ContactData}
        />
      </div>
    );
  }
  return <Layout>{summary}</Layout>;
};

const mapStateToProps = (state) => {
  return {
    ings: state.burgerBuilder.ingredients,
    purchased: state.order.purchased,
  };
};
export default connect(mapStateToProps)(Checkout);
