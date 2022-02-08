import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
    order: {},
    status: null
}

export const fetchOrderById = createAsyncThunk(
    'orders/fetchOrderByIdStatus',
    async (orderId, getState) => {
        return await fetch(`http://localhost:3100/orders/${orderId}`)
            .then((res) => res.json());
    }
)

export const orderByIdSlice = createSlice({
    name: 'order',
    initialState,
    reducers: {},
    extraReducers: {
        [fetchOrderById.pending]: (state, action) => {
            state.status = 'loading'
        },
        [fetchOrderById.fulfilled]: (state, action) => {
            state.status = 'success';
            state.order = action.payload;
        },
        [fetchOrderById.rejected]: (state, action) => {
            state.status = 'failed'
        }
    }
})

export const selectOrder = state => state.order.order;

export default orderByIdSlice.reducer;