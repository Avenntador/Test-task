import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
    sendedOrders: [],
    status: null
}

export const fetchSendedOrders = createAsyncThunk(
    'orders/fetchSendedOrdersStatus',
    async (dispatch, getState) => {
        return await fetch('http://localhost:3100/sended-orders')
            .then((res) => res.json());
    }
)

export const sendOrder = createAsyncThunk(
    'orders/postOrderStatus',
    async (sendOrder, getState) => {
        return await fetch('http://localhost:3100/sended-orders', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(sendOrder)
        })
    }
)

export const sendOrderSlice = createSlice({
    name: 'sendedOrders',
    initialState,
    reducers: {},
    extraReducers: {
        [fetchSendedOrders.pending]: (state, action) => {
            state.status = 'loading'
        },
        [fetchSendedOrders.fulfilled]: (state, action) => {
            state.status = 'success';
            state.sendedOrders = action.payload;
        },
        [fetchSendedOrders.rejected]: (state, action) => {
            state.status = 'failed'
        },


        [sendOrder.pending]: (state, action) => {
            state.status = 'loading'
        },
        [sendOrder.fulfilled]: (state, action) => {
            state.status = 'success';
        },
        [sendOrder.rejected]: (state, action) => {
            state.status = 'failed'
        },
    }
})

export const selectSendedOrders = state => state.sendedOrders.sendedOrders;

export default sendOrderSlice.reducer;