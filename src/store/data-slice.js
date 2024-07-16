import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  countries: "",
  isLoading: false,
  error: false,
  filtered: "",
};

const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    updateData(state, action) {
      state.countries = action.payload.result;
    },
    updateLoading(state, action) {
      state.isLoading = action.payload;
    },
    updateError(state, action) {
      state.error = action.payload;
    },
    filterData(state, action) {
      state.filtered = state.countries.filter((item) => {
        return item.name.common
          .toLowerCase()
          .includes(action.payload.toLowerCase());
      });
    },
  },
});

export const dataActions = dataSlice.actions;

export default dataSlice.reducer;
