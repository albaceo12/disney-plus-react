import { configureStore } from "@reduxjs/toolkit";
// import counterReducer from '../features/counter/counterSlice';
import moviereducer from "../features/movie/movieslice";
import userreducer from "../features/user/userslice";

export const store = configureStore({
  reducer: {
    movie: moviereducer,
    user: userreducer,
  },
});
