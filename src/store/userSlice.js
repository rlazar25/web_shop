import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    user: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    },
    isLogged: false,
    showForms: true,
    userEditMenu: false,
  },
  reducers: {
    // login
    loginUser: (state) => {
      state.isLogged = true;
    },
    // logout
    logoutUser: (state) => {
      state.isLogged = false;
      state.userEditMenu = false;
    },
    // register
    registerUser: (state, action) => {
      state.user = action.payload;
      localStorage.setItem("user", JSON.stringify(action.payload));

      state.isLogged = true;
      state.showForms = true;
    },
    // restore user from localSorage
    restoreUser: (state, action) => {
      state.user = action.payload;
      state.isLogged = true;
    },
    // remove user
    removeUser: (state) => {
      localStorage.removeItem("user");
      state.isLogged = false;
      state.showForms = false;
      state.user = {};
      state.userEditMenu = false;
    },
    editUser: (state, action) => {
      // console.log(action.payload);
      localStorage.setItem("user", JSON.stringify(action.payload));
      state.user = action.payload;
      state.userEditMenu = false;
    },
    handleShowEdit: (state) => {
      state.userEditMenu = !state.userEditMenu;
    },
    // switch forms
    handleShowForms: (state) => {
      state.showForms = !state.showForms;
    },
  },
});

export const {
  loginUser,
  logoutUser,
  registerUser,
  handleShowForms,
  removeUser,
  restoreUser,
  editUser,
  handleShowEdit,
} = userSlice.actions;
export default userSlice.reducer;
