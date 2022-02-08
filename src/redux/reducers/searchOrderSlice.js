import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    searchName: '',
}

export const searchOrderSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        saveSearchToken: (state, action) => {
            state.searchName = action.payload;
        }
    },

})

export const { saveSearchToken } = searchOrderSlice.actions;
export const selectSearchName = state => state.search.searchName;

export default searchOrderSlice.reducer;