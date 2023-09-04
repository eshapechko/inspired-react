import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { COLORS_URL } from '../const.js';

export const fetchColors = createAsyncThunk(
  'color/fetchColors',
  async () => {
    const response = await fetch(COLORS_URL);
    return await response.json();
  }
)

const colorSlice = createSlice({
  name: 'color',
  initialState: {
    status: 'idle',
    colorList: [],
    error: null,
  },
  extraReducers: builder => {
    builder
      .addCase(fetchColors.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchColors.fulfilled, (state, action) => {
        state.status = 'success';
        state.colorList = action.payload;
      })
      .addCase(fetchColors.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  }
});

export default colorSlice.reducer;