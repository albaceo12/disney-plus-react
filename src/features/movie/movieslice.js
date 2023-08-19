import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  popular: [],
  hollywood: [],
  newTo: [],
  kidsTv: [],
  original: [],
  trending: [],
};
const Movieslice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    setmovies: (state, action) => {
      state.popular = action.payload.popular;
      state.hollywood = action.payload.hollywood;
      state.newTo = action.payload.newTo;
      state.kidsTv = action.payload.kidsTv;
      state.original = action.payload.original;
      state.trending = action.payload.trending;
    },
  },
});
export const { setmovies } = Movieslice.actions;
export const selectpopular = (state) => state.movie.popular;
export const selecthollywood = (state) => state.movie.hollywood;
export const selectnewTo = (state) => state.movie.newTo;
export const selectkidsTv = (state) => state.movie.kidsTv;
export const selectoriginal = (state) => state.movie.original;
export const selecttrending = (state) => state.movie.trending;
export default Movieslice.reducer;
