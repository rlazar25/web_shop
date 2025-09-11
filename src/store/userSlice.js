import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    firstName: "Lazar",
    lastName: "Radosavljevic",
    username: "kila",
    email: "laza123@gmail.com",
    password: 1212,
    isLogged: true,
  },
  reducers: {
    loginUser: (state, action) => {
      //   if (state.username === action.payload && state.email === action.payload) {
      // }
      state.isLogged = true;
    },
    logoutUser: (state, action) => {
      state.isLogged = false;
    },
    registerUser: (state, action) => {
      // state.firstName;
      // state.lastName;
      // state.username;
      // state.email;
      // state.password;
      state.isLogged = true;
    },
  },
});

export const { loginUser, logoutUser, registerUser } = userSlice.actions;
export default userSlice.reducer;
