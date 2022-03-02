import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currentPage: 0,
};

const paginationSlice = createSlice({
  name: 'pagination',
  initialState,
  reducers: {
    updateCurrentPage: (state, action) => {
      switch (action.type) {
        case 'INCREMENT':
          return {
            currentPage: state.currentPage + 1,
          };
        case 'DECREMENT':
          return {
            currentPage: state.currentPage - 1,
          };
        default:
          return state;
      }
    },
  },
});

export const { updateCurrentPage } = paginationSlice.actions;

export const selectCurrentPage = (state) => state.pagination.currentPage;

export default paginationSlice.reducer;
