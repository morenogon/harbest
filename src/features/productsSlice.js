import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  productsList: [],
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    saveProduct: (state, action) => {
      state.productsList.push(action.payload);
    },
  },
});

export const { saveProduct } = productsSlice.actions;

export const selectProductsList = (state) => state.products.productsList;

export default productsSlice.reducer;
