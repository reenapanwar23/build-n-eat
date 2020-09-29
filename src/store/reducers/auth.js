import * as actionTypes from "../actions/actionTypes";

const initialState = {
  userId: null,
  token: null,
  loading: false,
  error: null,
  authRedirectPath: "/build",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.AUTH_START:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case actionTypes.AUTH_SUCCESS:
      return {
        ...state,
        userId: action.userId,
        token: action.idToken,
        loading: false,
        error: null,
      };
    case actionTypes.AUTH_FAILED:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    case actionTypes.AUTH_LOGOUT:
      return {
        ...state,
        userId: null,
        token: null,
        loading: false,
        error: null,
      };

    case actionTypes.SET_AUTH_REDIRECT_PATH:
      return {
        ...state,
        authRedirectPath: action.path,
      };

    default:
      return state;
  }
};

export default reducer;
