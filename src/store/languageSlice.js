import { createSlice } from "@reduxjs/toolkit";

export const languageSlice = createSlice({
  name: "language",
  initialState: {
    language: "en",
  },
  reducers: {
    changeLanguage: (state, {payload}) => {
        // console.log(payload);
      state.language = payload;
    },
  },
});

export const languageReducer = languageSlice.reducer;
export const { changeLanguage } = languageSlice.actions;
export const selectLang = (state) => state.language;
