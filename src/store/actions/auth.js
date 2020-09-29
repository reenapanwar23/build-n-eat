import * as actionTypes from "./actionTypes";
import axios from "axios";
import KEY from "../../SecretKey";

export const authStart = () => {
  return {
    type: actionTypes.AUTH_START,
  };
};

export const authSuccess = (Token, userId) => {
  return {
    type: actionTypes.AUTH_SUCCESS,
    idToken: Token,
    userId: userId,
  };
};

export const authFailed = (err) => {
  return {
    type: actionTypes.AUTH_FAILED,
    error: err,
  };
};

export const authLogOut = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("userId");
  localStorage.removeItem("expirationDate");

  return {
    type: actionTypes.AUTH_LOGOUT,
  };
};

export const authLogOutTimer = (expiresIn) => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(authLogOut());
    }, expiresIn * 1000); // ms to s
  };
};

export const auth = (email, password, IsSignUp) => {
  return (dispatch) => {
    dispatch(authStart());
    const authData = {
      email: email,
      password: password,
      returnSecureToken: true,
    };
    let url = ` https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${KEY}`;
    if (!IsSignUp) {
      url = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${KEY}`;
    }

    axios
      .post(url, authData)
      .then((res) => {
        //console.log(res);
        localStorage.setItem("token", res.data.idToken);
        localStorage.setItem("userId", res.data.localId);

        const expirationDate = new Date(
          new Date().getTime() + res.data.expiresIn * 1000
        );

        localStorage.setItem("expirationDate", expirationDate);
        dispatch(authSuccess(res.data.idToken, res.data.localId));
        dispatch(authLogOutTimer(res.data.expiresIn));
      })
      .catch((err) => {
        dispatch(authFailed(err.response.data.error));
      });
  };
};

export const setAuthRedirectPath = (path) => {
  return {
    type: actionTypes.SET_AUTH_REDIRECT_PATH,
    path: path,
  };
};

export const authCheckState = () => {
  return (dispatch) => {
    const token = localStorage.getItem("token");
    const userId = localStorage.getItem("userId");
    if (!token) {
      // if token is null
      dispatch(authLogOut());
    } else {
      const expirationDate = new Date(localStorage.getItem("expirationDate")); //wrapping into date to get a date objt from a date Sstring
      if (expirationDate <= new Date()) {
        dispatch(authLogOut());
      } else {
        dispatch(authSuccess(token, userId));
        dispatch(
          authLogOutTimer(
            (expirationDate.getTime() - new Date().getTime()) / 1000
          )
        );
      }
    }
  };
};
