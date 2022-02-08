import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
    comment: '',
    status: null
}

export const postComment = createAsyncThunk(
    'orders/fetchOrderByIdStatus',
    async (payload, getState) => {

        return await fetch(`http://localhost:3100/orders/${payload.id}`, {
            method: 'PATCH',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({
                "comments": payload.currentComments
            })
        })
            .then((res) => res.json());
    }
)

export const commentSlice = createSlice({
    name: 'comment',
    initialState,
    reducers: {},
    extraReducers: {
        [postComment.pending]: (state, action) => {
            state.status = 'loading'
        },
        [postComment.fulfilled]: (state, action) => {
            state.status = 'success';
        },
        [postComment.rejected]: (state, action) => {
            state.status = 'failed'
        }
    }
})

export default commentSlice.reducer;