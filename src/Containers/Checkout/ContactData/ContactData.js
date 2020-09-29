import React, { useState } from "react";
//import { Component } from "react";
import Button from "../../../Components/UI/Button/Button";
import Classes from "./ContactData.module.css";
import Spinner from "../../../Components/UI/Spinner/Spinner";
import axios from "../../../axios-order";
import Input from "../../../Components/UI/Input/Input";
import { connect } from "react-redux";
import * as orderActions from "../../../store/actions/index";
import withErrorHandler from "../../../hoc/withErrorHandler/withErrorHandler";
import checkValidity from "../../../shared/CheckValidation";

//---------------- FUNCTIONAL APPROACH---------------------------------------------------------------------

const ContactData = (props) => {
  const [orderForm, setOrderForm] = useState({
    name: {
      elementType: "input",
      elementConfig: {
        type: "text",
        placeholder: "Your Name",
      },
      value: "",
      validation: {
        required: true,
      },
      valid: false,
      touched: false,
    },
    street: {
      elementType: "input",
      elementConfig: {
        type: "text",
        placeholder: "Your Street",
      },
      value: "",
      validation: {
        required: true,
      },
      valid: false,
      touched: false,
    },
    zipCode: {
      elementType: "input",
      elementConfig: {
        type: "text",
        placeholder: "ZipCode",
      },
      value: "",
      validation: {
        required: true,
        minLength: 5,
        maxLength: 5,
      },
      valid: false,
      touched: false,
    },
    country: {
      elementType: "input",
      elementConfig: {
        type: "text",
        placeholder: "Country",
      },
      value: "",
      validation: {
        required: true,
      },
      valid: false,
      touched: false,
    },
    email: {
      elementType: "input",
      elementConfig: {
        type: "email",
        placeholder: "Your e-Mail",
      },
      value: "",
      validation: {
        required: true,
        isEmail: true,
      },
      valid: false,
      touched: false,
    },
    deliveryMethod: {
      elementType: "select",
      elementConfig: {
        options: [
          { value: "Fastest", displayValue: "Fastest" },
          { value: "Cheapest", displayValue: "Cheapest" },
        ],
      },
      validation: {},
      valid: true,
      value: "Cheapest",
      touched: false,
    },
  });

  const [formIsValid, setFormIsValid] = useState(false);

  const orderHandler = (event) => {
    event.preventDefault();
    const formData = {};
    for (let formElementIdentifier in orderForm) {
      formData[formElementIdentifier] = orderForm[formElementIdentifier].value;
    }

    const order = {
      ingredients: props.ings,
      price: props.price,
      orderData: formData,
      userId: props.userId,
    };

    props.onOrderBurger(order, props.token);
  };
  const inputChangedHandler = (event, inputIdentifier) => {
    const updatedorderForm = {
      ...orderForm,
    };
    const updatedFormElement = {
      ...updatedorderForm[inputIdentifier],
    };

    updatedFormElement.value = event.target.value;
    updatedFormElement.valid = checkValidity(
      updatedFormElement.value,
      updatedFormElement.validation
    );
    updatedFormElement.touched = true;
    updatedorderForm[inputIdentifier] = updatedFormElement;

    let formIsValid = true;

    for (let eachkey in updatedorderForm) {
      formIsValid = updatedorderForm[eachkey].valid && formIsValid;
    }

    setOrderForm(updatedorderForm);
    setFormIsValid(formIsValid);
  };

  let formElementsArray = []; //to push all orderform data onto an array
  for (let key in orderForm) {
    formElementsArray.push({
      id: key,
      config: orderForm[key],
    });
  }

  let formDta = (
    <form onSubmit={orderHandler}>
      <h4>Enter your Data</h4>
      {formElementsArray.map((formElement) => (
        <Input
          key={formElement.id}
          elementType={formElement.config.elementType}
          elementConfig={formElement.config.elementConfig}
          value={formElement.config.value}
          invalid={!formElement.config.valid}
          shouldValidate={formElement.config.validation}
          touched={formElement.config.touched}
          changed={(event) => inputChangedHandler(event, formElement.id)}
        />
      ))}

      <Button btnType="Success" disabled={!formIsValid}>
        ORDER
      </Button>
    </form>
  );

  if (props.loading) {
    formDta = <Spinner />;
  }

  return <div className={Classes.ContactData}>{formDta}</div>;
};
const mapStateToProps = (state) => {
  return {
    ings: state.burgerBuilder.ingredients,
    price: state.burgerBuilder.totalPrice,
    loading: state.order.loading,
    token: state.auth.token,
    userId: state.auth.userId,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onOrderBurger: (orderData, authtoken) =>
      dispatch(orderActions.purchaseBurger(orderData, authtoken)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withErrorHandler(ContactData, axios));
