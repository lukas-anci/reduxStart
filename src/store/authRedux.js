import { createSlice } from '@reduxjs/toolkit';

const initAuthState = {
  isAuthenticated: false,
  user: {
    email: 'mike@tyson.com',
    password: 'secret',
  },
};

// authSlice
const authSlice = createSlice({
  name: 'authentication',
  initialState: initAuthState,
  reducers: {
    login(state, action) {
      // validate
      console.log(action.payload);
      console.log('state', initAuthState);
      if (initAuthState.user.email === action.payload.email) {
        state.isAuthenticated = true;
      }
    },
    logout(state) {
      state.isAuthenticated = false;
    },
  },
});

export const authActions = authSlice.actions;

export default authSlice.reducer;
