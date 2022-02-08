import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
    ordersArray: [],
    status: null
}

export const fetchOrders = createAsyncThunk(
    'orders/fetchOrdersStatus',
    async (dispatch, getState) => {
        return await fetch('http://localhost:3100/orders')
            .then((res) => res.json());
    }

)
export const deleteOrder = createAsyncThunk(
    'orders/deleteOrderStatus',
    async (id, getState) => {
        return await fetch(`http://localhost:3100/orders/${id}`, { method: 'DELETE' })
            .then((res) => res.json());
    }
)

export const postOrder = createAsyncThunk(
    'orders/postOrderStatus',
    async (order, getState) => {
        return await fetch('http://localhost:3100/orders', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(order)

        })
    }
)

export const ordersSlice = createSlice({
    name: 'orders',
    initialState,
    reducers: {

    },
    extraReducers: {
        [fetchOrders.pending]: (state, action) => {
            state.status = 'loading'
        },
        [fetchOrders.fulfilled]: (state, action) => {
            state.status = 'success';
            state.ordersArray = action.payload;
        },
        [fetchOrders.rejected]: (state, action) => {
            state.status = 'failed'
        },

        [postOrder.pending]: (state, action) => {
            state.status = 'loading'
        },
        [postOrder.fulfilled]: (state, action) => {
            state.status = 'success';
        },
        [postOrder.rejected]: (state, action) => {
            state.status = 'failed'
        }
    }
})

export const selectOrders = state => state.orders.ordersArray;

export default ordersSlice.reducer;