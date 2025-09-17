import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    user: {
      firstName: "Lazar",
      lastName: "Radosavljevic",
      email: "test@example.us",
      password: "1212"
    },
    isLogged: false,
    showForms: true,
  },
  reducers: {
    loginUser: (state, action) => {
      state.isLogged = true;
    },
    logoutUser: (state, action) => {
      state.isLogged = false;
    },
    registerUser: (state, action) => {
      state.isLogged = true;
    },
    handleShowForms: (state, action) => {
      state.showForms = !state.showForms
    }
  },
});

export const { loginUser, logoutUser, registerUser, handleShowForms } = userSlice.actions;
export default userSlice.reducer;
