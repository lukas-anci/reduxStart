import { createSlice, configureStore } from '@reduxjs/toolkit';
import { createStore } from 'redux';

const initialCounterState = { counter: 0, showCounter: true };

// naudojant toolkit mes kuriam createSlice
const counterSlice = createSlice({
  name: 'counter',
  initialState: initialCounterState,
  reducers: {
    up(state) {
      state.counter++; // automatiskai paverciama i nemutuojancia sintakse naudojant immer
    },
    down(state) {
      state.counter--;
    },
    increase(state, action) {
      state.counter = state.counter + action.payload;
    },
    toggle(state) {
      state.showCounter = !state.showCounter;
    },
  },
});
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

// reducer fn
// const counterReducer = (state = initialCounterState, action) => {
//   switch (action.type) {
//     case 'UP':
//       return {
//         counter: state.counter + 1,
//         showCounter: state.showCounter,
//       };
//     case 'DOWN':
//       return {
//         counter: state.counter - 1,
//         showCounter: state.showCounter,
//       };
//     case 'UP_BY':
//       return {
//         counter: state.counter + action.amount,
//         showCounter: state.showCounter,
//       };
//     case 'TOGGLE':
//       return {
//         counter: state.counter,
//         showCounter: !state.showCounter,
//       };

//     default:
//       return state;
//   }
// };
// store
// const store = createStore(counterReducer);

// export store for use
const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    auth: authSlice.reducer,
  },
});
// console.log(counterSlice.actions); // visi musu aprasyti veiksmai
export const counterActions = counterSlice.actions;

export const authActions = authSlice.actions;

export default store;
