import { configureStore } from "@reduxjs/toolkit";
import ordersSlice from "./reducers/ordersSlice";
import orderByIdSlice from "./reducers/orderByIdSlice";
import commentSlice from './reducers/commentSlice';
import searchOrderSlice from "./reducers/searchOrderSlice";
import sendOrderSlice from "./reducers/sendOrderSlice";

export const store = configureStore({
    reducer: {
        order: orderByIdSlice,
        orders: ordersSlice,
        comment: commentSlice,
        search: searchOrderSlice,
        sendedOrders: sendOrderSlice
    },

})