import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { GOODS_URL } from "../const.js";

export const fetchProduct = createAsyncThunk(
  "product/fetchProduct",
  async (id) => {
    const response = await fetch(`${GOODS_URL}/${id}`);
    return await response.json();
  }
);

const productSlice = createSlice({
  name: "product",
  initialState: {
    status: "idle",
    error: null,
    product: {},
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProduct.pending, (state) => {
        state.status = "loading";
        state.product = {};
      })
      .addCase(fetchProduct.fulfilled, (state, action) => {
        state.status = "success";
        state.product = action.payload;
      })
      .addCase(fetchProduct.rejected, (state, action) => {
        state.status = "failed";
        state.product = {};
        state.error = action.error.message;
      });
  },
});

export default productSlice.reducer;
