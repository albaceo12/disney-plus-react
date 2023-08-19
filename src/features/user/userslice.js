import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  email: "",
  photo: "",
};
const userslice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setlogin: (state, action) => {
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.photo = action.payload.photo;
    },
    setsignout: (state) => {
      state.name = null;
      state.email = null;
      state.photo = null;
    },
  },
});
export const { setlogin, setsignout } = userslice.actions;
export const selectusername = (state) => state.user.name;
export const selectuseremail = (state) => state.user.email;
export const selectuserphoto = (state) => state.user.photo;
export default userslice.reducer;
