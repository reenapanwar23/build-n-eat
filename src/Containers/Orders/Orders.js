import React, { useEffect, useCallback } from "react";
import Order from "../../Components/Order/Order";
import classes from "./Orders.module.css";
import axios from "../../axios-order";
import withErrorHandler from "../../hoc/withErrorHandler/withErrorHandler";
import Spinner from "../../Components/UI/Spinner/Spinner";
import { useSelector, useDispatch } from "react-redux";
import * as actions from "../../store/actions/index";
import Layout from "../../Components/Layout/Layout";

//---------------- FUNCTIONAL APPROACH---------------------------------------------------------------------

const Orders = (props) => {
  const dispatch = useDispatch();

  const fetchOrdersHandler = useCallback(
    (token, userId) => dispatch(actions.fetchOrders(token, userId)),
    [dispatch]
  );

  const orders = useSelector((state) => {
    return state.order.orders;
  });
  const loading = useSelector((state) => {
    return state.order.loading;
  });
  const token = useSelector((state) => {
    return state.auth.token;
  });
  const userId = useSelector((state) => {
    return state.auth.userId;
  });
  // const { fetchOrdersHandler, token, userId } = props;
  useEffect(() => {
    fetchOrdersHandler(token, userId);
  }, [fetchOrdersHandler, token, userId]); //with [] works same as componentDidMount,ie will be executed only once after the component is mounted

  let ordersFetched = <Spinner />;
  if (!loading) {
    ordersFetched = orders.map((order) => (
      <Order
        key={order.id}
        ingredients={order.ingredients}
        price={order.price} //price is stored in string format, shall be covrtd to number
      /> //in Order component definition
    ));
  }
  return (
    <Layout>
      <div className={classes.orders}>{ordersFetched}</div>
    </Layout>
  );
};
export default withErrorHandler(Orders, axios);
