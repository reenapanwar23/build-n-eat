import React, { useEffect } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../../../store/actions/index";
import Layout from "../../../Components/Layout/Layout";

//---------------- FUNCTIONAL APPROACH---------------------------------------------------------------------

const Logout = (props) => {
  const { logout } = props;

  useEffect(() => {
    logout();
  }, [logout]);

  return (
    <Layout>
      <Redirect to="/build" />
    </Layout>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(actions.authLogOut()),
  };
};
export default connect(null, mapDispatchToProps)(Logout);
