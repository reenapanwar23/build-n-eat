import React, { useState, useEffect } from "react";
import Input from "../../Components/UI/Input/Input";
import Button from "../../Components/UI/Button/Button";
import classes from "./Auth.module.css";
import * as actions from "../../store/actions/index";
import { connect } from "react-redux";
import Spinner from "../../Components/UI/Spinner/Spinner";
import { Redirect } from "react-router-dom";
import checkValidity from "../../shared/CheckValidation";
import Layout from "../../Components/Layout/Layout";

//---------------- FUNCTIONAL APPROACH---------------------------------------------------------------------

const Auth = (props) => {
  const [authForm, setAuthForm] = useState({
    email: {
      elementType: "input",
      elementConfig: {
        type: "email",
        placeholder: "Your e-mail",
      },
      value: "",
      validation: {
        required: true,
        isEmail: true, // to be added in check validation
      },
      valid: false,
      touched: false,
    },
    password: {
      elementType: "input",
      elementConfig: {
        type: "password",
        placeholder: "Password",
      },
      value: "",
      validation: {
        required: true,
        minLength: 6,
      },
      valid: false,
      touched: false,
    },
  });
  const [IsSignUp, setIsSignUp] = useState(true);

  const { buildingBurger, authRedirectPath, setAuthRedirectPath } = props;

  useEffect(() => {
    if (!buildingBurger && authRedirectPath !== "/") {
      //to redirect to /(home) , when burger is not build and we are
      setAuthRedirectPath(); // trying to access checkout from any other page
    }
  }, [buildingBurger, authRedirectPath, setAuthRedirectPath]);

  const inputChangedHandler = (event, controlName) => {
    const updatedControls = {
      ...authForm,
      [controlName]: {
        ...authForm[controlName],
        value: event.target.value,
        valid: checkValidity(
          event.target.value,
          authForm[controlName].validation
        ),
        touched: true,
      },
    };
    setAuthForm(updatedControls);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.onAuth(authForm.email.value, authForm.password.value, IsSignUp);
  };

  const signUpHandler = () => {
    setIsSignUp(!IsSignUp);
  };

  let formElementsArray = []; //to push all controls data onto an array
  for (let key in authForm) {
    formElementsArray.push({
      id: key,
      config: authForm[key],
    });
  }

  let formE = formElementsArray.map((formElement) => {
    return (
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
    );
  });

  if (props.loading) {
    formE = <Spinner style={{ margin: "20px auto" }} />;
  }

  let errorHanddler = null;

  if (props.error) {
    errorHanddler = <p style={{ color: "red" }}> {props.error.message}</p>;
  }

  let authRedirect = null;
  if (props.isAuth) {
    authRedirect = <Redirect to={props.authRedirectPath} />; // to redirect to checkout after auth success
  } // and when burger is alrdy build before.

  return (
    <Layout>
      <div className={classes.Layot}>
        <div className={classes.Auth}>
          {authRedirect}
          {errorHanddler}
          <form onSubmit={submitHandler}>
            {formE}
            <Button btnType="Success">SUBMIT</Button>
          </form>

          <Button clicked={signUpHandler} btnType="Danger">
            SWITCH TO {IsSignUp ? "SIGNIN" : "SIGNUP"}{" "}
          </Button>
        </div>
      </div>
    </Layout>
  );
};
const mapStateToProps = (state) => {
  return {
    loading: state.auth.loading,
    error: state.auth.error,
    isAuth: state.auth.token !== null,
    buildingBurger: state.burgerBuilder,
    authRedirectPath: state.auth.authRedirectPath,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onAuth: (email, password, IsSignUp) =>
      dispatch(actions.auth(email, password, IsSignUp)),
    onSetRedirectAuthPath: () => dispatch(actions.setAuthRedirectPath("/")),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Auth);
