import axios from "../../axios-order";
import * as actionTypes from "./actionTypes";

export const purchaseBurgerSuccess = (id, orderData) => {
    return ({
        type: actionTypes.PURCHASE_BURGER_SUCCESS,
        orderId: id,
        orderData: orderData
    });
}

export const purchaseBurgerFailure = (error) => {
    return ({
        type: actionTypes.PURCHASE_BURGER_FAILURE,
        error: error
    });
}

export const purchaseBurgerStart = () => {
    return ({
        type: actionTypes.PURCHASE_BURGER_START
    });
}
export const purchaseBurger = (orderData, token) => {
    return ((dispatch) => {
        dispatch(purchaseBurgerStart());
        axios.post(("/orders.json?auth=" + token), orderData)
            .then((response) => {
                dispatch(purchaseBurgerSuccess(response.data.name, orderData));
            })
            .catch((err) => {
                dispatch(purchaseBurgerFailure(err));
            });
    });
}
export const purchaseInit = () => {
    return ({
        type: actionTypes.PURCHASE_INIT
    });
}

export const fetchOrdersStart = () => {
    return ({
        type: actionTypes.FETCH_ORDERS_START
    });
}

export const fetchOrdersSuccess = (fetchedorderData) => {
    return ({
        type: actionTypes.FETCH_ORDERS_SUCCESS,
        orders: fetchedorderData
    });
}
export const fetchOrdersFail = (err) => {
    return ({
        type: actionTypes.PURCHASE_BURGER_FAILURE,
        error: err
    });
}

export const fetchOrders = (token, userId) => {
    return ((dispatch, getState) => {
        // alt methd can get token from getState().auth directly also;

        dispatch(fetchOrdersStart());
        let queryParams = '?auth=' + token + '&orderBy="userId"&equalTo="' + userId + '"';

        axios.get('/orders.json' + queryParams)   // the data received from db is in nested object fromat 
            .then((res) => {    //{ randomKey1:{orderDetails1}, randomKey2:{orderDetails2}}

                let fetchedorderData = []; //to store each order as an objt onto an array

                for (let key in res.data) { // to loop through each key to retrive orderdetails and key
                    fetchedorderData.push({ //spread and push object with key(recd from db) onto array.
                        ...res.data[key], // spread value from randomkey
                        id: key // add a new ppty with the random key as id
                    })
                }
                dispatch(fetchOrdersSuccess(fetchedorderData));
            })
            .catch((err) => {
                dispatch(fetchOrdersFail(err));
            })
    });
}